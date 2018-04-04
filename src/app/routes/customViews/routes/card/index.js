import React from 'react';
import ListItem from '../Component/ListItem';
import {data} from '../data';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

function CardList({match}) {
    return (
        <div>
            <ContainerHeader title={<IntlMessages id="sidebar.customViews.cardListView"/>} match={match}/>
            <div className="animated slideInUpTiny animation-duration-3">
                {data.map((data, index) => (
                    <ListItem key={index} data={data} styleName="card shadow "/>
                ))}
            </div>
        </div>
    )
}

export default CardList;