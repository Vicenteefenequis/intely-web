import React from 'react';
import { FiPlus,FiBook,FiCalendar,FiMessageSquare } from 'react-icons/fi'
import {FiUser} from 'react-icons/fi'
import { Container,Card, BollCard ,Menu} from './styles';

const RightContent: React.FC = () => {
  return (
      <Container>       
          <Card color="gray">
              <div>
                    <h1>Add new <br/>event</h1>
              </div>
             <BollCard>
                 <FiPlus color="white"/>
             </BollCard>
          </Card>

          <Menu>
                <div>
                    <FiUser size={25}/>
                    <p>Profile</p>
                </div>

                <div>
                   <FiCalendar size={25}/>
                    <p>Calendar</p>
                </div>

                <div>
                    <FiBook size={25}/>
                    <p>Courses</p>
                </div>
                
                <div>
                    <FiMessageSquare size={25}/>
                    <p>Homework</p>
                </div>
          </Menu>

          <Card color="yellow">
              <div>
                    <h3>Download our <br/> mobile app</h3>
                    <p>Intelymobile.com</p>
              </div>
          </Card>
      </Container>
  );
}

export default RightContent;