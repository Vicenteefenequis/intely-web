import React from 'react';
import { Container,IconSettings ,IconsBell} from './styles';

const ServerOptions: React.FC = () => {
  return (
      <Container>
          <button>
                <IconSettings size={30}/>
          </button>
          <button>
                <IconsBell size={30}/>
        </button> 
      </Container>
  );
}
export default ServerOptions;