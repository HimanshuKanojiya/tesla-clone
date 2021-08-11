const contentforheader = (section_id) => {
    const html = `
    <div id="headlogo">
            <h1><a href = "./index.html">TESLA</a></h1>
        </div>
        <div id="primaryhead1">
            <nav id="navigationbar">
                <ul>
                    <li><a href = "./models.html">MODEL S</a></li>
                    <li>MODEL 3</li>
                    <li><a href = "./modelx.html">MODEL X</a></li>
                    <li>MODEL Y</li>
                    <li><a href = "./solarroof.html">SOLAR ROOF</a></li>
                    <li>SOLAR PANELS</li>
                </ul>
            </nav>
        </div>
        <div id="primaryhead2">
            <nav id="navigationbar">
                <ul>
                <li>SHOP</li>
                <li>TESLA ACCOUNT</li>
            </ul>
            </nav>
        </div>
        <div class="hamburger-menu">
            <div class="hamburger-main">
            <div class="hamburger_icon"></div>
            <div class="hamburger_icon"></div>
            <div class="hamburger_icon"></div>
            </div>

            <nav id="hamburgeroptions">
                <ul>
                    <li id="inmob">MODEL S</li>
                    <li id="inmob">MODEL 3</li>
                    <li id="inmob">MODEL X</li>
                    <li id="inmob">MODEL Y</li>
                    <li id="inmob">SOLAR ROOF</li>
                    <li id="inmob">SOLAR PANELS</li>
                    <li>Existing Inventory</li>
                    <li>Used Inventory</li>
                    <li>Trade-in</li>
                    <li>Cybertruck</li>
                    <li>Roadster</li>
                    <li>Semi</li>
                    <li>Charging</li>
                    <li>Powerwall</li>
                    <li>Commercial Energy</li>
                    <li>Utilities</li>
                    <li>Test Drive</li>
                    <li>Find Us</li>
                    <li>Support</li>
                    <li id="inmob">Careers</li>
                    <li id="inmob">Shop</li>
                    <li id="inmob">Tesla Account</li>
                    <li>United States</li>
                </ul>
            </nav>
        </div>
    `
    document.getElementById(section_id).innerHTML += html;
}
contentforheader("headsection");