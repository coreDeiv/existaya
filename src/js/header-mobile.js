document.addEventListener ('DOMContentLoaded', function(event) {
  
  document.getElementById('ah-nav_list--item-button').addEventListener('click', function(e) {
    document.getElementById('ah-nav_list--item-button').classList.toggle('active');
    e.preventDefault();
    document.getElementById('ah-nav_list--menu').classList.toggle('ah-nav_list--show');
  });

});