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

/*
jQuery('#fishingTable').on('click', ".name_button", function() {
  var $this = $(this);
  var fish_id = $this.attr('id').split('-')[1];
  var data_target = $this.attr('data-target');
  console.log(fish_id, data_target)
  $.ajax({
    type: 'GET',
    url: `/api/fish-list/${fish_id}`,
    success: function(fish) {

    },
    error: function() {
      console.log('Error')
    }
  });
})
*/


jQuery('#fishingTable').on('click', ".inc_button", function() {
  var $this = $(this);
  var fish_id = $this.attr('id').split('-')[1];
  $.ajax({
    type: 'GET',
    url: `/api/fish-list/${fish_id}`,
    success: function(fish) {
      fishIncrement(fish)
    },
    error: function() {
      console.log('Error')
    }
  });
})

jQuery('#fishingTable').on('click', ".dec_button", function() {
  var $this = $(this);
  var fish_id = $this.attr('id').split('-')[1];
  $.ajax({
    type: 'GET',
    url: `/api/fish-list/${fish_id}`,
    success: function(fish) {
      fishDecrement(fish)
    },
    error: function() {
      console.log('Error')
    }
  });
})

jQuery('#fishingTable').on('click', ".inc_rod", function() {
  $.ajax({
    type: 'GET',
    url: `/api/profile-update/${user_id}`,
    success: function(profile) {
      rodIncrement(profile)
    },
    error: function() {
      console.log('Error')
    }
  });
})

jQuery('#fishingTable').on('click', ".dec_rod", function() {
  $.ajax({
    type: 'GET',
    url: `/api/profile-update/${user_id}`,
    success: function(profile) {
      rodDecrement(profile)
    },
    error: function() {
      console.log('Error')
    }
  });
})

/*
function fishModal(fish) {
  fish_id = fish.id
  fish_stones = fish.stones
  fish_update = fish.actual_catch
  console.log(fish_id, fish_stones, fish_update)
}
*/

function fishIncrement(fish) {
  fish_id = fish.id
  fish_stones = fish.stones
  fish_update = fish.actual_catch

  if (fish_update == 0){
    fish_update = 1
    fish_stones = 1
  }
  else if (fish_update == 1){
    fish_update = 10
  }
  else if (fish_update == 10){
    fish_update = 30
    fish_stones = 4
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
  .then(document.querySelector("#update-" + fish_id).innerHTML = fish_update)
  .catch(error => console.log('Error: ' + error.message))
}

function fishDecrement(fish){
  fish_id = fish.id
  fish_stones = fish.stones
  fish_update = fish.actual_catch

  if (fish_update == 150){
    fish_update = 100
    fish_stones = 10
  }
  else if (fish_update == 100){
    fish_update = 70
  }
  else if (fish_update == 70){
    fish_update = 50
    fish_stones = 4
  }
  else if (fish_update == 50){
    fish_update = 30
  }
  else if (fish_update == 30){
    fish_update = 10
    fish_stones = 1
  }
  else if (fish_update == 10){
    fish_update = 1
  }
  else if (fish_update == 1){
    fish_update = 0
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
  .then(document.querySelector("#update-" + fish_id).innerHTML = fish_update)
  .catch(error => console.log('Error: ' + error.message))
}

function rodIncrement(profile){
  profile_rod = profile.rod

  if (profile_rod < 1){

  }
  else if (profile_rod > 29) {

  }
  else {
    profile_rod = profile_rod + 1
  }

  fetch(`/api/profile-update/${user_id}/`, {
    method: 'POST',
    headers:{
      'Content-type':'application/json',
      "X-CSRFToken": getCookie("csrftoken"),
    },
    body:JSON.stringify({ 'rod':profile_rod  })
  })
  .then(document.querySelector("#rodUpdate").innerHTML = profile_rod)
  .catch(error => console.log('Error: ' + error.message))
}

function rodDecrement(profile){
  profile_rod = profile.rod

  if (profile_rod < 2){

  }
  else if (profile_rod > 30) {

  }
  else {
    profile_rod = profile_rod - 1
  }

  fetch(`/api/profile-update/${user_id}/`, {
    method: 'POST',
    headers:{
      'Content-type':'application/json',
      "X-CSRFToken": getCookie("csrftoken"),
    },
    body:JSON.stringify({ 'rod':profile_rod  })
  })
  .then(document.querySelector("#rodUpdate").innerHTML = profile_rod)
  .catch(error => console.log('Error: ' + error.message))
}
