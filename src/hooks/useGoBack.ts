import {useCallback} from 'react';
import {useAppNavigation} from './useAppNavigation';

export const useGoBack = () => {
  const navigator = useAppNavigation();

  const handler = useCallback(() => {
    navigator.canGoBack() && navigator.goBack();
  }, [navigator]);

  return handler;
};
