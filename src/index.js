import React, { useState } from 'react';
import Button from "./Button.js";

const MainFunc = () => {
const [color, setColor] = useState('red');



return (
    <Button color={color} setColor={setColor}/>
);
};

export default MainFunc;