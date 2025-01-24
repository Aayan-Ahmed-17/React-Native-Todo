import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const screenDimensions = Dimensions.get("screen").height;
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
                            {/* Header */}
      <View style={style.header}></View>

                              {/* Main */}
      {/* Todo Input */}
      <View></View>

      {/* Todo Container */}
      <View style={style.main}>
        <ScrollView style={{ paddingHorizontal: 30, paddingVertical: 40 }}>
          
          {/* dynamic todo data */}
          <View style={style.todo_item}>
            <TouchableOpacity
              style={{ ...style.button, backgroundColor: "#008800cc" }}
            >
              <FontAwesome name="edit" size={35} color="#eee" />
            </TouchableOpacity>
            <Text style={style.todo_item_text}>dlflsdj</Text>
            <TouchableOpacity
              style={{ ...style.button, backgroundColor: "#880000cc" }}
            >
              <FontAwesome name="trash-o" size={35} color="#eee" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {/* Footer */}
      <View style={style.footer}>
        <Text>dslfkjsdlf</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    height: screenDimensions / 10,
    width: "100%",
    backgroundColor: "#0000ff",
  },
  main: {
    flex: 1,
    width: "100%",
    backgroundColor: "#000103dd",
  },
  todo_item: {
    width: "100%",
    height: screenDimensions / 13,
    backgroundColor: "#999",
    borderRadius: 12,
    flexDirection: "row",
    borderWidth: 3,
  },
  button: {
    width: "15%",
    backgroundColor: "#0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },
  todo_item_text: { 
    flex: 1,
    color: "#fff",
    fontSize: 22,
    padding: 11 
  },
  footer: {
    height: screenDimensions / 14,
    backgroundColor: "#cccccc",
  },
});
