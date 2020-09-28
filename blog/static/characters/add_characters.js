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
  "user": user_id,
  "name": "Aldo",
  "rarity": "3",
  "element": "fire",
  "attack_type": "Slash",
  "weapon_type": "Sword",
  "accessory_type": "Bangle",
  "ls_type": "light",
  "hp": "232",
  "hp_l": "40.65822784810127",
  "mp": "60",
  "mp_l": "4.468354430379747",
  "pwr": "12",
  "pwr_l": "2.670886075949367",
  "int": "8",
  "int_l": "1.810126582278481",
  "end": "10",
  "end_l": "2.329113924050633",
  "spr": "10",
  "spr_l": "1.974683544303797",
  "spd": "12",
  "spd_l": "2.113924050632911",
  "lck": "10",
  "lck_l": "2.253164556962025",
  "gn_1": "spd_1",
  "gl_1": "5",
  "gn_2": "end_1",
  "gl_2": "10",
  "gn_3": "hp_1",
  "gl_3": "200",
  "gn_4": "lck_1",
  "gl_4": "15",
  "gn_5": "pwr_1",
  "gl_5": "15",
  "gn_6": "spd_2",
  "gl_6": "20",
  "gn_7": "end_2",
  "gl_7": "20",
  "gn_8": "hp_2",
  "gl_8": "400",
  "gn_9": "lck_2",
  "gl_9": "25",
  "gn_10": "pwr_2",
  "gl_10": "30",
  "weapon": 3,
}

var button_aldo = document.getElementById('aldo_add')
button_aldo.addEventListener('click', function(e) {
  button_aldo.style.display = "none";

  fetch('/api/character-create/', {
    method: 'POST',
    headers:{
      'Content-type':'application/json',
      "X-CSRFToken": getCookie("csrftoken"),
    },
    body:
      JSON.stringify(Aldo)
    })
})
