const _0x525f0c = _0x3608;
(function (_0x160132, _0x22bfa5) {
  const _0x3d76a9 = _0x3608, _0x3f9c2d = _0x160132();
  while (true) {
    try {
      const _0x1f8fb6 = -parseInt(_0x3d76a9(424)) / 1 * (-parseInt(_0x3d76a9(490)) / 2) + -parseInt(_0x3d76a9(374)) / 3 * (parseInt(_0x3d76a9(466)) / 4) + parseInt(_0x3d76a9(454)) / 5 + -parseInt(_0x3d76a9(314)) / 6 + -parseInt(_0x3d76a9(247)) / 7 + -parseInt(_0x3d76a9(251)) / 8 * (parseInt(_0x3d76a9(325)) / 9) + parseInt(_0x3d76a9(378)) / 10;
      if (_0x1f8fb6 === _0x22bfa5) break; else _0x3f9c2d.push(_0x3f9c2d.shift());
    } catch (_0x339d19) {
      _0x3f9c2d.push(_0x3f9c2d.shift());
    }
  }
}(_0x309b, 541122));
let player;
const scheduleData = {Badminton: [{time: _0x525f0c(384), title: _0x525f0c(306) + _0x525f0c(497) + _0x525f0c(438), videoId: _0x525f0c(296), date: _0x525f0c(260)}, {time: _0x525f0c(384), title: _0x525f0c(306) + _0x525f0c(497) + _0x525f0c(322), videoId: _0x525f0c(279), date: _0x525f0c(260)}, {time: _0x525f0c(384), title: _0x525f0c(306) + _0x525f0c(497) + _0x525f0c(256), videoId: _0x525f0c(437), date: _0x525f0c(260)}, {time: _0x525f0c(262), title: _0x525f0c(480) + _0x525f0c(249) + _0x525f0c(484) + _0x525f0c(276), videoId: _0x525f0c(277), date: _0x525f0c(260)}, {time: _0x525f0c(262), title: _0x525f0c(480) + _0x525f0c(249) + _0x525f0c(484) + _0x525f0c(332), videoId: _0x525f0c(461), date: _0x525f0c(260)}], NBA: [{time: _0x525f0c(248), title: _0x525f0c(363) + _0x525f0c(258) + _0x525f0c(501) + _0x525f0c(315), videoId: _0x525f0c(380), date: _0x525f0c(260)}, {time: _0x525f0c(248), title: _0x525f0c(431) + _0x525f0c(389) + _0x525f0c(254), videoId: _0x525f0c(272), date: _0x525f0c(260)}, {time: _0x525f0c(429), title: _0x525f0c(500) + _0x525f0c(443) + _0x525f0c(270) + _0x525f0c(432) + "s", videoId: _0x525f0c(327), date: _0x525f0c(260)}]};
function loadSchedule() {
  const _0x4d6ee3 = _0x525f0c, _0x383dd8 = {FVZQB: _0x4d6ee3(275), UVBUL: _0x4d6ee3(301) + _0x4d6ee3(472), rcLBo: _0x4d6ee3(381) + "st", eJdhP: _0x4d6ee3(397), gUauH: _0x4d6ee3(489) + _0x4d6ee3(245)}, _0x4acddc = document[_0x4d6ee3(292) + _0x4d6ee3(271)](_0x383dd8[_0x4d6ee3(282)]);
  _0x4acddc[_0x4d6ee3(411)] = "";
  for (const _0x1c6eea in scheduleData) {
    const _0x32671a = document[_0x4d6ee3(330) + _0x4d6ee3(417)](_0x383dd8[_0x4d6ee3(243)]), _0x3261d5 = document[_0x4d6ee3(330) + _0x4d6ee3(417)]("h3");
    _0x3261d5[_0x4d6ee3(328)][_0x4d6ee3(469)](_0x383dd8[_0x4d6ee3(369)]), _0x3261d5[_0x4d6ee3(496) + "t"] = _0x1c6eea, _0x32671a[_0x4d6ee3(280) + "d"](_0x3261d5);
    const _0x505a93 = document[_0x4d6ee3(330) + _0x4d6ee3(417)]("ul");
    scheduleData[_0x1c6eea][_0x4d6ee3(335)](_0x548a08 => {
      const _0xda4bd9 = _0x4d6ee3, _0x4cefc3 = document[_0xda4bd9(330) + _0xda4bd9(417)]("li");
      _0x4cefc3[_0xda4bd9(392) + "te"](_0x383dd8[_0xda4bd9(287)], _0x548a08[_0xda4bd9(419)][_0xda4bd9(244) + "e"]()), _0x4cefc3[_0xda4bd9(392) + "te"](_0x383dd8[_0xda4bd9(344)], _0x1c6eea[_0xda4bd9(244) + "e"]()), _0x4cefc3[_0xda4bd9(411)] = _0x548a08[_0xda4bd9(309)] + _0xda4bd9(410) + _0x548a08[_0xda4bd9(419)] + _0xda4bd9(493) + _0x548a08[_0xda4bd9(434)] + (_0xda4bd9(486) + _0xda4bd9(453) + _0xda4bd9(373) + _0xda4bd9(423) + ": ") + _0x548a08[_0xda4bd9(426)] + (_0xda4bd9(361) + _0xda4bd9(453) + _0xda4bd9(485) + _0xda4bd9(448) + _0xda4bd9(428) + _0xda4bd9(396) + _0xda4bd9(406) + _0xda4bd9(242)) + _0x548a08[_0xda4bd9(426)] + (_0xda4bd9(304) + _0xda4bd9(453) + _0xda4bd9(459) + _0xda4bd9(293) + _0xda4bd9(267) + _0xda4bd9(346) + _0xda4bd9(365) + _0xda4bd9(295) + _0xda4bd9(453) + _0xda4bd9(329)), _0x505a93[_0xda4bd9(280) + "d"](_0x4cefc3);
    }), _0x32671a[_0x4d6ee3(280) + "d"](_0x505a93), _0x4acddc[_0x4d6ee3(280) + "d"](_0x32671a);
  }
}
function searchSchedule() {
  const _0x22110d = _0x525f0c, _0x2c1f2f = {DsIBL: _0x22110d(275), XBjYt: _0x22110d(301) + _0x22110d(472), jJlOe: _0x22110d(303), hFQEV: _0x22110d(281) + "t", DAVHt: _0x22110d(381) + "st"}, _0x5965f7 = document[_0x22110d(292) + _0x22110d(271)](_0x2c1f2f[_0x22110d(307)])[_0x22110d(487)][_0x22110d(244) + "e"](), _0x1b92a6 = document[_0x22110d(292) + _0x22110d(271)](_0x2c1f2f[_0x22110d(358)]), _0x41772b = _0x1b92a6[_0x22110d(324) + _0x22110d(495)]("li");
  _0x41772b[_0x22110d(335)](_0x2491a8 => {
    const _0x35b9a3 = _0x22110d, _0x39a022 = _0x2491a8[_0x35b9a3(302) + "te"](_0x2c1f2f[_0x35b9a3(359)]), _0x1813f7 = _0x2491a8[_0x35b9a3(302) + "te"](_0x2c1f2f[_0x35b9a3(294)]);
    _0x39a022[_0x35b9a3(436)](_0x5965f7) || _0x1813f7[_0x35b9a3(436)](_0x5965f7) ? _0x2491a8[_0x35b9a3(312)][_0x35b9a3(285)] = "" : _0x2491a8[_0x35b9a3(312)][_0x35b9a3(285)] = _0x2c1f2f[_0x35b9a3(491)];
  });
}
function copyToClipboard(_0x1296d0) {
  const _0x33c3c3 = _0x525f0c, _0x4c7aea = {BwEbX: _0x33c3c3(351), VguTy: _0x33c3c3(458), OWdov: function (_0x2b5da6, _0x20db25) {
    return _0x2b5da6(_0x20db25);
  }, mJqLM: _0x33c3c3(447) + _0x33c3c3(250) + _0x33c3c3(300)}, _0x461262 = document[_0x33c3c3(330) + _0x33c3c3(417)](_0x4c7aea[_0x33c3c3(278)]);
  _0x461262[_0x33c3c3(487)] = _0x1296d0, document[_0x33c3c3(340)][_0x33c3c3(280) + "d"](_0x461262), _0x461262[_0x33c3c3(475)](), document[_0x33c3c3(297) + "d"](_0x4c7aea[_0x33c3c3(288)]), document[_0x33c3c3(340)][_0x33c3c3(345) + "d"](_0x461262), _0x4c7aea[_0x33c3c3(416)](alert, _0x4c7aea[_0x33c3c3(483)]);
}
function _0x309b() {
  const _0x5b91a6 = ["n>Video ID", "303302kVInKE", ".m3u8", "videoId", ">Masukkan ", 's="copy-bt', "08:00", " <ul>\n    ", "Miami Heat", "mento King", "acara</str", "date", "trong>Pili", "includes", "22420", "- COURT 1", "LTuBM", "     <li><", "o ID for u", "UNQpF", "s Pelicans", "mation.</l", "lAtID", "ong>Enter ", "Video ID c", "utton clas", "pp</h2>\n  ", "strong> da", "</strong><", "g> untuk k", "          ", "3791230qTVsbO", "FnhqF", "NlUpS", "yxwOo", "copy", "         <", "tutorialCo", "18060", "/ballbar_", "toggle", " video.</l", "memuat vid", "1864XRoWdr", "100%", "bo.huminbi", "add", "qUlql", "iperlukan ", "ory", "ntent", "IebVH", "select", " ID yang d", "pcoming ev", "h tutorial", "trim", "BWF World ", "ILPqJ", "g> untuk i", "mJqLM", "s 2024 - C", "        <b", " <br>\n    ", "value", "length", "category-t", "2eCQgCc", "jJlOe", "dark-mode", " on ", "setup", "torAll", "textConten", "ters 2024 ", "https://le", "</ul>\n    ", "New Orlean", "etroit Pis", "dule</stro", "ipboard('", "eJdhP", "toLowerCas", "itle", "eo.</li>\n ", "1773226mbitZy", "07:30", "Tour Final", "opied to c", "32Reqtaf", "g sesuai.<", " bahasa</s", "to Raptors", "enyamanan ", "- COURT 3", "rqckE", "tics vs. D", "e Telegram", "13-12-2024", "nformasi l", "08:30", "ram</stron", "untuk acar", " tutorial.", "meString", "as fa-copy", " for visua", " <li><stro", " vs. Sacra", "ById", "19980", "    ", "more infor", "data-title", "OURT 1", "13990", "BwEbX", "8920", "appendChil", "searchInpu", "rcLBo", "       <li", "trong> yan", "display", "e Dark Mod", "FVZQB", "VguTy", "ng dengan ", "><strong>S", ".gd/NfRUC", "getElement", 'i class="f', "XBjYt", "\n         ", "23810", "execComman", "grup Teleg", "oo Sport A", "lipboard!", "data-categ", "getAttribu", "none", "')\">\n     ", "e language", "Odisha Mas", "hFQEV", "ng>Join th", "time", "kQoYF", "elect the ", "style", "py the req", "2348394CufPoT", "tons", "ents.</li>", "addEventLi", "clock", "ong>Aktifk", "error-mess", "IgVpy", "- COURT 2", " group</st", "querySelec", "894591cDALLb", "alin Video", "20020", "classList", " </button>", "createElem", "/li>\n     ", "OURT 2", "a Mengguna", "e button t", "forEach", "auto", "visual.</l", "hkyrR", "\n        ", "body", "strong> an", "wEGMQ", "ebih lanju", "UVBUL", "removeChil", '"></i> Cop', "peUDs", "a mendatan", "appropriat", "o load the", "textarea", "PXJOF", "   <h2>Car", "e</strong>", "n klik tom", ">View the ", "event sche", "DAVHt", "DsIBL", "ng> and co", "</span>\n  ", "    <li><s", "Boston Cel", "i>\n       ", "y Video ID", "an Mode Ge", "</li>\n    ", "block", "gUauH", "at jadwal ", "kAyOg", " to Use Ge", "      <spa", "2013UKUhsa", "kan Aplika", "rd.cn/live", "Loaded", "8345730bPJPpJ", "ort</h2>\n ", "19330", "scheduleLi", "stener", "RFcHT", "14:30", "ng>Activat", "  <li><str", "li><strong", "g.</li>\n  ", " vs. Toron", "tuFbD", "RuibE", "setAttribu", "toLocaleTi", "     </ul>", "https://da", 'n" onclick', "div", "age", "strong>Lih", "ng>Bergabu", "si Geoo Sp", "bol untuk ", "rong> for ", "l comfort.", "Video ID</", '="copyToCl', "uired Vide", "player", "SSvXe", " - ", "innerHTML", "<ul>\n     ", "DOMContent", "t.</li>\n  ", "rxxOB", "OWdov", "ent", "lap</stron", "title", "d click th", "ong> dan s", "   <h2>How"];
  _0x309b = function () {
    return _0x5b91a6;
  };
  return _0x309b();
}
document[_0x525f0c(317) + _0x525f0c(382)](_0x525f0c(413) + _0x525f0c(377), () => {
  const _0x5c505d = _0x525f0c, _0x1b7ae6 = {rqckE: function (_0x2ebd82) {
    return _0x2ebd82();
  }};
  _0x1b7ae6[_0x5c505d(257)](loadSchedule);
});
function copyToClipboard(_0x45f3e5) {
  const _0x425793 = _0x525f0c, _0x5d6471 = {qUlql: _0x425793(351), kQoYF: _0x425793(458), IgVpy: function (_0x5d5cca, _0x33608f) {
    return _0x5d5cca(_0x33608f);
  }, yxwOo: _0x425793(447) + _0x425793(250) + _0x425793(300)}, _0x219660 = document[_0x425793(330) + _0x425793(417)](_0x5d6471[_0x425793(470)]);
  _0x219660[_0x425793(487)] = _0x45f3e5, document[_0x425793(340)][_0x425793(280) + "d"](_0x219660), _0x219660[_0x425793(475)](), document[_0x425793(297) + "d"](_0x5d6471[_0x425793(310)]), document[_0x425793(340)][_0x425793(345) + "d"](_0x219660), _0x5d6471[_0x425793(321)](alert, _0x5d6471[_0x425793(457)]);
}
document[_0x525f0c(317) + _0x525f0c(382)](_0x525f0c(413) + _0x525f0c(377), () => {
  const _0x29f3ca = _0x525f0c, _0x249885 = {wEGMQ: function (_0x3bfe7e) {
    return _0x3bfe7e();
  }};
  _0x249885[_0x29f3ca(342)](loadSchedule), _0x249885[_0x29f3ca(342)](startClock);
});
function startClock() {
  const _0x4c6bd9 = _0x525f0c, _0x59cdbb = {kAyOg: _0x4c6bd9(318), peUDs: function (_0x5d8bab, _0x312a7d, _0x12bd6c) {
    return _0x5d8bab(_0x312a7d, _0x12bd6c);
  }}, _0x295161 = document[_0x4c6bd9(292) + _0x4c6bd9(271)](_0x59cdbb[_0x4c6bd9(371)]);
  _0x59cdbb[_0x4c6bd9(347)](setInterval, () => {
    const _0x26a760 = _0x4c6bd9, _0x15b443 = new Date;
    _0x295161[_0x26a760(496) + "t"] = _0x15b443[_0x26a760(393) + _0x26a760(266)]();
  }, 1e3);
}
function loadPlayer() {
  const _0x49b7b7 = _0x525f0c, _0x1c524e = {lAtID: _0x49b7b7(426), UNQpF: function (_0x57107a, _0x36007a) {
    return _0x57107a(_0x36007a);
  }, PXJOF: function (_0x5a86ab, _0x52eabe) {
    return _0x5a86ab < _0x52eabe;
  }, hkyrR: function (_0xe3e007, _0xc88545) {
    return _0xe3e007 > _0xc88545;
  }, IebVH: _0x49b7b7(320) + _0x49b7b7(398), RFcHT: _0x49b7b7(368), RuibE: _0x49b7b7(408), ILPqJ: _0x49b7b7(395) + _0x49b7b7(291), rxxOB: _0x49b7b7(467), NlUpS: _0x49b7b7(336), LTuBM: _0x49b7b7(303)}, _0x43a270 = document[_0x49b7b7(292) + _0x49b7b7(271)](_0x1c524e[_0x49b7b7(445)])[_0x49b7b7(487)][_0x49b7b7(479)]();
  if (_0x1c524e[_0x49b7b7(442)](isNaN, _0x43a270) || _0x1c524e[_0x49b7b7(352)](_0x43a270[_0x49b7b7(488)], 4) || _0x1c524e[_0x49b7b7(338)](_0x43a270[_0x49b7b7(488)], 8)) {
    document[_0x49b7b7(292) + _0x49b7b7(271)](_0x1c524e[_0x49b7b7(474)])[_0x49b7b7(312)][_0x49b7b7(285)] = _0x1c524e[_0x49b7b7(383)];
    return;
  }
  _0x1c524e[_0x49b7b7(442)](jwplayer, _0x1c524e[_0x49b7b7(391)])[_0x49b7b7(494)]({file: _0x49b7b7(498) + _0x49b7b7(468) + _0x49b7b7(376) + _0x49b7b7(462) + _0x43a270 + _0x49b7b7(425), image: _0x1c524e[_0x49b7b7(481)], width: _0x1c524e[_0x49b7b7(415)], height: _0x1c524e[_0x49b7b7(456)], autostart: true}), document[_0x49b7b7(292) + _0x49b7b7(271)](_0x1c524e[_0x49b7b7(474)])[_0x49b7b7(312)][_0x49b7b7(285)] = _0x1c524e[_0x49b7b7(439)];
}
function _0x3608(_0x16075c, _0x2d1df7) {
  const _0x5b6819 = _0x309b();
  return _0x3608 = function (_0x393e4e, _0x543b1c) {
    _0x393e4e = _0x393e4e - 242;
    let _0x535e3b = _0x5b6819[_0x393e4e];
    return _0x535e3b;
  }, _0x3608(_0x16075c, _0x2d1df7);
}
function toggleDarkMode() {
  const _0x1dce62 = _0x525f0c, _0x55a673 = {tuFbD: _0x1dce62(492)};
  document[_0x1dce62(340)][_0x1dce62(328)][_0x1dce62(463)](_0x55a673[_0x1dce62(390)]);
}
function showTutorial(_0x42453d) {
  const _0x382a53 = _0x525f0c, _0x39ec34 = {SSvXe: _0x382a53(460) + _0x382a53(473), FnhqF: function (_0x4fc631, _0x58cf9d) {
    return _0x4fc631 === _0x58cf9d;
  }}, _0xfff46b = document[_0x382a53(292) + _0x382a53(271)](_0x39ec34[_0x382a53(409)]), _0x5731dc = _0x382a53(295) + _0x382a53(422) + _0x382a53(372) + _0x382a53(299) + _0x382a53(449) + _0x382a53(453) + _0x382a53(412) + _0x382a53(453) + _0x382a53(269) + _0x382a53(385) + _0x382a53(286) + _0x382a53(354) + _0x382a53(268) + _0x382a53(404) + _0x382a53(367) + _0x382a53(453) + _0x382a53(386) + _0x382a53(446) + _0x382a53(405) + _0x382a53(341) + _0x382a53(420) + _0x382a53(334) + _0x382a53(350) + _0x382a53(464) + _0x382a53(364) + _0x382a53(459) + _0x382a53(387) + _0x382a53(356) + _0x382a53(357) + _0x382a53(502) + _0x382a53(360) + _0x382a53(313) + _0x382a53(407) + _0x382a53(441) + _0x382a53(477) + _0x382a53(316) + _0x382a53(295) + _0x382a53(283) + _0x382a53(290) + _0x382a53(311) + _0x382a53(349) + _0x382a53(305) + _0x382a53(265) + _0x382a53(451) + _0x382a53(331) + _0x382a53(453) + _0x382a53(269) + _0x382a53(308) + _0x382a53(259) + _0x382a53(323) + _0x382a53(403) + _0x382a53(274) + _0x382a53(444) + _0x382a53(364) + _0x382a53(394) + _0x382a53(339), _0x2b27f6 = _0x382a53(295) + _0x382a53(353) + _0x382a53(333) + _0x382a53(375) + _0x382a53(401) + _0x382a53(379) + _0x382a53(453) + _0x382a53(430) + _0x382a53(453) + _0x382a53(386) + _0x382a53(319) + _0x382a53(366) + _0x382a53(418) + _0x382a53(452) + _0x382a53(255) + _0x382a53(337) + _0x382a53(364) + _0x382a53(459) + _0x382a53(387) + _0x382a53(427) + _0x382a53(405) + _0x382a53(450) + _0x382a53(355) + _0x382a53(402) + _0x382a53(465) + _0x382a53(246) + _0x382a53(453) + _0x382a53(440) + _0x382a53(399) + _0x382a53(370) + _0x382a53(433) + _0x382a53(421) + _0x382a53(326) + _0x382a53(476) + _0x382a53(471) + _0x382a53(264) + _0x382a53(348) + _0x382a53(388) + _0x382a53(453) + _0x382a53(362) + _0x382a53(435) + _0x382a53(478) + _0x382a53(253) + _0x382a53(284) + _0x382a53(252) + _0x382a53(331) + _0x382a53(453) + _0x382a53(269) + _0x382a53(400) + _0x382a53(289) + _0x382a53(298) + _0x382a53(263) + _0x382a53(482) + _0x382a53(261) + _0x382a53(343) + _0x382a53(414) + _0x382a53(453) + _0x382a53(499) + _0x382a53(273);
  _0x39ec34[_0x382a53(455)](_0x42453d, "en") ? _0xfff46b[_0x382a53(411)] = _0x5731dc : _0xfff46b[_0x382a53(411)] = _0x2b27f6;
}
