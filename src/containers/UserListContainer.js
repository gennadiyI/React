import React, { Component } from "react";
import { getUsers } from "../redux/actions/userActions";
import { connect } from "react-redux";
import UserList from "../components/UserList/UserList";
import { Spinner } from "reactstrap";


class UserListContainer extends Component {

    render() {
        // console.log(this.state);
        const { users } = this.props;
        if (!users) {
            return <div><Spinner
                color="danger"
            /> loading ... </div>;
        }


        return <UserList users={users} />;
    }
}

const mapStateProps = state => {
    return {
        users: state.getUsersReducer.users
    };
};


const mapDispatchToProps = {

    getUsers
}
export default connect(mapStateProps, mapDispatchToProps)(UserListContainer);
