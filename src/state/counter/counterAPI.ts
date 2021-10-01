import http from 'services/axios';

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  // return http.get('https://gorest.co.in/public/v1/users')
  return new Promise<{ data: number }>(resolve => {
    return setTimeout(() => resolve({ data: amount }), 500);
  });
}
