// Fishing version 1.3.1

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

jQuery('#characterTable').on('keypress', ".lv_input", function(e) {
  if(e.which == 13) {
    var $this = $(this);
    var id = $this.attr('id').split('-')[1];
    var lv_id = $this.attr('id');
    var input = this.value;
    $.ajax({
      success: function(lv) {
        fetch(`/api/character-update/${id}/`, {
          method: 'POST',
          headers:{
            'Content-type':'application/json',
            "X-CSRFToken": getCookie("csrftoken"),
          },
          body:JSON.stringify({ 'lv':input })
        })
        .then(function() {
            $('#characterTable').DataTable().ajax.reload();
          })
        .catch(error => console.log('Error: ' + error.message))
      },
      error: function() {
        console.log('Error')
      }
    });
  }
})

jQuery('#characterTable').on('keypress', ".ls_input", function(e) {
  if(e.which == 13) {
    var $this = $(this);
    var id = $this.attr('id').split('-')[1];
    var lv_id = $this.attr('id');
    var input = this.value;
    $.ajax({
      success: function(lv) {
        fetch(`/api/character-update/${id}/`, {
          method: 'POST',
          headers:{
            'Content-type':'application/json',
            "X-CSRFToken": getCookie("csrftoken"),
          },
          body:JSON.stringify({ 'ls_count':input })
        })
        .then(function() {
            $('#characterTable').DataTable().ajax.reload();
          })
        .catch(error => console.log('Error: ' + error.message))
      },
      error: function() {
        console.log('Error')
      }
    });
  }
})
