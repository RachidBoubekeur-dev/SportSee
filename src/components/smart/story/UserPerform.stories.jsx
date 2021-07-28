import { IdContext } from '../../context/MyContext.jsx';
import UserPerform from '../UserPerform';

export default {
    title: 'smart/UserPerform',
    component: UserPerform,
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
                <UserPerform />
            </IdContext.Provider>
        </div>
    );
};
