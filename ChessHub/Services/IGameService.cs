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
        GameDto RemoveGame(UserDto whitePlayer, UserDto blackPlayer, DateTime startTime);
        GameDto EditGame(UserDto whitePlayer, UserDto blackPlayer, DateTime startTime, GameDto newData);
        GameDto GetGame(UserDto whitePlayer, UserDto blackPlayer, DateTime startTime);
        List<GameDto> GetGames();
        List<GameDto> GetGamesByUser(UserDto player);
    }
}
