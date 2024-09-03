let btnUp = document.querySelector('.btnUp')


window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnUp.style.display = "block";
    } else {
        btnUp.style.display = "none";
    }

    // console.log(document.body.scrollTop);
    console.log(document.documentElement.scrollTop);

};

btnUp.addEventListener('click', (e) => {
    console.log(e);
    window.scrollTo({ top: 0, behavior: "smooth" })

})


console.log(document.body.scrollTop);
console.log(document.documentElement.scrollTop);


