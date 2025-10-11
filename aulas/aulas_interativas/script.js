// Script para funcionalidades interativas das aulas
// Versão simplificada para páginas HTML estáticas

let currentSlide = 0;
let totalSlides = 0;

// Inicialização quando a página carrega
document.addEventListener("DOMContentLoaded", function () {
  initializeSlides();
  updateNavigation();
});

// Inicializar sistema de slides
function initializeSlides() {
  const slides = document.querySelectorAll(".slide");
  totalSlides = slides.length;

  // Esconder todos os slides exceto o ativo
  slides.forEach((slide, index) => {
    if (!slide.classList.contains("active")) {
      slide.style.display = "none";
    }
  });

  updateNavigation();
}

// Navegação de slides
function goToSlide(slideIndex) {
  if (slideIndex < 0 || slideIndex >= totalSlides) return;

  // Esconder slide atual
  const currentSlideElement = document.querySelector(".slide.active");
  if (currentSlideElement) {
    currentSlideElement.style.display = "none";
    currentSlideElement.classList.remove("active");
  }

  // Mostrar novo slide
  const newSlide = document.getElementById(`slide-${slideIndex}`);
  if (newSlide) {
    newSlide.style.display = "block";
    newSlide.classList.add("active");
  }

  currentSlide = slideIndex;
  updateNavigation();
  updateNavDots();
}

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    goToSlide(currentSlide + 1);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    goToSlide(currentSlide - 1);
  }
}

// Atualizar controles de navegação
function updateNavigation() {
  const prevBtn = document.querySelectorAll(".nav-button")[0];
  const nextBtn = document.querySelectorAll(".nav-button")[1];
  const counter = document.querySelector(".slide-counter");

  if (prevBtn) prevBtn.disabled = currentSlide === 0;
  if (nextBtn) nextBtn.disabled = currentSlide === totalSlides - 1;
  if (counter) counter.textContent = `${currentSlide + 1} / ${totalSlides}`;
}

