import React from 'react'
import renderer from 'react-test-renderer'
import Tabs from '../Tabs'
import Tab from '../Tab'

test('Tabs renders correctly', () => {
  const tree = renderer.create(
    <Tabs>
      <Tab label="test" />
      <Tab label="test2" />
    </Tabs>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
