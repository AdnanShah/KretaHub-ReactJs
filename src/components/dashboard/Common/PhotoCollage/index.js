import React from 'react';
import gallery from "./galleryData";
import IconButton from 'material-ui/IconButton';

const PhotoCollage = () => {
    return (
        <div className="jr-card">
            <div className="jr-card-header d-flex">
                <h3 className="card-heading mr-auto">Pictures from around the world</h3>
                <IconButton className="size-30"><i className="zmdi zmdi-more-vert"/></IconButton>
            </div>

            <ul className="list-inline thumbnail-list">
                {gallery.map((image, index) => (
                    <li key={index} className="thumbnail-item">
                        <div className="grid-thumb-equal">
                            <a href="javascript:void(0)" className="grid-thumb-cover">
                                <img alt={image.title} src={image.img} />
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PhotoCollage;