function check()
{
    let email = document.getElementById("email-input").value;
    let password = document.getElementById("password-input").value;
    if (email === null || email.trim() === "") 
    {
        document.getElementById("message-error").innerHTML = "please enter email";
    }
    else if (password === null || password.trim() === "") 
    {
        document.getElementById("message-error").innerHTML = "please enter the password";
    }
    else
    {
        document.getElementById("message-error").innerHTML="both inputs are given";
    }

}



function signupcheck() {
    let nam = document.getElementById("namesignup").value;
    let emai = document.getElementById("emailsignup").value;
    let pass = document.getElementById("passwordsignup").value;
    let cnt = 0;

    if(nam === null || nam.trim()==="") cnt++;
    if(emai === null || emai.trim()==="") cnt++;
    if(pass === null || pass.trim()==="") cnt++;



    if(cnt>0) document.getElementById("sign-up-message-error").innerHTML = "please fill all the fields";
    else document.getElementById("sign-up-message-error").innerHTML = "filled every field";

    
}


function showloginform() {
    document.getElementById("signupform").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}
function showsignform() {
    document.getElementById("signupform").classList.remove("hidden");
    document.getElementById("loginForm").classList.add("hidden");
}