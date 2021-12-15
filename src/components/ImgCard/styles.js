import preloader from '../../img/circles.svg'
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

    content: {
        padding: '0 15px 15px',
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
    },

    top: {
        display: 'flex',
        padding: 15,
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
    },

    userInfo: {
        position: 'absolute',
        top: 18,
        left: 90,
    },

    userFotos: {
        display: 'flex',
        height: 2000,
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 10,
        flexDirection: 'column',
    },

    imgModal: {
        width: 600,
        height: 600,
    },

    contentImg: {
        display: 'flex',
        justifyContent: 'center',
    },

    profileImage: {
        borderRadius: '50%',
    },

    fotos: {
        display: 'flex',
        justifyContent: 'center',
    },

    root: {
        gap: 10,
    }


})

export default styles;