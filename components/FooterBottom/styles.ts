import styled from 'styled-components';

export const Container = styled.footer`
  height: 56px;

  padding: 0 5.3%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.color.secondary_600};
  
  p { 
    font-family: ${({ theme }) => theme.typography.family[1]};
    font-weight: ${({ theme }) => theme.typography.weight[0]};
    font-size: ${({ theme }) => theme.typography.size[1]};
    
    color: ${({ theme }) => theme.color.main};
  }
`;