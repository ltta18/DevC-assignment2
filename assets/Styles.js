import Constants from "expo-constants";
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  statusBar: {
    height: null,
    backgroundColor: 'white',
  },

  // Header Button Bar 
  headerButtonBar: {
    flex: 0.075,
    marginTop: Constants.statusBarHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  arrowLeft: {
    marginLeft: 20,
  },

  menu: {
    marginRight: 20,
  },


  // Info Box
  infoContainer: {
    flex: 0.15,
    flexDirection: 'row',
    marginLeft: 20,
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


  // Detail Box
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },

  follow: {
    backgroundColor:"rgb(71,113,246)",
    borderRadius: 20,
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'center'
  },

  followText: {
    color: 'white',
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

  sendOutlined: {
    fontSize: 27,
    color: 'grey',
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

  
  // Image List Box
  imgContainer: {
    flex: 0.6,
  },

  listImg: {
    justifyContent: 'center',
  },

  img: {
    borderRadius: 20,
    marginRight: 5,
    marginLeft: 5,
    flexGrow: 0,
  },


  // Footer Button Bar
  footerButtonBar: {
    flex: 0.075,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});

export default styles