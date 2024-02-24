// Footer.js
import React from 'react';
import '../CSS VF/style.css'; // Assurez-vous que le chemin vers votre fichier CSS est correct

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <img src="Photos/General/Logo_TEDx.png" alt="Logo" className="logo" />
                </div>

                <div className="footer-section">
                    <ul className="footer-links">
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">L'association</a></li>
                        <li><a href="#">Les éditions précédentes</a></li>
                        <li><a href="#">A propos de TEDx</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <ul className="footer-links">
                        <li><a href="#"><em>Billeterie 2024</em></a></li>
                        <li><a href="#">Nous contacter</a></li>
                        <li><a href="#">Mentions légales</a></li>
                        <li><a href="#">Politique de confidentialité</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <ul className="social-network">
                        <li><a href="#"><img src="Photos/General/Icone_SN/facebook.png" alt="Facebook" /></a></li>
                        <li><a href="#"><img src="Photos/General/Icone_SN/instagram.png" alt="Instagram" /></a></li>
                        <li><a href="#"><img src="Photos/General/Icone_SN/linkedin.png" alt="LinkedIn" /></a></li>
                        <li><a href="#"><img src="Photos/General/Icone_SN/gmail.png" alt="Gmail" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-text">
                <p>TEDxMinesAlès © 2024, tous droits réservés. Cet événement TEDx indépendant est exploité sous licence de TED.
                    Site internet réalisé par TEDxMinesAlès</p>
            </div>
        </footer>
    );
}

export default Footer;
