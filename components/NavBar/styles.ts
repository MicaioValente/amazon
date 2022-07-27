import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    gap: 48px;

    li {
      list-style: none;

      a {
        text-decoration: none;
        
        font-family: ${({ theme }) => theme.typography.family[0]};
        font-weight: ${({ theme }) => theme.typography.weight[1]};
        font-size: ${({ theme }) => theme.typography.size[2]};
        
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }
`;