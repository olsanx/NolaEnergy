  const hamburger = document.querySelector('.hamburger');
  const sideMenu  = document.getElementById('side-menu');
  const overlay   = document.querySelector('[data-overlay]');

  // Toggle menu
  hamburger.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
    overlay.classList.toggle('show');
    hamburger.classList.toggle('is-active');
  });

  // Close menu when clicking overlay
  overlay.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    overlay.classList.remove('show');
    hamburger.classList.remove('is-active');
  });


  // Close side menu on internal link click
document.querySelectorAll('.side-nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('side-menu').classList.remove('open');
    document.querySelector('[data-overlay]').classList.remove('show');
    document.querySelector('.hamburger').classList.remove('is-active');
  });
});



  // scroll up
  window.addEventListener("load", () => {
  window.scrollTo(0, 0); 
  });

  // Optional: override browser's scroll restoration
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }


  // typewriter effect
  window.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('.typing-text');
    const text = el.textContent;
    el.textContent = ""; 

    // Split the text into individual spans
    text.split("").forEach((char) => {
      el.innerHTML += `<span class="char" style="opacity:0">${char}</span>`;
    });

    // Animate each character like typing
    gsap.to(".typing-text .char", {
      opacity: 1,
      duration: 0.05,
      stagger: 0.09,  // Delay between letters
      ease: "none"
    });
  });


  window.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.typing-text');
  const text = el.textContent;
  el.textContent = ""; // Clear original text

  // Convert text to spans with non-breaking space where needed
  const chars = text.split("").map(char => char === " " ? "&nbsp;" : char);
  const spanHTML = chars.map(char => `<span class="char" style="opacity:0; display:inline-block;">${char}</span>`).join("");

  // Inject all spans in one go — avoids forced reflow
  el.innerHTML = spanHTML;

  // Animate with GSAP
  gsap.fromTo(
    ".typing-text .char",
    { opacity: 0, y: 20, scale: 0.8 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.1,
      stagger: 0.09,
      ease: "power2.out"
    }
  );
});




window.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('.typing-text-mobile');
    if (!el) return;

    const text = el.innerHTML.trim(); // Keep <br> tags

    const chars = [];
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === ' ') {
        chars.push("&nbsp;");
      } else if (char === '<') {
        // Preserve <br> tags
        const brEnd = text.indexOf('>', i);
        chars.push(text.slice(i, brEnd + 1));
        i = brEnd;
      } else {
        chars.push(char);
      }
    }

    el.innerHTML = "";

    chars.forEach(char => {
      if (char.includes("<br")) {
        el.innerHTML += char; // Inject <br> directly
      } else {
        const span = document.createElement("span");
        span.className = "char";
        span.style.opacity = "0";
        span.style.display = "inline-block";
        span.innerHTML = char;
        el.appendChild(span);
      }
    });

    gsap.fromTo(
      el.querySelectorAll(".char"),
      { opacity: 0, y: 20, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.1,
        stagger: 0.09,
        ease: "power2.out"
      }
    );
  });


  


  


  
  
  

  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const speed = 100; // lower = faster

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const suffix = counter.getAttribute("data-suffix") || ""; // default is empty

        const updateCount = () => {
            const current = +counter.innerText.replace(/\D/g, ""); // remove non-numbers
            const increment = Math.ceil(target / speed);

            if (current < target) {
                counter.innerText = current + increment;
                setTimeout(updateCount, 40);
            } else {
                counter.innerText = `${target} ${suffix}`; 
            }
        };

        updateCount();
    });
  });


  (function(){
    emailjs.init("p7g1Nn9SvQ0nRNZbx"); // From EmailJS dashboard
  })();

  document.getElementById("quoteForm").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_kjj6tce", "template_0u1qqll", this)
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Quote Sent!',
        text: 'We’ll get back to you shortly.',
        confirmButtonColor: '#2c3e50',
      });
      this.reset();
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again.',
        confirmButtonColor: '#e74c3c',
      });
      console.error("FAILED...", error);
    });
  });

  // jumbotron scroll
  const jumbotrons = document.querySelectorAll('.jumbo1');
  let current = 0;

  setInterval(() => {
    jumbotrons[current].classList.remove('active');
    current = (current + 1) % jumbotrons.length;
    jumbotrons[current].classList.add('active');
  }, 10000); // every 20 seconds









