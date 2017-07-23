// tslint:disable-next-line
/// <reference path="node_modules/snabbdom-pragma/snabbdom-pragma.d.ts" />

declare var Snabbdom : any //Automaticly imported into every file

declare module '*.png' {
  const content : any
  export default content
}

declare module '*.jpg' {
  const content : any
  export default content
}

declare module '*.svg' {
  const content : any
  export default content
}