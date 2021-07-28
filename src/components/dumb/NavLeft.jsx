import '../../styles/css/dumb/NavLeft.css';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';

/**
 * ### Dumb component
 */
const NavLeft = () => {
    return (
        <aside className="NavLeft">
            <nav>
                <ul>
                    <li tabIndex="0">
                        <img src={icon1} alt="Icône yoga" />
                    </li>
                    <li tabIndex="0">
                        <img src={icon2} alt="Icône piscine" />
                    </li>
                    <li tabIndex="0">
                        <img src={icon3} alt="Icône vélo" />
                    </li>
                    <li tabIndex="0">
                        <img src={icon4} alt="Icône musculation" />
                    </li>
                </ul>
            </nav>
            <p>Copiryght, SportSee {new Date().getFullYear()}</p>
        </aside>
    );
};

export default NavLeft;
