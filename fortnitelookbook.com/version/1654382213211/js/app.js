! function(e) {
    function t(t) {
        for (var r, o, s = t[0], l = t[1], u = t[2], h = 0, f = []; h < s.length; h++) o = s[h], Object.prototype.hasOwnProperty.call(i, o) && i[o] && f.push(i[o][0]), i[o] = 0;
        for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
        for (c && c(t); f.length;) f.shift()();
        return a.push.apply(a, u || []), n()
    }

    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], r = !0, s = 1; s < n.length; s++) {
                var l = n[s];
                0 !== i[l] && (r = !1)
            }
            r && (a.splice(t--, 1), e = o(o.s = n[0]))
        }
        return e
    }
    var r = {},
        i = {
            app: 0
        },
        a = [];

    function o(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, o), n.l = !0, n.exports
    }
    o.e = function(e) {
        var t = [],
            n = i[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var r = new Promise((function(t, r) {
                    n = i[e] = [t, r]
                }));
                t.push(n[2] = r);
                var a, s = document.createElement("script");
                s.charset = "utf-8", s.timeout = 120, o.nc && s.setAttribute("nonce", o.nc), s.src = function(e) {
                    return o.p + "version/1654382213211/js/" + e + ".js"
                }(e);
                var l = new Error;
                a = function(t) {
                    s.onerror = s.onload = null, clearTimeout(u);
                    var n = i[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ("load" === t.type ? "missing" : t.type),
                                a = t && t.target && t.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")", l.name = "ChunkLoadError", l.type = r, l.request = a, n[1](l)
                        }
                        i[e] = void 0
                    }
                };
                var u = setTimeout((function() {
                    a({
                        type: "timeout",
                        target: s
                    })
                }), 12e4);
                s.onerror = s.onload = a, document.head.appendChild(s)
            }
        return Promise.all(t)
    }, o.m = e, o.c = r, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) o.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "/", o.oe = function(e) {
        throw console.error(e), e
    };
    var s = this.webpackJsonp = this.webpackJsonp || [],
        l = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var u = 0; u < s.length; u++) t(s[u]);
    var c = l;
    a.push([369, "vendors"]), n()
}({
    152: function(e, t, n) {
        e.exports = {
            icon: "icon-1RPHevu"
        }
    },
    153: function(e, t, n) {
        e.exports = {
            ticker: "ticker-2smuC1t",
            "ticker-inner": "ticker-inner-myX-6un",
            tickerInner: "ticker-inner-myX-6un",
            "ticker-text": "ticker-text-uQW1DCy",
            tickerText: "ticker-text-uQW1DCy",
            "text-wrapper": "text-wrapper-3tbcdCV",
            textWrapper: "text-wrapper-3tbcdCV",
            "ticker-small-rtl": "ticker-small-rtl-1eVfPjU",
            tickerSmallRtl: "ticker-small-rtl-1eVfPjU",
            "ticker-small": "ticker-small-uKj-tTd",
            tickerSmall: "ticker-small-uKj-tTd",
            "ticker-x-small": "ticker-x-small-3WfBBFJ",
            tickerXSmall: "ticker-x-small-3WfBBFJ",
            "in-view": "in-view-jFvVTFX",
            inView: "in-view-jFvVTFX",
            "arrow-icon": "arrow-icon-UJHzvCm",
            arrowIcon: "arrow-icon-UJHzvCm",
            arrow: "arrow-1fzeHzj",
            "arrow-left": "arrow-left-1Lb1dn4",
            arrowLeft: "arrow-left-1Lb1dn4",
            "arrow-right": "arrow-right-cZ7exFN",
            arrowRight: "arrow-right-cZ7exFN",
            "arrow-inner": "arrow-inner-22m4Yrr",
            arrowInner: "arrow-inner-22m4Yrr"
        }
    },
    154: function(e, t, n) {
        e.exports = {
            hero: "hero-3C-w911",
            ticker: "ticker-FWO4z9A",
            hashtag: "hashtag-1_nWPL-",
            "title-wrapper": "title-wrapper-H_Zf6oQ",
            titleWrapper: "title-wrapper-H_Zf6oQ",
            "title-wrapper-inner": "title-wrapper-inner-3hJXZvE",
            titleWrapperInner: "title-wrapper-inner-3hJXZvE",
            "vibin-bold-icon": "vibin-bold-icon-9FXga8L",
            vibinBoldIcon: "vibin-bold-icon-9FXga8L",
            "vibin-icon": "vibin-icon-1cBoZzo",
            vibinIcon: "vibin-icon-1cBoZzo",
            content: "content-3aGsh6N",
            "fortnite-icon": "fortnite-icon-1sVR2yy",
            fortniteIcon: "fortnite-icon-1sVR2yy",
            "fortnite-logo": "fortnite-logo-3mpLnQa",
            fortniteLogo: "fortnite-logo-3mpLnQa",
            copy: "copy-2PipVfF"
        }
    },
    155: function(e, t, n) {
        e.exports = {
            sidebar: "sidebar-VyD4Ohk",
            "is-reverse": "is-reverse-1Mv8nfb",
            isReverse: "is-reverse-1Mv8nfb",
            logo: "logo-1IKmzUl",
            "vibin-logo": "vibin-logo-11odYd8",
            vibinLogo: "vibin-logo-11odYd8",
            "logo-text": "logo-text-3sqksMu",
            logoText: "logo-text-3sqksMu",
            "sidebar-content": "sidebar-content-3z2opOB",
            sidebarContent: "sidebar-content-3z2opOB",
            "point-wrapper": "point-wrapper-1YAlFmp",
            pointWrapper: "point-wrapper-1YAlFmp",
            point: "point-2ZPrlPO",
            hashtag: "hashtag-1ObQ8_O",
            "character-icon-wrapper": "character-icon-wrapper-1Vrrq48",
            characterIconWrapper: "character-icon-wrapper-1Vrrq48",
            "character-icon": "character-icon-3tVGbV5",
            characterIcon: "character-icon-3tVGbV5",
            "icon-evie": "icon-evie-2yNMSc2",
            iconEvie: "icon-evie-2yNMSc2",
            "icon-malik": "icon-malik-2zhPQy5",
            iconMalik: "icon-malik-2zhPQy5",
            "icon-adira": "icon-adira-21E61BS",
            iconAdira: "icon-adira-21E61BS",
            line: "line-3Bs9Wvy",
            "line-vertical": "line-vertical-NuhwAzw",
            lineVertical: "line-vertical-NuhwAzw",
            "line-horizontal": "line-horizontal-fsY5WUd",
            lineHorizontal: "line-horizontal-fsY5WUd",
            "line-top": "line-top-QbklvWM",
            lineTop: "line-top-QbklvWM",
            "hashtag-right": "hashtag-right-3OPLJEx",
            hashtagRight: "hashtag-right-3OPLJEx"
        }
    },
    156: function(e, t, n) {
        e.exports = {
            "rounded-image": "rounded-image-3e8ebxr",
            roundedImage: "rounded-image-3e8ebxr",
            "is-landscape": "is-landscape-2e5mX8m",
            isLandscape: "is-landscape-2e5mX8m",
            large: "large-rGDnMJH",
            image: "image-3gN4FBr",
            "rounded-top-left": "rounded-top-left-3U-RrhC",
            roundedTopLeft: "rounded-top-left-3U-RrhC",
            "rounded-bottom-right": "rounded-bottom-right-3ttPdnu",
            roundedBottomRight: "rounded-bottom-right-3ttPdnu"
        }
    },
    157: function(e, t, n) {
        e.exports = {
            "sprite-sheet": "sprite-sheet-2tprcgp",
            spriteSheet: "sprite-sheet-2tprcgp",
            sprite: "sprite-2RUfuMg"
        }
    },
    158: function(e, t, n) {
        e.exports = {
            "animated-sprite-sheet": "animated-sprite-sheet-1aY2Qv3",
            animatedSpriteSheet: "animated-sprite-sheet-1aY2Qv3",
            sprite: "sprite-2kO06Bu"
        }
    },
    159: function(e, t, n) {
        e.exports = {
            "look-book": "look-book-3i9Uqcq",
            lookBook: "look-book-3i9Uqcq",
            character: "character-123kHl_",
            "image-wrapper": "image-wrapper-2lMk7WA",
            imageWrapper: "image-wrapper-2lMk7WA",
            evie: "evie-2ao-JJK",
            image: "image-1QAdNeY",
            malik: "malik-3ZFnksu",
            adira: "adira-3UY_c3v",
            "bw-item": "bw-item-1LDUV1N",
            bwItem: "bw-item-1LDUV1N",
            item: "item-u9oeBjp",
            backpack: "backpack-2tx1hT5",
            shield: "shield-1FpY4Nj",
            flag: "flag-1eRJPJl",
            "scroll-trigger": "scroll-trigger-3C0-eC9",
            scrollTrigger: "scroll-trigger-3C0-eC9"
        }
    },
    160: function(e, t, n) {
        e.exports = {
            "locale-switcher": "locale-switcher-326iQDA",
            localeSwitcher: "locale-switcher-326iQDA",
            "locale-list": "locale-list-2eUA7K3",
            localeList: "locale-list-2eUA7K3",
            background: "background-1F7suxX",
            "toggle-button-wrapper": "toggle-button-wrapper-3sz9tsu",
            toggleButtonWrapper: "toggle-button-wrapper-3sz9tsu",
            "toggle-button": "toggle-button-383UKz_",
            toggleButton: "toggle-button-383UKz_",
            icon: "icon-1XOHecf",
            "icon-globe": "icon-globe-yvlUiZi",
            iconGlobe: "icon-globe-yvlUiZi",
            "icon-close": "icon-close-2tEPY0w",
            iconClose: "icon-close-2tEPY0w",
            open: "open-YQAZRMj",
            "locale-item": "locale-item-w1MUr9p",
            localeItem: "locale-item-w1MUr9p",
            "locale-button": "locale-button-5c4z_FO",
            localeButton: "locale-button-5c4z_FO",
            selected: "selected-2w4Dsv8",
            "not-hovered": "not-hovered-8inj7WF",
            notHovered: "not-hovered-8inj7WF",
            "icon-check": "icon-check-HLsCwdI",
            iconCheck: "icon-check-HLsCwdI"
        }
    },
    161: function(e, t, n) {
        e.exports = {
            characters: "characters-2uMAJLS",
            "content-wrapper": "content-wrapper-2r1lWjr",
            contentWrapper: "content-wrapper-2r1lWjr",
            figure: "figure-1GlygfK",
            "vibin-bold-icon": "vibin-bold-icon-W1wWKVU",
            vibinBoldIcon: "vibin-bold-icon-W1wWKVU",
            ticker: "ticker-3AB-2W4"
        }
    },
    162: function(e, t, n) {
        e.exports = {
            footer: "footer-pP_AXte",
            "footer-top": "footer-top-11YKT_R",
            footerTop: "footer-top-11YKT_R",
            copy: "copy-9tabDTl",
            "link-list": "link-list-4hQIn4S",
            linkList: "link-list-4hQIn4S",
            link: "link-2rI0s6h",
            content: "content-S8MSLn8",
            "fortnite-icon": "fortnite-icon-2N_v28l",
            fortniteIcon: "fortnite-icon-2N_v28l",
            "fortnite-logo": "fortnite-logo-xYnUNPa",
            fortniteLogo: "fortnite-logo-xYnUNPa",
            "content-copy": "content-copy-W3i67hM",
            contentCopy: "content-copy-W3i67hM",
            "game-rating": "game-rating-3qgP4z-",
            gameRating: "game-rating-3qgP4z-",
            "has-three-links": "has-three-links-Vu2H9GW",
            hasThreeLinks: "has-three-links-Vu2H9GW"
        }
    },
    163: function(e, t, n) {
        e.exports = {
            "home-page": "home-page-7_P_AJC",
            homePage: "home-page-7_P_AJC",
            "vibin-frame": "vibin-frame-3PTkCs9",
            vibinFrame: "vibin-frame-3PTkCs9",
            "locale-switcher": "locale-switcher-3xQBKLv",
            localeSwitcher: "locale-switcher-3xQBKLv"
        }
    },
    164: function(e, t, n) {},
    165: function(e, t, n) {
        e.exports = {
            "site-preloader": "site-preloader-2mpvgv5",
            sitePreloader: "site-preloader-2mpvgv5",
            logo: "logo-2JK8dqI",
            loader: "loader-2eYh2Qb",
            bold: "bold-cIaJS1i",
            overlay: "overlay-316lp3y"
        }
    },
    166: function(e, t, n) {
        e.exports = {
            "canvas-container": "canvas-container-2cN-QhJ",
            canvasContainer: "canvas-container-2cN-QhJ"
        }
    },
    167: function(e, t, n) {
        e.exports = {
            app: "app-2Y55ifu",
            "locale-switcher": "locale-switcher-2Al2vxJ",
            localeSwitcher: "locale-switcher-2Al2vxJ"
        }
    },
    232: function(e, t, n) {
        "use strict";
        var r = n(152),
            i = n.n(r);
        t.default = i.a
    },
    233: function(e, t, n) {
        "use strict";
        var r = n(153),
            i = n.n(r);
        t.default = i.a
    },
    234: function(e, t, n) {
        "use strict";
        var r = n(154),
            i = n.n(r);
        t.default = i.a
    },
    235: function(e, t, n) {
        "use strict";
        var r = n(155),
            i = n.n(r);
        t.default = i.a
    },
    236: function(e, t, n) {
        "use strict";
        var r = n(156),
            i = n.n(r);
        t.default = i.a
    },
    237: function(e, t, n) {
        "use strict";
        var r = n(157),
            i = n.n(r);
        t.default = i.a
    },
    238: function(e, t, n) {
        "use strict";
        var r = n(158),
            i = n.n(r);
        t.default = i.a
    },
    239: function(e, t, n) {
        "use strict";
        var r = n(159),
            i = n.n(r);
        t.default = i.a
    },
    240: function(e, t, n) {
        "use strict";
        var r = n(160),
            i = n.n(r);
        t.default = i.a
    },
    241: function(e, t, n) {
        "use strict";
        var r = n(161),
            i = n.n(r);
        t.default = i.a
    },
    242: function(e, t, n) {
        "use strict";
        var r = n(162),
            i = n.n(r);
        t.default = i.a
    },
    243: function(e, t, n) {
        "use strict";
        var r = n(163),
            i = n.n(r);
        t.default = i.a
    },
    244: function(e, t, n) {
        "use strict";
        var r = n(164),
            i = n.n(r);
        t.default = i.a
    },
    246: function(e, t, n) {
        "use strict";
        var r = n(165),
            i = n.n(r);
        t.default = i.a
    },
    247: function(e, t, n) {
        "use strict";
        var r = n(166),
            i = n.n(r);
        t.default = i.a
    },
    248: function(e, t, n) {
        "use strict";
        var r = n(167),
            i = n.n(r);
        t.default = i.a
    },
    355: function(e, t, n) {
        var r = {
            "./contentElement/contentElement.fs.glsl": 773,
            "./contentElement/contentElement.vs.glsl": 774,
            "./includes/antiAlias.glsl": 775,
            "./includes/visibility.glsl": 776,
            "./pixelSortTransition/pixelSortTransition.fs.glsl": 777,
            "./pixelSortTransition/pixelSortTransition.vs.glsl": 778,
            "./unlit/unlit.fs.glsl": 779,
            "./unlit/unlit.vs.glsl": 780,
            "./vibin/vibin.fs.glsl": 781,
            "./vibin/vibin.vs.glsl": 782
        };

        function i(e) {
            var t = a(e);
            return n(t)
        }

        function a(e) {
            if (!n.o(r, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return r[e]
        }
        i.keys = function() {
            return Object.keys(r)
        }, i.resolve = a, e.exports = i, i.id = 355
    },
    369: function(e, t, n) {
        n(370), e.exports = n(800)
    },
    370: function(e, t, n) {
        "use strict";
        n.r(t);
        n(371), n(372), n(373), n(374), n(375), n(376), n(377), n(378), n(379), n(380), n(381), n(382), n(383), n(384), n(385), n(386), n(387), n(388), n(389), n(390), n(391), n(392), n(393), n(394), n(395), n(396), n(397), n(124), n(398), n(399), n(400), n(401), n(402), n(403), n(404), n(405), n(406), n(407), n(408), n(409), n(410), n(412), n(413), n(414), n(416), n(417), n(418), n(419), n(420), n(421), n(422), n(423), n(424), n(425), n(426), n(427), n(429), n(430), n(431), n(432), n(433), n(434), n(435), n(436), n(437), n(438), n(439), n(440), n(441), n(443), n(444), n(445), n(446), n(447), n(448), n(450), n(452), n(454), n(455), n(456), n(457), n(458), n(459), n(460), n(461), n(462), n(463), n(464), n(465), n(466), n(467), n(468), n(469), n(470), n(471), n(472), n(473), n(474), n(476), n(477), n(479), n(480), n(481), n(483), n(484), n(485), n(486), n(487), n(488), n(489), n(490), n(491), n(492), n(493), n(494), n(280), n(495), n(496), n(497), n(498), n(499), n(500), n(501), n(281), n(502), n(503), n(504), n(505), n(506), n(507), n(508), n(509), n(510), n(511), n(512), n(513), n(514), n(515), n(516), n(517), n(518), n(519), n(520), n(521), n(522), n(523), n(524), n(525), n(526), n(527), n(529), n(530), n(531), n(532), n(533), n(534), n(535), n(536), n(537), n(538), n(539), n(540), n(541), n(542), n(543), n(544), n(545), n(546), n(547), n(548), n(549), n(550), n(551), n(552), n(553), n(554), n(555), n(556), n(557), n(558), n(559), n(560), n(561), n(562), n(563), n(564), n(565), n(567), n(569), n(570), n(572), n(573), n(574), n(575), n(576), n(577), n(580), n(289);
        t.default = {}
    },
    581: function(e, t) {
        ! function(t) {
            var n = "Modernizr" in t,
                r = t.Modernizr;
            ! function(e, t, n, r) {
                function i(e, t) {
                    return typeof e === t
                }
                var a = [],
                    o = {
                        _version: "3.11.3",
                        _config: {
                            classPrefix: "",
                            enableClasses: !0,
                            enableJSClass: !0,
                            usePrefixes: !0
                        },
                        _q: [],
                        on: function(e, t) {
                            var n = this;
                            setTimeout((function() {
                                t(n[e])
                            }), 0)
                        },
                        addTest: function(e, t, n) {
                            a.push({
                                name: e,
                                fn: t,
                                options: n
                            })
                        },
                        addAsyncTest: function(e) {
                            a.push({
                                name: null,
                                fn: e
                            })
                        }
                    },
                    s = function() {};
                s.prototype = o, s = new s;
                var l = [],
                    u = n.documentElement,
                    c = "svg" === u.nodeName.toLowerCase();
                ! function() {
                    var e, t, n, r, o, u;
                    for (var c in a)
                        if (a.hasOwnProperty(c)) {
                            if (e = [], (t = a[c]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                                for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                            for (r = i(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) 1 === (u = e[o].split(".")).length ? s[u[0]] = r : (s[u[0]] && (!s[u[0]] || s[u[0]] instanceof Boolean) || (s[u[0]] = new Boolean(s[u[0]])), s[u[0]][u[1]] = r), l.push((r ? "" : "no-") + u.join("-"))
                        }
                }(),
                function(e) {
                    var t = u.className,
                        n = s._config.classPrefix || "";
                    if (c && (t = t.baseVal), s._config.enableJSClass) {
                        var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                        t = t.replace(r, "$1" + n + "js$2")
                    }
                    s._config.enableClasses && (e.length > 0 && (t += " " + n + e.join(" " + n)), c ? u.className.baseVal = t : u.className = t)
                }(l), delete o.addTest, delete o.addAsyncTest;
                for (var h = 0; h < s._q.length; h++) s._q[h]();
                e.Modernizr = s
            }(t, 0, document), e.exports = t.Modernizr, n ? t.Modernizr = r : delete t.Modernizr
        }(window)
    },
    582: function(e, t, n) {},
    584: function(e, t, n) {
        var r = {
            "./arrow-right.svg": 585,
            "./check.svg": 586,
            "./close.svg": 587,
            "./fortnite-icon.svg": 588,
            "./fortnite-logo.svg": 589,
            "./globe.svg": 590,
            "./icon-adira.svg": 591,
            "./icon-evie.svg": 592,
            "./icon-malik.svg": 593,
            "./letter-b.svg": 594,
            "./letter-i.svg": 595,
            "./letter-n.svg": 596,
            "./letter-v.svg": 597,
            "./loader.svg": 598,
            "./point.svg": 599,
            "./vibin-bold-preloader.svg": 600,
            "./vibin-bold-vertical.svg": 601,
            "./vibin-bold.svg": 602,
            "./vibin-logo.svg": 603,
            "./vibin.svg": 604
        };

        function i(e) {
            var t = a(e);
            return n(t)
        }

        function a(e) {
            if (!n.o(r, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return r[e]
        }
        i.keys = function() {
            return Object.keys(r)
        }, i.resolve = a, e.exports = i, i.id = 584
    },
    585: function(e, t) {
        e.exports = '<svg viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.235.236l4.761 4.76-4.76 4.768" stroke="currentColor" stroke-miterlimit="10"></path></svg>'
    },
    586: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path d="M12.1 4.3L6 10.2 3.5 7.8" fill="none" stroke="#1d1d1b" stroke-miterlimit="10"></path></svg>'
    },
    587: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><circle cx="15" cy="15" r="15"></circle><path fill="none" stroke="#ffe600" d="M9.5 20.5L20.4 9.6m.1 10.8L9.6 9.5"></path></svg>'
    },
    588: function(e, t) {
        e.exports = '<svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22.5" cy="22.5" r="22" stroke="#000"></circle><path d="M14.62 20.751c2.004 1.107 2.587 1.686 2.784 1.46.327-.374.799-.589 1.582-.862s1.307-1.65 1.36-1.922c.052-.273-.435-1.536-2.52-5.285-2.083-3.753-4.201-7.392-4.201-7.392.16 1.741-.592 5.96-1.012 8.992-.394 2.848.003 3.9 2.007 5.006v.003zM16.69 22.716c.038-.297-1.932-.11-3.03-.177-1.094-.068-1.933-.252-1.933-.252s.071.521-.274 1.426c-.349.91-.663 1.235-1.696 2.443-1.036 1.211-2.636 3.765-2.636 3.765s6.123-3.265 7.782-4.17c1.658-.904 1.785-3.035 1.785-3.035h.003zM27.292 16.245c-2.698 1.683-3.607 2.2-5.247 2.958-1.018.47-.561.69-1.545 2.011-.549.736-.801.767-1.424 1.178-.265.174.157.625.314 1.422-.049-.01-.077-.01-.077-.01s-2.303-.557-2.361-.097c-.059.46-.426 2.774-1.613 4.76-.364.608.188-.036 1.153 3.36.962 3.4 1.893 9.87 2.192 8.965 3.429-10.32 2.898-14.369 1.97-15.96.558.319 5.18 2.768 8.648-1.472 3.7-4.519 7.063-10.966 8.571-11.99 0 0-2.47-.18-10.58 4.88v-.005z" fill="#000"></path></svg>'
    },
    589: function(e, t) {
        e.exports = '<svg viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.72 3.483h1.384c.763 0 1.386-.007 1.386-.018 0-.04.303-3.138.322-3.294L6.835 0H0v8c0 4.4.011 8 .027 8 .022 0 3.115-.548 3.495-.62l.197-.037V9.47h2.353v-.537c0-.293.011-1.059.027-1.705L6.12 6.06H3.72V3.483zM59.897.221c-.061.004-1.47.113-3.131.247l-3.029.24v14.454l.125.018c.11.018 5.974.425 6.092.42.034 0 .045-.384.045-1.795v-1.796h-2.58V9.397h2.2v-3.12h-2.276V4.209l.087-.015c.045-.01.432-.025.861-.04.43-.01.987-.029 1.245-.043L60 4.089V.218l-.102.003zM40.725 1.658L40.72.762h-3.42l.023.207c.038.363.471 5.83.464 5.837-.004.008-.562-1.302-1.241-2.91a260.794 260.794 0 00-1.26-2.964c-.023-.04-1.07.146-2.79.494l-.163.032v12.474h3.378l-.02-.261c-.037-.486-.178-4.506-.163-4.666.012-.142.126.105 1.203 2.594a172.76 172.76 0 001.223 2.787c.022.021.55-.011 1.445-.084a69.746 69.746 0 001.416-.127c.004-.004-.015-2.62-.042-5.812-.026-3.193-.05-6.208-.05-6.705zm-26.364.889c-.634-.929-1.636-1.484-2.805-1.553-.186-.01-.383-.022-.436-.029a6.908 6.908 0 00-.513.018c-2.27.145-3.518 1.63-3.912 4.64-.08.625-.114 2.743-.057 3.484.19 2.401.869 3.962 2.075 4.756.65.425 1.625.653 2.589.599 1.097-.058 1.844-.356 2.516-.998.55-.526.85-1.02 1.138-1.861.403-1.176.585-2.932.494-4.76-.103-2.047-.425-3.32-1.09-4.296zm-3.454 9.157c-.186-.12-.326-.704-.395-1.672-.049-.708-.049-3.948 0-4.626.072-.958.201-1.488.395-1.615.106-.072.125-.069.235.044.277.287.395 1.43.395 3.875 0 3.011-.197 4.263-.63 3.994zm11.898-2.608l.19-.16c.63-.526 1.15-1.542 1.297-2.547.065-.439.023-1.527-.076-1.93-.38-1.578-1.385-2.805-2.668-3.262-.557-.196-.512-.192-3.15-.207L15.94.976v13.21h3.48l.023-.46c.015-.258.046-1.093.068-1.862.023-.77.054-1.444.069-1.498.019-.077.182.413.683 2.068.364 1.193.672 2.184.687 2.198.03.033 3.59-.236 3.628-.272.011-.014-.384-1.2-.877-2.645l-.895-2.62zm-2.365-2.53c-.163.574-.451.908-.884 1.035l-.087.022V3.99l.125.025c.064.011.182.051.258.087.27.127.49.454.607.904.08.3.069 1.255-.019 1.56zm4.012-5.55c-.038 0-.05.363-.05 1.687V4.39h1.936v9.723h3.643V4.971h1.973V1.596l-.083-.014c-.08-.018-7.317-.57-7.42-.566zm17.066.363v13.17h3.757V1.379h-3.757zm8.046.457c-2.057.105-3.769.192-3.803.192-.065.004-.068.109-.068 1.709v1.705h1.935v9.542h3.681v-9.94h2.05V3.337c0-.94-.012-1.702-.027-1.702-.019.004-1.712.091-3.768.2z" fill="#000"></path></svg>'
    },
    590: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none"><path d="M16 31c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C7.716 1 1 7.716 1 16c0 8.284 6.716 15 15 15z" stroke="#1D1D1B" stroke-miterlimit="10"></path><path d="M25.926 4.756A14.965 14.965 0 0116.002 8.5a14.989 14.989 0 01-9.924-3.744m0 22.476a14.965 14.965 0 019.924-3.744c3.804 0 7.272 1.416 9.924 3.744" stroke="#1D1D1B" stroke-miterlimit="10"></path><path d="M16 31c4.142 0 7.5-6.716 7.5-15 0-8.284-3.358-15-7.5-15-4.142 0-7.5 6.716-7.5 15 0 8.284 3.358 15 7.5 15zM1 16h30M16 31V1" stroke="#1D1D1B" stroke-miterlimit="10"></path></svg>'
    },
    591: function(e, t) {
        e.exports = '<svg viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.87 1.423C10.87.637 10.233 0 9.45 0c-.784 0-1.42.637-1.42 1.423v5.69c0 .786.636 1.423 1.42 1.423.784 0 1.42-.637 1.42-1.422V1.423zM7.026 14.4a1.425 1.425 0 000-2.011 1.417 1.417 0 00-2.007 0l-4.015 4.024a1.425 1.425 0 000 2.012 1.417 1.417 0 002.007 0L7.026 14.4zM15.89 18.425a1.417 1.417 0 002.007 0 1.425 1.425 0 000-2.012l-4.015-4.024a1.417 1.417 0 00-2.008 0 1.425 1.425 0 000 2.012l4.015 4.024z" fill="#000"></path></svg>'
    },
    592: function(e, t) {
        e.exports = '<svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.033 2.882L14.194.057l-5.663 5.64L2.924 0 .057 2.797l5.635 5.725L0 14.19l2.839 2.829 5.663-5.64 5.607 5.697 2.868-2.797-5.633-5.723 5.692-5.668-.003-.006z" fill="#000"></path></svg>'
    },
    593: function(e, t) {
        e.exports = '<svg viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.998 5.162l-3.04 9.922c1.789 2.077 3.04 5.736 3.04 5.736s1.252-3.659 3.04-5.736l-3.04-9.922zM1.49 5.99s1.675 9.794 1.056 11.55c0 0 1.934-.182 6.885 3.28l-3.609-4.806L1.49 5.99zM14.178 16.014l-3.609 4.806c4.951-3.462 6.885-3.28 6.885-3.28-.62-1.759 1.056-11.55 1.056-11.55l-4.332 10.027v-.003zM10.87 2.012L9.998 0l-.871 2.012.871 2.012.872-2.012zM19.489 1.172l-1.207 1.83.508 2.134L20 3.306l-.511-2.134zM.511 1.172L0 3.306l1.207 1.83.51-2.134-1.206-1.83z" fill="#000"></path></svg>'
    },
    594: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 329.54 417.09"><path d="M296.24 226.32l.7.7h0c17.82 18.26 25.25 44 20.81 72.66-5.38 34.8-21.92 64-47.8 84.38-26.52 20.93-62.3 32-103.49 32-23.31 0-41.86-2-59.84-4h-.12c-17.87-2-34.81-3.85-56.09-3.85H1.17l.29-1.89h0l.61-4h0l.34-2.2H4.6c7.81 0 14.19-1.6 19.52-5.32s9.47-9.47 13-17.57c7-16.14 11.66-42 17.67-80.83L81.92 121c3-19.44 5.35-35.61 6.69-48.93s1.67-23.82.65-31.94-3.41-14-7.68-17.76-10.22-5.4-18-5.4h-1.89L62 15h0l.61-3.95h0l.34-2.2h48c17.29 0 38.86-2 59.66-3.93l-.1-1 .1 1c21-1.95 42.56-4 60-4C265.86 1 292 7.72 308.3 20.35s23 31.14 19.23 55.27l1 .16-1-.16c-4.4 28.48-21 51.2-50.87 69.48l.52.85-.52-.85c-25.44 15.55-56.3 25.32-83.65 34-16.73 5.29-32.42 10.24-44.2 15.78a61.69 61.69 0 00-14.54 9c-3.67 3.24-6.1 6.84-6.73 10.93h0c-.41 2.68-.12 4.9 1.4 6.4s3.85 2 6.88 2 7-1 11.24-2.49 9.06-3.55 14.17-5.73c16.67-7.22 37.22-15.99 60.46-15.99 30.47 0 56.93 9.73 74.55 27.32zM73.86 396.63l-.13.79.76.29c22.75 8.71 41.15 12.68 70.25 12.72h.43c36.9 0 68.59-10.13 92.35-28.57s39.55-45.15 44.66-78.19c3.69-23.87.73-48.41-9.44-67S245.1 205.31 220 205.31c-16.79 0-32.88 6-47.56 11.92l-3.86 1.57c-6 2.42-11.67 4.74-17.12 6.56-6.6 2.21-12.76 3.64-18.46 3.64-3.39 0-6.4-1-8.38-2.88s-3.06-4.91-2.37-9.41c1.93-12.46 12.42-22.43 27.73-31.64 12-7.21 26.71-13.83 42.16-20.79 4.26-1.91 8.58-3.86 12.91-5.84 20-9.17 40.19-19.25 56.18-32.07s27.87-28.48 31-48.77c1.92-12.41.55-23-3.39-31.85s-10.43-16-18.66-21.5c-16.42-11-39.8-15.78-64-15.78-25.78 0-49.39 4-73.47 11.11l-.61.18-.1.62z" fill="#ffe600" stroke="#000" stroke-width="2"></path></svg>'
    },
    595: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.78 415.11"><path d="M113.09 399.16l-.29 1.89h0l-.61 3.95h0l-.34 2.2H1.17l.29-1.9h0l.61-3.94h0l.34-2.2H4.6c7.81 0 14.19-1.61 19.51-5.33s9.48-9.46 13-17.56c7-16.15 11.66-42 17.67-80.83L81.92 120c3-19.43 5.35-35.6 6.69-48.92s1.67-23.83.65-31.94-3.41-14-7.68-17.77S71.35 16 63.56 16h-1.88l.3-1.89h0l.61-3.94h0l.34-2.2h110.68l-.29 1.89h0l-.61 3.95h0l-.34 2.2h-2.19c-7.81 0-14.19 1.6-19.51 5.32s-9.48 9.47-13 17.56c-7 16.15-11.66 42-17.67 80.84l-27.14 175.4c-3 19.44-5.35 35.61-6.69 48.93s-1.67 23.83-.65 31.94 3.41 14 7.68 17.76 10.22 5.4 18 5.4z" fill="#ffe600" stroke="#000" stroke-width="2"></path></svg>'
    },
    596: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 398.64 416.11"><path d="M285.85 14.06h0l.61-3.94h0l.34-2.2h110.67l-.29 1.89h0l-.61 3.95h0l-.34 2.2H394c-7.81 0-14.19 1.6-19.51 5.32s-9.48 9.47-13 17.56c-7 16.15-11.66 42-17.67 80.84l-45.31 293.23-.34 2.2H291l-.41-.82h0L103.86 41.83l-1.4-2.8-.46 3.09L71.41 239.8l1 .16-1-.16c-8.11 52.45-7.73 95 1.24 122.9 7.56 23.6 20.84 36.46 38.57 36.46h1.88l-.3 1.89h0l-.61 3.95h0l-.34 2.2H1.17l.29-1.9h0l.61-3.94h0l.34-2.2H4.6c7.81 0 14.19-1.61 19.51-5.33s9.48-9.46 13-17.56c7-16.15 11.66-42 17.67-80.83L81.92 120c3-19.43 5.35-35.6 6.69-48.92s1.68-23.83.66-31.94-3.41-14-7.68-17.77S71.36 16 63.56 16h-1.87l.31-1.94h0l.61-3.94h0l.34-2.2h72.31l.41.82h0l164.64 329 1.41 2.8.48-3.1 25.07-162.1c8.11-52.45 7.73-95-1.24-122.89C318.44 28.81 305.17 16 287.44 16h-1.88z" fill="#ffe600" stroke="#000" stroke-width="2"></path></svg>'
    },
    597: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372.5 416.11"><path d="M1.17 16l.29-1.89h0l.61-3.94h0l.34-2.2H136l-.3 1.83h0l-.61 3.95h0l-.34 2.2h-2.19c-20.87 0-35.09 4.43-43.07 13.85-9.14 10.79-10.27 28-4.25 55.16h0l61.37 273.61.61 2.72 1.26-2.48c16.72-32.9 34.16-66.19 51.1-98.51l1.15-2.19.51-1c29.28-55.9 59.55-113.66 86.86-170.64a118.13 118.13 0 009.25-26.24c2-9.9 2.19-20.32-2.49-28.51C288.78 21.13 275.58 16 256.16 16h-1.88l.29-1.89h0l.61-3.94h0l.34-2.2h115.82L371 9.8h0l-.61 3.95h0l-.34 2.2h-2.18c-10.56 0-19.77 4.14-29.47 14.19S318.58 56.07 306 79.72h0l-178 334h0l-.77 1.44h-6.76l-.26-1.19h0L45.49 80h0C40.24 58.58 35.37 42.61 29 32c-3.2-5.32-6.81-9.35-11.08-12A27.17 27.17 0 003 16z" fill="#ffe600" stroke="#000" stroke-width="2"></path></svg>'
    },
    598: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49"><circle class="loader-circle" cx="24.5" cy="24.5" r="24" fill="#ffe600" stroke="#000" stroke-miterlimit="10"></circle><g class="wing wing-left"><path d="M20 15.23C17.69 11 15.36 7 15.36 7c.18 2-.65 6.66-1.11 10.05-.44 3.18 0 4.36 2.2 5.59s2.85 1.89 3.07 1.63a3.92 3.92 0 011.74-1c.86-.3 1.43-1.84 1.49-2.15s-.48-1.7-2.75-5.89zM15.4 24.61a14.61 14.61 0 01-2.13-.28 3.61 3.61 0 01-.3 1.59 8.16 8.16 0 01-1.86 2.73 48.6 48.6 0 00-2.9 4.21s6.73-3.65 8.56-4.66a4.47 4.47 0 002-3.39c0-.33-2.16-.12-3.37-.2z"></path></g><path class="wing wing-right" d="M30.39 17.58a44.45 44.45 0 01-5.77 3.3c-1.12.53-.62.77-1.7 2.25a4.33 4.33 0 01-1.57 1.32c-.29.19.17.7.35 1.59h-.09s-2.53-.63-2.59-.11a15.5 15.5 0 01-1.78 5.32c-.4.68.21 0 1.27 3.75s2.08 11 2.41 10c3.77-11.52 3.19-16 2.17-17.83.61.36 5.69 3.1 9.51-1.64 4.07-5.05 7.77-12.26 9.42-13.4 0 0-2.71-.2-11.63 5.45z"></path></svg>'
    },
    599: function(e, t) {
        e.exports = '<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 40V0" stroke="#000" stroke-miterlimit="10" data-line="vertical"></path><path d="M0 20h40" stroke="#000" stroke-miterlimit="10" data-line="horizontal"></path><path d="M20 30c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z" stroke="#000" stroke-miterlimit="10" data-line="large-circle"></path><path d="M20 25a5 5 0 100-10 5 5 0 000 10z" stroke="#000" stroke-miterlimit="10" data-line="small-circle"></path></svg>'
    },
    600: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1279.42 560"><g class="bold"><path class="letter letter-v" d="M298.03 560l65.6-560h-104l-28 372-27.2-372H86.03l64.8 560h147.2z"></path><path class="letter letter-i" d="M372.28 0h117.6v560h-117.6z"></path><path class="letter letter-b" d="M716.13 274.4c33.6-10.4 53.6-33.6 53.6-79.2V104c0-70.4-34.4-104-104.8-104h-153.6v560h155.2c69.6 0 104-33.6 104-104V343.2c0-38.4-16.8-59.2-54.4-68.8zm-88-178.4h16c6.4 0 8.8 2.4 8.8 8.8V224c0 5.6-2.4 8.8-8.8 8.8h-16zm25.6 360c0 5.6-2.4 8-8.8 8h-16.8V321.6h16.8c6.4 0 8.8 3.2 8.8 8.8z"></path><path class="letter letter-i" d="M790.25 0h117.6v560h-117.6z"></path><path class="letter letter-n" d="M1180.5 560V0h-97.6l1.6 213.6L1042.1 0H929.3v560h97.6l-3.2-234.4 48.8 234.4h108z"></path></g></svg>'
    },
    601: function(e, t) {
        e.exports = '<svg viewBox="0 0 1120 2190" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 424.2l1120 131.2v-208l-744-56 744-54.4V.2L0 129.8v294.4zM1120 807.913v-235.2H0v235.2h1120zM571.2 1260.4c20.8 67.2 67.2 107.2 158.4 107.2H912c140.8 0 208-68.8 208-209.6V850.8H0v310.4c0 139.2 67.2 208 208 208h225.6c76.8 0 118.4-33.6 137.6-108.8zM910.4 1134H672c-11.2 0-17.6-4.8-17.6-17.6v-32H928v32c0 12.8-4.8 17.6-17.6 17.6zm-433.6-49.6v33.6c0 12.8-6.4 17.6-17.6 17.6H208c-11.2 0-16-4.8-16-17.6v-33.6h284.8zM1120 1643.85v-235.2H0v235.2h1120zM0 2189.14h1120v-195.2l-427.2 3.2 427.2-84.8v-225.6H0v195.2l468.8-6.4L0 1973.14v216z" fill="#000"></path></svg>'
    },
    602: function(e, t) {
        e.exports = '<svg viewBox="0 0 1096 560" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M212.6 560L278.2 0h-104l-28 372L119 0H.6l64.8 560h147.2z" fill="#000" data-letter="v"></path><path d="M404.456 0h-117.6v560h117.6V0z" fill="#000" data-letter="i"></path><path d="M630.7 274.4c33.6-10.4 53.6-33.6 53.6-79.2V104c0-70.4-34.4-104-104.8-104H425.9v560h155.2c69.6 0 104-33.6 104-104V343.2c0-38.4-16.8-59.2-54.4-68.8zm-63.2-169.6V224c0 5.6-2.4 8.8-8.8 8.8h-16V96h16c6.4 0 8.8 2.4 8.8 8.8zm-24.8 216.8h16.8c6.4 0 8.8 3.2 8.8 8.8V456c0 5.6-2.4 8-8.8 8h-16.8V321.6z" fill="#000" data-letter="b"></path><path d="M822.425 0h-117.6v560h117.6V0z" fill="#000" data-letter="i2"></path><path d="M1095.07 560V0h-97.602l1.6 213.6L956.668 0h-112.8v560h97.6l-3.2-234.4 48.8 234.4h108.002z" fill="#000" data-letter="n"></path></svg>'
    },
    603: function(e, t) {
        e.exports = '<svg viewBox="0 0 93 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_373_20993)" fill="#000"><path d="M16.768 3.115h-.198l-.03.2-.04.26-.03.2h.198c1.256 0 2.084.338 2.461 1.005.586 1.034-.026 2.66-.442 3.536-1.787 3.764-3.768 7.58-5.684 11.273-1.125 2.168-2.287 4.406-3.4 6.617L5.61 8.229c-.391-1.784-.31-2.885.262-3.568.5-.596 1.401-.887 2.753-.887h.199l.03-.2.04-.26.03-.2H.102l-.03.2-.04.26-.031.2h.198c1.438 0 2.015 1.341 2.699 4.16l4.86 21.937.028.129h.531l.069-.13L19.967 7.93c1.639-3.107 2.641-4.156 3.972-4.156h.198l.03-.2.04-.26.03-.2H16.77zM25.456 3.115h-.198l-.031.2-.04.26-.03.2h.198c1.997 0 1.913 1.65 1.13 6.758l-1.766 11.529c-.783 5.107-1.204 6.759-3.201 6.759h-.198l-.03.2-.04.26-.031.2h7.333l.031-.2.04-.26.03-.2h-.198c-1.997 0-1.913-1.651-1.13-6.76l1.766-11.528c.783-5.108 1.204-6.759 3.201-6.759h.198l.03-.2.04-.26.031-.2h-7.135zM53.215 3.115h-.198l-.03.2-.04.26-.03.2h.197c1.998 0 1.913 1.65 1.13 6.758l-1.766 11.529c-.782 5.107-1.203 6.759-3.2 6.759h-.198l-.031.2-.04.26-.03.2h7.333l.03-.2.04-.26.031-.2h-.198c-1.997 0-1.913-1.651-1.13-6.76l1.766-11.528c.783-5.108 1.204-6.759 3.2-6.759h.199l.03-.2.04-.26.031-.2h-7.136zM83.052 3.115h-7.135l-.031.2-.04.26-.03.2h.198c1.112 0 1.96.811 2.448 2.35.578 1.818.605 4.6.078 8.044l-1.632 10.65L66.196 3.205l-.045-.09h-4.802l-.03.2-.04.26-.03.2h.197c1.999 0 1.913 1.65 1.13 6.758L60.81 22.062c-.782 5.107-1.203 6.759-3.2 6.759h-.198l-.031.2-.04.26-.03.2h7.333l.03-.2.04-.26.031-.2h-.198c-1.112 0-1.96-.812-2.448-2.35-.578-1.82-.605-4.602-.078-8.044l1.99-12.989L76.16 29.91l.045.09h.562l.03-.2 2.951-19.267c.783-5.108 1.204-6.759 3.201-6.759h.198l.031-.2.04-.26.03-.2h-.198.001z"></path><path d="M48.872 17.418c-1.16-1.17-2.9-1.814-4.897-1.814-1.527 0-2.875.582-3.96 1.05-.665.287-1.24.534-1.627.534s-.526-.137-.474-.474c.152-.994 2.035-1.595 4.215-2.291 1.778-.568 3.794-1.212 5.457-2.239 1.958-1.208 3.05-2.716 3.34-4.61.492-3.21-1.77-4.978-6.372-4.978-1.14 0-2.549.132-3.912.26-1.354.127-2.754.259-3.875.259h-3.178l-.031.2-.04.26-.03.2h.198c1.997 0 1.913 1.65 1.13 6.758L33.05 22.062c-.783 5.107-1.204 6.759-3.201 6.759h-.198l-.03.2-.04.26-.031.2h3.28c1.385 0 2.485.122 3.651.253 1.17.13 2.38.266 3.901.266 2.692 0 5.035-.733 6.774-2.119 1.698-1.352 2.782-3.283 3.135-5.585.295-1.926-.21-3.658-1.419-4.878zm-9.877 12.077c-1.9 0-3.094-.259-4.574-.83l3.786-24.72c1.562-.467 3.092-.726 4.762-.726 3.134 0 6.027 1.246 5.534 4.466-.804 5.245-10.54 5.739-11.06 9.14-.096.622.3.883.763.883 1.516 0 3.502-1.558 5.66-1.558 3.211 0 4.457 3.272 3.98 6.387-.66 4.31-4.073 6.96-8.85 6.96v-.002zM85.529 4.572c.644.362.83.551.894.477.105-.122.257-.192.508-.281.252-.09.42-.54.437-.628.017-.09-.14-.502-.809-1.726C85.889 1.189 85.209 0 85.209 0c.051.569-.19 1.946-.325 2.936-.127.93 0 1.274.645 1.635zM86.194 5.214c.012-.097-.621-.036-.974-.058a4.45 4.45 0 01-.62-.082s.022.17-.089.465c-.112.298-.213.404-.545.798-.333.396-.847 1.23-.847 1.23s1.968-1.066 2.5-1.362c.533-.295.574-.99.574-.99h.001zM89.6 3.1c-.867.55-1.16.72-1.686.967-.327.153-.18.225-.497.656-.176.24-.257.25-.457.385-.086.057.05.204.1.464-.015-.003-.024-.003-.024-.003s-.74-.182-.759-.032c-.019.15-.137.907-.518 1.555-.117.198.06-.012.37 1.098s.609 3.222.705 2.927c1.101-3.37.93-4.693.633-5.212.179.104 1.664.904 2.779-.48 1.188-1.476 2.269-3.582 2.753-3.916 0 0-.793-.06-3.4 1.594V3.1z"></path></g><defs><clipPath id="clip0_373_20993"><path fill="#fff" d="M0 0h93v30H0z"></path></clipPath></defs></svg>'
    },
    604: function(e, t) {
        e.exports = '<svg viewBox="0 0 1244 407" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.942 17.415l.28-1.808h0l.592-3.835h0l.327-2.114h129.746l-.28 1.808h0l-.591 3.835h0l-.328 2.114h-2.102c-20.279 0-34.112 4.303-41.875 13.473-8.886 10.494-9.982 27.213-4.134 53.619v.003l59.635 265.87.608 2.711 1.259-2.477c16.244-31.964 33.194-64.312 49.652-95.718l1.116-2.129.497-.95c28.456-54.309 57.864-110.436 84.406-165.806 3.124-6.513 6.997-15.846 8.986-25.502 1.983-9.627 2.132-19.76-2.421-27.724-5.909-10.338-18.758-15.37-37.631-15.37h-1.792l.28-1.808h0l.592-3.835h0l.327-2.114H361.572l-.28 1.808h0l-.591 3.835h0l-.328 2.115h-2.102c-10.262 0-19.218 4.03-28.648 13.8-9.389 9.726-19.303 25.195-31.543 48.177 0 0 0 0 0 0L125.109 403.897v.001l-.738 1.38h-6.53l-.253-1.128v-.001L45.008 79.704l-.001-.01-.003-.01c-5.1-20.828-9.838-36.347-16.042-46.66-3.112-5.175-6.622-9.09-10.778-11.706-4.166-2.623-8.92-3.903-14.45-3.903H1.942zM1134.43 15.607h0l.6-3.835h0l.32-2.114H1242.83l-.28 1.808h0l-.59 3.835h0l-.33 2.115h-2.1c-7.59 0-13.8 1.556-18.98 5.175-5.17 3.612-9.21 9.205-12.64 17.077-6.82 15.692-11.33 40.828-17.16 78.555l-44.08 284.941-.32 2.115h-6.92l-.39-.78v-.001L957.581 42.576l-1.403-2.8-.479 3.096-29.706 192.088.988.152-.988-.152c-7.878 50.967-7.507 92.302 1.205 119.43 7.355 22.936 20.265 35.446 37.508 35.446h1.792l-.28 1.808-.001.001-.591 3.834v.001l-.328 2.114H857.802l.281-1.809h0l.591-3.834v-.001l.328-2.114h2.101c7.596 0 13.8-1.557 18.981-5.178 5.17-3.613 9.214-9.207 12.638-17.08 6.823-15.693 11.332-40.83 17.169-78.549l26.378-170.5c2.921-18.886 5.196-34.6 6.496-47.542 1.298-12.932 1.63-23.156.64-31.045-.99-7.887-3.318-13.58-7.47-17.278-4.154-3.7-9.956-5.248-17.534-5.248h-1.792l.28-1.809h0l.591-3.835h0l.328-2.114h70.231l.389.78h.001l159.981 319.663 1.4 2.804.48-3.099 24.37-157.514c7.88-50.967 7.51-92.302-1.21-119.43-7.35-22.936-20.26-35.446-37.5-35.446h-1.8l.28-1.809zM729.914 220.91l.707.706.01-.01c17.3 17.737 24.51 42.721 20.201 70.567-5.231 33.809-21.295 62.138-46.439 81.975-25.767 20.325-60.522 31.116-100.542 31.116-22.648 0-40.678-1.993-58.148-3.933h-.001l-.113-.012c-17.37-1.921-33.829-3.74-54.512-3.74h-47.831l.28-1.808v-.001l.592-3.834v-.001l.327-2.114h2.102c7.596 0 13.799-1.557 18.98-5.177 5.17-3.614 9.215-9.208 12.638-17.081 6.824-15.693 11.333-40.83 17.169-78.549l26.378-170.5c2.922-18.886 5.196-34.6 6.494-47.542 1.297-12.931 1.628-23.156.637-31.045-.991-7.887-3.32-13.579-7.471-17.277-4.153-3.701-9.953-5.25-17.528-5.25h-1.792l.28-1.808h0l.592-3.835h0l.327-2.114h46.602c16.803 0 37.758-1.945 57.967-3.824l-.093-.996.093.996c20.371-1.897 41.357-3.846 58.328-3.846 34.269 0 59.631 6.527 75.492 18.801 15.782 12.212 22.306 30.232 18.675 53.68l.988.153-.988-.153c-4.28 27.663-20.379 49.732-49.419 67.485l.522.853-.522-.853c-24.716 15.117-54.701 24.605-81.279 33.008-16.259 5.138-31.499 9.956-42.955 15.338-5.73 2.692-10.571 5.55-14.137 8.701-3.568 3.153-5.926 6.658-6.543 10.639l-.001.001c-.401 2.606-.117 4.773 1.371 6.244 1.442 1.424 3.759 1.926 6.704 1.926 3.07 0 6.795-.963 10.926-2.416 4.148-1.459 8.811-3.45 13.773-5.571 16.204-6.923 36.16-15.437 58.739-15.437 29.606 0 55.308 9.455 72.42 26.538zM513.818 386.373l-.124.799.755.288c22.105 8.456 39.986 12.318 68.26 12.356l.015.015h.415c35.858 0 66.663-9.846 89.76-27.767 23.105-17.928 38.435-43.892 43.398-76.002 3.59-23.2.715-47.051-9.172-65.146-9.913-18.143-26.874-30.474-51.258-30.474-16.328 0-31.964 5.835-46.229 11.592-1.262.51-2.514 1.019-3.754 1.523-5.79 2.354-11.333 4.607-16.628 6.376-6.428 2.147-12.407 3.548-17.907 3.548-3.291 0-6.209-.918-8.128-2.792-1.884-1.838-2.963-4.752-2.29-9.115 1.872-12.097 12.052-21.777 26.931-30.727 11.639-7 25.944-13.437 40.958-20.192 4.142-1.864 8.337-3.752 12.546-5.682 19.414-8.906 39.056-18.706 54.601-31.169 15.559-12.474 27.088-27.678 30.138-47.4 1.867-12.065.539-22.344-3.296-30.97-3.834-8.623-10.144-15.53-18.138-20.897-15.962-10.716-38.69-15.34-62.193-15.34-25.052 0-47.99 3.854-71.399 10.792l-.607.18-.097.626-56.557 365.578zM427.509 389.836l-.28 1.808v.001l-.592 3.834v.001l-.327 2.114H318.814l.28-1.809h0l.592-3.835h0l.327-2.114h2.102c7.596 0 13.8-1.557 18.98-5.178 5.171-3.613 9.215-9.207 12.638-17.08 6.824-15.693 11.333-40.83 17.17-78.549l26.377-170.5c2.922-18.886 5.196-34.6 6.494-47.542 1.298-12.932 1.628-23.157.637-31.045-.99-7.888-3.32-13.58-7.47-17.278-4.153-3.7-9.954-5.248-17.529-5.248h-1.792l.28-1.809h0l.592-3.835h0l.328-2.114h107.495l-.28 1.808h0l-.591 3.835h-.001l-.327 2.115h-2.102c-7.595 0-13.799 1.556-18.98 5.175-5.17 3.612-9.215 9.205-12.638 17.077-6.824 15.691-11.333 40.828-17.169 78.555l-26.378 170.5c-2.922 18.886-5.195 34.6-6.494 47.542-1.297 12.931-1.628 23.156-.637 31.045.991 7.887 3.32 13.579 7.471 17.277 4.153 3.701 9.953 5.249 17.528 5.249h1.792z" fill="#ffe600" stroke="#000" stroke-width="2"></path><path d="M842.065 389.836l-.28 1.808v.001l-.592 3.834v.001l-.327 2.114H733.37l.28-1.809h0l.592-3.834v-.001l.327-2.114h2.102c7.596 0 13.799-1.557 18.98-5.178 5.17-3.613 9.215-9.207 12.638-17.08 6.824-15.693 11.333-40.83 17.169-78.549l26.378-170.5c2.922-18.886 5.197-34.6 6.496-47.542 1.298-12.932 1.63-23.156.641-31.045-.99-7.887-3.319-13.58-7.47-17.278-4.154-3.7-9.957-5.248-17.535-5.248h-1.792l.28-1.809h0l.592-3.835h0l.327-2.114H900.871l-.28 1.808h0l-.592 3.835h0l-.327 2.115h-2.102c-7.596 0-13.799 1.556-18.98 5.175-5.171 3.612-9.215 9.205-12.638 17.077-6.824 15.691-11.333 40.828-17.17 78.555l-26.377 170.5c-2.922 18.886-5.196 34.6-6.494 47.542-1.297 12.931-1.628 23.156-.637 31.045.991 7.887 3.32 13.579 7.47 17.277 4.154 3.701 9.954 5.249 17.529 5.249h1.792z" fill="#ffe600" stroke="#000" stroke-width="2"></path></svg>'
    },
    760: function(e, t, n) {
        var r = {
            "./ar.json": [801, 0],
            "./de.json": [802, 1],
            "./en.json": [803, 2],
            "./es-es.json": [804, 3],
            "./es-mx.json": [805, 4],
            "./fr.json": [806, 5],
            "./it.json": [807, 6],
            "./ja.json": [808, 7],
            "./ko.json": [809, 8],
            "./pl.json": [810, 9],
            "./pt-br.json": [811, 10],
            "./ru.json": [812, 11],
            "./tr.json": [813, 12]
        };

        function i(e) {
            if (!n.o(r, e)) return Promise.resolve().then((function() {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }));
            var t = r[e],
                i = t[0];
            return n.e(t[1]).then((function() {
                return n.t(i, 3)
            }))
        }
        i.keys = function() {
            return Object.keys(r)
        }, i.id = 760, e.exports = i
    },
    769: function(e, t, n) {
        var r = {
            "./default/default.fs.glsl": 770,
            "./default/default.vs.glsl": 771
        };

        function i(e) {
            var t = a(e);
            return n(t)
        }

        function a(e) {
            if (!n.o(r, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return r[e]
        }
        i.keys = function() {
            return Object.keys(r)
        }, i.resolve = a, e.exports = i, i.id = 769
    },
    770: function(e, t, n) {
        "use strict";
        n.r(t), t.default = "precision mediump float;\n\nvarying vec2 vUV;\n\nuniform sampler2D uTexture;\t\n\nvoid main(void) {\n\tgl_FragColor = texture2D(uTexture, vUV);\n}"
    },
    771: function(e, t, n) {
        "use strict";
        n.r(t), t.default = "attribute vec3 aPos;\nattribute vec2 aUV0;\n\nvarying vec2 vUV;\n\nvoid main(void) {\n\tvUV = aUV0;\n\tgl_Position = vec4(aPos, 1.0);\n}"
    },
    773: function(e, t, n) {
        "use strict";
        n.r(t), t.default = "precision mediump float;\n\n#extension GL_OES_standard_derivatives : enable\n\nvarying vec2 vUV;\n//varying vec2 vUV0;\n//varying vec2 vScreen;\n\nuniform sampler2D _SortedTexture;\nuniform sampler2D _Texture;\nuniform highp vec4 _ElementRect;\nuniform float _RoundedCorner;\nuniform float _IsSprite;\nuniform float _inAnimation;\nuniform vec2 _Direction;\nuniform vec4 _SpriteRect;\nuniform float _RoundedCornerRadius; //50, 20\n\n#define _BarCount 5.\n\nfloat roundedCorner(vec2 uv, float cornerIndex){\n\n  if(cornerIndex < 1.5){\n    //top left\n    uv.y = 1. - uv.y;\n  }else if(cornerIndex < 2.5){\n    //bottom right\n    uv.x = 1. - uv.x;\n  }else{\n    //top left and bottom right\n    if(uv.y < .5) uv.x = 1. - uv.x;\n    uv.y = min( uv.y, 1. - uv.y);\n  }\n\n  vec2 size = abs(_ElementRect.zw - _ElementRect.xy);\n  vec2 p = uv *  size;\n\n  //in pixels\n  float r = _RoundedCornerRadius;\n  float d = distance(p, vec2(r));\n  float a = smoothstep(r,r - fwidth(d), d);\n  if(max(p.x,  p.y) > r )a = 1.;\n  return a;\n}\n\nvoid main(void) {\n  vec2 uv = vUV;\n\n  if(_IsSprite > .5){\n    uv.y = 1. - uv.y;\n    uv = mix(_SpriteRect.xy, _SpriteRect.zw, uv);\n  }\n\n  vec4 c = texture2D(_Texture, uv);\n\n  if(_IsSprite < .5){\n    vec3 t1 = texture2D(_SortedTexture, vUV).xyz;\n\n    float bar = floor((vUV.x * abs(_Direction.y) +  vUV.y * abs(_Direction.x)) * _BarCount);\n    float barPhase = bar / _BarCount;\n    barPhase += vUV.x * abs(_Direction.x) +  vUV.y * abs(_Direction.y);\n    float phase = smoothstep(barPhase, barPhase + 1., _inAnimation * 3.);\n\n    float aPhase = phase + fract(dot(t1, t1)) * .5;\n\n    c.xyz = mix(c.xyz, t1, smoothstep(1., .8, phase));\n    c.w = step(.5, aPhase);\n  }\n  //------------------------\n\n//  a *= _inAnimation;\n\n  if(_RoundedCorner > 0.) c.w *= roundedCorner(vUV, _RoundedCorner);\n\n  gl_FragColor = c;\n}\n"
    },
    774: function(e, t, n) {
        "use strict";
        n.r(t), t.default = "attribute vec3 aPos;\nattribute vec2 aUV0;\n\nuniform vec4 _ScreenRect;\nuniform vec4 _ElementRect;\n\n/*uniform vec3 _Data0;\n\n#define _Rotate2D _Data0.x\n#define _ElementAspect _Data0.y\n#define _SourceAspect _Data0.z*/\n\n//uniform float _Rotate2D;\n//uniform float _ElementAspect;\n//uniform float _SourceAspect;\n\nuniform vec2 _Hover;\n\nvarying vec2 vUV;\n//varying vec2 vUV0;\n//varying vec2 vScreen;\n//varying vec2 vScreenUVCover;\n//varying vec2 vElementUVCover;\n\nvoid main(void) {\n  vec2 pos = mix(_ElementRect.xy, _ElementRect.zw, aUV0);\n  //float screenAspect = _ScreenRect.z / _ScreenRect.w;\n\n  pos -= _ScreenRect.xy;\n  pos /= _ScreenRect.zw;\n\n  pos *= 2.;\n  pos = vec2(pos.x - 1., 1.-pos.y);\n\n  /*if (abs(_Rotate2D) > 0.001) {\n    vec2 center = (_ElementRect.xy + _ElementRect.zw) * .5;\n\n    center -= _ScreenRect.xy;\n    center /= _ScreenRect.zw;\n\n    center *= 2.;\n    center = vec2(center.x - 1., 1.-center.y);\n\n    pos -= center;\n    pos.x *= screenAspect;\n    pos = mat2(cos(_Rotate2D), -sin(_Rotate2D), sin(_Rotate2D), cos(_Rotate2D)) * pos;\n    pos.x /= screenAspect;\n    pos += center;\n  }*/\n\n  vUV = aUV0;\n/*\n  vUV0 = aUV0;\n  vUV = aUV0 - .5;\n\n//  float hoverEffect = 0.0075;\n//  vUV *= 1. - hoverEffect;\n//  vUV += _Hover * (hoverEffect * .5);\n\n  vUV = _ElementAspect > _SourceAspect ? vec2(vUV.x, vUV.y * _SourceAspect / _ElementAspect) :  vec2(vUV.x * _ElementAspect / _SourceAspect, vUV.y);\n\n  vUV += .5;\n\n  vScreen = clamp(pos, vec2(-1), vec2(1));\n  vScreenUVCover = screenAspect > 1. ? vec2(pos.x, pos.y  / screenAspect) :  vec2(pos.x * screenAspect, pos.y);\n  vScreenUVCover = vScreenUVCover * .5 + .5;*/\n\n/*  vElementUVCover = aUV0 - .5;\n  vElementUVCover = _ElementAspect > 1. ? vec2(pos.x, pos.y  / _ElementAspect) :  vec2(pos.x * _ElementAspect, pos.y);\n  vElementUVCover = vElementUVCover * .5 + .5;*/\n\n  gl_Position = vec4(pos, 1.0, 1.0);\n}\n"
    },
    775: function(e, t, n) {
        "use strict";
        n.r(t), t.default = "float aa(in float x){\n//\tfloat f = fwidth(x) * 1.5;\n  float f = 1.;\n\t//abs does not work well on thin lines\n\tfloat a = smoothstep(1., 1. -f, x);\n\treturn a * smoothstep(-1., -1. + f, x);\n}\n\n"
    },
    776: function(e, t, n) {
        "use strict";
        n.r(t), t.default = "\nfloat hash13(vec3 p3)\n{\n  p3  = fract(p3 * .1031);\n  p3 += dot(p3, p3.zyx + 31.32);\n  return fract((p3.x + p3.y) * p3.z);\n}\n\nuniform float uVisibility;\nuniform float uVisibilityRandomness;\n\nfloat getVisibility(vec3 p, float importance)\n{\n  //random importance offset\n  float r = hash13(p);\n  //animate it\n  float random = sin(uTime * (r + .5) * .6 + r * 6.28) * .5 + .5;\n  float x = importance + random * uVisibilityRandomness;\n  float visibility = smoothstep(1., 2., x + uVisibility * (2. + uVisibilityRandomness) - uVisibilityRandomness);\n\n  float d = distance(uCameraPosition, p);\n  visibility *= smoothstep(17., 13., d);\n\n  //exclude importance == 0\n  return visibility * step( 0.01, importance);\n}\n"
    },
    777: function(e, t, n) {
        "use strict";
        n.r(t), t.default = "precision mediump float;\n\nvarying vec2 vUV;\n\nuniform sampler2D _Texture;\nuniform sampler2D _TextureSorted;\nuniform float _Progress;\nuniform float _BarCount;\n\nvoid main(void) {\n  vec3 t0 = texture2D(_Texture, vUV).xyz;\n  vec3 t1 = texture2D(_TextureSorted, vUV).xyz;\n\n\n  float bar = floor(vUV.x * _BarCount);\n  float barPhase = bar / _BarCount;\n  barPhase += vUV.y;\n//  float transition = .25;\n  float phase = smoothstep(barPhase, barPhase + 1., _Progress * 2.5);\n\n//  float phase = smoothstep(barPhase, barPhase + transition, _Progress * (1. + transition));\n//  float a = smoothstep(0., .5, _Progress);\n//  float aPhase = phase + dot(t1, t1) * .25 - .5;\n  float aPhase = phase + fract(dot(t1, t1));\n  float a = step(.5, aPhase);\n\n//  vec3 t = mix(t0, t1, smoothstep(1., .9, barPhase) );\n  vec3 t = mix(t0, t1, smoothstep(1., .8, phase) );\n\tgl_FragColor = vec4(t, a);\n}\n"
    },
    778: function(e, t, n) {
        "use strict";
        n.r(t), t.default = "attribute vec3 aPos;\nattribute vec2 aUV0;\n\nvarying vec2 vUV;\n\nvoid main(void) {\n\tvUV = aUV0;\n\tgl_Position = vec4(aPos, 1.0);\n}"
    },
    779: function(e, t, n) {
        "use strict";
        n.r(t), t.default = "#ifdef LOD_EXTENSION\n#extension GL_EXT_shader_texture_lod : enable\n#endif\nprecision mediump float;\n\n#ifdef WEBGL2\n\t#version 300 es\n\n  out vec4 fragColor;\n\n  in vec3 vWorld;\n  in vec2 vUV;\n#else\n #define texture(s,uv) texture2D(s, uv)\n  varying vec3 vWorld;\n  varying vec2 vUV;\n#endif\n\n#ifdef COLOR\n  uniform vec4 _Color;\n#endif\n\n#ifdef TEXTURED\n\tuniform sampler2D _Texture;\n\tuniform vec4 _MainTex_ST;\n#endif\n\n#ifdef DETAIL_TEXTURED\n\tuniform sampler2D _DetailTexture;\n#endif\n\n#ifdef LIGHT_MAP\n  #ifdef WEBGL2\n    in vec2 vLightMapUv;\n  #else\n    varying vec2 vLightMapUv;\n  #endif\n\tuniform sampler2D _LightMap;\n\tuniform float _Brightness;\n\t//TODO: write out\n\t\t#ifdef LIGHT_MAP_AMOUNT\n\t  uniform float _LightmapAmount;\n\t#endif\n#endif\n\n#ifdef OPACITY\n\tuniform float _Opacity;\n#endif\n\n#ifdef FLOOR_REFLECTION\nuniform sampler2D _Reflection;\nuniform vec2 _Resolution;\n\nvec3 getReflection(float roughnessMip){\n  #ifdef WEBGL2\n    return texture(_Reflection, gl_FragCoord.xy / _Resolution, roughnessMip).xyz;\n  #else\n      #ifdef LOD_EXTENSION\n        return texture2DLodEXT(_Reflection, gl_FragCoord.xy / _Resolution, roughnessMip).rgb;\n      #else\n//  return texture2D(_Reflection, gl_FragCoord.xy / _Resolution, roughnessMip).rgb;\n      return texture2D(_Reflection, gl_FragCoord.xy / _Resolution).rgb;\n    #endif\n  #endif\n}\n#endif\n\n#ifdef FOG\n  uniform float _FogProgress;\n  uniform vec4 _Fog;\n  uniform vec4 _HeightFog;\n#endif\n\n#ifdef OVERVIEW_TERRAIN\n  uniform vec3 _EnvironmentColor;\n#endif\n\n#ifdef DEBUG\n  uniform float _ShowLightMapUV;\n  uniform float _ShowLightmap;\n  uniform float _ShowAlbedo;\n#endif\n\n#ifdef SPECULAR\n  #ifdef WEBGL2\n    in vec3 vNormal;\n  #else\n    varying vec3 vNormal;\n  #endif\n\n  uniform float _Roughness;\n  uniform float _Specular;\n  uniform float _SpecularDebug;\n  uniform float _Fresnel;\n  uniform float _FresnelPower;\n  uniform float _DoSpecular;\n\n  vec3 getSpecularLightColor(vec3 N, float roughness) {\n    float b = 1.- roughness;\n\n    float s = smoothstep(-roughness*.75-.25, roughness*.75 + .25, .75 * N.y);\n\n    vec3 l = normalize(vec3(1., 0.2, 0.1));\n    vec3 c = vec3(1.1, 0.9, 0.8);\n\n    vec3 sun = max(pow(max(0., dot(l, N)), 16. * (1. - .9 * roughness)) * b, 0.) * c;\n    return (.1 * s * b) + sun;\n  }\n\n    #ifdef USE_NORMAL_MAP\n      uniform sampler2D _NormalMap;\n      #ifdef WEBGL2\n       in mat3 vTBN;\n      #else\n        varying mat3 vTBN;\n      #endif\n    #endif\n\n\nvec3 getNormal() {\n  #ifdef USE_NORMAL_MAP\n  vec3 tl = texture(_NormalMap, vUV).xyz;\n  vec3 nm = tl * 2. - 1.;\n  //strength\n  // nm.z *= .5;\n  nm = normalize(nm);\n  return normalize(vTBN * nm);\n  #else\n  return normalize(vNormal);\n  #endif\n}\n#endif\n\n\n\n//uniform float _Gamma;\nuniform highp vec3 _CameraPosition;\n\nvoid main(void) {\n#ifdef COLOR\n\tvec4 c = _Color;\n//  c.xyz = pow( c.xyz, vec3(1. / _Gamma));\n#else\n\tvec4 c = vec4(1,1,1,1);\n#endif\n\n\t\t#ifdef TEXTURED\n\t\t  vec2 uvST = vUV * _MainTex_ST.xy + _MainTex_ST.zw;\n\t\t  #ifdef TRANSPARENT\n\n//\t\t      vec4 t = texture(_Texture, uvST);\n//          c.xyz *= pow(t.xyz, vec3(1. / _Gamma));\n//          c.w *= t.w;\n            c *= t;\n          #ifdef VEGETATION\n            if( c.w < .5)discard;\n          #endif\n      #else\n//        vec3 t = texture(_Texture, uvST).xyz;\n  //\t \t\t  c.xyz *= pow(t, vec3(1. / _Gamma));\n        c.xyz *= texture(_Texture, uvST).xyz;\n        #ifdef FLOOR_REFLECTION\n          //based on red marble\n          float roughnessMip = clamp(2.5 + (t.x- .75) * 8., 0., 6.);\n        #endif\n\n      #endif\n\t \t#endif\n\n\t \t#ifdef DETAIL_TEXTURED\n      //add filtered noise\n\t \t  c.xyz *= .95 + texture(_DetailTexture, vUV * 32.).x * .1;\n    #endif\n\n\t \t#ifdef LIGHT_MAP\n\t \t  vec3 lightmap = texture(_LightMap, vLightMapUv).xyz;\n      #ifdef LIGHT_MAP_AMOUNT\n        //for scale reference and plants\n        lightmap = mix(vec3(1.), lightmap, .65);\n      #endif\n//      c.xyz *= pow(lightmap, vec3(1./ _Gamma));\n    #endif\n\n  #ifdef SPECULAR\n  if(_DoSpecular > .5){\n    vec3 n = getNormal();\n    vec3 v = normalize(vWorld - _CameraPosition);\n    vec3 r = reflect(v, n);\n    float roughness = _Roughness;\n    float NdotV = abs(dot(n, -v));\n    vec3 spec = getSpecularLightColor(r, roughness) * _Specular;\n    spec += pow(1. -NdotV, _FresnelPower) * _Fresnel;\n    #ifdef DEBUG\n      c.xyz += spec * _SpecularDebug;\n    #else\n     c.xyz += spec;\n    #endif\n  }\n    #endif\n\n    #ifdef FLOOR_REFLECTION\n      #ifdef TEXTURED\n       vec3 reflection = getReflection(roughnessMip);\n        vec3 V = normalize(vWorld - _CameraPosition);\n        float y = 1. - abs(V.y);\n        c.xyz = mix(c.xyz, reflection, y * y * y * y);\n      #else\n        c.xyz *= getReflection(0.);\n  #endif\n\n    #endif\n\n    #ifdef FOG\n      if(_FogProgress > 0.){\n          float fd = 1. - _FogProgress;\n          fd *= fd * fd * fd * fd;\n          float d = distance(_CameraPosition, vWorld);\n          float fog = smoothstep(fd, fd * 4., d * .001);\n          c.xyz = mix( c.xyz,vec3(1,1,1),fog );\n      }\n       float d = distance(_CameraPosition, vWorld);\n       float distanceFog = 1.0 - exp( - d * _Fog.w );\n       float heightFog = smoothstep(_HeightFog.y, _HeightFog.x, vWorld.y) * smoothstep(0., _HeightFog.z, d) * _HeightFog.w;\n       c.xyz = mix( c.xyz, _Fog.xyz, max(distanceFog, heightFog) );\n    #endif\n\n\t \t#ifdef OPACITY\n      c.w *= _Opacity;\n    #endif\n\n    #ifdef OVERVIEW_TERRAIN\n      vec2 uv2 = vUV * 2. - 1.;\n      float l = length(uv2);\n      c.xyz = mix(_EnvironmentColor,  c.xyz, smoothstep(1., .65, l));\n    #endif\n\n    //gamma done in post\n\n\t  #ifdef DEBUG\n      #ifdef LIGHT_MAP\n        if(_ShowLightmap > 0.5)c.xyz = texture(_LightMap, vLightMapUv).xyz;\n      #endif\n      #ifdef TEXTURED\n        if(_ShowAlbedo > 0.5)c.xyz = texture(_Texture, vUV).xyz;\n      #endif\n    #endif\n\n    #ifdef LIGHT_MAP_AMOUNT\n      //scale reference shader is transparent\n      c.w = .5;\n     #endif\n\n      #ifdef WEBGL2\n        fragColor = c;\n      #else\n        gl_FragColor = c;\n      #endif\n }\n"
    },
    780: function(e, t, n) {
        "use strict";
        n.r(t), t.default = "#ifdef WEBGL2\n\t#version 300 es\n\n  layout(location = 0) in vec3 aPos;\n  layout(location = 1) in vec2 aUV0;\n\n  #ifdef INSTANCED\n    layout(location = 2) in vec2 aUV1;\n    layout(location = 3) in vec4 _LightMapScaleOffset;\n//    layout(location = 4) in mat4 _Model;\n\n    out vec2 vLightMapUv;\n  #else\n//    uniform mat4 _Model;\n    #ifdef LIGHT_MAP\n        layout(location = 2) in vec2 aUV1;\n        out vec2 vLightMapUv;\n      #endif\n  #endif\n\n  #ifdef SPECULAR\n      in vec3 aNormal;\n      out vec3 vNormal;\n    #endif\n\n    out vec2 vUV;\n    out vec3 vWorld;\n #else\n  //webgl1\n  attribute vec3 aPos;\n  attribute vec2 aUV0;\n\n    #ifdef LIGHT_MAP\n      attribute vec2 aUV1;\n      varying vec2 vLightMapUv;\n    #endif\n\n  #ifdef SPECULAR\n    attribute vec3 aNormal;\n    varying vec3 vNormal;\n  #endif\n\n  varying vec2 vUV;\n  varying vec3 vWorld;\n#endif\n\n#ifdef LIGHT_MAP\n   #ifdef INSTANCED\n   #else\n     uniform vec4 _LightMapScaleOffset;\n   #endif\n#endif\n\n//needs to be done like this, or else  uniform mat4 _Model is in 2 branches\n#ifdef INSTANCED\n  layout(location = 4) in mat4 _Model;\n#else\n  uniform mat4 _Model;\n#endif\n\nuniform mat4 _ViewProjection;\n\n#ifdef UV_SCALE_OFFSET\n   uniform vec4 _ScaleOffset;\n#endif\n\n\n#ifdef USE_NORMAL_MAP\n  #ifdef WEBGL2\n    in vec4 aTangent;\n    out mat3 vTBN;\n  #else\n    attribute vec4 aTangent;\n    varying mat3 vTBN;\n  #endif\n#endif\n\n//this will only work with instancing, not with merging\n/*#ifdef MOVEMENT\nuniform float _Time;\n\n#define m4  mat4( 0.00, 0.80, 0.60, -0.4, -0.80,  0.36, -0.48, -0.5, -0.60, -0.48, 0.64, 0.2, 0.40, 0.30, 0.20,0.4)\n#define m3 mat3(-0.73736, 0.45628, 0.49808, 0, -0.73736, 0.67549, 0.67549, 0.49808, 0.54371)\nvec3 movement(vec3 p)\n{\n  //keep matched with unity\n  float _Amplitude = 0.005;\n  float _SpatialFrequency = 4.;\n  float _TemporalFrequency = 2.;\n\n  vec3 q = p * _SpatialFrequency;\n  q.y +=  _Time * _TemporalFrequency;\n  float _Falloff = 0.618;\n  float a = 1.;\n  vec3 sum = vec3(0);\n  for(int i = 0; i <3 ; i++){\n    q = m3 * q;\n    vec3 s = sin( q.yxz / a) * a;\n    sum += s;\n    a *= _Falloff;\n  }\n  return sum * _Amplitude * length(aPos);\n}\n  #endif*/\n\nvoid main(void) {\n\tvUV = aUV0;\n\t#ifdef UV_SCALE_OFFSET\n\t\tvUV = vUV * _ScaleOffset.xy + _ScaleOffset.zw;\n\t#endif\n\n  vec4 world = _Model * vec4(aPos, 1.0);\n\n\n/*  #ifdef MOVEMENT\n  world.xyz += movement(world.xyz);\n  #endif*/\n\n  vWorld = world.xyz;\n  gl_Position = _ViewProjection * world;\n\n  #ifdef LIGHT_MAP\n    vLightMapUv = aUV1 * _LightMapScaleOffset.xy + _LightMapScaleOffset.zw;\n  #endif\n\n  #ifdef SPECULAR\n    vNormal =  mat3 (_Model ) * aNormal;\n//    vNormal = aNormal;\n\n    #ifdef USE_NORMAL_MAP\n    vec3 tangent = aTangent.xyz;\n    vec3 B = normalize(cross( tangent.xyz, aNormal));\n    B *= aTangent.w;\n    vTBN = mat3(tangent.xyz, B, aNormal);\n    //TODO: mat3(_Model) can go wrong with very extreme scales\n    vTBN = mat3(_Model) * vTBN;\n    #endif\n  #endif\n\n}\n\n"
    },
    781: function(e, t, n) {
        "use strict";
        n.r(t), t.default = "//precision mediump float;\nprecision highp float;\n\nvarying vec2 vUV;\n\nuniform sampler2D _Texture;\nuniform float _CountX;\nuniform float _CountY;\nuniform float _LayerAmp;\nuniform float _LayerTemporalFrequency;\nuniform highp float _Time;\nuniform float _Opacity;\n\n#define m2 mat2(-0.73739, 0.67546, -0.67546, -0.73739)\nvec2 sineNoise22(vec2 q)\n{\n  float a = 1.;\n  vec2 sum = vec2(0);\n  for(int i = 0; i <4 ; i++){\n    q = m2 * q;\n    vec2 s = sin(q / a) * a;\n//    q += s * _Twist;\n    sum += s;\n    a *= 0.618;\n  }\n  return sum;\n}\n\n\nvoid main(void) {\n  vec2 uv = vUV * vec2(_CountX, _CountY);\n  float f = fract(uv.y);\n  float layer = floor(uv.y);\n  uv.x += sineNoise22(vec2(_Time * _LayerTemporalFrequency, layer)).x * _LayerAmp;\n  uv.x += fract(layer * .618);\n  float a = texture2D(_Texture, uv).x;\n  //prevent mipmapping artifacts:\n  a *= step(max(f, 1. - f), .99);\n\n  //fade out sides\n  a *= smoothstep(.5, .4, abs(vUV.x - .5));\n  a *= _Opacity;\n\n\tgl_FragColor = vec4(0,0,0,a);\n//\tgl_FragColor = vec4(1,1,0,a);\n}\n"
    },
    782: function(e, t, n) {
        "use strict";
        n.r(t), t.default = "attribute vec3 aPos;\nattribute vec2 aUV0;\n\nvarying vec2 vUV;\n\nuniform mat4 _World;\nuniform mat4 _ViewProjection;\nuniform float _Twist;\nuniform float _Falloff;\nuniform float _Frequency;\nuniform float _Amplitude;\nuniform float _AmplitudeZ;\nuniform float _Time;\nuniform float _TemporalFrequency;\nuniform float _Height;\nuniform float _Sphere;\nuniform float _DeformTime;\n\n#define m3 mat3(-0.7373, 0.4562, 0.4980, 0, -0.7373, 0.6754, 0.6754, 0.4980, 0.5437)\nvec3 twistedSineNoise33(vec3 q)\n{\n  float a = 1.;\n  vec3 sum = vec3(0);\n  for(int i = 0; i <5 ; i++){\n    q = m3 * q;\n    vec3 s = sin( q.zxy / a) * a;\n    q += s * _Twist;\n    sum += s;\n    a *= _Falloff;\n  }\n  return sum;\n}\n\n\n\nvoid main(void) {\n\tvUV = aUV0;\n  vec3 p = aPos;\n  p.y *= _Height;\n\n  vec3 q = p * _Frequency;\n//  q.z += _Time * _TemporalFrequency;\n  q.z += _DeformTime;\n\n  vec3 n = twistedSineNoise33(q) * _Amplitude;\n  n.z *= _AmplitudeZ;\n\n  p += n;\n\n  float l = length(aPos.xy);\n  p.z -= l * l * _Sphere;\n\n\tgl_Position = _World * _ViewProjection * vec4(p, 1.0);\n}\n"
    },
    800: function(e, t, n) {
        "use strict";
        n.r(t);
        n(581);
        var r = n(35),
            i = n(168),
            a = n.n(i),
            o = n(359),
            s = (n(582), n(12));
        s.default.sensibleDefaults = !1;
        var l = {},
            u = n(24),
            c = n.n(u),
            h = n(38),
            f = n.n(h),
            d = n(584),
            v = {
                name: "Icon",
                props: {
                    name: s.default.string.isRequired
                },
                computed: {
                    icon: function() {
                        return d("./".concat(this.name, ".svg"))
                    }
                },
                watch: {
                    $route: function() {
                        "fortnite-logo" === this.name && this.updateTitle()
                    }
                },
                mounted: function() {
                    if ("fortnite-logo" === this.name) {
                        var e = this.$el.querySelector("svg");
                        e.setAttribute("id", "fortnite"), e.setAttribute("role", "img"), e.setAttribute("aria-labelledby", "fortniteTitle");
                        var t = document.createElementNS("http://www.w3.org/2000/svg", "title"),
                            n = document.createTextNode("");
                        t.setAttribute("id", "fortniteTitle"), t.appendChild(n), e.insertBefore(t, e.firstChild), this.titleText = n, this.updateTitle()
                    }
                },
                methods: {
                    updateTitle: function() {
                        var e = this;
                        return f()(c.a.mark((function t() {
                            return c.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.$nextTick();
                                    case 2:
                                        "fortnite-logo" === e.name && e.titleText && (e.titleText.nodeValue = e.$t("home.alt-fortnite-logo"));
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                }
            },
            p = n(232),
            m = n(16);
        var y = Object(m.a)(v, (function() {
                var e = this.$createElement;
                return (this._self._c || e)("span", {
                    class: [this.$style.icon],
                    domProps: {
                        innerHTML: this._s(this.icon)
                    }
                })
            }), [], !1, (function(e) {
                this.$style = p.default.locals || p.default
            }), null, null).exports,
            _ = y,
            g = {
                Icon: _
            },
            E = n(245),
            A = "production",
            T = "development",
            R = "staging",
            x = "local",
            w = {
                LOCALE: "locale",
                API: "api",
                VIEWER_LOCATION: "viewer-location"
            },
            b = {
                LOCALE_ENABLED: "locale-enabled",
                LOCALE_ROUTING_ENABLED: "locale-routing-enabled",
                STATIC_ROOT: "static-root",
                PUBLIC_PATH: "public-path",
                VERSIONED_STATIC_ROOT: "versioned-static-root"
            },
            S = {
                DEFAULT_LOCALE: "default-locale",
                AVAILABLE_LOCALES: "available-locales",
                PERSIST_QUERY_PARAMS: "persist-query-params"
            },
            k = n(9),
            M = n.n(k),
            L = {},
            O = function(e, t) {
                L[e] = t
            },
            I = function(e) {
                return L[e]
            },
            N = function() {
                var e = navigator.language.toLowerCase(),
                    t = I("configManager").getProperty(S.AVAILABLE_LOCALES).map((function(e) {
                        return e.code
                    })),
                    n = t.find((function(t) {
                        return t === e
                    }));
                if (!n) {
                    var r = e.substring(0, 2);
                    n = t.find((function(e) {
                        return e.substring(0, 2) === r
                    }))
                }
                return n
            };

        function C(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function D(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? C(Object(n), !0).forEach((function(t) {
                    M()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var P = function() {
                var e = I("configManager"),
                    t = e.getProperty(S.AVAILABLE_LOCALES).map((function(e) {
                        return "string" === typeof e ? {
                            code: e,
                            urlPrefix: e,
                            translationKey: e
                        } : D(D({}, e), {}, {
                            urlPrefix: e.urlPrefix || e.code,
                            translationKey: e.translationKey || e.code
                        })
                    })),
                    n = {
                        persistent: !1,
                        defaultCode: N() || e.getProperty(S.DEFAULT_LOCALE),
                        languages: t
                    };
                return {
                    localeEnabled: e.getVariable(b.LOCALE_ENABLED),
                    localeRoutingEnabled: e.getVariable(b.LOCALE_ROUTING_ENABLED),
                    config: n
                }
            },
            F = n(98),
            U = n.n(F),
            B = n(8),
            z = n(120),
            V = n(50),
            G = n(34),
            X = n(0),
            H = n.n(X),
            j = n(2),
            $ = n.n(j),
            W = n(5),
            Y = n.n(W),
            q = n(6),
            K = n.n(q),
            Z = n(1),
            Q = n.n(Z),
            J = n(13),
            ee = n(4),
            te = n(54);

        function ne(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var re = function(e) {
                Y()(n, e);
                var t = ne(n);

                function n() {
                    return H()(this, n), t.apply(this, arguments)
                }
                return $()(n, [{
                    key: "transitionInSidebars",
                    value: function(e) {
                        var t = e.$refs,
                            n = t.sidebarLeft,
                            r = t.sidebarRight,
                            i = J.default.timeline();
                        return i.add(this.getTimeline(n, te.TransitionDirection.IN), 0), i.add(this.getTimeline(r, te.TransitionDirection.IN), 0), i
                    }
                }, {
                    key: "setupTransitionInTimeline",
                    value: function(e, t, n) {
                        var r = t.$refs,
                            i = r.hero,
                            a = r.characters,
                            o = t.$refs.localeSwitcher,
                            s = t.$refs.sidebarLeft.$refs,
                            l = s.logoTop,
                            u = s.logoBottom,
                            c = t.$refs.sidebarRight.$refs,
                            h = c.logoTop,
                            f = c.logoBottom;
                        e.add(this.getTimeline(i, te.TransitionDirection.IN)), e.add(this.getTimeline(a, te.TransitionDirection.IN), 0), e.add(this.transitionInSidebars(t), 1.6), e.fromTo([f, u], {
                            y: "100%"
                        }, {
                            y: "0%",
                            duration: 1,
                            ease: ee.j.easeOut
                        }, 1.3), e.fromTo([h, o], {
                            y: "-150%"
                        }, {
                            y: "0%",
                            duration: 1,
                            ease: ee.j.easeOut
                        }, 1.3), e.fromTo(l, {
                            y: "-100%"
                        }, {
                            y: "0%",
                            duration: 1,
                            ease: ee.j.easeOut
                        }, 2.7)
                    }
                }, {
                    key: "setupTransitionOutTimeline",
                    value: function(e, t, n) {}
                }, {
                    key: "setupLoopingAnimationTimeline",
                    value: function(e, t, n) {}
                }]), n
            }(B.AbstractTransitionController),
            ie = n(51);

        function ae(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var oe = function(e) {
                Y()(n, e);
                var t = ae(n);

                function n() {
                    return H()(this, n), t.apply(this, arguments)
                }
                return $()(n, [{
                    key: "setupTransitionInTimeline",
                    value: function(e, t, n) {
                        var r = t.$refs.ticker,
                            i = t.$refs,
                            a = i.titleWrapper,
                            o = i.titleWrapperInner,
                            s = i.content,
                            l = i.hashtag,
                            u = a.querySelector('[data-letter="v"]'),
                            c = a.querySelector('[data-letter="i"]'),
                            h = a.querySelector('[data-letter="i2"]'),
                            f = a.querySelector('[data-letter="n"]');
                        e.set(a, {
                            scale: 1
                        }, 0), e.set(o, {
                            rotate: 0
                        }, 0), e.add((function() {
                            u.style.transform = "translateX(0)", c.style.transform = "translateX(0)", h.style.transform = "translateX(0)", f.style.transform = "translateX(0)"
                        }), 1), e.add(this.getTimeline(r, te.TransitionDirection.IN), 1.3), e.fromTo(s, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: .6,
                            ease: ee.h.easeNone
                        }, 1.5), e.fromTo(l, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: .6,
                            ease: ee.h.easeNone
                        }, 1.8)
                    }
                }, {
                    key: "setupTransitionOutTimeline",
                    value: function(e, t, n) {}
                }, {
                    key: "setupLoopingAnimationTimeline",
                    value: function(e, t, n) {}
                }]), n
            }(B.AbstractTransitionController),
            se = n(99);
        J.default.registerPlugin(se.a);
        var le = {
            VinnieInOut: se.a.create("VinnieInOut", "M0,0 C0.2,0 0,1 1,1"),
            InOutPause: se.a.create("InOutPause", "M0,0,C0.094,0,0.322,0.518,0.544,0.518,0.796,0.518,0.838,1,1,1"),
            vibinZoom: se.a.create("custom", "M0,0 C0.12,0.192 0.102,0.922 0.462,0.976 0.622,1 0.752,1 1,1"),
            vibinRotation: se.a.create("custom", "M0,0 C0.234,0.23 0.492,1 1,1")
        };

        function ue(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var ce = function(e) {
                Y()(n, e);
                var t = ue(n);

                function n() {
                    return H()(this, n), t.apply(this, arguments)
                }
                return $()(n, [{
                    key: "setupTransitionInTimeline",
                    value: function(e, t, n) {
                        var r = t.$refs,
                            i = r.text,
                            a = r.arrowLeftWrapper,
                            o = r.arrowRightWrapper,
                            s = r.arrowLeft,
                            l = r.arrowRight;
                        e.fromTo(a, {
                            width: "0%"
                        }, {
                            width: "100%",
                            duration: 1,
                            ease: le.VinnieInOut
                        }, 0), e.fromTo(o, {
                            width: "0%"
                        }, {
                            width: "100%",
                            duration: 1,
                            ease: le.VinnieInOut
                        }, 0), e.fromTo(s, {
                            scale: 0
                        }, {
                            scale: 1,
                            duration: .6,
                            ease: le.VinnieInOut
                        }, 0), e.fromTo(l, {
                            scale: 0
                        }, {
                            scale: 1,
                            duration: .6,
                            ease: le.VinnieInOut
                        }, 0), e.fromTo(i, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: .5,
                            ease: ee.h.easeNone
                        }, .8)
                    }
                }, {
                    key: "setupTransitionOutTimeline",
                    value: function(e, t, n) {}
                }, {
                    key: "setupLoopingAnimationTimeline",
                    value: function(e, t, n) {}
                }]), n
            }(B.AbstractTransitionController),
            he = n(88),
            fe = {
                data: function() {
                    return {
                        isInView: !1,
                        start: "top 100%-=100px",
                        end: "bottom 100px",
                        markers: !1
                    }
                },
                mounted: function() {
                    this.hasUpdateCallback = !1, this.init()
                },
                beforeDestroy: function() {
                    this.scrollTrigger && (this.scrollTrigger.kill(), this.scrollTrigger = null)
                },
                methods: {
                    init: function() {
                        var e = this;
                        return f()(c.a.mark((function t() {
                            var n;
                            return c.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.$nextTick();
                                    case 2:
                                        (n = e.$refs.inViewTrigger || e.$el) && (e.scrollTrigger = he.b.create({
                                            trigger: n,
                                            start: e.start,
                                            end: e.end,
                                            markers: e.markers,
                                            onToggle: function(t) {
                                                var n = t.isActive;
                                                e.isInView = n
                                            },
                                            onUpdate: e.hasUpdateCallback ? e.onUpdate : null
                                        }));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    onUpdate: function() {}
                }
            },
            de = {
                name: "Ticker",
                extends: B.AbstractTransitionComponent,
                mixins: [fe],
                data: function() {
                    return {
                        start: "top 100%",
                        end: "bottom 0px"
                    }
                },
                methods: {
                    handleAllComponentsReady: function() {
                        this.transitionController = new ce(this), this.isReady()
                    }
                }
            },
            ve = n(233);
        var pe = Object(m.a)(de, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: [e.$style.ticker]
            }, [n("div", {
                class: e.$style.tickerInner
            }, [n("span", {
                class: [e.$style.arrow, e.$style.arrowLeft]
            }, [n("span", {
                ref: "arrowLeftWrapper",
                class: e.$style.arrowInner
            }, [n("span", {
                ref: "arrowLeft",
                class: e.$style.arrowIcon
            })])]), e._v(" "), n("div", {
                ref: "text",
                class: e.$style.tickerText
            }, [n("div", {
                ref: "inViewTrigger",
                class: [e.$style.textWrapper, e.$style[e.isInView ? "inView" : ""]]
            }, [n("span", [e._v(e._s(e.$t("home.ticker-season")))]), e._v(" "), n("span", {
                attrs: {
                    "aria-hidden": "true"
                }
            }, [e._v(e._s(e.$t("home.ticker-season")))]), e._v(" "), n("span", {
                attrs: {
                    "aria-hidden": "true"
                }
            }, [e._v(e._s(e.$t("home.ticker-season")))]), e._v(" "), n("span", {
                attrs: {
                    "aria-hidden": "true"
                }
            }, [e._v(e._s(e.$t("home.ticker-season")))])])]), e._v(" "), n("span", {
                class: [e.$style.arrow, e.$style.arrowRight]
            }, [n("span", {
                ref: "arrowRightWrapper",
                class: e.$style.arrowInner
            }, [n("span", {
                ref: "arrowRight",
                class: e.$style.arrowIcon
            })])])])])
        }), [], !1, (function(e) {
            this.$style = ve.default.locals || ve.default
        }), null, null).exports;

        function me(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }
        var ye = {
                name: "Hero",
                components: {
                    Ticker: pe,
                    Icon: _
                },
                extends: B.AbstractTransitionComponent,
                data: function() {
                    return {
                        windowWidth: 0
                    }
                },
                computed: function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? me(Object(n), !0).forEach((function(t) {
                            M()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : me(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, Object(ie.d)({
                    deviceState: function(e) {
                        return e.app.deviceState
                    }
                })),
                beforeDestroy: function() {
                    this.disposables && this.disposables.dispose()
                },
                mounted: function() {
                    var e = this;
                    this.$webgl.pause(), this.windowWidth = window.innerWidth, this.disposables = new V.DisposableManager, this.disposables.add(Object(G.addEventListener)(window, "resize", U()((function() {
                        return e.onWindowResize()
                    }), 100))), this.resizeHero()
                },
                methods: {
                    handleAllComponentsReady: function() {
                        var e = this;
                        this.transitionController = new oe(this), this.disposables.add(Object(G.addEventListener)(this.transitionController, B.TransitionEvent.types.TRANSITION_IN_COMPLETE, (function() {
                            return e.onTransitionInComplete()
                        }))), this.isReady()
                    },
                    onWindowResize: function() {
                        this.windowWidth !== window.innerWidth && (this.windowWidth = window.innerWidth, this.resizeHero())
                    },
                    resizeHero: function() {
                        var e = this;
                        return f()(c.a.mark((function t() {
                            var n, r;
                            return c.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.$nextTick();
                                    case 2:
                                        n = 950, e.deviceState < e.DeviceState.MEDIUM ? n = 530 : e.deviceState < e.DeviceState.LARGE ? n = 650 : e.deviceState < e.DeviceState.XLARGE && (n = 800), r = .95 * window.innerHeight, e.$el.style.height = "".concat(r > n ? r : n, "px");
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    onTransitionInComplete: function() {
                        var e = this;
                        return f()(c.a.mark((function t() {
                            return c.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        e.$webgl.play();
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                }
            },
            _e = n(234);
        var ge = Object(m.a)(ye, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: [e.$style.hero]
            }, [n("Ticker", {
                ref: "ticker",
                class: e.$style.ticker
            }), e._v(" "), n("span", {
                ref: "hashtag",
                class: e.$style.hashtag,
                domProps: {
                    textContent: e._s(e.$t("home.hashtag"))
                }
            }), e._v(" "), n("div", {
                ref: "titleWrapper",
                class: e.$style.titleWrapper
            }, [n("div", {
                ref: "titleWrapperInner",
                class: e.$style.titleWrapperInner
            }, [n("Icon", {
                class: e.$style.vibinBoldIcon,
                attrs: {
                    name: "vibin-bold"
                }
            }), e._v(" "), n("Icon", {
                class: e.$style.vibinIcon,
                attrs: {
                    name: "vibin"
                }
            })], 1)]), e._v(" "), n("div", {
                ref: "content",
                class: e.$style.content
            }, [n("Icon", {
                class: e.$style.fortniteIcon,
                attrs: {
                    name: "fortnite-icon"
                }
            }), e._v(" "), n("div", [n("Icon", {
                class: e.$style.fortniteLogo,
                attrs: {
                    name: "fortnite-logo"
                }
            }), e._v(" "), n("p", {
                class: e.$style.copy,
                domProps: {
                    innerHTML: e._s(e.$t("home.chapter-season-description"))
                }
            })], 1)], 1)], 1)
        }), [], !1, (function(e) {
            this.$style = _e.default.locals || _e.default
        }), null, null).exports;

        function Ee(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var Ae = function(e) {
                Y()(n, e);
                var t = Ee(n);

                function n() {
                    return H()(this, n), t.apply(this, arguments)
                }
                return $()(n, [{
                    key: "getPointTransitionIn",
                    value: function(e) {
                        var t = e.querySelector('[data-line="vertical"]'),
                            n = e.querySelector('[data-line="horizontal"]'),
                            r = e.querySelector('[data-line="large-circle"]'),
                            i = e.querySelector('[data-line="small-circle"]'),
                            a = J.default.timeline();
                        return a.fromTo(e, {
                            rotate: -90
                        }, {
                            rotate: 0,
                            duration: 1.33,
                            ease: le.VinnieInOut
                        }, 0), a.add((function() {
                            t && (t.style.transform = "translate3d(0, 0, 0) scaleY(1)")
                        }), 0), a.add((function() {
                            n && (n.style.transform = "translate3d(0, 0, 0) scaleX(1)")
                        }), .13), a.fromTo(r, {
                            scale: 0,
                            transformOrigin: "50% 50%"
                        }, {
                            scale: 1,
                            duration: .667,
                            ease: le.VinnieInOut
                        }, .266), a.fromTo(i, {
                            scale: 0,
                            transformOrigin: "50% 50%"
                        }, {
                            scale: 1,
                            duration: .667,
                            ease: le.VinnieInOut
                        }, .466), a
                    }
                }, {
                    key: "setupTransitionInTimeline",
                    value: function(e, t, n) {
                        var r = t.$refs,
                            i = r.iconEvie,
                            a = r.iconMalik,
                            o = r.iconAdira,
                            s = r.topVerticalLine,
                            l = r.bottomVerticalLine,
                            u = r.topHorizontalLine,
                            c = r.bottomHorizontalLine,
                            h = r.pointTopWrapper,
                            f = r.pointBottomWrapper,
                            d = r.hashtag;
                        e.fromTo(a, {
                            opacity: 0,
                            scale: 1.4
                        }, {
                            opacity: 1,
                            duration: .4,
                            ease: ee.h.easeNone
                        }, 0), e.fromTo(a, {
                            scale: 1.4
                        }, {
                            scale: 1,
                            duration: 1,
                            ease: ee.h.easeNone
                        }, 0), e.fromTo(i, {
                            opacity: 0,
                            scale: 1.4
                        }, {
                            opacity: 1,
                            duration: .4,
                            ease: ee.h.easeNone
                        }, .13), e.fromTo(i, {
                            scale: 1.4
                        }, {
                            scale: 1,
                            duration: 1,
                            ease: ee.h.easeNone
                        }, .13), e.fromTo(o, {
                            opacity: 0,
                            scale: 1.4
                        }, {
                            opacity: 1,
                            duration: .4,
                            ease: ee.h.easeNone
                        }, .13), e.fromTo(o, {
                            scale: 1.4
                        }, {
                            scale: 1,
                            duration: 1,
                            ease: ee.h.easeNone
                        }, .13), e.fromTo(d, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: .5,
                            ease: ee.h.easeNone
                        }, .3), e.fromTo(s, {
                            height: "0%"
                        }, {
                            height: "100%",
                            duration: 1.3,
                            ease: ee.k.easeOut
                        }, .2), e.fromTo(l, {
                            height: "0%"
                        }, {
                            height: "100%",
                            duration: 1.3,
                            ease: ee.k.easeOut
                        }, .2), e.fromTo(u, {
                            scaleX: 0
                        }, {
                            scaleX: 1,
                            duration: .66,
                            ease: ee.k.easeOut
                        }, .46), e.fromTo(c, {
                            scaleX: 0
                        }, {
                            scaleX: 1,
                            duration: .66,
                            ease: ee.k.easeOut
                        }, .46), e.add(this.getPointTransitionIn(h), .86), e.add(this.getPointTransitionIn(f), .86)
                    }
                }, {
                    key: "setupTransitionOutTimeline",
                    value: function(e, t, n) {}
                }, {
                    key: "setupLoopingAnimationTimeline",
                    value: function(e, t, n) {}
                }]), n
            }(B.AbstractTransitionController),
            Te = {
                name: "Sidebar",
                components: {
                    Icon: _
                },
                extends: B.AbstractTransitionComponent,
                props: {
                    isReverse: s.default.bool
                },
                data: function() {
                    return {
                        hashtagVisbile: !0
                    }
                },
                beforeDestroy: function() {
                    this.disposables && this.disposables.dispose()
                },
                mounted: function() {
                    this.initEventListeners()
                },
                methods: {
                    handleAllComponentsReady: function() {
                        this.transitionController = new Ae(this), this.isReady()
                    },
                    initEventListeners: function() {
                        this.disposables = new V.DisposableManager, this.disposables.add(Object(G.addEventListener)(window, "scroll", this.handleScroll))
                    },
                    handleScroll: function() {
                        window.scrollY > 100 && this.hashtagVisbile ? (this.hashtagVisbile = !1, J.default.to(this.$refs.hashtag, {
                            opacity: 0,
                            duration: .3
                        })) : window.scrollY <= 100 && !this.hashtagVisbile && (this.hashtagVisbile = !0, J.default.to(this.$refs.hashtag, {
                            opacity: 1,
                            duration: .3
                        }))
                    }
                }
            },
            Re = n(235);
        var xe = Object(m.a)(Te, (function() {
                var e, t = this,
                    n = t.$createElement,
                    r = t._self._c || n;
                return r("div", {
                    class: [t.$style.sidebar, t.$style[t.isReverse ? "isReverse" : ""]]
                }, [r("div", {
                    ref: "logo" + (t.isReverse ? "Bottom" : "Top"),
                    class: [t.$style.logo]
                }, [r("Icon", {
                    class: t.$style.vibinLogo,
                    attrs: {
                        name: "vibin-logo"
                    }
                })], 1), t._v(" "), r("div", {
                    class: t.$style.sidebarContent
                }, [r("div", {
                    ref: "pointTopWrapper",
                    class: t.$style.pointWrapper
                }, [r("Icon", {
                    class: t.$style.point,
                    attrs: {
                        name: "point"
                    }
                })], 1), t._v(" "), r("span", {
                    class: [t.$style.line, t.$style.lineTop]
                }, [r("span", {
                    ref: "topVerticalLine",
                    class: t.$style.lineVertical
                }), t._v(" "), r("span", {
                    ref: "topHorizontalLine",
                    class: t.$style.lineHorizontal
                })]), t._v(" "), r("div", {
                    class: t.$style.characterIconWrapper
                }, [r("span", {
                    ref: "iconEvie",
                    class: t.$style.characterIcon
                }, [r("Icon", {
                    class: t.$style.iconEvie,
                    attrs: {
                        name: "icon-evie"
                    }
                })], 1), t._v(" "), r("span", {
                    ref: "iconMalik",
                    class: t.$style.characterIcon
                }, [r("Icon", {
                    class: t.$style.iconMalik,
                    attrs: {
                        name: "icon-malik"
                    }
                })], 1), t._v(" "), r("span", {
                    ref: "iconAdira",
                    class: t.$style.characterIcon
                }, [r("Icon", {
                    class: t.$style.iconAdira,
                    attrs: {
                        name: "icon-adira"
                    }
                })], 1)]), t._v(" "), r("span", {
                    class: t.$style.line
                }, [r("span", {
                    ref: "bottomVerticalLine",
                    class: t.$style.lineVertical
                }), t._v(" "), r("span", {
                    ref: "bottomHorizontalLine",
                    class: t.$style.lineHorizontal
                })]), t._v(" "), r("div", {
                    class: t.$style.pointWrapper
                }, [r("div", {
                    ref: "pointBottomWrapper"
                }, [r("Icon", {
                    class: t.$style.point,
                    attrs: {
                        name: "point"
                    }
                })], 1), t._v(" "), r("span", {
                    ref: "hashtag",
                    class: [t.$style.hashtag, (e = {}, e[t.$style.hashtagRight] = t.isReverse, e)],
                    attrs: {
                        dir: "ltr"
                    },
                    domProps: {
                        textContent: t._s(t.$t("home.hashtag"))
                    }
                })])]), t._v(" "), r("div", {
                    ref: "logo" + (t.isReverse ? "Top" : "Bottom"),
                    class: [t.$style.logo]
                }, [r("p", {
                    class: t.$style.logoText,
                    domProps: {
                        textContent: t._s(t.$t("home.chapter-season-short"))
                    }
                })])])
            }), [], !1, (function(e) {
                this.$style = Re.default.locals || Re.default
            }), null, null).exports,
            we = n(27),
            be = n.n(we),
            Se = n(85),
            ke = n.n(Se);

        function Me(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var Le = function(e) {
            Y()(n, e);
            var t = Me(n);

            function n() {
                return H()(this, n), t.apply(this, arguments)
            }
            return $()(n, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]), n
        }(B.AbstractTransitionController);

        function Oe(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var Ie = function(e) {
                Y()(n, e);
                var t = Oe(n);

                function n() {
                    return H()(this, n), t.apply(this, arguments)
                }
                return $()(n, [{
                    key: "setupTransitionInTimeline",
                    value: function(e, t, n) {}
                }, {
                    key: "setupTransitionOutTimeline",
                    value: function(e, t, n) {}
                }, {
                    key: "setupLoopingAnimationTimeline",
                    value: function(e, t, n) {}
                }]), n
            }(B.AbstractTransitionController),
            Ne = {
                MEDIUM: "medium",
                LARGE: "large"
            },
            Ce = {
                name: "RoundedImage",
                extends: B.AbstractTransitionComponent,
                props: {
                    src: s.default.string.isRequired,
                    alt: s.default.string,
                    size: s.default.oneOf(Object.values(Ne)).def(Ne.MEDIUM),
                    isLandscape: s.default.bool.def(!1),
                    isRoundedTopLeft: s.default.bool.def(!1),
                    isRoundedBottomRight: s.default.bool.def(!1)
                },
                beforeDestroy: function() {
                    this.tl && (this.tl.kill(), this.tl = null)
                },
                methods: {
                    handleAllComponentsReady: function() {
                        this.transitionController = new Ie(this), this.isReady(), this.initScrollTrigger()
                    },
                    initScrollTrigger: function() {
                        if (!this.tl) {
                            this.tl = J.gsap.timeline({
                                scrollTrigger: {
                                    trigger: this.$el,
                                    start: "top 90%",
                                    toggleActions: "play none none reverse"
                                }
                            });
                            var e = this.size === Ne.MEDIUM ? 1.1 : 1.3;
                            this.tl.fromTo(this.$el, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                duration: e,
                                ease: "power1.inOut"
                            })
                        }
                    }
                }
            },
            De = n(236);
        var Pe = Object(m.a)(Ce, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    class: [e.$style.roundedImage, e.$style[e.size], e.$style[e.isLandscape ? "isLandscape" : ""]]
                }, [n("img", {
                    class: ["hide", e.$style.image, e.$style[e.isRoundedTopLeft ? "roundedTopLeft" : ""], e.$style[e.isRoundedBottomRight ? "roundedBottomRight" : ""]],
                    attrs: {
                        src: e.src,
                        alt: e.alt || e.src
                    }
                })])
            }), [], !1, (function(e) {
                this.$style = De.default.locals || De.default
            }), null, null).exports,
            Fe = {
                altKey: "alt-group-shot-cutout",
                url: "{$versionRoot}image/characters.png"
            },
            Ue = {
                evie: {
                    images: [{
                        altKey: "alt-evie-skateboard",
                        url: "{$versionRoot}image/blueJay-01.jpg",
                        isLandscape: !0,
                        isRoundedTopLeft: !0,
                        roundedCorners: 1,
                        speed: 1.1,
                        mobileSpeed: 1.1
                    }, {
                        altKey: "alt-evie-shoes",
                        url: "{$versionRoot}image/blueJay-02.jpg",
                        roundedCorners: 2,
                        speed: .85,
                        mobileSpeed: .95
                    }, {
                        altKey: "alt-evie-wall",
                        url: "{$versionRoot}image/blueJay-03.jpg",
                        size: Ne.LARGE,
                        isRoundedTopLeft: !0,
                        isRoundedBottomRight: !0,
                        roundedCorners: 3,
                        speed: 1.125,
                        mobileSpeed: 1.1
                    }],
                    item: {
                        altKey: "alt-evie-backpack",
                        name: "backpack",
                        url: "{$versionRoot}image/sprite/backpack.png"
                    }
                },
                malik: {
                    images: [{
                        altKey: "alt-malik-kneeling",
                        url: "{$versionRoot}image/lancelot-01.jpg",
                        size: Ne.MEDIUM,
                        isRoundedBottomRight: !0,
                        roundedCorners: 2,
                        speed: 1.25,
                        mobileSpeed: 1
                    }, {
                        altKey: "alt-malik-3-outfits",
                        url: "{$versionRoot}image/lancelot-02.jpg",
                        size: Ne.LARGE,
                        isRoundedTopLeft: !0,
                        isRoundedBottomRight: !0,
                        roundedCorners: 3,
                        speed: 1.1,
                        mobileSpeed: 1.12
                    }, {
                        altKey: "alt-malik-cutout",
                        url: "{$versionRoot}image/lancelot-03.png",
                        size: Ne.LARGE,
                        isTransparent: !0,
                        speed: 1.16,
                        mobileSpeed: 1.1,
                        preload: !1
                    }],
                    item: {
                        altKey: "alt-malik-shield",
                        name: "shield",
                        url: "{$versionRoot}image/sprite/shield.png",
                        speed: 1,
                        mobileSpeed: 1
                    }
                },
                adira: {
                    images: [{
                        altKey: "alt-adira-sitting",
                        url: "{$versionRoot}image/fuchsia-01.jpg",
                        size: Ne.LARGE,
                        isRoundedTopLeft: !0,
                        isRoundedBottomRight: !0,
                        roundedCorners: 3,
                        speed: .92,
                        mobileSpeed: 1.15
                    }, {
                        altKey: "alt-group-shot-car",
                        url: "{$versionRoot}image/fuchsia-02.jpg",
                        size: Ne.LARGE,
                        isLandscape: !0,
                        isRoundedBottomRight: !0,
                        roundedCorners: 2,
                        speed: 1.1,
                        mobileSpeed: 1.1
                    }],
                    item: {
                        altKey: "alt-adira-flag",
                        name: "flag",
                        url: "{$versionRoot}image/sprite/flag.png",
                        speed: 1,
                        mobileSpeed: 1
                    }
                }
            };

        function Be(e) {
            return new Promise((function(t, n) {
                var r = new Image;
                r.onload = function() {
                    t(r)
                }, r.onerror = function() {
                    n()
                }, r.crossOrigin = "anonymous", r.src = e, r.style.display = "none"
            }))
        }
        var ze = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return Promise.all(t.map(Be))
            },
            Ve = s.default.shape({
                x: s.default.number,
                y: s.default.number,
                w: s.default.number,
                h: s.default.number
            }),
            Ge = s.default.shape({
                filename: s.default.string,
                frame: Ve,
                spriteSourceSize: Ve,
                sourceSize: s.default.shape({
                    w: s.default.number,
                    h: s.default.number
                }),
                rotated: s.default.bool.def(!1),
                trimmed: s.default.bool.def(!1)
            }),
            Xe = {
                name: "SpriteSheet",
                props: {
                    filename: s.default.string.isRequired,
                    frames: s.default.arrayOf(Ge),
                    metaSize: s.default.shape({
                        w: s.default.number,
                        h: s.default.number
                    }),
                    frame: s.default.number.def(0),
                    alt: s.default.string,
                    isForWebgl: s.default.bool.def(!1)
                },
                data: function() {
                    return {
                        containerWidth: 0,
                        currentFrame: 0
                    }
                },
                computed: {
                    style: function() {
                        if (!this.frames || !this.metaSize) return {};
                        var e = this.frames[this.currentFrame],
                            t = e.frame,
                            n = e.spriteSourceSize,
                            r = n.x,
                            i = n.y,
                            a = e.sourceSize,
                            o = e.rotated,
                            s = this.containerWidth > 0 ? this.containerWidth / a.w : 1;
                        return {
                            backgroundSize: "".concat(this.metaSize.w * s, "px ").concat(this.metaSize.h * s, "px"),
                            backgroundPosition: "-".concat(t.x * s, "px -").concat(t.y * s, "px"),
                            width: "".concat(o ? t.h * s : t.w * s, "px"),
                            height: "".concat(o ? t.w * s : t.h * s, "px"),
                            top: "".concat(i * s, "px"),
                            left: "".concat(r * s, "px"),
                            transform: o ? "rotate(-90deg) translate".concat("Y", "(-").concat(t.h * s, "px)") : "none"
                        }
                    }
                },
                beforeDestroy: function() {
                    this.disposables && this.disposables.dispose()
                },
                mounted: function() {
                    var e = this;
                    this.currentFrame = this.frame, this.disposables = new V.DisposableManager, this.disposables.add(Object(G.addEventListener)(window, "resize", U()((function() {
                        return e.handleResize()
                    }), 100))), this.handleResize()
                },
                methods: {
                    handleResize: function() {
                        this.containerWidth = this.$el.offsetWidth
                    }
                }
            },
            He = n(237);
        var je = Object(m.a)(Xe, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    class: [e.$style.spriteSheet]
                }, [e.isForWebgl ? n("img", {
                    attrs: {
                        src: e.filename,
                        alt: e.alt || e.filename
                    }
                }) : n("span", {
                    class: [e.$style.sprite],
                    style: Object.assign({}, {
                        backgroundImage: "url(" + e.filename + ")"
                    }, e.style)
                })])
            }), [], !1, (function(e) {
                this.$style = He.default.locals || He.default
            }), null, null).exports,
            $e = {
                name: "AnimatedSpriteSheet",
                extends: je,
                mixins: [fe],
                props: {
                    startFrame: s.default.number.def(0),
                    interval: s.default.number.def(0)
                },
                data: function() {
                    return {
                        start: "top 100%-=40px",
                        end: "bottom 40px"
                    }
                },
                watch: {
                    isInView: function(e) {
                        e && (this.requestTime = requestAnimationFrame(this.animate))
                    }
                },
                mounted: function() {
                    this.currentFrame = this.startFrame, this.lastFrame = this.frames ? this.frames.length - 1 : 11, this.previousRequestTime = 0, this.frameRate = 4, this.targetFrameRate = this.frameRate, this.hasUpdateCallback = !0, this.isInView && (this.requestTime = requestAnimationFrame(this.animate))
                },
                beforeDestroy: function() {
                    this.requestTime && cancelAnimationFrame(this.requestTime)
                },
                methods: {
                    animate: function(e) {
                        if (this.frameRate = this.targetFrameRate >= this.frameRate ? this.targetFrameRate : this.frameRate + .075 * (this.targetFrameRate - this.frameRate), e - this.previousRequestTime > 1e3 / this.frameRate) {
                            var t = this.currentFrame >= this.lastFrame;
                            this.currentFrame = t ? 0 : this.currentFrame + 1, this.previousRequestTime = e + (t ? this.interval : 0), this.$webgl.setSpriteSheetFrameIndex(this.currentFrame)
                        }
                        this.isInView && (this.requestTime = requestAnimationFrame(this.animate))
                    },
                    onUpdate: function(e) {
                        var t = e.getVelocity,
                            n = Math.ceil(Math.abs(t() / 50)) + 4;
                        this.targetFrameRate = Math.min(n, 30)
                    }
                }
            },
            We = n(238);
        var Ye, qe = Object(m.a)($e, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    class: [e.$style.animatedSpriteSheet]
                }, [e.isForWebgl ? n("img", {
                    attrs: {
                        src: e.filename,
                        alt: e.alt || e.filename
                    }
                }) : n("span", {
                    class: [e.$style.sprite],
                    style: Object.assign({}, {
                        backgroundImage: "url(" + e.filename + ")"
                    }, e.style)
                })])
            }), [], !1, (function(e) {
                this.$style = We.default.locals || We.default
            }), null, null).exports,
            Ke = n(86),
            Ze = n.n(Ke);
        ! function(e) {
            e[e.SEQUENCE = 0] = "SEQUENCE", e[e.IMAGE = 1] = "IMAGE", e[e.FILE = 2] = "FILE"
        }(Ye || (Ye = {}));
        var Qe = n(89),
            Je = function(e, t, n) {
                var r = e;
                return t && (r = r.replace("{$versionRoot}", t)), r = r.replace("{deviceState}/", "number" === typeof n && n < Qe.a.MEDIUM ? "mobile/" : "")
            },
            et = function(e, t, n) {
                var r = Je(e, t, n);
                return Ze.a.safari ? r : r.replace(".jpg", ".webp").replace(".png", ".webp")
            };

        function tt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function nt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? tt(Object(n), !0).forEach((function(t) {
                    M()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tt(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var rt = {
                name: "LookBook",
                components: {
                    RoundedImage: Pe,
                    SpriteSheet: je,
                    AnimatedSpriteSheet: qe
                },
                extends: B.AbstractTransitionComponent,
                data: function() {
                    return {
                        isMobileSize: !1
                    }
                },
                computed: {
                    lookBook: function() {
                        var e = this,
                            t = {};
                        return Object.entries(Ue).forEach((function(n) {
                            var r = ke()(n, 2),
                                i = r[0],
                                a = r[1],
                                o = a.images,
                                s = a.item;
                            t[i] = {
                                images: o.map((function(t) {
                                    return nt(nt({}, t), {}, {
                                        url: et(t.url, e.$versionRoot)
                                    })
                                })),
                                item: nt(nt({}, s), {}, {
                                    url: et(s.url, e.$versionRoot)
                                })
                            }
                        })), t
                    }
                },
                beforeDestroy: function() {
                    this.scrollTriggers && (this.scrollTriggers.forEach((function(e) {
                        e.kill()
                    })), this.scrollTriggers.length = 0), this.disposables && this.disposables.dispose()
                },
                mounted: function() {
                    this.loadAssets(), this.initScrollTrigger(), this.initResize()
                },
                methods: {
                    handleAllComponentsReady: function() {
                        this.transitionController = new Le(this), this.isReady()
                    },
                    loadAssets: function() {
                        var e = this;
                        return f()(c.a.mark((function t() {
                            var n;
                            return c.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = [], Object.entries(e.lookBook).forEach((function(t) {
                                            var r = ke()(t, 2)[1].images.filter((function(e) {
                                                return !1 === e.preload
                                            })).map((function(t) {
                                                var n = t.url;
                                                return et(n, e.$versionRoot)
                                            }));
                                            n.push(r)
                                        })), t.next = 4, ze.apply(void 0, be()(n.flat()));
                                    case 4:
                                        he.a.refresh(!0);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    initScrollTrigger: function() {
                        var e = this;
                        this.scrollTriggers = [], this.$refs.scrollTrigger.forEach((function(t, n) {
                            var r = he.a.create({
                                trigger: t,
                                start: "top 100%",
                                end: "bottom top",
                                onUpdate: function(t) {
                                    var r = t.progress;
                                    1 === n ? e.$webgl.setVibinSolidScroll(r) : e.$webgl.setVibinScroll(r)
                                }
                            });
                            e.scrollTriggers.push(r)
                        }));
                        var t = this.$refs.image.map((function(e) {
                                return e.$el
                            })),
                            n = this.$refs.sprite.map((function(e) {
                                return e.$el
                            }));
                        this.$webgl.trackElements([].concat(be()(t), be()(n)))
                    },
                    initResize: function() {
                        var e = window.matchMedia("(max-width: 1023px)");
                        this.disposables = new V.DisposableManager, this.disposables.add(Object(G.addEventListener)(e, "change", this.handleMediaQueryChange)), this.handleMediaQueryChange({
                            matches: window.innerWidth < 1024
                        })
                    },
                    handleMediaQueryChange: function(e) {
                        this.isMobileSize = e.matches
                    }
                }
            },
            it = n(239);
        var at = Object(m.a)(rt, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: [e.$style.lookBook],
                attrs: {
                    dir: "ltr"
                }
            }, e._l(e.lookBook, (function(t, r) {
                var i = t.images,
                    a = t.item;
                return n("div", {
                    key: "lookbook-" + r,
                    ref: "character",
                    refInFor: !0,
                    class: [e.$style.character, e.$style[r]]
                }, [n("span", {
                    ref: "scrollTrigger",
                    refInFor: !0,
                    class: e.$style.scrollTrigger
                }), e._v(" "), a ? n("div", {
                    class: ["invisible", e.$style.bwItem, e.$style[a.name]]
                }, [n("AnimatedSpriteSheet", {
                    ref: "sprite",
                    refInFor: !0,
                    class: e.$style.item,
                    attrs: {
                        filename: a.url,
                        "is-for-webgl": !0,
                        alt: e.$t("home." + a.altKey),
                        "data-image": a.url,
                        "data-is-sprite": !0,
                        "data-z-index": -1,
                        "data-speed": e.isMobileSize ? a.mobileSpeed : a.speed || 1
                    }
                })], 1) : e._e(), e._v(" "), n("ul", e._l(i, (function(t) {
                    return n("li", {
                        key: t.url,
                        class: [e.$style.imageWrapper]
                    }, [t.isTransparent ? n("img", {
                        class: [e.$style.image],
                        attrs: {
                            src: t.url,
                            alt: e.$t("home." + t.altKey)
                        }
                    }) : n("RoundedImage", {
                        ref: "image",
                        refInFor: !0,
                        class: ["invisible", e.$style.image],
                        attrs: {
                            src: t.url,
                            size: t.size,
                            "is-landscape": t.isLandscape,
                            "is-rounded-top-left": t.isRoundedTopLeft,
                            "is-rounded-bottom-right": t.isRoundedBottomRight,
                            alt: e.$t("home." + t.altKey),
                            "data-image": t.url,
                            "data-rounded-corners": t.roundedCorners || 0,
                            "data-speed": e.isMobileSize ? t.mobileSpeed : t.speed || 1
                        }
                    })], 1)
                })), 0)])
            })), 0)
        }), [], !1, (function(e) {
            this.$style = it.default.locals || it.default
        }), null, null).exports;

        function ot(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }
        var st = {
                name: "LocaleSwitcher",
                comments: {
                    Icon: y
                },
                data: function() {
                    return {
                        isOpen: !1,
                        hoveredCode: ""
                    }
                },
                computed: function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? ot(Object(n), !0).forEach((function(t) {
                            M()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ot(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, Object(ie.b)(["currentLanguage", "availableLanguages"])),
                methods: {
                    toggleLocaleSwitcher: function() {
                        this.isOpen = !this.isOpen
                    },
                    updateLocale: function(e) {
                        var t = this;
                        e !== this.currentLanguage.code && (this.$setLanguage(e), this.isOpen = !1, this.$el.style.pointerEvents = "none", setTimeout((function() {
                            t.$el.style.pointerEvents = "auto"
                        }), 450))
                    },
                    closeLocaleSwitcher: function() {
                        this.isOpen = !1
                    },
                    onMouseEnter: function(e) {
                        this.hoveredCode = e
                    },
                    onMouseLeave: function() {
                        this.hoveredCode = ""
                    }
                }
            },
            lt = n(240);
        var ut = Object(m.a)(st, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: [e.$style.localeSwitcher]
            }, [e.isOpen ? n("span", {
                class: e.$style.background,
                on: {
                    click: e.closeLocaleSwitcher,
                    touchend: e.closeLocaleSwitcher
                }
            }) : e._e(), e._v(" "), n("div", {
                class: e.$style.toggleButtonWrapper
            }, [n("button", {
                class: ["button", e.$style.toggleButton],
                attrs: {
                    "aria-label": "Open language selector",
                    type: "button"
                },
                on: {
                    click: e.toggleLocaleSwitcher
                }
            }, [n("Icon", {
                class: [e.$style.icon, e.$style.iconGlobe],
                attrs: {
                    name: "globe"
                }
            }), e._v(" "), e.isOpen ? n("Icon", {
                class: [e.$style.icon, e.$style.iconClose],
                attrs: {
                    name: "close"
                }
            }) : e._e()], 1)]), e._v(" "), n("ul", {
                class: [e.$style.localeList, e.$style[e.isOpen ? "open" : ""]]
            }, e._l(e.availableLanguages, (function(t, r) {
                var i = t.code,
                    a = t.name;
                return n("li", {
                    key: a + "-" + r,
                    class: e.$style.localeItem
                }, [n("button", {
                    class: ["button", e.$style.localeButton, e.$style[i === e.currentLanguage.code ? "selected" : ""], e.$style[e.hoveredCode && e.hoveredCode !== i ? "not-hovered" : ""]],
                    attrs: {
                        "aria-label": "Switch language to " + a,
                        type: "button"
                    },
                    on: {
                        click: function(t) {
                            return e.updateLocale(i)
                        },
                        mouseenter: function(t) {
                            return e.onMouseEnter(i)
                        },
                        mouseleave: e.onMouseLeave
                    }
                }, [i === e.currentLanguage.code ? n("Icon", {
                    class: [e.$style.iconCheck],
                    attrs: {
                        name: "check"
                    }
                }) : e._e(), e._v("\n        " + e._s(a) + "\n      ")], 1)])
            })), 0)])
        }), [], !1, (function(e) {
            this.$style = lt.default.locals || lt.default
        }), null, null).exports;

        function ct(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var ht = function(e) {
            Y()(n, e);
            var t = ct(n);

            function n() {
                return H()(this, n), t.apply(this, arguments)
            }
            return $()(n, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {
                    var r = t.$refs.ticker;
                    e.add(this.getTimeline(r, te.TransitionDirection.IN), 0)
                }
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]), n
        }(B.AbstractTransitionController);

        function ft(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function dt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ft(Object(n), !0).forEach((function(t) {
                    M()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ft(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var vt = {
                name: "Characters",
                components: {
                    Ticker: pe,
                    Icon: _
                },
                extends: B.AbstractTransitionComponent,
                computed: {
                    image: function() {
                        return dt(dt({}, Fe), {}, {
                            url: et(Fe.url, this.$versionRoot)
                        })
                    }
                },
                mounted: function() {
                    this.initScrollTrigger()
                },
                methods: {
                    handleAllComponentsReady: function() {
                        this.transitionController = new ht(this), this.isReady()
                    },
                    initScrollTrigger: function() {
                        J.default.fromTo(this.$el, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: .5,
                            scrollTrigger: {
                                trigger: this.$el,
                                start: "top 80%"
                            }
                        })
                    }
                }
            },
            pt = n(241);
        var mt = Object(m.a)(vt, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: [e.$style.characters]
            }, [n("div", {
                class: e.$style.contentWrapper,
                attrs: {
                    dir: "ltr"
                }
            }, [n("Icon", {
                class: e.$style.vibinBoldIcon,
                attrs: {
                    name: "vibin-bold-vertical"
                }
            }), e._v(" "), n("figure", {
                class: e.$style.figure,
                attrs: {
                    "data-speed": "1.2"
                }
            }, [n("img", {
                attrs: {
                    src: e.image.url,
                    alt: e.image.altKey
                }
            })])], 1), e._v(" "), n("Ticker", {
                ref: "ticker",
                class: e.$style.ticker
            })], 1)
        }), [], !1, (function(e) {
            this.$style = pt.default.locals || pt.default
        }), null, null).exports;

        function yt(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var _t = function(e) {
                Y()(n, e);
                var t = yt(n);

                function n() {
                    return H()(this, n), t.apply(this, arguments)
                }
                return $()(n, [{
                    key: "setupTransitionInTimeline",
                    value: function(e, t, n) {}
                }, {
                    key: "setupTransitionOutTimeline",
                    value: function(e, t, n) {}
                }, {
                    key: "setupLoopingAnimationTimeline",
                    value: function(e, t, n) {}
                }]), n
            }(B.AbstractTransitionController),
            gt = {
                name: "Footer",
                extends: B.AbstractTransitionComponent,
                methods: {
                    handleAllComponentsReady: function() {
                        this.transitionController = new _t(this), this.isReady()
                    }
                }
            },
            Et = n(242);
        var At = {
                name: "HomePage",
                components: {
                    LocaleSwitcher: ut,
                    Hero: ge,
                    Sidebar: xe,
                    LookBook: at,
                    Icon: _,
                    Characters: mt,
                    Footer: Object(m.a)(gt, (function() {
                        var e, t = this,
                            n = t.$createElement,
                            r = t._self._c || n;
                        return r("footer", {
                            class: [t.$style.footer]
                        }, [r("div", {
                            class: t.$style.footerTop
                        }, [r("p", {
                            class: t.$style.copy,
                            domProps: {
                                textContent: t._s(t.$t("home.footer-legal"))
                            }
                        }), t._v(" "), r("ul", {
                            class: [t.$style.linkList, (e = {}, e[t.$style.hasThreeLinks] = "home.footer-legal-imprint-link" !== t.$t("home.footer-legal-imprint-link"), e)]
                        }, [r("li", [r("a", {
                            class: t.$style.link,
                            attrs: {
                                href: t.$t("home.footer-legal-terms-link"),
                                target: "_blank",
                                rel: "noopener noreferrer"
                            },
                            domProps: {
                                textContent: t._s(t.$t("home.footer-legal-terms-text"))
                            }
                        })]), t._v(" "), r("li", [r("a", {
                            class: t.$style.link,
                            attrs: {
                                href: t.$t("home.footer-legal-privacy-link"),
                                target: "_blank",
                                rel: "noopener noreferrer"
                            },
                            domProps: {
                                textContent: t._s(t.$t("home.footer-legal-privacy-text"))
                            }
                        })]), t._v(" "), "home.footer-legal-imprint-link" !== t.$t("home.footer-legal-imprint-link") ? r("li", [r("a", {
                            class: t.$style.link,
                            attrs: {
                                href: t.$t("home.footer-legal-imprint-link"),
                                target: "_blank",
                                rel: "noopener noreferrer"
                            },
                            domProps: {
                                textContent: t._s(t.$t("home.footer-legal-imprint-text"))
                            }
                        })]) : t._e()]), t._v(" "), r("div", {
                            ref: "content",
                            class: t.$style.content
                        }, [r("Icon", {
                            class: t.$style.fortniteIcon,
                            attrs: {
                                name: "fortnite-icon"
                            }
                        }), t._v(" "), r("div", [r("Icon", {
                            class: t.$style.fortniteLogo,
                            attrs: {
                                name: "fortnite-logo"
                            }
                        }), t._v(" "), r("p", {
                            class: t.$style.contentCopy,
                            domProps: {
                                innerHTML: t._s(t.$t("home.chapter-season-description"))
                            }
                        })], 1)], 1)]), t._v(" "), r("div", {
                            class: t.$style.gameRating
                        }, [r("img", {
                            attrs: {
                                src: t.$versionRoot + "image/footer/" + t.$t("home.footer-rating-1"),
                                alt: t.$t("home.alt-footer-rating-1")
                            }
                        }), t._v(" "), "home.footer-rating-2" !== t.$t("home.footer-rating-2") ? r("img", {
                            attrs: {
                                src: t.$versionRoot + "image/footer/" + t.$t("home.footer-rating-2"),
                                alt: t.$t("home.alt-footer-rating-2")
                            }
                        }) : t._e()])])
                    }), [], !1, (function(e) {
                        this.$style = Et.default.locals || Et.default
                    }), null, null).exports
                },
                extends: B.AbstractPageTransitionComponent,
                beforeDestroy: function() {
                    this.scrollSmoother && z.a.kill(), this.disposables && this.disposables.dispose()
                },
                mounted: function() {
                    var e = this;
                    this.scrollSmoother = z.a.create({
                        smooth: 1,
                        smoothTouch: .1,
                        effects: !0
                    }), this.disposables = new V.DisposableManager, this.disposables.add(Object(G.addEventListener)(window, "resize", U()((function() {
                        return e.handleResize()
                    }), 200))), setTimeout((function() {
                        e.handleResize()
                    }), 200)
                },
                methods: {
                    handleAllComponentsReady: function() {
                        this.transitionController = new re(this), this.isReady()
                    },
                    handleResize: function() {
                        var e = this.$refs.smoothContent.offsetHeight,
                            t = this.$refs.footer.$el.offsetHeight;
                        this.$el.style.height = "".concat(e - t, "px")
                    }
                }
            },
            Tt = n(243);
        var Rt = Object(m.a)(At, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: [e.$style.homePage]
            }, [n("div", {
                class: e.$style.vibinFrame
            }, [n("Sidebar", {
                ref: "sidebarLeft"
            }), e._v(" "), n("Sidebar", {
                ref: "sidebarRight",
                attrs: {
                    "is-reverse": !0
                }
            })], 1), e._v(" "), n("div", {
                attrs: {
                    id: "smooth-wrapper"
                }
            }, [n("div", {
                ref: "smoothContent",
                attrs: {
                    id: "smooth-content"
                }
            }, [n("div", {
                ref: "localeSwitcher",
                class: e.$style.localeSwitcher
            }, [n("LocaleSwitcher")], 1), e._v(" "), n("Hero", {
                ref: "hero"
            }), e._v(" "), n("LookBook"), e._v(" "), n("Characters", {
                ref: "characters"
            }), e._v(" "), n("Footer", {
                ref: "footer"
            })], 1)])])
        }), [], !1, (function(e) {
            this.$style = Tt.default.locals || Tt.default
        }), null, null).exports;

        function xt(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var wt = function(e) {
                Y()(n, e);
                var t = xt(n);

                function n() {
                    return H()(this, n), t.apply(this, arguments)
                }
                return $()(n, [{
                    key: "setupTransitionInTimeline",
                    value: function(e, t, n) {}
                }, {
                    key: "setupTransitionOutTimeline",
                    value: function(e, t, n) {}
                }, {
                    key: "setupLoopingAnimationTimeline",
                    value: function(e, t, n) {}
                }]), n
            }(B.AbstractTransitionController),
            bt = {
                name: "WebglPage",
                extends: B.AbstractPageTransitionComponent,
                methods: {
                    handleAllComponentsReady: function() {
                        this.transitionController = new wt(this), this.isReady()
                    }
                }
            },
            St = n(244);
        var kt = Object(m.a)(bt, (function() {
                var e = this.$createElement;
                return (this._self._c || e)("div", {
                    class: [this.$style.webglPage]
                })
            }), [], !1, (function(e) {
                this.$style = St.default.locals || St.default
            }), null, null).exports,
            Mt = {
                HOME: "home",
                WEBGL: "webgl"
            },
            Lt = [{
                path: "/",
                component: Rt,
                name: Mt.HOME
            }, {
                path: "/webgl",
                component: kt,
                name: Mt.WEBGL
            }];
        Lt.pop();
        var Ot = Lt;
        r.default.use(E.a);
        var It, Nt = null,
            Ct = function() {
                if (!Nt) {
                    var e = P(),
                        t = I("configManager"),
                        n = e.localeEnabled && e.localeRoutingEnabled ? Object(i.routeParser)(Ot, N() || t.getProperty(S.DEFAULT_LOCALE)) : Ot.concat({
                            path: "*",
                            redirect: "/"
                        });
                    (Nt = new E.a({
                        mode: "history",
                        routes: n,
                        base: t.getVariable(b.PUBLIC_PATH)
                    })).beforeEach((function(e, n, r) {
                        var i = t.getProperty(S.PERSIST_QUERY_PARAMS),
                            a = !1,
                            o = Object.assign({}, e.query);
                        i && i.length > 0 && i.forEach((function(e) {
                            "undefined" !== typeof n.query[e] && "undefined" === typeof o[e] && (o[e] = n.query[e], a = !0)
                        })), a ? r({
                            path: e.path,
                            query: o
                        }) : r()
                    }))
                }
                return Nt
            },
            Dt = "".concat("app", "/setDeviceState"),
            Pt = "".concat("app", "/setImageSupported"),
            Ft = {
                app: {
                    state: {
                        deviceState: null,
                        filesSupported: {
                            webp: !1,
                            avif: !1
                        }
                    },
                    getters: {},
                    mutations: (It = {}, M()(It, Dt, (function(e, t) {
                        e.deviceState = t
                    })), M()(It, Pt, (function(e, t) {
                        e.filesSupported = t
                    })), It),
                    actions: {}
                }
            };
        r.default.use(ie.a);
        var Ut = null,
            Bt = function() {
                return Ut || (Ut = new ie.a.Store({
                    modules: Ft,
                    strict: !1
                })), Ut
            },
            zt = n(87),
            Vt = n.n(zt),
            Gt = n(169),
            Xt = n.n(Gt),
            Ht = {
                install: function(e, t) {
                    Object.keys(t).forEach((function(n) {
                        e.prototype[n] ? console.error("Skipping ".concat(n, ". ").concat(n, " already exists on the Vue prototype")) : Object.defineProperty(e.prototype, n, {
                            get: function() {
                                return t[n]
                            }
                        })
                    }))
                }
            };

        function jt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function $t(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? jt(Object(n), !0).forEach((function(t) {
                    M()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jt(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var Wt, Yt = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = $t($t({}, n), t);
                return e.replace(/:(\w+)/g, (function(e, t) {
                    return "undefined" !== typeof r[t] ? r[t] || "" : e
                })).replace(/\/:(\w+\?+)/g, (function() {
                    return ""
                })).replace(/\?/g, (function() {
                    return ""
                })).replace(/:(\w+)/g, (function(e, t) {
                    throw new Error('Param "'.concat(t, '" is missing in params'), r)
                }))
            },
            qt = {
                ID: "id",
                SLUG: "slug"
            },
            Kt = [],
            Zt = {
                isLoaded: function(e) {
                    return Kt.includes(e)
                },
                setLoadCallback: function(e) {
                    Wt = e
                },
                getTranslation: function(e) {
                    var t = e.translationKey,
                        r = e.code;
                    return n(760)("./".concat(t, ".json")).then((function(e) {
                        return Kt.push(r), Wt && setTimeout((function() {
                            Wt(r)
                        })), e
                    }))
                }
            };

        function Qt(e) {
            var t = I("configManager");
            return "".concat(t.getVariable(b.VERSIONED_STATIC_ROOT), "webgl/").concat(e)
        }
        var Jt = function() {
            function e() {
                H()(this, e)
            }
            return $()(e, null, [{
                key: "getStaticDir",
                value: function() {
                    return I("configManager").getVariable(b.VERSIONED_STATIC_ROOT)
                }
            }, {
                key: "getFileName",
                value: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return e.useWebp ? Qt(t + ".webp") : Qt(n ? t + ".png" : t + ".jpg")
                }
            }, {
                key: "checkImageFormatSupported",
                value: function(e) {
                    return new Promise((function(t) {
                        var n = new Image;
                        n.onload = function() {
                            return t(n.width > 0 && n.height > 0)
                        }, n.onerror = function() {
                            return t(!1)
                        };
                        try {
                            n.src = e
                        } catch (r) {
                            t(!1)
                        }
                    }))
                }
            }, {
                key: "checkWebpSupported",
                value: function() {
                    return e.checkImageFormatSupported("data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA")
                }
            }, {
                key: "checkAvifSupported",
                value: function() {
                    return e.checkImageFormatSupported("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABMAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgS0AAAAAABNjb2xybmNseAACAAIAAoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAABttZGF0EgAKBDgABokyCRAAAAAP+I9ngw==")
                }
            }]), e
        }();
        Jt.useWebp = !1, Jt.useAvif = !1;
        var en, tn, nn, rn, an = {
                ACTION: "button-type-action",
                LINK: "button-type-link",
                SHARE: "button-type-share",
                SUBMIT: "button-type-submit"
            },
            on = {
                INTERNAL: "link-type-internal",
                EXTERNAL: "link-type-external",
                EXTERNAL_BLANK: "link-type-external-blank",
                DOWNLOAD: "link-type-download"
            },
            sn = function(e) {
                return new Promise((function(t) {
                    Zt.isLoaded(e.getters.currentLanguage.code) ? t() : Zt.setLoadCallback((function(n) {
                        n === e.getters.currentLanguage.code && t()
                    }))
                }))
            },
            ln = function(e) {
                ! function() {
                    var e = I("configManager"),
                        t = Object.keys(Qe.b).reduce((function(e, t) {
                            return e[t] = Qe.b[t].replace(/'/g, ""), e
                        }), {});
                    J.default.registerPlugin(he.a, z.a), r.default.use(Ht, {
                        $config: e,
                        $gateway: I("gateway"),
                        $preloader: I("preloader"),
                        $webgl: I("webglManager"),
                        $sound: I("soundManager"),
                        $http: Vt.a,
                        $versionRoot: e.getVariable(b.VERSIONED_STATIC_ROOT),
                        $staticRoot: e.getVariable(b.STATIC_ROOT),
                        URLNames: w,
                        PropertyNames: S,
                        VariableNames: b,
                        RouteNames: Mt,
                        Params: qt,
                        ButtonType: an,
                        LinkType: on,
                        createPath: Yt,
                        $deviceStateTracker: new Xt.a({
                            mediaQueries: t,
                            deviceState: Qe.a,
                            showStateIndicator: !1
                        }),
                        DeviceState: Qe.a
                    })
                }();
                var t = I("configManager");
                return Promise.all([Jt.checkWebpSupported(), Jt.checkAvifSupported(), t.getVariable(b.LOCALE_ENABLED) ? sn(e) : Promise.resolve(), Promise.resolve()]).then((function(t) {
                    var n = ke()(t, 2),
                        r = n[0],
                        i = n[1];
                    e.commit(Pt, {
                        webp: r,
                        avif: i
                    })
                }))
            },
            un = n(361),
            cn = n.n(un),
            hn = {
                environments: (en = {}, M()(en, A, {
                    variables: {},
                    urls: {}
                }), M()(en, R, {
                    extends: A,
                    variables: {},
                    urls: {}
                }), M()(en, T, {
                    extends: R,
                    variables: {},
                    urls: {}
                }), M()(en, x, {
                    extends: T,
                    variables: {},
                    urls: {}
                }), en),
                variables: (tn = {}, M()(tn, b.LOCALE_ENABLED, !0), M()(tn, b.LOCALE_ROUTING_ENABLED, !0), M()(tn, b.VERSIONED_STATIC_ROOT, (window.webpackPublicPath || "/") + "version/1654382213211/static/"), M()(tn, b.STATIC_ROOT, (window.webpackPublicPath || "/") + ""), M()(tn, b.PUBLIC_PATH, window.webpackPublicPath || "/"), tn),
                urls: (nn = {}, M()(nn, w.API, "".concat("/", "api/")), M()(nn, w.VIEWER_LOCATION, "".concat("/", ".edge/viewer-location")), nn),
                properties: (rn = {}, M()(rn, S.DEFAULT_LOCALE, "en"), M()(rn, S.AVAILABLE_LOCALES, [{
                    name: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
                    code: "ar"
                }, {
                    name: "ENGLISH",
                    code: "en"
                }, {
                    name: "DEUTSCH",
                    code: "de"
                }, {
                    name: "ESPA\xd1OL (SPAIN)",
                    code: "es-es"
                }, {
                    name: "ESPA\xd1OL (LA)",
                    code: "es-mx"
                }, {
                    name: "FRAN\xc7AIS",
                    code: "fr"
                }, {
                    name: "ITALIANO",
                    code: "it"
                }, {
                    name: "\u65e5\u672c\u8a9e",
                    code: "ja"
                }, {
                    name: "\ud55c\uad6d\uc5b4",
                    code: "ko"
                }, {
                    name: "POLSKI",
                    code: "pl"
                }, {
                    name: "PORTUGU\xcaS (BRASIL)",
                    code: "pt-br"
                }, {
                    name: "\u0420\u0423\u0421\u0421\u041a\u0418\u0419",
                    code: "ru"
                }, {
                    name: "T\xdcRK\xc7E",
                    code: "tr"
                }]), M()(rn, S.PERSIST_QUERY_PARAMS, []), rn)
            },
            fn = A;
        switch (document.location.host.split(":").shift()) {
            case "localhost":
                fn = x;
                break;
            default:
                fn = A
        }
        var dn = {
            config: hn,
            environment: fn
        };

        function vn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function pn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? vn(Object(n), !0).forEach((function(t) {
                    M()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vn(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var mn = n(26),
            yn = n.n(mn),
            _n = n(53),
            gn = n.n(_n),
            En = n(362),
            An = n.n(En),
            Tn = n(119),
            Rn = n.n(Tn);

        function xn(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var wn = function(e) {
                Y()(n, e);
                var t = xn(n);

                function n() {
                    var e;
                    return H()(this, n), (e = t.call(this)).taskLoaderOptions = null, e.versionRoot = I("configManager").getVariable(b.VERSIONED_STATIC_ROOT), e.tasks = [], e.taskLoader = new An.a, e.taskLoader.addEventListener(Rn.a.UPDATE, e.onUpdate.bind(yn()(e))), e.taskLoader.addEventListener(Rn.a.COMPLETE, e.onComplete.bind(yn()(e))), e
                }
                return $()(n, [{
                    key: "addTask",
                    value: function(e) {
                        this.tasks.push(e)
                    }
                }, {
                    key: "start",
                    value: function(e) {
                        return this.loadTasks(this.tasks, e)
                    }
                }, {
                    key: "onUpdate",
                    value: function(e) {
                        this.taskLoaderOptions && this.taskLoaderOptions.onUpdate && this.taskLoaderOptions.onUpdate(e.data.progress)
                    }
                }, {
                    key: "onComplete",
                    value: function(e) {
                        this.taskLoaderOptions && this.taskLoaderOptions.onComplete && this.taskLoaderOptions.onComplete()
                    }
                }, {
                    key: "loadTasks",
                    value: function(e, t) {
                        return this.taskLoaderOptions = t || null, this.taskLoader.loadTasks(e)
                    }
                }]), n
            }(gn.a),
            bn = n(11),
            Sn = n.n(bn),
            kn = function() {
                function e() {
                    H()(this, e)
                }
                return $()(e, null, [{
                    key: "log",
                    value: function() {
                        if (e.ENABLED) {
                            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            console.log(n)
                        }
                    }
                }, {
                    key: "error",
                    value: function() {
                        if (e.ENABLED) {
                            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            console.error(n), console.trace()
                        }
                    }
                }, {
                    key: "getScreenLogDiv",
                    value: function() {
                        return e._screenLogDiv || (e._screenLogDiv = e.createDebugDiv()), e._screenLogDiv
                    }
                }, {
                    key: "logToScreen",
                    value: function(t) {
                        e.ENABLED && (e._screenLogDiv || (e._screenLogDiv = e.createDebugDiv()), e._screenLogDiv.innerHTML = t)
                    }
                }, {
                    key: "logAppendToScreen",
                    value: function(t) {
                        e.ENABLED && (e._screenLogDiv || (e._screenLogDiv = e.createDebugDiv()), e._screenLogDiv.innerHTML += t)
                    }
                }, {
                    key: "logArray",
                    value: function(t) {
                        if (e.ENABLED) {
                            for (var n = t.length, r = "", i = 0; i < n; i++) r += t[i], r += ",";
                            r = r.substring(0, r.length - 1), console.log(r)
                        }
                    }
                }, {
                    key: "log2dArray",
                    value: function(t) {
                        if (e.ENABLED) {
                            for (var n = t.length, r = "", i = 0; i < n; i++)
                                for (var a = 0; a < t[i].length; a++) r += t[i][a], r += ",";
                            r = r.substring(0, r.length - 1), console.log(r)
                        }
                    }
                }, {
                    key: "createDebugDiv",
                    value: function() {
                        var e = document.createElement("div");
                        return document.body.appendChild(e), e.style.position = "absolute", e.style.left = "0px", e.style.top = "0px", e.style.color = "#fff", e.style.backgroundColor = "#000", e.style.display = "block", e.style.width = "158px", e.style.height = "32px", e.style.padding = "1px", e.style.font = "10px Helvetica,Arial,sans-serif", e.style.lineHeight = "14px", e.style.zIndex = "1000", e
                    }
                }]), e
            }();
        kn.ENABLED = !0;
        var Mn = function() {
            function e() {
                H()(this, e), this.isDestructed = !1
            }
            return $()(e, [{
                key: "destruct",
                value: function() {
                    this.isDestructed && kn.error("Cannot destruct twice"), this.isDestructed = !0
                }
            }]), e
        }();

        function Ln(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var On = function(e) {
            Y()(n, e);
            var t = Ln(n);

            function n() {
                var e;
                return H()(this, n), (e = t.apply(this, arguments)).loadsRequested = [], e.loadsCompleted = 0, e.progress = 0, e._loading = !1, e.progressCallBack = void 0, e.callbackPerPreloadable = [], e
            }
            return $()(n, [{
                key: "add",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        n = this.loadsRequested.push(e) - 1;
                    return this.callbackPerPreloadable.push(t), this.loading && this.startLoader(n), e
                }
            }, {
                key: "load",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                    this.callback = e, this.progressCallBack = t, this.loadAll()
                }
            }, {
                key: "loadAll",
                value: function() {
                    if (0 !== this.loadsRequested.length) {
                        this._loading = !0;
                        for (var e = 0; e < this.loadsRequested.length; e++) this.startLoader(e)
                    } else this.loadDoneCallback()
                }
            }, {
                key: "setCallbackForPreloadable",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                    this.callbackPerPreloadable[this.getIndexOfPreloadable(e)] = t
                }
            }, {
                key: "getIndexOfPreloadable",
                value: function(e) {
                    return this.loadsRequested.indexOf(e)
                }
            }, {
                key: "startLoader",
                value: function(e) {
                    var t = this;
                    this.loadsRequested[e].load((function() {
                        var n = t.callbackPerPreloadable[e];
                        n && n(), t.loadDoneCallback()
                    }))
                }
            }, {
                key: "loadDoneCallback",
                value: function() {
                    this.loadsCompleted++, this.progress += (1 - this.progress) / (1 + this.loadsRequested.length - this.loadsCompleted), this.progressCallBack && (this.loadsRequested.length ? this.progressCallBack.call(this, this.progress) : this.progressCallBack.call(this, 1)), this.loadsCompleted >= this.loadsRequested.length && (this._loading = !1, this.callback && (this.callback.call(this), this.callback = null))
                }
            }, {
                key: "destruct",
                value: function() {
                    this.callback = void 0, Sn()(Q()(n.prototype), "destruct", this).call(this)
                }
            }, {
                key: "loading",
                get: function() {
                    return this._loading
                }
            }]), n
        }(Mn);

        function In(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var Nn = function(e) {
            Y()(n, e);
            var t = In(n);

            function n(e, r) {
                var i, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return H()(this, n), (i = t.call(this)).exposed = !1, i.name = r, i.id = n._id++, i.parent = e, i._callback = o, i._materials = a || [], i
            }
            return $()(n, [{
                key: "expose",
                value: function() {
                    this.exposed = !0
                }
            }, {
                key: "setUpdateUICallback",
                value: function(e) {
                    this._updateUIcallback = e
                }
            }, {
                key: "setChangeCallback",
                value: function(e) {
                    this._callback = e
                }
            }, {
                key: "setValue",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    e !== this._value && (this._value = e, this.setShaderUniform(e), this._callback && n && this._callback(this._value), !t && this._updateUIcallback && this._updateUIcallback.call(this, this.value))
                }
            }, {
                key: "setFromUI",
                value: function(e) {
                    this.setValue(e, !0)
                }
            }, {
                key: "setShaderUniform",
                value: function(e) {}
            }, {
                key: "value",
                get: function() {
                    return this._value
                }
            }]), n
        }(Mn);

        function Cn(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        Nn._id = 0;
        var Dn = function(e) {
            Y()(n, e);
            var t = Cn(n);

            function n(e, r) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return H()(this, n), t.call(this, e, r, null, i)
            }
            return $()(n, [{
                key: "value",
                get: function() {
                    return this._callback
                }
            }]), n
        }(Nn);

        function Pn(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var Fn = function(e) {
                Y()(n, e);
                var t = Pn(n);

                function n(e, r, i) {
                    var a, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    return H()(this, n), (a = t.call(this, e, r, o, s)).setValue(i, !1, !1), a
                }
                return $()(n, [{
                    key: "setShaderUniform",
                    value: function(e) {
                        for (var t = 0; t < this._materials.length; t++) this._materials[t].setFloat(this.name, !0 === e ? 1 : 0)
                    }
                }]), n
            }(Nn),
            Un = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    H()(this, e), this.x = t, this.y = n, this.z = r
                }
                return $()(e, [{
                    key: "clone",
                    value: function() {
                        return new e(this.x, this.y, this.z)
                    }
                }, {
                    key: "copy",
                    value: function(e) {
                        return this.x = e.x, this.y = e.y, this.z = e.z, this
                    }
                }, {
                    key: "setValues",
                    value: function(e, t, n) {
                        return this.x = e, this.y = t, this.z = n, this
                    }
                }, {
                    key: "length",
                    value: function() {
                        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
                    }
                }, {
                    key: "lengthSquared",
                    value: function() {
                        return this.x * this.x + this.y * this.y + this.z * this.z
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return "(" + this.x + ", " + this.y + ", " + this.z + ")"
                    }
                }, {
                    key: "equals",
                    value: function(e) {
                        return e.x === this.x && e.y === this.y && e.z === this.z
                    }
                }, {
                    key: "normalize",
                    value: function() {
                        var e = this.x * this.x + this.y * this.y + this.z * this.z;
                        return e > 0 && (e = 1 / Math.sqrt(e)), this.x *= e, this.y *= e, this.z *= e, this
                    }
                }, {
                    key: "negate",
                    value: function() {
                        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
                    }
                }, {
                    key: "multiplyScalar",
                    value: function(e) {
                        return this.x *= e, this.y *= e, this.z *= e, this
                    }
                }, {
                    key: "multiply",
                    value: function(e) {
                        return this.x *= e.x, this.y *= e.y, this.z *= e.z, this
                    }
                }, {
                    key: "divide",
                    value: function(e) {
                        return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
                    }
                }, {
                    key: "add",
                    value: function(e) {
                        return this.x += e.x, this.y += e.y, this.z += e.z, this
                    }
                }, {
                    key: "subtract",
                    value: function(e) {
                        return this.x -= e.x, this.y -= e.y, this.z -= e.z, this
                    }
                }, {
                    key: "rotateX",
                    value: function(e, t) {
                        var n = this.y - e.y,
                            r = this.z - e.z;
                        return this.y = n * Math.cos(t) - r * Math.sin(t) + e.y, this.z = n * Math.sin(t) + r * Math.cos(t) + e.z, this
                    }
                }, {
                    key: "rotateY",
                    value: function(e, t) {
                        var n = this.x - e.x,
                            r = this.z - e.z;
                        return this.x = r * Math.cos(t) - n * Math.sin(t) + e.x, this.z = r * Math.sin(t) + n * Math.cos(t) + e.z, this
                    }
                }, {
                    key: "rotateZ",
                    value: function(e, t) {
                        var n = this.x - e.x,
                            r = this.y - e.y;
                        return this.x = n * Math.cos(t) - r * Math.sin(t) + e.x, this.y = n * Math.sin(t) + r * Math.cos(t) + e.y, this
                    }
                }, {
                    key: "transform",
                    value: function(e) {
                        var t = this.x,
                            n = this.y,
                            r = this.z,
                            i = e.m,
                            a = i[3] * t + i[7] * n + i[11] * r + i[15];
                        return a = a || 1, this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) / a, this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) / a, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) / a, this
                    }
                }, {
                    key: "transformMat3",
                    value: function(e) {
                        var t = this.x,
                            n = this.y,
                            r = this.z,
                            i = e.m;
                        return this.x = t * i[0] + n * i[3] + r * i[6], this.y = t * i[1] + n * i[4] + r * i[7], this.z = t * i[2] + n * i[5] + r * i[8], this
                    }
                }, {
                    key: "transformQuat",
                    value: function(e) {
                        var t = e.x,
                            n = e.y,
                            r = e.z,
                            i = e.w,
                            a = this.x,
                            o = this.y,
                            s = this.z,
                            l = n * s - r * o,
                            u = r * a - t * s,
                            c = t * o - n * a,
                            h = n * c - r * u,
                            f = r * l - t * c,
                            d = t * u - n * l,
                            v = 2 * i;
                        return l *= v, u *= v, c *= v, h *= 2, f *= 2, d *= 2, this.x = a + l + h, this.y = o + u + f, this.z = s + c + d, this
                    }
                }, {
                    key: "randomize",
                    value: function() {
                        return this.x = 2 * Math.random() - 1, this.y = 2 * Math.random() - 1, this.z = 2 * Math.random() - 1, this
                    }
                }, {
                    key: "randomize01",
                    value: function() {
                        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
                    }
                }, {
                    key: "randomizeSphere",
                    value: function() {
                        do {
                            this.randomize()
                        } while (this.length() > 1);
                        return this
                    }
                }, {
                    key: "smoothstep",
                    value: function() {
                        return this.x = e.smoothstep1(this.x), this.y = e.smoothstep1(this.y), this.z = e.smoothstep1(this.z), this
                    }
                }, {
                    key: "min",
                    value: function(e) {
                        this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z)
                    }
                }, {
                    key: "max",
                    value: function(e) {
                        this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z)
                    }
                }], [{
                    key: "smoothstep1",
                    value: function(e) {
                        return e * e * (3 - 2 * e)
                    }
                }, {
                    key: "dot",
                    value: function(e, t) {
                        return e.x * t.x + e.y * t.y + e.z * t.z
                    }
                }, {
                    key: "distance",
                    value: function(e, t) {
                        var n = e.x - t.x,
                            r = e.y - t.y,
                            i = e.z - t.z;
                        return Math.sqrt(n * n + r * r + i * i)
                    }
                }, {
                    key: "multiplyScalar",
                    value: function(t, n) {
                        return new e(t.x * n, t.y * n, t.z * n)
                    }
                }, {
                    key: "cross",
                    value: function(t, n) {
                        var r = t.x,
                            i = t.y,
                            a = t.z,
                            o = n.x,
                            s = n.y,
                            l = n.z;
                        return new e(i * l - a * s, a * o - r * l, r * s - i * o)
                    }
                }, {
                    key: "add",
                    value: function(t, n) {
                        return new e(t.x + n.x, t.y + n.y, t.z + n.z)
                    }
                }, {
                    key: "subtract",
                    value: function(t, n) {
                        return new e(t.x - n.x, t.y - n.y, t.z - n.z)
                    }
                }, {
                    key: "lerp",
                    value: function(t, n, r) {
                        var i = t.x,
                            a = t.y,
                            o = t.z;
                        return new e(i + r * (n.x - i), a + r * (n.y - a), o + r * (n.z - o))
                    }
                }, {
                    key: "fract",
                    value: function(t) {
                        return new e(t.x - Math.floor(t.x), t.y - Math.floor(t.y), t.z - Math.floor(t.z))
                    }
                }, {
                    key: "floor",
                    value: function(t) {
                        return new e(Math.floor(t.x), Math.floor(t.y), Math.floor(t.z))
                    }
                }, {
                    key: "transform",
                    value: function(e, t) {
                        return e.clone().transform(t)
                    }
                }, {
                    key: "transformMat3",
                    value: function(e, t) {
                        return e.clone().transformMat3(t)
                    }
                }, {
                    key: "bezier",
                    value: function(t, n, r, i, a) {
                        var o = 1 - a,
                            s = o * o,
                            l = a * a,
                            u = s * o,
                            c = 3 * a * s,
                            h = 3 * l * o,
                            f = l * a,
                            d = new e;
                        return d.x = t.x * u + n.x * c + r.x * h + i.x * f, d.y = t.y * u + n.y * c + r.y * h + i.y * f, d.z = t.z * u + n.z * c + r.z * h + i.z * f, d
                    }
                }, {
                    key: "transformQuat",
                    value: function(e, t) {
                        return e.clone().transformQuat(t)
                    }
                }, {
                    key: "angle",
                    value: function(t, n) {
                        var r = t.x,
                            i = t.y,
                            a = t.z,
                            o = n.x,
                            s = n.y,
                            l = n.z,
                            u = Math.sqrt(r * r + i * i + a * a) * Math.sqrt(o * o + s * s + l * l),
                            c = u && e.dot(t, n) / u;
                        return Math.acos(Math.min(Math.max(c, -1), 1))
                    }
                }]), e
            }();

        function Bn(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        Un.ZERO = new Un(0, 0, 0), Un.RIGHT = new Un(1, 0, 0), Un.UP = new Un(0, 1, 0), Un.FORWARD = new Un(0, 0, 1), Un.ONE = new Un(1, 1, 1);
        var zn = function(e) {
                Y()(n, e);
                var t = Bn(n);

                function n(e, r, i) {
                    var a, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                        s = arguments.length > 4 ? arguments[4] : void 0;
                    H()(this, n), (a = t.call(this, e, r, o, s))._uniforms = [], a._color = new Un;
                    for (var l = 0; l < a._materials.length; l++) a._uniforms[l] = a._materials[l].addVector3Uniform(r, a._color);
                    return a.setValue([255 * i.x, 255 * i.y, 255 * i.z]), a
                }
                return $()(n, [{
                    key: "getValueVector3",
                    value: function() {
                        return this._color
                    }
                }, {
                    key: "convertColorToArray",
                    value: function(e) {
                        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                        return t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : e
                    }
                }, {
                    key: "setValue",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        e instanceof Un ? this._color.copy(e) : (e = this.convertColorToArray(e), this._color.setValues(e[0] / 255, e[1] / 255, e[2] / 255)), Sn()(Q()(n.prototype), "setValue", this).call(this, [255 * this._color.x, 255 * this._color.y, 255 * this._color.z], t)
                    }
                }, {
                    key: "setShaderUniform",
                    value: function(e) {
                        for (var t = 0; t < this._uniforms.length; t++) this._uniforms[t].set(this._color)
                    }
                }]), n
            }(Nn),
            Vn = function() {
                function e() {
                    H()(this, e)
                }
                return $()(e, null, [{
                    key: "posMod",
                    value: function(e, t) {
                        return (e % t + t) % t
                    }
                }, {
                    key: "fract",
                    value: function(e) {
                        return e - Math.floor(e)
                    }
                }, {
                    key: "lerp",
                    value: function(e, t, n) {
                        return (1 - n) * e + n * t
                    }
                }, {
                    key: "map",
                    value: function(t, n, r) {
                        return e.clamp01((r - t) / (n - t))
                    }
                }, {
                    key: "inverseLerp",
                    value: function(t, n, r) {
                        return e.map(t, n, r)
                    }
                }, {
                    key: "clamp01",
                    value: function(e) {
                        return e < 0 ? 0 : e > 1 ? 1 : e
                    }
                }, {
                    key: "gain01",
                    value: function(e, t) {
                        return e > .5 ? 1 - .5 * Math.pow(2 - 2 * e, t) : .5 * Math.pow(2 * e, t)
                    }
                }, {
                    key: "smootherStep01",
                    value: function(e) {
                        return e * e * e * (e * (6 * e - 15) + 10)
                    }
                }, {
                    key: "smoothStep01",
                    value: function(t) {
                        return (t = e.clamp01(t)) * t * (3 - 2 * t)
                    }
                }, {
                    key: "invSmoothStep01",
                    value: function(t) {
                        return t = e.clamp01(t), .5 - Math.sin(Math.asin(1 - 2 * t) / 3)
                    }
                }, {
                    key: "smoothStep",
                    value: function(t, n, r) {
                        return (r = e.clamp((r - t) / (n - t), 0, 1)) * r * (3 - 2 * r)
                    }
                }, {
                    key: "smootherStep",
                    value: function(t, n, r) {
                        return r = e.clamp((r - t) / (n - t), 0, 1), e.smootherStep01(r)
                    }
                }, {
                    key: "step",
                    value: function(t, n, r) {
                        return e.clamp01((r - t) / (n - t))
                    }
                }, {
                    key: "nearestPowerOfTwo",
                    value: function(e) {
                        return Math.pow(2, Math.round(Math.log(e) / Math.log(2)))
                    }
                }, {
                    key: "nextPowerOfTwo",
                    value: function(e) {
                        return Math.pow(2, Math.ceil(Math.log(e) / Math.log(2)))
                    }
                }, {
                    key: "isPowerOfTwo",
                    value: function(e) {
                        return 0 === (e & e - 1)
                    }
                }, {
                    key: "smallerPowerOfTwo",
                    value: function(e) {
                        return Math.pow(2, Math.floor(Math.log(e) / Math.log(2)))
                    }
                }, {
                    key: "clamp",
                    value: function(e, t, n) {
                        return Math.min(Math.max(e, t), n)
                    }
                }, {
                    key: "degToRad",
                    value: function(e) {
                        return e * (Math.PI / 180)
                    }
                }, {
                    key: "radToDeg",
                    value: function(e) {
                        return e * (180 / Math.PI)
                    }
                }, {
                    key: "degToRadVec3",
                    value: function(t) {
                        return new Un(e.degToRad(t.x), e.degToRad(t.y), e.degToRad(t.z))
                    }
                }, {
                    key: "radToDegVec3",
                    value: function(t) {
                        return new Un(e.radToDeg(t.x), e.radToDeg(t.y), e.radToDeg(t.z))
                    }
                }, {
                    key: "latLongToCartesian",
                    value: function(e, t, n, r) {
                        var i = this.degToRad(t),
                            a = this.degToRad(n) + Math.PI;
                        return e.z = r * Math.cos(i) * Math.cos(a), e.x = r * Math.cos(i) * Math.sin(a), e.y = r * Math.sin(i), e
                    }
                }, {
                    key: "Approximately",
                    value: function(e, t) {
                        return Math.abs(e - t) < 1e-6
                    }
                }, {
                    key: "isNumber",
                    value: function(e) {
                        return "number" === typeof e
                    }
                }]), e
            }();

        function Gn(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var Xn = function(e) {
            Y()(n, e);
            var t = Gn(n);

            function n(e, r, i) {
                var a, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                    l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [],
                    u = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
                H()(this, n), (a = t.call(this, e, r, l, u))._floatUniforms = [];
                for (var c = 0; c < a._materials.length; c++) a._floatUniforms[c] = a._materials[c].addFloatUniform(r, i);
                return a.min = o, a.max = s, a.max < i && (a.max = 2 * i), a.min > i && (a.min = i - 1), a.setValue(i, !1, !1), a
            }
            return $()(n, [{
                key: "setValue",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    e = Vn.clamp(e, this.min, this.max), Sn()(Q()(n.prototype), "setValue", this).call(this, e, t, r)
                }
            }, {
                key: "setShaderUniform",
                value: function(e) {
                    for (var t = 0; t < this._floatUniforms.length; t++) this._floatUniforms[t].value = e
                }
            }, {
                key: "destruct",
                value: function() {
                    if (this._floatUniforms) {
                        for (var e = 0; e < this._floatUniforms.length; e++) this._floatUniforms[e].destruct();
                        this._floatUniforms = []
                    }
                    Sn()(Q()(n.prototype), "destruct", this).call(this)
                }
            }]), n
        }(Nn);

        function Hn(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var jn = function(e) {
            Y()(n, e);
            var t = Hn(n);

            function n(e, r, i) {
                var a, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                    l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                    u = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
                H()(this, n), (a = t.call(this, e, r, l, u))._floatUniforms = [];
                for (var c = 0; c < a._materials.length; c++) a._floatUniforms[c] = a._materials[c].addFloatUniform(r, i);
                return a.min = o, a.max = s, a.max < i && (a.max = 2 * i), a.min > i && (a.min = i - 1), a.setValue(i), a
            }
            return $()(n, [{
                key: "setShaderUniform",
                value: function(e) {
                    for (var t = 0; t < this._floatUniforms.length; t++) this._floatUniforms[t].value = e
                }
            }]), n
        }(Nn);

        function $n(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var Wn = function(e) {
            Y()(n, e);
            var t = $n(n);

            function n(e, r, i) {
                var a, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                return H()(this, n), (a = t.call(this, e, r, o, s)).setValue(i, !1, !1), a
            }
            return n
        }(Nn);

        function Yn(e, t) {
            var n;
            if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" === typeof e) return qn(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return qn(e, t)
                    }(e)) || t && e && "number" === typeof e.length) {
                    n && (e = n);
                    var r = 0,
                        i = function() {};
                    return {
                        s: i,
                        n: function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, o = !0,
                s = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return o = e.done, e
                },
                e: function(e) {
                    s = !0, a = e
                },
                f: function() {
                    try {
                        o || null == n.return || n.return()
                    } finally {
                        if (s) throw a
                    }
                }
            }
        }

        function qn(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function Kn(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var Zn = function(e) {
            Y()(n, e);
            var t = Kn(n);

            function n() {
                var e;
                return H()(this, n), (e = t.call(this)).params = [], e.children = [], e.id = 0, e.id = n._id++, e
            }
            return $()(n, [{
                key: "addGroup",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = new n;
                    return i.init(e, t, r), this.children.push(i), i
                }
            }, {
                key: "removeGroup",
                value: function(e) {
                    var t, n = null,
                        r = Yn(this.children);
                    try {
                        for (r.s(); !(t = r.n()).done;) {
                            var i = t.value;
                            if (console.log("checking", i.name, e), i.name === e) {
                                n = i;
                                break
                            }
                        }
                    } catch (a) {
                        r.e(a)
                    } finally {
                        r.f()
                    }
                    n && this.children.splice(this.children.indexOf(n), 1)
                }
            }, {
                key: "removeAllGroups",
                value: function() {
                    this.children = []
                }
            }, {
                key: "pushGroup",
                value: function(e) {
                    this.children.push(e)
                }
            }, {
                key: "init",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    n._usedGroupNames.indexOf(e) > 0 && console.warn("another ParamGroup with this name already exists: consider giving it a unique name", e), this.name = e, n._usedGroupNames.push(this.name), this.collapsed = r, this.materials = t ? [].concat(t) : []
                }
            }, {
                key: "addParamFloat",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                        a = new Xn(this, e, t, n, r, [], i);
                    return this.params.push(a), a
                }
            }, {
                key: "addShaderParamFloat",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    this.materials && 0 != this.materials.length || console.warn("Adding shader param to param group that has no materials", e);
                    var a = new Xn(this, e, t, n, r, this.materials, i);
                    return this.params.push(a), a
                }
            }, {
                key: "addParamInt",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                        a = new jn(this, e, t, n, r, null, i);
                    return this.params.push(a), a
                }
            }, {
                key: "addShaderParamInt",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    this.materials && 0 != this.materials.length || console.warn("Adding shader param to param group that has no materials");
                    var a = new jn(this, e, t, n, r, this.materials, i);
                    return this.params.push(a), a
                }
            }, {
                key: "addParamBool",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        r = new Fn(this, e, t, null, n);
                    return this.params.push(r), r
                }
            }, {
                key: "addShaderParamBool",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    this.materials && 0 != this.materials.length || console.warn("Adding shader param to param group that has no materials");
                    var r = new Fn(this, e, t, this.materials, n);
                    return this.params.push(r), r
                }
            }, {
                key: "addParamColor",
                value: function(e, t, n) {
                    var r = new zn(this, e, t, [], n);
                    return this.params.push(r), r
                }
            }, {
                key: "addShaderParamColor",
                value: function(e, t, n) {
                    this.materials && 0 != this.materials.length || console.warn("Adding shader param to param group that has no materials");
                    var r = new zn(this, e, t, this.materials, n);
                    return this.params.push(r), r
                }
            }, {
                key: "addParamText",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        r = new Wn(this, e, t, null, n);
                    return this.params.push(r), r
                }
            }, {
                key: "addButton",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = new Dn(this, e, t);
                    return this.params.push(n), n
                }
            }, {
                key: "getParameters",
                value: function() {
                    var e, t = [],
                        n = Yn(this.children);
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var r = e.value;
                            t = t.concat(r.getParameters())
                        }
                    } catch (s) {
                        n.e(s)
                    } finally {
                        n.f()
                    }
                    var i, a = Yn(this.params);
                    try {
                        for (a.s(); !(i = a.n()).done;) {
                            var o = i.value;
                            t.push(o)
                        }
                    } catch (s) {
                        a.e(s)
                    } finally {
                        a.f()
                    }
                    return t
                }
            }, {
                key: "destruct",
                value: function() {
                    if (this.params)
                        for (var e = 0; e < this.params.length; e++) this.params[e].isDestructed || this.params[e].destruct();
                    if (this.children)
                        for (var t = 0; t < this.children.length; t++) this.children[t].isDestructed || this.children[t].destruct(), this.children[t].destruct();
                    Sn()(Q()(n.prototype), "destruct", this).call(this)
                }
            }], [{
                key: "exposeParam",
                value: function(e) {
                    e.expose()
                }
            }, {
                key: "destruct",
                value: function() {
                    n._usedGroupNames = [], n._id = 0
                }
            }]), n
        }(Mn);
        Zn._id = 0, Zn._usedGroupNames = [];
        var Qn = n(363);

        function Jn(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var er = function(e) {
            Y()(n, e);
            var t = Jn(n);

            function n(e, r, i, a) {
                var o, s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "unnamed",
                    u = arguments.length > 6 ? arguments[6] : void 0;
                return H()(this, n), (o = t.call(this)).init(e, s), o._value = r, o._shaderParam = l, o._x = o.addShaderParamFloat("_X", r.x, i.x, a.x, (function(e) {
                    o._value.x = e, o.setShaderValue(), u(o._value)
                })), o._y = o.addShaderParamFloat("_Y", r.y, i.y, a.y, (function(e) {
                    o._value.y = e, o.setShaderValue(), u(o._value)
                })), o._z = o.addShaderParamFloat("_Z", r.z, i.z, a.z, (function(e) {
                    o._value.z = e, o.setShaderValue(), u(o._value)
                })), o.setShaderValue(), o
            }
            return $()(n, [{
                key: "setShaderValue",
                value: function() {
                    if (!this.materials) throw new ReferenceError("Cannot set shader value: ParamGroup not initialized");
                    for (var e = 0; e < this.materials.length; e++) this.materials[e].setVector3(this._shaderParam, this._value)
                }
            }, {
                key: "getValue",
                value: function() {
                    return this._value
                }
            }, {
                key: "setValue",
                value: function(e) {
                    this._value = e, this._x.setValue(e.x), this._y.setValue(e.y), this._z.setValue(e.z)
                }
            }]), n
        }(Zn);

        function tr(e, t) {
            var n;
            if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" === typeof e) return nr(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nr(e, t)
                    }(e)) || t && e && "number" === typeof e.length) {
                    n && (e = n);
                    var r = 0,
                        i = function() {};
                    return {
                        s: i,
                        n: function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, o = !0,
                s = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return o = e.done, e
                },
                e: function(e) {
                    s = !0, a = e
                },
                f: function() {
                    try {
                        o || null == n.return || n.return()
                    } finally {
                        if (s) throw a
                    }
                }
            }
        }

        function nr(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function rr(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var ir = function(e) {
            Y()(n, e);
            var t = rr(n);

            function n() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return H()(this, n), (e = t.call(this))._params = {}, e._uniqueNames = [], e.folderIndex = -2, r && r.add(yn()(e)), e._jsonExportEnabled = i, e._params = a, e
            }
            return $()(n, [{
                key: "load",
                value: function(e) {
                    e.call(this)
                }
            }, {
                key: "init",
                value: function(e) {
                    this._rootGroup = e;
                    var t = {};
                    return this._gui = new Qn.a(this._params), this.readGroup(null, e, t, this._gui), this._jsonExportEnabled && this._gui.remember(t), this.setVisible(!0), this._gui
                }
            }, {
                key: "getDatGUI",
                value: function() {
                    return this._gui
                }
            }, {
                key: "setPreset",
                value: function(e) {
                    if (!this._gui) throw new Error("Cannot set preset: DatGui not initialized");
                    this.folderIndex = -2, this.setPresetRecurse(this._gui.__folders.controls, e.remembered.Default)
                }
            }, {
                key: "setPresetRecurse",
                value: function(e, t) {
                    this.folderIndex++;
                    var n = t[this.folderIndex];
                    if ("undefined" !== typeof n) {
                        var r, i = tr(e.__controllers);
                        try {
                            for (i.s(); !(r = i.n()).done;) {
                                var a = r.value,
                                    o = n[a.property];
                                "undefined" !== typeof o && a.setValue(o)
                            }
                        } catch (h) {
                            i.e(h)
                        } finally {
                            i.f()
                        }
                    }
                    for (var s = 0, l = Object.keys(e.__folders); s < l.length; s++) {
                        var u = l[s],
                            c = e.__folders[u];
                        this.setPresetRecurse(c, t)
                    }
                }
            }, {
                key: "readGroup",
                value: function(e, t, n, r) {
                    if (!t.name) throw new Error("group name not initialized");
                    if (!this._gui) throw new Error("cannot read group: DatGui not initialized");
                    var i = this.uniqueName(r.__folders, t.name),
                        a = r.addFolder(i);
                    t.collapsed || a.open();
                    var o, s = tr(t.params);
                    try {
                        for (s.s(); !(o = s.n()).done;) {
                            var l = o.value,
                                u = this.uniqueName(n, l.name);
                            this._uniqueNames[l.id] = u, void 0 == n[u] ? n[u] = l.value : console.log("property " + u + " already exists on param object", n);
                            var c = void 0;
                            if (l instanceof Xn) {
                                var h = l;
                                c = a.add(n, u, h.min, h.max)
                            } else if (l instanceof jn) {
                                var f = l;
                                c = a.add(n, u, f.min, f.max).step(1)
                            } else if (l instanceof Fn) c = a.add(n, u);
                            else if (l instanceof Dn) c = a.add(n, u);
                            else if (l instanceof er) c = a.add(n, u);
                            else if (l instanceof zn) c = a.addColor(n, u);
                            else if (l instanceof Wn) c = a.add(n, u);
                            else if (void 0 === c) throw new TypeError("Unknown type of parameter");
                            l instanceof Dn || this.addHandlers(c, n, l)
                        }
                    } catch (y) {
                        s.e(y)
                    } finally {
                        s.f()
                    }
                    var d, v = tr(t.children);
                    try {
                        for (v.s(); !(d = v.n()).done;) {
                            var p = d.value,
                                m = {};
                            this._jsonExportEnabled && this._gui.remember(m), this.readGroup(t, p, m, a)
                        }
                    } catch (y) {
                        v.e(y)
                    } finally {
                        v.f()
                    }
                }
            }, {
                key: "uniqueName",
                value: function(e, t) {
                    return t in e ? this.uniqueName(e, "_" + t) : t
                }
            }, {
                key: "addHandlers",
                value: function(e, t, n) {
                    var r = this;
                    n.setUpdateUICallback((function(e) {
                        t[r._uniqueNames[n.id]] = e
                    })), e.listen(), e.onChange((function(e) {
                        t[r._uniqueNames[n.id]] = e, n.setFromUI(e)
                    })), e.onFinishChange = function(e) {
                        return n.setFromUI(e)
                    }
                }
            }, {
                key: "setVisible",
                value: function(e) {
                    if (!this._gui) throw new Error("cannot set visible: DatGui not initialized");
                    this._visible = e, this._gui.domElement.parentElement && (this._gui.domElement.parentElement.style.zIndex = (e ? 999 : 0).toString(), this._gui.domElement.parentElement.style.visibility = (e ? "visible" : "hidden").toString())
                }
            }, {
                key: "destruct",
                value: function() {
                    this._gui && (this._gui.domElement.parentElement && this._gui.domElement.parentElement.removeChild(this._gui.domElement), delete this._gui), Sn()(Q()(n.prototype), "destruct", this).call(this)
                }
            }]), n
        }(Mn);

        function ar(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var or = function(e) {
                Y()(n, e);
                var t = ar(n);

                function n(e) {
                    var r;
                    return H()(this, n), (r = t.call(this)).pixelRatio = 1, r._canvasParent = e, e && e.offsetWidth * e.offsetHeight < 1 && console.error("canvasParent has no area", e), r.canvas = r.prepareCanvas(e), window.devicePixelRatio && (r.pixelRatio = window.devicePixelRatio), r
                }
                return $()(n, [{
                    key: "prepareCanvas",
                    value: function(e) {
                        var t = document.createElement("canvas");
                        return t.setAttribute("id", "canvas"), t.style.position = "absolute", t.style.left = "0px", t.style.top = "0px", e && (t.style.width = e.offsetWidth + "px", t.style.height = e.offsetHeight + "px", e.appendChild(t)), t
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        if (this.canvasParent) {
                            var t = this.canvasParent.getBoundingClientRect(),
                                n = t.width,
                                r = t.height;
                            if (n * r > 0) return this.setSize(n, r);
                            console.warn("canvasParent has no area", this._canvasParent)
                        }
                        return !1
                    }
                }, {
                    key: "setSize",
                    value: function(e, t) {
                        if (this.canvas.width !== (e * this.pixelRatio | 0) || this.canvas.height !== (t * this.pixelRatio | 0)) {
                            this.canvas.width = e * this.pixelRatio | 0, this.canvas.height = t * this.pixelRatio | 0, this.canvas.style.width = e + "px", this.canvas.style.height = t + "px";
                            var n = document.createEvent("Event");
                            return n.initEvent("resize", !1, !0), this.canvas.dispatchEvent(n), !0
                        }
                        return !1
                    }
                }, {
                    key: "destruct",
                    value: function() {
                        this.canvas.width = 1, this.canvas.height = 1, this._canvasParent && this._canvasParent.removeChild(this.canvas), Sn()(Q()(n.prototype), "destruct", this).call(this)
                    }
                }, {
                    key: "canvasParent",
                    get: function() {
                        return this._canvasParent
                    }
                }]), n
            }(Mn),
            sr = function e(t) {
                H()(this, e), this.MAX_VERTEX_ATTRIBS = t.getParameter(t.MAX_VERTEX_ATTRIBS), this.MAX_VARYING_VECTORS = t.getParameter(t.MAX_VARYING_VECTORS), this.MAX_VERTEX_UNIFORM_VECTORS = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS), this.MAX_FRAGMENT_UNIFORM_VECTORS = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS), this.MAX_TEXTURE_IMAGE_UNITS = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS), this.MAX_TEXTURE_SIZE = t.getParameter(t.MAX_TEXTURE_SIZE), this.MAX_CUBE_MAP_TEXTURE_SIZE = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE), this.MAX_VIEWPORT_DIMS = t.getParameter(t.MAX_VIEWPORT_DIMS), this.MAX_RENDERBUFFER_SIZE = t.getParameter(t.MAX_RENDERBUFFER_SIZE), this.MAX_COMBINED_TEXTURE_IMAGE_UNITS = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
                var n = t.getExtension("WEBGL_debug_renderer_info");
                for (var r in this.UNMASKED_RENDERER = n && t.getParameter(n.UNMASKED_RENDERER_WEBGL), this.UNMASKED_VENDOR = n && t.getParameter(n.UNMASKED_VENDOR_WEBGL), this) this.hasOwnProperty(r) && kn.log(r, this[r])
            },
            lr = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                    H()(this, e), this.x = t, this.y = n, this.z = r, this.w = i
                }
                return $()(e, [{
                    key: "clone",
                    value: function() {
                        return new e(this.x, this.y, this.z, this.w)
                    }
                }, {
                    key: "copy",
                    value: function(e) {
                        return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w, this
                    }
                }, {
                    key: "setValues",
                    value: function(e, t, n, r) {
                        return this.x = e, this.y = t, this.z = n, this.w = r, this
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return "(" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")"
                    }
                }, {
                    key: "length",
                    value: function() {
                        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
                    }
                }, {
                    key: "equals",
                    value: function(e) {
                        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
                    }
                }, {
                    key: "normalize",
                    value: function() {
                        var e = this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
                        return e > 0 && (e = 1 / Math.sqrt(e)), this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
                    }
                }, {
                    key: "negate",
                    value: function() {
                        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
                    }
                }, {
                    key: "multiplyScalar",
                    value: function(e) {
                        return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
                    }
                }, {
                    key: "multiply",
                    value: function(e) {
                        return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this
                    }
                }, {
                    key: "divide",
                    value: function(e) {
                        return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this
                    }
                }, {
                    key: "add",
                    value: function(e) {
                        return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this
                    }
                }, {
                    key: "subtract",
                    value: function(e) {
                        return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this
                    }
                }, {
                    key: "dot",
                    value: function(e) {
                        return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w
                    }
                }, {
                    key: "transform",
                    value: function(e) {
                        var t = this.x,
                            n = this.y,
                            r = this.z,
                            i = this.w,
                            a = e.m;
                        return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i, this
                    }
                }], [{
                    key: "dot",
                    value: function(e, t) {
                        return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w
                    }
                }, {
                    key: "distance",
                    value: function(e, t) {
                        var n = t.x - e.x,
                            r = t.y - e.y,
                            i = t.z - e.z,
                            a = t.w - e.w;
                        return Math.sqrt(n * n + r * r + i * i + a * a)
                    }
                }, {
                    key: "add",
                    value: function(t, n) {
                        var r = new e;
                        return r.x = t.x + n.x, r.y = t.y + n.y, r.z = t.z + n.z, r.w = t.w + n.w, r
                    }
                }, {
                    key: "subtract",
                    value: function(t, n) {
                        var r = new e;
                        return r.x = t.x - n.x, r.y = t.y - n.y, r.z = t.z - n.z, r.w = t.w - n.w, r
                    }
                }, {
                    key: "multiply",
                    value: function(t, n) {
                        var r = new e;
                        return r.x = t.x * n.x, r.y = t.y * n.y, r.z = t.z * n.z, r.w = t.w * n.w, r
                    }
                }, {
                    key: "divide",
                    value: function(t, n) {
                        var r = new e;
                        return r.x = t.x / n.x, r.y = t.y / n.y, r.z = t.z / n.z, r.w = t.w / n.w, r
                    }
                }, {
                    key: "scale",
                    value: function(t, n) {
                        var r = new e;
                        return r.x = t.x * n, r.y = t.y * n, r.z = t.z * n, r.w = t.w * n, r
                    }
                }, {
                    key: "normalize",
                    value: function(e) {
                        var t = e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w;
                        return t > 0 && (t = 1 / Math.sqrt(t)), e.clone().multiplyScalar(t)
                    }
                }, {
                    key: "cross",
                    value: function(t, n, r) {
                        var i = n.x * r.y - n.y * r.x,
                            a = n.x * r.z - n.z * r.x,
                            o = n.x * r.w - n.w * r.x,
                            s = n.y * r.z - n.z * r.y,
                            l = n.y * r.w - n.w * r.y,
                            u = n.z * r.w - n.w * r.z,
                            c = t.x,
                            h = t.y,
                            f = t.z,
                            d = t.w,
                            v = new e;
                        return v.x = h * u - f * l + d * s, v.y = -c * u + f * o - d * a, v.z = c * l - h * o + d * i, v.w = -c * s + h * a - f * i, v
                    }
                }, {
                    key: "lerp",
                    value: function(t, n, r) {
                        var i = t.x,
                            a = t.y,
                            o = t.z,
                            s = t.w,
                            l = new e;
                        return l.x = i + r * (n.x - i), l.y = a + r * (n.y - a), l.z = o + r * (n.z - o), l.w = s + r * (n.w - s), l
                    }
                }, {
                    key: "transform",
                    value: function(e, t) {
                        return e.clone().transform(t)
                    }
                }, {
                    key: "transformQuat",
                    value: function(t, n) {
                        var r = t.x,
                            i = t.y,
                            a = t.z,
                            o = n.x,
                            s = n.y,
                            l = n.z,
                            u = n.w,
                            c = u * r + s * a - l * i,
                            h = u * i + l * r - o * a,
                            f = u * a + o * i - s * r,
                            d = -o * r - s * i - l * a,
                            v = new e;
                        return v.x = c * u + d * -o + h * -l - f * -s, v.y = h * u + d * -s + f * -o - c * -l, v.z = f * u + d * -l + c * -s - h * -o, v.w = t.w, v
                    }
                }]), e
            }();

        function ur(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        lr.ZERO = new lr(0, 0, 0, 0);
        var cr = function(e) {
                Y()(n, e);
                var t = ur(n);

                function n() {
                    return H()(this, n), t.apply(this, arguments)
                }
                return $()(n, [{
                    key: "toRGBString",
                    value: function() {
                        return "rgb(" + Math.round(255 * this.r) + "," + Math.round(255 * this.g) + "," + Math.round(255 * this.b) + ")"
                    }
                }, {
                    key: "getHex",
                    value: function() {
                        return "#" + n.componentToHex(this.r) + n.componentToHex(this.g) + n.componentToHex(this.b)
                    }
                }, {
                    key: "setRGBA255",
                    value: function(e) {
                        return this.r = e[0] / 255, this.g = e[1] / 255, this.b = e[2] / 255, this.a = e[3], this
                    }
                }, {
                    key: "getRGBA255",
                    value: function() {
                        return [Math.round(255 * this.r), Math.round(255 * this.g), Math.round(255 * this.b), this.a]
                    }
                }, {
                    key: "setFromHex",
                    value: function(e) {
                        e = e.replace(/[^0-9A-F]/gi, "");
                        var t = parseInt(e, 16);
                        return this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this.a = 1, this
                    }
                }, {
                    key: "setFromHSV",
                    value: function(e, t, n) {
                        var r = 0,
                            i = 0,
                            a = 0,
                            o = Math.floor(6 * e),
                            s = 6 * e - o,
                            l = n * (1 - t),
                            u = n * (1 - s * t),
                            c = n * (1 - (1 - s) * t);
                        switch (o % 6) {
                            case 0:
                                r = n, i = c, a = l;
                                break;
                            case 1:
                                r = u, i = n, a = l;
                                break;
                            case 2:
                                r = l, i = n, a = c;
                                break;
                            case 3:
                                r = l, i = u, a = n;
                                break;
                            case 4:
                                r = c, i = l, a = n;
                                break;
                            case 5:
                                r = n, i = l, a = u
                        }
                        return this.r = r, this.g = i, this.b = a, this
                    }
                }, {
                    key: "getRgbaString",
                    value: function() {
                        return "rgba(" + Math.round(255 * this.r) + ", " + Math.round(255 * this.g) + ", " + Math.round(255 * this.b) + ", " + this.a + ")"
                    }
                }, {
                    key: "toVector3",
                    value: function() {
                        return new Un(this.x, this.y, this.z)
                    }
                }, {
                    key: "r",
                    get: function() {
                        return this.x
                    },
                    set: function(e) {
                        this.x = e
                    }
                }, {
                    key: "g",
                    get: function() {
                        return this.y
                    },
                    set: function(e) {
                        this.y = e
                    }
                }, {
                    key: "b",
                    get: function() {
                        return this.z
                    },
                    set: function(e) {
                        this.z = e
                    }
                }, {
                    key: "a",
                    get: function() {
                        return this.w
                    },
                    set: function(e) {
                        this.w = e
                    }
                }], [{
                    key: "componentToHex",
                    value: function(e) {
                        var t = (255 * e | 0).toString(16);
                        return 1 === t.length ? "0" + t : t
                    }
                }, {
                    key: "fromHex",
                    value: function(e) {
                        return (new n).setFromHex(e)
                    }
                }, {
                    key: "fromRGB255",
                    value: function(e) {
                        var t = new n;
                        return t.setRGBA255(e), t
                    }
                }, {
                    key: "getRandom",
                    value: function() {
                        return new n(Math.random(), Math.random(), Math.random())
                    }
                }, {
                    key: "colorFromString",
                    value: function(e) {
                        var t = [],
                            r = [];
                        r[0] = e.substr(0, Math.floor(e.length / 3)), r[1] = e.substr(Math.floor(e.length / 3), Math.floor(2 * e.length / 3)), r[2] = e.substr(Math.floor(2 * e.length / 3), e.length);
                        for (var i = 0; i < r.length; i++)
                            for (var a = 0; a < r[i].length; a++) i in t || (t[i] = 0), t[i] += r[i].charCodeAt(a);
                        return new n(t[0] / 128 % 1, t[1] / 128 % 1, t[2] / 128 % 1, 1)
                    }
                }, {
                    key: "fromHSV",
                    value: function(e, t, r) {
                        return (new n).setFromHSV(e, t, r)
                    }
                }]), n
            }(lr),
            hr = function e() {
                H()(this, e)
            };
        hr.ACTIVE_ATTRIBUTES = 35721, hr.ACTIVE_ATTRIBUTE_MAX_LENGTH = 35722, hr.ACTIVE_TEXTURE = 34016, hr.ACTIVE_UNIFORMS = 35718, hr.ACTIVE_UNIFORM_MAX_LENGTH = 35719, hr.ALIASED_LINE_WIDTH_RANGE = 33902, hr.ALIASED_POINT_SIZE_RANGE = 33901, hr.ALPHA = 6406, hr.ALPHA_BITS = 3413, hr.ALWAYS = 519, hr.ARRAY_BUFFER = 34962, hr.ARRAY_BUFFER_BINDING = 34964, hr.ATTACHED_SHADERS = 35717, hr.BACK = 1029, hr.BLEND = 3042, hr.BLEND_COLOR = 32773, hr.BLEND_DST_ALPHA = 32970, hr.BLEND_DST_RGB = 32968, hr.BLEND_EQUATION = 32777, hr.BLEND_EQUATION_ALPHA = 34877, hr.BLEND_EQUATION_RGB = 32777, hr.BLEND_SRC_ALPHA = 32971, hr.BLEND_SRC_RGB = 32969, hr.BLUE_BITS = 3412, hr.BOOL = 35670, hr.BOOL_VEC2 = 35671, hr.BOOL_VEC3 = 35672, hr.BOOL_VEC4 = 35673, hr.BROWSER_DEFAULT_WEBGL = 37444, hr.BUFFER_SIZE = 34660, hr.BUFFER_USAGE = 34661, hr.BYTE = 5120, hr.CCW = 2305, hr.CLAMP_TO_EDGE = 33071, hr.COLOR_ATTACHMENT0 = 36064, hr.COLOR_BUFFER_BIT = 16384, hr.COLOR_CLEAR_VALUE = 3106, hr.COLOR_WRITEMASK = 3107, hr.COMPILE_STATUS = 35713, hr.COMPRESSED_TEXTURE_FORMATS = 34467, hr.CONSTANT_ALPHA = 32771, hr.CONSTANT_COLOR = 32769, hr.CONTEXT_LOST_WEBGL = 37442, hr.CULL_FACE = 2884, hr.CULL_FACE_MODE = 2885, hr.CURRENT_PROGRAM = 35725, hr.CURRENT_VERTEX_ATTRIB = 34342, hr.CW = 2304, hr.DECR = 7683, hr.DECR_WRAP = 34056, hr.DELETE_STATUS = 35712, hr.DEPTH_ATTACHMENT = 36096, hr.DEPTH_BITS = 3414, hr.DEPTH_BUFFER_BIT = 256, hr.DEPTH_CLEAR_VALUE = 2931, hr.DEPTH_COMPONENT = 6402, hr.DEPTH_COMPONENT16 = 33189, hr.DEPTH_FUNC = 2932, hr.DEPTH_RANGE = 2928, hr.DEPTH_STENCIL = 34041, hr.DEPTH_STENCIL_ATTACHMENT = 33306, hr.DEPTH_TEST = 2929, hr.DEPTH_WRITEMASK = 2930, hr.DITHER = 3024, hr.DONT_CARE = 4352, hr.DST_ALPHA = 772, hr.DST_COLOR = 774, hr.DYNAMIC_DRAW = 35048, hr.ELEMENT_ARRAY_BUFFER = 34963, hr.ELEMENT_ARRAY_BUFFER_BINDING = 34965, hr.EQUAL = 514, hr.FASTEST = 4353, hr.FLOAT = 5126, hr.FLOAT_MAT2 = 35674, hr.FLOAT_MAT3 = 35675, hr.FLOAT_MAT4 = 35676, hr.FLOAT_VEC2 = 35664, hr.FLOAT_VEC3 = 35665, hr.FLOAT_VEC4 = 35666, hr.FRAGMENT_SHADER = 35632, hr.FRAMEBUFFER = 36160, hr.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049, hr.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048, hr.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051, hr.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050, hr.FRAMEBUFFER_BINDING = 36006, hr.FRAMEBUFFER_COMPLETE = 36053, hr.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054, hr.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057, hr.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055, hr.FRAMEBUFFER_UNSUPPORTED = 36061, hr.FRONT = 1028, hr.FRONT_AND_BACK = 1032, hr.FRONT_FACE = 2886, hr.FUNC_ADD = 32774, hr.FUNC_REVERSE_SUBTRACT = 32779, hr.FUNC_SUBTRACT = 32778, hr.GENERATE_MIPMAP_HINT = 33170, hr.GEQUAL = 518, hr.GREATER = 516, hr.GREEN_BITS = 3411, hr.HIGH_FLOAT = 36338, hr.HIGH_INT = 36341, hr.INCR = 7682, hr.INCR_WRAP = 34055, hr.INFO_LOG_LENGTH = 35716, hr.INT = 5124, hr.INT_VEC2 = 35667, hr.INT_VEC3 = 35668, hr.INT_VEC4 = 35669, hr.INVALID_ENUM = 1280, hr.INVALID_FRAMEBUFFER_OPERATION = 1286, hr.INVALID_OPERATION = 1282, hr.INVALID_VALUE = 1281, hr.INVERT = 5386, hr.KEEP = 7680, hr.LEQUAL = 515, hr.LESS = 513, hr.LINEAR = 9729, hr.LINEAR_MIPMAP_LINEAR = 9987, hr.LINEAR_MIPMAP_NEAREST = 9985, hr.LINES = 1, hr.LINE_LOOP = 2, hr.LINE_STRIP = 3, hr.LINE_WIDTH = 2849, hr.LINK_STATUS = 35714, hr.LOW_FLOAT = 36336, hr.LOW_INT = 36339, hr.LUMINANCE = 6409, hr.LUMINANCE_ALPHA = 6410, hr.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661, hr.MAX_CUBE_MAP_TEXTURE_SIZE = 34076, hr.MAX_FRAGMENT_UNIFORM_VECTORS = 36349, hr.MAX_RENDERBUFFER_SIZE = 34024, hr.MAX_TEXTURE_IMAGE_UNITS = 34930, hr.MAX_TEXTURE_SIZE = 3379, hr.MAX_VARYING_VECTORS = 36348, hr.MAX_VERTEX_ATTRIBS = 34921, hr.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660, hr.MAX_VERTEX_UNIFORM_VECTORS = 36347, hr.MAX_VIEWPORT_DIMS = 3386, hr.MEDIUM_FLOAT = 36337, hr.MEDIUM_INT = 36340, hr.MIRRORED_REPEAT = 33648, hr.NEAREST = 9728, hr.NEAREST_MIPMAP_LINEAR = 9986, hr.NEAREST_MIPMAP_NEAREST = 9984, hr.NEVER = 512, hr.NICEST = 4354, hr.NONE = 0, hr.NOTEQUAL = 517, hr.NO_ERROR = 0, hr.NUM_COMPRESSED_TEXTURE_FORMATS = 34466, hr.ONE = 1, hr.ONE_MINUS_CONSTANT_ALPHA = 32772, hr.ONE_MINUS_CONSTANT_COLOR = 32770, hr.ONE_MINUS_DST_ALPHA = 773, hr.ONE_MINUS_DST_COLOR = 775, hr.ONE_MINUS_SRC_ALPHA = 771, hr.ONE_MINUS_SRC_COLOR = 769, hr.OUT_OF_MEMORY = 1285, hr.PACK_ALIGNMENT = 3333, hr.POINTS = 0, hr.POLYGON_OFFSET_FACTOR = 32824, hr.POLYGON_OFFSET_FILL = 32823, hr.POLYGON_OFFSET_UNITS = 10752, hr.RED_BITS = 3410, hr.RENDERBUFFER = 36161, hr.RENDERBUFFER_ALPHA_SIZE = 36179, hr.RENDERBUFFER_BINDING = 36007, hr.RENDERBUFFER_BLUE_SIZE = 36178, hr.RENDERBUFFER_DEPTH_SIZE = 36180, hr.RENDERBUFFER_GREEN_SIZE = 36177, hr.RENDERBUFFER_HEIGHT = 36163, hr.RENDERBUFFER_INTERNAL_FORMAT = 36164, hr.RENDERBUFFER_RED_SIZE = 36176, hr.RENDERBUFFER_STENCIL_SIZE = 36181, hr.RENDERBUFFER_WIDTH = 36162, hr.RENDERER = 7937, hr.REPEAT = 10497, hr.REPLACE = 7681, hr.RGB = 6407, hr.RGB5_A1 = 32855, hr.RGB565 = 36194, hr.RGBA = 6408, hr.RGBA4 = 32854, hr.SAMPLER_2D = 35678, hr.SAMPLER_CUBE = 35680, hr.SAMPLES = 32937, hr.SAMPLE_ALPHA_TO_COVERAGE = 32926, hr.SAMPLE_BUFFERS = 32936, hr.SAMPLE_COVERAGE = 32928, hr.SAMPLE_COVERAGE_INVERT = 32939, hr.SAMPLE_COVERAGE_VALUE = 32938, hr.SCISSOR_BOX = 3088, hr.SCISSOR_TEST = 3089, hr.SHADER_COMPILER = 36346, hr.SHADER_SOURCE_LENGTH = 35720, hr.SHADER_TYPE = 35663, hr.SHADING_LANGUAGE_VERSION = 35724, hr.SHORT = 5122, hr.SRC_ALPHA = 770, hr.SRC_ALPHA_SATURATE = 776, hr.SRC_COLOR = 768, hr.STATIC_DRAW = 35044, hr.STENCIL_ATTACHMENT = 36128, hr.STENCIL_BACK_FAIL = 34817, hr.STENCIL_BACK_FUNC = 34816, hr.STENCIL_BACK_PASS_DEPTH_FAIL = 34818, hr.STENCIL_BACK_PASS_DEPTH_PASS = 34819, hr.STENCIL_BACK_REF = 36003, hr.STENCIL_BACK_VALUE_MASK = 36004, hr.STENCIL_BACK_WRITEMASK = 36005, hr.STENCIL_BITS = 3415, hr.STENCIL_BUFFER_BIT = 1024, hr.STENCIL_CLEAR_VALUE = 2961, hr.STENCIL_FAIL = 2964, hr.STENCIL_FUNC = 2962, hr.STENCIL_INDEX = 6401, hr.STENCIL_INDEX8 = 36168, hr.STENCIL_PASS_DEPTH_FAIL = 2965, hr.STENCIL_PASS_DEPTH_PASS = 2966, hr.STENCIL_REF = 2967, hr.STENCIL_TEST = 2960, hr.STENCIL_VALUE_MASK = 2963, hr.STENCIL_WRITEMASK = 2968, hr.STREAM_DRAW = 35040, hr.SUBPIXEL_BITS = 3408, hr.TEXTURE = 5890, hr.TEXTURE0 = 33984, hr.TEXTURE1 = 33985, hr.TEXTURE2 = 33986, hr.TEXTURE3 = 33987, hr.TEXTURE4 = 33988, hr.TEXTURE5 = 33989, hr.TEXTURE6 = 33990, hr.TEXTURE7 = 33991, hr.TEXTURE8 = 33992, hr.TEXTURE9 = 33993, hr.TEXTURE10 = 33994, hr.TEXTURE11 = 33995, hr.TEXTURE12 = 33996, hr.TEXTURE13 = 33997, hr.TEXTURE14 = 33998, hr.TEXTURE15 = 33999, hr.TEXTURE16 = 34e3, hr.TEXTURE17 = 34001, hr.TEXTURE18 = 34002, hr.TEXTURE19 = 34003, hr.TEXTURE20 = 34004, hr.TEXTURE21 = 34005, hr.TEXTURE22 = 34006, hr.TEXTURE23 = 34007, hr.TEXTURE24 = 34008, hr.TEXTURE25 = 34009, hr.TEXTURE26 = 34010, hr.TEXTURE27 = 34011, hr.TEXTURE28 = 34012, hr.TEXTURE29 = 34013, hr.TEXTURE30 = 34014, hr.TEXTURE31 = 34015, hr.TEXTURE_2D = 3553, hr.TEXTURE_BINDING_2D = 32873, hr.TEXTURE_BINDING_CUBE_MAP = 34068, hr.TEXTURE_CUBE_MAP = 34067, hr.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070, hr.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072, hr.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074, hr.TEXTURE_CUBE_MAP_POSITIVE_X = 34069, hr.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071, hr.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073, hr.TEXTURE_MAG_FILTER = 10240, hr.TEXTURE_MIN_FILTER = 10241, hr.TEXTURE_WRAP_S = 10242, hr.TEXTURE_WRAP_T = 10243, hr.TRIANGLES = 4, hr.TRIANGLE_FAN = 6, hr.TRIANGLE_STRIP = 5, hr.UNPACK_ALIGNMENT = 3317, hr.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443, hr.UNPACK_FLIP_Y_WEBGL = 37440, hr.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441, hr.UNSIGNED_BYTE = 5121, hr.UNSIGNED_INT = 5125, hr.UNSIGNED_SHORT = 5123, hr.UNSIGNED_SHORT_4_4_4_4 = 32819, hr.UNSIGNED_SHORT_5_5_5_1 = 32820, hr.UNSIGNED_SHORT_5_6_5 = 33635, hr.VALIDATE_STATUS = 35715, hr.VENDOR = 7936, hr.VERSION = 7938, hr.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975, hr.VERTEX_ATTRIB_ARRAY_ENABLED = 34338, hr.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922, hr.VERTEX_ATTRIB_ARRAY_POINTER = 34373, hr.VERTEX_ATTRIB_ARRAY_SIZE = 34339, hr.VERTEX_ATTRIB_ARRAY_STRIDE = 34340, hr.VERTEX_ATTRIB_ARRAY_TYPE = 34341, hr.VERTEX_SHADER = 35633, hr.VIEWPORT = 2978, hr.ZERO = 0;
        var fr = hr,
            dr = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    H()(this, e), this.x = t, this.y = n
                }
                return $()(e, [{
                    key: "clone",
                    value: function() {
                        return new e(this.x, this.y)
                    }
                }, {
                    key: "copy",
                    value: function(e) {
                        return this.x = e.x, this.y = e.y, this
                    }
                }, {
                    key: "setValues",
                    value: function(e, t) {
                        return this.x = e, this.y = t, this
                    }
                }, {
                    key: "length",
                    value: function() {
                        return Math.sqrt(this.x * this.x + this.y * this.y)
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return this.x + "," + this.y
                    }
                }, {
                    key: "equals",
                    value: function(e) {
                        return e.x === this.x && e.y === this.y
                    }
                }, {
                    key: "normalize",
                    value: function() {
                        var e = this.x * this.x + this.y * this.y;
                        return e > 0 && (e = 1 / Math.sqrt(e)), this.x *= e, this.y *= e, this
                    }
                }, {
                    key: "negate",
                    value: function() {
                        return this.x = -this.x, this.y = -this.y, this
                    }
                }, {
                    key: "multiplyScalar",
                    value: function(e) {
                        return this.x *= e, this.y *= e, this
                    }
                }, {
                    key: "multiplyMatrix",
                    value: function(e) {
                        var t = e.m,
                            n = t[0] * this.x + t[2] * this.y,
                            r = t[1] * this.x + t[3] * this.y;
                        return this.setValues(n, r)
                    }
                }, {
                    key: "multiply",
                    value: function(e) {
                        return this.x *= e.x, this.y *= e.y, this
                    }
                }, {
                    key: "add",
                    value: function(e) {
                        return this.x += e.x, this.y += e.y, this
                    }
                }, {
                    key: "subtract",
                    value: function(e) {
                        return this.x -= e.x, this.y -= e.y, this
                    }
                }, {
                    key: "subtractScalar",
                    value: function(e) {
                        return this.x -= e, this.y -= e, this
                    }
                }, {
                    key: "rotate",
                    value: function(e, t) {
                        var n = Math.sin(t),
                            r = Math.cos(t);
                        this.x -= e.x, this.y -= e.y;
                        var i = this.x * r - this.y * n,
                            a = this.x * n + this.y * r;
                        return this.x = i + e.x, this.y = a + e.y, this
                    }
                }, {
                    key: "randomize",
                    value: function() {
                        return this.x = 2 * Math.random() - 1, this.y = 2 * Math.random() - 1, this
                    }
                }, {
                    key: "randomize01",
                    value: function() {
                        return this.x = Math.random(), this.y = Math.random(), this
                    }
                }, {
                    key: "randomizeDisc",
                    value: function() {
                        do {
                            this.randomize()
                        } while (this.length() > 1);
                        return this
                    }
                }], [{
                    key: "dot",
                    value: function(e, t) {
                        return e.x * t.x + e.y * t.y
                    }
                }, {
                    key: "distance",
                    value: function(e, t) {
                        var n = e.x - t.x,
                            r = e.y - t.y;
                        return Math.sqrt(n * n + r * r)
                    }
                }, {
                    key: "transformMat2",
                    value: function(t, n) {
                        var r = t.x,
                            i = t.y,
                            a = n.m,
                            o = new e;
                        return o.x = a[0] * r + a[2] * i + a[4], o.y = a[1] * r + a[3] * i + a[5], o
                    }
                }, {
                    key: "transformMat3",
                    value: function(t, n) {
                        var r = t.x,
                            i = t.y,
                            a = n.m,
                            o = new e;
                        return o.x = a[0] * r + a[3] * i + a[6], o.y = a[1] * r + a[4] * i + a[7], o
                    }
                }, {
                    key: "transformMat4",
                    value: function(t, n) {
                        var r = t.x,
                            i = t.y,
                            a = n.m,
                            o = new e;
                        return o.x = a[0] * r + a[4] * i + a[12], o.y = a[1] * r + a[5] * i + a[13], o
                    }
                }, {
                    key: "multiplyScalar",
                    value: function(t, n) {
                        var r = new e;
                        return r.x = t.x * n, r.y = t.y * n, r
                    }
                }, {
                    key: "add",
                    value: function(t, n) {
                        return new e(t.x + n.x, t.y + n.y)
                    }
                }, {
                    key: "subtract",
                    value: function(t, n) {
                        return new e(t.x - n.x, t.y - n.y)
                    }
                }, {
                    key: "lerp",
                    value: function(t, n, r) {
                        var i = t.x,
                            a = t.y;
                        return new e(i + r * (n.x - i), a + r * (n.y - a))
                    }
                }, {
                    key: "fract",
                    value: function(t) {
                        return e.subtract(t, e.floor(t))
                    }
                }, {
                    key: "floor",
                    value: function(t) {
                        return new e(Math.floor(t.x), Math.floor(t.y))
                    }
                }]), e
            }();

        function vr(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var pr = function(e) {
                Y()(n, e);
                var t = vr(n);

                function n(e, r) {
                    var i, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    if (H()(this, n), (i = t.call(this))._loc = e.getUniformLocation(r), i._loc || kn.log("FloatUniform: uniform does not exist on shader: ", e.name, r), !e.shader.program) throw new ReferenceError("Cannot construct FloatUniform from material: material shader is not yet initialized.");
                    return i._renderer = e.renderer, i._program = e.shader.program, i.value = a, i
                }
                return $()(n, [{
                    key: "destruct",
                    value: function() {
                        Sn()(Q()(n.prototype), "destruct", this).call(this)
                    }
                }, {
                    key: "value",
                    set: function(e) {
                        e != this._value && (this._value = e, this._renderer.renderState.setProgram(this._program), this._renderer.context.uniform1f(this._loc, this._value))
                    },
                    get: function() {
                        return this._value
                    }
                }]), n
            }(Mn),
            mr = function() {
                function e(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new dr;
                    if (H()(this, e), this._value = r, this._loc = t.getUniformLocation(n), this._loc || kn.log("FloatUniform: uniform does not exist on shader: ", n), !t.shader.program) throw new ReferenceError("Cannot construct Vector2Uniform from material: material shader is not yet initialized.");
                    this._renderer = t.renderer, this._program = t.shader.program
                }
                return $()(e, [{
                    key: "set",
                    value: function(e) {
                        e.x == this._value.x && e.y == this._value.y || (this._value = e, this._renderer.renderState.setProgram(this._program), this._renderer.context.uniform2f(this._loc, this._value.x, this._value.y))
                    }
                }, {
                    key: "getValue",
                    value: function() {
                        return this._value
                    }
                }]), e
            }(),
            yr = function() {
                function e(t, n) {
                    arguments.length > 2 && void 0 !== arguments[2] || new Un;
                    if (H()(this, e), this._value = new Un, this._loc = t.getUniformLocation(n), this._loc || kn.log("FloatUniform: uniform does not exist on shader: ", n), !t.shader.program) throw new ReferenceError("Cannot construct Vector3Uniform from material: material shader is not yet initialized.");
                    this._renderer = t.renderer, this._program = t.shader.program
                }
                return $()(e, [{
                    key: "set",
                    value: function(e) {
                        e.x == this._value.x && e.y == this._value.y && e.z == this._value.z || (this._value.copy(e), this._renderer.renderState.setProgram(this._program), this._renderer.context.uniform3f(this._loc, this._value.x, this._value.y, this._value.z))
                    }
                }, {
                    key: "getValue",
                    value: function() {
                        return this._value
                    }
                }]), e
            }();

        function _r(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var gr = function(e) {
            Y()(n, e);
            var t = _r(n);

            function n(e, r, i) {
                var a;
                return H()(this, n), (a = t.call(this))._shaderDefines = {}, a.drawType = fr.TRIANGLES, a.depthTest = !0, a.depthWrite = !0, a.alphaToCoverage = !1, a.blend = !1, a.culling = fr.BACK, a.blendFuncSeparate = !1, a.renderer = e, a.name = r, a.shader = i, a.id = n.staticId++, a.setDefaultBlending(), a
            }
            return $()(n, [{
                key: "setActive",
                value: function() {
                    this.renderer.renderState.setProgram(this.shader.program), this.shader.getTextureUniforms().forEach((function(e) {
                        return e.bind()
                    })), this.renderer.renderState.material = this, this.renderer.renderState.setAlphaToCoverage(this.alphaToCoverage), this.renderer.renderState.setDepthTest(this.depthTest), this.renderer.renderState.setDepthMask(this.depthWrite), this.depthFunc && this.renderer.renderState.setDepthFunc(this.depthFunc), this.renderer.renderState.setCulling(this.culling), this.renderer.renderState.setBlendEnabled(this.blend), this.blend && (this.renderer.renderState.setBlendEquation(this.blendEquation), this.renderer.renderState.setBlendFunc(this.sourceBlend, this.destinationBlend))
                }
            }, {
                key: "setDefaultBlending",
                value: function() {
                    this.depthTest = !0, this.depthWrite = !0, this.blend = !1, this.blendEquation = fr.FUNC_ADD, this.sourceBlend = fr.ZERO, this.destinationBlend = fr.ONE
                }
            }, {
                key: "setAlphaBlending",
                value: function() {
                    this.depthWrite = !1, this.depthTest = !0, this.blend = !0, this.blendEquation = fr.FUNC_ADD, this.setBlendUnified(fr.SRC_ALPHA, fr.ONE_MINUS_SRC_ALPHA)
                }
            }, {
                key: "setPreMultipliedAlphaBlending",
                value: function() {
                    this.depthWrite = !1, this.depthTest = !0, this.blend = !0, this.blendEquation = fr.FUNC_ADD, this.setBlendUnified(fr.ONE, fr.ONE_MINUS_SRC_ALPHA)
                }
            }, {
                key: "setMaxBlending",
                value: function() {
                    this.depthWrite = !1, this.depthTest = !1, this.blend = !0, this.blendEquation = 32776, this.sourceBlend = fr.ONE, this.destinationBlend = fr.ONE, this.setBlendUnified(fr.ONE, fr.ONE)
                }
            }, {
                key: "setAdditiveBlending",
                value: function() {
                    this.depthWrite = !1, this.depthTest = !0, this.blend = !0, this.blendEquation = fr.FUNC_ADD, this.setBlendUnified(fr.ONE, fr.ONE)
                }
            }, {
                key: "setMultiplyBlending",
                value: function() {
                    this.depthWrite = !1, this.depthTest = !0, this.blend = !0, this.blendEquation = fr.FUNC_ADD, this.setBlendUnified(fr.ZERO, fr.SRC_COLOR)
                }
            }, {
                key: "setSubtractiveBlending",
                value: function() {
                    this.depthWrite = !1, this.depthTest = !1, this.blend = !0, this.blendEquation = fr.FUNC_SUBTRACT, this.setBlendUnified(fr.ONE, fr.ONE_MINUS_SRC_ALPHA)
                }
            }, {
                key: "setBlendUnified",
                value: function(e, t) {
                    this.blendFuncSeparate = !1, this.sourceBlend = e, this.destinationBlend = t
                }
            }, {
                key: "setBlendSeparate",
                value: function(e, t, n, r) {
                    this.blendFuncSeparate = !0, this.sourceBlendRGB = e, this.sourceBlendAlpha = n, this.destinationBlendRGB = t, this.destinationBlendAlpha = r
                }
            }, {
                key: "setCullingBackFace",
                value: function() {
                    this.culling = fr.BACK
                }
            }, {
                key: "setCullingFrontFace",
                value: function() {
                    this.culling = fr.FRONT
                }
            }, {
                key: "setCullingDisabled",
                value: function() {
                    this.culling = fr.NONE
                }
            }, {
                key: "setDrawTypePoints",
                value: function() {
                    this.drawType = fr.POINTS
                }
            }, {
                key: "setDrawTypeLines",
                value: function() {
                    this.drawType = fr.LINES
                }
            }, {
                key: "setDrawTypeLineStrip",
                value: function() {
                    this.drawType = fr.LINE_STRIP
                }
            }, {
                key: "setDrawTypeTriangles",
                value: function() {
                    this.drawType = fr.TRIANGLES
                }
            }, {
                key: "setDrawTypeTriangleFan",
                value: function() {
                    this.drawType = fr.TRIANGLE_FAN
                }
            }, {
                key: "setDrawTypeTriangleStrip",
                value: function() {
                    this.drawType = fr.TRIANGLE_STRIP
                }
            }, {
                key: "setFloat",
                value: function(e, t) {
                    var n = this.getUniformLocation(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform1f(n, t))
                }
            }, {
                key: "setInt",
                value: function(e, t) {
                    var n = this.getUniformLocation(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform1i(n, t))
                }
            }, {
                key: "setFloats",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                        a = this.getUniformLocation(e);
                    a && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform4f(a, t, n, r, i))
                }
            }, {
                key: "setMatrix",
                value: function(e, t) {
                    var n = this.getUniformLocation(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniformMatrix4fv(n, !1, t.m))
                }
            }, {
                key: "setMatrix3x3",
                value: function(e, t) {
                    var n = this.getUniformLocation(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniformMatrix3fv(n, !1, t.m))
                }
            }, {
                key: "setMatrix2x2",
                value: function(e, t) {
                    var n = this.getUniformLocation(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniformMatrix2fv(n, !1, t.m))
                }
            }, {
                key: "setMatrixArray",
                value: function(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = e + "[" + n + "]";
                        this.setMatrix(r, t[n])
                    }
                }
            }, {
                key: "setMatrixArray2",
                value: function(e, t) {
                    var n = this.getUniformLocation(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniformMatrix4fv(n, !1, t.m))
                }
            }, {
                key: "setMatrixFloatArray",
                value: function(e, t) {
                    var n = this.getUniformLocation(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniformMatrix4fv(n, !1, t))
                }
            }, {
                key: "setTexture",
                value: function(e, t) {
                    var n = this.shader.getTextureUniformByName(e);
                    n && n.set(t)
                }
            }, {
                key: "unSetTexture",
                value: function(e) {
                    var t = this.shader.getTextureUniformByName(e);
                    t && t.unSet()
                }
            }, {
                key: "setFloat32Array",
                value: function(e, t) {
                    var n = this.getUniformLocation(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform1fv(n, t))
                }
            }, {
                key: "setInt32Array",
                value: function(e, t) {
                    var n = this.getUniformLocation(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform1iv(n, t))
                }
            }, {
                key: "setColor",
                value: function(e, t) {
                    var n = this.getUniformLocation(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform4f(n, t.r, t.g, t.b, t.a))
                }
            }, {
                key: "setVector3",
                value: function(e, t) {
                    var n = this.getUniformLocation(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform3f(n, t.x, t.y, t.z))
                }
            }, {
                key: "setVector3Array",
                value: function(e, t) {
                    var n = this.getUniformLocation(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform3fv(n, t))
                }
            }, {
                key: "setVector2",
                value: function(e, t) {
                    var n = this.getUniformLocation(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform2f(n, t.x, t.y))
                }
            }, {
                key: "setVector2Array",
                value: function(e, t) {
                    var n = this.getUniformLocation(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform2fv(n, t))
                }
            }, {
                key: "setVector4",
                value: function(e, t) {
                    var n = this.getUniformLocation(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform4f(n, t.x, t.y, t.z, t.w))
                }
            }, {
                key: "setVector4Array",
                value: function(e, t) {
                    var n = this.getUniformLocation(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform4fv(n, t))
                }
            }, {
                key: "getUniformLocation",
                value: function(e) {
                    return this.shader.getUniformLocation(e)
                }
            }, {
                key: "hasUniform",
                value: function(e) {
                    return !!this.getUniformLocation(e)
                }
            }, {
                key: "addFloatUniform",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return new pr(this, e, t)
                }
            }, {
                key: "addVector2Uniform",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new dr;
                    return new mr(this, e, t)
                }
            }, {
                key: "addVector3Uniform",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Un;
                    return new yr(this, e, t)
                }
            }, {
                key: "addShaderDefines",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r] instanceof Array ? t[r][0] : t[r],
                            a = t[r] instanceof Array ? t[r][1] : 1;
                        void 0 == this._shaderDefines[i] && (this._shaderDefines[i] = a)
                    }
                }
            }, {
                key: "getShaderDefines",
                value: function() {
                    return this._shaderDefines
                }
            }, {
                key: "clearShaderDefines",
                value: function() {
                    this._shaderDefines = []
                }
            }, {
                key: "destruct",
                value: function() {
                    this.isDestructed || this.shader.destruct(), Sn()(Q()(n.prototype), "destruct", this).call(this)
                }
            }]), n
        }(Mn);
        gr.staticId = 0;
        var Er = function e(t, n, r) {
                H()(this, e), this.name = t, this.stride = n, this.loc = r
            },
            Ar = function() {
                function e(t, n, r, i) {
                    if (H()(this, e), this.texture = void 0, this.name = n, this.samplerIndex = i, !t.program) throw new ReferenceError("Cannot construct TextureUniform from shader: shader is not yet initialized.");
                    t.renderer.renderState.setProgram(t.program), t.renderer.context.uniform1i(r, i)
                }
                return $()(e, [{
                    key: "set",
                    value: function(e) {
                        this.texture = e
                    }
                }, {
                    key: "unSet",
                    value: function() {
                        this.texture && this.texture.renderer.renderState.unBindTextureFromSlot(this.texture.textureGL, this.samplerIndex)
                    }
                }, {
                    key: "bind",
                    value: function() {
                        this.texture && this.texture.bindToSlot(this.samplerIndex)
                    }
                }]), e
            }(),
            Tr = function e() {
                H()(this, e)
            };
        Tr.READ_BUFFER = 3074, Tr.UNPACK_ROW_LENGTH = 3314, Tr.UNPACK_SKIP_ROWS = 3315, Tr.UNPACK_SKIP_PIXELS = 3316, Tr.PACK_ROW_LENGTH = 3330, Tr.PACK_SKIP_ROWS = 3331, Tr.PACK_SKIP_PIXELS = 3332, Tr.COLOR = 6144, Tr.DEPTH = 6145, Tr.STENCIL = 6146, Tr.RED = 6403, Tr.RGB8 = 32849, Tr.RGBA8 = 32856, Tr.RGB10_A2 = 32857, Tr.TEXTURE_BINDING_3D = 32874, Tr.UNPACK_SKIP_IMAGES = 32877, Tr.UNPACK_IMAGE_HEIGHT = 32878, Tr.TEXTURE_3D = 32879, Tr.TEXTURE_WRAP_R = 32882, Tr.MAX_3D_TEXTURE_SIZE = 32883, Tr.UNSIGNED_INT_2_10_10_10_REV = 33640, Tr.MAX_ELEMENTS_VERTICES = 33e3, Tr.MAX_ELEMENTS_INDICES = 33001, Tr.TEXTURE_MIN_LOD = 33082, Tr.TEXTURE_MAX_LOD = 33083, Tr.TEXTURE_BASE_LEVEL = 33084, Tr.TEXTURE_MAX_LEVEL = 33085, Tr.MIN = 32775, Tr.MAX = 32776, Tr.DEPTH_COMPONENT24 = 33190, Tr.MAX_TEXTURE_LOD_BIAS = 34045, Tr.TEXTURE_COMPARE_MODE = 34892, Tr.TEXTURE_COMPARE_FUNC = 34893, Tr.CURRENT_QUERY = 34917, Tr.QUERY_RESULT = 34918, Tr.QUERY_RESULT_AVAILABLE = 34919, Tr.STREAM_READ = 35041, Tr.STREAM_COPY = 35042, Tr.STATIC_READ = 35045, Tr.STATIC_COPY = 35046, Tr.DYNAMIC_READ = 35049, Tr.DYNAMIC_COPY = 35050, Tr.MAX_DRAW_BUFFERS = 34852, Tr.DRAW_BUFFER0 = 34853, Tr.DRAW_BUFFER1 = 34854, Tr.DRAW_BUFFER2 = 34855, Tr.DRAW_BUFFER3 = 34856, Tr.DRAW_BUFFER4 = 34857, Tr.DRAW_BUFFER5 = 34858, Tr.DRAW_BUFFER6 = 34859, Tr.DRAW_BUFFER7 = 34860, Tr.DRAW_BUFFER8 = 34861, Tr.DRAW_BUFFER9 = 34862, Tr.DRAW_BUFFER10 = 34863, Tr.DRAW_BUFFER11 = 34864, Tr.DRAW_BUFFER12 = 34865, Tr.DRAW_BUFFER13 = 34866, Tr.DRAW_BUFFER14 = 34867, Tr.DRAW_BUFFER15 = 34868, Tr.MAX_FRAGMENT_UNIFORM_COMPONENTS = 35657, Tr.MAX_VERTEX_UNIFORM_COMPONENTS = 35658, Tr.SAMPLER_3D = 35679, Tr.SAMPLER_2D_SHADOW = 35682, Tr.FRAGMENT_SHADER_DERIVATIVE_HINT = 35723, Tr.PIXEL_PACK_BUFFER = 35051, Tr.PIXEL_UNPACK_BUFFER = 35052, Tr.PIXEL_PACK_BUFFER_BINDING = 35053, Tr.PIXEL_UNPACK_BUFFER_BINDING = 35055, Tr.FLOAT_MAT2x3 = 35685, Tr.FLOAT_MAT2x4 = 35686, Tr.FLOAT_MAT3x2 = 35687, Tr.FLOAT_MAT3x4 = 35688, Tr.FLOAT_MAT4x2 = 35689, Tr.FLOAT_MAT4x3 = 35690, Tr.SRGB = 35904, Tr.SRGB8 = 35905, Tr.SRGB8_ALPHA8 = 35907, Tr.COMPARE_REF_TO_TEXTURE = 34894, Tr.RGBA32F = 34836, Tr.RGB32F = 34837, Tr.RGBA16F = 34842, Tr.RGB16F = 34843, Tr.VERTEX_ATTRIB_ARRAY_INTEGER = 35069, Tr.MAX_ARRAY_TEXTURE_LAYERS = 35071, Tr.MIN_PROGRAM_TEXEL_OFFSET = 35076, Tr.MAX_PROGRAM_TEXEL_OFFSET = 35077, Tr.MAX_VARYING_COMPONENTS = 35659, Tr.TEXTURE_2D_ARRAY = 35866, Tr.TEXTURE_BINDING_2D_ARRAY = 35869, Tr.R11F_G11F_B10F = 35898, Tr.UNSIGNED_INT_10F_11F_11F_REV = 35899, Tr.RGB9_E5 = 35901, Tr.UNSIGNED_INT_5_9_9_9_REV = 35902, Tr.TRANSFORM_FEEDBACK_BUFFER_MODE = 35967, Tr.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 35968, Tr.TRANSFORM_FEEDBACK_VARYINGS = 35971, Tr.TRANSFORM_FEEDBACK_BUFFER_START = 35972, Tr.TRANSFORM_FEEDBACK_BUFFER_SIZE = 35973, Tr.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 35976, Tr.RASTERIZER_DISCARD = 35977, Tr.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 35978, Tr.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 35979, Tr.INTERLEAVED_ATTRIBS = 35980, Tr.SEPARATE_ATTRIBS = 35981, Tr.TRANSFORM_FEEDBACK_BUFFER = 35982, Tr.TRANSFORM_FEEDBACK_BUFFER_BINDING = 35983, Tr.RGBA32UI = 36208, Tr.RGB32UI = 36209, Tr.RGBA16UI = 36214, Tr.RGB16UI = 36215, Tr.RGBA8UI = 36220, Tr.RGB8UI = 36221, Tr.RGBA32I = 36226, Tr.RGB32I = 36227, Tr.RGBA16I = 36232, Tr.RGB16I = 36233, Tr.RGBA8I = 36238, Tr.RGB8I = 36239, Tr.RED_INTEGER = 36244, Tr.RGB_INTEGER = 36248, Tr.RGBA_INTEGER = 36249, Tr.SAMPLER_2D_ARRAY = 36289, Tr.SAMPLER_2D_ARRAY_SHADOW = 36292, Tr.SAMPLER_CUBE_SHADOW = 36293, Tr.UNSIGNED_INT_VEC2 = 36294, Tr.UNSIGNED_INT_VEC3 = 36295, Tr.UNSIGNED_INT_VEC4 = 36296, Tr.INT_SAMPLER_2D = 36298, Tr.INT_SAMPLER_3D = 36299, Tr.INT_SAMPLER_CUBE = 36300, Tr.INT_SAMPLER_2D_ARRAY = 36303, Tr.UNSIGNED_INT_SAMPLER_2D = 36306, Tr.UNSIGNED_INT_SAMPLER_3D = 36307, Tr.UNSIGNED_INT_SAMPLER_CUBE = 36308, Tr.UNSIGNED_INT_SAMPLER_2D_ARRAY = 36311, Tr.DEPTH_COMPONENT32F = 36012, Tr.DEPTH32F_STENCIL8 = 36013, Tr.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269, Tr.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 33296, Tr.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 33297, Tr.FRAMEBUFFER_ATTACHMENT_RED_SIZE = 33298, Tr.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 33299, Tr.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 33300, Tr.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 33301, Tr.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 33302, Tr.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 33303, Tr.FRAMEBUFFER_DEFAULT = 33304, Tr.DEPTH_STENCIL_ATTACHMENT = 33306, Tr.DEPTH_STENCIL = 34041, Tr.UNSIGNED_INT_24_8 = 34042, Tr.DEPTH24_STENCIL8 = 35056, Tr.UNSIGNED_NORMALIZED = 35863, Tr.DRAW_FRAMEBUFFER_BINDING = 36006, Tr.READ_FRAMEBUFFER = 36008, Tr.DRAW_FRAMEBUFFER = 36009, Tr.READ_FRAMEBUFFER_BINDING = 36010, Tr.RENDERBUFFER_SAMPLES = 36011, Tr.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 36052, Tr.MAX_COLOR_ATTACHMENTS = 36063, Tr.COLOR_ATTACHMENT1 = 36065, Tr.COLOR_ATTACHMENT2 = 36066, Tr.COLOR_ATTACHMENT3 = 36067, Tr.COLOR_ATTACHMENT4 = 36068, Tr.COLOR_ATTACHMENT5 = 36069, Tr.COLOR_ATTACHMENT6 = 36070, Tr.COLOR_ATTACHMENT7 = 36071, Tr.COLOR_ATTACHMENT8 = 36072, Tr.COLOR_ATTACHMENT9 = 36073, Tr.COLOR_ATTACHMENT10 = 36074, Tr.COLOR_ATTACHMENT11 = 36075, Tr.COLOR_ATTACHMENT12 = 36076, Tr.COLOR_ATTACHMENT13 = 36077, Tr.COLOR_ATTACHMENT14 = 36078, Tr.COLOR_ATTACHMENT15 = 36079, Tr.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 36182, Tr.MAX_SAMPLES = 36183, Tr.HALF_FLOAT = 5131, Tr.RG = 33319, Tr.RG_INTEGER = 33320, Tr.R8 = 33321, Tr.RG8 = 33323, Tr.R16F = 33325, Tr.R32F = 33326, Tr.RG16F = 33327, Tr.RG32F = 33328, Tr.R8I = 33329, Tr.R8UI = 33330, Tr.R16I = 33331, Tr.R16UI = 33332, Tr.R32I = 33333, Tr.R32UI = 33334, Tr.RG8I = 33335, Tr.RG8UI = 33336, Tr.RG16I = 33337, Tr.RG16UI = 33338, Tr.RG32I = 33339, Tr.RG32UI = 33340, Tr.VERTEX_ARRAY_BINDING = 34229, Tr.R8_SNORM = 36756, Tr.RG8_SNORM = 36757, Tr.RGB8_SNORM = 36758, Tr.RGBA8_SNORM = 36759, Tr.SIGNED_NORMALIZED = 36764, Tr.COPY_READ_BUFFER = 36662, Tr.COPY_WRITE_BUFFER = 36663, Tr.COPY_READ_BUFFER_BINDING = 36662, Tr.COPY_WRITE_BUFFER_BINDING = 36663, Tr.UNIFORM_BUFFER = 35345, Tr.UNIFORM_BUFFER_BINDING = 35368, Tr.UNIFORM_BUFFER_START = 35369, Tr.UNIFORM_BUFFER_SIZE = 35370, Tr.MAX_VERTEX_UNIFORM_BLOCKS = 35371, Tr.MAX_FRAGMENT_UNIFORM_BLOCKS = 35373, Tr.MAX_COMBINED_UNIFORM_BLOCKS = 35374, Tr.MAX_UNIFORM_BUFFER_BINDINGS = 35375, Tr.MAX_UNIFORM_BLOCK_SIZE = 35376, Tr.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 35377, Tr.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 35379, Tr.UNIFORM_BUFFER_OFFSET_ALIGNMENT = 35380, Tr.ACTIVE_UNIFORM_BLOCKS = 35382, Tr.UNIFORM_TYPE = 35383, Tr.UNIFORM_SIZE = 35384, Tr.UNIFORM_BLOCK_INDEX = 35386, Tr.UNIFORM_OFFSET = 35387, Tr.UNIFORM_ARRAY_STRIDE = 35388, Tr.UNIFORM_MATRIX_STRIDE = 35389, Tr.UNIFORM_IS_ROW_MAJOR = 35390, Tr.UNIFORM_BLOCK_BINDING = 35391, Tr.UNIFORM_BLOCK_DATA_SIZE = 35392, Tr.UNIFORM_BLOCK_ACTIVE_UNIFORMS = 35394, Tr.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 35395, Tr.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 35396, Tr.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 35398, Tr.INVALID_INDEX = 4294967295, Tr.MAX_VERTEX_OUTPUT_COMPONENTS = 37154, Tr.MAX_FRAGMENT_INPUT_COMPONENTS = 37157, Tr.MAX_SERVER_WAIT_TIMEOUT = 37137, Tr.OBJECT_TYPE = 37138, Tr.SYNC_CONDITION = 37139, Tr.SYNC_STATUS = 37140, Tr.SYNC_FLAGS = 37141, Tr.SYNC_FENCE = 37142, Tr.SYNC_GPU_COMMANDS_COMPLETE = 37143, Tr.UNSIGNALED = 37144, Tr.SIGNALED = 37145, Tr.ALREADY_SIGNALED = 37146, Tr.TIMEOUT_EXPIRED = 37147, Tr.CONDITION_SATISFIED = 37148, Tr.WAIT_FAILED = 37149, Tr.SYNC_FLUSH_COMMANDS_BIT = 1, Tr.VERTEX_ATTRIB_ARRAY_DIVISOR = 35070, Tr.ANY_SAMPLES_PASSED = 35887, Tr.ANY_SAMPLES_PASSED_CONSERVATIVE = 36202, Tr.SAMPLER_BINDING = 35097, Tr.RGB10_A2UI = 36975, Tr.INT_2_10_10_10_REV = 36255, Tr.TRANSFORM_FEEDBACK = 36386, Tr.TRANSFORM_FEEDBACK_PAUSED = 36387, Tr.TRANSFORM_FEEDBACK_ACTIVE = 36388, Tr.TRANSFORM_FEEDBACK_BINDING = 36389, Tr.TEXTURE_IMMUTABLE_FORMAT = 37167, Tr.MAX_ELEMENT_INDEX = 36203, Tr.TEXTURE_IMMUTABLE_LEVELS = 33503;
        var Rr = Tr;

        function xr(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var wr = function(e) {
            Y()(n, e);
            var t = xr(n);

            function n(e) {
                var r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return H()(this, n), (r = t.call(this)).textureUniforms = void 0, r.uniformLocationsByName = void 0, r.vShaderSource = "", r.fShaderSource = "", r.compileStatusChecked = !1, r.id = n.staticId++, r.renderer = e, r.shaderDefines = i, r
            }
            return $()(n, [{
                key: "load",
                value: function(e, t, n) {
                    var r = this;
                    Promise.all([t.loadAssetByName("".concat(e, ".vs.glsl")), t.loadAssetByName("".concat(e, ".fs.glsl"))]).then((function(i) {
                        r.loadIncludes(i, t, (function(t) {
                            r.init(e, t[0], t[1], n)
                        }))
                    }))
                }
            }, {
                key: "loadIncludes",
                value: function(e, t, n) {
                    for (var r = this, i = /^#include\s+(\S+)/, a = [], o = 0; o < e.length; o++)
                        for (var s = e[o].split("\n"), l = 0; l < s.length; l++) {
                            var u = s[l];
                            u = u.trim();
                            var c;
                            null !== (c = i.exec(u)) && a.push([c[1], c])
                        }
                    if (a.length) {
                        for (var h = [], f = 0; f < a.length; f++) h[f] = a[f][0];
                        Promise.all(h.map((function(e) {
                            return t.loadAssetByPath(e)
                        }))).then((function(i) {
                            for (var o = 0; o < e.length; o++)
                                for (var s = 0; s < a.length; s++) e[o] = e[o].replace(a[s][1][0], "\n\n///// Start " + h[s] + "\n\n" + i[s] + "\n\n///// End " + h[s] + "\n\n");
                            r.loadIncludes(e, t, n)
                        }))
                    } else n.call(this, e)
                }
            }, {
                key: "init",
                value: function(e, t, r) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    if (this.name = e, this.shaderDefines) {
                        var a = "",
                            o = 0;
                        for (var s in this.shaderDefines) a += "#define " + s + " " + this.shaderDefines[s] + "\n", o++;
                        o > 0 && (t = a + t, r = a + r)
                    }
                    t = n.stripUniformDuplicates(t), r = n.stripUniformDuplicates(r), this.vShaderSource = this.renderer.preprocessShaderString(t), this.fShaderSource = this.renderer.preprocessShaderString(r);
                    var l = this.renderer.context;
                    return this.vShader = n.compileShader(l, this.vShaderSource, l.VERTEX_SHADER), this.fShader = n.compileShader(l, this.fShaderSource, l.FRAGMENT_SHADER), this.program = n.LinkProgram(l, this.vShader, this.fShader), i && i.call(this), this
                }
            }, {
                key: "checkCompileStatus",
                value: function() {
                    if (!this.compileStatusChecked) {
                        this.compileStatusChecked = !0;
                        var e = this.renderer.context;
                        if (e.getProgramParameter(this.program, e.LINK_STATUS)) return;
                        throw this.showErrorLog(e.getShaderInfoLog(this.vShader), this.vShaderSource), this.showErrorLog(e.getShaderInfoLog(this.fShader), this.fShaderSource), this.showErrorLog(e.getProgramInfoLog(this.program), this.fShaderSource), new Error("unable to compile shader")
                    }
                }
            }, {
                key: "showErrorLog",
                value: function(e, t) {
                    if (e) {
                        kn.error("compileShader: error: " + this.name + " \n" + e), console.log("%c compileShader: " + this.name, "background: #fff0f0; color: red"), console.log(e);
                        for (var n = /ERROR: (\d+):(\d+):/, r = e.split("\n"), i = [], a = 0; a < r.length; a++) {
                            var o, s = r[a];
                            null !== (o = n.exec(s)) && (i[parseInt(o[2], 10) - 1] = s)
                        }
                        r = t.split("\n");
                        var l = [];
                        l[0] = "";
                        for (var u = 0; u < r.length; u++) l[0] += "%c" + r[u] + "\n", l[u + 1] = i[u] ? "background: #fff0f0; color: red" : "background: white; color: black", i[u] && (l[0] += " --\x3e " + i[u] + "\n");
                        console.log.apply(console, l), console.log("%c compileShader: " + this.name, "background: #fff0f0; color: red")
                    }
                }
            }, {
                key: "getUniformLocation",
                value: function(e) {
                    this.uniformLocationsByName || this.getTextureUniforms();
                    var t = this.uniformLocationsByName[e];
                    if (void 0 === t) {
                        var n = this.renderer.context.getUniformLocation(this.program, e) || !1;
                        this.uniformLocationsByName[e] = n
                    }
                    return t
                }
            }, {
                key: "getTextureUniforms",
                value: function() {
                    if (!this.textureUniforms) {
                        this.checkCompileStatus();
                        var e = this.renderer.context,
                            t = e.getProgramParameter(this.program, e.ACTIVE_UNIFORMS);
                        this.textureUniforms = [], this.uniformLocationsByName = {};
                        for (var n = 0, r = 0; r < t; r++) {
                            var i = e.getActiveUniform(this.program, r),
                                a = e.getUniformLocation(this.program, i.name);
                            this.uniformLocationsByName[i.name] = a, i.type !== fr.SAMPLER_2D && i.type !== fr.SAMPLER_CUBE && i.type !== Rr.SAMPLER_3D || (this.textureUniforms.push(new Ar(this, i.name, a, n)), n++)
                        }
                    }
                    return this.textureUniforms
                }
            }, {
                key: "getAttributes",
                value: function() {
                    if (!this.attributes) {
                        this.checkCompileStatus();
                        var e = this.renderer.context,
                            t = e.getProgramParameter(this.program, e.ACTIVE_ATTRIBUTES);
                        this.attributes = [];
                        for (var r = 0; r < t; r++) {
                            var i = e.getActiveAttrib(this.program, r),
                                a = e.getAttribLocation(this.program, i.name),
                                o = n.getStride(i.type);
                            this.attributes.push(new Er(i.name, o, a))
                        }
                    }
                    return this.attributes
                }
            }, {
                key: "getAttributeByName",
                value: function(e) {
                    return (this.attributes || this.getAttributes()).find((function(t) {
                        return t.name === e
                    }))
                }
            }, {
                key: "getTextureUniformByName",
                value: function(e) {
                    return (this.textureUniforms || this.getTextureUniforms()).find((function(t) {
                        return t.name === e
                    }))
                }
            }, {
                key: "destruct",
                value: function() {
                    var e = this.renderer.context;
                    e.deleteShader(this.vShader), e.deleteShader(this.fShader), e.deleteProgram(this.program), Sn()(Q()(n.prototype), "destruct", this).call(this)
                }
            }], [{
                key: "stripUniformDuplicates",
                value: function(e) {
                    for (var t = "", n = {}, r = /^uniform\s+(\S*)\s+(\S*);/, i = e.split("\n"), a = 0; a < i.length; a++) {
                        var o = i[a];
                        o = o.trim();
                        var s;
                        if (null !== (s = r.exec(o))) {
                            var l = s[2];
                            n[l] && (o = "// " + o), n[l] = !0
                        }
                        t += o + "\n"
                    }
                    return t
                }
            }, {
                key: "compileShader",
                value: function(e, t, n) {
                    var r = e.createShader(n);
                    return e.shaderSource(r, t), e.compileShader(r), r
                }
            }, {
                key: "LinkProgram",
                value: function(e, t, n) {
                    var r = e.createProgram();
                    return e.attachShader(r, t), e.attachShader(r, n), e.linkProgram(r), r
                }
            }, {
                key: "getStride",
                value: function(e) {
                    switch (e) {
                        case fr.FLOAT:
                            return 1;
                        case fr.FLOAT_VEC2:
                            return 2;
                        case fr.FLOAT_VEC3:
                            return 3;
                        case fr.FLOAT_VEC4:
                            return 4;
                        case fr.FLOAT_MAT4:
                            return 16;
                        default:
                            return kn.error("attribute type not handled: " + e), -1
                    }
                }
            }]), n
        }(Mn);

        function br(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        wr.staticId = 0;
        var Sr = function(e) {
            Y()(n, e);
            var t = br(n);

            function n(e, r, i) {
                var a;
                return H()(this, n), (a = t.call(this, e, i, new wr(e))).shaderIndex = e.shaderIndex, a.shaderName = i, r.add(yn()(a)), a
            }
            return $()(n, [{
                key: "load",
                value: function(e) {
                    var t = this;
                    this.shader.shaderDefines = this.getShaderDefines(), this.shader.load(this.shaderName, this.shaderIndex, (function() {
                        e.call(t)
                    }))
                }
            }]), n
        }(gr);

        function kr(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var Mr = function(e) {
                Y()(n, e);
                var t = kr(n);

                function n(e) {
                    var r;
                    return H()(this, n), (r = t.call(this)).depthMask = !0, r.depthTest = !0, r.alphaToCoverage = !0, r.depthFunc = -1, r.culling = -1, r.cullingEnabled = !0, r.blendEquation = -1, r.blendEnabled = !0, r.sourceBlend = -1, r.destinationBlend = -1, r.renderer = e, r.setBlendEnabled(!r.blendEnabled), r.setCullingEnabled(!r.cullingEnabled), r.setDepthMask(!r.depthMask), r.setDepthTest(!r.depthTest), r.enabledAttribArrays = [], r.textureSlots = [], r
                }
                return $()(n, [{
                    key: "bindTextureToSlot",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        this.textureSlots[t] != e.textureGL && (this.renderer.context.activeTexture(fr.TEXTURE0 + t), this.renderer.context.bindTexture(e.target, e.textureGL), this.textureSlots[t] = e.textureGL)
                    }
                }, {
                    key: "activateSlot",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.renderer.context.activeTexture(fr.TEXTURE0 + e)
                    }
                }, {
                    key: "unBindTextureFromSlot",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        this.textureSlots[t] == e && (this.renderer.context.activeTexture(fr.TEXTURE0 + t), this.renderer.context.bindTexture(fr.TEXTURE_2D, null), this.textureSlots[t] = void 0)
                    }
                }, {
                    key: "setProgram",
                    value: function(e) {
                        return e != this.program && (this.program = e, this.renderer.context.useProgram(this.program), !0)
                    }
                }, {
                    key: "setDepthMask",
                    value: function(e) {
                        e != this.depthMask && (this.renderer.context.depthMask(e), this.depthMask = e)
                    }
                }, {
                    key: "getDepthMask",
                    value: function() {
                        return this.depthMask
                    }
                }, {
                    key: "setAlphaToCoverage",
                    value: function(e) {
                        e != this.alphaToCoverage && (e ? this.renderer.context.enable(fr.SAMPLE_ALPHA_TO_COVERAGE) : this.renderer.context.disable(fr.SAMPLE_ALPHA_TO_COVERAGE), this.alphaToCoverage = e)
                    }
                }, {
                    key: "setDepthTest",
                    value: function(e) {
                        e != this.depthTest && (e ? this.renderer.context.enable(fr.DEPTH_TEST) : this.renderer.context.disable(fr.DEPTH_TEST), this.depthTest = e)
                    }
                }, {
                    key: "setDepthFunc",
                    value: function(e) {
                        e != this.depthFunc && (e ? this.renderer.context.depthFunc(e) : this.renderer.context.depthFunc(this.renderer.context.LESS), this.depthFunc = e)
                    }
                }, {
                    key: "setCullingEnabled",
                    value: function(e) {
                        e != this.cullingEnabled && (e ? this.renderer.context.enable(fr.CULL_FACE) : this.renderer.context.disable(fr.CULL_FACE), this.cullingEnabled = e)
                    }
                }, {
                    key: "setCulling",
                    value: function(e) {
                        e != this.culling && (e == fr.NONE ? this.setCullingEnabled(!1) : (this.setCullingEnabled(!0), this.renderer.context.cullFace(e)), this.culling = e)
                    }
                }, {
                    key: "setBlendEquation",
                    value: function(e) {
                        e != this.blendEquation && (this.renderer.context.blendEquation(e), this.blendEquation = e)
                    }
                }, {
                    key: "setBlendEnabled",
                    value: function(e) {
                        e != this.blendEnabled && (e ? this.renderer.context.enable(fr.BLEND) : this.renderer.context.disable(fr.BLEND), this.blendEnabled = e)
                    }
                }, {
                    key: "setBlendFunc",
                    value: function(e, t) {
                        e == this.sourceBlend && t == this.destinationBlend || (this.renderer.context.blendFunc(e, t), this.sourceBlend = e, this.destinationBlend = t)
                    }
                }, {
                    key: "setBlendFuncSeparate",
                    value: function(e, t, n, r) {
                        this.renderer.context.blendFuncSeparate(e, t, n, r), this.sourceBlend = -1
                    }
                }]), n
            }(Mn),
            Lr = function() {
                function e() {
                    H()(this, e), this.maxAnisotropy = 0
                }
                return $()(e, [{
                    key: "enableExtensions",
                    value: function(t) {
                        kn.ENABLED && (this.color_buffer_float = e.enableExtension(t, "WEBGL_color_buffer_float") || e.enableExtension(t, "EXT_color_buffer_float"), this.color_buffer_half_float = e.enableExtension(t, "EXT_color_buffer_half_float"), this.texture_float = e.enableExtension(t, "OES_texture_float"), this.texture_float_linear = e.enableExtension(t, "OES_texture_float_linear"), this.texture_half_float = e.enableExtension(t, "OES_texture_half_float"), this.texture_half_float_linear = e.enableExtension(t, "OES_texture_half_float_linear")), this.shader_texture_lod = e.enableExtension(t, "EXT_shader_texture_lod"), this.standard_derivatives = e.enableExtension(t, "OES_standard_derivatives"), this.vertex_array_object = e.enableExtension(t, "OES_vertex_array_object"), this.filter_anisotropic = e.enableExtension(t, "EXT_texture_filter_anisotropic"), this.filter_anisotropic || (this.filter_anisotropic = e.enableExtension(t, "texture_filter_anisotropic")), this.filter_anisotropic || (this.filter_anisotropic = e.enableExtension(t, "MOZ_EXT_texture_filter_anisotropic")), this.filter_anisotropic || (this.filter_anisotropic = e.enableExtension(t, "WEBKIT_EXT_texture_filter_anisotropic")), this.filter_anisotropic && (this.maxAnisotropy = t.getParameter(this.filter_anisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT), kn.log("MAX_TEXTURE_MAX_ANISOTROPY_EXT: ", this.maxAnisotropy)), this.element_index_uint = e.enableExtension(t, "OES_element_index_uint")
                    }
                }, {
                    key: "enableTextureCompression",
                    value: function(t) {
                        var n = e.enableExtension(t, "WEBGL_compressed_texture_s3tc");
                        if (n) {
                            var r = t.getParameter(t.COMPRESSED_TEXTURE_FORMATS);
                            if (r.length > 0)
                                for (var i in r) r[i] === n.COMPRESSED_RGB_S3TC_DXT1_EXT && kn.log("support found for texture compression: RGB_S3TC_DXT1"), r[i] === n.COMPRESSED_RGBA_S3TC_DXT1_EXT && kn.log("support found for texture compression: RGBA_S3TC_DXT1"), r[i] === n.COMPRESSED_RGBA_S3TC_DXT3_EXT && kn.log("support found for texture compression: RGBA_S3TC_DXT3"), r[i] === n.COMPRESSED_RGBA_S3TC_DXT5_EXT && kn.log("support found for texture compression: RGBA_S3TC_DXT5");
                            else kn.log("no support found for texture compression ")
                        }
                    }
                }, {
                    key: "getMinMaxSupported",
                    value: function() {
                        return null !== this.blend_minmax
                    }
                }], [{
                    key: "enableExtension",
                    value: function(e, t) {
                        var n = e.getExtension(t);
                        return n ? kn.log("enabled extension " + t) : kn.log("extension " + t + " is not supported"), n
                    }
                }]), e
            }(),
            Or = function() {
                function e() {
                    H()(this, e)
                }
                return $()(e, null, [{
                    key: "cacheIsPathRequested",
                    value: function(t) {
                        return e.clientCache[t]
                    }
                }, {
                    key: "cacheRegisterRequested",
                    value: function(t, n) {
                        e.clientCache[t] = n
                    }
                }, {
                    key: "cacheRegisterCallback",
                    value: function(t, n) {
                        e.clientCacheCallbacks[t] || (e.clientCacheCallbacks[t] = []), e.clientCacheCallbacks[t].push(n)
                    }
                }, {
                    key: "cacheRequestDone",
                    value: function(t, n) {
                        var r = e.clientCacheCallbacks[t];
                        if (r)
                            for (var i = 0; i < r.length; i++) r[i](n);
                        e.clientCacheCallbacks[t] = null, e.clientCache[t] = !1
                    }
                }, {
                    key: "cacheRequestError",
                    value: function(t) {
                        var n = e.clientCacheCallbacks[t];
                        if (n)
                            for (var r = 0; r < n.length; r++) n[r](null);
                        e.clientCacheCallbacks[t] = null, e.clientCache[t] = !1
                    }
                }, {
                    key: "loadText",
                    value: function(t, n) {
                        if (e.cacheRegisterCallback(t, n), !e.cacheIsPathRequested(t)) {
                            var r = new XMLHttpRequest;
                            e.cacheRegisterRequested(t, r), r.onreadystatechange = function(n) {
                                4 === r.readyState && (200 === r.status ? e.cacheRequestDone(t, r.responseText) : e.cacheRequestError(t))
                            }, r.open("GET", t, !0), r.send()
                        }
                    }
                }, {
                    key: "loadArrayBuffer",
                    value: function(t, n) {
                        if (e.cacheRegisterCallback(t, n), !e.cacheIsPathRequested(t)) {
                            var r = new XMLHttpRequest;
                            e.cacheRegisterRequested(t, r), r.open("GET", t, !0), r.responseType = "arraybuffer", r.send(), r.onreadystatechange = function(n) {
                                4 === r.readyState && e.cacheRequestDone(t, r.response)
                            }
                        }
                    }
                }, {
                    key: "loadImage",
                    value: function(t, n) {
                        if ("string" !== typeof t && (t = t.default), e.cacheRegisterCallback(t, n), e.cacheIsPathRequested(t)) return e.cacheIsPathRequested(t);
                        var r = new Image;
                        return e.cacheRegisterRequested(t, r), r.crossOrigin = "Anonymous", r.onload = function() {
                            e.cacheRequestDone(t, r)
                        }, r.onerror = function() {
                            console.log("TextureLoader: could not load image", t), e.cacheRequestDone(t, r)
                        }, r.src = t, r
                    }
                }, {
                    key: "loadMultipleImages",
                    value: function(t, n) {
                        for (var r = this, i = t.length, a = [], o = function(e) {
                                return function(t) {
                                    i--, a[e] = t, 0 === i && n.call(r, a)
                                }
                            }, s = 0; s < t.length; ++s) e.loadImage(t[s], o(s))
                    }
                }, {
                    key: "loadSingleFromRequireContext",
                    value: function(e, t) {
                        return new Promise((function(n, r) {
                            var i;
                            try {
                                i = e("./".concat(t.replace(/^\.\//, "")))
                            } catch (a) {
                                r(a)
                            }
                            "function" === typeof i ? i(n) : n(i.default)
                        }))
                    }
                }, {
                    key: "loadFromRequireContext",
                    value: function(t, n, r) {
                        Promise.all(n.map((function(n) {
                            return e.loadSingleFromRequireContext(t, n)
                        }))).then((function(e) {
                            return r(e)
                        }))
                    }
                }, {
                    key: "loadMultipleTexts",
                    value: function(t, n) {
                        for (var r = this, i = t.length, a = [], o = function(e) {
                                return function(t) {
                                    i--, a[e] = t, 0 === i && n.apply(r, a)
                                }
                            }, s = 0; s < t.length; ++s) e.loadText(t[s], o(s))
                    }
                }]), e
            }();
        Or.clientCache = {}, Or.clientCacheCallbacks = {};
        var Ir = function() {
            function e() {
                H()(this, e), this.webpackContexts = [], this.assetNameMap = {}, this.assetPathMap = {}
            }
            return $()(e, [{
                key: "loadAssetByPath",
                value: function(e) {
                    var t = this.getAssetByPath(e);
                    return Or.loadSingleFromRequireContext(t.webpackContext, t.path)
                }
            }, {
                key: "getAssetByPath",
                value: function(e) {
                    var t = "./".concat(e.replace(/^\.\//, ""));
                    if ("undefined" === typeof this.assetPathMap[t]) throw new ReferenceError("Could not find asset with path ".concat(e, ". Available paths: \n").concat(Object.keys(this.assetPathMap).join("\n")));
                    return {
                        webpackContext: this.webpackContexts[this.assetPathMap[t]],
                        path: t
                    }
                }
            }, {
                key: "loadAssetByName",
                value: function(e) {
                    var t = this.getAssetByName(e);
                    return Or.loadSingleFromRequireContext(t.webpackContext, t.path)
                }
            }, {
                key: "getAssetByName",
                value: function(e) {
                    if ("undefined" === typeof this.assetNameMap[e]) throw new ReferenceError('Could not find asset with name "'.concat(e, '". Available assets: \n').concat(Object.keys(this.assetNameMap.vs).join(", ")));
                    return {
                        webpackContext: this.webpackContexts[this.assetNameMap[e].contextIndex],
                        path: this.assetNameMap[e].path
                    }
                }
            }, {
                key: "addContext",
                value: function(e) {
                    var t = this;
                    if (!(this.webpackContexts.indexOf(e) >= 0)) {
                        var n = this.webpackContexts.length;
                        this.webpackContexts.push(e), e.keys().forEach((function(e) {
                            var r = e.match(/([^\\\/]+)$/);
                            if (r) {
                                if (t.assetNameMap[r[1]]) {
                                    var i = t.webpackContexts[t.assetNameMap[r[1]].contextIndex].resolve(t.assetNameMap[r[1]].path);
                                    console.warn('WARNING: found asset "'.concat(e, '" but another asset with the name "').concat(r[1], '" was already found at "').concat(i, '"'))
                                }
                                t.assetNameMap[r[1]] = {
                                    contextIndex: n,
                                    path: e
                                }
                            }
                            t.assetPathMap[e] = n
                        }))
                    }
                }
            }]), e
        }();

        function Nr(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var Cr = function(e) {
                Y()(n, e);
                var t = Nr(n);

                function n(e, r, i, a, o, s) {
                    var l;
                    return H()(this, n), (l = t.call(this)).data = null, l.vertexCount = -1, l._renderer = e, l.stride = a, l.name = r, l.storeData = o, l.vertexCount = i.length / a, s ? (l.buffer = l._renderer.context.createBuffer(), l.setData(i, o)) : l.data = i, l
                }
                return $()(n, [{
                    key: "clone",
                    value: function() {
                        var e;
                        return this.data ? (e = new Float32Array(this.data.length)).set(this.data) : e = new Float32Array(0), new n(this._renderer, this.name, e, this.stride, !1, !1)
                    }
                }, {
                    key: "setData",
                    value: function(e, t) {
                        if (t || !this.buffer ? this.data = e : this.data = null, 0 !== e.length) {
                            if (this.buffer) {
                                var n = this._renderer.context;
                                n.bindBuffer(fr.ARRAY_BUFFER, this.buffer), n.bufferData(fr.ARRAY_BUFFER, e.byteLength, fr.STATIC_DRAW), n.bufferSubData(fr.ARRAY_BUFFER, 0, e)
                            }
                        } else console.warn("VertexAttribute: no data: probably a mesh file could not be loaded: " + this.name)
                    }
                }, {
                    key: "getBufferLength",
                    value: function() {
                        if (this.data) return this.data.length;
                        if (!this.buffer) throw new ReferenceError("Cannot get buffer length: no buffer set on VertextAttribute");
                        var e = this._renderer.context;
                        return e.bindBuffer(fr.ARRAY_BUFFER, this.buffer), e.getBufferParameter(fr.ARRAY_BUFFER, fr.BUFFER_SIZE) / 4
                    }
                }, {
                    key: "destruct",
                    value: function() {
                        if (!this.isDestructed) {
                            var e = this._renderer.context;
                            this.buffer && e.deleteBuffer(this.buffer), this.data = null, Sn()(Q()(n.prototype), "destruct", this).call(this)
                        }
                    }
                }], [{
                    key: "serialize",
                    value: function(e) {
                        return null === e.data ? (console.error("Trying to serialize vertex attribute " + e.name + " without saved data"), {}) : {
                            name: e.name,
                            data: e.data,
                            stride: e.stride,
                            storeData: e.storeData
                        }
                    }
                }, {
                    key: "deserialize",
                    value: function(e) {
                        return {
                            name: e.name,
                            data: e.data,
                            stride: e.stride,
                            storeData: e.storeData
                        }
                    }
                }]), n
            }(Mn),
            Dr = function e(t, n) {
                H()(this, e), this.name = t, this.stride = n
            };

        function Pr(e, t) {
            var n;
            if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" === typeof e) return Fr(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Fr(e, t)
                    }(e)) || t && e && "number" === typeof e.length) {
                    n && (e = n);
                    var r = 0,
                        i = function() {};
                    return {
                        s: i,
                        n: function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, o = !0,
                s = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return o = e.done, e
                },
                e: function(e) {
                    s = !0, a = e
                },
                f: function() {
                    try {
                        o || null == n.return || n.return()
                    } finally {
                        if (s) throw a
                    }
                }
            }
        }

        function Fr(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function Ur(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        Dr.POSITION = new Dr("aPos", 3), Dr.TEXCOORD0 = new Dr("aUV0", 2), Dr.TEXCOORD1 = new Dr("aUV1", 2), Dr.NORMAL = new Dr("aNormal", 3), Dr.COLOR0 = new Dr("aColor0", 3), Dr.COLOR1 = new Dr("aColor1", 3), Dr.TANGENT = new Dr("aTangent", 4);
        var Br = function(e) {
            Y()(n, e);
            var t = Ur(n);

            function n(e) {
                var r, i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return H()(this, n), (r = t.call(this)).indexType = fr.UNSIGNED_SHORT, r._vertexCount = 0, r._isInterleavedBufferDirty = !0, r._attributeNames = {}, r.renderer = e, r.attributes = [], r._vertexCount = 0, r.id = n.staticId++, r.interleaved = i, r.isDynamic = a, r
            }
            return $()(n, [{
                key: "setJSONData",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.isDynamic = e.isDynamic || !1, e.indices && e.indices.length > 0 && (e.use32BitIndices ? this.setIndices32(new Uint32Array(e.indices)) : this.setIndices(new Uint16Array(e.indices)));
                    for (var n = 0; n < e.attributes.length; n++) {
                        var r = e.attributes[n];
                        this.setAttribute(r.name, r.stride, new Float32Array(r.data), t)
                    }
                }
            }, {
                key: "clone",
                value: function() {
                    var e, t = new n(this.renderer, this.interleaved, this.isDynamic),
                        r = Pr(this.attributes);
                    try {
                        for (r.s(); !(e = r.n()).done;) {
                            var i = e.value;
                            t.attributes.push(i.clone())
                        }
                    } catch (a) {
                        r.e(a)
                    } finally {
                        r.f()
                    }
                    return t._vertexCount = this._vertexCount, t.indices = this.indices, t.indexType = this.indexType, this.indices instanceof Uint32Array ? t.setIndices32(this.indices) : t.setIndices(this.indices), t
                }
            }, {
                key: "interleaveData",
                value: function() {
                    if (this._isInterleavedBufferDirty && this.interleaved) {
                        this.interleavedStrideSum = 0;
                        for (var e = 0; e < this.attributes.length; e++) this.interleavedStrideSum += this.attributes[e].stride;
                        for (var t = new Float32Array(this.interleavedStrideSum * this._vertexCount), n = 0, r = 0; r < this._vertexCount; r++)
                            for (var i = 0; i < this.attributes.length; i++)
                                for (var a = this.attributes[i], o = 0; o < a.stride; o++) t[n++] = a.data[r * a.stride + o];
                        for (var s = 0; s < this.attributes.length; s++) this.attributes[s].storeData || (this.attributes[s].data = null);
                        this.interleavedBuffer = this.renderer.context.createBuffer();
                        var l = this.renderer.context;
                        l.bindBuffer(fr.ARRAY_BUFFER, this.interleavedBuffer), l.bufferData(fr.ARRAY_BUFFER, t, l.STATIC_DRAW), this._isInterleavedBufferDirty = !1
                    }
                }
            }, {
                key: "isInterleaved",
                value: function() {
                    return this.interleaved
                }
            }, {
                key: "hasIndices",
                value: function() {
                    return !!this.indices
                }
            }, {
                key: "setAttribute",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    this.setData(n, e, t, r)
                }
            }, {
                key: "setPositions",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = Dr.POSITION;
                    this.setData(e, n.name, n.stride, t)
                }
            }, {
                key: "getPositions",
                value: function() {
                    return this.getData(Dr.POSITION.name)
                }
            }, {
                key: "setNormals",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = Dr.NORMAL;
                    this.setData(e, n.name, n.stride, t)
                }
            }, {
                key: "getNormals",
                value: function() {
                    return this.getData(Dr.NORMAL.name)
                }
            }, {
                key: "setColors",
                value: function(e) {
                    var t = Dr.COLOR0;
                    this.setData(e, t.name, t.stride)
                }
            }, {
                key: "getColors",
                value: function() {
                    return this.getData(Dr.COLOR0.name)
                }
            }, {
                key: "setColors1",
                value: function(e) {
                    var t = Dr.COLOR1;
                    this.setData(e, t.name, t.stride)
                }
            }, {
                key: "getColors1",
                value: function() {
                    return this.getData(Dr.COLOR1.name)
                }
            }, {
                key: "setUV0",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = Dr.TEXCOORD0;
                    this.setData(e, n.name, n.stride, t)
                }
            }, {
                key: "getUV0",
                value: function() {
                    return this.getData(Dr.TEXCOORD0.name)
                }
            }, {
                key: "setUV1",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = Dr.TEXCOORD1;
                    this.setData(e, n.name, n.stride, t)
                }
            }, {
                key: "getUV1",
                value: function() {
                    return this.getData(Dr.TEXCOORD1.name)
                }
            }, {
                key: "setTangents",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = Dr.TANGENT;
                    this.setData(e, n.name, n.stride, t)
                }
            }, {
                key: "getTangents",
                value: function() {
                    return this.getData(Dr.TANGENT.name)
                }
            }, {
                key: "setData",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    this._attributeNames = {};
                    var i = this.getAttributeIndex(t),
                        a = e.length / n;
                    i < 0 ? this.attributes.push(new Cr(this.renderer, t, e, n, r, !this.interleaved)) : this.attributes[i].vertexCount == a ? this.attributes[i].setData(e, r) : (this.attributes[i].destruct(), this.attributes[i] = new Cr(this.renderer, t, e, n, r, !this.interleaved)), this._vertexCount = a, this.interleaved && (this._isInterleavedBufferDirty = !0)
                }
            }, {
                key: "deleteAttribute",
                value: function(e) {
                    var t = this.getAttributeIndex(e);
                    t >= 0 && this.attributes.splice(t, 1), this._isInterleavedBufferDirty = !0, this._attributeNames = {}
                }
            }, {
                key: "hasAttribute",
                value: function(e) {
                    var t = this._attributeNames[e];
                    if (!0 === t || !1 === t) return t;
                    var n = this.getAttributeIndex(e);
                    return this._attributeNames[e] = n >= 0, this._attributeNames[e]
                }
            }, {
                key: "getAttribute",
                value: function(e) {
                    var t = this.getAttributeIndex(e);
                    return t >= 0 ? this.attributes[t] : null
                }
            }, {
                key: "getAttributeIndex",
                value: function(e) {
                    for (var t = 0; t < this.attributes.length; t++)
                        if (this.attributes[t].name === e) return t;
                    return -1
                }
            }, {
                key: "getData",
                value: function(e) {
                    var t = this.getAttribute(e);
                    return t && t.data ? t.data : (kn.log("Mesh: getData", e, "no data"), null)
                }
            }, {
                key: "setIndices",
                value: function(e) {
                    if (!(e instanceof Uint16Array)) throw "Indices need to be of type Uint16Array";
                    this.indexType = fr.UNSIGNED_SHORT, this.indices = e;
                    var t = this.renderer.context;
                    this.indexBuffer || (this.indexBuffer = t.createBuffer()), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW)
                }
            }, {
                key: "setIndices32",
                value: function(e) {
                    if (!(e instanceof Uint32Array)) throw "Indices need to be of type Uint32Array";
                    if (this.renderer.extensionManager.element_index_uint || this.renderer.context instanceof WebGL2RenderingContext) {
                        this.indexType = fr.UNSIGNED_INT, this.indices = e;
                        var t = this.renderer.context;
                        this.indexBuffer || (this.indexBuffer = t.createBuffer()), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null)
                    } else kn.log("mesh: setIndices32: extension not supported: element_index_uint: using 16 bits indices"), this.setIndices(new Uint16Array(e))
                }
            }, {
                key: "getNumVertices",
                value: function() {
                    return this._vertexCount
                }
            }, {
                key: "isSkinned",
                value: function() {
                    return this.hasAttribute("aSkinIndex")
                }
            }, {
                key: "destruct",
                value: function() {
                    if (!this.isDestructed) {
                        this.renderer.destructVAO(this);
                        var e = this.renderer.context;
                        if (this.interleavedBuffer && e.deleteBuffer(this.interleavedBuffer), this.indexBuffer && e.deleteBuffer(this.indexBuffer), this.attributes)
                            for (var t = 0; t < this.attributes.length; t++) this.attributes[t].destruct();
                        Sn()(Q()(n.prototype), "destruct", this).call(this)
                    }
                }
            }]), n
        }(Mn);
        Br.staticId = 0;
        var zr = function() {
            function e() {
                H()(this, e), this.averageFps = 60, this.manualUpdate = !1, e._instance && alert("do not create additional instances of the time class"), this.fps = 60, this.deltaTime = 1 / this.fps, this.time = 0
            }
            return $()(e, [{
                key: "updateManual",
                value: function() {
                    this.manualUpdate = !0, this.updateDeltaTime()
                }
            }, {
                key: "updateDeltaTime",
                value: function() {
                    var e = performance.now();
                    this.deltaTime = .001 * e - this.time, this.deltaTime > .05 && (this.deltaTime = .05), 0 === this.deltaTime && (this.deltaTime = 1 / 60), this.time = .001 * e, this.fps = 1 / this.deltaTime, this.averageFps > 0 ? this.averageFps = Vn.lerp(this.fps, this.averageFps, .95) : this.averageFps = 1 / 60
                }
            }, {
                key: "testPerformance",
                value: function(e) {
                    console.time("timer0"), e(), console.timeEnd("timer0")
                }
            }], [{
                key: "instance",
                get: function() {
                    return e._instance || (e._instance = new e), e._instance
                }
            }]), e
        }();

        function Vr(e, t) {
            var n;
            if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" === typeof e) return Gr(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Gr(e, t)
                    }(e)) || t && e && "number" === typeof e.length) {
                    n && (e = n);
                    var r = 0,
                        i = function() {};
                    return {
                        s: i,
                        n: function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, o = !0,
                s = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return o = e.done, e
                },
                e: function(e) {
                    s = !0, a = e
                },
                f: function() {
                    try {
                        o || null == n.return || n.return()
                    } finally {
                        if (s) throw a
                    }
                }
            }
        }

        function Gr(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function Xr(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var Hr = function e() {
                H()(this, e), this.down = !1, this.downThisFrame = !1, this.upThisFrame = !1, this.downByTouch = !1, this.clickCanceled = !1, this.downTime = 0, this.upTime = 0
            },
            jr = function(e) {
                Y()(n, e);
                var t = Xr(n);

                function n(e, r) {
                    var i;
                    H()(this, n), (i = t.call(this))._mousePos = new dr, i._previousMousePos = new dr, i._mouseVelocity = new dr, i._normalized = new dr, i._screen = new dr, i._wheelCallbacks = [], i._mouseClickCallbacks = [], i._mouseDownCallbacks = [], i._buttons = [], i._manualUpdate = !1, i._resetSpeed = !1, i._preventDefault = !1, i._touchStartListener = function(e) {
                        i._preventDefault && e.preventDefault(), i._resetSpeed = !0, i.handleMouseDown(0), i._buttons[0].downByTouch = !0, i.setMousePosition(e.targetTouches[0]);
                        for (var t = 0; t < i._mouseDownCallbacks.length; t++) i._mouseDownCallbacks[t].call(yn()(i))
                    }, i._touchMoveListener = function(e) {
                        i.setMousePosition(e.targetTouches[0]), i._preventDefault && e.preventDefault()
                    }, i._endListener = function() {
                        var e, t = Vr(i._buttons);
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                var n = e.value;
                                n.down = !1, n.downThisFrame = !1, n.downByTouch = !1, n.upThisFrame = !0, n.upTime = 0, console.log()
                            }
                        } catch (r) {
                            t.e(r)
                        } finally {
                            t.f()
                        }
                    }, i._mouseDownListener = function(e) {
                        i._preventDefault && e.preventDefault(), i.handleMouseDown(e.which - 1), i.setMousePosition(e);
                        for (var t = 0; t < i._mouseDownCallbacks.length; t++) i._mouseDownCallbacks[t].call(yn()(i))
                    }, i._mouseMoveListener = function(e) {
                        i.setMousePosition(e), i._preventDefault && e.preventDefault();
                        var t, n = Vr(i._buttons);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var r = t.value;
                                r.downTime > .25 && (r.clickCanceled = !0)
                            }
                        } catch (a) {
                            n.e(a)
                        } finally {
                            n.f()
                        }
                    }, i._mouseWheelListener = function(e) {
                        for (var t = 0; t < i._wheelCallbacks.length; t++) i._wheelCallbacks[t].call(yn()(i), Math.sign(-e.deltaY))
                    }, i._upListener = function() {
                        if (i._resetSpeed = !0, !i._buttons[0].clickCanceled)
                            for (var e = 0; e < i._mouseClickCallbacks.length; e++) i._mouseClickCallbacks[e].call(yn()(i));
                        var t, n = Vr(i._buttons);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var r = t.value;
                                r.down = !1, r.downThisFrame = !1, r.upThisFrame = !0, r.upTime = 0, r.downByTouch = !1
                            }
                        } catch (a) {
                            n.e(a)
                        } finally {
                            n.f()
                        }
                    }, i._element = e, i._canvas = r;
                    for (var a = 0; a < 3; a++) i._buttons.push(new Hr);
                    return i._element.addEventListener("touchstart", i._touchStartListener, !1), i._element.addEventListener("touchmove", i._touchMoveListener, {
                        passive: !1
                    }), i._element.addEventListener("touchend", i._upListener, !1), i._element.addEventListener("touchcancel", i._endListener, !1), i._element.addEventListener("mousedown", i._mouseDownListener, !1), i._element.addEventListener("mousemove", i._mouseMoveListener, !1), i._element.addEventListener("mouseup", i._upListener, !1), i._element.addEventListener("mousecancel", i._endListener, !1), i._element.addEventListener("mouseout", i._endListener, !1), i._element.addEventListener("wheel", i._mouseWheelListener, !1), i
                }
                return $()(n, [{
                    key: "getButton",
                    value: function(e) {
                        return this._buttons[e]
                    }
                }, {
                    key: "setPreventDefault",
                    value: function(e) {
                        this._preventDefault = e
                    }
                }, {
                    key: "handleMouseDown",
                    value: function(e) {
                        this._resetSpeed = !0, this._buttons[e].down = !0, this._buttons[e].downThisFrame = !0, this._buttons[e].clickCanceled = !1, this._buttons[e].downByTouch = !1, this._buttons[e].downTime = 0
                    }
                }, {
                    key: "addWheelEvent",
                    value: function(e) {
                        this._wheelCallbacks.push(e)
                    }
                }, {
                    key: "addMouseClickEvent",
                    value: function(e) {
                        this._mouseClickCallbacks.push(e)
                    }
                }, {
                    key: "addMouseDownEvent",
                    value: function(e) {
                        this._mouseDownCallbacks.push(e)
                    }
                }, {
                    key: "setMousePosition",
                    value: function(e) {
                        var t = e.pageY / this._canvas.clientHeight;
                        this._mousePos.x = e.pageX / this._canvas.clientWidth * 2 - 1, this._mousePos.y = 1 - 2 * t
                    }
                }, {
                    key: "updateManual",
                    value: function() {
                        this._manualUpdate = !0, this.update()
                    }
                }, {
                    key: "update",
                    value: function() {
                        this._normalized.x = .5 * this._mousePos.x + .5, this._normalized.y = .5 * -this._mousePos.y + .5, this._screen.x = this._mousePos.x, this._screen.y = this._mousePos.y, this._resetSpeed ? (this._resetSpeed = !1, this._mouseVelocity.setValues(0, 0)) : (this._mouseVelocity.x = this._normalized.x - this._previousMousePos.x, this._mouseVelocity.y = this._normalized.y - this._previousMousePos.y), this._previousMousePos.copy(this._normalized);
                        var e, t = Vr(this._buttons);
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                var n = e.value;
                                n.downTime > 0 && (n.downThisFrame = !1), n.upTime > 0 && (n.upThisFrame = !1), n.down ? n.downTime += zr.instance.deltaTime : n.upTime += zr.instance.deltaTime
                            }
                        } catch (r) {
                            t.e(r)
                        } finally {
                            t.f()
                        }
                    }
                }, {
                    key: "cancelClick",
                    value: function() {
                        var e, t = Vr(this._buttons);
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                e.value.clickCanceled = !0
                            }
                        } catch (n) {
                            t.e(n)
                        } finally {
                            t.f()
                        }
                    }
                }, {
                    key: "destruct",
                    value: function() {
                        this._canvas && (this._canvas.removeEventListener("touchstart", this._touchStartListener, !1), this._canvas.removeEventListener("touchmove", this._touchMoveListener, !1), this._canvas.removeEventListener("touchend", this._upListener, !1), this._canvas.removeEventListener("touchcancel", this._endListener, !1), this._canvas.removeEventListener("mousedown", this._mouseDownListener, !1), this._canvas.removeEventListener("mousemove", this._mouseMoveListener, !1), this._canvas.removeEventListener("mouseend", this._endListener, !1), this._canvas.removeEventListener("mousecancel", this._endListener, !1), this._canvas.removeEventListener("mouseout", this._endListener, !1), this._canvas.removeEventListener("wheel", this._mouseWheelListener, !1), this._canvas.removeEventListener("mouseup", this._upListener, !1)), Sn()(Q()(n.prototype), "destruct", this).call(this)
                    }
                }, {
                    key: "normalizedPos",
                    get: function() {
                        return this._normalized.clone()
                    }
                }, {
                    key: "screenPos",
                    get: function() {
                        return this._screen.clone()
                    }
                }, {
                    key: "normalizedVelocity",
                    get: function() {
                        return this._mouseVelocity.clone()
                    }
                }, {
                    key: "mouseDown",
                    get: function() {
                        return this._buttons[0].down
                    }
                }, {
                    key: "mouseDownThisFrame",
                    get: function() {
                        return this._buttons[0].downThisFrame
                    }
                }, {
                    key: "mouseUpThisFrame",
                    get: function() {
                        return this._buttons[0].upThisFrame
                    }
                }, {
                    key: "mouseDownRight",
                    get: function() {
                        return this._buttons[2].down
                    }
                }, {
                    key: "mouseDownThisFrameRight",
                    get: function() {
                        return this._buttons[2].downThisFrame
                    }
                }]), n
            }(Mn);

        function $r(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var Wr = n(769),
            Yr = function(e) {
                Y()(n, e);
                var t = $r(n);

                function n(e, r, i, a, o) {
                    var s, l = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                        u = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
                        c = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
                        h = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
                        f = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
                    H()(this, n), (s = t.call(this)).textureCount = 0, s.isWebgl2 = !1, s._clearColor = new cr(0, 0, 0, 1), s._size = new dr, s.id = n.staticId++, s.antialias = o, s.transparent = l, s.autoClear = u, s.stencil = c, s.premultipliedAlpha = h, a ? "function" === typeof a ? (s.shaderIndex = new Ir, s.shaderIndex.addContext(a)) : s.shaderIndex = a : s.shaderIndex = new Ir, s.shaderIndex.addContext(Wr), s.canvas = r, s.canvas.addEventListener("resize", (function() {
                        return s.handleCanvasResize()
                    })), i === n.webgl2ContextNames ? s.isWebgl2 = !0 : l || s.getAlphaIsCorrect() || (l = !0);
                    var d = {
                        alpha: l,
                        stencil: c,
                        powerPreference: "high-performance",
                        preserveDrawingBuffer: !u,
                        premultipliedAlpha: h,
                        antialias: o,
                        xrCompatible: f
                    };
                    if (i.forEach((function(e) {
                            s.context = s.context || s.canvas.getContext(e, d)
                        })), !s.context) throw new Error("could not get a 3d context: aborting");
                    return s.maxParams = new sr(s.context), s.renderState = new Mr(yn()(s)), n.staticExtensionManager = s.extensionManager = new Lr, s.extensionManager.enableExtensions(s.context), s.copyTextureMaterial = new Sr(yn()(s), e, "default"), s.copyTextureMaterial.depthTest = !1, s.copyTextureMaterial.depthWrite = !1, s.copyTextureMaterial.setAlphaBlending(), s.blitMesh = s.createTriangle(), s
                }
                return $()(n, [{
                    key: "getAlphaIsCorrect",
                    value: function() {
                        var e = document.createElement("canvas");
                        e.width = 1, e.height = 1;
                        var t = e.getContext("experimental-webgl", {
                            alpha: !1,
                            preserveDrawingBuffer: !1
                        });
                        t.clearColor(1, 0, 0, 1), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT);
                        var n = document.createElement("canvas").getContext("2d");
                        n.drawImage(e, 0, 0);
                        var r = 255 === n.getImageData(0, 0, 1, 1).data[3];
                        return r || kn.log("alpha bug detected"), r
                    }
                }, {
                    key: "init",
                    value: function() {
                        kn.log("renderer: textureCount", this.textureCount), this.unsetRenderTarget(), this.handleCanvasResize()
                    }
                }, {
                    key: "preprocessShaderString",
                    value: function(e) {
                        return e
                    }
                }, {
                    key: "draw",
                    value: function(e, t) {}
                }, {
                    key: "startBatch",
                    value: function(e, t) {}
                }, {
                    key: "drawElements",
                    value: function(e, t) {}
                }, {
                    key: "endBatch",
                    value: function() {}
                }, {
                    key: "createTriangle",
                    value: function() {
                        var e = new Br(this),
                            t = new Float32Array([-1, -1, 0, -1, 3, 0, 3, -1, 0]);
                        e.setPositions(t);
                        var n = new Float32Array([0, 0, 0, 2, 2, 0]);
                        e.setUV0(n);
                        var r = new Uint16Array([0, 2, 1]);
                        return e.setIndices(r), e
                    }
                }, {
                    key: "handleCanvasResize",
                    value: function() {
                        this.setSize(this.canvas.width, this.canvas.height)
                    }
                }, {
                    key: "enablePointSprites",
                    value: function() {
                        this.context.enable(34370)
                    }
                }, {
                    key: "blit",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                            i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                            a = null != n ? n : this.copyTextureMaterial;
                        if (t && (this.renderTarget = t), e && a.setTexture("uTexture", e), r && this.clear(), this.draw(this.blitMesh, a), t && i) this.unsetRenderTarget();
                        else {
                            var o = this.context;
                            o.bindRenderbuffer(o.RENDERBUFFER, null)
                        }
                        e && i && a.unSetTexture("uTexture")
                    }
                }, {
                    key: "unsetRenderTarget",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (this._renderTarget || e) {
                            var t = this.context;
                            t.bindFramebuffer(t.FRAMEBUFFER, null), t.bindRenderbuffer(t.RENDERBUFFER, null), this.setSize(this.canvas.width, this.canvas.height)
                        }
                        this._renderTarget = void 0
                    }
                }, {
                    key: "clearWithColor",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                        this.context.clearColor(e, t, n, r), this.context.depthMask(!0), this.context.clear(fr.COLOR_BUFFER_BIT | fr.DEPTH_BUFFER_BIT | fr.STENCIL_BUFFER_BIT), this.context.depthMask(this.renderState.getDepthMask()), this.context.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearColor.a)
                    }
                }, {
                    key: "clearRenderTexture",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                        this.renderTarget = e, this.clearWithColor(t, n, r, i), this.unsetRenderTarget()
                    }
                }, {
                    key: "clearDepth",
                    value: function() {
                        this.renderState.setDepthMask(!0), this.context.clear(fr.DEPTH_BUFFER_BIT)
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.context.depthMask(!0), this.context.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearColor.a), this.context.clear(fr.COLOR_BUFFER_BIT | fr.DEPTH_BUFFER_BIT | fr.STENCIL_BUFFER_BIT), this.context.depthMask(this.renderState.getDepthMask())
                    }
                }, {
                    key: "setSize",
                    value: function(e, t) {
                        e |= 0, t |= 0, this.width === e && this.height === t || (this._size.setValues(e, t), this.context.viewport(0, 0, this.width, this.height))
                    }
                }, {
                    key: "setScissor",
                    value: function(e, t, n, r) {
                        var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        e = Vn.clamp01(e), t = Vn.clamp01(t);
                        var a = (n = Vn.clamp01(n)) - e,
                            o = (r = Vn.clamp01(r)) - t,
                            s = this.width,
                            l = this.height;
                        this.context.enable(fr.SCISSOR_TEST), this.context.scissor(e * s | 0, t * l | 0, a * s | 0, o * l | 0), i && this.context.viewport(e * s | 0, t * l | 0, a * s | 0, o * l | 0)
                    }
                }, {
                    key: "setScissorPixels",
                    value: function(e, t, n, r) {
                        this.context.enable(fr.SCISSOR_TEST), this.context.scissor(e, t, n - e, r - t)
                    }
                }, {
                    key: "unsetScissor",
                    value: function() {
                        this.context.disable(fr.SCISSOR_TEST)
                    }
                }, {
                    key: "setViewPort",
                    value: function(e, t, n, r) {
                        this._size.setValues(n, r), this.context.viewport(e, t, this.width, this.height)
                    }
                }, {
                    key: "unsetViewPort",
                    value: function() {
                        this._size.setValues(this.canvas.width, this.canvas.height), this.context.viewport(0, 0, this.canvas.width, this.canvas.height)
                    }
                }, {
                    key: "setChannelMask",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        this.context.colorMask(e, t, n, r)
                    }
                }, {
                    key: "clearChannelMask",
                    value: function() {
                        this.context.colorMask(!0, !0, !0, !0)
                    }
                }, {
                    key: "setStencilEnabled",
                    value: function(e) {
                        e ? this.context.enable(fr.STENCIL_TEST) : this.context.disable(fr.STENCIL_TEST)
                    }
                }, {
                    key: "startDrawToStencil",
                    value: function() {
                        var e = this.context;
                        this.setStencilEnabled(!0), e.stencilFunc(fr.ALWAYS, 1, 255), e.stencilOp(fr.KEEP, fr.KEEP, fr.REPLACE), e.stencilMask(255)
                    }
                }, {
                    key: "setStencilFuncEqual",
                    value: function(e) {
                        this.context.stencilFunc(e ? fr.EQUAL : fr.NOTEQUAL, 1, 255)
                    }
                }, {
                    key: "destructVAO",
                    value: function(e) {}
                }, {
                    key: "destructVAOs",
                    value: function() {}
                }, {
                    key: "destruct",
                    value: function() {
                        if (!this.isDestructed) {
                            kn.log("Renderer: destruct");
                            for (var e = this.context, t = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), r = 0; r < t; ++r) e.activeTexture(e.TEXTURE0 + r), e.bindTexture(e.TEXTURE_2D, null), e.bindTexture(e.TEXTURE_CUBE_MAP, null);
                            e.bindBuffer(e.ARRAY_BUFFER, null), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null), e.bindRenderbuffer(e.RENDERBUFFER, null), e.bindFramebuffer(e.FRAMEBUFFER, null), e.useProgram(null);
                            var i = e.getExtension("WEBGL_lose_context");
                            i && i.loseContext(), this.blitMesh && this.blitMesh.destruct(), this.copyTextureMaterial && this.copyTextureMaterial.destruct(), this.canvas.removeEventListener("resize", this.handleCanvasResize), this._mouseListener && this._mouseListener.destruct(), Sn()(Q()(n.prototype), "destruct", this).call(this)
                        }
                    }
                }, {
                    key: "mouseListener",
                    get: function() {
                        return this._mouseListener || (this._mouseListener = new jr(document.body, this.canvas)), this._mouseListener
                    }
                }, {
                    key: "width",
                    get: function() {
                        return this._size.x
                    }
                }, {
                    key: "height",
                    get: function() {
                        return this._size.y
                    }
                }, {
                    key: "size",
                    get: function() {
                        return this._size
                    }
                }, {
                    key: "renderTarget",
                    set: function(e) {
                        e ? (e.scaleToCanvas && e.setSize(Math.round(this.canvas.width * e.sizeMultiplier), Math.round(this.canvas.height * e.sizeMultiplier)), e.setAsTarget(), this.setSize(e.width, e.height), this._renderTarget = e) : this.unsetRenderTarget()
                    },
                    get: function() {
                        return this._renderTarget
                    }
                }, {
                    key: "aspectRatio",
                    get: function() {
                        return this.width / this.height
                    }
                }, {
                    key: "clearColor",
                    set: function(e) {
                        this._clearColor.copy(e), this.context.clearColor(e.r, e.g, e.b, e.a)
                    },
                    get: function() {
                        return this._clearColor
                    }
                }]), n
            }(Mn);

        function qr(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        Yr.staticId = 0, Yr.webgl2ContextNames = ["webgl2"], Yr.webgl1ContextNames = ["webgl", "experimental-webgl"], Yr.drawCalls = 0, Yr.vertexCount = 0;
        var Kr = function(e) {
            Y()(n, e);
            var t = qr(n);

            function n(e, r, i, a) {
                var o, s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    l = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
                    u = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                    c = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
                    h = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
                return H()(this, n), (o = t.call(this, e, r, Yr.webgl1ContextNames, i, a, s, l, u, c, h)).vertexArrayObjects = {}, o
            }
            return $()(n, [{
                key: "preprocessShaderString",
                value: function(e) {
                    return "#define WEBGL1\n" + e
                }
            }, {
                key: "initVAO",
                value: function(e, t) {
                    var n = this.extensionManager.vertex_array_object,
                        r = n.createVertexArrayOES();
                    return n.bindVertexArrayOES(r), this.setStates(e, t), n.bindVertexArrayOES(null), r
                }
            }, {
                key: "setStates",
                value: function(e, t) {
                    var n = this.context;
                    if (e.isInterleaved()) {
                        e.interleaveData(), n.bindBuffer(n.ARRAY_BUFFER, e.interleavedBuffer);
                        var r = 0;
                        e.attributes.forEach((function(i) {
                            var a = t.shader.getAttributeByName(i.name);
                            a && (n.enableVertexAttribArray(a.loc), n.vertexAttribPointer(a.loc, a.stride, n.FLOAT, !1, 4 * e.interleavedStrideSum, r)), r += 4 * i.stride
                        }))
                    } else e.attributes.forEach((function(e) {
                        var r = t.shader.getAttributeByName(e.name);
                        if (r) {
                            if (void 0 === e.buffer) throw new ReferenceError("Expected buffer to be defined on VertexAttribute when setting states.");
                            n.bindBuffer(n.ARRAY_BUFFER, e.buffer), n.enableVertexAttribArray(r.loc), n.vertexAttribPointer(r.loc, r.stride, n.FLOAT, !1, 4 * r.stride, 0)
                        }
                    }));
                    e.indexBuffer && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, e.indexBuffer)
                }
            }, {
                key: "destructVAO",
                value: function(e) {
                    var t = this.extensionManager.vertex_array_object;
                    if (t) {
                        var n = this.vertexArrayObjects[e.id];
                        for (var r in n) {
                            var i = n[r];
                            t.deleteVertexArrayOES(i)
                        }
                        this.vertexArrayObjects[e.id] = []
                    }
                }
            }, {
                key: "getVAO",
                value: function(e, t) {
                    var n, r = this.vertexArrayObjects[e.id];
                    return r ? (n = r[t.id]) || (n = this.initVAO(e, t), r[t.id] = n) : (r = {}, n = this.initVAO(e, t), r[t.id] = n, this.vertexArrayObjects[e.id] = r), n
                }
            }, {
                key: "bindVAO",
                value: function(e) {
                    var t = this.extensionManager.vertex_array_object;
                    e != this.currentVAO && (t.bindVertexArrayOES(e), this.currentVAO = e)
                }
            }, {
                key: "drawVAO",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1;
                    n.setActive(), this.bindVAO(e), this.drawElements(t, n, r, i), this.bindVAO(null)
                }
            }, {
                key: "draw",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
                    t.setActive();
                    var i = this.extensionManager.vertex_array_object;
                    if (!i || e.isDynamic) this.setStates(e, t), this.drawElements(e, t, n, r);
                    else {
                        var a = this.getVAO(e, t);
                        this.bindVAO(a), this.drawElements(e, t, n, r), this.bindVAO(null)
                    }
                    Yr.drawCalls++, Yr.vertexCount += e.getNumVertices()
                }
            }, {
                key: "startBatch",
                value: function(e, t) {
                    t.setActive(), this.extensionManager.vertex_array_object ? this.extensionManager.vertex_array_object.bindVertexArrayOES(this.getVAO(e, t)) : this.setStates(e, t)
                }
            }, {
                key: "drawElements",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
                    if (e.indices) r > 0 ? this.context.drawElements(t.drawType, Math.min(r, e.indices.length), e.indexType, n * (e.indexType == fr.UNSIGNED_SHORT ? 2 : 4)) : this.context.drawElements(t.drawType, e.indices.length, e.indexType, 0);
                    else {
                        var i = e.getNumVertices() - n;
                        r > 0 ? this.context.drawArrays(t.drawType, n, Math.min(i, r)) : this.context.drawArrays(t.drawType, n, i)
                    }
                }
            }, {
                key: "endBatch",
                value: function() {
                    this.extensionManager.vertex_array_object && this.extensionManager.vertex_array_object.bindVertexArrayOES(null)
                }
            }, {
                key: "destructVAOs",
                value: function() {
                    var e = this.extensionManager.vertex_array_object;
                    if (e)
                        for (var t = 0; t < this.vertexArrayObjects.length; t++) e.deleteVertexArrayOES(this.vertexArrayObjects[t]);
                    this.vertexArrayObjects = {}
                }
            }, {
                key: "destruct",
                value: function() {
                    this.isDestructed || (this.destructVAOs(), Sn()(Q()(n.prototype), "destruct", this).call(this))
                }
            }]), n
        }(Yr);

        function Zr(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var Qr = function(e) {
            Y()(n, e);
            var t = Zr(n);

            function n(e) {
                var r;
                H()(this, n), r = t.call(this, e);
                var i = new Float32Array([-1, -1, 0, -1, 1, 0, 1, 1, 0, 1, -1, 0]);
                r.setPositions(i);
                var a = new Float32Array([0, 0, 0, 1, 1, 1, 1, 0]);
                r.setUV0(a);
                var o = new Uint16Array([0, 2, 1, 2, 0, 3]);
                return r.setIndices(o), r
            }
            return n
        }(Br);

        function Jr(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var ei = function(e) {
                Y()(n, e);
                var t = Jr(n);

                function n(e) {
                    var r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fr.TEXTURE_2D,
                        a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                    return H()(this, n), (r = t.call(this)).name = "", r.unpackAlignment = 4, r.flipY = !1, r.autoGenerateMips = !0, r.dirty = !0, r.mipsDirty = !1, r._format = -1, r._type = -1, r._formatType = "", r._internalFormat = -1, r._useMips = !1, r._minFilterLinear = !0, r._magFilterLinear = !0, r._clampS = !0, r._clampT = !0, r._clampR = void 0, r._anisotropy = -1, r.renderer = e, r.renderer.textureCount++, r.target = i, r.textureGL = r.renderer.context.createTexture(), r.useMips = a, r.filterLinear = o, r.clampToEdge = s, r
                }
                return $()(n, [{
                    key: "bindToSlot",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.renderer.renderState.bindTextureToSlot(this, e), (this.dirty || this.mipsDirty) && (this.renderer.renderState.activateSlot(e), this.useMips && this.mipsDirty && this.autoGenerateMips && this.generateMips(), this.dirty && this.updateTexParameters(), this.mipsDirty = !1, this.dirty = !1)
                    }
                }, {
                    key: "bind",
                    value: function() {
                        this.renderer.context.activeTexture(fr.TEXTURE0 + this.renderer.maxParams.MAX_TEXTURE_IMAGE_UNITS - 1), this.renderer.context.bindTexture(this.target, this.textureGL), this.dirty && (this.updateTexParameters(), this.dirty = !1)
                    }
                }, {
                    key: "setSize",
                    value: function(e, t, n) {}
                }, {
                    key: "updateTexParameters",
                    value: function() {
                        var e = this.renderer.context;
                        e.texParameteri(this.target, fr.TEXTURE_MAG_FILTER, this._magFilterLinear ? fr.LINEAR : fr.NEAREST), e.texParameteri(this.target, fr.TEXTURE_MIN_FILTER, this.useMips && !this.mipsDirty ? this._minFilterLinear ? fr.LINEAR_MIPMAP_LINEAR : fr.NEAREST_MIPMAP_LINEAR : this._minFilterLinear ? fr.LINEAR : fr.NEAREST), e.texParameteri(this.target, fr.TEXTURE_WRAP_S, this._clampS ? fr.CLAMP_TO_EDGE : fr.REPEAT), e.texParameteri(this.target, fr.TEXTURE_WRAP_T, this._clampT ? fr.CLAMP_TO_EDGE : fr.REPEAT), void 0 !== this._clampR && e.texParameteri(this.target, fr.TEXTURE_WRAP_T, this._clampR ? fr.CLAMP_TO_EDGE : fr.REPEAT), this._anisotropy > 1 && this.renderer.extensionManager.filter_anisotropic && (this._anisotropy = Math.min(this.renderer.extensionManager.maxAnisotropy, this._anisotropy), e.texParameterf(this.target, this.renderer.extensionManager.filter_anisotropic.TEXTURE_MAX_ANISOTROPY_EXT, this._anisotropy))
                    }
                }, {
                    key: "generateMipsIfNeeded",
                    value: function() {
                        this.useMips && this.autoGenerateMips && this.mipsDirty && this.generateMips()
                    }
                }, {
                    key: "generateMips",
                    value: function() {
                        this.renderer.context.generateMipmap(this.target), this.mipsDirty = !1
                    }
                }, {
                    key: "destruct",
                    value: function() {
                        this.isDestructed || this.textureGL && this.renderer.context.deleteTexture(this.textureGL), Sn()(Q()(n.prototype), "destruct", this).call(this)
                    }
                }, {
                    key: "format",
                    get: function() {
                        return this._format
                    }
                }, {
                    key: "type",
                    get: function() {
                        return this._type
                    }
                }, {
                    key: "formatType",
                    get: function() {
                        return this._formatType
                    }
                }, {
                    key: "internalFormat",
                    get: function() {
                        return this._internalFormat
                    }
                }, {
                    key: "useMips",
                    get: function() {
                        return this._useMips
                    },
                    set: function(e) {
                        this._useMips = e, this.dirty = !0
                    }
                }, {
                    key: "filterNearest",
                    set: function(e) {
                        this.filterLinear = !e
                    }
                }, {
                    key: "filterLinear",
                    set: function(e) {
                        this._minFilterLinear = e, this._magFilterLinear = e, this.dirty = !0
                    }
                }, {
                    key: "minFilterLinear",
                    set: function(e) {
                        this._minFilterLinear = e, this.dirty = !0
                    }
                }, {
                    key: "magFilterLinear",
                    set: function(e) {
                        this._magFilterLinear = e, this.dirty = !0
                    }
                }, {
                    key: "anisotropy",
                    set: function(e) {
                        this.filterLinear = !0, this._anisotropy = e, this.dirty = !0
                    }
                }, {
                    key: "clampToEdge",
                    set: function(e) {
                        this._clampS = e, this._clampT = e, this.target === Rr.TEXTURE_3D && (this._clampR = e), this.dirty = !0
                    }
                }, {
                    key: "clampS",
                    set: function(e) {
                        this._clampS = e, this.dirty = !0
                    }
                }, {
                    key: "clampT",
                    set: function(e) {
                        this._clampT = e, this.dirty = !0
                    }
                }, {
                    key: "clampR",
                    set: function(e) {
                        this._clampR = e, this.dirty = !0
                    }
                }]), n
            }(Mn),
            ti = function() {
                function e() {
                    H()(this, e)
                }
                return $()(e, null, [{
                    key: "checkFloatCompatibility",
                    value: function(t, n) {
                        if (t.isWebgl2) return n;
                        if (!t.extensionManager.texture_float)
                            if (t.extensionManager.texture_half_float) {
                                if (n === e.RGB_FLOAT) return e.RGB_HALF_FLOAT;
                                if (n === e.RGBA_FLOAT) return e.RGBA_HALF_FLOAT
                            } else console.log("Texture: setFormatType: not supported: ", n);
                        return n
                    }
                }, {
                    key: "checkHalfFloatCompatibility",
                    value: function(t, n) {
                        if (t.isWebgl2) return n;
                        if (!t.extensionManager.texture_half_float)
                            if (t.extensionManager.texture_float) {
                                if (n === e.RGB_HALF_FLOAT) return e.RGB_FLOAT;
                                if (n === e.RGBA_HALF_FLOAT) return e.RGBA_FLOAT
                            } else console.log("Texture: setFormatType: not supported: ", n);
                        return n
                    }
                }, {
                    key: "validateFormatType",
                    value: function(t, n) {
                        switch (n) {
                            case e.RGB_FLOAT:
                                n = this.checkFloatCompatibility(t, n);
                            case e.RGBA_FLOAT:
                                n = this.checkFloatCompatibility(t, n);
                            case e.RGBA_HALF_FLOAT:
                                n = this.checkHalfFloatCompatibility(t, n);
                            case e.RGB_HALF_FLOAT:
                                n = this.checkHalfFloatCompatibility(t, n)
                        }
                        return n
                    }
                }, {
                    key: "getFormat",
                    value: function(t, n) {
                        switch (n) {
                            case e.RGBA_UNSIGNED_BYTE:
                                return fr.RGBA;
                            case e.RGB_UNSIGNED_BYTE:
                            case e.RGB_FLOAT:
                                return fr.RGB;
                            case e.RGBA_FLOAT:
                            case e.RGBA_HALF_FLOAT:
                                return fr.RGBA;
                            case e.RGB_HALF_FLOAT:
                                return fr.RGB;
                            case e.RG_HALF_FLOAT:
                                return Rr.RG;
                            case e.LUMINANCE_UNSIGNED_BYTE:
                            case e.LUMINANCE_FLOAT:
                            case e.LUMINANCE_HALF_fLOAT:
                                return t.isWebgl2 ? Rr.RED : fr.LUMINANCE;
                            case e.DEPTH_UINTSHORT:
                            case e.DEPTH_FLOAT:
                                return fr.DEPTH_COMPONENT;
                            default:
                                return kn.error("can not yet get format for formatType: ", n), -1
                        }
                    }
                }, {
                    key: "getType",
                    value: function(t, n) {
                        switch (n) {
                            case e.RGBA_UNSIGNED_BYTE:
                            case e.RGB_UNSIGNED_BYTE:
                                return fr.UNSIGNED_BYTE;
                            case e.RGBA_FLOAT:
                            case e.RGB_FLOAT:
                                return fr.FLOAT;
                            case e.RGBA_HALF_FLOAT:
                            case e.RGB_HALF_FLOAT:
                            case e.RG_HALF_FLOAT:
                                return e.getHalfFloatType(t);
                            case e.LUMINANCE_UNSIGNED_BYTE:
                                return fr.UNSIGNED_BYTE;
                            case e.LUMINANCE_FLOAT:
                                return fr.FLOAT;
                            case e.LUMINANCE_HALF_fLOAT:
                                return e.getHalfFloatType(t);
                            case e.DEPTH_UINTSHORT:
                                return fr.UNSIGNED_SHORT;
                            case e.DEPTH_FLOAT:
                                return fr.FLOAT;
                            default:
                                return kn.error("can not yet get type for formatType: ", n), -1
                        }
                    }
                }, {
                    key: "getHalfFloatType",
                    value: function(e) {
                        if (e.isWebgl2) return Rr.HALF_FLOAT;
                        var t = e.extensionManager.texture_half_float;
                        return t ? t.HALF_FLOAT_OES : -1
                    }
                }, {
                    key: "getInternalFormat",
                    value: function(t) {
                        switch (t) {
                            case e.RGBA_UNSIGNED_BYTE:
                                return Rr.RGBA8;
                            case e.RGB_UNSIGNED_BYTE:
                                return Rr.RGB8;
                            case e.RGBA_FLOAT:
                                return Rr.RGBA32F;
                            case e.RGB_FLOAT:
                                return Rr.RGB32F;
                            case e.RGBA_HALF_FLOAT:
                                return Rr.RGBA16F;
                            case e.RGB_HALF_FLOAT:
                                return Rr.RGB16F;
                            case e.RG_HALF_FLOAT:
                                return Rr.RG16F;
                            case e.LUMINANCE_UNSIGNED_BYTE:
                                return Rr.R8;
                            case e.LUMINANCE_FLOAT:
                                return Rr.R32F;
                            case e.LUMINANCE_HALF_fLOAT:
                                return Rr.R16F;
                            case e.DEPTH_UINTSHORT:
                                return Rr.DEPTH_COMPONENT24;
                            case e.DEPTH_FLOAT:
                                return Rr.DEPTH_COMPONENT32F;
                            default:
                                return kn.error("can not yet get type for formatType: ", t), -1
                        }
                    }
                }, {
                    key: "getBytesPerPixel",
                    value: function(t) {
                        switch (t) {
                            case e.RGBA_UNSIGNED_BYTE:
                                return 4;
                            case e.RGB_UNSIGNED_BYTE:
                                return 3;
                            case e.RGB_FLOAT:
                                return 12;
                            case e.RGBA_FLOAT:
                                return 16;
                            case e.RGBA_HALF_FLOAT:
                                return 8;
                            case e.RGB_HALF_FLOAT:
                                return 6;
                            case e.RG_HALF_FLOAT:
                                return 4;
                            case e.LUMINANCE_UNSIGNED_BYTE:
                                return 1;
                            case e.LUMINANCE_FLOAT:
                                return 4;
                            case e.LUMINANCE_HALF_fLOAT:
                            case e.DEPTH_UINTSHORT:
                                return 2;
                            case e.DEPTH_FLOAT:
                            default:
                                return 4
                        }
                    }
                }]), e
            }();
        ti.ALPHA_UNSIGNED_BYTE = "ALPHA UNSIGNED_BYTE", ti.ALPHA_FLOAT = "ALPHA FLOAT", ti.RGBA_UNSIGNED_BYTE = "RGBA UNSIGNED_BYTE", ti.RGBA_FLOAT = "RGBA FLOAT", ti.RGBA_HALF_FLOAT = "RGBA HALF_FLOAT", ti.RGB_HALF_FLOAT = "RGB HALF_FLOAT", ti.RGB_UNSIGNED_BYTE = "RGB UNSIGNED_BYTE", ti.RGB_FLOAT = "RGB_FLOAT", ti.LUMINANCE_UNSIGNED_BYTE = "LUMINANCE UNSIGNED_BYTE", ti.LUMINANCE_FLOAT = "LUMINANCE FLOAT", ti.LUMINANCE_HALF_fLOAT = "LUMINANCE HALF_FLOAT", ti.DEPTH_UINTSHORT = "DEPTH_UINTSHORT", ti.DEPTH_FLOAT = "DEPTH_FLOAT", ti.RG_HALF_FLOAT = "RG HALF_FLOAT";
        var ni = function() {
            function e() {
                H()(this, e)
            }
            return $()(e, null, [{
                key: "getTempCanvas",
                value: function(e, t) {
                    var n = document.createElement("canvas");
                    return n.width = e, n.height = t, n
                }
            }, {
                key: "flipX",
                value: function(t) {
                    var n = e.getTempCanvas(t.width, t.height),
                        r = n.getContext("2d");
                    return r.transform(-1, 0, 0, 1, n.width, 0), r.drawImage(t, 0, 0), n
                }
            }, {
                key: "flipY",
                value: function(t) {
                    var n = e.getTempCanvas(t.width, t.height),
                        r = n.getContext("2d");
                    return r.transform(1, 0, 0, -1, 0, n.height), r.drawImage(t, 0, 0), n
                }
            }, {
                key: "getSize",
                value: function(e) {
                    return e instanceof HTMLVideoElement ? new dr(e.videoWidth, e.videoHeight) : e instanceof HTMLImageElement ? new dr(e.naturalWidth, e.naturalHeight) : new dr(e.width, e.height)
                }
            }, {
                key: "resizeImage",
                value: function(t, n, r) {
                    var i = e.getSize(t);
                    if (n === i.x && r === i.y) return t;
                    var a = e.getTempCanvas(n, r);
                    return a.getContext("2d").drawImage(t, 0, 0, i.x, i.y, 0, 0, n, r), a
                }
            }, {
                key: "createDummyImage",
                value: function(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        i = e.getTempCanvas(t, n),
                        a = i.getContext("2d");
                    a.fillStyle = "#eb7d24", a.fillRect(0, 0, t, n), a.beginPath();
                    for (var o = 0; o < t; o += 64) a.moveTo(o, 0), a.lineTo(o, n);
                    for (var s = 0; s < n; s += 64) a.moveTo(0, s), a.lineTo(t, s);
                    return a.strokeStyle = "#ffffff", a.stroke(), a.font = "30px Arial", a.fillStyle = "#ffffff", a.fillText(t + "x" + n, 8, 32), r.length && a.fillText(r, Math.max(0, t / 2 - 8 * r.length), n / 2 + 16), i
                }
            }, {
                key: "checkImageFormatSupported",
                value: function(e, t) {
                    var n = new Image;
                    n.onload = function() {
                        t(n.width > 0 && n.height > 0)
                    }, n.onerror = function() {
                        t(!1)
                    };
                    try {
                        n.src = e
                    } catch (r) {
                        t(!1)
                    }
                }
            }, {
                key: "checkWebpSupported",
                value: function(t) {
                    e.checkImageFormatSupported("data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t)
                }
            }, {
                key: "checkAvifSupported",
                value: function(t) {
                    e.checkImageFormatSupported("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABMAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgS0AAAAAABNjb2xybmNseAACAAIAAoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAABttZGF0EgAKBDgABokyCRAAAAAP+I9ngw==", t)
                }
            }]), e
        }();

        function ri(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var ii = function(e) {
            Y()(n, e);
            var t = ri(n);

            function n(e) {
                var r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ti.RGBA_UNSIGNED_BYTE,
                    a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                return H()(this, n), (r = t.call(this, e, fr.TEXTURE_2D, a, o, s))._size = new dr(-1, -1), r._formatType = e.isWebgl2 ? i : ti.validateFormatType(e, i), r._format = ti.getFormat(r.renderer, r.formatType), r._type = ti.getType(r.renderer, r.formatType), r._internalFormat = e.isWebgl2 ? ti.getInternalFormat(i) : r._format, r
            }
            return $()(n, [{
                key: "setSize",
                value: function(e, t) {
                    e === this.width && t === this.height || (this._size.setValues(e, t), this.bind(), this.renderer.isWebgl2 ? this.renderer.context.texImage2D(fr.TEXTURE_2D, 0, this._internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.renderer.context.texImage2D(fr.TEXTURE_2D, 0, this.format, this.width, this.height, 0, this.format, this.type, null), kn.log("expensive operation: resize: ", e, t, "format: ", this.format), this.mipsDirty = !0)
                }
            }, {
                key: "generateMipsIfNeeded",
                value: function() {
                    this.useMips && (this.renderer.isWebgl2 || Vn.isPowerOfTwo(this.width) && Vn.isPowerOfTwo(this.height) ? Sn()(Q()(n.prototype), "generateMipsIfNeeded", this).call(this) : (kn.error("can't generate mips: npot: ", this.width, this.height), this.useMips = !1))
                }
            }, {
                key: "setData",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.flipY;
                    this.flipY = r;
                    var i = this.renderer.context;
                    this.bind(), i.pixelStorei(fr.UNPACK_ALIGNMENT, this.unpackAlignment), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, r ? 1 : 0), i.pixelStorei(fr.UNPACK_COLORSPACE_CONVERSION_WEBGL, fr.NONE), this.renderer.isWebgl2 ? i.texImage2D(fr.TEXTURE_2D, 0, this._internalFormat, t, n, 0, this.format, this.type, e) : i.texImage2D(fr.TEXTURE_2D, 0, this.format, t, n, 0, this.format, this.type, e), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, 0), this._size.setValues(t, n), this.mipsDirty = !0, this.generateMipsIfNeeded()
                }
            }, {
                key: "getData",
                value: function(e) {
                    var t, r = this.renderer.context;
                    switch (e || (e = n.getFramebuffer(this.renderer)), r.bindFramebuffer(fr.FRAMEBUFFER, e), r.framebufferTexture2D(fr.FRAMEBUFFER, fr.COLOR_ATTACHMENT0, fr.TEXTURE_2D, this.textureGL, 0), this.formatType) {
                        case ti.RGBA_FLOAT:
                            t = new Float32Array(this.width * this.height * 4);
                            break;
                        case ti.RGB_FLOAT:
                            t = new Float32Array(this.width * this.height * 3);
                            break;
                        case ti.RGBA_UNSIGNED_BYTE:
                            t = new Uint8Array(this.width * this.height * 4);
                            break;
                        case ti.RGB_UNSIGNED_BYTE:
                            t = new Uint8Array(this.width * this.height * 3);
                            break;
                        case ti.LUMINANCE_UNSIGNED_BYTE:
                            t = new Uint8Array(this.width * this.height);
                            break;
                        default:
                            throw new Error("can not yet get data for format type: " + this.formatType)
                    }
                    return r.readPixels(0, 0, this.width, this.height, this.format, this.type, t), r.bindFramebuffer(r.FRAMEBUFFER, null), t
                }
            }, {
                key: "getPixel",
                value: function(e, t) {
                    var r = this.renderer.context,
                        i = n.getFramebuffer(this.renderer);
                    r.bindFramebuffer(fr.FRAMEBUFFER, i), r.framebufferTexture2D(fr.FRAMEBUFFER, fr.COLOR_ATTACHMENT0, fr.TEXTURE_2D, this.textureGL, 0);
                    var a = new Uint8Array(4);
                    return r.readPixels(e, t, 1, 1, fr.RGBA, fr.UNSIGNED_BYTE, a), r.bindFramebuffer(r.FRAMEBUFFER, null), a
                }
            }, {
                key: "setImage",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!this.isDestructed) {
                        var i = ni.getSize(e);
                        if (this.useMips && !this.renderer.isWebgl2 && (!Vn.isPowerOfTwo(i.x) || !Vn.isPowerOfTwo(i.y)) && !(e instanceof ImageData)) {
                            var a = i.x > 500 ? Vn.nearestPowerOfTwo(i.x) : Vn.nextPowerOfTwo(i.x),
                                o = i.y > 500 ? Vn.nearestPowerOfTwo(i.y) : Vn.nextPowerOfTwo(i.y);
                            e = ni.resizeImage(e, a, o)
                        }
                        this.flipY = t;
                        var s = this.renderer.context;
                        this.bind(), s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, t ? 1 : 0), s.pixelStorei(fr.UNPACK_COLORSPACE_CONVERSION_WEBGL, fr.NONE), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r ? 1 : 0), s.texImage2D(fr.TEXTURE_2D, 0, this._internalFormat, this.format, this.type, e), this._size.copy(ni.getSize(e)), e instanceof HTMLVideoElement || (n.textureBytesLoaded += this.width * this.height * ti.getBytesPerPixel(this.formatType)), s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, 0), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this.mipsDirty = !0, this.generateMipsIfNeeded()
                    }
                }
            }, {
                key: "destruct",
                value: function() {
                    n._framebuffers[this.renderer.id] && (this.renderer.context.deleteFramebuffer(n._framebuffers[this.renderer.id]), n._framebuffers[this.renderer.id] = null);
                    Sn()(Q()(n.prototype), "destruct", this).call(this)
                }
            }, {
                key: "width",
                get: function() {
                    return this._size.x
                }
            }, {
                key: "height",
                get: function() {
                    return this._size.y
                }
            }, {
                key: "size",
                get: function() {
                    return this._size.clone()
                }
            }, {
                key: "aspectRatio",
                get: function() {
                    return this.width / this.height
                }
            }, {
                key: "channelCount",
                get: function() {
                    switch (this.format) {
                        case fr.RGBA:
                            return 4;
                        case fr.RGB:
                            return 3;
                        case Rr.RG:
                            return 2;
                        case fr.LUMINANCE:
                        case Rr.RED:
                            return 1;
                        default:
                            return kn.ENABLED && console.warn("unhandled format", this.format), 4
                    }
                }
            }], [{
                key: "getFramebuffer",
                value: function(e) {
                    return n._framebuffers[e.id] || (n._framebuffers[e.id] = e.context.createFramebuffer()), n._framebuffers[e.id]
                }
            }, {
                key: "logImageTextureMemoryUsage",
                value: function() {
                    kn.log("ImageTextureMemoryUsage: " + n.textureBytesLoaded / 1048576 + " MB")
                }
            }]), n
        }(ei);
        ii.textureBytesLoaded = 0, ii._framebuffers = {};
        var ai = function() {
            function e(t) {
                H()(this, e), this.zIndex = 0, this.active = !1, this.isSprite = !1, this.roundedCorner = -1, this.visible = !1, this.opacity = 1, this.activeProgress = 0, this.sourceAspect = 0, this.sortedTexture = null, this.sortedDirection = new dr, this.textureLoaded = !1, this.bbRect = new lr, this.imageElement = null, this.spriteSheetData = null, this.renderer = t, this.texture = new ii(this.renderer), this.texture.useMips = !1, this.texture.clampToEdge = !0
            }
            return $()(e, [{
                key: "setElement",
                value: function(t, n, r, i) {
                    var a, o = this;
                    e.index++, this.element = t, this.active = !0, this.textureLoaded = !1;
                    var s = this.element.dataset.image.split("/"),
                        l = s[s.length - 1].split(".")[0];
                    kn.ENABLED && console.log("dataset", t.dataset), this.id = t.dataset.index, this.roundedCorner = parseInt(t.dataset.roundedCorners), this.isSprite = "true" == t.dataset.isSprite, this.isSprite && (this.spriteSheetData = JSON.parse(i[l].text), kn.ENABLED && console.log("spriteSheetData", this.spriteSheetData)), void 0 !== this.element.dataset.zIndex ? this.zIndex = parseFloat(this.element.dataset.zIndex) : this.zIndex = 0, this.zIndex -= .5 / e.index;
                    var u = this.imageElement = this.element.querySelector("img");
                    if (kn.ENABLED && console.log("src", null === (a = this.imageElement) || void 0 === a ? void 0 : a.src, "z", this.zIndex), u) {
                        u.crossOrigin = "use-credentials";
                        var c = function() {
                            o.textureLoaded = !0;
                            var e = ni.getSize(u);
                            o.sourceAspect = e.x / e.y, o.texture.useMips = !0, o.texture.setImage(u)
                        };
                        u.complete && 0 !== u.naturalHeight ? c() : u.onload = function() {
                            return c()
                        }
                    }
                    this.isSprite || (this.sortedTexture = n[l], this.sortedDirection = r[l], this.sortedTexture || console.warn("sortedTexture not found", l))
                }
            }, {
                key: "tracked",
                value: function() {
                    return this.active || this.activeProgress > 0
                }
            }, {
                key: "reset",
                value: function() {
                    return this.element = void 0, this.imageElement = null, this.active = !1, this.opacity = 1, this.activeProgress = 0, this.textureLoaded = !1, this.visible = !1, this.texture.useMips = !1, !0
                }
            }, {
                key: "update",
                value: function(e, t) {
                    var n;
                    this.activeProgress = Vn.clamp01(this.activeProgress + (this.active && this.textureLoaded ? 1 : -1));
                    var r = null === (n = this.element) || void 0 === n ? void 0 : n.getBoundingClientRect();
                    r && 0 !== r.width && (this.bbRect.setValues(r.left, r.bottom, r.right, r.top), this.element && r && (this.visible = r.left <= t.right && r.right >= t.left && r.top <= t.bottom && r.bottom >= t.top), this.activeProgress > 0 && this.element && this.visible && r && ("" !== this.element.style.opacity ? this.opacity = parseFloat(this.element.style.opacity) * this.activeProgress : this.opacity = this.activeProgress))
                }
            }, {
                key: "getSpriteRect",
                value: function(e) {
                    var t;
                    return t = this.spriteSheetData.frames[e] ? this.spriteSheetData.frames[e].frame : this.spriteSheetData.frames[0].frame, new lr(t.x / this.texture.size.x, 1 - t.y / this.texture.size.y, (t.x + t.w) / this.texture.size.x, 1 - (t.y + t.h) / this.texture.size.y)
                }
            }]), e
        }();

        function oi(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        ai.index = 0;
        var si = function(e) {
                Y()(n, e);
                var t = oi(n);

                function n(e, r, i) {
                    var a, o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                        l = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
                        u = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
                        c = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : ti.RGBA_UNSIGNED_BYTE,
                        h = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
                    return H()(this, n), (a = t.call(this, e, c, o, s, l))._premultiply = !1, a.loaded = !1, a.flipY = u, a.url = i, a.name = i, a._premultiply = h, r.add(yn()(a)), a
                }
                return $()(n, [{
                    key: "load",
                    value: function(e) {
                        var t = this;
                        Or.loadImage(this.url, (function(n) {
                            t.setImage(n, t.flipY, t._premultiply), t.loaded = !0, e.call(t)
                        }))
                    }
                }]), n
            }(ii),
            li = function() {
                function e(t, n) {
                    H()(this, e), this.loaded = !1, this._url = n, t.add(this)
                }
                return $()(e, [{
                    key: "load",
                    value: function(e) {
                        var t = this;
                        Or.loadText(this._url, (function(n) {
                            t._text = n, t.loaded = !0, e.call(t)
                        }))
                    }
                }, {
                    key: "text",
                    get: function() {
                        if (void 0 === this._text) throw new Error("Trying to get TextLoader.text property but loading is not complete for: ".concat(this._url));
                        return this._text
                    }
                }]), e
            }(),
            ui = function() {
                function e(t, n, r) {
                    H()(this, e), this.activeElements = [], this.elementPool = [], this.bbRect = new lr, this.glitchedTexturesByName = {}, this.glitchedDirectionsByName = {}, this.spriteSheetJsonsByName = {}, this.spriteFrame = 0, this.renderer = t, e.elementMaterial || (e.elementMaterial = new Sr(this.renderer, n, "contentElement"), e.elementMaterial.setAlphaBlending(), e.elementMaterial.depthTest = !1, e.elementMaterial.setCullingDisabled(), e.elementMesh = new Qr(this.renderer));
                    for (var i = [new dr(-1, 0), new dr(0, 1), new dr(0, 1), new dr(0, 1), new dr(1, 0), new dr(-1, 0), new dr(1, 0)], a = 0, o = 0, s = ["blueJay-01", "blueJay-02", "blueJay-03", "fuchsia-01", "fuchsia-02", "lancelot-01", "lancelot-02"]; o < s.length; o++) {
                        var l = s[o];
                        this.glitchedTexturesByName[l] = this.getTexture(n, l), this.glitchedDirectionsByName[l] = i[a++]
                    }
                    this.spriteSheetJsonsByName.backpack = new li(n, Jt.getStaticDir() + "image/sprite/backpack.json"), this.spriteSheetJsonsByName.flag = new li(n, Jt.getStaticDir() + "image/sprite/flag.json"), this.spriteSheetJsonsByName.shield = new li(n, Jt.getStaticDir() + "image/sprite/shield.json")
                }
                return $()(e, [{
                    key: "getTexture",
                    value: function(e, t) {
                        return new si(this.renderer, e, Jt.getFileName("pixelSorted/" + t), !1, !0, !0)
                    }
                }, {
                    key: "trackElements",
                    value: function(e) {
                        var t = this;
                        this.resetTrackedElements(), kn.ENABLED && console.log("trackElements", e), e.forEach((function(e) {
                            var n = t.elementPool.pop() || new ai(t.renderer);
                            n.setElement(e, t.glitchedTexturesByName, t.glitchedDirectionsByName, t.spriteSheetJsonsByName), t.activeElements.push(n)
                        })), this.activeElements.sort((function(e, t) {
                            return e.zIndex - t.zIndex
                        }))
                    }
                }, {
                    key: "resetTrackedElements",
                    value: function() {
                        var e;
                        this.activeElements.forEach((function(e) {
                            return e.reset()
                        })), (e = this.elementPool).push.apply(e, be()(this.activeElements)), this.activeElements = []
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.resetTrackedElements()
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        var t, n = this.renderer.canvas.getBoundingClientRect();
                        this.bbRect.setValues(n.left, n.top, n.width, n.height), this.activeElements.forEach((function(t) {
                            return t.update(e, n)
                        })), (t = this.elementPool).push.apply(t, be()(this.activeElements.filter((function(e) {
                            return !e.tracked() && e.reset()
                        })))), this.activeElements = this.activeElements.filter((function(e) {
                            return e.tracked()
                        }))
                    }
                }, {
                    key: "draw",
                    value: function(t, n) {
                        var r = this;
                        if (!(this.activeElements.length <= 0)) {
                            var i = e.elementMaterial;
                            i.setVector4("_ScreenRect", this.bbRect), i.setVector2("_Hover", n), i.setFloat("_Time", zr.instance.time), i.setFloat("_RoundedCornerRadius", Ze.a.mobile ? 20 : 50), this.activeElements.forEach((function(t) {
                                t.visible && t.opacity > 0 && t.activeProgress > 0 && t.textureLoaded && (i.setVector4("_ElementRect", t.bbRect), i.setFloat("_IsSprite", t.isSprite ? 1 : 0), i.setTexture("_Texture", t.texture), t.isSprite ? i.setVector4("_SpriteRect", t.getSpriteRect(r.spriteFrame)) : (t.sortedTexture && i.setTexture("_SortedTexture", t.sortedTexture), t.sortedDirection && i.setVector2("_Direction", t.sortedDirection)), i.setFloat("_inAnimation", t.opacity), i.setFloat("_RoundedCorner", t.roundedCorner), r.renderer.draw(e.elementMesh, i))
                            }))
                        }
                    }
                }]), e
            }(),
            ci = n(170),
            hi = n.n(ci),
            fi = function() {
                function e() {
                    H()(this, e), this.m = new Array(16);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    16 === n.length ? this.m = [].concat(n) : e.identity(this)
                }
                return $()(e, [{
                    key: "clone",
                    value: function() {
                        return e.clone(this)
                    }
                }, {
                    key: "setValues",
                    value: function(t, n, r, i, a, o, s, l, u, c, h, f, d, v, p, m) {
                        e.setValues(this, t, n, r, i, a, o, s, l, u, c, h, f, d, v, p, m)
                    }
                }], [{
                    key: "clone",
                    value: function(t) {
                        return hi()(e, be()(t.m))
                    }
                }, {
                    key: "copy",
                    value: function(e, t) {
                        return e.m = be()(t.m), e
                    }
                }, {
                    key: "fromValues",
                    value: function(t, n, r, i, a, o, s, l, u, c, h, f, d, v, p, m) {
                        return new e(t, n, r, i, a, o, s, l, u, c, h, f, d, v, p, m)
                    }
                }, {
                    key: "setValues",
                    value: function(e, t, n, r, i, a, o, s, l, u, c, h, f, d, v, p, m) {
                        var y = e.m;
                        return y[0] = t, y[1] = n, y[2] = r, y[3] = i, y[4] = a, y[5] = o, y[6] = s, y[7] = l, y[8] = u, y[9] = c, y[10] = h, y[11] = f, y[12] = d, y[13] = v, y[14] = p, y[15] = m, y
                    }
                }, {
                    key: "identity",
                    value: function(e) {
                        var t = e.m;
                        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                    }
                }, {
                    key: "transpose",
                    value: function(e, t) {
                        var n = e.m,
                            r = t.m;
                        if (n === r) {
                            var i = r[1],
                                a = r[2],
                                o = r[3],
                                s = r[6],
                                l = r[7],
                                u = r[11];
                            n[1] = r[4], n[2] = r[8], n[3] = r[12], n[4] = i, n[6] = r[9], n[7] = r[13], n[8] = a, n[9] = s, n[11] = r[14], n[12] = o, n[13] = l, n[14] = u
                        } else n[0] = r[0], n[1] = r[4], n[2] = r[8], n[3] = r[12], n[4] = r[1], n[5] = r[5], n[6] = r[9], n[7] = r[13], n[8] = r[2], n[9] = r[6], n[10] = r[10], n[11] = r[14], n[12] = r[3], n[13] = r[7], n[14] = r[11], n[15] = r[15];
                        return n
                    }
                }, {
                    key: "invert",
                    value: function(e, t) {
                        var n = e.m,
                            r = t.m,
                            i = r[0],
                            a = r[1],
                            o = r[2],
                            s = r[3],
                            l = r[4],
                            u = r[5],
                            c = r[6],
                            h = r[7],
                            f = r[8],
                            d = r[9],
                            v = r[10],
                            p = r[11],
                            m = r[12],
                            y = r[13],
                            _ = r[14],
                            g = r[15],
                            E = i * u - a * l,
                            A = i * c - o * l,
                            T = i * h - s * l,
                            R = a * c - o * u,
                            x = a * h - s * u,
                            w = o * h - s * c,
                            b = f * y - d * m,
                            S = f * _ - v * m,
                            k = f * g - p * m,
                            M = d * _ - v * y,
                            L = d * g - p * y,
                            O = v * g - p * _,
                            I = E * O - A * L + T * M + R * k - x * S + w * b;
                        return I ? (I = 1 / I, n[0] = (u * O - c * L + h * M) * I, n[1] = (o * L - a * O - s * M) * I, n[2] = (y * w - _ * x + g * R) * I, n[3] = (v * x - d * w - p * R) * I, n[4] = (c * k - l * O - h * S) * I, n[5] = (i * O - o * k + s * S) * I, n[6] = (_ * T - m * w - g * A) * I, n[7] = (f * w - v * T + p * A) * I, n[8] = (l * L - u * k + h * b) * I, n[9] = (a * k - i * L - s * b) * I, n[10] = (m * x - y * T + g * E) * I, n[11] = (d * T - f * x - p * E) * I, n[12] = (u * S - l * M - c * b) * I, n[13] = (i * M - a * S + o * b) * I, n[14] = (y * A - m * R - _ * E) * I, n[15] = (f * R - d * A + v * E) * I, n) : null
                    }
                }, {
                    key: "adjoint",
                    value: function(e, t) {
                        var n = e.m,
                            r = t.m,
                            i = r[0],
                            a = r[1],
                            o = r[2],
                            s = r[3],
                            l = r[4],
                            u = r[5],
                            c = r[6],
                            h = r[7],
                            f = r[8],
                            d = r[9],
                            v = r[10],
                            p = r[11],
                            m = r[12],
                            y = r[13],
                            _ = r[14],
                            g = r[15],
                            E = i * u - a * l,
                            A = i * c - o * l,
                            T = i * h - s * l,
                            R = a * c - o * u,
                            x = a * h - s * u,
                            w = o * h - s * c,
                            b = f * y - d * m,
                            S = f * _ - v * m,
                            k = f * g - p * m,
                            M = d * _ - v * y,
                            L = d * g - p * y,
                            O = v * g - p * _;
                        return n[0] = u * O - c * L + h * M, n[1] = o * L - a * O - s * M, n[2] = y * w - _ * x + g * R, n[3] = v * x - d * w - p * R, n[4] = c * k - l * O - h * S, n[5] = i * O - o * k + s * S, n[6] = _ * T - m * w - g * A, n[7] = f * w - v * T + p * A, n[8] = l * L - u * k + h * b, n[9] = a * k - i * L - s * b, n[10] = m * x - y * T + g * E, n[11] = d * T - f * x - p * E, n[12] = u * S - l * M - c * b, n[13] = i * M - a * S + o * b, n[14] = y * A - m * R - _ * E, n[15] = f * R - d * A + v * E, n
                    }
                }, {
                    key: "determinant",
                    value: function(e) {
                        var t = e.m,
                            n = t[0],
                            r = t[1],
                            i = t[2],
                            a = t[3],
                            o = t[4],
                            s = t[5],
                            l = t[6],
                            u = t[7],
                            c = t[8],
                            h = t[9],
                            f = t[10],
                            d = t[11],
                            v = t[12],
                            p = t[13],
                            m = t[14],
                            y = n * s - r * o,
                            _ = n * l - i * o,
                            g = r * l - i * s,
                            E = c * p - h * v,
                            A = c * m - f * v,
                            T = h * m - f * p;
                        return u * (n * T - r * A + i * E) - a * (o * T - s * A + l * E) + t[15] * (c * g - h * _ + f * y) - d * (v * g - p * _ + m * y)
                    }
                }, {
                    key: "multiply",
                    value: function(e, t, n) {
                        var r = e.m,
                            i = t.m,
                            a = n.m,
                            o = i[0],
                            s = i[1],
                            l = i[2],
                            u = i[3],
                            c = i[4],
                            h = i[5],
                            f = i[6],
                            d = i[7],
                            v = i[8],
                            p = i[9],
                            m = i[10],
                            y = i[11],
                            _ = i[12],
                            g = i[13],
                            E = i[14],
                            A = i[15],
                            T = a[0],
                            R = a[1],
                            x = a[2],
                            w = a[3];
                        return r[0] = T * o + R * c + x * v + w * _, r[1] = T * s + R * h + x * p + w * g, r[2] = T * l + R * f + x * m + w * E, r[3] = T * u + R * d + x * y + w * A, T = a[4], R = a[5], x = a[6], w = a[7], r[4] = T * o + R * c + x * v + w * _, r[5] = T * s + R * h + x * p + w * g, r[6] = T * l + R * f + x * m + w * E, r[7] = T * u + R * d + x * y + w * A, T = a[8], R = a[9], x = a[10], w = a[11], r[8] = T * o + R * c + x * v + w * _, r[9] = T * s + R * h + x * p + w * g, r[10] = T * l + R * f + x * m + w * E, r[11] = T * u + R * d + x * y + w * A, T = a[12], R = a[13], x = a[14], w = a[15], r[12] = T * o + R * c + x * v + w * _, r[13] = T * s + R * h + x * p + w * g, r[14] = T * l + R * f + x * m + w * E, r[15] = T * u + R * d + x * y + w * A, r
                    }
                }, {
                    key: "translate",
                    value: function(e, t, n) {
                        var r, i, a, o, s, l, u, c, h, f, d, v, p = e.m,
                            m = t.m,
                            y = n.x,
                            _ = n.y,
                            g = n.z;
                        return m === p ? (p[12] = m[0] * y + m[4] * _ + m[8] * g + m[12], p[13] = m[1] * y + m[5] * _ + m[9] * g + m[13], p[14] = m[2] * y + m[6] * _ + m[10] * g + m[14], p[15] = m[3] * y + m[7] * _ + m[11] * g + m[15]) : (r = m[0], i = m[1], a = m[2], o = m[3], s = m[4], l = m[5], u = m[6], c = m[7], h = m[8], f = m[9], d = m[10], v = m[11], p[0] = r, p[1] = i, p[2] = a, p[3] = o, p[4] = s, p[5] = l, p[6] = u, p[7] = c, p[8] = h, p[9] = f, p[10] = d, p[11] = v, p[12] = r * y + s * _ + h * g + m[12], p[13] = i * y + l * _ + f * g + m[13], p[14] = a * y + u * _ + d * g + m[14], p[15] = o * y + c * _ + v * g + m[15]), p
                    }
                }, {
                    key: "scale",
                    value: function(e, t, n) {
                        var r = e.m,
                            i = t.m,
                            a = n.x,
                            o = n.y,
                            s = n.z;
                        return r[0] = i[0] * a, r[1] = i[1] * a, r[2] = i[2] * a, r[3] = i[3] * a, r[4] = i[4] * o, r[5] = i[5] * o, r[6] = i[6] * o, r[7] = i[7] * o, r[8] = i[8] * s, r[9] = i[9] * s, r[10] = i[10] * s, r[11] = i[11] * s, r[12] = i[12], r[13] = i[13], r[14] = i[14], r[15] = i[15], r
                    }
                }, {
                    key: "rotate",
                    value: function(t, n, r, i) {
                        var a, o, s, l, u, c, h, f, d, v, p, m, y, _, g, E, A, T, R, x, w, b, S, k, M = t.m,
                            L = n.m,
                            O = i.x,
                            I = i.y,
                            N = i.z,
                            C = i.length();
                        return C < e.EPSILON ? null : (O *= C = 1 / C, I *= C, N *= C, a = Math.sin(r), s = 1 - (o = Math.cos(r)), l = L[0], u = L[1], c = L[2], h = L[3], f = L[4], d = L[5], v = L[6], p = L[7], m = L[8], y = L[9], _ = L[10], g = L[11], E = O * O * s + o, A = I * O * s + N * a, T = N * O * s - I * a, R = O * I * s - N * a, x = I * I * s + o, w = N * I * s + O * a, b = O * N * s + I * a, S = I * N * s - O * a, k = N * N * s + o, M[0] = l * E + f * A + m * T, M[1] = u * E + d * A + y * T, M[2] = c * E + v * A + _ * T, M[3] = h * E + p * A + g * T, M[4] = l * R + f * x + m * w, M[5] = u * R + d * x + y * w, M[6] = c * R + v * x + _ * w, M[7] = h * R + p * x + g * w, M[8] = l * b + f * S + m * k, M[9] = u * b + d * S + y * k, M[10] = c * b + v * S + _ * k, M[11] = h * b + p * S + g * k, L !== M && (M[12] = L[12], M[13] = L[13], M[14] = L[14], M[15] = L[15]), M)
                    }
                }, {
                    key: "rotateX",
                    value: function(e, t, n) {
                        var r = e.m,
                            i = t.m,
                            a = Math.sin(n),
                            o = Math.cos(n),
                            s = i[4],
                            l = i[5],
                            u = i[6],
                            c = i[7],
                            h = i[8],
                            f = i[9],
                            d = i[10],
                            v = i[11];
                        return i !== r && (r[0] = i[0], r[1] = i[1], r[2] = i[2], r[3] = i[3], r[12] = i[12], r[13] = i[13], r[14] = i[14], r[15] = i[15]), r[4] = s * o + h * a, r[5] = l * o + f * a, r[6] = u * o + d * a, r[7] = c * o + v * a, r[8] = h * o - s * a, r[9] = f * o - l * a, r[10] = d * o - u * a, r[11] = v * o - c * a, r
                    }
                }, {
                    key: "rotateY",
                    value: function(e, t, n) {
                        var r = e.m,
                            i = t.m,
                            a = Math.sin(n),
                            o = Math.cos(n),
                            s = i[0],
                            l = i[1],
                            u = i[2],
                            c = i[3],
                            h = i[8],
                            f = i[9],
                            d = i[10],
                            v = i[11];
                        return i !== r && (r[4] = i[4], r[5] = i[5], r[6] = i[6], r[7] = i[7], r[12] = i[12], r[13] = i[13], r[14] = i[14], r[15] = i[15]), r[0] = s * o - h * a, r[1] = l * o - f * a, r[2] = u * o - d * a, r[3] = c * o - v * a, r[8] = s * a + h * o, r[9] = l * a + f * o, r[10] = u * a + d * o, r[11] = c * a + v * o, r
                    }
                }, {
                    key: "rotateZ",
                    value: function(e, t, n) {
                        var r = e.m,
                            i = t.m,
                            a = Math.sin(n),
                            o = Math.cos(n),
                            s = i[0],
                            l = i[1],
                            u = i[2],
                            c = i[3],
                            h = i[4],
                            f = i[5],
                            d = i[6],
                            v = i[7];
                        return i !== r && (r[8] = i[8], r[9] = i[9], r[10] = i[10], r[11] = i[11], r[12] = i[12], r[13] = i[13], r[14] = i[14], r[15] = i[15]), r[0] = s * o + h * a, r[1] = l * o + f * a, r[2] = u * o + d * a, r[3] = c * o + v * a, r[4] = h * o - s * a, r[5] = f * o - l * a, r[6] = d * o - u * a, r[7] = v * o - c * a, r
                    }
                }, {
                    key: "fromTranslation",
                    value: function(e, t) {
                        var n = e.m;
                        return n[0] = 1, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = 1, n[6] = 0, n[7] = 0, n[8] = 0, n[9] = 0, n[10] = 1, n[11] = 0, n[12] = t.x, n[13] = t.y, n[14] = t.z, n[15] = 1, n
                    }
                }, {
                    key: "fromScaling",
                    value: function(e, t) {
                        var n = e.m;
                        return n[0] = t.x, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = t.y, n[6] = 0, n[7] = 0, n[8] = 0, n[9] = 0, n[10] = t.z, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n
                    }
                }, {
                    key: "fromRotation",
                    value: function(t, n, r) {
                        var i, a, o, s = t.m,
                            l = r.x,
                            u = r.y,
                            c = r.z,
                            h = r.length();
                        return h < e.EPSILON ? null : (l *= h = 1 / h, u *= h, c *= h, i = Math.sin(n), o = 1 - (a = Math.cos(n)), s[0] = l * l * o + a, s[1] = u * l * o + c * i, s[2] = c * l * o - u * i, s[3] = 0, s[4] = l * u * o - c * i, s[5] = u * u * o + a, s[6] = c * u * o + l * i, s[7] = 0, s[8] = l * c * o + u * i, s[9] = u * c * o - l * i, s[10] = c * c * o + a, s[11] = 0, s[12] = 0, s[13] = 0, s[14] = 0, s[15] = 1, s)
                    }
                }, {
                    key: "fromXRotation",
                    value: function(e, t) {
                        var n = e.m,
                            r = Math.sin(t),
                            i = Math.cos(t);
                        return n[0] = 1, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = i, n[6] = r, n[7] = 0, n[8] = 0, n[9] = -r, n[10] = i, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n
                    }
                }, {
                    key: "fromYRotation",
                    value: function(e, t) {
                        var n = e.m,
                            r = Math.sin(t),
                            i = Math.cos(t);
                        return n[0] = i, n[1] = 0, n[2] = -r, n[3] = 0, n[4] = 0, n[5] = 1, n[6] = 0, n[7] = 0, n[8] = r, n[9] = 0, n[10] = i, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n
                    }
                }, {
                    key: "fromZRotation",
                    value: function(e, t) {
                        var n = e.m,
                            r = Math.sin(t),
                            i = Math.cos(t);
                        return n[0] = i, n[1] = r, n[2] = 0, n[3] = 0, n[4] = -r, n[5] = i, n[6] = 0, n[7] = 0, n[8] = 0, n[9] = 0, n[10] = 1, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n
                    }
                }, {
                    key: "fromRotationTranslation",
                    value: function(e, t, n) {
                        var r = e.m,
                            i = t.x,
                            a = t.y,
                            o = t.z,
                            s = t.w,
                            l = i + i,
                            u = a + a,
                            c = o + o,
                            h = i * l,
                            f = i * u,
                            d = i * c,
                            v = a * u,
                            p = a * c,
                            m = o * c,
                            y = s * l,
                            _ = s * u,
                            g = s * c;
                        return r[0] = 1 - (v + m), r[1] = f + g, r[2] = d - _, r[3] = 0, r[4] = f - g, r[5] = 1 - (h + m), r[6] = p + y, r[7] = 0, r[8] = d + _, r[9] = p - y, r[10] = 1 - (h + v), r[11] = 0, r[12] = n.x, r[13] = n.y, r[14] = n.z, r[15] = 1, r
                    }
                }, {
                    key: "getTranslation",
                    value: function(e, t) {
                        var n = t.m;
                        return e.x = n[12], e.y = n[13], e.z = n[14], e
                    }
                }, {
                    key: "getScaling",
                    value: function(e, t) {
                        var n = t.m,
                            r = n[0],
                            i = n[1],
                            a = n[2],
                            o = n[4],
                            s = n[5],
                            l = n[6],
                            u = n[8],
                            c = n[9],
                            h = n[10];
                        return e.x = Math.hypot(r, i, a), e.y = Math.hypot(o, s, l), e.z = Math.hypot(u, c, h), e
                    }
                }, {
                    key: "getRotation",
                    value: function(t, n) {
                        var r = n.m,
                            i = new Un;
                        e.getScaling(i, n);
                        var a = 1 / i.x,
                            o = 1 / i.y,
                            s = 1 / i.z,
                            l = r[0] * a,
                            u = r[1] * o,
                            c = r[2] * s,
                            h = r[4] * a,
                            f = r[5] * o,
                            d = r[6] * s,
                            v = r[8] * a,
                            p = r[9] * o,
                            m = r[10] * s,
                            y = l + f + m,
                            _ = 0;
                        return y > 0 ? (_ = 2 * Math.sqrt(y + 1), t.w = .25 * _, t.x = (d - p) / _, t.y = (v - c) / _, t.z = (u - h) / _) : l > f && l > m ? (_ = 2 * Math.sqrt(1 + l - f - m), t.w = (d - p) / _, t.x = .25 * _, t.y = (u + h) / _, t.z = (v + c) / _) : f > m ? (_ = 2 * Math.sqrt(1 + f - l - m), t.w = (v - c) / _, t.x = (u + h) / _, t.y = .25 * _, t.z = (d + p) / _) : (_ = 2 * Math.sqrt(1 + m - l - f), t.w = (u - h) / _, t.x = (v + c) / _, t.y = (d + p) / _, t.z = .25 * _), t
                    }
                }, {
                    key: "fromRotationTranslationScale",
                    value: function(e, t, n, r) {
                        var i = e.m,
                            a = t.x,
                            o = t.y,
                            s = t.z,
                            l = t.w,
                            u = a + a,
                            c = o + o,
                            h = s + s,
                            f = a * u,
                            d = a * c,
                            v = a * h,
                            p = o * c,
                            m = o * h,
                            y = s * h,
                            _ = l * u,
                            g = l * c,
                            E = l * h,
                            A = r.x,
                            T = r.y,
                            R = r.z;
                        return i[0] = (1 - (p + y)) * A, i[1] = (d + E) * A, i[2] = (v - g) * A, i[3] = 0, i[4] = (d - E) * T, i[5] = (1 - (f + y)) * T, i[6] = (m + _) * T, i[7] = 0, i[8] = (v + g) * R, i[9] = (m - _) * R, i[10] = (1 - (f + p)) * R, i[11] = 0, i[12] = n.x, i[13] = n.y, i[14] = n.z, i[15] = 1, i
                    }
                }, {
                    key: "fromRotationTranslationScaleOrigin",
                    value: function(e, t, n, r, i) {
                        var a = e.m,
                            o = t.x,
                            s = t.y,
                            l = t.z,
                            u = t.w,
                            c = o + o,
                            h = s + s,
                            f = l + l,
                            d = o * c,
                            v = o * h,
                            p = o * f,
                            m = s * h,
                            y = s * f,
                            _ = l * f,
                            g = u * c,
                            E = u * h,
                            A = u * f,
                            T = r.x,
                            R = r.y,
                            x = r.z,
                            w = i.x,
                            b = i.y,
                            S = i.z,
                            k = (1 - (m + _)) * T,
                            M = (v + A) * T,
                            L = (p - E) * T,
                            O = (v - A) * R,
                            I = (1 - (d + _)) * R,
                            N = (y + g) * R,
                            C = (p + E) * x,
                            D = (y - g) * x,
                            P = (1 - (d + m)) * x;
                        return a[0] = k, a[1] = M, a[2] = L, a[3] = 0, a[4] = O, a[5] = I, a[6] = N, a[7] = 0, a[8] = C, a[9] = D, a[10] = P, a[11] = 0, a[12] = n.x + w - (k * w + O * b + C * S), a[13] = n.y + b - (M * w + I * b + D * S), a[14] = n.z + S - (L * w + N * b + P * S), a[15] = 1, a
                    }
                }, {
                    key: "fromQuat",
                    value: function(e, t) {
                        var n = e.m,
                            r = t.x,
                            i = t.y,
                            a = t.z,
                            o = t.w,
                            s = r + r,
                            l = i + i,
                            u = a + a,
                            c = r * s,
                            h = i * s,
                            f = i * l,
                            d = a * s,
                            v = a * l,
                            p = a * u,
                            m = o * s,
                            y = o * l,
                            _ = o * u;
                        return n[0] = 1 - f - p, n[1] = h + _, n[2] = d - y, n[3] = 0, n[4] = h - _, n[5] = 1 - c - p, n[6] = v + m, n[7] = 0, n[8] = d + y, n[9] = v - m, n[10] = 1 - c - f, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n
                    }
                }, {
                    key: "frustum",
                    value: function(e, t, n, r, i, a, o) {
                        var s = e.m,
                            l = 1 / (n - t),
                            u = 1 / (i - r),
                            c = 1 / (a - o);
                        return s[0] = 2 * a * l, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = 2 * a * u, s[6] = 0, s[7] = 0, s[8] = (n + t) * l, s[9] = (i + r) * u, s[10] = (o + a) * c, s[11] = -1, s[12] = 0, s[13] = 0, s[14] = o * a * 2 * c, s[15] = 0, s
                    }
                }, {
                    key: "perspective",
                    value: function(e, t, n, r, i) {
                        var a, o = e.m,
                            s = 1 / Math.tan(t / 2);
                        return o[0] = s / n, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = s, o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[11] = -1, o[12] = 0, o[13] = 0, o[15] = 0, null != i && i !== 1 / 0 ? (a = 1 / (r - i), o[10] = (i + r) * a, o[14] = 2 * i * r * a) : (o[10] = -1, o[14] = -2 * r), o
                    }
                }, {
                    key: "ortho",
                    value: function(e, t, n, r, i, a, o) {
                        var s = e.m,
                            l = 1 / (t - n),
                            u = 1 / (r - i),
                            c = 1 / (a - o);
                        return s[0] = -2 * l, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = -2 * u, s[6] = 0, s[7] = 0, s[8] = 0, s[9] = 0, s[10] = 2 * c, s[11] = 0, s[12] = (t + n) * l, s[13] = (i + r) * u, s[14] = (o + a) * c, s[15] = 1, s
                    }
                }, {
                    key: "lookAt",
                    value: function(t, n, r, i) {
                        var a, o, s, l, u, c, h, f, d, v, p = t.m,
                            m = n.x,
                            y = n.y,
                            _ = n.z,
                            g = i.x,
                            E = i.y,
                            A = i.z,
                            T = r.x,
                            R = r.y,
                            x = r.z;
                        return Math.abs(m - T) < e.EPSILON && Math.abs(y - R) < e.EPSILON && Math.abs(_ - x) < e.EPSILON ? e.identity(t) : (h = m - T, f = y - R, d = _ - x, a = E * (d *= v = 1 / Math.hypot(h, f, d)) - A * (f *= v), o = A * (h *= v) - g * d, s = g * f - E * h, (v = Math.hypot(a, o, s)) ? (a *= v = 1 / v, o *= v, s *= v) : (a = 0, o = 0, s = 0), l = f * s - d * o, u = d * a - h * s, c = h * o - f * a, (v = Math.hypot(l, u, c)) ? (l *= v = 1 / v, u *= v, c *= v) : (l = 0, u = 0, c = 0), p[0] = a, p[1] = l, p[2] = h, p[3] = 0, p[4] = o, p[5] = u, p[6] = f, p[7] = 0, p[8] = s, p[9] = c, p[10] = d, p[11] = 0, p[12] = -(a * m + o * y + s * _), p[13] = -(l * m + u * y + c * _), p[14] = -(h * m + f * y + d * _), p[15] = 1, p)
                    }
                }, {
                    key: "targetTo",
                    value: function(e, t, n, r) {
                        var i = e.m,
                            a = t.x,
                            o = t.y,
                            s = t.z,
                            l = r.x,
                            u = r.y,
                            c = r.z,
                            h = a - n.x,
                            f = o - n.y,
                            d = s - n.z,
                            v = h * h + f * f + d * d;
                        v > 0 && (h *= v = 1 / Math.sqrt(v), f *= v, d *= v);
                        var p = u * d - c * f,
                            m = c * h - l * d,
                            y = l * f - u * h;
                        return (v = p * p + m * m + y * y) > 0 && (p *= v = 1 / Math.sqrt(v), m *= v, y *= v), i[0] = p, i[1] = m, i[2] = y, i[3] = 0, i[4] = f * y - d * m, i[5] = d * p - h * y, i[6] = h * m - f * p, i[7] = 0, i[8] = h, i[9] = f, i[10] = d, i[11] = 0, i[12] = a, i[13] = o, i[14] = s, i[15] = 1, i
                    }
                }, {
                    key: "add",
                    value: function(e, t, n) {
                        var r = e.m,
                            i = t.m,
                            a = n.m;
                        return r[0] = i[0] + a[0], r[1] = i[1] + a[1], r[2] = i[2] + a[2], r[3] = i[3] + a[3], r[4] = i[4] + a[4], r[5] = i[5] + a[5], r[6] = i[6] + a[6], r[7] = i[7] + a[7], r[8] = i[8] + a[8], r[9] = i[9] + a[9], r[10] = i[10] + a[10], r[11] = i[11] + a[11], r[12] = i[12] + a[12], r[13] = i[13] + a[13], r[14] = i[14] + a[14], r[15] = i[15] + a[15], r
                    }
                }, {
                    key: "subtract",
                    value: function(e, t, n) {
                        var r = e.m,
                            i = t.m,
                            a = n.m;
                        return r[0] = i[0] - a[0], r[1] = i[1] - a[1], r[2] = i[2] - a[2], r[3] = i[3] - a[3], r[4] = i[4] - a[4], r[5] = i[5] - a[5], r[6] = i[6] - a[6], r[7] = i[7] - a[7], r[8] = i[8] - a[8], r[9] = i[9] - a[9], r[10] = i[10] - a[10], r[11] = i[11] - a[11], r[12] = i[12] - a[12], r[13] = i[13] - a[13], r[14] = i[14] - a[14], r[15] = i[15] - a[15], r
                    }
                }, {
                    key: "multiplyScalar",
                    value: function(e, t, n) {
                        var r = e.m,
                            i = t.m;
                        return r[0] = i[0] * n, r[1] = i[1] * n, r[2] = i[2] * n, r[3] = i[3] * n, r[4] = i[4] * n, r[5] = i[5] * n, r[6] = i[6] * n, r[7] = i[7] * n, r[8] = i[8] * n, r[9] = i[9] * n, r[10] = i[10] * n, r[11] = i[11] * n, r[12] = i[12] * n, r[13] = i[13] * n, r[14] = i[14] * n, r[15] = i[15] * n, r
                    }
                }]), e
            }();
        fi.EPSILON = 1e-9;
        var di = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .01,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
                    H()(this, e), this.frustumHeight = 1, this._projectionMatrix = new fi, this._dirty = !0, this._tmpMat4 = new fi, this._tmpV4 = new lr, this._frustumCorner = new Un, this._jitter = new dr, this._jitterFrame = 0, this._frustumOffset = new dr, this._fov = n, this.frustumHeight = 2 * Math.tan(.5 * this._fov), this._nearPlane = r, this._farPlane = i, this._aspect = 1, this._changeCallback = t, this.dirty = !0, this.getFrustumCornerRef(this._frustumCorner)
                }
                return $()(e, [{
                    key: "updateMatrix",
                    value: function() {
                        if (this.dirty) {
                            var e = this._frustumOffset.x,
                                t = this._frustumOffset.y;
                            if (0 != e || 0 != t) {
                                var n = this._nearPlane * Math.tan(this._fov / 2),
                                    r = -n,
                                    i = n * this._aspect,
                                    a = -i;
                                a -= e * this._nearPlane, i -= e * this._nearPlane, n += t * this._nearPlane, r += t * this._nearPlane;
                                var o = 2 * this._nearPlane / (i - a),
                                    s = 2 * this._nearPlane / (n - r),
                                    l = (i + a) / (i - a),
                                    u = (n + r) / (n - r),
                                    c = -(this._farPlane + this._nearPlane) / (this._farPlane - this._nearPlane),
                                    h = -2 * this._farPlane * this._nearPlane / (this._farPlane - this._nearPlane);
                                this._projectionMatrix.setValues(o, 0, 0, 0, 0, s, 0, 0, l, u, c, -1, 0, 0, h, 0)
                            } else fi.perspective(this._projectionMatrix, this._fov, this._aspect, this._nearPlane, this._farPlane);
                            this.dirty = !1, this.getFrustumCornerRef(this._frustumCorner)
                        }
                    }
                }, {
                    key: "getFrustumCornerRef",
                    value: function(e) {
                        var t = .5 * this.frustumHeight,
                            n = t * this._aspect;
                        return e.setValues(n, t, 1), e
                    }
                }, {
                    key: "getHaltonSequence",
                    value: function(e, t) {
                        for (var n = 0, r = 1, i = e; i > 0;) n += (r /= t) * (i % t), i = Math.floor(i / t);
                        return n
                    }
                }, {
                    key: "jitter",
                    value: function(e) {
                        this._jitter.setValues(this.getHaltonSequence(this._jitterFrame % 51, 2) - .5, this.getHaltonSequence(this._jitterFrame % 31, 3) - .5), this._jitterFrame++, fi.copy(this._projectionMatrix, this.getJitteredMatrix(this._jitter, e, this._tmpV4)), this.getFrustumCornerRef(this._frustumCorner), this.dirty = !1
                    }
                }, {
                    key: "getJitteredMatrix",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                            r = Math.tan(.5 * this.FOV),
                            i = r * (t.x / t.y),
                            a = i / (.5 * t.x),
                            o = r / (.5 * t.y),
                            s = a * e.x,
                            l = o * e.y;
                        void 0 !== n && n.setValues(i / t.x, r / t.y, s / t.x, l / t.y);
                        var u = this.farPlane,
                            c = this.nearPlane,
                            h = s - i,
                            f = s + i,
                            d = l - r,
                            v = l + r,
                            p = 2 * c / (f * c - h * c),
                            m = 2 * c / (v * c - d * c),
                            y = (f * c + h * c) / (f * c - h * c),
                            _ = (v * c + d * c) / (v * c - d * c),
                            g = -(u + c) / (u - c),
                            E = -2 * u * c / (u - c),
                            A = -1;
                        return this._tmpMat4.setValues(p, 0, 0, 0, 0, m, 0, 0, y, _, g, A, 0, 0, E, 0), this._tmpMat4
                    }
                }, {
                    key: "getJitter",
                    value: function() {
                        return this._jitter
                    }
                }, {
                    key: "setMatrix",
                    value: function(e) {
                        fi.copy(this._projectionMatrix, e), this.dirty = !1
                    }
                }, {
                    key: "setFrustumOffset",
                    value: function(e, t) {
                        this._frustumOffset.x == e && this._frustumOffset.y == t || (this._frustumOffset.setValues(e, t), this.dirty = !0)
                    }
                }, {
                    key: "dirty",
                    set: function(e) {
                        this._dirty != e && (this._dirty = e, e && this._changeCallback())
                    },
                    get: function() {
                        return this._dirty
                    }
                }, {
                    key: "matrix",
                    get: function() {
                        return this.updateMatrix(), this._projectionMatrix
                    }
                }, {
                    key: "aspectRatio",
                    set: function(e) {
                        e !== this._aspect && (this._aspect = e, this.dirty = !0)
                    },
                    get: function() {
                        return this._aspect
                    }
                }, {
                    key: "farPlane",
                    set: function(e) {
                        e !== this._farPlane && (this._farPlane = e, this.dirty = !0)
                    },
                    get: function() {
                        return this._farPlane
                    }
                }, {
                    key: "nearPlane",
                    set: function(e) {
                        e !== this._nearPlane && (this._nearPlane = e, this.dirty = !0)
                    },
                    get: function() {
                        return this._nearPlane
                    }
                }, {
                    key: "FOV",
                    set: function(e) {
                        e !== this._fov && (this._fov = e, this.frustumHeight = 2 * Math.tan(.5 * this._fov), this.dirty = !0)
                    },
                    get: function() {
                        return this._fov
                    }
                }, {
                    key: "frustumCorner",
                    get: function() {
                        return this.dirty && this.updateMatrix(), this._frustumCorner
                    }
                }]), e
            }(),
            vi = function() {
                function e() {
                    H()(this, e), this.m = new Array(9);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    9 === n.length ? this.m = [].concat(n) : e.identity(this)
                }
                return $()(e, [{
                    key: "clone",
                    value: function() {
                        return e.clone(this)
                    }
                }], [{
                    key: "clone",
                    value: function(t) {
                        return hi()(e, be()(t.m))
                    }
                }, {
                    key: "copy",
                    value: function(e, t) {
                        return e.m = be()(t.m), e
                    }
                }, {
                    key: "fromValues",
                    value: function(t, n, r, i, a, o, s, l, u) {
                        return new e(t, n, r, i, a, o, s, l, u)
                    }
                }, {
                    key: "setValues",
                    value: function(e, t, n, r, i, a, o, s, l, u) {
                        var c = e.m;
                        return c[0] = t, c[1] = n, c[2] = r, c[3] = i, c[4] = a, c[5] = o, c[6] = s, c[7] = l, c[8] = u, c
                    }
                }, {
                    key: "identity",
                    value: function(e) {
                        var t = e.m;
                        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
                    }
                }, {
                    key: "transpose",
                    value: function(e, t) {
                        var n = e.m,
                            r = t.m;
                        if (n === r) {
                            var i = r[1],
                                a = r[2],
                                o = r[5];
                            n[1] = r[3], n[2] = r[6], n[3] = i, n[5] = r[7], n[6] = a, n[7] = o
                        } else n[0] = r[0], n[1] = r[3], n[2] = r[6], n[3] = r[1], n[4] = r[4], n[5] = r[7], n[6] = r[2], n[7] = r[5], n[8] = r[8];
                        return n
                    }
                }, {
                    key: "invert",
                    value: function(e, t) {
                        var n = e.m,
                            r = t.m,
                            i = r[0],
                            a = r[1],
                            o = r[2],
                            s = r[3],
                            l = r[4],
                            u = r[5],
                            c = r[6],
                            h = r[7],
                            f = r[8],
                            d = f * l - u * h,
                            v = -f * s + u * c,
                            p = h * s - l * c,
                            m = i * d + a * v + o * p;
                        return m ? (m = 1 / m, n[0] = d * m, n[1] = (-f * a + o * h) * m, n[2] = (u * a - o * l) * m, n[3] = v * m, n[4] = (f * i - o * c) * m, n[5] = (-u * i + o * s) * m, n[6] = p * m, n[7] = (-h * i + a * c) * m, n[8] = (l * i - a * s) * m, n) : null
                    }
                }, {
                    key: "adjoint",
                    value: function(e, t) {
                        var n = e.m,
                            r = t.m,
                            i = r[0],
                            a = r[1],
                            o = r[2],
                            s = r[3],
                            l = r[4],
                            u = r[5],
                            c = r[6],
                            h = r[7],
                            f = r[8];
                        return n[0] = l * f - u * h, n[1] = o * h - a * f, n[2] = a * u - o * l, n[3] = u * c - s * f, n[4] = i * f - o * c, n[5] = o * s - i * u, n[6] = s * h - l * c, n[7] = a * c - i * h, n[8] = i * l - a * s, n
                    }
                }, {
                    key: "determinant",
                    value: function(e) {
                        var t = e.m,
                            n = t[0],
                            r = t[1],
                            i = t[2],
                            a = t[3],
                            o = t[4],
                            s = t[5],
                            l = t[6],
                            u = t[7],
                            c = t[8];
                        return n * (c * o - s * u) + r * (-c * a + s * l) + i * (u * a - o * l)
                    }
                }, {
                    key: "multiply",
                    value: function(e, t, n) {
                        var r = e.m,
                            i = t.m,
                            a = n.m,
                            o = i[0],
                            s = i[1],
                            l = i[2],
                            u = i[3],
                            c = i[4],
                            h = i[5],
                            f = i[6],
                            d = i[7],
                            v = i[8],
                            p = a[0],
                            m = a[1],
                            y = a[2],
                            _ = a[3],
                            g = a[4],
                            E = a[5],
                            A = a[6],
                            T = a[7],
                            R = a[8];
                        return r[0] = p * o + m * u + y * f, r[1] = p * s + m * c + y * d, r[2] = p * l + m * h + y * v, r[3] = _ * o + g * u + E * f, r[4] = _ * s + g * c + E * d, r[5] = _ * l + g * h + E * v, r[6] = A * o + T * u + R * f, r[7] = A * s + T * c + R * d, r[8] = A * l + T * h + R * v, r
                    }
                }, {
                    key: "fromQuat",
                    value: function(e, t) {
                        var n = e.m,
                            r = t.x,
                            i = t.y,
                            a = t.z,
                            o = t.w,
                            s = r + r,
                            l = i + i,
                            u = a + a,
                            c = r * s,
                            h = i * s,
                            f = i * l,
                            d = a * s,
                            v = a * l,
                            p = a * u,
                            m = o * s,
                            y = o * l,
                            _ = o * u;
                        return n[0] = 1 - f - p, n[3] = h - _, n[6] = d + y, n[1] = h + _, n[4] = 1 - c - p, n[7] = v - m, n[2] = d - y, n[5] = v + m, n[8] = 1 - c - f, n
                    }
                }, {
                    key: "add",
                    value: function(e, t, n) {
                        var r = e.m,
                            i = t.m,
                            a = n.m;
                        return r[0] = i[0] + a[0], r[1] = i[1] + a[1], r[2] = i[2] + a[2], r[3] = i[3] + a[3], r[4] = i[4] + a[4], r[5] = i[5] + a[5], r[6] = i[6] + a[6], r[7] = i[7] + a[7], r[8] = i[8] + a[8], r
                    }
                }, {
                    key: "subtract",
                    value: function(e, t, n) {
                        var r = e.m,
                            i = t.m,
                            a = n.m;
                        return r[0] = i[0] - a[0], r[1] = i[1] - a[1], r[2] = i[2] - a[2], r[3] = i[3] - a[3], r[4] = i[4] - a[4], r[5] = i[5] - a[5], r[6] = i[6] - a[6], r[7] = i[7] - a[7], r[8] = i[8] - a[8], r
                    }
                }, {
                    key: "multiplyScalar",
                    value: function(e, t, n) {
                        var r = e.m,
                            i = t.m;
                        return r[0] = i[0] * n, r[1] = i[1] * n, r[2] = i[2] * n, r[3] = i[3] * n, r[4] = i[4] * n, r[5] = i[5] * n, r[6] = i[6] * n, r[7] = i[7] * n, r[8] = i[8] * n, r
                    }
                }, {
                    key: "normalFromMat4",
                    value: function(e, t) {
                        var n = e.m,
                            r = t.m,
                            i = r[0],
                            a = r[1],
                            o = r[2],
                            s = r[3],
                            l = r[4],
                            u = r[5],
                            c = r[6],
                            h = r[7],
                            f = r[8],
                            d = r[9],
                            v = r[10],
                            p = r[11],
                            m = r[12],
                            y = r[13],
                            _ = r[14],
                            g = r[15],
                            E = i * u - a * l,
                            A = i * c - o * l,
                            T = i * h - s * l,
                            R = a * c - o * u,
                            x = a * h - s * u,
                            w = o * h - s * c,
                            b = f * y - d * m,
                            S = f * _ - v * m,
                            k = f * g - p * m,
                            M = d * _ - v * y,
                            L = d * g - p * y,
                            O = v * g - p * _,
                            I = E * O - A * L + T * M + R * k - x * S + w * b;
                        return I ? (I = 1 / I, n[0] = (u * O - c * L + h * M) * I, n[1] = (c * k - l * O - h * S) * I, n[2] = (l * L - u * k + h * b) * I, n[3] = (o * L - a * O - s * M) * I, n[4] = (i * O - o * k + s * S) * I, n[5] = (a * k - i * L - s * b) * I, n[6] = (y * w - _ * x + g * R) * I, n[7] = (_ * T - m * w - g * A) * I, n[8] = (m * x - y * T + g * E) * I, n) : null
                    }
                }, {
                    key: "fromMat4",
                    value: function(e, t) {
                        var n = e.m,
                            r = t.m;
                        return n[0] = r[0], n[1] = r[1], n[2] = r[2], n[3] = r[4], n[4] = r[5], n[5] = r[6], n[6] = r[8], n[7] = r[9], n[8] = r[10], n
                    }
                }]), e
            }();

        function pi(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var mi = function(e) {
            Y()(n, e);
            var t = pi(n);

            function n() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                return H()(this, n), t.call(this, e, r, i, a)
            }
            return $()(n, [{
                key: "clone",
                value: function() {
                    return new n(this.x, this.y, this.z, this.w)
                }
            }, {
                key: "copy",
                value: function(e) {
                    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w, this
                }
            }, {
                key: "setValues",
                value: function(e, t, n, r) {
                    return this.x = e, this.y = t, this.z = n, this.w = r, this
                }
            }, {
                key: "toString",
                value: function() {
                    return "(" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")"
                }
            }, {
                key: "dot",
                value: function(e) {
                    return n.dot(this, e)
                }
            }, {
                key: "identity",
                value: function() {
                    return this.x = 0, this.y = 0, this.z = 0, this.w = 1, this
                }
            }, {
                key: "multiply",
                value: function(e) {
                    var t = this.x,
                        n = this.y,
                        r = this.z,
                        i = this.w,
                        a = e.x,
                        o = e.y,
                        s = e.z,
                        l = e.w;
                    return this.x = t * l + i * a + n * s - r * o, this.y = n * l + i * o + r * a - t * s, this.z = r * l + i * s + t * o - n * a, this.w = i * l - t * a - n * o - r * s, this
                }
            }, {
                key: "invert",
                value: function() {
                    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = this.w, this
                }
            }, {
                key: "rotateX",
                value: function(e) {
                    e *= .5;
                    var t = this.x,
                        n = this.y,
                        r = this.z,
                        i = this.w,
                        a = Math.sin(e),
                        o = Math.cos(e);
                    return this.x = t * o + i * a, this.y = n * o + r * a, this.z = r * o - n * a, this.w = i * o - t * a, this
                }
            }, {
                key: "rotateY",
                value: function(e) {
                    e *= .5;
                    var t = this.x,
                        n = this.y,
                        r = this.z,
                        i = this.w,
                        a = Math.sin(e),
                        o = Math.cos(e);
                    return this.x = t * o - r * a, this.y = n * o + i * a, this.z = r * o + t * a, this.w = i * o - n * a, this
                }
            }, {
                key: "rotateZ",
                value: function(e) {
                    e *= .5;
                    var t = this.x,
                        n = this.y,
                        r = this.z,
                        i = this.w,
                        a = Math.sin(e),
                        o = Math.cos(e);
                    return this.x = t * o + n * a, this.y = n * o - t * a, this.z = r * o + i * a, this.w = i * o - r * a, this
                }
            }, {
                key: "setAxisAngle",
                value: function(e, t) {
                    t *= .5;
                    var n = Math.sin(t);
                    return this.x = n * e.x, this.y = n * e.y, this.z = n * e.z, this.w = Math.cos(t), this
                }
            }, {
                key: "rotateAxisAngle",
                value: function(e, t) {
                    var r = n.createFromAxisAngle(e, t),
                        i = r.x,
                        a = r.y,
                        o = r.z,
                        s = r.w,
                        l = this.x,
                        u = this.y,
                        c = this.z,
                        h = this.w;
                    return this.x = i * h + s * l + a * c - o * u, this.y = a * h + s * u + o * l - i * c, this.z = o * h + s * c + i * u - a * l, this.w = s * h - i * l - a * u - o * c, this
                }
            }, {
                key: "lookAt",
                value: function(e, t, n) {
                    var r = e.clone();
                    r.subtract(t), r.normalize();
                    var i = Un.cross(n, r);
                    i.normalize();
                    var a = Un.cross(r, i);
                    a.normalize();
                    var o = vi.fromValues(i.x, i.y, i.z, a.x, a.y, a.z, r.x, r.y, r.z);
                    return this.fromMat3(o)
                }
            }, {
                key: "fromMat3",
                value: function(e) {
                    var t, n = e.m,
                        r = n[0] + n[4] + n[8];
                    if (r > 0) t = Math.sqrt(r + 1), this.w = .5 * t, t = .5 / t, this.x = (n[5] - n[7]) * t, this.y = (n[6] - n[2]) * t, this.z = (n[1] - n[3]) * t;
                    else {
                        var i = 0;
                        n[4] > n[0] && (i = 1), n[8] > n[3 * i + i] && (i = 2);
                        var a = (i + 1) % 3,
                            o = (i + 2) % 3,
                            s = .5 * (t = Math.sqrt(n[3 * i + i] - n[3 * a + a] - n[3 * o + o] + 1)),
                            l = .5 / t;
                        this.w = (n[3 * a + o] - n[3 * o + a]) * l;
                        var u = (n[3 * a + i] + n[3 * i + a]) * l,
                            c = (n[3 * o + i] + n[3 * i + o]) * l;
                        this.x = 0 == i ? s : 0 == a ? u : c, this.y = 1 == i ? s : 1 == a ? u : c, this.z = 2 == i ? s : 2 == a ? u : c
                    }
                    return this
                }
            }, {
                key: "normalize",
                value: function() {
                    var e = this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
                    return e > 0 && (e = 1 / Math.sqrt(e)), this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
                }
            }], [{
                key: "dot",
                value: function(e, t) {
                    return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w
                }
            }, {
                key: "lerp",
                value: function(e, t, r) {
                    var i = e.x,
                        a = e.y,
                        o = e.z,
                        s = e.w,
                        l = new n;
                    return l.x = i + r * (t.x - i), l.y = a + r * (t.y - a), l.z = o + r * (t.z - o), l.w = s + r * (t.w - s), l
                }
            }, {
                key: "closestSlerp",
                value: function(e, t, r) {
                    return e.dot(t) < 0 ? n.slerp(e, n.invert(t), r) : n.slerp(e, t, r)
                }
            }, {
                key: "lookAt",
                value: function(e, t, r) {
                    var i = e.clone();
                    i.subtract(t), i.normalize();
                    var a = Un.cross(r, i);
                    a.normalize();
                    var o = Un.cross(i, a);
                    o.normalize();
                    var s = vi.fromValues(a.x, a.y, a.z, o.x, o.y, o.z, i.x, i.y, i.z);
                    return n.fromMat3(s)
                }
            }, {
                key: "createFromAxisAngle",
                value: function(e, t) {
                    var r = .5 * t,
                        i = Math.sin(r);
                    return new n(e.x * i, e.y * i, e.z * i, Math.cos(r))
                }
            }, {
                key: "getAxisAngle",
                value: function(e) {
                    var t = 2 * Math.acos(e.w),
                        r = Math.sin(t / 2),
                        i = new Un;
                    return r > n.EPSILON ? (i.x = e.x / r, i.y = e.y / r, i.z = e.z / r) : (i.x = 1, i.y = 0, i.z = 0), i
                }
            }, {
                key: "getAngle",
                value: function(e, t) {
                    var r = n.dot(e, t);
                    return Math.acos(2 * r * r - 1)
                }
            }, {
                key: "multiply",
                value: function(e, t) {
                    var r = e.x,
                        i = e.y,
                        a = e.z,
                        o = e.w,
                        s = t.x,
                        l = t.y,
                        u = t.z,
                        c = t.w,
                        h = new n;
                    return h.x = r * c + o * s + i * u - a * l, h.y = i * c + o * l + a * s - r * u, h.z = a * c + o * u + r * l - i * s, h.w = o * c - r * s - i * l - a * u, h
                }
            }, {
                key: "calculateW",
                value: function(e) {
                    var t = e.x,
                        r = e.y,
                        i = e.z,
                        a = new n;
                    return a.x = t, a.y = r, a.z = i, a.w = Math.sqrt(Math.abs(1 - t * t - r * r - i * i)), a
                }
            }, {
                key: "exp",
                value: function(e) {
                    var t = e.x,
                        r = e.y,
                        i = e.z,
                        a = e.w,
                        o = Math.sqrt(t * t + r * r + i * i),
                        s = Math.exp(a),
                        l = o > 0 ? s * Math.sin(o) / o : 0,
                        u = new n;
                    return u.x = t * l, u.y = r * l, u.z = i * l, u.w = s * Math.cos(o), u
                }
            }, {
                key: "ln",
                value: function(e) {
                    var t = e.x,
                        r = e.y,
                        i = e.z,
                        a = e.w,
                        o = Math.sqrt(t * t + r * r + i * i),
                        s = o > 0 ? Math.atan2(o, a) / o : 0,
                        l = new n;
                    return l.x = t * s, l.y = r * s, l.z = i * s, l.w = .5 * Math.log(t * t + r * r + i * i + a * a), l
                }
            }, {
                key: "scale",
                value: function(e, t) {
                    return new n(e.x * t, e.y * t, e.z * t, e.w * t)
                }
            }, {
                key: "pow",
                value: function(e, t) {
                    var r = n.ln(e);
                    return r = n.scale(r, t), n.exp(r)
                }
            }, {
                key: "slerp",
                value: function(e, t, r) {
                    var i, a, o, s, l, u = e.x,
                        c = e.y,
                        h = e.z,
                        f = e.w,
                        d = t.x,
                        v = t.y,
                        p = t.z,
                        m = t.w;
                    (a = u * d + c * v + h * p + f * m) < 0 && (a = -a, d = -d, v = -v, p = -p, m = -m), 1 - a > n.EPSILON ? (i = Math.acos(a), o = Math.sin(i), s = Math.sin((1 - r) * i) / o, l = Math.sin(r * i) / o) : (s = 1 - r, l = r);
                    var y = new n;
                    return y.x = s * u + l * d, y.y = s * c + l * v, y.z = s * h + l * p, y.w = s * f + l * m, y
                }
            }, {
                key: "random",
                value: function() {
                    var e = Math.random(),
                        t = Math.random(),
                        r = Math.random(),
                        i = Math.sqrt(1 - e),
                        a = Math.sqrt(e),
                        o = new n;
                    return o.x = i * Math.sin(2 * Math.PI * t), o.y = i * Math.cos(2 * Math.PI * t), o.z = a * Math.sin(2 * Math.PI * r), o.w = a * Math.cos(2 * Math.PI * r), o
                }
            }, {
                key: "invert",
                value: function(e) {
                    var t = e.x,
                        r = e.y,
                        i = e.z,
                        a = e.w,
                        o = t * t + r * r + i * i + a * a,
                        s = o ? 1 / o : 0,
                        l = new n;
                    return l.x = -t * s, l.y = -r * s, l.z = -i * s, l.w = a * s, l
                }
            }, {
                key: "conjugate",
                value: function(e) {
                    var t = new n;
                    return t.x = -e.x, t.y = -e.y, t.z = -e.z, t.w = e.w, t
                }
            }, {
                key: "fromMat3",
                value: function(e) {
                    var t, r = e.m,
                        i = r[0] + r[4] + r[8],
                        a = new n;
                    if (i > 0) t = Math.sqrt(i + 1), a.w = .5 * t, t = .5 / t, a.x = (r[5] - r[7]) * t, a.y = (r[6] - r[2]) * t, a.z = (r[1] - r[3]) * t;
                    else {
                        var o = 0;
                        r[4] > r[0] && (o = 1), r[8] > r[3 * o + o] && (o = 2);
                        var s = (o + 1) % 3,
                            l = (o + 2) % 3,
                            u = .5 * (t = Math.sqrt(r[3 * o + o] - r[3 * s + s] - r[3 * l + l] + 1)),
                            c = .5 / t;
                        a.w = (r[3 * s + l] - r[3 * l + s]) * c;
                        var h = (r[3 * s + o] + r[3 * o + s]) * c,
                            f = (r[3 * l + o] + r[3 * o + l]) * c;
                        a.x = 0 == o ? u : 0 == s ? h : f, a.y = 1 == o ? u : 1 == s ? h : f, a.z = 2 == o ? u : 2 == s ? h : f
                    }
                    return a
                }
            }, {
                key: "fromEuler",
                value: function(e, t, r) {
                    e *= .5, t *= .5, r *= .5;
                    var i = Math.sin(e),
                        a = Math.cos(e),
                        o = Math.sin(t),
                        s = Math.cos(t),
                        l = Math.sin(r),
                        u = Math.cos(r),
                        c = new n;
                    return c.x = i * s * u - a * o * l, c.y = a * o * u + i * s * l, c.z = a * s * l - i * o * u, c.w = a * s * u + i * o * l, c
                }
            }]), n
        }(lr);

        function yi(e, t) {
            var n;
            if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" === typeof e) return _i(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _i(e, t)
                    }(e)) || t && e && "number" === typeof e.length) {
                    n && (e = n);
                    var r = 0,
                        i = function() {};
                    return {
                        s: i,
                        n: function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, o = !0,
                s = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return o = e.done, e
                },
                e: function(e) {
                    s = !0, a = e
                },
                f: function() {
                    try {
                        o || null == n.return || n.return()
                    } finally {
                        if (s) throw a
                    }
                }
            }
        }

        function _i(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }
        mi.EPSILON = 1e-9, mi.IDENTITY = new mi, mi.ZERO = new mi(0, 0, 0, 0), mi.tInvB = new mi;
        var gi = function() {
            function e() {
                H()(this, e), this.name = "unNamed", this.id = -1, this.autoUpdate = !0, this._rotation = new mi, this._position = new Un, this._scale = new Un(1, 1, 1), this._parent = null, this._matrix = new fi, this._localMatrix = new fi, this._changeCallback = [], this._children = [], this._tempMat4 = new fi, this._tempMat3 = new vi, this._dirty = !0, this._signalDirtyDown = !1
            }
            return $()(e, [{
                key: "identity",
                value: function() {
                    this._position.setValues(0, 0, 0), this._rotation.identity(), this._scale.setValues(1, 1, 1)
                }
            }, {
                key: "setParent",
                value: function(e) {
                    this._parent !== e && (this._parent && this._parent.removeChild(this), this._parent = e, e && e.addChild(this), this.setDirty())
                }
            }, {
                key: "getParent",
                value: function() {
                    return this._parent
                }
            }, {
                key: "addChild",
                value: function(e) {
                    this._children.indexOf(e) < 0 && (this._children.push(e), e.setParent(this))
                }
            }, {
                key: "removeChild",
                value: function(e) {
                    var t = this._children.indexOf(e);
                    t > -1 && (this._children.splice(t, 1), e.setParent(null))
                }
            }, {
                key: "getChildren",
                value: function() {
                    return this._children
                }
            }, {
                key: "addChangeCallBack",
                value: function(e) {
                    this._changeCallback.push(e)
                }
            }, {
                key: "setDirty",
                value: function() {
                    this._dirty || (this._dirty = !0, this.signalDirtyDown())
                }
            }, {
                key: "setParentDirty",
                value: function() {
                    this.signalDirtyDown()
                }
            }, {
                key: "signalDirtyDown",
                value: function() {
                    if (!this._signalDirtyDown) {
                        this._signalDirtyDown = !0;
                        for (var e = this._changeCallback.length - 1; e >= 0; e--) this._changeCallback[e].call(this);
                        for (var t = this._children.length - 1; t >= 0; t--) this._children[t].setParentDirty()
                    }
                }
            }, {
                key: "clone",
                value: function() {
                    return (new e).copy(this)
                }
            }, {
                key: "copy",
                value: function(e) {
                    return this._scale.copy(e._scale), this._rotation.copy(e._rotation), this._position.copy(e._position), this._dirty = !0, this
                }
            }, {
                key: "updateMatrix",
                value: function() {
                    (this._dirty || this._signalDirtyDown) && (this.autoUpdate && (this._dirty && fi.fromRotationTranslationScale(this._localMatrix, this._rotation, this._position, this._scale), this._parent ? fi.multiply(this._matrix, this._parent.worldMatrix, this._localMatrix) : this._dirty && fi.copy(this._matrix, this._localMatrix)), this._dirty = !1, this._signalDirtyDown = !1)
                }
            }, {
                key: "lookAt",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Un.UP;
                    this.position = e, this.lookAtFromCurrentPos(t, n)
                }
            }, {
                key: "lookAtFromCurrentPos",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Un.UP;
                    this._rotation = mi.lookAt(this._position, e, t), this.setDirty()
                }
            }, {
                key: "setPositionRotationScale",
                value: function(e, t, n) {
                    this._position.copy(e), this._rotation.copy(t), this._scale.copy(n), this.setDirty()
                }
            }, {
                key: "setPositionValues",
                value: function(e, t, n) {
                    this._position.setValues(e, t, n), this.setDirty()
                }
            }, {
                key: "setScaleValues",
                value: function(e, t, n) {
                    this._scale.setValues(e, t, n), this.setDirty()
                }
            }, {
                key: "translateX",
                value: function(e) {
                    this._position.x += e, this.setDirty()
                }
            }, {
                key: "translateY",
                value: function(e) {
                    this._position.y += e, this.setDirty()
                }
            }, {
                key: "translateZ",
                value: function(e) {
                    this._position.z += e, this.setDirty()
                }
            }, {
                key: "translate",
                value: function(e) {
                    this._position.add(e), this.setDirty()
                }
            }, {
                key: "translateValues",
                value: function(e, t, n) {
                    this._position.x += e, this._position.y += t, this._position.z += n, this.setDirty()
                }
            }, {
                key: "rotateEulerValues",
                value: function(e, t, n) {
                    return this._rotation.rotateY(t), this._rotation.rotateX(e), this._rotation.rotateZ(n), this.setDirty(), this._rotation
                }
            }, {
                key: "rotateEuler",
                value: function(e) {
                    return this.rotateEulerValues(e.x, e.y, e.z)
                }
            }, {
                key: "setEulerValues",
                value: function(e, t, n) {
                    return this._rotation.identity(), this.rotateEulerValues(e, t, n)
                }
            }, {
                key: "rotateAxisAngle",
                value: function(e, t) {
                    return this._rotation.rotateAxisAngle(e, t), this.setDirty(), this._rotation
                }
            }, {
                key: "rotateX",
                value: function(e) {
                    this._rotation.rotateX(e), this.setDirty()
                }
            }, {
                key: "rotateY",
                value: function(e) {
                    this._rotation.rotateY(e), this.setDirty()
                }
            }, {
                key: "rotateZ",
                value: function(e) {
                    this._rotation.rotateZ(e), this.setDirty()
                }
            }, {
                key: "setDirection",
                value: function(e, t) {
                    var n = Un.cross(t, e);
                    n.normalize();
                    var r = Un.cross(e, n);
                    r.normalize(), vi.setValues(this._tempMat3, n.x, n.y, n.z, r.x, r.y, r.z, e.x, e.y, e.z), this.rotationMatrixMat3 = this._tempMat3
                }
            }, {
                key: "getChildrenRecursive",
                value: function() {
                    var e = [];
                    return this.addChildren(this, e), e
                }
            }, {
                key: "addChildren",
                value: function(e, t) {
                    var n, r = yi(e.getChildren());
                    try {
                        for (r.s(); !(n = r.n()).done;) {
                            var i = n.value;
                            t.push(i), this.addChildren(i, t)
                        }
                    } catch (a) {
                        r.e(a)
                    } finally {
                        r.f()
                    }
                }
            }, {
                key: "worldMatrix",
                get: function() {
                    return this.updateMatrix(), this._matrix
                }
            }, {
                key: "localMatrix",
                get: function() {
                    return this.updateMatrix(), this._localMatrix
                }
            }, {
                key: "position",
                get: function() {
                    return this._position.clone()
                },
                set: function(e) {
                    this._position.copy(e), this.setDirty()
                }
            }, {
                key: "worldPosition",
                get: function() {
                    return this.updateMatrix(), (new Un).transform(this._matrix)
                }
            }, {
                key: "scale",
                get: function() {
                    return this._scale.clone()
                },
                set: function(e) {
                    this._scale.copy(e), this.setDirty()
                }
            }, {
                key: "scaleScalar",
                set: function(e) {
                    this._scale.setValues(e, e, e), this.setDirty()
                }
            }, {
                key: "rotation",
                get: function() {
                    return this._rotation.clone()
                },
                set: function(e) {
                    this._rotation.copy(e), this.setDirty()
                }
            }, {
                key: "rotationMatrixMat4",
                get: function() {
                    return fi.fromQuat(this._tempMat4, this._rotation), this._tempMat4
                }
            }, {
                key: "worldRotationMatrixMat3",
                get: function() {
                    var e = this.rotationMatrixMat3;
                    return this._parent && vi.multiply(e, this._parent.worldRotationMatrixMat3, e), e
                }
            }, {
                key: "rotationMatrixMat3",
                get: function() {
                    return vi.fromQuat(this._tempMat3, this._rotation), this._tempMat3
                },
                set: function(e) {
                    this._rotation.fromMat3(e), this.setDirty()
                }
            }, {
                key: "worldRotationMatrixMat4",
                get: function() {
                    var e = this.rotationMatrixMat4;
                    return this._parent && fi.multiply(e, this._parent.rotationMatrixMat4, e), e
                }
            }, {
                key: "euler",
                set: function(e) {
                    this._rotation.identity(), this.rotateEulerValues(e.x, e.y, e.z)
                },
                get: function() {
                    return vi.fromQuat(this._tempMat3, this._rotation), e.getEulerYXZ(this._tempMat3)
                }
            }, {
                key: "eulerX",
                set: function(e) {
                    this._rotation.identity(), this.rotateX(e)
                }
            }, {
                key: "eulerY",
                set: function(e) {
                    this._rotation.identity(), this.rotateY(e)
                }
            }, {
                key: "eulerZ",
                set: function(e) {
                    this._rotation.identity(), this.rotateZ(e)
                }
            }, {
                key: "eulerXY",
                set: function(e) {
                    this.setEulerValues(e.x, e.y, 0)
                }
            }, {
                key: "forward",
                get: function() {
                    var e = this.rotationMatrixMat3.m;
                    return new Un(e[6], e[7], e[8])
                }
            }, {
                key: "worldForward",
                get: function() {
                    var e = this.worldRotationMatrixMat3.m;
                    return new Un(e[6], e[7], e[8])
                }
            }, {
                key: "right",
                get: function() {
                    var e = this.rotationMatrixMat3.m;
                    return new Un(e[0], e[1], e[2])
                }
            }, {
                key: "worldRight",
                get: function() {
                    var e = this.worldRotationMatrixMat3.m;
                    return new Un(e[0], e[1], e[2])
                }
            }, {
                key: "up",
                get: function() {
                    var e = this.rotationMatrixMat3.m;
                    return new Un(e[3], e[4], e[5])
                }
            }, {
                key: "worldUp",
                get: function() {
                    var e = this.worldRotationMatrixMat3.m;
                    return new Un(e[3], e[4], e[5])
                }
            }, {
                key: "direction",
                get: function() {
                    return new Un(0, 0, 1).transformMat3(this.worldRotationMatrixMat3)
                }
            }], [{
                key: "getEulerYXZ",
                value: function(e) {
                    var t, n, r, i = e.m;
                    return i[7] < -1 + this.singularityRange ? (t = Math.PI / 2, n = Math.atan2(i[3], i[0]), r = 0) : i[7] > 1 - this.singularityRange ? (t = -Math.PI / 2, n = -Math.atan2(i[3], i[0]), r = 0) : (t = Math.asin(-i[7]), n = Math.atan2(i[6], i[8]), r = Math.atan2(i[1], i[4])), new Un(t, n, r)
                }
            }]), e
        }();
        gi.singularityRange = 1e-4;
        var Ei = function() {
                function e(t) {
                    var n = this;
                    H()(this, e), this.transform = new gi, this._dirty = !0, this._viewMatrix = new fi, this._rotationMatrix = new fi, this.transform.addChangeCallBack((function() {
                        n.dirty = !0
                    })), this._changeCallback = t
                }
                return $()(e, [{
                    key: "updateMatrix",
                    value: function() {
                        this.dirty && (fi.invert(this._viewMatrix, this.transform.worldMatrix), this.dirty = !1)
                    }
                }, {
                    key: "worldPosition",
                    get: function() {
                        return this.transform.worldPosition
                    }
                }, {
                    key: "dirty",
                    set: function(e) {
                        this._dirty != e && (this._dirty = e, e && this._changeCallback())
                    },
                    get: function() {
                        return this._dirty
                    }
                }, {
                    key: "matrix",
                    get: function() {
                        return this.updateMatrix(), this._viewMatrix
                    }
                }, {
                    key: "worldRotationMatrix",
                    get: function() {
                        return fi.invert(this._rotationMatrix, this.transform.worldRotationMatrixMat4), this._rotationMatrix
                    }
                }]), e
            }(),
            Ai = function() {
                function e() {
                    var t = this,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .01,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                    H()(this, e), this.dirty = !0, this._viewProjection = new fi, this.tViewProjInv = new fi, this._inverseView = new fi, this.projection = new di((function() {
                        t.dirty = !0
                    }), n, r, i), this.view = new Ei((function() {
                        t.dirty = !0
                    }))
                }
                return $()(e, [{
                    key: "lookAt",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Un.UP;
                        this.view.transform.lookAt(e, t, n)
                    }
                }, {
                    key: "updateViewProjection",
                    value: function() {
                        this.dirty && (fi.multiply(this._viewProjection, this.projection.matrix, this.view.matrix), this.dirty = !1)
                    }
                }, {
                    key: "worldToScreenPoint",
                    value: function(e) {
                        var t = new lr;
                        return t.x = e.x, t.y = e.y, t.z = e.z, t.w = 1, t.transform(this.viewProjection), t.w = Math.max(t.w, .1), t.x /= t.w, t.y /= t.w, t.x = .5 * t.x + .5, t.y = -.5 * t.y + .5, t
                    }
                }, {
                    key: "worldToScreenPointRef",
                    value: function(e, t) {
                        e.x = t.x, e.y = t.y, e.z = t.z, e.w = 1, e.transform(this.viewProjection), e.w = Math.max(e.w, .1), e.x /= e.w, e.y /= e.w, e.x = .5 * e.x + .5, e.y = -.5 * e.y + .5
                    }
                }, {
                    key: "screenToWorldPoint",
                    value: function(e) {
                        fi.invert(this.tViewProjInv, this.viewProjection);
                        var t = 2 * e.x - 1,
                            n = -2 * e.y + 1;
                        return new Un(t, n, 1).transform(this.tViewProjInv)
                    }
                }, {
                    key: "getDepth",
                    value: function(e) {
                        return new lr(e.x, e.y, e.z, 1).transform(this.viewProjection).z
                    }
                }, {
                    key: "worldPosition",
                    get: function() {
                        return this.view.worldPosition
                    }
                }, {
                    key: "position",
                    set: function(e) {
                        this.view.transform.position = e
                    }
                }, {
                    key: "viewProjection",
                    get: function() {
                        return this.updateViewProjection(), this._viewProjection
                    }
                }, {
                    key: "projectionMatrix",
                    get: function() {
                        return this.projection.matrix
                    }
                }, {
                    key: "viewMatrix",
                    get: function() {
                        return this.view.matrix
                    }
                }, {
                    key: "inverseView",
                    get: function() {
                        return fi.invert(this._inverseView, this.viewMatrix), this._inverseView
                    }
                }]), e
            }();

        function Ti(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var Ri = function(e) {
                Y()(n, e);
                var t = Ti(n);

                function n(e) {
                    var r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        l = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                    return H()(this, n), (r = t.call(this, e)).createPlane(i, a, o, s, l), r
                }
                return $()(n, [{
                    key: "createPlane",
                    value: function(e, t, n, r, i) {
                        for (var a = (e + 1) * (t + 1), o = new Float32Array(3 * a), s = new Float32Array(2 * a), l = new Float32Array(3 * a), u = 0, c = 0, h = 0, f = 0; f < t + 1; f++)
                            for (var d = 0; d < e + 1; d++) o[u++] = d / e * 2 - 1, n ? (o[u++] = 0, o[u++] = f / t * 2 - 1) : (o[u++] = f / t * 2 - 1, o[u++] = 0), s[c++] = d / e, s[c++] = f / t, n ? (l[h++] = 0, l[h++] = 1, l[h++] = 0) : (l[h++] = 0, l[h++] = 0, l[h++] = 1);
                        this.setPositions(o, r), this.setUV0(s, r), this.setNormals(l, r);
                        var v = new Uint32Array(3 * (e * t * 2)),
                            p = e + 1;
                        u = 0;
                        for (var m = 0; m < t; m++)
                            for (var y = 0; y < e; y++) v[u++] = m * p + y, v[u++] = (m + 1) * p + y, v[u++] = m * p + y + 1, v[u++] = (m + 1) * p + y, v[u++] = (m + 1) * p + y + 1, v[u++] = m * p + y + 1;
                        i ? this.setIndices32(v) : this.setIndices(Uint16Array.from(v))
                    }
                }]), n
            }(Br),
            xi = function() {
                function e(t, n) {
                    H()(this, e), this.transform = new gi, this.scroll = 0, this.scroll1 = 0, this.solid = !0, this.renderer = t, this.material = new Sr(t, n, "vibin"), this.material.setAlphaBlending(), this.material.depthTest = !1, this.material.depthWrite = !1, this.material.setCullingDisabled(), this.textureOutline = new si(t, n, Qt("vibinOutline.png"), !0, !0, !1, !0, ti.LUMINANCE_UNSIGNED_BYTE), this.textureOutline.anisotropy = 16, this.textureSolid = new si(t, n, Qt("vibinSolid.png"), !0, !0, !1, !0, ti.LUMINANCE_UNSIGNED_BYTE), this.textureSolid.anisotropy = 16, this.mesh = new Ri(t, 128, 64, !1), this.camera = new Ai(.8, .1, 10), this.camera.view.transform.setPositionValues(0, 0, 1)
                }
                return $()(e, [{
                    key: "init",
                    value: function(e) {
                        var t = e.addGroup("vibin", this.material);
                        t.addShaderParamFloat("_CountX", 5), t.addShaderParamFloat("_CountY", 8), t.addShaderParamFloat("_Height", .5), t.addShaderParamFloat("_LayerTemporalFrequency", .05, 0, 1), t.addShaderParamFloat("_LayerAmp", 2), t.addShaderParamFloat("_Falloff", .7), t.addShaderParamFloat("_Twist", 0), t.addShaderParamFloat("_Frequency", 2), t.addShaderParamFloat("_Amplitude", .1, 0, .2), t.addShaderParamFloat("_AmplitudeZ", 2), this.material.setMatrix("_ViewProjection", this.camera.viewProjection)
                    }
                }, {
                    key: "draw",
                    value: function() {
                        this.camera.projection.aspectRatio = this.renderer.aspectRatio, this.material.setFloat("_Time", zr.instance.time), this.material.setTexture("_Texture", this.textureOutline), this.drawWithScroll(this.scroll, 5, 1), this.material.setTexture("_Texture", this.textureSolid), this.drawWithScroll(this.scroll1, 20, -1)
                    }
                }, {
                    key: "drawWithScroll",
                    value: function(e, t, n) {
                        if (e > 0 && e < 1) {
                            var r = new mi;
                            r.rotateZ(e * e * e * n), this.transform.rotation = r, this.transform.position = new Un(0, Vn.lerp(-2.5, 2.5, e), 0), this.material.setFloat("_DeformTime", 3 * e + t), this.material.setMatrix("_World", this.transform.worldMatrix), this.material.setFloat("_Opacity", Vn.smoothStep(.5, .45, Math.abs(e - .5))), this.material.setFloat("_Sphere", Vn.smoothStep(0, 1, Math.abs(e - .5))), this.renderer.draw(this.mesh, this.material)
                        }
                    }
                }]), e
            }(),
            wi = function() {
                function e(t, r, i, a) {
                    H()(this, e), this.paused = !1, this.eventDispatcher = t, this.canvasManager = new or(r);
                    var o = !1,
                        s = !1,
                        l = !0,
                        u = !0,
                        c = !1;
                    kn.ENABLED && console.log("RendererWebGL1"), this.renderer = new Kr(i, this.canvasManager.canvas, n(355), u, o, l, s, c), this.renderer.clearColor = cr.fromHex("#ffe500"), this.content = new ui(this.renderer, i, this), this.vibinDistort = new xi(this.renderer, i), a && (this.datGui = new ir(i))
                }
                return $()(e, [{
                    key: "init",
                    value: function() {
                        var e, t = new Zn;
                        t.init("controls"), this.vibinDistort.init(t), null === (e = this.datGui) || void 0 === e || e.init(t), this.drawLoop()
                    }
                }, {
                    key: "drawLoop",
                    value: function() {
                        var e = this;
                        window.requestAnimationFrame((function() {
                            return e.drawLoop()
                        })), zr.instance.updateManual();
                        var t = zr.instance.deltaTime,
                            n = this.canvasManager.update(t) || !this.paused;
                        this.renderer.mouseListener.updateManual(), n && (this.renderer.clear(), this.vibinDistort.draw(), this.content.update(t), this.content.draw(1, this.renderer.mouseListener.normalizedPos))
                    }
                }, {
                    key: "clear",
                    value: function(e) {
                        var t = cr.fromHex(e);
                        this.renderer.clearWithColor(t.x, t.y, t.z, 1)
                    }
                }, {
                    key: "trackElements",
                    value: function(e) {
                        this.content.trackElements(e)
                    }
                }, {
                    key: "setVibinScroll",
                    value: function(e) {
                        this.vibinDistort.scroll = e
                    }
                }, {
                    key: "setVibinSolidScroll",
                    value: function(e) {
                        this.vibinDistort.scroll1 = e
                    }
                }, {
                    key: "setSpriteSheetFrameIndex",
                    value: function(e) {
                        this.content.spriteFrame = e
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.content.reset()
                    }
                }]), e
            }(),
            bi = function() {
                function e(t, n) {
                    var r = this;
                    H()(this, e), this.playSpeed = 0, this.progress = 0, this.webglApplication = t, this.datGui = new ir;
                    var i = new Zn;
                    i.init("external"), i.addParamBool("solid", !0, (function(e) {
                        r.webglApplication.setVibinSolid(e)
                    })), this.div = this.createDebugDiv(), this.datGui.init(i), n.renderer.mouseListener.addWheelEvent((function(e) {
                        return r.handleScroll(e)
                    })), this.update()
                }
                return $()(e, [{
                    key: "handleScroll",
                    value: function(e) {
                        this.playSpeed += -.25 * e
                    }
                }, {
                    key: "update",
                    value: function() {
                        var e = this;
                        window.requestAnimationFrame((function() {
                            return e.update()
                        }));
                        var t = 1 / 60;
                        this.playSpeed *= Math.max(1 - 4 * t, 0), this.progress += this.playSpeed * t, this.webglApplication.setVibinScroll(this.progress)
                    }
                }, {
                    key: "createDebugDiv",
                    value: function() {
                        var e = document.createElement("div");
                        return document.body.appendChild(e), e.style.position = "absolute", e.style.left = "0px", e.style.top = "0px", e.style.color = "#FF0000", e.style.backgroundColor = "#000", e.style.display = "block", e.style.width = "16px", e.style.height = "16px", e.style.zIndex = "1000", e
                    }
                }, {
                    key: "destruct",
                    value: function() {
                        var e;
                        null === (e = this.datGui) || void 0 === e || e.destruct()
                    }
                }]), e
            }();

        function Si(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var ki = function(e) {
                Y()(n, e);
                var t = Si(n);

                function n() {
                    return H()(this, n), t.apply(this, arguments)
                }
                return $()(n, [{
                    key: "init",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        n.webglApp || (kn.ENABLED = t, Jt.useWebp = r, Jt.useAvif = i, n.preloader = new On, n.webglApp = new wi(this, e, n.preloader, t), t && (new bi(this, n.webglApp), this.addStats()))
                    }
                }, {
                    key: "load",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                        n.preloader.load((function() {
                            n.webglApp.init(), e()
                        }), t)
                    }
                }, {
                    key: "play",
                    value: function() {
                        n.webglApp.paused = !1
                    }
                }, {
                    key: "pause",
                    value: function() {
                        n.webglApp.paused = !0
                    }
                }, {
                    key: "trackElements",
                    value: function(e) {
                        n.webglApp.trackElements(e)
                    }
                }, {
                    key: "resetTrackedElements",
                    value: function() {
                        n.webglApp.reset()
                    }
                }, {
                    key: "setVibinScroll",
                    value: function(e) {
                        n.webglApp.setVibinScroll(e)
                    }
                }, {
                    key: "setVibinSolidScroll",
                    value: function(e) {
                        n.webglApp.setVibinSolidScroll(e)
                    }
                }, {
                    key: "setSpriteSheetFrameIndex",
                    value: function(e) {
                        n.webglApp.setSpriteSheetFrameIndex(e)
                    }
                }, {
                    key: "setVibinSolid",
                    value: function(e) {
                        console.warn("setVibinSolid: deprecated: remove the call to this function")
                    }
                }, {
                    key: "destruct",
                    value: function() {}
                }, {
                    key: "addStats",
                    value: function() {
                        var e = document.createElement("script");
                        e.onload = function() {
                            var e = new Stats;
                            e.dom.style.position = "absolute", e.dom.style.bottom = "0px", e.dom.style.top = "", document.body.appendChild(e.dom), requestAnimationFrame((function t() {
                                e.update(), requestAnimationFrame(t)
                            }))
                        }, e.src = "//mrdoob.github.io/stats.js/build/stats.min.js", document.head.appendChild(e)
                    }
                }]), n
            }(gn.a),
            Mi = n(364),
            Li = n.n(Mi),
            Oi = n(365),
            Ii = n.n(Oi),
            Ni = n(366),
            Ci = n.n(Ni);
        var Di = function(e, t, n, r, i, a, o) {
                if (!t.audioBuffer) throw new Error("Sample '".concat(t.name, "' is not loaded"));
                var s = e.createBufferSource(),
                    l = e.createGain(),
                    u = n ? n.gain : e.destination;
                s.connect(l), s.buffer = t.audioBuffer, s.loop = a;
                var c = {
                    context: e,
                    sample: t,
                    bufferSource: s,
                    gain: l,
                    channel: n || void 0
                };
                if (o) {
                    var h = e.createPanner();
                    h.panningModel = "HRTF", h.distanceModel = "linear",
                        function(e, t) {
                            e.positionX ? (e.positionX.value = t[0], e.positionY.value = t[1], e.positionZ.value = t[2]) : e.setPosition(t[0], t[1], t[2])
                        }(h, o), l.connect(h), h.connect(u), c.panner = h
                } else l.connect(u);
                if (i) {
                    l.gain.setValueAtTime(0, 0);
                    var f = {
                            value: 0
                        },
                        d = ee.w.to(f, i, {
                            value: 1,
                            ease: ee.h.easeNone,
                            onUpdate: function() {
                                l.gain.setValueAtTime(f.value, d.time())
                            }
                        })
                } else l.gain.setValueAtTime(r, 0);
                return s.start(0), c
            },
            Pi = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                e.playingSamples.forEach((function(e) {
                    return Fi(e, t)
                }))
            },
            Fi = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (0 === t) e.bufferSource.stop(0);
                else {
                    var n = e.context.currentTime + t;
                    e.gain.gain.linearRampToValueAtTime(0, n), e.bufferSource.stop(n)
                }
                Ui(e)
            },
            Ui = function(e) {
                if (e.channel) {
                    var t = e.channel.playingSamples.indexOf(e);
                    t > -1 && e.channel.playingSamples.splice(t, 1)
                }
            },
            Bi = window.AudioContext || window.webkitAudioContext,
            zi = function() {
                function e(t, n) {
                    var r = this;
                    H()(this, e), this.channels = {}, e.WEBAUDIO_ENABLED && (this.context = new Bi, this.sampleManager = new Li.a(this.context, t, n), window.addEventListener("click", (function() {
                        r.initAudioContext()
                    }), {
                        once: !0
                    }))
                }
                return $()(e, [{
                    key: "initAudioContext",
                    value: function() {
                        e.WEBAUDIO_ENABLED && "suspended" === this.context.state && this.context.resume()
                    }
                }, {
                    key: "on3DSoundOrienationChange",
                    value: function(t) {
                        e.WEBAUDIO_ENABLED && function(e, t) {
                            if (t) {
                                var n = e.listener;
                                if (n.forwardX) {
                                    var r = e.currentTime + .1;
                                    n.forwardX.linearRampToValueAtTime(t.forward[0], r), n.forwardY.linearRampToValueAtTime(t.forward[1], r), n.forwardZ.linearRampToValueAtTime(t.forward[2], r), t.position && (n.positionX.linearRampToValueAtTime(t.position[0], r), n.positionY.linearRampToValueAtTime(t.position[1], r), n.positionZ.linearRampToValueAtTime(t.position[2], r)), n.upX.linearRampToValueAtTime(t.up[0], r), n.upY.linearRampToValueAtTime(t.up[1], r), n.upZ.linearRampToValueAtTime(t.up[2], r)
                                } else t.position && n.setPosition(t.position[0], t.position[1], t.position[2]), n.setOrientation(t.forward[0], t.forward[1], t.forward[2], t.up[0], t.up[1], t.up[2])
                            }
                        }(this.context, t)
                    }
                }, {
                    key: "stop",
                    value: function(t, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        if (e.WEBAUDIO_ENABLED) {
                            var i = this.getChannelByName(n),
                                a = i.playingSamples.find((function(e) {
                                    return e.sample.name === t
                                }));
                            a && Fi(a, r)
                        }
                    }
                }, {
                    key: "playRandomQueue",
                    value: function(e) {
                        var t, n = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                            o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                            s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                            l = arguments.length > 6 ? arguments[6] : void 0,
                            u = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                            c = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
                        if ((t = l && 0 !== l.length ? l : be()(e)).length > 0) {
                            var h = Ii()(t),
                                f = t.indexOf(h);
                            t.splice(f, 1);
                            var d = this.play(h, r, i, a, !1, s, c);
                            d && (d.bufferSource.onended = function() {
                                var l = function() {
                                    o && 0 === t.length && (t = be()(e)), t.length > 0 && n.playRandomQueue(e, r, i, a, o, s, t, u, c)
                                };
                                u ? setTimeout((function() {
                                    l()
                                }), 1e3 * Ci()(u[0], u[1])) : l()
                            })
                        }
                    }
                }, {
                    key: "play",
                    value: function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                            a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                            o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                            s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
                        if (e.WEBAUDIO_ENABLED) {
                            var l = this.sampleManager.getSampleByName(t);
                            if (!l) throw new Error("Cannot find sample '".concat(t));
                            var u = this.getChannelByName(n);
                            if (u && u.playingSamples.length > 0) {
                                var c = u.playingSamples.find((function(e) {
                                    return e.sample.name === t
                                }));
                                if (c && (u.isMonophonic && c.bufferSource.loop && a || o)) return c
                            }
                            var h = Di(this.context, l, u, r, i, a, s);
                            return u && (u.isMonophonic && u.playingSamples.forEach((function(e) {
                                return Fi(e, u.monophonicFadeOutTime)
                            })), u.playingSamples.push(h), h.bufferSource.onended = function() {
                                Ui(h)
                            }), h
                        }
                        return null
                    }
                }, {
                    key: "getChannelByName",
                    value: function(e) {
                        var t = e ? this.channels[e] : null;
                        if (!t) throw new Error("Channel with name '".concat(e, "' does not exist"));
                        return t
                    }
                }, {
                    key: "stopAllOnChannel",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        Pi(this.getChannelByName(e), t)
                    }
                }, {
                    key: "muteChannel",
                    value: function(t, n) {
                        if (e.WEBAUDIO_ENABLED) {
                            var r = this.getChannelByName(t);
                            if (r) {
                                var i = n ? 0 : r.initialVolume;
                                r.gain.gain.setValueAtTime(i, 0)
                            }
                        }
                    }
                }, {
                    key: "muteAllChannels",
                    value: function(t) {
                        var n = this;
                        e.WEBAUDIO_ENABLED && Object.keys(this.channels).forEach((function(e) {
                            n.muteChannel(e, t)
                        }))
                    }
                }, {
                    key: "createChannel",
                    value: function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                        if (e.WEBAUDIO_ENABLED) {
                            if ("" === t) throw new Error("Channel name cannot be blank");
                            if (this.channels[t]) throw new Error("Channel '".concat(t, "' already exists"));
                            if (i < 0) throw new Error("monophonicFadeOutTime can not be negative");
                            var a = this.context.createGain();
                            a.gain.setValueAtTime(n, 0), a.connect(this.context.destination), a.connect(this.context.destination), this.channels[t] = {
                                initialVolume: n,
                                isMonophonic: r,
                                monophonicFadeOutTime: i,
                                name: t,
                                gain: a,
                                playingSamples: []
                            }
                        }
                    }
                }]), e
            }();
        zi.WEBAUDIO_ENABLED = void 0 !== (window.AudioContext || window.webkitAudioContext);
        var Vi = function() {
            var e = new cn.a;
            e.init(dn.config, dn.environment);
            var t = zt.create({
                baseURL: e.getURL(w.API),
                headers: {
                    Accept: "application/json"
                },
                responseType: "json"
            });
            t.interceptors.response.use((function(e) {
                return function(e) {
                    return e && e.data && "undefined" !== typeof e.data.data ? pn(pn({}, e), e.data) : e
                }(e)
            }), (function(e) {
                throw function(e) {
                    if (e && e.response && e.response.data && e.response.data.error) {
                        var t = pn(pn({
                            config: e.config
                        }, e.response), e.response.data);
                        return delete t.data, t
                    }
                    return e
                }(e)
            })), O("configManager", e), O("preloader", new wn), O("webglManager", new ki), O("gateway", t), O("soundManager", new zi("".concat(e.getVariable(b.VERSIONED_STATIC_ROOT), "audio/"), Ze.a.safari || Ze.a.ios ? "mp3" : "ogg"))
        };
        var Gi = n(367),
            Xi = n.n(Gi),
            Hi = n(368),
            ji = {
                duration: .6,
                to: 0,
                autoAlpha: !0,
                clearProps: !1,
                delay: 0,
                stagger: 0
            },
            $i = Object.assign(Object.assign({}, ji), {
                from: 0,
                to: 1,
                clearProps: !0
            });

        function Wi(e) {
            var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = Object.assign(Object.assign({}, $i), r),
                a = i.from,
                o = i.to,
                s = i.duration,
                l = i.autoAlpha,
                u = i.clearProps,
                c = i.delay,
                h = i.stagger;
            return J.gsap.fromTo(e, (t = {}, M()(t, l ? "autoAlpha" : "opacity", null !== a && void 0 !== a ? a : 0), M()(t, "pointerEvents", 0 === a ? "none" : ""), t), (n = {
                delay: c,
                duration: s,
                stagger: h
            }, M()(n, l ? "autoAlpha" : "opacity", o), M()(n, "ease", ee.h.easeNone), M()(n, "clearProps", u ? "opacity,visibility,pointerEvents" : "pointerEvents"), n))
        }

        function Yi(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        J.default.registerPlugin(Hi.a);
        var qi = function(e) {
                Y()(n, e);
                var t = Yi(n);

                function n() {
                    return H()(this, n), t.apply(this, arguments)
                }
                return $()(n, [{
                    key: "setupTransitionInTimeline",
                    value: function(e, t, n) {
                        var r = t.$refs,
                            i = r.logo,
                            a = r.loader,
                            o = t.$refs.letter,
                            s = i.$el,
                            l = a.$el,
                            u = s.querySelector(".bold"),
                            c = l.querySelector(".loader-circle"),
                            h = Array.from(l.querySelectorAll(".wing")),
                            f = o.map((function(e) {
                                return e.$el
                            }));
                        J.default.set([u, c], {
                            transformOrigin: "center center"
                        }), J.default.set(h, {
                            transformOrigin: J.default.utils.wrap(["right center", "left center"])
                        }), J.default.set(c, {
                            rotation: -90
                        }), e.add((function() {}), .25), e.fromTo(c, {
                            drawSVG: "0%"
                        }, {
                            drawSVG: "100%",
                            duration: 1,
                            ease: le.VinnieInOut
                        }), e.add(Wi(h, {
                            duration: .2
                        }), "<"), e.fromTo(h, {
                            rotation: J.default.utils.wrap([20, -20])
                        }, {
                            rotation: 0,
                            ease: le.VinnieInOut,
                            duration: 1
                        }, "<"), e.addLabel("wordStart", "+=0.6"), u && e.add(Wi(u, {
                            duration: .01
                        }), "wordStart"), e.fromTo(u, {
                            yPercent: -100
                        }, {
                            yPercent: 0,
                            ease: "back.out(1.1)",
                            duration: 1
                        }, "<"), e.fromTo(u, {
                            scaleY: .6
                        }, {
                            scaleY: 1,
                            duration: .8,
                            ease: "back.out(2)"
                        }, "<0.2"), e.fromTo(f, {
                            rotationX: 90
                        }, {
                            rotationX: 0,
                            duration: 1,
                            stagger: .05
                        }, "<0.1"), e.add(Wi(f, {
                            duration: .1,
                            stagger: .05
                        }), "<"), e.fromTo(l, {
                            yPercent: 0
                        }, {
                            yPercent: -300,
                            duration: 1,
                            ease: le.VinnieInOut
                        }, "wordStart+=0.4")
                    }
                }, {
                    key: "setupTransitionOutTimeline",
                    value: function(e, t, n) {
                        e.add(function(e) {
                            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = Object.assign(Object.assign({}, ji), n),
                                i = r.to,
                                a = r.duration,
                                o = r.autoAlpha,
                                s = r.clearProps,
                                l = r.delay,
                                u = r.stagger;
                            return J.gsap.to(e, (t = {
                                delay: l,
                                duration: a,
                                stagger: u
                            }, M()(t, o ? "autoAlpha" : "opacity", i), M()(t, "ease", ee.h.easeNone), M()(t, "clearProps", s ? "opacity,visibility" : ""), t))
                        }(t.$el))
                    }
                }, {
                    key: "setupLoopingAnimationTimeline",
                    value: function(e, t, n) {}
                }, {
                    key: "startSerifLoopingAnimation",
                    value: function() {
                        var e = this.parentController.$refs.letter.map((function(e) {
                                return e.$el
                            })),
                            t = J.default.timeline({
                                repeat: -1
                            });
                        return e.forEach((function(e) {
                            var n = J.default.timeline();
                            n.fromTo(e, {
                                rotationX: 0
                            }, {
                                rotationX: -360,
                                duration: 2,
                                ease: le.VinnieInOut
                            }), n.add((function() {
                                e.setAttribute("data-transparent", "true")
                            }), .2), n.add((function() {
                                e.removeAttribute("data-transparent")
                            }), .8), t.add(n, "<0.05")
                        })), t.add((function() {}), "+=1"), t
                    }
                }, {
                    key: "startBoldLoopingAnimation",
                    value: function() {
                        var e = this.parentController.$refs.logo.$el,
                            t = Array.from(e.querySelectorAll(".letter")),
                            n = J.default.timeline({
                                repeat: -1
                            });
                        return n.to(t, {
                            x: J.default.utils.wrap(["-0.5em", "-0.25em", "0", "0.25em", "0.5em"]),
                            duration: 1.8,
                            ease: le.VinnieInOut
                        }), n.to(t, {
                            x: 0,
                            duration: 1.8,
                            ease: le.VinnieInOut
                        }, "+=1.2"), n.add((function() {}), "+=1.2"), n
                    }
                }]), n
            }(B.AbstractTransitionController),
            Ki = n(231);

        function Zi(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var Qi = function(e) {
                Y()(n, e);
                var t = Zi(n);

                function n(e) {
                    return H()(this, n), t.call(this, Object.assign(e, {
                        batchSize: 1,
                        cached: !1
                    }))
                }
                return $()(n, [{
                    key: "loadAsset",
                    value: function(e) {
                        return Promise.resolve()
                    }
                }, {
                    key: "load",
                    value: function(e) {
                        var t = this;
                        return new Promise((function(n) {
                            t.options.loadMethod((function() {
                                return n()
                            }), (function(t) {
                                e(t)
                            }))
                        }))
                    }
                }, {
                    key: "dispose",
                    value: function() {
                        Sn()(Q()(n.prototype), "dispose", this).call(this)
                    }
                }]), n
            }(n.n(Ki).a),
            Ji = function(e, t, n) {
                return new Promise((function(r) {
                    J.gsap.to(e, {
                        duration: t,
                        onUpdate: n,
                        manualProgress: 1,
                        ease: ee.h.easeNone,
                        onComplete: function() {
                            return r()
                        }
                    })
                }))
            },
            ea = {
                name: "SitePreloader",
                extends: B.AbstractTransitionComponent,
                data: function() {
                    return {
                        progress: 0,
                        manualProgress: 0
                    }
                },
                computed: {
                    totalProgress: function() {
                        return Math.round(100 * (this.manualProgress + this.progress) / 2)
                    }
                },
                mounted: function() {
                    this.loadApplication()
                },
                methods: {
                    handleAllComponentsReady: function() {
                        this.transitionController = new qi(this), this.isReady()
                    },
                    loadApplication: function() {
                        var e = this;
                        return f()(c.a.mark((function t() {
                            var n;
                            return c.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return e.loopAnimations = [], t.next = 3, e.transitionIn(!0);
                                    case 3:
                                        return setTimeout((function() {
                                            e.loopAnimations.push(e.transitionController.startSerifLoopingAnimation(), e.transitionController.startBoldLoopingAnimation())
                                        }), 500), e.$preloader.addTask(new Qi({
                                            loadMethod: e.$webgl.load.bind(e.$webgl)
                                        })), n = [], Object.entries(Ue).forEach((function(t) {
                                            var r = ke()(t, 2)[1].images.filter((function(e) {
                                                return !1 !== e.preload
                                            })).map((function(t) {
                                                var n = t.url;
                                                return et(n, e.$versionRoot)
                                            }));
                                            n.push(r)
                                        })), e.$preloader.addTask(new Xi.a({
                                            assets: be()(n.flat())
                                        })), 3, t.next = 11, Promise.all([e.$preloader.start({
                                            onUpdate: e.onPreloaderUpdate
                                        }), Ji(e, 3, e.onManualUpdate)]);
                                    case 11:
                                        e.onPreloaderUpdate(1), e.$emit("preloaded"), e.completeLoop();
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    onPreloaderUpdate: function(e) {
                        this.progress = e
                    },
                    onManualUpdate: function() {},
                    completeLoop: function() {
                        var e = this;
                        return f()(c.a.mark((function t() {
                            return c.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return e.loopAnimations.forEach((function(e) {
                                            return e.kill()
                                        })), t.next = 3, e.transitionOut(!0);
                                    case 3:
                                        e.$emit("complete");
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                }
            },
            ta = n(246);
        var na = Object(m.a)(ea, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: ["abs-fill", e.$style.sitePreloader]
            }, [n("div", {
                class: e.$style.logo,
                attrs: {
                    dir: "ltr"
                }
            }, [n("Icon", {
                ref: "logo",
                class: e.$style.bold,
                attrs: {
                    name: "vibin-bold-preloader"
                }
            }), e._v(" "), n("span", {
                ref: "letterOverlay",
                class: ["abs-fill", e.$style.overlay]
            }, e._l("vibin".split(""), (function(e, t) {
                return n("Icon", {
                    key: e + "-" + t,
                    ref: "letter",
                    refInFor: !0,
                    class: "letter-icon",
                    attrs: {
                        name: "letter-" + e
                    }
                })
            })), 1), e._v(" "), n("Icon", {
                ref: "loader",
                class: e.$style.loader,
                attrs: {
                    name: "loader"
                }
            })], 1)])
        }), [], !1, (function(e) {
            this.$style = ta.default.locals || ta.default
        }), null, null).exports;

        function ra(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Q()(e);
                if (t) {
                    var i = Q()(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return K()(this, n)
            }
        }
        var ia = function(e) {
            Y()(n, e);
            var t = ra(n);

            function n() {
                return H()(this, n), t.apply(this, arguments)
            }
            return $()(n, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]), n
        }(B.AbstractTransitionController);

        function aa(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }
        var oa = {
                name: "CanvasContainer",
                extends: B.AbstractTransitionComponent,
                computed: function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? aa(Object(n), !0).forEach((function(t) {
                            M()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : aa(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, Object(ie.d)({
                    filesSupported: function(e) {
                        return e.app.filesSupported
                    }
                })),
                mounted: function() {
                    this.$webgl.init(this.$el, this.$route.name === this.RouteNames.WEBGL, this.filesSupported.webp, this.filesSupported.avif)
                },
                methods: {
                    handleAllComponentsReady: function() {
                        this.transitionController = new ia(this), this.isReady()
                    }
                }
            },
            sa = n(247);
        var la = Object(m.a)(oa, (function() {
                var e = this.$createElement;
                return (this._self._c || e)("div", {
                    class: ["abs-fill", this.$style.canvasContainer]
                })
            }), [], !1, (function(e) {
                this.$style = sa.default.locals || sa.default
            }), null, null).exports,
            ua = function() {
                return zt({
                    url: "".concat(I("configManager").getURL(w.VIEWER_LOCATION)),
                    method: "get",
                    headers: {
                        Accept: "application/json"
                    },
                    responseType: "json"
                })
            },
            ca = function(e) {
                return zt({
                    url: "/track.html?".concat(e),
                    method: "get"
                })
            };

        function ha(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function fa(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ha(Object(n), !0).forEach((function(t) {
                    M()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ha(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var da = {
                name: "App",
                components: {
                    SitePreloader: na,
                    CanvasContainer: la
                },
                extends: B.AbstractRegistrableComponent,
                data: function() {
                    return {
                        isPreloaded: !1,
                        isPrerendering: !0
                    }
                },
                computed: fa(fa({}, Object(ie.d)({
                    deviceState: function(e) {
                        return e.app.deviceState
                    }
                })), {}, {
                    currentLanguageCode: function() {
                        return this.$store.getters.currentLanguage.code
                    }
                }),
                watch: {
                    currentLanguageCode: function(e) {
                        this.onLocaleUpdate(e), this.trackPage(e)
                    }
                },
                created: function() {
                    this.disposables = new V.DisposableManager, this.disposables.add(function() {
                        var e = function() {
                            var e = window.innerHeight;
                            document.documentElement.style.setProperty("--vh", "".concat(.01 * e, "px"))
                        };
                        return e(), Object(G.addEventListener)(window, "resize", e)
                    }()), this.disposables.add(Object(G.addEventListener)(this.$deviceStateTracker, Gt.DeviceStateEvent.STATE_UPDATE, this.handleDeviceStateUpdate)), this.setDeviceState(this.$deviceStateTracker.currentState), this.onLocaleUpdate(this.currentLanguageCode)
                },
                mounted: function() {
                    window.PRERENDER_INJECTED && window.PRERENDER_INJECTED.isPrerendering || (this.isPrerendering = !1, this.initTracking())
                },
                beforeDestroy: function() {
                    this.disposables.dispose()
                },
                methods: fa(fa({}, Object(ie.c)({
                    setDeviceState: Dt
                })), {}, {
                    handleDeviceStateUpdate: function(e) {
                        this.setDeviceState(e.data.state)
                    },
                    onLeave: function(e, t) {
                        B.FlowManager.transitionOut.then((function() {
                            return B.FlowManager.done()
                        })).then(t)
                    },
                    onPreloadComplete: function() {
                        this.isPreloaded = !0, setTimeout((function() {
                            document.dispatchEvent(new Event("x-app-rendered"))
                        }), 2e3)
                    },
                    onLocaleUpdate: function(e) {
                        document.documentElement.setAttribute("lang", e), document.documentElement.setAttribute("dir", "ar" === e ? "rtl" : "ltr")
                    },
                    getCountryCode: function() {
                        var e = this;
                        return this.countryCode = "US", ua().then((function(t) {
                            var n = t.data;
                            return n && n.country && (e.countryCode = n.country), e.countryCode
                        })).catch((function(e) {
                            return console.log(e), {
                                success: !1
                            }
                        }))
                    },
                    initTracking: function() {
                        var e = this;
                        return f()(c.a.mark((function t() {
                            var n, r;
                            return c.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.getCountryCode();
                                    case 2:
                                        n = "fortnitelookbook-request", r = parseInt(localStorage.getItem(n), 10) || 0, e.requestNr = r + 1, localStorage.setItem(n, e.requestNr), e.trackPage(e.currentLanguageCode);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    trackPage: function(e) {
                        var t = "locale=".concat(e, "&countryCode=").concat(this.countryCode, "&requestNr=").concat(this.requestNr);
                        ca(t)
                    }
                })
            },
            va = n(248);
        var pa = Object(m.a)(da, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("main", {
                    class: [e.$style.app],
                    attrs: {
                        id: "app"
                    }
                }, [e.isPrerendering ? e._e() : n("CanvasContainer"), e._v(" "), e.isPreloaded || e.isPrerendering ? e._e() : n("SitePreloader", {
                    on: {
                        complete: e.onPreloadComplete
                    }
                }), e._v(" "), n("transition", {
                    on: {
                        leave: e.onLeave
                    }
                }, [e.isPreloaded && !e.isPrerendering ? n("router-view") : e._e()], 1)], 1)
            }), [], !1, (function(e) {
                this.$style = va.default.locals || va.default
            }), null, null).exports,
            ma = {};
        Object.keys(ma).forEach((function(e) {
            return r.default.filter(e, ma[e])
        })), Object.keys(l).forEach((function(e) {
            return r.default.directive(e, l[e])
        })), Object.keys(g).forEach((function(e) {
            return r.default.component(e, g[e])
        })), Vi(), window.webpackPublicPath && (n.p = window.webpackPublicPath);
        var ya = Ct(),
            _a = Bt(),
            ga = P();
        ga.localeEnabled && (r.default.use(a.a, {
            store: _a,
            router: ga.localeRoutingEnabled ? ya : null,
            config: ga.config,
            proxy: Zt
        }), r.default.initI18nManager()), Object(o.sync)(_a, ya);
        var Ea = new r.default({
            router: ya,
            store: _a,
            render: function(e) {
                return e(pa)
            }
        });
        ln(_a).then((function() {
            Ea.$mount("#app")
        }))
    },
    89: function(e) {
        e.exports = JSON.parse('{"b":{"XSMALL":"\'(max-width: 479px)\'","SMALL":"\'(min-width: 480px)\'","MEDIUM":"\'(min-width: 768px)\'","LARGE":"\'(min-width: 1024px)\'","XLARGE":"\'(min-width: 1440px)\'","XXLARGE":"\'(min-width: 1920px)\'"},"a":{"XSMALL":0,"SMALL":1,"MEDIUM":2,"LARGE":3,"XLARGE":4,"XXLARGE":5}}')
    }
});