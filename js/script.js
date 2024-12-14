const searchForm = document.querySelector(".search-form");

//! buttons

const searchBtn = document.querySelector("#search-btn");


searchBtn.addEventListener("click", function(){
    searchForm.classList.toggle ("active");
    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(searchBtn) && 
            !e.composedPath().includes(searchForm)
        ) {
            searchForm.classList.remove("active");
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // Elemanları seç
    const cartItem = document.querySelector(".cart-items-container");
    const cartBtn = document.querySelector("#cart-btn");

    // Eğer öğeler doğru şekilde seçildiyse, event listener ekle
    if (cartBtn && cartItem) {
        cartBtn.addEventListener("click", function (e) {
            cartItem.classList.toggle("active");

            // Dışarıya tıklanırsa sepeti kapat
            document.addEventListener("click", function (e) {
                if (
                    !e.composedPath().includes(cartBtn) &&  // Butona tıklanmadıysa
                    !e.composedPath().includes(cartItem)   // Sepet konteynerine tıklanmadıysa
                ) {
                    cartItem.classList.remove("active"); // Sepeti kapat
                }
            });
        });
    } else {
        console.log("Elementler bulunamadı.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Elemanları seç
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector("#menu-btn");

    // Eğer öğeler doğru şekilde seçildiyse, event listener ekle
    if (menuBtn && navbar) {
        menuBtn.addEventListener("click", function (e) {
            navbar.classList.toggle("active");

            // Dışarıya tıklanırsa sepeti kapat
            document.addEventListener("click", function (e) {
                if (
                    !e.composedPath().includes(menuBtn) &&  // Butona tıklanmadıysa
                    !e.composedPath().includes(navbar)   // Sepet konteynerine tıklanmadıysa
                ) {
                    navbar.classList.remove("active"); // Sepeti kapat
                }
            });
        });
    } else {
        console.log("Elementler bulunamadı.");
    }
});



