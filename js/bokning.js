
  // Funktion för att uppdatera sammanfattningen
  function updateSummary() {
    // Hämta värden från formuläret
    var startDate = document.getElementById('startDate').value;
    var daySpan = document.getElementById('daySpan').value;
    var liftkortChecked = document.getElementById('liftkort').checked;
    var selectedPackage = document.querySelector('input[name="packageType"]:checked').parentNode.innerText.trim();
    var age = document.getElementById('age').value;
    var shoeSize = document.getElementById('shoeSize').value;
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var tel = document.getElementById('tel').value;
    var address = document.getElementById('address').value;
    var postalCode = document.getElementById('postalCode').value;
    var city = document.getElementById('city').value;

    // Uppdatera sammanfattningen med de fångade värdena
    document.getElementById('summary').innerHTML = `
      <h3>Din bokningssammanfattning</h3>
      <p>Startdatum: ${startDate}</p>
      <p>Antal dagar: ${daySpan}</p>
      <p>Liftkort: ${liftkortChecked ? 'Ja' : 'Nej'}</p>
      <p>Paket: ${selectedPackage}</p>
      <p>Ålder: ${age}</p>
      <p>Skostorlek: ${shoeSize}</p>
      <p>Längd: ${height}</p>
      <p>Vikt: ${weight}</p>
      <p>Förnamn: ${fname}</p>
      <p>Efternamn: ${lname}</p>
      <p>Email: ${email}</p>
      <p>Telefon: ${tel}</p>
      <p>Adress: ${address}</p>
      <p>Postnr: ${postalCode}</p>
      <p>Stad: ${city}</p>
    `;
  }

  // Lyssna på förändringar i formuläret och uppdatera sammanfattningen
  var formInputs = document.querySelectorAll('input, select');
  formInputs.forEach(input => {
    input.addEventListener('change', updateSummary);
  });

  // Uppdatera sammanfattningen när användaren väljer pakettyp
  var packageRadios = document.querySelectorAll('input[name="packageType"]');
  packageRadios.forEach(radio => {
    radio.addEventListener('change', updateSummary);
  });

