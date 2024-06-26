import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../globals";

// UPDATE POSITION, CARD COLOR, BOX SIZE/SHADOWING, AND PLAYFAIR TEXT 2024:04-12

const HOME = () => {
  return (
    <View style={styles.home}>
      <View style={[styles.homeChild, styles.homeChildShadowBox]} />
      <Image
        style={[styles.icons8Comment1001, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../../assets/Vectors/icons8-comment-100.png")}
      />
      <Image
        style={[styles.icons8Heart241, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../../assets/Vectors/icons8-heart-material-outlined (1)/icons8-heart-24.png")}
      />
      <View style={[styles.homeItem, styles.homeChildShadowBox]} />
      <View style={[styles.homeInner, styles.homeInnerShadowBox]} />
      <View style={[styles.rectangleView, styles.homeInnerShadowBox]} />
      <View
        style={[styles.meganharmonyProfile, styles.icons8MaleUser964Layout]}
      >
        <Text style={[styles.latinWords, styles.latinWordsTypo]}>
          Latin Words
        </Text>
        <Image
          style={[styles.icons8MaleUser964, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../../assets/Vectors/icons8-male-user-96.png")}
        />
        <Text style={[styles.meganharmony, styles.meganharmonyTypo]}>
          meganharmony
        </Text>
      </View>
      <View style={[styles.homeChild1, styles.homeChildShadowBox]} />
      <Text style={[styles.replaceSomethingWith, styles.latinWordsTypo]}>
        “replace (something) with something else, especially something of the
        same kind that is newer or better; substitute one thing for (another).”
      </Text>
      <Text style={[styles.anteDiluvianFromContainer, styles.latinWordsTypo]}>
        <Text style={styles.anteDiluvian}>Ante diluvian</Text>
        <Text style={styles.fromTwoLatin}>
           – From two Latin words, ante which means “before” and diluvium which
          means “deluge” or “flood”. The period before the Flood of Genesis
          chapter 7.
        </Text>
      </Text>
      <Text style={[styles.change, styles.changeTypo]}>Change</Text>
      <Text style={[styles.yourTipOf, styles.changeTypo]}>
        Your Tip Of The Day
      </Text>
      <Text style={[styles.innerharmonyhealing, styles.meganharmonyTypo]}>
        -innerharmonyhealing
      </Text>
      <View style={[styles.ellipseParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../../assets/Vectors/home-user-Ellipse.png")}
        />
        <Image
          style={styles.icons8MaleUser963}
          contentFit="cover"
          source={require("../../assets/Vectors/icons8-male-user-96.png")}
        />
      </View>
      <Text style={[styles.goodMorningJohn, styles.changeTypo]}>
        Good Morning John
      </Text>
      <Image
        style={[styles.icons8Play301, styles.icons8Layout]}
        contentFit="cover"
        source={require("../../assets/Vectors/icons8-play-30.png")}
      />
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../../assets/Vectors/home-play-line.png")}
      />
      <Image
        style={[styles.icons8Dots301, styles.icons8Layout]}
        contentFit="cover"
        source={require("../../assets/Vectors/icons8-dots-ios-17-glyph/icons8-dots-30.png")}
      />
  
      <Image
        style={[styles.icons8Bookmark241, styles.icons8Layout1]}
        contentFit="cover"
        source={require("../../assets/Vectors/icons8-bookmark-24.png")}
      />
    </View>
  );

};

const styles = StyleSheet.create({
  homeChildShadowBox: {
    height: 187,
    width: 390,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 500,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorPalegoldenrod,
    borderRadius: Border.br_base,
    left: 10,
    position: "absolute",
  },
  icons8Layout1: {
    height: 18,
    width: 18,
    top: 355,
    position: "absolute",
  },
  homeInnerShadowBox: {
    height: 86,
    width: 161,
    top: 561,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorPalegoldenrod,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  icons8MaleUser964Layout: {
    height: 25,
    position: "absolute",
  },
  latinWordsTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  groupChildPosition: {
    left: 7,
    top: 16,
  },
  meganharmonyTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  changeTypo: {
    fontFamily: FontFamily.playfairDisplayRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChildLayout: {
    height: 70,
    width: 70,
    position: "absolute",
  },
  icons8Layout: {
    height: 15,
    position: "absolute",
  },
  homeChild: {
    top: 240,
  },
  icons8Comment1001: {
    left: 70,
  },
  icons8Heart241: {
    left: 40,
  },
  homeItem: {
    top: 399,
  },
  homeInner: {
    left: 13,
  },
  rectangleView: {
    left: 188,
  },
  latinWords: {
    top: 27,
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    left: 43,
    textAlign: "left",
    color: Color.colorBlack,
  },
  icons8MaleUser964: {
    width: 25,
    height: 25,
    position: "absolute",
  },
  meganharmony: {
    top: 15,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 35,
  },
  meganharmonyProfile: {
    top: 250,
    left: 24,
    width: 107,
  },
  homeChild1: {
    top: 50,
  },
  replaceSomethingWith: {
    top: 120,
    left: 105,
    width: 218,
    fontFamily: FontFamily.interRegular,
  },
  anteDiluvian: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  fromTwoLatin: {
    fontFamily: FontFamily.interRegular,
  },
  anteDiluvianFromContainer: {
    top: 303,
    left: 80,
    width: 253,
    height: 48,
  },
  change: {
    top: 94,
    left: 175,
    fontSize: 15,
  },
  yourTipOf: {
    top: 75,
    left: 40,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.playfairDisplayRegular,
  },
  innerharmonyhealing: {
    top: 195,
    left: 260,
  },
  groupChild: {
    left: 40,
    top: -10,
  },
  icons8MaleUser963: {
    top: -8,
    left: 43,
    width: 65,
    height: 65,
    position: "absolute",
  },
  ellipseParent: {
    left: 248,
    top: 40,
  },
  goodMorningJohn: {
    left: 60,
    fontSize: 20,
    top: 30,
  },
  icons8Play301: {
    top: 193,
    width: 12,
    left: 45,
  },
  lineIcon: {
    top: 200,
    left: 66,
    width: 140,
    height: 2,
    position: "absolute",
  },
  icons8Dots301: {
    top: 270,
    left: 355,
    width: 15,
  },
  icons8Bookmark241: {
    left: 355,
  },
  home: {
    backgroundColor: "#8093f1",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default HOME;
