// -------------CUSTOM-CURSOR-[START]-------------
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function () {
    cursor.classList.add('click');
    cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function () {
    cursor.classList.remove('click')
    cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
})
// -------------CUSTOM-CURSOR-[END]-------------

// -------------CUSTOM-HORIZONTAL-INDICATOR-[START]-------------
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}
// -------------CUSTOM-HORIZONTAL-INDICATOR-[END]-------------

// -------------CUSTOM-ANCHOR-[START]-------------

//Make sure the user has scrolled at least double the height of the browser
var toggleHeight = $(window).outerHeight() * 1.2;

$(window).scroll(function () {
    if ($(document).scrollTop() > toggleHeight) {
        //Adds active class to make button visible
        $("#up-button").addClass("active");

    } else {
        //Removes active class to make button visible
        $("#up-button").removeClass("active");
    }
});
// -------------CUSTOM-ANCHOR-[END]-------------
