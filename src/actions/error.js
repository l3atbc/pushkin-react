export const ERROR = 'ERROR';

export function error(err) {
  console.log('error dispatch called');
  return {
    type: ERROR,
    err,
  };
}
