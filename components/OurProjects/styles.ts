import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  
  padding: 64px 5.3%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  background-color: ${({ theme }) => theme.color.secondary_50};
`;