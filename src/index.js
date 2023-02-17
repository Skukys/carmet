let navbarIcon = document.querySelector('.navbar-icon')
let navbar = document.querySelector('.navbar')
navbarIcon.addEventListener('click', () => {
    navbar.classList.toggle('active')
})


document.addEventListener('DOMContentLoaded', () => {
    ItcCustomSelect.create('.base-table-pagination__select', {
        name: 'pages',
        targetValue: '1',
        options: [
            ['1', '1'],
            ['2', '2'],
            ['3', '3'],
            ['4', '4']
        ],
        onSelected(select, option) {
            const text = option ? option.textContent : '';
        },
    });
    document.querySelector('.itc-select').addEventListener('itc.select.change', (e) => {
        const btn = e.target.querySelector('.itc-select__toggle');
        const selected = e.target.querySelector('.itc-select__option_selected');
        const text = selected ? selected.textContent : '';
    });
})