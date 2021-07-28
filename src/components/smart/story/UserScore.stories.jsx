import { IdContext } from '../../context/MyContext.jsx';
import UserScore from '../UserScore';

export default {
    title: 'smart/UserScore',
    component: UserScore,
};

export const Default = () => {
    const divStyle = {
        display: 'flex',
        width: '60%',
        height: '210px',
    };
    return (
        <div style={divStyle}>
            <IdContext.Provider value={'18'}>
                <UserScore />
            </IdContext.Provider>
        </div>
    );
};
