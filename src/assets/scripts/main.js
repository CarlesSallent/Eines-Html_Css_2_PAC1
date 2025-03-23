/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

//Dependence AOS
import 'aos/dist/aos.css';
AOS.init();


//Burguer Menu
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('burgerMenu');

  toggle.addEventListener('click', (event) => {
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  });

  document.addEventListener('click', (event) => {
    const isClickInside = menu.contains(event.target) || toggle.contains(event.target);
    if (!isClickInside) {
      menu.style.display = 'none';
    }
  });

  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.style.display = 'none';
    });
  });
});
