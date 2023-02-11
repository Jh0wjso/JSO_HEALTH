import { SafeAreaView, ScrollView } from "react-native";
import Title from "../../components/Title/";
import Form from "../../components/Form";

export default function Home() {
  return (
    <ScrollView>
      <Title />
      <Form />
    </ScrollView>
  );
}
