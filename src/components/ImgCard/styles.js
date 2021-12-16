import preloader from '../../img/circles.svg';

const card = {
        width: 200,
        height: 200,
        background: `url(${preloader}) no-repeat center `,
    };

    const img = {
        objectFit: 'fill',
        width: '100%',
        height: '100%',
        borderRadius: 8,
        cursor: 'pointer',
        transition: '0.5s',
        "&:hover": {
            transform: 'scale(0.9)',
        }
    };

const styles = theme => ({

    smallCard: {
        ...card
    },

    bigCard: {
        ...card,
        width: 530,
        height: 530,
    },

    img: {
        ...img
    },

    bigImg: {
        ...img,
        "&:hover": {
            transform: 'scale(0.95)',
        }
    },
})

export default styles;