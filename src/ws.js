import { addMessage } from "./doms.js";

let log = (args) => console.log(`[*] ${args}`);

export default function setupWs(io) {
  io.on("disconnect", () => {
    log("disconnect");
    addMessage("disconnect");
  });
  io.on("connect", () => {
    log("connected");
    addMessage("connected");
  });
}
