import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStarships } from '../actions/starshipActions'
class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'test',
            model: 'one',
            manufacturer: 'out',
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault();
        const newStarship= {
            name: this.state.name,
            model: this.state.model,
            manufacturer: this.state.manufacturer,
        }
        //CALL ACTION
        this.props.createStarships(newStarship)
    }
    render() {
        return (
            <div>
               <h1>Add Starship</h1> 
               <form>
                   <div>
                       <label>Ship Name:</label>
                       <input type="text" name="name" onChange={this.onChange}
                            value={this.state.name}/>
                   </div>
                   <br/>
                   <div>
                       <label>Ship Model:</label>
                       <input type="text" name="model" onChange={this.onChange}
                            value={this.state.model}/>
                   </div>
                   <br/>
                   <div>
                       <label>Ship Manufacturer:</label>
                       <input type="text" name="manufacturer" onChange={this.onChange}
                            value={this.state.manufacturer}/>
                   </div>
                   <br/>
                   <button type="submit" onClick={this.onSubmit}>Submit</button>
               </form>
            </div>
        )
    }
}

Postform.propTypes = {
    createStarships: PropTypes.func.isRequired
};

export default connect(null, { createStarships })(Postform)