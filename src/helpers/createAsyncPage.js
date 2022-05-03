import { lazy } from 'react';

export const createAsyncPage = componentName => {
  return lazy(() => {
    return import(`../pages/${componentName}/${componentName}.jsx`);
  });
};
