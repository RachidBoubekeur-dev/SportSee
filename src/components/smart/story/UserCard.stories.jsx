import { IdContext } from '../../context/MyContext.jsx';
import UserCard from '../UserCard';

export default {
    title: 'smart/UserCard',
    component: UserCard,
};

export const Default = () => {
    const divStyle = {
        with: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
    };
    return (
        <div style={divStyle}>
            <IdContext.Provider value={'18'}>
                {[0, 1, 2, 3].map((i) => (
                    <UserCard key={i} category={i} />
                ))}
            </IdContext.Provider>
        </div>
    );
};
