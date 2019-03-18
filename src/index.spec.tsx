import * as React from 'react'
import {shallow} from 'enzyme'
import RootComponent from './App'

describe(`Root Component`, function () {
    it(`should render the sub components correctly`, function () {
        const component = shallow(<RootComponent />)

        expect(component.find('p').text()).toEqual('Some Text')
    })
})