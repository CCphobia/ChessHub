using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChessHub.Models.Entities;
using Microsoft.AspNetCore.SignalR;

namespace ChessHub.Hubs
{
    public class GameHub : Hub
    {
        //gracz klikając stwórz pokój uruchamia tą funkcje tworząc pokój o nazwie własnego loginu

       
        //gracz klikając dołącz dołącza do pokoju o nazwie widocznej przy dołącz
        public override async Task OnConnectedAsync()
        {
            await CreateRoom("1");
        }
        public async Task CreateRoom(string room)
        {
            //dodaj do bazy danych pokój
            await this.JoinRoom(room);
        }
        public async Task JoinRoom(string room)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, room);
        }


        public async Task SendMessage(ChatMessage message)
        {
            await Clients.Group(message.Room).SendAsync("ReceiveMessage",message);
        }

        //public async Task SendMove(string room, string player, string move)
        //{
        //    await Clients.Group(room).SendAsync("ReceiveMove", player, move);
        //}


    }
}
