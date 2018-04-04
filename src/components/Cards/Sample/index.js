import React from 'react';
import Button from 'material-ui/Button';

function SimpleCard() {

    return (
        <div className="jr-card">
            <h4 className="text-muted">Word of the Day</h4>
            <h3 className="card-title my-2">be-nev-o-lent</h3>
            <div className="text-muted mb-3">adjective</div>
            <p className="h4 text-muted">
                Well meaning and kindly
                “a benevolent smile”
            </p>

            <Button size="small" color="primary">Learn More</Button>
        </div>
    );
}

export default SimpleCard;