let ModelInterior = (title, image_url, image_alt) => {
    return `
    <div id="modelinterior">
    <div id="inter_title">
        <strong>${title}</strong>
    </div>
    <img src="${image_url}" alt="${image_alt}">
    </div>
    `
}