const footerputer = (section_id) =>{
    let html = `
    <nav>
        <ul id="footer">
            <li>Tesla Clone</li>
            <li>Privacy & Legal</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>Get Newsletter</li>
            <li>News</li>
            <li>Forums</li>
            <li>Locations</li>
        </ul>
    </nav>
    `
    document.getElementById(section_id).innerHTML += html;
}
footerputer("contentoffooter");