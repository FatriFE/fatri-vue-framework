import request from '@/plugins/axios';

export const getAccountInfo = (params) => {
  return request({
    url: '/api/business/user',
    method: 'GET',
    params,
  });
};
