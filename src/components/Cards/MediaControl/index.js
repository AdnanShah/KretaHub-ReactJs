import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardContent, CardMedia} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext';
import styles from './style';

function MediaControlCard(props) {
    const classes = props.classes;

    return (
        <div>
            <Card className={classes.card}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography type="headline">Live From Space</Typography>
                        <Typography type="subheading" color="secondary">
                            Mac Miller
                        </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                        <IconButton aria-label="Previous">
                            <SkipPreviousIcon />
                        </IconButton>
                        <IconButton aria-label="Play/pause">
                            <PlayArrowIcon className={classes.playIcon} />
                        </IconButton>
                        <IconButton aria-label="Next">
                            <SkipNextIcon />
                        </IconButton>
                    </div>
                </div>
                <CardMedia
                    className={classes.cover}
                    image="http://via.placeholder.com/600x400"
                    title="Live from space album cover"
                />
            </Card>
        </div>
    );
}

MediaControlCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaControlCard);