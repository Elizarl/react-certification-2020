import React from 'react';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  display: flex;
  flex-grow: 1;
`;

const CardItem = styled(Card)`
  max-width: 345px;
  margin: 1rem;
`;

const CardImage = styled(CardMedia)`
  height: 140px;
`;

const VideoCard = ({ title, description, thumbnail, id }) => {
  return (
    <StyledLink to={`/video/${id}`}>
      <CardItem>
        <CardActionArea>
          <CardImage image={thumbnail} title={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </CardItem>
    </StyledLink>
  );
};

export default VideoCard;
