const hamburger = () => {
    const main_ham = document.getElementsByClassName("hamburger-menu")[0];
    
    main_ham.onclick = () =>{
        if(main_ham.firstElementChild.classList.contains("openham")){
            main_ham.firstElementChild.classList.remove("openham");
            main_ham.firstElementChild.classList.add("hamburger-main");
            document.getElementById("hamburgeroptions").style.display = "none";
            document.getElementsByClassName("showcasesection")[0].style.filter = "";
            document.getElementsByTagName("footer")[0].style.filter = ""
            document.body.style.overflowY = "";
        }
        else{
            main_ham.firstElementChild.classList.add("openham");
            main_ham.firstElementChild.classList.remove("hamburger-main");
            document.getElementById("hamburgeroptions").style.display = "inline";
            document.getElementsByClassName("showcasesection")[0].style.filter = "brightness(0.5)";
            document.getElementsByTagName("footer")[0].style.filter = "brightness(0.5)";
            document.body.style.overflowY = "hidden";
        }
    }
}
hamburger();