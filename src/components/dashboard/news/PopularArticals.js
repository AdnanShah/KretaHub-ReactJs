import React from 'react';

const PopularArticles = ({article}) => {
    const {image, title, description} = article;
    return (
        <div className="col-sm-6 col-12 mb-4">
            <div className="row">
                <div className="col-md-5 col-6 mb-2">
                    <img className="img-fluid" src={image} alt={title}/>
                </div>
                <div className="col-md-7 col-6">
                    <span className="badge bg-grey text-uppercase text-white">Health</span>
                    <h4 className="mb-1"> {title}</h4>
                    <p className="meta-date"> {description}</p>
                </div>
            </div>
        </div>
    )
};

export default PopularArticles;

