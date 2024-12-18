// First timer (elapsed time from birth)
function updateElapsedTime() {
  const birthDate = new Date(2009, 11, 19);  // Your birthdate (December 19, 2009)
  const timerElement = document.getElementById('timer'); 
  const now = new Date();
  const elapsed = now - birthDate;

  const years = now.getFullYear() - birthDate.getFullYear();
  const days = Math.floor(elapsed / (1000 * 60 * 60 * 24)); 
  const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
  const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60)); 
  const seconds = Math.floor((elapsed % (1000 * 60)) / 1000); 

  // Update the timer display
  timerElement.textContent = `${years} years, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`; 
}

// Call the updateElapsedTime function every second
setInterval(updateElapsedTime, 1000); // Initial call to display the timer immediately
updateElapsedTime();

// Second timer (countdown to birthday)
const birthday = new Date(new Date().getFullYear(), 11,19); // Example: July 20th
const timerEle = document.getElementById('count');

// Function to calculate the countdown to birthday
function updateCountdown() {
  const now = new Date();
  let nextBirthday = birthday;

  // If the birthday has already passed this year, calculate for the next year
  if (now > birthday) {
    nextBirthday = new Date(birthday.getFullYear() + 1, birthday.getMonth(), birthday.getDate());
  }

  // Calculate the time difference
  const timeDiff = nextBirthday - now;

  // Calculate years, days, hours, minutes, and seconds
  const yearsRemaining = nextBirthday.getFullYear() - now.getFullYear();
  const daysRemaining = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesRemaining = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const secondsRemaining = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Display the countdown with years
  timerEle.textContent = `${yearsRemaining}y ${daysRemaining}d ${hoursRemaining}h ${minutesRemaining}m ${secondsRemaining}s`;

  // Stop the timer if the countdown reaches zero
  if (timeDiff <= 0) {
    clearInterval(timerInterval);
    timerEle.textContent = "Happy Birthday!";
  }
}

// Update the countdown every second
const timerInterval = setInterval(updateCountdown, 1000);

// Initial call to set the correct time immediately
updateCountdown();