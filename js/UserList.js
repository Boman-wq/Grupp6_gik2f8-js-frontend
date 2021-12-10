const userConationer = document.querySelector("ul.gallery")
getAllJson().then((users) => {
        users.forEach((user) => {
            const userHTML = renderUser(user);
            userConationer.insertAdjacentHTML("beforeend", userHTML);
        });
    });