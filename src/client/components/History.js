import React from 'react';
import { connect } from 'react-redux';
import { setCurrenItem } from '../actions/items';

class History extends React.Component{
    render(){
        const historyItems = this.props.historyItems;
        return(
            <div id="history">
                <ul style={{"display": "flex"}}>
                {historyItems.map( i => {
                    return(
                        <li key={i.vendor_code}>
                            <img 
                                src={require(`../assets/img/${i.vendor_code}-1.png`)} 
                                onClick={() => {this.props.setCurrenItem(i)}}    
                            />
                            <p>{i.title}</p>
                        </li>
                    );
                })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        historyItems: state.items.historyItems,
    }
}

const mapDispatchToProps = {
    setCurrenItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(History);