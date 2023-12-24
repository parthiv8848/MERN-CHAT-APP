import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chat, setChat] = useState([]);

  const fetchChats = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/chat");
      setChat(response.data);
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
  {
         chat.map((chat)=>(
          <div key={chat._id}> {chat.chatName} </div>
         ))


  }
    </div>
  );
};

export default ChatPage;
