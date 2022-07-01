import React, {useContext} from "react";
import Button from "@mui/material/Button";
import {Context} from "./App";

export function Counter() {
    const context = useContext(Context);
    return (
        <div>
            <p>You clicked {context.count} times</p>
            <Button variant="outlined" color="success" onClick={() => context.setCount(context.count + 1)}>
                Click me
            </Button>
        </div>
    );
}
