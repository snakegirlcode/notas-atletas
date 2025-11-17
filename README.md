<h1 align="center">🏅 Notas dos Atletas</h1>
<p align="center">Cálculo automático da média válida em competições de ginástica artística — utilizando JavaScript moderno.</p>

<p align="center">
  <!-- Badges -->
  <img src="https://img.shields.io/badge/JavaScript-ES2023-yellow?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Node.js-Console-green?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Made%20by-snakegirlcode-purple?style=for-the-badge"/>
</p>

---

## 🎯 Objetivo do Projeto

Criar uma aplicação capaz de:

- Receber o nome e as notas de cada atleta.
- Ordenar as notas corretamente.
- Desconsiderar a **maior** e a **menor** nota.
- Calcular a **média válida** com as três notas centrais.
- Exibir o resultado no console de forma padronizada.

Este projeto faz parte do programa DEVstart e demonstra domínio sólido de manipulação de arrays em JavaScript.

---

## 🎬 Demonstração

<p align="center">
  <img src="assets/execucao.gif" width="800"/>
</p>

---

## 🧠 Tecnologias Utilizadas

- **JavaScript (ES2023)**  
- **Node.js** para execução local  
- Métodos modernos como:
  - `toSorted()`
  - `slice()`
  - `reduce()`

---

## 📥 Entrada Utilizada

```javascript
let atletas = [
  { nome: "Cesar Abascal", notas: [10, 9.34, 8.42, 10, 7.88] },
  { nome: "Fernando Puntel", notas: [8, 10, 10, 7, 9.33] },
  { nome: "Daiane Jelinsky", notas: [7, 10, 9.5, 9.5, 8] },
  { nome: "Bruno Castro", notas: [10, 10, 10, 9, 9.5] }
];
````

---

## 📤 Saída Esperada

```
Atleta: Cesar Abascal
Notas Obtidas: 10,10,7.88,8.42,9.34
Média Válida: 9.253333

Atleta: Fernando Puntel
Notas Obtidas: 10,10,7,8,9.33
Média Válida: 9.11

Atleta: Daiane Jelinsky
Notas Obtidas: 10,7,8,9.5,9.5
Média Válida: 9

Atleta: Bruno Castro
Notas Obtidas: 10,10,10,9,9.5
Média Válida: 9.83333333333
```

---

## 📦 Estrutura do Repositório

```
📦 notas-atletas
 ├── notas-atletas.js   # Lógica principal
 └── README.md          # Documentação do projeto
```

---

## ▶️ Como Executar

1. Clone o repositório:

```
git clone https://github.com/snakegirlcode/notas-atletas
```

2. Acesse a pasta:

```
cd notas-atletas
```

3. Execute o arquivo:

```
node notas-atletas.js
```

4. Veja o resultado no console 🎉

---

## 🧩 Aprendizados do Projeto

* Ordenação de arrays com `toSorted()`
* Recorte com `slice()`
* Soma eficiente com `reduce()`
* Exibição padronizada no console
* Organização clara do fluxo de dados

Este projeto é excelente como exemplo de manipulação de dados e lógica básica em JavaScript.

---

## 👩‍💻 Autora

**Thaís de Sousa — snakegirlcode**
📍 Brasil
💻 Desenvolvedora em formação, apaixonada por Python, JavaScript e educação.
🌙 Estudando fullstack e criando projetos para portfólio.

<p align="left">
  <a href="https://github.com/snakegirlcode"><img src="https://img.shields.io/badge/GitHub-snakegirlcode-181717?style=for-the-badge&logo=github"/></a>
</p>

---

## 📜 Licença

Este projeto está licenciado sob a licença **MIT** — fique à vontade para usar como referência.

---
