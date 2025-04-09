document.addEventListener('DOMContentLoaded', function () {
  
    const subMenus = document.querySelectorAll('.dropdown-submenu');
  
    subMenus.forEach(function (submenu) {
      submenu.addEventListener('mouseover', function () {
      
        const dropdownMenu = submenu.querySelector('.dropdown-menu');
        if (dropdownMenu) {
          dropdownMenu.classList.add('show');
        }
      });
  
      submenu.addEventListener('mouseout', function () {
       
        const dropdownMenu = submenu.querySelector('.dropdown-menu');
        if (dropdownMenu) {
          dropdownMenu.classList.remove('show');
        }
      });
    });
  });
  