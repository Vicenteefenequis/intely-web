import React from 'react';


import { Container ,Card,CardsWrapper,ProgressBadge} from './styles';

const MainContent: React.FC = () => {
  return (
      <Container>
          <CardsWrapper>
                <Card variants="green">
                           <div>
                                   <h4>Your <strong>ratting</strong> <br/> is perfect: </h4>
                                   <ProgressBadge variants="green">
                                        <p>81%</p>
                                   </ProgressBadge>
                           </div>
                </Card>
                <Card variants="white">
                        <div>
                                   <h4>Your <strong>ratting</strong> <br/> is perfect: </h4>
                                   <ProgressBadge variants="white">
                                        <p>81%</p>
                                   </ProgressBadge>
                           </div>
                </Card>
          </CardsWrapper>
          <div>
             
          </div>
      </Container>
  );
}

export default MainContent;