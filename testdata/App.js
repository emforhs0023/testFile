/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Appbar, TextInput, Button } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';


const App = () => {
	const [ todo, setTodo ] = useState('');
	const [ testData, setTestData ] = useState('');
	const ref = firestore().collection('todos');

	// const usersCollection = firestore().collection('todos');
	async function addTodo() {
		await ref.add({
      		title: todo,
      		complete: false,
		});
    	console.log("fadsadsf")
    	setTodo('');
  	}
  	return (
    
    	<>
      		<Appbar>
        		<Appbar.Content title={'TODOs List'} />
      		</Appbar> 
      		<ScrollView style={{flex: 1}}>
        		<Text>List of TODOs!</Text>
      		</ScrollView>
      		<TextInput label={'New Todo'} value={todo} onChangeText={setTodo} />
      		<Button onPress={() => addTodo()}>Add TODO</Button>
    	</>
  	);
};

const styles = StyleSheet.create({
	scrollView: {
    	backgroundColor: Colors.lighter,
  	},
  	engine: {
    	position: 'absolute',
    	right: 0,
  	},
  	body: {
    	backgroundColor: Colors.white,
  	},
  	sectionContainer: {
	    marginTop: 32,
	    paddingHorizontal: 24,
  	},
  	sectionTitle: {
	    fontSize: 24,
    	fontWeight: '600',
    	color: Colors.black,
  	},
  	sectionDescription: {
    	marginTop: 8,
    	fontSize: 18,
    	fontWeight: '400',
    	color: Colors.dark,
  	},
  	highlight: {
    	fontWeight: '700',
  	},
  	footer: {
    	color: Colors.dark,
    	fontSize: 12,
    	fontWeight: '600',
    	padding: 4,
    	paddingRight: 12,
    	textAlign: 'right',
  	},
});

export default App;
