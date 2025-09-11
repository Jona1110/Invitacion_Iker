// =========================
// CONTADOR REGRESIVO
// =========================
function countdown() {
  const eventDate = new Date("Sep 27, 2025 14:30:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }
}

setInterval(countdown, 1000);

// =========================
// BURBUJAS POOL PARTY
// =========================
function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  const size = Math.random() * 60 + 20 + "px";
  bubble.style.width = size;
  bubble.style.height = size;
  bubble.style.left = Math.random() * 100 + "vw";
  bubble.style.animationDuration = (Math.random() * 5 + 5) + "s";
  document.querySelector(".bubbles").appendChild(bubble);
  setTimeout(() => bubble.remove(), 10000);
}
setInterval(createBubble, 500);

// =========================
// REPRODUCIR MÚSICA
// =========================
document.body.addEventListener("click", () => {
  document.getElementById("music").play();
});
