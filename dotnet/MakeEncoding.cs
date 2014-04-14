using System;
using System.Collections.Generic;
using System.Text;

// To run this:
// > csc MakeEncoding.cs
// > MakeEncoding.exe >out 2>err

public class MakeEncoding {
  public static ulong LEify(ulong u) { if(u < 256) return u; return (ulong)((u%256)*256+(u>>8)); }
  public static void Main() {
    int basenc = 1200;
    int[] encodings = {708,720,858,870,1047,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1361,10001,10002,10003,10004,10005,10008,10010,10017,10021,10082,20000,20001,20002,20003,20004,20005,20105,20106,20107,20108,20261,20269,20273,20277,20278,20280,20284,20285,20290,20297,20420,20423,20424,20833,20838,20866,20871,20880,20905,20924,20932,20936,20949,21025,21866,29001,38598,50220,50221,50222,50225,50227,51932,51936,51949,52936,54936,57002,57003,57004,57005,57006,57007,57008,57009,57010,57011};
    Encoding enc = Encoding.GetEncoding(basenc);
    byte[] b = new byte[256]; for (int i = 0; i != 256; ++i) b[i] = (byte)i;
    char[] c = new char[10];
    byte[] q = new byte[100];
    int len, olen;
    ulong u;
    foreach(EncodingInfo ei in Encoding.GetEncodings()) {
      Encoding e = ei.GetEncoding();
      Decoder d = e.GetDecoder();
      d.Fallback = new DecoderExceptionFallback();
      if(Array.IndexOf(encodings, ei.CodePage) == -1) { Console.Error.WriteLine("Skipping {0}", ei.CodePage);  continue; }
      Console.Error.WriteLine("{0} {1}", ei.CodePage, e.IsSingleByte);
      if(e.IsSingleByte) {
        Console.WriteLine("{1} {0} {2} {3}", ei.Name, ei.CodePage, ei.DisplayName, e.IsSingleByte ? 1 : 2);
        for(uint i = 0; i != 256; ++i) {
          try { len = d.GetChars(b, (int)i, 1, c, 0, true); } catch { continue; }
          byte[] p = enc.GetBytes(c, 0, len);
          u = 0;
          for(int j = p.Length; j > 0; --j) u = u * 256 + p[j - 1];
          Console.WriteLine("0x{0:x2}  0x{1:x4}", LEify(i), u);
        }
      } else {
        Console.WriteLine("{1} {0} {2} {3}", ei.Name, ei.CodePage, ei.DisplayName, e.IsSingleByte ? 1 : 2);
        for(uint i = 0; i != 65536; ++i) {
          b[0] = (byte)(i % 256); if (i >= 256) b[1] = (byte)(i>>8);
          try { len = d.GetChars(b, 0, i >= 256 ? 2 : 1, c, 0, true); } catch { continue; }
          if (len > 1) continue;
          olen = enc.GetBytes(c, 0, len, q, 0);
          u = 0;
          for (int j = q.Length; j > 0; --j) u = u * 256 + q[j - 1];
          if (i < 256) Console.WriteLine("0x{0:x2}  0x{1:x4}", LEify(i), u);
          else Console.WriteLine("0x{0:x4}  0x{1:x4}", LEify(i), u);
        }
      }
    }
  }
}
