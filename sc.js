var inputData = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById('list');
var spans = document.getElementsByTagName('span');
var lis = document.getElementsByTagName('li');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');
var aboutBtn = document.getElementById('about');
var now = new Date();
var modal = document.getElementById('modal');
var cl = document.getElementById('close');

function getAbout() {
    modal.style.display = 'flex';
}

/* aboutBtn.onclick = getAbout; */

aboutBtn.addEventListener('click', getAbout);

cl.onclick = function(){
    modal.style.display = "none";
} 


window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

saveBtn.addEventListener('click', function(){
    localStorage.setItem('todoApplication', ulSpisok.innerHTML);
});

clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = '';
    localStorage.setItem('todoApplication', ulSpisok.innerHTML);
});