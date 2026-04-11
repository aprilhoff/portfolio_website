// UNSENT & UNREAD
let unsentIndex = 1;
showUnsent(unsentIndex);

function showUnsent(n) {
  let slides = document.getElementsByClassName("mySlides-unsent");
  if (!slides.length) return;

  if (n > slides.length) unsentIndex = 1;
  if (n < 1) unsentIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[unsentIndex - 1].style.display = "block";
}

for (let slide of document.getElementsByClassName("mySlides-unsent")) {
  slide.addEventListener("click", () => {
    unsentIndex++;
    showUnsent(unsentIndex);
  });
}


// BETWEEN HAND & MACHINE
let aiIndex = 1;
showAI(aiIndex);

function showAI(n) {
  let slides = document.getElementsByClassName("mySlides-ai");
  if (!slides.length) return;

  if (n > slides.length) aiIndex = 1;
  if (n < 1) aiIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[aiIndex - 1].style.display = "block";
}

for (let slide of document.getElementsByClassName("mySlides-ai")) {
  slide.addEventListener("click", () => {
    aiIndex++;
    showAI(aiIndex);
  });
}

// CORE03

let core03Index = 1;
showCore03(core03Index);

function showCore03(n) {
  let slides = document.getElementsByClassName("mySlides-core03");
  if (!slides.length) return;

  if (n > slides.length) core03Index = 1;
  if (n < 1) core03Index = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[core03Index - 1].style.display = "block";
}

for (let slide of document.getElementsByClassName("mySlides-core03")) {
  slide.addEventListener("click", () => {
    core03Index++;
    showCore03(core03Index);
  });
}

// CORE03

// PIPENCO
let pipencoIndex = 1;
showPipenco(pipencoIndex);

function showPipenco(n) {
  let slides = document.getElementsByClassName("mySlides-Pipenco");
  if (!slides.length) return;

  if (n > slides.length) pipencoIndex = 1;
  if (n < 1) pipencoIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[pipencoIndex - 1].style.display = "block";
}

for (let slide of document.getElementsByClassName("mySlides-Pipenco")) {
  slide.addEventListener("click", () => {
    pipencoIndex++;
    showPipenco(pipencoIndex);
  });
}

function updateClock() {
  const now = new Date();

  const displayString = now.toLocaleString();
  document.getElementById('clock').innerHTML = displayString;
}
setInterval(updateClock, 1000);
updateClock(); 