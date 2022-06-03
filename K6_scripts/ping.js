import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1s', target: 2000 }, 
    { duration: '1s', target: 2000 },
    { duration: '1s', target: 2000 }, 

  ],
};
export default function () {
  const BASE_URL = 'http://localhost';

  const responses = http.batch([
    ['GET', `http://localhost:8001/public/crocodiles/1/`, null, { tags: { name: 'GO' } }],
    ['GET', `http://localhost:8002/public/crocodiles/2/`, null, { tags: { name: 'NODE' } }],
    ['GET', `http://localhost:8003/public/crocodiles/3/`, null, { tags: { name: 'PHP' } }],
  ]);

  sleep(1);
}