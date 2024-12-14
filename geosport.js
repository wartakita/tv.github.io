const _0x1244b4 = _0x3634;
(function (_0x741e20, _0x1ab16a) {
  const _0x5626ad = _0x3634, _0x5b3332 = _0x741e20();
  while (true) {
    try {
      const _0x298857 = -parseInt(_0x5626ad(473)) / 1 * (-parseInt(_0x5626ad(486)) / 2) + parseInt(_0x5626ad(625)) / 3 + -parseInt(_0x5626ad(657)) / 4 * (parseInt(_0x5626ad(511)) / 5) + -parseInt(_0x5626ad(419)) / 6 + -parseInt(_0x5626ad(517)) / 7 + parseInt(_0x5626ad(572)) / 8 * (parseInt(_0x5626ad(614)) / 9) + parseInt(_0x5626ad(520)) / 10;
      if (_0x298857 === _0x1ab16a) break; else _0x5b3332.push(_0x5b3332.shift());
    } catch (_0x883c76) {
      _0x5b3332.push(_0x5b3332.shift());
    }
  }
}(_0xe0b9, 750713));
let player;
const scheduleData = {Badminton: [{time: _0x1244b4(529), title: _0x1244b4(642) + _0x1244b4(503) + _0x1244b4(624), videoId: _0x1244b4(536), date: _0x1244b4(508)}, {time: _0x1244b4(482), title: _0x1244b4(656) + _0x1244b4(466) + _0x1244b4(578) + _0x1244b4(641), videoId: _0x1244b4(633), date: _0x1244b4(508)}], Basketball: [{time: _0x1244b4(462), title: _0x1244b4(601) + _0x1244b4(467) + _0x1244b4(527) + _0x1244b4(668) + _0x1244b4(488) + _0x1244b4(660), videoId: _0x1244b4(493), date: _0x1244b4(508)}, {time: _0x1244b4(423), title: _0x1244b4(507) + _0x1244b4(422) + _0x1244b4(525) + _0x1244b4(647) + _0x1244b4(574) + _0x1244b4(454) + "s", videoId: _0x1244b4(494), date: _0x1244b4(508)}]};
function loadSchedule() {
  const _0x16aca0 = _0x1244b4, _0x3a891d = {jQstz: _0x16aca0(628), QJTbW: _0x16aca0(549) + _0x16aca0(580), nkiXr: _0x16aca0(418) + "st", FIfqi: _0x16aca0(447), zetpy: _0x16aca0(416) + _0x16aca0(497)}, _0x1bd623 = document[_0x16aca0(481) + _0x16aca0(471)](_0x3a891d[_0x16aca0(588)]);
  _0x1bd623[_0x16aca0(568)] = "";
  for (const _0x3c1db3 in scheduleData) {
    const _0x289550 = document[_0x16aca0(595) + _0x16aca0(516)](_0x3a891d[_0x16aca0(504)]), _0x5b5184 = document[_0x16aca0(595) + _0x16aca0(516)]("h3");
    _0x5b5184[_0x16aca0(606)][_0x16aca0(630)](_0x3a891d[_0x16aca0(675)]), _0x5b5184[_0x16aca0(545) + "t"] = _0x3c1db3, _0x289550[_0x16aca0(546) + "d"](_0x5b5184);
    const _0x3da53d = document[_0x16aca0(595) + _0x16aca0(516)]("ul");
    scheduleData[_0x3c1db3][_0x16aca0(652)](_0x3995d9 => {
      const _0x56154a = _0x16aca0, _0x4eda78 = document[_0x56154a(595) + _0x56154a(516)]("li");
      _0x4eda78[_0x56154a(626) + "te"](_0x3a891d[_0x56154a(594)], _0x3995d9[_0x56154a(518)][_0x56154a(446) + "e"]()), _0x4eda78[_0x56154a(626) + "te"](_0x3a891d[_0x56154a(589)], _0x3c1db3[_0x56154a(446) + "e"]()), _0x4eda78[_0x56154a(568)] = _0x3995d9[_0x56154a(610)] + _0x56154a(443) + _0x3995d9[_0x56154a(518)] + _0x56154a(438) + _0x3995d9[_0x56154a(576)] + (_0x56154a(424) + _0x56154a(528) + _0x56154a(463) + _0x56154a(510) + ": ") + _0x3995d9[_0x56154a(587)] + (_0x56154a(512) + _0x56154a(528) + _0x56154a(551) + _0x56154a(632) + _0x56154a(612) + _0x56154a(455) + _0x56154a(584) + _0x56154a(673)) + _0x3995d9[_0x56154a(587)] + (_0x56154a(629) + _0x56154a(528) + _0x56154a(640) + _0x56154a(622) + _0x56154a(557) + _0x56154a(621) + _0x56154a(662) + _0x56154a(604) + _0x56154a(528) + _0x56154a(533)), _0x3da53d[_0x56154a(546) + "d"](_0x4eda78);
    }), _0x289550[_0x16aca0(546) + "d"](_0x3da53d), _0x1bd623[_0x16aca0(546) + "d"](_0x289550);
  }
}
function searchSchedule() {
  const _0x480bb3 = _0x1244b4, _0x472a90 = {kvfrV: _0x480bb3(628), dslct: _0x480bb3(549) + _0x480bb3(580), RzPAF: _0x480bb3(425), EiBCm: _0x480bb3(521) + "t", UNPMa: _0x480bb3(418) + "st"}, _0x148e7d = document[_0x480bb3(481) + _0x480bb3(471)](_0x472a90[_0x480bb3(559)])[_0x480bb3(456)][_0x480bb3(446) + "e"](), _0x1e76f4 = document[_0x480bb3(481) + _0x480bb3(471)](_0x472a90[_0x480bb3(543)]), _0x47fa17 = _0x1e76f4[_0x480bb3(440) + _0x480bb3(593)]("li");
  _0x47fa17[_0x480bb3(652)](_0x200da8 => {
    const _0x5ec769 = _0x480bb3, _0x341d5c = _0x200da8[_0x5ec769(478) + "te"](_0x472a90[_0x5ec769(644)]), _0x612adc = _0x200da8[_0x5ec769(478) + "te"](_0x472a90[_0x5ec769(550)]);
    _0x341d5c[_0x5ec769(556)](_0x148e7d) || _0x612adc[_0x5ec769(556)](_0x148e7d) ? _0x200da8[_0x5ec769(421)][_0x5ec769(513)] = "" : _0x200da8[_0x5ec769(421)][_0x5ec769(513)] = _0x472a90[_0x5ec769(607)];
  });
}
function _0xe0b9() {
  const _0x1f7dae = ["video.</li", "tombol unt", "ng> for vi", "ters 2024 ", "FIfqi", "Loaded", "k kenyaman", "Oklahoma C", "15-12-2024", "strong>Ent", "n>Video ID", "5RzOpwC", "</span>\n  ", "display", "   <h2>Car", "tang.</li>", "ent", "8078182Ruzhhx", "title", "stener", "3936880QIBnBC", "searchInpu", "the video.", "trim", "meString", "r vs. Hous", "k21xyz.wor", "Atlanta Ha", "          ", "14:30", ">\n        ", " copy the ", "si Pecinta", " </button>", "formation.", "YoqqG", "18770", "minton</h2", "gshun.cn/l", "QrFRm", " and click", "><strong>P", "paOTN", "UNPMa", "MISiS", "textConten", "appendChil", "ttps://pla", "er Video I", "data-categ", "dslct", "        <b", "trong> and", "zcbOh", "ul>\n      ", "chedule</s", "includes", "as fa-copy", "li>\n      ", "EiBCm", "COwPl", "oKvXb", "an visual.", "ntent", "ial bahasa", "toLocaleTi", "100%", "cara menda", "innerHTML", " Gelap</st", "toggle", "OTIDK", "2528GrdyUd", "body", "s - NBA Cu", "KSNSD", "date", "DOMContent", "s 2024 - C", "deo ID yan", "ory", "ilih tutor", "setup", " events.</", '="copyToCl', "-pencuri-s", "r upcoming", "videoId", "nkiXr", "QJTbW", "opied to c", "trong>Acti", "       <li", "torAll", "jQstz", "createElem", "/strong> f", "n App</h2>", "player", "uk memuat ", "a Mengguna", "Milwaukee ", "ong>View t", "trong>Berg", "\n         ", "al acara</", "classList", "RzPAF", "   <ul>\n  ", "age", "time", "removeChil", 's="copy-bt', "he event s", "31896RvnNhQ", "voxbR", "legram</st", "frwve", "fdZyf", "n to load ", "error-mess", '"></i> Cop', 'i class="f', "IzEhH", "- COURT 1", "2444397aiYrZr", "setAttribu", "an untuk a", "data-title", "')\">\n     ", "add", "strong>Akt", "utton clas", "24810", "strong> da", "required V", "g>Select t", "rning.hayo", "he appropr", "age tutori", "         <", "OURT 1", "Odisha Mas", "auto", "kvfrV", "xbBKW", "iate langu", "ton Rocket", "njut.</li>", "y1nm.hnyon", "https://da", "gyZBg", "forEach", "     <li><", "select", "D</strong>", "BWF World ", "350036tXwxYQ", "ong>Masukk", " to Use Pe", "ffs", "ICKSW", "y Video ID", "lipboard!", ".m3u8", "    <li><s", "rt.</li>\n ", "cintaminto", "wks - NBA ", "length", "    <ul>\n ", "ifkan Mode", "HJMLd", "ipboard('", "tutorialCo", "zetpy", "NgtYB", "category-t", "i><strong>", "scheduleLi", "3410706OFPwKo", ".gd/NfRUC", "style", "ity Thunde", "08:30", " <br>\n    ", "none", "Mode</stro", "vate Dark ", "dark-mode", "ive/ballba", "<li><stron", "g diperluk", "textarea", "  <li><str", "kers.dev/h", "copy", "pcIzq", "rong> untu", " on ", "sual comfo", "querySelec", "block", "   </ul>\n ", " - ", "i lebih la", "al.</stron", "toLowerCas", "div", "Lihat jadw", "        <l", "ideo ID fo", "kan Aplika", "n salin Vi", "ram group<", "p Play Off", 'n" onclick', "value", "MaKdq", "https://wa", "QNqLX", "trong>Join", "</li>\n    ", "04:30", "      <spa", "i.</li>\n  ", "k informas", "Tour Final", "Bucks vs. ", "XzvKL", "        </", "Video ID c", "ById", "</strong> ", "36ORSQnu", "yang sesua", "TIVlS", "an grup Te", "or more in", "getAttribu", "addEventLi", "g></li>\n  ", "getElement", "13:00", "       ", " the butto", "abung deng", "12906cBxXQH", "IOLwI", "Cup Play O", "CXREm", " dan klik ", "JKkIR", "execComman", "34470", "32720", "an Video I", " the Teleg", "itle", "clock", "   <h2>How"];
  _0xe0b9 = function () {
    return _0x1f7dae;
  };
  return _0xe0b9();
}
function copyToClipboard(_0x232c8c) {
  const _0xa368dd = _0x1244b4, _0x2b2108 = {fdZyf: _0xa368dd(432), oKvXb: _0xa368dd(435), voxbR: function (_0x1c1622, _0x589468) {
    return _0x1c1622(_0x589468);
  }, MISiS: _0xa368dd(470) + _0xa368dd(590) + _0xa368dd(663)}, _0x307f62 = document[_0xa368dd(595) + _0xa368dd(516)](_0x2b2108[_0xa368dd(618)]);
  _0x307f62[_0xa368dd(456)] = _0x232c8c, document[_0xa368dd(573)][_0xa368dd(546) + "d"](_0x307f62), _0x307f62[_0xa368dd(654)](), document[_0xa368dd(492) + "d"](_0x2b2108[_0xa368dd(561)]), document[_0xa368dd(573)][_0xa368dd(611) + "d"](_0x307f62), _0x2b2108[_0xa368dd(615)](alert, _0x2b2108[_0xa368dd(544)]);
}
document[_0x1244b4(479) + _0x1244b4(519)](_0x1244b4(577) + _0x1244b4(505), () => {
  const _0x24bec1 = _0x1244b4, _0x4c6f72 = {frwve: function (_0x1320a1) {
    return _0x1320a1();
  }};
  _0x4c6f72[_0x24bec1(617)](loadSchedule);
});
function copyToClipboard(_0x44b7e5) {
  const _0x321a40 = _0x1244b4, _0x8f3f86 = {xbBKW: _0x321a40(432), ICKSW: _0x321a40(435), QNqLX: function (_0x6ccc69, _0xd11a6b) {
    return _0x6ccc69(_0xd11a6b);
  }, CXREm: _0x321a40(470) + _0x321a40(590) + _0x321a40(663)}, _0x2118a4 = document[_0x321a40(595) + _0x321a40(516)](_0x8f3f86[_0x321a40(645)]);
  _0x2118a4[_0x321a40(456)] = _0x44b7e5, document[_0x321a40(573)][_0x321a40(546) + "d"](_0x2118a4), _0x2118a4[_0x321a40(654)](), document[_0x321a40(492) + "d"](_0x8f3f86[_0x321a40(661)]), document[_0x321a40(573)][_0x321a40(611) + "d"](_0x2118a4), _0x8f3f86[_0x321a40(459)](alert, _0x8f3f86[_0x321a40(489)]);
}
document[_0x1244b4(479) + _0x1244b4(519)](_0x1244b4(577) + _0x1244b4(505), () => {
  const _0x49547b = _0x1244b4, _0x2a4067 = {MaKdq: function (_0x2833d4) {
    return _0x2833d4();
  }};
  _0x2a4067[_0x49547b(457)](loadSchedule), _0x2a4067[_0x49547b(457)](startClock);
});
function _0x3634(_0x5500e3, _0x24f752) {
  const _0x441b8e = _0xe0b9();
  return _0x3634 = function (_0x546685, _0x29eb7a) {
    _0x546685 = _0x546685 - 416;
    let _0x49f7a3 = _0x441b8e[_0x546685];
    return _0x49f7a3;
  }, _0x3634(_0x5500e3, _0x24f752);
}
function startClock() {
  const _0x1a61c7 = _0x1244b4, _0x4afd95 = {QrFRm: _0x1a61c7(498), HJMLd: function (_0x5be3dd, _0x8036d0, _0x52b792) {
    return _0x5be3dd(_0x8036d0, _0x52b792);
  }}, _0x53887c = document[_0x1a61c7(481) + _0x1a61c7(471)](_0x4afd95[_0x1a61c7(539)]);
  _0x4afd95[_0x1a61c7(672)](setInterval, () => {
    const _0x37ab79 = _0x1a61c7, _0xc5cc3b = new Date;
    _0x53887c[_0x37ab79(545) + "t"] = _0xc5cc3b[_0x37ab79(565) + _0x37ab79(524)]();
  }, 1e3);
}
function loadPlayer() {
  const _0x1f9f1f = _0x1244b4, _0x1856e3 = {TIVlS: _0x1f9f1f(587), JKkIR: function (_0x215aea, _0x4a23a3) {
    return _0x215aea(_0x4a23a3);
  }, IzEhH: function (_0x7441fb, _0x5aad77) {
    return _0x7441fb < _0x5aad77;
  }, zcbOh: function (_0x41a001, _0x2f6703) {
    return _0x41a001 > _0x2f6703;
  }, YoqqG: _0x1f9f1f(620) + _0x1f9f1f(609), KSNSD: _0x1f9f1f(441), paOTN: _0x1f9f1f(598), pcIzq: _0x1f9f1f(650) + _0x1f9f1f(420), gyZBg: _0x1f9f1f(566), IOLwI: _0x1f9f1f(643), OTIDK: _0x1f9f1f(425)}, _0x192676 = document[_0x1f9f1f(481) + _0x1f9f1f(471)](_0x1856e3[_0x1f9f1f(475)])[_0x1f9f1f(456)][_0x1f9f1f(523)]();
  if (_0x1856e3[_0x1f9f1f(491)](isNaN, _0x192676) || _0x1856e3[_0x1f9f1f(623)](_0x192676[_0x1f9f1f(669)], 4) || _0x1856e3[_0x1f9f1f(553)](_0x192676[_0x1f9f1f(669)], 8)) {
    document[_0x1f9f1f(481) + _0x1f9f1f(471)](_0x1856e3[_0x1f9f1f(535)])[_0x1f9f1f(421)][_0x1f9f1f(513)] = _0x1856e3[_0x1f9f1f(575)];
    return;
  }
  _0x1856e3[_0x1f9f1f(491)](jwplayer, _0x1856e3[_0x1f9f1f(542)])[_0x1f9f1f(582)]({file: _0x1f9f1f(458) + _0x1f9f1f(637) + _0x1f9f1f(585) + _0x1f9f1f(526) + _0x1f9f1f(434) + _0x1f9f1f(547) + _0x1f9f1f(649) + _0x1f9f1f(538) + _0x1f9f1f(429) + "r_" + _0x192676 + _0x1f9f1f(664), image: _0x1856e3[_0x1f9f1f(436)], width: _0x1856e3[_0x1f9f1f(651)], height: _0x1856e3[_0x1f9f1f(487)], autostart: true}), document[_0x1f9f1f(481) + _0x1f9f1f(471)](_0x1856e3[_0x1f9f1f(535)])[_0x1f9f1f(421)][_0x1f9f1f(513)] = _0x1856e3[_0x1f9f1f(571)];
}
function toggleDarkMode() {
  const _0x5bd6ba = _0x1244b4, _0x3b1b05 = {COwPl: _0x5bd6ba(428)};
  document[_0x5bd6ba(573)][_0x5bd6ba(606)][_0x5bd6ba(570)](_0x3b1b05[_0x5bd6ba(560)]);
}
function showTutorial(_0xe69bda) {
  const _0x241a80 = _0x1244b4, _0x552433 = {NgtYB: _0x241a80(674) + _0x241a80(563), XzvKL: function (_0x5d7b28, _0x5818bd) {
    return _0x5d7b28 === _0x5818bd;
  }}, _0x1376b5 = document[_0x241a80(481) + _0x241a80(471)](_0x552433[_0x241a80(676)]), _0x18d769 = _0x241a80(604) + _0x241a80(499) + _0x241a80(659) + _0x241a80(667) + _0x241a80(597) + _0x241a80(604) + _0x241a80(608) + _0x241a80(528) + _0x241a80(665) + _0x241a80(591) + _0x241a80(427) + _0x241a80(426) + _0x241a80(502) + _0x241a80(439) + _0x241a80(666) + _0x241a80(528) + _0x241a80(653) + _0x241a80(509) + _0x241a80(548) + _0x241a80(655) + _0x241a80(540) + _0x241a80(484) + _0x241a80(619) + _0x241a80(522) + _0x241a80(461) + _0x241a80(528) + _0x241a80(433) + _0x241a80(602) + _0x241a80(613) + _0x241a80(555) + _0x241a80(552) + _0x241a80(531) + _0x241a80(635) + _0x241a80(450) + _0x241a80(586) + _0x241a80(583) + _0x241a80(558) + _0x241a80(528) + _0x241a80(430) + _0x241a80(636) + _0x241a80(638) + _0x241a80(646) + _0x241a80(639) + _0x241a80(445) + _0x241a80(480) + _0x241a80(528) + _0x241a80(665) + _0x241a80(460) + _0x241a80(496) + _0x241a80(453) + _0x241a80(596) + _0x241a80(477) + _0x241a80(534) + _0x241a80(461) + _0x241a80(469) + _0x241a80(554) + "  ", _0x4d267a = _0x241a80(604) + _0x241a80(514) + _0x241a80(600) + _0x241a80(451) + _0x241a80(532) + _0x241a80(537) + _0x241a80(530) + _0x241a80(670) + _0x241a80(528) + _0x241a80(653) + _0x241a80(631) + _0x241a80(671) + _0x241a80(569) + _0x241a80(437) + _0x241a80(506) + _0x241a80(562) + _0x241a80(461) + _0x241a80(528) + _0x241a80(433) + _0x241a80(658) + _0x241a80(495) + _0x241a80(655) + _0x241a80(490) + _0x241a80(501) + _0x241a80(599) + _0x241a80(500) + _0x241a80(530) + _0x241a80(449) + _0x241a80(417) + _0x241a80(448) + _0x241a80(605) + _0x241a80(634) + _0x241a80(452) + _0x241a80(579) + _0x241a80(431) + _0x241a80(627) + _0x241a80(567) + _0x241a80(515) + _0x241a80(604) + _0x241a80(592) + _0x241a80(541) + _0x241a80(581) + _0x241a80(564) + _0x241a80(472) + _0x241a80(474) + _0x241a80(464) + _0x241a80(528) + _0x241a80(665) + _0x241a80(603) + _0x241a80(485) + _0x241a80(476) + _0x241a80(616) + _0x241a80(437) + _0x241a80(465) + _0x241a80(444) + _0x241a80(648) + _0x241a80(604) + _0x241a80(442) + _0x241a80(483);
  _0x552433[_0x241a80(468)](_0xe69bda, "en") ? _0x1376b5[_0x241a80(568)] = _0x18d769 : _0x1376b5[_0x241a80(568)] = _0x4d267a;
}
