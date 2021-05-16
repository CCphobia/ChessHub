"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/game").build();

//Disable send button until connection is established
document.getElementById("sendChat").disabled = true;
document.getElementById("sendMove").disabled = true;

connection.start().then(function () {
    document.getElementById("sendChat").disabled = false;
    document.getElementById("sendMove").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("joinRoom").addEventListener("click", function (event) {
    var room = document.getElementById("roomInput").value;
    connection.invoke("JoinRoom", room).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});

connection.on("ReceiveMessage", function (user, message) {
    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var encodedMsg = user + " says " + msg;
    var li = document.createElement("li");
    li.textContent = encodedMsg;
    document.getElementById("messagesList").appendChild(li);
});

connection.on("ReceiveMove", function (user, move) {
    var encodedMove = user + " move " + move;
    var li = document.createElement("li");
    li.textContent = encodedMove;
    document.getElementById("movesList").appendChild(li);
});

document.getElementById("sendChat").addEventListener("click", function (event) {
    var user = document.getElementById("userInput").value;
    var room = document.getElementById("roomInput").value;
    var message = document.getElementById("messageInput").value;
    connection.invoke("SendMessage",room, user, message).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});

document.getElementById("sendMove").addEventListener("click", function (event) {
    var player = document.getElementById("player").value;
    var move = document.getElementById("userMove").value;
    var room = document.getElementById("roomInput").value;
    connection.invoke("SendMove", room, player, move).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});