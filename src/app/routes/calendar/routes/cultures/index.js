import React from 'react';
import BigCalendar from 'react-big-calendar';
import events from '../events';
import moment from 'moment';

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);
// require('globalize/lib/cultures/globalize.culture.en-GB');
// require('globalize/lib/cultures/globalize.culture.es');
// require('globalize/lib/cultures/globalize.culture.fr');
// require('globalize/lib/cultures/globalize.culture.ar-AE');

class Cultures extends React.Component {

    constructor() {
        super();
        this.state = {culture: 'fr'};
    }

    render() {
        let cultures = ['en', 'en-GB', 'es', 'fr', 'ar-AE'];
        let rtl = this.state.culture === 'ar-AE';

        return (
            <div className="app-calendar app-cul-calendar animated slideInUpTiny animation-duration-3">
                <h3 className="callout">
                    <label>Select a Culture</label>
                    {' '}
                    <select
                        className='form-control'
                        style={{width: 200, display: 'inline-block'}}
                        defaultValue={'fr'}
                        onChange={e => this.setState({culture: e.target.value})}
                    >
                        {
                            cultures.map((c, idx) =>
                                <option key={idx} value={c}>{c}</option>
                            )
                        }
                    </select>
                </h3>
                <BigCalendar
                    rtl={rtl}
                    events={events}
                    // culture={this.state.culture}
                    defaultDate={new Date(2015, 3, 1)}
                />
            </div>
        )
    }
}

export default Cultures;