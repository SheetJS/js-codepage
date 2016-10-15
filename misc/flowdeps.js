/*::
type _CB = {(data:Buffer):void;};
declare module 'concat-stream' {declare function exports(f:_CB):stream$Duplex;};
declare module 'exit-on-epipe' {};

declare module 'codepage' { declare var exports:CPTable;  };
declare module '../' { declare var exports:CPTable; };

declare module 'commander' { declare var exports:any; };
*/
