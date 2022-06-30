import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_TOKEN = '@authToken';

export async function getStoredToken(): Promise<string | null> {
  return await AsyncStorage.getItem(AUTH_TOKEN);
}

export async function setStoredToken(token: string): Promise<void> {
  return await AsyncStorage.setItem(AUTH_TOKEN, token);
}

export async function clearStoredToken(): Promise<void> {
  return await AsyncStorage.removeItem(AUTH_TOKEN);
}
