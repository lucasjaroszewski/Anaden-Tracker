var characters;
try {
  characters = JSON.parse(localStorage.getItem('characters')) || [];
} catch (err) {
  characters = [];
}

$(document).ready(function() {
    var table = $('#charactersTable').dataTable({
        data: [],
        language: {
            "emptyTable": "<p class='empty-table'>No characters to show. Start by adding one in the panel on the right.</p>"
        },
        stateSave: true,
        bPaginate: false,
        bLengthChange: false,
        bFilter: false,
        bInfo: false,
        bAutoWidth: false,
        columns: [
            {
                data: "rarity",
                render: function(data, type, row) {
                    if (row['rarity'] == '1') {
                        return '<div>'
                        + '<a><img id=' + row['id'] + ' class="star-image star1" src="/media/svgs/full_star.svg"></a>'
                        + '<a><img id=' + row['id'] + ' class="empty-image star2" src="/media/svgs/empty_star.svg"></a>'
                        + '<a><img id=' + row['id'] + ' class="empty-image star3" src="/media/svgs/empty_star.svg"></a>'
                        + '<a><img id=' + row['id'] + ' class="empty-image star4" src="/media/svgs/empty_star.svg"></a>'
                        + '<a><img id=' + row['id'] + ' class="empty-image star5" src="/media/svgs/empty_star.svg"></a>'
                        + '<span style="display: none">' + row['rarity'] + '</span></div>'
                    }

                    else if (row['rarity'] == '2') {
                        return '<div>'
                        + '<a><img id=' + row['id'] + ' class="star-image star1" src="/media/svgs/full_star.svg"></a>'
                        + '<a><img id=' + row['id'] + ' class="star-image star2" src="/media/svgs/full_star.svg"></a>'
                        + '<a><img id=' + row['id'] + ' class="empty-image star3" src="/media/svgs/empty_star.svg"></a>'
                        + '<a><img id=' + row['id'] + ' class="empty-image star4" src="/media/svgs/empty_star.svg"></a>'
                        + '<a><img id=' + row['id'] + ' class="empty-image star5" src="/media/svgs/empty_star.svg"></a>'
                        + '<span style="display: none">' + row['rarity'] + '</span></div>'
                    }

                    else if (row['rarity'] == '3') {
                        return '<div>'
                        + '<a><img id=' + row['id'] + ' class="star-image star1" src="/media/svgs/full_star.svg"></a>'
                        + '<a><img id=' + row['id'] + ' class="star-image star2" src="/media/svgs/full_star.svg"></a>'
                        + '<a><img id=' + row['id'] + ' class="star-image star3" src="/media/svgs/full_star.svg"></a>'
                        + '<a><img id=' + row['id'] + ' class="empty-image star4" src="/media/svgs/empty_star.svg"></a>'
                        + '<a><img id=' + row['id'] + ' class="empty-image star5" src="/media/svgs/empty_star.svg"></a>'
                        + '<span style="display: none">' + row['rarity'] + '</span></div>'
                    }

                    else if (row['rarity'] == '4') {
                        return '<div>'
                        + '<a><img id=' + row['id'] + ' class="star-image star1" src="/media/svgs/full_star.svg"></a>'
                        + '<a><img id=' + row['id'] + ' class="star-image star2" src="/media/svgs/full_star.svg"></a>'
                        + '<a><img id=' + row['id'] + ' class="star-image star3" src="/media/svgs/full_star.svg"></a>'
                        + '<a><img id=' + row['id'] + ' class="star-image star4" src="/media/svgs/full_star.svg"></a>'
                        + '<a><img id=' + row['id'] + ' class="empty-image star5" src="/media/svgs/empty_star.svg"></a>'
                        + '<span style="display: none">' + row['rarity'] + '</span></div>'
                    }

                    else if (row['rarity'] == '5') {
                        return '<div>'
                        + '<a><img id=' + row['id'] + ' class="star-image star1" src="/media/svgs/full_star.svg"></a>'
                        + '<a><img id=' + row['id'] + ' class="star-image star2" src="/media/svgs/full_star.svg"></a>'
                        + '<a><img id=' + row['id'] + ' class="star-image star3" src="/media/svgs/full_star.svg"></a>'
                        + '<a><img id=' + row['id'] + ' class="star-image star4" src="/media/svgs/full_star.svg"></a>'
                        + '<a><img id=' + row['id'] + ' class="star-image star5" src="/media/svgs/full_star.svg"></a>'
                        + '<span style="display: none">' + row['rarity'] + '</span></div>'
                    }

                    else if (row['rarity'] == 'AS') {
                        return '<div>'
                        + '<a><img class="as-star" src="/media/svgs/full_star.svg"></a>'
                        + '<a><img class="as-star" src="/media/svgs/full_star.svg"></a>'
                        + '<a><img class="as-star" src="/media/svgs/full_star.svg"></a>'
                        + '<a><img class="as-star" src="/media/svgs/full_star.svg"></a>'
                        + '<a><img class="as-star" src="/media/svgs/full_star.svg"></a>'
                        + '<span style="display: none">' + row['rarity'] + '</span></div>'
                    }

                    else if (row['rarity'] == 'ES') {
                        return '<div>'
                        + '<a><img class="es-star" src="/media/svgs/full_star.svg"></a>'
                        + '<a><img class="es-star" src="/media/svgs/full_star.svg"></a>'
                        + '<a><img class="es-star" src="/media/svgs/full_star.svg"></a>'
                        + '<a><img class="es-star" src="/media/svgs/full_star.svg"></a>'
                        + '<a><img class="es-star" src="/media/svgs/full_star.svg"></a>'
                        + '<span style="display: none">' + row['rarity'] + '</span></div>'
                    }
                }
            },

            {
                data: "element",
                render: function (data, type, row) {
                    var a = row['element'].split(","), i;

                    element = []
                    for (i = 0; i < a.length; i++) {
                        element[i] = a[i]
                    }

                    if (element.length == 2) {
                        return '<img class="element-image" src="/media/characters/elements/' + element[0].trim() + '.png" title="' + element[0].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[1].trim() + '.png" title="' + element[1].trim() + '">'
                        + '<span style="display: none">' + row['element'] + '</span></div>'
                    }

                    else {
                        return '<img class="element-image" src="/media/characters/elements/' + element[0].trim() + '.png" title="' + element[0].trim() + '">'
                        + '<span style="display: none">' + row['element'] + '</span></div>'
                    }

                }
            },

            {
                data: "name",
                render: function(data, type, row) {
                    return "<div style='text-align: left; padding-left: 1rem'><a class='link-character' href='/characters/" + row["fullname"] + "'>" + row["name"] + "</a></div>"
                },
            },

            {
                data: "lv",
                render: function(data, type, row) {
                    return '<input type="number" id=' + row['id'] + ' class="lv-input" placeholder="' + row['lv'] + '"/>'
                    + '<span style="display: none">' + row['lv'] + '</span></div>'
                },
            },

            {
                data: "ls_count",
                render: function(data, type, row) {
                    return '<div>'
                    + '<img class="ls-image" src="/media/characters/elements/' + row['ls_type'] + '.png" title="' + row['ls_type'] + '">'
                    + '<input type="number" id=' + row['id'] + ' class="ls_count-input" placeholder="' + row['count'] + '"/></div>'
                    + '<span style="display: none">' + row['count'] + '</span></div>'
                }
            },

            {
                data: "weapon_name",
                render: function(data, type, row) {
                    return row['weapon_name']
                }
            },

            {
                data: "manifest_lv",
                render: function(data, type, row) {
                    return '<input type="number" id=' + row['id'] + ' class="manifest_lv-input" placeholder="' + row['manifest_lv'] + '"/>'
                    + '<span style="display: none">' + row['manifest_lv'] + '</span></div>'
                }
            },

            {
                data: "dungeon",
                render: function(data, type, row) {
                    if (row['dungeon'] !== '')
                        return '<a class="es-star"><img src="/media/svgs/castle.svg" title="' + row['dungeon'] + '"/></a>'
                    else {
                        return ""
                    }
                },
            },

            {
                data: "delete",
                render: function(data, type, row) {
                    return "<a class='delete'><img class='svg-delete' src='/media/svgs/delete.svg'/></a>"
                },
            },
        ]
    });

    oTable = $('#charactersTable').DataTable();
    for (var i = 0; i < characters.length; i++) {
        oTable.row.add(characters[i]).draw();
    }
});

