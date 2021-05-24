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
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UserService(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        public UserDto AddUser(UserDto user)
        {
            User userEntity = _mapper.Map<User>(user);

            userEntity = _userRepository.AddUser(userEntity);

            return _mapper.Map<UserDto>(userEntity);
        }

        public UserDto EditUser(string email, UserDto newData)
        {
            User newEntityData = _mapper.Map<User>(newData);

            try
            {
                User editedUser = _userRepository.EditUser(email, newEntityData);
                return _mapper.Map<UserDto>(editedUser);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return null;
            }
        }

        public UserDto GetUser(string email)
        {
            return _mapper.Map<UserDto>(_userRepository.GetUser(email));
        }

        public List<UserDto> GetUsers()
        {
            return _mapper.Map<List<UserDto>>(_userRepository.GetUsers());
        }

        public UserDto RemoveUser(string email)
        {
            return _mapper.Map<UserDto>(_userRepository.RemoveUser(email));
        }
    }
}
