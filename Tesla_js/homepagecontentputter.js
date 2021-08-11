const dataobj = [
    {
        "ID":1,
        "ModelName":"Model S",
        "Short_Description":`Order Online for <a href="#">Touchless Delivery</a>`,
        "ImageLink":"./Tesla_Images/tesla-homepage-first-image.jpg",  
        "Buttontext1":"Custom Order",
        "Buttontext2":"Existing Inventory",
        "isSecondEnable":"",
        "Customcss":"",
    },
    {
        "ID":2,
        "ModelName":"Model Y",
        "Short_Description":`Order Online for <a href="#">Touchless Delivery</a>`,
        "ImageLink":"./Tesla_Images/tesla-homepage-second-image.jpg",  
        "Buttontext1":"Custom Order",
        "Buttontext2":"Existing Inventory",
        "isSecondEnable":"",
        "Customcss":"",
    },
    {
        "ID":3,
        "ModelName":"Model 3",
        "Short_Description":`Order Online for <a href="#">Touchless Delivery</a>`,
        "ImageLink":"./Tesla_Images/tesla-homepage-third-image.jpg",  
        "Buttontext1":"Custom Order",
        "Buttontext2":"Existing Inventory",
        "isSecondEnable":"",
        "Customcss":"",
    },
    {
        "ID":4,
        "ModelName":"Model X",
        "Short_Description":`Order Online for <a href="#">Touchless Delivery</a>`,
        "ImageLink":"./Tesla_Images/tesla-homepage-fourth-image.jpg",  
        "Buttontext1":"Custom Order",
        "Buttontext2":"Existing Inventory",
        "isSecondEnable":"",
        "Customcss":"",
    },
    {
        "ID":5,
        "ModelName":"Lowest Cost Solar Panels in America",
        "Short_Description":`Money-back guarantee`,
        "ImageLink":"./Tesla_Images/tesla-homepage-fifth-image.jpg",  
        "Buttontext1":"Order Now",
        "Buttontext2":"Learn More",
        "isSecondEnable":"",
        "Customcss":"",
    },
    {
        "ID":6,
        "ModelName":"Solar for New Roofs",
        "Short_Description":`Solar Roof Costs Less Than a New Roof Plus Solar Panels`,
        "ImageLink":"./Tesla_Images/tesla-homepage-sixth-image.jpg",  
        "Buttontext1":"Order Now",
        "Buttontext2":"Learn More",
        "isSecondEnable":"",
        "Customcss":"",
    },
    {
        "ID":7,
        "ModelName":"Accessories",
        "Short_Description":``,
        "ImageLink":"./Tesla_Images/tesla-homepage-seventh-image.jpg",  
        "Buttontext1":"Learn More",
        "Buttontext2":"",
        "isSecondEnable":"none",
        "Customcss":'style="opacity:1;"',
    },

]


const contentForShowcasesection = (ModelName, ShortOrderDescription, link,ButtonTxt1,ButtonTxt2, disablestyle, CustomCSS) => {
    let content = `
    <div id="showcasesectionsub">
            <div id="floatingsticky">
                <div class="understicky">
                    <div id="upper">
                    <strong>${ModelName}</strong>
                    <p>${ShortOrderDescription}</p>
                </div>
                <div id="bottomofsticky">
                    <button ${CustomCSS}>${ButtonTxt1}</button>
                    <button style="display:${disablestyle};">${ButtonTxt2}</button>
                </div>
                
                </div>
            </div>
            <img src=" ${link}" alt="">
        </div>
    `
    return content;
    
}
const putinthePage = (arr_of_data) => {
    const portion = document.getElementsByClassName("showcasesection")[0];
    let htmlcontent = "";
    for(let i = 0; i < arr_of_data.length;i++){
        htmlcontent += contentForShowcasesection(arr_of_data[i].ModelName,arr_of_data[i].Short_Description,
            arr_of_data[i].ImageLink, arr_of_data[i].Buttontext1, arr_of_data[i].Buttontext2, arr_of_data[i].isSecondEnable,
            arr_of_data[i].Customcss);
    }
    portion.innerHTML = htmlcontent;
}

putinthePage(dataobj);