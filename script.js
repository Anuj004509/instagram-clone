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

const commentBoxes = document.querySelectorAll(".comment-box");

commentBoxes.forEach(function (box) {

    const input = box.querySelector("input");
    const postButton = box.querySelector("button");

    postButton.addEventListener("click", function () {

        const comment = input.value.trim();

        if (comment === "") {
            return;
        }

        const commentText = document.createElement("p");

        commentText.innerHTML = "<strong>You</strong> " + comment;

        box.before(commentText);

        input.value = "";
    });

});