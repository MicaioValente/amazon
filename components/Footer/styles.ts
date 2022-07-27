import styled from 'styled-components';

export const Container = styled.footer`
  height: 400px;

  padding: 64px 5.3%;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  background-color: ${({ theme }) => theme.color.primary};

  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 4px;

    position: absolute;
    top: 8px;

    background-color: ${({ theme }) => theme.color.border};
  }
`;