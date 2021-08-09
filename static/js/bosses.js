$(document).ready(function() {
    var bossTable = $('#bossesTable').DataTable({
        stateSave: true,
        info: false,
        responsive: true,
        searching: false,
        paging: false,
        columnDefs: [
            {
                "orderSequence": ["desc", "asc"],
                "targets": [ 2, 3, 4 ]
            },
        ],
        ajax: {
            "url": "/api/bosses/",
            "dataSrc": ""
        },
        columns: [

            {
                data: "id",
                render: function(data, type, row) {
                    return '<input type="checkbox" checked="unchecked">'
                }
            },

            {
                data: "name",
                render: function(data, type, row) {
                    return '<p class="normal-boss">' + row.name + '</p>'
                }
            },

            {
                data: "location",
                render: function(data, type, row) {
                    return '<p>' + row.location + '</p>'
                }
            },

            {
                data: "weakness",
                render: function(data, type, row) {
                    var a = row.weakness.split("•"), i;
                    if (a == '-') {
                        return ''
                    }

                    element = []
                    for (i = 0; i < a.length; i++) {
                        element[i] = a[i]
                    }

                    if (element.length == 4) {
                        return '<img class="element-image" src="/media/characters/elements/' + element[0].trim() + '.png" title="' + element[0].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[1].trim() + '.png" title="' + element[1].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[2].trim() + '.png" title="' + element[2].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[3].trim() + '.png" title="' + element[3].trim() + '">'
                        + '<span style="display: none">' + row.weakness + '</span></div>'
                    }

                    else if (element.length == 3) {
                        return '<img class="element-image" src="/media/characters/elements/' + element[0].trim() + '.png" title="' + element[0].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[1].trim() + '.png" title="' + element[1].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[2].trim() + '.png" title="' + element[2].trim() + '">'
                        + '<span style="display: none">' + row.weakness + '</span></div>'
                    }

                    else if (element.length == 2) {
                        return '<img class="element-image" src="/media/characters/elements/' + element[0].trim() + '.png" title="' + element[0].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[1].trim() + '.png" title="' + element[1].trim() + '">'
                        + '<span style="display: none">' + row.weakness + '</span></div>'
                    }

                    else {
                        return '<img class="element-image" src="/media/characters/elements/' + element[0].trim() + '.png" title="' + element[0].trim() + '">'
                        + '<span style="display: none">' + row.weakness + '</span></div>'
                    }
                }
            },

            {
                data: "resists",
                render: function(data, type, row) {
                    var a = row.resists.split("•"), i;
                    if (a == '-') {
                        return ''
                    }

                    element = []
                    for (i = 0; i < a.length; i++) {
                        element[i] = a[i]
                    }

                    if (element.length == 4) {
                        return '<img class="element-image" src="/media/characters/elements/' + element[0].trim() + '.png" title="' + element[0].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[1].trim() + '.png" title="' + element[1].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[2].trim() + '.png" title="' + element[2].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[3].trim() + '.png" title="' + element[3].trim() + '">'
                        + '<span style="display: none">' + row.resists + '</span></div>'
                    }

                    else if (element.length == 3) {
                        return '<img class="element-image" src="/media/characters/elements/' + element[0].trim() + '.png" title="' + element[0].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[1].trim() + '.png" title="' + element[1].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[2].trim() + '.png" title="' + element[2].trim() + '">'
                        + '<span style="display: none">' + row.resists + '</span></div>'
                    }

                    else if (element.length == 2) {
                        return '<img class="element-image" src="/media/characters/elements/' + element[0].trim() + '.png" title="' + element[0].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[1].trim() + '.png" title="' + element[1].trim() + '">'
                        + '<span style="display: none">' + row.resists + '</span></div>'
                    }

                    else {
                        return '<img class="element-image" src="/media/characters/elements/' + element[0].trim() + '.png" title="' + element[0].trim() + '">'
                        + '<span style="display: none">' + row.resists + '</span></div>'
                    }
                }
            },

            {
                data: "absorbs",
                render: function(data, type, row) {
                    var a = row.absorbs.split("•"), i;
                    if (a == '-') {
                        return ''
                    }

                    element = []
                    for (i = 0; i < a.length; i++) {
                        element[i] = a[i]
                    }

                    if (element.length == 4) {
                        return '<img class="element-image" src="/media/characters/elements/' + element[0].trim() + '.png" title="' + element[0].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[1].trim() + '.png" title="' + element[1].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[2].trim() + '.png" title="' + element[2].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[3].trim() + '.png" title="' + element[3].trim() + '">'
                        + '<span style="display: none">' + row.absorbs + '</span></div>'
                    }

                    else if (element.length == 3) {
                        return '<img class="element-image" src="/media/characters/elements/' + element[0].trim() + '.png" title="' + element[0].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[1].trim() + '.png" title="' + element[1].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[2].trim() + '.png" title="' + element[2].trim() + '">'
                        + '<span style="display: none">' + row.absorbs + '</span></div>'
                    }

                    else if (element.length == 2) {
                        return '<img class="element-image" src="/media/characters/elements/' + element[0].trim() + '.png" title="' + element[0].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[1].trim() + '.png" title="' + element[1].trim() + '">'
                        + '<span style="display: none">' + row.absorbs + '</span></div>'
                    }

                    else {
                        return '<img class="element-image" src="/media/characters/elements/' + element[0].trim() + '.png" title="' + element[0].trim() + '">'
                        + '<span style="display: none">' + row.absorbs + '</span></div>'
                    }
                }
            },

            {
                data: "nullifies",
                render: function(data, type, row) {
                    var a = row.nullifies.split("•"), i;
                    if (a == '-') {
                        return ''
                    }

                    element = []
                    for (i = 0; i < a.length; i++) {
                        element[i] = a[i]
                    }

                    if (element.length == 4) {
                        return '<img class="element-image" src="/media/characters/elements/' + element[0].trim() + '.png" title="' + element[0].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[1].trim() + '.png" title="' + element[1].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[2].trim() + '.png" title="' + element[2].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[3].trim() + '.png" title="' + element[3].trim() + '">'
                        + '<span style="display: none">' + row.nullifies + '</span></div>'
                    }

                    else if (element.length == 3) {
                        return '<img class="element-image" src="/media/characters/elements/' + element[0].trim() + '.png" title="' + element[0].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[1].trim() + '.png" title="' + element[1].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[2].trim() + '.png" title="' + element[2].trim() + '">'
                        + '<span style="display: none">' + row.nullifies + '</span></div>'
                    }

                    else if (element.length == 2) {
                        return '<img class="element-image" src="/media/characters/elements/' + element[0].trim() + '.png" title="' + element[0].trim() + '">'
                        + '<img class="element-image" src="/media/characters/elements/' + element[1].trim() + '.png" title="' + element[1].trim() + '">'
                        + '<span style="display: none">' + row.nullifies + '</span></div>'
                    }

                    else {
                        return '<img class="element-image" src="/media/characters/elements/' + element[0].trim() + '.png" title="' + element[0].trim() + '">'
                        + '<span style="display: none">' + row.nullifies + '</span></div>'
                    }
                }
            },

            {
                data: "loot",
                render: function(data, type, row) {
                    return '<p>' + row.loot + '</p>'
                }
            },
        ],
    });

    new $.fn.dataTable.FixedHeader(bossTable, {
        header: true,
        headerOffset: 0
    });
});
