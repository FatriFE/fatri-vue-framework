module.exports = {
  // 告诉 Jest 要匹配的文件后缀
  moduleFileExtensions: ['js', 'vue'],
  // transform 匹配到 .vue 文件的时候用 vue-jest 处理，匹配到 .js 文件的时候用 babel-jest 处理
  transform: {
    '^.+\\.vue$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  // 处理webpack别名
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  // 将保存的快照测试结果进行序列化，使其更美观
  snapshotSerializers: ['jest-serializer-vue'],
  // 匹配那些文件进行测试
  testMatch: ['**/__tests__/**/*.spec.js'],
  // 不进行匹配的目录
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**'],
};
