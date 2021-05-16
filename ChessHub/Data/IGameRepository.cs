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
        Game RemoveGame(User whitePlayer, User blackPlayer);
        Game EditGame(User whitePlayer, User blackPlayer, Game newData);
        Game GetGame(User whitePlayer, User blackPlayer);
        List<Game> GetGames();
    }
}
