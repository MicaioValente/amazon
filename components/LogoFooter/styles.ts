import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  &>div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;