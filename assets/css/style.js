import { StyleSheet } from 'react-native'

module.exports = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  label: {
    fontSize: 20,
    textAlign: 'left',
  },
  input:{    
    borderWidth: 1,
    fontSize:20,
    padding: 10,
    textAlign: 'left',
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius:5,
    borderWidth: 1,
    borderColor: '#714db2'
  },
  lblContainer: {
    marginBottom: 10
  },
  errorLabel:{
    color:'#d9001a'
  },
  img: {
    alignSelf: 'center',
    marginBottom: 60,
    marginTop: 30
  }, 
  btnSubmit: { 
    marginTop:10,
    padding: 10,
    backgroundColor:'#714db2',
    borderRadius:5,
    borderWidth: 1,
    borderColor: '#714db2'
  }, 
  lblSubmitBtn:{
      color:'#fff',
      textAlign:'center',
      fontWeight: 'bold',
      fontSize: 20,
  },
  btnDisable:{
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'#dedede',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#714db2'
  }

})
