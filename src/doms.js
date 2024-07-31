const doms = {
  tokenInput: document.getElementById("token"),
  submitBtn: document.getElementById("connect-btn"),
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

export default doms;

export { addMessage, addImageMessage };
