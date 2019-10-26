import { useState } from "react";
// call useState
// return piece of state and a function to toggle it

const useToggle = (initialVal = false) => {
    // call useState, reserve a piece of state
    const [state, setState] = useState(initialVal);
    const toggle = () => {
        setState(!state);
    };
    return [state, toggle];
};

export default useToggle;
