const dataforsliders = [
    {
        "Header":"17” Cinematic Display",
        "Content":"With 2200x1300 resolution, ultra bright, true colors and exceptional responsiveness, the new center display is the best screen to watch anywhere.",
    },
    {
        "Header":"Focus on Driving",
        "Content":"The Ultimate focus on driving: no stalks, no shifting. Model S is the best car to drive, and the best car to be driven in",
    },
    {
        "Header":"Perfect Environment",
        "Content":"Clean, powerful yet invisible cabin conditioning. Tri-zone temperature controls, ventilated front seats and HEPA filtration come standard",
    },
    {
        "Header":"Redesigned Second Row",
        "Content":"Seating for three adults, with extra legroom, headroom and a stowable armrest with integerated storage and wireless charging."
    }

]


var count_of_slide = 0;
var lastelem = 0;
const image_row = document.getElementById("image_row");
const image_stats_point = document.getElementById("dots");
const titledescription = document.getElementById("info_of_feature");

const hold_slider = () =>{
    if(count_of_slide < 4){
        image_row.scrollTo(parseInt(image_row.offsetWidth) * parseInt(count_of_slide), 0);
        titledescription.children[0].innerHTML = dataforsliders[count_of_slide].Header;
        titledescription.children[1].innerHTML = dataforsliders[count_of_slide].Content;
        image_stats_point.children[count_of_slide].style.background = "white";
        
        if(count_of_slide > 0){
            image_stats_point.children[count_of_slide - 1].style.background = "transparent";
        }
        count_of_slide+=1;
        
    }
    else{
        image_stats_point.children[count_of_slide - 1].style.background = "transparent";
        count_of_slide = 0;
        lastelem = 0;
        
    }

}

const autoslider = () => {
    setInterval(hold_slider,2000);

}

autoslider();