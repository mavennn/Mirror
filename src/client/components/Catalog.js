import React from 'react';

import Header from './Header';
import BarCode from './BarCodeInput';

class Catalog extends React.Component{
    render(){
        return(
        <>
            <Header />
            Catalog
            <BarCode />
        </>
        );
    }
}

export default Catalog;