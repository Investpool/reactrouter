import React from 'react'

function ServiceDetails(props) {
    return (
        <div>
            <h1>Service Details: {props.match.params.id}</h1>
            <p>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Officia inventore 
                 neque quaerat explicabo dolorum animi 
                 nihil nulla, sapiente quidem id iusto 
                 assumenda exercitationem pariatur quas.
                  Minima dolores praesentium aliquam odit.
            </p>
        </div>
    )
}

export default ServiceDetails;