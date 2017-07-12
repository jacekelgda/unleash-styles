/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'

import Logo from '../index'

test('Logo renders correctly', () => {
  const wrapper = shallow(<Logo />)
  expect(wrapper).toMatchSnapshot()
})
