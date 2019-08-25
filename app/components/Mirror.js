import React from 'react';

const Mirror = props => (
  <div id="mirror">
    <button id="go-mirror-btn" onClick={() => props.history.goBack()} />
    <h1>MIRROR</h1>
  </div>
);

export default Mirror;
