import React, {useEffect, useState} from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {
  Container,
  Content,
  MainContainer,
  CardWrapper,
  LoaderContainer,
} from './styles';

import Header from '../../components/header/Header';
import ItemCard from '../../components/item-card/ItemCard';
import {getSneakers} from '../../services/sneakers';
import Sneaker from '../../models/sneaker';

const Home: React.FC = () => {
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSneakers().then((res: any) => {
      const filteredSneakers: Sneaker[] = res.data.sneaker_list.filter(
        (sneaker: Sneaker) =>
          sneaker.brand &&
          sneaker.image &&
          sneaker.name &&
          sneaker.releaseDate &&
          sneaker.retailPrice,
      );
      setSneakers(filteredSneakers);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <>
        <Header page="home" />
        <LoaderContainer>
          <Loader
            type="TailSpin"
            color="#ff7a91"
            height={100}
            width={100}
            timeout={undefined}
          />
        </LoaderContainer>
      </>
    );
  }

  return (
    <Container>
      <Header page="home" />
      <Content>
        <MainContainer>
          {sneakers.map((sneaker) => (
            <CardWrapper key={sneaker.id}>
              <ItemCard
                headerTitle={sneaker.brand}
                headerSubtitle={sneaker.releaseDate}
                imageUrl={sneaker.image}
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
