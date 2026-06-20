document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("helloButton");
    const input = document.getElementById("nameInput");
    const message = document.getElementById("message");

    button.addEventListener("click", function () {
        const name = input.value.trim();

        if (name.length === 0) {
            message.textContent = "Please enter your name.";
            input.focus();
            return;
        }

        message.textContent = "Hello, " + name + "!";
    });
});