/** @flow */
import React, { Component } from 'react'
import styles from './MenuButton.css'
import PropTypes from 'prop-types'

/**
 * Default menu button
 */
class MenuButton extends Component {
  static defaultProps: Object

  handleClick () {
    const { onClick } = this.props
    onClick()
  }

  render () {
    return (
      <div className={styles.MenuButton} onClick={this.handleClick} />
    )
  }
}

MenuButton.defaultProps = {
  onClick: val => val
}

MenuButton.propTypes = {
  /** Function to be called after clicking button */
  onClick: PropTypes.func
}

export default MenuButton
