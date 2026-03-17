function validate(event){
    event.preventDefault();
    //variable declaration
    const name=document.getElementById("t1").value.trim();
    const email=document.getElementById("t2").value.trim();
    const number=document.getElementById("t3").value.trim();
    const repass=document.getElementById("t5").value;
    const pass=document.getElementById("t4").value;
//error message null after re-entering
    document.getElementById('nameError').innerHTML = "";
    document.getElementById('passError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('phonError').innerHTML = "";
    document.getElementById('repassError').innerHTML = "";
    
    let isvalid=true;
   //assign pattern to different veriable for validation
    let namepattern=/^[a-zA-Z\s]+$/;
    let emailpattern=/^[a-zA-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let numberpattern=/^[6-9][0-9]{9}$/;
    let passpattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   //Name validation
    if(name.length<3||!namepattern.test(name)){
        document.getElementById('nameError').innerHTML = "Enter a valid name";
        isvalid=false;
    }
    //email validation
    if(!emailpattern.test(email)){
        document.getElementById('emailError').innerText="Enter a valid Email";
        isvalid=false;
    }
    //phone number validation
    if(!numberpattern.test(number)){
        document.getElementById("phonError").innerHTML="Enter a valid Phone number";
        isvalid=false;
    }
    //password validation
    if(!passpattern.test(pass)){
        
        document.getElementById("passError").innerHTML="Enter a valid Password";
        isvalid=false;

    }
    //Password confirmation
    if(repass===""||repass!==pass){
        document.getElementById("repassError").innerHTML="Password miss Mach";
        isvalid=false;
    }
    //final action
    if(isvalid===true){
        document.getElementById("successModal").classList.add("active");
    return isvalid;
    }
    else { return false;
     }
}
function togglePassword() {
    const passInput = document.getElementById("t4");
    const repassInput = document.getElementById("t5");
    
    // Check the current type and flip it
    if (passInput.type === "password") {
        passInput.type = "text";
        repassInput.type = "text";
    } else {
        passInput.type = "password";
        repassInput.type = "password";
    }
}
function closeModal() {
    document.getElementById("successModal").classList.remove("active");
}
