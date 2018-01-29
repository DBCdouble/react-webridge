import React from 'react';
import HeaderContain from './Header/index';
import ContentContainer from './Content';
export default class extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){}
    render(){
        return(
            <div>
                <div className="app-header"><HeaderContain/></div>
                <div className="app-content"><ContentContainer/></div>
            </div>
        )
    }
}