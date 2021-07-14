import '../styles/css/NavLeft.css';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';

const NavLeft = () => {
    return (
        <aside className="NavLeft">
            <nav>
                <ul>
                    <li>
                        <img src={icon1} alt="Icône yoga" />
                    </li>
                    <li>
                        <img src={icon2} alt="Icône piscine" />
                    </li>
                    <li>
                        <img src={icon3} alt="Icône vélo" />
                    </li>
                    <li>
                        <img src={icon4} alt="Icône musculation" />
                    </li>
                </ul>
            </nav>
            <p>Copiryght, SportSee {new Date().getFullYear()}</p>
        </aside>
    );
};

export default NavLeft;
