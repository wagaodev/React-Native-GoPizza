import styled, { css } from 'styled-components/native';

import { Props } from '.';

export const Container = styled.View<Props>`
  width: 100%;
  padding: 16px 18px;
  font-family: 'DMSans-Regular';
  font-size: 14px;
  color: ${({ theme }) => theme.colors.BLACK};
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  border-radius: 5px;
  margin-bottom: 8px;

  ${({ active, theme }) =>
    active &&
    css`
      border-width: 3px;
      border-color: ${theme.colors.BLACK};
    `}
`;
