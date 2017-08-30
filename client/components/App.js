import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators';
import Main from './main/Main';

let mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments
  }
};

let mapDispachToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

const App = connect(mapStateToProps, mapDispachToProps)(Main);


export default App;