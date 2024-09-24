// Função para adicionar um item de resultado com botão de excluir
function adicionarResultado(texto) {
  const resultsContainer = document.getElementById('results-container');
  const resultItem = document.createElement('div');
  resultItem.className = 'result-item';
  resultItem.textContent = texto;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Excluir';
  deleteBtn.className = 'delete-btn';

  deleteBtn.addEventListener('click', () => {
    resultsContainer.removeChild(resultItem);
  });

  resultItem.appendChild(deleteBtn);
  resultsContainer.appendChild(resultItem);
}

// Função para calcular dois números
function calcular() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultado = num1 + num2;
  adicionarResultado(`Resultado da soma: ${resultado}`);
}

// Função para trocar dois valores
function trocarValores() {
  const value1 = document.getElementById('value1');
  const value2 = document.getElementById('value2');
  const temp = value1.value;
  value1.value = value2.value;
  value2.value = temp;
  adicionarResultado(`Valores trocados: Valor 1 = ${value2.value}, Valor 2 = ${value1.value}`);
}

// Função para modificar um texto
function modificarTexto() {
  const originalText = document.getElementById('text-input').value;
  const modifiedText = originalText.toUpperCase();
  adicionarResultado(`Texto Modificado: ${modifiedText}`);
}

// Função auxiliar para adicionar uma tarefa
function adicionarTarefa() {
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  if (taskInput.value.trim() === '') {
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskInput.value;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Excluir';
  deleteBtn.className = 'delete-btn';

  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  adicionarResultado(`Tarefa adicionada: ${taskInput.value}`);
  taskInput.value = ''; // Limpa o campo de entrada
}

// Configura os eventos dos botões
document.getElementById('calc-btn').addEventListener('click', calcular);
document.getElementById('swap-btn').addEventListener('click', trocarValores);
document.getElementById('modify-text-btn').addEventListener('click', modificarTexto);
document.getElementById('add-task-btn').addEventListener('click', adicionarTarefa);
