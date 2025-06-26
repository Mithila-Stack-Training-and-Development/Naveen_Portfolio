// ===== TYPEWRITER EFFECT =====
const typeWriterText = "Aspiring Full Stack Developer | C++, Java, Python | Web Enthusiast";
let i = 0;
const speed = 70;

function typeWriter() {
    if (i < typeWriterText.length) {
        document.querySelector(".hero p").innerHTML += typeWriterText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
document.addEventListener("DOMContentLoaded", typeWriter);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ===== CONTACT FORM VALIDATION =====
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }
    if (!validateEmail(email)) {
        alert("Invalid email address.");
        return;
    }
    alert(`Thanks, ${name}! Your message has been sent.`);
    this.reset();
});

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

// ===== DARK MODE TOGGLE =====
const darkModeBtn = document.createElement("button");
darkModeBtn.id = "dark-mode-btn";
darkModeBtn.innerText = "🌙 Dark Mode";
document.querySelector("nav").appendChild(darkModeBtn);

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll("section, .project-card, .skill");

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run on load

// ===== SKILL BARS (animated numbers) =====
const skillElements = document.querySelectorAll(".skill");
const skillLevels = {
    "HTML5": 90,
    "CSS3": 85,
    "JavaScript": 80,
    "C++": 75,
    "Java": 80,
    "Spring Boot": 60,
    "Python": 85,
    "MySQL": 70
};

skillElements.forEach(skillEl => {
    skillEl.innerHTML += `<div class="skill-bar"><div class="skill-fill"></div></div>`;
});

function animateSkills() {
    skillElements.forEach(skillEl => {
        const skillName = skillEl.textContent.trim();
        const fill = skillEl.querySelector(".skill-fill");
        const level = skillLevels[skillName] || 50;
        fill.style.width = level + "%";
    });
}

window.addEventListener("scroll", animateSkills);
