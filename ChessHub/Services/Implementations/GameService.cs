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
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public GameService(IGameRepository gameRepository, IUserRepository userRepository, IMapper mapper)
        {
            _gameRepository = gameRepository;
            _userRepository = userRepository;
            _mapper = mapper;
        }

        public GameDto AddGame(GameDto game)
        {
            Game gameEntity = _mapper.Map<Game>(game);
            Random rng = new Random();
            User user = _userRepository.GetUser(game.OwnerPlayer.Email);
            if (rng.Next(2) == 1)
            {
                gameEntity.WhitePlayer = user;
            }
            else
            {
                gameEntity.BlackPlayer = user;
            }
            gameEntity.OwnerPlayer = user;
            gameEntity = _gameRepository.AddGame(gameEntity);
            return _mapper.Map<GameDto>(gameEntity);
        }

        public GameDto EditGame(UserDto ownerPlayer, GameResultId GameResult, GameDto newData)
        {
            Game newEntityData = _mapper.Map<Game>(newData);
            newEntityData.OwnerPlayer = _userRepository.GetUser(newEntityData.OwnerPlayer.Email);
            newEntityData.BlackPlayer = _userRepository.GetUser(newEntityData.BlackPlayer.Email);
            newEntityData.WhitePlayer = _userRepository.GetUser(newEntityData.WhitePlayer.Email);
            try
            {
                Game editedGame = _gameRepository.EditGame(newEntityData.OwnerPlayer, GameResult, newEntityData);
                return _mapper.Map<GameDto>(editedGame);

            } catch(Exception e)
            {
                Console.WriteLine(e.Message);
                return null;
            }
        }

        public GameDto GetGame(UserDto ownerPlayer, DateTime startTime)
        {
            User ownerPlayerEntity = _mapper.Map<User>(ownerPlayer);

            Game game = _gameRepository.GetGame(ownerPlayerEntity, startTime);

            return _mapper.Map<GameDto>(game);
        }

        public GameDto GetNotGoingGame(UserDto ownerPlayer)
        {
            User ownerPlayerEntity = _userRepository.GetUser(ownerPlayer.Email);

            Game game = _gameRepository.GetNotGoingGame(ownerPlayerEntity);

            return _mapper.Map<GameDto>(game);
        }

        public List<GameDto> GetGames()
        {
            return _mapper.Map<List<GameDto>>(_gameRepository.GetGames());
        }

        public List<GameDto> GetNotStartedGames()
        {
            List<Game> games = _gameRepository.GetNotStartedGames();
            return _mapper.Map<List<GameDto>>(games);
        }

        public List<GameDto> GetGamesByUser(UserDto player)
        {
            return _mapper.Map<List<GameDto>>(_gameRepository.GetGamesByUser(_mapper.Map<User>(player)));
        }

        public GameDto RemoveGame(UserDto ownerPlayer, DateTime startTime)
        {
            User ownerPlayerEntity = _mapper.Map<User>(ownerPlayer);

            Game game = _gameRepository.RemoveGame(ownerPlayerEntity, startTime);

            return _mapper.Map<GameDto>(game);
        }
    }
}
