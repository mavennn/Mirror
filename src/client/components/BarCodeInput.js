import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import axios from 'axios';

import { setCurrenItem, addToHistory, addToCapsule } from '../actions/items';

class BarCode extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            vendor_code: '',
        }
    }
  
    componentDidMount(){
        $('#vendor_code').focus();
    }

    render(){
        if(this.state.vendor_code.length != 0){
            // делаем запрос
            axios.get(`http://localhost:8080/thing/${(this.state.vendor_code)}`)
            .then(response => {
                console.log(response.data.id)
                var item = response.data
                
                axios.get(`http://localhost:8080/sizes/${item.id}`)
                .then(res => {
                    const sizes = res.data;
                    item["sizes"] = sizes;
                    this.props.setCurrenItem(item);
                    if(this.props.historyItems.findIndex(x => x.vendor_code === item.vendor_code) === -1){
                        this.props.addToHistory(item)
                    }
                })

                axios.get(`http://localhost:8080/capsule/${item.id_capsule}`)
                .then(res => {
                    this.props.addToCapsule(res.data);
                });
                $('#vendor_code').val('');
            })
        }
        return(
            <div>
                <input 
                    type="text" 
                    id="vendor_code" 
                    onChange={ (event) => { 
                        this.setState({vendor_code: String(event.target.value).substring(0,13),}) 
                    }}/>
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
    addToHistory,
    addToCapsule
}

export default connect(mapStateToProps, mapDispatchToProps)(BarCode);