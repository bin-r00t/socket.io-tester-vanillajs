import { io } from "socket.io-client";
import setupWs from "./ws";
import E from "@/events";

const doms = {
  tokenInput: document.getElementById("token"),
  pathInput: document.getElementById("path"),
  urlInput: document.getElementById("url"),
  connectBtn: document.getElementById("connect-btn"),
  fileInput: document.getElementById("file-upload"),
  messageInput: document.getElementById("message-input"),
  sendBtn: document.getElementById("send-btn"),
  closeBtn: document.getElementById("close-btn"),
  messages: document.getElementById("messages"),
  messageTemplate: document.getElementById("message-item"),
};

function addMessage(message) {
  const msg = doms.messageTemplate.content.cloneNode(true);
  msg.querySelector("p").innerText = message;
  doms.messages.appendChild(msg);
  doms.messages.lastElementChild.scrollIntoView();
}

/**
 *
 * @param {string | ArrayBuffer} imgUrlOrBuffer 图片地址、Base64编码或二进制内容
 */
function addImageMessage(imgUrlOrBuffer) {
  const msg = doms.messageTemplate.content.cloneNode(true);
  if (typeof imgUrlOrBuffer == "string") {
    msg.querySelector("p").innerHTML = `
      <img src="${imgUrlOrBuffer}" />`;
    doms.messages.appendChild(msg);
    doms.messages.lastElementChild.scrollIntoView();
  } else {
    //
    console.log(imgUrlOrBuffer);
  }
}

/**
 * 开启socketio链接
 */
let client;
export function handleConnect() {
  client = io(`${doms.urlInput.value}/?token=${doms.tokenInput.value}`, {
    path: doms.pathInput.value,
  });
  setupWs(client);
  hideConnectButton();
}

export function hideConnectButton() {
  doms.connectBtn.classList.add("hidden");
  doms.urlInput.classList.add("hidden");
  doms.tokenInput.classList.add("hidden");
  doms.pathInput.classList.add("hidden");
  doms.closeBtn.classList.remove("hidden");
  doms.sendBtn.classList.remove("hidden");
  doms.messageInput.classList.remove("hidden");
  doms.fileInput.classList.remove("hidden");
}

export function showConnectButton() {
  doms.connectBtn.classList.remove("hidden");
  doms.urlInput.classList.remove("hidden");
  doms.tokenInput.classList.remove("hidden");
  doms.pathInput.classList.remove("hidden");
  doms.closeBtn.classList.add("hidden");
  doms.sendBtn.classList.add("hidden");
  doms.messageInput.classList.add("hidden");
  doms.fileInput.classList.add("hidden");
}

export function sendMessage() {
  const message = doms.messageInput.value;
  console.log(E.UserMessage, message);
  client.emit(E.UserMessage, {
    raw: message, // string
    type: 'text',
    timestamp: Date.now(),
  });
}

export default doms;

export { addMessage, addImageMessage };
