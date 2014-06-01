/* sbcs.js (C) 2013-2014 SheetJS -- http://sheetjs.com */
/*jshint -W100 */
var cptable = {};
cptable[37] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåçñ¢.<(+|&éêëèíîïìß!$*);¬-/ÂÄÀÁÃÅÇÑ¦,%_>?øÉÊËÈÍÎÏÌ`:#@'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ¤µ~stuvwxyz¡¿ÐÝÞ®^£¥·©§¶¼½¾[]¯¨´×{ABCDEFGHI­ôöòóõ}JKLMNOPQR¹ûüùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[437] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[500] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåçñ[.<(+!&éêëèíîïìß]$*);^-/ÂÄÀÁÃÅÇÑ¦,%_>?øÉÊËÈÍÎÏÌ`:#@'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ¤µ~stuvwxyz¡¿ÐÝÞ®¢£¥·©§¶¼½¾¬|¯¨´×{ABCDEFGHI­ôöòóõ}JKLMNOPQR¹ûüùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[737] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[775] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ĆüéāäģåćłēŖŗīŹÄÅÉæÆōöĢ¢ŚśÖÜø£Ø×¤ĀĪóŻżź”¦©®¬½¼Ł«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀ÓßŌŃõÕµńĶķĻļņĒŅ’­±“¾¶§÷„°∙·¹³²■ ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[850] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[852] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[855] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ«»░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬¤лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№­ыЫзЗшШэЭщЩчЧ§■ ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[857] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[860] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâãàÁçêÊèÍÔìÃÂÉÀÈôõòÚùÌÕÜ¢£Ù₧ÓáíóúñÑªº¿Ò¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[861] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[862] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~אבגדהוזחטיךכלםמןנסעףפץצקרשת¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[863] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâÂà¶çêëèïî‗À§ÉÈÊôËÏûù¤ÔÜ¢£ÙÛƒ¦´óú¨¸³¯Î⌐¬½¼¾«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[864] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$٪&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~°·∙√▒─│┼┤┬├┴┐┌└┘β∞φ±½¼≈«»ﻷﻸ��ﻻﻼ� ­ﺂ£¤ﺄ��ﺎﺏﺕﺙ،ﺝﺡﺥ٠١٢٣٤٥٦٧٨٩ﻑ؛ﺱﺵﺹ؟¢ﺀﺁﺃﺅﻊﺋﺍﺑﺓﺗﺛﺟﺣﺧﺩﺫﺭﺯﺳﺷﺻﺿﻁﻅﻋﻏ¦¬÷×ﻉـﻓﻗﻛﻟﻣﻧﻫﻭﻯﻳﺽﻌﻎﻍﻡﹽّﻥﻩﻬﻰﻲﻐﻕﻵﻶﻝﻙﻱ■�", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[865] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[866] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[869] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~������Ά�·¬¦‘’Έ―ΉΊΪΌ��ΎΫ©Ώ²³ά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄­±υφχ§ψ΅°¨ωϋΰώ■ ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[874] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[875] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a ΑΒΓΔΕΖΗΘΙ[.<(+!&ΚΛΜΝΞΟΠΡΣ]$*);^-/ΤΥΦΧΨΩΪΫ|,%_>?¨ΆΈΉ ΊΌΎΏ`:#@'=\"΅abcdefghiαβγδεζ°jklmnopqrηθικλμ´~stuvwxyzνξοπρσ£άέήϊίόύϋώςτυφχψ{ABCDEFGHI­ωΐΰ‘―}JKLMNOPQR±½\u001a·’¦\\\u001aSTUVWXYZ²§\u001a\u001a«¬0123456789³©\u001a\u001a»", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[1026] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãå{ñÇ.<(+!&éêëèíîïìßĞİ*);^-/ÂÄÀÁÃÅ[Ñş,%_>?øÉÊËÈÍÎÏÌı:ÖŞ'=ÜØabcdefghi«»}`¦±°jklmnopqrªºæ¸Æ¤µöstuvwxyz¡¿]$@®¢£¥·©§¶¼½¾¬|¯¨´×çABCDEFGHI­ô~òóõğJKLMNOPQR¹û\\ùúÿü÷STUVWXYZ²Ô#ÒÓÕ0123456789³Û\"ÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[1250] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[1251] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[1252] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[1253] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[1254] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[1255] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹ�ֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[1256] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[1257] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[1258] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[10000] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[10006] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦­ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ�", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[10007] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°¢£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµ∂ЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[10029] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[10079] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[10081] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙ�ˆ˜¯˘˙˚¸˝˛ˇ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[28591] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[28592] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[28593] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ Ħ˘£¤�Ĥ§¨İŞĞĴ­�Ż°ħ²³´µĥ·¸ışğĵ½�żÀÁÂ�ÄĊĈÇÈÉÊËÌÍÎÏ�ÑÒÓÔĠÖ×ĜÙÚÛÜŬŜßàáâ�äċĉçèéêëìíîï�ñòóôġö÷ĝùúûüŭŝ˙", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[28594] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ĄĸŖ¤ĨĻ§¨ŠĒĢŦ­Ž¯°ą˛ŗ´ĩļˇ¸šēģŧŊžŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎĪĐŅŌĶÔÕÖ×ØŲÚÛÜŨŪßāáâãäåæįčéęëėíîīđņōķôõö÷øųúûüũū˙", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[28595] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ЁЂЃЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђѓєѕіїјљњћќ§ўџ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[28596] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ���¤�������،­�������������؛���؟�ءآأؤإئابةتثجحخدذرزسشصضطظعغ�����ـفقكلمنهوىيًٌٍَُِّْ�������������", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[28597] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[28598] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ �¢£¤¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾��������������������������������‗אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[28599] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[28600] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ĄĒĢĪĨĶ§ĻĐŠŦŽ­ŪŊ°ąēģīĩķ·ļđšŧž―ūŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎÏÐŅŌÓÔÕÖŨØŲÚÛÜÝÞßāáâãäåæįčéęëėíîïðņōóôõöũøųúûüýþĸ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[28601] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[28603] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ”¢£¤„¦§Ø©Ŗ«¬­®Æ°±²³“µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž’", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[28604] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ Ḃḃ£ĊċḊ§Ẁ©ẂḋỲ­®ŸḞḟĠġṀṁ¶ṖẁṗẃṠỳẄẅṡÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŴÑÒÓÔÕÖṪØÙÚÛÜÝŶßàáâãäåæçèéêëìíîïŵñòóôõöṫøùúûüýŷÿ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[28605] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[28606] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ĄąŁ€„Š§š©Ș«Ź­źŻ°±ČłŽ”¶·žčș»ŒœŸżÀÁÂĂÄĆÆÇÈÉÊËÌÍÎÏĐŃÒÓÔŐÖŚŰÙÚÛÜĘȚßàáâăäćæçèéêëìíîïđńòóôőöśűùúûüęțÿ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[708] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~│┤éâ╡à╢çêëèïî╖╕╣║╗╝ô╜╛ûù┐└┴┬├¤─┼╞╟╚╔╩،╦«»░▒▓╠═╬╧╨╤╥╙؛╘╒╓؟╫ءآأؤإئابةتثجحخدذرزسشصضطظعغ█▄▌▐▀ـفقكلمنهوىيًٌٍَُِّْ╪┘┌µ£■ ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[720] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~éâàçêëèïîّْô¤ـûùءآأؤ£إئابةتثجحخدذرزسشص«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ضطظعغفµقكلمنهوىي≡ًٌٍَُِ≈°∙·√ⁿ²■ ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[858] = (function(){ var d = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈ€ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[870] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäţáăčçć[.<(+!&éęëůíîľĺß]$*);^-/ÂÄ˝ÁĂČÇĆ|,%_>?ˇÉĘËŮÍÎĽĹ`:#@'=\"˘abcdefghiśňđýřş°jklmnopqrłńš¸˛¤ą~stuvwxyzŚŇĐÝŘŞ˙ĄżŢŻ§žźŽŹŁŃŠ¨´×{ABCDEFGHI­ôöŕóő}JKLMNOPQRĚűüťúě\\÷STUVWXYZďÔÖŔÓŐ0123456789ĎŰÜŤÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[1047] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\n\b\u0018\u0019\u001c\u001d\u001e\u001f\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåçñ¢.<(+|&éêëèíîïìß!$*);^-/ÂÄÀÁÃÅÇÑ¦,%_>?øÉÊËÈÍÎÏÌ`:#@'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ¤µ~stuvwxyz¡¿Ð[Þ®¬£¥·©§¶¼½¾Ý¨¯]´×{ABCDEFGHI­ôöòóõ}JKLMNOPQR¹ûüùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[1140] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåçñ¢.<(+|&éêëèíîïìß!$*);¬-/ÂÄÀÁÃÅÇÑ¦,%_>?øÉÊËÈÍÎÏÌ`:#@'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ€µ~stuvwxyz¡¿ÐÝÞ®^£¥·©§¶¼½¾[]¯¨´×{ABCDEFGHI­ôöòóõ}JKLMNOPQR¹ûüùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[1141] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  â{àáãåçñÄ.<(+!&éêëèíîïì~Ü$*);^-/Â[ÀÁÃÅÇÑö,%_>?øÉÊËÈÍÎÏÌ`:#§'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ€µßstuvwxyz¡¿ÐÝÞ®¢£¥·©@¶¼½¾¬|¯¨´×äABCDEFGHI­ô¦òóõüJKLMNOPQR¹û}ùúÿÖ÷STUVWXYZ²Ô\\ÒÓÕ0123456789³Û]ÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[1142] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáã}çñ#.<(+!&éêëèíîïìß€Å*);^-/ÂÄÀÁÃ$ÇÑø,%_>?¦ÉÊËÈÍÎÏÌ`:ÆØ'=\"@abcdefghi«»ðýþ±°jklmnopqrªº{¸[]µüstuvwxyz¡¿ÐÝÞ®¢£¥·©§¶¼½¾¬|¯¨´×æABCDEFGHI­ôöòóõåJKLMNOPQR¹û~ùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[1143] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  â{àáã}çñ§.<(+!&`êëèíîïìß€Å*);^-/Â#ÀÁÃ$ÇÑö,%_>?ø\\ÊËÈÍÎÏÌé:ÄÖ'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ]µüstuvwxyz¡¿ÐÝÞ®¢£¥·©[¶¼½¾¬|¯¨´×äABCDEFGHI­ô¦òóõåJKLMNOPQR¹û~ùúÿÉ÷STUVWXYZ²Ô@ÒÓÕ0123456789³ÛÜÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[1144] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âä{áãå\\ñ°.<(+!&]êë}íîï~ßé$*);^-/ÂÄÀÁÃÅÇÑò,%_>?øÉÊËÈÍÎÏÌù:£§'=\"Øabcdefghi«»ðýþ±[jklmnopqrªºæ¸Æ€µìstuvwxyz¡¿ÐÝÞ®¢#¥·©@¶¼½¾¬|¯¨´×àABCDEFGHI­ôö¦óõèJKLMNOPQR¹ûü`úÿç÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[1145] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåç¦[.<(+|&éêëèíîïìß]$*);¬-/ÂÄÀÁÃÅÇ#ñ,%_>?øÉÊËÈÍÎÏÌ`:Ñ@'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ€µ¨stuvwxyz¡¿ÐÝÞ®¢£¥·©§¶¼½¾^!¯~´×{ABCDEFGHI­ôöòóõ}JKLMNOPQR¹ûüùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[1146] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåçñ$.<(+|&éêëèíîïìß!£*);¬-/ÂÄÀÁÃÅÇÑ¦,%_>?øÉÊËÈÍÎÏÌ`:#@'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ€µ¯stuvwxyz¡¿ÐÝÞ®¢[¥·©§¶¼½¾^]~¨´×{ABCDEFGHI­ôöòóõ}JKLMNOPQR¹ûüùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[1147] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âä@áãå\\ñ°.<(+!&{êë}íîïìß§$*);^-/ÂÄÀÁÃÅÇÑù,%_>?øÉÊËÈÍÎÏÌµ:£à'=\"Øabcdefghi«»ðýþ±[jklmnopqrªºæ¸Æ€`¨stuvwxyz¡¿ÐÝÞ®¢#¥·©]¶¼½¾¬|¯~´×éABCDEFGHI­ôöòóõèJKLMNOPQR¹ûü¦úÿç÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[1148] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåçñ[.<(+!&éêëèíîïìß]$*);^-/ÂÄÀÁÃÅÇÑ¦,%_>?øÉÊËÈÍÎÏÌ`:#@'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ€µ~stuvwxyz¡¿ÐÝÞ®¢£¥·©§¶¼½¾¬|¯¨´×{ABCDEFGHI­ôöòóõ}JKLMNOPQR¹ûüùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[1149] = (function(){ var d = "\u0000\u0001\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåçñÞ.<(+!&éêëèíîïìßÆ$*);Ö-/ÂÄÀÁÃÅÇÑ¦,%_>?øÉÊËÈÍÎÏÌð:#Ð'=\"Øabcdefghi«»`ý{±°jklmnopqrªº}¸]€µöstuvwxyz¡¿@Ý[®¢£¥·©§¶¼½¾¬|¯¨\\×þABCDEFGHI­ô~òóõæJKLMNOPQR¹ûüùúÿ´÷STUVWXYZ²Ô^ÒÓÕ0123456789³ÛÜÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[10004] = (function(){ var d = "ےے\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~Ä ÇÉÑÖÜáàâäں«çéèêëí…îïñó»ôö÷úùûü٪،٠١٢٣٤٥٦٧٨٩؛؟٭ءآأؤإئابةتثجحخدذرزسشصضطظعغـفقكلمنهوىيًٌٍَُِّْپٹچەڤگڈڑژے", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[10005] = (function(){ var d = "\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü¤₪„ּֽ… �ִֵֶַ–—“”‘’־ְֱֲֳָֻׁאבגדהוזחטיךכלםמןנסעףפץצקרשת", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[10010] = (function(){ var d = "ˇˇ\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂŞ∞±≤≥¥µ∂∑∏π∫ªºΩăş¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›Ţţ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[10017] = (function(){ var d = "¤¤\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[10021] = (function(){ var d = "��\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~�«»…����������“”��•�����������‘’� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู﻿​–—฿เแโใไๅๆ็่้๊๋์ํ™๏๐๑๒๓๔๕๖๗๘๙®©����", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[10082] = (function(){ var d = "ˇˇ\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄¤‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20105] = (function(){ var d = "��\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#¤%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}‾∇��������������������������������������������������������������������������������������������������������������������������������", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20106] = (function(){ var d = "��\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?§ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ^_`abcdefghijklmnopqrstuvwxyzäöüß��������������������������������������������������������������������������������������������������������������������������������", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20107] = (function(){ var d = "��\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#¤%&'()*+,-./0123456789:;<=>?ÉABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÅÜ_éabcdefghijklmnopqrstuvwxyzäöåü��������������������������������������������������������������������������������������������������������������������������������", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20108] = (function(){ var d = "��\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"§$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ^_`abcdefghijklmnopqrstuvwxyzæøå|��������������������������������������������������������������������������������������������������������������������������������", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20269] = (function(){ var d = "\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"��%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]�_�abcdefghijklmnopqrstuvwxyz{|}��� ¡¢£$¥#§¤‘“«←↑→↓°±²³×µ¶·÷’”»¼½¿�`´^~¯̆̈�̧̨̲̊̋̌―¹®©™♩��⅛⅜⅝⅞ΩÆÐĦ�ĲĿŁØŒºÞŦŊŉĸæđðħıĳŀłøœßþŧ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20273] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  â{àáãåçñÄ.<(+!&éêëèíîïì~Ü$*);^-/Â[ÀÁÃÅÇÑö,%_>?øÉÊËÈÍÎÏÌ`:#§'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ¤µßstuvwxyz¡¿ÐÝÞ®¢£¥·©@¶¼½¾¬|¯¨´×äABCDEFGHI­ô¦òóõüJKLMNOPQR¹û}ùúÿÖ÷STUVWXYZ²Ô\\ÒÓÕ0123456789³Û]ÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20277] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáã}çñ#.<(+!&éêëèíîïìß¤Å*);^-/ÂÄÀÁÃ$ÇÑø,%_>?¦ÉÊËÈÍÎÏÌ`:ÆØ'=\"@abcdefghi«»ðýþ±°jklmnopqrªº{¸[]µüstuvwxyz¡¿ÐÝÞ®¢£¥·©§¶¼½¾¬|¯¨´×æABCDEFGHI­ôöòóõåJKLMNOPQR¹û~ùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20278] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  â{àáã}çñ§.<(+!&`êëèíîïìß¤Å*);^-/Â#ÀÁÃ$ÇÑö,%_>?ø\\ÊËÈÍÎÏÌé:ÄÖ'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ]µüstuvwxyz¡¿ÐÝÞ®¢£¥·©[¶¼½¾¬|¯¨´×äABCDEFGHI­ô¦òóõåJKLMNOPQR¹û~ùúÿÉ÷STUVWXYZ²Ô@ÒÓÕ0123456789³ÛÜÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20280] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âä{áãå\\ñ°.<(+!&]êë}íîï~ßé$*);^-/ÂÄÀÁÃÅÇÑò,%_>?øÉÊËÈÍÎÏÌù:£§'=\"Øabcdefghi«»ðýþ±[jklmnopqrªºæ¸Æ¤µìstuvwxyz¡¿ÐÝÞ®¢#¥·©@¶¼½¾¬|¯¨´×àABCDEFGHI­ôö¦óõèJKLMNOPQR¹ûü`úÿç÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20284] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåç¦[.<(+|&éêëèíîïìß]$*);¬-/ÂÄÀÁÃÅÇ#ñ,%_>?øÉÊËÈÍÎÏÌ`:Ñ@'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ¤µ¨stuvwxyz¡¿ÐÝÞ®¢£¥·©§¶¼½¾^!¯~´×{ABCDEFGHI­ôöòóõ}JKLMNOPQR¹ûüùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20285] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåçñ$.<(+|&éêëèíîïìß!£*);¬-/ÂÄÀÁÃÅÇÑ¦,%_>?øÉÊËÈÍÎÏÌ`:#@'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæ¸Æ¤µ¯stuvwxyz¡¿ÐÝÞ®¢[¥·©§¶¼½¾^]~¨´×{ABCDEFGHI­ôöòóõ}JKLMNOPQR¹ûüùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20290] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a ｡｢｣､･ｦｧｨｩ£.<(+|&ｪｫｬｭｮｯ�ｰ�!¥*);¬-/abcdefgh�,%_>?[ijklmnop`:#@'=\"]ｱｲｳｴｵｶｷｸｹｺqｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉr�ﾊﾋﾌ~‾ﾍﾎﾏﾐﾑﾒﾓﾔﾕsﾖﾗﾘﾙ^¢\\tuvwxyzﾚﾛﾜﾝﾞﾟ{ABCDEFGHI������}JKLMNOPQR������$�STUVWXYZ������0123456789�����", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20297] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âä@áãå\\ñ°.<(+!&{êë}íîïìß§$*);^-/ÂÄÀÁÃÅÇÑù,%_>?øÉÊËÈÍÎÏÌµ:£à'=\"Øabcdefghi«»ðýþ±[jklmnopqrªºæ¸Æ¤`¨stuvwxyz¡¿ÐÝÞ®¢#¥·©]¶¼½¾¬|¯~´×éABCDEFGHI­ôöòóõèJKLMNOPQR¹ûü¦úÿç÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20420] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  ﹼﹽـﺀﺁﺂﺃ¢.<(+|&ﺄﺅ��ﺋﺍﺎﺏﺑ!$*);¬-/ﺓﺕﺗﺙﺛﺝﺟﺡ¦,%_>?ﺣﺥﺧﺩﺫﺭﺯﺳ،:#@'=\"abcdefghiﺷﺻﺿﻃﻇjklmnopqrﻉﻊﻋﻌﻍﻎﻏ÷stuvwxyzﻐﻑﻓﻕﻗﻙﻛﻝﻵﻶﻷﻸ��ﻻﻼﻟﻡﻣﻥﻧﻩ؛ABCDEFGHI­ﻫ�ﻬ�ﻭ؟JKLMNOPQRﻯﻰﻱﻲﻳ٠× STUVWXYZ١٢�٣٤٥0123456789�٦٧٨٩", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20423] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a ΑΒΓΔΕΖΗΘΙ[.<(+!&ΚΛΜΝΞΟΠΡΣ]$*);^-/ΤΥΦΧΨΩ��|,%_>?�ΆΈΉ ΊΌΎΏ`:£§'=\"ÄabcdefghiαβγδεζÖjklmnopqrηθικλμÜ¨stuvwxyzνξοπρσ�άέήϊίόύϋώςτυφχψ¸ABCDEFGHI­ωâàäê´JKLMNOPQR±éèëîï°�STUVWXYZ½öôûùü0123456789ÿçÇ��", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20424] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a אבגדהוזחט¢.<(+|&יךכלםמןנס!$*);¬-/עףפץצקרש¦,%_>?�ת�� ���‗`:#@'=\"�abcdefghi«»���±°jklmnopqr���¸�¤µ~stuvwxyz�����®^£¥•©§¶¼½¾[]‾¨´×{ABCDEFGHI­�����}JKLMNOPQR¹�����\\÷STUVWXYZ²�����0123456789³����", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20833] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a �ﾠﾡﾢﾣﾤﾥﾦﾧ¢.<(+|&�ﾨﾩﾪﾫﾬﾭﾮﾯ!$*);¬-/ﾰﾱﾲﾳﾴﾵﾶﾷ¦,%_>?[�ﾸﾹﾺﾻﾼﾽﾾ`:#@'=\"]abcdefghiￂￃￄￅￆￇ�jklmnopqrￊￋￌￍￎￏ‾~stuvwxyzￒￓￔￕￖￗ^�\\�������ￚￛￜ���{ABCDEFGHI������}JKLMNOPQR������₩�STUVWXYZ������0123456789�����", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20838] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  กขฃคฅฆง[¢.<(+|&�จฉชซฌญฎ]!$*);¬-/ฏฐฑฒณดต^¦,%_>?฿๎ถทธนบปผ`:#@'=\"๏abcdefghiฝพฟภมย๚jklmnopqrรฤลฦวศ๛~stuvwxyzษสหฬอฮ๐๑๒๓๔๕๖๗๘๙ฯะัาำิ{ABCDEFGHI�ีึืุู}JKLMNOPQRฺเแโใไ\\�STUVWXYZๅๆ็่้๊0123456789๋์ํ��", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20866] = (function(){ var d = "ЪЪ\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ё╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡Ё╢╣╤╥╦╧╨╩╪╫╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20871] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåçñÞ.<(+!&éêëèíîïìßÆ$*);Ö-/ÂÄÀÁÃÅÇÑ¦,%_>?øÉÊËÈÍÎÏÌð:#Ð'=\"Øabcdefghi«»`ý{±°jklmnopqrªº}¸]¤µöstuvwxyz¡¿@Ý[®¢£¥·©§¶¼½¾¬|¯¨\\×þABCDEFGHI­ô~òóõæJKLMNOPQR¹ûüùúÿ´÷STUVWXYZ²Ô^ÒÓÕ0123456789³ÛÜÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20880] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  ђѓёєѕіїј[.<(+!&љњћќўџЪ№Ђ]$*);^-/ЃЁЄЅІЇЈЉ|,%_>?ЊЋЌ­ЎЏюаб`:#@'=\"цabcdefghiдефгхийjklmnopqrклмнопя~stuvwxyzрстужвьызшэщчъЮАБЦДЕФГ{ABCDEFGHIХИЙКЛМ}JKLMNOPQRНОПЯРС\\¤STUVWXYZТУЖВЬЫ0123456789ЗШЭЩЧ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20905] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàá�ċ{ñÇ.<(+!&éêëèíîïìßĞİ*);^-/ÂÄÀÁ�Ċ[Ñş,%_>?�ÉÊËÈÍÎÏÌı:ÖŞ'=Ü˘abcdefghiħĉŝŭ�|°jklmnopqrĥĝĵ¸�¤µöstuvwxyzĦĈŜŬ�@˙£ż}Ż§]·½$ĤĜĴ¨´×çABCDEFGHI­ô~òóġğJKLMNOPQR`û\\ùú�ü÷STUVWXYZ²Ô#ÒÓĠ0123456789³Û\"ÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[20924] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\n\b\u0018\u0019\u001c\u001d\u001e\u001f\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  âäàáãåçñÝ.<(+|&éêëèíîïìß!$*);^-/ÂÄÀÁÃÅÇÑŠ,%_>?øÉÊËÈÍÎÏÌ`:#@'=\"Øabcdefghi«»ðýþ±°jklmnopqrªºæžÆ€µ~stuvwxyz¡¿Ð[Þ®¢£¥·©§¶Œœ�¬š¯]Ž×{ABCDEFGHI­ôöòóõ}JKLMNOPQR¹ûüùúÿ\\÷STUVWXYZ²ÔÖÒÓÕ0123456789³ÛÜÙÚ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[21025] = (function(){ var d = "\u0002\u0003\t\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\b\u0018\u0019\u001c\u001d\u001e\u001f\n\u0017\u001b\u0005\u0006\u0007\u0016\u0004\u0014\u0015\u001a  ђѓёєѕіїј[.<(+!&љњћќўџЪ№Ђ]$*);^-/ЃЁЄЅІЇЈЉ|,%_>?ЊЋЌ­ЎЏюаб`:#@'=\"цabcdefghiдефгхийjklmnopqrклмнопя~stuvwxyzрстужвьызшэщчъЮАБЦДЕФГ{ABCDEFGHIХИЙКЛМ}JKLMNOPQRНОПЯРС\\§STUVWXYZТУЖВЬЫ0123456789ЗШЭЩЧ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[21866] = (function(){ var d = "ЪЪ\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґў╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪ҐЎ©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[29001] = (function(){ var d = "ΈΉΊΌΎ°◘○◙♂♀♪♬☼▶◀↕‼¶§£Ώ↑↓→←Ë↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùΑÖÜøαØάΒáíóúñÑβΓγΔδΕεέΖζΗηή│ªÁÂÀΘθ║╗╝ΙΪ┐└º¡¿─΄ãÃ╚╔ιίϊ═ΐΚκΛÊλΜμÍΝν┘┌ΞξΟοόÓßÔΠõÕπΡρÚΣςσΤτΥΫυύϋΰΦφΧχΨ·ψΩωώ", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
cptable[38598] = (function(){ var d = "\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ¢£¤¥¦§¨©×«¬­®‾°±²³´µ¶·¸¹÷»¼½¾‗אבגדהוזחטיךכלםמןנסעףפץצקרשת", e = {}; for(var i=0;i!=d.length;++i) if(d.charCodeAt(i) !== 0xFFFD)e[d[i]] = i; return {"enc": e, "dec": d.split("") }; })();
if (typeof module !== 'undefined' && module.exports) module.exports = cptable;
/* cputils.js (C) 2013-2014 SheetJS -- http://sheetjs.com */
/*jshint newcap: false */
(function(root, factory){
  "use strict";
  if(typeof cptable === "undefined") {
    if(typeof require !== "undefined"){
      var cpt = require('./cptable');
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

  if(typeof Buffer !== 'undefined') {
    var sbcs_encode = function(cp) {
      var E = cpt[cp].enc;
      var EE = new Buffer(65536);
      for(var i = 0; i != 65536;++i) EE[i] = 0;
      var keys = Object.keys(E), len = keys.length;
      for(var ee = 0, e = keys[ee]; ee != len; ++ee) {
        if(!(e = keys[ee])) continue;
        EE[e.charCodeAt(0)] = E[e];
      };
      return function(data, ofmt) {
        if(data instanceof Buffer) data = data.toString('utf8');
        var out = new Buffer(data.length), i;
        if(typeof data === 'string') {
          for(i = 0; i != data.length; ++i) out[i] = EE[data.charCodeAt(i)];
        } else {
          for(i = 0; i != data.length; ++i) out[i] = EE[data[i].charCodeAt(0)];
        }
        if(!ofmt) return out;
        if(ofmt === 'buf') return out;
        var arr = [].slice.call(out);
        if(ofmt === 'arr') return arr;
        return arr.map(function(x) { return String.fromCharCode(x); }).join("");
      };
    };
    var sbcs_decode = function(cp) {
      var D = cpt[cp].dec;
      var DD = new Buffer(131072), d=0, c;
      for(d=0;d!=D.length;++d) {
        if(!(c=D[d])) continue;
        var w = c.charCodeAt(0);
        DD[2*d] = w%256; DD[2*d+1] = w>>8;
      }
      return function(data) {
        var out = new Buffer(2*data.length), w, i=0, j;
        if(data instanceof Buffer) {
          for(i = 0; i < data.length; i++) {
            j = 2*data[i];
            out[2*i] = DD[j]; out[2*i+1] = DD[j+1];
          }
        } else if(typeof data === "string") {
          for(i = 0; i < data.length; i++) {
            j = 2*data.charCodeAt(i);
            out[2*i] = DD[j]; out[2*i+1] = DD[j+1];
          }
        } else {
          for(i = 0; i < data.length; i++) {
            j = 2*data[i];
            out[2*i] = DD[j]; out[2*i+1] = DD[j+1];
          }
        }
        return out.toString('ucs2');
      };
    };
    var dbcs_encode = function(cp) {
      var E = cpt[cp].enc;
      var EE = new Buffer(131072);
      for(var i = 0; i != 131072; ++i) EE[i] = 0;
      var keys = Object.keys(E);
      for(var ee = 0, e = keys[ee]; ee != keys.length; ++ee) {
        if(!(e = keys[ee])) continue;
        var f = e.charCodeAt(0);
        EE[2*f] = E[e] & 255; EE[2*f+1] = E[e]>>8;
      };
      return function(data, ofmt) {
        if(data instanceof Buffer) data = data.toString('utf8');
        var out = new Buffer(2*data.length), i, j, k;
        if(typeof data === 'string') {
          for(i = k = 0; i != data.length; ++i) {
            j = data.charCodeAt(i)*2;
            out[k++] = EE[j+1] || EE[j]; if(EE[j+1] > 0) out[k++] = EE[j];
          }
          out.length = k;
        } else {
          for(i = k = 0; i != data.length; i++) {
            j = data[i].charCodeAt(0)*2;
            out[k++] = EE[j+1] || EE[j]; if(EE[j+1] > 0) out[k++] = EE[j];
          }
        }
        if(!ofmt) return out;
        if(ofmt === 'buf') return out;
        var arr = [].slice.call(out);
        if(ofmt === 'arr') return arr;
        return arr.map(function(x) { return String.fromCharCode(x); }).join("");
      };
    };
    var dbcs_decode = function(cp) {
      var D = cpt[cp].dec;
      var DD = new Buffer(131072), d=0, c, w=0, j=0, dd=0, i=0;
      for(i = 0; i != 65536; ++i) { DD[2*i] = 0xFF; DD[2*i+1] = 0xFD;}
      for(d=0;d!=D.length;++d) {
        if(!(c=D[d])) continue;
        w = c.charCodeAt(0);
        j = 2*d;
        DD[j] = w%256; DD[j+1] = w>>8;
      };
      return function(data) {
        var out = new Buffer(2*data.length), w, i, j, k=0;
        if(data instanceof Buffer) {
          for(i = 0; i < data.length; i++) {
            j = 2*data[i];
            if(DD[j]===0xFF && DD[j+1]===0xFD) { j=2*(256*data[i]+data[i+1]); ++i; }
            out[k++] = DD[j]; out[k++] = DD[j+1];
          }
        } else if(typeof data === "string") {
          for(i = 0; i < data.length; i++) {
            j = 2*data.charCodeAt(i);
            if(DD[j]===0xFF && DD[j+1]===0xFD) { j=2*(256*data.charCodeAt(i)+data.charCodeAt(i+1)); ++i; }
            out[k++] = DD[j]; out[k++] = DD[j+1];
          }
        } else {
          for(i = 0; i < data.length; i++) {
            j = 2*data[i];
            if(DD[j]===0xFF && DD[j+1]===0xFD) { j=2*(256*data[i]+data[i+1]); ++i; }
            out[k++] = DD[j]; out[k++] = DD[j+1];
          }
        }
        out.length = k;
        return out.toString('ucs2');
      };
    };
    magic_decode[65001] = function(data) {
      var out = new Buffer(2*data.length), w, i, j = 1, k = 0, ww;
      for(i = 0; i < data.length; i+=j) {
        j = 1;
        if(data[i] < 128) w = data[i];
        else if(data[i] < 224) { w = (data[i]&31)*64+(data[i+1]&63); j=2; }
        else { w=(data[i]&15)*4096+(data[i+1]&63)*64+(data[i+2]&63); j=3; }
        out[k++] = w%256; out[k++] = w>>8;
      }
      out.length = k;
      return out.toString('ucs2');
    };
  }

  var encache = function(cp) {
    if(typeof Buffer !== 'undefined') {
      if(cpdcache[sbcs_cache[0]]) return;
      sbcs_cache.forEach(function(s) {
        if(!cpt[s]) return;
        cpdcache[s] = sbcs_decode(s);
        cpecache[s] = sbcs_encode(s);
      });
      dbcs_cache.forEach(function(s) {
        if(!cpt[s]) return;
        cpdcache[s] = dbcs_decode(s);
        cpecache[s] = dbcs_encode(s);
      });
      magic_cache.forEach(function(s) {
        if(magic_decode[s]) cpdcache[s] = magic_decode[s];
        if(magic_encode[s]) cpecache[s] = magic_encode[s];
      });
    }
  };
  var cp_decache = function(cp) { delete cpdcache[cp]; delete cpecache[cp]; };
  var decache = function() {
    if(typeof Buffer !== 'undefined') {
      if(!cpdcache[sbcs_cache[0]]) return;
      sbcs_cache.forEach(cp_decache);
      dbcs_cache.forEach(cp_decache);
      magic_cache.forEach(cp_decache);
    }
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
  var encode = function(cp, data, ofmt) {
    var F; if((F=cpecache[cp])) return F(data, ofmt);
    if(typeof Buffer !== 'undefined' && data instanceof Buffer) data = data.toString('utf8');
    var out = typeof Buffer !== 'undefined' ? new Buffer(4*data.length) : [], w, i, j = 0, c, tt;
    var C = cpt[cp], E, M;
    if(C && (E=C.enc)) for(i = 0; i != data.length; ++i, ++j) {
      w = E[data[i]];
      out[j] = w % 256;
      if(w > 255) {
        out[j] = (w/256)|0;
        out[++j] = w%256;
      }
    }
    else if((M=magic[cp])) switch(M) {
      case "utf8":
        if(typeof Buffer !== 'undefined' && typeof data === "string") { out = new Buffer(data, M); j = out.length; break; }
        for(i = 0; i != data.length; ++i, ++j) {
          w = data[i].charCodeAt(0);
          if(w <= 0x007F) out[j] = w;
          else if(w <= 0x07FF) {
            out[j]   = 192 + (w >> 6);
            out[++j] = 128 + (w % 64);
          } else {
            out[j]   = 224 + (w >> 12);
            out[++j] = 128 + ((w >> 6) % 64);
            out[++j] = 128 + (w % 64);
          }
        }
        break;
      case "ascii":
        if(typeof Buffer !== 'undefined' && typeof data === "string") { out = new Buffer(data, M); j = out.length; break; }
        for(i = 0; i != data.length; ++i, ++j) {
          w = data[i].charCodeAt(0);
          if(w <= 0x007F) out[j] = w;
          else throw new Error("bad ascii " + w);
        }
        break;
      case "utf16le": /* TODO: surrogate pairs */
        if(typeof Buffer !== 'undefined' && typeof data === "string") { out = new Buffer(data, M); j = out.length; break; }
        for(i = 0; i != data.length; ++i) {
          w = data[i].charCodeAt(0);
          out[j++] = w % 256;
          out[j++] = w>>8;
        }
        break;
      case "utf16be":
        for(i = 0; i != data.length; ++i) {
          w = data[i].charCodeAt(0);
          out[j++] = w>>8;
          out[j++] = w % 256;
        }
        break;
      case "utf32le":
        for(i = 0; i != data.length; ++i) {
          w = data[i].charCodeAt(0);
          out[j++] = w % 256; w >>= 8;
          out[j++] = w % 256; w >>= 8;
          out[j++] = w % 256; w >>= 8;
          out[j++] = w % 256;
        }
        break;
      case "utf32be":
        for(i = 0; i != data.length; ++i) {
          w = data[i].charCodeAt(0);
          out[j+3] = w % 256; w >>= 8;
          out[j+2] = w % 256; w >>= 8;
          out[j+1] = w % 256; w >>= 8;
          out[j] = w % 256; w >>= 8;
          j+=4;
        }
        break;
      case "utf7":
        for(i = 0; i != data.length; i++) {
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
    if(typeof Buffer === 'undefined') return (ofmt == 'str') ? out.map(function(x) { return String.fromCharCode(x); }).join("") : out;
    if(!ofmt) return out;
    if(ofmt === 'buf') return out;
    var arr = [].slice.call(out);
    if(ofmt === 'arr') return arr;
    return arr.map(function(x) { return String.fromCharCode(x); }).join("");
  };
  var decode = function(cp, data) {
    var F; if((F=cpdcache[cp])) return F(data);
    var out = new Array(data.length), w, i, j = 1, k = 0;
    var C = cpt[cp], D, M;
    if(C && (D=C.dec)) {
      if(typeof data === "string") data = data.split("").map(function(x){ return x.charCodeAt(0); });
      for(i = 0; i < data.length; i+=j) {
        j = 2;
        w = D[data[i]*256 + data[i+1]];
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
        for(i = 0; i < data.length; i+=j) {
          j = 1;
          if(data[i] < 128) w = data[i];
          else if(data[i] < 224) { w = (data[i]&31)*64+(data[i+1]&63); j=2; }
          else { w=(data[i]&15)*4096+(data[i+1]&63)*64+(data[i+2]&63); j=3; }
          out[k++] = String.fromCharCode(w);
        }
        break;
      case "ascii":
        if(typeof Buffer !== 'undefined' && data instanceof Buffer) return data.toString(M);
        for(i = 0; i < data.length; i++) out[i] = String.fromCharCode(data[i]);
        k = data.length; break;
      case "utf16le":
        if(typeof Buffer !== 'undefined' && data instanceof Buffer) return data.toString(M);
        j = 2;
        for(i = 0; i < data.length; i+=j) {
          out[k++] = String.fromCharCode(256*data[i+1] + data[i]);
        }
        break;
      case "utf16be":
        j = 2;
        for(i = 0; i < data.length; i+=j) {
          out[k++] = String.fromCharCode(256*data[i] + data[i+1]);
        }
        break;
      case "utf32le":
        j = 4;
        for(i = 0; i < data.length; i+=j) {
          out[k++] = String.fromCharCode((data[i+3]<<24) + (data[i+2]<<16) + (data[i+1]<<8) + (data[i]));
        }
        break;
      case "utf32be":
        j = 4;
        for(i = 0; i < data.length; i+=j) {
          out[k++] = String.fromCharCode((data[i]<<24) + (data[i+1]<<16) + (data[i+2]<<8) + (data[i+3]));
        }
        break;
      case "utf7":
        for(i = 0; i < data.length; i+=j) {
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
            if(e4 != 64) tt.push(c3);
          }
          if(tt.length % 2 == 1) tt.length--;
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
  var hascp = function(cp) { return cpt[cp] || magic[cp]; };
  cpt.utils = { decode: decode, encode: encode, hascp: hascp, magic: magic, cache:cache };
  return cpt;
}));
