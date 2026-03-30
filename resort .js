let images=["img1.jpg","img2.jpg","img3.jpg"];
let index=0;
function showImage(){
  document.getElementById("slides").src=images[index];
}
function next(){
   index++;
    if(index>=images.length)
   {
    index=0;
   }showImage();
}
function preview(){
    index--;
    if(index<0){
        index=images.length-1;
    }
    showImage();
}
showImage();
setInterval(next,3000);
JavaScript
function toggleBooking() {
    const bar = document.getElementById("bookingBar");
    
    // This toggles the 'active' class on and off
    bar.classList.toggle("active");
    
    // Optional: Scroll to it if it's mobile so the user sees it
    if(bar.classList.contains("active")) {
        bar.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}
function sendWhatsApp() {
  const checkIn = document.getElementById('checkin').value;
  const checkOut = document.getElementById('checkout').value;
  const guests = document.getElementById('guests').value;
  
  // Replace with your real phone number
  const phoneNumber = "8590332432"; 
  
  if (!checkIn || !checkOut) {
      alert("Please select your dates first!");
      return;
  }

  const message = `Hello Peak Paradise! I'd like to book a stay.%0A%0A` + 
                  `📅 Check-in: ${checkIn}%0A` + 
                  `📅 Check-out: ${checkOut}%0A` + 
                  `👥 Guests: ${guests}`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  
  window.open(whatsappURL, '_blank');
  document.getElementById("bookingBar").classList.remove("active");
}
