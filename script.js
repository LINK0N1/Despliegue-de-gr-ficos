// Cinco dibujos en p5.js (modo instancia). Cada uno vive en su propio contenedor.
const W = 400, H = 400;

/* 1. RANA */
const rana = (p) => {
  let salto = 0, lengua = 0;
  p.setup = () => p.createCanvas(W, H);
  p.mousePressed = () => { if (p.mouseX >= 0 && p.mouseX <= W && p.mouseY >= 0 && p.mouseY <= H) { salto = 1; lengua = 1; } };
  p.draw = () => {
    p.background(160, 215, 235);
    p.noStroke(); p.fill(70, 150, 190); p.ellipse(200, 350, 380, 120);      // charco
    p.fill(70, 170, 80); p.ellipse(110, 330, 90, 28);                       // hoja
    if (salto > 0) salto -= 0.03; if (lengua > 0) lengua -= 0.02;
    const y = -Math.sin(Math.max(salto, 0) * Math.PI) * 90;
    p.push(); p.translate(0, y);
    p.fill(60, 160, 60); p.ellipse(200, 280, 190, 150);                     // cuerpo
    p.ellipse(200, 210, 170, 110);                                          // cabeza
    p.ellipse(130, 305, 50, 30); p.ellipse(270, 305, 50, 30);               // patas
    p.fill(60, 160, 60); p.ellipse(150, 165, 56, 56); p.ellipse(250, 165, 56, 56);
    p.fill(255); p.ellipse(150, 165, 40, 40); p.ellipse(250, 165, 40, 40);  // ojos
    const dx = p.constrain((p.mouseX - 200) / 40, -5, 5), dy = p.constrain((p.mouseY - 165) / 40, -5, 5);
    p.fill(0); p.ellipse(150 + dx, 165 + dy, 16, 16); p.ellipse(250 + dx, 165 + dy, 16, 16);
    p.noFill(); p.stroke(20, 90, 30); p.strokeWeight(4); p.arc(200, 215, 100, 60, 0.15, Math.PI - 0.15); // boca
    p.noStroke();
    if (lengua > 0) { p.fill(230, 80, 100); p.rect(193, 232, 14, 70 * p.sin(lengua * Math.PI), 7); }
    p.fill(30, 110, 40); p.ellipse(185, 190, 6, 4); p.ellipse(215, 190, 6, 4); // nariz
    p.pop();
  };
};

/* 2. DIENTES DE CONEJO */
const conejo = (p) => {
  let roer = 0;
  p.setup = () => p.createCanvas(W, H);
  p.mousePressed = () => { roer = 60; };
  p.draw = () => {
    p.background(255, 235, 240);
    p.noStroke();
    p.fill(245); p.ellipse(130, 90, 55, 190); p.ellipse(270, 90, 55, 190);   // orejas
    p.fill(250, 170, 190); p.ellipse(130, 95, 25, 140); p.ellipse(270, 95, 25, 140);
    p.fill(245); p.ellipse(200, 250, 270, 240);                              // cara
    p.fill(250, 190, 200); p.ellipse(120, 270, 40, 25); p.ellipse(280, 270, 40, 25); // mejillas
    p.fill(0); p.ellipse(150, 220, 20, 26); p.ellipse(250, 220, 20, 26);     // ojos
    p.fill(255); p.ellipse(154, 214, 7, 7); p.ellipse(254, 214, 7, 7);
    const nx = p.map(p.mouseX, 0, W, -6, 6, true);
    p.fill(240, 110, 140); p.triangle(185 + nx, 255, 215 + nx, 255, 200 + nx, 272); // nariz
    p.stroke(80); p.strokeWeight(3); p.noFill();
    p.line(200 + nx, 272, 200, 290); p.arc(185, 290, 30, 20, 0, Math.PI * 0.9); p.arc(215, 290, 30, 20, Math.PI * 0.1, Math.PI);
    const m = roer > 0 ? Math.abs(p.sin(roer * 0.5)) * 6 : 0; if (roer > 0) roer--;
    p.stroke(160); p.strokeWeight(2); p.fill(255);
    p.rect(185, 298 + m, 14, 48, 3); p.rect(201, 298 + m, 14, 48, 3);        // dientes
    p.stroke(120); p.strokeWeight(2);
    for (let i = -1; i <= 1; i++) { p.line(130, 265 + i * 12, 60, 255 + i * 22); p.line(270, 265 + i * 12, 340, 255 + i * 22); }
  };
};

