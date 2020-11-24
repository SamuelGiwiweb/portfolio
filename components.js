

// FOOTER
class SmFooter extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <footer id="footer">
        <div id="copyright">
            <p>&copy; 2020 Samuel Michelet</p>
        </div>
        <div>
            <p>Suivez-moi...</p>
            <nav class="social-footer">
            <a  href="https://www.linkedin.com/in/samuel-michelet-5b99061a7/" target="_blank" rel="noopener">
                <img src="img/linkedin.svg" alt="logo du réseau social linkedin">
            </a>
                
            </nav>
        </div>
        <div id="footer-list">
            <ul>
                <li><a href="sitemap.html" class="link">Sitemap</a></li>
                <li><a href="#modal-rgpd" class="link">RGPD</a></li>
                <li><a href="#modal-mentions" class="link">Mentions légales</a></li>
            </ul>
        </div>
    </footer>
    <div data-ml-modal id="modal-mentions">
            <a href="#!" type="help" name="ouvre une boite de dialogue" role="dialog" alt="lien pour ouvrir une modale"><div class="modal-overlay"> </div></a>
            <div class="modal-dialog modal-dialog-lg">
                <a href="#!" class="modal-close">&times;</a>
                <h3>Mentions légales</h3>
                <div class="modal-content newspaper">
                    <p>identité: Samuel Michelet.<br>contact: samuel@giwiweb.net<br>site héberger par: <a href="https://www.netlify.com/">netlify</a><br>adresse: Netlify, Inc., located at 2325 3rd Street, Suite 296, San Francisco, California 94107 </p>
                </div>
            </div>
        </div>

        <div data-ml-modal id="modal-rgpd">
            <a href="#!" role="dialog" alt="lien pour ouvrir une modale" class="modal-overlay"></a>
            <div class="modal-dialog modal-dialog-lg">
                <a href="#!" class="modal-close">&times;</a>
                <h3>RGPD</h3>
                <div class="modal-content newspaper">
                    <p>je vous rassure tout de suite vos données personnelles n’encourent aucun risque puisque ce site n’utilise aucune de vos données, ni cookies ni aucun outils analytics. La meilleur façon d’avoir un web libre c’est de respecter les internautes, ceci n’est pas un engagement mais un mode de vie.</p>
                </div>
            </div>
        </div>
        `
    }
}

window.customElements.define('sm-footer', SmFooter);





