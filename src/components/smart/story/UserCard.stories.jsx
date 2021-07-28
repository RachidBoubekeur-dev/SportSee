import { IdContext } from '../../context/MyContext.jsx';
import UserCard from '../UserCard';

export default {
    title: 'smart/UserCard',
    component: UserCard,
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
        category: {
            options: {
                All: 'All',
                Calories: '0',
                Proteines: '1',
                Glucides: '2',
                Lipides: '3',
            },
            defaultValue: 'All',
            description: 'Category available',
            control: { type: 'radio' },
        },
    },
};

export const Card = ({ user, category }) => {
    const divStyle = {
        with: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
    };
    return (
        <div style={divStyle}>
            <IdContext.Provider value={user}>
                {category === 'All' ? (
                    [0, 1, 2, 3].map((i) => <UserCard key={i} category={i} />)
                ) : (
                    <UserCard category={category} />
                )}
            </IdContext.Provider>
        </div>
    );
};
