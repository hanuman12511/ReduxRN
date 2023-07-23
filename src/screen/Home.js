import React, { Component } from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux';
import * as action from '../redux/home/actions';

 class Home extends Component {

  constructor(props){
    super(props);

    console.log('====================================');
    console.log("props=",this.props);
    console.log('====================================');
  }
  componentDidMount(){
    this.HomeData();
  }

  HomeData=()=>{
    const data={
      user:'admin9',
      pass:'12345'
    }
    this.props.UserDta(data);
    const res = this.props.isGetUesr
    console.log('====================================');
    console.log("res=",res);
    console.log('====================================');
  }
  render() {
    return (
      <View>
        {this.HomeData()}
      </View>
    );
  }
}


const mapStateToProps=state=>(
  {
  isGetUesr: state.home.getUser.user,
 }
)
const mapDispatchToProps=(dispatch)=>({
  
  UserDta:(data)=>dispatch(action.Login(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)