import React from 'react';
import BasicTable from './basic/BasicTable';
import EnhancedTable from './enhanced/EnhancedTable';
import ContainerHeader from 'components/ContainerHeader/index';
import CardBox from 'components/CardBox/index';
import IntlMessages from 'util/IntlMessages';

const Tables = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.tables"/>} match={match}/>

            <div className="row mb-md-4">
                <CardBox styleName="col-12" cardStyle="p-0" heading={<IntlMessages id="sidebar.tables.basicTable"/>}
                         headerOutside>
                    <BasicTable />
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-12" cardStyle="p-0" heading={<IntlMessages id="sidebar.tables.dataTable"/>}
                         headerOutside>
                    <EnhancedTable />
                </CardBox>
            </div>
        </div>
    );
};

export default Tables;

