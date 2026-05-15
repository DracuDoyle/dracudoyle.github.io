const menuButton = document.getElementById( 'menu-toggle' );
const menu = document.getElementById( 'nav-menu' );

menuButton.addEventListener( 'click', () => {
    menuButton.classList.toggle( 'open' );
    menu.classList.toggle( 'open' );
} );
