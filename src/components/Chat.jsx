import React, { useContext } from "react";
import {
  VideoCameraOutlined,
  UserAddOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import Input from "./Input";
import Messages from "./Messages";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <VideoCameraOutlined
            style={{
              marginRight: "14px",
              fontSize: "20px",
              color: "#ddddf7",
              cursor: "pointer",
            }}
          />
          <UserAddOutlined
            style={{
              marginRight: "14px",
              fontSize: "20px",
              color: "#ddddf7",
              cursor: "pointer",
            }}
          />
          <MoreOutlined
            style={{
              marginRight: "12px",
              fontSize: "20px",
              color: "#ddddf7",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
