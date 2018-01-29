import React from 'react';
import {Modal,Form,Tooltip,Icon,Input,Rate,InputNumber,AutoComplete } from 'antd';
const FormItem =Form.Item;
const { TextArea } = Input;
class ModalCompo extends React.Component{
    constructor(props){
        super(props);

    }
    handleOk(method){
       
            this.props.form.validateFieldsAndScroll((err, values) => {
              if(method=="Add"){
                  const list=JSON.parse(localStorage.getItem('data'));
                  const arr=[];
                  for(var i=0;i<list.length;i++){
                    arr.push(list[i].key)
                  }
                  /*筛选出数组中最大的值以确定key的唯一性*/
                  values.key=Math.max.apply(null,arr)+1;
                  list.push(values);
                  localStorage.setItem('data',JSON.stringify(list));
                  this.props.param.tableActions.getData({
                    data:JSON.parse(localStorage.getItem('data'))
                })
              }else if(method=="Save"){
                  const list=JSON.parse(localStorage.getItem('data'));
                  for (var i=0;i<list.length;i++) {
                      if (list[i].key == values.key) {
                        /*splice替换key相等的两个对象*/
                        list.splice(i,1,values);
                        localStorage.setItem('data',JSON.stringify(list));
                        this.props.param.tableActions.getData({
                          data:JSON.parse(localStorage.getItem('data'))
                      })
                      }
                    
                  }
              
              }
            })
        
        this.props.param.modalActions.setModalVisible({
            ModalVisible: false
        })
    }

    handleCancel(){
        this.props.param.modalActions.setModalVisible({
            ModalVisible: false
        })
      }
    resetForm(){
         //当切换登录注册Tabs时重置清空表单
		    this.props.form.resetFields();
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 6 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 15 },
            },
        };
        /*Modal层的标题*/
        const ModalHeaderText=this.props.param.modal.title=='view'?'Item Info':
        (this.props.param.modal.title=='edit'?'Edit Item':
        (this.props.param.modal.title=='add'?'Add New Item':''));
        /*Modal层的Footer按钮*/
        const ModalFooterButton=this.props.param.modal.title=='view'?'Ok':
        (this.props.param.modal.title=='edit'?'Save':
        (this.props.param.modal.title=='add'?'Add':''));
        return(
            <div>
                <Modal
                    title={ModalHeaderText}
                    visible={this.props.param.modal.ModalVisible}
                    onOk={this.handleOk.bind(this,ModalFooterButton)}
                    onCancel={this.handleCancel.bind(this)}
                    closable={false}
                    afterClose={this.resetForm.bind(this)}
                    okText={ModalFooterButton}
                    >
                    <Form>
                    <FormItem
                      {...formItemLayout}
                      label="Key"
                      style={{display:'none'}}
                    >
                      {getFieldDecorator('key',{initialValue:this.props.param.modal.title=='add'?'':this.props.param.modal.record.key})(
                        this.props.param.modal.title=='view'?<label>{this.props.param.modal.record.name}</label>:<Input/>
                      )}
                    </FormItem>
                    <FormItem
                      {...formItemLayout}
                      label="Name"
                    >
                      {getFieldDecorator('name',{initialValue:this.props.param.modal.title=='add'?'':this.props.param.modal.record.name})(
                        this.props.param.modal.title=='view'?<label>{this.props.param.modal.record.name}</label>:<Input/>
                      )}
                    </FormItem>

                  <FormItem
                  {...formItemLayout}
                  label="Year"
                  >
                  
                  {getFieldDecorator('year',{initialValue:this.props.param.modal.title=='add'?2017:this.props.param.modal.record.year})(
                    this.props.param.modal.title=='view'?<label>{this.props.param.modal.record.year}</label>:<InputNumber min={1900} max={2020}/>
                  )}
                  
                </FormItem>

                    <FormItem
                      {...formItemLayout}
                      label="Grape"
                    >
                      {getFieldDecorator('grape',{initialValue:this.props.param.modal.title=='add'?'':this.props.param.modal.record.grape})(
                        this.props.param.modal.title=='view'?<label>{this.props.param.modal.record.grape}</label>:
                       <AutoComplete
                       style={{ width: 200 }}
                       dataSource={dataSource}
                       placeholder="自动补全，尝试输入字母b"
                       filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                     />
                      )}
                    </FormItem>

                    <FormItem
                      {...formItemLayout}
                      label="Rating"
                    >
                      {getFieldDecorator('rating',{initialValue:this.props.param.modal.title=='add'?0:Number(this.props.param.modal.record.rating)})(
                        <Rate disabled={this.props.param.modal.title=='view'?true:false}/>
                      )}
                    </FormItem>
                    <FormItem
                      {...formItemLayout}
                      label="Comments"
                    >
                      {getFieldDecorator('comments',{initialValue:this.props.param.modal.title=='add'?'':this.props.param.modal.record.comments})(
                         this.props.param.modal.title=='view'?<label>{this.props.param.modal.record.comments}</label>:
                        <TextArea rows={4}/>
                      )}
                    </FormItem>
                  </Form>
                </Modal>
            </div>
        )
    }
}
const ModalCompoForm = Form.create()(ModalCompo);

export default ModalCompoForm