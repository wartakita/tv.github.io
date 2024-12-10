const _0x40477c = _0x9f8d;
(function (_0xb781f4, _0x1511b9) {
  const _0x120653 = _0x9f8d, _0x5a818a = _0xb781f4();
  while (true) {
    try {
      const _0x7312dd = -parseInt(_0x120653(299)) / 1 * (parseInt(_0x120653(252)) / 2) + -parseInt(_0x120653(349)) / 3 * (parseInt(_0x120653(268)) / 4) + parseInt(_0x120653(534)) / 5 + -parseInt(_0x120653(503)) / 6 * (-parseInt(_0x120653(510)) / 7) + parseInt(_0x120653(422)) / 8 * (parseInt(_0x120653(485)) / 9) + parseInt(_0x120653(481)) / 10 * (parseInt(_0x120653(458)) / 11) + -parseInt(_0x120653(469)) / 12 * (-parseInt(_0x120653(516)) / 13);
      if (_0x7312dd === _0x1511b9) break; else _0x5a818a.push(_0x5a818a.shift());
    } catch (_0x40a9b7) {
      _0x5a818a.push(_0x5a818a.shift());
    }
  }
}(_0x222d, 362168));
let player;
const scheduleData = {Badminton: [{time: _0x40477c(511), title: _0x40477c(424) + _0x40477c(457) + _0x40477c(362), videoId: _0x40477c(323), date: _0x40477c(377)}, {time: _0x40477c(511), title: _0x40477c(424) + _0x40477c(457) + _0x40477c(274), videoId: _0x40477c(400), date: _0x40477c(377)}, {time: _0x40477c(511), title: _0x40477c(424) + _0x40477c(457) + _0x40477c(527), videoId: _0x40477c(293), date: _0x40477c(377)}, {time: _0x40477c(511), title: _0x40477c(424) + _0x40477c(457) + _0x40477c(258), videoId: _0x40477c(355), date: _0x40477c(377)}], Liga1Indonesia: [{time: _0x40477c(444), title: _0x40477c(287) + _0x40477c(328) + _0x40477c(465), videoId: _0x40477c(489), date: _0x40477c(377)}, {time: _0x40477c(315), title: _0x40477c(259) + _0x40477c(364) + _0x40477c(381), videoId: _0x40477c(254), date: _0x40477c(377)}], ChampionsLeague: [{time: _0x40477c(256), title: _0x40477c(427) + _0x40477c(517), videoId: _0x40477c(402), date: _0x40477c(514)}, {time: _0x40477c(256), title: _0x40477c(416) + _0x40477c(463), videoId: _0x40477c(247), date: _0x40477c(514)}, {time: _0x40477c(540), title: _0x40477c(497) + _0x40477c(445) + _0x40477c(367), videoId: _0x40477c(421), date: _0x40477c(514)}, {time: _0x40477c(540), title: _0x40477c(331) + _0x40477c(260) + _0x40477c(380), videoId: _0x40477c(255), date: _0x40477c(514)}, {time: _0x40477c(540), title: _0x40477c(305) + _0x40477c(395), videoId: _0x40477c(451), date: _0x40477c(514)}, {time: _0x40477c(540), title: _0x40477c(383) + _0x40477c(396) + _0x40477c(350), videoId: _0x40477c(368), date: _0x40477c(514)}, {time: _0x40477c(540), title: _0x40477c(512) + _0x40477c(314) + _0x40477c(452), videoId: _0x40477c(333), date: _0x40477c(514)}, {time: _0x40477c(540), title: _0x40477c(490) + _0x40477c(341), videoId: _0x40477c(441), date: _0x40477c(514)}, {time: _0x40477c(540), title: _0x40477c(373) + _0x40477c(250) + _0x40477c(386) + _0x40477c(426), videoId: _0x40477c(253), date: _0x40477c(514)}], EuropaLeague: [{time: _0x40477c(456), title: _0x40477c(378) + _0x40477c(338) + _0x40477c(346), videoId: _0x40477c(523), date: _0x40477c(514)}]};
function loadSchedule() {
  const _0x5b0f98 = _0x40477c, _0x4115bf = {SEmPf: _0x5b0f98(532), ANxda: _0x5b0f98(277) + _0x5b0f98(267), tzqTb: _0x5b0f98(539) + "st", HjfFe: _0x5b0f98(357), XDViN: _0x5b0f98(276) + _0x5b0f98(493)}, _0x4e9a57 = document[_0x5b0f98(297) + _0x5b0f98(371)](_0x4115bf[_0x5b0f98(414)]);
  _0x4e9a57[_0x5b0f98(529)] = "";
  for (const _0x5734b3 in scheduleData) {
    const _0x5552d5 = document[_0x5b0f98(519) + _0x5b0f98(466)](_0x4115bf[_0x5b0f98(302)]), _0x169f02 = document[_0x5b0f98(519) + _0x5b0f98(466)]("h3");
    _0x169f02[_0x5b0f98(448)][_0x5b0f98(449)](_0x4115bf[_0x5b0f98(324)]), _0x169f02[_0x5b0f98(298) + "t"] = _0x5734b3, _0x5552d5[_0x5b0f98(271) + "d"](_0x169f02);
    const _0x97f979 = document[_0x5b0f98(519) + _0x5b0f98(466)]("ul");
    scheduleData[_0x5734b3][_0x5b0f98(335)](_0x3fd76a => {
      const _0x2b88ce = _0x5b0f98, _0x5b679f = document[_0x2b88ce(519) + _0x2b88ce(466)]("li");
      _0x5b679f[_0x2b88ce(415) + "te"](_0x4115bf[_0x2b88ce(318)], _0x3fd76a[_0x2b88ce(436)][_0x2b88ce(408) + "e"]()), _0x5b679f[_0x2b88ce(415) + "te"](_0x4115bf[_0x2b88ce(300)], _0x5734b3[_0x2b88ce(408) + "e"]()), _0x5b679f[_0x2b88ce(529)] = _0x3fd76a[_0x2b88ce(327)] + _0x2b88ce(397) + _0x3fd76a[_0x2b88ce(436)] + _0x2b88ce(388) + _0x3fd76a[_0x2b88ce(471)] + (_0x2b88ce(342) + _0x2b88ce(382) + _0x2b88ce(477) + _0x2b88ce(413) + ": ") + _0x3fd76a[_0x2b88ce(430)] + (_0x2b88ce(242) + _0x2b88ce(382) + _0x2b88ce(356) + _0x2b88ce(246) + _0x2b88ce(392) + _0x2b88ce(249) + _0x2b88ce(535) + _0x2b88ce(337)) + _0x3fd76a[_0x2b88ce(430)] + (_0x2b88ce(470) + _0x2b88ce(382) + _0x2b88ce(379) + _0x2b88ce(266) + _0x2b88ce(507) + _0x2b88ce(376) + _0x2b88ce(443) + _0x2b88ce(384) + _0x2b88ce(382) + _0x2b88ce(303)), _0x97f979[_0x2b88ce(271) + "d"](_0x5b679f);
    }), _0x5552d5[_0x5b0f98(271) + "d"](_0x97f979), _0x4e9a57[_0x5b0f98(271) + "d"](_0x5552d5);
  }
}
function _0x222d() {
  const _0x3bfbcd = ["toggle", "ilbao", "length", "Loaded", "4749AYPLdh", "porting CP", "n klik tom", "       <li", "tvGnu", "pcoming ev", "38320", "        <b", "div", "iARDP", "eo.</li>\n ", "trong>Pili", "lap</stron", "- COURT 1", "setup", "karta vs. ", "<ul>\n     ", "https://12", "drid", "16390", "elect the ", "ng>Bergabu", "ById", "auto", "Shakhtar D", "</ul>\n    ", "lipboard!", '"></i> Cop', "10-12-2024", "Fenerbahce", "         <", " Inter", "Borneo", "          ", "Club Brugg", "\n         ", "appropriat", " Bayern Mu", "</strong><", " on ", "style", "iqZAr", "xrYfg", 's="copy-bt', "mation.</l", ".net/play1", "PSV", "e KV vs. S", " - ", "     <li><", "ong>Enter ", "25790", "torAll", "10520", "jlijv", "\n        ", "more infor", " video.</l", "event sche", "toLowerCas", " to Use Ge", "acara</str", "opied to c", "PrzQE", "n>Video ID", "tzqTb", "setAttribu", "Girona vs.", " bahasa</s", "e Telegram", "querySelec", "    <li><s", "36600", "8MZKICG", "nformasi l", "Odisha Mas", "ng> and co", "nich", "D. Zagreb ", "RJXhI", "o load the", "videoId", "uired Vide", "select", "vevSL", "><strong>S", "   <h2>Car", "title", "sCdxm", "qWPOm", "dule</stro", "KBMWT", "36160", "e button t", "y Video ID", "15:30", "s. Real Ma", "enyamanan ", "DgjLh", "classList", "add", "ng>Activat", "26740", " Villa", "a6ee02e8e6", "oo Sport A", "block", "22:30", "ters 2024 ", "110704VxPnFm", "ort</h2>\n ", "lILlB", "vRjPT", "stener", " Liverpool", "jWkVT", "men Padang", "ent", "MXPtw", "addEventLi", "8940JwVsvK", "')\">\n     ", "date", "a001a90a8c", "clock", "g> untuk k", "WynBM", "toLocaleTi", "      <spa", "   <h2>How", "rong> for ", "ng dengan ", "170iLaLoe", "strong>Lih", "a mendatan", "trong> yan", "2025315nWTNHd", "grup Teleg", "    ", "execComman", "26150", "Salzburg v", "py the req", "100%", "itle", " group</st", "strong> an", "dark-mode", "Atalanta v", "NCemr", "si Geoo Sp", "ram</stron", "e Dark Mod", "error-mess", "6AbUiTz", "player", "g sesuai.<", ".gd/NfRUC", "as fa-copy", "ents.</li>", "45927f7710", "1919561DOiVBX", "11:30", "RB Leipzig", "meString", "11-12-2024", "BHXUD", "3198YYkPzR", "vs. Celtic", "d click th", "createElem", "TEQAl", "textarea", "removeChil", "9840", "none", " for visua", "copy", "- COURT 3", "searchInpu", "innerHTML", "</li>\n    ", "Iisuq", "data-title", "g> untuk i", "224165oauHre", '="copyToCl', "BNQcz", "age", "nm.hnyongs", "scheduleLi", "03:00", "</span>\n  ", "ng>Join th", "Video ID</", "ong>Aktifk", "utton clas", "13830", "     </ul>", 'n" onclick', "onetsk vs.", "strong> da", "29924KkQOGy", "38050", "9210", "29290", "00:45", "li><strong", "- COURT 4", "Persija Ja", "rkusen vs.", "g.</li>\n  ", "t.</li>\n  ", "trim", "alin Video", " <li><stro", 'i class="f', "ory", "788bRbhaJ", "value", "dfDlp", "appendChil", "e language", "VBfrL", "- COURT 2", "hun.cn/liv", "category-t", "data-categ", "DOMContent", "an Mode Ge", "Video ID c", "getAttribu", ">Masukkan ", "ntent", "kan Aplika", "TkDuV", "a Mengguna", "Madura Uni", "visual.</l", "o ID for u", "body", "h tutorial", "untuk acar", "30400", "YlYjH", "display", ".v.smtcdns", "getElement", "textConten", "15xjcpdx", "ANxda", "memuat vid", "HjfFe", " </button>", "IijVh", "Brest vs. ", "bol untuk ", "at jadwal ", "  <li><str", ".m3u8", "/li>\n     ", "ong> dan s", "i>\n       ", " tutorial.", " vs. Aston", "19:00", "iWPLB", "qXaHX", "SEmPf", ">View the ", "l comfort.", "https://da", "iperlukan ", "22880", "XDViN", "ebih lanju", "tCIkV", "time", "ted vs. Se", " ID yang d", "pp</h2>\n  ", "Bayer Leve", "bxKhn", "30600", "e</strong>", "forEach", "pGgWw", "ipboard('", " vs. Ath B", "includes", "e/ballbar_", "s. PSG", " <br>\n    ", "tutorialCo", " <ul>\n    "];
  _0x222d = function () {
    return _0x3bfbcd;
  };
  return _0x222d();
}
function _0x9f8d(_0x3d2465, _0x38a574) {
  const _0x48f8b6 = _0x222d();
  return _0x9f8d = function (_0x14312d, _0x1281f1) {
    _0x14312d = _0x14312d - 242;
    let _0x42bc56 = _0x48f8b6[_0x14312d];
    return _0x42bc56;
  }, _0x9f8d(_0x3d2465, _0x38a574);
}
function searchSchedule() {
  const _0x493bc2 = _0x40477c, _0x1d2fb1 = {iqZAr: _0x493bc2(532), pGgWw: _0x493bc2(277) + _0x493bc2(267), bxKhn: _0x493bc2(524), YlYjH: _0x493bc2(528) + "t", VBfrL: _0x493bc2(539) + "st"}, _0x19ae9e = document[_0x493bc2(297) + _0x493bc2(371)](_0x1d2fb1[_0x493bc2(294)])[_0x493bc2(269)][_0x493bc2(408) + "e"](), _0x58e267 = document[_0x493bc2(297) + _0x493bc2(371)](_0x1d2fb1[_0x493bc2(273)]), _0x31a5e0 = _0x58e267[_0x493bc2(419) + _0x493bc2(401)]("li");
  _0x31a5e0[_0x493bc2(335)](_0x1dd47a => {
    const _0x27fb48 = _0x493bc2, _0x4d8661 = _0x1dd47a[_0x27fb48(281) + "te"](_0x1d2fb1[_0x27fb48(390)]), _0x39c4c2 = _0x1dd47a[_0x27fb48(281) + "te"](_0x1d2fb1[_0x27fb48(336)]);
    _0x4d8661[_0x27fb48(339)](_0x19ae9e) || _0x39c4c2[_0x27fb48(339)](_0x19ae9e) ? _0x1dd47a[_0x27fb48(389)][_0x27fb48(295)] = "" : _0x1dd47a[_0x27fb48(389)][_0x27fb48(295)] = _0x1d2fb1[_0x27fb48(332)];
  });
}
function copyToClipboard(_0xb2a561) {
  const _0x1be48b = _0x40477c, _0x542df7 = {RJXhI: _0x1be48b(521), vRjPT: _0x1be48b(526), dfDlp: function (_0x1d2335, _0x414928) {
    return _0x1d2335(_0x414928);
  }, PrzQE: _0x1be48b(280) + _0x1be48b(411) + _0x1be48b(375)}, _0x3979e2 = document[_0x1be48b(519) + _0x1be48b(466)](_0x542df7[_0x1be48b(428)]);
  _0x3979e2[_0x1be48b(269)] = _0xb2a561, document[_0x1be48b(290)][_0x1be48b(271) + "d"](_0x3979e2), _0x3979e2[_0x1be48b(432)](), document[_0x1be48b(488) + "d"](_0x542df7[_0x1be48b(461)]), document[_0x1be48b(290)][_0x1be48b(522) + "d"](_0x3979e2), _0x542df7[_0x1be48b(270)](alert, _0x542df7[_0x1be48b(412)]);
}
document[_0x40477c(468) + _0x40477c(462)](_0x40477c(278) + _0x40477c(348), () => {
  const _0x56cbb6 = _0x40477c, _0x34c2f2 = {xrYfg: function (_0x1bd8f0) {
    return _0x1bd8f0();
  }};
  _0x34c2f2[_0x56cbb6(391)](loadSchedule);
});
function copyToClipboard(_0x284c23) {
  const _0x16012c = _0x40477c, _0xf7ad21 = {IijVh: _0x16012c(521), jWkVT: _0x16012c(526), tCIkV: function (_0x4f9858, _0x448108) {
    return _0x4f9858(_0x448108);
  }, lILlB: _0x16012c(280) + _0x16012c(411) + _0x16012c(375)}, _0x15749b = document[_0x16012c(519) + _0x16012c(466)](_0xf7ad21[_0x16012c(304)]);
  _0x15749b[_0x16012c(269)] = _0x284c23, document[_0x16012c(290)][_0x16012c(271) + "d"](_0x15749b), _0x15749b[_0x16012c(432)](), document[_0x16012c(488) + "d"](_0xf7ad21[_0x16012c(464)]), document[_0x16012c(290)][_0x16012c(522) + "d"](_0x15749b), _0xf7ad21[_0x16012c(326)](alert, _0xf7ad21[_0x16012c(460)]);
}
document[_0x40477c(468) + _0x40477c(462)](_0x40477c(278) + _0x40477c(348), () => {
  const _0x16fce1 = _0x40477c, _0x3ef87f = {Iisuq: function (_0x30647e) {
    return _0x30647e();
  }};
  _0x3ef87f[_0x16fce1(531)](loadSchedule), _0x3ef87f[_0x16fce1(531)](startClock);
});
function startClock() {
  const _0x267428 = _0x40477c, _0x354a2c = {vevSL: _0x267428(473), NCemr: function (_0x545020, _0x1826e3, _0x58b30e) {
    return _0x545020(_0x1826e3, _0x58b30e);
  }}, _0x190f45 = document[_0x267428(297) + _0x267428(371)](_0x354a2c[_0x267428(433)]);
  _0x354a2c[_0x267428(498)](setInterval, () => {
    const _0xaf5d8 = _0x267428, _0x25a204 = new Date;
    _0x190f45[_0xaf5d8(298) + "t"] = _0x25a204[_0xaf5d8(476) + _0xaf5d8(513)]();
  }, 1e3);
}
function loadPlayer() {
  const _0x3014f0 = _0x40477c, _0x69f49f = {TEQAl: _0x3014f0(430), sCdxm: function (_0x253aec, _0x498ac5) {
    return _0x253aec(_0x498ac5);
  }, MXPtw: function (_0x3f1bfd, _0x97a653) {
    return _0x3f1bfd < _0x97a653;
  }, KBMWT: function (_0x3e8ca4, _0x955f9f) {
    return _0x3e8ca4 > _0x955f9f;
  }, BNQcz: _0x3014f0(502) + _0x3014f0(537), TkDuV: _0x3014f0(455), jlijv: function (_0x310431, _0x36bd02) {
    return _0x310431(_0x36bd02);
  }, qWPOm: _0x3014f0(504), qXaHX: _0x3014f0(321) + _0x3014f0(506), tvGnu: _0x3014f0(492), WynBM: _0x3014f0(372), iWPLB: _0x3014f0(524)}, _0x400f4c = document[_0x3014f0(297) + _0x3014f0(371)](_0x69f49f[_0x3014f0(520)])[_0x3014f0(269)][_0x3014f0(263)]();
  if (_0x69f49f[_0x3014f0(437)](isNaN, _0x400f4c) || _0x69f49f[_0x3014f0(467)](_0x400f4c[_0x3014f0(347)], 4) || _0x69f49f[_0x3014f0(440)](_0x400f4c[_0x3014f0(347)], 8)) {
    document[_0x3014f0(297) + _0x3014f0(371)](_0x69f49f[_0x3014f0(536)])[_0x3014f0(389)][_0x3014f0(295)] = _0x69f49f[_0x3014f0(285)];
    return;
  }
  _0x69f49f[_0x3014f0(403)](jwplayer, _0x69f49f[_0x3014f0(438)])[_0x3014f0(363)]({file: _0x3014f0(366) + _0x3014f0(472) + _0x3014f0(509) + _0x3014f0(453) + _0x3014f0(296) + _0x3014f0(394) + _0x3014f0(538) + _0x3014f0(275) + _0x3014f0(340) + _0x400f4c + _0x3014f0(309), image: _0x69f49f[_0x3014f0(317)], width: _0x69f49f[_0x3014f0(353)], height: _0x69f49f[_0x3014f0(475)], autostart: true}), document[_0x3014f0(297) + _0x3014f0(371)](_0x69f49f[_0x3014f0(536)])[_0x3014f0(389)][_0x3014f0(295)] = _0x69f49f[_0x3014f0(316)];
}
function toggleDarkMode() {
  const _0x81fdfa = _0x40477c, _0x897605 = {iARDP: _0x81fdfa(496)};
  document[_0x81fdfa(290)][_0x81fdfa(448)][_0x81fdfa(345)](_0x897605[_0x81fdfa(358)]);
}
function showTutorial(_0x33c36c) {
  const _0x1abb5a = _0x40477c, _0x494e83 = {BHXUD: _0x1abb5a(343) + _0x1abb5a(283), DgjLh: function (_0x443b2a, _0x44c2ee) {
    return _0x443b2a === _0x44c2ee;
  }}, _0x3d103e = document[_0x1abb5a(297) + _0x1abb5a(371)](_0x494e83[_0x1abb5a(515)]), _0xfb34bd = _0x1abb5a(384) + _0x1abb5a(478) + _0x1abb5a(409) + _0x1abb5a(454) + _0x1abb5a(330) + _0x1abb5a(382) + _0x1abb5a(365) + _0x1abb5a(382) + _0x1abb5a(265) + _0x1abb5a(450) + _0x1abb5a(501) + _0x1abb5a(334) + _0x1abb5a(525) + _0x1abb5a(320) + _0x1abb5a(530) + _0x1abb5a(382) + _0x1abb5a(308) + _0x1abb5a(399) + _0x1abb5a(244) + _0x1abb5a(495) + _0x1abb5a(518) + _0x1abb5a(442) + _0x1abb5a(429) + _0x1abb5a(406) + _0x1abb5a(312) + _0x1abb5a(379) + _0x1abb5a(257) + _0x1abb5a(319) + _0x1abb5a(407) + _0x1abb5a(439) + _0x1abb5a(425) + _0x1abb5a(491) + _0x1abb5a(431) + _0x1abb5a(289) + _0x1abb5a(354) + _0x1abb5a(508) + _0x1abb5a(384) + _0x1abb5a(352) + _0x1abb5a(434) + _0x1abb5a(369) + _0x1abb5a(385) + _0x1abb5a(272) + _0x1abb5a(313) + _0x1abb5a(387) + _0x1abb5a(310) + _0x1abb5a(382) + _0x1abb5a(265) + _0x1abb5a(243) + _0x1abb5a(418) + _0x1abb5a(494) + _0x1abb5a(479) + _0x1abb5a(405) + _0x1abb5a(393) + _0x1abb5a(312) + _0x1abb5a(248) + _0x1abb5a(404), _0x4cb64a = _0x1abb5a(384) + _0x1abb5a(435) + _0x1abb5a(286) + _0x1abb5a(284) + _0x1abb5a(499) + _0x1abb5a(459) + _0x1abb5a(382) + _0x1abb5a(344) + _0x1abb5a(382) + _0x1abb5a(308) + _0x1abb5a(245) + _0x1abb5a(279) + _0x1abb5a(361) + _0x1abb5a(474) + _0x1abb5a(446) + _0x1abb5a(288) + _0x1abb5a(312) + _0x1abb5a(379) + _0x1abb5a(257) + _0x1abb5a(282) + _0x1abb5a(244) + _0x1abb5a(251) + _0x1abb5a(351) + _0x1abb5a(306) + _0x1abb5a(301) + _0x1abb5a(359) + _0x1abb5a(382) + _0x1abb5a(398) + _0x1abb5a(482) + _0x1abb5a(307) + _0x1abb5a(410) + _0x1abb5a(311) + _0x1abb5a(264) + _0x1abb5a(329) + _0x1abb5a(322) + _0x1abb5a(292) + _0x1abb5a(483) + _0x1abb5a(261) + _0x1abb5a(382) + _0x1abb5a(420) + _0x1abb5a(360) + _0x1abb5a(291) + _0x1abb5a(417) + _0x1abb5a(484) + _0x1abb5a(505) + _0x1abb5a(310) + _0x1abb5a(382) + _0x1abb5a(265) + _0x1abb5a(370) + _0x1abb5a(480) + _0x1abb5a(486) + _0x1abb5a(500) + _0x1abb5a(533) + _0x1abb5a(423) + _0x1abb5a(325) + _0x1abb5a(262) + _0x1abb5a(382) + _0x1abb5a(374) + _0x1abb5a(487);
  _0x494e83[_0x1abb5a(447)](_0x33c36c, "en") ? _0x3d103e[_0x1abb5a(529)] = _0xfb34bd : _0x3d103e[_0x1abb5a(529)] = _0x4cb64a;
}
