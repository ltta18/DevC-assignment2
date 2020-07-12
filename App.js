import React from 'react';
import styles from './assets/Styles.js';
import MasonryList from "react-native-masonry-list";
import { StatusBar } from 'expo-status-bar';
import { Feather } from "@expo/vector-icons";
import { Text,
         View, 
         SafeAreaView, 
         Image, 
         TouchableOpacity } from 'react-native';


const imgData = [
  { id: 1, uri: 'http://192.168.1.178:19001/assets/img1.jpg'},
  { id: 2, uri: 'http://192.168.1.178:19001/assets/img2.jpg'},
  { id: 3, uri: 'http://192.168.1.178:19001/assets/img3.png'},
  { id: 4, uri: 'http://192.168.1.178:19001/assets/img4.jpg'},
  { id: 5, uri: 'http://192.168.1.178:19001/assets/img5.png'},
  { id: 6, uri: 'http://192.168.1.178:19001/assets/img6.jpg'}
];


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar */}
      <View>
        <StatusBar style={styles.statusBar} />
      </View>


      {/* Header Button Bar */}
      <View style={styles.headerButtonBar}>
        <Feather
            name="arrow-left"
            size={27}
            color="grey"
            style={styles.arrowLeft}
        />
        <Feather
            name="menu"
            size={27}
            color="grey"
            style={styles.menu}
        />
      </View>


      {/* Info Box */}
      <View style={styles.infoContainer}>
        <Image source={require('./assets/ava.jpg')} style={styles.avatar}></Image>
        <View style={styles.info}>
          <Text style={styles.name}>Linh</Text>
          <Text style={styles.job}>Student</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.follow} onPress={() => alert('Followed!')}>
                <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.directMessage} onPress={() => alert('Messaged!')}>
              <Feather
                name="send"
                size={20}
                color="white"
                style={styles.send}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>


      {/* Detail Box */}
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


      {/* Image List Box */}
      <View style={styles.imgContainer}>
        <MasonryList 
          images={imgData}
          columns={2}
          imageContainerStyle={styles.img}
          listContainerStyle={styles.listImg}
          spacing={5}
        />
      </View>
      

      {/* Footer Button Bar */}
      <View style={styles.footerButtonBar}>
        <Feather
            name="square"
            size={27}
            color="grey"
            style={styles.arrowLeft}
        />
        <Feather
            name="plus-circle"
            size={27}
            color="grey"
            style={styles.arrowLeft}
        />
        <Feather
            name="user"
            size={27}
            color="grey"
            style={styles.arrowLeft}
        />
      </View>
    </SafeAreaView>
  );
}