document.getElementById("form").addEventListener("submit", (event)=> {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const firstPassword = document.getElementById("password1").value;
    const secondPassword = document.getElementById("password2").value;
    const errorMessage = document.getElementById("display");    

    errorMessage.textContent = "";
    if (username.length < 3){
        errorMessage.textContent = "username cannot be empty";
        event.preventDefault();
    }else if (firstPassword !== secondPassword){
        errorMessage.textContent ="password does not match";
        event.preventDefault();
    }
})