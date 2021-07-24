import { useContext } from 'react';
import { IdContext } from '../context/MyContext';
import useAxios from '../hook/useAxios';
import {
    ResponsiveContainer,
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
} from 'recharts';
import '../../styles/css/smart/UserPerform.css';

const UserPerform = () => {
    const userId = useContext(IdContext);
    const userPerform = useAxios(`user/${userId}/performance`);
    if (userPerform) {
        const arrayKind = [
            'Cardio',
            'Energie',
            'Endurance',
            'Force',
            'Vitesse',
            'Intensité',
        ];
        for (let i = 0; i < userPerform.data.length; i++) {
            const intKind = userPerform.data[i].kind;
            if (Number.isInteger(intKind))
                userPerform.data[i].kind = arrayKind[intKind - 1];
        }
    }
    return (
        <article className="UserPerform">
            {userPerform ? (
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                        innerRadius={12.5}
                        outerRadius={66}
                        data={userPerform.data}
                    >
                        <PolarGrid />
                        <PolarAngleAxis dataKey="kind" />
                        <Radar
                            dataKey="value"
                            stroke="#FF0101"
                            fill="#FF0101"
                            fillOpacity={0.64}
                            animationBegin={3100}
                            animationDuration={1900}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            ) : (
                <div className="loadingState">
                    <p>Chargement...</p>
                </div>
            )}
        </article>
    );
};

export default UserPerform;
