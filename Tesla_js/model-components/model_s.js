let modelSPage = () => {
    let html =""
    const BigScreen = new bigScreenComponent();
    html += BigScreen.buildBigScreen_main({
        "title":"Model S",
        "ShortDescription":"Plaid",
        "modelInfo":[
            {"info_metric_value":"390mi","info_metric_unit":"Range (est)"},
            {"info_metric_value":"1.99s","info_metric_unit":"0-60mph*"},
            {"info_metric_value":"200mph","info_metric_unit":"Top Speed*"},
            {"info_metric_value":"1,020mph","info_metric_unit":"Peak Power"},
        ],
        "buttonText":"Order Now",
        "imageData":{"url":"./Tesla_Images/tesla-model-s-plaid.jpg", "altText":"Model S Plaid"},
    });
    html += ModelInterior("All-New Interior","./Tesla_Images/model-s-interior.jpg","Model S Interior");
    return html;
}

let RenderonPage = (what_to_render, where_to_render) => {
    let render_pos = document.getElementById(where_to_render);
    render_pos.innerHTML = what_to_render + render_pos.innerHTML;

}

RenderonPage(modelSPage(),"MainContent");