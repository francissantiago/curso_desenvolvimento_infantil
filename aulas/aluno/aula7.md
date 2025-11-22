# Aula 7: Botões que Mudam Coisas – Começando com JavaScript

## Olá, Pequeno Programador! 🧠

Hoje você vai aprender a dar vida à sua página usando o JavaScript! Vamos criar um botão que muda a cor do fundo quando você clica.

---

## 1. O que é JavaScript?
- JavaScript é a linguagem que faz a página se mexer e responder aos cliques.
- **Termo:** JavaScript é o “cérebro” do site.

**Lembrete:** Sempre que quiser que algo aconteça quando clicar, pense em JavaScript!

**Desafio 1:**
> Imagine: Se você pudesse apertar um botão mágico, o que gostaria que mudasse na sua página?

---

## 2. Criando um botão no HTML
```html
<button id="meuBotao">Mudar Cor!</button>
```

---

## 3. Fazendo o botão funcionar com JavaScript
- No CodePen, use o campo JS para digitar:
```js
document.getElementById('meuBotao').onclick = function() {
  document.body.style.backgroundColor = '#FFD700';
}
```
- **Termos:**
  - `document.getElementById`: encontra o botão pelo nome
  - `.onclick`: faz algo acontecer quando clicar
  - `style.backgroundColor`: muda a cor do fundo

**Desafio 2:**
> Troque a cor do fundo para sua cor favorita!

---

## 4. Atividade Lúdica: Botão Surpresa
- Crie mais de um botão, cada um mudando para uma cor diferente.
- Mostre para seus amigos e veja quem faz o botão mais divertido!

---

## 5. Ferramentas Online para Explorar
- [CodePen](https://codepen.io/)
- [Coolors](https://coolors.co/)

---

## 6. Curiosidade
Você sabia que quase todos os sites usam JavaScript para responder aos cliques?

---

## 7. Para a próxima aula...
Pense: O que mais você gostaria de mudar na sua página com um clique?

---

**Parabéns por dar vida à sua página! 🧠**
