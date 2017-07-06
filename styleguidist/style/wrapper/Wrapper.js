import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';

const style = {
  position: 'relative',
  width: '100%',
  minHeight: '100px'
}

export default class Wrapper extends Component {
  render() {
    return (
      <div style={style}>
        <IntlProvider locale="en">
          {this.props.children}
        </IntlProvider>
      </div>
    )
  }
}
