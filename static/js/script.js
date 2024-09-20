
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];

/**
 * Abre o modal quando o botão é clicado.
 *
 * Seleciona o modal pelo seu ID e o botão que abre o modal pelo ID "openModalBtn".
 * Ao clicar no botão, o estilo do modal é alterado para "block", tornando-o visível.
 */

btn.onclick = () => {
  modal.style.display = "block";
}

/**
 * Fecha o modal quando o botão de fechar (representado por um "x") é clicado.
 *
 * Seleciona o elemento com a classe "close" e, ao clicar nele, altera o estilo do modal para "none", ocultando-o.
 */

span.onclick = () => {
  modal.style.display = "none";
}

/**
 * Fecha o modal quando o usuário clica fora do modal.
 *
 * Verifica se o alvo do clique é o próprio modal. Se for, o modal é fechado alterando o estilo para "none".
 *
 * @param {Event} event - O evento de clique disparado ao clicar em qualquer lugar da tela.
 */

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

/**
 * Atualiza a mensagem de arquivo selecionado.
 *
 * Seleciona o input de tipo arquivo pelo seu ID e a área onde a mensagem será exibida.
 * Verifica se algum arquivo foi selecionado, e se sim, exibe o nome do arquivo. Caso contrário, não exibe mensagem.
 */

function updateFileMessage() {
  const input = document.getElementById('photo');
  const fileMessage = document.getElementById('fileMessage');
  const fileName = input.files.length > 0 ? input.files[0].name : null;

  if (fileName) {
    fileMessage.textContent = `Imagem: ${fileName}`;
    fileMessage.style.color = "green";  // Mensagem em verde quando o arquivo for escolhido
  } else {
    fileMessage.textContent = "Nenhum arquivo escolhido.";
    fileMessage.style.color = "red";  // Mensagem em vermelho quando nenhum arquivo for escolhido
  }
}

/**
 * Alterna a exibição de um campo de entrada associado a uma checkbox.
 *
 * Verifica se a checkbox associada ao campo de entrada está marcada. Se estiver marcada e menos de 3 redes sociais foram selecionadas,
 * o campo de entrada associado é exibido. Caso contrário, a checkbox é desmarcada e uma mensagem de alerta é exibida.
 *
 * @param {string} inputId - O ID do campo de entrada que será exibido ou ocultado, formado pela combinação de um ID base e um sufixo.
 */

let selectedCount = 0;
                
function toggleInput(inputId) {
  const checkbox = document.getElementById(inputId.split('_')[0]);
  const inputField = document.getElementById(inputId);
  
  if (checkbox.checked) {
    if (selectedCount < 3) {
      inputField.style.display = 'block';
      selectedCount++;
    } else {
      checkbox.checked = false;
      alert("Você pode escolher no máximo 3 redes sociais.");
    }
  } else {
    inputField.style.display = 'none';
    selectedCount--;
  }
}