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
list_snapshot = []
var url = `http://localhost:8000/api/user-list/${user_id}/`
var filter = ''

buildList()

function buildList() {
  var wrapper = document.getElementById('fish-container')
  console.log(url)

  fetch(url)
  .then((resp) => resp.json())
  .then(function(data){
    console.log('Data:', data)

    var list = data
    for (var i in list){

      try {
        document.getElementById(`data-row-${i}`).remove()
      }
      catch(err){
      }

      var dragon_palace = `<td class="spot-false"></td>`
        if (list[i].dragon_palace == true){dragon_palace = `<td class="spot-true">&#10004;</td>`}
      var acteul = `<td class="spot-false"></td>`
        if (list[i].acteul == true){acteul = `<td class="spot-true">&#10004;</td>`}
      var lake_tiilen = `<td class="spot-false"></td>`
        if (list[i].lake_tiilen == true){lake_tiilen = `<td class="spot-true">&#10004;</td>`}
      var vasu_mountains = `<td class="spot-false"></td>`
        if (list[i].vasu_mountains == true){vasu_mountains = `<td class="spot-true">&#10004;</td>`}
      var charol_plains = `<td class="spot-false"></td>`
        if (list[i].charol_plains == true){charol_plains = `<td class="spot-true">&#10004;</td>`}
      var man_eating_marsh = `<td class="spot-false"></td>`
        if (list[i].man_eating_marsh == true){man_eating_marsh = `<td class="spot-true">&#10004;</td>`}
      var baruoki = `<td class="spot-false"></td>`
        if (list[i].baruoki == true){baruoki = `<td class="spot-true">&#10004;</td>`}
      var nauru_uplands = `<td class="spot-false"></td>`
        if (list[i].nauru_uplands == true){nauru_uplands = `<td class="spot-true">&#10004;</td>`}
      var karek_swampland = `<td class="spot-false"></td>`
        if (list[i].karek_swampland == true){karek_swampland = `<td class="spot-true">&#10004;</td>`}
      var rinde = `<td class="spot-false"></td>`
        if (list[i].rinde == true){rinde = `<td class="spot-true">&#10004;</td>`}
      var serena_coast = `<td class="spot-false"></td>`
        if (list[i].serena_coast == true){serena_coast = `<td class="spot-true">&#10004;</td>`}
      var rucyana_sands = `<td class="spot-false"></td>`
        if (list[i].rucyana_sands == true){rucyana_sands = `<td class="spot-true">&#10004;</td>`}
      var elzion_airport = `<td class="spot-false"></td>`
        if (list[i].elzion_airport == true){elzion_airport = `<td class="spot-true">&#10004;</td>`}
      var nilva = `<td class="spot-false"></td>`
        if (list[i].nilva == true){nilva = `<td class="spot-true">&#10004;</td>`}
      var last_island = `<td class="spot-false"></td>`
        if (list[i].last_island == true){last_island = `<td class="spot-true">&#10004;</td>`}
      var spacetime_rift = `<td class="spot-false"></td>`
        if (list[i].spacetime_rift == true){spacetime_rift = `<td class="spot-true">&#10004;</td>`}
      var zol_plains = `<td class="spot-false"></td>`
        if (list[i].zol_plains == true){zol_plains = `<td class="spot-true">&#10004;</td>`}
      var moonlight_forest = `<td class="spot-false"></td>`
        if (list[i].moonlight_forest == true){moonlight_forest = `<td class="spot-true">&#10004;</td>`}
      var snake_neck_igoma = `<td class="spot-false"></td>`
        if (list[i].snake_neck_igoma == true){snake_neck_igoma = `<td class="spot-true">&#10004;</td>`}
      var ancient_battlefield = `<td class="spot-false"></td>`
        if (list[i].ancient_battlefield == true){ancient_battlefield = `<td class="spot-true">&#10004;</td>`}

      var fish = `
        <tr id="data-row-${i}">
            <td class="row-text">${list[i].number}</td>
            <td class="row-text">${list[i].description}</td>
            <td class="row-text">${list[i].name}</td>
            ${dragon_palace}
            ${acteul}
            ${lake_tiilen}
            ${vasu_mountains}
            ${charol_plains}
            ${man_eating_marsh}
            ${baruoki}
            ${nauru_uplands}
            ${karek_swampland}
            ${rinde}
            ${serena_coast}
            ${rucyana_sands}
            ${elzion_airport}
            ${nilva}
            ${last_island}
            ${spacetime_rift}
            ${zol_plains}
            ${moonlight_forest}
            ${snake_neck_igoma}
            ${ancient_battlefield}
            <td class="row-text lead" scope="row">${list[i].rod}</td>
            <td class="row-text lead" scope="row">${list[i].stones}</td>
            <td class="p-0 text-center">
              <button class="btn btn-sm btn-outline-dark btn-square-decrement" style="float: left" type="submit">
                <strong>
                  <
                </strong>
              </button>
              <button class="btn btn-sm pl-0 pr-0" disabled>${list[i].actual_catch}</button>
              <button class="btn btn-sm btn-outline-dark btn-square-increment" style="float: right" type="submit">
                <strong>
                  >
                </strong>
              </button>
            </td>
            <td class="row-text lead" scope="row">${list[i].bait}</td>
            <td class="row-text lead" scope="row">${list[i].reel}</td>
            <td class="row-text lead" scope="row">${list[i].xp}</td>
        </tr>
      `
      wrapper.innerHTML += fish

      }

      if (list_snapshot.length > list.length){
        for(var i = list.length; i < list_snapshot.length; i++){
          document.getElementById(`data-row-${i}`).remove()
        }
      }

      list_snapshot = list

      for (var i in list) {
        var decrementBtn = document.getElementsByClassName('btn-square-decrement')[i]
        var incrementBtn = document.getElementsByClassName('btn-square-increment')[i]
        var fishName = document.getElementsByClassName('row-text-name')[i]

        decrementBtn.addEventListener('click', (function(fish) {
          return function(){
            fishDecrement(fish)
          }}
        )
        (list[i])
        )

        incrementBtn.addEventListener('click', (function(fish) {
          return function(){
            fishIncrement(fish)
          }}
        )
        (list[i])
        )

/*        fishName.addEventListener('mouseover', (function(fish) {
          return function(){
            fishDetail(fish)
          }}
        )
        (list[i])
        )*/
      }
  })
}

