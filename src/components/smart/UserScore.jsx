import { useContext } from 'react';
import { IdContext } from '../context/MyContext';
import useAxios from '../hook/useAxios';
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';
import '../../styles/css/smart/UserScore.css';

const UserScore = () => {
    const userId = useContext(IdContext);
    const userScore = useAxios(`user/${userId}`);
    let data = [];
    if (userScore)
        data.push(
            {
                uv: Math.round(userScore.todayScore * 100),
                fill: '#FF0000',
            },
            {
                uv: 100,
                fill: '#fbfbfb',
            }
        );
    return (
        <article className="UserScore">
            <h4>Score</h4>
            {userScore && (
                <p>
                    <span>{`${data[0].uv}%`}</span>
                    <br /> de votre objectif
                </p>
            )}
            {userScore ? (
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        innerRadius="82.5%"
                        outerRadius="107.5%"
                        data={data}
                        startAngle={555}
                        endAngle={195}
                    >
                        <RadialBar
                            dataKey="uv"
                            background
                            animationBegin={3200}
                            animationDuration={1900}
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
            ) : (
                <div className="loadingState">
                    <p>Chargement...</p>
                </div>
            )}
        </article>
    );
};

export default UserScore;
