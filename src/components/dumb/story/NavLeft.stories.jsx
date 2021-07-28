import NavLeft from '../NavLeft';

export default {
    title: 'Dumb/NavLeft',
    component: NavLeft,
};

export const Default = () => {
    const divStyle = {
        marginTop: '-1em',
    };
    return (
        <div style={divStyle}>
            <NavLeft />
        </div>
    );
};
