$(document).ready(function() {
  var table = $('#fishingTable').DataTable( {
    dom: '<"toolbar">frtip',
    info: false,
    responsive: true,
    paging: false,
    columnDefs: [{
      "orderSequence": ["desc", "asc"], "targets": [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    }],
    ajax: {
      "url": "/api/fish-list/",
      "dataSrc": ""
    },
    columns: [

      { data: "number", render: function (data, type, row) {
        return '<p style="white-space: nowrap; text-align: center; margin: 0; padding: 5px;">' + row.number + '</p>'}
      },

      { data: "name", render: function (data, type, row) {
        if (row.description == 'R') {
          return '<button type="button" id="' + row.name + '"data-toggle="popover" title="' + row.name + '" data-content="Testing" data-trigger="hover" class="btn btn-sm name_button" style="white-space: nowrap; color: orange; font-weight: bold; padding: 5px">' + row.name + '</button>'}

        if (row.description == 'L') {
          return '<button type="button" id="' + row.name + '"data-toggle="popover" title="' + row.name + '" data-content="Testing" data-trigger="hover" class="btn btn-sm name_button" style="white-space: nowrap; color: blue; font-weight: bold; padding: 5px">' + row.name + '</button>'}

        if (row.description == 'H') {
          return '<button type="button" id="' + row.name + '"data-toggle="popover" title="' + row.name + '" data-content="Testing" data-trigger="hover" class="btn btn-sm name_button" style="white-space: nowrap; color: red; font-weight: bold; padding: 5px;">' + row.name + '</button>'}

        if (row.description == 'M') {
          return '<button type="button" id="' + row.name + '"data-toggle="popover" title="' + row.name + '" data-content="Testing" data-trigger="hover" class="btn btn-sm name_button" style="white-space: nowrap; color: grey; font-weight: bold; padding: 5px;">' + row.name + '</button>'}

        if (row.description == '') {
          return '<button type="button" id="' + row.name + '"data-toggle="popover" title="' + row.name + '" data-content="Testing" data-trigger="hover" class="btn btn-sm name_button" style="white-space: nowrap; padding: 5px">' + row.name + '</button>'}
        },
      },

      { data: "dragon_palace", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : ''}
      },

      { data: "acteul", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : ''}
      },

      { data: "lake_tiilen", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : ''}
      },

      { data: "vasu_mountains", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : ''}
      },

      { data: "charol_plains", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : ''}
      },

      { data: "man_eating_marsh", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : ''}
      },

      { data: "baruoki", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : ''}
      },

      { data: "nauru_uplands", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : ''}
      },

      { data: "karek_swampland", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : ''}
      },

      { data: "rinde", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : ''}
      },

      { data: "serena_coast", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : ''}
      },

      { data: "rucyana_sands", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : ''}
      },

      { data: "elzion_airport", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : ''}
      },

      { data: "nilva", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : ''}
      },

      { data: "last_island", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : ''}
      },

      { data: "spacetime_rift", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : ''}
      },

      { data: "zol_plains", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : ''}
      },

      { data: "moonlight_forest", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : ''}
      },

      { data: "snake_neck_igoma", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : ''}
      },

      { data: "ancient_battlefield", render: function (data, type, row) {
        return (data == true) ? '<div style="background-color: #d9ead3; margin: 0; padding: 10px;">&#10004;</div>' : ''}
      },

      { data: "rod", render: function (data, type, row) {
        return '<p style="white-space: nowrap; text-align: center; margin: 0; padding: 10px;">' + row.rod + '</p>'}
      },

      { data: "actual_catch", render: function (data, type, row) {
        return '<div class="p-0 m-0 text-center nowrap"><button id="dec-' + row.id + '" class="dec_button btn btn-sm btn-default" style="float: left" type="submit"><strong> &#60; </strong></button>'
          + '<button id="update-' + row.id + '" class="btn btn-sm" disabled>' + row.actual_catch + '</button>'
          + '<button id="inc-' + row.id + '" class="inc_button btn btn-sm btn-default" style="float: right" type="submit"><strong> &#62; </strong></button></div>'
      }
      },

      {"data": "bait", render: function (data, type, row) {
        return '<p style="white-space: nowrap; margin: 0; padding: 5px;">' + row.bait + '</p>'}
      },

      {"data": "xp", render: function (data, type, row) {
        return '<p style="white-space: nowrap; text-align: center; margin: 0; padding: 5px;">' + row.xp + '</p>'}
      },
    ],
  } );

  new $.fn.dataTable.FixedHeader( table, {
    header: true,
    headerOffset: $('#navbar').outerHeight() - 8
  });

  $("div.toolbar").html('<div style="float: left"><button class="btn btn-sm" disabled>Legend: </button><button class="btn btn-sm" style="color: orange; font-weight: bold" disabled> Rare </button><button class="btn btn-sm" style="color: blue; font-weight: bold" disabled> Lake Lord </button><button class="btn btn-sm" style="color: red; font-weight: bold" disabled> Horror </button><button class="btn btn-sm" style="color: grey; font-weight: bold" disabled> Normal </button></div>')
} );
