import Header from '../Header';

export default {
    title: 'Dumb/Header',
    component: Header,
};

export const Default = () => {
    const divStyle = {
        position: 'relative',
    };
    return (
        <div style={divStyle}>
            <Header />
        </div>
    );
};
