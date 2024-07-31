// import "normalize.css";
import "./styles/index.css";
import doms, { addImageMessage } from "./doms.js";
import io from "socket.io-client";
import setupWs from "./ws.js";

doms.submitBtn.addEventListener("click", function () {
  const client = io(`http://localhost:8000/?token=${doms.tokenInput.value}`, {
    path: "/ws",
  });

  console.log("[*] trying to connect: ", doms.tokenInput.value, client);
  setupWs(client);
});


// it's ok:
// addImageMessage('https://img1.baidu.com/it/u=3202535497,3158044562&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500')
// it's ok, too:
// addImageMessage('data:image/webp;base64,UklGRiKIAABXRUJQVlA4I...')