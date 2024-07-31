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

export default doms;

export { addMessage };
