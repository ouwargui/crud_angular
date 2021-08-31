import React, {useEffect, useState} from 'react';
import Loader from 'react-loader-spinner';
import {useLocation} from 'react-router-dom';
import Header from '../../components/header/Header';
import SneakerModel from '../../models/sneaker';
import {getSneakerById} from '../../services/sneakers';
import {LoaderContainer} from '../home-page/styles';
import {Container} from './styles';

const Sneaker: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedSneaker, setSelectedSneaker] = useState<SneakerModel>();
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    getSneakerById(parseInt(query.get('id') as string, 10)).then((res: any) => {
      const data: SneakerModel = res.data.sneaker_detail;
      setSelectedSneaker(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <>
        <Header page="" />
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
      <Header page="" />
      {selectedSneaker && (
        <>
          <div>{selectedSneaker.brand}</div>
          <div>{selectedSneaker.id}</div>
          <div>{selectedSneaker.image}</div>
          <div>{selectedSneaker.name}</div>
          <div>{selectedSneaker.releaseDate}</div>
          <div>{selectedSneaker.retailPrice}</div>
        </>
      )}
    </Container>
  );
};

export default Sneaker;
