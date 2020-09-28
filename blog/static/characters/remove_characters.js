// Characters version 1.0.0

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const user_id = JSON.parse(document.getElementById('user_id').textContent);

var Aldo = {

var button_aldo = document.getElementById('aldo_remove')
button_aldo.addEventListener('click', function(e) {
  button_aldo.style.display = "none";

  fetch('/api/character-delete/', {
    method: 'DELETE',
    headers:{
      'Content-type':'application/json',
      "X-CSRFToken": getCookie("csrftoken"),
    },
    body:
      JSON.stringify(Aldo)
    })
})
