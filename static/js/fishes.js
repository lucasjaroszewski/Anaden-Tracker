$(document).ready(function() {
    var table = $('#fishingTable').DataTable( {
        stateSave: true,
        info: false,
        responsive: true,
        searching: false,
        paging: false,
        columnDefs: [
            {
                "orderSequence": ["desc", "asc"],
                "targets": [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ]
            },
            {
                "targets": 23,
                "orderDataType": "dom-text"
            }
        ],
        ajax: {
            "url": "/api/fishes/",
            "dataSrc": ""
        },
        columns: [

            {
                data: "number",
                render: function(data, type, row) {
                    return row.number
                }
            },

            {
                data: "name",
                render: function (data, type, row) {
                    if (row.description == 'R') {
                        return '<p class="rare-fish">' + row.name + '</p>'
                    }

                    if (row.description == 'L') {
                        return '<p class="lord-fish">' + row.name + '</p>'
                    }

                    if (row.description == 'H') {
                        return '<p class="horror-fish">' + row.name + '</p>'
                    }

                    if (row.description == 'M') {
                        return '<p class="monster-fish">' + row.name + '</p>'
                    }

                    else {
                        return '<p class="normal-fish">' + row.name + '</p>'
                    }
                }
            },

            {
                data: "dragon_palace",
                render: function(data, type, row) {
                    return (data == true) ? '<div style="background-color: #d9ead3; padding: 8px">&#10004;</div>' : ''
                }
            },

            {
                data: "acteul",
                render: function(data, type, row) {
                    return (data == true) ? '<div style="background-color: #d9ead3; padding: 8px">&#10004;</div>' : ''
                }
            },

            {
                data: "lake_tiilen",
                render: function(data, type, row) {
                    return (data == true) ? '<div style="background-color: #d9ead3; padding: 8px">&#10004;</div>' : ''
                }
            },

            {
                data: "vasu_mountains",
                render: function(data, type, row) {
                    return (data == true) ? '<div style="background-color: #d9ead3; padding: 8px">&#10004;</div>' : ''
                }
            },

            {
                data: "charol_plains",
                render: function(data, type, row) {
                    return (data == true) ? '<div style="background-color: #d9ead3; padding: 8px">&#10004;</div>' : ''
                }
            },

            {
                data: "man_eating_marsh",
                render: function(data, type, row) {
                    return (data == true) ? '<div style="background-color: #d9ead3; padding: 8px">&#10004;</div>' : ''
                }
            },

            {
                data: "baruoki",
                render: function(data, type, row) {
                    return (data == true) ? '<div style="background-color: #d9ead3; padding: 8px">&#10004;</div>' : ''
                }
            },

            {
                data: "nauru_uplands",
                render: function(data, type, row) {
                    return (data == true) ? '<div style="background-color: #d9ead3; padding: 8px">&#10004;</div>' : ''
                }
            },

            {
                data: "karek_swampland",
                render: function(data, type, row) {
                    return (data == true) ? '<div style="background-color: #d9ead3; padding: 8px">&#10004;</div>' : ''
                }
            },

            {
                data: "rinde",
                render: function(data, type, row) {
                    return (data == true) ? '<div style="background-color: #d9ead3; padding: 8px">&#10004;</div>' : ''
                }
            },

            {
                data: "serena_coast",
                render: function(data, type, row) {
                    return (data == true) ? '<div style="background-color: #d9ead3; padding: 8px">&#10004;</div>' : ''
                }
            },

            {
                data: "rucyana_sands",
                render: function(data, type, row) {
                    return (data == true) ? '<div style="background-color: #d9ead3; padding: 8px">&#10004;</div>' : ''
                }
            },

            {
                data: "elzion_airport",
                render: function(data, type, row) {
                    return (data == true) ? '<div style="background-color: #d9ead3; padding: 8px">&#10004;</div>' : ''
                }
            },

            {
                data: "nilva",
                render: function(data, type, row) {
                    return (data == true) ? '<div style="background-color: #d9ead3; padding: 8px">&#10004;</div>' : ''
                }
            },

            {
                data: "last_island",
                render: function(data, type, row) {
                    return (data == true) ? '<div style="background-color: #d9ead3; padding: 8px">&#10004;</div>' : ''
                }
            },

            {
                data: "spacetime_rift",
                render: function(data, type, row) {
                    return (data == true) ? '<div style="background-color: #d9ead3; padding: 8px">&#10004;</div>' : ''
                }
            },

            {
                data: "zol_plains",
                render: function(data, type, row) {
                    return (data == true) ? '<div style="background-color: #d9ead3; padding: 8px">&#10004;</div>' : ''
                }
            },

            {
                data: "moonlight_forest",
                render: function(data, type, row) {
                    return (data == true) ? '<div style="background-color: #d9ead3; padding: 8px">&#10004;</div>' : ''
                }
            },

            {
                data: "snake_neck_igoma",
                render: function(data, type, row) {
                    return (data == true) ? '<div style="background-color: #d9ead3; padding: 8px">&#10004;</div>' : ''
                }
            },

            {
                data: "ancient_battlefield",
                render: function(data, type, row) {
                    return (data == true) ? '<div style="background-color: #d9ead3; padding: 8px">&#10004;</div>' : ''
                }
            },

            {
                data: "rod",
                render: function(data, type, row) {
                    return row.rod
                }
            },

            {
                data: "actual_catch",
                render: function(data, type, row) {

                    // Get fishes data or creates a new empty list
                    var fishes = JSON.parse(localStorage.getItem("fishes") || "{}");

                    // Save back to localStorage
                    localStorage.setItem("fishes", JSON.stringify(fishes));
                    var name = row.name

                    if (fishes[name] == null) {
                        return '<input type="number" name="' + row.name + '" class="catch-input" placeholder="0"/>'
                        + '<span style="display: none">' + row.actual_catch + '</span></div>'
                    }

                    else  {
                        return '<input type="number" name="' + row.name + '" class="catch-input" placeholder="' + fishes[name] + '"/>'
                        + '<span style="display: none">' + row.actual_catch + '</span></div>'

                    }
                }
            },

            {
                data: "bait",
                render: function(data, type, row) {
                    return '<p class="normal-fish">' + row.bait + '</p>'
                }
            },

            {
                data: "xp",
                render: function(data, type, row) {
                    return row.xp
                }
            },
        ],
    });

    oTable = $('#fishingTable').DataTable();

    new $.fn.dataTable.FixedHeader(table, {
        header: true,
        headerOffset: 0
    });
});

// Local storage
jQuery('#fishingTable').on('change', ".catch-input", function() {

    // Add new data to localStorage Array
    var $this = $(this);
    var name = $this.attr('name')
    var value = $this.val();

    // If value is exceding maximum value
    if (value > 999) {
        value = 999;
    }

    // If value is exceding min value
    if (value < 0) {
        value = 0;
    }

    // Get fishes data and add new value
    var fishes = JSON.parse(localStorage.getItem("fishes"));
    fishes[name] = value;

    // Save back to localStorage
    localStorage.setItem('fishes', JSON.stringify(fishes));
});
