//HOOKS
import React, { useState, useEffect } from "react";

//LIBRARYS
import io from "socket.io-client";

//COMPONENTS
import SendButton from "../components/SendButton"

//CONSTANTS
const socket = io(`/`);

function ChatContainer({ user }) {
  const idUser = user;
  const [sms, setSms] = useState({
    data: "",
    idUser,
  });
  const [messages, setMessages] = useState([]);

  const reciveMessage = (message) => {
    setMessages((state) => [...state, message]);
  };

  const smsHandleChange = (event) => {
    setSms({
      ...sms,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      body: sms.data,
      from: "Me",
      idUser: sms.idUser,
    };
    setMessages([...messages, newMessage]);
    socket.emit("message", newMessage);
    setSms({
      ...sms,
      data: "",
    });
  };

  useEffect(() => {
    socket.on("message", (message) => {
      reciveMessage(message);
    });
    return () => {
      socket.off("message");
    };
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="data"
          value={sms.data}
          placeholder="Write your message..."
          onChange={smsHandleChange}
        />
        <button>Send</button>
      </form>

      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            {message.idUser} : {message.body}
          </li>
        ))}
      </ul>
      {/* <SendButton /> */}
    </>
  )
};

export default ChatContainer
