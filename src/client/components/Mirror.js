import React from 'react';

const Mirror = props => (
  <div id="mirror">
    <button id="go-mirror-btn" onClick={() => props.router.goBack()} />
  </div>
);

export default Mirror;
