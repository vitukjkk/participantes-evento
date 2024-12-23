import { useState } from 'react';
import { Text, TextInput, Alert, TouchableOpacity, View, FlatList } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export default function Home() {

    const [participants, setParticipants] = useState(['João']);

    function handleParticipantAdd() {
        if(participants.includes('Vitor')) {
            return Alert.alert('Erro', 'Participante já cadastrado!');
        }
        
        setParticipants(prevState => [...participants, 'Ana']);
        console.log(participants);
    };

    function handleParticipantRemove(name : string) {   
        Alert.alert('Remover participante', `Deseja remover o participante ${name}?`, [
            {
                text: 'Cancelar',
            },
            {
                text: 'Remover',
                onPress: () => Alert.alert('Sucesso', `Participante ${name} removido com sucesso!`)
            }
        ]);
    };

    return (
    <View style={styles.container}>
        
        <Text style={styles.eventName}>Nome do evento</Text>
        <Text style={styles.eventDate}>Segunda, 23 de dezembro de 2024</Text>
        
        <View style={styles.form}>
            <TextInput 
                style={styles.input}
                placeholder='Nome do participante'
                placeholderTextColor={'gray'}
                keyboardType='default'/>
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}/>
                <Text style={styles.buttonText}>+</Text>
            <TouchableOpacity/>
        </View>

        <FlatList
            data={participants}
            keyExtractor={item => item}
            renderItem={({item}) => (
                <Participant name={item} onRemove={() => handleParticipantRemove(item)}/>
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
                <Text style={styles.listEmptyParticipants}>
                    Nenhum participante cadastrado
                </Text>
            }/>
    </View>
  )
}