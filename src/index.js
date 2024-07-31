// import "normalize.css";
import "./styles/index.css";
import doms, { addMessage } from "./doms.js";
import io from "socket.io-client";

let log = args => console.log(`[*] ${args}`);

doms.submitBtn.addEventListener("click", function () {
  const client = io(`http://localhost:8000/?token=${doms.tokenInput.value}`, {
    path: "/ws",
  });
  client.on("disconnect", () => {
    log("disconnect");
    addMessage("disconnect");
  });
  client.on("connect", () => {
    log("connected");
    addMessage("connected");
  });
  console.log("[*] trying to connect: ", doms.tokenInput.value, client);
});
