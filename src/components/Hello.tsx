import { View, Text, StyleSheet, type TextStyle } from "react-native";

interface Props {
  children: string;
  bang?: boolean;
  style?: TextStyle;
}

const Hello = (props: Props): JSX.Element => {
  //   const children = props.children;
  const { children, bang, style } = props;
  //   const { children, foo, bar } = props;

  return (
    <View>
      <Text style={[styles.text, style]}>
        Hello, {children}
        {bang === true ? "!" : ""}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    backgroundColor: "blue",
    fontSize: 40,
    fontWeight: "bold",
    padding: 16,
  },
});

export default Hello;
