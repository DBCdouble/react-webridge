import React from 'react';
import './index.css';
import EditableCell from '../EditableCell/index';
import {Table,Rate,Button,Modal,Input} from 'antd';
const confirm = Modal.confirm;
export default class extends React.Component{
    constructor(props){
        super(props);
       
        this.state={
            editable:false
        }
    }
    componentWillMount(){
        if(!localStorage.getItem('data')){
            const dataSource = [{
                key:0,
                name: '胡彦斌',
                year: 2018,
                grape:'开卷考交电费',
                rating:3
              }];
            localStorage.setItem('data',JSON.stringify(dataSource));
           
        }
        this.props.param.tableActions.getData({
            data:JSON.parse(localStorage.getItem('data'))
        })
        
    }

    openModal(flag,record){
        if(flag=="view"){
            this.props.param.modalActions.setModalVisible({
                ModalVisible: true,
                title:flag,
                record:record
            })
        }else if(flag=="edit"){
            this.props.param.modalActions.setModalVisible({
                ModalVisible: true,
                title:flag,
                record:record
            })
        }
    }
    delModal(record){
        var obj=this.props;
        confirm({
            title: 'Are you sure you want to delete"'+record.name+'"',
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk(){
                const list=JSON.parse(localStorage.getItem('data'));
                for (var i=0;i<list.length;i++) {
                    if (list[i].key == record.key) {
                      /*splice替换key相等的两个对象*/
                      list.splice(i,1);
                      localStorage.setItem('data',JSON.stringify(list));
                    }
                }
                obj.param.tableActions.getData({
                    data:JSON.parse(localStorage.getItem('data'))
                })
                obj.param.modalActions.setModalVisible({
                    ModalVisible: false,
                })
            },
            onCancel(){
                obj.param.modalActions.setModalVisible({
                        ModalVisible: false,
                })
            },
          });
    }

    onCellChange(key, dataIndex) {
        return (value) => {
          const dataSource = [...JSON.parse(localStorage.getItem('data'))];
          const target = dataSource.find(item => item.key === key);
          if (target) {
            target[dataIndex] = value;
            // this.setState({ dataSource });
            localStorage.setItem('data',JSON.stringify(dataSource));
            this.props.param.modalActions.setModalVisible({
                record: dataSource
            })
            this.props.param.tableActions.getData({
                data:JSON.parse(localStorage.getItem('data'))
            })
          }
        };
      }

    render(){
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width:'20%',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.name.length - b.name.length,
            render:(text,record)=>{
                return(
                <EditableCell
                value={text}
                onChange={this.onCellChange(record.key, 'name')}
                editableFlag='name'
              />
            )
            }
          }, {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
            width:'20%',
            defaultSortOrder: 'descend',

            sorter: (a, b) => a.year - b.year,
            render:(text,record)=>{
                return(
                <EditableCell
                value={text}
                onChange={this.onCellChange(record.key, 'year')}
                editableFlag='year'
              />
            )
            }
          }, {
            title: 'Grape',
            dataIndex: 'grape',
            key: 'grape',
            width:'20%',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.grape.length - b.grape.length,
            render:(text,record)=>{
                return(
                <EditableCell
                value={text}
                onChange={this.onCellChange(record.key, 'grape')}
                editableFlag='grape'
              />
            )
            }
          }, {
            title: 'Rating',
            dataIndex: 'rating',
            key: 'rating',
            width:'20%',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.rating - b.rating,
            render:(text,record)=>{
                return (<Rate value={Number(text)} disabled={true}/>)
            }
          }, {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            width:'20%',
            render:(text,record)=>{
                return (
                    <div>
                        <Button type="primary" onClick={this.openModal.bind(this,'view',record)}>View</Button>
                        <Button type="default" onClick={this.openModal.bind(this,'edit',record)}>Edit</Button>
                        <Button type="danger" onClick={this.delModal.bind(this,record)}>Delete</Button>
                    </div>
            )
            }
          }];
        return(
            <div>
                <Table dataSource={this.props.param.table.data} columns={columns} pagination={false}/>
            </div>
        )
    }
}