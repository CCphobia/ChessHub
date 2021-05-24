using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessHub.Models.Entities
{
    public class ChatMessage
    {
        public ChatMessage(string user, string message, string room)
        {
            this.User = user;
            this.Message = message;
            this.Room = room;
        }
        public string User { get; set; }

        public string Message { get; set; }

        public string Room { get; set; }
    }
}
