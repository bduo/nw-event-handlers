import React, {Component} from 'react';
import Accordion from './Accordion.js';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';


describe(`Accordion Component`, () => {
    const sections = [
        {
          title: 'Sloth',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Lemur',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Scorpion',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
    ]

    it('component renders empty li when sections prop is not given or supplied', () => {
        const wrapper = shallow(<Accordion />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('component renders no sections as active by default', () => {
        const wrapper = shallow(<Accordion sections={sections}/>)
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('component opens a clicked section', () => {
        const wrapper = shallow(<Accordion sections={sections}/>)
        wrapper.find('button').at(0).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('The component only opens the last section when multiple sections have been clicked.', () => {
        const wrapper = shallow(<Accordion sections={sections}/>)
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})