$(document).ready(function() {

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    $("#firstNameId").click(function() {
        $(this).hide();
    });

    $("a").mouseenter(function() {
        $(this).slideDown("slow");
    });

    $("#firstNameIdDiv").mouseleave(function() {
        $("#firstNameId").show();
    });


    $("h1").dblclick(function() {
        $( "img" ).animate({
            width: [ "toggle", "swing" ],
            height: [ "toggle", "swing" ],
            opacity: "toggle"
        }, 5000, "linear", function() {
            $( this ).after( "<div>Animation complete.</div>" );
        });
    });


});


//$(selector).action(function(){
//});