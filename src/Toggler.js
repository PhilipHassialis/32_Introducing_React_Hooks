import React from "react";
import useToggle from "./hooks/useToggle";

export default function Toggler() {
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isHeartbroken, toggleIsHeartbroken] = useToggle(false);

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
