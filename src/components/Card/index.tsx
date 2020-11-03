import React from 'react';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { useStyles } from './styles';

function CardItem({ content, index, handleOpenModal, viewDescription }: any) {
  const dispatch = useDispatch();
  function handleAddToCart(content: object) {
    dispatch({
      type: '@cart/ADD_PRODUCT',
      payload: content,
    });
  }
  const classes = useStyles();
  return (
    <Card key={content.name} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={content.img}
          title={content.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {content.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {viewDescription
              ? `${content.description}`
              : `${content.description.substr(0, 300)}...`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => handleAddToCart(content)}
          size="small"
          color="secondary"
        >
          Adicionar ao carrinho
        </Button>
        {!viewDescription && (
          <Button
            onClick={() => handleOpenModal(index)}
            size="small"
            color="primary"
          >
            Ver detalhes
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default CardItem;
