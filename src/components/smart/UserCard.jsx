import { useContext } from 'react';
import { IdContext } from '../context/MyContext';
import useAxios from '../hook/useAxios';
import iconCalories from '../../assets/iconCalories.png';
import iconProteines from '../../assets/iconProteines.png';
import iconGlucides from '../../assets/iconGlucides.png';
import iconLipides from '../../assets/iconLipides.png';
import PropTypes from 'prop-types';
import '../../styles/css/smart/UserCard.css';

/**
 * ### Smart component
 * ##### UserCard that gives us the information on the user's calories, proteins, carbohydrates and fats for the day.
 * ###### `@param {Int} category` 0 = calories, 1 = protein, 2 = carbohydrates and 3 = fat.
 */
const UserCard = (params = 0) => {
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

UserCard.defaultProps = {
    category: 0,
};

export default UserCard;
