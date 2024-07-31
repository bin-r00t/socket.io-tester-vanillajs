import { addMessage, addImageMessage } from "./doms.js";
import E from "@/events";

let log = (args) => console.log(`[*] ${args}`);

export default function setupWs(io) {
  io.on("disconnect", () => {
    addMessage("disconnect");
  });
  io.on("connect", () => {
    addMessage("connected");
  });
  io.on(E.WaitingForAdmin, () => {
    // waiting for admin to join
  });
  io.on(E.AdminJoin, () => {
    // admin joined
    addMessage("Admin Join");
  });
  io.on(E.AdminLeave, () => {
    // admin leaved
    addMessage("Admin Leave");
  });
  io.on(E.AdminMessage, handleNewMessage);
}

/**
 *
 * @typedef  {Object} AdminMessage
 * @property {string} to - 接收者
 * @property {'text'|'image'} type - 消息类型
 * @property {string|ArrayBuffer} raw - 消息内容
 * @property {Date} timestamp - 时间戳
 *
 * @param {AdminMessage} message
 */
function handleNewMessage(message) {
  log("admin message", message);
  if (message.type == "text") {
    addMessage("[Admin Message]: ", message);
  } else if (message.type == "image") {
    addImageMessage(message);
  }
}
