
﻿using ChessHub.Models.Dtos;
using ChessHub.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;
using ChessHub.Entities;

namespace ChessHub.Controllers
{
    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        private readonly IGameService _gameService;
        private readonly IUserService _userService;
        private readonly ILogger<GameController> _logger;

        public GameController(IGameService gameService, IUserService userService, ILogger<GameController> logger)
        {

            _logger = logger;
            _gameService = gameService;
            _userService = userService;
        }

        [HttpGet]
        [Route("GetNotStartedGames")]
        public IActionResult GetNotStartedGames()
        {
            List<GameDto> games = _gameService.GetNotStartedGames();
            return Ok(games);
        }

        [HttpGet]
        public IActionResult GetGames()
        {
            List<GameDto> games = _gameService.GetGames();

            if (games.Count == 0)
            {
                return NotFound();
            }
            else
            {
                return Ok(games);
            }
        }

        [HttpGet]
        [Route("GetInitialGame/{ownerPlayerEmail?}")]
        public IActionResult GetGame(string ownerPlayerEmail)
        {
            GameDto game = _gameService.GetGame(ownerPlayerEmail);

            if (game == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(game);
            }
        }

        [HttpPost]
        [Route("AddGame")]
        public IActionResult AddGame([FromBody] GameDto game)
        {
            game.StartTime = DateTime.Now;
            GameDto addedGame = _gameService.AddGame(game);

            if (addedGame == null)
            {
                return BadRequest();
            }
            else
            {
                return CreatedAtAction(nameof(GetGame), addedGame);
            }
        }

        [HttpPut]
        public IActionResult EditGame( string ownerPlayerName, [FromBody] GameDto newData)
        {
            DateTime startTime = DateTime.Now;//doesnt work
            UserDto ownerPlayer = _userService.GetUser(ownerPlayerName);
            GameDto updatedGame = _gameService.EditGame(ownerPlayer, GameResultId.Black, newData);

            if (updatedGame == null)
            {
                return BadRequest();
            }
            else
            {
                return Ok(updatedGame);
            }
        }

        [HttpPut]
        [Route("JoinPlayer/{ownerPlayerName?}")]
        public IActionResult JoinPlayer(string ownerPlayerName, [FromBody] UserDto joiningPlayer)
        {

            UserDto OwnerPlayer = _userService.GetUser(ownerPlayerName);
            UserDto FullJoiningPlayer = _userService.GetUser(joiningPlayer.Email);
            GameDto Game = _gameService.GetNotGoingGame(OwnerPlayer);
            if(Game.BlackPlayer == null)
            {
                Game.BlackPlayer = FullJoiningPlayer;
            }else if(Game.WhitePlayer == null)
            {
                Game.WhitePlayer = FullJoiningPlayer;
            }
            else
            {
                return Problem("do tej gry dołączyli już gracze");
            }

            if(Game.GameResultId == GameResultId.NotStarted)
            {
                Game.GameResultId = GameResultId.Ongoing;
            }
            else
            {
                return Problem("ta gra już się rozpoczeła");
            }
            GameDto updatedGame = _gameService.EditGame(OwnerPlayer, GameResultId.NotStarted, Game);

            if (updatedGame == null)
            {
                return BadRequest();
            }
            else
            {
                return Ok(updatedGame);
            }
        }


        [HttpDelete]
        public IActionResult DeleteGame(UserDto ownerPlayer)
        {
            DateTime startTime = DateTime.Now;//doesnt work
            GameDto deletedGame = _gameService.RemoveGame(ownerPlayer, startTime);

            if (deletedGame == null)
            {
                return BadRequest();
            }
            else
            {
                return Ok(deletedGame);
            }
        }

        [HttpGet("{email}")]
        public IActionResult GetGamesByPlayer(string email)
        {
            UserDto user = _userService.GetUser(email);

            if (user == null)
            {
                return BadRequest();
            }

            List<GameDto> games = _gameService.GetGamesByUser(user);

            if (games.Count == 0)
            {
                return NotFound();
            }
            else
            {
                return Ok(games);
            }
        }
    }
}