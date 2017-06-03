import React from "react";
import { connect } from "react-redux"
import { setUserName } from "../actions/userActions"

import Title from "./Header/Title";

@connect((store) => {
  return {
    user: store.user.user,
  }
})
export default class Header extends React.Component {

  componentWillMount() {
    console.log(this.props)
  }

  onChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  changeName(e) {
    const name = this.state.name
    console.log(name)
    this.props.dispatch(setUserName(name))
  }

  render() {
    const { user } = this.props
    return (
      <div>
        <Title title={this.props.title} />
        <input type="test" name="name" onChange={this.onChange.bind(this)}/>
        <button onClick={this.changeName.bind(this)}>submit</button>
      </div>
    );
  }
}