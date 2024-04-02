const Menu = document.getElementById("menu")
const MenuCategories = document.querySelectorAll(".menu")
Menu.addEventListener("click",function() {
    MenuCategories.forEach(function(menu) {
        menu.style.display = "block"
        console.log(MenuCategories)

    })
    
    alert("ok")
})

// const Menu = document.getElementById("menu");
// const MenuCategories = document.querySelectorAll(".menu");

// Menu.addEventListener("click", function() {
//     MenuCategories.forEach(function(category) {
//         if (category.style.display === "none" || category.style.display === "") {
//             category.style.display = "block";
//         } else {
//             category.style.display = "none";
//         }
//     });
// });