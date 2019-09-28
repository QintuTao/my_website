import React from 'react';
import './Intro.scss';
import Profile from './Profile.js'

class Intro extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="intro">
               <Profile />
            </div>
        )
    }
}

export default Intro;