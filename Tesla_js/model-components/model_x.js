let modelXPage = () => {
    let html =""
    const BigScreen = new bigScreenComponent();
    html += BigScreen.buildBigScreen_main({
        "title":"Model X",
        "ShortDescription":"Plaid",
        "modelInfo":[
            {"info_metric_value":"340mi","info_metric_unit":"Range (est)"},
            {"info_metric_value":"2.5s","info_metric_unit":"0-60mph*"},
            {"info_metric_value":"9.9s","info_metric_unit":"1/4 Mile"},
            {"info_metric_value":"1,020hp","info_metric_unit":"Peak Power"},
        ],
        "buttonText":"Order Now",
        "imageData":{"url":"./Tesla_Images/model-x-white-plaid.jpg", "altText":"Model X Plaid"},
    });
    html += ModelInterior("All-New Interior","./Tesla_Images/model-s-interior.jpg","Model X Interior");
    return html;
}

let RenderonPage = (what_to_render, where_to_render) => {
    let render_pos = document.getElementById(where_to_render);
    render_pos.innerHTML = what_to_render + render_pos.innerHTML;

}

RenderonPage(modelXPage(),"MainContent");