var charactersScrape = document.getElementById('scrape-characters')
charactersScrape.addEventListener('click', function(e) {

    fetch('/api/scrape-characters/', {
        method: 'POST',
        headers:{
            'Content-type':'application/json',
            "X-CSRFToken": getCookie("csrftoken"),
        },
    })
});

var weaponsScrape = document.getElementById('scrape-weapons')
weaponsScrape.addEventListener('click', function(e) {

    fetch('/api/scrape-weapons/', {
        method: 'POST',
        headers:{
            'Content-type':'application/json',
            "X-CSRFToken": getCookie("csrftoken"),
        },
    })
});

var bossesScrape = document.getElementById('scrape-bosses')
bossesScrape.addEventListener('click', function(e) {

    fetch('/api/scrape-bosses/', {
        method: 'POST',
        headers:{
            'Content-type':'application/json',
            "X-CSRFToken": getCookie("csrftoken"),
        },
    })
});

var catalogScrape = document.getElementById('scrape-catalog')
catalogScrape.addEventListener('click', function(e) {

    fetch('/api/scrape-catalog/', {
        method: 'POST',
        headers:{
            'Content-type':'application/json',
            "X-CSRFToken": getCookie("csrftoken"),
        },
    })
});

var lordofmanaScrape = document.getElementById('scrape-lordofmana')
lordofmanaScrape.addEventListener('click', function(e) {

    fetch('/api/scrape-lordofmana/', {
        method: 'POST',
        headers:{
            'Content-type':'application/json',
            "X-CSRFToken": getCookie("csrftoken"),
        },
    })
});
