import { IdContext } from '../../context/MyContext.jsx';
import UserSession from '../UserSession';

export default {
    title: 'smart/UserSession',
    component: UserSession,
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

export const Session = ({ user }) => {
    const divStyle = {
        display: 'flex',
        width: '100%',
        maxWidth: '1000px',
        height: '270px',
    };
    return (
        <div style={divStyle}>
            <IdContext.Provider value={user}>
                <UserSession />
            </IdContext.Provider>
        </div>
    );
};
