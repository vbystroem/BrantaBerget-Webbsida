let bookings = [];
    const addBooking = (ev) => {
      ev.preventDefault();
      let booking = {
        startDate: document.getElementById("startDate").value,
        daySpan: document.getElementById("daySpan").value, 
        packageType: document.querySelector('input[name="packageType"]:checked').value,
        age: document.getElementById("age").value,
        height: document.getElementById("height").value,
        weight: document.getElementById("weight").value,
        shoeSize: document.getElementById("shoeSize").value,
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        tel: document.getElementById("tel").value,
        address: document.getElementById("address").value,
        postalCode: document.getElementById("postalCode").value,
        city: document.getElementById("city").value,
      };
      bookings.push(booking);

      localStorage.setItem('Bokningar', JSON.stringify(bookings));
    };
    const confirmBooking = () => {
    let bookingconfirm = JSON.parse(window.localStorage.getItem('Bokningar'));
    console.log(bookingconfirm);
    }
    function validateForm() {
      switch(h) {
        default:
          document.querySelector("form").reset();
      }
        
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById("btn").addEventListener("click", addBooking);
      document.getElementById("btn").addEventListener("click", confirmBooking);
      document.getElementById("btn").addEventListener("click", validateForm);
    });
  }




  // Darkmode-switch

document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const elementsToToggle = [document.body, document.querySelector('.landing-image-2'), document.querySelector('.bg-image')];

  // Lägg till lyssnare för klick på dark mode-toggle
  darkModeToggle.addEventListener('change', () => toggleDarkMode(elementsToToggle));

  // Kontrollera och uppdatera dark mode vid sidans laddning
  checkDarkMode(darkModeToggle, elementsToToggle);

  // Lägg till lyssnare för sidans avslutning (när användaren navigerar till en annan sida)
  window.addEventListener('beforeunload', () => {
    saveDarkModeState(darkModeToggle);
  });
});

function toggleDarkMode(elements) {
  const darkModeToggle = elements[0]; // Dark mode toggle is assumed to be the first element
  const isDarkMode = darkModeToggle.checked;

  elements.slice(1).forEach(element => {
    element.classList.toggle('light-mode', isDarkMode);
  });
}

function checkDarkMode(darkModeToggle, elements) {
  const storedDarkModeState = getDarkModeState();

  if (storedDarkModeState !== null) {
    darkModeToggle.checked = storedDarkModeState;
    elements.slice(1).forEach(element => {
      element.classList.toggle('light-mode', storedDarkModeState);
    });
  }
}

function saveDarkModeState(darkModeToggle) {
  const isDarkMode = darkModeToggle.checked;
  localStorage.setItem('darkModeState', JSON.stringify(isDarkMode));
}

function getDarkModeState() {
  const storedState = localStorage.getItem('darkModeState');
  return storedState !== null ? JSON.parse(storedState) : null;
}

