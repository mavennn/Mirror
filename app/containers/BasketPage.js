// @flow
import React, { Component } from 'react';
import Basket from '../components/Basket/Basket';

type Props = {};

export default class HomePage extends Component<Props> {
    props: Props;

    render() {
        return <Basket />;
    }
}
