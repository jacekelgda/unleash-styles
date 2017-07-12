import React from 'react'
import { shallow } from 'enzyme'
import Menu from '../Menu'
import MenuItem from '../MenuItem'
import Avatar from '../../Avatar/Avatar'

test('Menu renders correctly', () => {
  const wrapper = shallow(<Menu/>)
  expect(wrapper).toMatchSnapshot()
})

test('Menu renders with MenuItems', () => {
  const wrapper = shallow(
    <Menu>
      <MenuItem label="test" type="important" />
      <MenuItem label="test2" type="emial" />
    </Menu>
  )
  expect(wrapper).toMatchSnapshot()
})

test('Menu renders with MenuItems and custom menu button', () => {
  const wrapper = shallow(
    <Menu menuButton={<Avatar label="test" />}>
      <MenuItem label="test@test.com" type="email" />
      <MenuItem label="test2" type="important" />
    </Menu>
  )
  expect(wrapper).toMatchSnapshot()
})
