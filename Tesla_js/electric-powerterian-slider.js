const image_slider = document.getElementById("parts_image");
const image_slider_info = document.getElementById("parts_image_content");
let count = 0;
const SliderPusher = () =>{
    if(count < 2){
        image_slider.scrollTo(image_slider.offsetWidth * count, 0);
        image_slider_info.children[count].style.borderTopStyle = "none";
        image_slider_info.children[count].style.border = "groove";
        image_slider_info.children[count].style.borderColor = "black";
        
        
        if(count > 0){
            image_slider_info.children[count - 1].style.border = "none";
            image_slider_info.children[count - 1].style.borderTopStyle = "groove";
            image_slider_info.children[count - 1].style.borderTopColor = "black";
            
        }

        count += 1;

    }
    else{
        
        image_slider_info.children[count - 1].style.border = "none";
        image_slider_info.children[count - 1].style.borderTopStyle = "groove";
        image_slider_info.children[count - 1].style.borderTopColor = "black";
        count = 0;
    }

}


const sliderofpowerterian = () =>{
    setInterval(SliderPusher, 2000)
    
}
sliderofpowerterian();