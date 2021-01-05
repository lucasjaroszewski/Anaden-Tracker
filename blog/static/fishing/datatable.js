$(document).ready(function() {
  var table = $('#fishingTable').DataTable( {
    info: false,
    responsive: false,
    searching: false,
    paging: false,
    columnDefs: [ {"orderSequence": ["desc", "asc"], "targets": [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22 ] } ],
    ajax: {
      "url": `/api/user-list/${user_id}`,
      "dataSrc": "" },
    columns: [

      { data: "number", render: function (data, type, row) {
        return '<p style="white-space: nowrap; text-align: center; margin: 0; padding: 5px;">' + row.number + '</p>' } },

      { data: "weapon",
        visible: false },

      { data: "name", render: function (data, type, row) {
        if (row.description == 'R') {
          return '<button data-toggle="modal" id="name-' + row.id
          + '" data-name="' + row.name
          + '" data-min_size="' + row.min_size
          + '" data-max_size="' + row.max_size
          + '" data-min_points="' + row.min_points
          + '" data-max_points="' + row.max_points
          + '" data-weapon="' + row.weapon
          + '" data-hook="' + row.hook
          + '" data-weak="' + row.weak
          + '" data-resist="' + row.resist
          + '" data-absorb="' + row.absorb
          + '" data-rarity="' + row.rarity
          + '" data-target="#myModal" class="btn btn-sm" style="white-space: nowrap; color: orange; font-weight: bold; padding: 5px">'
          + row.name + '</button>'
        }

        if (row.description == 'L') {
          return '<button data-toggle="modal" id="name-' + row.id
          + '" data-name="' + row.name
          + '" data-min_size="' + row.min_size
          + '" data-max_size="' + row.max_size
          + '" data-min_points="' + row.min_points
          + '" data-max_points="' + row.max_points
          + '" data-weapon="' + row.weapon
          + '" data-hook="' + row.hook
          + '" data-weak="' + row.weak
          + '" data-resist="' + row.resist
          + '" data-absorb="' + row.absorb
          + '" data-rarity="' + row.rarity
          + '" data-target="#myModal" class="btn btn-sm" style="white-space: nowrap; color: blue; font-weight: bold; padding: 5px">'
          + row.name + '</button>'
        }

        if (row.description == 'H') {
          return '<button data-toggle="modal" id="name-' + row.id
          + '" data-name="' + row.name
          + '" data-min_size="' + row.min_size
          + '" data-max_size="' + row.max_size
          + '" data-min_points="' + row.min_points
          + '" data-max_points="' + row.max_points
          + '" data-weapon="' + row.weapon
          + '" data-hook="' + row.hook
          + '" data-weak="' + row.weak
          + '" data-resist="' + row.resist
          + '" data-absorb="' + row.absorb
          + '" data-rarity="' + row.rarity
          + '" data-target="#myModal" class="btn btn-sm" style="white-space: nowrap; color: red; font-weight: bold; padding: 5px;">'
          + row.name + '</button>'
        }

        if (row.description == 'M') {
          return '<button data-toggle="modal" id="name-' + row.id
          + '" data-name="' + row.name
          + '" data-min_size="' + row.min_size
          + '" data-max_size="' + row.max_size
          + '" data-min_points="' + row.min_points
          + '" data-max_points="' + row.max_points
          + '" data-weapon="' + row.weapon
          + '" data-hook="' + row.hook
          + '" data-weak="' + row.weak
          + '" data-resist="' + row.resist
          + '" data-absorb="' + row.absorb
          + '" data-rarity="' + row.rarity
          + '" data-target="#myModal" class="btn btn-sm" style="white-space: nowrap; color: grey; font-weight: bold; padding: 5px;">'
          + row.name + '</button>'
        }

        if (row.description == '') {
          return '<button data-toggle="modal" data-id="' + row.id
          + '" data-name="' + row.name
          + '" data-min_size="' + row.min_size
          + '" data-max_size="' + row.max_size
          + '" data-min_points="' + row.min_points
          + '" data-max_points="' + row.max_points
          + '" data-weapon="' + row.weapon
          + '" data-hook="' + row.hook
          + '" data-weak="' + row.weak
          + '" data-resist="' + row.resist
          + '" data-absorb="' + row.absorb
          + '" data-rarity="' + row.rarity
          + '" data-target="#myModal" class="btn btn-sm" style="white-space: nowrap; padding: 5px">'
          + row.name + '</button>' }
        },
      },

      { data: "dragon_palace", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : '' } },
      { data: "acteul", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : '' } },
      { data: "lake_tiilen", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : '' } },
      { data: "vasu_mountains", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : '' } },
      { data: "charol_plains", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : '' } },
      { data: "man_eating_marsh", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : '' } },
      { data: "baruoki", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : '' } },
      { data: "nauru_uplands", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : '' } },
      { data: "karek_swampland", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : '' } },
      { data: "rinde", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : '' } },
      { data: "serena_coast", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : '' } },
      { data: "rucyana_sands", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : '' } },
      { data: "elzion_airport", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : '' } },
      { data: "nilva", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : '' } },
      { data: "last_island", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : '' } },
      { data: "spacetime_rift", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : '' } },
      { data: "zol_plains", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : '' } },
      { data: "moonlight_forest", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : '' } },
      { data: "snake_neck_igoma", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : '' } },
      { data: "ancient_battlefield", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : '' } },

      { data: "rod", render: function (data, type, row) {
        return '<p style="white-space: nowrap; text-align: center; margin: 0; padding: 5px;">' + row.rod + '</p>' } },

      { data: "actual_catch", render: function (data, type, row) {
        return '<div class="p-0 m-0 text-center"><button id="dec-' + row.id + '" class="dec_button btn btn-sm" style="float: left" type="submit"><i class="fas fa-chevron-left"></i></button>'
          + '<button id="update-' + row.id + '" class="btn btn-sm" disabled>' + row.actual_catch + '</button>'
          + '<button id="inc-' + row.id + '" class="inc_button btn btn-sm" style="float: right" type="submit"><i class="fas fa-chevron-right"></i></button></div>'
        }
      },

      {data: "bait", render: function (data, type, row) {
        return '<p style="white-space: nowrap; margin: 0; padding: 5px;">' + row.bait + '</p>' } },

      {data: "xp", render: function (data, type, row) {
        return '<p style="white-space: nowrap; text-align: center; margin: 0; padding: 5px;">' + row.xp + '</p>' } },

      ],
  } );

  $("#myModal").on('show.bs.modal', function (e) {
    let triggerLink = $(e.relatedTarget);
    let id = triggerLink[0].dataset['id'];
    let name = triggerLink[0].dataset['name'];
    let hook = triggerLink[0].dataset['hook'];
    let min_size = triggerLink[0].dataset['min_size'];
    let max_size = triggerLink[0].dataset['max_size'];
    let min_points = triggerLink[0].dataset['min_points'];
    let max_points = triggerLink[0].dataset['max_points'];
    let weak = triggerLink[0].dataset['weak'];
    let resist = triggerLink[0].dataset['resist'];
    let absorb = triggerLink[0].dataset['absorb'];
    let rarity = triggerLink[0].dataset['rarity'];

    $("#title").text(name);
    $(this).find("#fishImg").html('<img class="img-fluid" src="/media/fishes/icons/' + name + '.png" alt="' + name + '">');

    if (rarity == '1') {
      $(this).find("#rarity").html('<i class="fas fa-star" style="color: orange"></i>');
    }

    if (rarity == '2') {
      $(this).find("#rarity").html('<i class="fas fa-star" style="color: orange"></i> <i class="fas fa-star" style="color: orange"></i>');
    }

    if (rarity == '3') {
      $(this).find("#rarity").html('<i class="fas fa-star" style="color: orange"></i> <i class="fas fa-star" style="color: orange"></i> <i class="fas fa-star" style="color: orange"></i>');
    }

    if (rarity == '4') {
      $(this).find("#rarity").html('<i class="fas fa-star" style="color: orange"></i> <i class="fas fa-star" style="color: orange"></i> <i class="fas fa-star" style="color: orange"></i> <i class="fas fa-star" style="color: orange"> </i>');
    }

    if (rarity == '5') {
      $(this).find("#rarity").html('<i class="fas fa-star" style="color: orange"></i> <i class="fas fa-star" style="color: orange"></i> <i class="fas fa-star" style="color: orange"></i> <i class="fas fa-star" style="color: orange"></i> <i class="fas fa-star" style="color: orange"></i>');
    }

    $(this).find("#hookImg").html("<img src='/media/fishes/thumbnails/" + hook + ".png' alt='" + hook + "'>");
    $(this).find("#hook").text(hook);
    $(this).find("#sizes").html("<span style='font-size: 11px'>" + min_size + " ~ " + "</span><span style='font-size: 14px'><strong>" + max_size + "</strong> cm</span>");
    $(this).find("#points").html("<span style='font-size: 11px'>" + min_points + " ~ " + "</span><span style='font-size: 14px'><strong>" + max_points + "</strong> pts</span>");
    $(this).find("#weakness").html("<div><img src='/media/characters/elements/" + weak + ".png' title='" + weak + "'></div><div><span style='font-size: 14px'>Weak</span></div>");
    $(this).find("#resist").html("<div><img src='/media/characters/elements/" + resist + ".png' title='" + resist + "'></div><div><span style='font-size: 14px'>Resist</span></div>");
    $(this).find("#absorb").html("<div><img src='/media/characters/elements/" + absorb + ".png' title='" + absorb + "'></div><div><span style='font-size: 14px'>Absorb</span></div>");
  });

  new $.fn.dataTable.FixedHeader( table, {
    header: true,
    headerOffset: $('#navbar').height()
  });

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

} );



