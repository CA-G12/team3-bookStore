let userName = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let imgurl = document.querySelector("#image");
let error_span = document.querySelector(".error-span");
let  submit = document.querySelector(".submit");
let form = document.querySelector(".login-form");




form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("/addUser", {
    method: "post",
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: userName.value,
      email: email.value,
      password: password.value,
      imgurl: imgurl.value,
    }),
  })
    .then((data) => data.json())
    .then(data =>{
        if(data.msg){
            let createSpan = document.createElement("span");
            createSpan.textContent = data.msg;
            createSpan.className = "errormsg";
            submit.addEventListener("click", () =>{
                error_span.removeChild(createSpan);
            })
            error_span.appendChild(createSpan);
        }else{
            window.location.href ="../pages/login.html";
        }
    });
});
