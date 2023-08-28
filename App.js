import React, { useState } from 'react';
import { View, Text, Modal, Button, StyleSheet, Touchable, TouchableOpacity, FlatList, TextInput } from 'react-native';



const color = ['yellow', 'red', 'lightcoral', 'lawngreen']

const App = () => {
  const [data, setData] = useState([
  ])
  console.log(data)
  const [addTaskVisibility, setAddTaskVisibility] = useState(false);
  const [task, setTask] = useState('')
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.viewTask} backgroundColor={color[item.id % 4]}>{item.name}</Text>
    </View>
  );

  const changeVisibility = () => {
    console.log(addTaskVisibility)
    setAddTaskVisibility(!addTaskVisibility)
  }
  const addTask =() =>{
    const newItem = {
      id: (data.length).toString(), // Generate a unique ID
      name: `${task}`,
    };
    setTask('')
    setAddTaskVisibility(false)
    setData([...data, newItem]);
  }

  return (
    <View style={styles.container} >
      <Text style={styles.headText}>Shubham's Todo</Text>
      <TouchableOpacity style={styles.addTask} onPress={changeVisibility} >
        <Text style={styles.viewText}>Add New Task +</Text>
        <Modal visible={addTaskVisibility} animationType='slide'>
          <View style={styles.addTaskBox}>
            <TextInput style={styles.inputText}
              value={task}
              onChangeText={setTask}
            />
            <View style={styles.addTaskView}>
              <Button title='Close' onPress={changeVisibility} />
              <Button title='Add Task' onPress={addTask} />
            </View>
          </View>
        </Modal>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    margin:20,
    borderColor: 'black',
    borderWidth: 2,
    width: 200
  },
  addTaskView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addTaskBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    width: 400
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTask: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff69b4',
    margin: 10
  },
  viewText: {
    width: 250,
    justifyContent: 'center',
    color: 'black',
    fontSize: 24
  },
  headText: {
    marginTop:40,
    color: "#fff",
    fontSize: 34,
    marginBottom: 20

  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  viewTask: {
    width: 250,
    justifyContent: 'center',
    color: 'black',
    fontSize: 24
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
