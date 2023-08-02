import { ListRenderItem, FlatList } from 'react-native'
import React from 'react'
import MessageCard from './MessageCard'

const MessageList = ({messages}: any) => {
  
  const renderItem: ListRenderItem<any> = ({item}) => (
    <MessageCard item={item}/>
  )
  return (
    <FlatList
      data={messages}
      inverted={true}
      keyExtractor={(item)=> item._id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 20 }}
    />
  )
}

export default MessageList