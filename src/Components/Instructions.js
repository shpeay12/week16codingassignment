import React from "react"; //Imports dependencies

function Instructions({ instructions }) { //Creates Instructions dependencies, passes instructions as prop
    return ( //Renders instructions from API
        <div className="recipe-instructions">
            <h5>Instructions:</h5>
            <p>{instructions}</p>
        </div>
    );
}

export default Instructions;