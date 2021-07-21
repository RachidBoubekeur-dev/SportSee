import { useContext } from 'react';
import { IdContext } from '../context/MyContext.jsx';
import useAxios from '../hook/useAxios';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
} from 'recharts';

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
    return (
        <article>
            {userActivity ? (
                <BarChart width={600} height={300} data={userActivity.sessions}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip
                        wrapperStyle={{
                            width: 100,
                            backgroundColor: '#ccc',
                        }}
                    />
                    <Legend
                        width={100}
                        wrapperStyle={{
                            top: 40,
                            right: 20,
                            backgroundColor: '#f5f5f5',
                            border: '1px solid #d5d5d5',
                            borderRadius: 3,
                            lineHeight: '40px',
                        }}
                    />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="kilogram" fill="#000" barSize={10} />
                    <Bar dataKey="calories" fill="#E60000" barSize={10} />
                </BarChart>
            ) : (
                <div>
                    <p>Charement...</p>
                </div>
            )}
        </article>
    );
};

export default UserActivity;
