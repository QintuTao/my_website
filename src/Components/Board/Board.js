import React from 'react';
import './Board.scss';
import Profile from './About/Profile';
import Portolio from './Portfolio/Portfolio';
import Portfolio from './Portfolio/Portfolio';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.name == "about-me") {
            return (
                <div className="board">
                    <Profile />
                </div>
            )
        } else if (this.props.name == "portfolio") {
            return (
                <div className="board">
                    <Portfolio />
                </div>
            )
        }
    }
}

export default Board;
