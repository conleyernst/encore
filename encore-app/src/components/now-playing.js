import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {blue, extra_dark_gray, extra_light_blue, extra_light_pink, pink, purple, THEME} from "../encore-theme";
import Card from "@material-ui/core/es/Card/Card";
import CardActionArea from "@material-ui/core/es/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import Typography from "@material-ui/core/es/Typography/Typography";
import WithWidth from "@material-ui/core/es/withWidth/withWidth";

const styles = theme => ({
    card: {
        maxWidth: '100%!important',
        alignItems: 'center',
        backgroundColor: extra_dark_gray,
        margin: '10px 40px 10px 40px',
    },
    media: {
        objectFit: 'cover',
    },
    nowPlaying: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 25,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 30,
        },
        color: pink,
        fontSize: 30,
        fontFamily: "Bowlby One SC",
        textShadow: '5px 10px 18px rgba(0,0,0,0.2)',
    },
    songTitle:{
        color: extra_light_blue,
        [theme.breakpoints.down('xs')]: {
            fontSize: 20,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 25,
        },
    },
    songArtist: {
        color: extra_light_blue,
        [theme.breakpoints.down('xs')]: {
            fontSize: 15,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 20,
        },
    },
    mobileCard: {
        backgroundColor: extra_light_blue,

    }
});

class NowPlayingCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        const { classes } = this.props;

        const { imgUrl, artist, title } = this.props;

        let isMobile = false;
        let classname = classes.card;
        const breakpoint = 900;
        if (this.state.width < breakpoint){
            isMobile = true;
            // classname = classes.mobileCard;
        }

        return (
            <Card className={classes.card}>
                <CardActionArea>
                    {/*<WithWidth>*/}
                        {/*{({ width }) => <div>*/}
                        {/*{width === 'xs' &&*/}
                            {/*<div>extrasmall</div>*/}
                        {/*}*/}
                        {/*</div>}*/}
                    {/*</WithWidth>*/}
                    {!isMobile &&
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            className={classes.media}
                            image={imgUrl}
                            title="Contemplative Reptile"
                        />
                    }
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
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default withStyles(styles)(NowPlayingCard);
