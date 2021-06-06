
import React, { useState, useEffect, useRef } from 'react';
import authService from './api-authorization/AuthorizeService';
import ChatWindow from './chat-components/ChatWindow';
import ChatInput from './chat-components/ChatInput';

const Chat = (props) => {
    const ownername = props.ownerName;
    const connection = props.connection;
    const [chat, setChat] = useState([]);
    const latestChat = useRef(null);

    latestChat.current = chat;

    useEffect(() => {
        if (connection) {
            connection.on('ReceiveMessage', message => {
                        const updatedChat = [...latestChat.current];
                        updatedChat.push(message);
                        setChat(updatedChat);
                    });
        }
    }, [connection]);

    const sendMessage = async (message) => {
        const user = await authService.getUser();
        const chatMessage = {
            user: user.name,
            message: message,
            room: ownername
        };

        if (connection.connectionStarted) {
            try {
                await connection.send('SendMessage', chatMessage);
            }
            catch (e) {
                console.log(e);
            }
        }
        else {
            alert('No connection to server yet.');
        }
    }

    return (
        <div>
            <ChatWindow chat={chat} />
            <hr />
            <ChatInput sendMessage={sendMessage} />
        </div>
    );
};
export default Chat;