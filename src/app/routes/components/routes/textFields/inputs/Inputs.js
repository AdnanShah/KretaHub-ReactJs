import React from 'react';
import Input from 'material-ui/Input/Input';

function Inputs() {
    return (
        <div className="row">
            <div className="col-md-3 col-12">
                <Input
                    defaultValue="Hello world"
                    className="w-100 mb-3"
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                />
            </div>
            <div className="col-md-3 col-12">
                <Input
                    placeholder="Placeholder"
                    className="w-100 mb-3"
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                />
            </div>
            <div className="col-md-3 col-12">
                <Input
                    value="Disabled"
                    className="w-100 mb-3"
                    disabled
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                />
            </div>
            <div className="col-md-3 col-12">
                <Input
                    defaultValue="Error"
                    className="w-100 mb-3"
                    error
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                />
            </div>
        </div>
    );
}


export default Inputs;