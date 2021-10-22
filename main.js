let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


var latestjson={};
$.getJSON("latestreleases.json", function(latestreleases){
    console.log(latestreleases);
    latestjson=latestreleases;});

    var comingjson={};
$.getJSON("comingsoon.json", function(comingsoon){
    console.log(comingsoon);
    comingjson=comingsoon;});

    var topjson={};
    $.getJSON("toprated.json", function(toprated){
        console.log(toprated);
        topjson=toprated;});

    setTimeout(latestReleases,200);
    setTimeout(comingSoon,200);
    setTimeout(topRated,200);


window.addEventListener('scroll',()=> {
    header.classList.toggle('shadow',window.scrollY > 0);
});

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   
  });

  

function latestReleases(){
    for(var i=0;i<latestjson.latest.length;i++){
  $("#latestreleases").append(`<div class="box">
  <div class="box-img">
      <img src=${latestjson.latest[i].image} alt="">
  </div>
  <div class="details">
  <span class="movie-title">${latestjson.latest[i].title}</span>
  <p class="movie-desc">Genre: ${latestjson.latest[i].desc}</p>
 <a class="movie-button" href="../../movies/moviepage.html?id=${latestjson.latest[i].id}">Watch</a>
 </div>
  <span> <i class='bx bxs-star' id="star"></i> ${latestjson.latest[i].star} <i class='bx bxs-time' id="clock"></i> ${latestjson.latest[i].time} min </span>
</div>`);
}
}
 
 var swiper =null;
function comingSoon(){
     
    for(var i=0;i<comingjson.coming.length;i++){
        $("#comingsoon").append(`<div class="swiper-slide box">
                    <div class="box-img">
                        <img src=${comingjson.coming[i].image} alt="">
                    </div>
                    <div class="details">
                        <span class="movie-title">${comingjson.coming[i].title}</span>
                        <p class="movie-desc">Genre: ${comingjson.coming[i].desc}</p>
                       <a class="movie-button" href="../../movies/moviepage.html?id=${comingjson.coming[i].id}">Watch</a>
                       </div>
                    <span> <i class='bx bxs-star' id="star"></i> ${comingjson.coming[i].star} <i class='bx bxs-time' id="clock"></i> ${comingjson.coming[i].time} min</span>
                </div>`);
    }
    addSwiper(".coming-container",100000);
    
}
function topRated(){
     
    for(var i=0;i<topjson.top.length;i++){
        $("#toprated").append(`<div class="swiper-slide box">
                    <div class="box-img">
                        <img src=${topjson.top[i].image} alt="">
                    </div>
                    <div class="details">
                        <span class="movie-title">${topjson.top[i].title}</span>
                        <p class="movie-desc">Genre: ${topjson.top[i].desc}</p>
                       <a class="movie-button" href="../../movies/moviepage.html?id=${topjson.top[i].id}">Watch</a>
                       </div>
                    <span> <i class='bx bxs-star' id="star"></i> ${topjson.top[i].star} <i class='bx bxs-time' id="clock"></i> ${topjson.top[i].time} min</span>
                </div>`);
    }
    addSwiper(".top-container",100000);
}
    

function addSwiper(containerid,timer){
    swiper = new Swiper(containerid, {
        spaceBetween: 20,
        loop:true,
        autoplay: {
          delay: timer,
          disableOnInteraction: false,
        },
        centeredSlides: true,
        breakpoints: {
          0: {
            slidesPerView: 2,
          },
          568: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          968: {
            slidesPerView: 5,
          },
        },
      });
}




let search = document.getElementById("searchHere");
search.addEventListener("input",function(){  //whenever anything is written in the field this gets triggered
    let searchVal = search.value;
console.log("input fired",searchVal);
let card = document.getElementsByClassName("box");
Array.from(card).forEach(function(element){
  element.style.display="block";
    let cardTxt = element.getElementsByTagName("span")[0].innerText;
    console.log(cardTxt);
    if(cardTxt.startsWith(searchVal)){
        console.log("insert",cardTxt,searchVal);
        element.style.display="block";
    }
    else{
        console.log("hide",cardTxt,searchVal);
        element.style.display="none";
    }
})
var timer = (searchVal!="")?100:100000;
addSwiper(".coming-container",timer);
addSwiper(".top-container",timer);
});
