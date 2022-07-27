import styled from 'styled-components';

export const Container = styled.header`
  height: 50px;

  padding: 0 5.3%;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.color.primary};

  font-family: ${({ theme }) => theme.typography.family[0]};
  font-weight: ${({ theme }) => theme.typography.weight[1]};
  font-size: ${({ theme }) => theme.typography.size[2]};
  
  color: ${({ theme }) => theme.color.main};
`;