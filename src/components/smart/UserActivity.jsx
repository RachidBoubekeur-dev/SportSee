import useAxios from '../hook/useAxios';
import PropTypes from 'prop-types';

const UserActivity = (userId) => {
    const userActivity = useAxios(`user/${userId.userId}/activity`);
    console.log(userId.userId);
    console.log(userActivity);
    return (
        <article>
            <p>UserActivity</p>
        </article>
    );
};

UserActivity.propTypes = {
    userId: PropTypes.number.isRequired,
};

export default UserActivity;
