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
        GameDto RemoveGame(UserDto whitePlayer, UserDto blackPlayer);
        GameDto EditGame(UserDto whitePlayer, UserDto blackPlayer, GameDto newData);
        GameDto GetGame(UserDto whitePlayer, UserDto blackPlayer);
        List<GameDto> GetGames();
    }
}
