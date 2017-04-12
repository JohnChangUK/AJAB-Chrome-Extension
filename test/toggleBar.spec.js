import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import ToggleBar from '../src/components/presentation/ToggleBar';
 describe('(Component) Comment', () => {
   let _wrapper

   beforeEach(() => {
    _wrapper = shallow(<ToggleBar onToggle={function(){}}/>)
    // console.log(_wrapper)
   })

   it('has a div element', () => {
     expect(_wrapper.find('div')).to.have.length(1)
   })

   it('renders the comments text', () => {
    //  console.log(_wrapper)
     expect(_wrapper.node.props.children).to.equal("AJAB ToggleBar Chrome Extension")
   })
 })
