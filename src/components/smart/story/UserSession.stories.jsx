import { IdContext } from '../../context/MyContext.jsx';
import UserSession from '../UserSession';

export default {
    title: 'smart/UserSession',
    component: UserSession,
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
                <UserSession />
            </IdContext.Provider>
        </div>
    );
};
