import request from '@/plugins/axios';

export const AccountLogin = (data) =>
  request({
    url: '/api/business/login',
    method: 'POST',
    data,
  });

export const getUserRoles = () =>
  request({
    url: '/api/business/user',
    method: 'GET',
  });
