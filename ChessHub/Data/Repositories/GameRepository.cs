﻿using ChessHub.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessHub.Data.Repositories
{
    public class GameRepository : IGameRepository
    {
        private readonly ChessHubDbContext _chessHubDbContext;

        public GameRepository(ChessHubDbContext chessHubDbContext)
        {
            _chessHubDbContext = chessHubDbContext;
        }

        public Game AddGame(Game game)
        {
            _chessHubDbContext.Games.Add(game);
            _chessHubDbContext.SaveChanges();

            return game;
        }

        public Game EditGame(User ownerPlayer, GameResultId gameResultId, Game newData)
        {
            Game game = _chessHubDbContext.Games.FirstOrDefault(game =>
                game.OwnerPlayer.Equals(ownerPlayer) && game.GameResultId.Equals(gameResultId));

            game.OwnerPlayer = newData.OwnerPlayer;
            game.WhitePlayer = newData.WhitePlayer;
            game.BlackPlayer = newData.BlackPlayer;
            game.GameResultId = newData.GameResultId;
            game.Moves = newData.Moves;
            game.MovesCounter = newData.MovesCounter;
            game.StartTime = newData.StartTime;
            game.EndTime = newData.EndTime;

            _chessHubDbContext.SaveChanges();

            return game;
        }

        public Game GetGame(User ownerPlayer, DateTime startTime)
        {
            return _chessHubDbContext.Games.FirstOrDefault(game =>
                game.OwnerPlayer.Equals(ownerPlayer) && game.StartTime.Equals(startTime));
        }

        public Game GetNotGoingGame(User ownerPlayer)
        {
            var games = _chessHubDbContext.Games.Include(x => x.OwnerPlayer).ToList();
            return games.Where(game => game.OwnerPlayer.Equals(ownerPlayer) && game.GameResultId.Equals(GameResultId.NotStarted)).FirstOrDefault();
        }

        public List<Game> GetGames()
        {
            return _chessHubDbContext.Games.ToList();
        }

        public List<Game> GetNotStartedGames()
        {
            return _chessHubDbContext.Games.Where(x => x.GameResultId == GameResultId.NotStarted).Include(x => x.OwnerPlayer).ToList();
        }

        public List<Game> GetGamesByUser(User player)
        {
            return _chessHubDbContext.Games
                .Where(g => g.BlackPlayer.Equals(player) || g.WhitePlayer.Equals(player))
                .ToList();
        }

        public Game RemoveGame(User ownerPlayer, DateTime startTime)
        {
            Game game = _chessHubDbContext.Games.FirstOrDefault(game =>
                game.OwnerPlayer.Equals(ownerPlayer) && game.StartTime.Equals(startTime));

            _chessHubDbContext.Games.Remove(game);
            _chessHubDbContext.SaveChanges();

            return game;
        }
    }
}
