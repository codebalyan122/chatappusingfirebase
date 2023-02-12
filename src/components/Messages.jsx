import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";

import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      console.log(doc.data()?.messages);
      doc.exists() && setMessages(doc.data()?.messages);
    });
    return () => {
      unsub();
    };
  }, [data.chatId]);

  return (
    <div className="messages">
      {messages.map((message) => {
        return <Message message={message} key={message.id} />;
      })}
    </div>
  );
};

export default Messages;
