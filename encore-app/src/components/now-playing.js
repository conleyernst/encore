import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import {blue, extra_light_blue, extra_light_pink, pink, purple, THEME} from "../encore-theme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import Card from "@material-ui/core/es/Card/Card";
import CardActionArea from "@material-ui/core/es/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import Typography from "@material-ui/core/es/Typography/Typography";
import CardActions from "@material-ui/core/es/CardActions/CardActions";
import Button from "@material-ui/core/es/Button/Button";



const styles = theme => ({
    card: {
        maxWidth: 300,
        alignItems: 'center',
    },
    media: {
        // height: 'auto',
        objectFit: 'cover',
    },
    nowPlaying: {
        color: pink,
        fontSize: 30,
        fontFamily: "Bowlby One SC",
    },
    songTitle:{
        color: extra_light_blue
    },
    songArtist: {
        color: extra_light_blue
    },
});

class NowPlayingCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props;

        const { imgUrl, artist, title } = this.props;
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        className={classes.media}
                        // height="140"
                        image={imgUrl}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography className={classes.nowPlaying} align="center" gutterBottom variant="h6" component="h2">
                            Now Playing
                        </Typography>
                        <Typography className={classes.songTitle} align="left" gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography className={classes.songArtist} align="left" gutterBottom variant="h6" component="h2">
                            {artist}
                        </Typography>
                        {/*<Typography component="p">*/}
                            {/*Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging*/}
                            {/*across all continents except Antarctica*/}
                        {/*</Typography>*/}
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default withStyles(styles)(NowPlayingCard);

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
//
// const styles = {
//     card: {
//         maxWidth: 345,
//     },
//     media: {
//         // ⚠️ object-fit is not supported by IE 11.
//         objectFit: 'cover',
//     },
// };
//
// function ImgMediaCard(props) {
//     const { classes } = props;
//     return (
//         <Card className={classes.card}>
//             <CardActionArea>
//                 <CardMedia
//                     component="img"
//                     alt="Contemplative Reptile"
//                     className={classes.media}
//                     height="140"
//                     image="/static/images/cards/contemplative-reptile.jpg"
//                     title="Contemplative Reptile"
//                 />
//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="h2">
//                         Lizard
//                     </Typography>
//                     <Typography component="p">
//                         Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//                         across all continents except Antarctica
//                     </Typography>
//                 </CardContent>
//             </CardActionArea>
//             <CardActions>
//                 <Button size="small" color="primary">
//                     Share
//                 </Button>
//                 <Button size="small" color="primary">
//                     Learn More
//                 </Button>
//             </CardActions>
//         </Card>
//     );
// }
//
// ImgMediaCard.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles)(ImgMediaCard);
