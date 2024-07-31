import { addMessage } from "./doms.js";
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
  io.on(E.AdminMessage, (message) => {
    addMessage("[Admin Message]: ", message);
  });
}
