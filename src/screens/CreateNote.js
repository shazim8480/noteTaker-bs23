import {Text, View} from 'react-native';
import React, {useState} from 'react';
import Button from '../components/Button';

const CreateNote = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSaveNote = () => {
    const updatedNotes = [...notes, {title, content}];
    setNotes(updatedNotes);
    navigation.navigate('NotesList');
  };

  return (
    <RootView>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>New Note</Text>
      <TextInput
        style={{borderWidth: 1, padding: 10, marginBottom: 10}}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={{borderWidth: 1, padding: 10, height: 200}}
        placeholder="Content"
        multiline
        value={content}
        onChangeText={setContent}
      />
      <Button title="Save Note" onPress={() => handleSaveNote()} />
    </RootView>
  );
};

export default CreateNote;