/* ---- WEAPONS -----

  ADD IN BEGGINING OF DATATABLE:
    dom: '<"toolbar">frtip',

  IN THE ENDING OF DATATABLE:

  $("div.toolbar").html('<div style="float: left">'
  + '<button id="reset" class="btn btn-sm">Reset</button>'
  + '<button id="rill_staff" class="btn btn-sm"><img style="width: 28px" src="/media/fishes/weapons/rill staff.png" title="Rill Staff"></button>'
  + '<button id="rill_sword" class="btn btn-sm"><img style="width: 28px" src="/media/fishes/weapons/rill sword.png" title="Rill Sword"></button>'
  + '<button id="rill_knuckle" class="btn btn-sm"><img style="width: 28px" src="/media/fishes/weapons/rill knuckle.png" title="Rill Knuckle"></button>'
  + '<button id="rill_bow" class="btn btn-sm"><img style="width: 28px" src="/media/fishes/weapons/rill bow.png" title="Rill Bow"></button>'
  + '<button id="rill_ax" class="btn btn-sm"><img style="width: 28px" src="/media/fishes/weapons/rill ax.png" title="Rill Ax"></button>'
  + '<button id="rill_hammer" class="btn btn-sm"><img style="width: 28px" src="/media/fishes/weapons/rill hammer.png" title="Rill Hammer"></button>'
  + '<button id="rill_katana" class="btn btn-sm"><img style="width: 28px" src="/media/fishes/weapons/rill katana.png" title="Poseidons Katana"></button>'
  + '<button id="rill_spear" class="btn btn-sm"><img style="width: 28px" src="/media/fishes/weapons/rill spear.png" title="Rill Spear"></button>'
  + '</div>')


  $('#reset').on('click', function () {
    table.columns(1).search("").draw();
  });
  $('#rill_staff').on('click', function () {
    table.columns(1).search("1").draw();
  });
  $('#rill_sword').on('click', function () {
    table.columns(1).search("2").draw();
  });
  $('#rill_knuckle').on('click', function () {
    table.columns(1).search("3").draw();
  });
  $('#rill_bow').on('click', function () {
    table.columns(1).search("4").draw();
  });
  $('#rill_ax').on('click', function () {
    table.columns(1).search("5").draw();
  });
  $('#rill_hammer').on('click', function () {
    table.columns(1).search("6").draw();
  });
  $('#rill_katana').on('click', function () {
    table.columns(1).search("7").draw();
  });
  $('#rill_spear').on('click', function () {
    table.columns(1).search("8").draw();
  });

----- WEAPONS ----- */
