import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  
  padding: 64px 5.3%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const Content = styled.div<any>`
  width: 100%;
  height: 1838px;
  
  background-image: url(${({ background }: any) => background.src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;