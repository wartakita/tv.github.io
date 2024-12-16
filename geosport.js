const _0x4e4a20 = _0x5bc9;
(function (_0x56916c, _0x30ea3a) {
  const _0x4d15f9 = _0x5bc9, _0x565ff0 = _0x56916c();
  while (true) {
    try {
      const _0xdc3fe9 = -parseInt(_0x4d15f9(366)) / 1 * (-parseInt(_0x4d15f9(528)) / 2) + -parseInt(_0x4d15f9(417)) / 3 + -parseInt(_0x4d15f9(514)) / 4 * (-parseInt(_0x4d15f9(477)) / 5) + parseInt(_0x4d15f9(581)) / 6 * (parseInt(_0x4d15f9(441)) / 7) + parseInt(_0x4d15f9(526)) / 8 * (-parseInt(_0x4d15f9(572)) / 9) + parseInt(_0x4d15f9(416)) / 10 + -parseInt(_0x4d15f9(576)) / 11;
      if (_0xdc3fe9 === _0x30ea3a) break; else _0x565ff0.push(_0x565ff0.shift());
    } catch (_0x2aba11) {
      _0x565ff0.push(_0x565ff0.shift());
    }
  }
}(_0x8640, 627211));
let player;
const scheduleData = {Football: [{time: _0x4e4a20(468), title: _0x4e4a20(517) + _0x4e4a20(483) + _0x4e4a20(513) + _0x4e4a20(336), videoId: _0x4e4a20(364), date: _0x4e4a20(325)}, {time: _0x4e4a20(468), title: _0x4e4a20(311) + _0x4e4a20(319) + _0x4e4a20(419) + " 1", videoId: _0x4e4a20(488), date: _0x4e4a20(325)}, {time: _0x4e4a20(565), title: _0x4e4a20(412) + _0x4e4a20(380) + _0x4e4a20(456) + _0x4e4a20(367) + "1", videoId: _0x4e4a20(333), date: _0x4e4a20(325)}, {time: _0x4e4a20(427), title: _0x4e4a20(323) + _0x4e4a20(498) + _0x4e4a20(387) + _0x4e4a20(360), videoId: _0x4e4a20(346), date: _0x4e4a20(325)}, {time: _0x4e4a20(330), title: _0x4e4a20(431) + _0x4e4a20(378) + _0x4e4a20(342) + _0x4e4a20(358), videoId: _0x4e4a20(467), date: _0x4e4a20(352)}, {time: _0x4e4a20(443), title: _0x4e4a20(349) + _0x4e4a20(351) + _0x4e4a20(480), videoId: _0x4e4a20(550), date: _0x4e4a20(352)}]};
function loadSchedule() {
  const _0x3e01da = _0x4e4a20, _0x3672d9 = {BTCTW: _0x3e01da(411), QOJAb: _0x3e01da(489) + _0x3e01da(379), PnzGd: _0x3e01da(426) + "st", LZOpO: _0x3e01da(497), TMXpp: _0x3e01da(507) + _0x3e01da(506)}, _0x490125 = document[_0x3e01da(407) + _0x3e01da(577)](_0x3672d9[_0x3e01da(523)]);
  _0x490125[_0x3e01da(449)] = "";
  for (const _0x44869f in scheduleData) {
    const _0xf80cc8 = document[_0x3e01da(522) + _0x3e01da(373)](_0x3672d9[_0x3e01da(446)]), _0x4318e8 = document[_0x3e01da(522) + _0x3e01da(373)]("h3");
    _0x4318e8[_0x3e01da(395)][_0x3e01da(341)](_0x3672d9[_0x3e01da(421)]), _0x4318e8[_0x3e01da(535) + "t"] = _0x44869f, _0xf80cc8[_0x3e01da(340) + "d"](_0x4318e8);
    const _0x538afd = document[_0x3e01da(522) + _0x3e01da(373)]("ul");
    scheduleData[_0x44869f][_0x3e01da(370)](_0x380841 => {
      const _0x3cbb76 = _0x3e01da, _0x5efb51 = document[_0x3cbb76(522) + _0x3cbb76(373)]("li");
      _0x5efb51[_0x3cbb76(371) + "te"](_0x3672d9[_0x3cbb76(516)], _0x380841[_0x3cbb76(363)][_0x3cbb76(408) + "e"]()), _0x5efb51[_0x3cbb76(371) + "te"](_0x3672d9[_0x3cbb76(542)], _0x44869f[_0x3cbb76(408) + "e"]()), _0x5efb51[_0x3cbb76(449)] = _0x380841[_0x3cbb76(321)] + _0x3cbb76(402) + _0x380841[_0x3cbb76(363)] + _0x3cbb76(539) + _0x380841[_0x3cbb76(573)] + (_0x3cbb76(362) + _0x3cbb76(401) + _0x3cbb76(327) + _0x3cbb76(478) + ": ") + _0x380841[_0x3cbb76(547)] + (_0x3cbb76(329) + _0x3cbb76(401) + _0x3cbb76(529) + _0x3cbb76(493) + _0x3cbb76(432) + _0x3cbb76(453) + _0x3cbb76(344) + _0x3cbb76(455)) + _0x380841[_0x3cbb76(547)] + (_0x3cbb76(439) + _0x3cbb76(401) + _0x3cbb76(501) + _0x3cbb76(494) + _0x3cbb76(458) + _0x3cbb76(527) + _0x3cbb76(397) + _0x3cbb76(521) + _0x3cbb76(401) + _0x3cbb76(463)), _0x538afd[_0x3cbb76(340) + "d"](_0x5efb51);
    }), _0xf80cc8[_0x3e01da(340) + "d"](_0x538afd), _0x490125[_0x3e01da(340) + "d"](_0xf80cc8);
  }
}
function searchSchedule() {
  const _0x19e263 = _0x4e4a20, _0x2e0e38 = {SmXsb: _0x19e263(411), yxuDI: _0x19e263(489) + _0x19e263(379), FFpYm: _0x19e263(422), DBUrW: _0x19e263(561) + "t", TQqeh: _0x19e263(426) + "st"}, _0x2861cf = document[_0x19e263(407) + _0x19e263(577)](_0x2e0e38[_0x19e263(508)])[_0x19e263(348)][_0x19e263(408) + "e"](), _0x474720 = document[_0x19e263(407) + _0x19e263(577)](_0x2e0e38[_0x19e263(461)]), _0x4a3275 = _0x474720[_0x19e263(404) + _0x19e263(452)]("li");
  _0x4a3275[_0x19e263(370)](_0x4ebe91 => {
    const _0x5eda10 = _0x19e263, _0x4c8825 = _0x4ebe91[_0x5eda10(495) + "te"](_0x2e0e38[_0x5eda10(556)]), _0x2791f8 = _0x4ebe91[_0x5eda10(495) + "te"](_0x2e0e38[_0x5eda10(357)]);
    _0x4c8825[_0x5eda10(447)](_0x2861cf) || _0x2791f8[_0x5eda10(447)](_0x2861cf) ? _0x4ebe91[_0x5eda10(375)][_0x5eda10(491)] = "" : _0x4ebe91[_0x5eda10(375)][_0x5eda10(491)] = _0x2e0e38[_0x5eda10(322)];
  });
}
function copyToClipboard(_0x446df7) {
  const _0x382e8c = _0x4e4a20, _0x2bf0bd = {qnWzN: _0x382e8c(465), nkgev: _0x382e8c(504), HjsBt: function (_0x3d1663, _0x15e007) {
    return _0x3d1663(_0x15e007);
  }, wWGXd: _0x382e8c(374) + _0x382e8c(365) + _0x382e8c(485)}, _0x36c0f0 = document[_0x382e8c(522) + _0x382e8c(373)](_0x2bf0bd[_0x382e8c(313)]);
  _0x36c0f0[_0x382e8c(348)] = _0x446df7, document[_0x382e8c(470)][_0x382e8c(340) + "d"](_0x36c0f0), _0x36c0f0[_0x382e8c(464)](), document[_0x382e8c(396) + "d"](_0x2bf0bd[_0x382e8c(515)]), document[_0x382e8c(470)][_0x382e8c(406) + "d"](_0x36c0f0), _0x2bf0bd[_0x382e8c(317)](alert, _0x2bf0bd[_0x382e8c(437)]);
}
document[_0x4e4a20(388) + _0x4e4a20(400)](_0x4e4a20(413) + _0x4e4a20(409), () => {
  const _0x5d14c0 = _0x4e4a20, _0xc0f293 = {PSvYz: function (_0x255b04) {
    return _0x255b04();
  }};
  _0xc0f293[_0x5d14c0(545)](loadSchedule);
});
function copyToClipboard(_0x3ffcf4) {
  const _0x2c4152 = _0x4e4a20, _0x570249 = {fUXpb: _0x2c4152(465), HneTa: _0x2c4152(504), QAMlx: function (_0x3f347d, _0x5d09ee) {
    return _0x3f347d(_0x5d09ee);
  }, CXTwr: _0x2c4152(374) + _0x2c4152(365) + _0x2c4152(485)}, _0x440bb0 = document[_0x2c4152(522) + _0x2c4152(373)](_0x570249[_0x2c4152(399)]);
  _0x440bb0[_0x2c4152(348)] = _0x3ffcf4, document[_0x2c4152(470)][_0x2c4152(340) + "d"](_0x440bb0), _0x440bb0[_0x2c4152(464)](), document[_0x2c4152(396) + "d"](_0x570249[_0x2c4152(385)]), document[_0x2c4152(470)][_0x2c4152(406) + "d"](_0x440bb0), _0x570249[_0x2c4152(502)](alert, _0x570249[_0x2c4152(569)]);
}
function _0x5bc9(_0x5ad944, _0x1866be) {
  const _0x2c4d9 = _0x8640();
  return _0x5bc9 = function (_0x325e9d, _0x13529a) {
    _0x325e9d = _0x325e9d - 311;
    let _0x19ebda = _0x2c4d9[_0x325e9d];
    return _0x19ebda;
  }, _0x5bc9(_0x5ad944, _0x1866be);
}
document[_0x4e4a20(388) + _0x4e4a20(400)](_0x4e4a20(413) + _0x4e4a20(409), () => {
  const _0x16d7e2 = _0x4e4a20, _0x1d06a5 = {jUVUC: function (_0x3269dc) {
    return _0x3269dc();
  }, GBbzw: function (_0x16ae2b) {
    return _0x16ae2b();
  }};
  _0x1d06a5[_0x16d7e2(519)](loadSchedule), _0x1d06a5[_0x16d7e2(436)](startClock);
});
function startClock() {
  const _0x2b0305 = _0x4e4a20, _0x5e6ea1 = {kerfx: _0x2b0305(490), xNFlL: function (_0x14786e, _0x150136, _0x453035) {
    return _0x14786e(_0x150136, _0x453035);
  }}, _0x2fddeb = document[_0x2b0305(407) + _0x2b0305(577)](_0x5e6ea1[_0x2b0305(548)]);
  _0x5e6ea1[_0x2b0305(525)](setInterval, () => {
    const _0x2f6b1b = _0x2b0305, _0xf6f2e6 = new Date;
    _0x2fddeb[_0x2f6b1b(535) + "t"] = _0xf6f2e6[_0x2f6b1b(554) + _0x2f6b1b(578)]();
  }, 1e3);
}
function _0x8640() {
  const _0x416473 = ["    <li><s", "RQwCF", " on ", "or more in", "sFiSB", "QOJAb", "-pencuri-s", "k21xyz.wor", "PSvYz", "setup", "videoId", "kerfx", "ntent", "40040", "r upcoming", "g>Select t", "legram</st", "toLocaleTi", "yJeKl", "SmXsb", ".m3u8", "</li>\n    ", "ram group<", "trong>Acti", "searchInpu", "/strong> f", "   <ul>\n  ", "mTJHj", "19:00", "  <li><str", "toggle", "ong>View t", "CXTwr", "ive/ballba", " and click", "9RnAbWO", "date", "100%", "Lihat jadw", "1438536WJlWbZ", "ById", "meString", ".gd/NfRUC", " copy the ", "3012AuxZod", "Persita vs", "abung deng", "qnWzN", "XCDYI", "required V", "jnpKS", "HjsBt", "rong> untu", ". Dewa Uni", " the butto", "time", "FFpYm", "Adana Demi", " Gelap</st", "16-12-2024", "age", "      <spa", "   <h2>Car", "</span>\n  ", "01:00", " to Use Pe", "strong>Akt", "16240", "chedule</s", "strong>Ent", "iga 1", "tutorialCo", "LnZii", "y1nm.hnyon", "appendChil", "add", "zonspor - ", "     <li><", '="copyToCl', "D</strong>", "38800", "https://da", "value", "Lazio vs. ", "uk memuat ", "Inter - Se", "17-12-2024", "an Video I", " the Teleg", "i><strong>", "si Pecinta", "yxuDI", "Super Lig", "gshun.cn/l", " Super Lig", "ideo ID fo", " <br>\n    ", "title", "34720", "opied to c", "3yDtvXL", "or - Liga ", "><strong>P", "he event s", "forEach", "setAttribu", "ilih tutor", "ent", "Video ID c", "style", "g></li>\n  ", "dwehB", "y vs. Trab", "ory", "o vs. PSBS", "ifkan Mode", "   <h2>How", "iate langu", "length", "HneTa", "ong>Masukk", "Besiktas -", "addEventLi", "aHxzl", "ttps://pla", "block", "an visual.", "ial bahasa", "k informas", "classList", "execComman", "y Video ID", "JlBYi", "fUXpb", "stener", "          ", " - ", "he appropr", "querySelec", "kan Aplika", "removeChil", "getElement", "toLowerCas", "Loaded", ">\n        ", "data-title", "Persis Sol", "DOMContent", "n to load ", "njut.</li>", "4828500qCZHPm", "410535xqcdWw", "trong>Berg", "ted - Liga", "minton</h2", "TMXpp", "none", "Mode</stro", "li>\n      ", "cintaminto", "scheduleLi", "23:00", "age tutori", "formation.", "an grup Te", "Galatasara", 's="copy-bt', "i.</li>\n  ", "i lebih la", "<li><stron", "GBbzw", "wWGXd", "auto", "')\">\n     ", "video.</li", "2723xcDffp", "rning.hayo", "02:45", "        </", "       <li", "LZOpO", "includes", "RwkIG", "innerHTML", "FJZmm", "g diperluk", "torAll", 'n" onclick', "yang sesua", "ipboard('", " Biak Numf", "al.</stron", "as fa-copy", "k kenyaman", "sual comfo", "TQqeh", "an untuk a", " </button>", "select", "textarea", "trong> and", "33630", "15:30", "strong> da", "body", "    <ul>\n ", "kers.dev/h", "the video.", "</strong> ", "rt.</li>\n ", "       ", "125gJVlZR", "n>Video ID", "trim", "rie A", "https://wa", "dark-mode", "iri vs. Ar", "        <l", "lipboard!", "tang.</li>", "deo ID yan", "34550", "data-categ", "clock", "display", "DMQuE", "utton clas", 'i class="f', "getAttribu", "   </ul>\n ", "div", "rspor vs. ", " events.</", "qeWRK", "         <", "QAMlx", "n App</h2>", "copy", "error-mess", "itle", "category-t", "DBUrW", "player", "cara menda", "khXKJ", "ng> for vi", "ema FC - L", "102148kkmUxS", "nkgev", "BTCTW", "Persik Ked", "a Mengguna", "jUVUC", "trong>Join", "\n         ", "createElem", "PnzGd", "er Video I", "xNFlL", "6428368RIEGNd", '"></i> Cop', "254550LZCnSH", "        <b", "al acara</", "n salin Vi", "ul>\n      ", "vate Dark ", " dan klik ", "textConten", "tombol unt"];
  _0x8640 = function () {
    return _0x416473;
  };
  return _0x8640();
}
function loadPlayer() {
  const _0x24eefb = _0x4e4a20, _0x510417 = {aHxzl: _0x24eefb(547), XCDYI: function (_0x4300d8, _0x10963d) {
    return _0x4300d8(_0x10963d);
  }, qeWRK: function (_0x45ad04, _0x589365) {
    return _0x45ad04 < _0x589365;
  }, sFiSB: function (_0x4a4f00, _0x27e43a) {
    return _0x4a4f00 > _0x27e43a;
  }, jnpKS: _0x24eefb(505) + _0x24eefb(326), khXKJ: _0x24eefb(391), DMQuE: function (_0x3c28f0, _0x4088dc) {
    return _0x3c28f0(_0x4088dc);
  }, mTJHj: _0x24eefb(509), RwkIG: _0x24eefb(347) + _0x24eefb(579), FJZmm: _0x24eefb(574), yJeKl: _0x24eefb(438), RQwCF: _0x24eefb(422)}, _0x3fcb6e = document[_0x24eefb(407) + _0x24eefb(577)](_0x510417[_0x24eefb(389)])[_0x24eefb(348)][_0x24eefb(479)]();
  if (_0x510417[_0x24eefb(314)](isNaN, _0x3fcb6e) || _0x510417[_0x24eefb(500)](_0x3fcb6e[_0x24eefb(384)], 4) || _0x510417[_0x24eefb(541)](_0x3fcb6e[_0x24eefb(384)], 8)) {
    document[_0x24eefb(407) + _0x24eefb(577)](_0x510417[_0x24eefb(316)])[_0x24eefb(375)][_0x24eefb(491)] = _0x510417[_0x24eefb(511)];
    return;
  }
  _0x510417[_0x24eefb(492)](jwplayer, _0x510417[_0x24eefb(564)])[_0x24eefb(546)]({file: _0x24eefb(481) + _0x24eefb(442) + _0x24eefb(543) + _0x24eefb(544) + _0x24eefb(472) + _0x24eefb(390) + _0x24eefb(339) + _0x24eefb(359) + _0x24eefb(570) + "r_" + _0x3fcb6e + _0x24eefb(557), image: _0x510417[_0x24eefb(448)], width: _0x510417[_0x24eefb(450)], height: _0x510417[_0x24eefb(555)], autostart: true}), document[_0x24eefb(407) + _0x24eefb(577)](_0x510417[_0x24eefb(316)])[_0x24eefb(375)][_0x24eefb(491)] = _0x510417[_0x24eefb(538)];
}
function toggleDarkMode() {
  const _0x3f247a = _0x4e4a20, _0x29a9db = {dwehB: _0x3f247a(482)};
  document[_0x3f247a(470)][_0x3f247a(395)][_0x3f247a(567)](_0x29a9db[_0x3f247a(377)]);
}
function showTutorial(_0x9a9a2a) {
  const _0x345c64 = _0x4e4a20, _0x3604b8 = {LnZii: _0x345c64(337) + _0x345c64(549), JlBYi: function (_0x8479cc, _0x21e791) {
    return _0x8479cc === _0x21e791;
  }}, _0x285572 = document[_0x345c64(407) + _0x345c64(577)](_0x3604b8[_0x345c64(338)]), _0x31e462 = _0x345c64(521) + _0x345c64(382) + _0x345c64(331) + _0x345c64(425) + _0x345c64(503) + _0x345c64(521) + _0x345c64(563) + _0x345c64(401) + _0x345c64(537) + _0x345c64(560) + _0x345c64(533) + _0x345c64(423) + _0x345c64(512) + _0x345c64(460) + _0x345c64(475) + _0x345c64(401) + _0x345c64(343) + _0x345c64(335) + _0x345c64(524) + _0x345c64(345) + _0x345c64(571) + _0x345c64(320) + _0x345c64(414) + _0x345c64(473) + _0x345c64(558) + _0x345c64(401) + _0x345c64(566) + _0x345c64(568) + _0x345c64(369) + _0x345c64(334) + _0x345c64(466) + _0x345c64(580) + _0x345c64(315) + _0x345c64(361) + _0x345c64(551) + _0x345c64(499) + _0x345c64(424) + _0x345c64(401) + _0x345c64(435) + _0x345c64(552) + _0x345c64(403) + _0x345c64(383) + _0x345c64(428) + _0x345c64(457) + _0x345c64(376) + _0x345c64(401) + _0x345c64(537) + _0x345c64(520) + _0x345c64(354) + _0x345c64(559) + _0x345c64(562) + _0x345c64(540) + _0x345c64(429) + _0x345c64(558) + _0x345c64(444) + _0x345c64(532) + "  ", _0x1cc127 = _0x345c64(521) + _0x345c64(328) + _0x345c64(518) + _0x345c64(405) + _0x345c64(356) + _0x345c64(420) + _0x345c64(410) + _0x345c64(471) + _0x345c64(401) + _0x345c64(343) + _0x345c64(332) + _0x345c64(381) + _0x345c64(324) + _0x345c64(318) + _0x345c64(459) + _0x345c64(392) + _0x345c64(558) + _0x345c64(401) + _0x345c64(566) + _0x345c64(386) + _0x345c64(353) + _0x345c64(345) + _0x345c64(534) + _0x345c64(536) + _0x345c64(350) + _0x345c64(440) + _0x345c64(410) + _0x345c64(484) + _0x345c64(355) + _0x345c64(575) + _0x345c64(530) + _0x345c64(469) + _0x345c64(531) + _0x345c64(487) + _0x345c64(451) + _0x345c64(462) + _0x345c64(510) + _0x345c64(486) + _0x345c64(521) + _0x345c64(445) + _0x345c64(368) + _0x345c64(372) + _0x345c64(393) + _0x345c64(474) + _0x345c64(454) + _0x345c64(433) + _0x345c64(401) + _0x345c64(537) + _0x345c64(418) + _0x345c64(312) + _0x345c64(430) + _0x345c64(553) + _0x345c64(318) + _0x345c64(394) + _0x345c64(434) + _0x345c64(415) + _0x345c64(521) + _0x345c64(496) + _0x345c64(476);
  _0x3604b8[_0x345c64(398)](_0x9a9a2a, "en") ? _0x285572[_0x345c64(449)] = _0x31e462 : _0x285572[_0x345c64(449)] = _0x1cc127;
}
