import useAxios from './hook/useAxios';
import PropTypes from 'prop-types';
import '../styles/css/Dashboard.css';

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
