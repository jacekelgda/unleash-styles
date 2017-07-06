import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './MenuItem.css'

const TYPE_LINK = 'link'
const TYPE_IMPORTANT = 'important'
const TYPE_EMAIL = 'email'

class MenuItem extends Component {
  render() {
    const { label, type } = this.props
    let element
    switch (type) {
      case TYPE_LINK:
        return (
          <li className={styles.MenuItem}>
            <a href="" className={styles.MenuItemLink}>{label}</a>
          </li>
        )
      case TYPE_IMPORTANT:
        return (
          <li className={`${styles.MenuItem} ${styles.MenuItemName}`}>
            {label}
          </li>
        )
      case TYPE_EMAIL:
        return (
          <li className={`${styles.MenuItem} ${styles.MenuItemEmail}`}>
            {label}
          </li>
        )
      default:
        return (
          <li className={styles.MenuItem}>
            {label}
          </li>
        )
    }
  }
}

MenuItem.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
}

export default MenuItem
