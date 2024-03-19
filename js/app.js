let bookings = [];
    const addBooking = (ev) => {
      ev.preventDefault();
      let data = new FormData(ev.target);
      let booking = Object.fromEntries(data);
      bookings.push(booking);

      localStorage.setItem('Bokningar', JSON.stringify(bookings));
      window.location.href = 'bokning_genomford.html';
    };

    document.addEventListener('DOMContentLoaded', () => {
      document.forms.myForm.addEventListener('submit', addBooking);
    });
    
    
  



