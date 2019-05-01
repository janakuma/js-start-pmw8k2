const toDoForm = document.querySelector('.js-toDoForm'),
      toDoInput = toDoForm.querySelector('input'),
      toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

const toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);

  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
  console.log(cleanToDos)
}


function saveToDos() {
  //localStorage 에서는 data를 저장할 수가 없다.
  //오직 string만 가능하다.

  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  //JSON.stringify는 자바스크립트 object를 string으로 바꿔준다.
}

function resetTodo() {
  toDoInput.value = '';
}

function paintTodo(text) {
  // const li = document.createElement('li');
  // const delBtn = document.createElement('button');
  // const span = document.createElement('span');  

  // delBtn.innerText = "X";  
  // span.innerHTML = text;    
  
  // toDoList.appendChild(li);  
  // li.appendChild(span);
  // li.appendChild(delBtn);   

  const newId = toDos.length + 1;
  const toDoObj = {
    text: text,
    id: newId
  }
  const append_li = `
    <li id=${toDoObj.id}>
      <button>delete</button>
      <strong>${text}</strong>      
    </li>`;
  toDos.push(toDoObj);
  toDoList.insertAdjacentHTML('beforeend', append_li);  

  const delBtn = document.querySelectorAll('.js-toDoList li button');

  [].forEach.call(delBtn, function(del) {
    del.addEventListener('click', deleteToDo, false);
  })  
  console.log(delBtn);
}

function handleSubmit(event) {
  const currentValue = toDoInput.value;
  event.preventDefault();  
  paintTodo(currentValue);
  saveToDos();
  resetTodo();
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);

  if(loadedToDos !== null) {
    //JSON.parse는 object로 변환 해준다.
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintTodo(toDo.text);
    });


    console.log(parsedToDos);
  } else {


  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmit);
}      

init();




