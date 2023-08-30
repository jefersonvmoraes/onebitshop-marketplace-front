import { ListRenderItem, FlatList } from 'react-native'
import React from 'react'
import MessageCard from './MessageCard'
import { Messages } from '../../../entities/Message'

interface Props {
  messages: Messages[];
}

const MessageList = ({messages}: Props) => {
  
  const renderItem: ListRenderItem<Messages> = ({item}) => (
    <MessageCard item={item}/>
  )
  return (
    <FlatList
      data={messages}
      inverted={true}
      keyExtractor={(item, index)=> item._id + index.toString()}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 20 }}
    />
  )
}

export default MessageList