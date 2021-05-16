using ChessHub.Entities;
using ChessHub.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessHub.Services
{
    public interface IUserService
    {
        UserDto AddUser(UserDto user);
        UserDto RemoveUser(string email);
        UserDto EditUser(string email, UserDto newData);
        UserDto GetUser(string email);
        List<UserDto> GetUsers();
    }
}
