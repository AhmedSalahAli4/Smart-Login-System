

let name = document.getElementById("name")
let password = document.getElementById("password")
let email = document.getElementById("email")
let form = document.getElementById("form")
let errorElment = document.getElementById("error")
let logInBtn = document.getElementById("logInBtn")
let arr=[];
let massages = [];


if(localStorage.getItem('users') !=null)
{
    arr=JSON.parse(localStorage.getItem('users'));
    // console.log(arr);
}

// logInBtn.addEventListener('click',function(){
//     logIn();
// })
function logIn (){
    if(email.value==""||password.value==""&&localStorage !== password.value)
    {
        ///alert message
        massages.push(" cehck your password and email")
        errorElment.innerText = massages.join(', ')
    }
    else
    {
        for(let i=0;arr.length>i;i++){
            if(arr[i].email==email.value&&arr[i].password==password.value)
            {
                window.location.href="home.html";
            }
        }
    }
   
}


