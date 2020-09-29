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
  "dgn_name": "Miglance Castle",
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

var Cyrus = {
  "user": user_id,
  "name": "Cyrus",
  "rarity": "3",
  "element": "water",
  "attack_type": "Slash",
  "weapon_type": "Katana",
  "accessory_type": "Ring",
  "ls_type": "light",
  "dgn_name": "Man-eating Marsh",
  "hp": "230",
  "hp_l": "39.65822784810127",
  "mp": "62",
  "mp_l": "5.468354430379747",
  "pwr": "12",
  "pwr_l": "2.367088607594937",
  "int": "8",
  "int_l": "1.860759493670886",
  "end": "8",
  "end_l": "1.89873417721519",
  "spr": "10",
  "spr_l": "2.063291139240506",
  "spd": "12",
  "spd_l": "2.379746835443038",
  "lck": "10",
  "lck_l": "2.607594936708861",
  "gn_1": "end_1",
  "gl_1": "5",
  "gn_2": "spr_1",
  "gl_2": "10",
  "gn_3": "mp_1",
  "gl_3": "40",
  "gn_4": "pwr_1",
  "gl_4": "15",
  "gn_5": "lck_1",
  "gl_5": "15",
  "gn_6": "end_2",
  "gl_6": "20",
  "gn_7": "spr_2",
  "gl_7": "20",
  "gn_8": "mp_2",
  "gl_8": "80",
  "gn_9": "pwr_2",
  "gl_9": "25",
  "gn_10": "lck_2",
  "gl_10": "30",
  "weapon": 3,
}

var Amy = {
  "user": user_id,
  "name": "Amy",
  "rarity": "3",
  "element": "wind",
  "attack_type": "Blunt",
  "weapon_type": "Fists",
  "accessory_type": "Necklace",
  "ls_type": "light",
  "dgn_name": "Industrial Ruins",
  "hp": "236",
  "hp_l": "53.31645569620253",
  "mp": "58",
  "mp_l": "4.037974683544304",
  "pwr": "12",
  "pwr_l": "2.645569620253165",
  "int": "8",
  "int_l": "1.848101265822785",
  "end": "10",
  "end_l": "1.949367088607595",
  "spr": "8",
  "spr_l": "1.936708860759494",
  "spd": "12",
  "spd_l": "2.392405063291139",
  "lck": "14",
  "lck_l": "2.379746835443038",
  "gn_1": "mp_1",
  "gl_1": "20",
  "gn_2": "hp_1",
  "gl_2": "200",
  "gn_3": "end_1",
  "gl_3": "10",
  "gn_4": "pwr_1",
  "gl_4": "15",
  "gn_5": "lck_1",
  "gl_5": "15",
  "gn_6": "mp_2",
  "gl_6": "60",
  "gn_7": "hp_2",
  "gl_7": "300",
  "gn_8": "end_2",
  "gl_8": "25",
  "gn_9": "pwr_2",
  "gl_9": "25",
  "gn_10": "lck_2",
  "gl_10": "30",
  "weapon": 3,
}

var Riica = {
  "user": user_id,
  "name": "Riica",
  "rarity": "3",
  "element": "earth",
  "attack_type": "Magic",
  "weapon_type": "Hammer",
  "accessory_type": "Bangle",
  "ls_type": "light",
  "dgn_name": "Xeno-Domain",
  "hp": "230",
  "hp_l": "38.65822784810127",
  "mp": "64",
  "mp_l": "6.594936708860759",
  "pwr": "10",
  "pwr_l": "2.430379746835443",
  "int": "12",
  "int_l": "2.405063291139241",
  "end": "8",
  "end_l": "1.987341772151899",
  "spr": "10",
  "spr_l": "2.050632911392405",
  "spd": "12",
  "spd_l": "2.392405063291139",
  "lck": "8",
  "lck_l": "1.936708860759494",
  "gn_1": "hp_1",
  "gl_1": "100",
  "gn_2": "end_1",
  "gl_2": "10",
  "gn_3": "int_1",
  "gl_3": "10",
  "gn_4": "mp_1",
  "gl_4": "40",
  "gn_5": "spd_1",
  "gl_5": "15",
  "gn_6": "hp_2",
  "gl_6": "300",
  "gn_7": "end_2",
  "gl_7": "20",
  "gn_8": "int_2",
  "gl_8": "25",
  "gn_9": "mp_2",
  "gl_9": "80",
  "gn_10": "spd_2",
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

var button_cyrus = document.getElementById('cyrus_add')
button_cyrus.addEventListener('click', function(e) {
  button_cyrus.style.display = "none";

  fetch('/api/character-create/', {
    method: 'POST',
    headers:{
      'Content-type':'application/json',
      "X-CSRFToken": getCookie("csrftoken"),
    },
    body:
      JSON.stringify(Cyrus)
    })
})

var button_amy = document.getElementById('amy_add')
button_amy.addEventListener('click', function(e) {
  button_amy.style.display = "none";

  fetch('/api/character-create/', {
    method: 'POST',
    headers:{
      'Content-type':'application/json',
      "X-CSRFToken": getCookie("csrftoken"),
    },
    body:
      JSON.stringify(Amy)
    })
})

var button_riica = document.getElementById('riica_add')
button_riica.addEventListener('click', function(e) {
  button_riica.style.display = "none";

  fetch('/api/character-create/', {
    method: 'POST',
    headers:{
      'Content-type':'application/json',
      "X-CSRFToken": getCookie("csrftoken"),
    },
    body:
      JSON.stringify(Riica)
    })
})
