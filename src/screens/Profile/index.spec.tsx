import React from 'react';

import { render } from '@testing-library/react-native';

import { Profile } from '.';

test('check if show correctly user input name placeholder', () => {
  const { getByPlaceholderText } = render(<Profile />);

  expect(getByPlaceholderText('Nome')).toBeTruthy();
  expect(getByPlaceholderText('Sobrenome')).toBeTruthy();
  expect(getByPlaceholderText('Nome').props.autoCorrect).toBe(false);
});
