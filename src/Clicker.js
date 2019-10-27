import React, { useState, useEffect } from "react";

export default function Clicker() {
    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${clicks} times`;
    }, [clicks]);

    return (
        <div>
            <button onClick={() => setClicks(clicks + 1)}>Click...</button>
        </div>
    );
}
