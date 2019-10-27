import React from "react";
import useInputState from "./hooks/useInputState";

export default function SimpleFormInputHook() {
    const [email, updateEmail, resetEmail] = useInputState("");
    const [password, updatePassword, resetPassword] = useInputState("");
    return (
        <div>
            <div>
                <h1>Email... {email}</h1>
                <input type="text" value={email} onChange={updateEmail} />
                <button onClick={resetEmail}>Reset</button>
            </div>
            <div>
                <h1>The password is...{password}</h1>
                <input
                    type="password"
                    value={password}
                    onChange={updatePassword}
                />
                <button onClick={resetPassword}>Reset</button>
            </div>
        </div>
    );
}
