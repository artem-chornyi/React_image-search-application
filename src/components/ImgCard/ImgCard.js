import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';
import { getUserCollections } from '../../api/appi'
import { BaseModal } from '..';


const useStyles = makeStyles(styles);

const ImgCard = props => {
    const classes = useStyles();
    const { image, imgSize } = props;
    const { links, user, urls } = image;
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
            <img src={ imgSize === 'small' ? urls.thumb : links.download } onClick={ handleClickOpen } className={ classNameImg() } alt={'test'} />
            { open &&
                <BaseModal
                    props={{
                        image,
                        user,
                        open,
                        userCollections,
                        handleClose,
                        userInfo: [
                            [ 'Location' , user.location ],
                            [ 'Portfolio' , user.portfolio_url ],
                            [ 'Total likes' , user.total_likes ],
                            [ 'Total photos', user.total_photos ],
                        ]
                    }}
                />
            }
        </div>
    )
}

export default ImgCard;