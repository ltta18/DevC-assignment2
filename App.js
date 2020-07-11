import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from "expo-constants";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';

const imgData = [
  { id: 1, imgSource: require('./assets/img1.jpg') },
  { id: 2, imgSource: require('./assets/img2.jpg') },
  { id: 3, imgSource: require('./assets/img3.png') },
  { id: 4, imgSource: require('./assets/img4.jpg') },
  { id: 5, imgSource: require('./assets/img5.png') },
  { id: 6, imgSource: require('./assets/img6.jpg') }
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style={styles.statusBar} backgroundColor="#fff" />
      </View>
      <View style={styles.header}>
        <Image source={require('./assets/ava.jpg')} style={styles.avatar}></Image>
        <View style={styles.info}>
          <Text style={styles.name}>Linh</Text>
          <Text style={styles.job}>Student</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.follow}>
                <Text>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.directMessage}>
                <Text>Hi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.detailContainer}>
        <View style={styles.detail}>
          <Text style={styles.detailNumber}>210</Text>
          <Text style={styles.detailText}>Photos</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailNumber}>2M</Text>
          <Text style={styles.detailText}>Followers</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailNumber}>1</Text>
          <Text style={styles.detailText}>Following</Text>
        </View>
      </View>

      <View style={styles.imgContainer}>
        <FlatList 
          data={imgData} 
          keyExtractor={(item, index) => item.id + index + "index"}
          renderItem={({ item } ) => <Image source={item.imgSource} width='50'/>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: null,
  },
  header: {
    flex: 0.15,
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: Constants.statusBarHeight,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  info: {
    marginLeft: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  job: {
    color: 'grey',
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  follow: {
    backgroundColor:"rgb(71,113,246)",
    borderRadius: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 40,
    paddingRight: 40,
  },
  directMessage: {
    backgroundColor:"rgb(120,213,250)",
    marginLeft: 10,
    borderRadius: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  detailContainer: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detail: {
    flex: 1,
    alignItems: 'center',
  },
  detailNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailText: {
    color: 'grey',
    marginTop: 5,
  },
  imgContainer: {
    flex: 0.75,
    flexDirection: 'row',
  },
});
