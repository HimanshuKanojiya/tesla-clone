const buttonListeners = ({OpenbuttonId,OpenContentSection, CloseButton, CloseContentSection}) => {
    return () => {
        console.log("Wokrng");
        OpenbuttonId.onclick = () =>{
            OpenContentSection.style.display = "grid";
            OpenbuttonId.style.borderColor = "white";
            CloseButton.style.borderColor = "gray"
            CloseContentSection.style.display = "none";
        }
    }
}

const buttonListenersData = [
    {
        OpenbuttonId:document.getElementsByClassName("ModelSSpecsButton")[0],
        OpenContentSection:document.getElementById("ModelSSpecsPlaidInfo"),
        CloseButton:document.getElementsByClassName("ModelSSpecsButton")[1],
        CloseContentSection:document.getElementById("ModelSSpecsLongRangeInfo"),
    },
    {
        OpenbuttonId:document.getElementsByClassName("ModelSSpecsButton")[1],
        OpenContentSection:document.getElementById("ModelSSpecsLongRangeInfo"),
        CloseButton:document.getElementsByClassName("ModelSSpecsButton")[0],
        CloseContentSection:document.getElementById("ModelSSpecsPlaidInfo"),
    }
]

const CallActionA = buttonListeners(buttonListenersData[0]);
const CallActionB = buttonListeners(buttonListenersData[1]);
CallActionA();
CallActionB();