function fishIncrement(fish) {

  fish_id = fish.id
  fish_name = fish.name
  fish_stones = fish.stones
  fish_update = fish.actual_catch
  console.log('ID: ' + fish_id + '  Name: ' + fish_name + '   Actual Catch: ' + fish_update)

  if (fish_update == 0){
    fish_update = 1
    fish_stones = 19
  }
  else if (fish_update == 1){
    fish_update = 10
  }
  else if (fish_update == 10){
    fish_update = 30
    fish_stones = 16
  }
  else if (fish_update == 30){
    fish_update = 50
  }
  else if (fish_update == 50){
    fish_update = 70
    fish_stones = 10
  }
  else if (fish_update == 70){
    fish_update = 100
  }
  else if (fish_update == 100){
    fish_update = 150
    fish_stones = 0
  }

  fetch(`http://localhost:8000/api/fish-update/${fish_id}/`, {
    method: 'POST',
    headers:{
      'Content-type':'application/json',
      "X-CSRFToken": getCookie("csrftoken"),
    },
    body:JSON.stringify({ 'actual_catch':fish_update, 'stones':fish_stones })
  })
}

function fishDecrement(fish){
  fish_id = fish.id
  fish_name = fish.name
  fish_stones = fish.stones
  fish_update = fish.actual_catch
  console.log('ID: ' + fish_id + '  Name: ' + fish_name + '   Actual Catch: ' + fish_update)

  if (fish_update == 150){
    fish_update = 100
    fish_stones = 10
  }
  else if (fish_update == 100){
    fish_update = 70
  }
  else if (fish_update == 70){
    fish_update = 50
    fish_stones = 16
  }
  else if (fish_update == 50){
    fish_update = 30
  }
  else if (fish_update == 30){
    fish_update = 10
    fish_stones = 19
  }
  else if (fish_update == 10){
    fish_update = 1
  }
  else if (fish_update == 1){
    fish_update = 0
    fish_stones = 20
  }

  fetch(`http://localhost:8000/api/fish-update/${fish_id}/`, {
    method: 'POST',
    headers:{
      'Content-type':'application/json',
      "X-CSRFToken": getCookie("csrftoken"),
    },
    body:JSON.stringify({ 'actual_catch':fish_update, 'stones':fish_stones })
  })
}

