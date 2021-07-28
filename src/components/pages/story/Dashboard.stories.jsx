import { IdContext } from '../../context/MyContext.jsx';
import Dashboard from '../Dashboard';

export default {
    title: 'pages/Dashboard',
    component: Dashboard,
};

export const Default = () => {
    return (
        <IdContext.Provider value={'18'}>
            <Dashboard />
        </IdContext.Provider>
    );
};
