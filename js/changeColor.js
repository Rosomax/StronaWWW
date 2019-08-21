const arrow = document.querySelector(".fa-arrow-right")
const textChangeColor = document.querySelector(".changeColor")
const colorPalet = document.querySelector(".colorContainer")
const $color = $(".color")
const $body = $('body')

arrow.addEventListener('click', function () {
    textChangeColor.classList.toggle("on");
    colorPalet.classList.toggle("on");
    arrow.classList.toggle("on");
})

$color.on('click', function () {
    if ($(this).hasClass('red')) {
        // $body.css('background-color', 'red');
        $body.removeClass('brown blue yellow orange white');
        $body.addClass('red');
    } else if ($(this).hasClass('blue')) {
        $body.removeClass('red brown yellow orange white');
        $body.addClass('blue');
    } else if ($(this).hasClass('yellow')) {
        $body.removeClass('red blue brown orange white');
        $body.addClass('yellow');
    } else if ($(this).hasClass('orange')) {
        $body.removeClass('red blue yellow brown white');
        $body.addClass('orange');
    } else if ($(this).hasClass('white')) {
        $body.removeClass('red blue yellow orange brown');
        $body.addClass('white');
    } else if ($(this).hasClass('brown')) {
        $body.removeClass('red blue yellow orange white');
        $body.addClass('brown');
    }
});