jQuery('#app').on('click', ".add", function() {
    let $this = $(this);
    let i = $this.attr('data-id');
    let element = $this.attr('data-element');
    let lv = $this.attr('data-level');
    let name = $this.attr('data-name');
    let fullname = $this.attr('data-fullname');
    let rarity = $this.attr('data-rarity');
    let count = $this.attr('data-count');
    let weapon = $this.attr('data-weapon');
    let dungeon = $this.attr('data-dungeon');
    let ls_type = $this.attr('data-ls_type');

    let data = {
        "id": i,
        "element": element,
        "rarity": rarity,
        "lv": lv,
        "name": name,
        "fullname": fullname,
        "count": count,
        "weapon": weapon,
        "weapon_icon": "/media/characters/weapons/Sword.png",
        "weapon_atk": "0",
        "weapon_matk": "0",
        "weapon_name": "None",
        "manifest_lv": "0",
        "weapon_hp_gain": "0",
        "weapon_mp_gain": "0",
        "weapon_pwr_gain": "0",
        "weapon_int_gain": "0",
        "weapon_spr_gain": "0",
        "weapon_end_gain": "0",
        "weapon_spd_gain": "0",
        "weapon_spd_loss": "0",
        "weapon_lck_gain": "0",
        "weapon_elemental_type": "0",
        "weapon_non_type": "0",
        "weapon_damage_plus": "0",
        "dungeon": dungeon,
        "ls_type": ls_type,
        "hp_badge": "0",
        "mp_badge": "0",
        "pwr_badge": "0",
        "int_badge": "0",
        "spd_badge": "0",
        "lck_badge": "0",
    };

    characters.push(data);
    localStorage.setItem('characters', JSON.stringify(characters));
    oTable.row.add(data).draw();
});

