const styles = theme => ({
    search: {
        display: 'flex',
        justifyContent: 'center',
        gap: 20,
    },

    input: {
        '& .MuiOutlinedInput-input': {
            background: 'white',
            borderRadius: 8,
        }
    }
})

export default styles;
