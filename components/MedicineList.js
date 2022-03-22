import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  ListItem,
} from "react-native";
import { View } from "react-native-web";

export default function FirstPage() {
  const [medName, setmedName] = useState("");
  const [medList, setmedList] = useState([]);
  const addMed = (med) => {
    setmedList((prev) => {
      return [...prev, med];
    });
    setmedName("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>this is first page</Text>
      <TextInput
        style={styles.input}
        value={medName}
        onChangeText={(val) => setmedName(val)}
        placeholder="enter med"
      />
      <Button title="submit" onPress={() => addMed(medName)} />
      {/* <MedicineList addMed={addMed}/> */}
      <FlatList
        data={medList ? medList : null}
        renderItem={({ item }) => <Text>{item} <Button title="delete"/></Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -45,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
