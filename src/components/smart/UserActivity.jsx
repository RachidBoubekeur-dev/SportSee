import { useContext } from 'react';
import { IdContext } from '../context/MyContext.jsx';
import useAxios from '../hook/useAxios';

const UserActivity = () => {
    const userId = useContext(IdContext);
    console.log(userId);
    const userActivity = useAxios(`user/${userId}/activity`);
    console.log(userActivity);
    return (
        <article>
            <p>UserActivity</p>
        </article>
    );
};

export default UserActivity;
