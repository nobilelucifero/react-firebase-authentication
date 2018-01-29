import React, { Component } from 'react';
// import { browserHistory } from 'react-router-dom';
import { db } from '../../firebase';


export default class ProfilePage extends Component {

  // constructor(props) {
  constructor() {
    super();
    // super(props);

    this.state = {
      loading: true,
      user:{
          email: "placeholder@example.com",
          username: "…"
        }
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id
    console.log('UID:', id);

    db.getUserByUsername(id).then(data =>
      this.getProfileInfo(data)
      // this.setState(() => ({ user: results.val() }))
    );
  }

  getProfileInfo(data) {
    // TODO: ugly!
    const userData = data.val()[Object.keys(data.val())[0]]
    this.setState({loading: false, user: userData})
  }

  render () {
    const { loading, user } = this.state;
    return (
      !loading &&
      <div>
        <h1>Profile of {user.username}!!!</h1>
        <p>Hello {user.email}</p>
      </div>
    )
  }
}
