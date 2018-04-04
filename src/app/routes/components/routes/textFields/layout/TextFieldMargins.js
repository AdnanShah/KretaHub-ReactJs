import React from 'react';
import TextField from 'material-ui/TextField';

const TextFieldMargins = () => {

    return (
        <div className="row">
            <div className="col-md-4 col-12">
                <TextField
                    label="None"
                    id="margin-none"
                    defaultValue="Default Value"
                    fullWidth
                    helperText="Some important text"
                />
            </div>
            <div className="col-md-4 col-12">
                <TextField
                    label="Dense"
                    id="margin-dense"
                    defaultValue="Default Value"
                    fullWidth
                    helperText="Some important text"
                    margin="dense"
                />
            </div>
            <div className="col-md-4 col-12">
                <TextField
                    label="Normal"
                    id="margin-normal"
                    defaultValue="Default Value"
                    fullWidth
                    helperText="Some important text"
                    margin="normal"
                />
            </div>
        </div>
    );
};

export default TextFieldMargins;