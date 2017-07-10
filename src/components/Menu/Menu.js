import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Menu.css'
import MenuButton from './MenuButton'

/**
 * Menu component can be used to build list menus. They are hidden by defaul
 * but with menu button click they show up
 */
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
  /** Component that triggers opening and closing menu*/
  menuButton: PropTypes.object,
  /** Set true if you would like menu to be opened always */
  alwaysOpened: PropTypes.bool,
}

export default Menu
