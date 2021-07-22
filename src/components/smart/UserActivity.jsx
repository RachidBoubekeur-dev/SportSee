import { useContext } from 'react';
import { IdContext } from '../context/MyContext.jsx';
import useAxios from '../hook/useAxios';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts';
import '../../styles/css/smart/UserActivity.css';

const UserActivity = () => {
    const userId = useContext(IdContext);
    const userActivity = useAxios(`user/${userId}/activity`);
    if (userActivity) {
        for (let i = 0; i < userActivity.sessions.length; i++) {
            const day = userActivity.sessions[i].day.toString();
            if (day.charAt(0) === '0')
                userActivity.sessions[i].day = day.slice(1, 2);
            else userActivity.sessions[i].day = day.slice(0, 2);
        }
    }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <p>{`${payload[0].value}kg`}</p>
                    <p>{`${payload[1].value}Kcal`}</p>
                </div>
            );
        }

        return null;
    };
    return (
        <article className="UserActivity">
            <h4>Activité quotidienne</h4>
            <ul>
                <li>Poids (kg)</li>
                <li>Calories brûlées (kCal)</li>
            </ul>
            {userActivity ? (
                <ResponsiveContainer width={'92%'} height={'65%'}>
                    <BarChart data={userActivity.sessions} barGap={9}>
                        <XAxis dataKey="day" dy={12.5} stroke={'#9B9EAC'} />
                        <YAxis
                            dataKey="calories"
                            tickCount={3}
                            orientation="right"
                            dx={17}
                            stroke={'#9B9EAC'}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <CartesianGrid stroke="#DEDEDE" strokeDasharray="4 4" />
                        <Bar
                            dataKey="kilogram"
                            id="barkg"
                            fill="#000"
                            barSize={7}
                            radius={[3.5, 3.5, 0, 0]}
                            animationBegin={2800}
                            animationDuration={1600}
                        />
                        <Bar
                            dataKey="calories"
                            id="barkCal"
                            fill="#E60000"
                            barSize={7}
                            radius={[3.5, 3.5, 0, 0]}
                            animationBegin={3000}
                            animationDuration={1900}
                        />
                    </BarChart>
                </ResponsiveContainer>
            ) : (
                <div>
                    <p>Charement...</p>
                </div>
            )}
        </article>
    );
};

export default UserActivity;
