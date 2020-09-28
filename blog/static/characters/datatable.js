$(document).ready(function() {
  var table = $('#characterTable').DataTable( {
    info: false,
    responsive: false,
    searching: false,
    paging: false,
    serverSide: true,
    ajax: {
      "url": `/api/user-characters/${user_id}`,
      "dataSrc": "" },
    columns: [

      { data: "lv", render: function (data, type, row) {
        return '<input id="update-' + row.id + '" type="number" placeholder="' + row.lv + '" class="lv_input btn btn-sm" style="width: 55px">'
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
          + '" data-wpn_name="' + row.weapon_info.wpn_name
          + '" data-wpn_atk="' + row.weapon_info.wpn_atk
          + '" data-wpn_mat="' + row.weapon_info.wpn_mat
          + '" data-wpn_pwr="' + row.weapon_info.wpn_pwr
          + '" data-wpn_int="' + row.weapon_info.wpn_int
          + '" data-wpn_end="' + row.weapon_info.wpn_end
          + '" data-wpn_spr="' + row.weapon_info.wpn_spr
          + '" data-wpn_spd="' + row.weapon_info.wpn_spd
          + '" data-wpn_lck="' + row.weapon_info.wpn_lck
          + '" data-wpn_hp="' + row.weapon_info.wpn_hp
          + '" data-wpn_mp="' + row.weapon_info.wpn_mp

          + '" data-target="#myModal" class="btn btn-sm" style="white-space: nowrap; font-weight: normal; padding: 10px">'
          + row.name + '</button>'
        }
      },

      { data: "rarity", render: function (data, type, row) {
        return '<p style="white-space: nowrap; text-align: center; margin: 0; padding: 5px;">' + row.rarity + '</p>' } },

      { data: "element", render: function (data, type, row) {
        return '<img class="img-fluid mx-auto d-block" style="width: 20px" src="/media/characters/elements/' + row.element + '.png" ></div>' }  },

      { data: "ls_count", render: function (data, type, row) {
        return '<div class="container pl-4"><img class="img-fluid" src="/media/characters/sprites/' + row.ls_type + '.png" style="width: 16px"><input id="ls-' + row.id
        + '" type="number" placeholder="' + row.ls_count + '" class="ls_input btn btn-sm" style="width: 55px"></div>'
        }
      },

      { data: "weapons", render: function (data, type, row) {
        return '<div class="dropdown">'
        + '<button class="btn btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'
        + row.weapon + '</button></div>'
      } },
      ],
  } );

  $("#myModal").on('show.bs.modal', function (e) {
    let triggerLink = $(e.relatedTarget);
    let id = triggerLink[0].dataset['id'];
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
    let pwr = Math.round(parseFloat(triggerLink[0].dataset['pwr']) + parseFloat(triggerLink[0].dataset['wpn_pwr']) + parseFloat(window.window.pwr_1) + parseFloat(window.pwr_2) + parseFloat((lv - 1) * parseFloat(triggerLink[0].dataset['pwr_l'])));
    let int = Math.round(parseFloat(triggerLink[0].dataset['int']) + parseFloat(triggerLink[0].dataset['wpn_int']) + parseFloat(window.int_1) + parseFloat(window.int_2) + parseFloat((lv - 1) * parseFloat(triggerLink[0].dataset['int_l'])));
    let end = Math.round(parseFloat(triggerLink[0].dataset['end']) + parseFloat(triggerLink[0].dataset['wpn_end']) + parseFloat(window.end_1) + parseFloat(window.end_2) + parseFloat((lv - 1) * parseFloat(triggerLink[0].dataset['end_l'])));
    let spr = Math.round(parseFloat(triggerLink[0].dataset['spr']) + parseFloat(triggerLink[0].dataset['wpn_spr']) + parseFloat(window.spr_1) + parseFloat(window.spr_2) + parseFloat((lv - 1) * parseFloat(triggerLink[0].dataset['spr_l'])));
    let spd = Math.round(parseFloat(triggerLink[0].dataset['spd']) + parseFloat(triggerLink[0].dataset['wpn_spd']) + parseFloat(window.spd_1) + parseFloat(window.spd_2) + parseFloat((lv - 1) * parseFloat(triggerLink[0].dataset['spd_l'])));
    let lck = Math.round(parseFloat(triggerLink[0].dataset['lck']) + parseFloat(triggerLink[0].dataset['wpn_lck']) + parseFloat(window.lck_1) + parseFloat(window.lck_2) + parseFloat((lv - 1) * parseFloat(triggerLink[0].dataset['lck_l'])));
    let atk = Math.round(parseInt(pwr) + parseInt(triggerLink[0].dataset['wpn_atk']));
    let mat = Math.round(parseInt(int) + parseInt(triggerLink[0].dataset['wpn_mat']));

    let def = end;
    let mdf = spr;

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
    $(this).find("#def").text(def);
    $(this).find("#mat").text(mat);
    $(this).find("#mdf").text(mdf);
    $(this).find("#wpnImg").html('<img class="img-fluid" src="/media/characters/weapons/' + wpn_name + '.png" alt="' + name + '">')
    $(this).find("#wpnName").text(wpn_name);

  });

  new $.fn.dataTable.FixedHeader( table, {
    header: true,
    headerOffset: $('#navbar').height()
  });

} );
