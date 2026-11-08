
let glitter = [];

function setup() {
  createCanvas(800, 600);
  background(0);
  noStroke();
}

function draw() {
  // Desenha os brilhos acumulados
  for (let i = glitter.length - 1; i >= 0; i--) {
    let p = glitter[i];

    fill(255, 105, 180, p.alpha);
    circle(p.x, p.y, p.size);

    p.alpha -= 4;

    if (p.alpha <= 0) {
      glitter.splice(i, 1);
    }
  }

  // Desenho com o mouse
  if (mouseIsPressed) {
    stroke(255, 80, 170);
    strokeWeight(5);
    line(pmouseX, pmouseY, mouseX, mouseY);

    // Brilho rosa
    noStroke();
    fill(255, 160, 210, 100);
    circle(mouseX, mouseY, 12);

    // Pequenas partículas de glitter
    for (let i = 0; i < 4; i++) {
      glitter.push({
        x: mouseX + random(-12, 12),
        y: mouseY + random(-12, 12),
        size: random(2, 5),
        alpha: 255
      });
    }
  }
}

// Apagar o desenho
function apagar() {
  background(0);
  glitter = [];
}

// Salvar o desenho
function salvar() {
  saveCanvas("meu-desenho-rosa", "png");
}
