using ChessHub.Entities;
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

        public Game EditGame(User whitePlayer, User blackPlayer, Game newData, DateTime startTime)
        {
            Game game = _chessHubDbContext.Games.FirstOrDefault(game =>
                game.WhitePlayer.Equals(whitePlayer) && game.BlackPlayer.Equals(blackPlayer) && game.StartTime.Equals(startTime);

            game.WhitePlayer = newData.WhitePlayer;
            game.BlackPlayer = newData.BlackPlayer;
            game.GameResult = newData.GameResult;
            game.Moves = newData.Moves;
            game.MovesCounter = newData.MovesCounter;
            game.StartTime = newData.StartTime;
            game.EndTime = newData.EndTime;

            _chessHubDbContext.SaveChanges();

            return game;
        }

        public Game GetGame(User whitePlayer, User blackPlayer, DateTime startTime)
        {
            return _chessHubDbContext.Games.FirstOrDefault(game =>
                game.WhitePlayer.Equals(whitePlayer) && game.BlackPlayer.Equals(blackPlayer) && game.StartTime.Equals(startTime);
        }

        public List<Game> GetGames()
        {
            return _chessHubDbContext.Games.ToList();
        }

        public List<Game> GetGamesByUser(User player)
        {
            return _chessHubDbContext.Games
                .Where(g => g.BlackPlayer.Equals(player) || g.WhitePlayer.Equals(player))
                .ToList();
        }

        public Game RemoveGame(User whitePlayer, User blackPlayer, DateTime startTime)
        {
            Game game = _chessHubDbContext.Games.FirstOrDefault(game =>
                game.WhitePlayer.Equals(whitePlayer) && game.BlackPlayer.Equals(blackPlayer) && game.StartTime.Equals(startTime);

            _chessHubDbContext.Games.Remove(game);
            _chessHubDbContext.SaveChanges();

            return game;
        }
    }
}
