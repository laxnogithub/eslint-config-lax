/*
 * @Description: 
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-08-28 11:19:51
 * @LastEditors: lax
 * @LastEditTime: 2022-08-28 11:21:23
 * @FilePath: \eslint-config-lax\index.js
 */

module.exports = {
  extends: [
    './rules/index',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {},
};
