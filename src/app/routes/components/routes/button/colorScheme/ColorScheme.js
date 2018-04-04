import React from 'react';
import Button from 'material-ui/Button';

const ColorScheme = () => {
    return (
        <div>
            <div className="jr-btn-group mb-3 mb-md-5">
                <Button variant="raised" className="jr-btn bg-white text-black">Default</Button>
                <Button variant="raised" color="primary" className="jr-btn text-white">Primary</Button>
                <Button variant="raised" color="secondary" className="jr-btn text-white">Secondary</Button>
                <Button variant="raised" className="jr-btn bg-warning text-white">Warning</Button>
                <Button variant="raised" className="jr-btn bg-info text-white">Info</Button>
                <Button variant="raised" className="jr-btn bg-success text-white">Success</Button>
                <Button variant="raised" className="jr-btn bg-danger text-white">Danger</Button>
            </div>
            <h4 className="sub-heading"> Optional Material Design Colors</h4>
            <div className="jr-btn-group">
                <Button variant="raised" className="jr-btn bg-cyan text-white">Cyan</Button>
                <Button variant="raised" className="jr-btn bg-teal text-white">Teal</Button>
                <Button variant="raised" className="jr-btn bg-amber text-white">Amber</Button>
                <Button variant="raised" className="jr-btn bg-orange text-white">Orange</Button>
                <Button variant="raised" className="jr-btn bg-deep-orange text-white">Deep Orange</Button>
                <Button variant="raised" className="jr-btn bg-red text-white">Red</Button>
                <Button variant="raised" className="jr-btn bg-pink text-white">Pink</Button>
                <Button variant="raised" className="jr-btn bg-light-blue text-white">Light Blue</Button>
                <Button variant="raised" className="jr-btn bg-blue text-white">Blue</Button>
                <Button variant="raised" className="jr-btn bg-indigo text-white">Indigo</Button>
                <Button variant="raised" className="jr-btn bg-lime text-white">Lime</Button>
                <Button variant="raised" className="jr-btn bg-light-green text-white">Light Green</Button>
                <Button variant="raised" className="jr-btn bg-purple text-white">Purple</Button>
                <Button variant="raised" className="jr-btn bg-deep-purple text-white">Deep Purple</Button>
                <Button variant="raised" className="jr-btn bg-green text-white">Green</Button>
                <Button variant="raised" className="jr-btn bg-grey text-white">Grey</Button>
                <Button variant="raised" className="jr-btn bg-blue-grey text-white">Blue Grey</Button>
                <Button variant="raised" className="jr-btn bg-black text-white">Black</Button>
            </div>
        </div>
    );
};

export default ColorScheme;