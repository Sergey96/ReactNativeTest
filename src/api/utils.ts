import axios from 'axios';
import {client} from './Api';

export const get = async (url: string) => {
  try {
    const response = await client.get(url);
    return {
      success: true,
      code: 200,
      data: response.data,
      error: '',
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        error: error?.response?.data.message ?? '',
        code: error?.response?.status ?? 500,
      };
    }
    return {
      success: false,
      error: 'Ошибка при выполнении запроса',
      code: 500,
    };
  }
};

export const post = async (url: string, data: any, isFormData = false) => {
  try {
    const response = await client.post(
      url,
      data,
      isFormData
        ? {
            headers: {'Content-Type': 'multipart/form-data'},
          }
        : {},
    );
    return {success: true, code: 200, data: response.data?.data};
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        error: error?.response?.data.message,
        code: error?.response?.status,
        data: null,
      };
    }
  }
};

export const getOffset = (page: number) => (page - 1) * 10;
