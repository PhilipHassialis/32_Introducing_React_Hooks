import React, { useState } from "react";

export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const [isHeartbroken, setIsHeartbroken] = useState(false);
    const toggleIsHappy = () => {
        setIsHappy(!isHappy);
    };
    const toggleIsHeartbroken = () => {
        setIsHeartbroken(!isHeartbroken);
    };
    return (
        <div>
            <h1 style={{ userSelect: "none" }} onClick={() => toggleIsHappy()}>
                {isHappy ? "🙂" : "😟"}
            </h1>
            <h1
                style={{ userSelect: "none" }}
                onClick={() => toggleIsHeartbroken()}
            >
                {isHeartbroken ? "💔" : "💖"}
            </h1>
        </div>
    );
}
