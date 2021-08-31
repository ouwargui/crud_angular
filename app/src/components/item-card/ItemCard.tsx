import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import {PriceWrapper} from './styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
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
}

const ItemCard: React.FC<ItemCardParams> = ({
  headerTitle,
  headerSubtitle,
  imageUrl,
  mediaTitle,
  contentDescription,
  price,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={headerTitle} subheader={headerSubtitle} />
      <CardMedia
        className={classes.media}
        image={imageUrl}
        title={mediaTitle}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {contentDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <PriceWrapper>
          <Typography paragraph>{price}</Typography>
        </PriceWrapper>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
