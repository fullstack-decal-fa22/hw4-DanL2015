import React, { useState } from 'react';
import Color from './Color'
import Block from './Block'

/* Add any imports you think you might need here! */

const Menu = (props) => { 

    return (
      <div className="colorOptions">
          <Color handleClick={() => { props.addPost("red") }} color="red"></Color>
          <Color handleClick={() => { props.addPost("orange") }} color="orange"></Color>
          <Color handleClick={() => { props.addPost("yellow") }} color="yellow"></Color>
      </div>
    );
}

export default Menu;