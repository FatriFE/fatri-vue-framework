import request from '@/plugins/axios';

export const AccountLogin = (data) => {
  return request({
    url: '/api/business/login',
    method: 'POST',
    data,
  });
};

export const getUserRoles = () => {
  return request({
    url: '/api/business/user',
    method: 'GET',
  });
};
