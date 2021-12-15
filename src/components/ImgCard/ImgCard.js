import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';
import {
    Dialog,
    Grid,
    Button,
} from '@material-ui/core';
import { getUserCollections } from '../../api/appi'


const useStyles = makeStyles(styles);

const ImgCard = props => {
    const classes = useStyles();
    const { image, imgSize } = props;
    const { links, user } = image;
    const [open, setOpen] = useState(false);
    const [userCollections, setUserCollections] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);

        getUserCollections(user.username)
        .then(response => {
            setUserCollections(response);
        })
        .catch(err => console.log(err))
    };
    const handleClose = () => {
        setOpen(false);
    };

    const className = () => {
        const size = imgSize === 'small' ? true : false;

        return size ? classes.smallCard : classes.bigCard
    }

    const classNameImg = () => {
        const size = imgSize === 'small' ? true : false;

        return size ? classes.img : classes.bigImg
    }

    return (
        <div className={ className() }>
            <img src={ links.download } onClick={ handleClickOpen } className={ classNameImg() } alt={'test'} />
            <Dialog
                className={ classes.dialog }
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullWidth={true}
                scroll={'body'}
                maxWidth={'lg'}
            >
                <div className={ classes.top } >
                    <img src={ user.profile_image.medium } className={ classes.profileImage } alt={'test'} />
                    <span className={ classes.userInfo} >
                        { user.name }
                    </span>
                </div>
                <div className={ classes.content }>
                    <div className={ classes.contentImg } >
                        <img src={ image.links.download } className={ classes.imgModal } alt={'test'} />
                    </div>
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="space-around"
                        className={classes.root}
                    >
                                { userCollections.map(foto => (
                                <Grid item xs={2} >
                                    <div className={ classes.fotos } >
                                        { <img src={ foto.urls.thumb } alt={'foto'} /> }
                                    </div>
                                </Grid>
                            )) }
                    </Grid>
                </div>
                
            </Dialog>
        </div>
    )
}

export default ImgCard;