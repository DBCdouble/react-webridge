import React from 'react';
import {Button,Input} from 'antd';
import './index.css';
export default class extends React.Component{
        constructor(props){
            super(props);
          
        }
        /*添加任务*/
        addItem (){
            this.props.param.modalActions.setModalVisible({
                ModalVisible: true,
                title:'add',
                record:''
            })
        }
        search(e){
            const data =JSON.parse(localStorage.getItem('data'));
            const arr=[];
            if(e.target.value){
                for(var i=0;i<data.length;i++){
                 
                    if(data[i].name.toUpperCase().indexOf(String(e.target.value).toUpperCase()) != -1){
                        arr.push(data[i]);
                    
                        this.props.param.tableActions.getData({
                            data:arr
                        })
                    }
                    if(String(data[i].year).toUpperCase().indexOf(e.target.value.toUpperCase()) != -1){
                        arr.push(data[i]);
                    
                        this.props.param.tableActions.getData({
                            data:arr
                        })
                    }
                    if(data[i].grape.toUpperCase().indexOf(e.target.value.toUpperCase()) != -1){
                        arr.push(data[i]);
                    
                        this.props.param.tableActions.getData({
                            data:arr
                        })
                    }
              
                }
            }else{
                this.props.param.tableActions.getData({
                    data:JSON.parse(localStorage.getItem('data'))
                })
            }
         
        }
        render(){
            return(
                <div>
                    <Button type="primary" size="large" icon="plus" className="btn-add" onClick={this.addItem.bind(this)}>Add</Button>
                    <Input size="large" placeholder="Search 1 record..." className="example-input" onChange={this.search.bind(this)}/>
                </div>
            )
        }
}