import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import styled from 'styled-components';
import '../styling/nav.css';
 /* export const ButtonGroup = styled.div`
  `;*/
 

const buttonGroupInstance = () =>(
  <div>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>


  <ButtonGroup vertical>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
  </ButtonGroup>

</div>
);

export default buttonGroupInstance;