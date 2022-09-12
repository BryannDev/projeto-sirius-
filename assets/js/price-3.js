var btn = document.querySelector ('.plan3');
var container = document.querySelector('.con3');

btn.addEventListener('click', function() {
  if(container.style.display ==='block'){
    container.style.display ='none';
  }else{
    container.style.display = 'block';
  }
  });