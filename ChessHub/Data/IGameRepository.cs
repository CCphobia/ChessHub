using ChessHub.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessHub.Data
{
    public interface IGameRepository
    {
        Game AddGame(Game game);
        Game RemoveGame(User whitePlayer, User blackPlayer, DateTime startTime);
        Game EditGame(User whitePlayer, User blackPlayer, Game newData, DateTime startTime);
        Game GetGame(User whitePlayer, User blackPlayer, DateTime startTime);
        List<Game> GetGames();
        List<Game> GetGamesByUser(User player);
    }
}
