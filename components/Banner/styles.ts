import styled from 'styled-components';

export const Container = styled.section<any>`
  width: 100%;
  height: 630px;

  background-image: url(${({ background }: any) => background.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 4px;

    position: absolute;
    top: 8px;

    background-color: ${({ theme }) => theme.color.border};
  }
`