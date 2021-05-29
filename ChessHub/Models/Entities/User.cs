using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ChessHub.Entities
{
    public class User : IdentityUser
    {
        public int Rank { get; set; }
        [InverseProperty("WhitePlayer")]
        public virtual ICollection<Game> WhiteGames { get; set; }
        [InverseProperty("BlackPlayer")]
        public virtual ICollection<Game> BlackGames { get; set; }

    }
}
