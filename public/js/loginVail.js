const btn = document.querySelector('.btn');

const email = document.querySelector('#email')
const passwoed = document.querySelector('#passowrd');
const msgContainer = document.querySelector('span');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('/login',{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            email: email.value,
            password: password.value
        }),
       
    }).then(data => data.json()).then( result =>  {
        if(result.msg){
            error(result.msg)
        }
        else{
            success();
        }
    })
})

const error = (error) =>{
   msgContainer.textContent = error;
}

const success = () => {
    window.location.href = '../index.html';
}