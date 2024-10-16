import AsyncStorage from '@react-native-async-storage/async-storage';

export enum STORAGE_KEYS {
  AUTH_TOKEN = 'AUTH_TOKEN',
  REFRESH_TOKEN = 'REFRESH_TOKEN',
  THEME = 'THEME',
}

export const Storage = {
  save: async (key: STORAGE_KEYS, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
    }
  },
  get: async (key: STORAGE_KEYS) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
    } catch (e) {
      // error reading value
    }
  },
  async remove(key: STORAGE_KEYS) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (exception) {
      return false;
    }
  },
};
