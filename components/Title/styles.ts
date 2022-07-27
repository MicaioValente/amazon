import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: ${({ theme }) => theme.typography.family[0]};
    font-weight: ${({ theme }) => theme.typography.weight[3]};
    font-size: ${({ theme }) => theme.typography.size[4]};
    
    color: ${({ theme }) => theme.color.paragraph};
  }
`

export const Icon = styled.span<any>`
  width: 330px;
  height: 30px;

  display: flex;

  background-image: url(${({ image }) => image.src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;