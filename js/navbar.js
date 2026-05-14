const toggle = document.getElementById( 'menu-toggle' );
const menu = document.getElementById( 'nav-menu' );

toggle.addEventListener( 'click', () => {
    const isOpen = menu.classList.toggle( 'open' );
} );
