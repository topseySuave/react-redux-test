import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetails extends Component{
    render(){
        const user = this.props.user;
        if(!user){
            return (<div>select a user.....</div>);
        }
        return (
            <div>
                <img src={user.thumbnail} alt={user.firstName} />
                <h2>{user.firstName} {user.lastName}</h2>
                <h3>Age: {user.age}</h3>
                <h3>description: {user.description}</h3>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeUser: state.activeUser
    }
};

export default connect(mapStateToProps)(UserDetails);