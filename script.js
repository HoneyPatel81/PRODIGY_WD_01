function signUp(){
    let email=document.getElementById("email").value
        let Password=document.getElementById("Password").value
        let confirmpass=document.getElementById("confirmpass").value

        let value = {
            userEmail:email,
            userPass:Password,
            userConPass:confirmpass
        }
        console.log(value)

         localStorage.setItem('UserData', JSON.stringify(value))
 }

function Login(){
    
    let email=document.getElementById("email").value
    let password=document.getElementById("pass").value

    let data = JSON.parse(localStorage.getItem('userData'))
    

    if(email === data.userEmail && password === data.userPass){
        alert('Login successful.')
    }else{
        alert('pls enter valid email and password')
    }

   
} 

    


    