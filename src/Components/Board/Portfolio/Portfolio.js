import React from 'react';
import Title from '../../Title/Title';
import Card from "./Card /Card";
import './Portfolio.scss';


const Portfolio = (props) => {
    return (
        <div className="portfolio">
            <Title field="portfolio" />
            <Card />
        </div>
    )
}

export default Portfolio;