import React, { useState, useEffect } from "react";
import { Card } from "./styled";
import house from "./house.png";
import person from "./person.png";


const Component = ({data}) => {
  const isSafe = data.prediccion == "[1.]";
  var nf = new Intl.NumberFormat();
  
  return (
    <Card>
      <Card.Circle>
        <img src={isSafe ? person : house} height={120} width={120} />
      </Card.Circle>
      <Card.Safe isSafe={isSafe}>{isSafe ? 'Safe to go out' : 'Not safe to go out'}</Card.Safe>
      <Card.Pieces>
        <Card.Title>Weather: </Card.Title>
        <Card.Text>{data.weather}</Card.Text>
      </Card.Pieces>
      <Card.Pieces>
        <Card.Title>Population: </Card.Title>
        <Card.Text>{nf.format(data.population)}</Card.Text>
      </Card.Pieces>

      <Card.Info>
        <Card.InfoTitle>COVID information </Card.InfoTitle>
        <Card.InfoData>
          <Card.InfoSquared>
            <Card.InfoText>Cases</Card.InfoText>
            <Card.InfoPara>{data.last}</Card.InfoPara>
          </Card.InfoSquared>
          <Card.InfoSquared>
            <Card.InfoText>Deaths</Card.InfoText>
            <Card.InfoPara>{data.deaths}</Card.InfoPara>
          </Card.InfoSquared>
          <Card.InfoSquared>
            <Card.InfoText>Recovered</Card.InfoText>
            <Card.InfoPara>{data.recovered}</Card.InfoPara>
          </Card.InfoSquared>
        </Card.InfoData>
      </Card.Info>

      
      <Card.More><a href="https://www.coronavirus.gov/" target="_blank">Read more...</a></Card.More>
      <Card.MoreInfoPart>
        <Card.MoreInfo><a href="https://wallethub.com/edu/safest-states-during-covid/86567" target="_blank">Safety places</a></Card.MoreInfo>
        <Card.MoreInfo><a href="https://www.vaccines.gov/" target="_blank">Vaccination centers</a></Card.MoreInfo>
      </Card.MoreInfoPart>
    </Card>
  );
};

export { Component as Card };
export default Component;
