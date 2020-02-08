import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import AddTodo from "./addTodo";

describe('<AddTodo />', () => {
  it('AddTODO Input ', () => {
    const wrapper = shallow(<AddTodo />);
    wrapper.find("input").simulate("change", {
        target:{value: "hello"}
    })
    expect(wrapper.find("input").props().value).toEqual("hello");
  });

  it('form submission', () => {
    const wrapper = shallow(<AddTodo addTodo={()=> console.log("hbhj")}/>);
    let prevented = false;
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}        
    })
  });
});