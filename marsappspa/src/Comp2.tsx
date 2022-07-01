import React, {useContext} from "react";
import {Context} from "./App";

export function Comp2() {
    const context = useContext(Context);
    return (
        <div>
            <button onClick={() => context.setCount(context.count + 1)}>
                Click me
            </button>
        </div>
    )
}