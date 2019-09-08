import React from 'react';
import './Intro.scss';

class Intro extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="intro">
                Hello World!
            </div>
        )
    }
}

export default Intro;