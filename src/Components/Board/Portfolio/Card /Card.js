import React from 'react';
import Caret from "./Caret/Caret";
import "./Card.scss"
import CardDisplayView from './CardDisplay/CardDisplayView';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedId: "Personal Website",
            teamCaretFolded: false,
            personalCaretFolded: false
        }

        this.displayProject = this.displayProject.bind(this);
        this.foldCaret = this.foldCaret.bind(this);
    }

    // display the corresponding project in the CardDisplayView
    displayProject(event) {
        const targetId = event.target.id;
        this.setState((state) => {
            return {
                selectedId: targetId
            }
        });
    }

    // fold the caret 
    foldCaret(event) {
        if (event.target.id == "team project") {
            this.setState((state) => {
                console.log(state.teamCaretFolded);
                return {
                    teamCaretFolded: !state.teamCaretFolded
                }
            })
        } else if (event.target.id == "personal project") {
            this.setState((state) => {
                return {
                    personalCaretFolded: !state.personalCaretFolded
                }
            })
        }
    }

    render() {
        return (
            <div className="card">
                <div className="caret-container">
                    <Caret id="Team Project" folded={this.state.teamCaretFolded} displayProject={this.displayProject} foldCaret={this.foldCaret} />
                    <Caret id="Personal Project" folded={this.state.personalCaretFolded} displayProject={this.displayProject} foldCaret={this.foldCaret} />
                </div>
                <CardDisplayView currentDisplay={this.state.selectedId} />
            </div>
        )
    }
}

export default Card;
