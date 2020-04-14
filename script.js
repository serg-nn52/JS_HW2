var inputData = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById('list');
var spans = document.getElementsByTagName('span');
var lis = document.getElementsByTagName('li');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');
var aboutBtn = document.getElementById('about');
var now = new Date();


function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.preventDefault();
        })
    }
};

function overLi(){
    for(let oneLi of lis){
        oneLi.addEventListener('click', function(){
            oneLi.style.textDecoration = 'line-through';
        })
    }
};


function loadTodo(){
    if(localStorage.getItem('todoApplication')){
        ulSpisok.innerHTML = localStorage.getItem('todoApplication');
        deleteTodo();
    }
};



/*addEventListener- получение типа события и вызов функции*/ 

inputData.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13){
        var newLi = document.createElement('li');
        var newSpan = document.createElement('span');
        newSpan.innerHTML = 'Delete';

        var newTodo = this.value; /*получение value из input*/
        this.value = ''; /*Очистка поля ввода*/
        if (newTodo != '') {
            ulSpisok.appendChild(newLi).append(newSpan, newTodo + " Дата и время добавления " + now);
            deleteTodo();
    }
    overLi(); 
}
});


aboutBtn.addEventListener('click', function(){
    alert ('Лушкин Сергей Николаевич');
});

saveBtn.addEventListener('click', function(){
    localStorage.setItem('todoApplication', ulSpisok.innerHTML);
});

clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = '';
    localStorage.setItem('todoApplication', ulSpisok.innerHTML);
})

deleteTodo();


loadTodo();