// Atualizar pontos de navegação
function updateNavDots() {
  const dots = document.querySelectorAll(".nav-dot");
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// ========== FUNÇÕES INTERATIVAS DAS AULAS ==========

// Conectar computadores (Aula 1)
function connectComputer(element) {
  element.classList.toggle("connected");
  element.style.transform = element.classList.contains("connected")
    ? "scale(1.1)"
    : "scale(1)";
  element.style.boxShadow = element.classList.contains("connected")
    ? "0 0 20px #4ade80"
    : "none";

  // Animação da linha de conexão
  const line = element.querySelector(".connection-line");
  if (line) {
    line.style.width = element.classList.contains("connected") ? "100%" : "0";
    line.style.background = element.classList.contains("connected")
      ? "#4ade80"
      : "#e2e8f0";
  }
}

function connectAllComputers() {
  const computers = document.querySelectorAll(".computer");
  computers.forEach((computer) => {
    if (!computer.classList.contains("connected")) {
      connectComputer(computer);
    }
  });

  // Efeito de celebração
  setTimeout(() => {
    alert(
      "🎉 Todos os computadores estão conectados! Você entendeu como funciona a internet!"
    );
  }, 500);
}

// Desenhar internet (Aula 1)
function drawInternet() {
  const drawingArea = document.getElementById("drawingArea1");
  if (drawingArea) {
    drawingArea.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <div style="font-size: 3rem; margin-bottom: 10px;">🌐</div>
                <p>Que legal! Você desenhou a internet como uma grande rede conectando tudo!</p>
                <p style="font-size: 0.9rem; color: #6b46c1;">💡 A internet é exatamente isso: uma teia gigante de conexões!</p>
            </div>
        `;
    drawingArea.style.background = "#f0f9ff";
    drawingArea.style.border = "2px solid #4ade80";
  }
}

// Visitar sites (Aula 1)
function visitSite(siteName) {
  const messages = {
    Google:
      "🔍 O Google ajuda você a encontrar informações sobre qualquer coisa!",
    YouTube: "📺 O YouTube tem vídeos sobre todos os assuntos imagináveis!",
    Jogos: "🎮 Sites de jogos são ótimos para se divertir e aprender!",
  };

  alert(
    `${messages[siteName]}\n\n💡 Dica: Sempre pergunte para um adulto antes de visitar sites novos!`
  );
}

// Construtor de sites (Aula 1)
function addHTML() {
  const preview = document.getElementById("websitePreview");
  if (preview) {
    preview.innerHTML = `
            <div style="border: 2px solid #4ade80; padding: 20px; border-radius: 8px; background: #f0fdf4;">
                <h3 style="color: #166534; margin-bottom: 10px;">📄 HTML Adicionado!</h3>
                <p>Agora seu site tem estrutura e conteúdo!</p>
                <div style="background: white; padding: 10px; border-radius: 4px; margin-top: 10px;">
                    <strong>Título do Site</strong><br>
                    <em>Texto e conteúdo aqui...</em>
                </div>
            </div>
        `;
  }
}

function addCSS() {
  const preview = document.getElementById("websitePreview");
  if (preview) {
    preview.innerHTML = `
            <div style="border: 2px solid #8b5cf6; padding: 20px; border-radius: 8px; background: linear-gradient(135deg, #f3e8ff, #e9d5ff);">
                <h3 style="color: #6b21a8; margin-bottom: 10px;">🎨 CSS Adicionado!</h3>
                <p>Agora seu site está bonito e colorido!</p>
                <div style="background: linear-gradient(45deg, #ff6b6b, #4ecdc4); color: white; padding: 15px; border-radius: 8px; margin-top: 10px; text-align: center;">
                    <strong>🌈 Site Colorido!</strong><br>
                    <span style="font-size: 0.9rem;">Cores e estilos incríveis!</span>
                </div>
            </div>
        `;
  }
}

function addJS() {
  const preview = document.getElementById("websitePreview");
  if (preview) {
    preview.innerHTML = `
            <div style="border: 2px solid #f59e0b; padding: 20px; border-radius: 8px; background: linear-gradient(135deg, #fef3c7, #fde68a);">
                <h3 style="color: #92400e; margin-bottom: 10px;">⚡ JavaScript Adicionado!</h3>
                <p>Agora seu site tem movimento e interatividade!</p>
                <button onclick="alert('🎉 JavaScript funcionando!')" style="background: #f59e0b; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
                    🖱️ Clique Aqui!
                </button>
            </div>
        `;
  }
}

function resetWebsite() {
  const preview = document.getElementById("websitePreview");
  if (preview) {
    preview.innerHTML =
      "<p>👆 Clique nas partes mágicas acima para construir um site!</p>";
  }
}

// Explicar tags (Aula 2)
function explainTag(tagName) {
  const explanations = {
    html: '🏗️ A tag &lt;html&gt; é como a casa onde tudo mora. Ela diz: "Aqui começa o site!"',
    head: "📋 A tag &lt;head&gt; guarda informações importantes, como o título da página.",
    body: "🎭 A tag &lt;body&gt; é onde aparece tudo que você vê: textos, imagens, botões!",
    h1: "👑 A tag &lt;h1&gt; cria títulos grandões e importantes.",
    p: "📝 A tag &lt;p&gt; é para parágrafos, onde você escreve textos.",
    img: "🖼️ A tag &lt;img&gt; mostra imagens e fotos no site.",
    a: "🔗 A tag &lt;a&gt; cria links para outros sites ou páginas.",
  };

  const explanationDiv = document.getElementById("tagExplanation");
  if (explanationDiv) {
    explanationDiv.style.display = "block";
    document.getElementById("tagText").innerHTML =
      explanations[tagName] || "Etiqueta não encontrada";
  }
}

// Desenhar site (Aula 2)
function drawWebsite() {
  const drawingArea = document.getElementById("drawingArea2");
  if (drawingArea) {
    drawingArea.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <div style="font-size: 3rem; margin-bottom: 10px;">🏗️</div>
                <p>Incrível! Você desenhou um site completo!</p>
                <p style="font-size: 0.9rem; color: #6b46c1;">💡 Todo site começa com uma ideia como essa!</p>
            </div>
        `;
    drawingArea.style.background = "#f0f9ff";
    drawingArea.style.border = "2px solid #4ade80";
  }
}

// Abrir CodePen (Aula 2)
function openCodePen() {
  window.open("https://codepen.io/", "_blank");
}

// Mostrar primeiro site (Aula 1)
function showFirstWebsite() {
  const infoDiv = document.getElementById("firstWebsiteInfo");
  if (infoDiv) {
    infoDiv.innerHTML = `
            <div style="background: #f7fafc; padding: 15px; border-radius: 8px; margin-top: 10px;">
                <p><strong>🌟 O primeiro site do mundo</strong> foi criado em 1991 por Tim Berners-Lee.</p>
                <p>Era bem simples, só tinha texto e alguns links.</p>
                <p>Você pode visitá-lo em: <a href="http://info.cern.ch/hypertext/WWW/TheProject.html" target="_blank">info.cern.ch</a></p>
            </div>
        `;
  }
}

// Mostrar exemplo HTML (Aula 2)
function showHTMLExample() {
  alert(`🌟 Exemplo de como sites famosos começaram:

📄 Todo site começa com HTML simples
🎨 Depois ganha cores com CSS
⚡ E movimento com JavaScript

Continue aprendendo e você também criará sites incríveis! 🚀`);
}

// Função de celebração genérica
function celebrateCompletion() {
  // Efeito de confete ou animação
  const celebration = document.createElement("div");
  celebration.innerHTML = "🎉🎊✨🎈🎆";
  celebration.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 4rem;
        z-index: 1000;
        pointer-events: none;
        animation: celebrate 2s ease-out;
    `;

  document.body.appendChild(celebration);

  setTimeout(() => {
    document.body.removeChild(celebration);
  }, 2000);
}

// ========== FUNÇÕES DA AULA 4: CSS ==========

// Selecionar cor (Aula 4)
function selectColor(color) {
  // Aplicar a cor selecionada ao fundo da página
  document.body.style.backgroundColor = color;

  // Dar feedback visual
  alert(`🎨 Cor ${color} selecionada! Olhe como ficou bonito!`);

  // Resetar após alguns segundos
  setTimeout(() => {
    document.body.style.backgroundColor = "";
  }, 3000);
}

// Experimentar CSS (Aula 4)
function tryCSS() {
  const body = document.body;
  const originalBg = body.style.backgroundColor;
  const originalColor = body.style.color;

  // Aplicar estilos de exemplo
  body.style.backgroundColor = "#e8f4f8";
  body.style.color = "#2c3e50";
  body.style.fontFamily = "Arial, sans-serif";

  alert("🎨 CSS aplicado! Veja como mudou a aparência da página!");

  // Resetar após alguns segundos
  setTimeout(() => {
    body.style.backgroundColor = originalBg;
    body.style.color = originalColor;
    body.style.fontFamily = "";
  }, 5000);
}

// Mudar fontes (Aula 4)
function changeFonts() {
  const fonts = [
    "Arial, sans-serif",
    '"Comic Sans MS", cursive',
    "Georgia, serif",
    '"Times New Roman", serif',
    "Impact, sans-serif",
  ];

  const currentFont = document.body.style.fontFamily || "Arial, sans-serif";
  const currentIndex = fonts.indexOf(currentFont);
  const nextIndex = (currentIndex + 1) % fonts.length;

  document.body.style.fontFamily = fonts[nextIndex];

  alert(`🔤 Fonte mudada para: ${fonts[nextIndex].split(",")[0]}!`);
}

// Aplicar paleta de cores (Aula 4)
function applyPalette(palette) {
  const palettes = {
    rainbow: {
      background:
        "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7)",
      text: "#2c3e50",
    },
    ocean: {
      background: "linear-gradient(45deg, #74b9ff, #0984e3, #00b894, #00cec9)",
      text: "#ffffff",
    },
    sunset: {
      background: "linear-gradient(45deg, #ff7675, #fdcb6e, #e17055, #d63031)",
      text: "#ffffff",
    },
    forest: {
      background: "linear-gradient(45deg, #00b894, #00cec9, #55a3ff, #74b9ff)",
      text: "#2c3e50",
    },
  };

  if (palettes[palette]) {
    document.body.style.background = palettes[palette].background;
    document.body.style.color = palettes[palette].text;

    const paletteNames = {
      rainbow: "Arco-íris 🌈",
      ocean: "Oceano 🌊",
      sunset: "Pôr do sol 🌅",
      forest: "Floresta 🌲",
    };

    alert(`🎨 Paleta "${paletteNames[palette]}" aplicada! Que beleza!`);

    // Resetar após alguns segundos
    setTimeout(() => {
      document.body.style.background = "";
      document.body.style.color = "";
    }, 8000);
  }
}

// Mostrar códigos de cores (Aula 4)
function showColorCodes() {
  const colorCodes = document.getElementById("colorCodes");
  if (colorCodes) {
    colorCodes.innerHTML = `
            <div style="background: #f7fafc; padding: 15px; border-radius: 8px;">
                <h4>🔢 Códigos de Cores:</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin-top: 10px;">
                    <div style="background: #ff0000; color: white; padding: 8px; border-radius: 4px; text-align: center;">#ff0000<br>Vermelho</div>
                    <div style="background: #00ff00; color: black; padding: 8px; border-radius: 4px; text-align: center;">#00ff00<br>Verde</div>
                    <div style="background: #0000ff; color: white; padding: 8px; border-radius: 4px; text-align: center;">#0000ff<br>Azul</div>
                    <div style="background: #ffff00; color: black; padding: 8px; border-radius: 4px; text-align: center;">#ffff00<br>Amarelo</div>
                    <div style="background: #ff00ff; color: white; padding: 8px; border-radius: 4px; text-align: center;">#ff00ff<br>Magenta</div>
                    <div style="background: #00ffff; color: black; padding: 8px; border-radius: 4px; text-align: center;">#00ffff<br>Cyan</div>
                </div>
                <p style="margin-top: 10px; font-size: 0.9rem;"><em>💡 Cada cor tem seu próprio código hexadecimal!</em></p>
            </div>
        `;
  }
}

// ========== FUNÇÕES GERAIS ==========

// Abrir ferramentas (usado em várias aulas)
function openTool(tool) {
  const urls = {
    codepen: "https://codepen.io/",
    unsplash: "https://unsplash.com/",
    placedog: "https://placedog.net/",
    fontawesome: "https://fontawesome.com/",
    googlefonts: "https://fonts.google.com/",
    coolors: "https://coolors.co/",
    cssgridgarden: "https://cssgridgarden.com/",
    flexboxfroggy: "https://flexboxfroggy.com/",
  };

  if (urls[tool]) {
    window.open(urls[tool], "_blank");
  }
}

// Adicionar à lista (Aula 3)
function addToList(event, input) {
  if (event.key === "Enter") {
    const value = input.value.trim();
    if (value) {
      // Criar um item de lista
      const listItem = document.createElement("div");
      listItem.textContent = value;
      listItem.style.cssText = `
                background: #e8f4f8;
                padding: 8px 12px;
                margin: 5px 0;
                border-radius: 4px;
                border-left: 3px solid #4ade80;
            `;

      // Adicionar à área de resultados
      const resultsArea = document.getElementById("personalList");
      if (resultsArea) {
        resultsArea.appendChild(listItem);
      }

      // Limpar input
      input.value = "";
    }
  }
}

// CSS para animações
const style = document.createElement("style");
style.textContent = `
    @keyframes celebrate {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
        50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
    }

    .computer {
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .connection-line {
        transition: all 0.5s ease;
    }

    .nav-dot {
        transition: all 0.3s ease;
    }

    .nav-dot.active {
        background: #4ade80 !important;
        transform: scale(1.2);
    }

    @keyframes slideIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .example-box {
        border: 3px solid #4ade80;
        border-radius: 10px;
        padding: 20px;
        margin: 20px 0;
        background: linear-gradient(135deg, #f0fdf4, #dcfce7);
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        animation: slideIn 0.5s ease;
    }

    .interactive-box {
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        padding: 15px;
        margin: 10px;
        background: white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        min-width: 150px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .interactive-box.selected {
        border-color: #4ade80;
        transform: scale(1.05);
    }

    .layout-section {
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        padding: 15px;
        margin: 10px 0;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .layout-section.selected {
        border-color: #4ade80;
        transform: scale(1.05);
        box-shadow: 0 0 15px rgba(74, 222, 128, 0.3);
    }

    .section-tooltip {
        position: fixed;
        background: #333;
        color: white;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 14px;
        z-index: 1000;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .bouncing {
        animation: bounce 1s ease-in-out;
    }

    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-30px);
        }
        60% {
            transform: translateY(-15px);
        }
    }

    .slideInLeft {
        animation: slideInLeft 0.8s ease-out forwards;
        opacity: 0;
        transform: translateX(-100px);
    }

    .slideInRight {
        animation: slideInRight 0.8s ease-out forwards;
        opacity: 0;
        transform: translateX(100px);
    }

    .fadeIn {
        animation: fadeIn 0.8s ease-out forwards;
        opacity: 0;
    }

    .scaleIn {
        animation: scaleIn 0.8s ease-out forwards;
        opacity: 0;
        transform: scale(0);
    }

    .rotateIn {
        animation: rotateIn 0.8s ease-out forwards;
        opacity: 0;
        transform: rotate(-180deg);
    }

    @keyframes slideInLeft {
        to { opacity: 1; transform: translateX(0); }
    }

    @keyframes slideInRight {
        to { opacity: 1; transform: translateX(0); }
    }

    @keyframes fadeIn {
        to { opacity: 1; }
    }

    @keyframes scaleIn {
        to { opacity: 1; transform: scale(1); }
    }

    @keyframes rotateIn {
        to { opacity: 1; transform: rotate(0deg); }
    }

    @keyframes zoomIn {
        from { opacity: 0; transform: scale(0.8); }
        to { opacity: 1; transform: scale(1); }
    }
`;
document.head.appendChild(style);

// ==========================================
// FUNÇÕES PARA AULA 5: Layout e Posicionamento
// ==========================================

// Função para mostrar exemplo de caixa
function showBoxExample() {
  const demoArea =
    document.querySelector(".box-demo-area") ||
    document.querySelector(".demo-area") ||
    document.querySelector(".challenge-box");

  if (!demoArea) {
    console.warn("Área de demonstração não encontrada");
    return;
  }

  // Verificar se já existe um exemplo
  const existingExample = demoArea.querySelector(".example-box");
  if (existingExample) {
    existingExample.remove();
    return;
  }

  // Criar exemplo de caixa
  const exampleBox = document.createElement("div");
  exampleBox.className = "example-box";
  exampleBox.innerHTML = `
        <h4>📦 Esta é uma caixa!</h4>
        <p>Caixas ajudam a organizar o conteúdo da sua página.</p>
        <p>Você pode colocar texto, imagens e outras coisas dentro delas.</p>
    `;

  // Adicionar estilos à caixa de exemplo
  exampleBox.style.cssText = `
        border: 3px solid #4ade80;
        border-radius: 10px;
        padding: 20px;
        margin: 20px 0;
        background: linear-gradient(135deg, #f0fdf4, #dcfce7);
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        animation: slideIn 0.5s ease;
    `;

  // Adicionar exemplo após o botão
  const button = demoArea.querySelector('button[onclick="showBoxExample()"]');
  if (button) {
    button.insertAdjacentElement("afterend", exampleBox);
  } else {
    demoArea.appendChild(exampleBox);
  }

  // Adicionar animação CSS se não existir
  if (!document.getElementById("boxExampleStyles")) {
    const style = document.createElement("style");
    style.id = "boxExampleStyles";
    style.textContent = `
            @keyframes slideIn {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
    document.head.appendChild(style);
  }

  // Reset automático após 5 segundos
  setTimeout(() => {
    if (exampleBox.parentNode) {
      exampleBox.remove();
    }
  }, 5000);
}

// Função para adicionar caixa interativa
function addBox() {
  const container =
    document.querySelector(".box-container") ||
    document.querySelector(".interactive-area");
  if (!container) {
    console.warn("Container de caixas não encontrado");
    return;
  }

  // Criar nova caixa
  const boxCount = container.querySelectorAll(".interactive-box").length + 1;
  const newBox = document.createElement("div");
  newBox.className = "interactive-box";
  newBox.innerHTML = `
        <div class="box-header">
            <span>Caixa ${boxCount}</span>
            <button class="remove-box" onclick="removeBox(this)">❌</button>
        </div>
        <div class="box-content">
            <p>Conteúdo da caixa ${boxCount}</p>
        </div>
    `;

  // Adicionar estilos
  newBox.style.cssText = `
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        padding: 15px;
        margin: 10px;
        background: white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        min-width: 150px;
        cursor: pointer;
        transition: all 0.3s ease;
    `;

  // Adicionar evento de clique para seleção
  newBox.addEventListener("click", function () {
    // Remover seleção de outras caixas
    container.querySelectorAll(".interactive-box").forEach((box) => {
      box.style.borderColor = "#e5e7eb";
      box.style.transform = "scale(1)";
    });

    // Selecionar esta caixa
    this.style.borderColor = "#4ade80";
    this.style.transform = "scale(1.05)";
  });

  container.appendChild(newBox);

  // Limitar a 6 caixas
  if (container.querySelectorAll(".interactive-box").length > 6) {
    const oldestBox = container.querySelector(".interactive-box");
    if (oldestBox) oldestBox.remove();
  }
}

// Função para remover caixa
function removeBox(button) {
  const box = button.closest(".interactive-box");
  if (box) {
    box.remove();
  }
}

// Função para decorar caixas
function decorateBoxes() {
  const boxes = document.querySelectorAll(".interactive-box");
  if (boxes.length === 0) {
    alert("Adicione algumas caixas primeiro!");
    return;
  }

  const colors = [
    "#fef3c7",
    "#dbeafe",
    "#d1fae5",
    "#fce7f3",
    "#e0e7ff",
    "#fdf2f8",
  ];
  const decorations = ["🌟", "🎨", "🎪", "🎭", "🎪", "⭐"];

  boxes.forEach((box, index) => {
    const color = colors[index % colors.length];
    const decoration = decorations[index % decorations.length];

    box.style.background = `linear-gradient(135deg, ${color}, ${color}dd)`;
    box.style.borderColor = "#4ade80";
    box.style.transform = "scale(1.05)";

    // Adicionar decoração
    const header = box.querySelector(".box-header span");
    if (header && !header.textContent.includes(decoration)) {
      header.textContent = `${decoration} ${header.textContent}`;
    }
  });

  // Reset após 3 segundos
  setTimeout(() => {
    boxes.forEach((box) => {
      box.style.background = "white";
      box.style.borderColor = "#e5e7eb";
      box.style.transform = "scale(1)";

      const header = box.querySelector(".box-header span");
      if (header) {
        header.textContent = header.textContent.replace(/^[🌟🎨🎪🎭⭐]\s/, "");
      }
    });
  }, 3000);
}

// Função para selecionar seção do layout
function selectSection(sectionType) {
  const sections = document.querySelectorAll(".layout-section");
  const selectedSection =
    document.querySelector(`[data-section="${sectionType}"]`) ||
    document.querySelector(`.layout-section[onclick*="${sectionType}"]`);

  if (!selectedSection) return;

  // Remover seleção anterior
  sections.forEach((section) => {
    section.classList.remove("selected");
    section.style.borderColor = "#e5e7eb";
    section.style.transform = "scale(1)";
  });

  // Selecionar nova seção
  selectedSection.classList.add("selected");
  selectedSection.style.borderColor = "#4ade80";
  selectedSection.style.transform = "scale(1.05)";
  selectedSection.style.boxShadow = "0 0 15px rgba(74, 222, 128, 0.3)";

  // Mostrar informações sobre a seção
  const info = {
    header: "Cabeçalho - onde fica o título e menu do site",
    content: "Conteúdo - onde fica a informação principal",
    footer: "Rodapé - onde ficam informações de contato e links",
  };

  // Criar ou atualizar tooltip
  let tooltip = document.querySelector(".section-tooltip");
  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.className = "section-tooltip";
    document.body.appendChild(tooltip);
  }

  tooltip.textContent = info[sectionType] || `Seção ${sectionType}`;
  tooltip.style.cssText = `
        position: fixed;
        background: #333;
        color: white;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 14px;
        z-index: 1000;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

  // Posicionar tooltip
  const rect = selectedSection.getBoundingClientRect();
  tooltip.style.left = rect.left + "px";
  tooltip.style.top = rect.top - 40 + "px";
  tooltip.style.opacity = "1";

  // Esconder tooltip após 2 segundos
  setTimeout(() => {
    tooltip.style.opacity = "0";
  }, 2000);
}

// ==========================================
// FUNÇÕES PARA AULA 6: JavaScript Básico
// ==========================================

// Função para mostrar alerta
function showAlert() {
  const messages = [
    "Olá! Você clicou no botão! 🎉",
    "JavaScript permite interagir com a página! 🚀",
    "Cada clique faz algo acontecer! ✨",
    "Você está aprendendo programação! 🎓",
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMessage);
}

// Função para mudar cor
function changeColor() {
  const demoElement =
    document.querySelector(".color-demo") ||
    document.querySelector(".interactive-area") ||
    document.querySelector(".demo-area");

  if (!demoElement) {
    console.warn("Elemento de demonstração não encontrado");
    return;
  }

  const colors = [
    { bg: "#fef3c7", text: "#92400e", name: "Amarelo" },
    { bg: "#dbeafe", text: "#1e40af", name: "Azul" },
    { bg: "#d1fae5", text: "#065f46", name: "Verde" },
    { bg: "#fce7f3", text: "#be185d", name: "Rosa" },
    { bg: "#e0e7ff", text: "#3730a3", name: "Roxo" },
    { bg: "#fdf2f8", text: "#9d174d", name: "Vermelho" },
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  demoElement.style.backgroundColor = randomColor.bg;
  demoElement.style.color = randomColor.text;
  demoElement.style.transition = "all 0.5s ease";

  // Adicionar mensagem
  const message = document.createElement("div");
  message.textContent = `Cor mudada para ${randomColor.name}! 🎨`;
  message.style.cssText = `
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        padding: 10px 20px;
        border-radius: 20px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        font-weight: bold;
        animation: fadeIn 0.5s ease;
    `;

  demoElement.style.position = "relative";
  demoElement.appendChild(message);

  // Remover mensagem após 2 segundos
  setTimeout(() => {
    if (message.parentNode) {
      message.remove();
    }
  }, 2000);
}

// Função para cumprimentar usuário
function greetUser() {
  const name = prompt("Qual é o seu nome?");

  if (!name || name.trim() === "") {
    alert("Olá, amigo misterioso! 👋");
    return;
  }

  const greeting = `Olá, ${name.trim()}! Bem-vindo ao mundo da programação! 🎉🚀`;
  alert(greeting);

  // Tentar adicionar saudação personalizada na página
  const demoArea =
    document.querySelector(".greeting-demo") ||
    document.querySelector(".interactive-area");

  if (demoArea) {
    demoArea.innerHTML = `<h3 style="color: #4ade80;">${greeting}</h3>`;
  }
}

// Função para jogar jogo simples
function playGame() {
  const choices = ["Pedra ✊", "Papel ✋", "Tesoura ✌️"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  const userChoice = prompt("Escolha: Pedra, Papel ou Tesoura?");

  if (!userChoice) return;

  const userChoiceNormalized = userChoice.toLowerCase().trim();

  let result = "";
  let emoji = "";

  if (userChoiceNormalized.includes("pedra")) {
    if (computerChoice.includes("Pedra")) {
      result = "Empate!";
      emoji = "🤝";
    } else if (computerChoice.includes("Papel")) {
      result = "Você perdeu!";
      emoji = "😢";
    } else {
      result = "Você ganhou!";
      emoji = "🎉";
    }
  } else if (userChoiceNormalized.includes("papel")) {
    if (computerChoice.includes("Papel")) {
      result = "Empate!";
      emoji = "🤝";
    } else if (computerChoice.includes("Tesoura")) {
      result = "Você perdeu!";
      emoji = "😢";
    } else {
      result = "Você ganhou!";
      emoji = "🎉";
    }
  } else if (userChoiceNormalized.includes("tesoura")) {
    if (computerChoice.includes("Tesoura")) {
      result = "Empate!";
      emoji = "🤝";
    } else if (computerChoice.includes("Pedra")) {
      result = "Você perdeu!";
      emoji = "😢";
    } else {
      result = "Você ganhou!";
      emoji = "🎉";
    }
  } else {
    alert("Escolha inválida! Tente novamente.");
    return;
  }

  alert(`Você escolheu: ${userChoice}
Computador escolheu: ${computerChoice}
${result} ${emoji}`);

  // Mostrar resultado na página
  const gameArea =
    document.querySelector(".game-result") ||
    document.querySelector(".interactive-area");

  if (gameArea) {
    gameArea.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h3>${result} ${emoji}</h3>
                <p>Você: ${userChoice} vs Computador: ${computerChoice}</p>
            </div>
        `;
  }
}

// ==========================================
// FUNÇÕES PARA AULA 9: Design Responsivo
// ==========================================

// Função para alternar responsividade
function toggleResponsive() {
  const demoContainer =
    document.querySelector(".responsive-demo") ||
    document.querySelector(".demo-area");

  if (!demoContainer) {
    console.warn("Container de demonstração responsiva não encontrado");
    return;
  }

  // Alternar classe responsiva
  demoContainer.classList.toggle("responsive-mode");

  const isResponsive = demoContainer.classList.contains("responsive-mode");

  // Aplicar estilos baseados no modo
  if (isResponsive) {
    demoContainer.style.cssText = `
            max-width: 100%;
            padding: 20px;
            background: linear-gradient(135deg, #f0fdf4, #dcfce7);
            border-radius: 10px;
            transition: all 0.5s ease;
        `;

    // Adicionar elementos de demonstração responsiva
    demoContainer.innerHTML = `
            <div style="display: flex; flex-wrap: wrap; gap: 20px;">
                <div class="responsive-item" style="flex: 1; min-width: 200px; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h4>📱 Modo Responsivo</h4>
                    <p>Os elementos se adaptam ao tamanho da tela!</p>
                </div>
                <div class="responsive-item" style="flex: 1; min-width: 200px; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h4>💻 Flexível</h4>
                    <p>Experimente redimensionar a janela!</p>
                </div>
            </div>
        `;
  } else {
    demoContainer.style.cssText = `
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            transition: all 0.5s ease;
        `;

    demoContainer.innerHTML = `
            <div style="display: flex; gap: 20px;">
                <div style="flex: 1; padding: 20px; background: #f9fafb; border-radius: 8px;">
                    <h4>🖥️ Modo Desktop</h4>
                    <p>Layout fixo para telas grandes</p>
                </div>
                <div style="flex: 1; padding: 20px; background: #f9fafb; border-radius: 8px;">
                    <h4>📐 Estruturado</h4>
                    <p>Elementos organizados lado a lado</p>
                </div>
            </div>
        `;
  }
}

// Função para simular dispositivo
function simulateDevice(deviceType) {
  const demoContainer =
    document.querySelector(".device-simulation") ||
    document.querySelector(".demo-area");

  if (!demoContainer) {
    console.warn("Container de simulação de dispositivo não encontrado");
    return;
  }

  const devices = {
    mobile: {
      width: "375px",
      height: "667px",
      name: "📱 Celular",
      description: "Tela pequena, toque com um dedo",
    },
    tablet: {
      width: "768px",
      height: "1024px",
      name: "📱 Tablet",
      description: "Tela média, toque com um ou dois dedos",
    },
    desktop: {
      width: "100%",
      height: "auto",
      name: "💻 Desktop",
      description: "Tela grande, mouse e teclado",
    },
  };

  const device = devices[deviceType];
  if (!device) return;

  // Aplicar simulação visual
  demoContainer.style.cssText = `
        width: ${device.width};
        height: ${device.height};
        margin: 20px auto;
        border: 2px solid #4ade80;
        border-radius: 20px;
        padding: 20px;
        background: white;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        transition: all 0.5s ease;
        overflow: hidden;
        position: relative;
    `;

  demoContainer.innerHTML = `
        <div style="text-align: center;">
            <h3 style="color: #4ade80; margin-bottom: 10px;">${device.name}</h3>
            <p style="font-size: 14px; color: #666;">${device.description}</p>
            <div style="margin-top: 20px; padding: 15px; background: #f9fafb; border-radius: 8px;">
                <p>📏 Largura: ${device.width}</p>
                <p>📐 Altura: ${device.height}</p>
            </div>
        </div>
    `;

  // Adicionar indicador de dispositivo
  const indicator = document.createElement("div");
  indicator.textContent = device.name;
  indicator.style.cssText = `
        position: absolute;
        top: -15px;
        left: 50%;
        transform: translateX(-50%);
        background: #4ade80;
        color: white;
        padding: 5px 15px;
        border-radius: 15px;
        font-size: 12px;
        font-weight: bold;
    `;

  demoContainer.appendChild(indicator);
}

// ==========================================
// FUNÇÕES PARA AULA 7: Animações CSS
// ==========================================

// Função para fazer elemento saltar
function bounce() {
  const element =
    document.querySelector(".bounce-element") ||
    document.querySelector(".interactive-area div") ||
    document.querySelector(".demo-area div");

  if (!element) {
    console.warn("Elemento para animar não encontrado");
    return;
  }

  // Adicionar classe de animação
  element.classList.add("bouncing");

  // Adicionar estilos CSS se não existirem
  if (!document.getElementById("bounceStyles")) {
    const style = document.createElement("style");
    style.id = "bounceStyles";
    style.textContent = `
            .bouncing {
                animation: bounce 1s ease-in-out;
            }

            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% {
                    transform: translateY(0);
                }
                40% {
                    transform: translateY(-30px);
                }
                60% {
                    transform: translateY(-15px);
                }
            }
        `;
    document.head.appendChild(style);
  }

  // Remover classe após animação
  setTimeout(() => {
    element.classList.remove("bouncing");
  }, 1000);
}

// Função para adicionar sombra
function addShadow() {
  const element =
    document.querySelector(".shadow-element") ||
    document.querySelector(".interactive-area div") ||
    document.querySelector(".demo-area div");

  if (!element) {
    console.warn("Elemento para sombra não encontrado");
    return;
  }

  // Alternar sombra
  if (element.style.boxShadow) {
    element.style.boxShadow = "";
    element.style.transform = "";
  } else {
    element.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
    element.style.transform = "translateY(-5px)";
    element.style.transition = "all 0.3s ease";
  }
}

// Função para iniciar animação
function startAnimation() {
  const container =
    document.querySelector(".animation-container") ||
    document.querySelector(".interactive-area") ||
    document.querySelector(".demo-area");

  if (!container) {
    console.warn("Container de animação não encontrado");
    return;
  }

  // Criar elementos animados
  const colors = [
    "#ff6b6b",
    "#4ecdc4",
    "#45b7d1",
    "#96ceb4",
    "#ffeaa7",
    "#dda0dd",
  ];
  const animations = [
    "slideInLeft",
    "slideInRight",
    "fadeIn",
    "scaleIn",
    "rotateIn",
  ];

  // Limpar container
  container.innerHTML = "";

  // Criar 5 elementos animados
  for (let i = 0; i < 5; i++) {
    const element = document.createElement("div");
    element.textContent = `Elemento ${i + 1}`;
    element.style.cssText = `
            background: ${colors[i]};
            color: white;
            padding: 15px;
            margin: 10px;
            border-radius: 8px;
            display: inline-block;
            font-weight: bold;
            animation-delay: ${i * 0.2}s;
        `;

    // Escolher animação aleatória
    const animation = animations[i % animations.length];
    element.classList.add(animation);

    container.appendChild(element);
  }

  // Adicionar estilos CSS se não existirem
  if (!document.getElementById("animationStyles")) {
    const style = document.createElement("style");
    style.id = "animationStyles";
    style.textContent = `
            .slideInLeft {
                animation: slideInLeft 0.8s ease-out forwards;
                opacity: 0;
                transform: translateX(-100px);
            }

            .slideInRight {
                animation: slideInRight 0.8s ease-out forwards;
                opacity: 0;
                transform: translateX(100px);
            }

            .fadeIn {
                animation: fadeIn 0.8s ease-out forwards;
                opacity: 0;
            }

            .scaleIn {
                animation: scaleIn 0.8s ease-out forwards;
                opacity: 0;
                transform: scale(0);
            }

            .rotateIn {
                animation: rotateIn 0.8s ease-out forwards;
                opacity: 0;
                transform: rotate(-180deg);
            }

            @keyframes slideInLeft {
                to { opacity: 1; transform: translateX(0); }
            }

            @keyframes slideInRight {
                to { opacity: 1; transform: translateX(0); }
            }

            @keyframes fadeIn {
                to { opacity: 1; }
            }

            @keyframes scaleIn {
                to { opacity: 1; transform: scale(1); }
            }

            @keyframes rotateIn {
                to { opacity: 1; transform: rotate(0deg); }
            }
        `;
    document.head.appendChild(style);
  }

  // Reset após 5 segundos
  setTimeout(() => {
    container.innerHTML = '<p>Clique em "Iniciar" para ver as animações!</p>';
  }, 5000);
}

// ==========================================
// FUNÇÕES PARA AULA 8: Imagens e Multimídia
// ==========================================

// Função para aumentar imagem
function enlargeImage(img) {
  if (!img) return;

  // Criar overlay
  const overlay = document.createElement("div");
  overlay.className = "image-overlay";
  overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        cursor: pointer;
    `;

  // Criar imagem ampliada
  const enlargedImg = document.createElement("img");
  enlargedImg.src = img.src;
  enlargedImg.style.cssText = `
        max-width: 80%;
        max-height: 80%;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        animation: zoomIn 0.3s ease;
    `;

  overlay.appendChild(enlargedImg);
  document.body.appendChild(overlay);

  // Adicionar animação
  if (!document.getElementById("zoomStyles")) {
    const style = document.createElement("style");
    style.id = "zoomStyles";
    style.textContent = `
            @keyframes zoomIn {
                from { opacity: 0; transform: scale(0.8); }
                to { opacity: 1; transform: scale(1); }
            }
        `;
    document.head.appendChild(style);
  }

  // Fechar ao clicar
  overlay.addEventListener("click", () => {
    overlay.remove();
  });
}

// Função para tocar som
function playSound() {
  // Criar contexto de áudio se suportado
  try {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Configurar som agradável
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // Nota A
    oscillator.type = "sine";

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + 0.5
    );

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);

    // Mostrar feedback visual
    const button = document.querySelector('button[onclick="playSound()"]');
    if (button) {
      const originalText = button.textContent;
      button.textContent = "🔊 Tocando...";
      button.style.background = "#4ade80";

      setTimeout(() => {
        button.textContent = originalText;
        button.style.background = "";
      }, 500);
    }
  } catch (error) {
    // Fallback para alert se Web Audio API não for suportada
    alert("🎵 Som tocado! (Web Audio API não suportada neste navegador)");

    // Feedback visual alternativo
    const button = document.querySelector('button[onclick="playSound()"]');
    if (button) {
      button.style.animation = "pulse 0.5s ease";
      setTimeout(() => {
        button.style.animation = "";
      }, 500);
    }
  }
}

// ==========================================
// FUNÇÕES PARA AULA 10: Publicação Online
// ==========================================

// Função para abrir tutorial do GitHub Pages
function openGitHubPages() {
  const tutorial = {
    title: "Como Publicar seu Site no GitHub Pages",
    steps: [
      "1. Faça upload dos seus arquivos HTML, CSS e JS para o GitHub",
      "2. Vá em Settings → Pages no seu repositório",
      "3. Escolha a branch main e clique em Save",
      "4. Aguarde alguns minutos e seu site estará online!",
      "5. O endereço será: https://seu-usuario.github.io/nome-do-repositorio",
    ],
  };

  // Criar modal com tutorial
  const modal = document.createElement("div");
  modal.className = "tutorial-modal";
  modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        font-family: Arial, sans-serif;
    `;

  modal.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 15px; max-width: 500px; width: 90%; max-height: 80%; overflow-y: auto;">
            <h2 style="color: #333; margin-bottom: 20px; text-align: center;">${
              tutorial.title
            }</h2>
            <ol style="line-height: 1.6; color: #555;">
                ${tutorial.steps
                  .map(
                    (step) => `<li style="margin-bottom: 10px;">${step}</li>`
                  )
                  .join("")}
            </ol>
            <div style="text-align: center; margin-top: 20px;">
                <button onclick="this.closest('.tutorial-modal').remove()" style="background: #4ade80; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Fechar</button>
            </div>
        </div>
    `;

  document.body.appendChild(modal);
}

// ==========================================
// FUNÇÕES PARA AULA 16: Conclusão e Projetos
// ==========================================

// Função para mostrar projetos
function showProjects() {
  const projects = [
    {
      name: "Meu Primeiro Site",
      description: "Site simples com HTML e CSS",
      difficulty: "Fácil",
    },
    {
      name: "Jogo da Memória",
      description: "Jogo interativo com JavaScript",
      difficulty: "Médio",
    },
    {
      name: "Portfólio Pessoal",
      description: "Site para mostrar seus trabalhos",
      difficulty: "Médio",
    },
    {
      name: "Blog Infantil",
      description: "Site para compartilhar histórias",
      difficulty: "Avançado",
    },
    {
      name: "Loja Virtual",
      description: "Site de compras online",
      difficulty: "Avançado",
    },
  ];

  // Criar modal com projetos
  const modal = document.createElement("div");
  modal.className = "projects-modal";
  modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        font-family: Arial, sans-serif;
    `;

  const projectsHTML = projects
    .map(
      (project) => `
        <div style="background: white; margin: 10px; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); flex: 1; min-width: 250px;">
            <h3 style="color: #4ade80; margin-bottom: 10px;">${
              project.name
            }</h3>
            <p style="color: #666; margin-bottom: 10px;">${
              project.description
            }</p>
            <span style="background: ${
              project.difficulty === "Fácil"
                ? "#d1fae5"
                : project.difficulty === "Médio"
                ? "#fef3c7"
                : "#fecaca"
            }; color: ${
        project.difficulty === "Fácil"
          ? "#065f46"
          : project.difficulty === "Médio"
          ? "#92400e"
          : "#b91c1c"
      }; padding: 5px 10px; border-radius: 15px; font-size: 12px; font-weight: bold;">
                ${project.difficulty}
            </span>
        </div>
    `
    )
    .join("");

  modal.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 15px; max-width: 800px; width: 90%; max-height: 80%; overflow-y: auto;">
            <h2 style="color: #333; margin-bottom: 20px; text-align: center;">🚀 Ideias de Projetos</h2>
            <div style="display: flex; flex-wrap: wrap; justify-content: center;">
                ${projectsHTML}
            </div>
            <div style="text-align: center; margin-top: 20px;">
                <button onclick="this.closest('.projects-modal').remove()" style="background: #4ade80; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Fechar</button>
            </div>
        </div>
    `;

  document.body.appendChild(modal);
}

// Função para gerar certificado
function generateCertificate() {
  const name = prompt("Qual é o seu nome completo?");

  if (!name || name.trim() === "") {
    alert("Por favor, digite seu nome para gerar o certificado!");
    return;
  }

  // Criar certificado
  const certificate = document.createElement("div");
  certificate.className = "certificate";
  certificate.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        font-family: 'Georgia', serif;
        color: white;
    `;

  certificate.innerHTML = `
        <div style="background: white; color: #333; padding: 40px; border-radius: 20px; text-align: center; max-width: 600px; width: 90%; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
            <div style="font-size: 48px; margin-bottom: 20px;">🏆</div>
            <h1 style="font-size: 32px; margin-bottom: 20px; color: #4ade80;">CERTIFICADO</h1>
            <p style="font-size: 18px; margin-bottom: 30px;">Este certificado reconhece que</p>
            <h2 style="font-size: 28px; margin-bottom: 30px; color: #333; text-transform: uppercase;">${name.trim()}</h2>
            <p style="font-size: 16px; margin-bottom: 40px; line-height: 1.6;">
                concluiu com sucesso o<br>
                <strong>Curso de Desenvolvimento Infantil</strong><br>
                aprendendo HTML, CSS e JavaScript
            </p>
            <div style="border-top: 2px solid #4ade80; padding-top: 20px; margin-top: 30px;">
                <p style="font-size: 14px; color: #666;">Emitido em ${new Date().toLocaleDateString(
                  "pt-BR"
                )}</p>
            </div>
            <button onclick="this.closest('.certificate').remove()" style="margin-top: 30px; background: #4ade80; color: white; border: none; padding: 12px 24px; border-radius: 25px; cursor: pointer; font-size: 16px;">Fechar Certificado</button>
        </div>
    `;

  document.body.appendChild(certificate);
}

// ==========================================
// FUNÇÕES ADICIONAIS PARA AULA 5
// ==========================================

// Função para construir layout
function buildLayout() {
  const layoutContainer =
    document.querySelector(".layout-builder") ||
    document.querySelector(".layout-demo");

  if (!layoutContainer) {
    console.warn("Container de layout não encontrado");
    return;
  }

  // Criar preview do layout
  const layoutPreview = document.createElement("div");
  layoutPreview.className = "layout-preview";
  layoutPreview.innerHTML = `
        <div class="layout-header" style="background: #4ade80; color: white; padding: 15px; text-align: center; border-radius: 8px 8px 0 0;">
            <h4>📋 Meu Site Incrível</h4>
        </div>
        <div style="display: flex;">
            <div class="layout-sidebar" style="flex: 1; background: #e5e7eb; padding: 20px; max-width: 120px">
                <h4>📱 Menu</h4>
                <ul style="list-style: disc; padding: 15px; margin: 0;">
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>
            </div>
            <div class="layout-content" style="flex: 5; background: #f9fafb; padding: 20px; border-radius: 0 0 0 8px;">
                <h4>📄 Conteúdo Principal</h4>
                <p>Aqui vai o texto principal do seu site!</p>
            </div>

        </div>
        <div class="layout-footer" style="background: #374151; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px;">
            <p>🏷️ © 2024 Meu Site</p>
        </div>
    `;

  layoutPreview.style.cssText = `
        margin: 20px 0;
        border: 2px solid #4ade80;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: fadeIn 0.5s ease;
    `;

  // Remover preview anterior se existir
  const existingPreview = layoutContainer.querySelector(".layout-preview");
  if (existingPreview) {
    existingPreview.remove();
  }

  layoutContainer.appendChild(layoutPreview);

  // Adicionar estilos se necessário
  if (!document.getElementById("layoutStyles")) {
    const style = document.createElement("style");
    style.id = "layoutStyles";
    style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
    document.head.appendChild(style);
  }

  // Reset após 15 segundos
  setTimeout(() => {
    if (layoutPreview.parentNode) {
      layoutPreview.remove();
    }
  }, 15000);
}

// Função para mostrar estrutura de caixas
function showBoxStructure() {
  const structureContainer =
    document.getElementById("boxStructure") ||
    document.querySelector(".fun-fact");

  if (!structureContainer) {
    console.warn("Container de estrutura não encontrado");
    return;
  }

  // Criar visualização da estrutura em grid de 3 colunas
  const structure = document.createElement("div");
  structure.className = "box-structure";
  structure.innerHTML = `
        <div class="structure-grid">
            <!-- Linha 1 -->
            <div class="grid-cell root-cell">
                <span class="box-icon">📦</span> Página HTML<br><small><code>&lthtml&gt</code></small>
            </div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>

            <!-- Linha 2 -->
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell root-cell-2">
                <span class="box-icon">📦</span> Head<br><small><code>&lthead&gt</code></small>
            </div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>

            <!-- Linha 3 -->
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell">
                <span class="box-icon">📦</span> Título<br><small><code>&lttitle&gt ... &lt/title&gt</code></small>
            </div>
            <div class="grid-cell empty-cell"></div>

            <!-- Linha 4 -->
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell">
                <span class="box-icon">📦</span> Importações<br><small><code>&ltlink rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" ... /&gt</code></small>
            </div>
            <div class="grid-cell empty-cell"></div>

            <!-- Linha 5 -->
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell root-cell-2">
                <span class="box-icon">📦</span> Head<br><small><code>&lt/head&gt</code></small>
            </div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>

            <!-- Linha 6 -->
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell root-cell-3">
                <span class="box-icon">📦</span> Body<br><small><code>&ltbody&gt</code></small>
            </div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>

            <!-- Linha 7 -->
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell root-cell-4">
                <span class="box-icon">📦</span> Cabeçalho<br><small><code>&ltheader&gt</code></small>
            </div>
            <div class="grid-cell empty-cell"></div>
                
            <!-- Linha 8 -->
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell">
                <span class="box-icon">📦</span> Logo<br><small><code>&ltimg src="https://placedog.net/200/200" alt="Logo"&gt</code></small>
            </div>

            <!-- Linha 9 -->
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell">
                <span class="box-icon">📦</span> Menu<br><small><code>&ltul&gt &ltli&gt Início &lt/li&gt &lt/ul&gt</code></small>
            </div>

            <!-- Linha 10- -->
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell root-cell-4">
                <span class="box-icon">📦</span> Cabeçalho<br><small><code>&lt/header&gt</code></small>
            </div>
            <div class="grid-cell empty-cell"></div>


            <!-- Linha 11 -->
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell root-cell-5">
            <span class="box-icon">📦</span> Conteúdo Principal<br><small><code>&ltmain&gt</code></small>
            </div>
            <div class="grid-cell empty-cell"></div>

            <!-- Linha 12 -->
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell">
                <span class="box-icon">📦</span> Artigo<br><small><code>&ltarticle&gt ... &lt/article&gt</code></small>
            </div>

            <! -- Linha 13 -->
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell">
                <span class="box-icon">📦</span> Imagens<br><small><code>&ltimg src="https://placedog.net/300/300" alt="Logo"&gt</code></small>
            </div>

            <!-- Linha 14 -->
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell root-cell-5">
                <span class="box-icon">📦</span> Conteúdo Principal<br><small><code>&lt/main&gt</code></small>
            </div>
            <div class="grid-cell empty-cell"></div>

            <!-- Linha 15 -->
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell root-cell-6">
            <span class="box-icon">📦</span> Rodapé<br><small><code>&ltfooter&gt</code></small>
            </div>
            <div class="grid-cell empty-cell"></div>

            <!-- Linha 16 -->
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell">
                <span class="box-icon">📦</span> Links<br><small><code>&lta href="https://google.com" target="_blank"&gt ... &lt/a&gt</code></small>
            </div>

            <!-- Linha 17 -->
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell">
                <span class="box-icon">📦</span> Copyright<br><small><code>&ltp&gt ... &lt/p&gt</code></small>
            </div>

            <!-- Linha 18 -->
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell root-cell-6">
                <span class="box-icon">📦</span> Rodapé<br><small><code>&lt/footer&gt</code></small>
            </div>
            <div class="grid-cell empty-cell"></div>
            
            <!-- Linha 19 -->
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell root-cell-3">
                <span class="box-icon">📦</span> Body<br><small><code>&lt/body&gt</code></small>
            </div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>

            <!-- Linha 20 -->
            <div class="grid-cell root-cell">
                <span class="box-icon">📦</span> Página HTML<br><small><code>&lt/html&gt</code></small>
            </div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
            <div class="grid-cell empty-cell"></div>
        </div>
    `;

  structure.style.cssText = `
        background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
        border: 2px solid #0ea5e9;
        border-radius: 10px;
        padding: 20px;
        margin: 15px 0;
        animation: slideDown 0.5s ease;
    `;

  // Remover estrutura anterior se existir
  const existingStructure = structureContainer.querySelector(".box-structure");
  if (existingStructure) {
    existingStructure.remove();
    return;
  }

  structureContainer.appendChild(structure);

  // Adicionar estilos do grid
  if (!document.getElementById("structureStyles")) {
    const style = document.createElement("style");
    style.id = "structureStyles";
    style.textContent = `
            @keyframes slideDown {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
            }

            .structure-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 5px;
                font-family: monospace;
                font-size: 10px;
                line-height: 1.3;
            }

            .grid-cell {
                background: white;
                border: 2px solid #0ea5e9;
                border-radius: 6px;
                padding: 8px;
                text-align: center;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                transition: all 0.3s ease;
                min-height: 45px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .grid-cell:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            }

            .root-cell,
            .root-cell-2,
            .root-cell-3,
            .root-cell-4,
            .root-cell-5,
            .root-cell-6 {
                font-weight: bold;
                font-size: 10px;
            }

            .root-cell {
                background: rgba(245, 158, 11, 10%);
                border-color: rgba(245, 158, 11, 1);
            }

            .root-cell-2 {
                background: rgba(6, 182, 212, 10%);
                border-color: rgba(6, 182, 212, 1);
            }

            .root-cell-3 {
                background: rgba(167, 212, 6, 10%);
                border-color: rgba(167, 212, 6, 1);
            }

            .root-cell-4 {
                background: rgba(212, 6, 167, 10%);
                border-color: rgba(212, 6, 167, 1);
            }

            .root-cell-5 {
                background: rgba(255, 0, 0, 10%);
                border-color: rgba(255, 0, 0, 1);
            }

            .root-cell-6 {
                background: rgba(0, 251, 251, 10%);
                border-color: rgba(0, 251, 251, 1);
            }

            .empty-cell {
                background: transparent;
                border: none;
                box-shadow: none;
                pointer-events: none;
            }

            .empty-cell:hover {
                transform: none;
                box-shadow: none;
            }

            .grid-separator {
                height: 2px;
                // background: #0ea5e9;
                margin: 10px 0;
                border-radius: 1px;
            }

            .box-icon {
                font-size: 1em;
                margin-bottom: 3px;
            }

            .grid-cell small {
                font-size: 10px;
                color: #666;
                font-weight: normal;
            }
        `;
    document.head.appendChild(style);
  }
}

// ==========================================
// FUNÇÕES PARA AULA 5.1: Resumo e Reforço
// ==========================================

// Função para adicionar elementos HTML
function addHTMLElements() {
  const container = document.getElementById("htmlElements");
  if (!container) return;

  container.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 10px; border: 2px solid #e53e3e; margin: 10px 0;">
            <h3 style="color: #e53e3e; margin-bottom: 10px;">🏗️ Elementos HTML Adicionados:</h3>
            <div style="background: #fed7d7; padding: 15px; border-radius: 8px; margin: 5px 0;">
                <code>&lt;h1&gt;Meu Título Incrível&lt;/h1&gt;</code>
            </div>
            <div style="background: #fed7d7; padding: 15px; border-radius: 8px; margin: 5px 0;">
                <code>&lt;p&gt;Olá, eu sou um pequeno programador aprendendo HTML!&lt;/p&gt;</code>
            </div>
            <div style="background: #fed7d7; padding: 15px; border-radius: 8px; margin: 5px 0;">
                <code>&lt;img src="https://placedog.net/200/200" alt="Cachorro fofo"&gt;</code>
            </div>
        </div>
    `;
  celebrateCompletion();
}

// Função para aplicar estilos CSS
function applyCSSStyles() {
  const container = document.getElementById("cssStyles");
  if (!container) return;

  container.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 10px; border: 2px solid #3182ce; margin: 10px 0;">
            <h3 style="color: #3182ce; margin-bottom: 10px;">🎨 Estilos CSS Aplicados:</h3>
            <div style="background: #bee3f8; padding: 15px; border-radius: 8px; margin: 5px 0;">
                <code>body { background-color: lightblue; }</code>
            </div>
            <div style="background: #bee3f8; padding: 15px; border-radius: 8px; margin: 5px 0;">
                <code>h1 { color: darkblue; font-family: 'Comic Sans MS'; }</code>
            </div>
            <div style="background: #bee3f8; padding: 15px; border-radius: 8px; margin: 5px 0;">
                <code>p { color: green; font-size: 1.2rem; }</code>
            </div>
        </div>
    `;
  celebrateCompletion();
}

// Função para criar layout com caixas
function createLayoutBoxes() {
  const container = document.getElementById("layoutBoxes");
  if (!container) return;

  container.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 10px; border: 2px solid #d69e2e; margin: 10px 0;">
            <h3 style="color: #d69e2e; margin-bottom: 10px;">📦 Layout com Caixas Criado:</h3>
            <div style="display: flex; gap: 10px; margin: 10px 0;">
                <div style="width: 100px; height: 80px; background: pink; border: 2px solid red; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 12px;">Cabeçalho</div>
                <div style="width: 150px; height: 80px; background: lightblue; border: 2px solid blue; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 12px;">Conteúdo</div>
                <div style="width: 100px; height: 80px; background: lightgreen; border: 2px solid green; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 12px;">Menu</div>
            </div>
            <div style="background: #faf089; padding: 10px; border-radius: 5px; margin: 10px 0;">
                <code>.minha-caixa { width: 200px; height: 100px; background-color: pink; border: 2px solid red; }</code>
            </div>
        </div>
    `;
  celebrateCompletion();
}

// Função para gerar página completa
function generateCompletePage() {
  const container = document.getElementById("generatedCode");
  if (!container) return;

  const code = `&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Minha Página Incrível&lt;/title&gt;
    &lt;style&gt;
        body { background-color: lightblue; font-family: Arial; }
        h1 { color: darkblue; }
        .caixa { width: 200px; height: 100px; background: pink; border: 2px solid red; padding: 10px; margin: 10px; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Olá, Mundo!&lt;/h1&gt;
    &lt;p&gt;Eu criei esta página usando HTML e CSS!&lt;/p&gt;
    &lt;div class="caixa"&gt;
        &lt;p&gt;Esta é uma caixa com layout.&lt;/p&gt;
    &lt;/div&gt;
    &lt;img src="https://placedog.net/200/200" alt="Cachorro fofo"&gt;
&lt;/body&gt;
&lt;/html&gt;`;

  container.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 10px; border: 2px solid #48bb78; margin: 10px 0;">
            <h3 style="color: #48bb78; margin-bottom: 10px;">🚀 Código da Página Completa:</h3>
            <pre style="background: #f7fafc; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 12px;">${code}</pre>
            <button class="interactive-button" onclick="openCodePen()" style="margin-top: 10px;">🚀 Testar no CodePen</button>
        </div>
    `;
  celebrateCompletion();
}

// Função para mostrar primeiro website (reutilizando da aula 1)
function showFirstWebsite() {
  const container = document.getElementById("firstWebsiteInfo");
  if (!container) return;

  container.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 10px; border: 2px solid #4299e1; margin: 10px 0;">
            <h4 style="color: #4299e1; margin-bottom: 10px;">🌐 O Primeiro Site do Mundo:</h4>
            <p>O primeiro site foi criado por Tim Berners-Lee em 1991. Era muito simples, apenas texto!</p>
            <p>Endereço: <a href="http://info.cern.ch/hypertext/WWW/TheProject.html" target="_blank">http://info.cern.ch/hypertext/WWW/TheProject.html</a></p>
            <img src="https://www.webdesignmuseum.org/uploaded/web-design-history/the-first-website.png" alt="Primeiro site" style="max-width: 100%; border-radius: 8px; margin: 10px 0;">
        </div>
    `;
}
