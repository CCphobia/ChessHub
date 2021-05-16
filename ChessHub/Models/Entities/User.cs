using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ChessHub.Entities
{
    public class User
    {
        public int UserId { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public int Rank { get; set; }
        [InverseProperty("WhitePlayer")]
        public virtual ICollection<Game> WhiteGames { get; set; }
        [InverseProperty("BlackPlayer")]
        public virtual ICollection<Game> BlackGames { get; set; }

    }
}
