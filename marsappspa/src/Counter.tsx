import React, {useState, useContext} from "react";
import Button from "@mui/material/Button";
import {Context} from "./App";

export function Counter() {
    const context = useContext(Context);
    const [show, setShow] = useState(false);
    return (
        <div>
            <p>You clicked {context.count} times</p>
            <Button variant="outlined" color="success" onClick={() => context.setCount(context.count + 1)}>
                Click me
            </Button>
            <hr />
            <Button variant="outlined" color="error" onClick={() => setShow(true)}>
               Reset
            </Button>
            {show && <Button variant="outlined" color="error" onClick={() => {
                window.alert("Counter reset");
                setShow(false);
                context.setCount(0);
            }}>
                Are you sure?
            </Button>}
        </div>
    );
}
