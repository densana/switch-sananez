import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    inputContainer: {
        marginHorizontal: 20,
        width: '90%',
        marginTop: 55,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        color: '#E07A5F',
      },
      input: {
        width: '70%' ,
        borderBottomColor: '#E07A5F',
        borderBottomWidth: 1,
        color: '#E07A5F',
      },
      container: {
        flex: 1,
        backgroundColor: '#F4F1DE',
      },
      listContainer: {
        flex: 1,
        backgroundColor: '#F4F1DE',
        marginVertical:20, 
      },
      itemContainer:{
        height:80,
        justifyContent: 'center',
        backgroundColor: '#3D405B',
        marginHorizontal: 20,
        marginVertical:5,
        borderRadius: 5,
      },
      item: {
        marginHorizontal:10,
        marginVertical:10,
        color: 'white',
        fontSize: 16, 
        fontWeight: 'bold',
      },
      modalContainer: {
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 60,
        paddingVertical:20,
      },
      modalTitle: {
        fontSize:16,
        fontWeight:'bold',
        marginBottom:10,
      },
      modalDetailContainer: {
        paddingVertical:20,
      },
      modalMessage: {
        fontSize:14,
        color:'#F2CC8F',
      },
      buttonContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',

      }
})