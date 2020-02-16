import React from 'react'
import './Title.scss';

class Title extends React.Component {
    render() {
        if (this.props.field == "about") {
            return (
                <div className="title-text">
                    ABOUT ME
                </div>
            )
        } else if (this.props.field == "portfolio") {
            return (
                <div className="title-text">
                    PORTFOLIO
                </div>
            )
        }
    }
}

export default Title;