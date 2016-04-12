import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';

import Header from '../components/Header';

export default class MasterPage extends React.Component {

  render() {
    return (
      <DocumentTitle title='My React App'>
        <div className='MasterPage'>
          <Header />
          { this.props.children }
        </div>
      </DocumentTitle>
    );
  }
}

MasterPage.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired
}
