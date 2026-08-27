const likeButtons = document.querySelectorAll(".post-actions button:first-child");

likeButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        if (button.classList.contains("liked")) {
            button.innerHTML = "🤍";
            button.classList.remove("liked");
        } else {
            button.innerHTML = "❤️";
            button.classList.add("liked");
        }

    });
});