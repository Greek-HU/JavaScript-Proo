console.log("jQuery");

(function($){
    $(document).ready( function(){
        $("p").css("color", "blue");
        $("#morby").css("color", "red");
/*
        var newElement =$("<div />");
        newElement.html("Ez az új <b>jQuery</b> által létrehozott <b>DIV</b>-em");
        $("#content").append(newElement);
*/
        //Rövidebben!!!
        $("#content").append(
            $(`<div id="myDiv">`).html("Ez az új <b>jQuery</b> által létrehozott <b>DIV</b>-em")
        );
        $("#myDiv").css({
            "background-color": "#245678",
            "padding": "5px",
            "color": "#fff",
            "position": "relative"
        });

        $("<span />",{
            id: "mySpan",
            class: "myClass"
        })
        .html("Ez egy <b>mySpan</b>")
        .appendTo(document.body)
        .css({
            "background-color": "blue",
            "color": "white"
        });

        $("#content").find("p").on("click", function(){
            $("p.highlight").removeClass("highlight")
            $(this).toggleClass("highlight")
        })
         
        /* -Azok a függvények melyek értéket állítanak be,
                voltaképpen nem csak setter hanem getter függvényként is működnek
           -GET-erként úgy, hogy nem kapnak értéket, vagyis,
                ha paraméter nélkül hívjuk meg őket, akkor viszont azt az értéket
                amit egyébként paraméterrel beállítanak.
        */
    }); 
})(jQuery);

console.log("A magassága: "+$("#morby").height());  //A div magasságát adja meg

