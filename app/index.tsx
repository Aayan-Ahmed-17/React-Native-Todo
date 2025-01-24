import { Dimensions, StyleSheet, Text, View } from "react-native";

const screenDimensions = Dimensions.get('screen').height;
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
      <View style={style.main}></View>
      {/* Footer */}
      <View style={style.footer}>
        <Text>dslfkjsdlf</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    height: screenDimensions/10,
    width: "100%",
    backgroundColor: "#0000ff",
  },
  main: {
    flex: 1,
    width: "100%",
    backgroundColor: "#00ff00"
  },
  footer: {
    height: screenDimensions / 14,
    backgroundColor: "#cccccc",
  },
});
