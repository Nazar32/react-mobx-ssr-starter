import React from 'react';
import PropTypes from 'prop-types';

export default class ContextProvider extends React.Component {
  static childContextTypes = {
    insertCss: PropTypes.func,
  };

  getChildContext() {
    return { ...this.props.context }
  }

  render () {
    return React.Children.map(this.props.children, child => (
      React.cloneElement(child, this.props)
    ));
  }
}
