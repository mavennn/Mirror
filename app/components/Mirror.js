import React from 'react';
import Header from "./Header";

const Mirror = props => (
    <div id="mirror">
        <Header />
        <button id="go-mirror-btn" onClick={() => props.router.goBack()} />
    </div>
);

export default Mirror;
