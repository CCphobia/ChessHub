using ChessHub.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessHub.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ChessHubDbContext _chessHubDbContext;

        public UserRepository(ChessHubDbContext chessHubDbContext)
        {
            _chessHubDbContext = chessHubDbContext;
        }

        public User AddUser(User user)
        {
            _chessHubDbContext.Users.Add(user);
            _chessHubDbContext.SaveChanges();

            return user;
        }

        public User EditUser(string email, User newData)
        {
            User user = _chessHubDbContext.Users.FirstOrDefault(user => user.Email.Equals(email));

            user.BlackGames = newData.BlackGames;
            user.Email = newData.Email;
            user.Login = newData.Login;
            user.Password = newData.Password;
            user.Rank = newData.Rank;
            user.WhiteGames = newData.WhiteGames;

            _chessHubDbContext.SaveChanges();

            return user;
        }

        public User GetUser(string email)
        {
            return _chessHubDbContext.Users.FirstOrDefault(user => user.Email.Equals(email));
        }

        public List<User> GetUsers()
        {
            return _chessHubDbContext.Users.ToList();
        }

        public User RemoveUser(string email)
        {
            User user = _chessHubDbContext.Users.FirstOrDefault(user => user.Email.Equals(email));

            _chessHubDbContext.Users.Remove(user);
            _chessHubDbContext.SaveChanges();

            return user;
        }
    }
}
