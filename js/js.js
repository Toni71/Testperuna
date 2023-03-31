$(document).ready(() => {

       /*Paletti buttonien tiedot*/

    $(".nappi1").click(function(){
        $(".colorhex").val("Fiesta, HEX: #DD4132 ");
    });

    $(".nappi2").click(function(){
        $(".colorhex").val("Jester Red, HEX: #9E1030 ");
    });

    $(".nappi3").click(function(){
        $(".colorhex").val("Turmeric, HEX: #FE840E ");
    });

    $(".nappi4").click(function(){
        $(".colorhex").val("Living Coral, HEX: #FF6F61 ");
    });

    $(".nappi5").click(function(){
        $(".colorhex").val("Pink Peacock, HEX: #C62168 ");
    });

    $(".nappi6").click(function(){
        $(".colorhex").val("Pepper Stem, HEX: #8D9440  ");
    });

    $(".nappi7").click(function(){
        $(".colorhex").val("Aspen Gold, HEX: #FFD662  ");
    });

    $(".nappi8").click(function(){
        $(".colorhex").val("Princess Blue, HEX: #00539C ");
    });

    $(".nappi9").click(function(){
        $(".colorhex").val("Toffee, HEX: #755139  ");
    });

    $(".nappi10").click(function(){
        $(".colorhex").val("Mango Mojito, HEX: #D69C2F ");
    });

    $(".nappi11").click(function(){
        $(".colorhex").val("Terrarium Moss, HEX: #616247  ");
    });
    $(".nappi12").click(function(){
        $(".colorhex").val("Sweet Lilac, HEX: #E8B5CE  ");
    });
    $(".nappi13").click(function(){
        $(".colorhex").val("Soybean, HEX: #D2C29D  ");
    });
    $(".nappi14").click(function(){
        $(".colorhex").val("Eclipse, HEX: #343148  ");
    });
    $(".nappi15").click(function(){
        $(".colorhex").val("Sweet Corn, HEX: #F0EAD6 ");
    });
    $(".nappi16").click(function(){
        $(".colorhex").val("Brown Granite, HEX: #615550");
    });

    $(".part-selector").click(function(){
        partId=$(this).attr("id"),
        $(".part-selector").removeClass("active"),
        $(this).addClass("active")}),
 
           /*Varientestaus huoneneen tyhjennys */
        $(".palette-item").click(function(){
           var i=$(this).css("background-color");
           $("."+partId).css({fill:i})}),
           $("#reset-colors").click(function(){
              $(".wall-1").css({fill:"white"}),
              $(".wall-2").css({fill:"white"}),
              $(".colorhex").val(" ");
              $(".floor").css({fill:"white"})})
              
          });
   

        



          /*Galleria kuvat*/

    for (let i = 1; i <= 16; i++) {
        const url = 'kuva' + i + '.jpg';

        $('#gallery-container').append(`
            <div class="col-lg-3 col-md-4 col-6">
                <span class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail kuvia" style="max-height:200px;" onclick="reviewImage('${url}')" src="kuvat/${url}" alt="test">
                </span>
            </div>
        `);
    }




 
          /*Galleria kuva tulee esille näytölle painaessa.*/

    function reviewImage(url) {
        console.log('here');
        $('#image-review-src').attr('src', 'kuvat/' + url);
        $('#image-review').modal('show');
    }

   


