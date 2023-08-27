import { View, Text, Modal } from 'react-native'
import React, { useContext, useState } from 'react'
import { Bold, Container, FiltersContainer, FiltersIcon, FiltersText, ModalContainer, ModalOverlay, ModalText, OrderText } from './styled';
import ComplementFilters from './ComplementFilters';
import { QueryContext } from '../../../contexts/QueryContext';

const filtersIcon = require("../../../../assets/icons/filtrar.png");

const Filters = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [filterText, setFilterText] = useState("Mais Recente");
  const [showFilters, setShowFilters] = useState(false);
  const queryContext = useContext(QueryContext);

  const handleBiggestPrice = async () => {
    setFilterText("Maior Preço");
    queryContext.addFilters("orderBy=price&direction=desc");
    setModalVisible(false);
  };

  const handleLowestPrice = async () => {
    setFilterText("Menor Preço");
    queryContext.addFilters("orderBy=price&direction=asc");
    setModalVisible(false);
  };

  const handleNewest = async () => {
    setFilterText("Mais Recente");
    queryContext.addFilters("orderBy=updatedAt");
    setModalVisible(false);
  };

  return (
    <>
      <Container>
        <OrderText onPress={()=> setModalVisible(true)}>
          Ordenar por <Bold>{filterText}</Bold>
        </OrderText>

        <Modal animationType='fade' transparent={true} visible={modalVisible}>
          <ModalOverlay onPress={()=> setModalVisible(false)} activeOpacity={1}>
            <ModalContainer>
              <ModalText onPress={handleBiggestPrice}>Maior Preço</ModalText>
              <ModalText onPress={handleLowestPrice}>Menor Preço</ModalText>
              <ModalText onPress={handleNewest}>Mais Recente</ModalText>
            </ModalContainer>
          </ModalOverlay>
        </Modal>

        <FiltersContainer onPress={()=>{
          setShowFilters(!showFilters);
        }}>
          <FiltersIcon source={filtersIcon}/>
          <FiltersText>Filtrar</FiltersText>
        </FiltersContainer>
      </Container>

      {
        !showFilters ? null : <ComplementFilters setShowFilters={setShowFilters}/>
      }
    </>
  )
}

export default Filters