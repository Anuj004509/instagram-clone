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

const reelCommentBoxes = document.querySelectorAll(".reel-comment-box");

reelCommentBoxes.forEach(function (box) {

    const input = box.querySelector("input");
    const postButton = box.querySelector("button");

    postButton.addEventListener("click", function () {

        const comment = input.value.trim();

        if (comment === "") {
            return;
        }

        const commentText = document.createElement("p");

        commentText.classList.add("reel-user-comment");

        commentText.innerHTML = "<strong>You</strong> " + comment;

        box.before(commentText);

        input.value = "";
    });

});

const followButtons = document.querySelectorAll(".follow-btn");

followButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const followersText = document.querySelector(".profile-stats span:nth-child(2) strong");
        let followers = Number(followersText.innerText);

        if (button.classList.contains("following")) {

            button.innerHTML = "Follow";
            button.classList.remove("following");

            followers--;
            followersText.innerText = followers;

        } else {

            button.innerHTML = "Following";
            button.classList.add("following");

            followers++;
            followersText.innerText = followers;
        }

    });

});

const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    const posts = document.querySelectorAll(".post");

    posts.forEach(function (post) {
        const username = post.querySelector("h3").innerText.toLowerCase();

        if (username.includes(searchText)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
});

const stories = document.querySelectorAll(".story-image");
const storyViewer = document.getElementById("storyViewer");
const storyImage = document.getElementById("storyImage");
const closeStory = document.getElementById("closeStory");

stories.forEach(function (story) {
    story.addEventListener("click", function () {
        storyViewer.style.display = "flex";
        storyImage.src = story.src;
    });
});

closeStory.addEventListener("click", function () {
    storyViewer.style.display = "none";
});

const reelLikeButton = document.querySelector(".reel-actions button:first-child");

reelLikeButton.addEventListener("click", function () {

    if (reelLikeButton.classList.contains("liked")) {
        reelLikeButton.innerHTML = "🤍";
        reelLikeButton.classList.remove("liked");
    } else {
        reelLikeButton.innerHTML = "❤️";
        reelLikeButton.classList.add("liked");
    }

});

const reelCommentBox = document.querySelector(".reel-comment-box");

const reelInput = reelCommentBox.querySelector("input");
const reelPostButton = reelCommentBox.querySelector("button");

reelPostButton.addEventListener("click", function () {

    const comment = reelInput.value.trim();

    if (comment === "") {
        return;
    }

    const commentText = document.createElement("p");

    commentText.innerHTML = "<strong>You</strong> " + comment;

    reelCommentBox.before(commentText);

    reelInput.value = "";

});

const shareButton = document.querySelector(".share-btn");

shareButton.addEventListener("click", function () {
    alert("Reel shared successfully! 📤");
});

const editProfileBtn = document.querySelector(".edit-profile-btn");
const editProfileForm = document.querySelector(".edit-profile-form");

editProfileBtn.addEventListener("click", function () {
    editProfileForm.style.display = "flex";
});

const saveProfileBtn = document.querySelector("#saveProfileBtn");

saveProfileBtn.addEventListener("click", function () {

    const newUsername = document.querySelector("#editUsername").value.trim();
    const newBio = document.querySelector("#editBio").value.trim();

    if (newUsername !== "") {
        document.querySelector(".profile-header h2").textContent = newUsername;
    }

    if (newBio !== "") {
        document.querySelector(".profile-header p").textContent = newBio;
    }

    document.querySelector("#editUsername").value = "";
    document.querySelector("#editBio").value = "";

    document.querySelector(".edit-profile-form").style.display = "none";
});

const profileFollowBtn = document.querySelector(".profile-follow-btn");

profileFollowBtn.addEventListener("click", function () {

    const followersText = document.querySelector(".profile-stats span:nth-child(2) strong");
    let followers = Number(followersText.innerText);

    if (profileFollowBtn.classList.contains("following")) {
        profileFollowBtn.innerText = "Follow";
        profileFollowBtn.classList.remove("following");

        followers--;
    } else {
        profileFollowBtn.innerText = "Following";
        profileFollowBtn.classList.add("following");

        followers++;
    }

    followersText.innerText = followers;
});

const profileNav = document.querySelector("nav li:last-child");
const profileSection = document.querySelector(".profile-section");

profileNav.addEventListener("click", function () {
    profileSection.scrollIntoView({
        behavior: "smooth"
    });
});

