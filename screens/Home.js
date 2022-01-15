import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Card } from "react-native-paper";
import { FAB } from "react-native-paper";

const Home = ({ navigation }) => {
  const data = [
    { id: 1, name: "player1", position: "web dev" },
    { id: 2, name: "player2", position: "android dev" },
    { id: 3, name: "player3", position: "ML expert" },
    { id: 4, name: "player4", position: "web dev" },
    { id: 5, name: "player5", position: "web dev" }
  ];

  const renderList = item => {
    return (
      <Card
        style={styles.mycard}
        key={item.id}
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <View style={styles.cardview}>
          <Image
            style={{ width: 60, height: 60, borderLeftWidth: 60 / 2 }}
            source={{
              uri:
                "https://images.unsplash.com/photo-1541911087797-f89237bd95d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
            }}
          ></Image>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.position}</Text>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return renderList(item);
        }}
      ></FlatList>
      <FAB
        onPress={() => props.navigation.navigate("Create")}
        style={styles.fab}
        small={false}
        icon="plus"
        theme={{ colors: { accent: "#006aff" } }}
        // onPress={() => console.log("Pressed")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mycard: {
    margin: 5
  },
  cardview: {
    flexDirection: "row",
    padding: 6
  },
  text: {
    fontSize: 20,
    marginLeft: 10
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  }
});

export { Home };
