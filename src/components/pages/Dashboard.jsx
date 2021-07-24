import { useContext } from 'react';
import { IdContext } from '../context/MyContext.jsx';
import useAxios from '../hook/useAxios.jsx';
import UserActivity from '../smart/UserActivity.jsx';
import UserSession from '../smart/UserSession.jsx';
import PropTypes from 'prop-types';
import '../../styles/css/pages/Dashboard.css';

const Dashboard = (params) => {
    const userId = useContext(IdContext);
    const userData = useAxios(`user/${userId}`);
    setTimeout(() => {
        params.setLoading(false);
    }, 3500);
    return (
        <div>
            {userData ? (
                <section className="Dashboard">
                    <h1>
                        Bonjour <span>{userData.userInfos.firstName}</span>
                    </h1>
                    <p>
                        Félicitation ! Vous avez explosé vos objectifs hier 👏
                    </p>
                    <UserActivity />
                    <UserSession />
                </section>
            ) : (
                <div className="DashboardError">
                    <span>👀</span>
                    <span>👃🏻</span>
                    <span>👅</span>
                    <span>🦿</span>
                    <span>🦿</span>
                    <span>🦾</span>
                    <span>🦾</span>
                </div>
            )}
        </div>
    );
};

Dashboard.propTypes = {
    setLoading: PropTypes.func.isRequired,
};

export default Dashboard;
