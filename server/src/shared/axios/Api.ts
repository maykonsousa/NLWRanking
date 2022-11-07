import axios from 'axios';

export const rocketCount = axios.create({
  baseURL: 'https://skylab-api.rocketseat.com.br/public/event/nlw-copa/referral',
})