$(document).on('click', '.delete', function() {
    let row = $(this).closest('tr');
    let index = $("tbody").children().index(row);
    oTable.row(row).remove().draw();
    characters.splice(index, 1);
    localStorage.setItem('characters', JSON.stringify(characters));
});

jQuery('#charactersTable').on('change', ".lv-input", function() {

    // Add new data to localStorage Array
    let keyID = $(this).attr('id');
    let characterID = characters.map(characterID => characterID.id);
    let keyIndex = characterID.findIndex(id => id == keyID);
    let value = $(this).val();

    // If value is exceding maximum value
    if (value > 80) {
        value = 80;
    }

    // If value is exceding min value
    if (value < 0) {
        value = 0;
    }

    // Add new value and save to local storage
    characters[keyIndex]['lv'] = value;
    localStorage.setItem('characters', JSON.stringify(characters));

    // Redraw row
    let row = $(this).closest('tr');
    let data = oTable.row([keyIndex]).data();
    oTable.row([keyIndex]).data(data);
});

jQuery('#charactersTable').on('change', ".ls_count-input", function() {

        // Add new data to localStorage Array
        let keyID = $(this).attr('id');
        let characterID = characters.map(characterID => characterID.id);
        let keyIndex = characterID.findIndex(id => id == keyID);
        let value = $(this).val();

        // If value is exceding maximum value
        if (value > 255) {
            value = 255;
        }

        // If value is exceding min value
        if (value < 0) {
            value = 0;
        }

        // Add new value and save to local storage
        characters[keyIndex]['count'] = value;
        localStorage.setItem('characters', JSON.stringify(characters));

        // Redraw row
        let row = $(this).closest('tr');
        let data = oTable.row([keyIndex]).data();
        oTable.row([keyIndex]).data(data);
});

