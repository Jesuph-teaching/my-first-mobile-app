import { useState } from "react";
import {  Button, Text, TextInput, View } from "react-native";
import style from "../styles/app";
import  { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

interface UserI {
  firstName: string;
  lastName: string;
  birthDate: Date;
}
export default function Index() {
  const [user, setUser] = useState<UserI>({
    firstName: "",
    lastName: "",
    birthDate: new Date(),
  });
  

  const showDatepicker = () => {
    DateTimePickerAndroid.open({
      value: user.birthDate,
      onChange:(event, selectedDate) => {
        const currentDate = selectedDate;
        if(selectedDate) setUser((prev) => ({ ...prev, birthDate: selectedDate }));
      },
      mode: "date",
      is24Hour: true,
    });
  };


  return (
    <View style={style.container}>
      <Text style={style.title}>Hello,Please register first!</Text>
      <View style={style.inputsView}>
        <TextInput
          style={style.input}
          placeholder="First name"
          value={user.firstName}
          onChangeText={(value) =>
            setUser((prev) => ({ ...prev, firstName: value }))
          }
        />
        <TextInput
          style={style.input}
          placeholder="Last name"
          value={user.lastName}
          onChangeText={(value) =>
            setUser((prev) => ({ ...prev, lastName: value }))
          }
        />
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
    </View>
  );
}
