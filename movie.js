var moviejson={};
$.getJSON("movies.json", function(banners){
    console.log(banners);
    moviejson=banners;});

    setTimeout(banners,200)

    function banners(){
        var sPageURL = window.location.search.substring(1);
        console.log(sPageURL);
        var movieid = sPageURL.split("=")[1];
        console.log(movieid); 
        for(var i=0;i<moviejson.banner.length;i++){
            if(movieid == moviejson.banner[i].id){
                $("#banners").append(`<div class="content">
                <h2><span>${moviejson.banner[i].title}</span></h2>
                <p>${moviejson.banner[i].brief}</p>
                    <a href="#" class="play" onclick="toggle()"><img src="../movies/play.png" alt="Watch Now">Watch Now</a>
            </div>`);
            $('#banners').css('background-image', 'url(' + moviejson.banner[i].bg + ')');
            }
    
    }
    }