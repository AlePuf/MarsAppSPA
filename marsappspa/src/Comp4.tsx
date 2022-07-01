import React, {useContext} from "react";
import {Context} from "./App";

export function Comp4() {
    const context = useContext(Context);
    return (
        <div>
            {context.count}
        </div>
    );
}