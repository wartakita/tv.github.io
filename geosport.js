const _0x39d742 = _0x1b28;
(function (_0x52d28e, _0x18916b) {
  const _0x2d98be = _0x1b28, _0x37e589 = _0x52d28e();
  while (true) {
    try {
      const _0x5c29c4 = parseInt(_0x2d98be(257)) / 1 * (parseInt(_0x2d98be(140)) / 2) + -parseInt(_0x2d98be(136)) / 3 + parseInt(_0x2d98be(211)) / 4 + parseInt(_0x2d98be(234)) / 5 + -parseInt(_0x2d98be(390)) / 6 * (parseInt(_0x2d98be(125)) / 7) + parseInt(_0x2d98be(310)) / 8 + parseInt(_0x2d98be(243)) / 9;
      if (_0x5c29c4 === _0x18916b) break; else _0x37e589.push(_0x37e589.shift());
    } catch (_0x61d659) {
      _0x37e589.push(_0x37e589.shift());
    }
  }
}(_0x491d, 425057));
let player;
const scheduleData = {Badminton: [{time: _0x39d742(334), title: _0x39d742(315) + _0x39d742(239) + _0x39d742(209), videoId: _0x39d742(170), date: _0x39d742(327)}, {time: _0x39d742(334), title: _0x39d742(315) + _0x39d742(239) + _0x39d742(155), videoId: _0x39d742(265), date: _0x39d742(327)}, {time: _0x39d742(269), title: _0x39d742(212) + _0x39d742(328) + _0x39d742(363) + _0x39d742(145), videoId: _0x39d742(283), date: _0x39d742(327)}], NBA: [{time: _0x39d742(375), title: _0x39d742(335) + _0x39d742(343) + _0x39d742(242) + _0x39d742(273) + "ds", videoId: _0x39d742(205), date: _0x39d742(327)}, {time: _0x39d742(375), title: _0x39d742(128) + _0x39d742(232) + _0x39d742(235) + _0x39d742(230), videoId: _0x39d742(189), date: _0x39d742(327)}, {time: _0x39d742(397), title: _0x39d742(231) + _0x39d742(331) + _0x39d742(284) + _0x39d742(332), videoId: _0x39d742(324), date: _0x39d742(327)}, {time: _0x39d742(397), title: _0x39d742(266) + _0x39d742(297) + _0x39d742(308) + _0x39d742(251), videoId: _0x39d742(396), date: _0x39d742(327)}, {time: _0x39d742(397), title: _0x39d742(286) + _0x39d742(130) + _0x39d742(195) + _0x39d742(282) + _0x39d742(154), videoId: _0x39d742(364), date: _0x39d742(327)}, {time: _0x39d742(342), title: _0x39d742(380) + _0x39d742(389) + _0x39d742(256) + _0x39d742(148), videoId: _0x39d742(393), date: _0x39d742(327)}, {time: _0x39d742(223), title: _0x39d742(191) + _0x39d742(175) + _0x39d742(246), videoId: _0x39d742(325), date: _0x39d742(327)}, {time: _0x39d742(202), title: _0x39d742(350) + _0x39d742(176) + _0x39d742(330) + _0x39d742(306) + _0x39d742(386), videoId: _0x39d742(270), date: _0x39d742(327)}]};
function loadSchedule() {
  const _0x7d5c8f = _0x39d742, _0x50baa6 = {JFBtw: _0x7d5c8f(361), oggmA: _0x7d5c8f(161) + _0x7d5c8f(356), NPQTh: _0x7d5c8f(360) + "st", OhQla: _0x7d5c8f(385), fmqUo: _0x7d5c8f(196) + _0x7d5c8f(352)}, _0x2e1a62 = document[_0x7d5c8f(341) + _0x7d5c8f(199)](_0x50baa6[_0x7d5c8f(233)]);
  _0x2e1a62[_0x7d5c8f(336)] = "";
  for (const _0x5ce6c6 in scheduleData) {
    const _0x19dbfe = document[_0x7d5c8f(137) + _0x7d5c8f(240)](_0x50baa6[_0x7d5c8f(188)]), _0x308b64 = document[_0x7d5c8f(137) + _0x7d5c8f(240)]("h3");
    _0x308b64[_0x7d5c8f(287)][_0x7d5c8f(201)](_0x50baa6[_0x7d5c8f(392)]), _0x308b64[_0x7d5c8f(337) + "t"] = _0x5ce6c6, _0x19dbfe[_0x7d5c8f(198) + "d"](_0x308b64);
    const _0x41c343 = document[_0x7d5c8f(137) + _0x7d5c8f(240)]("ul");
    scheduleData[_0x5ce6c6][_0x7d5c8f(293)](_0x50a099 => {
      const _0xc18df0 = _0x7d5c8f, _0x46fb56 = document[_0xc18df0(137) + _0xc18df0(240)]("li");
      _0x46fb56[_0xc18df0(347) + "te"](_0x50baa6[_0xc18df0(224)], _0x50a099[_0xc18df0(193)][_0xc18df0(146) + "e"]()), _0x46fb56[_0xc18df0(347) + "te"](_0x50baa6[_0xc18df0(177)], _0x5ce6c6[_0xc18df0(146) + "e"]()), _0x46fb56[_0xc18df0(336)] = _0x50a099[_0xc18df0(220)] + _0xc18df0(376) + _0x50a099[_0xc18df0(193)] + _0xc18df0(314) + _0x50a099[_0xc18df0(182)] + (_0xc18df0(322) + _0xc18df0(387) + _0xc18df0(340) + _0xc18df0(210) + ": ") + _0x50a099[_0xc18df0(236)] + (_0xc18df0(382) + _0xc18df0(387) + _0xc18df0(357) + _0xc18df0(222) + _0xc18df0(261) + _0xc18df0(402) + _0xc18df0(194) + _0xc18df0(299)) + _0x50a099[_0xc18df0(236)] + (_0xc18df0(213) + _0xc18df0(387) + _0xc18df0(355) + _0xc18df0(121) + _0xc18df0(127) + _0xc18df0(346) + _0xc18df0(142) + _0xc18df0(316) + _0xc18df0(387) + _0xc18df0(187)), _0x41c343[_0xc18df0(198) + "d"](_0x46fb56);
    }), _0x19dbfe[_0x7d5c8f(198) + "d"](_0x41c343), _0x2e1a62[_0x7d5c8f(198) + "d"](_0x19dbfe);
  }
}
function searchSchedule() {
  const _0x15f9e4 = _0x39d742, _0x41c5f3 = {Btypr: _0x15f9e4(361), NeMht: _0x15f9e4(161) + _0x15f9e4(356), rvKWM: _0x15f9e4(298), wayGE: _0x15f9e4(383) + "t", XqwNg: _0x15f9e4(360) + "st"}, _0x59a7e9 = document[_0x15f9e4(341) + _0x15f9e4(199)](_0x41c5f3[_0x15f9e4(245)])[_0x15f9e4(301)][_0x15f9e4(146) + "e"](), _0x16f8ee = document[_0x15f9e4(341) + _0x15f9e4(199)](_0x41c5f3[_0x15f9e4(371)]), _0x357f32 = _0x16f8ee[_0x15f9e4(401) + _0x15f9e4(259)]("li");
  _0x357f32[_0x15f9e4(293)](_0x4b7626 => {
    const _0x5e57b7 = _0x15f9e4, _0x3ece3e = _0x4b7626[_0x5e57b7(281) + "te"](_0x41c5f3[_0x5e57b7(151)]), _0x5316d5 = _0x4b7626[_0x5e57b7(281) + "te"](_0x41c5f3[_0x5e57b7(165)]);
    _0x3ece3e[_0x5e57b7(139)](_0x59a7e9) || _0x5316d5[_0x5e57b7(139)](_0x59a7e9) ? _0x4b7626[_0x5e57b7(260)][_0x5e57b7(197)] = "" : _0x4b7626[_0x5e57b7(260)][_0x5e57b7(197)] = _0x41c5f3[_0x5e57b7(302)];
  });
}
function copyToClipboard(_0x28bd91) {
  const _0x2c9a11 = _0x39d742, _0x2b22fa = {bqSjA: _0x2c9a11(250), gqSqm: _0x2c9a11(394), jCnAF: function (_0xbf946f, _0xc20abc) {
    return _0xbf946f(_0xc20abc);
  }, ecWSF: _0x2c9a11(400) + _0x2c9a11(267) + _0x2c9a11(178)}, _0x46599d = document[_0x2c9a11(137) + _0x2c9a11(240)](_0x2b22fa[_0x2c9a11(162)]);
  _0x46599d[_0x2c9a11(301)] = _0x28bd91, document[_0x2c9a11(214)][_0x2c9a11(198) + "d"](_0x46599d), _0x46599d[_0x2c9a11(221)](), document[_0x2c9a11(351) + "d"](_0x2b22fa[_0x2c9a11(262)]), document[_0x2c9a11(214)][_0x2c9a11(268) + "d"](_0x46599d), _0x2b22fa[_0x2c9a11(134)](alert, _0x2b22fa[_0x2c9a11(174)]);
}
document[_0x39d742(274) + _0x39d742(309)](_0x39d742(192) + _0x39d742(237), () => {
  const _0x131b56 = _0x39d742, _0x491c55 = {dKKkw: function (_0x13f4b1) {
    return _0x13f4b1();
  }};
  _0x491c55[_0x131b56(271)](loadSchedule);
});
function _0x1b28(_0x58a18e, _0x587245) {
  const _0x302521 = _0x491d();
  return _0x1b28 = function (_0x118125, _0x1a3310) {
    _0x118125 = _0x118125 - 114;
    let _0x29be25 = _0x302521[_0x118125];
    return _0x29be25;
  }, _0x1b28(_0x58a18e, _0x587245);
}
function copyToClipboard(_0x501602) {
  const _0x5b8615 = _0x39d742, _0x2cd563 = {ipfOC: _0x5b8615(250), kMkzv: _0x5b8615(394), jOrdM: function (_0x4a060e, _0x146e74) {
    return _0x4a060e(_0x146e74);
  }, kVQhh: _0x5b8615(400) + _0x5b8615(267) + _0x5b8615(178)}, _0x3c66b8 = document[_0x5b8615(137) + _0x5b8615(240)](_0x2cd563[_0x5b8615(119)]);
  _0x3c66b8[_0x5b8615(301)] = _0x501602, document[_0x5b8615(214)][_0x5b8615(198) + "d"](_0x3c66b8), _0x3c66b8[_0x5b8615(221)](), document[_0x5b8615(351) + "d"](_0x2cd563[_0x5b8615(264)]), document[_0x5b8615(214)][_0x5b8615(268) + "d"](_0x3c66b8), _0x2cd563[_0x5b8615(321)](alert, _0x2cd563[_0x5b8615(227)]);
}
document[_0x39d742(274) + _0x39d742(309)](_0x39d742(192) + _0x39d742(237), () => {
  const _0x5c2700 = _0x39d742, _0x293a59 = {oAzfJ: function (_0x50da89) {
    return _0x50da89();
  }, ckMWp: function (_0x2473d7) {
    return _0x2473d7();
  }};
  _0x293a59[_0x5c2700(133)](loadSchedule), _0x293a59[_0x5c2700(131)](startClock);
});
function _0x491d() {
  const _0x4ac4e1 = ["Mode</stro", "ters 2024 ", "ent", "g></li>\n  ", "vs. Washin", "1897614mGHrFg", "FYPOE", "wayGE", "x Suns", "  <li><str", "dark-mode", "al.</stron", "textarea", " Nets", "YBuCZ", " events.</", "toggle", "trong>Join", "os Angeles", "1QZazrV", "100%", "torAll", "style", 's="copy-bt', "gqSqm", "FklPm", "kMkzv", "35820", "Memphis Gr", "opied to c", "removeChil", "08:30", "36100", "dKKkw", "cara menda", "gton Wizar", "addEventLi", " dan klik ", "video.</li", "       ", "n App</h2>", "ram group<", "he appropr", "getAttribu", " Angeles L", "32250", "arlotte Ho", "       <li", "Minnesota ", "classList", "LpdUC", "an untuk a", "<li><stron", "/strong> f", "trim", "forEach", "kan Aplika", "minton</h2", "ilih tutor", "izzlies vs", "none", "ipboard('", "required V", "value", "rvKWM", "k kenyaman", " Gelap</st", "trong>Acti", " Antonio S", "ideo ID fo", ". Brooklyn", "stener", "246560TIFcmd", "g>Select t", "ng> for vi", "LlcvK", " on ", "Odisha Mas", "\n         ", "qLcwx", "/ballbar_", "strong>Ent", "rong> untu", "jOrdM", " <br>\n    ", "auto", "29940", "36000", "i lebih la", "14-12-2024", "Tour Final", ".gd/NfRUC", "rs vs. San", "lls vs. Ch", "rnets", "krpyH", "14:30", "Cleveland ", "innerHTML", "textConten", "ong>View t", ">\n        ", "      <spa", "getElement", "09:00", "Cavaliers ", ".m3u8", "chedule</s", '"></i> Cop', "setAttribu", "or more in", " the butto", "Portland T", "execComman", "itle", "fATas", "the video.", "         <", "ory", "        <b", "meString", "yang sesua", "scheduleLi", "data-title", "cintaminto", "s 2024 - C", "27190", "iate langu", "rd.cn/live", "VEfMD", "njut.</li>", "length", "    <li><s", "XqwNg", "   </ul>\n ", " copy the ", "     <li><", "07:00", " - ", "si Pecinta", "age tutori", " the Teleg", "Denver Nug", "gzsTV", "</span>\n  ", "searchInpu", "D</strong>", "div", "purs", "          ", "i.</li>\n  ", "gets vs. L", "209454XmPinn", "li>\n      ", "fmqUo", "33730", "copy", "er Video I", "25590", "08:00", "LTLyl", "rt.</li>\n ", "Video ID c", "querySelec", 'n" onclick', "abung deng", " to Use Pe", "strong>Akt", "legram</st", "UfIuX", "ipfOC", "   <ul>\n  ", 'i class="f', "ifkan Mode", "vate Dark ", "block", "147tSkyVJ", "g diperluk", "as fa-copy", "Philadelph", "ong>Masukk", "Timberwolv", "ckMWp", "sual comfo", "oAzfJ", "jCnAF", "bo.huminbi", "2010519ocqGzl", "createElem", "        <l", "includes", "1229878sKYbLx", "https://le", "y Video ID", "r upcoming", "deo ID yan", "OURT 1", "toLowerCas", "toLocaleTi", " Clippers", "</li>\n    ", "error-mess", "Btypr", "k informas", "an visual.", "akers", "- COURT 2", "</strong> ", "ntent", "age", "n salin Vi", "yBsBb", "data-categ", "bqSjA", "   <h2>How", "tang.</li>", "NeMht", "   <h2>Car", "        </", "n to load ", "an Video I", "38640", "he event s", "ul>\n      ", "kXxhY", "ecWSF", "vs. Phoeni", "rail Blaze", "oggmA", "lipboard!", "ZZmsu", "al acara</", "trong>Berg", "date", "formation.", " and click", "TaZaD", "><strong>P", " </button>", "OhQla", "22770", "an grup Te", "Utah Jazz ", "DOMContent", "title", '="copyToCl', "es vs. Los", "category-t", "display", "appendChil", "ById", "vUcjC", "add", "10:00", "strong> da", "a Mengguna", "21420", "setup", "i><strong>", "player", "- COURT 1", "n>Video ID", "1840876wSUMxM", "BWF World ", "')\">\n     ", "body", "tombol unt", "tutorialCo", "    <ul>\n ", "https://da", "trong> and", "time", "select", "utton clas", "09:30", "JFBtw", "ial bahasa", "Lihat jadw", "kVQhh", "uk memuat ", "clock", " Pacers", "Chicago Bu", "ia 76ers v", "NPQTh", "2557475UPsEmE", "s. Indiana", "videoId", "Loaded"];
  _0x491d = function () {
    return _0x4ac4e1;
  };
  return _0x491d();
}
function startClock() {
  const _0x28cda0 = _0x39d742, _0x498f27 = {FklPm: _0x28cda0(229), vUcjC: function (_0x56961c, _0x3e91f4, _0x241b59) {
    return _0x56961c(_0x3e91f4, _0x241b59);
  }}, _0x16be55 = document[_0x28cda0(341) + _0x28cda0(199)](_0x498f27[_0x28cda0(263)]);
  _0x498f27[_0x28cda0(200)](setInterval, () => {
    const _0x5c2a71 = _0x28cda0, _0x381eb3 = new Date;
    _0x16be55[_0x5c2a71(337) + "t"] = _0x381eb3[_0x5c2a71(147) + _0x5c2a71(358)]();
  }, 1e3);
}
function loadPlayer() {
  const _0x53effa = _0x39d742, _0x202495 = {TaZaD: _0x53effa(236), ZZmsu: function (_0x589d61, _0x353fc2) {
    return _0x589d61(_0x353fc2);
  }, qLcwx: function (_0x2d11eb, _0x5eae85) {
    return _0x2d11eb < _0x5eae85;
  }, LlcvK: function (_0x45e6d4, _0x370586) {
    return _0x45e6d4 > _0x370586;
  }, UfIuX: _0x53effa(150) + _0x53effa(158), kXxhY: _0x53effa(124), VEfMD: function (_0x156bf7, _0x1660dd) {
    return _0x156bf7(_0x1660dd);
  }, YBuCZ: _0x53effa(208), LTLyl: _0x53effa(218) + _0x53effa(329), yBsBb: _0x53effa(258), fATas: _0x53effa(323), krpyH: _0x53effa(298)}, _0x3cb93a = document[_0x53effa(341) + _0x53effa(199)](_0x202495[_0x53effa(185)])[_0x53effa(301)][_0x53effa(292)]();
  if (_0x202495[_0x53effa(179)](isNaN, _0x3cb93a) || _0x202495[_0x53effa(317)](_0x3cb93a[_0x53effa(369)], 4) || _0x202495[_0x53effa(313)](_0x3cb93a[_0x53effa(369)], 8)) {
    document[_0x53effa(341) + _0x53effa(199)](_0x202495[_0x53effa(118)])[_0x53effa(260)][_0x53effa(197)] = _0x202495[_0x53effa(173)];
    return;
  }
  _0x202495[_0x53effa(367)](jwplayer, _0x202495[_0x53effa(252)])[_0x53effa(206)]({file: _0x53effa(141) + _0x53effa(135) + _0x53effa(366) + _0x53effa(318) + _0x3cb93a + _0x53effa(344), image: _0x202495[_0x53effa(398)], width: _0x202495[_0x53effa(160)], height: _0x202495[_0x53effa(353)], autostart: true}), document[_0x53effa(341) + _0x53effa(199)](_0x202495[_0x53effa(118)])[_0x53effa(260)][_0x53effa(197)] = _0x202495[_0x53effa(333)];
}
function toggleDarkMode() {
  const _0x327409 = _0x39d742, _0xf26a8b = {gzsTV: _0x327409(248)};
  document[_0x327409(214)][_0x327409(287)][_0x327409(254)](_0xf26a8b[_0x327409(381)]);
}
function showTutorial(_0x1c2c7c) {
  const _0x3c8cae = _0x39d742, _0x357b87 = {FYPOE: _0x3c8cae(216) + _0x3c8cae(157), LpdUC: function (_0x31822e, _0xaa8da3) {
    return _0x31822e === _0xaa8da3;
  }}, _0x3aa6e7 = document[_0x3c8cae(341) + _0x3c8cae(199)](_0x357b87[_0x3c8cae(244)]), _0x143216 = _0x3c8cae(316) + _0x3c8cae(163) + _0x3c8cae(115) + _0x3c8cae(362) + _0x3c8cae(278) + _0x3c8cae(316) + _0x3c8cae(120) + _0x3c8cae(387) + _0x3c8cae(370) + _0x3c8cae(305) + _0x3c8cae(123) + _0x3c8cae(238) + _0x3c8cae(312) + _0x3c8cae(132) + _0x3c8cae(399) + _0x3c8cae(387) + _0x3c8cae(374) + _0x3c8cae(319) + _0x3c8cae(395) + _0x3c8cae(384) + _0x3c8cae(184) + _0x3c8cae(349) + _0x3c8cae(168) + _0x3c8cae(354) + _0x3c8cae(149) + _0x3c8cae(387) + _0x3c8cae(247) + _0x3c8cae(338) + _0x3c8cae(171) + _0x3c8cae(345) + _0x3c8cae(219) + _0x3c8cae(373) + _0x3c8cae(300) + _0x3c8cae(307) + _0x3c8cae(143) + _0x3c8cae(253) + _0x3c8cae(391) + _0x3c8cae(387) + _0x3c8cae(290) + _0x3c8cae(311) + _0x3c8cae(280) + _0x3c8cae(365) + _0x3c8cae(378) + _0x3c8cae(249) + _0x3c8cae(241) + _0x3c8cae(387) + _0x3c8cae(370) + _0x3c8cae(255) + _0x3c8cae(379) + _0x3c8cae(279) + _0x3c8cae(291) + _0x3c8cae(348) + _0x3c8cae(183) + _0x3c8cae(149) + _0x3c8cae(167) + _0x3c8cae(172) + "  ", _0x32bcc1 = _0x3c8cae(316) + _0x3c8cae(166) + _0x3c8cae(204) + _0x3c8cae(294) + _0x3c8cae(377) + _0x3c8cae(295) + _0x3c8cae(339) + _0x3c8cae(217) + _0x3c8cae(387) + _0x3c8cae(374) + _0x3c8cae(116) + _0x3c8cae(122) + _0x3c8cae(304) + _0x3c8cae(320) + _0x3c8cae(303) + _0x3c8cae(153) + _0x3c8cae(149) + _0x3c8cae(387) + _0x3c8cae(247) + _0x3c8cae(129) + _0x3c8cae(169) + _0x3c8cae(384) + _0x3c8cae(275) + _0x3c8cae(215) + _0x3c8cae(228) + _0x3c8cae(276) + _0x3c8cae(339) + _0x3c8cae(138) + _0x3c8cae(207) + _0x3c8cae(226) + _0x3c8cae(180) + _0x3c8cae(203) + _0x3c8cae(159) + _0x3c8cae(144) + _0x3c8cae(126) + _0x3c8cae(289) + _0x3c8cae(272) + _0x3c8cae(164) + _0x3c8cae(316) + _0x3c8cae(285) + _0x3c8cae(186) + _0x3c8cae(296) + _0x3c8cae(225) + _0x3c8cae(156) + _0x3c8cae(359) + _0x3c8cae(388) + _0x3c8cae(387) + _0x3c8cae(370) + _0x3c8cae(181) + _0x3c8cae(114) + _0x3c8cae(190) + _0x3c8cae(117) + _0x3c8cae(320) + _0x3c8cae(152) + _0x3c8cae(326) + _0x3c8cae(368) + _0x3c8cae(316) + _0x3c8cae(372) + _0x3c8cae(277);
  _0x357b87[_0x3c8cae(288)](_0x1c2c7c, "en") ? _0x3aa6e7[_0x3c8cae(336)] = _0x143216 : _0x3aa6e7[_0x3c8cae(336)] = _0x32bcc1;
}
