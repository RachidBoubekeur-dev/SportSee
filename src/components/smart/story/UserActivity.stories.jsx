import { IdContext } from '../../context/MyContext.jsx';
import UserActivity from '../UserActivity';

export default {
    title: 'smart/UserActivity',
    component: UserActivity,
    argTypes: {
        user: {
            options: {
                Karl: '12',
                Cecilia: '18',
            },
            defaultValue: '12',
            description: 'Default username on SportSee',
            control: { type: 'radio' },
        },
    },
};

export const Activity = ({ user }) => {
    return (
        <IdContext.Provider value={user}>
            <UserActivity />
        </IdContext.Provider>
    );
};
