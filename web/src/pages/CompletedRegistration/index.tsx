import React from 'react';

// import ebaImage from '../../images/eba.png';

import { Container, GoBackButton, ContentWrapper } from './styles';

const CompleteRegistration: React.FC = () => {
  return (
    <Container>
      {/* <img src={ebaImage} className="image" alt="Happy" /> */}
      <ContentWrapper>
        <main>
          <h1>Ebaaa!</h1>
          <p>
            Orfanato cadastrado com sucesso
            e agora você já pode acessa-lo.</p>
        </main>
        <GoBackButton to="/app">
          Voltar para o mapa
        </GoBackButton>
      </ContentWrapper>
    </Container>
  );
}

export default CompleteRegistration;
