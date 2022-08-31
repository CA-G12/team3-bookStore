let addCart = document.querySelectorAll(
  "body  main  section.book-container  div.bookinfo a"
);
function editHeader(data) {
  if (!data.msg) {
    let menu = document.querySelector(".menu");
    menu.textContent = "";
    menu.innerHTML = `
        <div class="userInfo">
        <a href="/logout" id="logout">Logout</a></li>
        <div class="user">
            <div id="username">${data.username}</div>
            <div id="userImg"><img src="${data.imgurl}" alt=""></div>
        </div>
        <div id="cart"><a href="./pages/cart.html"><i class="fa-solid fa-cart-shopping"></i></a></div>
    </div>
        `;
  }
}
fetch("/checkLoggedUser")
  .then((data) => data.json())
  .then(editHeader);
addCart.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    fetch("/checkLoggedUser")
      .then((data) => data.json())
      .then((data) => {
        if (data.msg) {
          window.location.href = "../pages/login.html";
        } else {
          alert("added");
        }
      });
  });
});
