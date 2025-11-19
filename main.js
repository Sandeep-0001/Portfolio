const scriptURL = 'https://script.google.com/macros/s/AKfycbzy4pyaBDw3zuuGGx5_g0qtJD1rTzWW5-3Z-Bh1_YwrlDDCBu5ST_3Kwl0SQqb37nJ4/exec';


document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const loadingMessage = document.getElementById('spinner');
  const formData = new FormData(form);
  loadingMessage.style.display = 'block';

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
    .then(response => {
      alert("Form submitted successfully!");
      form.reset();
      loadingMessage.style.display = 'none';
    })
    .catch(error => {
      alert("Error submitting form.");
      console.error('Error!', error.message);
      loadingMessage.style.display = 'none';
    })
  
});



var typed = new Typed(".text", {
  strings: ["Frontend Developer", "B.Tech CS Student", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})
