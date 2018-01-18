import cptable from 'codepage';

const unicode_cp10000_255: string = cptable[10000].dec[255]; // ˇ

const cp10000_711: number = cptable[10000].enc[String.fromCharCode(711)]; // 255

const 汇总: string = cptable.utils.decode(936, [0xbb,0xe3,0xd7,0xdc]);
const buf: Uint8Array = <Uint8Array>(cptable.utils.encode(936,  汇总));

const sushi: string = cptable.utils.decode(65001, [0xf0,0x9f,0x8d,0xa3]); // 🍣
const sbuf: Uint8Array = <Uint8Array>(cptable.utils.encode(65001, sushi));

cptable.utils.hascp(10000);
