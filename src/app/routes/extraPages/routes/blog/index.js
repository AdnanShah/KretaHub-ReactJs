import React from 'react';
import ProfileCard from 'components/ProfileCard/index';
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages';

const Blog = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.extraPages.blog"/>} match={match}/>
            <div className="row">
                <div className="col-md-8 col-sm-7 col-12 animation slideInLeft">
                    <div className="card shadow border-0 text-muted">
                        <img className="card-img-top" src="http://via.placeholder.com/500x330" alt="post"/>

                        <div className="card-body">
                            <h3>Let’s figure out does the nature work...</h3>
                            <div className="meta-wrapper">
                                <span className="meta-date"><i className="zmdi zmdi-calendar-note zmdi-hc-lg"/>25 May, 2016</span>
                                <span className="meta-comment"><i className="zmdi zmdi-comment-text zmdi-hc-lg"/>23 Comments</span>
                            </div>
                            <p className="card-text">
                                It’s no secret that the digital industry is booming. From exciting startups to global
                                brands, out to digital agencies, responding to the new possibilities available. However,
                                the industry overcrowded, heaving with agencies offering similar services — on the
                                surface, at least. projects is the key to standing out. Unique side projects are the
                                best place to innovate, but creatively lucrative work is tricky. So, this article looks
                                at …
                            </p>

                            <div>
                                <a className="right-arrow" href="javascript:void(0)">Continue Reading</a>
                            </div>
                        </div>
                    </div>

                    <div className="card shadow border-0 text-muted">
                        <img className="card-img-top" src="http://via.placeholder.com/500x330" alt="post"/>

                        <div className="card-body">
                            <h3>5 DIYs for you to try at home</h3>
                            <div className="meta-wrapper">
                                <span className="meta-date"><i className="zmdi zmdi-calendar-note zmdi-hc-lg"/>25 May, 2016</span>
                                <span className="meta-comment"><i className="zmdi zmdi-comment-text zmdi-hc-lg"/>23 Comments</span>
                            </div>
                            <p className="card-text">
                                It’s no secret that the digital industry is booming. From exciting startups to global
                                brands, out to digital agencies, responding to the new possibilities available. However,
                                the industry overcrowded, heaving with agencies offering similar services — on the
                                surface, at least. projects is the key to standing out. Unique side projects are the
                                best place to innovate, but creatively lucrative work is tricky. So, this article looks
                                at …
                            </p>

                            <div>
                                <a className="right-arrow" href="javascript:void(0)">Continue Reading</a>
                            </div>
                        </div>
                    </div>

                    <div className="card shadow border-0 text-muted">
                        <img className="card-img-top" src="http://via.placeholder.com/500x330" alt="post"/>

                        <div className="card-body">
                            <h3>Nature makes you feel alive</h3>
                            <div className="meta-wrapper">
                                <span className="meta-date"><i className="zmdi zmdi-calendar-note zmdi-hc-lg"/>25 May, 2016</span>
                                <span className="meta-comment"><i className="zmdi zmdi-comment-text zmdi-hc-lg"/>23 Comments</span>
                            </div>
                            <p className="card-text">
                                It’s no secret that the digital industry is booming. From exciting startups to global
                                brands, out to digital agencies, responding to the new possibilities available. However,
                                the industry overcrowded, heaving with agencies offering similar services — on the
                                surface, at least. projects is the key to standing out. Unique side projects are the
                                best place to innovate, but creatively lucrative work is tricky. So, this article looks
                                at …
                            </p>

                            <div>
                                <a className="right-arrow" href="javascript:void(0)">Continue Reading</a>
                            </div>
                        </div>
                    </div>

                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center my-3 my-sm-5">
                            <li className="page-item disabled">
                                <a className="page-link" href="javascript:void(0)" tabIndex="-1">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="javascript:void(0)">1</a></li>
                            <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
                            <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="javascript:void(0)">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="col-md-4 col-sm-5 col-12 animation slideInRight">
                    <div className="sidebar">
                        <ProfileCard/>

                        <div className="card shadow border-0 bg-white p-2">
                            <form className="m-0" role="search">
                                <div className="search-bar">
                                    <div className="form-group">
                                        <input type="search" className="form-control form-control-lg border-0"
                                               placeholder="Search..."/>
                                        <button className="search-icon">
                                            <i className="zmdi zmdi-search zmdi-hc-lg"/>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="card shadow border-0 p-4">
                            <h3 className="text-uppercase letter-spacing-base mb-3">Categories</h3>

                            <ul className="categories-list list-unstyled">
                                <li><a href="javascript:void(0)">Technology</a></li>
                                <li><a href="javascript:void(0)">Branding</a></li>
                                <li><a href="javascript:void(0)">Holly</a></li>
                                <li className="active"><a href="javascript:void(0)">Stories</a></li>
                                <li><a href="javascript:void(0)">Designing</a></li>
                                <li><a href="javascript:void(0)">Programing</a></li>
                            </ul>
                        </div>

                        <div className="card shadow border-0 p-4">
                            <h3 className="text-uppercase letter-spacing-base mb-4">Popular Articles</h3>

                            <ul className="articles-section list-unstyled">
                                <li className="articles">
                                    <a className="article-image" href="javascript:void(0)">
                                        <img src="http://via.placeholder.com/500x330" alt="Articales Post"/>
                                    </a>

                                    <div className="article-description">
                                        <p><a href="javascript:void(0)">English breakfast.jpeg tea with desert donut</a>
                                        </p>
                                        <div className="meta-wrapper">
                                            <span className="meta-date"><i
                                                className="zmdi zmdi-calendar-note zmdi-hc-lg"/>25 May, 2016</span>
                                        </div>
                                    </div>
                                </li>

                                <li className="articles">
                                    <a className="article-image" href="javascript:void(0)">
                                        <img src="http://via.placeholder.com/500x330" alt="Articales Post"/>
                                    </a>

                                    <div className="article-description">
                                        <p><a href="javascript:void(0)">Two smart kids reading through tablet</a></p>
                                        <div className="meta-wrapper">
                                            <span className="meta-date"><i
                                                className="zmdi zmdi-calendar-note zmdi-hc-lg"/>25 May, 2016</span>
                                        </div>
                                    </div>
                                </li>

                                <li className="articles">
                                    <a className="article-image" href="javascript:void(0)">
                                        <img src="http://via.placeholder.com/500x330" alt="Articales Post"/>
                                    </a>

                                    <div className="article-description">
                                        <p><a href="javascript:void(0)">Co-founder trying to explain his idea to his
                                            employers</a></p>
                                        <div className="meta-wrapper">
                                            <span className="meta-date"><i
                                                className="zmdi zmdi-calendar-note zmdi-hc-lg"/>25 May, 2016</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;

