import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring, 
  withDelay,
  WithSpringConfig 
} from 'react-native-reanimated';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

NativeWindStyleSheet.setOutput({
  default: "native",
});

const springConfig: WithSpringConfig = {
  damping: 10,
  stiffness: 100,
};

type RootStackParamList = {
  Main: undefined;
  Auth: undefined;
};

type MainScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

export default function MainScreen() {
  const navigation = useNavigation<MainScreenNavigationProp>();
  const titleOpacity = useSharedValue(0);
  const subtitleOpacity = useSharedValue(0);
  const buttonScale = useSharedValue(0.8);

  const [fontsLoaded] = useFonts({
    "UbuntuRegular": require("@/assets/fonts/Ubuntu/Ubuntu-Regular.ttf")
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      titleOpacity.value = withSpring(1, springConfig);
      subtitleOpacity.value = withDelay(300, withSpring(1, springConfig));
      buttonScale.value = withDelay(600, withSpring(1, springConfig));
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const titleStyle = useAnimatedStyle(() => ({
    opacity: titleOpacity.value,
  }));

  const subtitleStyle = useAnimatedStyle(() => ({
    opacity: subtitleOpacity.value,
  }));

  const buttonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: buttonScale.value }],
  }));

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?auto=format&fit=crop&w=1080&q=80" }}
      className="flex-1 justify-center items-center"
    >
      <View className="absolute inset-0 bg-black/50" />
      <Animated.Text style={[titleStyle, { fontFamily: "UbuntuRegular" }]} className="text-blue-400 text-6xl font-bold mb-4">
        StressEasy
      </Animated.Text>
      <Animated.Text style={subtitleStyle} className="text-white text-xl mb-8">
        Find Your Calm in the Chaos
      </Animated.Text>
      <Animated.View style={buttonStyle}>
        <TouchableOpacity
          className="bg-blue-500 px-8 py-3 rounded-full"
          onPress={() => navigation.navigate('Auth')}
        >
          <Text className="text-white text-lg font-semibold">Get Started</Text>
        </TouchableOpacity>
      </Animated.View>
    </ImageBackground>
  );
}