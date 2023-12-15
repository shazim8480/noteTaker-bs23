import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import RootView from '../components/Root';
import Button from '../components/Button';

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  // Fetch notes on screen mount
  useEffect(() => {
    const savedNotes = [
      {title: 'Sample Note 1', content: 'This is some sample content.'},
    ];
    setNotes(savedNotes);
  }, []);

  const handleDeleteNote = index => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const renderNoteItem = ({item, index}) => (
    <View
      style={{
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 6,
      }}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.title}</Text>
      <Text>{item.content}</Text>
      {/* <Button
        title="Delete Note"
        variant="delete"
        onPress={() => handleDeleteNote(index)}
      /> */}
    </View>
  );

  return (
    <RootView>
      {notes?.length > 0 ? (
        <Text style={{marginTop: 20}}>Saved Notes:</Text>
      ) : (
        <Text>No notes available..</Text>
      )}

      <FlatList
        data={notes}
        renderItem={renderNoteItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </RootView>
  );
};

export default NotesList;

const styles = StyleSheet.create({});
