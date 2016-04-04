import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';
import Header from './Header';

export default class is extends React.Component {
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
