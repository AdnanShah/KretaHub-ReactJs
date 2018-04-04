import React from 'react';
import Button from 'material-ui/Button';
import StarRatingComponent from 'react-star-rating-component';
import IntlMessages from 'util/IntlMessages';

const ProductGridItem = ({product}) => {
    const {thumb, name, price, mrp, offer, variant, rating, reviews, description} = product;
    return (
        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
            <div className="card product-item">
                <div className="card-header border-0 p-0">
                    <div className="card-image">
                        <div className="grid-thumb-equal">
                            <a className="grid-thumb-cover" href="javascript:void(0)">
                                <img alt="Remy Sharp" src={thumb}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="product-details">
                        <h3 className="card-title fw-regular">{name}
                            <small className="text-grey text-darken-2">{", " + variant}</small>
                        </h3>
                        <div className="d-flex ">
                            <h3 className="card-title">{price} </h3>
                            <h5 className="text-muted px-2">
                                <del>{mrp}</del>
                            </h5>
                            <h5 className="text-success">{offer} off</h5>
                        </div>
                        <div className="d-flex flex-row">
                            <StarRatingComponent
                                name=""
                                value={rating}
                                starCount={5}
                                editing={false}/>
                            <strong className="d-inline-block ml-2">{rating}</strong>
                        </div>
                        <p>{description}</p>
                    </div>
                    <div>
                        <Button color="primary" variant="raised" className="jr-btn jr-btn-sm ">
                            <i className="zmdi zmdi-shopping-cart"/>
                            <span><IntlMessages id="eCommerce.buyNow"/></span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductGridItem;

