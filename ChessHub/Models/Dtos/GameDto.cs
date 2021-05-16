using ChessHub.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessHub.Models.Dtos
{
    public class GameDto
    {
        public GameResult GameResult { get; set; }
        public int MovesCounter { get; set; }
        public string Moves { get; set; }
        public virtual UserDto WhitePlayer { get; set; }
        public virtual UserDto BlackPlayer { get; set; }
    }
}
