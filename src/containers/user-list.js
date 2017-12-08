import React, {Component} from 'react';
import {actionCreators} from 'redux';
import {connect} from 'react-redux';


class UserList extends Component{
    render(){
        return (
            <ul>
                <li>One</li>
                <li>two</li>
                <li>three</li>
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

export default connect(mapStateToProps)(UserList);