using ChessHub.Entities;
using ChessHub.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessHub.Services
{
    public interface IGameService
    {
        GameDto AddGame(GameDto game);
        GameDto RemoveGame(UserDto ownerPlayer, DateTime startTime);
        GameDto EditGame(UserDto ownerPlayer, GameResultId gameResultId, GameDto newData);
        GameDto GetGame(string ownerPlayer);
        GameDto GetNotGoingGame(UserDto ownerPlayer);
        List<GameDto> GetGames();
        List<GameDto> GetNotStartedGames();
        List<GameDto> GetGamesByUser(UserDto player);
    }
}
