/* eslint-disable react-native/no-inline-styles */

/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { ActivityIndicator, ImageBackground, Text, View } from 'react-native';

import CustomButton from '_components/Button/Button';
import Flatlist from '_components/Flatlist/Flatlist';

import { styles } from './styles';

const UserItem = ({ item }: any) => {
  return (
    <View style={styles.itemContainer}>
      <ImageBackground
        source={{ uri: item.image }}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <Text style={styles.textStyle}>
          {item.firstName}
          {` `}
          <Text>{item.age}</Text>
        </Text>
      </ImageBackground>
    </View>
  );
};

const Users = ({ fetchUsers, isLoading, isError, list }: any) => {
  React.useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading)
    return (
      <View style={styles.flagContainer}>
        <ActivityIndicator color={'black'} />
      </View>
    );

  if (isError)
    return (
      <View style={styles.flagContainer}>
        <Text>{'Error'}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Flatlist
        data={list.users}
        renderItem={UserItem}
        contentContainerStyle={{ margin: 4 }}
        numColumns={2}
        keyExtractor={(item: any) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      <CustomButton text="Add" onPress={console.log} />
    </View>
  );
};

export default Users;
