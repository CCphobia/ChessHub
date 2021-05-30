using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessHub.Entities
{
    public class Game
    {
        public int GameId { get; set; }
        public GameResultId GameResultId { get; set; }
        //public GameResult GameResult { get; set; }
        public int MovesCounter { get; set; }
        public string Moves { get; set; }
        public virtual User OwnerPlayer { get; set; }
        public virtual User WhitePlayer { get; set; }
        public virtual User BlackPlayer { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
    }
}
