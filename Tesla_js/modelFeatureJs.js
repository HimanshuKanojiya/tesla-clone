const ModelFeatureSliderFunction = () => {
    let count = 0;
    const max_video = 4;
    const videoParent = document.getElementById("teslaFeaturesVideoScroll");
    const videoinfoParent = document.getElementById("teslaFeaturesScrollInfo");
    return slider = () => {
        if(count < max_video){
            videoParent.scrollTo(videoParent.offsetWidth * count, 0);
            videoParent.children[count].currentTime = 0;
            videoParent.children[count].play();
            videoinfoParent.children[count].style.color = "black";
            videoinfoParent.children[count].style.borderStyle = "groove";
            videoinfoParent.children[count].style.borderColor = "black";
            
            

            if(count > 0){
                videoinfoParent.children[count - 1].style.color = "#757575";
                videoinfoParent.children[count - 1].style.borderStyle = "none";
                videoinfoParent.children[count - 1].style.borderTopStyle = "groove";
                videoinfoParent.children[count - 1].style.borderTopColor = "#757575";

            }

            count+=1;
            
        }
        else{
            videoinfoParent.children[count - 1].style.color = "#757575";
            videoinfoParent.children[count - 1].style.borderStyle = "none";
            videoinfoParent.children[count - 1].style.borderTopStyle = "groove";
            videoinfoParent.children[count - 1].style.borderTopColor = "#757575";
            count = 0;
        }
    }
}

const TimerSetterSlider = () => {
    const ModelSlider = ModelFeatureSliderFunction();
    setInterval(ModelSlider,7000);
}
TimerSetterSlider();

