import React, { Component } from 'react';
import './Spinner.sass';

class Spinner extends Component {
    render() {
        return (
        <div className="spinner-component">
            <div className="spinner-1"><div className="spinner-splash"></div><div className="spinner-2"></div></div>
        </div>
        );
    }
}




export default Spinner;
