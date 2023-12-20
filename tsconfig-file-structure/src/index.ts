
// console.log("this is typescript")

const userForm = document.querySelector(".user-form") as HTMLFormElement;
const userName = document.querySelector(".user-name") as HTMLInputElement;
const email = document.querySelector(".email") as HTMLInputElement;

userForm.addEventListener("submit", (e:Event) => {
    e.preventDefault()
    const data = {
        userName : userName.value,
        email : email.value
    }
    console.log(data)
})




