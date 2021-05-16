using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessHub.Entities
{
    public class GameResult
    {
        public GameResultId GameResultId { get; set; }
        public string Name { get; set; }

        public List<Game> Games { get; set; }
    }
}
