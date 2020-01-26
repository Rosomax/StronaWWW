const arrow = document.querySelector(".fa-arrow-right")
const textChangeColor = document.querySelector(".changeColor")
const colorPalet = document.querySelector(".colorContainer")
const $color = $(".color")
const $ds = $(".defaultSetting")
const $body = $('body')
var tempC = "";


window.onload = dupa();

document.body.addEventListener('load', function () {
    try {
        $body.addClass(localStorage.getItem('kolor'));
    } catch {}
});

arrow.addEventListener('click', function () {
    textChangeColor.classList.toggle("on");
    colorPalet.classList.toggle("on");
    arrow.classList.toggle("on");
});

function siur() {
    localStorage.removeItem('kolor');
    localStorage.setItem('kolor', `${tempC}`);
};


$color.on('click', function () {
    if ($(this).hasClass('red')) {
        // $body.css('background-color', 'red');
        $body.removeClass('brown blue yellow orange white');
        $body.addClass('red');
        tempC = 'red';
        siur();
    } else if ($(this).hasClass('blue')) {
        $body.removeClass('red brown yellow orange white');
        $body.addClass('blue');
        tempC = 'blue';
        siur();
    } else if ($(this).hasClass('yellow')) {
        $body.removeClass('red blue brown orange white');
        $body.addClass('yellow');
        tempC = 'yellow';
        siur();
    } else if ($(this).hasClass('orange')) {
        $body.removeClass('red blue yellow brown white');
        $body.addClass('orange');
        tempC = 'orange';
        siur();
    } else if ($(this).hasClass('white')) {
        $body.removeClass('red blue yellow orange brown');
        $body.addClass('white');
        tempC = 'white';
        siur();
    } else if ($(this).hasClass('brown')) {
        $body.removeClass('red blue yellow orange white');
        $body.addClass('brown');
        tempC = 'brown';
        siur();
    }
});

function dupa() {
    $body.addClass(localStorage.getItem('kolor'));
};

$ds.on('click', function () {
    if ($(this).hasClass('defaultSetting')) {
        $body.removeClass('red blue yellow orange white brow');
        localStorage.removeItem('kolor');
    }
});