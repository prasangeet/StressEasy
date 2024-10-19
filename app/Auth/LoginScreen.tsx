import React, { useState } from 'react';
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { AuthStackParamList } from './_layout';

type LoginScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    console.log('Logging in:', { email, password });
    // Add your login logic here
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-gray-900"
    >
      <StatusBar style="light" />
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} 
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-gray-800 rounded-3xl p-8 shadow-lg mx-6">
          <Text className="text-3xl font-bold text-blue-400 mb-6 text-center">
            Welcome Back
          </Text>
          
          <View className="mb-4">
            <Text className="text-white text-sm mb-1">Email</Text>
            <TextInput
              className="bg-gray-700 text-white px-4 py-3 rounded-lg"
              placeholderTextColor="#9CA3AF"
              placeholder="Enter your email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
          </View>
          
          <View className="mb-6 relative">
            <Text className="text-white text-sm mb-1">Password</Text>
            <TextInput
              className="bg-gray-700 text-white px-4 py-3 rounded-lg pr-10"
              placeholderTextColor="#9CA3AF"
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons 
                name={showPassword ? "eye-off" : "eye"} 
                size={24} 
                color="#9CA3AF" 
              />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity
            className="bg-blue-500 rounded-lg py-3 mb-4"
            onPress={handleSubmit}
          >
            <Text className="text-white text-center text-lg font-semibold">
              Log In
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={() => navigation.navigate('SignUp')}
            className="mt-4"
          >
            <Text className="text-blue-400 text-center">
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}