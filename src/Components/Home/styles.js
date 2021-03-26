import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

export default styles = StyleSheet.create({
  textInputView: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#94ACBC',
    borderBottomWidth: 2,
    marginTop: 0,
    left: 6,
  },
  textInput: {width: '80%', fontFamily: 'Avenir Next'
},
  timelineView: {
    backgroundColor: '#264D7D',
    // height: 70,
   
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 10
  },
  timelineText: {
    color: '#94ACBC',
    fontFamily: 'Avenir Next',
    fontSize: 16,
  },
    postView: {
    padding: 20,
    backgroundColor: 'white',
  
    borderRadius: 5,
    top: -10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  postView2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewPostTime: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {width: 30, height: 30, borderRadius: 60},
  profileName: {fontFamily: 'Avenir Next', fontSize: 15},
  time: {
    fontFamily: 'Avenir Next',
    fontSize: 11,
    color: '#000',

  },
  dots: {
    width: 5,
    height: 5,
    backgroundColor: '#8a8e9b',
    borderRadius: 20,
    right: 7
  },
  dots2: {
    width: 5,
    height: 5,
    backgroundColor: '#8a8e9b',
    borderRadius: 20,
    // marginTop: 2,
    right: 5

  },

  dots3: {
    width: 5,
    height: 5,
    backgroundColor: '#8a8e9b',
    borderRadius: 20,
    // marginTop: 2,
    right: 2

  },
  postImg: {width: '100%', height: 200},
  likesView: {
    backgroundColor: '#f8f8f8',
   
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  likesView2: {display: 'flex', flexDirection: 'row'},
  likesNumber: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  heart: {height: 15, width: 15},
  numbers: {fontSize: 15, left: 5, color: '#8d8d97'},
  commentView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    left: 30,
  },
  referralBorder: {
    backgroundColor: '#f3f8fd',
    borderColor: '#096DD9',
    borderWidth: 1,
    padding: 3,
    paddingLeft:10,
    paddingRight:10
    // width: 70,
  },
  referralText: {
    textAlign: 'center',
    color: '#096DD9',
    fontFamily: 'Avenir Next',
    fontSize: 11,
  },
});
