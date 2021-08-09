// Get input element
var filterInput = document.getElementById('filterInput');

// Add event listener
filterInput.addEventListener('keyup', filterNames);

// Function
function filterNames() {

    // Get value of input
    let filterValue = filterInput.value.toLowerCase();
    let li = document.getElementById('characterList');
    let a = li.querySelectorAll('a.add');

    // Loop
    for (let i = 0; i < a.length; i++) {
        if (a[i].getAttribute('data-name').toLowerCase().indexOf(filterValue) > -1) {
            a[i].style.display = '';
        }
        else {
            a[i].style.display = 'none';
        }
    }
}
