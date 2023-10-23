
// const rozbalMenu = () => {
//   const idElement = document.querySelector('menu-tlacitko');
//   idElement.textContent = 'menu-polozky';
// };

// const buttonElement = document.querySelector('menu-tlacitko');
// buttonElement.addEventListener('show', rozbalMenu);

// ----------------
// const idElement = document.querySelector('#menu-tlacitko')
// const buttonElement = document.querySelector('#menu-polozky')

// const idElement.addEventListener('click', () => {
//   buttonElement.classlist.toggle('show')

//   tady potom bude podmínka na ten bonus 
//   if ...
//   else ...
// }


// ----------------

const menuTlacitkoElement = document.querySelector("#menu-tlacitko")
const menuPolozkyElement = document.querySelector("#menu-polozky")
const menuIkonaElement = menuTlacitkoElement.querySelector("i")

const menuTlacitkoHandler = () => {
  const shown = menuPolozkyElement.classList.toggle("show")
  if (shown) {
    menuIkonaElement.classList.remove("fa-bars")
    menuIkonaElement.classList.add("fa-xmark")
  } else {
    menuIkonaElement.classList.add("fa-bars")
    menuIkonaElement.classList.remove("fa-xmark")
  }
  
 }

menuTlacitkoElement.addEventListener("click", menuTlacitkoHandler)




