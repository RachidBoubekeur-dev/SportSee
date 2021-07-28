import { IdContext } from '../../context/MyContext.jsx';
import UserScore from '../UserScore';

export default {
    title: 'smart/UserScore',
    component: UserScore,
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

export const Score = ({ user }) => {
    const divStyle = {
        display: 'flex',
        width: '100%',
        maxWidth: '1000px',
        height: '270px',
    };
    return (
        <div style={divStyle}>
            <IdContext.Provider value={user}>
                <UserScore />
            </IdContext.Provider>
        </div>
    );
};
