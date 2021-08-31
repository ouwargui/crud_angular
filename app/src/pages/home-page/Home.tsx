import React, {useEffect, useState} from 'react';
import {Container, Content, MainContainer, CardWrapper} from './styles';

import Header from '../../components/header/Header';
import ItemCard from '../../components/item-card/ItemCard';
import {getSneakers} from '../../services/sneakers';
import Sneaker from '../../models/sneaker';

const Home: React.FC = () => {
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSneakers().then((res: any) => {
      setSneakers(res.data.results);
      console.log(sneakers);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Header page="home" />
      <Content>
        <MainContainer>
          {sneakers.map((sneaker) => (
            <CardWrapper>
              <ItemCard
                headerTitle={sneaker.brand}
                headerSubtitle={sneaker.releaseDate}
                imageUrl={sneaker.image.original}
                mediaTitle="teste"
                contentDescription={sneaker.name}
                price={`US$ ${sneaker.retailPrice},99`}
              />
            </CardWrapper>
          ))}
        </MainContainer>
      </Content>
    </Container>
  );
};

export default Home;
