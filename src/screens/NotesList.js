import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import RootView from '../components/Root';
import Button from '../components/Button';

const NotesList = () => {
  const [notes, setNotes] = useState([
    {title: 'Sample Note 1', content: 'This is some sample content.'},
    {title: 'Sample Note 2', content: 'This is another sample content.'},
  ]);

  // Fetch notes on screen mount
  //   useEffect(() => {
  //     let savedNotes = [
  //       {title: 'Sample Note 1', content: 'This is some sample content.'},
  //       {title: 'Sample Note 2', content: 'This is another sample content.'},
  //     ];
  //     setNotes(savedNotes);
  //   }, [notes]);

  const handleDeleteNote = index => {
    setNotes(notes?.filter((_, i) => i !== index));
  };

  const NoteItem = ({item, index}) => (
    <View
      style={{
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 6,
      }}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item?.title}</Text>
      <Text>{item?.content}</Text>
      <Button
        title="Delete Note"
        variant="delete"
        onPress={() => handleDeleteNote(index)}
      />
    </View>
  );

  return (
    <RootView>
      {notes?.map((item, index) => {
        return <NoteItem item={item} key={index} />;
      })}

      <Button
        title={'Create a Note'}
        onPress={() => navigation.navigate('CreateNote')}
      />
    </RootView>
  );
};

export default NotesList;

const styles = StyleSheet.create({});
