var catalog;
try {
  catalog = JSON.parse(localStorage.getItem('catalog')) || [];
} catch (err) {
  catalog = [];
}

if (catalog.length == 0) {
    localStorage.setItem('catalog', JSON.stringify([
        {
            "id": 1,
            "name": "Cat Grass",
            "quantity": "0"
        },
        {
            "id": 2,
            "name": "Squishy Furball",
            "quantity": "0"
        },
        {
            "id": 3,
            "name": "Clean Scrap",
            "quantity": "0"
        },
        {
            "id": 4,
            "name": "Kitty Rocks",
            "quantity": "0"
        },
        {
            "id": 5,
            "name": "Cat Ore",
            "quantity": "0"
        },
        {
            "id": 6,
            "name": "Fluffy Fur",
            "quantity": "0"
        },
        {
            "id": 7,
            "name": "Stardust",
            "quantity": "0"
        },
        {
            "id": 8,
            "name": "Flower Cat",
            "quantity": "0"
        },
        {
            "id": 9,
            "name": "Pure White Cloth",
            "quantity": "0"
        },
        {
            "id": 10,
            "name": "Wood Piece",
            "quantity": "0"
        }
    ]));
}

$(document).ready(function() {
    var catalogTable = $('#catalogTable').DataTable({
        stateSave: true,
        autoWidth: false,
        info: false,
        responsive: false,
        searching: false,
        paging: false,
        ajax: {
            "url": "/api/cats/",
            "dataSrc": ""
        },
        columns: [

            //{
            //    data: "id",
            //    render: function(data, type, row) {
            //        return '<label class="container">'
            //        + '<input type="checkbox">'
            //        + '<span class="checkmark"></span>'
            //        + '</label>'
            //    }
            //},

            {
                data: "icon",
                render: function(data, type, row) {
                    return '<img class="cat-image" src="' + row.icon + '">'
                }
            },

            {
                data: "name",
                render: function(data, type, row) {
                    return '<p class="normal-text">' + row.name + '</p></a>'
                }
            },

            {
                data: "location",
                render: function(data, type, row) {
                    return '<p class="normal-text">' + row.location + '</p></a>'
                }
            },

            {
                data: "liked_gifts",
                render: function(data, type, row) {
                    var first_part = row.liked_gifts.split(",")[0].trim()
                    var second_part = row.liked_gifts.split(",")[1].trim()
                    return '<p class="cat-text">'+ first_part + '</p></br >'
                    + '<p class="cat-text">'+ second_part + '</p>'
                }
            },

            {
                data: "loved_gifts",
                render: function(data, type, row) {
                    var first_part = row.loved_gifts.split(",")[0].trim()
                    var second_part = row.loved_gifts.split(",")[1].trim()
                    return '<p class="cat-text">'+ first_part + '</p></br >'
                    + '<p class="cat-text">'+ second_part + '</p>'
                }
            },

            {
                data: "unique_gift",
                render: function(data, type, row) {
                    return '<div class="cat-wrapper">'
                    + '<img src="' + row.unique_icon + '" style="width: 1.6rem">'
                    + '<p class="cat-text">'
                    + '<span style="color: purple; font-weight: bold">' + row.unique_gift + '</span></p>'
                    + '</div>'
                    + '<div class="cat-wrapper">'
                    + '<img src="' + row.common_icon + '" style="width: 1.6rem">'
                    + '<p class="cat-text">' + row.common_gift + '</p>'
                    + '</div>'
                }
            },

        ],
    });

    new $.fn.dataTable.FixedHeader(catalogTable, {
        header: true,
        headerOffset: 0
    });
});

$(document).on('change', '.gift', function() {

    // Add new data to localStorage Array
    let keyIndex = $(this).attr('id');
    let value = $(this).val();

    // If value is exceding maximum value
    if (value > 999) {
        value = 999;
    }

    // If value is exceding min value
    if (value < 0) {
        value = 0;
    }

    // Add new value and save to local storage
    catalog[keyIndex]['quantity'] = value;
    localStorage.setItem('catalog', JSON.stringify(catalog));

    render();
});