/* 3. ¿QUÉ HAY DE CENA? */
const cena = (p) => {
  let plato = 0;
  const nombres = ["Pizza", "Hamburguesa", "Espagueti"];
  p.setup = () => { p.createCanvas(W, H); p.textAlign(p.CENTER); p.textFont("Trebuchet MS"); };
  p.mousePressed = () => { if (p.mouseX >= 0 && p.mouseX <= W && p.mouseY >= 0 && p.mouseY <= H) plato = (plato + 1) % 3; };
  p.draw = () => {
    p.background(150, 90, 60);
    p.noStroke(); p.fill(235, 225, 200); p.rect(0, 0, W, 90);                // mantel
    p.fill(255); p.ellipse(200, 230, 300, 300); p.fill(235); p.ellipse(200, 230, 250, 250);
    p.fill(210); p.rect(25, 120, 8, 200, 3); p.rect(370, 120, 8, 200, 3);    // cubiertos
    if (plato === 0) {
      p.fill(240, 190, 80); p.ellipse(200, 230, 220, 220); p.fill(210, 60, 40); p.ellipse(200, 230, 190, 190);
      p.fill(255, 235, 150); p.ellipse(200, 230, 170, 170);
      p.fill(190, 40, 40); [[160,200],[230,190],[190,260],[240,255],[150,250]].forEach(c => p.ellipse(c[0], c[1], 32, 32));
    } else if (plato === 1) {
      p.fill(215, 150, 60); p.arc(200, 230, 190, 150, Math.PI, 0);
      p.fill(90, 160, 60); p.rect(105, 232, 190, 14, 7);
      p.fill(110, 55, 35); p.rect(108, 244, 184, 26, 12);
      p.fill(240, 190, 50); p.triangle(105, 246, 295, 246, 200, 262);
      p.fill(215, 150, 60); p.rect(108, 270, 184, 28, 0, 0, 20, 20);
    } else {
      p.fill(245, 215, 120); for (let i = 0; i < 12; i++) p.arc(200, 235, 190 - i * 12, 160 - i * 10, 0.3 * i, 0.3 * i + 3);
      p.fill(200, 50, 40); p.ellipse(200, 225, 90, 70);
      p.fill(60, 140, 50); p.ellipse(185, 215, 14, 8); p.ellipse(215, 232, 14, 8);
    }
    p.fill(255); p.textSize(26); p.text("Hoy hay: " + nombres[plato], 200, 60 - 10 + 20);
    p.fill(90, 50, 30); p.textSize(14); p.text("Haz clic para cambiar", 200, 392);
  };
};

/* 4. DÍA NEVADO SOLEADO */
const nieve = (p) => {
  const copos = [];
  p.setup = () => { p.createCanvas(W, H); p.noStroke(); for (let i = 0; i < 70; i++) copos.push({ x: p.random(W), y: p.random(H), r: p.random(2, 5), v: p.random(0.6, 2) }); };
  p.draw = () => {
    const sx = p.constrain(p.mouseX, 40, W - 40), sy = 70 + (1 - Math.sin(p.map(sx, 40, W - 40, 0.2, Math.PI - 0.2))) * 90;
    p.background(140, 195, 240);
    p.fill(255, 235, 120, 90); p.ellipse(sx, sy, 130, 130);                  // halo
    p.fill(255, 220, 60); p.ellipse(sx, sy, 80, 80);                         // sol
    p.stroke(255, 220, 60); p.strokeWeight(4);
    for (let a = 0; a < 12; a++) { const t = a * Math.PI / 6 + p.frameCount * 0.01; p.line(sx + Math.cos(t) * 50, sy + Math.sin(t) * 50, sx + Math.cos(t) * 68, sy + Math.sin(t) * 68); }
    p.noStroke(); p.fill(235, 240, 250); p.triangle(-20, 300, 110, 170, 240, 300); p.triangle(150, 300, 290, 150, 430, 300);
    p.fill(255); p.triangle(80, 205, 110, 170, 140, 205); p.triangle(260, 185, 290, 150, 320, 185);
    p.fill(250, 252, 255); p.rect(0, 290, W, 110);                           // suelo
    p.fill(90, 60, 40); p.rect(60, 280, 12, 40); p.rect(330, 285, 12, 40);   // troncos
    p.fill(30, 110, 60); p.triangle(30, 285, 66, 210, 102, 285); p.triangle(300, 290, 336, 215, 372, 290);
    p.fill(255); for (const c of copos) { p.ellipse(c.x, c.y, c.r * 2); c.y += c.v; c.x += p.sin(p.frameCount * 0.03 + c.y * 0.05) * 0.4; if (c.y > H) { c.y = -5; c.x = p.random(W); } }
  };
};

/* 5. MUÑECO DE NIEVE QUE SALUDA */
const muneco = (p) => {
  p.setup = () => p.createCanvas(W, H);
  p.draw = () => {
    p.background(120, 170, 220); p.noStroke(); p.fill(250); p.rect(0, 320, W, 80);
    const vel = p.mouseIsPressed ? 0.35 : 0.12, ang = p.sin(p.frameCount * vel) * 0.5 - 0.9;
    p.stroke(100, 65, 35); p.strokeWeight(6);
    p.push(); p.translate(262, 230); p.rotate(ang); p.line(0, 0, 80, 0); p.line(60, 0, 78, -16); p.line(60, 0, 78, 14); p.pop();   // brazo que saluda
    p.line(138, 235, 80, 270);                                                                                                    // brazo quieto
    p.noStroke(); p.fill(255);
    p.ellipse(200, 300, 170, 170); p.ellipse(200, 205, 130, 130); p.ellipse(200, 120, 90, 90);
    p.fill(30); p.rect(160, 62, 80, 14); p.rect(172, 25, 56, 42, 4);          // sombrero
    p.fill(200, 40, 40); p.rect(168, 150, 64, 12, 6);                          // bufanda
    p.fill(0); p.ellipse(183, 112, 9, 9); p.ellipse(217, 112, 9, 9);
    for (let i = 0; i < 5; i++) p.ellipse(177 + i * 11.5, 134 + Math.abs(i - 2) * -2 + 4, 5, 5); // sonrisa
    p.fill(240, 130, 30); p.triangle(200, 120, 200, 130, 240, 126);            // nariz
    p.fill(30); p.ellipse(200, 200, 12, 12); p.ellipse(200, 235, 12, 12); p.ellipse(200, 270, 12, 12);
  };
};

new p5(rana, "c-rana");
new p5(conejo, "c-conejo");
new p5(cena, "c-cena");
new p5(nieve, "c-nieve");
new p5(muneco, "c-muneco");
