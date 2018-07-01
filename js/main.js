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
      htmlBlock += '<div class="first article">'
      +'<div>'
        +'<picture>'
          +'<img src="img/'+articleData.img+'">'
        +'</picture>'
      +'</div>'
      +'<div>'
        +'<div class="date">'+articleData.date+'</div>'
          +'<h2>'+articleData.title+'</h2>'
          +'<p>'+articleData.description+'</p>'
          +'<div>'
            +'<picture>'
              +'<img src="img/'+articleData.img+'">'
            +'</picture>'
          +'</div>'
        +'</div>'
      +'</div>';
    }

    document.getElementById('second-section').innerHTML = htmlBlock;
  }
}

