using ChessHub.Models.Dtos;
using ChessHub.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessHub.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        private readonly IGameService _gameService;
        private readonly IUserService _userService;

        public GameController(IGameService gameService, IUserService userService)
        {
            _gameService = gameService;
            _userService = userService;
        }

        [HttpGet]
        public IActionResult GetGames()
        {
            List<GameDto> games = _gameService.GetGames();

            if(games.Count == 0)
            {
                return NotFound();
            } else
            {
                return Ok(games);
            }
        }

        [HttpGet]
        public IActionResult GetGame(UserDto whitePlayer, UserDto blackPlayer, DateTime gameStart)
        {
            GameDto game = _gameService.GetGame(whitePlayer, blackPlayer, gameStart);

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
        public IActionResult AddGame([FromBody] GameDto game)
        {
            GameDto addedGame = _gameService.AddGame(game);

            if(addedGame == null)
            {
                return BadRequest();
            } else
            {
                return CreatedAtAction(nameof(GetGame), addedGame);
            }
        }

        [HttpPut]
        public IActionResult EditGame(UserDto whitePlayer, UserDto blackPlayer, DateTime startTime, [FromBody] GameDto newData)
        {
            GameDto updatedGame = _gameService.EditGame(whitePlayer, blackPlayer, startTime, newData);

            if(updatedGame == null)
            {
                return BadRequest();
            } else
            {
                return Ok(updatedGame);
            }
        }

        [HttpDelete]
        public IActionResult DeleteGame(UserDto whitePlayer, UserDto blackPlayer, DateTime startTime)
        {
            GameDto deletedGame = _gameService.RemoveGame(whitePlayer, blackPlayer, startTime);

            if(deletedGame == null)
            {
                return BadRequest();
            } else
            {
                return Ok(deletedGame);
            }
        }

        [HttpGet("{email}")]
        public IActionResult GetGamesByPlayer(string email)
        {
            UserDto user = _userService.GetUser(email);

            if(user == null)
            {
                return BadRequest();
            }

            List<GameDto> games = _gameService.GetGamesByUser(user);

            if(games.Count == 0)
            {
                return NotFound();
            } else
            {
                return Ok(games);
            }
        }
    }
}
