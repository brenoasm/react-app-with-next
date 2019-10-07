const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
  // const isStaging = PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  const env = {
    TEST_URL: (() => {
      if (isDev) return 'http://11111111:4000';
      else if (isProd) {
        return 'http://2222222:4000';
      } else {
        return 'TEST_URL: NOT DEFINED';
      }
    })(),
  };

  return {
    env,
  };
};
