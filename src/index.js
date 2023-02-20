let navbarIcon = document.querySelector('.navbar-icon')
let navbar = document.querySelector('.navbar')
let content = document.querySelector('.content')
navbarIcon.addEventListener('click', () => {
    navbar.classList.toggle('active')
    content.classList.toggle('active')
})


document.addEventListener('DOMContentLoaded', () => {
    ItcCustomSelect.create('.base-table-pagination__select', {
        name: 'pages',
        targetValue: '10',
        options: [
            ['10', '10'],
            ['20', '20'],
            ['30', '30'],
            ['40', '40']
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