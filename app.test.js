/**
 * @jest-environment jsdom
 */

describe('Teste das funcionalidades', () => {
  let addTaskBtn;
  let taskInput;
  let taskList;
  let resultsContainer;

  // HTML direto no teste
  const html = `
    <div>
      <input id="task-input" placeholder="Adicione sua tarefa" />
      <button id="add-task-btn">Adicionar</button>
      <ul id="task-list"></ul>
    </div>
    <div>
      <input id="num1" type="number" placeholder="Número 1" />
      <input id="num2" type="number" placeholder="Número 2" />
      <button id="calc-btn">Calcular</button>
      <div id="results-container"></div>
    </div>
    <div>
      <input id="value1" placeholder="Valor 1" />
      <input id="value2" placeholder="Valor 2" />
      <button id="swap-btn">Trocar</button>
    </div>
    <div>
      <input id="text-input" placeholder="Texto original" />
      <button id="modify-text-btn">Modificar Texto</button>
      <div id="results-container"></div>
    </div>
  `;

  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();

    // Pega os elementos DOM
    addTaskBtn = document.getElementById('add-task-btn');
    taskInput = document.getElementById('task-input');
    taskList = document.getElementById('task-list');
    resultsContainer = document.getElementById('results-container');
    
    // Importa o arquivo app.js para utilizar as funções no teste
    require('./app.js');
  });

  test('Deve realizar a soma de dois números', () => {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const calcBtn = document.getElementById('calc-btn');

    num1.value = 5;
    num2.value = 10;

    calcBtn.click();

    expect(resultsContainer.textContent).toContain('Resultado da soma: 15');
  });

  test('Deve trocar os valores de dois campos', () => {
    const value1 = document.getElementById('value1');
    const value2 = document.getElementById('value2');
    const swapBtn = document.getElementById('swap-btn');

    value1.value = 'A';
    value2.value = 'B';

    swapBtn.click();

    expect(resultsContainer.textContent).toContain('Valores trocados: Valor 1 = B, Valor 2 = A');
  });

  test('Deve modificar o texto para maiúsculas', () => {
    const textInput = document.getElementById('text-input');
    const modifyTextBtn = document.getElementById('modify-text-btn');

    textInput.value = 'teste de modificação';

    modifyTextBtn.click();

    expect(resultsContainer.textContent).toContain('Texto Modificado: TESTE DE MODIFICAÇÃO');
  });

  test('Deve adicionar e remover três tarefas', () => {
    const tarefas = ['Soma dois números', 'Troca valores', 'Modifica texto'];

    tarefas.forEach(tarefa => {
      taskInput.value = tarefa;
      addTaskBtn.click();
    });

    expect(taskList.children.length).toBe(3);
    expect(taskList.children[0].textContent).toContain('Soma dois números');
    expect(taskList.children[1].textContent).toContain('Troca valores');
    expect(taskList.children[2].textContent).toContain('Modifica texto');

    const deleteButtons = taskList.querySelectorAll('.delete-btn');
    deleteButtons.forEach(btn => btn.click());

    expect(taskList.children.length).toBe(0);
  });
});