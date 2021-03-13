module.exports = (config, _context) => {
  const tsLoader = config.module.rules.find((r) =>
    r.loader.includes('ts-loader')
  );

  process.env.NODE_ENV = _context.mode;

  if (tsLoader) {
    tsLoader.options.transpileOnly = false;
    tsLoader.options.getCustomTransformers = (program) => {
      return {
        before: [
          require('@nestjs/graphql/plugin').before(
            {
              // Options: typeFileNameSuffix, introspectComments
            },
            program
          ),
        ],
      };
    };
  }

  return config;
};
