var xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open('GET', './db.json', true);
xhr.setRequestHeader('ContentType', 'application/json');
xhr.send();
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(xhr.response);
  var htmlBlock = '';

  for (var i = 0; i < response.length; i++) {
    console.log(response[i]);
      var articleData = response[i];
      htmlBlock += '<div class="article">'
      +'<div>'
        +'<picture>'
          +'<img src="img/'+articleData.img+'">'
        +'</picture>'
      +'</div>'
      +'<div class="article-details">'
        +'<div class="date">'+articleData.date+'</div>'
          +'<h2>'+articleData.title+'</h2>'
          +'<p>'+articleData.description+'</p>'
          +'<div>'
            +'<picture>'
              +'<img src="img/'+articleData.img+'">'
            +'</picture>'
            +'<div class="icon-wrap"><i class="fa fa-play"></i></div>'
          +'</div>'
        +'</div>'
      +'</div>';
    }

    document.getElementById('second-section').innerHTML = htmlBlock;
  }
}

// Smooth scroll to second section
var links = document.getElementsByClassName('scroll-link');

for (var i = 0; i < links.length; i++) {
    links[i].onclick = scroll;
}

function scroll(e) {
    e.preventDefault();
    var id = this.getAttribute('href').replace('#', '');
    var target = document.getElementById(id).getBoundingClientRect().top;
    animateScroll(target);
}

function animateScroll(targetHeight) {
    targetHeight = document.body.scrollHeight - window.innerHeight > targetHeight + scrollY ? 
        targetHeight : document.body.scrollHeight - window.innerHeight;
    var initialPosition = window.scrollY;
    var SCROLL_DURATION = 30;
    var step_x = Math.PI / SCROLL_DURATION;
    var step_count = 0;
    requestAnimationFrame(step);
    function step() {
        if (step_count < SCROLL_DURATION) {
            requestAnimationFrame(step);
            step_count++;
            window.scrollTo(0, initialPosition + targetHeight * 0.25 * Math.pow((1 - Math.cos(step_x * step_count)), 2));
        }
    }
}