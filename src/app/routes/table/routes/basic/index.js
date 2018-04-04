import React from 'react';
import BasicTable from './Components/BasicTable';
import CardBox from 'components/CardBox/index';
import MarketingTable from 'components/dashboard/Common/MarketingTable';
import ApplicationTable from 'components/dashboard/default/ApplicationTable';
import DataTable from 'app/routes/table/routes/basic/Components/DataTable';
import OrderTable from 'components/dashboard/eCommerce/OrderTable';
import {marketingData} from 'app/routes/dashboard/routes/Default/data';
import IntlMessages from 'util/IntlMessages';

const BasicTables = () => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <div className="row mb-md-4">
                <CardBox styleName="col-12" cardStyle="p-0" heading={<IntlMessages id="table.basicTable"/>}
                         headerOutside>
                    <BasicTable/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <div className="col-xl-12">
                    <div className="jr-card">
                        <div className="jr-card-header d-flex align-items-center">
                            <h3 className="mb-0"><IntlMessages id="table.marketingCampaign"/></h3>
                            <div className="ml-auto">
                                <span className="text-white badge badge-success"><IntlMessages
                                    id="table.thisWeek"/></span>
                            </div>
                        </div>
                        <MarketingTable data={marketingData}/>
                    </div>
                </div>
            </div>

            <div className="row mb-md-4">
                <div className="col-12">
                    <div className="jr-card">
                        <div className="jr-card-header d-flex align-items-center">
                            <h3 className="mb-0"><IntlMessages id="table.recentOrders"/></h3>
                            <div className="ml-3">
                                <span className="text-white badge badge-success">
                                    <IntlMessages id="table.dataTable"/></span>
                            </div>
                        </div>
                        <OrderTable/>
                    </div>
                </div>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" cardStyle="p-0" heading={<IntlMessages id="table.application"/>}
                         headerOutside>
                    <ApplicationTable/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-12" cardStyle="mb-0 p-0" heading={<IntlMessages id="table.dataTable"/>}
                         headerOutside>
                    <DataTable/>
                </CardBox>
            </div>
        </div>
    );
};

export default BasicTables;

