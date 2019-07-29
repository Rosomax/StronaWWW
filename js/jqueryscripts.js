$(document).ready(function () {
    $("div.boxMenuLeft").click(function () {
        $(this).animate({
            width: "0%",
            height: "0px",
            padding: "0",
            'font-size': "0px",
            "margin-right": "18%",


        }, 1500)
        setTimeout(function () {
            $(location).attr('href', 'csharp.html')
        }, 1150)
    });

    $(".boxMenu").click(function () {
        $(this).animate({
            width: "0%",
            height: "0px",
            padding: "0",
            'font-size': "0px",
            "margin-right": "18%"
        }, 1500)
        setTimeout(function () {
            $(location).attr('href', 'git.html')
        }, 1010)
    });

    $(".boxMenuRight").click(function () {
        $(this).animate({
            width: "0%",
            height: "0px",
            padding: "0",
            'font-size': "0px",
            "margin-right": "18%",
            "margin-bottom": "14.30%"
        }, 1500)
        setTimeout(function () {
            $(location).attr('href', 'js.html')
        }, 1010)
    });
});