document.addEventListener("DOMContentLoaded", function() {
    // Collect the current date and time from the system
    const currentDate = new Date();
    // prints out the date and time in the console, for error checking and handling
    console.log(currentDate)
  
    // this is to set the deadline to 5 March 2024 on 11:30am
    const deadline = new Date(2024, 2, 5, 11, 30, 0);
  
    // Created a function to calculate the  remaining time until the deadline
    function calculateTimeRemaining() {
      const currentTime = new Date();
      const timeDifference = deadline - currentTime;
  
      // To check if the deadline has passed
      if (timeDifference <= 0) {
        clearInterval(countdown); // Stop the countdown
        // change the html to the current time
        document.querySelector('.timer').innerHTML = `<div class="expired-message">The deadline has passed.</div>`;
        return;
      }
  
      // This to calculate remaining days, hours, minutes, and seconds
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      // Update the HTML with the countdown values below
      document.querySelector('.days').textContent = `${days} DAYS`;
      document.querySelector('.hours').textContent = `${hours} HOURS`;
      document.querySelector('.minutes').textContent = `${minutes} MINS`;
      document.querySelector('.seconds').textContent = `${seconds} SECS`;
    }
  
    // Call it every second
    const countdown = setInterval(calculateTimeRemaining, 1000);
  
    // Set the initial values
    calculateTimeRemaining();
  });
  
   //***....DONE