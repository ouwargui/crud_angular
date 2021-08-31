import React from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {CardActionArea} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {Content, ContentWrapper} from './styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
      display: 'flex',
    },
    media: {
      // paddingTop: '56.25%', // 16:9
    },
    action: {
      height: '100%',
    },
  }),
);

interface ItemCardParams {
  headerTitle: string;
  headerSubtitle: string;
  imageUrl?: string;
  mediaTitle: string;
  contentDescription: string;
  price: string;
  id: number;
}

const ItemCard: React.FC<ItemCardParams> = ({
  headerTitle,
  headerSubtitle,
  imageUrl,
  mediaTitle,
  contentDescription,
  price,
  id,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/sneakers/${id}`}>
        <ContentWrapper>
          <CardHeader title={headerTitle} subheader={headerSubtitle} />
          <CardMedia
            className={classes.media}
            image={imageUrl}
            title={mediaTitle}
            component="img"
          />
          <Content>
            <Typography
              paragraph
              variant="body1"
              color="textSecondary"
              component="p">
              {contentDescription}
            </Typography>
            <Typography variant="h4" color="textSecondary" component="p">
              {price}
            </Typography>
          </Content>
        </ContentWrapper>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
