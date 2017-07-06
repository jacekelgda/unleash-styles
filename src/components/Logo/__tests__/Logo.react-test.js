
/* global test, expect */
import React from 'react'
import renderer from 'react-test-renderer'

import Logo from '../index'

test('Logo renders correctly', () => {
  const tree = renderer.create(
    <Logo />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
