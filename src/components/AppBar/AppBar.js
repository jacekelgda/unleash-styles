import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './AppBar.css'

class AppBar extends Component {
  render() {
    const { appBarLogo } = this.props
    return (
      <header className={styles.AppBar}>
        {appBarLogo}
        {this.props.children}
    	</header>
    )
  }
}

AppBar.propTypes = {
  appBarLogo: PropTypes.object
}

export default AppBar
