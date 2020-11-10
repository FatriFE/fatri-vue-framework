import request from '@/plugins/axios';

export const getAccountInfo = (params) =>
  request({
    url: '/api/business/user',
    method: 'GET',
    params,
  });
