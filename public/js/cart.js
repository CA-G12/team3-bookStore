const table = document.querySelector('tbody')
console.log(table)
const cartTable = (data) => {
    console.log(data)
    if(data.length !=0){


        data.forEach(element => {
            const tr =document.createElement('tr')
            table.appendChild(tr)
            const td = document.createElement('td')
            tr.appendChild(td)
            const img = document.createElement('img')
            img.src=element.imgurl
            td.appendChild(img)
            const h1 = document.createElement('h1')
            h1.textContent=element.book_name
            td.appendChild(h1)
            const secondTd= document.createElement('td')
            secondTd.textContent =element.price
            tr.appendChild(secondTd)
            const theredTd = document.createElement('td')
            const input = document.createElement('input')
            input.value = 1
            input.type = 'number'
            tr.appendChild(theredTd)
            theredTd.appendChild(input)
            const fourTd = document.createElement('td')
            tr.appendChild(fourTd)
            fourTd.textContent = input.value * element.price
    
        });
    }else{
        const p = document.createElement('p')
        p.textContent= ' there is no any cart'
        table.appendChild(p)
        p.className = 'not-found-cart'
    }
}

fetch('/cart')
    .then(data => data.json())
    .then(result => cartTable(result))
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