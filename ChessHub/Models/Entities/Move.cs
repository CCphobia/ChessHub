using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessHub.Models.Entities
{
    public class Move
    {
        public Move(int oldRow, int oldColumn, int newRow, int newColumn, string room)
        {
            this.OldRow = oldRow;
            this.OldColumn = oldColumn;
            this.NewRow = newRow;
            this.NewColumn = newColumn;
            this.Room = room;
        }
        public int OldRow { get; set; }

        public int OldColumn { get; set; }

        public int NewRow { get; set; }

        public int NewColumn { get; set; }

        public string Room { get; set; }
    }
}
