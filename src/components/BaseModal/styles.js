

const styles = theme => ({
    dialog: {
        scrollBehavior: 'smooth'
    },

    top: {
        display: 'flex',
        padding: 15,
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        background: 'PapayaWhip',
    },

    userInfo: {
        position: 'absolute',
        top: 18,
        left: 90,
        color: 'whDarkKhakiite',
    },

    userPhotos: {
        display: 'flex',
        height: 2000,
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 10,
        flexDirection: 'column',
    },

    content: {
        padding: '0 15px 15px',
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        background: 'PapayaWhip',
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

    photos: {
        display: 'flex',
        justifyContent: 'center',
    },

    photo: {
        cursor: 'pointer',
    },

    root: {
        gap: 10,
    },

    li: {
        listStyleType: 'none'
    },

    a: {
        textDecoration:'none',
    }
})

export default styles;