import { useContext } from 'react';
import { IdContext } from '../context/MyContext.jsx';
import useAxios from '../hook/useAxios.jsx';
import UserActivity from '../smart/UserActivity.jsx';
import UserSession from '../smart/UserSession.jsx';
import UserPerform from '../smart/UserPerform.jsx';
import UserScore from '../smart/UserScore.jsx';
import UserCard from '../smart/UserCard.jsx';
import '../../styles/css/pages/Dashboard.css';

const Dashboard = () => {
    const userId = useContext(IdContext);
    const userData = useAxios(`user/${userId}`);
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
                    <UserPerform />
                    <UserScore />
                    <aside>
                        <UserCard category={0} />
                        <UserCard category={1} />
                        <UserCard category={2} />
                        <UserCard category={3} />
                    </aside>
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

export default Dashboard;
