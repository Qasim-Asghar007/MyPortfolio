document.addEventListener("DOMContentLoaded", () => {

  const random_facts = [
  "You can drink lava once in your life time",
  "Lionel Messi is the Greatest Footballer of all time",
  "Git commit messages are just adult diaries.",
  "Your code works? Cool. Now never touch it again.",
  "Stack Overflow is my co-pilot, not Copilot.",
  "99 little bugs in the code, take one down, patch it around… 127 little bugs in the code.",
  "Programmers don’t sleep — they just debug in bed.",
  "There are two hard problems in computer science: cache invalidation, naming things, and off-by-one errors.",
  "My code doesn’t have bugs. It develops unexpected features.",
  "I told my computer I needed a break — it installed updates.",
  "Frontend: making things pretty. Backend: making things work. Fullstack: crying in both languages.",
  "Debugging: being the detective in a crime movie where you’re also the murderer.",
  "Documentation is like socks. Everyone needs it, no one likes writing it.",
  "Git: the only place where reverting feels like moving forward.",
  "JavaScript: where 0 == '0' is true but 0 === '0' is false, because why not?",
  "Agile just means your deadline arrives faster.",
  "AI will never replace developers — unless the AI learns to Google."
];

  var hover_content = document.querySelector(".hover-content");
  const sections = document.querySelectorAll("section");

  const easterEgg = document.querySelector(".easter-egg-container");

  if (sections.length > 0 && easterEgg) {
    const randomIndex = Math.floor(Math.random() * sections.length);
    const randomSection = sections[randomIndex];

    easterEgg.addEventListener("mouseenter", () => {
      hover_content.textContent =
        random_facts[Math.floor(Math.random() * random_facts.length)];
    });

    randomSection.appendChild(easterEgg);

    easterEgg.classList.remove("hidden");
  }
});
