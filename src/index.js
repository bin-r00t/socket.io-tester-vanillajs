// import "normalize.css";
import "./styles/index.css";
import doms, { addImageMessage, handleConnect, sendMessage } from "./doms.js";

doms.connectBtn.addEventListener("click", handleConnect);
doms.sendBtn.addEventListener("click", sendMessage);

// it's ok:
// addImageMessage('https://img1.baidu.com/it/u=3202535497,3158044562&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500')
// it's ok, too:
// addImageMessage('data:image/webp;base64,UklGRiKIAABXRUJQVlA4I...')
