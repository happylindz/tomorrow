import React, { Component } from 'react';
import Login from '../../components/login-form';
import AdminImg from './admin.jpg';
export default class extends Component {
  render() {
    return <div style={{ padding: 20, paddingTop: 10, width: 300, position: 'absolute', left: '50%', top: '40%', marginLeft: -150, marginTop: -150, borderRadius: 4, boxShadow: '0 4px 12px rgba(0,0,0,.15)', height: 300 }}>
      <img src={AdminImg} style={{ width: '100%', minHeight: 107 }} />
      <Login />
    </div>;
  }
}
