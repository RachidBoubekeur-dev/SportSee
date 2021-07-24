import { useContext } from 'react';
import { IdContext } from '../context/MyContext';
import useAxios from '../hook/useAxios';
import { ResponsiveContainer, LineChart, XAxis, Tooltip, Line } from 'recharts';
import '../../styles/css/smart/UserSession.css';

const UserSession = () => {
    const userId = useContext(IdContext);
    const userSession = useAxios(`user/${userId}/average-sessions`);

    if (userSession) {
        const arrayDay = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        for (let i = 0; i < userSession.sessions.length; i++) {
            let intDay = userSession.sessions[i].day;
            if (Number.isInteger(intDay))
                userSession.sessions[i].day = `${arrayDay[intDay - 1]}`;
        }
    }

    const CustomTooltip = ({ active, payload }) => {
        if (active) {
            return (
                <div className="custom-tooltipSession">
                    <p>{`${payload[0].value}min`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <article className="UserSession">
            <h4>Durée moyenne des sessions</h4>
            {userSession ? (
                <ResponsiveContainer width={'90%'} height={'70%'}>
                    <LineChart data={userSession.sessions}>
                        <Line
                            type="monotone"
                            dataKey="sessionLength"
                            animationBegin={3000}
                            animationDuration={1900}
                        />
                        <XAxis dataKey="day" dy={12.5} stroke="#ffffff9c" />
                        <Tooltip content={<CustomTooltip />} />
                    </LineChart>
                </ResponsiveContainer>
            ) : (
                <div className="loadingState">
                    <p>Chargement...</p>
                </div>
            )}
        </article>
    );
};

export default UserSession;
