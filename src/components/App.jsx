import { useState } from 'react';
import { IdContext } from './context/MyContext.jsx';
import Header from './dumb/Header.jsx';
import NavLeft from './dumb/NavLeft.jsx';
import Dashboard from './pages/Dashboard.jsx';
import imgLoading from '../assets/loading.gif';
import logo from '../assets/logo2.png';
import '../styles/css/App.css';

const App = () => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 3500);
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
            <IdContext.Provider value={'12'}>
                <Dashboard />
            </IdContext.Provider>
        </main>
    );
};

export default App;
