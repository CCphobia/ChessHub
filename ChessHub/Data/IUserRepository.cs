using ChessHub.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessHub.Data
{
    public interface IUserRepository
    {
        User AddUser(User user);
        User RemoveUser(string email);
        User EditUser(string email, User newData);
        User GetUser(string email);
        List<User> GetUsers();
    }
}
