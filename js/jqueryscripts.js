$("div.boxMenuLeft").click(function () {
    $(this).animate({
        'font-size': "0px",
    }, 1500);
    setTimeout(function () {
        $(location).attr('href', 'csharp.html')
    }, 1500)
});

$(".boxMenu").click(function () {
    $(this).animate({
        'font-size': "0px"
    }, 1500)
    setTimeout(function () {
        $(location).attr('href', 'git.html')
    }, 1500)
});

$(".boxMenuRight").click(function () {
    $(this).animate({
        'font-size': "0px",
    }, 1500)
    setTimeout(function () {
        $(location).attr('href', 'js.html')
    }, 1500)
});