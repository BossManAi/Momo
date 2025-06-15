const chatInput = document.getElementById("chat-input");
const chatBox = document.getElementById("chat-box");

chatInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const userText = chatInput.value.trim();
    if (userText) {
      const userBubble = document.createElement("div");
      userBubble.className = "chat-bubble user";
      userBubble.textContent = userText;
      chatBox.appendChild(userBubble);

      const momoReply = document.createElement("div");
      momoReply.className = "chat-bubble momo";
      momoReply.textContent = "Momo suka cara Boss Man ngomong~ 😘";
      chatBox.appendChild(momoReply);

      document.getElementById("momo-voice").play();
      chatInput.value = "";
    }
  }
});