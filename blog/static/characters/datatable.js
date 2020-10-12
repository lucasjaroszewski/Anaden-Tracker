$(document).ready(function() {
  var table = $('#characterTable').DataTable( {
    info: false,
    responsive: false,
    searching: false,
    paging: false,
    ajax: {
      "url": `/api/user-characters/${user_id}`,
      "dataSrc": "" },
    columns: [

      { data: "element", render: function (data, type, row) {
        return '<img class="img-fluid mx-auto d-block" style="width: 20px" src="/media/characters/elements/' + row.element + '.png">'
        + '<span style="display: none">' + row.element + '</span>'
        }
      },

      { data: "lv", render: function (data, type, row) {
        return '<input id="update-' + row.id + '" type="number" placeholder="' + row.lv + '" class="lv_input btn btn-sm" style="width: 55px">'
        + '<span style="display: none">' + row.lv + '</span>'
        }
      },

      { data: "name", render: function (data, type, row) {
          return '<button data-toggle="modal" id="name-' + row.id
          + '" data-name="' + row.name
          + '" data-lv="' + row.lv
          + '" data-rarity"' + row.rarity
          + '" data-attack_type="' + row.attack_type
          + '" data-weapon_type="' + row.weapon_type
          + '" data-accessory_type="' + row.accessory_type
          + '" data-ls_count="' + row.ls_count
          + '" data-manifest="' + row.manifest
          + '" data-manifest_lvl="' + row.manifest_lvl
          + '" data-hp="' + row.hp
          + '" data-hp_l="' + row.hp_l
          + '" data-mp="' + row.mp
          + '" data-mp_l="' + row.mp_l
          + '" data-pwr="' + row.pwr
          + '" data-pwr_l="' + row.pwr_l
          + '" data-int="' + row.int
          + '" data-int_l="' + row.int_l
          + '" data-end="' + row.end
          + '" data-end_l="' + row.end_l
          + '" data-spr="' + row.spr
          + '" data-spr_l="' + row.spr_l
          + '" data-spd="' + row.spd
          + '" data-spd_l="' + row.spd_l
          + '" data-lck="' + row.lck
          + '" data-lck_l="' + row.lck_l
          + '" data-gl_1="' + row.gl_1
          + '" data-gl_2="' + row.gl_2
          + '" data-gl_3="' + row.gl_3
          + '" data-gl_4="' + row.gl_4
          + '" data-gl_5="' + row.gl_5
          + '" data-gl_6="' + row.gl_6
          + '" data-gl_7="' + row.gl_7
          + '" data-gl_8="' + row.gl_8
          + '" data-gl_9="' + row.gl_9
          + '" data-gl_10="' + row.gl_10
          + '" data-gn_1="' + row.gn_1
          + '" data-gn_2="' + row.gn_2
          + '" data-gn_3="' + row.gn_3
          + '" data-gn_4="' + row.gn_4
          + '" data-gn_5="' + row.gn_5
          + '" data-gn_6="' + row.gn_6
          + '" data-gn_7="' + row.gn_7
          + '" data-gn_8="' + row.gn_8
          + '" data-gn_9="' + row.gn_9
          + '" data-gn_10="' + row.gn_10
          + '" data-wpn_name="' + row.wpn.name
          + '" data-wpn_atk="' + row.wpn.atk
          + '" data-wpn_mat="' + row.wpn.mat
          + '" data-wpn_eb="' + row.wpn.eb
          + '" data-wpn_nb="' + row.wpn.nb
          + '" data-wpn_pwr="' + row.wpn.pwr
          + '" data-wpn_int="' + row.wpn.int
          + '" data-wpn_end="' + row.wpn.end
          + '" data-wpn_spr="' + row.wpn.spr
          + '" data-wpn_spd="' + row.wpn.spd
          + '" data-wpn_lck="' + row.wpn.lck
          + '" data-wpn_hp="' + row.wpn.hp
          + '" data-wpn_mp="' + row.wpn.mp
          + '" data-sk_name1="' + row.sk1.name
          + '" data-sk_name2="' + row.sk2.name
          + '" data-sk_name3="' + row.sk3.name
          + '" data-sk_mult1="' + row.sk1.multiplier
          + '" data-sk_mult2="' + row.sk2.multiplier
          + '" data-sk_mult3="' + row.sk3.multiplier
          + '" data-sk_type1="' + row.sk1.type
          + '" data-sk_type2="' + row.sk2.type
          + '" data-sk_type3="' + row.sk3.type
          + '" data-sk_elem1="' + row.sk1.element
          + '" data-sk_elem2="' + row.sk2.element
          + '" data-sk_elem3="' + row.sk3.element
          + '" data-badge_pwr="' + row.badge_pwr
          + '" data-badge_spd="' + row.badge_spd
          + '" data-target="#myModal" class="btn btn-sm container-fluid text-left" style="white-space: nowrap">'
          + row.name + '</button>'
        }
      },


      { data: "rarity", render: function (data, type, row) {
        if (row.rarity == '1') {
          return '<div class="container-fluid">'
          + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input1 p-0"><i class="fas fa-star" style="color: #decca3; width: 12px"></i></button> '
          + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input2 p-0"><i class="fas fa-star" style="color: #fafafa; width: 12px"></i></button> '
          + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input3 p-0"><i class="fas fa-star" style="color: #fafafa; width: 12px"></i></button> '
          + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input4 p-0"><i class="fas fa-star" style="color: #fafafa; width: 12px"></i></button> '
          + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input5 p-0"><i class="fas fa-star" style="color: #fafafa; width: 12px"></i></button> '
          + '<span style="display: none">' + row.rarity + '</span></div>'
          }

          if (row.rarity == '2') {
            return '<div class="container-fluid">'
            + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input1 p-0"><i class="fas fa-star" style="color: #decca3; width: 12px"></i></button> '
            + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input2 p-0"><i class="fas fa-star" style="color: #decca3; width: 12px"></i></button> '
            + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input3 p-0"><i class="fas fa-star" style="color: #fafafa; width: 12px"></i></button> '
            + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input4 p-0"><i class="fas fa-star" style="color: #fafafa; width: 12px"></i></button> '
            + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input5 p-0"><i class="fas fa-star" style="color: #fafafa; width: 12px"></i></button> '
            + '<span style="display: none">' + row.rarity + '</span></div>'
            }

        if (row.rarity == '3') {
          return '<div class="container-fluid">'
          + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input1 p-0"><i class="fas fa-star" style="color: #decca3; width: 12px"></i></button> '
          + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input2 p-0"><i class="fas fa-star" style="color: #decca3; width: 12px"></i></button> '
          + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input3 p-0"><i class="fas fa-star" style="color: #decca3; width: 12px"></i></button> '
          + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input4 p-0"><i class="fas fa-star" style="color: #fafafa; width: 12px"></i></button> '
          + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input5 p-0"><i class="fas fa-star" style="color: #fafafa; width: 12px"></i></button> '
          + '<span style="display: none">' + row.rarity + '</span></div>'
          }

        if (row.rarity == '4') {
          return '<div class="container-fluid">'
          + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input1 p-0"><i class="fas fa-star" style="color: #decca3; width: 12px"></i></button> '
          + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input2 p-0"><i class="fas fa-star" style="color: #decca3; width: 12px"></i></button> '
          + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input3 p-0"><i class="fas fa-star" style="color: #decca3; width: 12px"></i></button> '
          + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input4 p-0"><i class="fas fa-star" style="color: #decca3; width: 12px"></i></button> '
          + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input5 p-0"><i class="fas fa-star" style="color: #fafafa; width: 12px"></i></button> '
          + '<span style="display: none">' + row.rarity + '</span></div>'
          }

        if (row.rarity == '5') {
          return '<div class="container-fluid">'
          + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input1 p-0"><i class="fas fa-star" style="color: #decca3; width: 12px"></i></button> '
          + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input2 p-0"><i class="fas fa-star" style="color: #decca3; width: 12px"></i></button> '
          + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input3 p-0"><i class="fas fa-star" style="color: #decca3; width: 12px"></i></button> '
          + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input4 p-0"><i class="fas fa-star" style="color: #decca3; width: 12px"></i></button> '
          + ' <button id="rarity-' + row.id + '" class="btn btn-sm rarity-input5 p-0"><i class="fas fa-star" style="color: #decca3; width: 12px"></i></button> '
          + '<span style="display: none">' + row.rarity + '</span></div>'
          }
        }
      },

      { data: "ls_count", render: function (data, type, row) {
        return '<div class="container-fluid pl-4">'
        + '<img class="img-fluid" src="/media/characters/sprites/' + row.ls_type + '.png" style="width: 16px">'
        + '<input id="ls-' + row.id + '" type="number" placeholder="' + row.ls_count + '" class="ls_input btn btn-sm" style="width: 55px">'
        + '<span style="display: none">' + row.ls_count + '</span></div>'
        }
      },

      { data: "wpn", render: function (data, type, row) {
        if ( row.weapon_type == 'Sword') {
          return '<button data-toggle="modal" id="name-' + row.id + '" data-target="#sword" data-name="' + row.name
          + '" data-id="' + row.id
          + '" data-wpn_name="' + row.wpn.name
          + '" data-wpn_atk="' + row.wpn.atk
          + '" data-wpn_mat="' + row.wpn.mat
          + '" data-badge_pwr="' + row.badge_pwr
          + '" data-badge_spd="' + row.badge_spd
          + '" class="btn btn-sm container-fluid">'
          + '<img src="/media/characters/weapons/sword_icon.png" style="width: 20px">'
          + '<span style="display: none">' + row.weapon_type + '</span>'
          + '</button>'
          }

        if ( row.weapon_type == 'Fists') {
          return '<button data-toggle="modal" id="name-' + row.id + '" data-target="#fists" data-name="' + row.name
          + '" data-id="' + row.id
          + '" data-wpn_name="' + row.wpn.name
          + '" data-wpn_atk="' + row.wpn.atk
          + '" data-wpn_mat="' + row.wpn.mat
          + '" data-badge_pwr="' + row.badge_pwr
          + '" data-badge_spd="' + row.badge_spd
          + '" class="btn btn-sm container-fluid">'
          + '<img src="/media/characters/weapons/fist_icon.png" style="width: 20px">'
          + '<span style="display: none">' + row.weapon_type + '</span>'
          + '</button>'
          }

        if ( row.weapon_type == 'Staff') {
          return '<button data-toggle="modal" id="name-' + row.id + '" data-target="#staff" data-name="' + row.name
          + '" data-id="' + row.id
          + '" data-wpn_name="' + row.wpn.name
          + '" data-wpn_atk="' + row.wpn.atk
          + '" data-wpn_mat="' + row.wpn.mat
          + '" data-badge_pwr="' + row.badge_pwr
          + '" data-badge_spd="' + row.badge_spd
          + '" class="btn btn-sm container-fluid">'
          + '<img src="/media/characters/weapons/staff_icon.png" style="width: 20px">'
          + '<span style="display: none">' + row.weapon_type + '</span>'
          + '</button>'
          }

        if ( row.weapon_type == 'Hammer') {
          return '<button data-toggle="modal" id="name-' + row.id + '" data-target="#hammer" data-name="' + row.name
          + '" data-id="' + row.id
          + '" data-wpn_name="' + row.wpn.name
          + '" data-wpn_atk="' + row.wpn.atk
          + '" data-wpn_mat="' + row.wpn.mat
          + '" data-badge_pwr="' + row.badge_pwr
          + '" data-badge_spd="' + row.badge_spd
          + '" class="btn btn-sm container-fluid">'
          + '<img src="/media/characters/weapons/hammer_icon.png" style="width: 20px">'
          + '<span style="display: none">' + row.weapon_type + '</span>'
          + '</button>'
          }

        if ( row.weapon_type == 'Ax') {
          return '<button data-toggle="modal" id="name-' + row.id + '" data-target="#ax" data-name="' + row.name
          + '" data-id="' + row.id
          + '" data-wpn_name="' + row.wpn.name
          + '" data-wpn_atk="' + row.wpn.atk
          + '" data-wpn_mat="' + row.wpn.mat
          + '" data-badge_pwr="' + row.badge_pwr
          + '" data-badge_spd="' + row.badge_spd
          + '" class="btn btn-sm container-fluid">'
          + '<img src="/media/characters/weapons/ax_icon.png" style="width: 20px">'
          + '<span style="display: none">' + row.weapon_type + '</span>'
          + '</button>'
          }

        if ( row.weapon_type == 'Bow') {
          return '<button data-toggle="modal" id="name-' + row.id + '" data-target="#bow" data-name="' + row.name
          + '" data-id="' + row.id
          + '" data-wpn_name="' + row.wpn.name
          + '" data-wpn_atk="' + row.wpn.atk
          + '" data-wpn_mat="' + row.wpn.mat
          + '" data-badge_pwr="' + row.badge_pwr
          + '" data-badge_spd="' + row.badge_spd
          + '" class="btn btn-sm container-fluid">'
          + '<img src="/media/characters/weapons/bow_icon.png" style="width: 20px">'
          + '<span style="display: none">' + row.weapon_type + '</span>'
          + '</button>'
          }

        if ( row.weapon_type == 'Lance') {
          return '<button data-toggle="modal" id="name-' + row.id + '" data-target="#lance" data-name="' + row.name
          + '" data-id="' + row.id
          + '" data-wpn_name="' + row.wpn.name
          + '" data-wpn_atk="' + row.wpn.atk
          + '" data-wpn_mat="' + row.wpn.mat
          + '" data-badge_pwr="' + row.badge_pwr
          + '" data-badge_spd="' + row.badge_spd
          + '" class="btn btn-sm container-fluid">'
          + '<img src="/media/characters/weapons/lance_icon.png" style="width: 20px">'
          + '<span style="display: none">' + row.weapon_type + '</span>'
          + '</button>'
          }

        if ( row.weapon_type == 'Katana') {
          return '<button data-toggle="modal" id="name-' + row.id + '" data-target="#katana" data-name="' + row.name
          + '" data-id="' + row.id
          + '" data-wpn_name="' + row.wpn.name
          + '" data-wpn_atk="' + row.wpn.atk
          + '" data-wpn_mat="' + row.wpn.mat
          + '" data-badge_pwr="' + row.badge_pwr
          + '" data-badge_spd="' + row.badge_spd
          + '" class="btn btn-sm container-fluid">'
          + '<img src="/media/characters/weapons/katana_icon.png" style="width: 20px">'
          + '<span style="display: none">' + row.weapon_type + '</span>'
          + '</button>'
          }

        }
      },

      { data: "dgn_name", render: function (data, type, row) {
        if ( row.grasta_1 == '1' && row.grasta_2 == '1' && row.grasta_3 == '1' && row.grasta_4 == '1' ) {
          return '<div class="container-fluid">'
          + '<button id="grasta-' + row.id + '" class="btn btn-sm p-1"><i class="fas fa-circle" style="color: #fafafa"></i></button>'
          + '<button class="btn btn-sm p-1"><i class="fas fa-circle" style="color: #fafafa"></i></button>'
          + '<button class="btn btn-sm p-1"><i class="fas fa-circle" style="color: #fafafa"></i></button>'
          + '<button class="btn btn-sm p-1"><i class="fas fa-circle" style="color: #fafafa"></i></button>'
          + '</div>'
          }
        }
      },

      { data: "dgn_name", render: function (data, type, row) {
        if ( row.dgn_name == '' ) {
          return '<button class="btn btn-sm container-fluid">'
          + '<i class="fas fa-dungeon fa-lg" style="color: #fafafa" title="' + row.dgn_name + '"></i>'
          + '</button>'          }

        if ( row.dgn_name != '' ) {
          return '<button class="btn btn-sm container-fluid">'
          + '<i class="fas fa-dungeon fa-lg" style="color: grey" title="' + row.dgn_name + '"></i>'
          + '</button>'
          }

          }
        },
      ],
  } );

  $("#myModal").on('show.bs.modal', function (e) {
    let triggerLink = $(e.relatedTarget);
    var id = triggerLink[0].dataset['id'];
    let name = triggerLink[0].dataset['name'];
    let lv = triggerLink[0].dataset['lv'];
    let rarity = triggerLink[0].dataset['rarity'];
    let ls_count = triggerLink[0].dataset['ls_count'];
    let attack_type = triggerLink[0].dataset['attack_type'];
    let weapon_type = triggerLink[0].dataset['weapon_type'];
    let accessory_type = triggerLink[0].dataset['accessory_type'];
    let manifest = triggerLink[0].dataset['manifest'];
    let manifest_lvl = triggerLink[0].dataset['manifest_lvl'];
    let gn_1 = triggerLink[0].dataset['gn_1'];
    let gl_1 = triggerLink[0].dataset['gl_1'];
    let gn_2 = triggerLink[0].dataset['gn_2'];
    let gl_2 = triggerLink[0].dataset['gl_2'];
    let gn_3 = triggerLink[0].dataset['gn_3'];
    let gl_3 = triggerLink[0].dataset['gl_3'];
    let gn_4 = triggerLink[0].dataset['gn_4'];
    let gl_4 = triggerLink[0].dataset['gl_4'];
    let gn_5 = triggerLink[0].dataset['gn_5'];
    let gl_5 = triggerLink[0].dataset['gl_5'];
    let gn_6 = triggerLink[0].dataset['gn_6'];
    let gl_6 = triggerLink[0].dataset['gl_6'];
    let gn_7 = triggerLink[0].dataset['gn_7'];
    let gl_7 = triggerLink[0].dataset['gl_7'];
    let gn_8 = triggerLink[0].dataset['gn_8'];
    let gl_8 = triggerLink[0].dataset['gl_8'];
    let gn_9 = triggerLink[0].dataset['gn_9'];
    let gl_9 = triggerLink[0].dataset['gl_9'];
    let gn_10 = triggerLink[0].dataset['gn_10'];
    let gl_10 = triggerLink[0].dataset['gl_10'];
    let wpn_name = triggerLink[0].dataset['wpn_name'];
    let wpn_eb = triggerLink[0].dataset['wpn_eb'];
    let wpn_nb = triggerLink[0].dataset['wpn_nb'];
    let sk_name1 = triggerLink[0].dataset['sk_name1'];
    let sk_name2 = triggerLink[0].dataset['sk_name2'];
    let sk_name3 = triggerLink[0].dataset['sk_name3'];
    let sk_mult1 = triggerLink[0].dataset['sk_mult1'];
    let sk_mult2 = triggerLink[0].dataset['sk_mult2'];
    let sk_mult3 = triggerLink[0].dataset['sk_mult3'];
    let sk_type1 = triggerLink[0].dataset['sk_type1'];
    let sk_type2 = triggerLink[0].dataset['sk_type2'];
    let sk_type3 = triggerLink[0].dataset['sk_type3'];
    let sk_elem1 = triggerLink[0].dataset['sk_elem1'];
    let sk_elem2 = triggerLink[0].dataset['sk_elem2'];
    let sk_elem3 = triggerLink[0].dataset['sk_elem3'];


    window.hp_1 = 0;
    window.hp_2 = 0;
    window.mp_1 = 0;
    window.mp_2 = 0;
    window.pwr_1 = 0;
    window.pwr_2 = 0;
    window.int_1 = 0;
    window.int_2 = 0;
    window.end_1 = 0;
    window.end_2 = 0;
    window.spr_1 = 0;
    window.spr_2 = 0;
    window.spd_1 = 0;
    window.spd_2 = 0;
    window.lck_1 = 0;
    window.lck_2 = 0;

    if ( +ls_count >= 5 ) {
      window[gn_1] = gl_1
    }
    if ( +ls_count >= 15 ) {
      window[gn_2] = gl_2
    }
    if ( +ls_count >= 30 ) {
      window[gn_3] = gl_3
    }
    if ( +ls_count >= 50 ) {
      window[gn_4] = gl_4
    }
    if ( +ls_count >= 75 ) {
      window[gn_5] = gl_5
    }
    if ( +ls_count >= 105 ) {
      window[gn_6] = gl_6
    }
    if ( +ls_count >= 140 ) {
      window[gn_7] = gl_7
    }
    if ( +ls_count >= 175 ) {
      window[gn_8] = gl_8
    }
    if ( +ls_count >= 215 ) {
      window[gn_9] = gl_9
    }
    if ( +ls_count >= 255 ) {
      window[gn_10] = gl_10
    }

    let hp = Math.round(parseFloat(triggerLink[0].dataset['hp']) + parseFloat(triggerLink[0].dataset['wpn_hp']) + parseFloat(window.hp_1) + parseFloat(window.hp_2) + parseFloat((lv - 1) * parseFloat(triggerLink[0].dataset['hp_l'])));
    let mp = Math.round(parseFloat(triggerLink[0].dataset['mp']) + parseFloat(triggerLink[0].dataset['wpn_mp']) + parseFloat(window.mp_1) + parseFloat(window.mp_2) + parseFloat((lv - 1) * parseFloat(triggerLink[0].dataset['mp_l'])));
    let pwr = Math.round(parseFloat(triggerLink[0].dataset['pwr']) + parseInt(triggerLink[0].dataset['badge_pwr']) + parseFloat(triggerLink[0].dataset['wpn_pwr']) + parseFloat(window.window.pwr_1) + parseFloat(window.pwr_2) + parseFloat((lv - 1) * parseFloat(triggerLink[0].dataset['pwr_l'])));
    let int = Math.round(parseFloat(triggerLink[0].dataset['int']) + parseFloat(triggerLink[0].dataset['wpn_int']) + parseFloat(window.int_1) + parseFloat(window.int_2) + parseFloat((lv - 1) * parseFloat(triggerLink[0].dataset['int_l'])));
    let end = Math.round(parseFloat(triggerLink[0].dataset['end']) + parseFloat(triggerLink[0].dataset['wpn_end']) + parseFloat(window.end_1) + parseFloat(window.end_2) + parseFloat((lv - 1) * parseFloat(triggerLink[0].dataset['end_l'])));
    let spr = Math.round(parseFloat(triggerLink[0].dataset['spr']) + parseFloat(triggerLink[0].dataset['wpn_spr']) + parseFloat(window.spr_1) + parseFloat(window.spr_2) + parseFloat((lv - 1) * parseFloat(triggerLink[0].dataset['spr_l'])));
    let spd = Math.round(parseFloat(triggerLink[0].dataset['spd']) + parseFloat(triggerLink[0].dataset['badge_spd']) + parseFloat(triggerLink[0].dataset['wpn_spd']) + parseFloat(window.spd_1) + parseFloat(window.spd_2) + parseFloat((lv - 1) * parseFloat(triggerLink[0].dataset['spd_l'])));
    let lck = Math.round(parseFloat(triggerLink[0].dataset['lck']) + parseFloat(triggerLink[0].dataset['wpn_lck']) + parseFloat(window.lck_1) + parseFloat(window.lck_2) + parseFloat((lv - 1) * parseFloat(triggerLink[0].dataset['lck_l'])));
    let atk = Math.round(parseInt(pwr) + parseInt(triggerLink[0].dataset['wpn_atk']));
    let mat = Math.round(parseInt(int) + parseInt(triggerLink[0].dataset['wpn_mat']));

    let def = end;
    let mdf = spr;

    let basePWRn = Math.round((( atk - 87 ) * (( pwr / 32 ) + 1 ) * 1.75 ) * 100 ) / 100;
    let basePWRc = Math.round((( atk - 43.5 ) * (( pwr / 32 ) + 1 ) * 3.25 ) * 100 ) / 100;
    let elemMOD = Math.round(((( Math.sqrt(( mat * 10 ) + 16 ) - 4 ) / 64 ) + 1 ) * 100 ) / 100;
    let min_spread = Math.round(( atk * 16 / 25.6 ) * 100) / 100;
    let max_spread = Math.round(( atk * 47 / 25.6 ) * 100) / 100;
    let skillMOD1 = Math.round((( sk_mult1 / 100 )) * 100) / 100;
    let skillMOD2 = Math.round((( sk_mult2 / 100 )) * 100) / 100;
    let skillMOD3 = Math.round((( sk_mult3 / 100 )) * 100) / 100;
    let weaponMOD = Math.round(((1 + (wpn_eb / 100))) * 100) / 100;
    let min_dmg = Math.round(((basePWRn * elemMOD) + min_spread) * skillMOD3 * weaponMOD)
    let max_dmg = Math.round(((basePWRn * elemMOD) + max_spread) * skillMOD3 * weaponMOD)
    let damagec = Math.round(((basePWRc * elemMOD) + spreadPWR) * skillMOD3).toFixed(0)


    $("#title").text(name);
    $(this).find("#characterImg").html('<img class="img-fluid" src="/media/characters/sprites/' + name + '.png" alt="' + name + '">');
    $(this).find("#rarity").text(rarity);
    $(this).find("#pwr").text(pwr);
    $(this).find("#int").text(int);
    $(this).find("#end").text(end);
    $(this).find("#spd").text(spd);
    $(this).find("#lck").text(lck);
    $(this).find("#spr").text(spr);
    $(this).find("#hp").text(hp);
    $(this).find("#mp").text(mp);
    $(this).find("#lv").text(lv);
    $(this).find("#atk").text(atk);
    $(this).find("#mat").text(mat);
    $(this).find("#mdf").text(mdf);
    $(this).find("#wpnImg").html('<img class="img-fluid" src="/media/characters/weapons/' + wpn_name + '.png" alt="' + name + '">')
    $(this).find("#wpnName").text(wpn_name);
    $(this).find("#basePWRn").text(basePWRn);
    $(this).find("#basePWRc").text(basePWRc);
    $(this).find("#elemMOD").text(elemMOD);
    $(this).find("#spreadPWR").text(min_spread);
    $(this).find("#damagen").text(min_dmg);
    $(this).find("#damagec").text(max_dmg);
    $(this).find("#sk1_name").html('<img class="img-fluid" src="/media/characters/skills/' + sk_elem1 + '-' + sk_type1 + '.png" alt="' + sk_elem1 + '-' + sk_type1 + '"> ' + sk_name1 + '')
    $(this).find("#sk2_name").html('<img class="img-fluid" src="/media/characters/skills/' + sk_elem2 + '-' + sk_type2 + '.png" alt="' + sk_elem2 + '-' + sk_type2 + '"> ' + sk_name2 + '')
    $(this).find("#sk3_name").html('<img class="img-fluid" src="/media/characters/skills/' + sk_elem3 + '-' + sk_type3 + '.png" alt="' + sk_elem3 + '-' + sk_type3 + '"> ' + sk_name3 + '')

  });

  $("#sword").on('show.bs.modal', function (e) {
    let triggerLink = $(e.relatedTarget);
    let id = triggerLink[0].dataset['id'];
    let name = triggerLink[0].dataset['name'];
    let wpn_name = triggerLink[0].dataset['wpn_name'];
    let wpn_atk = triggerLink[0].dataset['wpn_atk'];
    let wpn_mat = triggerLink[0].dataset['wpn_mat'];
    let badge_pwr = triggerLink[0].dataset['badge_pwr'];
    let badge_spd = triggerLink[0].dataset['badge_spd'];

    jQuery('#sword').on('click', ".wpn_input", function(e) {
      var $this = $(this);
      var wpn_id = $this.attr('id').split('-')[1];
      var wpn_nameid = $this.attr('id')
      var wpn_name = $this.attr('innerText')

      $.ajax({
        success: function() {
          fetch(`/api/character-update/${id}/`, {
            method: 'POST',
            headers:{
              'Content-type':'application/json',
              "X-CSRFToken": getCookie("csrftoken"),
            },
            body:JSON.stringify({ 'weapon':wpn_id })
          })
          .then(function() {
            $('#sword').modal('hide');
            $('#characterTable').DataTable().ajax.reload();
          })
          .catch(error => console.log('Error: ' + error.message))
        },
        error: function() {
          console.log('Error')
        }
      });
    })

    jQuery('#sword').on('keypress', ".pwr_input", function(e) {
      if(e.which == 13) {
        let $this = $(this);
        let lv_id = $this.attr('id');
        let input = this.value;
        $.ajax({
          success: function(lv) {
            fetch(`/api/character-update/${id}/`, {
              method: 'POST',
              headers:{
                'Content-type':'application/json',
                "X-CSRFToken": getCookie("csrftoken"),
              },
              body:JSON.stringify({ 'badge_pwr':input })
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

    jQuery('#sword').on('keypress', ".spd_input", function(e) {
      if(e.which == 13) {
        let $this = $(this);
        let lv_id = $this.attr('id');
        let input = this.value;
        $.ajax({
          success: function(lv) {
            fetch(`/api/character-update/${id}/`, {
              method: 'POST',
              headers:{
                'Content-type':'application/json',
                "X-CSRFToken": getCookie("csrftoken"),
              },
              body:JSON.stringify({ 'badge_spd':input })
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

    $(this).find("#wpnImg").html('<img class="img-responsive img-fluid" src="/media/characters/weapons/' + wpn_name + '.png" alt="' + wpn_name + '">')
    $(this).find("#wpnName").text(wpn_name);
    $(this).find("#wpnMat").text(wpn_mat);
    $(this).find("#wpnAtk").text(wpn_atk);
    $(this).find("#badgePWR").html('<input type="number" placeholder="' + badge_pwr + '" class="pwr_input btn btn-sm subtitle text-white" style="width: 40px">')
    $(this).find("#badgeSPD").html('<input type="number" placeholder="' + badge_spd + '" class="spd_input btn btn-sm subtitle text-white" style="width: 40px">')

  });

  new $.fn.dataTable.FixedHeader( table, {
    header: true,
    headerOffset: $('#navbar').height()
  });

});
