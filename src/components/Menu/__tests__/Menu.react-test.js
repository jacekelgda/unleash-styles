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
      <MenuItem label="test" type="important" />
      <MenuItem label="test2" type="emial" />
    </Menu>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Menu renders with MenuItems and custom menu button', () => {
  const tree = renderer.create(
    <Menu menuButton={<Avatar label="test" />}>
      <MenuItem label="test@test.com" type="email" />
      <MenuItem label="test2" type="important" />
    </Menu>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
