import React from "react"
import { connect } from "react-redux"

import Header from "./Header"

import { fetchUser, setUserName } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"

@connect((store) => {
  return {
    user: store.user.user,
    tweets: store.tweets.tweets,
  }
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  fetchTweets() {
    this.props.dispatch(fetchTweets())
  }

  render() {
    const { user, tweets } = this.props;

    const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)
    
    return (
      <div>
        <Header title = { user.name }/>
        <h1>Layout: { user.name }</h1>
        <ul>{ mappedTweets }</ul>
      </div>
    );
  }
}