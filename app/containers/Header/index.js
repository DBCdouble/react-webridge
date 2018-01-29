import React from 'react';
import HeaderCompo from '../../components/Header/index';
export default class extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){}
    render(){
        return(
            <div>
               <HeaderCompo/>
            </div>
        )
    }
}