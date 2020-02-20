import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import HomePage from '../components/HomePage';

it('renders without crashing', () => {
  render(<HomePage />);
});

it('renders HomePage correctly', () => {
  const tree = renderer.create(<HomePage />).toJSON();
  expect(tree).toMatchSnapshot();
});