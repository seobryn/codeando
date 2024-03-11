export const defaultCSS = `/* Put your CSS here */
  * {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .btn-example {
    border: 0;
    background-color: #333;
    color: white;
    border-radius: 3px;
    height: 40px;
    font-size: 16px;
    padding-inline: 1rem;
  }
  
  .btn-example:hover {
    background-color: #3f3f3f;
  }
  
  .codeando {
    display: inline-block;
    background-color: #333;
    color: white;
    padding: 1rem;
  }`

export const defaultJS = `// Put your JS here
document.querySelector(".btn-example")
    .addEventListener("click", () => {
        alert("Hola, estas usando Codeando")
    });`

export const defaultHTML = `<h1>Hola! 🤝 disfruta <span class="codeando">Codeando</span></h1>
<button class="btn-example">Click Aqui</button>
`

export const ESMSH_URL = "https://esm.sh"
