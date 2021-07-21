const USER_MAIN_DATA = [
    {
        id: 12,
        userInfos: {
            firstName: 'Karl',
            lastName: 'Dovineau',
            age: 31,
        },
        todayScore: 0.12,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50,
        },
    },
    {
        id: 18,
        userInfos: {
            firstName: 'Cecilia',
            lastName: 'Ratorez',
            age: 34,
        },
        score: 0.3,
        keyData: {
            calorieCount: 2500,
            proteinCount: 90,
            carbohydrateCount: 150,
            lipidCount: 120,
        },
    },
];

const USER_ACTIVITY = [
    {
        userId: 12,
        sessions: [
            {
                day: '01-07-2020',
                kilogram: 80,
                calories: 240,
            },
            {
                day: '02-07-2020',
                kilogram: 80,
                calories: 220,
            },
            {
                day: '03-07-2020',
                kilogram: 81,
                calories: 280,
            },
            {
                day: '04-07-2020',
                kilogram: 81,
                calories: 290,
            },
            {
                day: '05-07-2020',
                kilogram: 80,
                calories: 160,
            },
            {
                day: '06-07-2020',
                kilogram: 78,
                calories: 162,
            },
            {
                day: '07-07-2020',
                kilogram: 76,
                calories: 390,
            },
        ],
    },
    {
        userId: 18,
        sessions: [
            {
                day: '01-07-2020',
                kilogram: 70,
                calories: 240,
            },
            {
                day: '02-07-2020',
                kilogram: 69,
                calories: 220,
            },
            {
                day: '03-07-2020',
                kilogram: 70,
                calories: 280,
            },
            {
                day: '04-07-2020',
                kilogram: 70,
                calories: 500,
            },
            {
                day: '05-07-2020',
                kilogram: 69,
                calories: 160,
            },
            {
                day: '06-07-2020',
                kilogram: 69,
                calories: 162,
            },
            {
                day: '07-07-2020',
                kilogram: 69,
                calories: 390,
            },
        ],
    },
];

const USER_AVERAGE_SESSIONS = [
    {
        userId: 12,
        sessions: [
            {
                day: 1,
                sessionLength: 30,
            },
            {
                day: 2,
                sessionLength: 23,
            },
            {
                day: 3,
                sessionLength: 45,
            },
            {
                day: 4,
                sessionLength: 50,
            },
            {
                day: 5,
                sessionLength: 0,
            },
            {
                day: 6,
                sessionLength: 0,
            },
            {
                day: 7,
                sessionLength: 60,
            },
        ],
    },
    {
        userId: 18,
        sessions: [
            {
                day: 1,
                sessionLength: 30,
            },
            {
                day: 2,
                sessionLength: 40,
            },
            {
                day: 3,
                sessionLength: 50,
            },
            {
                day: 4,
                sessionLength: 30,
            },
            {
                day: 5,
                sessionLength: 30,
            },
            {
                day: 6,
                sessionLength: 50,
            },
            {
                day: 7,
                sessionLength: 50,
            },
        ],
    },
];

const USER_PERFORMANCE = [
    {
        userId: 12,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity',
        },
        data: [
            {
                value: 80,
                kind: 1,
            },
            {
                value: 120,
                kind: 2,
            },
            {
                value: 140,
                kind: 3,
            },
            {
                value: 50,
                kind: 4,
            },
            {
                value: 200,
                kind: 5,
            },
            {
                value: 90,
                kind: 6,
            },
        ],
    },
    {
        userId: 18,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity',
        },
        data: [
            {
                value: 200,
                kind: 1,
            },
            {
                value: 240,
                kind: 2,
            },
            {
                value: 80,
                kind: 3,
            },
            {
                value: 80,
                kind: 4,
            },
            {
                value: 220,
                kind: 5,
            },
            {
                value: 110,
                kind: 6,
            },
        ],
    },
];

module.exports = {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
};
