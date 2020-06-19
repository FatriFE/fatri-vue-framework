import request from '@/plugins/axios';

export const accountLogin = (data) => {
  return request({
    url: '/api/business/login',
    method: 'POST',
    data,
  });
};
