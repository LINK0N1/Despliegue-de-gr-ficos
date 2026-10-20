// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Project data catalog (8 Projects including the 3 new requested graphics)
const projectsData = [
    {
        title: "1. Rana",
        badge: "Proyecto 1 de 8",
        description: "Ilustración colorida de una rana basada en el desafío clásico de Khan Academy. Utiliza primitivas geométricas para los ojos abultados, el cuerpo y las extremidades.",
        kaUrl: "https://es.khanacademy.org/computer-programming/derivado-de-desafo-rana-loca/5184124695724032",
        tags: ["p5.js setup/draw", "Elipses y Arcos", "Diseño Vectorial 2D"],
        sketch: function(p) {
            p.setup = function() {
                p.createCanvas(400, 400);
                p.noLoop();
            };
            p.draw = function() {
                p.background(220, 245, 230);
                p.noStroke();
                p.fill(130, 200, 240);
                p.ellipse(200, 300, 320, 120);
                p.fill(60, 160, 90);
                p.arc(120, 280, 100, 100, 0, p.QUARTER_PI * 5);
                p.arc(280, 310, 120, 120, p.PI, p.TWO_PI);

                p.fill(76, 187, 23);
                p.stroke(40, 120, 10);
                p.strokeWeight(3);
                p.ellipse(200, 200, 180, 130);
                p.ellipse(120, 230, 70, 40);
                p.ellipse(280, 230, 70, 40);

                p.fill(76, 187, 23);
                p.ellipse(150, 130, 50, 50);
                p.ellipse(250, 130, 50, 50);
                p.fill(255);
                p.ellipse(150, 130, 30, 30);
                p.ellipse(250, 130, 30, 30);
                p.fill(0);
                p.ellipse(150, 130, 12, 12);
                p.ellipse(250, 130, 12, 12);

                p.noFill();
                p.stroke(0);
                p.strokeWeight(3);
                p.arc(200, 190, 80, 40, 0, p.PI);
            };
        }
    },
    {
        title: "2. Dientes de Conejo",
        badge: "Proyecto 2 de 8",
        description: "Simpático diseño de la cara de un conejo con orejas largas y sus característicos incisivos prominentes con proporciones relativas en p5.js.",
        kaUrl: "https://es.khanacademy.org/computer-programming/derivado-de-desafo-dientes-de-conejo/5155496844443648",
        tags: ["p5.js Primitivas", "Curvas y Simetría", "Geometría Interactiva"],
        sketch: function(p) {
            p.setup = function() {
                p.createCanvas(400, 400);
                p.noLoop();
            };
            p.draw = function() {
                p.background(240, 240, 255);
                p.fill(245, 235, 225);
                p.stroke(200, 185, 175);
                p.strokeWeight(3);
                p.ellipse(150, 100, 50, 140);
                p.ellipse(250, 100, 50, 140);
                p.noStroke();
                p.fill(255, 200, 210);
                p.ellipse(150, 100, 25, 100);
                p.ellipse(250, 100, 25, 100);

                p.fill(245, 235, 225);
                p.stroke(200, 185, 175);
                p.strokeWeight(3);
                p.ellipse(200, 220, 180, 160);

                p.fill(0);
                p.noStroke();
                p.ellipse(165, 200, 15, 20);
                p.ellipse(235, 200, 15, 20);

                p.fill(255, 150, 170);
                p.ellipse(200, 230, 20, 12);
                p.stroke(100);
                p.strokeWeight(2);
                p.line(180, 235, 120, 230);
                p.line(180, 240, 120, 250);
                p.line(220, 235, 280, 230);
                p.line(220, 240, 280, 250);

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
        description: "Ilustración de una mesa servida con un plato de comida utilizando patrones repetitivos y técnicas de color en p5.js.",
        kaUrl: "https://es.khanacademy.org/computer-programming/derivado-de-proyecto-qu-hay-de-cena/4541279542558720",
        tags: ["Bucles y Patrones", "Composición de Mesa", "Renderizado 2D"],
        sketch: function(p) {
            p.setup = function() {
                p.createCanvas(400, 400);
                p.noLoop();
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
                p.fill(255);
                p.stroke(200);
                p.strokeWeight(4);
                p.ellipse(200, 220, 260, 260);
                p.fill(240, 240, 240);
                p.ellipse(200, 220, 200, 200);

                p.fill(210, 140, 60);
                p.noStroke();
                p.ellipse(200, 220, 150, 150);
                p.fill(130, 70, 30);
                p.ellipse(170, 200, 35, 35);
                p.ellipse(220, 230, 40, 40);
                p.ellipse(190, 240, 30, 30);

                p.stroke(180);
                p.strokeWeight(6);
                p.line(50, 100, 50, 340);
                p.line(350, 100, 350, 340);
            };
        }
    },
    {
        title: "4. Día nevado soleado",
        badge: "Proyecto 4 de 8",
        description: "Escena de paisaje que combina un brillante sol invernal con copos de nieve cayendo sobre un fondo montañoso y nevado.",
        kaUrl: "https://es.khanacademy.org/computer-programming/derivado-de-desafo-da-nevado-soleado/4656872111325184",
        tags: ["Paisaje Natural", "Bucles Random", "Gradientes y Cielo"],
        sketch: function(p) {
            p.setup = function() {
                p.createCanvas(400, 400);
                p.noLoop();
            };
            p.draw = function() {
                p.background(135, 206, 250);
                p.noStroke();
                p.fill(255, 223, 0, 180);
                p.ellipse(320, 80, 100, 100);
                p.fill(255, 200, 0);
                p.ellipse(320, 80, 70, 70);

                p.fill(200, 210, 225);
                p.triangle(0, 300, 150, 120, 300, 300);
                p.fill(230, 240, 250);
                p.triangle(120, 156, 150, 120, 180, 156);

                p.fill(170, 185, 205);
                p.triangle(150, 300, 280, 100, 420, 300);
                p.fill(220, 230, 245);
                p.triangle(247, 138, 280, 100, 313, 138);

                p.fill(245, 245, 250);
                p.rect(0, 300, 400, 100);

                p.fill(255, 255, 255, 220);
                let snowX = [50, 90, 140, 200, 250, 310, 360, 70, 180, 280];
                let snowY = [40, 100, 60, 130, 80, 50, 120, 180, 160, 190];
                for (let i = 0; i < snowX.length; i++) {
                    p.ellipse(snowX[i], snowY[i], 8, 8);
                }
            };
        }
    },
    {
        title: "5. Muñeco de nieve",
        badge: "Proyecto 5 de 8",
        description: "Clásico muñeco de nieve saludando alegremente, equipado con sombrero de copa, bufanda roja y detalles invernales adaptados.",
        kaUrl: "https://es.khanacademy.org/computer-programming/derivado-de-desafo-mueco-de-nieve-que-saluda/6555844975378432",
        tags: ["Personaje Animado", "Accesorios detallados", "p5.js interactivo"],
        sketch: function(p) {
            p.setup = function() {
                p.createCanvas(400, 400);
                p.noLoop();
            };
            p.draw = function() {
                p.background(100, 130, 170);
                p.fill(240, 245, 255);
                p.noStroke();
                p.rect(0, 320, 400, 80);

                p.fill(255);
                p.stroke(210, 220, 235);
                p.strokeWeight(2);
                p.ellipse(200, 280, 140, 140);
                p.ellipse(200, 180, 100, 100);
                p.ellipse(200, 110, 70, 70);

                p.fill(0);
                p.noStroke();
                p.ellipse(200, 165, 8, 8);
                p.ellipse(200, 185, 8, 8);
                p.ellipse(200, 205, 8, 8);
                p.ellipse(200, 255, 10, 10);
                p.ellipse(200, 285, 10, 10);

                p.ellipse(190, 105, 6, 6);
                p.ellipse(210, 105, 6, 6);
                p.stroke(0);
                p.noFill();
                p.strokeWeight(2);
                p.arc(200, 112, 20, 12, 0, p.PI);

                p.fill(255, 140, 0);
                p.noStroke();
                p.triangle(200, 110, 200, 116, 230, 113);

                p.fill(220, 40, 40);
                p.rect(170, 135, 60, 15, 5);
                p.rect(210, 145, 15, 50, 5);

                p.fill(30);
                p.rect(170, 55, 60, 12, 3);
                p.rect(182, 15, 36, 45);
            };
        }
    },
    {
        title: "6. El sol que explota",
        badge: "Proyecto 6 de 8",
        description: "Gráfico interactivo de un sol ardiente con efectos de explosión y destellos solares en expansión, adaptado desde el desafío de Khan Academy.",
        kaUrl: "https://es.khanacademy.org/computer-programming/derivado-de-desafo-el-sol-que-explota/5978692422320128",
        tags: ["Efecto de Explosión", "Gradientes Solares", "Animación en Bucle"],
        sketch: function(p) {
            p.setup = function() {
                p.createCanvas(400, 400);
                p.noLoop();
            };
            p.draw = function() {
                // Cielo cósmico oscuro
                p.background(20, 20, 40);

                // Rayos de explosión de fondo
                p.stroke(255, 100, 0, 150);
                p.strokeWeight(4);
                for (let i = 0; i < p.TWO_PI; i += p.QUARTER_PI) {
                    let x2 = 200 + p.cos(i) * 160;
                    let y2 = 200 + p.sin(i) * 160;
                    p.line(200, 200, x2, y2);
                }

                // Círculos concéntricos de onda expansiva
                p.noFill();
                p.stroke(255, 150, 50, 100);
                p.strokeWeight(6);
                p.ellipse(200, 200, 220, 220);
                p.stroke(255, 200, 0, 150);
                p.strokeWeight(4);
                p.ellipse(200, 200, 170, 170);

                // Núcleo del sol que explota
                p.noStroke();
                p.fill(255, 69, 0);
                p.ellipse(200, 200, 130, 130);
                p.fill(255, 165, 0);
                p.ellipse(200, 200, 90, 90);
                p.fill(255, 255, 0);
                p.ellipse(200, 200, 50, 50);
            };
        }
    },
    {
        title: "7. Nubes que se separan",
        badge: "Proyecto 7 de 8",
        description: "Ilustración atmosférica de formaciones nubosas que se desplazan y separan revelando un cielo despejado entre ellas.",
        kaUrl: "https://es.khanacademy.org/computer-programming/derivado-de-desafo-nubes-que-se-separan/4736908174147584",
        tags: ["Paisaje Atmosférico", "Formas Orgánicas", "Composición de Nubes"],
        sketch: function(p) {
            p.setup = function() {
                p.createCanvas(400, 400);
                p.noLoop();
            };
            p.draw = function() {
                // Cielo celeste brillante
                p.background(100, 180, 240);

                // Sol brillante central
                p.noStroke();
                p.fill(255, 240, 150, 150);
                p.ellipse(200, 150, 140, 140);

                // Nube izquierda (desplazándose a la izquierda)
                p.fill(255, 255, 255, 230);
                p.noStroke();
                p.ellipse(120, 200, 100, 70);
                p.ellipse(160, 190, 80, 60);
                p.ellipse(90, 210, 70, 50);

                // Nube derecha (desplazándose a la derecha)
                p.ellipse(280, 220, 110, 75);
                p.ellipse(240, 210, 85, 60);
                p.ellipse(310, 235, 75, 50);

                // Pequeña nube superior
                p.ellipse(200, 90, 90, 50);
                p.ellipse(170, 95, 60, 40);
                p.ellipse(230, 95, 60, 40);
            };
        }
    },
    {
        title: "8. Estrella fugaz",
        badge: "Proyecto 8 de 8",
        description: "Hermosa escena nocturna protagonizada por una estrella fugaz surcando el firmamento con su estela de partículas brillantes.",
        kaUrl: "https://es.khanacademy.org/computer-programming/derivado-de-proyecto-estrella-fugaz/5373751764828160",
        tags: ["Cielo Nocturno", "Estela de Partículas", "Geometría Vectorial"],
        sketch: function(p) {
            p.setup = function() {
                p.createCanvas(400, 400);
                p.noLoop();
            };
            p.draw = function() {
                // Cielo nocturno profundo
                p.background(10, 15, 35);

                // Estrellas estáticas de fondo
                p.fill(255, 255, 200);
                p.noStroke();
                let starsX = [50, 120, 220, 310, 360, 80, 270, 340, 150];
                let starsY = [60, 40, 90, 70, 150, 250, 280, 350, 320];
                for (let i = 0; i < starsX.length; i++) {
                    p.ellipse(starsX[i], starsY[i], 4, 4);
                }

                // Estela de la estrella fugaz (Líneas translúcidas en diagonal)
                p.stroke(255, 255, 255, 100);
                p.strokeWeight(3);
                p.line(50, 50, 300, 250);
                p.stroke(200, 220, 255, 60);
                p.strokeWeight(6);
                p.line(70, 45, 280, 235);

                // Cabeza de la estrella fugaz (Brillante y llamativa)
                p.noStroke();
                p.fill(255, 255, 255);
                p.ellipse(310, 260, 16, 16);
                p.fill(255, 220, 100, 200);
                p.ellipse(310, 260, 30, 30);
                p.fill(255, 150, 50, 100);
                p.ellipse(310, 260, 50, 50);
            };
        }
    }
];

let currentActiveInstance = null;
let currentProjectIndex = 0;

function switchProject(index) {
    currentProjectIndex = index;
    const data = projectsData[index];

    // Update UI tabs
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

    // Update text details
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

    // Update tags
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

    // Reload p5 canvas sketch
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

// Initialize first project on page load
window.onload = function() {
    switchProject(0);
};