jQuery('#charactersTable').on('change', ".manifest_lv-input", function() {

    // Add new data to localStorage Array
    let keyID = $(this).attr('id');
    let characterID = characters.map(characterID => characterID.id);
    let keyIndex = characterID.findIndex(id => id == keyID);
    let value = $(this).val();

    // If value is exceding maximum value
    if (value > 10) {
        value = 10;
    }

    // If value is exceding min value
    if (value < 0) {
        value = 0;
    }

    // Add new value and save to local storage
    characters[keyIndex]['manifest_lv'] = value;
    localStorage.setItem('characters', JSON.stringify(characters));

    // Redraw row
    let row = $(this).closest('tr');
    let data = oTable.row([keyIndex]).data();
    oTable.row([keyIndex]).data(data);
});

jQuery('#charactersTable').on('click', ".star1", function() {

    // Add new data to localStorage Array
    let keyID = $(this).attr('id');
    let characterID = characters.map(characterID => characterID.id);
    let keyIndex = characterID.findIndex(id => id == keyID);

    // Add new value and save to local storage
    characters[keyIndex]['rarity'] = "1";
    localStorage.setItem('characters', JSON.stringify(characters));

    // Redraw row
    let row = $(this).closest('tr');
    let data = oTable.row([keyIndex]).data();
    oTable.row([keyIndex]).data(data);
});

jQuery('#charactersTable').on('click', ".star2", function() {

    // Add new data to localStorage Array
    let keyID = $(this).attr('id');
    let characterID = characters.map(characterID => characterID.id);
    let keyIndex = characterID.findIndex(id => id == keyID);

    // Add new value and save to local storage
    characters[keyIndex]['rarity'] = "2";
    localStorage.setItem('characters', JSON.stringify(characters));

    // Redraw row
    let row = $(this).closest('tr');
    let data = oTable.row([keyIndex]).data();
    oTable.row([keyIndex]).data(data);
});

jQuery('#charactersTable').on('click', ".star3", function() {

    // Add new data to localStorage Array
    let keyID = $(this).attr('id');
    let characterID = characters.map(characterID => characterID.id);
    let keyIndex = characterID.findIndex(id => id == keyID);

    // Add new value and save to local storage
    characters[keyIndex]['rarity'] = "3";
    localStorage.setItem('characters', JSON.stringify(characters));

    // Redraw row
    let row = $(this).closest('tr');
    let data = oTable.row([keyIndex]).data();
    oTable.row([keyIndex]).data(data);
});

jQuery('#charactersTable').on('click', ".star4", function() {

    // Add new data to localStorage Array
    let keyID = $(this).attr('id');
    let characterID = characters.map(characterID => characterID.id);
    let keyIndex = characterID.findIndex(id => id == keyID);

    // Add new value and save to local storage
    characters[keyIndex]['rarity'] = "4";
    localStorage.setItem('characters', JSON.stringify(characters));

    // Redraw row
    let row = $(this).closest('tr');
    let data = oTable.row([keyIndex]).data();
    oTable.row([keyIndex]).data(data);
});

jQuery('#charactersTable').on('click', ".star5", function() {

    // Add new data to localStorage Array
    let keyID = $(this).attr('id');
    let characterID = characters.map(characterID => characterID.id);
    let keyIndex = characterID.findIndex(id => id == keyID);

    // Add new value and save to local storage
    characters[keyIndex]['rarity'] = "5";
    localStorage.setItem('characters', JSON.stringify(characters));

    // Redraw row
    let row = $(this).closest('tr');
    let data = oTable.row([keyIndex]).data();
    oTable.row([keyIndex]).data(data);
});
