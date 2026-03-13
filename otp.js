let otpgenerated="";
function generateOtp(){
    let otp="";
    for(let i=0;i<6;i++){
        otp+=Math.floor(Math.random()*10);
    }
   otpgenerated=otp;
   document.getElementById("otp").innerText="Your OTP is:"+otpgenerated;
}
function validateOtp(){
    let number=document.getElementById("text").value;
 if(number!==""&&number===otpgenerated){
    document.getElementById("valid").innerHTML="Valid OTP"
 }else{
    document.getElementById("valid").innerHTML="Incorrect OTP "
 }
}
