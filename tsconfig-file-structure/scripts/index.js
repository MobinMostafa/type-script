"use strict";
// console.log("this is typescript")
const userForm = document.querySelector(".user-form");
const userName = document.querySelector(".user-name");
const email = document.querySelector(".email");
userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        userName: userName.value,
        email: email.value
    };
    console.log(data);
});
