import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../components/Homepage';

it('renders without crashing', () => {
  render(<HomePage />);
});

it('renders Home correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});