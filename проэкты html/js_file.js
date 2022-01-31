const button = document.querySelector('input');
const paragraph = document.querySelector('p');
const h1 = document.querySelector('h1');
const title = document.querySelector('title');
const lol = document.getElementById('lolz');
const joj = document.getElementById("asa");
h1.textContent = new Date()
button.addEventListener('click', updateButton);
function updateButton() {
  if (button.value === 'время') {
    button.value = 'времЯ';
    var b = new Date()
    paragraph.textContent = b;
  } 
  if (button.value === 'обновить') {
    paragraph.textContent = "в процессе";
    window.location.reload();
  } 
}
lol.addEventListener('dblclick')
function kk(){
 joj.textContent("lol")
}
/*while(true) {
  setTimeout(() => {  window.location.reload(); }, 200000);
}*/