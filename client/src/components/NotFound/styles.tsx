import styled from 'styled-components';

import { colors } from 'constants/index';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const NotFoundWrap = styled.div`
  width: 500px;
  max-height: 80%;
  max-width: 90%;
  margin: auto 0;
`;

export const Tab = styled.div`
  background: ${colors.purple};
  height: 60px;
  width: '100%';
`;

export const TitleContainer = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p``;
