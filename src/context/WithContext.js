import React from 'react';
import { Context } from './store';

export function WithContext(Component) {
    return function WrapperComponent(props) {
        return (
            <Context.Consumer>
                {state => <Component {...props} context={state} />}
            </Context.Consumer>
        );
    };
};