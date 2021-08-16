var friends;
try {
  friends = JSON.parse(localStorage.getItem('friends')) || [];
} catch (err) {
  friends = [];
}

$(document).ready(function() {
    var friendsTable = $('#friendsTable').DataTable({
        stateSave: true,
        autoWidth: false,
        info: false,
        responsive: false,
        searching: false,
        paging: false,
        ajax: {
            "url": "/api/friends/",
            "dataSrc": "",
        },
        columns: [

            {
                data: "name",
                render: function(data, type, row) {
                    return '<p class="normal-friend">' + row.name + '</p>'
                }
            },

            {
                data: "classe",
                render: function(data, type, row) {
                    return '<p class="normal-friend">' + row.classe + '</p>'
                }
            },

            {
                data: "location_in_game",
                render: function(data, type, row) {
                    return '<p class="normal-friend">' + row.location_in_game + '</p>'
                }
            },

            {
                data: "location_rank_up",
                render: function(data, type, row) {
                    return '<p class="normal-friend">' + row.location_rank_up + '</p>'
                }
            },

            {
                data: "lezona_floor",
                render: function(data, type, row) {
                    return row.lezona_floor
                }
            },

            {
                data: "rank",
                render: function(data, type, row) {
                    let keyID = row.id
                    let friendsID = friends.map(friendsID => friendsID.id);
                    let keyIndex = friendsID.findIndex(id => id == keyID);

                    if (row.rank_four == 'N.A.') {
                        four = 'MAX'
                    } else {
                        four = row.rank_four
                    }

                    if (keyIndex != -1) {
                        if (parseInt(friends[keyIndex]['points']) >= parseInt(four)) {

                            return '<div>'
                            + '<img class="rank-image" src="/media/characters/elements/ida_bits.png">'
                            + '<input type="number" id=' + row.id + ' class="rank" style="background-color: #f6b26b" placeholder="' + friends[keyIndex]['points'] + ' / MAX"/></div>'
                            + '<span style="display: none">0</span></div>'
                        }

                        else if (parseInt(friends[keyIndex]['points']) >= parseInt(row.rank_three)) {
                            return '<div>'
                            + '<img class="rank-image" src="/media/characters/elements/ida_bits.png">'
                            + '<input type="number" id=' + row.id + ' class="rank" style="background-color: #b6d7a8" placeholder="' + friends[keyIndex]['points'] + ' / ' + four + '"/></div>'
                            + '<span style="display: none">0</span></div>'
                        }

                        else {
                            return '<div>'
                            + '<img class="rank-image" src="/media/characters/elements/ida_bits.png">'
                            + '<input type="number" id=' + row.id + ' class="rank" placeholder="' + friends[keyIndex]['points'] + ' / ' + row.rank_three + '"/></div>'
                            + '<span style="display: none">' + friends[keyIndex]['points'] + '</span></div>'
                        }
                    }
                    return '<div>'
                    + '<img class="rank-image" src="/media/characters/elements/ida_bits.png">'
                    + '<input type="number" id="' + row.id + '" name="' + row.name + '" class="rank" placeholder="0 / ' + row.rank_three + '"/></div>'
                    + '<span style="display: none">0</span></div>'
                }
            }
        ],
    });

    oTable = $('#friendsTable').DataTable();

    new $.fn.dataTable.FixedHeader(friendsTable, {
        header: true,
        headerOffset: 0
    });
});

jQuery('#friendsTable').on('change', ".rank", function() {

    // Add new data to localStorage Array
    let keyID = $(this).attr('id');
    let name = $(this).attr('name');
    let value = $(this).val();


    // If value is exceding maximum value
    if (value > 99999) {
        value = 99999;
    }

    //If value is exceding min value
    if (value < 0) {
        value = 0;
    }

    let friendsID = friends.map(friendsID => friendsID.id);
    let keyIndex = friendsID.findIndex(id => id == keyID);

    if (keyIndex == -1) {
        new_friend = {
            "id": keyID,
            "name": name,
            "points": value,
        }
        friends.push(new_friend);
    }
    else {
        friends[keyIndex]['points'] = value;
    }

    keyIndex = friendsID.findIndex(id => id == keyID);

    // Saves new value into localStorage
    localStorage.setItem('friends', JSON.stringify(friends));

    // Redraw row
    $('#friendsTable').DataTable().ajax.reload();
});
