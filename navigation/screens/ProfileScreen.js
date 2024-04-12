import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../globals";

//UPDATE POSITIONING & COLOR ISSUE

const ACCOUNT = () => {
  return (
    <View style={styles.account}>
      <Image
        style={styles.icons8MaleUser962}
        contentFit="cover"
        source={require("../../assets/Vectors/icons8-male-user-96.png")}
      />
      <Text style={styles.johnJones}>John Jones</Text>
      <Text style={styles.johnjonesuser}>@johnjonesuser</Text>
      <Image
        style={[styles.icons8Arrow902, styles.icons8Layout]}
        contentFit="cover"
        source={require("../../assets/Vectors/icons8-arrow-90.png")}
      />
      <View style={[styles.accountInfo, styles.accountLayout]}>
        <View style={[styles.accountInfoChild, styles.timeOfBirthPosition]} />
        <View style={[styles.emailInfo, styles.emailLayout]}>
          <Text style={[styles.pm, styles.pmTypo]}>11:11pm</Text>
          <Text style={[styles.timeOfBirth, styles.pmTypo]}>Time Of Birth</Text>
          <View style={styles.emailInfoChild} />
        </View>
        <View style={[styles.birthdateInfo, styles.emailLayout]}>
          <Text style={[styles.pm, styles.pmTypo]}>January 1, 1980</Text>
          <Text style={[styles.timeOfBirth, styles.pmTypo]}>Birthdate</Text>
          <View style={styles.emailInfoChild} />
        </View>
        <View style={[styles.birthplaceInfo, styles.emailLayout]}>
          <Text style={[styles.pm, styles.pmTypo]}>
            Toronto, Ontario, Canada
          </Text>
          <Text style={[styles.timeOfBirth, styles.pmTypo]}>Birthplace</Text>
          <View style={styles.emailInfoChild} />
        </View>
        <Text style={[styles.accountInformation, styles.pmTypo]}>
          Account Information
        </Text>
        <View style={[styles.emailInfo1, styles.emailLayout]}>
          <Text style={[styles.pm, styles.pmTypo]}>johnjones@gmail.com</Text>
          <Text style={[styles.timeOfBirth, styles.pmTypo]}>Email</Text>
          <View style={styles.emailInfoChild} />
        </View>
        <Image
          style={[styles.icons8Settings3842, styles.icons8Layout]}
          contentFit="cover"
          source={require("../../assets/Vectors/icons8-settings-384.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icons8Layout: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  accountLayout: {
    height: 471,
    width: 360,
    position: "absolute",
  },
  timeOfBirthPosition: {
    top: 0,
    left: 0,
  },
  emailLayout: {
    height: 43,
    width: 308,
    left: 28,
    position: "absolute",
  },
  pmTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  icons8MaleUser962: {
    top: 85,
    left: 132,
    width: 96,
    height: 96,
    position: "absolute",
  },
  johnJones: {
    top: 181,
    left: 112,
    fontSize: 25,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorBeige,
    position: "absolute",
  },
  johnjonesuser: {
    top: 211,
    left: 124,
    fontSize: 15,
    fontFamily: FontFamily.interRegular,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorBeige,
    position: "absolute",
  },
  icons8Arrow902: {
    top: 10,
    left: 8,
  },
  accountInfoChild: {
    borderRadius: 13,
    backgroundColor: Color.colorBeige,
    height: 471,
    width: 360,
    position: "absolute",
  },
  pm: {
    top: 21,
    fontSize: FontSize.size_3xs,
    left: 0,
  },
  timeOfBirth: {
    fontSize: FontSize.size_xs,
    top: 0,
    left: 0,
  },
  emailInfoChild: {
    top: 43,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderTopWidth: 1,
    width: 309,
    height: 1,
    left: 0,
    position: "absolute",
  },
  emailInfo: {
    top: 228,
  },
  birthdateInfo: {
    top: 124,
  },
  birthplaceInfo: {
    top: 176,
  },
  accountInformation: {
    top: 22,
    left: 26,
    fontSize: 18,
  },
  emailInfo1: {
    top: 72,
  },
  icons8Settings3842: {
    top: 20,
    left: 317,
  },
  accountInfo: {
    top: 259,
    left: 0,
  },
  account: {
    backgroundColor: "#8093f1",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default ACCOUNT;
