# Aula 6: Estilizando um Cartão de Personagem

## Olá, Pequeno Programador! 🃏

Hoje você vai criar um cartão (card) de um personagem que você gosta! Pode ser de um filme, desenho, jogo ou até inventado por você.

---

## 1. O que é um cartão (card)?
- Um cartão é uma caixinha especial que mostra informações de forma organizada e bonita.
- Normalmente tem uma imagem, um nome e uma descrição.
- **Termo:** "Card" é como um mini-cartaz dentro do site.

**Desafio 1:**
> Escolha seu personagem favorito e pense: que imagem, nome e frase você colocaria no cartão?

---

## 2. Montando o cartão no HTML
- Use uma `<div>` para criar a caixa do cartão.
- Dentro dela, coloque:
  - Uma imagem (`<img>`)
  - Um nome (`<h2>`)
  - Uma frase ou descrição (`<p>`)

```html
<div class="card">
  <img src="URL_da_imagem" alt="Personagem" width="150">
  <h2>Nome do Personagem</h2>
  <p>Uma frase ou descrição legal!</p>
</div>
```

---

## 3. Deixando o cartão estiloso com CSS
- Use uma classe para estilizar só o cartão:

```css
.card {
  background-color: #f0f0f0;
  border: 2px solid #333;
  border-radius: 12px;
  width: 220px;
  padding: 16px;
  text-align: center;
  box-shadow: 2px 2px 8px #aaa;
}
.card img {
  border-radius: 8px;
}
```

- **Termos:**
  - `border-radius`: deixa as bordas arredondadas
  - `box-shadow`: faz uma sombra em volta da caixa

**Desafio 2:**
> Troque as cores, bordas e sombra do seu cartão. Deixe com a cara do seu personagem!

---

## 4. Atividade Lúdica: Galeria de Personagens
- Crie mais de um cartão, se quiser, e monte uma galeria dos seus personagens favoritos!
- Mostre para seus amigos e veja quem faz o cartão mais criativo.

---

## 5. Ferramentas Online para Explorar
- [CodePen](https://codepen.io/)
- [Unsplash](https://unsplash.com/) – Para imagens
- [FontAwesome](https://fontawesome.com/) – Para ícones

---

## 6. Curiosidade
Você sabia que muitos sites usam cartões para mostrar produtos, pessoas e notícias?

---

## 7. Para a próxima aula...
Pense: Como fazer sua página responder quando você clica em um botão? Vamos aprender sobre JavaScript!

---

**Parabéns por criar seu cartão de personagem! 🃏**
