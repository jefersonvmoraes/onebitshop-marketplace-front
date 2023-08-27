import { FlatList, ListRenderItem } from 'react-native'
import React, { useEffect, useState } from 'react'

import CategoryCard from './CategoryCard';
import { Product } from '../../../entities/Product';
import useAuth from '../../../hook/useAuth';
import favoriteService from '../../../services/favoriteService';

interface Props {
  products: Product[];
}

const CategoryList = ({products}: Props) => {

  const [favorites, setFavorites] = useState<string[]>([]);
  const {token} = useAuth();

  const handleGetFavorites = async () => {
    if(!token) return;
    const res = await favoriteService.getFavorites();

    const isliked = res.data.map((val: Product)=> {
      return val._id;
    });

    setFavorites(isliked);
  };

  const isFavorite = (product: Product) => {
    return !!favorites.find((favorite)=>(product._id === favorite ? true : false))
  }

  useEffect(()=>{
    handleGetFavorites();
  },[]);

  const renderItem: ListRenderItem<Product> = ({item}) =>{
    return (
        <CategoryCard product={item} favorite={isFavorite(item)}/>
    );
  };
  
  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default CategoryList