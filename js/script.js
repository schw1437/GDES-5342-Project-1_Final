$(document).ready(function() {

$('#svgcontainer').addClass('animated wobble'); //cactus wobble

$('#tumbleweed').addClass('animated rollOut'); //tumbleweed rolling


$('#water').on('click',function() { //start water click functions
    
    
    function fallingRain() { //start raining
        $("#light").attr('disabled', true); //disable other buttons
    $("#surprise").attr('disabled', true); //disable other buttons
        var $raindrops = $(),
            createRaindrops = function () {
                var qt = 200;
                for (var i = 0; i < qt; ++i) {
                    var $raindrop = $('<div class="raindrops"></div>');
                    $raindrop.css({
                        'left': (Math.random() * $('#raincontainer').width()) + 'px',
                        'top': (- Math.random() * $('#raincontainer').height()) + 'px'
                    });
                    $raindrops = $raindrops.add($raindrop);
                }
                $('#rainZone').prepend($raindrops);
            },
            
            runRainFall = function() {
                $raindrops.each(function() {
                    
                    var singleAnimation = function($drop) {
                        $drop.animate({
                            top: "120%",
                            opacity : "0.5",
                        }, Math.random()*-2500 + 5000, function(){
                
                            singleAnimation($drop);
                        });
                    };
                    singleAnimation($(this));
                });
        };
        
        createRaindrops();
        runRainFall();
    }
    fallingRain(); //end raining
    setTimeout(function(){
        $("#light").attr('disabled', false); //disable other buttons
    
        $("#surprise").attr('disabled', false); //disable other buttons
    },5000);
}); //end water click actions

var count = 0;
window.onload = function () {
    var svgcontainer = document.getElementById('svgcontainer');
    var water = document.getElementById('water');
    var light = document.getElementById('light');
    var c = document.getElementById('cactus');
    function doIt() {
        //svgcontainer.className = "grow";
        //$('#water').height("+=100");
        //('#hats').height("+=50");
        //$('#hats').width("+=50");
        count = count + 1;
        if (count % 3 == 0) {
            $('#svgcontainer').height("+=50%");
            $('#svgcontainer').width("+=50%");
            $('#cactus').animate({
                height : "+=50%",
                width : "+=50%"
            });
            $('#hats').animate({
                height : "+=50%",
                width : "+=50%",
                'marginTop' : "-=60%"
            });
        }
        //svgcontainer.clientWidth = svgcontainer.clientWidth * 1.5;
        //$('#cactus').height("+=50");
        //$('#cactus').width("+=50");
     };
    water.onclick = function () {
        setTimeout(doIt , 3000);
    }

    light.onclick = function() {
        setTimeout(doIt , 3000);
    }

}; //end growing cactus
$('#light').on('click',function() { //start light click actions
    $("#water").attr('disabled', true); //disable other buttons
    $("#surprise").attr('disabled', true); //disable other buttons

    if($('#left').css('left')=='0px'){ //start sliding clouds
        $('#left').animate({left: '0'}, 1000);        
    }else{
        $('#left').animate({left: '-500px'}, 1000); 
    }
    if($('#left').css('left')=='-500px'){
        $('#left').animate({right: '-500px'}, 1000);
    }else{
        $('#left').delay(5000).animate({left: '240px'}, 1000);
    }
    if($('#right').css('right')=='0px'){
        $('#right').animate({right: '0'}, 1000);        
    }else{
        $('#right').animate({right: '-500px'}, 1000); 
    }
    if($('#right').css('right')=='-500px'){
        $('#right').animate({left: '-500px'}, 1000);
    }else{
        $('#right').delay(5000).animate({right: '240px'}, 1000); //end sliding clouds
    }
    $('#sun').addClass('animated rubberBand'); //sun rubberband effect
    
    setTimeout(function(){
        $("#water").attr('disabled', false); //disable other buttons
    
        $("#surprise").attr('disabled', false); //disable other buttons
    },5000);
}); //end light click actions
$('#surprise').on('click',function() { //start randomize hats
    var image = new Array ();
    image[0] = "images/rainbow.svg";
    image[1] = "images/pirate.svg";
    image[2] = "images/winter.svg";
    var size = image.length
    var x = Math.floor(size*Math.random())
$('#hats').attr('src',image[x]); //end randomize hats
$('#hats').addClass('animated bounceIn'); //hats bounce in
});



$(document).on("click", "#refresh", function(){
    location.reload(true);
});


    
});