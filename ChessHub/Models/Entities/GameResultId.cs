using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessHub.Entities
{
    public enum GameResultId : int
    {
        Black = 0,
        White = 1,
        Pat = 2,
        Ongoing = 3,
        NotStarted = 4
    }
}
