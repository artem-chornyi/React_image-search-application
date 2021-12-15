import React, { useState, useEffect } from "react";
import { InputSearch } from "..";
import { getImageSearch, getAddImage } from '../../api/appi'
import { ImgCard } from "..";

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';


const useStyles = makeStyles(styles);

const ImgList = () => {
    const classes = useStyles();
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [valueSearch, setValueSearch] = useState('');
    const [totalImg, setTotalImg] = useState(0);
    const [imgSize, setImgSize] = useState('small');
    const [error, setError] = useState('')

    const imageSearch = (value) => {
        setValueSearch(value);
        const localStor = localStorage.getItem('valueSearch');

        if ( localStor === null ) {
            localStorage.setItem('valueSearch', JSON.stringify([
                value
            ]))
        } else {
            const check = JSON.parse(localStor).find(item => item === value);

            if ( !check ) {
                localStorage.setItem('valueSearch', JSON.stringify([
                    value,
                    ...JSON.parse(localStor)
                ]))
            }
        }

        getImageSearch(value)
        .then(result => {
            const { total_pages, results, total } = result;
            setPage(1);
                setTotalPages(total_pages);
                setImages(results);
                setTotalImg(total);
            

            if (total === 0 ) {
                setError('No images found')
            } else if (total > 0) {
                setError('')
            }
        })
        .catch(err => console.log(err))


    };


    const handlerOnClick = () => {
        const nextPage = page + 1;
    
        getAddImage(valueSearch, nextPage)
        .then(result => {
            setPage(nextPage);
            setImages([
                ...images,
                ...result.results
            ]);
        })
        .catch(err => console.log(err))
    }


    const addMore = () => {
        if (page < totalPages) {
            return (
               <Button
                    className={ classes.button }
                    variant="contained"
                    color="primary"
                    onClick={ handlerOnClick }
                >
                    Add more
                </Button>
            )
        }
    }

    const imageResizing = () => {
        setImgSize(imgSize === 'small' ? 'big' : 'small')
    }


    const info = () => {
        if ( images.length > 0 ) {
            return (
                <div className={ classes.info } >
                    <p className={ classes.textInfo } >
                        { `All images ${ totalImg }` }
                    </p>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={ imageResizing }
                    >
                        { imgSize === 'small' ? 'big pictures' : 'small pictures'}
                    </Button>
                </div>
            )
        }
    }

    return (
        <div >
            <div className={ classes.top } >
                <InputSearch imageSearch={ imageSearch } />
                { info() }
            </div>
            { error &&  <span className={ classes.textInfo} >
                            { error }
                        </span>
            }
            { images.length > 0
                &&
                <div className={ classes.wrapper } >
                        { images.map(image => <ImgCard image={ image } key={ image.id } imgSize={ imgSize } />) }
                        { addMore() }
                </div>
            }
        </div>
    )
}

export default ImgList;
