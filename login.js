const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "admin") {
        alert("You have successfully logged in.");
        alert("Redirecting to Dashboard");
        window.location = "./Dashboard.html"
    }
    else if (username == null || username == "") {
        alert("Please enter the username.");
        return false;
    }
    else if (password == null || password == "") {
        alert("Please enter the password.");
        return false;
    }
    else {
        alert("Wrong password entered.");
        loginErrorMsg.style.opacity = 1;
    }
})

particlesJS("particles-js", {
    particles: {
      number: { value: 156, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00ffe1",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3.2048200493542316,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  