import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

interface IBackerCardProps {
  fluidImage: FluidObject;
  name: string;
  profession: string;
  email: string;
  onClick: () => void;
}
const BackerCard = ({
  fluidImage,
  name,
  profession,
  email,
  onClick,
}: IBackerCardProps) => {
  return (
    <Card onClick={onClick}>
      <PersonImg fluid={fluidImage} />
      <div>
        <h2>{name}</h2>
        <p>{profession}</p>
        <p>{email}</p>
      </div>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[6]};
  background-color: ${({ theme }) => theme.colors.surface[500]};
`;

const PersonImg = styled(Img)`
  width: 100%;
  max-width: 200px;
  margin-right: ${({ theme }) => theme.spacing[6]};
`;

export default BackerCard;
