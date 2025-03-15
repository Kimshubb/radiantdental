import React from "react";
import { Popup } from "@typebot.io/react";

const TypebotChat = () => {
  return (
    <Popup 
      typebot="my-typebot-kudsg51" 
      apiHost="https://typebot.io"
      trigger={{ type: "button", text: "Chat with us", style: { backgroundColor: "#0042DA", color: "#fff" } }}
    />
  );
};

export default TypebotChat;
