
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}


// Set the date we're counting down to
const countDownDate = new Date("Feb 28, 2025 11:59:59").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {

 // Get today's date and time
 const now = new Date().getTime();

 // Find the distance between now and the count down date
 const distance = countDownDate - now;

 // Time calculations for days, hours, minutes and seconds
 const days = Math.floor(distance / (1000 * 60 * 60 * 24));
 const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 const seconds = Math.floor((distance % (1000 * 60)) / 1000);

 // Display the result in the elements with corresponding IDs
 document.getElementById("days").innerHTML = days;
 document.getElementById("hours").innerHTML = hours;
 document.getElementById("minutes").innerHTML = minutes;
 document.getElementById("seconds").innerHTML = seconds;

 // If the countdown is over, display a message
 if (distance < 0) {
     clearInterval(x);
     document.getElementById("days").innerHTML = "00";
     document.getElementById("hours").innerHTML = "00";
     document.getElementById("minutes").innerHTML = "00";
     document.getElementById("seconds").innerHTML = "00";
     alert("Countdown has ended!");
 }
}, 1000);


function loco(){(function () {
const locomotiveScroll = new LocomotiveScroll();
})();
}
loco();  
