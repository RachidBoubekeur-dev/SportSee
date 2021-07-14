import '../styles/css/Header.css';
import logo from '../assets/logo2.png';

const Header = () => {
    return (
        <header>
            <p tabIndex="0">
                <img src={logo} alt="Logo SportSee" />
            </p>

            <nav>
                <ul>
                    <li tabIndex="0">Accueil</li>
                    <li tabIndex="0">Profil</li>
                    <li tabIndex="0">Réglage</li>
                    <li tabIndex="0">Communauté</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
