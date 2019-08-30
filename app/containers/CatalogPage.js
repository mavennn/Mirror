import React from 'react';
import { connect } from 'react-redux';
import Catalog from '../components/Catalog';

const CatalogPage = () => <Catalog />


export default connect()(CatalogPage);