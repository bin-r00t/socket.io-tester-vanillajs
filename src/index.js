// import "normalize.css";
import "./styles/index.css";
import doms from "./doms.js";
import io from "socket.io-client";
import setupWs from "./ws.js";

doms.submitBtn.addEventListener("click", function () {
  const client = io(`http://localhost:8000/?token=${doms.tokenInput.value}`, {
    path: "/ws",
  });

  console.log("[*] trying to connect: ", doms.tokenInput.value, client);
  setupWs(client);
});