/*
function fishDetail(fish) {
  fish_id = fish.id
  fish_name = fish.name
  fish_description = fish.description
  console.log('-ID: ' + fish_id + '   -Name: ' + fish_name + '   -Description: ' + fish_description)
}

var fnumber = document.getElementById('number')
fnumber.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api//'
  buildList()
})
var fdescription = document.getElementById('description')
fdescription.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-description/'
  buildList()
})

var fname = document.getElementById('name')
fname.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-name/'
  buildList()
})

var fdragonpalace = document.getElementById('dragonpalace')
fdragonpalace.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-dragonpalace/'
  buildList()
})

var facteul = document.getElementById('acteul')
facteul.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-acteul/'
  buildList()
})

var flaketiilen = document.getElementById('laketiilen')
flaketiilen.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-laketiilen/'
  buildList()
})

var fvasumountains = document.getElementById('vasumointains')
fvasumountains.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-vasumointains/'
  buildList()
})

var fcharolplains = document.getElementById('charolplains')
fcharolplains.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-charolplains/'
  buildList()
})

var fmaneatingswamp = document.getElementById('maneatingswamp')
fmaneatingswamp.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-maneatingswamp/'
  buildList()
})

var fbaruoki = document.getElementById('baruoki')
fbaruoki.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-baruoki/'
  buildList()
})

var fnauruuplands = document.getElementById('nauruuplands')
fnauruuplands.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-nauruuplands/'
  buildList()
})

var fkarekswampland = document.getElementById('karekswampland')
fkarekswampland.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-karekswampland/'
  buildList()
})

var frindeport = document.getElementById('rindeport')
frindeport.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-rindeport/'
  buildList()
})

var fserenacoast = document.getElementById('serenacoast')
fserenacoast.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-serenacoast/'
  buildList()
})

var frucyanasands = document.getElementById('rucyanasands')
frucyanasands.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-rucyanasands/'
  buildList()
})

var felzionairport = document.getElementById('elzionairport')
felzionairport.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-elzionairport/'
  buildList()
})

var fnilva = document.getElementById('nilva')
fnilva.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-nilva/'
  buildList()
})

var flastisland = document.getElementById('lastisland')
flastisland.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-lastisland/'
  buildList()
})

var fdimensionrift = document.getElementById('dimensionrift')
fdimensionrift.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-dimensionrift/'
  buildList()
})

var fzolplains = document.getElementById('zolplains')
fzolplains.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-zolplains/'
  buildList()
})

var fmoonlightforest = document.getElementById('moonlightforest')
fmoonlightforest.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-moonlightforest/'
  buildList()
})

var fsnakeneckigoma = document.getElementById('snakeneckigoma')
fsnakeneckigoma.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-snakeneckigoma/'
  buildList()
})

var fancientbattlefield = document.getElementById('ancientbattlefield')
fancientbattlefield.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-ancientbattlefield/'
  buildList()
})

var factualcatch = document.getElementById('actualcatch')
factualcatch.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-actualcatch/'
  buildList()
})

var fstones = document.getElementById('stones')
fstones.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-stones/'
  buildList()
})

var frod = document.getElementById('rod')
frod.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-rod/'
  buildList()
})

var fbait = document.getElementById('bait')
fbait.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-bait/'
  buildList()
})

var freel = document.getElementById('reel')
freel.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-reel/'
  buildList()
})

var fxp = document.getElementById('xp')
fxp.addEventListener('click', function(e) {
  url = 'http://localhost:8000/api/fish-list-xp/'
  buildList()
})
*/
