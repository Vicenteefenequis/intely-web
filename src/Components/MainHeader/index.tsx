import React from 'react';


 import { Container,Input ,Button} from './styles';

const ServerName: React.FC = () => {
  return (
    <Container>
              <Input placeholder="Search..."/>
              <Button>
                  <p>Chat</p>
              </Button>
    </Container>
  );
}

export default ServerName;