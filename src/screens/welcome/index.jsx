import React from "react";
import { useState } from 'react';
import { Input } from "../../components/index";
import { Button, View, Text, FlatList, TouchableOpacity, Modal} from "react-native";
import { styles } from "./styles";

const Start = ({onStartList}) => {

    const [text, setText] = useState('');
    const [events, setEvents] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const onAddEvent = () => {
        if (text.lengh === 0) return;
        setEvents([
            ...events,
            {
                id: Math.random().toString(),
                value: text
            }
        ]);
        setText('');
    }

    const onHandlerEvent = (id) => {
        setModalVisible(true);
        const selectedEvent = events.find(event => event.id === id);
        setSelectedEvent(selectedEvent);
    }

    const onHandlerCancelModal = () =>{
        setModalVisible(!modalVisible);
        setSelectedEvent(null);
    }

    const onHandlerDeleteModal = (id) =>{
        setEvents(events.filter(event=> event.id !==id));
        setModalVisible(!modalVisible);
    }

    const renderItem = ({item}) =>(

        <TouchableOpacity 
        style={styles.itemContainer} 
        onPress={()=> onHandlerEvent(item.id)}>
    <Text style={styles.item}>{item.value}</Text>
                </TouchableOpacity>
    );

    const onHandlerStartList = () => {
        onStartList(setText);
      };

    return (
    <View style={styles.container}>
        <View>
            <Text>Quieres empezar una lista de tareas nueva?</Text>
            <Button title='Si'
                color='blue'
                onPress={()=> onHandlerStartList()}></Button>
        </View>
        <Input
        buttonColor={'blue'}
        buttonTitle={'+'}
        onChangeText={(text)=>setText(text)}
        placeholder={'Añadir tarea'}
        value={text}
        onHandlerButton={onAddEvent}></Input>
      <View style={styles.listContainer}>
        <FlatList
        renderItem={renderItem}
        data={events}
        keyExtractor={(item)=> item.id}>
        </FlatList>
      </View>
      <Modal  visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
                Task Detail
            </Text>
            <View style={styles.modalDetailContainer}>
                <Text style={styles.modalMessage}> Are you sure you want to delete?</Text>
                <Text style={styles.modalMessage}> {selectedEvent?.value}?</Text>
            </View>
            <View buttonContainer>
                <Button
                title='Cancel'
                color='blue'
                onPress={()=> onHandlerCancelModal()}/>
                                <Button
                title='Delete'
                color='blue'
                onPress={()=> onHandlerDeleteModal(selectedEvent.id)}></Button>
            </View>
        </View>
      </Modal>
    </View>
        
    )
}
export default Start;