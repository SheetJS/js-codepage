/*::
type EMap = {[e:string]:number};
type DMap = Array<string>;
type CPEntry = {enc:EMap, dec:DMap};

type Data = string | Array<number> | Buffer;
type StrData = string | Array<string> | Buffer;
type OutType = Data;

type CPIndex = number|string;

type CPTable = {
	[key: CPIndex]:CPEntry;
	utils:{
		decode(cp:CPIndex, data:OutType): string;
		encode(cp:CPIndex, data:StrData, ofmt:?string):OutType;
		hascp(cp:number):boolean;
		magic:any;
		cache:any;
	};
};

declare var cptable: CPTable;

declare module './cptable' {
	declare var exports: CPTable;
}
*/
