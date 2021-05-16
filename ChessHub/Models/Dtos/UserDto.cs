using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessHub.Models.Dtos
{
    public class UserDto
    {
        public string Login { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public int Rank { get; set; }
        public ICollection<GameDto> Games { get; set; }
    }
}
