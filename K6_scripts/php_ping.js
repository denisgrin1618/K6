import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 2000,
  duration: '10s',
};


export default function () {
  http.get('http://localhost:8003/ping');
  sleep(1);
}