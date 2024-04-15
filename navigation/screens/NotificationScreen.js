import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../globals";

const NOTIFICATION1 = () => {
  return (
    <View style={styles.notification}>
      <View style={[styles.mydesignTxtbox, styles.mydesignLayout1]}>
        <View style={[styles.mydesignTxtboxChild, styles.mydesignLayout]} />
        <View style={[styles.mydesignTxtboxChild, styles.mydesignLayout]} />
        <Text style={[styles.narutoReferenceFor, styles.narutoTypo]}>
          Naruto reference for chakra: ninjitsu, genjitsu, sage, doujitsu
        </Text>
        <Text style={[styles.yourChakraType, styles.yourTypo]}>
          YOUR CHAKRA TYPE
        </Text>
      </View>
      <View style={styles.mydesignTxtbox1}>
        <View style={[styles.mydesignTxtboxInner, styles.mydesignLayout]} />
        <View style={[styles.mydesignTxtboxChild, styles.mydesignLayout]} />
        <Text style={[styles.narutoReferenceFor1, styles.narutoTypo]}>
          Naruto reference for chakra: ninjitsu, genjitsu, sage, doujitsu
        </Text>
        <Text style={[styles.yourChakraType1, styles.yourTypo]}>
          YOUR CHAKRA TYPE
        </Text>
        <View style={[styles.mydesignTxtbox2, styles.mydesignPosition]}>
          <View style={[styles.mydesignTxtboxChild, styles.mydesignLayout]} />
          <View style={[styles.mydesignTxtboxChild, styles.mydesignLayout]} />
          <Text style={[styles.narutoReferenceFor, styles.narutoTypo]}>
            Naruto reference for chakra: ninjitsu, genjitsu, sage, doujitsu
          </Text>
          <Text style={[styles.yourChakraType, styles.yourTypo]}>
            YOUR CHAKRA TYPE
          </Text>
          <View style={[styles.mydesignTxtbox3, styles.mydesignPosition]}>
            <View style={[styles.mydesignTxtboxChild, styles.mydesignLayout]} />
            <View style={[styles.mydesignTxtboxChild, styles.mydesignLayout]} />
            <Text style={[styles.narutoReferenceFor, styles.narutoTypo]}>
              Naruto reference for chakra: ninjitsu, genjitsu, sage, doujitsu
            </Text>
            <Text style={[styles.yourChakraType, styles.yourTypo]}>
              YOUR CHAKRA TYPE
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.mydesignTxtbox4, styles.mydesignLayout1]}>
        <View style={[styles.mydesignTxtboxChild, styles.mydesignLayout]} />
        <View style={[styles.mydesignTxtboxChild, styles.mydesignLayout]} />
        <Text style={[styles.narutoReferenceFor, styles.narutoTypo]}>
          Naruto reference for chakra: ninjitsu, genjitsu, sage, doujitsu
        </Text>
        <Text style={[styles.yourChakraType, styles.yourTypo]}>
          YOUR CHAKRA TYPE
        </Text>
      </View>
      <View style={[styles.mydesignTxtbox5, styles.mydesignLayout1]}>
        <View style={[styles.mydesignTxtboxChild, styles.mydesignLayout]} />
        <View style={[styles.mydesignTxtboxChild, styles.mydesignLayout]} />
        <Text style={[styles.narutoReferenceFor, styles.narutoTypo]}>
          Naruto reference for chakra: ninjitsu, genjitsu, sage, doujitsu
        </Text>
        <Text style={[styles.yourChakraType, styles.yourTypo]}>
          YOUR CHAKRA TYPE
        </Text>
      </View>
      <Text style={styles.notifications}>Notifications</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mydesignLayout1: {
    height: 75,
    width: 280,
  },
  mydesignLayout: {
    opacity: 0.88,
    backgroundColor: Color.colorMediumpurple,
    borderRadius: Border.br_sm,
    top: 0,
    left: 20,
    height: 75,
    width: 280,
    position: "absolute",
  },
  narutoTypo: {
    height: 15,
    width: 238,
    fontSize: FontSize.size_5xs,
    top: 38,
    left: 50,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.playfairDisplayRegular,
    position: "absolute",
  },
  yourTypo: {
    fontSize: FontSize.size_xs,
    top: 9,
    left: 40,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.playfairDisplayRegular,
    position: "absolute",
  },
  mydesignPosition: {
    top: 88,
    position: "absolute",
  },
  mydesignTxtboxChild: {
    left: 0,
  },
  narutoReferenceFor: {
    left: 21,
  },
  yourChakraType: {
    left: 8,
  },
  mydesignTxtbox: {
    top: 139,
    left: 40,
    height: 75,
    width: 280,
    position: "absolute",
  },
  mydesignTxtboxInner: {
    left: 2,
  },
  narutoReferenceFor1: {
    left: 23,
  },
  yourChakraType1: {
    left: 10,
  },
  mydesignTxtbox3: {
    left: 4,
    height: 75,
    width: 280,
  },
  mydesignTxtbox2: {
    width: 284,
    height: 163,
    left: 2,
  },
  mydesignTxtbox1: {
    top: 409,
    left: 37,
    width: 286,
    height: 251,
    position: "absolute",
  },
  mydesignTxtbox4: {
    top: 319,
    left: 40,
    height: 75,
    width: 280,
    position: "absolute",
  },
  mydesignTxtbox5: {
    top: 229,
    left: 40,
    height: 75,
    width: 280,
    position: "absolute",
  },
  notifications: {
    top: 54,
    left: 115,
    fontSize: 30,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.playfairDisplayRegular,
    position: "absolute",
  },
  notification: {
    backgroundColor: "#8093f1",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default NOTIFICATION1;
