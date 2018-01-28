import React, { Component } from 'react';
import { db } from '../../firebase';

export default class ProfilePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user:{
          email: "placeholder"
        }
    };
  }

  componentDidMount() {
    const uid = this.props.match.params.id
    console.log('UID:', uid);

    db.getUser(uid).then(data =>
      this.getProfileInfo(data)
      // this.setState(() => ({ user: results.val() }))
    );
  }

  getProfileInfo(data) {
    console.log(data.val())
    this.setState({loading: false, user: data.val()})
  }

  render () {
    const { loading, user } = this.state;
    return (
      !loading &&
      <div>
        <h1>Profile of {user.email}!!!</h1>
        <p>Helloooo!</p>
      </div>
    )
  }
}
