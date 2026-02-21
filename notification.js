function addNotification(type, message) {
    const panel = document.getElementById("notificationPanel");
    const div = document.createElement("div");
    div.classList.add("notification", type);
    const timestamp = new Date().toLocaleString();
    div.innerText = `[${type.toUpperCase()}] ${message} | ${timestamp}`;
    panel.prepend(div);
}
