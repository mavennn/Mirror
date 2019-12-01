import React from 'react';
import { connect } from 'react-redux';

import CatalogPage from './CatalogPage';

const CatalogPageContainer = () => <CatalogPage />;

export default connect()(CatalogPageContainer);
