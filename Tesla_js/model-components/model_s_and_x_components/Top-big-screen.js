class bigScreenComponent{
    titleComponent = (title, short_title) =>{
        return `
        <div id="top_model">
        <strong>${title}</strong>
        <small>${short_title}</small>
        </div>      
        `
    }
    titleInfoComponent = (model_info_arr) => {
        let buildTemplate = "";
        for(let miter = 0; miter < model_info_arr.length; miter++){
            buildTemplate += `
            <div>
            <strong>${model_info_arr[miter].info_metric_value}</strong>
            <small>${model_info_arr[miter].info_metric_unit}</small>
            </div>            
            `
        }
        return buildTemplate;
    }
    OrderButtonComponent = (text) =>{
        return `
        <div>
            <button>${text}</button>
        </div>
        `
    }
    CreateImage = (image_url, alt_text) => {
        return `
        <img src="${image_url}" alt="${alt_text}">
        `
    }
    buildBigScreen_main = (dataObj) => {
        return `
        <div id="modelshowcase">
            <div id="modelinfo">
                ${this.titleComponent(dataObj.title, dataObj.ShortDescription)}
    
                <div id="top_model_info">
                    ${this.titleInfoComponent(dataObj.modelInfo)}
                    ${this.OrderButtonComponent(dataObj.buttonText)}
                </div>
            </div>
    
                ${this.CreateImage(dataObj.imageData.url, dataObj.imageData.altText)};
    
        </div>
        
        
        `
    }
}