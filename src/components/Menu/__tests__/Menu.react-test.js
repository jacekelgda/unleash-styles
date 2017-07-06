import React from 'react'
import renderer from 'react-test-renderer'
import Menu from '../Menu'
import MenuItem from '../MenuItem'
import Avatar from '../../Avatar/Avatar'

test('Menu renders correctly', () => {
  const tree = renderer.create(
    <Menu/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Menu renders with MenuItems', () => {
  const tree = renderer.create(
    <Menu>
      <MenuItem label="test" />
      <MenuItem label="test2" />
    </Menu>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Menu renders with MenuItems and custom menu button', () => {
  const tree = renderer.create(
    <Menu menuButton={<Avatar label="test" />}>
      <MenuItem label="test" />
      <MenuItem label="test2" />
    </Menu>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
