var btn = document.querySelector ('.plan2');
var container = document.querySelector('.con2');

btn.addEventListener('click', function() {
  if(container.style.display ==='block'){
    container.style.display ='none';
  }else{
    container.style.display = 'block';
  }
  });