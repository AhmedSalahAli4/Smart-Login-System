
let name2 = document.getElementById("name2")
let password2 = document.getElementById("password2")
let email2 = document.getElementById("email2")
let form2 = document.getElementById("form2")
let errorElment2 = document.getElementById("error2")
let allarr = []

form2.addEventListener('submit', (e)=> {
    let user={
        userName:name2.value,
        email:email2.value,
        password:password2.value
    }
    let massages2 = []
    if(name2.value === "" || name2.value == null||password2.value.length <=6 ||password2.value.length >=12 ||massages2.length > 0 )
    {
        if(name2.value === "" || name2.value == null){
            massages2.push("name in required ")
        }
        if(password2.value.length <=6 ) {
            massages2.push("passwords must be longer then 6 carters")
        }
        if(password2.value.length >=12 ) {
            massages2.push("passwords must be less then 12 carters")
        }
        if(massages2.length > 0){
            e.preventDefault()
            errorElment2.innerText = massages2.join(', ')
            
        }
    }
    else{
        allarr.push(user);
        localStorage.setItem('users',JSON.stringify(allarr));

    }

    
})

