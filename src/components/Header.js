import '../styles/css/Header.css';
import logo from '../assets/logo2.png';

const Header = () => {
    return (
        <header>
            <p>
                <img src={logo} alt="Logo SportSee" />
            </p>

            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
