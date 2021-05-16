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

        public Game EditGame(User whitePlayer, User blackPlayer, Game newData)
        {
            Game game = _chessHubDbContext.Games.FirstOrDefault(game =>
                game.WhitePlayer.Equals(whitePlayer) && game.BlackPlayer.Equals(blackPlayer));

            game.WhitePlayer = newData.WhitePlayer;
            game.BlackPlayer = newData.BlackPlayer;
            game.GameResult = newData.GameResult;
            game.Moves = newData.Moves;
            game.MovesCounter = newData.MovesCounter;

            _chessHubDbContext.SaveChanges();

            return game;
        }

        public Game GetGame(User whitePlayer, User blackPlayer)
        {
            return _chessHubDbContext.Games.FirstOrDefault(game =>
                game.WhitePlayer.Equals(whitePlayer) && game.BlackPlayer.Equals(blackPlayer));
        }

        public List<Game> GetGames()
        {
            return _chessHubDbContext.Games.ToList();
        }

        public Game RemoveGame(User whitePlayer, User blackPlayer)
        {
            Game game = _chessHubDbContext.Games.FirstOrDefault(game =>
                game.WhitePlayer.Equals(whitePlayer) && game.BlackPlayer.Equals(blackPlayer));

            _chessHubDbContext.Games.Remove(game);
            _chessHubDbContext.SaveChanges();

            return game;
        }
    }
}
