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

// Project data catalog
const projectsData = [
    {
        title: "1. Rana",
        badge: "Proyecto 1 de 5",
        description: "Ilustración colorida de una rana basada en el desafío clásico de Khan Academy. Utiliza primitivas geométricas para los ojos abultados, el cuerpo y las extremidades, recreando un diseño amigable y detallado.",
        kaUrl: "https://es.khanacademy.org/computer-programming/derivado-de-desafo-rana-loca/5184124695724032",
        tags: ["p5.js setup/draw", "Elipses y Arcos", "Diseño Vectorial 2D"],
        sketch: function(p) {
            p.setup = function() {
                p.createCanvas(400, 400);
                p.noLoop();
            };
            p.draw = function() {
                p.background(220, 245, 230);
                
                // Estanque / Fondo ovalado
                p.noStroke();
                p.fill(130, 200, 240);
                p.ellipse(200, 300, 320, 120);
                
                // Hojas de nenúfar
                p.fill(60, 160, 90);
                p.arc(120, 280, 100, 100, 0, p.QUARTER_PI * 5);
                p.arc(280, 310, 120, 120, p.PI, p.TWO_PI);

                // Cuerpo de la rana
                p.fill(76, 187, 23);
                p.stroke(40, 120, 10);
                p.strokeWeight(3);
                p.ellipse(200, 200, 180, 130);

                // Patas traseras
                p.ellipse(120, 230, 70, 40);
                p.ellipse(280, 230, 70, 40);

                // Ojos (Bases y pupilas)
                p.fill(76, 187, 23);
                p.ellipse(150, 130, 50, 50);
                p.ellipse(250, 130, 50, 50);
                
                p.fill(255);
                p.ellipse(150, 130, 30, 30);
                p.ellipse(250, 130, 30, 30);
                
                p.fill(0);
                p.ellipse(150, 130, 12, 12);
                p.ellipse(250, 130, 12, 12);

                // Boca alegre
                p.noFill();
                p.stroke(0);
                p.strokeWeight(3);
                p.arc(200, 190, 80, 40, 0, p.PI);
            };
        }
    },
    {
        title: "2. Dientes de Conejo",
        badge: "Proyecto 2 de 5",
        description: "Simpático diseño de la cara de un conejo con orejas largas y sus característicos incisivos prominentes. Totalmente adaptado con proporciones relativas en p5.js.",
        kaUrl: "https://es.khanacademy.org/computer-programming/derivado-de-desafo-dientes-de-conejo/5155496844443648",
        tags: ["p5.js Primitivas", "Curvas y Simetría", "Geometría Interactiva"],
        sketch: function(p) {
            p.setup = function() {
                p.createCanvas(400, 400);
                p.noLoop();
            };
            p.draw = function() {
                p.background(240, 240, 255);

                // Orejas de conejo
                p.fill(245, 235, 225);
                p.stroke(200, 185, 175);
                p.strokeWeight(3);
                p.ellipse(150, 100, 50, 140);
                p.ellipse(250, 100, 50, 140);
                
                // Interior de las orejas
                p.noStroke();
                p.fill(255, 200, 210);
                p.ellipse(150, 100, 25, 100);
                p.ellipse(250, 100, 25, 100);

                // Cabeza
                p.fill(245, 235, 225);
                p.stroke(200, 185, 175);
                p.strokeWeight(3);
                p.ellipse(200, 220, 180, 160);

                // Ojos
                p.fill(0);
                p.noStroke();
                p.ellipse(165, 200, 15, 20);
                p.ellipse(235, 200, 15, 20);

                // Nariz y bigotes
                p.fill(255, 150, 170);
                p.ellipse(200, 230, 20, 12);
                
                p.stroke(100);
                p.strokeWeight(2);
                p.line(180, 235, 120, 230);
                p.line(180, 240, 120, 250);
                p.line(220, 235, 280, 230);
                p.line(220, 240, 280, 250);

                // Dientes característicos
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
        badge: "Proyecto 3 de 5",
        description: "Ilustración de una mesa servida con un plato de comida (como un tazón de sopa humeante o plato principal) utilizando patrones repetitivos y técnicas de color en p5.js.",
        kaUrl: "https://es.khanacademy.org/computer-programming/derivado-de-proyecto-qu-hay-de-cena/4541279542558720",
        tags: ["Bucles y Patrones", "Composición de Mesa", "Renderizado 2D"],
        sketch: function(p) {
            p.setup = function() {
                p.createCanvas(400, 400);
                p.noLoop();
            };
            p.draw = function() {
                // Mantel de mesa a cuadros simulados
                p.background(245, 230, 210);
                p.fill(230, 200, 170);
                p.noStroke();
                for (let x = 0; x < 400; x += 80) {
                    for (let y = 0; y < 400; y += 80) {
                        p.rect(x, y, 40, 40);
                    }
                }

                // Plato principal
                p.fill(255);
                p.stroke(200);
                p.strokeWeight(4);
                p.ellipse(200, 220, 260, 260);

                p.fill(240, 240, 240);
                p.ellipse(200, 220, 200, 200);

                // Alimento en el plato (Espagueti / Comida deliciosa)
                p.fill(210, 140, 60);
                p.noStroke();
                p.ellipse(200, 220, 150, 150);
                
                // Albóndigas / Detalles
                p.fill(130, 70, 30);
                p.ellipse(170, 200, 35, 35);
                p.ellipse(220, 230, 40, 40);
                p.ellipse(190, 240, 30, 30);

                // Tenedor y Cuchillo laterales
                p.stroke(180);
                p.strokeWeight(6);
                p.line(50, 100, 50, 340);
                p.line(350, 100, 350, 340);
            };
        }
    },
    {
        title: "4. Día nevado soleado",
        badge: "Proyecto 4 de 5",
        description: "Escena de paisaje que combina un brillante sol invernal con copos de nieve cayendo sobre un fondo montañoso y nevado.",
        kaUrl: "https://es.khanacademy.org/computer-programming/derivado-de-desafo-da-nevado-soleado/4656872111325184",
        tags: ["Paisaje Natural", "Bucles Random", "Gradientes y Cielo"],
        sketch: function(p) {
            p.setup = function() {
                p.createCanvas(400, 400);
                p.noLoop();
            };
            p.draw = function() {
                // Cielo invernal luminoso
                p.background(135, 206, 250);

                // Sol brillante
                p.noStroke();
                p.fill(255, 223, 0, 180);
                p.ellipse(320, 80, 100, 100);
                p.fill(255, 200, 0);
                p.ellipse(320, 80, 70, 70);

                // Montañas nevadas al fondo
                p.fill(200, 210, 225);
                p.triangle(0, 300, 150, 120, 300, 300);
                p.fill(230, 240, 250); // Cima nevada
                p.triangle(120, 156, 150, 120, 180, 156);

                p.fill(170, 185, 205);
                p.triangle(150, 300, 280, 100, 420, 300);
                p.fill(220, 230, 245);
                p.triangle(247, 138, 280, 100, 313, 138);

                // Suelo nevado
                p.fill(245, 245, 250);
                p.rect(0, 300, 400, 100);

                // Copos de nieve decorativos
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
        badge: "Proyecto 5 de 5",
        description: "Clásico muñeco de nieve saludando alegremente, equipado con sombrero de copa, bufanda roja y detalles invernales adaptados.",
        kaUrl: "https://es.khanacademy.org/computer-programming/derivado-de-desafo-mueco-de-nieve-que-saluda/6555844975378432",
        tags: ["Personaje Animado", "Accesorios detallados", "p5.js interactivo"],
        sketch: function(p) {
            p.setup = function() {
                p.createCanvas(400, 400);
                p.noLoop();
            };
            p.draw = function() {
                // Fondo cielo de invierno atardecer
                p.background(100, 130, 170);

                // Suelo nevado
                p.fill(240, 245, 255);
                p.noStroke();
                p.rect(0, 320, 400, 80);

                // Cuerpo del muñeco de nieve (tres esferas)
                p.fill(255);
                p.stroke(210, 220, 235);
                p.strokeWeight(2);
                p.ellipse(200, 280, 140, 140); // Base
                p.ellipse(200, 180, 100, 100); // Centro
                p.ellipse(200, 110, 70, 70);   // Cabeza

                // Botones negros
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

                // Nariz de zanahoria
                p.fill(255, 140, 0);
                p.noStroke();
                p.triangle(200, 110, 200, 116, 230, 113);

                // Bufanda roja
                p.fill(220, 40, 40);
                p.rect(170, 135, 60, 15, 5);
                p.rect(210, 145, 15, 50, 5);

                // Sombrero de copa
                p.fill(30);
                p.rect(170, 55, 60, 12, 3);
                p.rect(182, 15, 36, 45);
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
                btn.className = "project-tab px-5 py-2.5 rounded-xl font-medium text-sm transition bg-indigo-600 text-white shadow-md";
            } else {
                btn.className = "project-tab px-5 py-2.5 rounded-xl font-medium text-sm transition bg-slate-100 text-slate-600 hover:bg-slate-200";
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
    wrapper.innerHTML = ''; // Clear previous canvas instance if any
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
