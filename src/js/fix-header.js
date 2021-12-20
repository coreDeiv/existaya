document.addEventListener ('DOMContentLoaded', function(event) {
  
  window.addEventListener('scroll', function(event) {
    var header = document.getElementById('ah-header');
    if (window.scrollY > 10) {
      header.classList.add('ah-header-active');
    } else {
      header.classList.remove('ah-header-active');
    }
  });

});