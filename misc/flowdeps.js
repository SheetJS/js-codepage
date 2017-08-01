/*::
type _CB = {(data:Buffer):void;};
declare module 'exit-on-epipe' {};

declare module 'codepage' { declare var exports:CPTable;  };
declare module '../' { declare var exports:CPTable; };

declare module 'commander' { declare var exports:any; };

type CPTableType = { [i:CPIndex]:CPEntry; };
declare module './cptable' { declare var exports:CPTableType; };
*/
