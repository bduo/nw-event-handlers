import React, { Component } from 'react';
import './Accordion.css';

class Accordion extends Component {
    static defaultProps = {
        sections: [],
    };
    
    state = {
        currentSectionIndex: null
    }

    handleButtonClick(index) {
        console.log('button clicked!')
        this.setState({
            currentSectionIndex: index
        })
    }

    renderButtons = () => {
        return this.props.sections.map((sections, index) => (
          <li key={index} >
            <button onClick={() => this.handleButtonClick(index)}>
                {sections.title}
            </button>
            {(index === this.state.currentSectionIndex) && 
            <p>{sections.content}</p>}
          </li>
        ))
    }

    render() {
        return (
            <div>
                <ul>
                   {this.renderButtons()}
                </ul>
            </div>
    )}
}

export default Accordion