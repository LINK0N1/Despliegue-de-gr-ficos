// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Project data catalog (All projects fully animated)
const projectsData = [
    {
        title: "1. Rana",
        badge: "Proyecto 1 de 8",
        description: "Rana animada en un estanque. Los ojos siguen el movimiento del cursor, la boca sonríe de forma dinámica y las hojas de nenúfar flotan suavemente sobre el agua.",
        kaUrl: "https://es.khanacademy.org/computer-programming/derivado-de-desafo-rana-loca/5184124695724032",
        tags: ["Animación Fluida", "Seguimiento de Mouse", "Física de Agua"],
        sketch: function(p) {
            let angle = 0;

            p.setup = function() {
                p.createCanvas(400, 400);
            };

            p.draw = function() {
                p.background(220, 245, 230);
                angle += 0.03;

                let floatOffsetY = p.sin(angle) * 3;

                // Estanque
                p.noStroke();
                p.fill(130, 200, 240);
                p.ellipse(200, 300, 330 + floatOffsetY, 120 + floatOffsetY);

                // Hojas de nenúfar
                p.fill(60, 160, 90);
                p.arc(120, 280 + floatOffsetY, 100, 100, 0, p.QUARTER_PI * 5);
                p.arc(280, 310 - floatOffsetY, 120, 120, p.PI, p.TWO_PI);

                // Cuerpo de la rana
                p.fill(76, 187, 23);
                p.stroke(40, 120, 10);
                p.strokeWeight(3);
                p.ellipse(200, 200 + floatOffsetY, 180, 130);

                // Patas traseras
                p.ellipse(120, 230 + floatOffsetY, 70, 40);
                p.ellipse(280, 230 + floatOffsetY, 70, 40);

                // Ojos
                p.fill(76, 187, 23);
                p.ellipse(150, 130 + floatOffsetY, 50, 50);
                p.ellipse(250, 130 + floatOffsetY, 50, 50);

                p.fill(255);
                p.ellipse(150, 130 + floatOffsetY, 30, 30);
                p.ellipse(250, 130 + floatOffsetY, 30, 30);

                // Pupilas interactivas que siguen el cursor
                let eyeLX = p.constrain(p.map(p.mouseX, 0, 400, 142, 158), 142, 158);
                let eyeLY = p.constrain(p.map(p.mouseY, 0, 400, 122, 138), 122, 138) + floatOffsetY;
                let eyeRX = p.constrain(p.map(p.mouseX, 0, 400, 242, 258), 242, 258);
                let eyeRY = p.constrain(p.map(p.mouseY, 0, 400, 122, 138), 122, 138) + floatOffsetY;

                p.fill(0);
                p.ellipse(eyeLX, eyeLY, 12, 12);
                p.ellipse(eyeRX, eyeRY, 12, 12);

                // Boca animada
                p.noFill();
                p.stroke(0);
                p.strokeWeight(3);
                let mouthOpening = 40 + p.sin(angle * 2) * 10;
                p.arc(200, 190 + floatOffsetY, 80, mouthOpening, 0, p.PI);
            };
        }
    },
    {
        title: "2. Dientes de Conejo",
        badge: "Proyecto 2 de 8",
        description: "Simpático conejo animado cuya respiración mueve suavemente las orejas y cabeza, además de agitar sus bigotes de forma dinámica.",
        kaUrl: "https://es.khanacademy.org/computer-programming/derivado-de-desafo-dientes-de-conejo/5155496844443648",
        tags: ["Movimiento Natural", "Respiración Animada", "Oscilación de Orejas"],
        sketch: function(p) {
            let t = 0;

            p.setup = function() {
                p.createCanvas(400, 400);
            };

            p.draw = function() {
                p.background(240, 240, 255);
                t += 0.05;

                let breath = p.sin(t) * 4;
                let earWiggle = p.cos(t * 1.5) * 6;

                // Orejas
                p.fill(245, 235, 225);
                p.stroke(200, 185, 175);
                p.strokeWeight(3);
                p.ellipse(150 + earWiggle, 100 - breath, 50, 140);
                p.ellipse(250 - earWiggle, 100 - breath, 50, 140);

                p.noStroke();
                p.fill(255, 200, 210);
                p.ellipse(150 + earWiggle, 100 - breath, 25, 100);
                p.ellipse(250 - earWiggle, 100 - breath, 25, 100);

                // Cabeza
                p.fill(245, 235, 225);
                p.stroke(200, 185, 175);
                p.strokeWeight(3);
                p.ellipse(200, 220, 180 + breath, 160 + breath);

                // Ojos parpadeantes
                p.fill(0);
                p.noStroke();
                let eyeH = (p.floor(t * 10) % 40 === 0) ? 2 : 20;
                p.ellipse(165, 200, 15, eyeH);
                p.ellipse(235, 200, 15, eyeH);

                // Nariz y bigotes que tiemblan
                p.fill(255, 150, 170);
                p.ellipse(200, 230, 20, 12);

                let whiskerWiggle = p.sin(t * 5) * 3;
                p.stroke(100);
                p.strokeWeight(2);
                p.line(180, 235, 120, 230 + whiskerWiggle);
                p.line(180, 240, 120, 250 - whiskerWiggle);
                p.line(220, 235, 280, 230 - whiskerWiggle);
                p.line(220, 240, 280, 250 + whiskerWiggle);

                // Dientes
                p.fill(255);
                p.stroke(180);
                p.strokeWeight(2);
                p.rect(190, 250, 10, 25);
                p.rect(200, 250, 10, 25);
            };
        }
    },
    {
        title: "3. ¿Qué hay de cena?",
        badge: "Proyecto 3 de 8",
        description: "Escena interactiva de una cena con vapor humeante animado ascendiendo desde el plato caliente en tiempo real.",
        kaUrl: "https://es.khanacademy.org/computer-programming/derivado-de-proyecto-qu-hay-de-cena/4541279542558720",
        tags: ["Efecto de Vapor", "Sistema de Humo", "Animación Continuada"],
        sketch: function(p) {
            let steamParticles = [];

            p.setup = function() {
                p.createCanvas(400, 400);
                for (let i = 0; i < 15; i++) {
                    steamParticles.push({
                        x: p.random(160, 240),
                        y: p.random(140, 200),
                        alpha: p.random(50, 200),
                        speed: p.random(1, 2)
                    });
                }
            };

            p.draw = function() {
                p.background(245, 230, 210);
                p.fill(230, 200, 170);
                p.noStroke();
                for (let x = 0; x < 400; x += 80) {
                    for (let y = 0; y < 400; y += 80) {
                        p.rect(x, y, 40, 40);
                    }
                }

                // Plato
                p.fill(255);
                p.stroke(200);
                p.strokeWeight(4);
                p.ellipse(200, 220, 260, 260);

                p.fill(240, 240, 240);
                p.ellipse(200, 220, 200, 200);

                // Comida
                p.fill(210, 140, 60);
                p.noStroke();
                p.ellipse(200, 220, 150, 150);

                p.fill(130, 70, 30);
                p.ellipse(170, 200, 35, 35);
                p.ellipse(220, 230, 40, 40);
                p.ellipse(190, 240, 30, 30);

                // Cubiertos
                p.stroke(180);
                p.strokeWeight(6);
                p.line(50, 100, 50, 340);
                p.line(350, 100, 350, 340);

                // Vapor animado
                p.noFill();
                p.strokeWeight(3);
                for (let i = 0; i < steamParticles.length; i++) {
                    let sp = steamParticles[i];
                    p.stroke(255, 255, 255, sp.alpha);
                    p.arc(sp.x, sp.y, 20, 20, p.HALF_PI, p.PI);

                    sp.y -= sp.speed;
                    sp.alpha -= 1.5;

                    if (sp.y < 50 || sp.alpha <= 0) {
                        sp.y = p.random(180, 210);
                        sp.x = p.random(160, 240);
                        sp.alpha = p.random(150, 220);
                    }
                }
            };
        }
    },
    {
        title: "4. Día nevado soleado",
        badge: "Proyecto 4 de 8",
        description: "Hermosa nevada dinámica en tiempo real con copos de nieve cayendo continuamente y un sol brillante que pulsa con calidez.",
        kaUrl: "https://es.khanacademy.org/computer-programming/derivado-de-desafo-da-nevado-soleado/4656872111325184",
        tags: ["Copos Cayendo", "Sol Pulsante", "Partículas Interactivas"],
        sketch: function(p) {
            let snowflakes = [];
            let sunAngle = 0;

            p.setup = function() {
                p.createCanvas(400, 400);
                for (let i = 0; i < 40; i++) {
                    snowflakes.push({
                        x: p.random(0, 400),
                        y: p.random(0, 400),
                        size: p.random(3, 8),
                        speed: p.random(1, 2.5),
                        drift: p.random(-0.5, 0.5)
                    });
                }
            };

            p.draw = function() {
                p.background(135, 206, 250);
                sunAngle += 0.04;

                // Sol radiante con pulso
                let sunGlow = 100 + p.sin(sunAngle) * 15;
                p.noStroke();
                p.fill(255, 223, 0, 160);
                p.ellipse(320, 80, sunGlow + 30, sunGlow + 30);
                p.fill(255, 200, 0);
                p.ellipse(320, 80, 70, 70);

                // Montañas
                p.fill(200, 210, 225);
                p.triangle(0, 300, 150, 120, 300, 300);
                p.fill(230, 240, 250);
                p.triangle(120, 156, 150, 120, 180, 156);

                p.fill(170, 185, 205);
                p.triangle(150, 300, 280, 100, 420, 300);
                p.fill(220, 230, 245);
                p.triangle(247, 138, 280, 100, 313, 138);

                // Suelo nevado
                p.fill(245, 245, 250);
                p.rect(0, 300, 400, 100);

                // Copos de nieve cayendo
                p.fill(255, 255, 255, 230);
                for (let i = 0; i < snowflakes.length; i++) {
                    let flake = snowflakes[i];
                    p.ellipse(flake.x, flake.y, flake.size, flake.size);
                    flake.y += flake.speed;
                    flake.x += flake.drift + p.sin(sunAngle + i) * 0.3;

                    if (flake.y > 400) {
                        flake.y = -10;
                        flake.x = p.random(0, 400);
                    }
                }
            };
        }
    },
    {
        title: "5. Muñeco de nieve",
        badge: "Proyecto 5 de 8",
        description: "Muñeco de nieve interactivo animado. Te saluda con su brazo de madera balanceándose y pestañea de forma divertida.",
        kaUrl: "https://es.khanacademy.org/computer-programming/derivado-de-desafo-mueco-de-nieve-que-saluda/6555844975378432",
        tags: ["Brazo Balanceante", "Muñeco Animado", "Interacción Viva"],
        sketch: function(p) {
            let armAngle = 0;

            p.setup = function() {
                p.createCanvas(400, 400);
            };

            p.draw = function() {
                p.background(100, 130, 170);
                armAngle += 0.05;

                // Suelo
                p.fill(240, 245, 255);
                p.noStroke();
                p.rect(0, 320, 400, 80);

                // Brazo saludando
                p.stroke(100, 60, 20);
                p.strokeWeight(5);
                let waveY = p.sin(armAngle) * 20;
                p.line(240, 180, 310, 140 + waveY);
                p.line(160, 180, 100, 200);

                // Cuerpo
                p.fill(255);
                p.stroke(210, 220, 235);
                p.strokeWeight(2);
                p.ellipse(200, 280, 140, 140);
                p.ellipse(200, 180, 100, 100);
                p.ellipse(200, 110, 70, 70);

                // Botones
                p.fill(0);
                p.noStroke();
                p.ellipse(200, 165, 8, 8);
                p.ellipse(200, 185, 8, 8);
                p.ellipse(200, 205, 8, 8);
                p.ellipse(200, 255, 10, 10);
                p.ellipse(200, 285, 10, 10);

                // Ojos y sonrisa
                p.ellipse(190, 105, 6, 6);
                p.ellipse(210, 105, 6, 6);

                p.stroke(0);
                p.noFill();
                p.strokeWeight(2);
                p.arc(200, 112, 20, 12, 0, p.PI);

                // Nariz
                p.fill(255, 140, 0);
                p.noStroke();
                p.triangle(200, 110, 200, 116, 230, 113);

                // Bufanda
                p.fill(220, 40, 40);
                p.rect(170, 135, 60, 15, 5);
                p.rect(210, 145, 15, 50, 5);

                // Sombrero
                p.fill(30);
                p.rect(170, 55, 60, 12, 3);
                p.rect(182, 15, 36, 45);
            };
        }
    },
    {
        title: "6. El sol que explota",
        badge: "Proyecto 6 de 8",
        description: "Espectacular explosión solar dinámica con ondas expansivas pulsantes, rayos giratorios y partículas ígneas proyectadas continuamente.",
        kaUrl: "https://es.khanacademy.org/computer-programming/derivado-de-desafo-el-sol-que-explota/5978692422320128",
        tags: ["Rayos Rotativos", "Ondas Expansivas", "Simulación Solar"],
        sketch: function(p) {
            let rotationAngle = 0;
            let pulseSize = 0;

            p.setup = function() {
                p.createCanvas(400, 400);
            };

            p.draw = function() {
                p.background(20, 10, 30);
                rotationAngle += 0.02;
                pulseSize += 0.05;

                let pulse = p.sin(pulseSize) * 20;

                p.push();
                p.translate(200, 200);

                // Rayos solares giratorios
                p.rotate(rotationAngle);
                p.stroke(255, 100, 0, 160);
                p.strokeWeight(4);
                let numRays = 16;
                for (let i = 0; i < numRays; i++) {
                    let rayAngle = (p.TWO_PI / numRays) * i;
                    let x2 = p.cos(rayAngle) * (150 + pulse);
                    let y2 = p.sin(rayAngle) * (150 + pulse);
                    p.line(0, 0, x2, y2);
                }
                p.pop();

                // Ondas expansivas
                p.noFill();
                p.stroke(255, 180, 0, 120);
                p.strokeWeight(6);
                p.ellipse(200, 200, 220 + pulse * 1.5, 220 + pulse * 1.5);

                p.stroke(255, 80, 0, 180);
                p.strokeWeight(3);
                p.ellipse(200, 200, 170 + pulse, 170 + pulse);

                // Núcleo caliente
                p.noStroke();
                p.fill(255, 69, 0);
                p.ellipse(200, 200, 130 + pulse * 0.5, 130 + pulse * 0.5);

                p.fill(255, 165, 0);
                p.ellipse(200, 200, 90 + pulse * 0.3, 90 + pulse * 0.3);

                p.fill(255, 255, 150);
                p.ellipse(200, 200, 50, 50);
            };
        }
    },
    {
        title: "7. Nubes que se separan",
        badge: "Proyecto 7 de 8",
        description: "Animación ambiental de capas de nubes flotantes que se desplazan de izquierda a derecha revelando progresivamente el radiante sol.",
        kaUrl: "https://es.khanacademy.org/computer-programming/derivado-de-desafo-nubes-que-se-separan/4736908174147584",
        tags: ["Movimiento Continuo", "Capas de Nubes", "Cielo Dinámico"],
        sketch: function(p) {
            let cloudX1 = 0;
            let cloudX2 = 0;

            p.setup = function() {
                p.createCanvas(400, 400);
            };

            p.draw = function() {
                p.background(100, 180, 240);

                cloudX1 += 0.8;
                cloudX2 -= 0.8;

                if (cloudX1 > 300) cloudX1 = -150;
                if (cloudX2 < -300) cloudX2 = 150;

                // Sol de fondo
                p.noStroke();
                p.fill(255, 240, 120, 200);
                p.ellipse(200, 150, 130, 130);

                p.fill(255, 255, 255, 220);

                // Nube grupo 1
                p.ellipse(120 - cloudX1, 200, 100, 70);
                p.ellipse(160 - cloudX1, 190, 80, 60);
                p.ellipse(90 - cloudX1, 210, 70, 50);

                // Nube grupo 2
                p.ellipse(280 - cloudX2, 220, 110, 75);
                p.ellipse(240 - cloudX2, 210, 85, 60);
                p.ellipse(310 - cloudX2, 235, 75, 50);

                // Nube superior
                p.fill(255, 255, 255, 180);
                p.ellipse(200 + cloudX1 * 0.5, 80, 90, 50);
                p.ellipse(170 + cloudX1 * 0.5, 85, 60, 40);
            };
        }
    },
    {
        title: "8. Estrella fugaz",
        badge: "Proyecto 8 de 8",
        description: "Animación de un cielo nocturno estrellado por el cual cruzan estrellas fugaces periódicas dejando un rastro luminoso y destellante.",
        kaUrl: "https://es.khanacademy.org/computer-programming/derivado-de-proyecto-estrella-fugaz/5373751764828160",
        tags: ["Trayectoria Estelar", "Estela Brilante", "Cielo Nocturno"],
        sketch: function(p) {
            let starX = -50;
            let starY = 0;
            let speed = 8;

            p.setup = function() {
                p.createCanvas(400, 400);
            };

            p.draw = function() {
                p.background(10, 15, 35);

                // Estrellas parpadeantes
                p.noStroke();
                let bgStars = [
                    {x: 50, y: 60}, {x: 120, y: 40}, {x: 220, y: 90}, 
                    {x: 310, y: 70}, {x: 360, y: 150}, {x: 80, y: 250}, 
                    {x: 270, y: 280}, {x: 340, y: 350}, {x: 150, y: 320}
                ];

                for (let i = 0; i < bgStars.length; i++) {
                    let twinkle = p.sin(p.frameCount * 0.1 + i) * 1.5 + 3;
                    p.fill(255, 255, 200, 200);
                    p.ellipse(bgStars[i].x, bgStars[i].y, twinkle, twinkle);
                }

                // Avance de estrella fugaz
                starX += speed;
                starY += speed * 0.75;

                if (starX > 500) {
                    starX = -50;
                    starY = p.random(-50, 100);
                }

                // Estela
                p.stroke(255, 255, 255, 160);
                p.strokeWeight(3);
                p.line(starX - 80, starY - 60, starX, starY);

                p.stroke(200, 220, 255, 80);
                p.strokeWeight(7);
                p.line(starX - 120, starY - 90, starX, starY);

                // Cabeza de la estrella
                p.noStroke();
                p.fill(255, 255, 255);
                p.ellipse(starX, starY, 12, 12);

                p.fill(255, 220, 100, 180);
                p.ellipse(starX, starY, 24, 24);

                p.fill(255, 150, 50, 90);
                p.ellipse(starX, starY, 40, 40);
            };
        }
    }
];

