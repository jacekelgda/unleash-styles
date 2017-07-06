import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Menu.css'
import MenuButton from './MenuButton'

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleShow: false
    }
  }

  handleClick() {
    this.setState({
      toggleShow: !this.state.toggleShow,
    })
  }

  render() {
    const { menuButton, alwaysOpened } = this.props
    const listClasses = [styles.MenuList, ((this.state.toggleShow || alwaysOpened) && styles.MenuList_active)].join(' ')
    return (
      <nav className={styles.Menu}>
      	<div onClick={(e) => this.handleClick(e)}>{menuButton}</div>
      	<ul className={listClasses}>
          {this.props.children}
      	</ul>
      </nav>
    )
  }
}

Menu.defaultProps = {
  menuButton: (<MenuButton />),
  alwaysOpened: false,
}

Menu.propTypes = {
  menuButton: PropTypes.object,
  alwaysOpened: PropTypes.bool,
}

export default Menu
