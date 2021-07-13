import '../styles/css/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className="Header">
            <p>
                <img src={logo} alt="Logo SportSee" />
                SportSee
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
