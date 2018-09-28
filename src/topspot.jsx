import React from 'react';
// This is the presentational component
const TopSpot = props => (
    
            <div className='well'>
                <a className='btn btn-primary' href={`https://maps.google.com/?q=${props.location}`} role='button'>Google Map it!</a>
                <h4>{props.name}</h4>
                <p>{props.description}</p>
            </div>
        )
    

export default TopSpot;
