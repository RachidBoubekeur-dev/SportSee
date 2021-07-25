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
            <p>
                <span>12%</span>
                <br /> de votre objectif
            </p>
            {userScore ? (
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        innerRadius="82.5%"
                        outerRadius="107.5%"
                        data={data}
                    >
                        <RadialBar
                            radius={10}
                            dataKey="uv"
                            isAnimationActive={true}
                            animationBegin={3200}
                            animationDuration={1900}
                            background
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