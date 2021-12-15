const styles = theme => ({
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 20,
        paddingTop: 30,
        maxWidth: 1080,
        margin: 'auto'
    },

    button: {
        width: 200,
        height: 200,
        fontSize: 16,
        borderRadius: 8,
        transition: '0.5s',
        "&:hover": {
            transform: 'scale(0.9)',
            cursor: 'pointer'
        } ,
    },

    info: {
        paddingTop:30,
        display: 'flex',
        gap: 30,
    },

    textInfo: {
        color: 'white',
        fontSize: 20,
    },

})

export default styles;