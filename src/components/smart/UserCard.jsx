import { useContext } from 'react';
import { IdContext } from '../context/MyContext';
import useAxios from '../hook/useAxios';
import '../../styles/css/smart/UserCard.css';
import iconCalories from '../../assets/iconCalories.png';
import iconProteines from '../../assets/iconProteines.png';
import iconGlucides from '../../assets/iconGlucides.png';
import iconLipides from '../../assets/iconLipides.png';
import PropTypes from 'prop-types';

const UserCard = (params) => {
    const userId = useContext(IdContext);
    const userCard = useAxios(`user/${userId}`);
    const i = params.category;
    let arrayCard;
    if (userCard) {
        arrayCard = [
            {
                icon: iconCalories,
                value: `${userCard.keyData.calorieCount}`,
                unit: 'kCal',
                name: 'Calories',
            },
            {
                icon: iconProteines,
                value: `${userCard.keyData.proteinCount}`,
                unit: 'g',
                name: 'Proteines',
            },
            {
                icon: iconGlucides,
                value: `${userCard.keyData.carbohydrateCount}`,
                unit: 'g',
                name: 'Glucides',
            },
            {
                icon: iconLipides,
                value: `${userCard.keyData.lipidCount}`,
                unit: 'g',
                name: 'Lipides',
            },
        ];

        arrayCard.filter((card) => {
            card.value.length > 3 &&
                (card.value = `${card.value.substr(0, 1)},${card.value.substr(
                    1
                )}`);

            return null;
        });
    }

    return (
        <div className="UserCard">
            {userCard ? (
                <div className="dataKey">
                    <img
                        src={arrayCard[i].icon}
                        alt={`Icône ${arrayCard[i].name}`}
                    />
                    <p>
                        {`${arrayCard[i].value}${arrayCard[i].unit}`}
                        <br />
                        <span>{arrayCard[i].name}</span>
                    </p>
                </div>
            ) : (
                <div className="loadingState">
                    <p>Chargement...</p>
                </div>
            )}
        </div>
    );
};

UserCard.propTypes = {
    category: PropTypes.number.isRequired,
};

export default UserCard;
