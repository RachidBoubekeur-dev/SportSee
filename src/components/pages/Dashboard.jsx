import { useContext } from 'react';
import { IdContext } from '../context/MyContext.jsx';
import useAxios from '../hook/useAxios.jsx';
import UserActivity from '../smart/UserActivity.jsx';
import UserSession from '../smart/UserSession.jsx';
import UserPerform from '../smart/UserPerform.jsx';
import UserScore from '../smart/UserScore.jsx';
import UserCard from '../smart/UserCard.jsx';
import iconError from '../../assets/iconError.png';
import '../../styles/css/pages/Dashboard.css';

const Dashboard = () => {
    const userId = useContext(IdContext);
    const userData = useAxios(`user/${userId}`);
    return (
        <div>
            {userData ? (
                <section className="Dashboard">
                    <h1>
                        Bonjour<span>{userData.userInfos.firstName}</span>
                    </h1>
                    <p>
                        Félicitation ! Vous avez explosé vos objectifs hier 👏
                    </p>
                    <UserActivity />
                    <aside>
                        {[0, 1, 2, 3].map((i) => (
                            <UserCard key={i} category={i} />
                        ))}
                    </aside>
                    <div>
                        <UserSession />
                        <UserPerform />
                        <UserScore />
                    </div>
                </section>
            ) : (
                <div className="DashboardError">
                    <img src={iconError} alt="Erreur" />
                    <p>Server disconnect</p>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
