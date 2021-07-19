import useAxios from '../hook/useAxios.jsx';
import PropTypes from 'prop-types';
import '../../styles/css/pages/Dashboard.css';
import UserActivity from '../smart/UserActivity.jsx';

const Dashboard = (params) => {
    const userData = useAxios('user/12');
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
                    <UserActivity userId={userData.id} />
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
