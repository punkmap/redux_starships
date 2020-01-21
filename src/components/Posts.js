import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchStarships } from '../actions/starshipActions'

class Posts extends Component {
    componentWillMount() {
        this.props.fetchStarships();
    }
    // componentWillReceiveProps(nextProps) {
    //     console.log('nextProps: ', nextProps);
    //     if(nextProps.newPost) {
    //         this.props.post.unshift(nextProps.newStarship);
    //     }
    // }
    render() {
        const starships = this.props.starships.map(ship => (
            <div key={ship.id}>
                <h2>{ship.name}</h2>
                <h5>{ship.model}</h5>
                <h5>{ship.manufacturer}</h5>
            </div>
        ));
        return (
            
            <div>
                <h1>{starships.length}</h1>
                <h1>Star-Wars starships!</h1>
                {starships}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchStarships: PropTypes.func.isRequired,
    starships: PropTypes.array.isRequired,
    newStarship: PropTypes.object,
}

const mapStateToProps = state => ({
    starships: state.starships.items,
    newStarship: state.starships.item,
})

export default connect(mapStateToProps, { fetchStarships }) (Posts);