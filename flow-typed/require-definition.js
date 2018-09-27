// @flow

// resolve: ,
// id:
declare var require: {
  (id: string): any;
  context(
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ): {
    keys(): Array<string>
  }
};
