document.addEventListener ('DOMContentLoaded', function(event) {
  
  var charLike = 0,
      charDislike = 0;

  function like() {
    charLike++;
    calculateChar();
    document.getElementById("ah-card-voteLike").style.display = "block";
    document.getElementById("ah-card-votes").style.display = "none";
    document.getElementById("ah-card-voteDislike").style.display = "none";
  }
  
  function dislike() {
    charDislike++;
    calculateChar();
    document.getElementById("ah-card-voteDislike").style.display = "block";
    document.getElementById("ah-card-votes").style.display = "none";
    document.getElementById("ah-card-voteLike").style.display = "none";
  }

  document.getElementById("ah-button-like--back").addEventListener("click", function() {
    document.getElementById("ah-card-voteLike").style.display = "none";
    document.getElementById("ah-card-votes").style.display = "block";
    document.getElementById("ah-card-voteDislike").style.display = "none";
  });

  document.getElementById("ah-button-dislike--back").addEventListener("click", function() {
    document.getElementById("ah-card-voteDislike").style.display = "none";
    document.getElementById("ah-card-votes").style.display = "block";
    document.getElementById("ah-card-voteLike").style.display = "none";
  });

  function calculateChar() {

    const total = charLike + charDislike;
    const likePercentage = (charLike / total)*100;
    const dislikePercentage = (charDislike / total)*100;

    document.getElementById('ah-bar_like').style.width = likePercentage.toString() + '%';
    document.getElementById('ah-bar_like--percentage').innerHTML = Math.round(likePercentage).toString() + '%';
    document.getElementById('ah-bar_dislike').style.width = dislikePercentage.toString() + '%';
    document.getElementById('ah-bar_dislike--percentage').innerHTML = Math.round(dislikePercentage).toString() + '%';

    if (isNaN(likePercentage)) {
      document.getElementById('ah-bar_like--percentage').innerHTML = '0%';
      document.getElementById('ah-bar_dislike--percentage').innerHTML = '0%';
    }

  }

  document.getElementById('ah-button-like').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('ah-button-like').classList.add('ah-btn-active');
    if (document.getElementById('ah-button-dislike').classList.contains('ah-btn-active')) {
      document.getElementById('ah-button-dislike').classList.remove('ah-btn-active');
    }
    like();
  });

  document.getElementById('ah-button-dislike').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('ah-button-dislike').classList.add('ah-btn-active');
    if (document.getElementById('ah-button-like').classList.contains('ah-btn-active')) {
      document.getElementById('ah-button-like').classList.remove('ah-btn-active');
    }
    dislike();
  });

  calculateChar();

});