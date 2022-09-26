const button = document.getElementsByClassName('button');

button[0].addEventListener('click', () => {
  button[0].classList.toggle('active');
  document.getElementById("txt").style.fontWeight="bold";
});

button[1].addEventListener('click', () => {
  button[1].classList.toggle('active');
  document.getElementById("txt").style.fontStyle = "Italic"
});

button[2].addEventListener('click', () => {
  window.getSelection().toString();
});
