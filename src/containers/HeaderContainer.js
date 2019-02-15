import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/Header/Header";
import { submitPost } from "../redux/actions/postsActions"

class HeaderContainer extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false,
            caption: "",
            formData: null
        };
    }

    toggleModal = () => this.setState({ isOpen: !this.state.isOpen });

    onInputChange = (e) => this.setState({ caption: e.target.value });

    onImageUpload = e => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        const formData = new FormData();


        formData.append("media", file);

        fileReader.onloadend = () => this.setState({ formData });

        fileReader.readAsDataURL(file);
    };

    onPostSubmit = () => {
        const { caption, formData } = this.state;
        this.props.submitPost(formData, caption);
        this.setState({ isOpen: false });

        console.log("submitted");

    };


    render() {
        const { isOpen } = this.state;
        console.log(this.state.formData);
        return <Header isOpen={isOpen}
            toggleModal={this.toggleModal}
            onInputChange={this.onInputChange}
            onImageUpload={this.onImageUpload}
            onPostSubmit={this.onPostSubmit}
        />;
    }
}

const mapDispatchToProps = {
    submitPost
};



export default connect(
    null,
    mapDispatchToProps)(HeaderContainer);

