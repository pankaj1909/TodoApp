import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import Todos from "./todos";
import AddTodo from "../components/addTodo";

describe('<Todos />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Todos />);
    const instance = wrapper.instance();
  });

  it('TODO Container', () => {
    const wrapper = shallow(<Todos />);
    expect(wrapper.find(AddTodo)).toHaveLength(1);
  });

});