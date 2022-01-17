import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList, Alert } from "react-native";
import { Card } from "react-native-paper";
import { FAB } from "react-native-paper";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch("http://d926-99-250-161-7.ngrok.io")
      .then(res => res.json())
      .then(results => {
        setData(results);
        setLoading(false);
      })
      .catch(err => {
        Alert.alert("something went wrong");
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const renderList = item => {
    return (
      <Card
        style={styles.mycard}
        key={item.id}
        onPress={() => {
          navigation.navigate("Profile", { item });
        }}
      >
        <View style={styles.cardview}>
          <Image
            style={{ width: 60, height: 60, borderLeftWidth: 60 / 2 }}
            source={{
              uri: item.picture
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
        onRefresh={() => fetchData()}
        refreshing={loading}
      ></FlatList>

      <FAB
        onPress={() => navigation.navigate("Create")}
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
