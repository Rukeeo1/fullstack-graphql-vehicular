import { Container, Tab, NotFoundWrap, Title, TitleContainer } from './styles';
import { useHistory } from 'react-router-dom';

import { Button } from 'components/index';

export const NotFound = () => {
  const history = useHistory();
  const goToBikes = () => history.push('/bikes');
  return (
    <Container>
      <NotFoundWrap>
        <Tab />
        <TitleContainer>
          <TitleContainer>
            <Title>

            The page you are looking for, doesn't exists
            </Title>
          </TitleContainer>
        </TitleContainer>
        <Button onClick={goToBikes}>Go Back To Home</Button>

        <Tab />
      </NotFoundWrap>
    </Container>
  );
};

export default NotFound;
