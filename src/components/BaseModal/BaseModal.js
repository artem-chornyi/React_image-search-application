import React, { useState } from "react";
import {
    Dialog,
    Grid,
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';
import { getUserCollections } from '../../api/appi';
import preloader from '../../img/circles.svg';
const useStyles = makeStyles(styles);

const BaseModal = ({props}) => {
    const classes = useStyles();
    const {
        user,
        image,
        open,
        handleClose,
        userCollections,
        userInfo
    } = props;



    console.log(userCollections);
    const [userPhoto, setUserPhoto ] = useState(image.links.download);
    const [photoInfo, setPhotoInfo] = useState({});

    const openPhoto = ({ target }) => {
        setUserPhoto(preloader);
        setTimeout(() => {
            setUserPhoto(target.id)
        }, 0);
        
    }
    console.log(userPhoto);




    return (
        <Dialog
                className={ classes.dialog }
                onClose={ handleClose }
                aria-labelledby="customized-dialog-title"
                open={ open }
                fullWidth={ true }
                scroll={ 'body' }
                maxWidth={ 'lg' }
            >
                <div id='top' className={ classes.top } >
                    <img src={ user.profile_image.medium } className={ classes.profileImage } alt={'test'} />
                    <span className={ classes.userInfo} >
                        { user.name }
                    </span>
                </div>
                <div className={ classes.content }>
                    <div className={ classes.contentImg } >
                        <img src={ userPhoto } className={ classes.imgModal } alt={'test'} />
                    </div>
                    <ul className={ classes.info } >
                        { userInfo.map((info, index) => {
                            return (
                                index === 1
                                ? (
                                    info[1] &&
                                        <a
                                            className={ classes.a}
                                            href={ info[1] }
                                            key={ info[0] }
                                            target='_blank'
                                        > 
                                            { info[0] }
                                        </a>
                                )
                                : (
                                    <li className={ classes.li } key={ info[0] } >
                                        { info[0] + ' ' + info[1]}
                                    </li>
                                )
                            )
                            
                            
                        })}
                    </ul>
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="space-around"
                        className={ classes.root }
                    >
                                { userCollections.map(photo => (
                                <Grid item xs={2} >
                                    <div className={ classes.photos } >
                                        {   <a href='#top' >
                                            {
                                                <img
                                                    className={ classes.photo }
                                                    src={ photo.urls.thumb }
                                                    alt='userp_Poto'
                                                    onClick={ openPhoto }
                                                    id={ photo.urls.raw }
                                                    url={ photo.urls.thumb }
                                                />
                                            }
                                            </a>
                                        }
                                    </div>
                                </Grid>
                            )) }
                    </Grid>
                </div>
                
            </Dialog>
    )
}

export default BaseModal;