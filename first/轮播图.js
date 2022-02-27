window.addEventListener('load', function() {
    var left = document.querySelector('.left');
    var right = document.querySelector('.right');
    var box = document.querySelector('.box');
    box.addEventListener('mouseenter', function() {
        left.style.display = 'block';
        right.style.display = 'block';
    })
    box.addEventListener('mouseleave', function() {
        left.style.display = 'none';
        right.style.display = 'none';
    })
    var box = document.querySelector('.box');
    var img = document.querySelectorAll('.tu img');
    var tu = document.querySelector('.tu');
    var i = 0;
    var timer = setInterval(function() {
        tu.style.marginLeft = "-" + 300 * (i + 1) + "px";
        i++;
        if (i == 4) {
            tu.style.marginLeft = 0 + "px";
            i = 0;
        }
    }, 1000);
})