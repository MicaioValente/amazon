import styled from 'styled-components';

export const Container = styled.header`
  height: 85px;

  padding: 0 5.3%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background-color: ${({ theme }) => theme.color.background};
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 20px -15px ${({ theme }) => theme.color.primary};

  position: sticky;
	top: 0;

  z-index: 1;
`;