import { IdContext } from '../../context/MyContext.jsx';
import UserActivity from '../UserActivity';

export default {
    title: 'smart/UserActivity',
    component: UserActivity,
};

export const Default = () => {
    return (
        <IdContext.Provider value={'18'}>
            <UserActivity />
        </IdContext.Provider>
    );
};