function render() {
    $(document).find("#catGrass").html('<input type="number" id=' + [0] + ' class="gift" placeholder="' + catalog[0]['quantity'] + ' / 96"/>');
    if (catalog[0]['quantity'] > 95) {
        document.querySelector('#catGrass').style.backgroundColor = '#b6d7a8';
    } else {
        document.querySelector('#catGrass').style.backgroundColor = '#f7f1fd';
    }

    $(document).find("#squishyFurball").html('<input type="number" id=' + [1] + ' class="gift" placeholder="' + catalog[1]['quantity'] + ' / 100"/>');
    if (catalog[1]['quantity'] > 99) {
        document.querySelector('#squishyFurball').style.backgroundColor = '#b6d7a8';
    } else {
        document.querySelector('#squishyFurball').style.backgroundColor = '#f7f1fd';
    }

    $(document).find("#cleanScrap").html('<input type="number" id=' + [2] + ' class="gift" placeholder="' + catalog[2]['quantity'] + ' / 103"/>');
    if (catalog[2]['quantity'] > 102) {
        document.querySelector('#cleanScrap').style.backgroundColor = '#b6d7a8';
    } else {
        document.querySelector('#cleanScrap').style.backgroundColor = '#f7f1fd';
    }

    $(document).find("#kittyRocks").html('<input type="number" id=' + [3] + ' class="gift" placeholder="' + catalog[3]['quantity'] + ' / 85"/>');
    if (catalog[3]['quantity'] > 84) {
        document.querySelector('#kittyRocks').style.backgroundColor = '#b6d7a8';
    } else {
        document.querySelector('#kittyRocks').style.backgroundColor = '#f7f1fd';
    }

    $(document).find("#catOre").html('<input type="number" id=' + [4] + ' class="gift" placeholder="' + catalog[4]['quantity'] + ' / 94"/>');
    if (catalog[4]['quantity'] > 93) {
        document.querySelector('#catOre').style.backgroundColor = '#b6d7a8';
    } else {
        document.querySelector('#catOre').style.backgroundColor = '#f7f1fd';
    }

    $(document).find("#fluffyFur").html('<input type="number" id=' + [5] + ' class="gift" placeholder="' + catalog[5]['quantity'] + ' / 58"/>');
    if (catalog[5]['quantity'] > 57) {
        document.querySelector('#fluffyFur').style.backgroundColor = '#b6d7a8';
    } else {
        document.querySelector('#fluffyFur').style.backgroundColor = '#f7f1fd';
    }

    $(document).find("#Stardust").html('<input type="number" id=' + [6] + ' class="gift" placeholder="' + catalog[6]['quantity'] + ' / 56"/>');
    if (catalog[6]['quantity'] > 55) {
        document.querySelector('#Stardust').style.backgroundColor = '#b6d7a8';
    } else {
        document.querySelector('#Stardust').style.backgroundColor = '#f7f1fd';
    }

    $(document).find("#flowerCat").html('<input type="number" id=' + [7] + ' class="gift" placeholder="' + catalog[7]['quantity'] + ' / 56"/>');
    if (catalog[7]['quantity'] > 55) {
        document.querySelector('#flowerCat').style.backgroundColor = '#b6d7a8';
    } else {
        document.querySelector('#flowerCat').style.backgroundColor = '#f7f1fd';
    }

    $(document).find("#pureWhiteCloth").html('<input type="number" id=' + [8] + ' class="gift" placeholder="' + catalog[8]['quantity'] + ' / 58"/>');
    if (catalog[8]['quantity'] > 57) {
        document.querySelector('#pureWhiteCloth').style.backgroundColor = '#b6d7a8';
    } else {
        document.querySelector('#pureWhiteCloth').style.backgroundColor = '#f7f1fd';
    }

    $(document).find("#woodPiece").html('<input type="number" id=' + [9] + ' class="gift" placeholder="' + catalog[9]['quantity'] + ' / 56"/>');
    if (catalog[9]['quantity'] > 55) {
        document.querySelector('#woodPiece').style.backgroundColor = '#b6d7a8';
    } else {
        document.querySelector('#woodPiece').style.backgroundColor = '#f7f1fd';
    }

}
render();
