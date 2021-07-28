import { IdContext } from '../../context/MyContext.jsx';
import UserPerform from '../UserPerform';

export default {
    title: 'smart/UserPerform',
    component: UserPerform,
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

export const Perform = ({ user }) => {
    const divStyle = {
        display: 'flex',
        width: '100%',
        maxWidth: '1000px',
        height: '270px',
    };
    return (
        <div style={divStyle}>
            <IdContext.Provider value={user}>
                <UserPerform />
            </IdContext.Provider>
        </div>
    );
};
