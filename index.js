let Menu = document.getElementById("menu");
let nav = document.getElementById("nav");
let close = document.getElementById("close");
let closeDiv =document.getElementById("closeDiv");

Menu.addEventListener('click', () => {
    nav.style.display = 'flex';
});


close.addEventListener('click', () => {
    nav.style.display = 'none';
});

closeDiv.addEventListener('click', () => {
    nav.style.display = 'none';
});