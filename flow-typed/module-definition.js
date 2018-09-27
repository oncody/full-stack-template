// @flow

declare var module: {
  hot: {
    accept(dependencies: string,
           callback: () => void): any
  }
};
