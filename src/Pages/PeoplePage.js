import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import Header from "../components/Header";
import PeopleList from "../components/PeopleList";
import axios from "axios";

export default function PeoplePage(props) {
  const { navigation } = props;
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=15&nat=br")
      .then((response) => {
        setPeople(response.data.results);
      })
      .catch((error) => {
        console.log("Ocorreu um erro - " + error);
      });
  }, []);

  return (
    <View>
      <ScrollView>
        <PeopleList people={people} navigation={navigation}></PeopleList>
      </ScrollView>
    </View>
  );
}
