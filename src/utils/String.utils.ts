import {PROFILE_CLICKS} from '../types/types';

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const capitalizeAndReplace = (input: string) => {
  if (typeof input !== 'string') {
    return;
  }
  return input.toUpperCase().replace(/ /g, '_') as PROFILE_CLICKS;
};
