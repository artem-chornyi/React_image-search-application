import React, { useEffect, useState } from "react";
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';


const useStyles = makeStyles(styles);

const InputSearch = props => {
    const classes = useStyles();
    const { imageSearch } = props;
    const [ value, setValue ] = useState('');
    const [ localStor, setLocalStor ] = useState([]);

    const local = localStorage.getItem('valueSearch');

    useEffect(() => {
        if ( local ) {
            setLocalStor(JSON.parse(local))
        }
    },[])

    const handleChange = ({ target }) => {
        setLocalStor(JSON.parse(local))
        setValue(target.value);
    }
    
    const handleOnClick = () => {
        imageSearch(value);
    }


    return (
        <div className={ classes.search }>
            <TextField
                placeholder="Search img"
                value={ value }
                onChange={ handleChange }
                variant="outlined"
                className={ classes.input }
                type="text"
                autoFocus
                inputProps={{
                    list: "search"
                }}
            />
            <datalist id='search'>
                {localStor && localStor.map((item, index) => {
                    if (index < 5) {
                        return <option key = { item } value={ item }/>
                    }
                })}
            </datalist>
            <Button
                color="primary"
                variant="contained"
                onClick={ handleOnClick }
            >
                Search
            </Button>
        </div>
    )
}

export default InputSearch;