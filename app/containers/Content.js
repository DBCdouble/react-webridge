import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActionsFromOtherFile from '../redux/actions/modal';
import * as tableActionsFromOtherFile from '../redux/actions/table';
import ToolbarContain from './Toolbar/index';
import ListTaskContain from './ListTask/index';
import ModalContent from './Modal/index';
class ContentContainer extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
     
    }
    render(){
        return(
            <div>
                 <div className="app-toolbar"><ToolbarContain param={this.props}/></div>
                <div className="app-datagrid"><ListTaskContain param={this.props}/></div>
                <div><ModalContent param={this.props}/></div>
            </div>
        )
    }
}


function mapStateToProps(state,ownProps){
	return {
			modal:state.modal,
			table:state.table
	}
}
function mapDispatchToProps(dispatch,ownProps){

	return{
		 modalActions: bindActionCreators(modalActionsFromOtherFile, dispatch),
		 tableActions: bindActionCreators(tableActionsFromOtherFile, dispatch)
	}

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentContainer)