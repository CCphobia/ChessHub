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
        Game RemoveGame(User ownerPlayer, DateTime startTime);
        Game EditGame(User ownerPlayer, GameResultId gameResultId, Game newData);
        Game GetGame(string ownerPlayer);
        Game GetNotGoingGame(User ownerPlayer);
        List<Game> GetGames();
        List<Game> GetNotStartedGames();
        List<Game> GetGamesByUser(User player);
    }
}
