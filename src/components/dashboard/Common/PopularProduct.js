import React from 'react';

const PopularProduct = ({product,styleName}) => {
    const {image, title, description, offerPrice, mrp} = product;
    if(!styleName){
        styleName ="col-sm-6 col-12 mb-4";
    }
    return (
        <div className={`${styleName}`}>
            <div className="row">
                <div className="col-lg-5 col-md-4 col-6 mb-2">
                    <img className="img-fluid rounded" src={image} alt={title} />
                </div>
                <div className="col-lg-7 col-md-8 col-6">
                    <h4  className="mb-2"> {title}</h4>
                    <p className="text-muted mb-1"> {description}</p>
                    <div className="d-flex align-items-end">
                        <h5 className="text-muted mr-2">
                            <del><i className="zmdi zmdi-money"/>{mrp}</del>
                        </h5>
                        <h4><i className="zmdi zmdi-money"/>{offerPrice} </h4>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PopularProduct;

