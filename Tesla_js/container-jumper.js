const holdcontentsection = document.getElementsByClassName("showcasesection")[0];
const storeContentChilds = holdcontentsection.children;
const understicky = document.getElementsByClassName("understicky");
let lastJump = 0;

window.onscroll = () => {

    const getBoundingClientRect = Math.abs(holdcontentsection.getBoundingClientRect().y);
    const scrolltoabs = (window.innerWidth > 700) ? getBoundingClientRect / 7 : getBoundingClientRect / 6;

    if(scrolltoabs < 100){

        if(scrolltoabs < 20){
            understicky[0].style.filter = "opacity(1)";
        }
        else if(scrolltoabs > 20 && scrolltoabs < 40){
            understicky[0].style.filter = "opacity(0.5)";
        }
        else if(scrolltoabs > 40 && scrolltoabs < 60){
            understicky[0].style.filter = "opacity(0.1)";
        }
        else if(scrolltoabs > 60 && scrolltoabs <= 100){
            understicky[0].style.filter = "opacity(0.0)";
        }

        if(scrolltoabs > lastJump && scrolltoabs >= 60){
            lastJump = storeContentChilds[0].nextElementSibling.offsetTop;
            window.scrollTo(0,storeContentChilds[0].nextElementSibling.offsetTop);
        }
        else if(scrolltoabs < lastJump && scrolltoabs <= 80){
            lastJump = storeContentChilds[0].offsetTop;
            window.scrollTo(0,storeContentChilds[0].offsetTop);
        }

    }

    else if(scrolltoabs >= 100 && scrolltoabs < 200){

        if(scrolltoabs < 120){
            understicky[1].style.filter = "opacity(1)";
        }
        else if(scrolltoabs > 120 && scrolltoabs < 140){
            understicky[1].style.filter = "opacity(0.5)";
        }
        else if(scrolltoabs > 140 && scrolltoabs < 160){
            understicky[1].style.filter = "opacity(0.1)";
        }
        else if(scrolltoabs > 160 && scrolltoabs <= 200){
            understicky[1].style.filter = "opacity(0.0)";
        }

        if(scrolltoabs > lastJump && scrolltoabs >= 160){
            lastJump = storeContentChilds[1].nextElementSibling.offsetTop;
            window.scrollTo(0,storeContentChilds[1].nextElementSibling.offsetTop);
        }
        else if(scrolltoabs < lastJump && scrolltoabs >= 180){
            lastJump = storeContentChilds[1].offsetTop;
            window.scrollTo(0,storeContentChilds[1].offsetTop);
        }
        
    }

    else if(scrolltoabs >= 200 && scrolltoabs < 300){

        if(scrolltoabs < 240){
            understicky[2].style.filter = "opacity(1)";
        }
        else if(scrolltoabs > 240 && scrolltoabs < 260){
            understicky[2].style.filter = "opacity(0.5)";
        }
        else if(scrolltoabs > 260 && scrolltoabs < 280){
            understicky[2].style.filter = "opacity(0.1)";
        }
        else if(scrolltoabs > 280 && scrolltoabs <= 300){
            understicky[2].style.filter = "opacity(0.0)";
        }

        if(scrolltoabs > lastJump && scrolltoabs >= 260){
            lastJump = storeContentChilds[1].nextElementSibling.offsetTop;
            window.scrollTo(0,storeContentChilds[2].nextElementSibling.offsetTop);
        }
        else if(scrolltoabs < lastJump && scrolltoabs >= 280){
            lastJump = storeContentChilds[2].offsetTop;
            window.scrollTo(0,storeContentChilds[2].offsetTop);
        }
        
    }

    else if(scrolltoabs >= 300 && scrolltoabs < 400){

        if(scrolltoabs > 340 && scrolltoabs < 360){
            understicky[3].style.filter = "opacity(0.5)";
        }
        else if(scrolltoabs > 360 && scrolltoabs < 380){
            understicky[3].style.filter = "opacity(0.1)";
        }
        else if(scrolltoabs > 380 && scrolltoabs <= 400){
            understicky[3].style.filter = "opacity(0.0)";
        }
        else{
            understicky[3].style.filter = "opacity(1)";
        }

        if(scrolltoabs > lastJump && scrolltoabs >= 360){
            lastJump = storeContentChilds[3].nextElementSibling.offsetTop;
            window.scrollTo(0,storeContentChilds[3].nextElementSibling.offsetTop);
        }
        else if(scrolltoabs < lastJump && scrolltoabs >= 380){
            lastJump = storeContentChilds[3].offsetTop;
            window.scrollTo(0,storeContentChilds[3].offsetTop);
        }
        
    }

    else if(scrolltoabs >= 400 && scrolltoabs < 500){

        if(scrolltoabs > 460 && scrolltoabs < 470){
            understicky[4].style.filter = "opacity(0.5)";
        }
        else if(scrolltoabs > 470 && scrolltoabs < 480){
            understicky[4].style.filter = "opacity(0.1)";
        }
        else if(scrolltoabs > 480 && scrolltoabs <= 500){
            understicky[4].style.filter = "opacity(0.0)";
        }
        else{
            understicky[4].style.filter = "opacity(1)";
        }

        if(scrolltoabs > lastJump && scrolltoabs >= 460){
            lastJump = storeContentChilds[4].nextElementSibling.offsetTop;
            window.scrollTo(0,storeContentChilds[4].nextElementSibling.offsetTop);
        }
        else if(scrolltoabs < lastJump && scrolltoabs >= 480){
            lastJump = storeContentChilds[4].offsetTop;
            window.scrollTo(0,storeContentChilds[4].offsetTop);
        }
        
    }

    else if(scrolltoabs >= 500 && scrolltoabs < 600){

        if(scrolltoabs > 560 && scrolltoabs < 570){
            understicky[5].style.filter = "opacity(0.5)";
        }
        else if(scrolltoabs > 570 && scrolltoabs < 580){
            understicky[5].style.filter = "opacity(0.1)";
        }
        else if(scrolltoabs > 580 && scrolltoabs <= 600){
            understicky[5].style.filter = "opacity(0.0)";
        }
        else{
            understicky[5].style.filter = "opacity(1)";
        }

        if(scrolltoabs > lastJump && scrolltoabs >= 560){
            lastJump = storeContentChilds[5].nextElementSibling.offsetTop;
            window.scrollTo(0,storeContentChilds[5].nextElementSibling.offsetTop);
        }
        else if(scrolltoabs < lastJump && scrolltoabs >= 580){
            lastJump = storeContentChilds[5].offsetTop;
            window.scrollTo(0,storeContentChilds[5].offsetTop);
        }
    
    }
    else if(scrolltoabs >= 600 && scrolltoabs < 700){
        console.log("Seventh Box");

        if(scrolltoabs > lastJump){
            console.log("Going Down - No Call Did");
            
        }
    }
    lastJump = scrolltoabs;
}