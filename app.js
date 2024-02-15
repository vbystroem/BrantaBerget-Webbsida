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
        var x = document.forms["myForm"]["fname"].value;
        if (x == "") {
            alert("Obligatoriska fält är inte ifyllda");
            return false;
        }
        else {
            document.querySelector("form").reset();
        }
        } 
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById("btn").addEventListener("click", addBooking);
      document.getElementById("btn").addEventListener("click", confirmBooking);
      document.getElementById("btn").addEventListener("click", validateForm);
    });

