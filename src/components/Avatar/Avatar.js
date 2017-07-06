import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Avatar.css'

class Avatar extends Component {
  render() {
    const { label } = this.props
    return (
      <div>
      	<input type="checkbox" onClick={this.handleClick} className={styles.AvatarButton} id="avatar_button" />
      	<label className={styles.AvatarButtonLabel} for="avatar_button">{label}</label>
      </div>
    )
  }
}

Avatar.propTypes = {
  label: PropTypes.string,
}

export default Avatar