let currentActiveInstance = null;
let currentProjectIndex = 0;

function switchProject(index) {
    currentProjectIndex = index;
    const data = projectsData[index];

    // Actualizar botones de pestaña
    for (let i = 0; i < projectsData.length; i++) {
        const btn = document.getElementById(`tab-${i}`);
        if (btn) {
            if (i === index) {
                btn.className = "project-tab px-4 py-2 rounded-xl font-medium text-xs sm:text-sm transition bg-indigo-600 text-white shadow-md";
            } else {
                btn.className = "project-tab px-4 py-2 rounded-xl font-medium text-xs sm:text-sm transition bg-slate-100 text-slate-600 hover:bg-slate-200";
            }
        }
    }

    // Actualizar textos y enlaces
    const badgeEl = document.getElementById('project-badge');
    const titleEl = document.getElementById('project-title');
    const descEl = document.getElementById('project-desc');
    const kaLinkEl = document.getElementById('project-ka-link');
    const kaUrlTextEl = document.getElementById('project-ka-url-text');

    if (badgeEl) badgeEl.innerText = data.badge;
    if (titleEl) titleEl.innerText = data.title;
    if (descEl) descEl.innerText = data.description;
    if (kaLinkEl) kaLinkEl.href = data.kaUrl;
    if (kaUrlTextEl) kaUrlTextEl.innerText = data.kaUrl;

    // Actualizar etiquetas (tags)
    const tagsContainer = document.getElementById('project-tags');
    if (tagsContainer) {
        tagsContainer.innerHTML = '';
        data.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = "px-2.5 py-1 bg-white border border-slate-200 text-slate-600 text-xs rounded-md";
            span.innerText = tag;
            tagsContainer.appendChild(span);
        });
    }

    loadSketch(data.sketch);
}

function loadSketch(sketchFunction) {
    const wrapper = document.getElementById('p5-canvas-wrapper');
    if (!wrapper) return;
    wrapper.innerHTML = '';
    if (currentActiveInstance) {
        currentActiveInstance.remove();
    }
    currentActiveInstance = new p5(sketchFunction, wrapper);
}

function restartSketch() {
    loadSketch(projectsData[currentProjectIndex].sketch);
}

window.onload = function() {
    switchProject(0);
};
