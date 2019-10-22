import React from 'react';
import { Link } from 'react-router-dom';

import * as backIcon from '../../assets/icons/back.svg';

const MirrorPage = props => (
  <div id="mirror">
    <Link to="" className=" mirror-btn header-block flex">
      <img src={backIcon} onClick={() => props.history.goBack()} />
    </Link>
  </div>
);

export default MirrorPage;
