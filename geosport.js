const _0xec63b = _0x5dd6;
(function (_0x47d160, _0x25cbaf) {
  const _0x27303d = _0x5dd6, _0xb5bc36 = _0x47d160();
  while (true) {
    try {
      const _0x3ca656 = parseInt(_0x27303d(387)) / 1 + parseInt(_0x27303d(354)) / 2 * (parseInt(_0x27303d(429)) / 3) + -parseInt(_0x27303d(422)) / 4 * (parseInt(_0x27303d(375)) / 5) + parseInt(_0x27303d(548)) / 6 + parseInt(_0x27303d(469)) / 7 + -parseInt(_0x27303d(423)) / 8 * (parseInt(_0x27303d(401)) / 9) + parseInt(_0x27303d(372)) / 10 * (-parseInt(_0x27303d(367)) / 11);
      if (_0x3ca656 === _0x25cbaf) break; else _0xb5bc36.push(_0xb5bc36.shift());
    } catch (_0x51af63) {
      _0xb5bc36.push(_0xb5bc36.shift());
    }
  }
}(_0x4528, 302779));
let player;
const scheduleData = {ChampionsLeague: [{time: _0xec63b(281), title: _0xec63b(285) + _0xec63b(500) + _0xec63b(428) + _0xec63b(543), videoId: _0xec63b(480), date: _0xec63b(519)}, {time: _0xec63b(281), title: _0xec63b(312) + _0xec63b(453), videoId: _0xec63b(408), date: _0xec63b(519)}, {time: _0xec63b(374), title: _0xec63b(524) + _0xec63b(366) + _0xec63b(280), videoId: _0xec63b(323), date: _0xec63b(519)}, {time: _0xec63b(374), title: _0xec63b(405) + _0xec63b(318), videoId: _0xec63b(378), date: _0xec63b(519)}, {time: _0xec63b(374), title: _0xec63b(325) + _0xec63b(294), videoId: _0xec63b(360), date: _0xec63b(519)}, {time: _0xec63b(374), title: _0xec63b(389) + _0xec63b(309) + "na", videoId: _0xec63b(291), date: _0xec63b(519)}, {time: _0xec63b(374), title: _0xec63b(320) + _0xec63b(551) + _0xec63b(412), videoId: _0xec63b(379), date: _0xec63b(519)}, {time: _0xec63b(374), title: _0xec63b(413) + _0xec63b(471) + _0xec63b(542), videoId: _0xec63b(503), date: _0xec63b(519)}, {time: _0xec63b(374), title: _0xec63b(299) + _0xec63b(329) + _0xec63b(279), videoId: _0xec63b(377), date: _0xec63b(519)}], Badminton: [{time: _0xec63b(496), title: _0xec63b(444) + _0xec63b(336) + _0xec63b(545), videoId: _0xec63b(424), date: _0xec63b(352)}, {time: _0xec63b(496), title: _0xec63b(444) + _0xec63b(336) + _0xec63b(303), videoId: _0xec63b(340), date: _0xec63b(352)}, {time: _0xec63b(496), title: _0xec63b(444) + _0xec63b(336) + _0xec63b(415), videoId: _0xec63b(467), date: _0xec63b(352)}, {time: _0xec63b(496), title: _0xec63b(444) + _0xec63b(336) + _0xec63b(308), videoId: _0xec63b(458), date: _0xec63b(352)}, {time: _0xec63b(523), title: _0xec63b(290) + _0xec63b(278) + _0xec63b(474) + _0xec63b(465), videoId: _0xec63b(381), date: _0xec63b(352)}, {time: _0xec63b(523), title: _0xec63b(290) + _0xec63b(278) + _0xec63b(474) + _0xec63b(306), videoId: _0xec63b(483), date: _0xec63b(352)}]};
function loadSchedule() {
  const _0x57fb9b = _0xec63b, _0x1c8399 = {kVdlu: _0x57fb9b(541), SOeLv: _0x57fb9b(302) + _0x57fb9b(421), zXjLz: _0x57fb9b(409) + "st", moevf: _0x57fb9b(395), sHJwi: _0x57fb9b(455) + _0x57fb9b(369)}, _0x568087 = document[_0x57fb9b(390) + _0x57fb9b(427)](_0x1c8399[_0x57fb9b(505)]);
  _0x568087[_0x57fb9b(296)] = "";
  for (const _0x3bc993 in scheduleData) {
    const _0x3d7292 = document[_0x57fb9b(332) + _0x57fb9b(495)](_0x1c8399[_0x57fb9b(425)]), _0x1d7747 = document[_0x57fb9b(332) + _0x57fb9b(495)]("h3");
    _0x1d7747[_0x57fb9b(363)][_0x57fb9b(431)](_0x1c8399[_0x57fb9b(384)]), _0x1d7747[_0x57fb9b(510) + "t"] = _0x3bc993, _0x3d7292[_0x57fb9b(396) + "d"](_0x1d7747);
    const _0x1f5110 = document[_0x57fb9b(332) + _0x57fb9b(495)]("ul");
    scheduleData[_0x3bc993][_0x57fb9b(284)](_0x56fcc4 => {
      const _0x5091e9 = _0x57fb9b, _0x546e08 = document[_0x5091e9(332) + _0x5091e9(495)]("li");
      _0x546e08[_0x5091e9(267) + "te"](_0x1c8399[_0x5091e9(307)], _0x56fcc4[_0x5091e9(476)][_0x5091e9(392) + "e"]()), _0x546e08[_0x5091e9(267) + "te"](_0x1c8399[_0x5091e9(364)], _0x3bc993[_0x5091e9(392) + "e"]()), _0x546e08[_0x5091e9(296)] = _0x56fcc4[_0x5091e9(508)] + _0x5091e9(275) + _0x56fcc4[_0x5091e9(476)] + _0x5091e9(498) + _0x56fcc4[_0x5091e9(271)] + (_0x5091e9(417) + _0x5091e9(362) + _0x5091e9(411) + _0x5091e9(475) + ": ") + _0x56fcc4[_0x5091e9(370)] + (_0x5091e9(324) + _0x5091e9(362) + _0x5091e9(499) + _0x5091e9(282) + _0x5091e9(357) + _0x5091e9(330) + _0x5091e9(534) + _0x5091e9(402)) + _0x56fcc4[_0x5091e9(370)] + (_0x5091e9(494) + _0x5091e9(362) + _0x5091e9(486) + _0x5091e9(382) + _0x5091e9(304) + _0x5091e9(438) + _0x5091e9(388) + _0x5091e9(338) + _0x5091e9(362) + _0x5091e9(383)), _0x1f5110[_0x5091e9(396) + "d"](_0x546e08);
    }), _0x3d7292[_0x57fb9b(396) + "d"](_0x1f5110), _0x568087[_0x57fb9b(396) + "d"](_0x3d7292);
  }
}
function searchSchedule() {
  const _0x2b4498 = _0xec63b, _0x3e4bc3 = {wZiye: _0x2b4498(541), TkxbX: _0x2b4498(302) + _0x2b4498(421), pUEna: _0x2b4498(436), nQDFB: _0x2b4498(451) + "t", TNXYb: _0x2b4498(409) + "st"}, _0x30bc39 = document[_0x2b4498(390) + _0x2b4498(427)](_0x3e4bc3[_0x2b4498(295)])[_0x2b4498(346)][_0x2b4498(392) + "e"](), _0x595324 = document[_0x2b4498(390) + _0x2b4498(427)](_0x3e4bc3[_0x2b4498(540)]), _0xe7c387 = _0x595324[_0x2b4498(391) + _0x2b4498(327)]("li");
  _0xe7c387[_0x2b4498(284)](_0x2cb4ae => {
    const _0x2d7da3 = _0x2b4498, _0x3ff922 = _0x2cb4ae[_0x2d7da3(529) + "te"](_0x3e4bc3[_0x2d7da3(342)]), _0x5358d6 = _0x2cb4ae[_0x2d7da3(529) + "te"](_0x3e4bc3[_0x2d7da3(512)]);
    _0x3ff922[_0x2d7da3(518)](_0x30bc39) || _0x5358d6[_0x2d7da3(518)](_0x30bc39) ? _0x2cb4ae[_0x2d7da3(538)][_0x2d7da3(457)] = "" : _0x2cb4ae[_0x2d7da3(538)][_0x2d7da3(457)] = _0x3e4bc3[_0x2d7da3(435)];
  });
}
function copyToClipboard(_0x303e3a) {
  const _0x199fc4 = _0xec63b, _0x5ec8bc = {VEkXW: _0x199fc4(470), qMBLO: _0x199fc4(448), cBuDa: function (_0x44497b, _0x1a215c) {
    return _0x44497b(_0x1a215c);
  }, ZExzW: _0x199fc4(344) + _0x199fc4(400) + _0x199fc4(356)}, _0x57256a = document[_0x199fc4(332) + _0x199fc4(495)](_0x5ec8bc[_0x199fc4(506)]);
  _0x57256a[_0x199fc4(346)] = _0x303e3a, document[_0x199fc4(502)][_0x199fc4(396) + "d"](_0x57256a), _0x57256a[_0x199fc4(334)](), document[_0x199fc4(410) + "d"](_0x5ec8bc[_0x199fc4(286)]), document[_0x199fc4(502)][_0x199fc4(530) + "d"](_0x57256a), _0x5ec8bc[_0x199fc4(527)](alert, _0x5ec8bc[_0x199fc4(426)]);
}
document[_0xec63b(365) + _0xec63b(515)](_0xec63b(472) + _0xec63b(416), () => {
  const _0x4d8250 = _0xec63b, _0x35c4d7 = {XUILL: function (_0xcc93c2) {
    return _0xcc93c2();
  }};
  _0x35c4d7[_0x4d8250(319)](loadSchedule);
});
function copyToClipboard(_0xb5a098) {
  const _0x393c6f = _0xec63b, _0x37df9c = {BfCDM: _0x393c6f(470), vNArp: _0x393c6f(448), vxIjH: function (_0x16079e, _0x4d8c42) {
    return _0x16079e(_0x4d8c42);
  }, yczsc: _0x393c6f(344) + _0x393c6f(400) + _0x393c6f(356)}, _0x5802b1 = document[_0x393c6f(332) + _0x393c6f(495)](_0x37df9c[_0x393c6f(488)]);
  _0x5802b1[_0x393c6f(346)] = _0xb5a098, document[_0x393c6f(502)][_0x393c6f(396) + "d"](_0x5802b1), _0x5802b1[_0x393c6f(334)](), document[_0x393c6f(410) + "d"](_0x37df9c[_0x393c6f(399)]), document[_0x393c6f(502)][_0x393c6f(530) + "d"](_0x5802b1), _0x37df9c[_0x393c6f(337)](alert, _0x37df9c[_0x393c6f(414)]);
}
function _0x5dd6(_0x4e6663, _0x8b1e27) {
  const _0x42076c = _0x4528();
  return _0x5dd6 = function (_0x35d38b, _0x23c37d) {
    _0x35d38b = _0x35d38b - 267;
    let _0x511fe7 = _0x42076c[_0x35d38b];
    return _0x511fe7;
  }, _0x5dd6(_0x4e6663, _0x8b1e27);
}
function _0x4528() {
  const _0x193d45 = ["event sche", "2501230jZZDwP", "ng>Join th", "03:00", "15guNQFx", "ong>Aktifk", "39600", "23200", "40640", "e Dark Mod", "20010", 'i class="f', " </button>", "sHJwi", "<ul>\n     ", "g> untuk i", "99595BsAMGa", "y Video ID", "Dortmund v", "getElement", "querySelec", "toLowerCas", "meString", "toggle", "div", "appendChil", "lfyjV", "  <li><str", "vNArp", "opied to c", "135jAoLBj", "ipboard('", "appropriat", "oqdht", "Arsenal vs", "AVeHA", "xnHdO", "34870", "scheduleLi", "execComman", "      <spa", " Prague", "Juventus v", "yczsc", "- COURT 3", "Loaded", " <br>\n    ", "untuk acar", "</ul>\n    ", "rd.cn/live", "ory", "9720ZBGpVD", "290536fimZuG", "12020", "moevf", "ZExzW", "ById", "an Bratisl", "36789ALPgCp", "memuat vid", "add", "e language", "a Mengguna", "n klik tom", "pUEna", "none", "\n        ", '"></i> Cop', "     </ul>", "h tutorial", "o ID for u", "https://le", "eo.</li>\n ", "Odisha Mas", "LYqFa", "acara</str", "toLocaleTi", "copy", " bahasa</s", "     <li><", "searchInpu", "ong> dan s", "Sturm Graz", "g sesuai.<", "category-t", "a mendatan", "display", "17780", "rong> for ", "setup", "nformasi l", "WcuKd", "si Geoo Sp", "USrxF", "OURT 1", " <ul>\n    ", "17370", "g.</li>\n  ", "914004WoDyJT", "textarea", "s. Manches", "DOMContent", "bol untuk ", "s 2024 - C", "n>Video ID", "title", "alin Video", "100%", "ng>Activat", "6290", "/li>\n     ", "sJXPh", "19740", "><strong>S", "enyamanan ", "         <", ".gd/NfRUC", "BfCDM", "aVabd", "PPiDF", "dark-mode", "ebih lanju", ">Masukkan ", "')\">\n     ", "ent", "10:30", "/ballbar_", " on ", "        <b", "d vs. Slov", "o load the", "body", "21100", "player", "zXjLz", "VEkXW", "e button t", "time", "strong> an", "textConten", "py the req", "TkxbX", "length", " to Use Ge", "stener", "EkFPL", "lap</stron", "includes", "12-12-2024", "uired Vide", "RibFd", "dule</stro", "08:30", "AC Milan v", ">View the ", "li><strong", "cBuDa", "strong>Lih", "getAttribu", "removeChil", "kEJQE", "error-mess", " for visua", '="copyToCl', "mation.</l", "kan Aplika", "RRsCG", "style", "trong>Pili", "TNXYb", "data-title", "ter City", "ava", "    ", "- COURT 1", "clock", "</li>\n    ", "3114918ImiWkf", "ng> and co", "g> untuk k", "vs. Sparta", "bZTHn", "setAttribu", "ents.</li>", " ID yang d", "   <h2>How", "date", "pcoming ev", "oo Sport A", "auto", " - ", "strong> da", "l comfort.", "Tour Final", "Boys", "zvezda", "00:45", "utton clas", "e Telegram", "forEach", "Atl. Madri", "qMBLO", "</strong><", "    <li><s", "YdWxG", "BWF World ", "24180", "at jadwal ", "       <li", ". Bologna", "nQDFB", "innerHTML", "tutorialCo", ".m3u8", "Stuttgart ", "Video ID</", "   <h2>Car", "data-categ", "- COURT 2", "as fa-copy", "ram</stron", "OURT 2", "kVdlu", "- COURT 4", "s. Barcelo", "ng dengan ", "ong>Enter ", "Lille vs. ", "bo.huminbi", " group</st", "ort</h2>\n ", "more infor", " tutorial.", ". Monaco", "XUILL", "Feyenoord ", "elect the ", "trong> yan", "19080", "</span>\n  ", "Benfica vs", "iperlukan ", "torAll", "i>\n       ", "vs. Young ", 'n" onclick', "block", "createElem", " <li><stro", "select", "https://da", "ters 2024 ", "vxIjH", "\n         ", "d click th", "19040", "trim", "wZiye", "xKwsz", "Video ID c", "pp</h2>\n  ", "value", "visual.</l", "age", "grup Teleg", "ntent", " video.</l", "2024-12-11", "wEJsJ", "58CywCdU", "MjvIL", "lipboard!", 's="copy-bt', "e</strong>", "t.</li>\n  ", "10110", "an Mode Ge", "          ", "classList", "SOeLv", "addEventLi", "s. Crvena ", "11atZqHy", "ng>Bergabu", "itle", "videoId"];
  _0x4528 = function () {
    return _0x193d45;
  };
  return _0x4528();
}
document[_0xec63b(365) + _0xec63b(515)](_0xec63b(472) + _0xec63b(416), () => {
  const _0x4113b9 = _0xec63b, _0x11c067 = {MjvIL: function (_0x53b09c) {
    return _0x53b09c();
  }, wEJsJ: function (_0x321017) {
    return _0x321017();
  }};
  _0x11c067[_0x4113b9(355)](loadSchedule), _0x11c067[_0x4113b9(353)](startClock);
});
function startClock() {
  const _0x2c7946 = _0xec63b, _0x3973f2 = {xKwsz: _0x2c7946(546), PPiDF: function (_0xf8ad0b, _0x655a1f, _0x4fb4a7) {
    return _0xf8ad0b(_0x655a1f, _0x4fb4a7);
  }}, _0x19ba2a = document[_0x2c7946(390) + _0x2c7946(427)](_0x3973f2[_0x2c7946(343)]);
  _0x3973f2[_0x2c7946(490)](setInterval, () => {
    const _0x158f84 = _0x2c7946, _0x472311 = new Date;
    _0x19ba2a[_0x158f84(510) + "t"] = _0x472311[_0x158f84(447) + _0x158f84(393)]();
  }, 1e3);
}
function loadPlayer() {
  const _0x302d46 = _0xec63b, _0x52192f = {aVabd: _0x302d46(370), AVeHA: function (_0x70be21, _0x50d9f1) {
    return _0x70be21(_0x50d9f1);
  }, WcuKd: function (_0x5ae442, _0x5a0b9e) {
    return _0x5ae442 < _0x5a0b9e;
  }, EkFPL: function (_0x56b84d, _0x2ac13b) {
    return _0x56b84d > _0x2ac13b;
  }, kEJQE: _0x302d46(532) + _0x302d46(348), lfyjV: _0x302d46(331), sJXPh: function (_0x287b09, _0x3926b4) {
    return _0x287b09(_0x3926b4);
  }, bZTHn: _0x302d46(504), YdWxG: _0x302d46(335) + _0x302d46(487), oqdht: _0x302d46(478), RRsCG: _0x302d46(274), LYqFa: _0x302d46(436)}, _0x196172 = document[_0x302d46(390) + _0x302d46(427)](_0x52192f[_0x302d46(489)])[_0x302d46(346)][_0x302d46(341)]();
  if (_0x52192f[_0x302d46(406)](isNaN, _0x196172) || _0x52192f[_0x302d46(462)](_0x196172[_0x302d46(513)], 4) || _0x52192f[_0x302d46(516)](_0x196172[_0x302d46(513)], 8)) {
    document[_0x302d46(390) + _0x302d46(427)](_0x52192f[_0x302d46(531)])[_0x302d46(538)][_0x302d46(457)] = _0x52192f[_0x302d46(397)];
    return;
  }
  _0x52192f[_0x302d46(482)](jwplayer, _0x52192f[_0x302d46(552)])[_0x302d46(460)]({file: _0x302d46(442) + _0x302d46(313) + _0x302d46(420) + _0x302d46(497) + _0x196172 + _0x302d46(298), image: _0x52192f[_0x302d46(289)], width: _0x52192f[_0x302d46(404)], height: _0x52192f[_0x302d46(537)], autostart: true}), document[_0x302d46(390) + _0x302d46(427)](_0x52192f[_0x302d46(531)])[_0x302d46(538)][_0x302d46(457)] = _0x52192f[_0x302d46(445)];
}
function toggleDarkMode() {
  const _0x4efe2d = _0xec63b, _0x3774f3 = {xnHdO: _0x4efe2d(491)};
  document[_0x4efe2d(502)][_0x4efe2d(363)][_0x4efe2d(394)](_0x3774f3[_0x4efe2d(407)]);
}
function showTutorial(_0x55ee24) {
  const _0x3a0d2c = _0xec63b, _0xa6d6d8 = {USrxF: _0x3a0d2c(297) + _0x3a0d2c(350), RibFd: function (_0x3c075b, _0x4b568d) {
    return _0x3c075b === _0x4b568d;
  }}, _0x5a030f = document[_0x3a0d2c(390) + _0x3a0d2c(427)](_0xa6d6d8[_0x3a0d2c(464)]), _0x31dae4 = _0x3a0d2c(338) + _0x3a0d2c(270) + _0x3a0d2c(514) + _0x3a0d2c(273) + _0x3a0d2c(345) + _0x3a0d2c(362) + _0x3a0d2c(385) + _0x3a0d2c(362) + _0x3a0d2c(333) + _0x3a0d2c(479) + _0x3a0d2c(380) + _0x3a0d2c(358) + _0x3a0d2c(533) + _0x3a0d2c(277) + _0x3a0d2c(547) + _0x3a0d2c(362) + _0x3a0d2c(398) + _0x3a0d2c(311) + _0x3a0d2c(300) + _0x3a0d2c(509) + _0x3a0d2c(339) + _0x3a0d2c(507) + _0x3a0d2c(501) + _0x3a0d2c(351) + _0x3a0d2c(328) + _0x3a0d2c(486) + _0x3a0d2c(526) + _0x3a0d2c(525) + _0x3a0d2c(371) + _0x3a0d2c(522) + _0x3a0d2c(549) + _0x3a0d2c(511) + _0x3a0d2c(520) + _0x3a0d2c(441) + _0x3a0d2c(272) + _0x3a0d2c(268) + _0x3a0d2c(338) + _0x3a0d2c(293) + _0x3a0d2c(484) + _0x3a0d2c(321) + _0x3a0d2c(403) + _0x3a0d2c(432) + _0x3a0d2c(317) + _0x3a0d2c(287) + _0x3a0d2c(481) + _0x3a0d2c(362) + _0x3a0d2c(333) + _0x3a0d2c(373) + _0x3a0d2c(283) + _0x3a0d2c(314) + _0x3a0d2c(459) + _0x3a0d2c(316) + _0x3a0d2c(535) + _0x3a0d2c(328) + _0x3a0d2c(439) + _0x3a0d2c(437), _0x457ff0 = _0x3a0d2c(338) + _0x3a0d2c(301) + _0x3a0d2c(433) + _0x3a0d2c(536) + _0x3a0d2c(463) + _0x3a0d2c(315) + _0x3a0d2c(362) + _0x3a0d2c(466) + _0x3a0d2c(362) + _0x3a0d2c(398) + _0x3a0d2c(376) + _0x3a0d2c(361) + _0x3a0d2c(517) + _0x3a0d2c(550) + _0x3a0d2c(485) + _0x3a0d2c(347) + _0x3a0d2c(328) + _0x3a0d2c(486) + _0x3a0d2c(526) + _0x3a0d2c(493) + _0x3a0d2c(300) + _0x3a0d2c(276) + _0x3a0d2c(434) + _0x3a0d2c(473) + _0x3a0d2c(430) + _0x3a0d2c(443) + _0x3a0d2c(362) + _0x3a0d2c(450) + _0x3a0d2c(528) + _0x3a0d2c(292) + _0x3a0d2c(446) + _0x3a0d2c(452) + _0x3a0d2c(477) + _0x3a0d2c(269) + _0x3a0d2c(326) + _0x3a0d2c(418) + _0x3a0d2c(456) + _0x3a0d2c(468) + _0x3a0d2c(362) + _0x3a0d2c(288) + _0x3a0d2c(539) + _0x3a0d2c(440) + _0x3a0d2c(449) + _0x3a0d2c(322) + _0x3a0d2c(454) + _0x3a0d2c(481) + _0x3a0d2c(362) + _0x3a0d2c(333) + _0x3a0d2c(368) + _0x3a0d2c(310) + _0x3a0d2c(349) + _0x3a0d2c(305) + _0x3a0d2c(386) + _0x3a0d2c(461) + _0x3a0d2c(492) + _0x3a0d2c(359) + _0x3a0d2c(362) + _0x3a0d2c(419) + _0x3a0d2c(544);
  _0xa6d6d8[_0x3a0d2c(521)](_0x55ee24, "en") ? _0x5a030f[_0x3a0d2c(296)] = _0x31dae4 : _0x5a030f[_0x3a0d2c(296)] = _0x457ff0;
}
