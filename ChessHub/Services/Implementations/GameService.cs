using AutoMapper;
using ChessHub.Data;
using ChessHub.Entities;
using ChessHub.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessHub.Services.Implementations
{
    public class GameService : IGameService
    {
        private readonly IGameRepository _gameRepository;
        private readonly IMapper _mapper;

        public GameService(IGameRepository gameRepository, IMapper mapper)
        {
            _gameRepository = gameRepository;
            _mapper = mapper;
        }

        public GameDto AddGame(GameDto game)
        {
            Game gameEntity = _mapper.Map<Game>(game);

            gameEntity = _gameRepository.AddGame(gameEntity);

            return _mapper.Map<GameDto>(gameEntity);
        }

        public GameDto EditGame(UserDto whitePlayer, UserDto blackPlayer, GameDto newData)
        {
            Game newEntityData = _mapper.Map<Game>(newData);
            User whitePlayerEntity = _mapper.Map<User>(whitePlayer);
            User blackPlayerEntity = _mapper.Map<User>(blackPlayer);

            try
            {
                Game editedGame = _gameRepository.EditGame(whitePlayerEntity, blackPlayerEntity, newEntityData);
                return _mapper.Map<GameDto>(editedGame);

            } catch(Exception e)
            {
                Console.WriteLine(e.Message);
                return null;
            }
        }

        public GameDto GetGame(UserDto whitePlayer, UserDto blackPlayer)
        {
            User whitePlayerEntity = _mapper.Map<User>(whitePlayer);
            User blackPlayerEntity = _mapper.Map<User>(blackPlayer);

            Game game = _gameRepository.GetGame(whitePlayerEntity, blackPlayerEntity);

            return _mapper.Map<GameDto>(game);
        }

        public List<GameDto> GetGames()
        {
            return _mapper.Map<List<GameDto>>(_gameRepository.GetGames());
        }

        public GameDto RemoveGame(UserDto whitePlayer, UserDto blackPlayer)
        {
            User whitePlayerEntity = _mapper.Map<User>(whitePlayer);
            User blackPlayerEntity = _mapper.Map<User>(blackPlayer);

            Game game = _gameRepository.RemoveGame(whitePlayerEntity, blackPlayerEntity);

            return _mapper.Map<GameDto>(game);
        }
    }
}
