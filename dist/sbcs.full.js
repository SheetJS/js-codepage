/* sbcs.js (C) 2013-2014 SheetJS -- http://sheetjs.com */
/*jshint -W100 */
var cptable = {};
cptable[37] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåçñ¢.<(+|&éêëèíîïìß!$*);¬-/ÂÄÀÁÃÅÇÑ¦,%_>?øÉÊËÈÍÎÏÌ`:#@'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ¤µ~stuvwxyz¡¿ÐÝÞ®^£¥·©§¶¼½¾[]¯¨´×{ABCDEFGHI­ôöòóõ}JKLMNOPQR¹ûüùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[437] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[500] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåçñ[.<(+!&éêëèíîïìß]$*);^-/ÂÄÀÁÃÅÇÑ¦,%_>?øÉÊËÈÍÎÏÌ`:#@'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ¤µ~stuvwxyz¡¿ÐÝÞ®¢£¥·©§¶¼½¾¬|¯¨´×{ABCDEFGHI­ôöòóõ}JKLMNOPQR¹ûüùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[737] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[775] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ĆüéāäģåćłēŖŗīŹÄÅÉæÆōöĢ¢ŚśÖÜø£Ø×¤ĀĪóŻżź”¦©®¬½¼Ł«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀ÓßŌŃõÕµńĶķĻļņĒŅ’­±“¾¶§÷„°∙·¹³²■ ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[850] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[852] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[855] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ«»░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬¤лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№­ыЫзЗшШэЭщЩчЧ§■ ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[857] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[860] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâãàÁçêÊèÍÔìÃÂÉÀÈôõòÚùÌÕÜ¢£Ù₧ÓáíóúñÑªº¿Ò¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[861] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[862] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~אבגדהוזחטיךכלםמןנסעףפץצקרשת¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[863] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâÂà¶çêëèïî‗À§ÉÈÊôËÏûù¤ÔÜ¢£ÙÛƒ¦´óú¨¸³¯Î⌐¬½¼¾«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[864] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$٪&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~°·∙√▒─│┼┤┬├┴┐┌└┘β∞φ±½¼≈«»ﻷﻸ��ﻻﻼ� ­ﺂ£¤ﺄ��ﺎﺏﺕﺙ،ﺝﺡﺥ٠١٢٣٤٥٦٧٨٩ﻑ؛ﺱﺵﺹ؟¢ﺀﺁﺃﺅﻊﺋﺍﺑﺓﺗﺛﺟﺣﺧﺩﺫﺭﺯﺳﺷﺻﺿﻁﻅﻋﻏ¦¬÷×ﻉـﻓﻗﻛﻟﻣﻧﻫﻭﻯﻳﺽﻌﻎﻍﻡﹽّﻥﻩﻬﻰﻲﻐﻕﻵﻶﻝﻙﻱ■�", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[865] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[866] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[869] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~������Ά�·¬¦‘’Έ―ΉΊΪΌ��ΎΫ©Ώ²³ά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄­±υφχ§ψ΅°¨ωϋΰώ■ ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[874] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[875] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a ΑΒΓΔΕΖΗΘΙ[.<(+!&ΚΛΜΝΞΟΠΡΣ]$*);^-/ΤΥΦΧΨΩΪΫ|,%_>?¨ΆΈΉ ΊΌΎΏ`:#@'=\"΅abcdefghiαβγδεζ°jklmnopqrηθικλμ´~stuvwxyzνξοπρσ£άέήϊίόύϋώςτυφχψ{ABCDEFGHI­ωΐΰ‘―}JKLMNOPQR±½\u001a·’¦\\\u001aSTUVWXYZ²§\u001a\u001a«¬0123456789³©\u001a\u001a»", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[1026] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãå{ñÇ.<(+!&éêëèíîïìßĞİ*);^-/ÂÄÀÁÃÅ[Ñş,%_>?øÉÊËÈÍÎÏÌı:ÖŞ'=ÜØabcdefghi«»}`¦±°jklmnopqrªºæ¸Æ¤µöstuvwxyz¡¿]$@®¢£¥·©§¶¼½¾¬|¯¨´×çABCDEFGHI­ô~òóõğJKLMNOPQR¹û\\ùúÿü÷STUVWXYZ²Ô#ÒÓÕ0123456789³Û\"ÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[1250] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[1251] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[1252] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[1253] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[1254] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[1255] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹ�ֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[1256] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[1257] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[1258] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[10000] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[10006] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦­ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ�", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[10007] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°¢£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµ∂ЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[10029] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[10079] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[10081] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙ�ˆ˜¯˘˙˚¸˝˛ˇ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[28591] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[28592] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[28593] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ Ħ˘£¤�Ĥ§¨İŞĞĴ­�Ż°ħ²³´µĥ·¸ışğĵ½�żÀÁÂ�ÄĊĈÇÈÉÊËÌÍÎÏ�ÑÒÓÔĠÖ×ĜÙÚÛÜŬŜßàáâ�äċĉçèéêëìíîï�ñòóôġö÷ĝùúûüŭŝ˙", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[28594] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ĄĸŖ¤ĨĻ§¨ŠĒĢŦ­Ž¯°ą˛ŗ´ĩļˇ¸šēģŧŊžŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎĪĐŅŌĶÔÕÖ×ØŲÚÛÜŨŪßāáâãäåæįčéęëėíîīđņōķôõö÷øųúûüũū˙", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[28595] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ЁЂЃЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђѓєѕіїјљњћќ§ўџ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[28596] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ���¤�������،­�������������؛���؟�ءآأؤإئابةتثجحخدذرزسشصضطظعغ�����ـفقكلمنهوىيًٌٍَُِّْ�������������", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[28597] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[28598] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ �¢£¤¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾��������������������������������‗אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[28599] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[28600] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ĄĒĢĪĨĶ§ĻĐŠŦŽ­ŪŊ°ąēģīĩķ·ļđšŧž―ūŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎÏÐŅŌÓÔÕÖŨØŲÚÛÜÝÞßāáâãäåæįčéęëėíîïðņōóôõöũøųúûüýþĸ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[28601] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[28603] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ”¢£¤„¦§Ø©Ŗ«¬­®Æ°±²³“µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž’", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[28604] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ Ḃḃ£ĊċḊ§Ẁ©ẂḋỲ­®ŸḞḟĠġṀṁ¶ṖẁṗẃṠỳẄẅṡÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŴÑÒÓÔÕÖṪØÙÚÛÜÝŶßàáâãäåæçèéêëìíîïŵñòóôõöṫøùúûüýŷÿ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[28605] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[28606] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ĄąŁ€„Š§š©Ș«Ź­źŻ°±ČłŽ”¶·žčș»ŒœŸżÀÁÂĂÄĆÆÇÈÉÊËÌÍÎÏĐŃÒÓÔŐÖŚŰÙÚÛÜĘȚßàáâăäćæçèéêëìíîïđńòóôőöśűùúûüęțÿ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[708] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~│┤éâ╡à╢çêëèïî╖╕╣║╗╝ô╜╛ûù┐└┴┬├¤─┼╞╟╚╔╩،╦«»░▒▓╠═╬╧╨╤╥╙؛╘╒╓؟╫ءآأؤإئابةتثجحخدذرزسشصضطظعغ█▄▌▐▀ـفقكلمنهوىيًٌٍَُِّْ╪┘┌µ£■ ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[720] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~éâàçêëèïîّْô¤ـûùءآأؤ£إئابةتثجحخدذرزسشص«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ضطظعغفµقكلمنهوىي≡ًٌٍَُِ≈°∙·√ⁿ²■ ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[858] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈ€ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[870] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäţáăčçć[.<(+!&éęëůíîľĺß]$*);^-/ÂÄ˝ÁĂČÇĆ|,%_>?ˇÉĘËŮÍÎĽĹ`:#@'=\"˘abcdefghiśňđýřş°jklmnopqrłńš¸˛¤ą~stuvwxyzŚŇĐÝŘŞ˙ĄżŢŻ§žźŽŹŁŃŠ¨´×{ABCDEFGHI­ôöŕóő}JKLMNOPQRĚűüťúě\\÷STUVWXYZďÔÖŔÓŐ0123456789ĎŰÜŤÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[1047] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\n\b\u0018\u0019\u001c\u001d\u001e\u001f\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåçñ¢.<(+|&éêëèíîïìß!$*);^-/ÂÄÀÁÃÅÇÑ¦,%_>?øÉÊËÈÍÎÏÌ`:#@'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ¤µ~stuvwxyz¡¿Ð[Þ®¬£¥·©§¶¼½¾Ý¨¯]´×{ABCDEFGHI­ôöòóõ}JKLMNOPQR¹ûüùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[1140] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåçñ¢.<(+|&éêëèíîïìß!$*);¬-/ÂÄÀÁÃÅÇÑ¦,%_>?øÉÊËÈÍÎÏÌ`:#@'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ€µ~stuvwxyz¡¿ÐÝÞ®^£¥·©§¶¼½¾[]¯¨´×{ABCDEFGHI­ôöòóõ}JKLMNOPQR¹ûüùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[1141] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  â{àáãåçñÄ.<(+!&éêëèíîïì~Ü$*);^-/Â[ÀÁÃÅÇÑö,%_>?øÉÊËÈÍÎÏÌ`:#§'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ€µßstuvwxyz¡¿ÐÝÞ®¢£¥·©@¶¼½¾¬|¯¨´×äABCDEFGHI­ô¦òóõüJKLMNOPQR¹û}ùúÿÖ÷STUVWXYZ²Ô\\ÒÓÕ0123456789³Û]ÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[1142] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáã}çñ#.<(+!&éêëèíîïìß€Å*);^-/ÂÄÀÁÃ$ÇÑø,%_>?¦ÉÊËÈÍÎÏÌ`:ÆØ'=\"@abcdefghi«»ðýþ±°jklmnopqrªº{¸[]µüstuvwxyz¡¿ÐÝÞ®¢£¥·©§¶¼½¾¬|¯¨´×æABCDEFGHI­ôöòóõåJKLMNOPQR¹û~ùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[1143] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  â{àáã}çñ§.<(+!&`êëèíîïìß€Å*);^-/Â#ÀÁÃ$ÇÑö,%_>?ø\\ÊËÈÍÎÏÌé:ÄÖ'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ]µüstuvwxyz¡¿ÐÝÞ®¢£¥·©[¶¼½¾¬|¯¨´×äABCDEFGHI­ô¦òóõåJKLMNOPQR¹û~ùúÿÉ÷STUVWXYZ²Ô@ÒÓÕ0123456789³ÛÜÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[1144] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âä{áãå\\ñ°.<(+!&]êë}íîï~ßé$*);^-/ÂÄÀÁÃÅÇÑò,%_>?øÉÊËÈÍÎÏÌù:£§'=\"Øabcdefghi«»ðýþ±[jklmnopqrªºæ¸Æ€µìstuvwxyz¡¿ÐÝÞ®¢#¥·©@¶¼½¾¬|¯¨´×àABCDEFGHI­ôö¦óõèJKLMNOPQR¹ûü`úÿç÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[1145] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåç¦[.<(+|&éêëèíîïìß]$*);¬-/ÂÄÀÁÃÅÇ#ñ,%_>?øÉÊËÈÍÎÏÌ`:Ñ@'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ€µ¨stuvwxyz¡¿ÐÝÞ®¢£¥·©§¶¼½¾^!¯~´×{ABCDEFGHI­ôöòóõ}JKLMNOPQR¹ûüùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[1146] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåçñ$.<(+|&éêëèíîïìß!£*);¬-/ÂÄÀÁÃÅÇÑ¦,%_>?øÉÊËÈÍÎÏÌ`:#@'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ€µ¯stuvwxyz¡¿ÐÝÞ®¢[¥·©§¶¼½¾^]~¨´×{ABCDEFGHI­ôöòóõ}JKLMNOPQR¹ûüùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[1147] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âä@áãå\\ñ°.<(+!&{êë}íîïìß§$*);^-/ÂÄÀÁÃÅÇÑù,%_>?øÉÊËÈÍÎÏÌµ:£à'=\"Øabcdefghi«»ðýþ±[jklmnopqrªºæ¸Æ€`¨stuvwxyz¡¿ÐÝÞ®¢#¥·©]¶¼½¾¬|¯~´×éABCDEFGHI­ôöòóõèJKLMNOPQR¹ûü¦úÿç÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[1148] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåçñ[.<(+!&éêëèíîïìß]$*);^-/ÂÄÀÁÃÅÇÑ¦,%_>?øÉÊËÈÍÎÏÌ`:#@'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ€µ~stuvwxyz¡¿ÐÝÞ®¢£¥·©§¶¼½¾¬|¯¨´×{ABCDEFGHI­ôöòóõ}JKLMNOPQR¹ûüùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[1149] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåçñÞ.<(+!&éêëèíîïìßÆ$*);Ö-/ÂÄÀÁÃÅÇÑ¦,%_>?øÉÊËÈÍÎÏÌð:#Ð'=\"Øabcdefghi«»`ý{±°jklmnopqrªº}¸]€µöstuvwxyz¡¿@Ý[®¢£¥·©§¶¼½¾¬|¯¨\\×þABCDEFGHI­ô~òóõæJKLMNOPQR¹ûüùúÿ´÷STUVWXYZ²Ô^ÒÓÕ0123456789³ÛÜÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[10004] = (function(){ var d = "ےے\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~Ä ÇÉÑÖÜáàâäں«çéèêëí…îïñó»ôö÷úùûü٪،٠١٢٣٤٥٦٧٨٩؛؟٭ءآأؤإئابةتثجحخدذرزسشصضطظعغـفقكلمنهوىيًٌٍَُِّْپٹچەڤگڈڑژے", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[10005] = (function(){ var d = "\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü¤₪„ּֽ… �ִֵֶַ–—“”‘’־ְֱֲֳָֻׁאבגדהוזחטיךכלםמןנסעףפץצקרשת", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[10010] = (function(){ var d = "ˇˇ\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂŞ∞±≤≥¥µ∂∑∏π∫ªºΩăş¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›Ţţ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[10017] = (function(){ var d = "¤¤\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[10021] = (function(){ var d = "��\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~�«»…����������“”��•�����������‘’� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู﻿​–—฿เแโใไๅๆ็่้๊๋์ํ™๏๐๑๒๓๔๕๖๗๘๙®©����", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[10082] = (function(){ var d = "ˇˇ\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄¤‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20105] = (function(){ var d = "��\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#¤%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}‾∇��������������������������������������������������������������������������������������������������������������������������������", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20106] = (function(){ var d = "��\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?§ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ^_`abcdefghijklmnopqrstuvwxyzäöüß��������������������������������������������������������������������������������������������������������������������������������", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20107] = (function(){ var d = "��\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#¤%&'()*+,-./0123456789:;<=>?ÉABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÅÜ_éabcdefghijklmnopqrstuvwxyzäöåü��������������������������������������������������������������������������������������������������������������������������������", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20108] = (function(){ var d = "��\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"§$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ^_`abcdefghijklmnopqrstuvwxyzæøå|��������������������������������������������������������������������������������������������������������������������������������", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20269] = (function(){ var d = "\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"��%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]�_�abcdefghijklmnopqrstuvwxyz{|}��� ¡¢£$¥#§¤‘“«←↑→↓°±²³×µ¶·÷’”»¼½¿�`´^~¯̆̈�̧̨̲̊̋̌―¹®©™♩��⅛⅜⅝⅞ΩÆÐĦ�ĲĿŁØŒºÞŦŊŉĸæđðħıĳŀłøœßþŧ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20273] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  â{àáãåçñÄ.<(+!&éêëèíîïì~Ü$*);^-/Â[ÀÁÃÅÇÑö,%_>?øÉÊËÈÍÎÏÌ`:#§'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ¤µßstuvwxyz¡¿ÐÝÞ®¢£¥·©@¶¼½¾¬|¯¨´×äABCDEFGHI­ô¦òóõüJKLMNOPQR¹û}ùúÿÖ÷STUVWXYZ²Ô\\ÒÓÕ0123456789³Û]ÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20277] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáã}çñ#.<(+!&éêëèíîïìß¤Å*);^-/ÂÄÀÁÃ$ÇÑø,%_>?¦ÉÊËÈÍÎÏÌ`:ÆØ'=\"@abcdefghi«»ðýþ±°jklmnopqrªº{¸[]µüstuvwxyz¡¿ÐÝÞ®¢£¥·©§¶¼½¾¬|¯¨´×æABCDEFGHI­ôöòóõåJKLMNOPQR¹û~ùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20278] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  â{àáã}çñ§.<(+!&`êëèíîïìß¤Å*);^-/Â#ÀÁÃ$ÇÑö,%_>?ø\\ÊËÈÍÎÏÌé:ÄÖ'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ]µüstuvwxyz¡¿ÐÝÞ®¢£¥·©[¶¼½¾¬|¯¨´×äABCDEFGHI­ô¦òóõåJKLMNOPQR¹û~ùúÿÉ÷STUVWXYZ²Ô@ÒÓÕ0123456789³ÛÜÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20280] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âä{áãå\\ñ°.<(+!&]êë}íîï~ßé$*);^-/ÂÄÀÁÃÅÇÑò,%_>?øÉÊËÈÍÎÏÌù:£§'=\"Øabcdefghi«»ðýþ±[jklmnopqrªºæ¸Æ¤µìstuvwxyz¡¿ÐÝÞ®¢#¥·©@¶¼½¾¬|¯¨´×àABCDEFGHI­ôö¦óõèJKLMNOPQR¹ûü`úÿç÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20284] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåç¦[.<(+|&éêëèíîïìß]$*);¬-/ÂÄÀÁÃÅÇ#ñ,%_>?øÉÊËÈÍÎÏÌ`:Ñ@'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ¤µ¨stuvwxyz¡¿ÐÝÞ®¢£¥·©§¶¼½¾^!¯~´×{ABCDEFGHI­ôöòóõ}JKLMNOPQR¹ûüùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20285] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåçñ$.<(+|&éêëèíîïìß!£*);¬-/ÂÄÀÁÃÅÇÑ¦,%_>?øÉÊËÈÍÎÏÌ`:#@'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ¤µ¯stuvwxyz¡¿ÐÝÞ®¢[¥·©§¶¼½¾^]~¨´×{ABCDEFGHI­ôöòóõ}JKLMNOPQR¹ûüùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20290] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a ｡｢｣､･ｦｧｨｩ£.<(+|&ｪｫｬｭｮｯ�ｰ�!¥*);¬-/abcdefgh�,%_>?[ijklmnop`:#@'=\"]ｱｲｳｴｵｶｷｸｹｺqｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉr�ﾊﾋﾌ~‾ﾍﾎﾏﾐﾑﾒﾓﾔﾕsﾖﾗﾘﾙ^¢\\tuvwxyzﾚﾛﾜﾝﾞﾟ{ABCDEFGHI������}JKLMNOPQR������$�STUVWXYZ������0123456789�����", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20297] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âä@áãå\\ñ°.<(+!&{êë}íîïìß§$*);^-/ÂÄÀÁÃÅÇÑù,%_>?øÉÊËÈÍÎÏÌµ:£à'=\"Øabcdefghi«»ðýþ±[jklmnopqrªºæ¸Æ¤`¨stuvwxyz¡¿ÐÝÞ®¢#¥·©]¶¼½¾¬|¯~´×éABCDEFGHI­ôöòóõèJKLMNOPQR¹ûü¦úÿç÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20420] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  ﹼﹽـﺀﺁﺂﺃ¢.<(+|&ﺄﺅ��ﺋﺍﺎﺏﺑ!$*);¬-/ﺓﺕﺗﺙﺛﺝﺟﺡ¦,%_>?ﺣﺥﺧﺩﺫﺭﺯﺳ،:#@'=\"abcdefghiﺷﺻﺿﻃﻇjklmnopqrﻉﻊﻋﻌﻍﻎﻏ÷stuvwxyzﻐﻑﻓﻕﻗﻙﻛﻝﻵﻶﻷﻸ��ﻻﻼﻟﻡﻣﻥﻧﻩ؛ABCDEFGHI­ﻫ�ﻬ�ﻭ؟JKLMNOPQRﻯﻰﻱﻲﻳ٠× STUVWXYZ١٢�٣٤٥0123456789�٦٧٨٩", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20423] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a ΑΒΓΔΕΖΗΘΙ[.<(+!&ΚΛΜΝΞΟΠΡΣ]$*);^-/ΤΥΦΧΨΩ��|,%_>?�ΆΈΉ ΊΌΎΏ`:£§'=\"ÄabcdefghiαβγδεζÖjklmnopqrηθικλμÜ¨stuvwxyzνξοπρσ�άέήϊίόύϋώςτυφχψ¸ABCDEFGHI­ωâàäê´JKLMNOPQR±éèëîï°�STUVWXYZ½öôûùü0123456789ÿçÇ��", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20424] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a אבגדהוזחט¢.<(+|&יךכלםמןנס!$*);¬-/עףפץצקרש¦,%_>?�ת�� ���‗`:#@'=\"�abcdefghi«»���±°jklmnopqr���¸�¤µ~stuvwxyz�����®^£¥•©§¶¼½¾[]‾¨´×{ABCDEFGHI­�����}JKLMNOPQR¹�����\\÷STUVWXYZ²�����0123456789³����", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20833] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a �ﾠﾡﾢﾣﾤﾥﾦﾧ¢.<(+|&�ﾨﾩﾪﾫﾬﾭﾮﾯ!$*);¬-/ﾰﾱﾲﾳﾴﾵﾶﾷ¦,%_>?[�ﾸﾹﾺﾻﾼﾽﾾ`:#@'=\"]abcdefghiￂￃￄￅￆￇ�jklmnopqrￊￋￌￍￎￏ‾~stuvwxyzￒￓￔￕￖￗ^�\\�������ￚￛￜ���{ABCDEFGHI������}JKLMNOPQR������₩�STUVWXYZ������0123456789�����", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20838] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  กขฃคฅฆง[¢.<(+|&�จฉชซฌญฎ]!$*);¬-/ฏฐฑฒณดต^¦,%_>?฿๎ถทธนบปผ`:#@'=\"๏abcdefghiฝพฟภมย๚jklmnopqrรฤลฦวศ๛~stuvwxyzษสหฬอฮ๐๑๒๓๔๕๖๗๘๙ฯะัาำิ{ABCDEFGHI�ีึืุู}JKLMNOPQRฺเแโใไ\\�STUVWXYZๅๆ็่้๊0123456789๋์ํ��", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20866] = (function(){ var d = "ЪЪ\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ё╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡Ё╢╣╤╥╦╧╨╩╪╫╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20871] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåçñÞ.<(+!&éêëèíîïìßÆ$*);Ö-/ÂÄÀÁÃÅÇÑ¦,%_>?øÉÊËÈÍÎÏÌð:#Ð'=\"Øabcdefghi«»`ý{±°jklmnopqrªº}¸]¤µöstuvwxyz¡¿@Ý[®¢£¥·©§¶¼½¾¬|¯¨\\×þABCDEFGHI­ô~òóõæJKLMNOPQR¹ûüùúÿ´÷STUVWXYZ²Ô^ÒÓÕ0123456789³ÛÜÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20880] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  ђѓёєѕіїј[.<(+!&љњћќўџЪ№Ђ]$*);^-/ЃЁЄЅІЇЈЉ|,%_>?ЊЋЌ­ЎЏюаб`:#@'=\"цabcdefghiдефгхийjklmnopqrклмнопя~stuvwxyzрстужвьызшэщчъЮАБЦДЕФГ{ABCDEFGHIХИЙКЛМ}JKLMNOPQRНОПЯРС\\¤STUVWXYZТУЖВЬЫ0123456789ЗШЭЩЧ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20905] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàá�ċ{ñÇ.<(+!&éêëèíîïìßĞİ*);^-/ÂÄÀÁ�Ċ[Ñş,%_>?�ÉÊËÈÍÎÏÌı:ÖŞ'=Ü˘abcdefghiħĉŝŭ�|°jklmnopqrĥĝĵ¸�¤µöstuvwxyzĦĈŜŬ�@˙£ż}Ż§]·½$ĤĜĴ¨´×çABCDEFGHI­ô~òóġğJKLMNOPQR`û\\ùú�ü÷STUVWXYZ²Ô#ÒÓĠ0123456789³Û\"ÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[20924] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\n\b\u0018\u0019\u001c\u001d\u001e\u001f\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåçñÝ.<(+|&éêëèíîïìß!$*);^-/ÂÄÀÁÃÅÇÑŠ,%_>?øÉÊËÈÍÎÏÌ`:#@'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæžÆ€µ~stuvwxyz¡¿Ð[Þ®¢£¥·©§¶Œœ�¬š¯]Ž×{ABCDEFGHI­ôöòóõ}JKLMNOPQR¹ûüùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[21025] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  ђѓёєѕіїј[.<(+!&љњћќўџЪ№Ђ]$*);^-/ЃЁЄЅІЇЈЉ|,%_>?ЊЋЌ­ЎЏюаб`:#@'=\"цabcdefghiдефгхийjklmnopqrклмнопя~stuvwxyzрстужвьызшэщчъЮАБЦДЕФГ{ABCDEFGHIХИЙКЛМ}JKLMNOPQRНОПЯРС\\§STUVWXYZТУЖВЬЫ0123456789ЗШЭЩЧ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[21866] = (function(){ var d = "ЪЪ\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґў╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪ҐЎ©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[29001] = (function(){ var d = "ΈΉΊΌΎ°◘○◙♂♀♪♬☼▶◀↕‼¶§£Ώ↑↓→←Ë↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùΑÖÜøαØάΒáíóúñÑβΓγΔδΕεέΖζΗηή│ªÁÂÀΘθ║╗╝ΙΪ┐└º¡¿─΄ãÃ╚╔ιίϊ═ΐΚκΛÊλΜμÍΝν┘┌ΞξΟοόÓßÔΠõÕπΡρÚΣςσΤτΥΫυύϋΰΦφΧχΨ·ψΩωώ", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
cptable[38598] = (function(){ var d = "\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ¢£¤¥¦§¨©×«¬­®‾°±²³´µ¶·¸¹÷»¼½¾‗אבגדהוזחטיךכלםמןנסעףפץצקרשת", D = [], e = {}; for(var i=0;i!=d.length;++i) { if(d.charCodeAt(i) !== 0xFFFD) e[d[i]] = i; D[i] = d.charAt(i); } return {"enc": e, "dec": D }; })();
if (typeof module !== 'undefined' && module.exports) module.exports = cptable;
/* cputils.js (C) 2013-2014 SheetJS -- http://sheetjs.com */
/*jshint newcap: false */
(function(root, factory){
  "use strict";
  if(typeof cptable === "undefined") {
    if(typeof require !== "undefined"){
      var cpt = require('./cpt' + 'able');
      if (typeof module !== 'undefined' && module.exports) module.exports = factory(cpt);
      else root.cptable = factory(cpt);
    } else throw new Error("cptable not found");
  } else cptable = factory(cptable);
}(this, function(cpt){
  "use strict";
  var magic = {
    "1200":"utf16le",
    "1201":"utf16be",
    "12000":"utf32le",
    "12001":"utf32be",
    "16969":"utf64le",
    "20127":"ascii",
    "65000":"utf7",
    "65001":"utf8"
  };

  var sbcs_cache = [874,1250,1251,1252,1253,1254,1255,1256,10000];
  var dbcs_cache = [932,936,949,950];
  var magic_cache = [65001];
  var magic_decode = {};
  var magic_encode = {};
  var cpecache = {};
  var cpdcache = {};

  var sfcc = function sfcc(x) { return String.fromCharCode(x); };
  var cca = function cca(x){ return x.charCodeAt(0); };
  if(typeof Buffer !== 'undefined') {
    var mdl = 1024, mdb = new Buffer(mdl);
    var make_EE = function make_EE(E){
      var EE = new Buffer(65536);
      for(var i = 0; i < 65536;++i) EE[i] = 0;
      var keys = Object.keys(E), len = keys.length;
      for(var ee = 0, e = keys[ee]; ee < len; ++ee) {
        if(!(e = keys[ee])) continue;
        EE[e.charCodeAt(0)] = E[e];
      }
      return EE;
    };
    var sbcs_encode = function make_sbcs_encode(cp) {
      var EE = make_EE(cpt[cp].enc);
      return function sbcs_e(data, ofmt) {
        var len = data.length;
        var out, i, j, D, w;
        if(typeof data === 'string') {
          out = Buffer(len);
          for(i = 0; i < len; ++i) out[i] = EE[data.charCodeAt(i)];
        } else if(Buffer.isBuffer(data)) {
          out = Buffer(2*len);
          j = 0;
          for(i = 0; i < len; ++i) {
            D = data[i];
            if(D < 128) out[j++] = EE[D];
            else if(D < 224) { out[j++] = EE[((D&31)<<6)+(data[i+1]&63)]; ++i; }
            else if(D < 240) { out[j++] = EE[((D&15)<<12)+((data[i+1]&63)<<6)+(data[i+2]&63)]; i+=2; }
            else {
              w = ((D&7)<<18)+((data[i+1]&63)<<12)+((data[i+2]&63)<<6)+(data[i+3]&63); i+=3;
              if(w < 65536) out[j++] = EE[w];
              else { w -= 65536; out[j++] = EE[0xD800 + ((w>>10)&1023)]; out[j++] = EE[0xDC00 + (w&1023)]; }
            }
          }
          out.length = j;
        } else {
          out = Buffer(len);
          for(i = 0; i < len; ++i) out[i] = EE[data[i].charCodeAt(0)];
        }
        if(ofmt === undefined || ofmt === 'buf') return out;
        if(ofmt !== 'arr') return out.toString('binary');
        return [].slice.call(out);
      };
    };
    var sbcs_decode = function make_sbcs_decode(cp) {
      var D = cpt[cp].dec;
      var DD = new Buffer(131072), d=0, c;
      for(d=0;d<D.length;++d) {
        if(!(c=D[d])) continue;
        var w = c.charCodeAt(0);
        DD[2*d] = w&255; DD[2*d+1] = w>>8;
      }
      return function sbcs_d(data) {
        var len = data.length, i=0, j;
        if(2 * len > mdl) { mdl = 2 * len; mdb = new Buffer(mdl); }
        if(Buffer.isBuffer(data)) {
          for(i = 0; i < len; i++) {
            j = 2*data[i];
            mdb[2*i] = DD[j]; mdb[2*i+1] = DD[j+1];
          }
        } else if(typeof data === "string") {
          for(i = 0; i < len; i++) {
            j = 2*data.charCodeAt(i);
            mdb[2*i] = DD[j]; mdb[2*i+1] = DD[j+1];
          }
        } else {
          for(i = 0; i < len; i++) {
            j = 2*data[i];
            mdb[2*i] = DD[j]; mdb[2*i+1] = DD[j+1];
          }
        }
        mdb.length = 2 * len;
        return mdb.toString('ucs2');
      };
    };
    var dbcs_encode = function make_dbcs_encode(cp) {
      var E = cpt[cp].enc;
      var EE = new Buffer(131072);
      for(var i = 0; i < 131072; ++i) EE[i] = 0;
      var keys = Object.keys(E);
      for(var ee = 0, e = keys[ee]; ee < keys.length; ++ee) {
        if(!(e = keys[ee])) continue;
        var f = e.charCodeAt(0);
        EE[2*f] = E[e] & 255; EE[2*f+1] = E[e]>>8;
      }
      return function dbcs_e(data, ofmt) {
        var len = data.length, out = new Buffer(2*len), i, j, jj, k, D;
        if(typeof data === 'string') {
          for(i = k = 0; i < len; ++i) {
            j = data.charCodeAt(i)*2;
            out[k++] = EE[j+1] || EE[j]; if(EE[j+1] > 0) out[k++] = EE[j];
          }
          out.length = k;
        } else if(Buffer.isBuffer(data)) {
          for(i = k = 0; i < len; ++i) {
            D = data[i];
            if(D < 128) j = D;
            else if(D < 224) { j = ((D&31)<<6)+(data[i+1]&63); ++i; }
            else if(D < 240) { j = ((D&15)<<12)+((data[i+1]&63)<<6)+(data[i+2]&63); i+=2; }
            else { j = ((D&7)<<18)+((data[i+1]&63)<<12)+((data[i+2]&63)<<6)+(data[i+3]&63); i+=3; }
            if(j<65536) { j*=2; out[k++] = EE[j+1] || EE[j]; if(EE[j+1] > 0) out[k++] = EE[j]; }
            else { jj = j-65536;
              j=2*(0xD800 + ((jj>>10)&1023)); out[k++] = EE[j+1] || EE[j]; if(EE[j+1] > 0) out[k++] = EE[j];
              j=2*(0xDC00 + (jj&1023)); out[k++] = EE[j+1] || EE[j]; if(EE[j+1] > 0) out[k++] = EE[j];
            }
          }
          out.length = k;
        } else {
          for(i = k = 0; i < len; i++) {
            j = data[i].charCodeAt(0)*2;
            out[k++] = EE[j+1] || EE[j]; if(EE[j+1] > 0) out[k++] = EE[j];
          }
        }
        if(ofmt === undefined || ofmt === 'buf') return out;
        if(ofmt !== 'arr') return out.toString('binary');
        return [].slice.call(out);
      };
    };
    var dbcs_decode = function make_dbcs_decode(cp) {
      var D = cpt[cp].dec;
      var DD = new Buffer(131072), d=0, c, w=0, j=0, i=0;
      for(i = 0; i < 65536; ++i) { DD[2*i] = 0xFF; DD[2*i+1] = 0xFD;}
      for(d = 0; d < D.length; ++d) {
        if(!(c=D[d])) continue;
        w = c.charCodeAt(0);
        j = 2*d;
        DD[j] = w&255; DD[j+1] = w>>8;
      }
      return function dbcs_d(data) {
        var len = data.length, out = new Buffer(2*len), i, j, k=0;
        if(Buffer.isBuffer(data)) {
          for(i = 0; i < len; i++) {
            j = 2*data[i];
            if(DD[j]===0xFF && DD[j+1]===0xFD) { j=2*((data[i]<<8)+data[i+1]); ++i; }
            out[k++] = DD[j]; out[k++] = DD[j+1];
          }
        } else if(typeof data === "string") {
          for(i = 0; i < len; i++) {
            j = 2*data.charCodeAt(i);
            if(DD[j]===0xFF && DD[j+1]===0xFD) { j=2*((data.charCodeAt(i)<<8)+data.charCodeAt(i+1)); ++i; }
            out[k++] = DD[j]; out[k++] = DD[j+1];
          }
        } else {
          for(i = 0; i < len; i++) {
            j = 2*data[i];
            if(DD[j]===0xFF && DD[j+1]===0xFD) { j=2*((data[i]<<8)+data[i+1]); ++i; }
            out[k++] = DD[j]; out[k++] = DD[j+1];
          }
        }
        out.length = k;
        return out.toString('ucs2');
      };
    };
    magic_decode[65001] = function utf8_d(data) {
      var len = data.length, w = 0, ww = 0;
      if(4 * len > mdl) { mdl = 4 * len; mdb = new Buffer(mdl); }
      mdb.length = 0;
      for(var i = 0, j = 1, k = 0, D = 0; i < len; i+=j) {
        j = 1; D = data[i];
        if(D < 128) w = D;
        else if(D < 224) { w=(D&31)*64+(data[i+1]&63); j=2; }
        else if(D < 240) { w=((D&15)<<12)+(data[i+1]&63)*64+(data[i+2]&63); j=3; }
        else { w=(D&7)*262144+((data[i+1]&63)<<12)+(data[i+2]&63)*64+(data[i+3]&63); j=4; }
        if(w < 65536) { mdb[k++] = w&255; mdb[k++] = w>>8; }
        else {
          w -= 65536; ww = 0xD800 + ((w>>10)&1023); w = 0xDC00 + (w&1023);
          mdb[k++] = ww&255; mdb[k++] = ww>>>8; mdb[k++] = w&255; mdb[k++] = (w>>>8)&255;
        }
      }
      mdb.length = k;
      return mdb.toString('ucs2');
    };
    magic_encode[65001] = function utf8_e(data, ofmt) {
      var len = data.length, w = 0, ww = 0, j = 0;
      var direct = typeof data === "string";
      if(4 * len > mdl) { mdl = 4 * len; mdb = new Buffer(mdl); }
      for(var i = 0; i < len; ++i) {
        w = direct ? data.charCodeAt(i) : data[i].charCodeAt(0);
        if(w <= 0x007F) mdb[j++] = w;
        else if(w <= 0x07FF) {
          mdb[j++] = 192 + (w >> 6);
          mdb[j++] = 128 + (w&63);
        } else if(w >= 0xD800 && w <= 0xDFFF) {
          w -= 0xD800; ++i;
          ww = (direct ? data.charCodeAt(i) : data[i].charCodeAt(0)) - 0xDC00 + (w << 10);
          mdb[j++] = 240 + ((ww>>>18) & 0x07);
          mdb[j++] = 144 + ((ww>>>12) & 0x3F);
          mdb[j++] = 128 + ((ww>>>6) & 0x3F);
          mdb[j++] = 128 + (ww & 0x3F);
        } else {
          mdb[j++] = 224 + (w >> 12);
          mdb[j++] = 128 + ((w >> 6)&63);
          mdb[j++] = 128 + (w&63);
        }
      }
      mdb.length = j;
      if(ofmt === undefined || ofmt === 'buf') return mdb;
      if(ofmt !== 'arr') return mdb.toString('binary');
      return [].slice.call(mdb);
    };
  }

  var encache = function encache() {
    if(typeof Buffer !== 'undefined') {
      if(cpdcache[sbcs_cache[0]]) return;
      var i, s;
      for(i = 0; i < sbcs_cache.length; ++i) {
        s = sbcs_cache[i];
        if(cpt[s]) {
          cpdcache[s] = sbcs_decode(s);
          cpecache[s] = sbcs_encode(s);
        }
      }
      for(i = 0; i < dbcs_cache.length; ++i) {
        s = dbcs_cache[i];
        if(cpt[s]) {
          cpdcache[s] = dbcs_decode(s);
          cpecache[s] = dbcs_encode(s);
        }
      }
      for(i = 0; i < magic_cache.length; ++i) {
        s = magic_cache[i];
        if(magic_decode[s]) cpdcache[s] = magic_decode[s];
        if(magic_encode[s]) cpecache[s] = magic_encode[s];
      }
    }
  };
  var cp_decache = function cp_decache(cp) { cpdcache[cp] = cpecache[cp] = undefined; };
  var decache = function decache() {
    if(typeof Buffer !== 'undefined') {
      if(!cpdcache[sbcs_cache[0]]) return;
      sbcs_cache.forEach(cp_decache);
      dbcs_cache.forEach(cp_decache);
      magic_cache.forEach(cp_decache);
    }
    last_enc = last_cp = undefined;
  };
  var cache = {
    encache: encache,
    decache: decache,
    sbcs: sbcs_cache,
    dbcs: dbcs_cache
  };

  encache();

  var BM = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var SetD = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'(),-./:?";
  var last_enc, last_cp;
  var encode = function encode(cp, data, ofmt) {
    if(cp === last_cp) { return last_enc(data, ofmt); }
    if(cpecache[cp] !== undefined) { last_enc = cpecache[last_cp=cp]; return last_enc(data, ofmt); }
    if(typeof Buffer !== 'undefined' && Buffer.isBuffer(data)) data = data.toString('utf8');
    var len = data.length;
    var out = typeof Buffer !== 'undefined' ? new Buffer(4*len) : [], w, i, j = 0, c, tt, ww;
    var C = cpt[cp], E, M;
    if(C && (E=C.enc)) for(i = 0; i < len; ++i, ++j) {
      w = E[data[i]];
      out[j] = w&255;
      if(w > 255) {
        out[j] = w>>8;
        out[++j] = w&255;
      }
    }
    else if((M=magic[cp])) switch(M) {
      case "utf8":
        if(typeof Buffer !== 'undefined' && typeof data === "string") { out = new Buffer(data, M); j = out.length; break; }
        for(i = 0; i < len; ++i, ++j) {
          w = data[i].charCodeAt(0);
          if(w <= 0x007F) out[j] = w;
          else if(w <= 0x07FF) {
            out[j]   = 192 + (w >> 6);
            out[++j] = 128 + (w&63);
          } else if(w >= 0xD800 && w <= 0xDFFF) {
            w -= 0xD800;
            ww = data[++i].charCodeAt(0) - 0xDC00 + (w << 10);
            out[j]   = 240 + ((ww>>>18) & 0x07);
            out[++j] = 144 + ((ww>>>12) & 0x3F);
            out[++j] = 128 + ((ww>>>6) & 0x3F);
            out[++j] = 128 + (ww & 0x3F);
          } else {
            out[j]   = 224 + (w >> 12);
            out[++j] = 128 + ((w >> 6)&63);
            out[++j] = 128 + (w&63);
          }
        }
        break;
      case "ascii":
        if(typeof Buffer !== 'undefined' && typeof data === "string") { out = new Buffer(data, M); j = out.length; break; }
        for(i = 0; i < len; ++i, ++j) {
          w = data[i].charCodeAt(0);
          if(w <= 0x007F) out[j] = w;
          else throw new Error("bad ascii " + w);
        }
        break;
      case "utf16le":
        if(typeof Buffer !== 'undefined' && typeof data === "string") { out = new Buffer(data, M); j = out.length; break; }
        for(i = 0; i < len; ++i) {
          w = data[i].charCodeAt(0);
          out[j++] = w&255;
          out[j++] = w>>8;
        }
        break;
      case "utf16be":
        for(i = 0; i < len; ++i) {
          w = data[i].charCodeAt(0);
          out[j++] = w>>8;
          out[j++] = w&255;
        }
        break;
      case "utf32le":
        for(i = 0; i < len; ++i) {
          w = data[i].charCodeAt(0);
          if(w >= 0xD800 && w <= 0xDFFF) w = 0x10000 + ((w - 0xD800) << 10) + (data[++i].charCodeAt(0) - 0xDC00);
          out[j++] = w&255; w >>= 8;
          out[j++] = w&255; w >>= 8;
          out[j++] = w&255; w >>= 8;
          out[j++] = w&255;
        }
        break;
      case "utf32be":
        for(i = 0; i < len; ++i) {
          w = data[i].charCodeAt(0);
          if(w >= 0xD800 && w <= 0xDFFF) w = 0x10000 + ((w - 0xD800) << 10) + (data[++i].charCodeAt(0) - 0xDC00);
          out[j+3] = w&255; w >>= 8;
          out[j+2] = w&255; w >>= 8;
          out[j+1] = w&255; w >>= 8;
          out[j] = w&255; w >>= 8;
          j+=4;
        }
        break;
      case "utf7":
        for(i = 0; i < len; i++) {
          c = data[i];
          if(c === "+") { out[j++] = 0x2b; out[j++] = 0x2d; continue; }
          if(SetD.indexOf(c) > -1) { out[j++] = c.charCodeAt(0); continue; }
          tt = encode(1201, c);
          out[j++] = 0x2b;
          out[j++] = BM.charCodeAt(tt[0]>>2);
          out[j++] = BM.charCodeAt(((tt[0]&0x03)<<4) + ((tt[1]||0)>>4));
          out[j++] = BM.charCodeAt(((tt[1]&0x0F)<<2) + ((tt[2]||0)>>6));
          out[j++] = 0x2d;
        }
        break;
      default: throw new Error("Unsupported magic: " + cp + " " + magic[cp]);
    }
    else throw new Error("Unrecognized CP: " + cp);
    out.length = j;
    if(typeof Buffer === 'undefined') return (ofmt == 'str') ? out.map(sfcc).join("") : out;
    if(ofmt === undefined || ofmt === 'buf') return out;
    if(ofmt !== 'arr') return out.toString('binary');
    return [].slice.call(out);
  };
  var decode = function decode(cp, data) {
    var F; if((F=cpdcache[cp])) return F(data);
    var len = data.length, out = new Array(len), w, i, j = 1, k = 0, ww;
    var C = cpt[cp], D, M;
    if(C && (D=C.dec)) {
      if(typeof data === "string") data = data.split("").map(cca);
      for(i = 0; i < len; i+=j) {
        j = 2;
        w = D[(data[i]<<8)+ data[i+1]];
        if(!w) {
          j = 1;
          w = D[data[i]];
        }
        if(!w) throw new Error('Unrecognized code: ' + data[i] + ' ' + data[i+j-1] + ' ' + i + ' ' + j + ' ' + D[data[i]]);
        out[k++] = w;
      }
    }
    else if((M=magic[cp])) switch(M) {
      case "utf8":
        for(i = 0; i < len; i+=j) {
          j = 1;
          if(data[i] < 128) w = data[i];
          else if(data[i] < 224) { w=(data[i]&31)*64+(data[i+1]&63); j=2; }
          else if(data[i] < 240) { w=((data[i]&15)<<12)+(data[i+1]&63)*64+(data[i+2]&63); j=3; }
          else { w=(data[i]&7)*262144+((data[i+1]&63)<<12)+(data[i+2]&63)*64+(data[i+3]&63); j=4; }
          if(w < 65536) { out[k++] = String.fromCharCode(w); }
          else {
            w -= 65536; ww = 0xD800 + ((w>>10)&1023); w = 0xDC00 + (w&1023);
            out[k++] = String.fromCharCode(ww); out[k++] = String.fromCharCode(w);
          }
        }
        break;
      case "ascii":
        if(typeof Buffer !== 'undefined' && Buffer.isBuffer(data)) return data.toString(M);
        for(i = 0; i < len; i++) out[i] = String.fromCharCode(data[i]);
        k = len; break;
      case "utf16le":
        if(typeof Buffer !== 'undefined' && Buffer.isBuffer(data)) return data.toString(M);
        j = 2;
        for(i = 0; i < len; i+=j) {
          out[k++] = String.fromCharCode((data[i+1]<<8) + data[i]);
        }
        break;
      case "utf16be":
        j = 2;
        for(i = 0; i < len; i+=j) {
          out[k++] = String.fromCharCode((data[i]<<8) + data[i+1]);
        }
        break;
      case "utf32le":
        j = 4;
        for(i = 0; i < len; i+=j) {
          w = (data[i+3]<<24) + (data[i+2]<<16) + (data[i+1]<<8) + (data[i]);
          if(w > 0xFFFF) {
            w -= 0x10000;
            out[k++] = String.fromCharCode(0xD800 + ((w >> 10) & 0x3FF));
            out[k++] = String.fromCharCode(0xDC00 + (w & 0x3FF));
          }
          else out[k++] = String.fromCharCode(w);
        }
        break;
      case "utf32be":
        j = 4;
        for(i = 0; i < len; i+=j) {
          w = (data[i]<<24) + (data[i+1]<<16) + (data[i+2]<<8) + (data[i+3]);
          if(w > 0xFFFF) {
            w -= 0x10000;
            out[k++] = String.fromCharCode(0xD800 + ((w >> 10) & 0x3FF));
            out[k++] = String.fromCharCode(0xDC00 + (w & 0x3FF));
          }
          else out[k++] = String.fromCharCode(w);
        }
        break;
      case "utf7":
        for(i = 0; i < len; i+=j) {
          if(data[i] !== 0x2b) { j=1; out[k++] = String.fromCharCode(data[i]); continue; }
          j=1;
          if(data[i+1] === 0x2d) { j = 2; out[k++] = "+"; continue; }
          while(String.fromCharCode(data[i+j]).match(/[A-Za-z0-9+\/]/)) j++;
          var dash = 0;
          if(data[i+j] === 0x2d) { ++j; dash=1; }
          var tt = [];
          var o64;
          var c1, c2, c3;
          var e1, e2, e3, e4;
          for(var l = 1; l < j - dash;) {
            e1 = BM.indexOf(String.fromCharCode(data[i+l++]));
            e2 = BM.indexOf(String.fromCharCode(data[i+l++]));
            c1 = e1 << 2 | e2 >> 4;
            tt.push(c1);
            e3 = BM.indexOf(String.fromCharCode(data[i+l++]));
            if(e3 === -1) break;
            c2 = (e2 & 15) << 4 | e3 >> 2;
            tt.push(c2);
            e4 = BM.indexOf(String.fromCharCode(data[i+l++]));
            if(e4 === -1) break;
            c3 = (e3 & 3) << 6 | e4;
            if(e4 < 64) tt.push(c3);
          }
          if((tt.length & 1) === 1) tt.length--;
          o64 = decode(1201, tt);
          for(l = 0; l < o64.length; ++l) out[k++] = o64[l];
        }
        break;
      default: throw new Error("Unsupported magic: " + cp + " " + magic[cp]);
    }
    else throw new Error("Unrecognized CP: " + cp);
    out.length = k;
    return out.join("");
  };
  var hascp = function hascp(cp) { return cpt[cp] || magic[cp]; };
  cpt.utils = { decode: decode, encode: encode, hascp: hascp, magic: magic, cache:cache };
  return cpt;
}));
