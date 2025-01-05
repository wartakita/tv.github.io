const _0x186078 = _0x11a7;
(function (_0x5da85f, _0x4a6a39) {
  const _0x149226 = _0x11a7, _0x28d848 = _0x5da85f();
  while (true) {
    try {
      const _0x2b32c1 = parseInt(_0x149226(600)) / 1 * (parseInt(_0x149226(352)) / 2) + parseInt(_0x149226(545)) / 3 + -parseInt(_0x149226(649)) / 4 * (parseInt(_0x149226(660)) / 5) + -parseInt(_0x149226(579)) / 6 + -parseInt(_0x149226(567)) / 7 * (parseInt(_0x149226(489)) / 8) + parseInt(_0x149226(505)) / 9 * (parseInt(_0x149226(418)) / 10) + parseInt(_0x149226(372)) / 11;
      if (_0x2b32c1 === _0x4a6a39) break; else _0x28d848.push(_0x28d848.shift());
    } catch (_0x10615d) {
      _0x28d848.push(_0x28d848.shift());
    }
  }
}(_0x4581, 384713));
function _0x11a7(_0x2dcab6, _0x278cb9) {
  const _0x2e12ec = _0x4581();
  return _0x11a7 = function (_0x481f08, _0x351a80) {
    _0x481f08 = _0x481f08 - 336;
    let _0x3237bf = _0x2e12ec[_0x481f08];
    return _0x3237bf;
  }, _0x11a7(_0x2dcab6, _0x278cb9);
}
function formatDate(_0x4fd73d) {
  const _0x8cd19c = _0x11a7, _0xb17ba5 = {JWdMY: _0x8cd19c(454), pBkmb: _0x8cd19c(421), iBbDo: _0x8cd19c(460), xwOmf: _0x8cd19c(446), ZsAuQ: _0x8cd19c(560), etFeH: _0x8cd19c(403), wOlHh: _0x8cd19c(586), HhUDs: _0x8cd19c(507), juDAl: _0x8cd19c(646), qJiMI: _0x8cd19c(345), TUmgU: _0x8cd19c(506), zZXiO: _0x8cd19c(658)}, _0x452c5b = [_0xb17ba5[_0x8cd19c(571)], _0xb17ba5[_0x8cd19c(638)], _0xb17ba5[_0x8cd19c(342)], _0xb17ba5[_0x8cd19c(559)], _0xb17ba5[_0x8cd19c(543)], _0xb17ba5[_0x8cd19c(530)], _0xb17ba5[_0x8cd19c(611)], _0xb17ba5[_0x8cd19c(466)], _0xb17ba5[_0x8cd19c(445)], _0xb17ba5[_0x8cd19c(654)], _0xb17ba5[_0x8cd19c(378)], _0xb17ba5[_0x8cd19c(589)]], _0x519d6e = new Date(_0x4fd73d), _0x50d4b6 = _0x519d6e[_0x8cd19c(539)](), _0x234c84 = _0x452c5b[_0x519d6e[_0x8cd19c(419)]()], _0x21a9f8 = _0x519d6e[_0x8cd19c(592) + "r"]();
  return _0x50d4b6 + " " + _0x234c84 + " " + _0x21a9f8;
}
async function loadMatches() {
  const _0x4fb21a = _0x11a7, _0x588a7e = {RneMo: _0x4fb21a(369), JXxTw: _0x4fb21a(405), vgoMJ: _0x4fb21a(601), BRvhu: function (_0xeb327) {
    return _0xeb327();
  }, rOvUZ: function (_0x186c59, _0x4ece21) {
    return _0x186c59(_0x4ece21);
  }, QXnhU: function (_0x1ff9fb) {
    return _0x1ff9fb();
  }, JFdGX: function (_0x3fa82d, _0x468c7a, _0x2fe203) {
    return _0x3fa82d(_0x468c7a, _0x2fe203);
  }, LqCcq: _0x4fb21a(603) + _0x4fb21a(590) + _0x4fb21a(430), cCrIr: _0x4fb21a(487), gygIP: _0x4fb21a(602), UxZiK: _0x4fb21a(440)};
  try {
    document[_0x4fb21a(406) + _0x4fb21a(388)](_0x588a7e[_0x4fb21a(517)])[_0x4fb21a(639)][_0x4fb21a(591)] = _0x588a7e[_0x4fb21a(656)];
    const _0x3b1792 = sessionStorage[_0x4fb21a(554)](_0x588a7e[_0x4fb21a(380)]), _0x4c1f65 = _0x3b1792 ? JSON[_0x4fb21a(366)](_0x3b1792) : await _0x588a7e[_0x4fb21a(511)](fetchMatches);
    !_0x3b1792 && sessionStorage[_0x4fb21a(367)](_0x588a7e[_0x4fb21a(380)], JSON[_0x4fb21a(653)](_0x4c1f65)), _0x588a7e[_0x4fb21a(436)](renderMatches, _0x4c1f65), _0x588a7e[_0x4fb21a(436)](populateFilters, _0x4c1f65), _0x588a7e[_0x4fb21a(511)](filterMatches), _0x588a7e[_0x4fb21a(459)](updateCountdown), _0x588a7e[_0x4fb21a(346)](setInterval, updateCountdown, 1e3);
  } catch (_0x3f02f0) {
    console[_0x4fb21a(389)](_0x588a7e[_0x4fb21a(399)], _0x3f02f0), document[_0x4fb21a(406) + _0x4fb21a(388)](_0x588a7e[_0x4fb21a(426)])[_0x4fb21a(417)][_0x4fb21a(409)](_0x588a7e[_0x4fb21a(497)]);
  } finally {
    document[_0x4fb21a(406) + _0x4fb21a(388)](_0x588a7e[_0x4fb21a(517)])[_0x4fb21a(639)][_0x4fb21a(591)] = _0x588a7e[_0x4fb21a(631)];
  }
}
async function fetchMatches() {
  const _0xd8f85c = _0x11a7, _0x440322 = {nNWFW: function (_0x4450a5, _0x47b059) {
    return _0x4450a5(_0x47b059);
  }, kUFcP: _0xd8f85c(416) + _0xd8f85c(339) + _0xd8f85c(580) + _0xd8f85c(428) + _0xd8f85c(537) + _0xd8f85c(411), EyLyH: _0xd8f85c(364) + _0xd8f85c(618) + _0xd8f85c(479)}, _0x3851ab = await _0x440322[_0xd8f85c(485)](fetch, _0x440322[_0xd8f85c(661)]);
  if (!_0x3851ab.ok) throw new Error(_0x440322[_0xd8f85c(412)]);
  return await _0x3851ab[_0xd8f85c(613)]();
}
function renderMatches(_0x28ad6f) {
  const _0x49945b = _0x11a7, _0x3d8035 = {ODDCY: function (_0x5ab9fe, _0x5b26e1) {
    return _0x5ab9fe >= _0x5b26e1;
  }, DKkuZ: function (_0x12cf8a, _0x2a8b66) {
    return _0x12cf8a <= _0x2a8b66;
  }, TFDHY: function (_0x2d09cf, _0x2a84ca) {
    return _0x2d09cf + _0x2a84ca;
  }, FGXqu: function (_0x2898a0, _0x1c664c) {
    return _0x2898a0 * _0x1c664c;
  }, wOwtO: function (_0x20c9af, _0x3d1c22) {
    return _0x20c9af * _0x3d1c22;
  }, kkFCc: function (_0x105dc1, _0x5333ba) {
    return _0x105dc1 * _0x5333ba;
  }, drYbb: function (_0x9b31fe, _0x1b634c) {
    return _0x9b31fe + _0x1b634c;
  }, IBhfV: function (_0x2d755f, _0x4d17c8) {
    return _0x2d755f * _0x4d17c8;
  }, ZkWcx: function (_0x12a2ae, _0x52a81d) {
    return _0x12a2ae * _0x52a81d;
  }, dsOFt: function (_0x47366f, _0x24b04b) {
    return _0x47366f * _0x24b04b;
  }, EoTXu: function (_0x523ec9, _0x94c3ac) {
    return _0x523ec9 && _0x94c3ac;
  }, mNqim: function (_0x2a3882, _0x4c7169) {
    return _0x2a3882 && _0x4c7169;
  }, hWpfB: function (_0x82a904, _0x88b32) {
    return _0x82a904 >= _0x88b32;
  }, gqeel: function (_0x5061f6, _0xd0aa0b) {
    return _0x5061f6 <= _0xd0aa0b;
  }, OXoCl: function (_0x5f44ea, _0x117f40) {
    return _0x5f44ea + _0x117f40;
  }, dwntx: function (_0x562ec6, _0x33b972) {
    return _0x562ec6 * _0x33b972;
  }, ojYSJ: _0x49945b(407), lYTrg: _0x49945b(492) + _0x49945b(561), CbMQV: _0x49945b(499), zeMkC: _0x49945b(353) + "e", IoUSN: _0x49945b(461), sCZLM: _0x49945b(548) + "s", rFBOn: _0x49945b(514), ZQxYr: _0x49945b(641), iDfvG: function (_0x2be5c5, _0x18a41d) {
    return _0x2be5c5(_0x18a41d);
  }, IQLqJ: _0x49945b(394) + _0x49945b(578) + _0x49945b(563) + _0x49945b(427) + _0x49945b(637) + _0x49945b(508) + _0x49945b(410) + _0x49945b(503), YZnKv: _0x49945b(655) + _0x49945b(587)}, _0x299553 = document[_0x49945b(406) + _0x49945b(388)](_0x3d8035[_0x49945b(547)]);
  _0x299553[_0x49945b(447)] = "", _0x28ad6f[_0x49945b(582)]((_0x22713c, _0x42b51b) => {
    const _0x5a5794 = _0x49945b, _0x19b927 = new Date, _0x3bdb22 = new Date(_0x22713c[_0x5a5794(343)] + "T" + _0x22713c[_0x5a5794(584)]), _0x3ff646 = new Date(_0x42b51b[_0x5a5794(343)] + "T" + _0x42b51b[_0x5a5794(584)]), _0x40f174 = _0x3d8035[_0x5a5794(481)](_0x19b927, _0x3bdb22) && _0x3d8035[_0x5a5794(534)](_0x19b927, new Date(_0x3d8035[_0x5a5794(361)](_0x3bdb22[_0x5a5794(474)](), _0x3d8035[_0x5a5794(354)](_0x3d8035[_0x5a5794(415)](_0x3d8035[_0x5a5794(431)](2, 60), 60), 1e3)))), _0x1f25aa = _0x3d8035[_0x5a5794(481)](_0x19b927, _0x3ff646) && _0x3d8035[_0x5a5794(534)](_0x19b927, new Date(_0x3d8035[_0x5a5794(622)](_0x3ff646[_0x5a5794(474)](), _0x3d8035[_0x5a5794(607)](_0x3d8035[_0x5a5794(500)](_0x3d8035[_0x5a5794(476)](2, 60), 60), 1e3))));
    if (_0x3d8035[_0x5a5794(363)](_0x40f174, !_0x1f25aa)) return -1;
    if (_0x3d8035[_0x5a5794(538)](!_0x40f174, _0x1f25aa)) return 1;
    return 0;
  }), _0x28ad6f[_0x49945b(443)](_0x3b63f6 => {
    const _0x1aab3b = _0x49945b, _0x4d04e2 = _0x3b63f6[_0x1aab3b(387)] || _0x1aab3b(483) + _0x1aab3b(438) + _0x1aab3b(513) + _0x1aab3b(598) + "_" + _0x3b63f6[_0x1aab3b(634)] + _0x1aab3b(365), _0x490787 = new Date, _0x482f56 = new Date(_0x3b63f6[_0x1aab3b(343)] + "T" + _0x3b63f6[_0x1aab3b(584)]), _0x5b7622 = _0x3d8035[_0x1aab3b(535)](_0x490787, _0x482f56) && _0x3d8035[_0x1aab3b(382)](_0x490787, new Date(_0x3d8035[_0x1aab3b(629)](_0x482f56[_0x1aab3b(474)](), _0x3d8035[_0x1aab3b(431)](_0x3d8035[_0x1aab3b(500)](_0x3d8035[_0x1aab3b(615)](2, 60), 60), 1e3)))), _0x519dc9 = document[_0x1aab3b(457) + _0x1aab3b(359)](_0x3d8035[_0x1aab3b(414)]);
    _0x519dc9[_0x1aab3b(662)] = _0x3d8035[_0x1aab3b(512)], _0x519dc9[_0x1aab3b(577) + "te"](_0x3d8035[_0x1aab3b(520)], _0x3b63f6[_0x1aab3b(343)][_0x1aab3b(451) + "e"]()), _0x519dc9[_0x1aab3b(577) + "te"](_0x3d8035[_0x1aab3b(496)], _0x3b63f6[_0x1aab3b(469)][_0x1aab3b(451) + "e"]()), _0x519dc9[_0x1aab3b(577) + "te"](_0x3d8035[_0x1aab3b(386)], _0x3b63f6[_0x1aab3b(650)][_0x1aab3b(451) + "e"]()), _0x519dc9[_0x1aab3b(577) + "te"](_0x3d8035[_0x1aab3b(398)], _0x5b7622 ? _0x3d8035[_0x1aab3b(541)] : _0x3d8035[_0x1aab3b(645)]);
    const _0xdbc979 = !_0x5b7622 ? _0x1aab3b(394) + _0x1aab3b(465) + _0x1aab3b(444) + _0x1aab3b(455) + _0x3b63f6[_0x1aab3b(343)] + "T" + _0x3b63f6[_0x1aab3b(584)] + (_0x1aab3b(432) + _0x1aab3b(391) + _0x1aab3b(495)) : "";
    _0x519dc9[_0x1aab3b(447)] = _0x1aab3b(341) + _0x1aab3b(400) + _0x1aab3b(619) + _0x1aab3b(542) + _0x1aab3b(657) + _0x1aab3b(400) + _0x1aab3b(400) + _0x1aab3b(394) + _0x1aab3b(627) + _0x1aab3b(563) + _0x1aab3b(435) + _0x1aab3b(453) + _0x1aab3b(448) + _0x3d8035[_0x1aab3b(515)](formatDate, _0x3b63f6[_0x1aab3b(343)]) + (_0x1aab3b(533) + _0x1aab3b(400) + _0x1aab3b(400) + _0x1aab3b(555) + _0x1aab3b(614) + _0x1aab3b(562) + _0x1aab3b(551) + _0x1aab3b(644) + " ") + _0x3b63f6[_0x1aab3b(650)] + (_0x1aab3b(533) + _0x1aab3b(400) + _0x1aab3b(400) + _0x1aab3b(555) + _0x1aab3b(371) + _0x1aab3b(424) + _0x1aab3b(576) + _0x1aab3b(527) + _0x1aab3b(392)) + _0x3b63f6[_0x1aab3b(584)] + _0x1aab3b(632) + _0x3b63f6[_0x1aab3b(469)] + (_0x1aab3b(533) + _0x1aab3b(400) + _0x1aab3b(400) + "  ") + (_0x5b7622 ? _0x3d8035[_0x1aab3b(441)] : _0xdbc979) + (_0x1aab3b(341) + _0x1aab3b(400) + _0x1aab3b(624) + _0x1aab3b(400) + _0x1aab3b(374) + _0x1aab3b(595) + _0x1aab3b(647) + _0x1aab3b(597) + _0x1aab3b(599) + _0x1aab3b(608)) + _0x3b63f6[_0x1aab3b(634)] + _0x1aab3b(633) + _0x3b63f6[_0x1aab3b(387)] + (_0x1aab3b(553) + _0x1aab3b(400) + _0x1aab3b(648) + _0x1aab3b(563) + _0x1aab3b(659) + _0x1aab3b(368) + _0x1aab3b(529) + _0x1aab3b(400) + _0x1aab3b(400) + _0x1aab3b(540) + _0x1aab3b(400) + _0x1aab3b(640)), _0x299553[_0x1aab3b(574) + "d"](_0x519dc9);
  });
}
function updateCountdown() {
  const _0x1f3cb6 = _0x11a7, _0x3178e4 = {sofZs: _0x1f3cb6(393), VzkEU: function (_0x2b7e1b, _0x5a104b) {
    return _0x2b7e1b - _0x5a104b;
  }, vKXWO: function (_0x36e90a, _0x46825d) {
    return _0x36e90a <= _0x46825d;
  }, EyICX: function (_0x105dab, _0x196e12) {
    return _0x105dab / _0x196e12;
  }, GEbrw: function (_0x41a0e5, _0x5657ce) {
    return _0x41a0e5 * _0x5657ce;
  }, MGbpi: function (_0x382c7d, _0x1cf7a7) {
    return _0x382c7d * _0x1cf7a7;
  }, PMIso: function (_0x284334, _0xa5a770) {
    return _0x284334 % _0xa5a770;
  }, kJfMt: function (_0x1c89b4, _0xc12a81) {
    return _0x1c89b4 % _0xc12a81;
  }, ulPOH: function (_0x52593b, _0x420eff) {
    return _0x52593b * _0x420eff;
  }, sfLjd: _0x1f3cb6(519) + "r]"}, _0x472b4d = document[_0x1f3cb6(510) + _0x1f3cb6(570)](_0x3178e4[_0x1f3cb6(604)]), _0x74f85 = new Date;
  _0x472b4d[_0x1f3cb6(443)](_0x56c0e9 => {
    const _0x19a99d = _0x1f3cb6, _0x59ec8c = new Date(_0x56c0e9[_0x19a99d(493) + "te"](_0x3178e4[_0x19a99d(348)])), _0x3abdbf = _0x3178e4[_0x19a99d(610)](_0x59ec8c, _0x74f85);
    if (_0x3178e4[_0x19a99d(452)](_0x3abdbf, 0)) _0x56c0e9[_0x19a99d(521) + "t"] = ""; else {
      const _0x2b4255 = Math[_0x19a99d(351)](_0x3178e4[_0x19a99d(616)](_0x3abdbf, _0x3178e4[_0x19a99d(605)](_0x3178e4[_0x19a99d(480)](1e3, 60), 60))), _0x3b792c = Math[_0x19a99d(351)](_0x3178e4[_0x19a99d(616)](_0x3178e4[_0x19a99d(501)](_0x3abdbf, _0x3178e4[_0x19a99d(605)](_0x3178e4[_0x19a99d(480)](1e3, 60), 60)), _0x3178e4[_0x19a99d(480)](1e3, 60))), _0x2fc439 = Math[_0x19a99d(351)](_0x3178e4[_0x19a99d(616)](_0x3178e4[_0x19a99d(488)](_0x3abdbf, _0x3178e4[_0x19a99d(593)](1e3, 60)), 1e3));
      _0x56c0e9[_0x19a99d(521) + "t"] = _0x2b4255 + "h " + _0x3b792c + "m " + _0x2fc439 + "s";
    }
  });
}
function playMatch(_0x1f6ada, _0x4391f0) {
  const _0x195854 = _0x11a7, _0x149e63 = {pIENI: _0x195854(347) + _0x195854(581) + _0x195854(528) + _0x195854(360), GgSQm: _0x195854(482) + _0x195854(401) + _0x195854(564) + _0x195854(544) + _0x195854(628), hpLrq: _0x195854(433), rzVMs: _0x195854(337), JEhlL: _0x195854(383) + _0x195854(395), hXdWJ: _0x195854(383) + _0x195854(549), tkYtd: _0x195854(396), jOsmo: _0x195854(347) + _0x195854(581) + _0x195854(349) + _0x195854(526), JRpoX: _0x195854(636) + _0x195854(612) + ":", SUwSb: _0x195854(389), Qcdyz: _0x195854(420) + _0x195854(635) + _0x195854(475) + _0x195854(588), DQARg: function (_0x30bc5a, _0x3b275e) {
    return _0x30bc5a(_0x3b275e);
  }, mdEfF: _0x195854(467) + _0x195854(587), XbiAa: _0x195854(429), mtfYz: _0x195854(552)}, _0x457f14 = _0x149e63[_0x195854(596)](jwplayer, _0x149e63[_0x195854(490)]);
  _0x457f14[_0x195854(626)]({file: _0x195854(483) + _0x195854(438) + _0x195854(513) + _0x195854(598) + "_" + match[_0x195854(634)] + _0x195854(365), width: _0x149e63[_0x195854(642)], aspectratio: _0x149e63[_0x195854(472)], image: _0x149e63[_0x195854(546)], autostart: false, watermark: {file: _0x149e63[_0x195854(355)], position: _0x149e63[_0x195854(498)], margin: 10}}), _0x457f14.on(_0x149e63[_0x195854(408)], function () {
    const _0x1d8fd6 = _0x195854, _0x53af10 = {RLdzg: _0x149e63[_0x1d8fd6(356)], FaJHi: _0x149e63[_0x1d8fd6(442)], zrgoS: _0x149e63[_0x1d8fd6(642)], XQZgV: _0x149e63[_0x1d8fd6(472)], qxzou: _0x149e63[_0x1d8fd6(546)], mgDHk: _0x149e63[_0x1d8fd6(355)], OVlcJ: _0x149e63[_0x1d8fd6(498)]};
    console[_0x1d8fd6(389)](_0x149e63[_0x1d8fd6(350)], _0x1f6ada), _0x4391f0 ? (console[_0x1d8fd6(486)](_0x149e63[_0x1d8fd6(381)], _0x4391f0), _0x457f14[_0x1d8fd6(626)]({file: _0x4391f0, width: _0x149e63[_0x1d8fd6(642)], aspectratio: _0x149e63[_0x1d8fd6(472)], image: _0x149e63[_0x1d8fd6(546)], autostart: false, watermark: {file: _0x149e63[_0x1d8fd6(355)], position: _0x149e63[_0x1d8fd6(498)], margin: 10}}), _0x457f14.on(_0x149e63[_0x1d8fd6(408)], function () {
      const _0x338e31 = _0x1d8fd6;
      console[_0x338e31(389)](_0x53af10[_0x338e31(509)], _0x4391f0), _0x457f14[_0x338e31(626)]({file: _0x53af10[_0x338e31(471)], width: _0x53af10[_0x338e31(536)], aspectratio: _0x53af10[_0x338e31(336)], image: _0x53af10[_0x338e31(473)], autostart: false, watermark: {file: _0x53af10[_0x338e31(531)], position: _0x53af10[_0x338e31(491)], margin: 10}});
    })) : _0x457f14[_0x1d8fd6(626)]({file: _0x149e63[_0x1d8fd6(442)], width: _0x149e63[_0x1d8fd6(642)], aspectratio: _0x149e63[_0x1d8fd6(472)], image: _0x149e63[_0x1d8fd6(546)], autostart: false, watermark: {file: _0x149e63[_0x1d8fd6(522)], position: _0x149e63[_0x1d8fd6(498)], margin: 10}});
  }), document[_0x195854(406) + _0x195854(388)](_0x149e63[_0x195854(490)])[_0x195854(566) + _0x195854(340)]({behavior: _0x149e63[_0x195854(357)], block: _0x149e63[_0x195854(458)]});
}
function populateFilters(_0x650fc) {
  const _0x5bdfe9 = _0x11a7, _0x1ecab5 = {riSiw: _0x5bdfe9(651), cAcJe: function (_0x2ef35b, _0x146fd9) {
    return _0x2ef35b(_0x146fd9);
  }, VmoYn: _0x5bdfe9(620), BSUFU: _0x5bdfe9(462) + "er", plWmr: _0x5bdfe9(583) + _0x5bdfe9(606) + _0x5bdfe9(532) + _0x5bdfe9(375), OTWSL: _0x5bdfe9(583) + _0x5bdfe9(606) + _0x5bdfe9(573) + _0x5bdfe9(377) + "n>"}, _0xf264cf = document[_0x5bdfe9(406) + _0x5bdfe9(388)](_0x1ecab5[_0x5bdfe9(384)]), _0x835ecc = document[_0x5bdfe9(406) + _0x5bdfe9(388)](_0x1ecab5[_0x5bdfe9(338)]);
  _0xf264cf[_0x5bdfe9(447)] = _0x1ecab5[_0x5bdfe9(523)], _0x835ecc[_0x5bdfe9(447)] = _0x1ecab5[_0x5bdfe9(449)];
  const _0x165249 = [...new Set(_0x650fc[_0x5bdfe9(404)](_0x77abef => _0x77abef[_0x5bdfe9(343)]))], _0x211a72 = [...new Set(_0x650fc[_0x5bdfe9(404)](_0x56f804 => _0x56f804[_0x5bdfe9(469)]))];
  _0x165249[_0x5bdfe9(443)](_0xb4214b => {
    const _0x116061 = _0x5bdfe9, _0xd5b122 = document[_0x116061(457) + _0x116061(359)](_0x1ecab5[_0x116061(464)]);
    _0xd5b122[_0x116061(575)] = _0xb4214b[_0x116061(451) + "e"](), _0xd5b122[_0x116061(521) + "t"] = _0x1ecab5[_0x116061(463)](formatDate, _0xb4214b), _0xf264cf[_0x116061(574) + "d"](_0xd5b122);
  }), _0x211a72[_0x5bdfe9(443)](_0x35097a => {
    const _0x2a3655 = _0x5bdfe9, _0x4a1556 = document[_0x2a3655(457) + _0x2a3655(359)](_0x1ecab5[_0x2a3655(464)]);
    _0x4a1556[_0x2a3655(575)] = _0x35097a[_0x2a3655(451) + "e"](), _0x4a1556[_0x2a3655(521) + "t"] = _0x35097a, _0x835ecc[_0x2a3655(574) + "d"](_0x4a1556);
  });
}
function filterMatches() {
  const _0x1a794f = _0x11a7, _0x555541 = {JXKNF: _0x1a794f(499), bxuBa: _0x1a794f(353) + "e", zTIwy: _0x1a794f(461), bRKmP: function (_0x11b8b0, _0x2cecc9) {
    return _0x11b8b0 === _0x2cecc9;
  }, gFnbd: function (_0xc45036, _0x158df4) {
    return _0xc45036 === _0x158df4;
  }, WFUWQ: function (_0x425e2b, _0x3bf600) {
    return _0x425e2b && _0x3bf600;
  }, YnmqW: _0x1a794f(548) + "s", bZywy: _0x1a794f(514), biZHm: function (_0x2043f8, _0x39b945) {
    return _0x2043f8 !== _0x39b945;
  }, sdsHu: function (_0x4335ce, _0x1e7c47) {
    return _0x4335ce === _0x1e7c47;
  }, FMyIi: _0x1a794f(623), HJync: _0x1a794f(620), umLOD: _0x1a794f(462) + "er", naGaH: _0x1a794f(565), fnGOP: _0x1a794f(504) + _0x1a794f(373), nKJoP: _0x1a794f(487), lqpqj: _0x1a794f(602)}, _0x3ea0c1 = document[_0x1a794f(406) + _0x1a794f(388)](_0x555541[_0x1a794f(413)])[_0x1a794f(575)][_0x1a794f(451) + "e"](), _0x123fc = document[_0x1a794f(406) + _0x1a794f(388)](_0x555541[_0x1a794f(525)])[_0x1a794f(575)][_0x1a794f(451) + "e"](), _0x1f7691 = document[_0x1a794f(406) + _0x1a794f(388)](_0x555541[_0x1a794f(344)])[_0x1a794f(575)][_0x1a794f(451) + "e"](), _0x4e7df7 = document[_0x1a794f(510) + _0x1a794f(570)](_0x555541[_0x1a794f(569)]);
  let _0x33b677 = 0;
  const _0x5075c2 = Array[_0x1a794f(402)](_0x4e7df7)[_0x1a794f(572)](_0xaba78 => {
    const _0x247c7b = _0x1a794f, _0x276f85 = _0xaba78[_0x247c7b(493) + "te"](_0x555541[_0x247c7b(502)]), _0x21e86c = _0xaba78[_0x247c7b(493) + "te"](_0x555541[_0x247c7b(625)]), _0x4b9ce2 = _0xaba78[_0x247c7b(493) + "te"](_0x555541[_0x247c7b(643)]), _0x57e2f9 = !_0x3ea0c1 || _0x555541[_0x247c7b(568)](_0x276f85, _0x3ea0c1), _0xa9b2c8 = !_0x123fc || _0x555541[_0x247c7b(652)](_0x21e86c, _0x123fc), _0x2c2b2f = !_0x1f7691 || _0x4b9ce2[_0x247c7b(518)](_0x1f7691);
    return _0x555541[_0x247c7b(477)](_0x57e2f9, _0xa9b2c8) && _0x2c2b2f;
  })[_0x1a794f(582)]((_0x3c7bf1, _0x582781) => {
    const _0x2fd6c0 = _0x1a794f, _0x5b347b = _0x3c7bf1[_0x2fd6c0(493) + "te"](_0x555541[_0x2fd6c0(468)]), _0x487fad = _0x582781[_0x2fd6c0(493) + "te"](_0x555541[_0x2fd6c0(468)]);
    if (_0x555541[_0x2fd6c0(568)](_0x5b347b, _0x555541[_0x2fd6c0(630)]) && _0x555541[_0x2fd6c0(478)](_0x487fad, _0x555541[_0x2fd6c0(630)])) return -1;
    if (_0x555541[_0x2fd6c0(478)](_0x5b347b, _0x555541[_0x2fd6c0(630)]) && _0x555541[_0x2fd6c0(437)](_0x487fad, _0x555541[_0x2fd6c0(630)])) return 1;
    return 0;
  });
  _0x4e7df7[_0x1a794f(443)](_0x503480 => _0x503480[_0x1a794f(639)][_0x1a794f(591)] = _0x1a794f(440)), _0x5075c2[_0x1a794f(443)](_0x5e4342 => {
    const _0x4cf576 = _0x1a794f;
    _0x5e4342[_0x4cf576(639)][_0x4cf576(591)] = _0x555541[_0x4cf576(434)], _0x33b677++;
  });
  const _0xa4fa92 = document[_0x1a794f(406) + _0x1a794f(388)](_0x555541[_0x1a794f(470)]);
  _0x555541[_0x1a794f(652)](_0x33b677, 0) ? _0xa4fa92[_0x1a794f(417)][_0x1a794f(409)](_0x555541[_0x1a794f(609)]) : _0xa4fa92[_0x1a794f(417)][_0x1a794f(358)](_0x555541[_0x1a794f(609)]);
}
function _0x4581() {
  const _0x4f76dd = ["EoTXu", "Network re", ".m3u8", "parse", "setItem", '-circle"><', "loader", "iJzSc", 'ass="detai', "6985682YXduXB", "card", "        <b", "e</option>", "UyyoB", "gue</optio", "TUmgU", "body", "vgoMJ", "JRpoX", "gqeel", "https://da", "VmoYn", "scrollToTo", "IoUSN", "m3u8Url", "ById", "error", "iZzxo", " Soon...</", "i> ", "data-timer", "<span clas", ".gd/W1Lp", "top-right", "apply", "sCZLM", "LqCcq", "          ", "betv.githu", "from", "June", "map", "block", "getElement", "div", "SUwSb", "add", "ve Now</sp", "i.json", "EyLyH", "HJync", "ojYSJ", "wOwtO", "https://wa", "classList", "130eSasjq", "getMonth", "https://ex", "February", "stener", "DOMContent", 'ls"><i cla', "AGWBQ", "cCrIr", "as fa-broa", ".github.io", "smooth", "es:", "kkFCc", '">Starting', "100%", "FMyIi", "as fa-cale", "rOvUZ", "sdsHu", "pull.carer", "scrollTop", "none", "IQLqJ", "GgSQm", "forEach", 'wn" data-t', "juDAl", "April", "innerHTML", "</i> ", "OTWSL", "HhRsc", "toLowerCas", "vKXWO", 'ndar-alt">', "January", 'imer="', "ement", "createElem", "mtfYz", "QXnhU", "March", "data-teams", "leagueFilt", "cAcJe", "riSiw", 's="countdo', "HhUDs", "jwplayerCo", "YnmqW", "league", "nKJoP", "FaJHi", "rzVMs", "qxzou", "getTime", "images/wat", "dsOFt", "WFUWQ", "biZHm", " not ok", "MGbpi", "ODDCY", "https://vi", "https://tv", "TOGCx", "nNWFW", "log", "noMatches", "kJfMt", "494776pklIzS", "mdEfF", "OVlcJ", "schedule-c", "getAttribu", "onscroll", "span>", "zeMkC", "gygIP", "tkYtd", "data-date", "ZkWcx", "PMIso", "JXKNF", "an>", ".schedule-", "224235GzsBzR", "November", "August", 'r"></i> Li', "RLdzg", "querySelec", "BRvhu", "lYTrg", "yun.com/li", "live", "iDfvG", "fjWRG", "RneMo", "includes", "[data-time", "CbMQV", "textConten", "Qcdyz", "plWmr", "klIJJ", "umLOD", "Id:", '-clock"></', "with m3u8U", "/i> Watch\n", "etFeH", "mgDHk", "ter by Dat", "</span>\n  ", "DKkuZ", "hWpfB", "zrgoS", "/nontonvol", "mNqim", "getDate", "</button>\n", "rFBOn", 's="match-i', "ZsAuQ", "ne/streamo", "534333IZLpGj", "JEhlL", "YZnKv", "data-statu", ".gd/NIE60d", "input", '="fas fa-u', "start", "')\">\n     ", "getItem", "  <span cl", "addEventLi", "rZEdW", "CikJh", "xwOmf", "May", "ard", '"><i class', 'i class="f', "b.io/offli", "teamSearch", "scrollInto", "21oURRQi", "bRKmP", "fnGOP", "torAll", "JWdMY", "filter", "ter by Lea", "appendChil", "value", 'ss="fas fa', "setAttribu", 's="live"><', "3321768GaUhvo", "thub.io/tv", "ing video ", "sort", "<option va", "time", "documentEl", "July", "ntainer", "ermark.png", "zZXiO", "load match", "display", "getFullYea", "ulPOH", "VBunM", "utton clas", "DQARg", 'utton" onc', "ve/ballbar", 'lick="play', "4wpEyeX", "matches", "show", "Failed to ", "sfLjd", "GEbrw", 'lue="">Fil', "IBhfV", "Match('", "lqpqj", "VzkEU", "wOlHh", "to m3u8Url", "json", 'ass="teams', "dwntx", "EyICX", "change", "sponse was", " <div clas", "dateFilter", "xvZhX", "drYbb", "flex", " </div>\n  ", "bxuBa", "setup", 's="date"><', "ffline.mp4", "OXoCl", "bZywy", "UxZiK", " | ", "', '", "videoId", "ample.com/", "Switching ", "dcast-towe", "pBkmb", "style", "      ", "upcoming", "hpLrq", "zTIwy", 'sers"></i>', "ZQxYr", "September", 's="watch-b', "         <", "214588jRJpDd", "teams", "option", "gFnbd", "stringify", "qJiMI", "scheduleCo", "JXxTw", 'nfo">\n    ', "December", "as fa-play", "50ZfWIha", "kUFcP", "className", "XQZgV", "16:9", "BSUFU", "rtakita.gi", "View", "\n         ", "iBbDo", "date", "naGaH", "October", "JFdGX", "Error play", "sofZs", "with video", "jOsmo", "floor", "261642BrfdiK", "data-leagu", "FGXqu", "hXdWJ", "pIENI", "XbiAa", "remove", "ent", "rl:", "TFDHY", "Loaded"];
  _0x4581 = function () {
    return _0x4f76dd;
  };
  return _0x4581();
}
function resetFilters() {
  const _0xe71854 = _0x11a7, _0x1c6805 = {iJzSc: _0xe71854(620), AGWBQ: _0xe71854(462) + "er", iZzxo: _0xe71854(565), TOGCx: function (_0x278f2c) {
    return _0x278f2c();
  }};
  document[_0xe71854(406) + _0xe71854(388)](_0x1c6805[_0xe71854(370)])[_0xe71854(575)] = "", document[_0xe71854(406) + _0xe71854(388)](_0x1c6805[_0xe71854(425)])[_0xe71854(575)] = "", document[_0xe71854(406) + _0xe71854(388)](_0x1c6805[_0xe71854(390)])[_0xe71854(575)] = "", _0x1c6805[_0xe71854(484)](filterMatches);
}
function debounce(_0x202085, _0x3fe0e9) {
  const _0x377e83 = {xvZhX: function (_0x4dc574, _0x793875) {
    return _0x4dc574(_0x793875);
  }, rZEdW: function (_0x2510cd, _0x309a96, _0x218f5e) {
    return _0x2510cd(_0x309a96, _0x218f5e);
  }};
  let _0x10316a;
  return function (..._0x328e5e) {
    const _0x536bb6 = _0x11a7;
    _0x377e83[_0x536bb6(621)](clearTimeout, _0x10316a), _0x10316a = _0x377e83[_0x536bb6(557)](setTimeout, () => _0x202085[_0x536bb6(397)](this, _0x328e5e), _0x3fe0e9);
  };
}
document[_0x186078(406) + _0x186078(388)](_0x186078(565))[_0x186078(556) + _0x186078(422)](_0x186078(550), debounce(filterMatches, 300)), document[_0x186078(406) + _0x186078(388)](_0x186078(620))[_0x186078(556) + _0x186078(422)](_0x186078(617), filterMatches), document[_0x186078(406) + _0x186078(388)](_0x186078(462) + "er")[_0x186078(556) + _0x186078(422)](_0x186078(617), filterMatches), document[_0x186078(556) + _0x186078(422)](_0x186078(423) + _0x186078(362), loadMatches);
function toggleScrollToTopButton() {
  const _0x5011a8 = _0x186078, _0x270072 = {CikJh: _0x5011a8(385) + "p", fjWRG: function (_0x4c941e, _0x349aca) {
    return _0x4c941e > _0x349aca;
  }, klIJJ: function (_0x41e951, _0x4ebd3c) {
    return _0x41e951 > _0x4ebd3c;
  }, VBunM: _0x5011a8(405), UyyoB: _0x5011a8(440)}, _0x5c9dd6 = document[_0x5011a8(406) + _0x5011a8(388)](_0x270072[_0x5011a8(558)]);
  _0x270072[_0x5011a8(516)](document[_0x5011a8(379)][_0x5011a8(439)], 20) || _0x270072[_0x5011a8(524)](document[_0x5011a8(585) + _0x5011a8(456)][_0x5011a8(439)], 20) ? _0x5c9dd6[_0x5011a8(639)][_0x5011a8(591)] = _0x270072[_0x5011a8(594)] : _0x5c9dd6[_0x5011a8(639)][_0x5011a8(591)] = _0x270072[_0x5011a8(376)];
}
function scrollToTop() {
  const _0x169660 = _0x186078;
  document[_0x169660(379)][_0x169660(439)] = 0, document[_0x169660(585) + _0x169660(456)][_0x169660(439)] = 0;
}
window[_0x186078(494)] = function () {
  const _0x4ccd06 = _0x186078, _0x3c34c9 = {HhRsc: function (_0xd78235) {
    return _0xd78235();
  }};
  _0x3c34c9[_0x4ccd06(450)](toggleScrollToTopButton);
};
