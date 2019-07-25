$(document).ready(function()
{
    $("div.boxMenuLeft").click(function()
    {
        $(this).animate({
            width: "12%", height: "100px" ,borderWidth:"1px", 'font-size': "50px" , 'padding-top': "20px"
        }, 1500, 
        )
        $("div.boxMenu").animate({
                "margin-left":"10%"
         }, 1500)   
        console.log("kliknieto");
        setTimeout(function(){
            $(location).attr('href', 'csharp.html')
        }, 1550)
    
    });
});




//$(location).attr('href', 'http://stackoverflow.com')


///onclick="location.href='csharp.html';"$(this).fadeOut("slow");
//        $(this)   $(location).attr('href', 'csharp.html')
//Promise().done(function() {
 //   $(location).attr('href', 'csharp.html')