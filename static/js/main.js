const loader = document.querySelector('.loader');
const app = document.querySelector('#app');
const table = document.querySelector('#fishingTable') || document.querySelector('#bossesTable');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        setTimeout(() => (app.style.opacity = 1), 10)

        loader.style.display = 'none';
        app.style.display = 'block';
        if (table) {
            table.style.width = '100%' || console.log('Could not apply style.');
        }
    }, 1000)
}
init();
