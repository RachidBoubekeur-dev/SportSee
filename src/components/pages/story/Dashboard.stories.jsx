import { IdContext } from '../../context/MyContext.jsx';
import Dashboard from '../Dashboard';

export default {
    title: 'pages/Dashboard',
    component: Dashboard,
    argTypes: {
        user: {
            options: {
                Karl: '12',
                Cecilia: '18',
            },
            defaultValue: '12',
            description: 'Default user on SportSee',
            control: { type: 'radio' },
        },
    },
};

export const Default = ({ user }) => {
    const divStyle = {
        marginLeft: '-7em',
    };
    return (
        <div style={divStyle}>
            <IdContext.Provider value={user}>
                <Dashboard />
            </IdContext.Provider>
        </div>
    );
};
