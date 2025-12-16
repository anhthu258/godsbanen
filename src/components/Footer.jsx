import "../Footer.css";

function Footer({ variant = 'default', logoVariant = 'default' }) {
    const logoByVariant = {
        default: './images/g-logo-white.png',
        red: './images/g-logo-red.png',
    };
    const logoSrc = logoByVariant[logoVariant] || logoByVariant.default;
    return (    
        <footer className={`footer footer--${variant}`}>
            <div>
                <p>GODSBANEN</p>
                <p>
                   <span>Karen Wegeners Gade 8</span>
                   <span>DK-8000 Aarhus C</span>
                   <span>CVR: 34647690</span>
                </p>
                <a href="https://godsbanen.dk/praktisk/">Kontakt os</a>
                <a href="https://godsbanen.dk/tilmeld-nyhedsbrev/">Tilmeld nyhedsbrev</a>
                <a href="https://godsbanen.dk/privatlivs-politik/">Privatlivspolitik</a>
            </div>
            <div className="logo-footer">
                <img src={logoSrc} alt="Godsbanen Logo" />
            </div>
            <div className="follow">
                <aside>
                    <p>FØLG GODSBANEN</p>
                    <div>
                        <a href="https://facebook.com/godsbanen" target="_blank" rel="noopener noreferrer">
                            <img src="./images/facebook-ikon.png" alt="Facebook" />
                        </a>
                        <a href="https://flickr.com/godsbanen" target="_blank" rel="noopener noreferrer">
                            <img src="./images/flickr-ikon.png" alt="Flickr" />
                        </a>
                        <a href="https://instagram.com/godsbanen" target="_blank" rel="noopener noreferrer">
                            <img src="./images/instagram-ikon.png" alt="Instagram" />
                        </a>
                    </div>
                </aside>
                <p>
                    Godsbanen er en del af <a href="https://www.kulturhusene.dk">Kulturhusene i Danmark</a> og <a href="https://www.teh.net">Trans Europe Halles</a>.
                </p>
            </div>
        </footer>
    )
}

export default Footer;
