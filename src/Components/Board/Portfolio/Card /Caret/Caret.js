import React from 'react';
import "./Caret.scss";

function Caret(props) {
    // props:
    // caretName, folded, 

    const data = {
        "Team Project": ["GameOfApps"],
        "Personal Project": ["Personal Website", "Base-Convertor", "Uncertainty Calculator"]
    }

    // mapping data into caret items
    const ListItem = data[props.id].map((cur) => {
        return (
            <li id={cur} className={props.folded ? "nested" : "expended"} onClick={props.displayProject} key={cur} value={cur}>
                {cur}
            </li>
        )
    });

    return (
        <div>
            <span id={props.id.toLowerCase()} className={props.folded ? "caret-down" : "caret-title"} onClick={props.foldCaret}>{props.id}</span>
            <ul className="caret">
                {ListItem}
            </ul>
        </div>
    );
}


export default Caret;