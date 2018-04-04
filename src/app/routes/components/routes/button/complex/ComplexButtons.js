import React from 'react';
import ButtonBase from 'material-ui/ButtonBase';
import Typography from 'material-ui/Typography'

const images = [
    {
        url: 'http://via.placeholder.com/500x330',
        title: 'Blue Bird',
        width: '33.333%',
    },
    {
        url: 'http://via.placeholder.com/500x330',
        title: 'color',
        width: '33.333%',
    },
    {
        url: 'http://via.placeholder.com/500x330',
        title: 'Hourse',
        width: '33.333%',
    },
];

function ComplexButtons() {

    return (
        <div className="complex-btn-wrapper">
            {images.map(image => (
                <ButtonBase
                    focusRipple
                    onClick={() => {
                        console.log('hello')
                    }}
                    key={image.title}
                    className="complex-btn ripple-effect"
                    style={{
                        width: image.width,
                    }}
                >
                    <div
                        className="img-src"
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                    />
                    <div className="img-btn-overlay"/>
                    <div className="img-btn">
                        <Typography
                            component="h3"
                            type="subheading"
                            color="inherit"
                            className="img-title"
                        >
                            {image.title}
                            <div className="img-marked"/>
                        </Typography>
                    </div>
                </ButtonBase>
            ))}
        </div>
    );
}

export default ComplexButtons;