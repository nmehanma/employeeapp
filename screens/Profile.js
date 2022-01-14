import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

const Profile = () => {
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={["#0033ff", "#6bc1ff"]}
        style={{ height: "20%" }}
      ></LinearGradient>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            width: 140,
            height: 140,
            borderRadius: 140 / 2,
            marginTop: -50
          }}
          source={{
            uri:
              "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }}
        />
      </View>
      <View style={{ alignItems: "center", margin:15 }}>
        <Title>Ramesh verma</Title>
        <Text style={{ fontSize: 15 }}>Web developer</Text>
      </View>
      <Card style={styles.mycard}>
        <View style={styles.cardContent}>
          <MaterialIcons name="email" size={32} color="#006aff" />
          <Text style={styles.mytext}>abc@abc.com</Text>
        </View>
      </Card>
      <Card style={styles.mycard}>
        <View style={styles.cardContent}>
          <Entypo name="phone" size={32} color="#006aff" />
          <Text style={styles.mytext}>123456</Text>
        </View>
      </Card>
      <Card style={styles.mycard}>
        <View style={styles.cardContent}>
          <MaterialIcons name="attach-money" size={32} color="#006aff" />
          <Text style={styles.mytext}>10 cad</Text>
        </View>
      </Card>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 10
        }}
      >
        <Button
          icon="account-edit"
          mode="contained"
          theme={theme}
          onPress={() => console.log("Pressed")}
        >
          Edit
        </Button>
        <Button
          icon="account-edit"
          mode="contained"
          theme={theme}
          onPress={() => console.log("Pressed")}
        >
          Delete
        </Button>
      </View>
    </View>
  );
};

const theme = {
  colors: {
    primary: "#006aff"
  }
};

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  mycard: {
    margin: 3
  },
  cardContent: {
    flexDirection: "row"
  },
  mytext: {
    fontSize: 18,
    marginTop: 3,
    marginLeft: 5
  }
});

export { Profile };
