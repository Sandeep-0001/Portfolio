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
const skills = {
  htmlBar: 90,
  cssBar: 70,
  jsBar: 75,
  pythonBar: 85,
  cBar: 85,
  javaBar: 95
};

// Animate progress bars
function animateBars() {
  Object.keys(skills).forEach(id => {
    const bar = document.getElementById(id);
    let width = 0;
    const target = skills[id];

    // Reset before re-animating
    bar.style.width = "0%";
    bar.textContent = "0%";

    const interval = setInterval(() => {
      if (width >= target) {
        clearInterval(interval);
      } else {
        width++;
        bar.style.width = width + "%";
        bar.textContent = width + "%";
      }
    }, 20);
  });
}


const tools = [
  { id: "git", percent: 80 },
  { id: "github", percent: 85 },
  { id: "vscode", percent: 90 }
];

const animateCircle = (circleId, percentId, targetPercent) => {
  const circle = document.getElementById(circleId + "Circle");
  const text = document.getElementById(circleId + "Percent");

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  let current = 0;

  const interval = setInterval(() => {
    if (current >= targetPercent) {
      clearInterval(interval);
    } else {
      current++;
      const offset = circumference - (current / 100) * circumference;
      circle.style.strokeDashoffset = offset;
      text.textContent = current + "%";
    }
  }, 20);
};

// Trigger animation when section enters view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateBars();
      tools.forEach(tool => animateCircle(tool.id, tool.id + "Percent", tool.percent));

    }
  });
}, { threshold: 0.5 });

observer.observe(document.querySelector(".tools-wrapper"));
observer.observe(document.querySelector(".skills-section"));





