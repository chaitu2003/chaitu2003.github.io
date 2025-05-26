document.addEventListener("DOMContentLoaded", function () {
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch('https://script.google.com/macros/s/AKfycbwvFjPQ3DwT6uppL8oJTP4YLX8rmyv_r6P1Bhn7i97i_GS1FwZ5i1bNNNKUpoJYpZA03A/exec', {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => {
      msg.innerText = "Message sent successfully!";
      setTimeout(() => msg.innerText = "", 5000);
      form.reset();
    })
    .catch(error => {
      msg.innerText = "Something went wrong!";
      console.error('Error!', error.message);
    });
  });
});
