import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 65px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  position: absolute;
  bottom: 0;

  font-family: ${({ theme }) => theme.typography.family[0]};
  font-weight: ${({ theme }) => theme.typography.weight[1]};
  font-size: ${({ theme }) => theme.typography.size[2]};

  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.background};
  backdrop-filter: blur(10px);

  border: none;
  cursor: pointer;
`;

export const Icon = styled.span<any>`
  width: 50px;
  height: 15px;

  display: flex;

  background-image: url(${({ image }) => image.src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;