import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Google from 'expo-google-app-auth';


export default function App() {

  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId: "283068235627-3eancop7cddl0pb5hgen4k5bq48itnbr.apps.googleusercontent.com",
        // iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ padding: 10, backgroundColor: '#2ff' }} onPress={() => signInWithGoogleAsync()}>
        <Text>Google signin</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
