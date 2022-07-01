import React from "react";
import {Props} from './Props';

export function Component(props: Props) {
    return (
        <div className="NASA">
            <h1>{props.name}</h1>
            {props.children}
            <img src={props.image} className="Component-logo" height={400} width={800} alt="NASA" />
        </div>
    )
}