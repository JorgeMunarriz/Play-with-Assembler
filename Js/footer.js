const footer = document.querySelector(".footer");
const menuToggle = document.querySelector('.toggleNav');
const listCreators = document.querySelector('#creators');
const listCr = document.querySelectorAll('.cr-names');

menuToggle.onclick = function() {
    footer.classList.toggle('active')
    menuToggle.classList.toggle('active')
    listCreators.classList.toggle('active')
    listCr.forEach(item=> {
      item.classList.toggle('active');
    });
  };