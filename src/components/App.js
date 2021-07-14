import { useState, useEffect } from 'react';
import '../styles/css/App.css';
import Header from './Header';
import NavLeft from './NavLeft';
import imgLoading from '../assets/loading.gif';
import logo from '../assets/logo2.png';

const App = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3500);
    }, []);

    return (
        <main className="App">
            {loading && (
                <div className="divLoading">
                    <p>
                        <img src={logo} alt="Logo SportSee" />
                    </p>
                    <span>
                        <img src={imgLoading} alt="Chargement de la page" />
                    </span>
                </div>
            )}
            <Header />
            <NavLeft />
        </main>
    );
};

export default App;
