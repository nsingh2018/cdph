! function(e) {
    function t(t) {
        for (var a, i, l = t[0], c = t[1], s = t[2], d = 0, m = []; d < l.length; d++) i = l[d], Object.prototype.hasOwnProperty.call(r, i) && r[i] && m.push(r[i][0]), r[i] = 0;
        for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
        for (u && u(t); m.length;) m.shift()();
        return o.push.apply(o, s || []), n()
    }

    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], a = !0, l = 1; l < n.length; l++) {
                var c = n[l];
                0 !== r[c] && (a = !1)
            }
            a && (o.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }
    var a = {},
        r = {
            0: 0
        },
        o = [];

    function i(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.e = function(e) {
        var t = [],
            n = r[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var a = new Promise((function(t, a) {
                    n = r[e] = [t, a]
                }));
                t.push(n[2] = a);
                var o, l = document.createElement("script");
                l.charset = "utf-8", l.timeout = 120, i.nc && l.setAttribute("nonce", i.nc), l.src = function(e) {
                    return i.p + "" + ({} [e] || e) + ".ca33f202f1f7e072ac45.bundle-0.0.1.js"
                }(e);
                var c = new Error;
                o = function(t) {
                    l.onerror = l.onload = null, clearTimeout(s);
                    var n = r[e];
                    if (0 !== n) {
                        if (n) {
                            var a = t && ("load" === t.type ? "missing" : t.type),
                                o = t && t.target && t.target.src;
                            c.message = "Loading chunk " + e + " failed.\n(" + a + ": " + o + ")", c.name = "ChunkLoadError", c.type = a, c.request = o, n[1](c)
                        }
                        r[e] = void 0
                    }
                };
                var s = setTimeout((function() {
                    o({
                        type: "timeout",
                        target: l
                    })
                }), 12e4);
                l.onerror = l.onload = o, document.head.appendChild(l)
            } return Promise.all(t)
    }, i.m = e, i.c = a, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) i.d(n, a, function(t) {
                return e[t]
            }.bind(null, a));
        return n
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "/home/", i.oe = function(e) {
        throw console.error(e), e
    };
    var l = window.webpackJsonp = window.webpackJsonp || [],
        c = l.push.bind(l);
    l.push = t, l = l.slice();
    for (var s = 0; s < l.length; s++) t(l[s]);
    var u = c;
    o.push([859, 1]), n()
}({
    108: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "f", (function() {
            return r
        })), n.d(t, "e", (function() {
            return o
        })), n.d(t, "d", (function() {
            return i
        })), n.d(t, "c", (function() {
            return l
        })), n.d(t, "b", (function() {
            return c
        }));
        var a = "CLEAR_PHARMACY_SEARCH_RESULTS",
            r = "UPDATE_PHARMACY_SEARCH_RESULTS_SUCCESS",
            o = "UPDATE_PHARMACY_SEARCH_RESULTS_FAILURE",
            i = "UPDATE_PHARMACY_HEADER_DISCLAIMER_SUCCESS",
            l = "UPDATE_PHARMACY_HEADER_DISCLAIMER_FAILURE",
            c = "SET_PHARMACY_SEARCH_ADDRESS"
    },
    123: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "d", (function() {
            return r
        })), n.d(t, "b", (function() {
            return o
        })), n.d(t, "c", (function() {
            return i
        })), n.d(t, "e", (function() {
            return l
        }));
        var a = "CHANGE_LOCALE",
            r = "UPDATE_MESSAGES",
            o = "GET_LANGUAGES",
            i = "GET_LANGUAGES_FAILURE",
            l = "UPDATE_MESSAGES_FAILURE"
    },
    131: function(e, t, n) {
        "use strict";
        n(471);
        var a = window.location.hostname,
            r = {
                baseUrl: "",
                clientId: ""
            };
        "localhost" === a || -1 !== a.indexOf("qa.magellanrx.com") || -1 !== a.indexOf("test.magellanrx.com") ? (r.baseUrl = "https://magellanhealthsso.oktapreview.com", r.clientId = "0oabb7vg28fwHNxTV0h7") : -1 !== a.indexOf("magellanrx.com") || -1 !== a.indexOf("dhcs.ca.gov") ? (r.baseUrl = "https://magellanhealthsso.okta.com", r.clientId = "0oaeowqbd0PhTy3IA296") : (r.baseUrl = "https://magellanhealthsso.oktapreview.com", r.clientId = "0oabb7vg28fwHNxTV0h7");
        var o = {
            OKTA_ENV: {
                ENV: {
                    url: r.baseUrl,
                    id: r.clientId
                }
            }.ENV,
            OKTA_DOMAIN: r.baseUrl,
            OKTA_BASE: r.baseUrl + "/",
            OKTA_ISSUSER: r.baseUrl,
            OKTA_CLIENT_ID: r.clientId,
            OKTA_SCOPES: ["openid", "profile", "email", "groups"],
            OKTA_CALLBACK_PATH: "/member/implicit/callback",
            MICRO_BASE: "https://portalqa.magellanrx.com/portalmicroservices"
        };
        t.a = o
    },
    1401: function(e, t) {},
    1432: function(e, t, n) {},
    1433: function(e, t, n) {},
    1434: function(e, t, n) {
        "use strict";
        n.r(t);
        n(55), n(54), n(211);
        var a = n(112),
            r = n.n(a),
            o = (n(456), n(175)),
            i = n.n(o),
            l = (n(866), n(868), n(874), n(0)),
            c = n.n(l),
            s = n(21),
            u = n.n(s),
            d = n(44),
            m = n(805),
            f = n(210),
            g = n(104),
            p = n(275),
            E = n(207),
            h = n(131),
            b = n(208),
            O = (n(225), n(664), n(68), n(75), n(212), n(76), n(561), n(562), n(30)),
            _ = n.n(O),
            C = n(32),
            A = n.n(C),
            L = n(27),
            N = n.n(L),
            T = n(33),
            S = n.n(T),
            y = n(34),
            M = n.n(y),
            R = n(18),
            v = n.n(R),
            w = n(6),
            I = n.n(w),
            P = n(1),
            k = n.n(P),
            j = n(190),
            x = n(28),
            D = n(1456),
            U = n(5),
            F = n(1460),
            H = n(49),
            B = n(78),
            G = n(790),
            Y = n(566),
            z = n(29),
            W = n(48),
            K = n(23),
            q = n.n(K),
            V = n(9),
            X = n(690),
            Q = (n(86), n(77), n(87), n(425), n(134), n(88), n(89), n(90), n(91), n(79), n(567), n(258), n(92), n(39)),
            J = n(417),
            Z = n(106),
            $ = n(1461),
            ee = n(528),
            te = n(530),
            ne = n(707),
            ae = n(706),
            re = n(414),
            oe = n(122),
            ie = n.n(oe),
            le = n(837),
            ce = n.n(le),
            se = n(252),
            ue = n(399),
            de = n(793),
            me = n(794),
            fe = n(7),
            ge = n(22),
            pe = n(35),
            Ee = (n(1423), n(43)),
            he = n.n(Ee),
            be = n(835),
            Oe = n.n(be),
            _e = n(836),
            Ce = n.n(_e),
            Ae = n(1446),
            Le = n(558),
            Ne = n(152),
            Te = n(541),
            Se = n(675),
            ye = n(1445),
            Me = Oe()(Ce()("anchorEl", "updateAnchorEl", null));

        function Re(e) {
            var t = function(e) {
                    var t = e;
                    return Object(pe.b)(t) && (t = e.replace(/'\w+'/g, "")), t
                },
                n = function(t, n) {
                    return t.onClick ? c.a.createElement(Se.a, {
                        onClick: function() {
                            return n(t.onClick)
                        },
                        key: t.id,
                        className: e.classes.menuItemLink
                    }, t.title) : Object(pe.e)(t.link) ? c.a.createElement(Se.a, {
                        onClick: n,
                        key: t.id,
                        component: "a",
                        href: t.link,
                        target: t.target,
                        className: e.classes.menuItemLink
                    }, t.title) : e.isCommonHeader ? c.a.createElement(Se.a, {
                        onClick: function() {
                            return n(t.onClick)
                        },
                        key: t.id,
                        className: e.classes.menuItemLinkCommon
                    }, c.a.createElement(H.ExternalContentRenderer, {
                        translatorType: e.translatorType,
                        content: t.title,
                        contentDefaultLang: t.title,
                        contentOtherLang: t.titleSpanish,
                        locale: e.locale,
                        defaultLang: "en"
                    })) : c.a.createElement(Se.a, {
                        onClick: n,
                        key: t.id,
                        component: Q.Link,
                        to: t.link,
                        className: e.classes.menuItemLink
                    }, t.title)
                };
            return c.a.createElement(Me, null, (function(a) {
                var r = a.anchorEl,
                    o = a.updateAnchorEl,
                    i = Boolean(r),
                    s = function(e) {
                        o(null), null != e && "function" == typeof e && e()
                    };
                return c.a.createElement(l.Fragment, null, e.isCommonHeader ? c.a.createElement("button", {
                    "aria-owns": i ? "render-props-menu" : null,
                    "aria-haspopup": "true",
                    className: e.classes.navItemCommon,
                    onClick: function(e) {
                        o(e.currentTarget)
                    }
                }, e.mainMenuItem) : c.a.createElement("button", {
                    "aria-owns": i ? "render-props-menu" : null,
                    "aria-haspopup": "true",
                    className: e.classes.navItem,
                    onClick: function(e) {
                        o(e.currentTarget)
                    }
                }, e.mainMenuItem), c.a.createElement(Te.a, {
                    open: i,
                    anchorEl: r,
                    transition: !0,
                    disablePortal: !0,
                    className: e.classes.dropdown
                }, (function(a) {
                    var r = a.TransitionProps,
                        o = a.placement;
                    return c.a.createElement(Le.a, he()({}, r, {
                        id: "render-props-menu",
                        style: {
                            transformOrigin: "bottom" === o ? "center top" : "center bottom"
                        }
                    }), c.a.createElement(Ne.a, {
                        elevation: 2
                    }, c.a.createElement(Ae.a, {
                        onClickAway: s
                    }, c.a.createElement(ye.a, null, e.menuItems.map((function(a) {
                        return Object(pe.b)(a.link) ? function(n) {
                            return n.feature ? c.a.createElement(se.a, {
                                userFeatures: e.features.readableFeatures,
                                feature: n.feature,
                                key: n.id
                            }, Object(pe.e)(n.link) ? c.a.createElement(Se.a, {
                                key: n.id,
                                component: "a",
                                onClick: function() {
                                    return e.showExternalAlert(!0, t(n.link))
                                },
                                className: e.classes.menuItemLink
                            }, n.title) : c.a.createElement(Se.a, {
                                key: n.id,
                                component: "a",
                                href: t(n.link),
                                target: Object(pe.a)(n.link),
                                className: e.classes.menuItemLink
                            }, n.title)) : c.a.createElement(Se.a, {
                                key: n.id,
                                component: "a",
                                onClick: function() {
                                    return e.showExternalAlert(!0, t(n.link))
                                },
                                className: e.classes.menuItemLink
                            }, n.title)
                        }(a) : function(t, a) {
                            return t.feature ? c.a.createElement(se.a, {
                                userFeatures: e.features.readableFeatures,
                                feature: t.feature,
                                key: t.id
                            }, n(t, a)) : n(t, a)
                        }(a, s)
                    }))))))
                })))
            }))
        }
        Re.propTypes = {
            classes: k.a.object,
            mainMenuItem: k.a.node,
            menuItems: k.a.array,
            features: k.a.object,
            showExternalAlert: k.a.func,
            isCommonHeader: k.a.bool,
            locale: k.a.string,
            translatorType: k.a.string
        };
        var ve = Re,
            we = n(1459),
            Ie = Object(U.a)((function(e) {
                return {
                    root: {
                        left: "-35px",
                        top: "-13px",
                        padding: "0 4px"
                    },
                    badge: {
                        border: "2px solid ".concat(e.palette.background.paper),
                        backgroundColor: e.palette.secondary.dark
                    }
                }
            }))(we.a),
            Pe = Object(U.a)((function(e) {
                return {
                    root: {
                        marginLeft: "10px",
                        padding: "0 4px"
                    },
                    badge: {
                        border: "2px solid ".concat(e.palette.background.paper),
                        backgroundColor: e.palette.secondary.dark
                    }
                }
            }))(we.a),
            ke = n.p + "images/f8ed461575c5e99c85470d14345972ca-edu.svg",
            je = n.p + "images/40c145a925bd4a69338846f02fea0604-faq.svg",
            xe = n.p + "images/7da2de7cae1f6e86b7a89c448b60e2d3-tools-resources.svg",
            De = n.p + "images/2abbb44b5bdcea3d848ca203bac3b956-register.svg",
            Ue = n.p + "images/b1c310c23b35b2ea52388918ff867ce7-md-login.svg",
            Fe = n.p + "images/ee3b4cd6aea96abedfa8de6f3d5c80b9-md-logout.svg",
            He = n.p + "images/ebcf7857512059dc6ab524d9629f594f-tools.svg",
            Be = n.p + "images/4005b0e2800d9775882c479bb742afb2-message-center.svg",
            Ge = n.p + "images/a98efcead6702f203ef2c154615d335a-search.svg",
            Ye = n.p + "images/2d430f0499531c177e826c5fb55eb01e-mg-users-solid.svg",
            ze = n.p + "images/82a85d2aebabec83ea2c84ab5603d5d0-user-md-solid.svg",
            We = n.p + "images/63fc8287436d1f3b39a3542f38d609e6-user-solid.svg",
            Ke = n.p + "images/00954a3608f6581e82d914d8761f39e9-pills-solid.svg",
            qe = n.p + "images/fc2c39ad13d620b8bd370150180f6863-mgblue-back-arrow.svg",
            Ve = n.p + "images/96978368de73e15682411d3a113f40fe-mgblue-home.svg",
            Xe = n.p + "images/8e09cefe586ae4f58dd55f5713020da5-mgblue-tools-resources.svg";

        function Qe(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function Je(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Qe(Object(n), !0).forEach((function(t) {
                    I()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qe(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var Ze = function(e) {
            var t = e.authState,
                n = e.classes,
                a = e.features,
                r = e.featureDefinitions,
                o = e.landingHeaderNavLinks,
                i = e.memberHeaderNavLinks,
                s = e.updateUnreadCount,
                u = e.unreadCount,
                d = e.webChatClose,
                m = e.searchBarOpen,
                f = e.setSearchBarOpen,
                g = e.isCommonHeader,
                p = e.locale,
                E = e.translatorType,
                h = Object(l.useState)(!1),
                b = q()(h, 2),
                O = b[0],
                _ = b[1],
                C = Object(l.useState)(null),
                A = q()(C, 2),
                L = A[0],
                N = A[1],
                T = Object(l.useState)(Object(pe.c)()),
                S = q()(T, 2),
                y = S[0],
                M = S[1],
                R = Object(l.useState)(t.isAuthenticated),
                v = q()(R, 2),
                w = v[0],
                I = v[1],
                P = Object(l.useState)([]),
                k = q()(P, 2),
                j = k[0],
                x = k[1],
                D = Object(l.useState)([]),
                U = q()(D, 2),
                F = U[0],
                B = U[1],
                G = Object(l.useState)([]),
                Y = q()(G, 2),
                z = Y[0],
                W = Y[1],
                K = Object(l.useState)([]),
                V = q()(K, 2),
                X = V[0],
                oe = V[1],
                le = Object(l.useState)(0),
                ue = q()(le, 2),
                de = ue[0],
                me = ue[1],
                Ee = null,
                he = function(e, t) {
                    var n = [{
                        id: "Education & Outreach",
                        onClick: Oe(!1),
                        imgSrc: ke
                    }, {
                        id: "Tools & Resources",
                        onClick: Oe(!1),
                        imgSrc: xe
                    }, {
                        id: "FAQ",
                        onClick: Oe(!1),
                        imgSrc: je
                    }, {
                        id: "System Status",
                        onClick: Oe(!1),
                        imgSrc: He
                    }, {
                        title: "Register",
                        id: "Register",
                        onClick: Oe(!1),
                        imgSrc: De
                    }, {
                        title: "Login",
                        id: "Login",
                        onClick: Oe(!1),
                        imgSrc: Ue
                    }, {
                        title: "Logout",
                        id: "Logout",
                        onClick: Ce,
                        imgSrc: Fe
                    }, {
                        title: "Message Center",
                        id: "Message Center",
                        onClick: Oe(!1),
                        imgSrc: Be,
                        showBadgeContent: !0,
                        showMobileBadgeContent: !0
                    }, {
                        title: "Search",
                        id: "Search",
                        onClick: Ae,
                        imgSrc: Ge
                    }, {
                        title: "Client",
                        id: "Client",
                        onClick: Oe(!1),
                        imgSrc: We
                    }, {
                        title: "Provider",
                        id: "Provider",
                        onClick: Oe(!1),
                        imgSrc: ze
                    }, {
                        title: "CDPH/OA/ADAP Portal",
                        id: "CDPH/OA/ADAP Portal",
                        onClick: Oe(!1),
                        imgSrc: Ye
                    }, {
                        title: "CA PrEP-AP",
                        id: "CA PrEP-AP",
                        onClick: Oe(!1),
                        imgSrc: Ye
                    }, {
                        title: "Formulary",
                        id: "Formulary",
                        onClick: Oe(!1),
                        imgSrc: Ke
                    }, {
                        title: "Main Page",
                        id: "Main Page",
                        onClick: Oe(!1),
                        imgSrc: qe
                    }, {
                        title: "Client Home",
                        id: "Client Home",
                        onClick: Oe(!1),
                        imgSrc: Ve
                    }];
                    return e.filter((function(e) {
                        return ["B", t ? "Y" : "N"].includes(e.secure)
                    })).map((function(e) {
                        var a = n.find((function(t) {
                                return e.id === t.id
                            })),
                            r = Je(Je({}, e), {}, {
                                feature: t ? e.featureSecure : e.featureUnsecure
                            });
                        return a && (r.onClick = a.onClick, r.imgSrc = a.imgSrc, a.showBadgeContent && (r.showBadgeContent = a.showBadgeContent), a.showMobileBadgeContent && (r.showMobileBadgeContent = a.showMobileBadgeContent), (a.menuItems || e.menuItems) && (r.menuItems = r.menuItems.filter((function(e) {
                            return ["B", t ? "Y" : "N"].includes(e.secure)
                        })).map((function(e) {
                            var n, r = null === (n = a.menuItems) || void 0 === n ? void 0 : n.find((function(t) {
                                return e.id === t.id
                            }));
                            return Je(r ? Je(Je({}, e), r) : Je({}, e), {}, {
                                feature: t ? e.featureSecure : e.featureUnsecure
                            })
                        })))), r
                    }))
                },
                be = function(e, t) {
                    null != e && ("landing" === t ? W(he(e, !1)) : (B(he(e, !0)), x(he(e, !1))))
                };
            Object(l.useEffect)((function() {
                M(Object(pe.c)())
            }), [Object(pe.c)()]), Object(l.useEffect)((function() {
                I(t.isAuthenticated)
            }), [t.isAuthenticated]), Object(l.useEffect)((function() {
                null != i && 0 !== i.length && be(i, "member")
            }), [i]), Object(l.useEffect)((function() {
                null != o && 0 !== o.length && be(o, "landing")
            }), [o]), Object(l.useEffect)((function() {
                y ? oe(z) : t.isAuthenticated ? oe(F) : oe(j)
            }), [z, F, j, y, w]), Object(l.useEffect)((function() {
                return Object(ge.a)("MEMBER_PORTAL_MESSAGE_CENTER_LINK", a.readableFeatures) && null === Ee && !1 === y && w && (s(), Ee = setInterval((function() {
                        s()
                    }), 3e5)),
                    function() {
                        null !== Ee && (clearInterval(Ee), Ee = null)
                    }
            }), [w, y, a, r]), Object(l.useEffect)((function() {
                me(u)
            }), [u]);
            var Oe = function(e) {
                    return function() {
                        N(null), _(e)
                    }
                },
                _e = function(e) {
                    N(e === L ? null : e)
                },
                Ce = function() {
                    var t = e.authService,
                        n = e.clearLoggedInUserInfo;
                    Oe(!1)(), n(), d(), t.logout("/member/login")
                },
                Ae = function() {
                    Oe(!1)(), f(!m)
                },
                Le = function(t) {
                    var n = e.classes;
                    return t.menuItems.length > 0 && !g ? c.a.createElement(l.Fragment, {
                        key: t.id
                    }, t.imgSrc && c.a.createElement("img", {
                        src: t.imgSrc,
                        className: n.iconLink,
                        alt: "".concat(t.title, " Icon")
                    }), c.a.createElement("div", {
                        className: n.navItemDropDown
                    }, c.a.createElement("span", null, t.title), c.a.createElement(ie.a, {
                        htmlColor: fe.a.californiaNavIconBlue
                    }))) : t.menuItems.length > 0 && g ? c.a.createElement(l.Fragment, {
                        key: t.id
                    }, t.imgSrc && c.a.createElement("img", {
                        src: Xe,
                        className: n.iconLinkCommon,
                        alt: "".concat(t.title, " Icon")
                    }), c.a.createElement("div", {
                        className: n.navItemDropDown
                    }, c.a.createElement("span", null, c.a.createElement(H.ExternalContentRenderer, {
                        translatorType: E,
                        content: t.title,
                        contentDefaultLang: t.title,
                        contentOtherLang: t.titleSpanish,
                        locale: p,
                        defaultLang: "en"
                    })), c.a.createElement(ie.a, {
                        htmlColor: fe.a.magellanBlue
                    }))) : null == t.link ? c.a.createElement("button", {
                        onClick: t.onClick,
                        key: t.id,
                        className: n.navItem
                    }, t.imgSrc && c.a.createElement("img", {
                        src: t.imgSrc,
                        className: n.iconLink,
                        alt: "".concat(t.title, " Icon")
                    }), c.a.createElement("span", null, t.title)) : Object(pe.e)(t.link) ? c.a.createElement("a", {
                        href: t.href,
                        onClick: t.onClick,
                        key: t.id,
                        className: n.navItem,
                        target: t.target
                    }, t.imgSrc && c.a.createElement("img", {
                        src: t.imgSrc,
                        className: n.iconLink,
                        alt: "".concat(t.title, " Icon")
                    }), c.a.createElement("span", null, t.title)) : g ? c.a.createElement(Q.Link, {
                        to: t.link,
                        onClick: t.onClick,
                        key: t.id,
                        className: n.navItemCommon
                    }, t.imgSrc && c.a.createElement("img", {
                        src: t.imgSrc,
                        className: n.iconLinkCommon,
                        alt: "".concat(t.title, " Icon")
                    }), c.a.createElement("span", null, c.a.createElement(H.ExternalContentRenderer, {
                        translatorType: E,
                        content: t.title,
                        contentDefaultLang: t.title,
                        contentOtherLang: t.titleSpanish,
                        locale: p,
                        defaultLang: "en"
                    }))) : c.a.createElement(Q.Link, {
                        to: t.link,
                        onClick: t.onClick,
                        key: t.id,
                        className: n.navItem
                    }, t.imgSrc && c.a.createElement("img", {
                        src: t.imgSrc,
                        className: n.iconLink,
                        alt: "".concat(t.title, " Icon")
                    }), t.showBadgeContent && 0 !== de && c.a.createElement(Ie, {
                        badgeContent: de,
                        color: "secondary"
                    }), c.a.createElement("span", null, t.title))
                },
                Ne = function(t) {
                    var n = e.classes,
                        a = e.features,
                        r = e.showExternalAlert;
                    return c.a.createElement(ve, {
                        features: a,
                        menuItems: t.menuItems,
                        key: t.id,
                        classes: n,
                        mainMenuItem: Le(t),
                        showExternalAlert: r,
                        isCommonHeader: g,
                        translatorType: E,
                        locale: p
                    })
                },
                Te = function(t) {
                    var n = e.classes,
                        a = c.a.createElement(te.a, {
                            button: !0,
                            onClick: function() {
                                return _e(t.id)
                            }
                        }, t.imgSrc && c.a.createElement("img", {
                            src: t.imgSrc,
                            className: n.iconLinkMobile,
                            alt: "".concat(t.title, " Icon")
                        }), c.a.createElement(ne.a, {
                            primary: t.title
                        }), c.a.createElement(ae.a, {
                            className: n.dropDownArrow
                        }, c.a.createElement(ie.a, {
                            htmlColor: fe.a.californiaNavIconBlue
                        })));
                    return g && (a = c.a.createElement(te.a, {
                        button: !0,
                        onClick: function() {
                            return _e(t.id)
                        }
                    }, t.imgSrc && c.a.createElement("img", {
                        src: Xe,
                        className: n.iconLinkMobile,
                        alt: "".concat(t.title, " Icon")
                    }), c.a.createElement(ne.a, {
                        primary: c.a.createElement(H.ExternalContentRenderer, {
                            translatorType: E,
                            content: t.title,
                            contentDefaultLang: t.title,
                            contentOtherLang: t.titleSpanish,
                            locale: p,
                            defaultLang: "en"
                        })
                    }), c.a.createElement(ae.a, {
                        className: n.dropDownArrow
                    }, c.a.createElement(ie.a, {
                        htmlColor: fe.a.magellanBlue
                    })))), c.a.createElement(l.Fragment, {
                        key: "".concat(t.id, "-template")
                    }, c.a.createElement(te.a, {
                        key: "".concat(t.id),
                        className: n.mobileNavItem
                    }, a), c.a.createElement(te.a, {
                        key: "".concat(t.id, "-dropdown-container"),
                        className: n.mobileNavItemDropdown
                    }, c.a.createElement(J.a, {
                        in: t.id === L,
                        timeout: "auto",
                        unmountOnExit: !0
                    }, c.a.createElement(ee.a, {
                        disablePadding: !0
                    }, t.menuItems.map((function(e) {
                        return ye(e)
                    }))))))
                },
                Se = function(t) {
                    var n = e.classes,
                        a = Je({}, t);
                    return a.onClick || (a.onClick = function() {
                        Oe(!1)()
                    }), null == a.link ? c.a.createElement(te.a, {
                        key: a.id,
                        onClick: a.onClick,
                        className: n.mobileNavItem
                    }, a.imgSrc && c.a.createElement("img", {
                        src: a.imgSrc,
                        className: n.iconLinkMobile,
                        alt: "".concat(a.title, " Icon")
                    }), c.a.createElement("span", null, a.title)) : Object(pe.e)(a.link) ? c.a.createElement(te.a, {
                        key: a.id,
                        className: n.mobileNavItem
                    }, c.a.createElement("a", {
                        href: a.link,
                        onClick: a.onClick,
                        target: a.target
                    }, a.imgSrc && c.a.createElement("img", {
                        src: a.imgSrc,
                        className: n.iconLinkMobile,
                        alt: "".concat(a.title, " Icon")
                    }), c.a.createElement("span", null, a.title))) : g ? c.a.createElement(te.a, {
                        onClick: a.onClick,
                        key: a.id,
                        className: n.mobileNavItem
                    }, c.a.createElement(Q.Link, {
                        to: a.link,
                        onClick: a.onClick
                    }, a.imgSrc && c.a.createElement("img", {
                        src: a.imgSrc,
                        className: n.iconLinkMobile,
                        alt: "".concat(a.title, " Icon")
                    }), c.a.createElement("span", null, c.a.createElement(H.ExternalContentRenderer, {
                        translatorType: E,
                        content: t.title,
                        contentDefaultLang: t.title,
                        contentOtherLang: t.titleSpanish,
                        locale: p,
                        defaultLang: "en"
                    })))) : c.a.createElement(te.a, {
                        key: a.id,
                        className: n.mobileNavItem
                    }, c.a.createElement(Q.Link, {
                        to: a.link,
                        onClick: a.onClick
                    }, a.imgSrc && c.a.createElement("img", {
                        src: a.imgSrc,
                        className: n.iconLinkMobile,
                        alt: "".concat(a.title, " Icon")
                    }), c.a.createElement("span", null, a.title), a.showMobileBadgeContent && 0 !== de && c.a.createElement(Pe, {
                        badgeContent: de,
                        color: "secondary"
                    })))
                },
                ye = function(t) {
                    var n = e.features,
                        a = e.featureDefinitions;
                    return t.feature ? c.a.createElement(se.a, {
                        userFeatures: n.readableFeatures,
                        featureDefinitions: a,
                        feature: t.feature,
                        key: "".concat(t.id, "-feature")
                    }, t.menuItems && t.menuItems.length > 0 ? Te(t) : Se(t)) : t.menuItems && t.menuItems.length > 0 ? Te(t) : Se(t)
                },
                Me = c.a.createElement(ee.a, {
                    className: n.list
                }, X.map((function(e) {
                    return ye(e)
                })));
            return c.a.createElement(l.Fragment, null, c.a.createElement("div", {
                className: n.mobileNav
            }, c.a.createElement(re.a, {
                className: n.menuButton,
                color: "inherit",
                "aria-label": "Menu",
                onClick: Oe(!0)
            }, c.a.createElement(ce.a, null)), c.a.createElement(Z.a, {
                open: O,
                onClose: Oe(!1),
                role: "navigation"
            }, Me)), c.a.createElement("div", {
                className: n.navLinkList
            }, 0 === X.length && c.a.createElement($.a, {
                className: n.loader
            }), X.map((function(t) {
                return function(t) {
                    var n = e.features,
                        a = e.featureDefinitions;
                    return t.feature ? c.a.createElement(se.a, {
                        userFeatures: n.readableFeatures,
                        featureDefinitions: a,
                        feature: t.feature,
                        key: t.id
                    }, t.menuItems && t.menuItems.length > 0 ? Ne(t) : Le(t)) : t.menuItems && t.menuItems.length > 0 ? Ne(t) : Le(t)
                }(t)
            }))))
        };
        Ze.propTypes = {
            authService: k.a.object,
            authState: k.a.object,
            classes: k.a.object.isRequired,
            clearLoggedInUserInfo: k.a.func,
            landingHeaderNavLinks: k.a.array,
            memberHeaderNavLinks: k.a.array,
            features: k.a.object,
            featureDefinitions: k.a.object,
            showExternalAlert: k.a.func,
            unreadCount: k.a.number,
            updateUnreadCount: k.a.func,
            webChatClose: k.a.func,
            searchBarOpen: k.a.bool,
            setSearchBarOpen: k.a.func,
            isCommonHeader: k.a.bool,
            locale: k.a.string,
            translatorType: k.a.string
        };
        var $e = Object(x.b)({
                unreadCount: de.d
            }),
            et = Object(g.withOktaAuth)(Object(d.c)($e, (function(e) {
                return {
                    clearLoggedInUserInfo: function() {
                        return e(Object(ue.a)())
                    },
                    updateUnreadCount: function() {
                        return e(Object(me.c)())
                    }
                }
            }))(Object(U.a)((function(e) {
                var t, n;
                return {
                    loader: {
                        width: "400px"
                    },
                    mobileNav: I()({
                        display: "none"
                    }, e.breakpoints.down("sm"), {
                        display: "block"
                    }),
                    navItem: (t = {
                        outline: "none",
                        border: "0",
                        cursor: "pointer",
                        padding: "0.9rem 0",
                        backgroundColor: "transparent",
                        fontSize: "1.4rem",
                        fontWeight: 400,
                        textDecoration: "none",
                        color: e.colors.links,
                        "&:hover": {
                            color: "#046b99",
                            textDecoration: "none"
                        }
                    }, I()(t, e.breakpoints.down("sm"), {
                        display: "none"
                    }), I()(t, "marginLeft", "3rem"), I()(t, "display", "flex"), I()(t, "flexFlow", "column"), I()(t, "justifyContent", "center"), I()(t, "textAlign", "center"), t),
                    navItemCommon: (n = {
                        outline: "none",
                        border: "0",
                        cursor: "pointer",
                        padding: "1rem 2rem",
                        backgroundColor: "transparent",
                        fontSize: "1.6rem",
                        fontWeight: 400,
                        textDecoration: "none",
                        color: e.palette.primary.main,
                        marginRight: "3rem",
                        display: "flex",
                        flexFlow: "row",
                        justifyContent: "center",
                        textAlign: "center",
                        alignItems: "center",
                        lineHeight: 0,
                        borderBottom: "3px solid transparent",
                        "&:hover": {
                            color: e.palette.primary.main,
                            textDecoration: "none",
                            borderBottom: "3px solid ".concat(e.palette.secondary.dark)
                        },
                        "&:active": {
                            borderBottom: "3px solid ".concat(e.palette.secondary.dark)
                        }
                    }, I()(n, e.breakpoints.down("sm"), {
                        display: "none"
                    }), I()(n, "& span", {
                        marginLeft: 7,
                        "& p": {
                            margin: 0
                        }
                    }), n),
                    navItemDropDown: {
                        display: "flex",
                        alignItems: "center"
                    },
                    list: {
                        width: 250
                    },
                    fullList: {
                        width: "auto"
                    },
                    menuItemLink: {
                        fontSize: "1.4rem"
                    },
                    menuItemLinkCommon: {
                        fontSize: "1.4rem",
                        "& p": {
                            margin: 0
                        }
                    },
                    mobileNavItem: {
                        color: e.colors.links,
                        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                        "& > div > span": {
                            fontSize: "1.4rem",
                            fontWeight: 400
                        },
                        "& > div > div > span": {
                            fontSize: "1.4rem",
                            fontWeight: 400
                        },
                        "&:hover": {
                            color: e.palette.primary.main,
                            backgroundColor: "transparent"
                        },
                        "& > a": {
                            display: "flex",
                            textAlign: "left",
                            alignItems: "center",
                            textDecoration: "none",
                            color: "#005198"
                        },
                        "& > .MuiListItem-gutters": {
                            padding: 0
                        }
                    },
                    mobileNavItemDropdown: {
                        color: e.colors.links,
                        padding: 0,
                        "&:hover": {
                            color: e.palette.primary.main,
                            backgroundColor: "transparent"
                        },
                        "& > .MuiCollapse-container.MuiCollapse-entered": {
                            width: "100%"
                        }
                    },
                    dropDownArrow: {
                        "&.MuiListItemIcon-root": {
                            minWidth: "auto"
                        }
                    },
                    dropdown: {
                        zIndex: 99
                    },
                    nested: {
                        "& > div > span": {
                            fontSize: "1.4rem",
                            color: e.colors.links
                        }
                    },
                    iconLink: {
                        display: "flex",
                        alignSelf: "center",
                        height: "3.5rem",
                        color: e.colors.links,
                        marginBottom: "0.5rem"
                    },
                    iconLinkCommon: {
                        display: "flex",
                        alignSelf: "center",
                        height: "2rem",
                        color: e.colors.links,
                        marginBottom: "0.5rem"
                    },
                    iconLinkMobile: {
                        display: "flex",
                        alignSelf: "center",
                        height: "2.5rem",
                        marginRight: "0.9rem",
                        color: e.colors.links
                    },
                    navLinkList: {
                        listStyle: "none",
                        display: "inline-flex",
                        "&.MuiList-padding": {
                            padding: 0
                        }
                    },
                    listLink: {
                        display: "flex",
                        flexFlow: "column",
                        justifyContent: "center"
                    }
                }
            }))(Ze))),
            tt = n.p + "images/a5cca9ef036270b7211c64756c4655d4-logo_cdph.png",
            nt = n(397),
            at = n(316),
            rt = function(e) {
                var t = e.toggleLanguage,
                    n = e.classes,
                    a = Object(l.useState)(null),
                    r = q()(a, 2),
                    o = r[0],
                    i = r[1],
                    s = Object(l.useState)("en"),
                    u = q()(s, 2),
                    d = u[0],
                    m = u[1],
                    f = function(e) {
                        i(null), m(e.target.id), t(e.target.id)
                    };
                return c.a.createElement(c.a.Fragment, null, c.a.createElement(at.a, {
                    "aria-owns": o ? "languageToggleMenu" : void 0,
                    "aria-haspopup": "true",
                    onClick: function(e) {
                        i(e.currentTarget)
                    },
                    className: n.langToggleButton
                }, "en" === d ? "English" : "Spanish", c.a.createElement(ie.a, null)), c.a.createElement(nt.a, {
                    id: "languageToggleMenu",
                    anchorEl: o,
                    open: Boolean(o),
                    onClose: function() {
                        i(null)
                    }
                }, c.a.createElement(Se.a, {
                    id: "en",
                    selected: "en" === d,
                    onClick: f,
                    className: n.langMenuItem
                }, "English"), c.a.createElement(Se.a, {
                    id: "es",
                    selected: "es" === d,
                    onClick: f,
                    className: n.langMenuItem
                }, "Spanish")))
            };
        rt.propTypes = {
            classes: k.a.object,
            toggleLanguage: k.a.func
        };
        var ot = Object(U.a)((function(e) {
                return {
                    langToggleButton: {
                        color: e.colors.links,
                        marginLeft: "0rem",
                        padding: "0px",
                        textTransform: "capitalize",
                        fontSize: "1.4rem",
                        marginBottom: "0px"
                    },
                    langMenuItem: {
                        fontSize: "1.4rem",
                        color: e.colors.links,
                        "& > a": {
                            color: e.colors.links,
                            textDecoration: "none"
                        },
                        "& > a:visited": {
                            color: e.colors.links
                        }
                    }
                }
            }))(rt),
            it = Object(V.defineMessages)({
                twitterUrl: {
                    id: "TWITTER_LINK_URL",
                    defaultMessage: "https://twitter.com/DHCS_CA"
                },
                linkedinUrl: {
                    id: "LINKEDIN_LINK_URL",
                    defaultMessage: "https://www.linkedin.com/company/california-department-of-health-care-services"
                },
                facebookUrl: {
                    id: "FACEBOOK_LINK_URL",
                    defaultMessage: "https://www.facebook.com/DHCS.CA"
                },
                governmentUrl: {
                    id: "GOVERNMENT_LINK_URL",
                    defaultMessage: "https://www.ca.gov/"
                },
                aboutUsUrl: {
                    id: "ABOUT_US_LINK_URL",
                    defaultMessage: "https://www.dhcs.ca.gov/Pages/AboutUs.aspx"
                },
                mainPortalLinkText: {
                    id: "MAIN_PORTAL",
                    defaultMessage: "Main Portal"
                },
                providerPortalLinkText: {
                    id: "PROVIDER",
                    defaultMessage: "Provider Portal"
                },
                providerPortalLinkHref: {
                    id: "PROVIDER_PORTAL_LINK_URL",
                    defaultMessage: "/provider"
                },
                beneficiaryPortalTitle: {
                    id: "BENEFICIARY_PORTAL_NAME",
                    defaultMessage: "Beneficiary Portal"
                },
                beneficiaryPortalUrl: {
                    id: "BENEFICIARY_PORTAL_LINK_URL",
                    defaultMessage: "/member"
                },
                portalDropDownText: {
                    id: "CA_HEADER_PORTAL_LINK_TEXT",
                    defaultMessage: "Secured Portal Access"
                },
                clientPortalLinkText: {
                    id: "CLIENT",
                    defaultMessage: "DHCS Portal"
                },
                clientPortalLinkHref: {
                    id: "CLIENT_PORTAL_LINK_URL",
                    defaultMessage: "https://magellanhealthsso.okta.com/"
                },
                healthPlanPortalTitle: {
                    id: "HEALTH_PLAN_PORTAL_LINK_TITLE",
                    defaultMessage: "Health Plan Portal"
                },
                healthPlanPortalUrl: {
                    id: "HEALTH_PLAN_PORTAL_LINK_URL",
                    defaultMessage: "https://magellanhealthsso.okta.com/"
                },
                contactUs: {
                    id: "CONTACT_US",
                    defaultMessage: "Contact Us"
                },
                aboutDhcs: {
                    id: "ABOUT_DHCS",
                    defaultMessage: "About DHCS"
                }
            }),
            lt = function(e) {
                var t = e.landingHeaderNavLinks,
                    n = e.memberHeaderNavLinks,
                    a = e.features,
                    r = e.toggleLanguage,
                    o = e.showExternalAlert,
                    i = e.classes,
                    l = e.hasLanguageDropdown,
                    s = e.isCommonHeader,
                    u = e.locale,
                    d = e.translatorType;
                return c.a.createElement("div", {
                    className: i.root
                }, c.a.createElement("div", {
                    className: i.utilityHeader
                }, c.a.createElement(Q.Link, {
                    to: "/home"
                }, c.a.createElement("img", {
                    src: tt,
                    alt: "Logo",
                    className: i.logo
                })), c.a.createElement("div", {
                    className: i.utilityLinksRight
                }, c.a.createElement("ul", {
                    className: i.utilityLinks
                }, c.a.createElement("li", null, c.a.createElement(Q.Link, {
                    to: "/home/contact",
                    className: i.navItem
                }, c.a.createElement(V.FormattedMessage, it.contactUs))), c.a.createElement("li", null, l() && c.a.createElement(ot, {
                    toggleLanguage: r
                }))))), c.a.createElement(X.a, {
                    className: i.navToolbar
                }, c.a.createElement(et, {
                    landingHeaderNavLinks: t,
                    memberHeaderNavLinks: n,
                    features: a,
                    showExternalAlert: o,
                    isCommonHeader: s,
                    locale: u,
                    translatorType: d
                })))
            };
        lt.propTypes = {
            staticContent: k.a.object,
            features: k.a.object,
            toggleLanguage: k.a.func,
            showExternalAlert: k.a.func,
            classes: k.a.object,
            landingHeaderNavLinks: k.a.array,
            memberHeaderNavLinks: k.a.array,
            hasLanguageDropdown: k.a.func,
            isCommonHeader: k.a.bool,
            locale: k.a.string,
            translatorType: k.a.string
        };
        var ct = Object(U.a)((function(e) {
                return {
                    root: {
                        flexGrow: 1
                    },
                    flex: {
                        flexGrow: 1,
                        fontSize: "2rem"
                    },
                    welcomeMsg: I()({}, e.breakpoints.down("xs"), {
                        display: "none"
                    }),
                    navAppBar: {
                        marginTop: "2rem"
                    },
                    navToolbar: I()({
                        justifyContent: "flex-start",
                        paddingLeft: "10rem",
                        paddingRight: "10rem",
                        minHeight: "55px",
                        marginTop: "1rem",
                        borderTop: "2px solid ".concat(e.colors.lightGray),
                        borderBottom: "2px solid ".concat(e.colors.lightGray),
                        boxShadow: "0px 2px 4px ".concat(e.colors.lightGray),
                        backgroundColor: e.colors.white
                    }, e.breakpoints.down("sm"), {
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                        justifyContent: "flex-end"
                    }),
                    navItem: {
                        fontSize: "1.4rem",
                        textDecoration: "none",
                        color: e.colors.links,
                        "&:hover": {
                            color: e.palette.primary.main
                        }
                    },
                    topNavBar: {
                        marginTop: "1rem",
                        justifyContent: "space-between"
                    },
                    menuButton: {
                        marginLeft: -12,
                        marginRight: 20
                    },
                    langToggleButton: {
                        color: fe.a.californiaLinkBlue,
                        marginLeft: "1rem",
                        padding: "0px",
                        textTransform: "none",
                        fontSize: "1.4rem",
                        marginBottom: "4px"
                    },
                    langMenuItem: {
                        fontSize: "1.4rem",
                        color: fe.a.californiaLinkBlue
                    },
                    utilityHeader: I()({
                        display: "flex",
                        justifyContent: "space-between",
                        paddingLeft: "10rem",
                        paddingRight: "10rem",
                        backgroundColor: e.colors.white,
                        minHeight: "4rem"
                    }, e.breakpoints.down("sm"), {
                        padding: "1rem"
                    }),
                    logo: {
                        width: "130px",
                        height: "auto"
                    },
                    utilityLinksRight: I()({
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center"
                    }, e.breakpoints.down("sm"), {
                        alignItems: "baseline"
                    }),
                    utilityLinks: {
                        paddingLeft: 0,
                        listStyle: "none",
                        margin: 0,
                        "& > li": I()({
                            display: "inline-flex",
                            padding: "0 8px",
                            color: "#fff"
                        }, e.breakpoints.down("xs"), {
                            padding: "0 8px 8px 8px"
                        }),
                        "& > li > a": {
                            color: e.colors.links,
                            textDecoration: "none",
                            "&:hover": {
                                color: e.palette.primary.main
                            }
                        }
                    }
                }
            }))(lt),
            st = n(840),
            ut = n.n(st),
            dt = n(841),
            mt = n.n(dt),
            ft = n(842),
            gt = n.n(ft),
            pt = n(839),
            Et = n.n(pt),
            ht = n.p + "images/c3164b28b77f9017130426f7320d4768-CA.svg",
            bt = n(671),
            Ot = n(311),
            _t = n.n(Ot),
            Ct = n(542),
            At = n.n(Ct),
            Lt = Object(V.defineMessages)({
                searchLabelTitle: {
                    id: "MEMBER_SEARCH_BOX_LABEL",
                    defaultMessage: "Search Medi-Cal Rx"
                },
                searchButton: {
                    id: "MEMBER_SEARCH_BUTTON_LABEL",
                    defaultMessage: "Search"
                },
                closeSearchBoxButton: {
                    id: "MEMBER_SEARCH_CLOSE_BUTTON_LABEL",
                    defaultMessage: "Close Search"
                }
            }),
            Nt = function(e) {
                var t = e.classes,
                    n = e.intl,
                    a = e.searchBarOpen,
                    r = e.setSearchBarOpen,
                    o = /q=(\w+)/.exec(window.location.search),
                    i = null !== o && o.length > 1 ? o[1] : "",
                    s = Object(l.useState)(i),
                    u = q()(s, 2),
                    d = u[0],
                    m = u[1];
                return a ? c.a.createElement("div", {
                    className: t.root
                }, c.a.createElement("form", {
                    method: "GET",
                    action: "/home/search",
                    className: t.searchForm
                }, c.a.createElement(bt.a, {
                    id: "site-search-box",
                    fullWidth: !0,
                    name: "q",
                    value: d,
                    onChange: function(e) {
                        return m(e.target.value)
                    },
                    label: n.formatMessage(Lt.searchLabelTitle),
                    variant: "outlined",
                    size: "small"
                }), c.a.createElement(re.a, {
                    type: "submit",
                    color: "primary",
                    className: t.iconSearch,
                    disabled: !(d && d.length > 0),
                    "aria-label": n.formatMessage(Lt.searchButton)
                }, c.a.createElement(At.a, null)), c.a.createElement(re.a, {
                    color: "primary",
                    className: t.closeSearch,
                    onClick: function() {
                        m(""), r(!1)
                    },
                    "aria-label": n.formatMessage(Lt.closeSearchBoxButton)
                }, c.a.createElement(_t.a, null)))) : null
            };
        Nt.propTypes = {
            classes: k.a.object,
            intl: V.intlShape,
            searchBarOpen: k.a.bool,
            setSearchBarOpen: k.a.func
        };
        var Tt = Object(V.injectIntl)(Object(U.a)((function(e) {
                var t;
                return {
                    root: (t = {
                        background: e.colors.gray,
                        display: "flex",
                        justifyContent: "center",
                        position: "absolute",
                        top: "150px",
                        width: "100%",
                        zIndex: "100"
                    }, I()(t, e.breakpoints.up("sm"), {
                        padding: "2rem 10%"
                    }), I()(t, e.breakpoints.down("xs"), {
                        padding: "2rem"
                    }), t),
                    searchForm: {
                        width: "100%",
                        display: "flex",
                        "& .MuiInputBase-root": {
                            background: e.colors.white
                        }
                    },
                    iconSearch: {
                        backgroundColor: "#17315A",
                        color: "#fff",
                        borderRadius: "0 5px 5px 0",
                        padding: "7px 10px",
                        marginLeft: "-2px",
                        border: "1px solid rgba(0,0,0,.87)",
                        "&:hover": {
                            backgroundColor: "#17315A"
                        },
                        "&.MuiIconButton-root.Mui-disabled": {
                            backgroundColor: "#17315A",
                            color: "#fff"
                        }
                    },
                    closeSearch: {
                        padding: "7px 10px"
                    }
                }
            }))(Nt)),
            St = n.p + "images/59bd3ec50a2cf7d3ac590f7efe915c05-Medi-Cal_Rx.svg",
            yt = n(395),
            Mt = n.n(yt),
            Rt = n(838),
            vt = n.n(Rt),
            wt = n(669),
            It = n(93),
            Pt = n(201),
            kt = Object(wt.a)((function(e) {
                return {
                    langToggleButton: {
                        marginLeft: "0rem",
                        padding: "0rem 0rem 0rem 0.9rem",
                        textTransform: "none",
                        fontSize: "1.4rem",
                        marginBottom: "1px",
                        background: "#FFFFFF",
                        "&:hover": {
                            background: "#FFFFFF"
                        }
                    },
                    langMenuItem: {
                        fontSize: "1.4rem",
                        color: fe.a.californiaLinkBlue
                    }
                }
            })),
            jt = function(e) {
                var t = e.language,
                    n = e.changeLanguage,
                    a = e.getLanguages,
                    r = e.languageAndCodes,
                    o = e.translateExclusions,
                    i = Object(l.useState)(null),
                    s = q()(i, 2),
                    u = s[0],
                    d = s[1],
                    m = Object(l.useState)(r),
                    f = q()(m, 2),
                    g = f[0],
                    p = f[1],
                    E = Object(l.useState)(t.locale),
                    h = q()(E, 2),
                    b = h[0],
                    O = h[1];
                Object(l.useEffect)((function() {
                    0 === g.length && a(b)
                }), []), Object(l.useEffect)((function() {
                    0 === g.length && o && (r = r.filter((function(e) {
                        return !o.includes(e.languageCode)
                    })), p(Mt()(r)))
                }), [r, o]), Object(l.useEffect)((function() {
                    O(t.locale)
                }), [t.locale]);
                var _ = function(e) {
                        n(e.target.id), d(null)
                    },
                    C = kt();
                return c.a.createElement(c.a.Fragment, null, c.a.createElement(at.a, {
                    "aria-owns": u ? "languageToggleMenu" : void 0,
                    "aria-haspopup": "true",
                    onClick: function(e) {
                        d(e.currentTarget)
                    },
                    className: C.langToggleButton
                }, 0 !== g.length && g.find((function(e) {
                    return e.languageCode === b
                })).displayName, c.a.createElement(vt.a, null)), c.a.createElement(nt.a, {
                    id: "languageToggleMenu",
                    anchorEl: u,
                    open: Boolean(u),
                    onClose: function() {
                        d(null)
                    }
                }, null == g ? void 0 : g.map((function(e, t) {
                    return c.a.createElement(Se.a, {
                        id: e.languageCode,
                        key: t,
                        selected: b === e.languageCode,
                        onClick: _,
                        className: C.langMenuItem
                    }, e.displayName)
                }))))
            };
        jt.propTypes = {
            language: k.a.object,
            changeLanguage: k.a.func,
            getLanguages: k.a.func,
            languageAndCodes: k.a.array,
            translateExclusions: k.a.array
        };
        var xt = Object(x.b)({
                language: It.c,
                languageAndCodes: It.a,
                translateExclusions: B.b
            }),
            Dt = Object(d.c)(xt, (function(e) {
                return {
                    changeLanguage: function(t) {
                        return e(Object(Pt.a)(t))
                    },
                    getLanguages: function() {
                        return e(Object(Pt.b)())
                    }
                }
            }))(jt),
            Ut = n.p + "images/734ca92551caf55a63f5fd4cd1d55d08-back-arrow.svg",
            Ft = function(e) {
                var t = e.classes,
                    n = e.intl,
                    a = e.features,
                    r = e.getLinkOnDialogOpen,
                    o = e.handleOpenLink,
                    i = e.portalAnchor,
                    l = e.setPortalAnchor,
                    s = function e() {
                        l(null), window.removeEventListener("scroll", e, !0)
                    };
                return c.a.createElement(c.a.Fragment, null, c.a.createElement(at.a, {
                    "aria-owns": i ? "portalMenu" : void 0,
                    "aria-haspopup": "true",
                    onClick: function(e) {
                        l(e.currentTarget), window.addEventListener("scroll", s, !0)
                    },
                    className: t.langToggleButton
                }, n.formatMessage(it.portalDropDownText), c.a.createElement(ie.a, null)), c.a.createElement(nt.a, {
                    id: "portalMenu",
                    anchorEl: i,
                    open: Boolean(i),
                    onClose: function() {
                        return l(null)
                    },
                    disableScrollLock: !0
                }, Object(ge.a)("BENEFICIARY_PORTAL_LINK", a.readableFeatures) && c.a.createElement(Se.a, {
                    id: "beneficiary",
                    onClick: function() {
                        return o("/member", "_blank", (function() {
                            return l(null)
                        }))
                    },
                    className: t.langMenuItem
                }, n.formatMessage(it.beneficiaryPortalTitle)), Object(ge.a)("PROVIDER_PORTAL_LINK", a.readableFeatures) && c.a.createElement(Se.a, {
                    id: "provider",
                    onClick: function() {
                        return o("/provider", "_blank", (function() {
                            return l(null)
                        }))
                    },
                    className: t.langMenuItem
                }, n.formatMessage(it.providerPortalLinkText)), Object(ge.a)("HEALTH_PLAN_PORTAL_LINK", a.readableFeatures) && c.a.createElement(Se.a, {
                    id: "health-plan-portal",
                    onClick: r(n.formatMessage(it.healthPlanPortalUrl)),
                    className: t.langMenuItem
                }, n.formatMessage(it.healthPlanPortalTitle)), Object(ge.a)("CLIENT_PORTAL_LINK", a.readableFeatures) && c.a.createElement(Se.a, {
                    id: "dhcs",
                    onClick: r(n.formatMessage(it.clientPortalLinkHref)),
                    className: t.langMenuItem
                }, n.formatMessage(it.clientPortalLinkText))))
            };
        Ft.propTypes = {
            classes: k.a.object,
            intl: V.intlShape.isRequired,
            features: k.a.object,
            getLinkOnDialogOpen: k.a.func,
            handleOpenLink: k.a.func,
            portalAnchor: k.a.object,
            setPortalAnchor: k.a.func
        };
        var Ht = Object(V.injectIntl)(Object(U.a)((function(e) {
                return {
                    utilityLinks: {
                        paddingLeft: 0,
                        listStyle: "none",
                        marginLeft: "-5px",
                        marginBottom: 0,
                        "& > li": {
                            display: "inline-flex",
                            padding: "0 8px",
                            color: "#fff"
                        },
                        "& > li > a": {
                            color: "#fff",
                            textDecoration: "none",
                            "&:hover": {
                                color: fe.a.californiaYellow
                            }
                        }
                    },
                    langToggleButton: {
                        color: "#FFFFFF",
                        marginLeft: "0rem",
                        padding: "0px",
                        textTransform: "none",
                        fontSize: "1.4rem",
                        marginBottom: "0px"
                    },
                    langMenuItem: {
                        fontSize: "1.4rem",
                        color: e.colors.links,
                        "& > a": {
                            color: e.colors.links,
                            textDecoration: "none"
                        },
                        "& > a:visited": {
                            color: e.colors.links
                        }
                    }
                }
            }))(Ft)),
            Bt = n(533),
            Gt = n(534),
            Yt = n(532),
            zt = n(1447),
            Wt = n(531),
            Kt = Object(V.defineMessages)({
                alertWarningTitle: {
                    id: "ALERT_WARNING_TITLE",
                    defaultMessage: "Warning"
                },
                warningPartOne: {
                    id: "LOGIN_WARNING_PART_ONE",
                    defaultMessage: "This computer system is for official use by authorized users and may be monitored and/or restricted at any time. Confidential information may not be accessed or used without authorization. Unauthorized or improper use of this system may result in administrative discipline, civil and/or criminal penalties. By using this system, you are acknowledging and consenting to these terms and conditions."
                },
                warningLogOff: {
                    id: "LOGIN_WARNING_LOG_OFF",
                    defaultMessage: "LOG OFF IMMEDIATELY"
                },
                warningPartTwo: {
                    id: "LOGIN_WARNING_PART_TWO",
                    defaultMessage: "if you are not an authorized user or do not agree to the conditions in this warning."
                },
                alertWarningButtonSecondaryText: {
                    id: "ALERT_WARNING_BUTTON_SECONDARY_TEXT",
                    defaultMessage: "Cancel"
                },
                alertWarningButtonPrimaryText: {
                    id: "ALERT_WARNING_BUTTON_PRIMARY_TEXT",
                    defaultMessage: "Agree"
                }
            }),
            qt = function(e) {
                var t = e.open,
                    n = e.handleClose,
                    a = e.variant,
                    r = e.buttonLink,
                    o = e.classes,
                    i = e.intl;
                return c.a.createElement("div", null, c.a.createElement(Bt.a, {
                    open: t,
                    onClose: n(),
                    disablePortal: !0,
                    "aria-labelledby": "alert-warning-title",
                    "aria-describedby": "alert-warning-description"
                }, c.a.createElement(Wt.a, {
                    id: "alert-warning-title"
                }, i.formatMessage(Kt.alertWarningTitle)), c.a.createElement(Yt.a, null, c.a.createElement(zt.a, {
                    id: "alert-warning-description",
                    className: o.dialogContentText
                }, i.formatMessage(Kt.warningPartOne), c.a.createElement("strong", null, i.formatMessage(Kt.warningLogOff)), i.formatMessage(Kt.warningPartTwo))), c.a.createElement(Gt.a, null, c.a.createElement(at.a, {
                    onClick: n(),
                    color: "primary"
                }, i.formatMessage(Kt.alertWarningButtonSecondaryText)), c.a.createElement(at.a, {
                    component: "a",
                    target: "_blank",
                    href: r,
                    onClick: n(),
                    color: "primary",
                    variant: a
                }, i.formatMessage(Kt.alertWarningButtonPrimaryText)))))
            };
        qt.propTypes = {
            classes: k.a.object,
            open: k.a.bool.isRequired,
            handleClose: k.a.func,
            variant: k.a.string,
            buttonLink: k.a.string,
            intl: V.intlShape.isRequired
        };
        var Vt = Object(V.injectIntl)(Object(U.a)((function(e) {
                return {
                    dialogContentText: {
                        "& strong": {
                            margin: "0 5px",
                            color: fe.a.magellanBlack
                        }
                    }
                }
            }))(qt)),
            Xt = function(e) {
                var t = e.landingHeaderNavLinks,
                    n = e.memberHeaderNavLinks,
                    a = e.features,
                    r = e.toggleLanguage,
                    o = e.showExternalAlert,
                    i = e.intl,
                    s = e.classes,
                    u = e.webChatClose,
                    d = e.authState,
                    m = e.searchBarOpen,
                    f = e.setSearchBarOpen,
                    g = e.hasPortalLinksDropdown,
                    p = e.hasLanguageDropdown,
                    E = e.hasGoogleTranslate,
                    h = Object(l.useState)(null),
                    b = q()(h, 2),
                    O = b[0],
                    _ = b[1],
                    C = Object(l.useState)(null),
                    A = q()(C, 2),
                    L = A[0],
                    N = A[1],
                    T = Object(l.useState)("en"),
                    S = q()(T, 2),
                    y = S[0],
                    M = S[1],
                    R = Object(l.useState)(!1),
                    v = q()(R, 2),
                    w = v[0],
                    I = v[1],
                    P = Object(l.useState)(null),
                    k = q()(P, 2),
                    j = k[0],
                    x = k[1],
                    D = function(e) {
                        r(e.target.id), N(null), M(e.target.id)
                    };
                return c.a.createElement("div", {
                    className: s.root
                }, c.a.createElement(Vt, {
                    open: w,
                    handleClose: function() {
                        return function() {
                            I(!1)
                        }
                    },
                    buttonLink: j,
                    variant: "contained"
                }), c.a.createElement("div", {
                    className: s.utilityHeader
                }, !d.isAuthenticated && c.a.createElement("div", {
                    className: s.utilityLinksLeft
                }, c.a.createElement("ul", {
                    className: s.utilityLinks
                }, c.a.createElement("li", null, c.a.createElement("a", {
                    href: i.formatMessage(it.governmentUrl),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": "CA.gov",
                    title: "CA.gov"
                }, c.a.createElement("img", {
                    src: ht,
                    className: s.govLogo,
                    alt: "CA Gov Logo"
                }))), c.a.createElement("li", null, c.a.createElement(re.a, {
                    className: s.socialIcons,
                    "aria-label": "Home",
                    component: "a",
                    title: "Home",
                    href: Object(pe.c)() ? "/home" : "/member",
                    alt: "Home",
                    tabIndex: "0"
                }, c.a.createElement(Et.a, null))), c.a.createElement("li", null, c.a.createElement(re.a, {
                    className: s.socialIcons,
                    "aria-label": "Facebook channel",
                    component: "a",
                    title: "Facebook channel",
                    alt: "Facebook channel",
                    tabIndex: "0",
                    onClick: function() {
                        return o(!0, i.formatMessage(it.facebookUrl))
                    }
                }, c.a.createElement(ut.a, null))), c.a.createElement("li", null, c.a.createElement(re.a, {
                    className: s.socialIcons,
                    "aria-label": "Twitter channel",
                    component: "a",
                    title: "Twitter channel",
                    alt: "Twitter channel",
                    tabIndex: "0",
                    onClick: function() {
                        return o(!0, i.formatMessage(it.twitterUrl))
                    }
                }, c.a.createElement(mt.a, null))), c.a.createElement("li", null, c.a.createElement(re.a, {
                    className: s.socialIcons,
                    "aria-label": "Linkedin channel",
                    component: "a",
                    title: "Linkedin channel",
                    alt: "Linkedin channel",
                    tabIndex: "0",
                    onClick: function() {
                        return o(!0, i.formatMessage(it.linkedinUrl))
                    }
                }, c.a.createElement(gt.a, null))))), c.a.createElement("div", {
                    className: s.utilityLinksRight
                }, c.a.createElement("ul", {
                    className: s.utilityLinks
                }, Object(pe.d)() && !d.isAuthenticated && c.a.createElement("li", null, c.a.createElement("a", {
                    href: "/home"
                }, c.a.createElement("img", {
                    src: Ut,
                    alt: "Back Arrow Icon",
                    className: s.backArrowIcon
                }), c.a.createElement("strong", null, i.formatMessage(it.mainPortalLinkText)))), Object(pe.c)() && g() && c.a.createElement("li", null, c.a.createElement(Ht, {
                    handleOpenLink: function(e, t, n) {
                        n && n(), window.open(e, t)
                    },
                    portalAnchor: O,
                    setPortalAnchor: _,
                    hasFeature: ge.a,
                    getLinkOnDialogOpen: function(e) {
                        return function() {
                            I(!0), _(null), x(e)
                        }
                    },
                    features: a
                })), Object(pe.c)() && c.a.createElement("li", null, c.a.createElement("a", {
                    href: i.formatMessage(it.aboutUsUrl),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": "About DHCS",
                    title: "About DHCS"
                }, i.formatMessage(it.aboutDhcs))), Object(pe.c)() ? Object(ge.a)("LANDING_PAGE_NEW_CONTACT_US", a.readableFeatures) && c.a.createElement("li", null, c.a.createElement(Q.Link, {
                    to: "/home/contact"
                }, i.formatMessage(it.contactUs))) : d.isAuthenticated ? Object(ge.a)("MEMBER_HEADER_CONTACT_US", a.readableFeatures) && c.a.createElement("li", null, c.a.createElement(Q.Link, {
                    to: "/member/contact"
                }, i.formatMessage(it.contactUs))) : Object(ge.a)("MEMBER_UNSEC_HEADER_CONTACT_US", a.readableFeatures) && c.a.createElement("li", null, c.a.createElement(Q.Link, {
                    to: "/member/contact"
                }, i.formatMessage(it.contactUs))), E() && c.a.createElement("li", null, c.a.createElement(Dt, null)), p() && c.a.createElement("li", null, c.a.createElement(c.a.Fragment, null, c.a.createElement(at.a, {
                    "aria-owns": L ? "languageToggleMenu" : void 0,
                    "aria-haspopup": "true",
                    onClick: function(e) {
                        N(e.currentTarget)
                    },
                    className: s.langToggleButton
                }, "en" === y ? "English" : "Spanish", c.a.createElement(ie.a, null)), c.a.createElement(nt.a, {
                    id: "languageToggleMenu",
                    anchorEl: L,
                    open: Boolean(L),
                    onClose: function() {
                        N(null)
                    }
                }, c.a.createElement(Se.a, {
                    id: "en",
                    selected: "en" === y,
                    onClick: D,
                    className: s.langMenuItem
                }, "English"), c.a.createElement(Se.a, {
                    id: "es",
                    selected: "es" === y,
                    onClick: D,
                    className: s.langMenuItem
                }, "Spanish"))))))), c.a.createElement(X.a, {
                    className: s.topNavBar
                }, c.a.createElement(Q.Link, {
                    to: Object(pe.d)() ? "/member" : "/home"
                }, c.a.createElement("img", {
                    src: St,
                    alt: "Logo for ".concat(a.clientCode),
                    className: s.logo
                })), c.a.createElement("div", {
                    className: s.headerLinks
                }, c.a.createElement(et, {
                    landingHeaderNavLinks: t,
                    memberHeaderNavLinks: n,
                    features: a,
                    webChatClose: function() {
                        return u()
                    },
                    showExternalAlert: o,
                    searchBarOpen: m,
                    setSearchBarOpen: f
                }))), c.a.createElement(Tt, {
                    searchBarOpen: m,
                    setSearchBarOpen: f
                }))
            };
        Xt.propTypes = {
            authState: k.a.object,
            headerLogo: k.a.string,
            landingHeaderNavLinks: k.a.array,
            memberHeaderNavLinks: k.a.array,
            features: k.a.object,
            toggleLanguage: k.a.func,
            showExternalAlert: k.a.func,
            intl: V.intlShape.isRequired,
            classes: k.a.object,
            webChatClose: k.a.func,
            searchBarOpen: k.a.bool,
            setSearchBarOpen: k.a.func,
            hasPortalLinksDropdown: k.a.func,
            hasLanguageDropdown: k.a.func,
            hasGoogleTranslate: k.a.func
        };
        var Qt = Object(g.withOktaAuth)(Object(U.a)((function(e) {
            var t, n;
            return {
                root: {
                    flexGrow: 1
                },
                flex: {
                    flexGrow: 1,
                    fontSize: "2rem"
                },
                welcomeMsg: I()({}, e.breakpoints.down("xs"), {
                    display: "none"
                }),
                navAppBar: {
                    marginTop: "2rem"
                },
                navToolbar: I()({
                    justifyContent: "flex-start",
                    minHeight: "5rem",
                    backgroundColor: fe.a.magellanWhite,
                    color: fe.a.californiaBlue
                }, e.breakpoints.down("xs"), {
                    justifyContent: "flex-start"
                }),
                navItem: I()({
                    fontSize: "1.4rem",
                    textDecoration: "none",
                    color: fe.a.californiaLinkBlue,
                    "&:hover": {
                        color: fe.a.magellanMediumOrange
                    }
                }, e.breakpoints.down("xs"), {
                    display: "none"
                }),
                topNavBar: (t = {
                    marginTop: "1rem",
                    justifyContent: "space-between",
                    borderBottom: "5px solid ".concat(fe.a.californiaMagenta),
                    paddingLeft: "10rem",
                    paddingRight: "10rem"
                }, I()(t, e.breakpoints.down("sm"), {
                    paddingLeft: "2rem",
                    paddingRight: "2rem"
                }), I()(t, e.breakpoints.down("xs"), {
                    padding: "0 2rem"
                }), t),
                menuButton: {
                    marginLeft: -12,
                    marginRight: 20
                },
                langToggleButton: {
                    color: "#FFFFFF",
                    marginLeft: "0rem",
                    padding: "0px",
                    textTransform: "none",
                    fontSize: "1.4rem",
                    marginBottom: "0px"
                },
                langMenuItem: {
                    fontSize: "1.4rem",
                    color: e.colors.links
                },
                logo: I()({
                    width: "350px",
                    height: "auto"
                }, e.breakpoints.down("xs"), {
                    width: "200px"
                }),
                utilityHeader: (n = {
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: "10rem",
                    paddingRight: "10rem",
                    backgroundColor: fe.a.californiaBlue,
                    minHeight: "4rem"
                }, I()(n, e.breakpoints.down("sm"), {
                    paddingLeft: "2rem",
                    paddingRight: "2rem"
                }), I()(n, e.breakpoints.down("xs"), {
                    padding: "0 2rem"
                }), n),
                utilityLinks: {
                    paddingLeft: 0,
                    listStyle: "none",
                    marginLeft: "-5px",
                    marginBottom: 0,
                    "& > li": I()({
                        display: "inline-flex",
                        padding: "0 8px",
                        color: "#fff"
                    }, e.breakpoints.down("xs"), {
                        padding: "0 8px 8px 8px"
                    }),
                    "& > li > a": {
                        color: "#fff",
                        textDecoration: "none",
                        "&:hover": {
                            color: fe.a.californiaYellow
                        }
                    }
                },
                utilityLinksLeft: I()({
                    width: "50%",
                    display: "flex",
                    justifyContent: "start"
                }, e.breakpoints.down("xs"), {
                    display: "none"
                }),
                utilityLinksRight: I()({
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center"
                }, e.breakpoints.down("xs"), {
                    justifyContent: "flex-start"
                }),
                socialIcons: I()({
                    color: "#ffffff",
                    fontSize: "1.8rem",
                    padding: "1px",
                    "&:hover": {
                        color: fe.a.californiaYellow
                    }
                }, e.breakpoints.down("xs"), {
                    display: "none"
                }),
                govLogo: {
                    height: "3.2rem"
                },
                backArrowIcon: {
                    height: "16px",
                    width: "auto"
                }
            }
        }))(Xt));

        function Jt(e) {
            var t = e.features,
                n = e.headerLogo,
                a = e.landingHeaderNavLinks,
                r = e.memberHeaderNavLinks,
                o = e.showExternalAlert,
                i = e.toggleLanguage,
                s = e.staticContent,
                u = e.intl,
                d = e.searchBarOpen,
                m = e.setSearchBarOpen,
                f = e.webChatClose,
                g = e.locale,
                p = e.translatorType,
                E = Object(l.useState)(null == t ? void 0 : t.clientCode),
                h = q()(E, 2),
                b = h[0],
                O = h[1],
                _ = t.readableFeatures;
            Object(l.useEffect)((function() {
                O(t.clientCode)
            }), [t.clientCode]);
            var C = function() {
                switch (b) {
                    case "medicalrx":
                        return Qt;
                    default:
                        return ct
                }
            }();
            return c.a.createElement(C, {
                features: t,
                headerLogo: n,
                landingHeaderNavLinks: a,
                memberHeaderNavLinks: r,
                staticContent: s,
                showExternalAlert: o,
                toggleLanguage: i,
                intl: u,
                searchBarOpen: d,
                setSearchBarOpen: m,
                webChatClose: function() {
                    return f()
                },
                hasPortalLinksDropdown: function() {
                    return !!(Object(ge.a)("BENEFICIARY_PORTAL_LINK", _) || Object(ge.a)("PROVIDER_PORTAL_LINK", _) || Object(ge.a)("CLIENT_PORTAL_LINK", _) || Object(ge.a)("HEALTH_PLAN_PORTAL_LINK", _))
                },
                hasLanguageDropdown: function() {
                    return !(!Object(ge.a)("MEMBER_HEADER_LANGUAGE", _) && !Object(ge.a)("MEMBER_UNSEC_HEADER_LANGUAGE", _))
                },
                hasGoogleTranslate: function() {
                    return !!(Object(ge.a)("CLIENT_GOOGLE_TRANSLATE", _) && Object(pe.c)() || Object(ge.a)("MEMBER_GOOGLE_TRANSLATE", _) && Object(pe.d)())
                },
                isCommonHeader: "medicalrx" !== b,
                locale: g,
                translatorType: p
            })
        }
        Jt.propTypes = {
            features: k.a.object,
            headerLogo: k.a.string,
            landingHeaderNavLinks: k.a.array,
            memberHeaderNavLinks: k.a.array,
            showExternalAlert: k.a.func,
            toggleLanguage: k.a.func,
            location: k.a.object,
            staticContent: k.a.object,
            intl: V.intlShape.isRequired,
            searchBarOpen: k.a.bool,
            setSearchBarOpen: k.a.func,
            webChatClose: k.a.func,
            locale: k.a.string,
            translatorType: k.a.string
        };
        var Zt = Object(V.injectIntl)(Jt),
            $t = n(1463),
            en = n(118),
            tn = n.n(en),
            nn = n(145),
            an = n.n(nn),
            rn = n(494),
            on = n.n(rn),
            ln = n(795),
            cn = n.n(ln),
            sn = n(796),
            un = n.n(sn),
            dn = n(536),
            mn = n.n(dn),
            fn = n(843),
            gn = n.n(fn),
            pn = n(1449),
            En = n(486),
            hn = n.n(En);

        function bn(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = v()(e);
                if (t) {
                    var r = v()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return M()(this, n)
            }
        }
        var On = {
                success: on.a,
                warning: hn.a,
                error: cn.a,
                info: un.a
            },
            _n = function(e) {
                S()(n, e);
                var t = bn(n);

                function n() {
                    return _()(this, n), t.apply(this, arguments)
                }
                return A()(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.classes,
                            n = e.className,
                            a = e.message,
                            r = e.onClose,
                            o = e.variant,
                            i = tn()(e, ["classes", "className", "message", "onClose", "variant"]),
                            l = On[o];
                        return c.a.createElement(pn.a, he()({
                            className: an()(t[o], n),
                            "aria-describedby": "client-snackbar",
                            message: c.a.createElement("span", {
                                id: "client-snackbar",
                                className: t.message
                            }, c.a.createElement(l, {
                                className: an()(t.icon, t.iconVariant)
                            }), a),
                            action: [c.a.createElement(re.a, {
                                key: "close",
                                "aria-label": "Close",
                                color: "inherit",
                                className: t.close,
                                onClick: r
                            }, c.a.createElement(_t.a, {
                                className: t.icon
                            }))]
                        }, i))
                    }
                }]), n
            }(c.a.Component);
        _n.propTypes = {
            classes: k.a.object.isRequired,
            className: k.a.string,
            message: k.a.node,
            onClose: k.a.func,
            variant: k.a.oneOf(["success", "warning", "error", "info"]).isRequired
        };
        var Cn = Object(U.a)((function(e) {
            return {
                success: {
                    backgroundColor: mn.a[600]
                },
                error: {
                    backgroundColor: e.palette.error.dark
                },
                info: {
                    backgroundColor: e.palette.primary.dark
                },
                warning: {
                    backgroundColor: gn.a[700]
                },
                icon: {
                    fontSize: 20
                },
                iconVariant: {
                    opacity: .9,
                    marginRight: e.spacing(1)
                },
                message: {
                    display: "flex",
                    alignItems: "center"
                }
            }
        }))(_n);

        function An(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = v()(e);
                if (t) {
                    var r = v()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return M()(this, n)
            }
        }
        var Ln = function(e) {
            S()(n, e);
            var t = An(n);

            function n() {
                var e;
                _()(this, n);
                for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
                return e = t.call.apply(t, [this].concat(r)), I()(N()(e), "state", {
                    open: !1
                }), I()(N()(e), "handleClick", (function() {
                    e.setState({
                        open: !0
                    })
                })), I()(N()(e), "handleClose", (function(t, n) {
                    "clickaway" !== n && (e.props.onClose(!1, null), e.setState({
                        open: !1
                    }))
                })), e
            }
            return A()(n, [{
                key: "componentDidUpdate",
                value: function(e) {
                    this.props.isOpen !== e.isOpen && this.setState({
                        open: this.props.isOpen
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.classes,
                        n = e.status;
                    return c.a.createElement("div", null, c.a.createElement($t.a, {
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "center"
                        },
                        open: this.state.open,
                        autoHideDuration: 1e4,
                        onClose: this.handleClose
                    }, c.a.createElement(Cn, {
                        variant: "error",
                        className: t.margin,
                        message: "An error has occured. Please try again. (".concat(n, ")"),
                        onClose: this.handleClose
                    })))
                }
            }]), n
        }(c.a.Component);
        Ln.propTypes = {
            classes: k.a.object.isRequired,
            isOpen: k.a.bool,
            status: k.a.number,
            onClose: k.a.func
        };
        var Nn = Object(U.a)((function(e) {
                return {
                    margin: {
                        margin: e.spacing(1)
                    }
                }
            }))(Ln),
            Tn = function(e) {
                return {
                    footer: {
                        flexShrink: 0,
                        padding: "1rem",
                        backgroundColor: e.palette.primary.dark,
                        color: fe.a.magellanWhite,
                        fontSize: "1.4rem"
                    },
                    link: {
                        padding: 0,
                        textTransform: "none",
                        textDecoration: "underline",
                        "& :hover": {
                            textDecoration: "underline",
                            color: fe.a.californiaYellow
                        }
                    },
                    flexRowOrColumn: I()({
                        display: "flex",
                        flexDirection: "row"
                    }, e.breakpoints.down("xs"), {
                        flexDirection: "column"
                    }),
                    listInline: I()({
                        width: "50%",
                        paddingLeft: 0,
                        listStyle: "none",
                        "& > li": {
                            display: "inline-block",
                            paddingRight: "5px",
                            paddingLeft: "5px",
                            "& button": {
                                fontSize: "1.3rem"
                            }
                        }
                    }, e.breakpoints.down("xs"), {
                        width: "100%"
                    }),
                    buttonLink: {
                        borderColor: "transparent",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        color: e.colors.white
                    },
                    footerLogoWrapper: I()({
                        display: "flex",
                        justifyContent: "flex-end",
                        width: "50%"
                    }, e.breakpoints.down("xs"), {
                        width: "100%",
                        justifyContent: "flex-start"
                    }),
                    copyright: I()({
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        width: "50%"
                    }, e.breakpoints.down("xs"), {
                        width: "100%",
                        justifyContent: "flex-start"
                    }),
                    footerLinks: {
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        "& ul": I()({
                            paddingLeft: "5px",
                            display: "flex",
                            flexFlow: "wrap",
                            justifyContent: "start",
                            listStyle: "none"
                        }, e.breakpoints.down("sm"), {
                            paddingLeft: "5px",
                            justifyContent: "start"
                        }),
                        "& ul > li": {
                            marginRight: "2rem"
                        },
                        "& ul > li > a": {
                            color: fe.a.magellanWhite,
                            whiteSpace: "nowrap"
                        },
                        "& ul > li > a > span": {
                            paddingLeft: 0,
                            color: fe.a.magellanWhite
                        },
                        "& span": I()({
                            paddingLeft: "4rem"
                        }, e.breakpoints.down("sm"), {
                            paddingLeft: "0rem"
                        })
                    },
                    footerLanguageLinks: {
                        padding: "1rem",
                        display: "flex",
                        alignItems: "center",
                        "& ul": I()({
                            paddingLeft: "0px",
                            display: "flex",
                            flexFlow: "wrap",
                            justifyContent: "flex-start",
                            listStyle: "none"
                        }, e.breakpoints.down("sm"), {
                            paddingLeft: "0rem",
                            width: "100%"
                        }),
                        "& ul > li": {
                            marginRight: "1rem",
                            color: fe.a.magellanDarkBlue
                        },
                        "& ul > li > a": {
                            color: fe.a.magellanWhite,
                            whiteSpace: "nowrap"
                        },
                        "& ul > li > a > span": {
                            paddingLeft: 0,
                            color: fe.a.magellanWhite
                        },
                        "& span": I()({
                            paddingLeft: "4rem"
                        }, e.breakpoints.down("sm"), {
                            paddingLeft: "0rem"
                        })
                    },
                    footerLanguageAccessLinks: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        padding: "3rem 0 0 1.5rem",
                        "& a": {
                            color: fe.a.magellanWhite
                        },
                        "& a:nth-child(1)": {
                            fontWeight: "bold",
                            marginBottom: "1rem"
                        }
                    },
                    footerCopyright: I()({
                        display: "flex",
                        flexDirection: "row",
                        flexFlow: "wrap",
                        justifyContent: "space-between",
                        paddingRight: "4rem",
                        flexGrow: 1
                    }, e.breakpoints.down("sm"), {
                        paddingTop: "1rem"
                    }),
                    footerBottom: {
                        backgroundColor: fe.a.magellan80Black,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        padding: "1rem",
                        color: fe.a.magellanWhite,
                        borderTop: "1px solid ".concat(fe.a.magellan60Black)
                    },
                    footerBottomLinks: {
                        "& ul": I()({
                            margin: 0,
                            paddingLeft: "5px",
                            flexDirection: "row",
                            display: "flex",
                            flexFlow: "wrap",
                            justifyContent: "flex-start",
                            listStyle: "none"
                        }, e.breakpoints.down("sm"), {
                            paddingLeft: "5px",
                            justifyContent: "start"
                        }),
                        "& ul > li": {
                            marginRight: "2rem"
                        },
                        "& ul > li > a": {
                            color: fe.a.magellanWhite,
                            whiteSpace: "nowrap"
                        },
                        "& ul > li > a:hover": {
                            color: fe.a.californiaYellow
                        },
                        "& ul > li > a > span": {
                            paddingLeft: 0,
                            color: fe.a.magellanWhite
                        },
                        "& span": I()({
                            paddingLeft: "4rem"
                        }, e.breakpoints.down("sm"), {
                            paddingLeft: "0rem"
                        })
                    },
                    footerBottomLink: {
                        padding: 0,
                        fontWeight: "bold",
                        textTransform: "none",
                        textDecoration: "none",
                        "& :hover": {
                            textDecoration: "underline",
                            color: fe.a.californiaYellow
                        }
                    },
                    muiButton: {
                        padding: 0,
                        color: fe.a.magellanWhite,
                        fontWeight: "bold",
                        textTransform: "none",
                        textDecoration: "none",
                        "& :hover": {
                            textDecoration: "underline",
                            color: fe.a.californiaYellow
                        },
                        "& span": {
                            paddingLeft: "0rem"
                        }
                    },
                    alertSpan: {
                        paddingLeft: "0rem"
                    },
                    title: {
                        textAlign: "center",
                        color: fe.a.californiaBlue
                    },
                    dialog: {
                        justifyContent: "center"
                    },
                    dialogContent: {
                        color: fe.a.magellanBlack
                    }
                }
            },
            Sn = Object(V.defineMessages)({
                footerCopyright: {
                    id: "FOOTER_COPYRIGHT_TEXT",
                    defaultMessage: "DHCS, Inc All Rights Reserved"
                },
                footerLogoAltText: {
                    id: "FOOTER_LOGO_ALT_TEXT",
                    defaultMessage: "DMAS Logo"
                },
                privacyPolicy: {
                    id: "COMMERCIAL_FOOTER_PRIVACY_POLICY",
                    defaultMessage: "Privacy Policy"
                },
                termsOfUse: {
                    id: "COMMERCIAL_FOOTER_TERMS_OF_USE",
                    defaultMessage: "Terms of Use"
                },
                disclaimer: {
                    id: "COMMERCIAL_FOOTER_DISCLAIMER",
                    defaultMessage: "Disclaimer"
                },
                nondiscrimination: {
                    id: "COMMERCIAL_FOOTER_NONDISCRIMINATION",
                    defaultMessage: "Nondiscrimination"
                },
                footerCopyrightYear: {
                    id: "COMMERCIAL_FOOTER_COPYRIGHT_YEAR",
                    defaultMessage: "1999-2018"
                },
                footerCopyrightMagellanLink: {
                    id: "COMMERCIAL_FOOTER_COPYRIGHT_MAGELLAN_LINK",
                    defaultMessage: "Magellan Health, Inc."
                },
                footerCopyrightRightsReserved: {
                    id: "COMMERCIAL_FOOTER_COPYRIGHT_RIGHTS_RESERVED",
                    defaultMessage: "All Rights Reserved"
                },
                footerLanguageNondiscrimination: {
                    id: "NONDISCRIMINATION",
                    defaultMessage: "Non-Discrimination Policy and Language Access"
                },
                footerLanguageNondiscriminationUrl: {
                    id: "NONDISCRIMINATION_LINK_URL",
                    defaultMessage: "https://www.dhcs.ca.gov/Pages/Language_Access.aspx"
                },
                footerLanguageAssistance: {
                    id: "LANGUAGE_ASSISTANCE",
                    defaultMessage: "Health Care Language Assistance Services (SB 223)"
                },
                footerLanguageAssistanceUrl: {
                    id: "MRX_LANGUAGE_ASSISTANCE_LINK_URL",
                    defaultMessage: "https://www.dhcs.ca.gov/Pages/Health_Care_Language_Assistance_Services.aspx"
                },
                footerNondiscriminationUrl: {
                    id: "NONDISCRIMINATION_LANGUAGES_LINK",
                    defaultMessage: "https://www1.magellanrx.com/nondiscrimination-languages/"
                },
                footerNondiscriminationChineseUrl: {
                    id: "NONDISCRIMINATION_LANGUAGES_LINK",
                    defaultMessage: "https://www1.magellanrx.com/nondiscrimination-languages/#Chinese"
                },
                footerNondiscriminationVietnameseUrl: {
                    id: "NONDISCRIMINATION_LANGUAGES_LINK",
                    defaultMessage: "https://www1.magellanrx.com/nondiscrimination-languages/#Vietnamese"
                },
                footerNondiscriminationKoreanUrl: {
                    id: "NONDISCRIMINATION_LANGUAGES_LINK",
                    defaultMessage: "https://www1.magellanrx.com/nondiscrimination-languages/#Korean"
                },
                footerNondiscriminationRussianUrl: {
                    id: "NONDISCRIMINATION_LANGUAGES_LINK",
                    defaultMessage: "https://www1.magellanrx.com/nondiscrimination-languages/#Russian"
                },
                footerNondiscriminationArabicUrl: {
                    id: "NONDISCRIMINATION_LANGUAGES_LINK",
                    defaultMessage: "https://www1.magellanrx.com/nondiscrimination-languages/#Arabic"
                },
                footerNondiscriminationFrenchUrl: {
                    id: "NONDISCRIMINATION_LANGUAGES_LINK",
                    defaultMessage: "https://www1.magellanrx.com/nondiscrimination-languages/#French"
                },
                footerNondiscriminationSpanishUrl: {
                    id: "NONDISCRIMINATION_LANGUAGES_LINK1",
                    defaultMessage: "https://www1.magellanrx.com/nondiscrimination-languages/#Spanish"
                },
                footerNondiscriminationPolishUrl: {
                    id: "NONDISCRIMINATION_LANGUAGES_LINK",
                    defaultMessage: "https://www1.magellanrx.com/nondiscrimination-languages/#Polish"
                },
                footerNondiscriminationTagalogUrl: {
                    id: "NONDISCRIMINATION_LANGUAGES_LINK",
                    defaultMessage: "https://www1.magellanrx.com/nondiscrimination-languages/#Tagalog"
                },
                footerNondiscriminationItalianUrl: {
                    id: "NONDISCRIMINATION_LANGUAGES_LINK",
                    defaultMessage: "https://www1.magellanrx.com/nondiscrimination-languages/#Italian"
                },
                footerNondiscriminationGermanUrl: {
                    id: "NONDISCRIMINATION_LANGUAGES_LINK",
                    defaultMessage: "https://www1.magellanrx.com/nondiscrimination-languages/#German"
                },
                footerNondiscriminationCreoleUrl: {
                    id: "NONDISCRIMINATION_LANGUAGES_LINK",
                    defaultMessage: "https://www1.magellanrx.com/nondiscrimination-languages/#Creole"
                },
                footerNondiscriminationUrduUrl: {
                    id: "NONDISCRIMINATION_LANGUAGES_LINK",
                    defaultMessage: "https://www1.magellanrx.com/nondiscrimination-languages/#Urdu"
                },
                footerNondiscriminationBengaliUrl: {
                    id: "NONDISCRIMINATION_LANGUAGES_LINK",
                    defaultMessage: "https://www1.magellanrx.com/nondiscrimination-languages/#Bengali"
                },
                footerNondiscriminationYiddishUrl: {
                    id: "NONDISCRIMINATION_LANGUAGES_LINK",
                    defaultMessage: "https://www1.magellanrx.com/nondiscrimination-languages/#Yiddish"
                },
                footerNondiscriminationPersianUrl: {
                    id: "NONDISCRIMINATION_LANGUAGES_LINK",
                    defaultMessage: "https://www1.magellanrx.com/nondiscrimination-languages/#Persian"
                },
                footerNondiscriminationAmharicUrl: {
                    id: "NONDISCRIMINATION_LANGUAGES_LINK",
                    defaultMessage: "https://www1.magellanrx.com/nondiscrimination-languages/#Amharic"
                },
                footerNondiscriminationHindiUrl: {
                    id: "NONDISCRIMINATION_LANGUAGES_LINK",
                    defaultMessage: "https://www1.magellanrx.com/nondiscrimination-languages/#Hindi"
                },
                footerNondiscriminationYorubaUrl: {
                    id: "NONDISCRIMINATION_LANGUAGES_LINK",
                    defaultMessage: "https://www1.magellanrx.com/nondiscrimination-languages/#Yoruba"
                },
                footerLanguageHindiUrl: {
                    id: "CA_FOOTER_LANGUAGE_HINDI_URL",
                    defaultMessage: "https://www.dhcs.ca.gov/Pages/Language_Access.aspx#hindi"
                },
                footerLanguageTagalogUrl: {
                    id: "CA_FOOTER_LANGUAGE_TAGALOG_URL",
                    defaultMessage: "https://www.dhcs.ca.gov/Pages/Language_Access.aspx#tagalog"
                },
                footerLanguageRussianUrl: {
                    id: "CA_FOOTER_LANGUAGE_RUSSIAN_URL",
                    defaultMessage: "https://www.dhcs.ca.gov/Pages/Language_Access.aspx#russian"
                },
                footerLanguageSpanishUrl: {
                    id: "CA_FOOTER_LANGUAGE_SPANISH_URL",
                    defaultMessage: "https://www.dhcs.ca.gov/Pages/Language_Access.aspx#spanish"
                },
                footerLanguageVietnameseUrl: {
                    id: "CA_FOOTER_LANGUAGE_VIETNAMESE_URL",
                    defaultMessage: "https://www.dhcs.ca.gov/Pages/Language_Access.aspx#vietnamese"
                },
                footerLanguageKoreanUrl: {
                    id: "CA_FOOTER_LANGUAGE_KOREAN_URL",
                    defaultMessage: "https://www.dhcs.ca.gov/Pages/Language_Access.aspx#korean"
                },
                footerLanguageChineseUrl: {
                    id: "CA_FOOTER_LANGUAGE_CHINESE_URL",
                    defaultMessage: "https://www.dhcs.ca.gov/Pages/Language_Access.aspx#chinese"
                },
                footerLanguageArabicUrl: {
                    id: "CA_FOOTER_LANGUAGE_ARABIC_URL",
                    defaultMessage: "https://www.dhcs.ca.gov/Pages/Language_Access.aspx#arabic"
                },
                footerLanguageArmenianUrl: {
                    id: "CA_FOOTER_LANGUAGE_ARMENIAN_URL",
                    defaultMessage: "https://www.dhcs.ca.gov/Pages/Language_Access.aspx#armenian"
                },
                footerLanguageCambodianUrl: {
                    id: "CA_FOOTER_LANGUAGE_CAMBODIAN_URL",
                    defaultMessage: "https://www.dhcs.ca.gov/Pages/Language_Access.aspx#cambodian"
                },
                footerLanguageFarsiUrl: {
                    id: "CA_FOOTER_LANGUAGE_FARSI_URL",
                    defaultMessage: "https://www.dhcs.ca.gov/Pages/Language_Access.aspx#farsi"
                },
                footerLanguageHmongUrl: {
                    id: "CA_FOOTER_LANGUAGE_HMONG_URL",
                    defaultMessage: "https://www.dhcs.ca.gov/Pages/Language_Access.aspx#hmong"
                },
                footerLanguageJapaneseUrl: {
                    id: "CA_FOOTER_LANGUAGE_JAPANESE_URL",
                    defaultMessage: "https://www.dhcs.ca.gov/Pages/Language_Access.aspx#japanese"
                },
                footerLanguageLaotianUrl: {
                    id: "CA_FOOTER_LANGUAGE_LAOTIAN_URL",
                    defaultMessage: "https://www.dhcs.ca.gov/Pages/Language_Access.aspx#laotian"
                },
                footerLanguagePunjabiUrl: {
                    id: "CA_FOOTER_LANGUAGE_PUNJABI_URL",
                    defaultMessage: "https://www.dhcs.ca.gov/Pages/Language_Access.aspx#punjabi"
                },
                footerLanguageThaiUrl: {
                    id: "CA_FOOTER_LANGUAGE_THAI_URL",
                    defaultMessage: "https://www.dhcs.ca.gov/Pages/Language_Access.aspx#thai"
                },
                footerBackToTop: {
                    id: "CA_FOOTER_BACK_TO_TOP",
                    defaultMessage: "Back to Top"
                },
                conditionsOfUse: {
                    id: "CA_FOOTER_CONDITIONS_OF_USE",
                    defaultMessage: "Conditions of Use"
                },
                conditionsOfUseUrl: {
                    id: "CA_FOOTER_CONDITIONS_OF_USE_URL",
                    defaultMessage: "https://www.dhcs.ca.gov/pages/use.aspx"
                },
                footerBottomPrivacyPolicy: {
                    id: "CA_FOOTER_PRIVACY_POLICY",
                    defaultMessage: "Privacy Policy"
                },
                footerBottomPrivacyPolicyUrl: {
                    id: "CA_FOOTER_PRIVACY_POLICY_URL",
                    defaultMessage: "https://www.dhcs.ca.gov/pages/privacy.aspx"
                },
                accessibility: {
                    id: "CA_FOOTER_ACCESSIBILITY",
                    defaultMessage: "Accessibility"
                },
                accessibilityUrl: {
                    id: "CA_FOOTER_ACCESSIBILITY_URL",
                    defaultMessage: "https://www.dhcs.ca.gov/Documents/DHCS-SIMM-25B-062819.pdf"
                },
                registerToVote: {
                    id: "CA_FOOTER_REGISTER_TO_VOTE",
                    defaultMessage: "Register to Vote"
                },
                registerToVoteUrl: {
                    id: "CA_FOOTER_REGISTER_TO_VOTE_URL",
                    defaultMessage: "https://registertovote.ca.gov/"
                },
                providerPortalLinkText: {
                    id: "PROVIDER",
                    defaultMessage: "Provider Portal"
                },
                providerPortalLinkHref: {
                    id: "PROVIDER_PORTAL_LINK_URL",
                    defaultMessage: "/provider"
                },
                portalDropDownText: {
                    id: "CA_HEADER_PORTAL_LINK_TEXT",
                    defaultMessage: "Secured Portal Access"
                },
                clientPortalLinkText: {
                    id: "CLIENT",
                    defaultMessage: "DHCS Portal"
                },
                clientPortalLinkHref: {
                    id: "CLIENT_PORTAL_LINK_URL",
                    defaultMessage: "https://magellanhealthsso.okta.com/"
                },
                alertButtonText: {
                    id: "CA_FOOTER_TRANSLATION_DISCLAIMER",
                    defaultMessage: "Translation Disclaimer"
                },
                alertBodyText: {
                    id: "CA_FOOTER_TRANSLATION_MESSAGE",
                    defaultMessage: "The translation tool is provided for purposes of information and convenience only. Google??? Translate is a free third-party service, which is not controlled by this website"
                },
                alertClose: {
                    id: "CLOSE",
                    defaultMessage: "Close"
                },
                footerMRxTwitterUrl: {
                    id: "MRX_TWITTER_LINK_URL",
                    defaultMessage: "https://twitter.com/magellan_rx"
                },
                footerMRxLinkedInUrl: {
                    id: "MRX_LINKEDIN_LINK_URL",
                    defaultMessage: "https://www.linkedin.com/company/magellanrx"
                },
                footerMRxYouTubeUrl: {
                    id: "MRX_YOUTUBE_LINK_URL",
                    defaultMessage: "https://www.youtube.com/channel/UCruVCts2sOwbCj1nG7frnjQ"
                },
                footerMRxInstagramUrl: {
                    id: "MRX_INSTAGRAM_LINK_URL",
                    defaultMessage: "https://www.instagram.com/magellan_rx/?hl=en"
                },
                footerPrivacyPolicyUrl: {
                    id: "MRX_PRIVACY_POLICY_LINK_URL",
                    defaultMessage: "https://www1.magellanrx.com/magellan-rx/mrx-privacy-policy.aspx"
                },
                footerTermsOfUseUrl: {
                    id: "MRX_TERMS_OF_USE_LINK_URL",
                    defaultMessage: "https://www1.magellanrx.com/magellan-rx/mrx-terms-of-use.aspx"
                },
                footerDisclaimerUrl: {
                    id: "MRX_DISCLAIMER_LINK_URL",
                    defaultMessage: "https://www1.magellanrx.com/magellan-rx/mrx-disclaimer.aspx"
                },
                footerAccountSettings: {
                    id: "APP_COMPONENTS_FOOTER_ACCOUNT_SETTINGS",
                    defaultMessage: "S4607_WBPDP Accepted, Last Updated: 01/01/2019"
                },
                footerServiceAreaInfo: {
                    id: "APP_COMPONENTS_FOOTER_SERVICE_AREA",
                    defaultMessage: "S4607_WBPDP Approved 11/6/2017, Last Updated: 6/21/2018"
                },
                header: {
                    id: "app.components.Footer.header",
                    defaultMessage: "This is the Footer component !"
                },
                footerInfo: {
                    id: "APP_COMPONENTS_FOOTER_MEMBER_INFO",
                    defaultMessage: "S4607_WBPDP Approved, Last Updated: 10/15/2017"
                },
                footerLoginInfo: {
                    id: "APP_COMPONENTS_FOOTER_LOGIN",
                    defaultMessage: "S4607_WBPDP Approved, Last Updated: 10/15/2017"
                },
                footerPharmacyInfo: {
                    id: "APP_COMPONENTS_FOOTER_PHARMACY_INFO",
                    defaultMessage: "S4607_WBPDP Approved, Last Updated: 10/15/2017"
                },
                footerLinksInfo: {
                    id: "APP_COMPONENTS_FOOTER_LINKS_INFO",
                    defaultMessage: "S4607_WBPDP Approved, Last Updated: 10/15/2017"
                },
                footerFormInfo: {
                    id: "APP_COMPONENTS_FOOTER_FORM_INFO",
                    defaultMessage: "S4607_WBPDP Approved, Last Updated: 10/15/2017"
                },
                footerAboutUs: {
                    id: "APP_COMPONENTS_FOOTER_ABOUT_US",
                    defaultMessage: "S4607_WBPDP Approved 11/6/2017, Last Updated: 07/19/2018"
                },
                footerContactInfo: {
                    id: "APP_COMPONENTS_FOOTER_CONTACT_INFO",
                    defaultMessage: "S4607_WBPDP Approved, Last Updated: 10/15/2017"
                },
                footerMailInfo: {
                    id: "APP_COMPONENTS_FOOTER_MAIL_ORDER_INFO",
                    defaultMessage: "S4607_WBPDP Approved, Last Updated: 10/15/2017"
                },
                footerHelperInfo: {
                    id: "APP_COMPONENTS_FOOTER_HELPER_INFO",
                    defaultMessage: "S4607_WBPDP Approved, Last Updated: 10/15/2017"
                },
                footerDocumentInfo: {
                    id: "APP_COMPONENTS_FOOTER_DOCUMENT_INFO",
                    defaultMessage: "S4607_WBPDP Pending, Last Updated: 10/15/2017"
                },
                footerRegistrationInfo: {
                    id: "APP_COMPONENTS_FOOTER_REGISTER",
                    defaultMessage: "S4607_WBPDP Approved, Last Updated: 10/15/2017"
                },
                footerForgotPasswordInfo: {
                    id: "APP_COMPONENTS_FOOTER_FORGOT_PASSWORD_EMAIL",
                    defaultMessage: "S4607_WBPDP Pending, Last Updated: 10/15/2017"
                },
                commercialFooterPrivacyPolicy: {
                    id: "COMMERCIAL_FOOTER_PRIVACY_POLICY",
                    defaultMessage: "Privacy Policy"
                },
                commercialFooterTermsOfUse: {
                    id: "COMMERCIAL_FOOTER_TERMS_OF_USE",
                    defaultMessage: "Terms of Use"
                },
                commercialFooterDisclaimer: {
                    id: "COMMERCIAL_FOOTER_DISCLAIMER",
                    defaultMessage: "Disclaimer"
                },
                commercialFooterNondiscrimination: {
                    id: "COMMERCIAL_FOOTER_NONDISCRIMINATION",
                    defaultMessage: "Nondiscrimination"
                },
                commercialFooterCopyrightYear: {
                    id: "COMMERCIAL_FOOTER_COPYRIGHT_YEAR",
                    defaultMessage: "1999-2018"
                },
                commercialFooterCopyrightMagellanLink: {
                    id: "COMMERCIAL_FOOTER_COPYRIGHT_MAGELLAN_LINK",
                    defaultMessage: "Magellan Health, Inc."
                },
                commercialFooterCopyrightRightsReserved: {
                    id: "COMMERCIAL_FOOTER_COPYRIGHT_RIGHTS_RESERVED",
                    defaultMessage: "All Rights Reserved"
                },
                commercialFooterLanguageSpanish: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_SPANISH",
                    defaultMessage: "Espa??ol"
                },
                commercialFooterLanguageChinese: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_CHINESE",
                    defaultMessage: "????????????"
                },
                commercialFooterLanguageVietnamese: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_VIETNAMESE",
                    defaultMessage: "Ti???ng Vi???t"
                },
                commercialFooterLanguageKorean: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_KOREAN",
                    defaultMessage: "?????????"
                },
                commercialFooterLanguageRussian: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_RUSSIAN",
                    defaultMessage: "??????????????"
                },
                commercialFooterLanguageArabic: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_ARABIC",
                    defaultMessage: "??????????????"
                },
                commercialFooterLanguageFrench: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_FRENCH",
                    defaultMessage: "Fran??ais"
                },
                commercialFooterLanguagePolish: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_POLISH",
                    defaultMessage: "Polski"
                },
                commercialFooterLanguageTagalogFilipino: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_TAGAOG_FILIPINO",
                    defaultMessage: "Tagalog"
                },
                commercialFooterLanguageItalian: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_ITALIAN",
                    defaultMessage: "Italiano"
                },
                commercialFooterLanguageGerman: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_GERMAN",
                    defaultMessage: "Deutsch"
                },
                commercialFooterLanguageFrenchCreole: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_FRENCH_CREOLE",
                    defaultMessage: "French Creole"
                },
                commercialFooterLanguageUrdu: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_URDU",
                    defaultMessage: "????????"
                },
                commercialFooterLanguageBengali: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_BENGALI",
                    defaultMessage: "???????????????"
                },
                commercialFooterLanguageYiddish: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_YIDDISH",
                    defaultMessage: "??????????"
                },
                commercialMeddFooterStandAlonePresc: {
                    id: "COMMERCIAL_MEDD_FOOTER_STAND_ALONE_PRESC",
                    defaultMessage: "Magellan Rx Medicare Basic (PDP) is a stand-alone prescription drug plan with a Medicare contract. Enrollment in Magellan Rx Medicare Basic (PDP) depends on contract renewal."
                },
                commercialMeddFooterContactPlan: {
                    id: "COMMERCIAL_MEDD_FOOTER_CONTACT_PLAN",
                    defaultMessage: " "
                },
                commercialMeddFooterPharmacyNetworkOffers: {
                    id: "COMMERCIAL_MEDD_FOOTER_PHARMACY_NETWORK_OFFERS",
                    defaultMessage: " "
                },
                commercialMeddFooterAtencion: {
                    id: "COMMERCIAL_MEDD_FOOTER_ATENCION",
                    defaultMessage: " "
                },
                commercialMeddFooterMedicareBeneficiaries: {
                    id: "COMMERCIAL_MEDD_FOOTER_MEDICARE_BENEFICIARIES",
                    defaultMessage: " "
                },
                footerMessageCenter: {
                    id: "APP_COMPONENTS_FOOTER_MESSAGE_CENTER",
                    defaultMessage: "S4607_WBPDP Approved 11/6/2017, Last Updated: 03/28/2018"
                },
                footerClaims: {
                    id: "APP_COMPONENTS_FOOTER_CLAIMS",
                    defaultMessage: "S4607_WBPDP Approved 11/6/2017, Last Updated: 02/28/2018"
                },
                footerBenefitsSummary: {
                    id: "APP_COMPONENTS_FOOTER_BENEFITS_SUMMARY",
                    defaultMessage: "S4607_WBPDP Approved 11/6/2017, Last Updated: 02/28/2018"
                },
                footerDashboard: {
                    id: "APP_COMPONENTS_FOOTER_DASHBOARD",
                    defaultMessage: "S4607_WBPDP Approved 11/6/2017, Last Updated: 02/28/2018"
                },
                footerCoverageDetermination: {
                    id: "APP_COMPONENTS_FOOTER_COVERAGE_DETERMINATION",
                    defaultMessage: "S4607_WBPDP Accepted, Last Updated: MM/DD/YYYY"
                },
                footerLogoLinkUrl: {
                    id: "APP_COMPONENTS_FOOTER_LOGO_LINK_URL",
                    defaultMessage: "http://magellanrx.com/"
                },
                commercialFooterLanguageSpanishUrl: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_SPANISH_URL",
                    defaultMessage: "/member/external/medicare/medd_common/doc/en-us/MEDD_Top_15_Languages_Spoken.pdf"
                },
                commercialFooterLanguageChineseUrl: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_CHINESE_URL",
                    defaultMessage: "/member/external/medicare/medd_common/doc/en-us/MEDD_Top_15_Languages_Spoken.pdf"
                },
                commercialFooterLanguageVietnameseUrl: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_VIETNAMESE_URL",
                    defaultMessage: "/member/external/medicare/medd_common/doc/en-us/MEDD_Top_15_Languages_Spoken.pdf"
                },
                commercialFooterLanguageKoreanUrl: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_KOREAN_URL",
                    defaultMessage: "/member/external/medicare/medd_common/doc/en-us/MEDD_Top_15_Languages_Spoken.pdf"
                },
                commercialFooterLanguageRussianUrl: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_RUSSIAN_URL",
                    defaultMessage: "/member/external/medicare/medd_common/doc/en-us/MEDD_Top_15_Languages_Spoken.pdf"
                },
                commercialFooterLanguageArabicUrl: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_ARABIC_URL",
                    defaultMessage: "/member/external/medicare/medd_common/doc/en-us/MEDD_Top_15_Languages_Spoken.pdf"
                },
                commercialFooterLanguageFrenchUrl: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_FRENCH_URL",
                    defaultMessage: "/member/external/medicare/medd_common/doc/en-us/MEDD_Top_15_Languages_Spoken.pdf"
                },
                commercialFooterLanguagePolishUrl: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_POLISH_URL",
                    defaultMessage: "/member/external/medicare/medd_common/doc/en-us/MEDD_Top_15_Languages_Spoken.pdf"
                },
                commercialFooterLanguageTagaogFilipinoUrl: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_TAGAOG_FILIPINO_URL",
                    defaultMessage: "/member/external/medicare/medd_common/doc/en-us/MEDD_Top_15_Languages_Spoken.pdf"
                },
                commercialFooterLanguageItalianUrl: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_ITALIAN_URL",
                    defaultMessage: "/member/external/medicare/medd_common/doc/en-us/MEDD_Top_15_Languages_Spoken.pdf"
                },
                commercialFooterLanguageGermanUrl: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_GERMAN_URL",
                    defaultMessage: "/member/external/medicare/medd_common/doc/en-us/MEDD_Top_15_Languages_Spoken.pdf"
                },
                commercialFooterLanguageFrenchCreoleUrl: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_FRENCH_CREOLE_URL",
                    defaultMessage: "/member/external/medicare/medd_common/doc/en-us/MEDD_Top_15_Languages_Spoken.pdf"
                },
                commercialFooterLanguageUrduUrl: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_URDU_URL",
                    defaultMessage: "/member/external/medicare/medd_common/doc/en-us/MEDD_Top_15_Languages_Spoken.pdf"
                },
                commercialFooterLanguageBengaliUrl: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_BENGALI_URL",
                    defaultMessage: "/member/external/medicare/medd_common/doc/en-us/MEDD_Top_15_Languages_Spoken.pdf"
                },
                commercialFooterLanguageYiddishUrl: {
                    id: "COMMERCIAL_FOOTER_LANGUAGE_YIDDISH_URL",
                    defaultMessage: "/member/external/medicare/medd_common/doc/en-us/MEDD_Top_15_Languages_Spoken.pdf"
                },
                commercialFooterNondiscriminationUrl: {
                    id: "NONDISCRIMINATION_LANGUAGES_LINK",
                    defaultMessage: "https://www1.magellanrx.com/magellan-rx/nondiscrimination-languages.aspx"
                }
            }),
            yn = n(797),
            Mn = function(e) {
                var t = e.classes,
                    n = e.features,
                    a = {
                        buttonText: e.intl.formatMessage(Sn.alertButtonText),
                        headerText: e.intl.formatMessage(Sn.alertButtonText),
                        bodyText: e.intl.formatMessage(Sn.alertBodyText),
                        agreeButtonText: e.intl.formatMessage(Sn.alertClose),
                        buttonClass: t.muiButton,
                        titleClass: t.title,
                        agreeButtonClass: t.agreeButton,
                        dialogClass: t.dialog,
                        dialogContentClass: {
                            root: t.dialogContent
                        }
                    };
                return c.a.createElement("div", {
                    className: "footer ".concat(t.root)
                }, c.a.createElement("div", {
                    className: t.footerTop
                }, c.a.createElement("div", {
                    className: t.footerLanguageAccessLinks
                }, c.a.createElement(at.a, {
                    component: "a",
                    target: "_blank",
                    href: e.intl.formatMessage(Sn.footerLanguageNondiscriminationUrl),
                    color: "primary",
                    rel: "noreferrer",
                    className: t.link
                }, e.intl.formatMessage(Sn.footerLanguageNondiscrimination)), c.a.createElement(at.a, {
                    component: "a",
                    target: "_blank",
                    href: e.intl.formatMessage(Sn.footerLanguageAssistanceUrl),
                    color: "primary",
                    rel: "noreferrer",
                    className: t.link
                }, e.intl.formatMessage(Sn.footerLanguageAssistance))), c.a.createElement("div", {
                    className: t.footerLanguageLinks
                }, c.a.createElement("ul", null, c.a.createElement("li", null, c.a.createElement(at.a, {
                    component: "a",
                    target: "_blank",
                    href: e.intl.formatMessage(Sn.footerLanguageArabicUrl),
                    color: "primary",
                    rel: "noreferrer",
                    className: t.link
                }, "??????????????")), c.a.createElement("li", null, c.a.createElement(at.a, {
                    component: "a",
                    target: "_blank",
                    href: e.intl.formatMessage(Sn.footerLanguageArmenianUrl),
                    color: "primary",
                    rel: "noreferrer",
                    className: t.link
                }, "??????????????")), c.a.createElement("li", null, c.a.createElement(at.a, {
                    component: "a",
                    target: "_blank",
                    href: e.intl.formatMessage(Sn.footerLanguageCambodianUrl),
                    color: "primary",
                    rel: "noreferrer",
                    className: t.link
                }, "???????????????")), c.a.createElement("li", null, c.a.createElement(at.a, {
                    component: "a",
                    target: "_blank",
                    href: e.intl.formatMessage(Sn.footerLanguageChineseUrl),
                    color: "primary",
                    rel: "noreferrer",
                    className: t.link
                }, "????????????")), c.a.createElement("li", null, c.a.createElement(at.a, {
                    component: "a",
                    target: "_blank",
                    href: e.intl.formatMessage(Sn.footerLanguageFarsiUrl),
                    color: "primary",
                    rel: "noreferrer",
                    className: t.link
                }, "??????????")), c.a.createElement("li", null, c.a.createElement(at.a, {
                    component: "a",
                    target: "_blank",
                    href: e.intl.formatMessage(Sn.footerLanguageHindiUrl),
                    color: "primary",
                    rel: "noreferrer",
                    className: t.link
                }, "?????????????????? ????????????")), c.a.createElement("li", null, c.a.createElement(at.a, {
                    component: "a",
                    target: "_blank",
                    href: e.intl.formatMessage(Sn.footerLanguageHmongUrl),
                    color: "primary",
                    rel: "noreferrer",
                    className: t.link
                }, "Hmoob")), c.a.createElement("li", null, c.a.createElement(at.a, {
                    component: "a",
                    target: "_blank",
                    href: e.intl.formatMessage(Sn.footerLanguageJapaneseUrl),
                    color: "primary",
                    rel: "noreferrer",
                    className: t.link
                }, "?????????")), c.a.createElement("li", null, c.a.createElement(at.a, {
                    component: "a",
                    target: "_blank",
                    href: e.intl.formatMessage(Sn.footerLanguageKoreanUrl),
                    color: "primary",
                    rel: "noreferrer",
                    className: t.link
                }, "?????????")), c.a.createElement("li", null, c.a.createElement(at.a, {
                    component: "a",
                    target: "_blank",
                    href: e.intl.formatMessage(Sn.footerLanguageLaotianUrl),
                    color: "primary",
                    rel: "noreferrer",
                    className: t.link
                }, "?????????")), c.a.createElement("li", null, c.a.createElement(at.a, {
                    component: "a",
                    target: "_blank",
                    href: e.intl.formatMessage(Sn.footerLanguagePunjabiUrl),
                    color: "primary",
                    rel: "noreferrer",
                    className: t.link
                }, "??????????????????")), c.a.createElement("li", null, c.a.createElement(at.a, {
                    component: "a",
                    target: "_blank",
                    href: e.intl.formatMessage(Sn.footerLanguageRussianUrl),
                    color: "primary",
                    rel: "noreferrer",
                    className: t.link
                }, "??????????????")), c.a.createElement("li", null, c.a.createElement(at.a, {
                    component: "a",
                    target: "_blank",
                    href: e.intl.formatMessage(Sn.footerLanguageSpanishUrl),
                    color: "primary",
                    rel: "noreferrer",
                    className: t.link
                }, "Espa??ol")), c.a.createElement("li", null, c.a.createElement(at.a, {
                    component: "a",
                    target: "_blank",
                    href: e.intl.formatMessage(Sn.footerLanguageTagalogUrl),
                    color: "primary",
                    rel: "noreferrer",
                    className: t.link
                }, "Tagalog")), c.a.createElement("li", null, c.a.createElement(at.a, {
                    component: "a",
                    target: "_blank",
                    href: e.intl.formatMessage(Sn.footerLanguageThaiUrl),
                    color: "primary",
                    rel: "noreferrer",
                    className: t.link
                }, "?????????????????????")), c.a.createElement("li", null, c.a.createElement(at.a, {
                    component: "a",
                    target: "_blank",
                    href: e.intl.formatMessage(Sn.footerLanguageVietnameseUrl),
                    color: "primary",
                    rel: "noreferrer",
                    className: t.link
                }, "Ti???ng Vi???t"))))), c.a.createElement("div", {
                    className: t.footerBottom
                }, c.a.createElement("div", {
                    className: t.footerBottomLinks
                }, c.a.createElement("ul", null, c.a.createElement("li", null, c.a.createElement(at.a, {
                    component: "a",
                    onClick: function() {
                        window.scroll({
                            top: 0,
                            behavior: "smooth"
                        })
                    },
                    color: "primary",
                    className: t.footerBottomLink
                }, e.intl.formatMessage(Sn.footerBackToTop))), c.a.createElement("li", null, c.a.createElement(at.a, {
                    component: "a",
                    href: e.intl.formatMessage(Sn.conditionsOfUseUrl),
                    color: "primary",
                    target: "_blank",
                    rel: "noreferrer",
                    className: t.footerBottomLink
                }, e.intl.formatMessage(Sn.conditionsOfUse))), c.a.createElement("li", null, c.a.createElement(at.a, {
                    component: "a",
                    href: e.intl.formatMessage(Sn.footerBottomPrivacyPolicyUrl),
                    target: "_blank",
                    color: "primary",
                    rel: "noreferrer",
                    className: t.footerBottomLink
                }, e.intl.formatMessage(Sn.footerBottomPrivacyPolicy))), c.a.createElement("li", null, c.a.createElement(at.a, {
                    component: "a",
                    href: e.intl.formatMessage(Sn.accessibilityUrl),
                    color: "primary",
                    target: "_blank",
                    rel: "noreferrer",
                    className: t.footerBottomLink
                }, e.intl.formatMessage(Sn.accessibility))), !!(Object(ge.a)("CLIENT_GOOGLE_TRANSLATE", n.readableFeatures) && Object(pe.c)() || Object(ge.a)("MEMBER_GOOGLE_TRANSLATE", n.readableFeatures) && Object(pe.d)()) && c.a.createElement("li", null, c.a.createElement(yn.a, {
                    config: a
                }))))))
            };
        Mn.propTypes = {
            classes: k.a.object,
            showInternalAlert: k.a.func,
            showExternalAlert: k.a.func,
            intl: V.intlShape,
            features: k.a.object
        };
        var Rn = Object(V.injectIntl)(Object(U.a)((function(e) {
                return {
                    root: {
                        color: fe.a.magellanWhite,
                        borderTop: "1px solid #F1F1F1",
                        flexShrink: 0,
                        fontSize: "1.2rem"
                    },
                    link: {
                        padding: 0,
                        textTransform: "none",
                        textDecoration: "underline",
                        "& :hover": {
                            textDecoration: "underline",
                            color: fe.a.californiaYellow
                        }
                    },
                    footerTop: {
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                        backgroundColor: fe.a.californiaBlue,
                        color: fe.a.magellanWhite,
                        fontSize: "1.4rem"
                    },
                    footerLinks: {
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        "& ul": I()({
                            paddingLeft: "5px",
                            display: "flex",
                            flexFlow: "wrap",
                            justifyContent: "start",
                            listStyle: "none"
                        }, e.breakpoints.down("sm"), {
                            paddingLeft: "5px",
                            justifyContent: "start"
                        }),
                        "& ul > li": {
                            marginRight: "2rem"
                        },
                        "& ul > li > a": {
                            color: fe.a.magellanWhite,
                            whiteSpace: "nowrap"
                        },
                        "& ul > li > a > span": {
                            paddingLeft: 0,
                            color: fe.a.magellanWhite
                        },
                        "& span": I()({
                            paddingLeft: "4rem"
                        }, e.breakpoints.down("sm"), {
                            paddingLeft: "0rem"
                        })
                    },
                    footerLanguageLinks: {
                        paddingTop: "3rem",
                        paddingBottom: "3rem",
                        display: "flex",
                        alignItems: "center",
                        "& ul": I()({
                            paddingLeft: "0px",
                            display: "flex",
                            flexFlow: "wrap",
                            justifyContent: "flex-start",
                            listStyle: "none"
                        }, e.breakpoints.down("sm"), {
                            paddingLeft: "0rem",
                            width: "100%"
                        }),
                        "& ul > li": {
                            marginRight: "1rem",
                            color: fe.a.magellanDarkBlue
                        },
                        "& ul > li > a": {
                            color: fe.a.magellanWhite,
                            whiteSpace: "nowrap"
                        },
                        "& ul > li > a > span": {
                            paddingLeft: 0,
                            color: fe.a.magellanWhite
                        },
                        "& span": I()({
                            paddingLeft: "4rem"
                        }, e.breakpoints.down("sm"), {
                            paddingLeft: "0rem"
                        })
                    },
                    footerLanguageAccessLinks: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        padding: "3rem 0 0 1.5rem",
                        "& a": {
                            color: fe.a.magellanWhite
                        },
                        "& a:nth-child(1)": {
                            fontWeight: "bold",
                            marginBottom: "1rem"
                        }
                    },
                    footerCopyright: I()({
                        display: "flex",
                        flexDirection: "row",
                        flexFlow: "wrap",
                        justifyContent: "space-between",
                        paddingRight: "4rem",
                        flexGrow: 1
                    }, e.breakpoints.down("sm"), {
                        paddingTop: "1rem"
                    }),
                    footerBottom: {
                        backgroundColor: fe.a.magellan80Black,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        padding: "1rem",
                        color: fe.a.magellanWhite,
                        borderTop: "1px solid ".concat(fe.a.magellan60Black)
                    },
                    footerBottomLinks: {
                        "& ul": I()({
                            margin: 0,
                            paddingLeft: "5px",
                            flexDirection: "row",
                            display: "flex",
                            flexFlow: "wrap",
                            justifyContent: "flex-start",
                            listStyle: "none"
                        }, e.breakpoints.down("sm"), {
                            paddingLeft: "5px",
                            justifyContent: "start"
                        }),
                        "& ul > li": {
                            marginRight: "2rem"
                        },
                        "& ul > li > a": {
                            color: fe.a.magellanWhite,
                            whiteSpace: "nowrap"
                        },
                        "& ul > li > a:hover": {
                            color: fe.a.californiaYellow
                        },
                        "& ul > li > a > span": {
                            paddingLeft: 0,
                            color: fe.a.magellanWhite
                        },
                        "& span": I()({
                            paddingLeft: "4rem"
                        }, e.breakpoints.down("sm"), {
                            paddingLeft: "0rem"
                        })
                    },
                    footerBottomLink: {
                        padding: 0,
                        fontWeight: "bold",
                        textTransform: "none",
                        textDecoration: "none",
                        "& :hover": {
                            textDecoration: "underline",
                            color: fe.a.californiaYellow
                        }
                    },
                    muiButton: {
                        padding: 0,
                        color: fe.a.magellanWhite,
                        fontWeight: "bold",
                        textTransform: "none",
                        textDecoration: "none",
                        "& :hover": {
                            textDecoration: "underline",
                            color: fe.a.californiaYellow
                        },
                        "& span": {
                            paddingLeft: "0rem"
                        }
                    },
                    alertSpan: {
                        paddingLeft: "0rem"
                    },
                    title: {
                        textAlign: "center",
                        color: fe.a.californiaBlue
                    },
                    dialog: {
                        justifyContent: "center"
                    },
                    dialogContent: {
                        color: fe.a.magellanBlack
                    }
                }
            }))(Mn)),
            vn = function(e) {
                var t = e.classes;
                return c.a.createElement("div", {
                    className: t.footerLanguageLinks
                }, c.a.createElement("ul", null, c.a.createElement("li", null, c.a.createElement("a", {
                    href: "https://www1.magellanrx.com/nondiscrimination-languages/#Spanish",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    title: "(opens new window)"
                }, c.a.createElement(V.FormattedMessage, Sn.commercialFooterLanguageSpanish))), c.a.createElement("li", null, c.a.createElement("a", {
                    href: "https://www1.magellanrx.com/nondiscrimination-languages/#Chinese",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    title: "(opens new window)"
                }, c.a.createElement(V.FormattedMessage, Sn.commercialFooterLanguageChinese))), c.a.createElement("li", null, c.a.createElement("a", {
                    href: "https://www1.magellanrx.com/nondiscrimination-languages/#Vietnamese",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    title: "(opens new window)"
                }, c.a.createElement(V.FormattedMessage, Sn.commercialFooterLanguageVietnamese))), c.a.createElement("li", null, c.a.createElement("a", {
                    href: "https://www1.magellanrx.com/nondiscrimination-languages/#Korean",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    title: "(opens new window)"
                }, c.a.createElement(V.FormattedMessage, Sn.commercialFooterLanguageKorean))), c.a.createElement("li", null, c.a.createElement("a", {
                    href: "https://www1.magellanrx.com/nondiscrimination-languages/#Russian",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    title: "(opens new window)"
                }, c.a.createElement(V.FormattedMessage, Sn.commercialFooterLanguageRussian))), c.a.createElement("li", null, c.a.createElement("a", {
                    href: "https://www1.magellanrx.com/nondiscrimination-languages/#Arabic",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    title: "(opens new window)"
                }, c.a.createElement(V.FormattedMessage, Sn.commercialFooterLanguageArabic))), c.a.createElement("li", null, c.a.createElement("a", {
                    href: "https://www1.magellanrx.com/nondiscrimination-languages/#French",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    title: "(opens new window)"
                }, c.a.createElement(V.FormattedMessage, Sn.commercialFooterLanguageFrench))), c.a.createElement("li", null, c.a.createElement("a", {
                    href: "https://www1.magellanrx.com/nondiscrimination-languages/#Polish",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    title: "(opens new window)"
                }, c.a.createElement(V.FormattedMessage, Sn.commercialFooterLanguagePolish))), c.a.createElement("li", null, c.a.createElement("a", {
                    href: "https://www1.magellanrx.com/nondiscrimination-languages/#Tagalog",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    title: "(opens new window)"
                }, c.a.createElement(V.FormattedMessage, Sn.commercialFooterLanguageTagalogFilipino))), c.a.createElement("li", null, c.a.createElement("a", {
                    href: "https://www1.magellanrx.com/nondiscrimination-languages/#Italian",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    title: "(opens new window)"
                }, c.a.createElement(V.FormattedMessage, Sn.commercialFooterLanguageItalian))), c.a.createElement("li", null, c.a.createElement("a", {
                    href: "https://www1.magellanrx.com/nondiscrimination-languages/#German",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    title: "(opens new window)"
                }, c.a.createElement(V.FormattedMessage, Sn.commercialFooterLanguageGerman))), c.a.createElement("li", null, c.a.createElement("a", {
                    href: "https://www1.magellanrx.com/nondiscrimination-languages/#Creole",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    title: "(opens new window)"
                }, c.a.createElement(V.FormattedMessage, Sn.commercialFooterLanguageFrenchCreole))), c.a.createElement("li", null, c.a.createElement("a", {
                    href: "https://www1.magellanrx.com/nondiscrimination-languages/#Urdu",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    title: "(opens new window)"
                }, c.a.createElement(V.FormattedMessage, Sn.commercialFooterLanguageUrdu))), c.a.createElement("li", null, c.a.createElement("a", {
                    href: "https://www1.magellanrx.com/nondiscrimination-languages/#Bengali",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    title: "(opens new window)"
                }, c.a.createElement(V.FormattedMessage, Sn.commercialFooterLanguageBengali))), c.a.createElement("li", null, c.a.createElement("a", {
                    href: "https://www1.magellanrx.com/nondiscrimination-languages/#Yiddish",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    title: "(opens new window)"
                }, c.a.createElement(V.FormattedMessage, Sn.commercialFooterLanguageYiddish)))))
            };
        vn.propTypes = {
            classes: k.a.object
        };
        var wn = Object(U.a)(Tn)(vn),
            In = (n(522), function(e) {
                return c.a.createElement("svg", {
                    className: e.className,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e.width,
                    height: e.height,
                    viewBox: "0 0 32 32",
                    "aria-labelledby": e.title
                }, c.a.createElement("title", {
                    id: e.title
                }, e.titleText), c.a.createElement("path", {
                    fill: e.fill,
                    stroke: e.stroke,
                    d: "M31.209 6.445c-1.085 0.484-2 0.5-2.971 0.021 1.251-0.749 1.308-1.276 1.76-2.692-1.171 0.695-2.468 1.2-3.848 1.472-1.103-1.176-2.679-1.913-4.42-1.913-3.347 0-6.059 2.715-6.059 6.059 0 0.475 0.053 0.937 0.156 1.381-5.035-0.252-9.5-2.664-12.488-6.331-0.521 0.895-0.82 1.936-0.82 3.047 0 2.103 1.071 3.956 2.695 5.043-0.993-0.032-1.927-0.304-2.743-0.757-0.001 0.025-0.001 0.049-0.001 0.076 0 2.936 2.088 5.384 4.861 5.941-0.888 0.241-1.824 0.279-2.737 0.105 0.772 2.405 3.009 4.157 5.66 4.207-2.592 2.032-5.807 2.879-8.971 2.508 2.683 1.719 5.865 2.721 9.288 2.721 11.144 0 17.237-9.232 17.237-17.239 0-0.264-0.004-0.524-0.016-0.784 1.181-0.853 2.604-1.649 3.416-2.865z"
                }))
            });
        In.propTypes = {
            width: k.a.string.isRequired,
            height: k.a.string.isRequired,
            className: k.a.string,
            fill: k.a.string.isRequired,
            title: k.a.string.isRequired,
            titleText: k.a.string.isRequired,
            stroke: k.a.string.isRequired
        }, In.defaultProps = {
            className: ""
        };
        var Pn = In,
            kn = function(e) {
                return c.a.createElement("svg", {
                    className: e.className,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e.width,
                    height: e.height,
                    viewBox: "0 0 32 32",
                    "aria-labelledby": e.title
                }, c.a.createElement("title", {
                    id: e.title
                }, e.titleText), c.a.createElement("path", {
                    fill: e.fill,
                    stroke: e.stroke,
                    d: "M8.667 28.667h-6.667v-17.333h6.667v17.333zM5.32 8.667h-0.039c-2.015 0-3.317-1.576-3.317-3.308 0-1.772 1.344-3.216 3.396-3.216 2.055 0 3.317 1.491 3.359 3.263-0.001 1.733-1.304 3.261-3.399 3.261zM20.667 16.667c-1.473 0-2.667 1.195-2.667 2.667v9.333h-6.667c0 0 0.079-16 0-17.333h6.667v1.98c0 0 2.064-1.924 5.251-1.924 3.949 0 6.749 2.859 6.749 8.405v8.872h-6.667v-9.333c0-1.472-1.195-2.667-2.667-2.667z"
                }))
            };
        kn.propTypes = {
            width: k.a.string.isRequired,
            height: k.a.string.isRequired,
            className: k.a.string,
            fill: k.a.string.isRequired,
            title: k.a.string.isRequired,
            titleText: k.a.string.isRequired,
            stroke: k.a.string.isRequired
        }, kn.defaultProps = {
            className: ""
        };
        var jn = kn,
            xn = function(e) {
                return c.a.createElement("svg", {
                    className: e.className,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e.width,
                    height: e.height,
                    viewBox: "0 0 32 32",
                    "aria-labelledby": e.title
                }, c.a.createElement("title", {
                    id: e.title
                }, e.titleText), c.a.createElement("path", {
                    fill: e.fill,
                    stroke: e.stroke,
                    d: "M31.333 10.585c0-2.533-2.052-4.585-4.584-4.585h-21.499c-2.532 0-4.584 2.052-4.584 4.585v12.161c0 2.533 2.052 4.585 4.584 4.585h21.5c2.531 0 4.584-2.052 4.584-4.585v-12.161zM12.667 21.921v-11.549l9.025 5.775-9.025 5.775z"
                }))
            };
        xn.propTypes = {
            width: k.a.string.isRequired,
            height: k.a.string.isRequired,
            className: k.a.string,
            fill: k.a.string.isRequired,
            title: k.a.string.isRequired,
            titleText: k.a.string.isRequired,
            stroke: k.a.string.isRequired
        }, xn.defaultProps = {
            className: ""
        };
        var Dn = xn,
            Un = n.p + "images/4555d4ff69c630d679303c6b27b44410-footer_logo_mrx.png",
            Fn = function(e) {
                var t = e.classes,
                    n = e.showExternalAlert,
                    a = e.showInternalAlert,
                    r = e.features,
                    o = e.intl;
                return c.a.createElement("div", {
                    className: t.footer
                }, c.a.createElement("div", {
                    className: t.flexRowOrColumn
                }, function() {
                    if (Object(ge.a)("MEMBER_FOOTER_SOCIAL_LINKS", r.readableFeatures)) return c.a.createElement("ul", {
                        className: t.listInline
                    }, c.a.createElement("li", {
                        id: "twitter"
                    }, c.a.createElement("button", {
                        className: t.buttonLink,
                        onClick: function() {
                            return n(!0, o.formatMessage(Sn.footerMRxTwitterUrl))
                        },
                        title: "Twitter (Opens new tab)"
                    }, c.a.createElement(Pn, {
                        title: "twitter-icon",
                        titleText: "Magellan Rx Twitter",
                        fill: "#fff",
                        stroke: "#C0C4C7",
                        width: "24",
                        height: "24"
                    }))), c.a.createElement("li", {
                        id: "linkedin"
                    }, c.a.createElement("button", {
                        className: t.buttonLink,
                        onClick: function() {
                            return n(!0, o.formatMessage(Sn.footerMRxLinkedInUrl))
                        },
                        title: "LinkedIn (Opens new tab)"
                    }, c.a.createElement(jn, {
                        title: "linkedin-icon",
                        titleText: "Magellan Rx Linkedin",
                        fill: "#fff",
                        stroke: "#C0C4C7",
                        width: "24",
                        height: "24"
                    }))), c.a.createElement("li", {
                        id: "youtube"
                    }, c.a.createElement("button", {
                        className: t.buttonLink,
                        onClick: function() {
                            return n(!0, o.formatMessage(Sn.footerMRxYouTubeUrl))
                        },
                        title: "Youtube (Opens new tab)"
                    }, c.a.createElement(Dn, {
                        title: "youtube-icon",
                        titleText: "Magellan Rx YouTube",
                        fill: "#fff",
                        stroke: "#C0C4C7",
                        width: "24",
                        height: "24"
                    }))))
                }(), c.a.createElement("div", {
                    className: t.footerLogoWrapper
                }, c.a.createElement("button", {
                    onClick: function() {
                        return a(!0, o.formatMessage(Sn.footerLogoLinkUrl))
                    },
                    className: t.buttonLink,
                    title: "Opens new tab"
                }, c.a.createElement("img", {
                    src: Un,
                    alt: "Magellan Rx Management Footer Logo",
                    className: t.footerLogo
                })))), c.a.createElement("div", {
                    className: t.flexRowOrColumn
                }, c.a.createElement("ul", {
                    className: t.listInline
                }, c.a.createElement("li", null, c.a.createElement("button", {
                    onClick: function() {
                        return a(!0, o.formatMessage(Sn.footerPrivacyPolicyUrl))
                    },
                    className: t.buttonLink,
                    title: "Opens new tab"
                }, c.a.createElement(V.FormattedMessage, Sn.commercialFooterPrivacyPolicy))), c.a.createElement("li", {
                    className: "separator"
                }, "/"), c.a.createElement("li", null, c.a.createElement("button", {
                    onClick: function() {
                        return a(!0, o.formatMessage(Sn.footerTermsOfUseUrl))
                    },
                    className: t.buttonLink,
                    title: "Opens new tab"
                }, c.a.createElement(V.FormattedMessage, Sn.commercialFooterTermsOfUse))), c.a.createElement("li", {
                    className: "separator"
                }, "/"), c.a.createElement("li", null, c.a.createElement("button", {
                    onClick: function() {
                        return a(!0, o.formatMessage(Sn.footerDisclaimerUrl))
                    },
                    className: t.buttonLink,
                    title: "Opens new tab"
                }, c.a.createElement(V.FormattedMessage, Sn.commercialFooterDisclaimer))), c.a.createElement("li", {
                    className: "separator"
                }, "/"), c.a.createElement("li", null, c.a.createElement("button", {
                    onClick: function() {
                        return a(!0, o.formatMessage(Sn.commercialFooterNondiscriminationUrl))
                    },
                    className: t.buttonLink,
                    title: "Opens new tab"
                }, c.a.createElement(V.FormattedMessage, Sn.commercialFooterNondiscrimination)))), c.a.createElement("div", {
                    className: t.copyright
                }, "??", c.a.createElement(V.FormattedMessage, Sn.commercialFooterCopyrightYear), c.a.createElement("button", {
                    onClick: function() {
                        return a(!0, "http://magellanhealth.com")
                    },
                    className: t.buttonLink,
                    title: "Opens new tab"
                }, c.a.createElement(V.FormattedMessage, Sn.commercialFooterCopyrightMagellanLink)), c.a.createElement(V.FormattedMessage, Sn.commercialFooterCopyrightRightsReserved))), c.a.createElement(wn, null))
            };
        Fn.propTypes = {
            classes: k.a.object,
            showExternalAlert: k.a.func,
            showInternalAlert: k.a.func,
            features: k.a.object,
            intl: V.intlShape
        };
        var Hn = Object(V.injectIntl)(Object(U.a)(Tn)(Fn)),
            Bn = function(e) {
                var t = e.features,
                    n = e.showExternalAlert,
                    a = e.showInternalAlert,
                    r = Object(l.useState)(null == t ? void 0 : t.clientCode),
                    o = q()(r, 2),
                    i = o[0],
                    s = o[1];
                Object(l.useEffect)((function() {
                    s(t.clientCode)
                }), [t.clientCode]);
                var u = function() {
                    switch (i) {
                        case "medicalrx":
                            return Rn;
                        default:
                            return Hn
                    }
                }();
                return c.a.createElement(u, {
                    showExternalAlert: n,
                    showInternalAlert: a,
                    features: t
                })
            };
        Bn.propTypes = {
            features: k.a.object,
            showExternalAlert: k.a.func,
            showInternalAlert: k.a.func
        };
        var Gn = Bn,
            Yn = Object(V.defineMessages)({
                indexHeadTitle: {
                    id: "MEMBER_INDEX_HEAD_TITLE",
                    defaultMessage: "Medi-Cal Rx | Homepage"
                },
                educationHeadTitle: {
                    id: "EDUCATION_HEAD_TITLE",
                    defaultMessage: "Medi-Cal Rx | Education & Outreach"
                },
                faqHeadTitle: {
                    id: "FAQ_HEAD_TITLE",
                    defaultMessage: "Medi-Cal Rx | FAQ"
                },
                contactHeadTitle: {
                    id: "LANDING_CONTACT_HEAD_TITLE",
                    defaultMessage: "Medi-Cal Rx | Contact Us"
                },
                findAPharmacyHeadTitle: {
                    id: "FIND_A_PHARMACY_PAGE_TITLE",
                    defaultMessage: "Medi-Cal Rx | Find A Pharmacy"
                },
                massAdjustmentsHeadTitle: {
                    id: "MASS_ADJUSTMENTS_PAGE_TITLE",
                    defaultMessage: "Medi-Cal Rx | Mass Adjustments"
                },
                memberIndexHeadTitle: {
                    id: "MEMBER_UNSECURE_INDEX_HEAD_TITLE",
                    defaultMessage: "Medi-Cal Rx Beneficiaries | Homepage"
                },
                loginHeadTitle: {
                    id: "MEMBER_LOGIN_HEAD_TITLE",
                    defaultMessage: "Medi-Cal Beneficiaries | Login"
                },
                unsecuredMessagingHeadTitle: {
                    id: "MEMBER_UNSECURED_MESSAGE_CENTER_TITLE",
                    defaultMessage: "Medi-Cal Beneficiaries| Unsecured Messaging"
                },
                drugLookupHeadTitle: {
                    id: "DRUG_LOOKUP_MEMBER_HEAD_TITLE",
                    defaultMessage: "Medi-Cal Beneficiaries | Drug Lookup"
                },
                helperUtilitiesHeadTitle: {
                    id: "MEMBER_HELPER_UTILITIES_HEAD_TITLE",
                    defaultMessage: "Medi-Cal Beneficiaries | Helper Utilities"
                },
                registerHeadTitle: {
                    id: "MEMBER_REGISTER_HEAD_TITLE",
                    defaultMessage: "Medi-Cal Beneficiaries | Register"
                },
                forgotEmailPasswordHeadTitle: {
                    id: "MEMBER_FORGOT_EMAIL_PASSWORD_HEAD_TITLE",
                    defaultMessage: "Medi-Cal Beneficiaries | Forgot Email or Password"
                },
                forgotEmailConfirmationHeadTitle: {
                    id: "MEMBER_FORGOT_EMAIL_CONFIRMATION_HEAD_TITLE",
                    defaultMessage: "Medi-Cal Beneficiaries | Forgot Email Confirmation"
                },
                forgotPasswordConfirmationHeadTitle: {
                    id: "MEMBER_FORGOT_PASSWORD_CONFIRMATION_HEAD_TITLE",
                    defaultMessage: "Medi-Cal Beneficiaries | Forgot Password Confirmation"
                },
                resetPasswordHeadTitle: {
                    id: "MEMBER_RESET_PASSWORD_CHEAD_TITLE",
                    defaultMessage: "Medi-Cal Beneficiaries | Reset Password"
                },
                confirmationHeadTitle: {
                    id: "MEMBER_CONFIRMATION_HEAD_TITLE",
                    defaultMessage: "Medi-Cal Beneficiaries | Register Confirmation"
                },
                systemStatusHeadTitle: {
                    id: "SYSTEM_STATUS_HEAD_TITLE",
                    defaultMessage: "Medi-Cal Rx | System Status"
                },
                messageCenterHeadTitle: {
                    id: "MEMBER_MESSAGE_CENTER_HEAD_TITLE",
                    defaultMessage: "Medi-Cal Beneficiaries | Message Center"
                },
                contactMemberTitle: {
                    id: "MEMBER_CONTACT_TITLE",
                    defaultMessage: "Medi-Cal Beneficiaries| Contact Us"
                },
                dashboardHeadTitle: {
                    id: "MEMBER_DASHBOARD_HEAD_TITLE",
                    defaultMessage: "Medi-Cal Beneficiaries | Dashboard"
                },
                formsAndInfoHeadTitle: {
                    id: "MEMBER_FORMS_AND_INFO_HEAD_TITLE",
                    defaultMessage: "Medi-Cal Beneficiaries | Forms and Information"
                },
                searchHeadTitle: {
                    id: "MEMBER_SEARCH_HEAD_TITLE",
                    defaultMessage: "Medi-Cal Rx | Search Results"
                },
                glossaryHeadTitle: {
                    id: "MEMBER_GLOSSARY_HEAD_TITLE",
                    defaultMessage: "Magellan Rx Management | Glossary"
                },
                CDLHeadTitle: {
                    id: "CDL_HEAD_TITLE",
                    defaultMessage: "Medi-Cal Rx | Contract Drugs List (CDL)"
                },
                ProviderManualHeadTitle: {
                    id: "PROVIDER_MANUAL_HEAD_TITLE",
                    defaultMessage: "Medi-Cal Rx | Provider Manual"
                },
                ENPHeadTitle: {
                    id: "ENTERAL_NUTRITION_PRODUCTS_HEAD_TITLE",
                    defaultMessage: "Medi-Cal Rx | Enteral Nutrition Products"
                }
            }),
            zn = n(10),
            Wn = n.n(zn);

        function Kn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function qn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Kn(Object(n), !0).forEach((function(t) {
                    I()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kn(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Vn(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = v()(e);
                if (t) {
                    var r = v()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return M()(this, n)
            }
        }
        var Xn = function(e) {
            S()(n, e);
            var t = Vn(n);

            function n() {
                var e;
                _()(this, n);
                for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
                return e = t.call.apply(t, [this].concat(r)), I()(N()(e), "requestInterceptor", null), I()(N()(e), "responseInterceptor", null), I()(N()(e), "requestInterceptorSuccessHandler", (function(t) {
                    var n = e.props.authState,
                        a = n.accessToken,
                        r = n.idToken;
                    return void 0 === a || void 0 === r ? t : qn(qn({}, t), {}, {
                        headers: qn(qn({}, t.headers), {}, {
                            Authorization: "Bearer ".concat(a),
                            "X-Magellan-Id-Token": r
                        })
                    })
                })), I()(N()(e), "requestInterceptorErrorHandler", (function(e) {
                    return Promise.reject(e)
                })), I()(N()(e), "responseInterceptorSuccessHandler", (function(e) {
                    return e
                })), I()(N()(e), "responseInterceptorErrorHandler", (function(t) {
                    var n = e.props.isShowErrorAlert;
                    return t.response && ![400, 401, 404].includes(t.response.status) && n(!0, t.response.status), Promise.reject(t)
                })), e
            }
            return A()(n, [{
                key: "componentDidMount",
                value: function() {
                    this.requestInterceptor = Wn.a.interceptors.request.use(this.requestInterceptorSuccessHandler, this.requestInterceptorErrorHandler), this.responseInterceptor = Wn.a.interceptors.response.use(this.responseInterceptorSuccessHandler, this.responseInterceptorErrorHandler)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    Wn.a.interceptors.request.eject(this.requestInterceptor), Wn.a.interceptors.response.eject(this.responseInterceptor)
                }
            }, {
                key: "render",
                value: function() {
                    return this.props.children
                }
            }]), n
        }(c.a.Component);
        Xn.propTypes = {
            authState: k.a.object.isRequired,
            history: k.a.object.isRequired,
            isShowErrorAlert: k.a.func,
            location: k.a.object.isRequired,
            match: k.a.object.isRequired,
            children: k.a.node
        };
        var Qn = Object(W.o)(Object(g.withOktaAuth)(Object(d.c)(null, (function(e) {
                return {
                    isShowErrorAlert: function(t, n) {
                        return e(Object(z.w)(t, n))
                    }
                }
            }))(Xn))),
            Jn = function(e) {
                var t = e.title,
                    n = e.intl,
                    a = tn()(e, ["title", "intl"]);
                return Object(l.useEffect)((function() {
                    document.title = n.formatMessage(t)
                })), c.a.createElement(W.d, a)
            };
        Jn.propTypes = {
            path: k.a.string.isRequired,
            title: k.a.object.isRequired,
            intl: V.intlShape.isRequired
        };
        var Zn = Object(V.injectIntl)(Jn),
            $n = function(e) {
                var t = e.title,
                    n = e.intl,
                    a = tn()(e, ["title", "intl"]);
                return Object(l.useEffect)((function() {
                    document.title = n.formatMessage(t)
                })), c.a.createElement(g.SecureRoute, a)
            };
        $n.propTypes = {
            component: k.a.object,
            path: k.a.string.isRequired,
            title: k.a.object.isRequired,
            intl: V.intlShape.isRequired
        };
        var ea = Object(V.injectIntl)($n),
            ta = n.p + "images/5eb732ff48035a946c40809e8f07325e-magellan_confetti.png",
            na = n.p + "images/2dce6eda2ad37a8483474b4169ab9353-person_img.jpg",
            aa = n(409),
            ra = n(704),
            oa = Object(V.defineMessages)({
                signUpHeading: {
                    id: "CA_LANDING_SIGN_UP_HEADING",
                    defaultMessage: "Email Alert Sign Up"
                },
                signUpInfo: {
                    id: "CA_LANDING_SIGN_UP_INFO",
                    defaultMessage: "If you would like to receive email updates about all of the changes happening, {hyperlink}"
                },
                signUpUrlText: {
                    id: "CA_LANDING_SIGN_UP_URL_TEXT",
                    defaultMessage: "please click to register"
                },
                signUpUrl: {
                    id: "CA_LANDING_SIGN_UP_URL",
                    defaultMessage: "https://www.google.com/"
                },
                clientPortalTitle: {
                    id: "CLIENT",
                    defaultMessage: "DHCS Portal"
                },
                clientPortalUrl: {
                    id: "CLIENT_PORTAL_LINK_URL",
                    defaultMessage: "https://magellanhealthsso.okta.com/"
                },
                providerPortalTitle: {
                    id: "PROVIDER",
                    defaultMessage: "Provider Portal"
                },
                providerPortalUrl: {
                    id: "PROVIDER_PORTAL_LINK_URL",
                    defaultMessage: "/provider"
                },
                beneficiaryPortalTitle: {
                    id: "BENEFICIARY_PORTAL_NAME",
                    defaultMessage: "Beneficiary Portal"
                },
                beneficiaryPortalUrl: {
                    id: "BENEFICIARY_PORTAL_LINK_URL",
                    defaultMessage: "/member"
                },
                healthPlanPortalTitle: {
                    id: "HEALTH_PLAN_PORTAL_LINK_TITLE",
                    defaultMessage: "Health Plan Portal"
                },
                healthPlanPortalUrl: {
                    id: "HEALTH_PLAN_PORTAL_LINK_URL",
                    defaultMessage: "https://magellanhealthsso.okta.com/"
                },
                findAPharmacyTitle: {
                    id: "LANDING_PAGE_FIND_A_PHARMACY_TITLE",
                    defaultMessage: "Find a Medi-Cal Rx Pharmacy"
                }
            }),
            ia = function(e) {
                var t = e.classes,
                    n = e.intl,
                    a = e.features,
                    r = e.getLinkOnDialogOpen,
                    o = e.shouldOpenDialog,
                    i = e.target;
                return c.a.createElement(c.a.Fragment, null, Object(ge.a)("BENEFICIARY_PORTAL_LINK", a.readableFeatures) && c.a.createElement("div", {
                    className: t.middleLinks
                }, c.a.createElement(ra.a, {
                    component: Q.Link,
                    color: "primary",
                    "aria-label": n.formatMessage(oa.beneficiaryPortalTitle),
                    className: t.middleLinksBtn,
                    to: n.formatMessage(oa.beneficiaryPortalUrl),
                    target: i
                }, c.a.createElement(aa.a, {
                    viewBox: "0 0 448 512",
                    className: t.fontIcon1
                }, c.a.createElement("path", {
                    fill: "currentColor",
                    d: "M 224 256 C 294.7 256 352 198.7 352 128 C 352 57.3 294.7 0 224 0 C 153.3 0 96 57.3 96 128 C 96 198.7 153.3 256 224 256 Z M 320 288.6 L 288.1 292.4 C 285.9 293.1 283.7 293.5 281.5 294.3 C 263.5 300.6 244.2 304.1 224.1 304.1 C 204 304.1 184.7 300.6 166.7 294.3 C 159.3 291.7 112.1 290.3 112.1 290.3 C 48.5 301 0 355.8 0 422.4 L 0 467.2 C 0 491.9 20.1 512 44.8 512 L 403.2 512 C 427.9 512 448 491.9 448 467.2 L 448 422.4 C 448 350.4 391.2 292.1 320 288.6 Z"
                }))), c.a.createElement("h2", null, c.a.createElement(Q.Link, {
                    to: n.formatMessage(oa.beneficiaryPortalUrl),
                    target: i,
                    rel: "noreferrer"
                }, n.formatMessage(oa.beneficiaryPortalTitle)))), Object(ge.a)("PROVIDER_PORTAL_LINK", a.readableFeatures) && c.a.createElement("div", {
                    className: t.middleLinks
                }, c.a.createElement(ra.a, {
                    color: "primary",
                    "aria-label": "Provider Portal",
                    className: t.middleLinksBtn,
                    href: n.formatMessage(oa.providerPortalUrl),
                    target: i
                }, c.a.createElement(aa.a, {
                    viewBox: "0 0 448 512",
                    className: t.fontIcon1
                }, c.a.createElement("path", {
                    fill: "currentColor",
                    d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM104 424c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24zm216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8z"
                }))), c.a.createElement("h2", null, c.a.createElement("a", {
                    href: n.formatMessage(oa.providerPortalUrl),
                    target: i,
                    rel: "noopener noreferrer"
                }, n.formatMessage(oa.providerPortalTitle)))), Object(ge.a)("HEALTH_PLAN_PORTAL_LINK", a.readableFeatures) && c.a.createElement("div", {
                    className: t.middleLinks
                }, c.a.createElement(ra.a, {
                    color: "primary",
                    "aria-label": "Health Plan Portal",
                    className: t.middleLinksBtn,
                    onClick: r(n.formatMessage(oa.healthPlanPortalUrl)),
                    target: i
                }, c.a.createElement(aa.a, {
                    viewBox: "0 0 640 512",
                    className: t.fontIcon
                }, c.a.createElement("path", {
                    fill: "currentColor",
                    d: "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
                }), "            ")), c.a.createElement("h2", null, c.a.createElement("button", {
                    onClick: r(n.formatMessage(oa.healthPlanPortalUrl))
                }, n.formatMessage(oa.healthPlanPortalTitle)))), Object(ge.a)("CLIENT_PORTAL_LINK", a.readableFeatures) && c.a.createElement("div", {
                    className: t.middleLinks
                }, o ? c.a.createElement(c.a.Fragment, null, c.a.createElement(ra.a, {
                    color: "primary",
                    "aria-label": "Client Portal",
                    className: t.middleLinksBtn,
                    onClick: r(n.formatMessage(oa.clientPortalUrl)),
                    target: i
                }, c.a.createElement(aa.a, {
                    viewBox: "0 0 640 512",
                    className: t.fontIcon
                }, c.a.createElement("path", {
                    fill: "currentColor",
                    d: "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
                }), "            ")), c.a.createElement("h2", null, c.a.createElement("button", {
                    onClick: r(n.formatMessage(oa.clientPortalUrl))
                }, n.formatMessage(oa.clientPortalTitle)))) : c.a.createElement(c.a.Fragment, null, c.a.createElement(ra.a, {
                    color: "primary",
                    "aria-label": "Client Portal",
                    className: t.middleLinksBtn,
                    href: n.formatMessage(oa.clientPortalUrl),
                    target: i
                }, c.a.createElement(aa.a, {
                    viewBox: "0 0 640 512",
                    className: t.fontIcon
                }, c.a.createElement("path", {
                    fill: "currentColor",
                    d: "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
                }), "            ")), c.a.createElement("h2", null, c.a.createElement("a", {
                    href: n.formatMessage(oa.clientPortalUrl),
                    target: i,
                    rel: "noopener noreferrer"
                }, n.formatMessage(oa.clientPortalTitle))))))
            };
        ia.propTypes = {
            classes: k.a.object,
            intl: V.intlShape.isRequired,
            features: k.a.object,
            getLinkOnDialogOpen: k.a.func,
            shouldOpenDialog: k.a.bool,
            target: k.a.string
        };
        var la = Object(V.injectIntl)(Object(U.a)((function(e) {
            return {
                middleLinks: I()({
                    textAlign: "center",
                    paddingRight: 50,
                    paddingLeft: 50,
                    "& h2": {
                        color: e.palette.secondary.main,
                        textAlign: "center",
                        fontSize: 20,
                        "& a": {
                            textDecoration: "none",
                            color: e.palette.primary.main
                        },
                        "& a:hover": {
                            color: e.palette.secondary.dark,
                            textDecoration: "underline"
                        },
                        "& button": {
                            textDecoration: "none",
                            color: e.palette.primary.main,
                            padding: 0,
                            border: "none",
                            outline: "none",
                            backgroundColor: "transparent",
                            cursor: "pointer",
                            fontSize: 20,
                            fontWeight: "bold"
                        },
                        "& button:hover": {
                            color: e.palette.secondary.dark,
                            textDecoration: "underline"
                        }
                    }
                }, e.breakpoints.down("xs"), {
                    paddingRight: 0,
                    paddingLeft: 0
                }),
                fontIcon: {
                    fontSize: "10rem"
                },
                fontIcon1: {
                    fontSize: "8rem"
                },
                middleLinksBtn: I()({
                    height: "15rem",
                    width: "15rem",
                    textAlign: "center",
                    lineHeight: "20rem",
                    color: fe.a.magellanWhite,
                    fontSize: "2rem",
                    backgroundColor: e.palette.primary.main
                }, e.breakpoints.down("xs"), {
                    height: "15rem",
                    width: "15rem"
                })
            }
        }))(ia));
        c.a.forwardRef((function(e, t) {
            return c.a.createElement(Q.Link, he()({
                innerRef: t
            }, e))
        })).displayName = "Member Link";
        var ca = function(e) {
            var t, n, a = e.classes,
                r = e.staticContent,
                o = e.features,
                i = e.getLinkOnDialogOpen,
                l = e.locale;
            return c.a.createElement("div", {
                className: a.root
            }, c.a.createElement("section", null, c.a.createElement("div", {
                className: a.heroImage
            }, c.a.createElement("div", {
                className: a.personImageContainer
            }, c.a.createElement("img", {
                src: na,
                className: a.personImage,
                alt: "Person"
            })), c.a.createElement("div", {
                className: a.heroText
            }, c.a.createElement(H.ExternalContentRenderer, {
                translatorType: null == o || null === (t = o.clientMetadata) || void 0 === t || null === (n = t.unsecured) || void 0 === n ? void 0 : n.translator,
                content: r.welcomeText,
                contentDefaultLang: r.welcomeText,
                contentOtherLang: r.welcomeTextSpanish,
                locale: l,
                defaultLang: "en"
            })))), c.a.createElement("section", {
                className: a.middleContainer
            }, c.a.createElement(la, {
                features: o,
                getLinkOnDialogOpen: i,
                shouldOpenDialog: !1,
                target: "_self"
            })))
        };
        ca.propTypes = {
            classes: k.a.object,
            staticContent: k.a.object,
            features: k.a.object,
            getLinkOnDialogOpen: k.a.func,
            locale: k.a.string
        };
        var sa = Object(U.a)((function(e) {
                var t, n, a;
                return {
                    root: {
                        display: "flex",
                        flexDirection: "column"
                    },
                    heroImage: I()({
                        display: "flex",
                        width: "70%",
                        margin: "0 auto",
                        backgroundImage: "url(".concat(ta, ")"),
                        height: "50%",
                        backgroundPosition: "100% 130%",
                        backgroundRepeat: "no-repeat",
                        position: "relative"
                    }, e.breakpoints.down("md"), {
                        backgroundImage: "none",
                        width: "95%"
                    }),
                    heroText: (t = {
                        textAlign: "center",
                        position: "absolute",
                        top: "0%",
                        left: "50%"
                    }, I()(t, e.breakpoints.down("md"), {
                        position: "relative",
                        top: "0%",
                        left: "0%"
                    }), I()(t, "& h2", I()({
                        color: e.palette.primary.main,
                        fontSize: "3rem"
                    }, e.breakpoints.down("xs"), {
                        fontSize: "2rem"
                    })), I()(t, "& p", I()({
                        fontSize: "2rem"
                    }, e.breakpoints.down("xs"), {
                        fontSize: "1.4rem"
                    })), I()(t, "& a", I()({
                        fontSize: "1.8rem",
                        color: e.colors.links
                    }, e.breakpoints.down("xs"), {
                        fontSize: "1.4rem"
                    })), I()(t, "& a:hover", {
                        color: e.palette.primary.main
                    }), t),
                    personImageContainer: I()({}, e.breakpoints.down("xs"), {
                        display: "none"
                    }),
                    personImage: I()({
                        maxWidth: "50%",
                        height: "auto",
                        display: "block",
                        marginTop: "1rem"
                    }, e.breakpoints.down("md"), {
                        display: "none"
                    }),
                    welcomeMessageContainer: (n = {
                        width: "40%",
                        zIndex: 3,
                        position: "absolute",
                        left: "4rem"
                    }, I()(n, e.breakpoints.down("sm"), {
                        left: "0",
                        width: "99%",
                        textAlign: "center"
                    }), I()(n, "& h1", I()({
                        color: "black",
                        fontSize: "4rem"
                    }, e.breakpoints.down("xs"), {
                        fontSize: "2rem"
                    })), I()(n, "& p", I()({
                        fontSize: "2rem",
                        color: "black"
                    }, e.breakpoints.down("xs"), {
                        fontSize: "1.4rem"
                    })), I()(n, "& a", I()({
                        fontSize: "1.8rem",
                        color: fe.a.magellanDarkBlue
                    }, e.breakpoints.down("xs"), {
                        fontSize: "1.4rem"
                    })), n),
                    reportBtn: {
                        color: fe.a.magellanBlue,
                        backgroundColor: fe.a.magellanWhite,
                        "&:hover": {
                            backgroundColor: fe.a.magellan5Black
                        }
                    },
                    heroPersonImg: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    middleContainer: I()({
                        display: "flex",
                        borderTop: "2px solid ".concat(e.colors.lightGray),
                        boxShadow: "0px 2px 4px ".concat(e.colors.lightGray),
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        minHeight: "350px",
                        paddingTop: "2rem",
                        paddingBottom: "2rem",
                        backgroundColor: fe.a.magellan1Black
                    }, e.breakpoints.down("xs"), {
                        display: "block"
                    }),
                    middleLinks: {
                        textAlign: "center",
                        "& h2": {
                            color: fe.a.magellanBlue,
                            textAlign: "center"
                        }
                    },
                    middleLinksBtn: {
                        height: "20rem",
                        width: "20rem",
                        textAlign: "center",
                        lineHeight: "20rem",
                        color: fe.a.magellanWhite,
                        fontSize: "2rem",
                        backgroundColor: e.palette.primary.main
                    },
                    link: {
                        width: "5rem"
                    },
                    bottomContainer: I()({
                        display: "flex",
                        marginTop: "2rem",
                        marginBottom: "2rem",
                        justifyContent: "center"
                    }, e.breakpoints.down("sm"), {
                        backgroundColor: fe.a.magellanWhite
                    }),
                    panel: (a = {
                        width: "50%",
                        margin: "1rem"
                    }, I()(a, e.breakpoints.down("sm"), {
                        width: "100%"
                    }), I()(a, "& h2", I()({
                        textAlign: "center",
                        color: fe.a.magellanDarkBlue,
                        fontSize: "2.4rem"
                    }, e.breakpoints.down("xs"), {
                        fontSize: "2rem"
                    })), I()(a, "& p", I()({
                        margin: "1rem",
                        textAlign: "center",
                        fontSize: "1.6rem"
                    }, e.breakpoints.down("xs"), {
                        fontSize: "1.4rem"
                    })), a),
                    fontIcon: {
                        fontSize: "12rem"
                    },
                    headerText: {
                        alignSelf: "center",
                        color: fe.a.magellanDarkBlue
                    }
                }
            }))(ca),
            ua = n(84),
            da = n.p + "images/02526a826bc2f6a87c98ad2844e11fc8-hero.svg",
            ma = n(204),
            fa = n(261),
            ga = n.p + "images/a2a8aa60a6c7ce7ead18b20bc64d5fb1-Medi-Cal_Hero.svg",
            pa = n.p + "images/964690b161fe029313a170e72d7e1e1f-Newsom-badge.png",
            Ea = n.p + "images/fb25a773efa23616ce4793f06013208a-Ghaly-badge.png",
            ha = n.p + "images/903eb84a0f05bc60b5246c5b11b7ced9-director-badge.png",
            ba = n.p + "images/d302271f8053796eb83fa5350f74a261-stop-icon.svg",
            Oa = n.p + "images/22c5ab4126d0ee5a1b2f8e2c09fcba7f-tint-solid.svg",
            _a = n.p + "images/912e09ac8189f675be708b6d7f932d96-clipboard-list-solid.svg",
            Ca = n.p + "images/01d6db00f43fed7e654c40da09d84308-lightbulb.svg",
            Aa = n.p + "images/c903f7cbb13e0271c35708785639ad16-email-subscription.svg",
            La = n(312);
        c.a.forwardRef((function(e, t) {
            return c.a.createElement(Q.Link, he()({
                innerRef: t
            }, e))
        })).displayName = "Member Link";
        var Na = function(e) {
            var t = e.classes,
                n = e.intl,
                a = e.staticContent,
                r = e.showExternalAlert,
                o = e.features,
                i = e.push,
                s = e.setPharmacySearchAddress,
                u = Object(l.useState)(!1),
                d = q()(u, 2),
                m = d[0],
                f = d[1],
                g = Object(l.useState)(null),
                p = q()(g, 2),
                E = p[0],
                h = p[1];
            return c.a.createElement("div", {
                className: t.root
            }, c.a.createElement(Vt, {
                open: m,
                handleClose: function() {
                    return function() {
                        f(!1)
                    }
                },
                buttonLink: E,
                variant: "contained"
            }), c.a.createElement("section", {
                className: t.topContainer
            }, c.a.createElement("div", {
                className: t.heroImgContainer
            }, c.a.createElement("img", {
                src: da,
                className: t.heroImg,
                alt: "Magellan Mosaic Branding Background"
            })), c.a.createElement("div", {
                className: t.welcomeMessageContainer
            }, c.a.createElement(fa.a, {
                source: a.welcomeText,
                escapeHtml: !1
            }), c.a.createElement(at.a, {
                variant: "contained",
                href: "/home/education/",
                className: t.reportBtn
            }, a.buttonText)), c.a.createElement("div", {
                className: t.heroPersonImgContainer
            }, c.a.createElement("img", {
                src: ga,
                className: t.heroPersonImg,
                alt: "Smiling Woman"
            }))), c.a.createElement("section", {
                className: t.bottomContainer
            }, (Object(pe.c)() ? Object(ge.a)("MEMBER_UNSEC_NAV_TOOLS_RESOURCES_FIND_A_PHARMACY", o.readableFeatures) : Object(ge.a)("MEMBER_NAV_UNSEC_SEC_DRUG_LOOKUP", o.readableFeatures)) && c.a.createElement("div", {
                className: t.pharmacyPanel
            }, c.a.createElement("h2", null, n.formatMessage(oa.findAPharmacyTitle)), c.a.createElement(H.PharmacyLocatorSearch, {
                collapsedSearch: !0,
                handlePharmacySearch: function(e) {
                    var t = e.formattedAddress;
                    s(t), i("/home/find-a-pharmacy")
                },
                translations: La.a
            })), "" !== a.bottomText && c.a.createElement("div", {
                className: t.panel
            }, c.a.createElement("div", {
                className: t.emailSubIcon
            }, c.a.createElement("img", {
                src: Aa,
                alt: "Email Subscription Icon"
            })), c.a.createElement("div", {
                className: t.emailSubInfo
            }, c.a.createElement(fa.a, {
                source: a.bottomText,
                escapeHtml: !1
            })))), c.a.createElement("section", {
                className: t.middleContainer
            }, c.a.createElement(la, {
                features: o,
                getLinkOnDialogOpen: function(e) {
                    return function() {
                        f(!0), h(e)
                    }
                },
                shouldOpenDialog: !0,
                target: "_blank"
            })), c.a.createElement("section", {
                className: t.bannersSection
            }, c.a.createElement("div", {
                className: t.banner
            }, c.a.createElement("div", {
                style: {
                    background: "url(".concat(pa, ") right bottom no-repeat"),
                    backgroundSize: "78% 108%",
                    height: 90
                }
            }, c.a.createElement("div", {
                className: t.bannerTitle
            }, c.a.createElement("span", null, a.banners[0].bannerTitle)), c.a.createElement("div", {
                className: t.bannerSubtitle
            }, c.a.createElement("p", null, a.banners[0].bannerSubtitle)), "true" === a.banners[0].isExternalSite ? c.a.createElement(at.a, {
                component: "a",
                onClick: function() {
                    return r(!0, a.banners[0].bannerLink)
                },
                color: "primary",
                className: t.bannerLink
            }, a.banners[0].bannerLinkText) : c.a.createElement(at.a, {
                component: "a",
                href: a.banners[0].bannerLink,
                color: "primary",
                className: t.bannerLink
            }, a.banners[0].bannerLinkText))), c.a.createElement("div", {
                className: t.banner
            }, c.a.createElement("div", {
                style: {
                    background: "url(".concat(Ea, ") right bottom no-repeat"),
                    backgroundSize: "78% 108%",
                    height: 90
                }
            }, c.a.createElement("div", {
                className: t.bannerTitle
            }, c.a.createElement("span", null, a.banners[1].bannerTitle)), c.a.createElement("div", {
                className: t.bannerSubtitle
            }, c.a.createElement("p", null, a.banners[1].bannerSubtitle)), "true" === a.banners[1].isExternalSite ? c.a.createElement(at.a, {
                component: "a",
                onClick: function() {
                    return r(!0, a.banners[1].bannerLink)
                },
                color: "primary",
                className: t.bannerLink
            }, a.banners[1].bannerLinkText) : c.a.createElement(at.a, {
                component: "a",
                href: a.banners[1].bannerLink,
                color: "primary",
                className: t.bannerLink
            }, a.banners[1].bannerLinkText))), c.a.createElement("div", {
                className: t.banner
            }, c.a.createElement("div", {
                style: {
                    background: "url(".concat(ha, ") right bottom no-repeat"),
                    backgroundSize: "78% 108%",
                    height: 90
                }
            }, c.a.createElement("div", {
                className: t.bannerTitle
            }, c.a.createElement("span", null, a.banners[2].bannerTitle)), c.a.createElement("div", {
                className: t.bannerSubtitle
            }, c.a.createElement("p", null, a.banners[2].bannerSubtitle)), "true" === a.banners[2].isExternalSite ? c.a.createElement(at.a, {
                component: "a",
                onClick: function() {
                    return r(!0, a.banners[2].bannerLink)
                },
                color: "primary",
                className: t.bannerLink
            }, a.banners[2].bannerLinkText) : c.a.createElement(at.a, {
                component: "a",
                href: a.banners[2].bannerLink,
                color: "primary",
                className: t.bannerLink
            }, a.banners[2].bannerLinkText)))), c.a.createElement("div", {
                className: t.linksContainer
            }, c.a.createElement("div", {
                className: t.links
            }, c.a.createElement("img", {
                src: ba,
                alt: "".concat(a.links[0].linkText, " Icon"),
                className: t.linkIcon
            }), "true" === a.links[0].isExternalSite ? c.a.createElement(at.a, {
                component: "a",
                onClick: function() {
                    return r(!0, a.links[0].link)
                },
                color: "primary",
                className: t.buttonLink
            }, a.links[0].linkText) : c.a.createElement(at.a, {
                component: "a",
                href: a.links[0].link,
                color: "primary",
                className: t.buttonLink
            }, a.links[0].linkText)), c.a.createElement("div", {
                className: t.links
            }, c.a.createElement("img", {
                src: Oa,
                alt: "".concat(a.links[1].linkText, " Icon"),
                className: t.linkIcon
            }), "true" === a.links[1].isExternalSite ? c.a.createElement(at.a, {
                component: "a",
                onClick: function() {
                    return r(!0, a.links[1].link)
                },
                color: "primary",
                className: t.buttonLink
            }, a.links[1].linkText) : c.a.createElement(at.a, {
                component: "a",
                href: a.links[1].link,
                color: "primary",
                className: t.buttonLink
            }, a.links[1].linkText)), c.a.createElement("div", {
                className: t.links
            }, c.a.createElement("img", {
                src: _a,
                alt: "".concat(a.links[2].linkText, " Icon"),
                className: t.linkIcon
            }), "true" === a.links[2].isExternalSite ? c.a.createElement(at.a, {
                component: "a",
                onClick: function() {
                    return r(!0, a.links[2].link)
                },
                color: "primary",
                className: t.buttonLink
            }, a.links[2].linkText) : c.a.createElement(at.a, {
                component: "a",
                href: a.links[2].link,
                color: "primary",
                className: t.buttonLink
            }, a.links[2].linkText)), c.a.createElement("div", {
                className: t.links
            }, c.a.createElement("img", {
                src: Ca,
                alt: "".concat(a.links[3].linkText, " Icon"),
                className: t.linkIcon
            }), "true" === a.links[3].isExternalSite ? c.a.createElement(at.a, {
                component: "a",
                onClick: function() {
                    return r(!0, a.links[3].link)
                },
                color: "primary",
                className: t.buttonLink
            }, a.links[3].linkText) : c.a.createElement(at.a, {
                component: "a",
                href: a.links[3].link,
                color: "primary",
                className: t.buttonLink
            }, a.links[3].linkText))))
        };
        Na.propTypes = {
            classes: k.a.object,
            staticContent: k.a.object,
            showExternalAlert: k.a.func,
            intl: V.intlShape.isRequired,
            features: k.a.object,
            push: k.a.func,
            setPharmacySearchAddress: k.a.func
        };
        var Ta = Object(V.injectIntl)(Object(U.a)((function(e) {
            var t, n, a, r, o, i, l;
            return {
                root: {
                    display: "flex",
                    flexDirection: "column"
                },
                heroImgContainer: I()({
                    width: "0%"
                }, e.breakpoints.down("sm"), {
                    width: "100%",
                    backgroundColor: fe.a.californiaBlue
                }),
                heroPersonImgContainer: I()({
                    width: "100%"
                }, e.breakpoints.down("sm"), {
                    display: "none"
                }),
                welcomeMessageContainer: (t = {
                    width: "40%",
                    zIndex: 3,
                    position: "absolute",
                    left: "4rem"
                }, I()(t, e.breakpoints.down("md"), {
                    width: "46%"
                }), I()(t, e.breakpoints.down("sm"), {
                    left: "0",
                    width: "99%",
                    textAlign: "center"
                }), I()(t, "& h1", I()({
                    color: fe.a.magellanWhite,
                    fontSize: "4rem"
                }, e.breakpoints.down("xs"), {
                    fontSize: "2rem"
                })), I()(t, "& p", I()({
                    fontSize: "2rem",
                    color: fe.a.magellanWhite
                }, e.breakpoints.down("xs"), {
                    fontSize: "1.4rem",
                    marginBottom: "2rem"
                })), I()(t, "& a", I()({
                    fontSize: "1.8rem",
                    color: fe.a.magellanDarkBlue
                }, e.breakpoints.down("xs"), {
                    fontSize: "1.4rem"
                })), t),
                reportBtn: {
                    color: fe.a.californiaBlue,
                    backgroundColor: fe.a.magellanWhite,
                    "&:hover": {
                        backgroundColor: fe.a.magellan5Black
                    },
                    margin: "0 1rem 1rem 0"
                },
                heroImg: (n = {
                    height: "699px"
                }, I()(n, e.breakpoints.down("md"), {
                    height: "500px"
                }), I()(n, e.breakpoints.down("sm"), {
                    height: "0%"
                }), I()(n, e.breakpoints.down("xs"), {
                    height: "0%"
                }), n),
                heroPersonImg: (a = {
                    width: "925px",
                    height: "auto",
                    float: "right"
                }, I()(a, e.breakpoints.down("md"), {
                    width: "752px"
                }), I()(a, e.breakpoints.down("sm"), {
                    height: "0px"
                }), I()(a, e.breakpoints.down("xs"), {
                    height: "0px"
                }), a),
                topContainer: (r = {
                    display: "flex",
                    height: "499px"
                }, I()(r, e.breakpoints.down("md"), {
                    height: "415px"
                }), I()(r, e.breakpoints.down("sm"), {
                    height: "325px"
                }), I()(r, e.breakpoints.down("xs"), {
                    height: "225px"
                }), r),
                middleContainer: I()({
                    display: "flex",
                    borderTop: "5px solid ".concat(fe.a.magellan5Black),
                    borderBottom: "5px solid ".concat(fe.a.magellan5Black),
                    justifyContent: "space-around",
                    padding: "5rem 8rem",
                    backgroundColor: fe.a.magellanWhite
                }, e.breakpoints.down("sm"), {
                    display: "block"
                }),
                link: {
                    width: "5rem"
                },
                bottomContainer: (o = {
                    display: "flex",
                    justifyContent: "center",
                    borderTop: "5px solid ".concat(fe.a.magellan5Black)
                }, I()(o, e.breakpoints.down("sm"), {
                    backgroundColor: fe.a.magellanWhite
                }), I()(o, e.breakpoints.down("sm"), {
                    flexWrap: "wrap"
                }), o),
                pharmacyPanel: I()({
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "100%",
                    backgroundColor: fe.a.magellanWhite,
                    padding: "3rem",
                    "& h2": I()({
                        color: fe.a.californiaBlue,
                        margin: "1.5rem 0",
                        fontSize: "2.4rem"
                    }, e.breakpoints.down("sm"), {
                        fontSize: "2rem"
                    })
                }, e.breakpoints.down("sm"), {
                    padding: "1.5rem 1.5rem 2.5rem 1.5rem"
                }),
                panel: I()({
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    backgroundColor: fe.a.magellanWhite,
                    padding: "3rem"
                }, e.breakpoints.down("sm"), {
                    borderTop: "5px solid ".concat(fe.a.magellan5Black),
                    padding: "1.5rem"
                }),
                emailSubIcon: {
                    marginRight: "2rem",
                    "& img": {
                        height: "10rem"
                    }
                },
                emailSubInfo: {
                    "& a": {
                        color: fe.a.californiaLinkBlue
                    },
                    "& a:hover": {
                        color: fe.a.californiaMagenta
                    },
                    "& h2": I()({
                        color: fe.a.californiaBlue,
                        margin: "1.5rem 0",
                        fontSize: "2.4rem"
                    }, e.breakpoints.down("xs"), {
                        fontSize: "2rem"
                    }),
                    "& p": I()({
                        margin: "0.9rem 0",
                        fontSize: "1.6rem"
                    }, e.breakpoints.down("xs"), {
                        fontSize: "1.4rem"
                    })
                },
                fontIcon: {
                    fontSize: "12rem"
                },
                fontIcon1: {
                    fontSize: "10rem"
                },
                headerText: {
                    alignSelf: "center",
                    color: fe.a.magellanDarkBlue
                },
                bannersSection: I()({
                    backgroundColor: fe.a.magellan5Black,
                    height: 172,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }, e.breakpoints.down("sm"), {
                    flexWrap: "wrap",
                    height: "100%",
                    padding: "2rem"
                }),
                banner: I()({
                    width: 375,
                    height: 90,
                    border: "1px solid ".concat(fe.a.magellan30Black),
                    marginRight: "7rem"
                }, e.breakpoints.down("sm"), {
                    margin: "1rem auto"
                }),
                bannerTitle: {
                    background: "linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%)",
                    margin: "0 30px .2em 0",
                    padding: "4px 35px 2px 10px",
                    fontSize: "12px"
                },
                bannerSubtitle: {
                    margin: ".5rem 0",
                    padding: "4px 35px 2px 10px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    "& p": {
                        margin: 0
                    }
                },
                bannerLink: {
                    padding: 0,
                    marginLeft: 10,
                    marginTop: "1rem",
                    fontSize: "10px",
                    backgroundColor: fe.a.magellan5Black,
                    color: fe.a.californiaLinkBlue,
                    textTransform: "none",
                    textDecoration: "underline",
                    "& :hover": {
                        color: fe.a.californiaBlue,
                        backgroundColor: fe.a.magellan5Black,
                        textDecoration: "underline"
                    }
                },
                linksContainer: (i = {
                    padding: "20px",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: fe.a.magellan5Black
                }, I()(i, e.breakpoints.down("md"), {
                    justifyContent: "flex-start"
                }), I()(i, e.breakpoints.down("sm"), {
                    flexWrap: "wrap",
                    height: "100%",
                    padding: "2rem"
                }), i),
                linkIcon: I()({
                    display: "flex",
                    marginRight: "1rem"
                }, e.breakpoints.down("sm"), {
                    width: "10%"
                }),
                links: (l = {
                    display: "flex",
                    flexDirection: "row",
                    marginRight: "12rem"
                }, I()(l, e.breakpoints.down("md"), {
                    marginRight: "5rem"
                }), I()(l, e.breakpoints.down("sm"), {
                    width: "100%",
                    marginTop: "2rem",
                    marginBottom: "2rem",
                    marginRight: "0rem"
                }), l),
                buttonLink: I()({
                    outline: "none",
                    border: "none",
                    backgroundColor: fe.a.magellan5Black,
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    fontSize: "18px",
                    color: fe.a.californiaBlue,
                    cursor: "pointer",
                    textTransform: "none",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    "& :hover": {
                        color: fe.a.californiaMagenta,
                        textDecoration: "underline"
                    }
                }, e.breakpoints.down("sm"), {
                    width: "100%",
                    justifyContent: "flex-start"
                })
            }
        }))(Object(d.c)(null, (function(e) {
            return {
                push: function(t) {
                    return e(Object(ua.d)(t))
                },
                setPharmacySearchAddress: function(t) {
                    return e(Object(ma.c)(t))
                }
            }
        }))(Na)));

        function Sa(e) {
            var t = e.classes,
                n = e.features,
                a = e.staticContent,
                r = e.showExternalAlert,
                o = e.locale,
                i = Object(l.useState)(null == n ? void 0 : n.clientCode),
                s = q()(i, 2),
                u = s[0],
                d = s[1];
            Object(l.useEffect)((function() {
                d(n.clientCode)
            }), [n.clientCode]);
            var m = function() {
                    switch (u) {
                        case "medicalrx":
                            return Ta;
                        default:
                            return sa
                    }
                }(),
                f = Object(l.useState)(!1),
                g = q()(f, 2),
                p = g[0],
                E = g[1],
                h = Object(l.useState)(null),
                b = q()(h, 2),
                O = b[0],
                _ = b[1],
                C = function() {
                    E(!0)
                };
            return c.a.createElement("div", {
                className: t.root
            }, c.a.createElement(m, {
                features: n,
                staticContent: a,
                showExternalAlert: r,
                handleOpenDialog: C,
                handleCloseDialog: function() {
                    return function() {
                        E(!1)
                    }
                },
                getLinkOnDialogOpen: function(e) {
                    return function() {
                        C(), _(e)
                    }
                },
                dialogOpen: p,
                buttonLink: O,
                locale: o
            }))
        }
        Sa.propTypes = {
            classes: k.a.object,
            features: k.a.object,
            staticContent: k.a.object,
            showExternalAlert: k.a.func,
            locale: k.a.string
        };
        var ya = Object(U.a)((function(e) {
                return {
                    root: {
                        display: "flex",
                        flexDirection: "column"
                    },
                    headerText: {
                        alignSelf: "center",
                        color: fe.a.magellanDarkBlue
                    }
                }
            }))(Sa),
            Ma = Object(x.a)((function(e) {
                return e.landingPage
            }), (function(e) {
                return e
            }));

        function Ra(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = v()(e);
                if (t) {
                    var r = v()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return M()(this, n)
            }
        }
        var va = function(e) {
            S()(n, e);
            var t = Ra(n);

            function n(e) {
                var a;
                return _()(this, n), a = t.call(this, e), I()(N()(a), "state", {
                    landingPageContent: a.props.landingPage.landingPageContent
                }), e.getLandingPageStaticContent({
                    isCMS: e.global.isCMS,
                    cmsSiteName: e.global.cmsSiteName,
                    translator: e.global.features.clientMetadata.unsecured.translator,
                    locale: e.locale
                }), a
            }
            return A()(n, [{
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props,
                        n = t.global,
                        a = t.locale;
                    this.props.landingPage.landingPageContent !== e.landingPage.landingPageContent && this.setState({
                        landingPageContent: this.props.landingPage.landingPageContent
                    }), a !== e.locale && this.props.getLandingPageStaticContent({
                        isCMS: n.isCMS,
                        cmsSiteName: n.cmsSiteName,
                        translator: n.features.clientMetadata.unsecured.translator,
                        locale: a
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.global,
                        n = e.showExternalAlert,
                        a = e.locale;
                    return this.state.landingPageContent && c.a.createElement(ya, {
                        features: t.features,
                        staticContent: this.state.landingPageContent,
                        showExternalAlert: n,
                        locale: a
                    })
                }
            }]), n
        }(c.a.Component);
        va.propTypes = {
            global: k.a.object,
            getLandingPageStaticContent: k.a.func,
            landingPage: k.a.object,
            showExternalAlert: k.a.func,
            locale: k.a.string
        };
        var wa = Object(x.b)({
                landingPage: Ma,
                global: B.d,
                locale: It.b
            }),
            Ia = Object(W.o)(Object(d.c)(wa, (function(e) {
                return {
                    getLandingPageStaticContent: function(t) {
                        return e(Object(z.r)(t))
                    }
                }
            }))(va)),
            Pa = function(e) {
                var t = e.address,
                    n = e.classes,
                    a = e.features,
                    r = e.handlePharmacySearch,
                    o = e.handlePharmacySearchError,
                    i = e.headerDisclaimerSummary,
                    l = e.headerDisclaimerDetails,
                    s = e.intl,
                    u = e.searchResults;
                return c.a.createElement("div", {
                    className: n.root
                }, c.a.createElement("h1", {
                    className: n.headerText
                }, s.formatMessage(La.a.findAPharmacy)), c.a.createElement(H.PharmacyLocator, {
                    address: t,
                    features: a,
                    handlePharmacySearch: r,
                    handlePharmacySearchError: o,
                    hasFeature: ge.a,
                    headerDisclaimerSummary: i,
                    headerDisclaimerDetails: l,
                    MarkdownRender: fa.a,
                    searchResults: u,
                    translations: La.a
                }))
            };
        Pa.propTypes = {
            address: k.a.string,
            classes: k.a.object,
            features: k.a.array,
            intl: V.intlShape,
            handlePharmacySearch: k.a.func,
            handlePharmacySearchError: k.a.func,
            headerDisclaimerSummary: k.a.string,
            headerDisclaimerDetails: k.a.string,
            searchResults: k.a.array
        };
        var ka = Object(V.injectIntl)(Object(U.a)((function(e) {
                return {
                    root: {
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "column"
                    },
                    headerText: {
                        alignSelf: "center",
                        color: e.palette.primary.main
                    }
                }
            }))(Pa)),
            ja = Object(x.a)((function(e) {
                return e.pharmacyLocator
            }), (function(e) {
                return e
            }));

        function xa(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = v()(e);
                if (t) {
                    var r = v()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return M()(this, n)
            }
        }
        var Da = function(e) {
            S()(n, e);
            var t = xa(n);

            function n() {
                var e;
                _()(this, n);
                for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
                return e = t.call.apply(t, [this].concat(r)), I()(N()(e), "state", {
                    address: null,
                    pharmacySearchResults: null
                }), I()(N()(e), "getHeaderDisclaimer", (function() {
                    var t = e.props,
                        n = t.global,
                        a = t.locale;
                    if (Object(ge.a)("PHARMACY_LOCATOR_HEADER_DISCLAIMER", n.features.readableFeatures)) {
                        var r = {
                            isCMS: n.features.clientMetadata.unsecured.isCMS,
                            cmsSiteName: n.features.clientMetadata.unsecured.cmsSiteName,
                            translator: n.features.clientMetadata.unsecured.translator,
                            locale: a
                        };
                        e.props.getPharmacyDisclaimer(r)
                    }
                })), e
            }
            return A()(n, [{
                key: "componentDidMount",
                value: function() {
                    this.getHeaderDisclaimer(), null != this.props.pharmacyLocator.address && (this.setState({
                        address: this.props.pharmacyLocator.address
                    }), this.props.setPharmacySearchAddress(null))
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    e.locale !== this.props.locale && this.getHeaderDisclaimer(), this.props.pharmacyLocator !== e.pharmacyLocator && this.props.pharmacyLocator.pharmacySearchResults !== e.pharmacyLocator.pharmacySearchResults && this.setState({
                        pharmacySearchResults: this.props.pharmacyLocator.pharmacySearchResults
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props,
                        n = t.classes,
                        a = t.global,
                        r = t.getPharmacySearchResults,
                        o = t.setPharmacySearchResultsFailure,
                        i = t.pharmacyLocator,
                        l = this.state,
                        s = l.address,
                        u = l.pharmacySearchResults;
                    return c.a.createElement("div", {
                        className: n.root
                    }, c.a.createElement(ka, {
                        address: s,
                        features: null === (e = a.features) || void 0 === e ? void 0 : e.readableFeatures,
                        handlePharmacySearch: r,
                        handlePharmacySearchError: o,
                        headerDisclaimerDetails: i.disclaimerDetails,
                        headerDisclaimerSummary: i.disclaimerSummary,
                        searchResults: u
                    }))
                }
            }]), n
        }(c.a.Component);
        Da.propTypes = {
            classes: k.a.object,
            global: k.a.object,
            locale: k.a.string,
            pharmacyLocator: k.a.object,
            getPharmacyDisclaimer: k.a.func,
            getPharmacySearchResults: k.a.func,
            setPharmacySearchResultsFailure: k.a.func,
            setPharmacySearchAddress: k.a.func
        };
        var Ua = Object(x.b)({
                global: B.d,
                locale: It.b,
                pharmacyLocator: ja
            }),
            Fa = Object(W.o)(Object(d.c)(Ua, (function(e) {
                return {
                    getPharmacyDisclaimer: function(t) {
                        return e(Object(ma.a)(t))
                    },
                    getPharmacySearchResults: function(t) {
                        return e(Object(ma.b)(t))
                    },
                    setPharmacySearchResultsFailure: function(t) {
                        return e(Object(ma.d)(t))
                    },
                    setPharmacySearchAddress: function(t) {
                        return e(Object(ma.c)(t))
                    }
                }
            }))(Object(U.a)({
                root: {
                    margin: "0 2rem 15px"
                }
            })(Da))),
            Ha = Object(l.lazy)((function() {
                return n.e(20).then(n.bind(null, 1495))
            })),
            Ba = Object(l.lazy)((function() {
                return n.e(16).then(n.bind(null, 1488))
            })),
            Ga = Object(l.lazy)((function() {
                return n.e(22).then(n.bind(null, 1503))
            })),
            Ya = Object(l.lazy)((function() {
                return n.e(9).then(n.bind(null, 1505))
            })),
            za = Object(l.lazy)((function() {
                return n.e(24).then(n.bind(null, 1491))
            })),
            Wa = Object(l.lazy)((function() {
                return n.e(19).then(n.bind(null, 1496))
            })),
            Ka = Object(l.lazy)((function() {
                return n.e(2).then(n.bind(null, 1481))
            })),
            qa = Object(l.lazy)((function() {
                return n.e(7).then(n.bind(null, 1482))
            })),
            Va = Object(l.lazy)((function() {
                return n.e(8).then(n.bind(null, 1483))
            })),
            Xa = Object(l.lazy)((function() {
                return n.e(3).then(n.bind(null, 1484))
            })),
            Qa = Object(l.lazy)((function() {
                return n.e(27).then(n.bind(null, 1497))
            })),
            Ja = Object(l.lazy)((function() {
                return n.e(5).then(n.bind(null, 1485))
            })),
            Za = Object(l.lazy)((function() {
                return n.e(4).then(n.bind(null, 1486))
            })),
            $a = Object(l.lazy)((function() {
                return n.e(26).then(n.bind(null, 1494))
            })),
            er = Object(l.lazy)((function() {
                return n.e(14).then(n.bind(null, 1504))
            })),
            tr = Object(l.lazy)((function() {
                return n.e(17).then(n.bind(null, 1487))
            })),
            nr = Object(l.lazy)((function() {
                return n.e(12).then(n.bind(null, 1499))
            })),
            ar = Object(l.lazy)((function() {
                return n.e(25).then(n.bind(null, 1502))
            })),
            rr = Object(l.lazy)((function() {
                return n.e(21).then(n.bind(null, 1493))
            })),
            or = Object(l.lazy)((function() {
                return n.e(10).then(n.bind(null, 1498))
            })),
            ir = Object(l.lazy)((function() {
                return n.e(15).then(n.bind(null, 1500))
            })),
            lr = Object(l.lazy)((function() {
                return n.e(11).then(n.bind(null, 1501))
            })),
            cr = Object(l.lazy)((function() {
                return n.e(13).then(n.bind(null, 1490))
            })),
            sr = Object(l.lazy)((function() {
                return n.e(18).then(n.bind(null, 1492))
            })),
            ur = Object(l.lazy)((function() {
                return n.e(23).then(n.bind(null, 1489))
            })),
            dr = function(e) {
                var t = e.features,
                    n = e.showExternalAlert,
                    a = e.theme,
                    r = e.webChatClick,
                    o = e.webChatClose;
                return c.a.createElement(Qn, null, c.a.createElement(W.g, null, c.a.createElement(Zn, {
                    exact: !0,
                    path: "/home",
                    render: function(e) {
                        return c.a.createElement(Ia, he()({}, e, {
                            showExternalAlert: n,
                            features: t
                        }))
                    },
                    title: Yn.indexHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/home/faq",
                    component: rr,
                    title: Yn.faqHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/home/education",
                    component: Ha,
                    title: Yn.educationHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/home/contact",
                    render: function(e) {
                        return c.a.createElement(Ba, he()({}, e, {
                            webChatClick: function() {
                                return r()
                            }
                        }))
                    },
                    title: Yn.contactHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/home/find-a-pharmacy",
                    component: Fa,
                    title: Yn.findAPharmacyHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/home/mass-adjustments",
                    component: za,
                    title: Yn.massAdjustmentsHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/home/system-status",
                    component: $a,
                    title: Yn.systemStatusHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/home/search",
                    component: ar,
                    title: Yn.searchHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/home/cdl",
                    component: or,
                    title: Yn.CDLHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/home/provider-manual",
                    component: ir,
                    title: Yn.ProviderManualHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/home/enteral-nutrition-products",
                    component: lr,
                    title: Yn.ENPHeadTitle
                }), c.a.createElement(W.d, {
                    exact: !0,
                    path: "/member",
                    component: tr,
                    title: Yn.memberIndexHeadTitle
                }), c.a.createElement(W.d, {
                    path: h.a.OKTA_CALLBACK_PATH,
                    component: g.LoginCallback
                }), c.a.createElement(Zn, {
                    path: "/member/login",
                    render: function(e) {
                        return c.a.createElement(Ya, he()({}, e, {
                            webChatClose: function() {
                                return o()
                            }
                        }))
                    },
                    title: Yn.loginHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/member/register",
                    component: Ja,
                    title: Yn.registerHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/member/register-confirmation",
                    component: Za,
                    title: Yn.confirmationHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/member/forgot-email-password",
                    component: Ka,
                    title: Yn.forgotEmailPasswordHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/member/forgot-email-confirmation",
                    component: qa,
                    title: Yn.forgotEmailConfirmationHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/member/forgot-password-confirmation",
                    component: Va,
                    title: Yn.forgotPasswordConfirmationHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/security/forgotpassword",
                    component: Xa,
                    title: Yn.resetPasswordHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/security/forgotpassword/resetpassword",
                    component: Xa,
                    title: Yn.resetPasswordHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/member/helper-utilities",
                    component: Ga,
                    title: Yn.helperUtilitiesHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/member/glossary",
                    component: cr,
                    title: Yn.glossaryHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/member/documents",
                    component: sr,
                    title: Yn.glossaryHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/member/links",
                    component: ur,
                    title: Yn.glossaryHeadTitle
                }), c.a.createElement(ea, {
                    path: "/member/dashboard",
                    component: tr,
                    title: Yn.dashboardHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/member/drug-lookup",
                    component: Wa,
                    title: Yn.drugLookupHeadTitle
                }), c.a.createElement(Zn, {
                    exact: !0,
                    path: "/member/contact",
                    render: function(e) {
                        return c.a.createElement(Ba, he()({}, e, {
                            webChatClick: function() {
                                return r()
                            }
                        }))
                    },
                    title: Yn.contactMemberTitle
                }), c.a.createElement(Zn, {
                    path: "/member/unsecured-messaging",
                    component: Qa,
                    title: Yn.unsecuredMessagingHeadTitle
                }), c.a.createElement(ea, {
                    path: "/member/message-center",
                    render: function(e) {
                        return c.a.createElement(er, he()({}, e, {
                            theme: a
                        }))
                    },
                    title: Yn.messageCenterHeadTitle
                }), c.a.createElement(Zn, {
                    path: "/member/forms-information",
                    component: nr,
                    title: Yn.formsAndInfoHeadTitle
                })))
            };
        dr.propTypes = {
            features: k.a.object,
            showExternalAlert: k.a.func,
            theme: k.a.object,
            webChatClick: k.a.func,
            webChatClose: k.a.func
        };
        var mr = dr,
            fr = Object(V.defineMessages)({
                internalLinkMessage: {
                    id: "INTERNAL_MODAL_MSG",
                    defaultMessage: "You are being directed to {INTERNAL_URL} which is controlled by California DHCS. Click [OK] to continue to this site or click [Cancel] to return to the page you were viewing."
                },
                externalLinkMessage: {
                    id: "APP_COMPONENTS_MODAL_DESC",
                    defaultMessage: "The link you selected will redirect you to an external site which is not controlled by California DHCS. Click [OK] to continue to this third-party site or click [Cancel] to return to page you were viewing."
                }
            });

        function gr(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = v()(e);
                if (t) {
                    var r = v()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return M()(this, n)
            }
        }
        var pr = function(e) {
            S()(n, e);
            var t = gr(n);

            function n() {
                var e;
                _()(this, n);
                for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
                return e = t.call.apply(t, [this].concat(r)), I()(N()(e), "state", {
                    open: !1,
                    externalLink: ""
                }), I()(N()(e), "handleClose", (function() {
                    e.props.showExternalAlert(!1)
                })), I()(N()(e), "handleLinkOpen", (function() {
                    window.open(e.state.externalLink), e.props.showExternalAlert(!1)
                })), e
            }
            return A()(n, [{
                key: "componentDidUpdate",
                value: function(e) {
                    this.props.isOpenDialog !== e.isOpenDialog && this.setState({
                        open: this.props.isOpenDialog,
                        externalLink: this.props.externalLink
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = location.hostname;
                    return c.a.createElement("div", null, c.a.createElement(Bt.a, {
                        open: this.state.open,
                        onClose: this.handleClose,
                        "aria-labelledby": "alert-dialog-title",
                        "aria-describedby": "alert-dialog-description"
                    }, c.a.createElement(Wt.a, {
                        id: "alert-dialog-title"
                    }, "You are leaving the https://".concat(e, " website")), c.a.createElement(Yt.a, null, c.a.createElement(zt.a, {
                        id: "alert-dialog-description"
                    }, c.a.createElement(V.FormattedMessage, he()({}, fr.externalLinkMessage, {
                        values: {
                            EXTERNAL_URL: c.a.createElement(c.a.Fragment, null, this.state.externalLink)
                        }
                    })))), c.a.createElement(Gt.a, null, c.a.createElement(at.a, {
                        onClick: this.handleClose,
                        color: "primary"
                    }, "Cancel"), c.a.createElement(at.a, {
                        onClick: this.handleLinkOpen,
                        variant: "contained",
                        color: "primary"
                    }, "Ok"))))
                }
            }]), n
        }(c.a.Component);
        pr.propTypes = {
            isOpenDialog: k.a.bool,
            showExternalAlert: k.a.func,
            externalLink: k.a.string
        };
        var Er = Object(d.c)((function(e) {
            return e
        }), (function(e) {
            return {
                showExternalAlert: function(t) {
                    return e(Object(z.x)(t))
                }
            }
        }))(pr);

        function hr(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = v()(e);
                if (t) {
                    var r = v()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return M()(this, n)
            }
        }
        var br = function(e) {
            S()(n, e);
            var t = hr(n);

            function n() {
                var e;
                _()(this, n);
                for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
                return e = t.call.apply(t, [this].concat(r)), I()(N()(e), "render", (function() {
                    var t = e.props,
                        n = t.messages,
                        a = t.children,
                        r = t.language,
                        o = void 0 === r ? "en" : r,
                        i = t.reduxMessages,
                        l = t.translator,
                        s = t.locale;
                    if ("google" !== l) {
                        var u = "en" === o ? "en-US" : "es-ES";
                        return c.a.createElement(V.IntlProvider, {
                            locale: s,
                            messages: n[u]
                        }, c.a.Children.only(a))
                    }
                    return c.a.createElement(V.IntlProvider, {
                        locale: o,
                        messages: i[o]
                    }, c.a.Children.only(a))
                })), e
            }
            return n
        }(c.a.PureComponent);
        br.propTypes = {
            messages: k.a.object,
            children: k.a.element.isRequired,
            language: k.a.string,
            translator: k.a.string,
            reduxMessages: k.a.object,
            locale: k.a.string
        };
        var Or = Object(x.b)({
                language: It.b,
                reduxMessages: It.d,
                translator: B.c
            }),
            _r = Object(W.o)(Object(d.c)(Or, null)(br));

        function Cr(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = v()(e);
                if (t) {
                    var r = v()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return M()(this, n)
            }
        }
        var Ar = function(e) {
            S()(n, e);
            var t = Cr(n);

            function n() {
                var e;
                _()(this, n);
                for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
                return e = t.call.apply(t, [this].concat(r)), I()(N()(e), "state", {
                    open: !1,
                    internalLink: ""
                }), I()(N()(e), "handleClose", (function() {
                    e.props.showInternalLinkAlert(!1)
                })), I()(N()(e), "handleLinkOpen", (function() {
                    window.open(e.state.internalLink), e.props.showInternalLinkAlert(!1)
                })), e
            }
            return A()(n, [{
                key: "componentDidUpdate",
                value: function(e) {
                    this.props.isOpenDialog !== e.isOpenDialog && this.setState({
                        open: this.props.isOpenDialog,
                        internalLink: this.props.internalLink
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = location.hostname;
                    return c.a.createElement("div", null, c.a.createElement(Bt.a, {
                        open: this.state.open,
                        onClose: this.handleClose,
                        "aria-labelledby": "alert-dialog-title",
                        "aria-describedby": "alert-dialog-description"
                    }, c.a.createElement(Wt.a, {
                        id: "alert-dialog-title"
                    }, "You are leaving the https://".concat(e, " website")), c.a.createElement(Yt.a, null, c.a.createElement(zt.a, {
                        id: "alert-dialog-description"
                    }, c.a.createElement(V.FormattedMessage, he()({}, fr.internalLinkMessage, {
                        values: {
                            INTERNAL_URL: c.a.createElement(c.a.Fragment, null, this.state.internalLink)
                        }
                    })))), c.a.createElement(Gt.a, null, c.a.createElement(at.a, {
                        onClick: this.handleClose,
                        color: "primary"
                    }, "Cancel"), c.a.createElement(at.a, {
                        onClick: this.handleLinkOpen,
                        variant: "contained",
                        color: "primary"
                    }, "Ok"))))
                }
            }]), n
        }(c.a.Component);
        Ar.propTypes = {
            isOpenDialog: k.a.bool,
            showInternalLinkAlert: k.a.func,
            internalLink: k.a.string
        };
        var Lr = Object(d.c)((function(e) {
                return e
            }), (function(e) {
                return {
                    showInternalLinkAlert: function(t) {
                        return e(Object(z.y)(t))
                    }
                }
            }))(Ar),
            Nr = (n(568), n(31)),
            Tr = n(1441),
            Sr = Object(V.defineMessages)({
                unsupportedBrowserTitle: {
                    id: "UNSUPPORTED_BROWSER_TITLE",
                    defaultMessage: "Medi-Cal Providers | This browser is no longer supported."
                },
                unsupportedBrowserHeading: {
                    id: "UNSUPPORTED_BROWSER_HEADING",
                    defaultMessage: "This browser is no longer supported."
                },
                unsupportedBrowserDescription: {
                    id: "UNSUPPORTED_BROWSER_DESCRIPTION",
                    defaultMessage: "To access the site with a better experience, please switch to one of the below supported browsers."
                },
                chrome: {
                    id: "APP_CONTAINERS_HELPERLINKS_SUB_CHROME",
                    defaultMessage: "Chrome"
                },
                firefox: {
                    id: "APP_CONTAINERS_HELPERLINKS_SUB_FIREFOX",
                    defaultMessage: "Firefox"
                },
                edge: {
                    id: "COMMERCIAL_HELPER_UTILITIES_BROWSER_EDGE",
                    defaultMessage: "Microsoft Edge"
                },
                safari: {
                    id: "COMMERCIAL_HELPER_UTILITIES_BROWSER_SAFARI",
                    defaultMessage: "Safari"
                },
                browser: {
                    id: "HELPER_UTILITIES_POPULAR_BROWSER",
                    defaultMessage: "Download the latest versions of these popular browsers."
                }
            }),
            yr = n.p + "images/60e42aaee6701d57203b1b333370102c-chrome-logo.svg",
            Mr = n.p + "images/eb95ab9edc9a644c2f1a7c6ef159a4c8-firefox-logo.svg",
            Rr = n.p + "images/1700212ca19e436c3b5578156917b964-safari-logo.svg",
            vr = n.p + "images/c40534b325e2be2e7087aae72cf6a412-edge-logo.svg",
            wr = function(e) {
                var t = e.classes,
                    n = e.intl,
                    a = Object(Nr.a)(),
                    r = Object(Tr.a)(a.breakpoints.down("sm")),
                    o = [{
                        name: n.formatMessage(Sr.chrome),
                        link: "https://www.google.com/chrome/",
                        logo: yr
                    }, {
                        name: n.formatMessage(Sr.firefox),
                        link: "https://www.mozilla.org/en-US/firefox/new/?redirect_source=getfirefox-com",
                        logo: Mr
                    }, {
                        name: n.formatMessage(Sr.safari),
                        link: "https://www.apple.com/safari/",
                        logo: Rr
                    }, {
                        name: n.formatMessage(Sr.edge),
                        link: "https://www.microsoft.com/en-us/edge",
                        logo: vr
                    }];
                return c.a.createElement("div", {
                    role: "main"
                }, c.a.createElement("h1", {
                    className: t.visuallyHidden
                }, n.formatMessage(Sr.unsupportedBrowserTitle)), c.a.createElement(Bt.a, {
                    open: !0,
                    disableBackdropClick: !0,
                    disableEscapeKeyDown: !0,
                    disableEnforceFocus: !0,
                    disableAutoFocus: !0,
                    disablePortal: !0,
                    fullScreen: r,
                    "aria-labelledby": "unsupported-browser-title",
                    "aria-describedby": "unsupported-browser-description"
                }, c.a.createElement(Yt.a, null, c.a.createElement("div", {
                    className: t.dialogHeader
                }, c.a.createElement("img", {
                    src: St,
                    alt: "Logo",
                    className: t.logo
                }), c.a.createElement("h2", {
                    id: "unsupported-browser-title"
                }, n.formatMessage(Sr.unsupportedBrowserHeading))), c.a.createElement(zt.a, {
                    id: "unsupported-browser-description"
                }, n.formatMessage(Sr.unsupportedBrowserDescription)), c.a.createElement("div", {
                    className: t.browsers
                }, o.map((function(e) {
                    return c.a.createElement("div", {
                        key: e.name,
                        className: t.browser
                    }, c.a.createElement("div", {
                        className: t.link
                    }, c.a.createElement("a", {
                        href: e.link
                    }, c.a.createElement("img", {
                        src: e.logo,
                        alt: "".concat(e.name, " logo"),
                        className: t.browserLogo
                    }), e.name)))
                }))))))
            };
        wr.propTypes = {
            classes: k.a.object,
            intl: V.intlShape
        };
        var Ir = Object(V.injectIntl)(Object(U.a)((function(e) {
                return {
                    dialogHeader: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    },
                    logo: {
                        width: "80%",
                        height: "80%"
                    },
                    link: {
                        fontSize: "1.6rem",
                        "& a": {
                            textDecoration: "none",
                            color: e.palette.primary.light,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        },
                        "& a:hover": {
                            color: e.palette.secondary.dark,
                            textDecoration: "underline"
                        }
                    },
                    browsers: {
                        display: "flex",
                        margin: "20px 0"
                    },
                    browser: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%"
                    },
                    browserLogo: {
                        height: "45px",
                        width: "45px"
                    },
                    visuallyHidden: {
                        position: "absolute",
                        left: "-10000px",
                        width: 1,
                        height: 1,
                        overflow: "hidden"
                    }
                }
            }))(wr)),
            Pr = Object(x.a)((function(e) {
                return e.informationBanner
            }), (function(e) {
                return e
            })),
            kr = Object(V.defineMessages)({
                more: {
                    id: "APP_COMPONENTS_NOTIFICATIONS_MORE_INFO",
                    defaultMessage: "Read more"
                },
                less: {
                    id: "APP_COMPONENTS_NOTIFICATIONS_LESS_INFO",
                    defaultMessage: "Read less"
                }
            }),
            jr = function(e) {
                var t = e.classes,
                    n = e.content,
                    a = e.stringLength,
                    r = e.isOpen,
                    o = e.toggle,
                    i = e.intl,
                    l = e.locale,
                    s = e.translatorType;
                return c.a.createElement("div", null, c.a.createElement(H.ExternalContentRenderer, {
                    translatorType: s,
                    content: n,
                    contentDefaultLang: n,
                    contentOtherLang: n,
                    locale: l,
                    defaultLang: "en"
                }), c.a.createElement("div", {
                    className: t.buttonCon
                }, a >= 200 && c.a.createElement("button", {
                    onClick: o,
                    className: t.button
                }, r ? i.formatMessage(kr.less) : i.formatMessage(kr.more))))
            };
        jr.propTypes = {
            content: k.a.string,
            stringLength: k.a.number,
            isOpen: k.a.bool,
            toggle: k.a.func,
            classes: k.a.object.isRequired,
            intl: V.intlShape.isRequired,
            locale: k.a.string,
            translatorType: k.a.string
        };
        var xr = Object(V.injectIntl)(Object(U.a)((function(e) {
                return {
                    buttonCon: {
                        display: "flex",
                        justifyContent: "flex-end"
                    },
                    button: {
                        color: e.colors.white,
                        backgroundColor: e.palette.secondary.dark,
                        border: "none",
                        outline: "none",
                        textDecoration: "underline",
                        textTransform: "uppercase"
                    }
                }
            }))(jr)),
            Dr = function(e) {
                var t = e.content,
                    n = e.locale,
                    a = e.translatorType;
                return c.a.createElement(H.ExternalContentRenderer, {
                    translatorType: a,
                    content: t,
                    contentDefaultLang: t,
                    contentOtherLang: t,
                    locale: n,
                    defaultLang: "en"
                })
            };
        Dr.propTypes = {
            content: k.a.string,
            locale: k.a.string,
            translatorType: k.a.string
        };
        var Ur = Dr,
            Fr = function(e) {
                var t = e.classes,
                    n = e.content,
                    a = e.locale,
                    r = e.translatorType,
                    o = Object(l.useState)(!1),
                    i = q()(o, 2),
                    s = i[0],
                    u = i[1],
                    d = Object(l.useState)(null == n ? void 0 : n.content),
                    m = q()(d, 2),
                    f = m[0],
                    g = m[1],
                    p = Object(Nr.a)(),
                    E = Object(Tr.a)(p.breakpoints.down("sm")),
                    h = f.length;
                Object(l.useEffect)((function() {
                    "google" !== r && "en" !== a && g(null == n ? void 0 : n.contentSpanish)
                }), [a]);
                var b;
                return c.a.createElement("div", {
                    className: t.banner
                }, E ? c.a.createElement(xr, {
                    content: (b = f.substring(0, 200), s ? f : h > 200 ? b.concat("...") : f.substring(0, 200)),
                    contentOtherLang: n,
                    toggle: function() {
                        u(!s)
                    },
                    isOpen: s,
                    stringLength: h,
                    locale: a,
                    translatorType: r
                }) : c.a.createElement(Ur, {
                    content: f,
                    locale: a,
                    translatorType: r
                }))
            };
        Fr.propTypes = {
            classes: k.a.object.isRequired,
            content: k.a.object,
            locale: k.a.string,
            translatorType: k.a.string
        };
        var Hr = Object(U.a)((function(e) {
            return {
                banner: {
                    backgroundColor: e.palette.secondary.dark,
                    padding: "5px 10px",
                    color: e.colors.white,
                    "& a": {
                        color: e.colors.white
                    }
                }
            }
        }))(Fr);

        function Br(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = v()(e);
                if (t) {
                    var r = v()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return M()(this, n)
            }
        }
        var Gr = function(e) {
            S()(n, e);
            var t = Br(n);

            function n() {
                return _()(this, n), t.apply(this, arguments)
            }
            return A()(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = {
                        isCMS: this.props.global.isCMS,
                        cmsSiteName: this.props.global.cmsSiteName,
                        locale: this.props.locale,
                        translator: this.props.global.features.clientMetadata.unsecured.translator
                    };
                    this.props.getBannerContent(e)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props,
                        n = t.global,
                        a = t.locale;
                    if (a !== e.locale) {
                        var r = {
                            isCMS: n.isCMS,
                            cmsSiteName: n.cmsSiteName,
                            locale: a,
                            translator: n.features.clientMetadata.unsecured.translator
                        };
                        this.props.getBannerContent(r)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props,
                        n = t.informationBanner,
                        a = t.locale,
                        r = t.translatorType;
                    return null === n.content && n.isLoading ? null : "true" === (null === (e = n.content) || void 0 === e ? void 0 : e.showBanner) ? c.a.createElement(Hr, {
                        content: n.content,
                        locale: a,
                        translatorType: r
                    }) : null
                }
            }]), n
        }(l.Component);
        Gr.propTypes = {
            global: k.a.object,
            informationBanner: k.a.object,
            getBannerContent: k.a.func,
            locale: k.a.string,
            translatorType: k.a.func
        };
        var Yr = Object(x.b)({
                informationBanner: Pr,
                global: B.d,
                locale: It.b,
                translatorType: B.c
            }),
            zr = Object(d.c)(Yr, (function(e) {
                return {
                    getBannerContent: function(t) {
                        return e(Object(z.c)(t))
                    }
                }
            }))(Gr),
            Wr = (n(471), n(1430), n(1431), n(564), n(791), {
                chrome: "Chrome",
                edge: "edge",
                firefox: "Firefox",
                ie: "IE",
                safari: "Safari"
            }),
            Kr = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
                return null !== e.match(/Edg/)
            },
            qr = function() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent,
                    n = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                if (Kr(t)) {
                    var a = t.indexOf("Edg"),
                        r = 4;
                    t.match("Edge/") && (r = 5);
                    var o = a + r,
                        i = parseInt(t.substring(o, t.indexOf(".", o)), 10);
                    return {
                        name: "Edge",
                        version: i
                    }
                }
                return /trident/i.test(n[1]) ? (e = /\brv[ :]+(\d+)/g.exec(t) || [], {
                    name: "IE",
                    version: parseInt(e[1] || "-1", 10)
                }) : n[1] === Wr.chrome && null != (e = t.match(/\bOPR\/(\d+)/)) ? {
                    name: "Opera",
                    version: parseInt(e[1], 10)
                } : n[2] || window.navigator ? ((n = n[2] ? [n[1], n[2]] : [window.navigator.appName, window.navigator.appVersion, "-?"])[0] === Wr.safari && null != (e = t.match(/version\/(\d+)/i)) && n.splice(1, 1, e[1]), "MSIE" === n[0] ? {
                    name: Wr.ie,
                    version: parseInt(n[1], 10)
                } : {
                    name: n[0],
                    version: parseInt(n[1], 10)
                }) : {
                    name: "Uknown",
                    version: -1
                }
            },
            Vr = Object(V.defineMessages)({
                skipNavigationText: {
                    id: "SKIP_NAVIGATION_TEXT",
                    defaultMessage: " Skip Navigation or Skip to Content"
                }
            }),
            Xr = function(e) {
                var t = e.classes,
                    n = e.intl;
                return c.a.createElement("a", {
                    id: "skip-nav",
                    className: t.visuallyHidden,
                    href: "#main-content"
                }, n.formatMessage(Vr.skipNavigationText))
            };
        Xr.propTypes = {
            classes: k.a.object,
            intl: V.intlShape
        };
        var Qr = Object(V.injectIntl)(Object(U.a)((function(e) {
            return {
                visuallyHidden: {
                    position: "absolute",
                    left: "-10000px",
                    width: 1,
                    height: 1,
                    overflow: "hidden"
                }
            }
        }))(Xr));

        function Jr(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = v()(e);
                if (t) {
                    var r = v()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return M()(this, n)
            }
        }
        var Zr = function(e) {
            S()(n, e);
            var t = Jr(n);

            function n(e) {
                var a, r, o, i;
                return _()(this, n), i = t.call(this, e), I()(N()(i), "state", {
                    isAccessDenied: !1,
                    isErrorResponse: !1,
                    errorStatus: null,
                    headerLogo: null === (a = i.props.header) || void 0 === a ? void 0 : a.logo,
                    landingHeaderNavLinks: null === (r = i.props.header) || void 0 === r ? void 0 : r.landingNavLinks,
                    memberHeaderNavLinks: null === (o = i.props.header) || void 0 === o ? void 0 : o.memberHeaderNavLinks,
                    theme: H.MagellanTheme
                }), I()(N()(i), "getThemeByClientCode", (function(e) {
                    switch (e) {
                        case "medicalrx":
                            return H.CaliforniaTheme;
                        default:
                            return H.MagellanTheme
                    }
                })), I()(N()(i), "getStaticHeaderContent", (function() {
                    var e = i.props,
                        t = e.getHeaderCmsContent,
                        n = e.global,
                        a = e.language;
                    n && n.isCMS && null != n.cmsSiteName && n.cmsSiteName.length > 0 && t({
                        isCMS: n.isCMS,
                        cmsSiteName: n.cmsSiteName,
                        locale: a,
                        translator: n.features.clientMetadata.unsecured.translator
                    })
                })), I()(N()(i), "removeTrailingSlash", (function(e) {
                    return "/" !== e.slice(-1) ? e : e.slice(0, -1)
                })), I()(N()(i), "getDisplayName", (function(e, t) {
                    var n;
                    return 0 === e.length && "en" === t ? "English" : null === (n = e.find((function(e) {
                        return e.languageCode === t
                    }))) || void 0 === n ? void 0 : n.displayName
                })), I()(N()(i), "initializeGoogleAnalytics", (function() {
                    var e = i.props.history;
                    j.a.initialize("UA-51572212-4"), j.a.set({
                        page: i.removeTrailingSlash(window.location.pathname),
                        location: i.removeTrailingSlash("".concat(window.location.origin).concat(window.location.pathname).concat(window.location.search)),
                        dimension1: i.getDisplayName(i.props.languageAndCodes, i.props.language)
                    }), j.a.pageview(i.removeTrailingSlash(window.location.pathname)), e.listen((function(e) {
                        setTimeout((function() {
                            j.a.set({
                                page: i.removeTrailingSlash(e.pathname),
                                location: i.removeTrailingSlash("".concat(window.location.origin).concat(e.pathname).concat(window.location.search)),
                                dimension1: i.getDisplayName(i.props.languageAndCodes, i.props.language)
                            }), j.a.pageview(i.removeTrailingSlash(e.pathname))
                        }))
                    }))
                })), I()(N()(i), "showUnsupportedBrowserPopup", (function(e) {
                    return !(!e || !Object(ge.a)("BROWSER_NOT_SUPPORTED_MODAL", e.readableFeatures)) && function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent,
                            t = qr(e);
                        return null != t.name && 0 !== t.name.length && t.name.toLowerCase() === Wr.ie.toLowerCase()
                    }(window.navigator.userAgent)
                })), I()(N()(i), "renderUnsupportedBrowser", (function() {
                    return c.a.createElement(Ir, null)
                })), I()(N()(i), "webChatClick", (function() {
                    if (i.webChatRef && i.webChatRef.current) {
                        var e = Object(pe.c)() ? "landing" : "member";
                        i.webChatRef.current.customPlugin(e, !!i.props.authState.isAuthenticated)
                    }
                })), I()(N()(i), "webChatClose", (function() {
                    var e, t;
                    i.webChatRef && i.webChatRef.current && (null === (e = i.webChatRef.current.plugin) || void 0 === e || e.command("WebChatService.endChat"), null === (t = i.webChatRef.current.plugin) || void 0 === t || t.command("WebChat.close"))
                })), I()(N()(i), "renderMainContent", (function() {
                    var e, t = i.props,
                        n = t.classes,
                        a = t.global,
                        r = t.header,
                        o = t.isShowErrorAlert,
                        l = t.showExternalAlert,
                        s = t.showInternalAlert,
                        u = t.toggleLanguage,
                        d = t.user,
                        m = t.setSearchBarOpen,
                        f = t.location,
                        g = t.language,
                        p = t.translatorType,
                        E = Object(pe.c)() ? "landing" : "member",
                        h = Object(W.j)(f.pathname, {
                            path: "/home"
                        }),
                        b = Object(W.j)(f.pathname, {
                            path: "/member"
                        }),
                        O = Object(ge.a)("MEMBER_INFORMATION_BANNER", a.features.readableFeatures);
                    return c.a.createElement("div", {
                        className: n.container
                    }, c.a.createElement(Qr, null), c.a.createElement("header", {
                        className: n.header
                    }, (null == h ? void 0 : h.isExact) && c.a.createElement(zr, null), (null == b ? void 0 : b.isExact) && O && c.a.createElement(zr, null), c.a.createElement(Zt, {
                        features: a.features,
                        showExternalAlert: l,
                        headerLogo: i.state.headerLogo,
                        landingHeaderNavLinks: i.state.landingHeaderNavLinks,
                        memberHeaderNavLinks: i.state.memberHeaderNavLinks,
                        toggleLanguage: function(e) {
                            u(e), i.props.getLandingPageStaticContent()
                        },
                        searchBarOpen: r.searchBarOpen,
                        setSearchBarOpen: m,
                        webChatClose: function() {
                            return i.webChatClose()
                        },
                        locale: g,
                        translatorType: p
                    })), c.a.createElement("main", {
                        className: Object(pe.d)() ? n.contentAreaMember : n.contentArea,
                        id: "main-content"
                    }, c.a.createElement(mr, {
                        showExternalAlert: l,
                        features: a.features,
                        theme: H.CaliforniaTheme,
                        webChatClick: function() {
                            return i.webChatClick()
                        },
                        webChatClose: function() {
                            return i.webChatClose()
                        }
                    })), c.a.createElement("footer", null, c.a.createElement(Gn, {
                        showInternalAlert: s,
                        showExternalAlert: l,
                        features: a.features
                    })), c.a.createElement(Nn, {
                        isOpen: a.showErrorAlert,
                        status: a.status,
                        onClose: o
                    }), c.a.createElement(Er, {
                        isOpenDialog: a.showExternalLinkAlert,
                        externalLink: a.externalLink
                    }), c.a.createElement(Lr, {
                        isOpenDialog: a.showInternalLinkAlert,
                        internalLink: a.internalLink
                    }), Object(pe.c)() ? Object(ge.a)("CHAT_TILE_NEW_CONTACT_US", a.features.readableFeatures) && c.a.createElement(H.WebChat, {
                        portal: E,
                        isSecured: !1,
                        ref: i.webChatRef
                    }) : Object(ge.a)("CHAT_TILE_NEW_CONTACT_US", a.features.readableFeatures) && c.a.createElement(H.WebChat, {
                        portal: E,
                        isSecured: i.props.authState.isAuthenticated,
                        id: null !== (e = d.memberId) && void 0 !== e ? e : "",
                        ref: i.webChatRef
                    }))
                })), i.webChatRef = c.a.createRef(), i
            }
            return A()(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props,
                        t = e.global,
                        n = e.locale;
                    if (this.getStaticHeaderContent(), this.initializeGoogleAnalytics(), this.props.getAllFeatures(!(t && t.portalFeatures)), this.props.getFeatures(!(t && t.features), n), this.props.updateMessages(this.props.messages[n], n), this.props.toggleLanguage(n, !0), t) {
                        var a = t.features;
                        if (a && null !== a.clientCode) {
                            var r = a.clientCode;
                            this.setState({
                                theme: this.getThemeByClientCode(r)
                            })
                        }
                    }
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props,
                        n = t.global,
                        a = t.language;
                    if (n.isCMS === e.global.isCMS && n.cmsSiteName === e.global.cmsSiteName && a === e.language || this.getStaticHeaderContent(), a !== e.language && (j.a.set({
                            page: this.removeTrailingSlash(window.location.pathname),
                            location: this.removeTrailingSlash("".concat(window.location.origin).concat(window.location.pathname).concat(window.location.search)),
                            dimension1: this.getDisplayName(this.props.languageAndCodes, this.props.language)
                        }), j.a.pageview(this.removeTrailingSlash(window.location.pathname))), this.props.header.landingNavLinks !== e.header.landingNavLinks && this.setState({
                            landingHeaderNavLinks: this.props.header.landingNavLinks
                        }), this.props.header.memberNavLinks !== e.header.memberNavLinks && this.setState({
                            memberHeaderNavLinks: this.props.header.memberNavLinks
                        }), this.props.authState !== e.authState && this.props.authState.isAuthenticated && null == this.props.user.userInfo && this.props.getUserInfo(), this.props.global.features !== e.global.features) {
                        var r = this.props.global.features,
                            o = null !== r && r.clientCode;
                        this.setState({
                            theme: this.getThemeByClientCode(o)
                        })
                    }
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e, t) {
                    return e !== this.props || t !== this.state
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.global,
                        n = e.messages,
                        a = e.locale;
                    return c.a.createElement(_r, {
                        messages: n,
                        locale: a
                    }, c.a.createElement(D.a, {
                        theme: this.state.theme
                    }, c.a.createElement(F.a, null), c.a.createElement(l.Suspense, {
                        fallback: c.a.createElement(p.a, {
                            size: 100,
                            thickness: 5
                        })
                    }, t.showLoadingSpinner && c.a.createElement(p.a, {
                        size: 100,
                        thickness: 5
                    }), t.features && this.showUnsupportedBrowserPopup(t.features) && this.renderUnsupportedBrowser(), t.features && !this.showUnsupportedBrowserPopup(t.features) && this.renderMainContent())))
                }
            }]), n
        }(c.a.Component);
        Zr.propTypes = {
            authState: k.a.object,
            classes: k.a.object,
            global: k.a.object,
            header: k.a.object,
            isShowErrorAlert: k.a.func,
            getFeatures: k.a.func,
            history: k.a.object,
            messages: k.a.object,
            locale: k.a.string,
            showExternalAlert: k.a.func,
            showInternalAlert: k.a.func,
            getAllFeatures: k.a.func,
            getHeaderCmsContent: k.a.func,
            toggleLanguage: k.a.func,
            getLandingPageStaticContent: k.a.func,
            updateMessages: k.a.func,
            getUserInfo: k.a.func,
            user: k.a.object,
            setSearchBarOpen: k.a.func,
            language: k.a.string,
            languageAndCodes: k.a.array,
            location: k.a.object,
            translatorType: k.a.string
        };
        var $r = Object(x.b)({
                global: B.d,
                header: G.a,
                user: Y.b,
                language: It.b,
                languageAndCodes: It.a,
                translatorType: B.c
            }),
            eo = Object(U.a)((function() {
                return {
                    container: {
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column"
                    },
                    contentArea: {
                        flex: "1 0 auto",
                        minHeight: 500
                    },
                    contentAreaMember: {
                        flex: "1 0 auto",
                        margin: "0 2rem 2rem",
                        minHeight: 500
                    },
                    visuallyHidden: {
                        position: "absolute",
                        left: "-10000px",
                        width: 1,
                        height: 1,
                        overflow: "hidden"
                    }
                }
            }))(Object(W.o)(Object(g.withOktaAuth)(Object(d.c)($r, (function(e) {
                return {
                    isShowErrorAlert: function(t, n) {
                        return e(Object(z.w)(t, n))
                    },
                    getFeatures: function(t, n) {
                        return e(Object(z.n)(t, n))
                    },
                    showExternalAlert: function(t, n) {
                        return e(Object(z.x)(t, n))
                    },
                    showInternalAlert: function(t, n) {
                        return e(Object(z.y)(t, n))
                    },
                    getAllFeatures: function(t) {
                        return e(Object(z.b)(t))
                    },
                    getHeaderCmsContent: function(t) {
                        return e(Object(z.p)(t))
                    },
                    getUserInfo: function() {
                        return e(Object(z.v)())
                    },
                    toggleLanguage: function(t, n) {
                        return e(Object(z.a)(t, n))
                    },
                    getLandingPageStaticContent: function(t) {
                        return e(Object(z.r)(t))
                    },
                    updateMessages: function(t, n) {
                        return e(Object(Pt.c)(t, n))
                    },
                    setSearchBarOpen: function(t) {
                        return e(Object(z.A)(t))
                    }
                }
            }))(Zr)))),
            to = n(105),
            no = n.n(to);
        n(1432), n(1433);
        var ao = {
                clientId: h.a.OKTA_CLIENT_ID,
                issuer: h.a.OKTA_ISSUSER,
                redirectUri: "".concat(window.location.origin).concat(h.a.OKTA_CALLBACK_PATH),
                scopes: h.a.OKTA_SCOPES
            },
            ro = function() {
                var e = i()(r.a.mark((function e(t) {
                    var n;
                    return r.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = [t], e.next = 3, Object(E.b)(t, !0);
                            case 3:
                                n = e.sent, io(n, t[0]);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(),
            oo = function() {
                var e = i()(r.a.mark((function e() {
                    var t;
                    return r.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return Object(E.c)(), e.next = 3, Object(E.b)(E.a);
                            case 3:
                                t = e.sent, io(t);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            io = function(e, t) {
                u.a.render(c.a.createElement(d.a, {
                    store: b.c
                }, c.a.createElement(m.a, {
                    loading: c.a.createElement(p.a, {
                        size: 100,
                        thickness: 5
                    }),
                    persistor: b.b
                }, c.a.createElement(f.a, {
                    history: b.a
                }, c.a.createElement(g.Security, ao, c.a.createElement(eo, {
                    locale: null != t ? t : "en",
                    messages: e,
                    history: b.a
                }))))), document.getElementById("root"))
            };
        no.a.getItem("language-config").then((function(e) {
            var t = e.translator,
                n = e.locale;
            "google" === t ? ro(n) : oo()
        })).catch((function() {
            Wn.a.get(h.a.MICRO_BASE + "/featureToggle/readableFeatures").then((function(e) {
                var t = e.data.clientMetadata.unsecured,
                    n = t.translator,
                    a = t.translateLangExclusions;
                no.a.setItem("language-config", {
                    translator: n,
                    translateLangExclusions: a,
                    locale: "en"
                }), "google" === n ? ro("en") : oo()
            })).catch((function() {
                oo()
            }))
        }))
    },
    156: function(e, t, n) {
        "use strict";
        n.d(t, "g", (function() {
            return d
        })), n.d(t, "f", (function() {
            return m
        })), n.d(t, "c", (function() {
            return f
        })), n.d(t, "d", (function() {
            return g
        })), n.d(t, "e", (function() {
            return p
        })), n.d(t, "b", (function() {
            return b
        })), n.d(t, "a", (function() {
            return O
        }));
        var a = n(52),
            r = n(10),
            o = n.n(r),
            i = n(131),
            l = n(105),
            c = n.n(l),
            s = function(e) {
                return {
                    type: a.f,
                    features: e
                }
            },
            u = function(e) {
                return {
                    type: a.e,
                    error: e
                }
            },
            d = function(e) {
                return {
                    type: a.k,
                    features: e
                }
            },
            m = function(e) {
                return {
                    type: a.j,
                    isShow: e
                }
            },
            f = function(e, t) {
                return {
                    type: a.g,
                    isShow: e,
                    status: t
                }
            },
            g = function(e, t) {
                return {
                    type: a.h,
                    isShow: e,
                    url: t
                }
            },
            p = function(e, t) {
                return {
                    type: a.i,
                    isShow: e,
                    url: t
                }
            },
            E = function(e) {
                return {
                    type: a.c,
                    portalFeatures: e
                }
            },
            h = function(e) {
                return {
                    type: a.b,
                    error: e
                }
            },
            b = function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return function(n) {
                    e && n(m(!0)), o.a.get(i.a.MICRO_BASE + "/featureToggle/readableFeatures").then((function(e) {
                        n(s(e.data));
                        var a = e.data.clientMetadata.unsecured,
                            r = a.translator,
                            o = a.translateLangExclusions;
                        c.a.setItem("language-config", {
                            translator: r,
                            translateLangExclusions: o,
                            locale: t
                        }), n(m(!1))
                    })).catch((function(e) {
                        n(u(e)), n(m(!1))
                    }))
                }
            },
            O = function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return function(t) {
                    e && t(m(!0)), o.a.get(i.a.MICRO_BASE + "/featureToggle/features").then((function(e) {
                        t(E(e.data)), t(m(!1))
                    })).catch((function(e) {
                        t(h(e)), t(m(!1))
                    }))
                }
            }
    },
    159: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "c", (function() {
            return r
        })), n.d(t, "b", (function() {
            return o
        }));
        var a = "GET_DASHBOARD_CONTENT",
            r = "GET_DASHBOARD_CONTENT_SUCCESS",
            o = "GET_DASHBOARD_CONTENT_FAILURE"
    },
    176: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "c", (function() {
            return r
        })), n.d(t, "e", (function() {
            return o
        })), n.d(t, "d", (function() {
            return i
        })), n.d(t, "b", (function() {
            return l
        })), n.d(t, "g", (function() {
            return c
        })), n.d(t, "f", (function() {
            return s
        }));
        var a = "CLEAR_REGISTRATION",
            r = "UPDATE_REGISTRATION_DETAILS",
            o = "UPDATE_REGISTRATION_SUCCESS",
            i = "UPDATE_REGISTRATION_FAILURE",
            l = "CLEAR_RESEND_EMAIL",
            c = "UPDATE_RESEND_EMAIL_SUCCESS",
            s = "UPDATE_RESEND_EMAIL_FAILURE"
    },
    179: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "c", (function() {
            return r
        })), n.d(t, "b", (function() {
            return o
        }));
        var a = "GET_HELPER_UTILITES_CONTENT",
            r = "GET_HELPER_UTILITES_CONTENT_SUCCESS",
            o = "GET_HELPER_UTILITES_CONTENT_FAILURE"
    },
    180: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "c", (function() {
            return r
        })), n.d(t, "b", (function() {
            return o
        }));
        var a = "GET_LANDING_PAGE_CONTENT",
            r = "GET_LANDING_PAGE_CONTENT_SUCCESS",
            o = "GET_LANDING_PAGE_CONTENT_FAILURE"
    },
    181: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "c", (function() {
            return r
        })), n.d(t, "b", (function() {
            return o
        }));
        var a = "GET_FAQ_PAGE_CONTENT",
            r = "GET_FAQ_PAGE_CONTENT_SUCCESS",
            o = "GET_FAQ_PAGE_CONTENT_FAILURE"
    },
    182: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "c", (function() {
            return r
        })), n.d(t, "b", (function() {
            return o
        }));
        var a = "GET_EDUCATION_PAGE_CONTENT",
            r = "GET_EDUCATION_PAGE_CONTENT_SUCCESS",
            o = "GET_EDUCATION_PAGE_CONTENT_FAILURE"
    },
    183: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "c", (function() {
            return r
        })), n.d(t, "b", (function() {
            return o
        }));
        var a = "GET_DOCUMENTS_CONTENT",
            r = "GET_DOCUMENTS_CONTENT_SUCCESS",
            o = "GET_DOCUMENTS_CONTENT_FAILURE"
    },
    184: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "b", (function() {
            return r
        })), n.d(t, "c", (function() {
            return o
        }));
        var a = "UPDATE_LANDING_HEADER_SUCCESS",
            r = "UPDATE_MEMBER_HEADER_SUCCESS",
            o = "UPDATE_SEARCH_BAR_OPEN"
    },
    185: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "c", (function() {
            return r
        })), n.d(t, "b", (function() {
            return o
        }));
        var a = "CLEAR_LOGGED_IN_USER_INFO",
            r = "UPDATE_LOGGED_IN_USER_INFO_SUCCESS",
            o = "UPDATE_LOGGED_IN_USER_INFO_FAILURE"
    },
    186: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "c", (function() {
            return r
        })), n.d(t, "b", (function() {
            return o
        }));
        var a = "GET_SYSTEM_STATUS_CONTENT",
            r = "GET_SYSTEM_STATUS_CONTENT_SUCCESS",
            o = "GET_SYSTEM_STATUS_CONTENT_FAILURE"
    },
    187: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "c", (function() {
            return r
        })), n.d(t, "b", (function() {
            return o
        }));
        var a = "GET_BANNER_CONTENT",
            r = "GET_BANNER_CONTENT_SUCCESS",
            o = "GET_BANNER_CONTENT_FAILURE"
    },
    188: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "c", (function() {
            return r
        })), n.d(t, "b", (function() {
            return o
        }));
        var a = "GET_CONTACT_US_CONTENT",
            r = "GET_CONTACT_US_CONTENT_SUCCESS",
            o = "GET_CONTACT_US_CONTENT_FAILURE"
    },
    189: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "c", (function() {
            return r
        })), n.d(t, "b", (function() {
            return o
        }));
        var a = "GET_LINKS_CONTENT",
            r = "GET_LINKS_CONTENT_SUCCESS",
            o = "GET_LINKS_CONTENT_FAILURE"
    },
    201: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return g
        })), n.d(t, "c", (function() {
            return p
        })), n.d(t, "b", (function() {
            return E
        }));
        n(86), n(77), n(87), n(88), n(89), n(90), n(91), n(79), n(92);
        var a = n(6),
            r = n.n(a),
            o = n(123),
            i = n(10),
            l = n.n(i),
            c = n(207),
            s = n(105),
            u = n.n(s);

        function d(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function m(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? d(Object(n), !0).forEach((function(t) {
                    r()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var f = function(e) {
                return {
                    type: o.a,
                    locale: e
                }
            },
            g = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return function(n) {
                    !t && n(h(e)), u.a.getItem("language-config").then((function(t) {
                        u.a.setItem("language-config", m(m({}, t), {}, {
                            locale: e
                        }))
                    })), n(f(e))
                }
            },
            p = function(e, t) {
                return {
                    type: o.d,
                    messages: r()({}, t, e)
                }
            },
            E = function() {
                return function(e) {
                    l.a.get("/common/translations/languages.json").then((function(t) {
                        var n;
                        e((n = t.data, {
                            type: o.b,
                            languages: n
                        }))
                    })).catch((function(t) {
                        var n;
                        e((n = t, {
                            type: o.c,
                            error: n
                        }))
                    }))
                }
            },
            h = function(e) {
                return function(t) {
                    Object(c.b)([e], !0).then((function(n) {
                        t(p(n[e], e))
                    })).catch((function(e) {
                        var n;
                        t((n = e, {
                            type: o.e,
                            error: n
                        }))
                    }))
                }
            }
    },
    204: function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return d
        })), n.d(t, "c", (function() {
            return m
        })), n.d(t, "b", (function() {
            return f
        })), n.d(t, "a", (function() {
            return g
        }));
        n(86), n(55), n(77), n(87), n(88), n(89), n(90), n(91), n(79), n(54), n(211), n(560), n(92);
        var a = n(6),
            r = n.n(a),
            o = n(108),
            i = n(10),
            l = n.n(i),
            c = n(29);

        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach((function(t) {
                    r()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var d = function(e) {
                return {
                    type: o.e,
                    error: e
                }
            },
            m = function(e) {
                return {
                    type: o.b,
                    address: e
                }
            },
            f = function(e) {
                var t = u(u({}, e.searchAddress), {}, {
                    distance: e.distance
                });
                return function(e) {
                    return e({
                        type: o.a
                    }), e(Object(c.z)(!0)), l.a.get("/pharmacyservice/api/pharmacy", {
                        params: t
                    }).then((function(t) {
                        var n;
                        e((n = t.data, {
                            type: o.f,
                            pharmacySearchResults: n.pharmacyList.pharmacy
                        }))
                    })).catch((function(t) {
                        e(d(t))
                    })).finally((function() {
                        e(Object(c.z)(!1))
                    }))
                }
            },
            g = function(e) {
                return function(t) {
                    t(Object(c.z)(!0));
                    var n = "/delivery/api/pharmacyLocatorDisclaimer.json?crafterSite=".concat(e.cmsSiteName);
                    "google" === e.translator && (n = "/util/content/".concat(e.cmsSiteName, "/").concat(e.locale, "?cmsApiCode=pharmacyLocatorDisclaimer")), l.a.get(n).then((function(e) {
                        var n;
                        t((n = e.data, {
                            type: o.d,
                            disclaimerSummary: n.pageContent.title,
                            disclaimerDetails: n.pageContent.details
                        }))
                    })).catch((function() {
                        t({
                            type: o.c
                        })
                    })).finally((function() {
                        t(Object(c.z)(!1))
                    }))
                }
            }
    },
    207: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return L
        })), n.d(t, "c", (function() {
            return N
        })), n.d(t, "b", (function() {
            return S
        }));
        n(86), n(77), n(225), n(87), n(269), n(134), n(563), n(88), n(89), n(90), n(91), n(79), n(54), n(211), n(346), n(92), n(654);
        var a = n(112),
            r = n.n(a),
            o = (n(456), n(175)),
            i = n.n(o),
            l = n(6),
            c = n.n(l),
            s = n(10),
            u = n.n(s),
            d = n(105),
            m = n.n(d),
            f = n(9),
            g = n(807),
            p = n.n(g),
            E = n(808),
            h = n.n(E);

        function b(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function O(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? b(Object(n), !0).forEach((function(t) {
                    c()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var _ = function(e) {
            return Object.keys(e).reduce((function(t, n) {
                var a = e[n],
                    r = c()({}, a.key, a.translation);
                return O(O({}, t), r)
            }), {})
        };

        function C(e) {
            return A.apply(this, arguments)
        }

        function A() {
            return (A = i()(r.a.mark((function e(t) {
                var n, a, o, i, l, s = arguments;
                return r.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = s.length > 1 && void 0 !== s[1] && s[1], o = "es" === t ? "es-ES" : "en-US", a = n ? "/common/translations/".concat(t, ".json") : "https://portalqa.magellanrx.com/portalmicroservices/public/translation/mrxportal/".concat(o), e.next = 5, u.a.get(a);
                        case 5:
                            if (i = e.sent, l = _(i.data), !n) {
                                e.next = 12;
                                break
                            }
                            return m.a.setItem("language-".concat(t), l), e.abrupt("return", c()({}, t, l));
                        case 12:
                            return m.a.setItem("language-".concat(o), l), e.abrupt("return", c()({}, o, l));
                        case 14:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }
        var L = ["en", "es"],
            N = function() {
                Object(f.addLocaleData)(p.a), Object(f.addLocaleData)(h.a)
            },
            T = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en";
                Object(f.addLocaleData)({
                    locale: e,
                    pluralRuleFunction: function() {}
                })
            };

        function S(e) {
            return y.apply(this, arguments)
        }

        function y() {
            return (y = i()(r.a.mark((function e(t) {
                var n, a, o = arguments;
                return r.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n = o.length > 1 && void 0 !== o[1] && o[1], a = [], e.t0 = n, !e.t0) {
                                e.next = 6;
                                break
                            }
                            return e.next = 6, T(t[0]);
                        case 6:
                            return e.abrupt("return", new Promise((function(e, r) {
                                Promise.all(t.map((function(e) {
                                    return m.a.getItem("language-".concat(e))
                                }))).then((function(o) {
                                    t.forEach((function(e, t) {
                                        a.push({
                                            locale: e,
                                            cachedTranslationMessages: o[t]
                                        })
                                    })), null != a.find((function(e) {
                                        return null == e.cachedTranslationMessages
                                    })) ? Promise.all(a.map((function(e) {
                                        return C(e.locale, n)
                                    }))).then((function(t) {
                                        e(t.reduce((function(e, t) {
                                            return O(O({}, e), t)
                                        }), {}))
                                    })).catch((function(e) {
                                        r(e)
                                    })) : (a.map((function(e) {
                                        return C(e.locale, n)
                                    })), e(a.reduce((function(e, t) {
                                        return O(O({}, e), {}, c()({}, t.locale, t.cachedTranslationMessages))
                                    }), {})))
                                }))
                            })));
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }
    },
    208: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return ra
        })), n.d(t, "c", (function() {
            return oa
        })), n.d(t, "b", (function() {
            return ia
        }));
        n(459);
        var a = n(111),
            r = n(256),
            o = n(105),
            i = n.n(o),
            l = n(809),
            c = n(667),
            s = n(107),
            u = n(210),
            d = (n(86), n(77), n(87), n(134), n(88), n(89), n(90), n(91), n(79), n(92), n(395)),
            m = n.n(d),
            f = n(6),
            g = n.n(f),
            p = n(52);
        n(55), n(225), n(269), n(851), n(563), n(664), n(54), n(346), n(982), n(654), n(984);

        function E(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? E(Object(n), !0).forEach((function(t) {
                    g()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var b = function(e, t) {
            return h(h({}, e), t)
        };

        function O(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }
        var _ = {
                userInfo: null,
                error: null,
                showLoadingSpinner: !1,
                showErrorAlert: !1,
                status: null,
                features: null,
                showExternalLinkAlert: !1,
                externalLink: null,
                internalLink: null,
                portalFeatures: null,
                metadata: null,
                isCMS: !1,
                cmsSiteName: "",
                translator: "legacy",
                translateLangExclusions: []
            },
            C = function(e) {
                return b(e, {
                    error: null,
                    loading: !0,
                    features: null
                })
            },
            A = function(e, t) {
                var n, a, r, o = !!(null === (n = t.features.clientMetadata) || void 0 === n || null === (a = n.unsecured) || void 0 === a ? void 0 : a.isCMS),
                    i = (null === (r = t.features.clientMetadata) || void 0 === r ? void 0 : r.unsecured) || {
                        cmsSiteName: "",
                        translator: "legacy",
                        translateLangExclusions: []
                    },
                    l = i.cmsSiteName,
                    c = i.translator,
                    s = i.translateLangExclusions;
                return b(e, {
                    features: t.features,
                    isCMS: o,
                    cmsSiteName: l,
                    loading: !1,
                    translator: c,
                    translateLangExclusions: s
                })
            },
            L = function(e, t) {
                return b(e, {
                    error: t.error,
                    loading: !1
                })
            },
            N = function(e, t) {
                var n = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? O(Object(n), !0).forEach((function(t) {
                            g()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, e.features);
                return n.readableFeatures = m()(t.features), b(e, {
                    features: n
                })
            },
            T = function(e, t) {
                return b(e, {
                    showLoadingSpinner: t.isShow
                })
            },
            S = function(e, t) {
                return b(e, {
                    showErrorAlert: t.isShow,
                    status: t.status
                })
            },
            y = function(e, t) {
                return b(e, {
                    showExternalLinkAlert: t.isShow,
                    externalLink: t.url
                })
            },
            M = function(e, t) {
                return b(e, {
                    showInternalLinkAlert: t.isShow,
                    internalLink: t.url
                })
            },
            R = function(e, t) {
                return b(e, {
                    error: null,
                    loading: !0,
                    portalFeatures: null
                })
            },
            v = function(e, t) {
                var n = t.portalFeatures,
                    a = {};
                return n.map((function(e) {
                    a[e.featureDesc] = {
                        ID: e.featureId
                    }
                })), b(e, {
                    portalFeatures: a,
                    loading: !1
                })
            },
            w = function(e, t) {
                return b(e, {
                    error: t.error,
                    loading: !1
                })
            },
            I = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case p.d:
                        return C(e);
                    case p.f:
                        return A(e, t);
                    case p.e:
                        return L(e, t);
                    case p.k:
                        return N(e, t);
                    case p.j:
                        return T(e, t);
                    case p.g:
                        return S(e, t);
                    case p.h:
                        return y(e, t);
                    case p.i:
                        return M(e, t);
                    case p.a:
                        return R(e);
                    case p.c:
                        return v(e, t);
                    case p.b:
                        return w(e, t);
                    default:
                        return e
                }
            },
            P = n(179),
            k = {
                cmsContent: null,
                loading: !0,
                error: null
            },
            j = function(e) {
                return b(e, {
                    error: null,
                    loading: !0,
                    cmsContent: null
                })
            },
            x = function(e, t) {
                return b(e, {
                    cmsContent: t.cmsContent,
                    loading: !1
                })
            },
            D = function(e, t) {
                return b(e, {
                    error: t.error,
                    loading: !1
                })
            },
            U = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case P.a:
                        return j(e);
                    case P.c:
                        return x(e, t);
                    case P.b:
                        return D(e, t);
                    default:
                        return e
                }
            },
            F = n(159),
            H = {
                dashboardContent: null,
                isMarkdown: !0,
                loading: !1
            },
            B = function(e) {
                return b(e, {
                    error: null,
                    loading: !0,
                    dashboardContent: null,
                    isMarkdown: !0
                })
            },
            G = function(e, t) {
                return b(e, {
                    dashboardContent: t.dashboardContent,
                    isMarkdown: t.isMarkdown,
                    loading: !1
                })
            },
            Y = function(e, t) {
                return b(e, {
                    error: t.error,
                    loading: !1
                })
            },
            z = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case F.a:
                        return B(e);
                    case F.c:
                        return G(e, t);
                    case F.b:
                        return Y(e, t);
                    default:
                        return e
                }
            },
            W = n(123);

        function K(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function q(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? K(Object(n), !0).forEach((function(t) {
                    g()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var V = {
                locale: "en",
                messages: {},
                languages: [],
                error: null
            },
            X = function(e, t) {
                return b(e, {
                    locale: t.locale,
                    error: null
                })
            },
            Q = function(e, t) {
                return b(e, {
                    messages: q(q({}, e.messages), t.messages),
                    error: null
                })
            },
            J = function(e, t) {
                return b(e, {
                    error: t.error
                })
            },
            Z = function(e, t) {
                return b(e, {
                    languages: t.languages,
                    error: null
                })
            },
            $ = function(e, t) {
                return b(e, {
                    error: t.error
                })
            },
            ee = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case W.a:
                        return X(e, t);
                    case W.d:
                        return Q(e, t);
                    case W.e:
                        return J(e, t);
                    case W.b:
                        return Z(e, t);
                    case W.c:
                        return $(e, t);
                    default:
                        return e
                }
            },
            te = n(180),
            ne = {
                landingPageContent: null
            },
            ae = function(e, t) {
                return b(e, {
                    error: null,
                    loading: !0,
                    dashboardContent: null
                })
            },
            re = function(e, t) {
                return b(e, {
                    landingPageContent: t.landingPageContent,
                    loading: !1
                })
            },
            oe = function(e, t) {
                return b(e, {
                    error: t.error,
                    loading: !1
                })
            },
            ie = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case te.a:
                        return ae(e);
                    case te.c:
                        return re(e, t);
                    case te.b:
                        return oe(e, t);
                    default:
                        return e
                }
            },
            le = n(181),
            ce = {
                faqContent: null
            },
            se = function(e, t) {
                return b(e, {
                    error: null,
                    loading: !0,
                    faqContent: null
                })
            },
            ue = function(e, t) {
                return b(e, {
                    faqContent: t.faqContent,
                    loading: !1
                })
            },
            de = function(e, t) {
                return b(e, {
                    error: t.error,
                    loading: !1
                })
            },
            me = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ce,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case le.a:
                        return se(e);
                    case le.c:
                        return ue(e, t);
                    case le.b:
                        return de(e, t);
                    default:
                        return e
                }
            },
            fe = n(182),
            ge = {
                educationContent: null
            },
            pe = function(e, t) {
                return b(e, {
                    error: null,
                    loading: !0,
                    educationContent: null
                })
            },
            Ee = function(e, t) {
                return b(e, {
                    educationContent: t.payload,
                    loading: !1
                })
            },
            he = function(e, t) {
                return b(e, {
                    error: t.error,
                    loading: !1
                })
            },
            be = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case fe.a:
                        return pe(e);
                    case fe.c:
                        return Ee(e, t);
                    case fe.b:
                        return he(e, t);
                    default:
                        return e
                }
            },
            Oe = n(183),
            _e = {
                documentsContent: null,
                isLoading: !1,
                error: null
            },
            Ce = function(e) {
                return b(e, {
                    documentsContent: null,
                    isLoading: !0,
                    error: null
                })
            },
            Ae = function(e, t) {
                return b(e, {
                    documentsContent: t.content,
                    isLoading: !1,
                    error: null
                })
            },
            Le = function(e, t) {
                return b(e, {
                    error: t.error,
                    isLoading: !1
                })
            },
            Ne = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _e,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Oe.a:
                        return Ce(e);
                    case Oe.c:
                        return Ae(e, t);
                    case Oe.b:
                        return Le(e, t);
                    default:
                        return e
                }
            },
            Te = (n(68), n(564), n(408));

        function Se(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function ye(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Se(Object(n), !0).forEach((function(t) {
                    g()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Se(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var Me = {
                adjustments: [],
                isFetchingData: !0
            },
            Re = function(e) {
                return b(e, {
                    error: null,
                    loading: !0,
                    adjustments: [],
                    isFetchingData: !0
                })
            },
            ve = function(e, t) {
                return b(e, {
                    adjustments: t.massAdjustments.map((function(e) {
                        var t = new Date(parseInt(e.date.substring(0, 4), 10), parseInt(e.date.substring(5, 7), 10) - 1, parseInt(e.date.substring(8, 10), 10)),
                            n = "".concat(t.getMonth() + 1, "/").concat(t.getDate(), "/").concat(t.getFullYear());
                        return ye(ye({}, e), {}, {
                            date: n
                        })
                    })),
                    loading: !1,
                    isFetchingData: !1
                })
            },
            we = function(e, t) {
                return b(e, {
                    error: t.error,
                    loading: !1,
                    isFetchingData: !1
                })
            },
            Ie = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Me,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Te.a:
                        return Re(e);
                    case Te.c:
                        return ve(e, t);
                    case Te.b:
                        return we(e, t);
                    default:
                        return e
                }
            },
            Pe = n(108),
            ke = {
                error: null,
                loading: !1,
                address: null,
                pharmacySearchResults: [],
                disclaimerDetails: null,
                disclaimerSummary: null
            },
            je = function(e) {
                return b(e, {
                    error: null,
                    loading: !1,
                    pharmacySearchResults: []
                })
            },
            xe = function(e, t) {
                return b(e, {
                    error: null,
                    loading: !1,
                    pharmacySearchResults: t.pharmacySearchResults
                })
            },
            De = function(e, t) {
                return b(e, {
                    error: t.error,
                    loading: !1,
                    pharmacySearchResults: []
                })
            },
            Ue = function(e, t) {
                return b(e, {
                    disclaimerSummary: t.disclaimerSummary,
                    disclaimerDetails: t.disclaimerDetails
                })
            },
            Fe = function(e) {
                return b(e, {
                    disclaimerSummary: null,
                    disclaimerDetails: null
                })
            },
            He = function(e, t) {
                return b(e, {
                    address: t.address
                })
            },
            Be = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ke,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Pe.a:
                        return je(e);
                    case Pe.f:
                        return xe(e, t);
                    case Pe.e:
                        return De(e, t);
                    case Pe.d:
                        return Ue(e, t);
                    case Pe.c:
                        return Fe(e);
                    case Pe.b:
                        return He(e, t);
                    default:
                        return e
                }
            },
            Ge = n(184),
            Ye = {
                logo: "",
                landingNavLinks: null,
                memberNavLinks: null,
                searchBarOpen: !1
            },
            ze = function(e, t) {
                return b(e, {
                    landingNavLinks: t.navLinks,
                    logo: t.logo
                })
            },
            We = function(e, t) {
                return b(e, {
                    memberNavLinks: t.navLinks,
                    logo: t.logo
                })
            },
            Ke = function(e, t) {
                return b(e, {
                    searchBarOpen: t.searchBarOpen
                })
            },
            qe = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ye,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Ge.a:
                        return ze(e, t);
                    case Ge.b:
                        return We(e, t);
                    case Ge.c:
                        return Ke(e, t);
                    default:
                        return e
                }
            },
            Ve = n(185);

        function Xe(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function Qe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Xe(Object(n), !0).forEach((function(t) {
                    g()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xe(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var Je = {
                error: null,
                firstName: null,
                lastName: null,
                emailAddress: null,
                memberId: null,
                isLoading: !1
            },
            Ze = function(e) {
                return b(e, Qe(Qe({}, Je), {}, {
                    isLoading: !0
                }))
            },
            $e = function(e, t) {
                return b(e, {
                    firstName: t.firstName,
                    lastName: t.lastName,
                    emailAddress: t.emailAddress,
                    memberId: t.memberId,
                    isLoading: !1
                })
            },
            et = function(e, t) {
                return b(e, {
                    error: t.error
                })
            },
            tt = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Je,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Ve.a:
                        return Ze(e);
                    case Ve.c:
                        return $e(e, t);
                    case Ve.b:
                        return et(e, t);
                    default:
                        return e
                }
            },
            nt = n(62),
            at = {
                drugList: [],
                drugResults: [],
                loading: !1,
                content: null
            },
            rt = function(e, t) {
                return b(e, {
                    error: null,
                    loading: !0,
                    drugList: []
                })
            },
            ot = function(e, t) {
                return b(e, {
                    drugList: t.drugList,
                    loading: !1
                })
            },
            it = function(e, t) {
                return b(e, {
                    error: t.error,
                    loading: !1
                })
            },
            lt = function(e, t) {
                return b(e, {
                    error: null,
                    loading: !0,
                    drugResults: []
                })
            },
            ct = function(e, t) {
                return b(e, {
                    drugResults: t.drugResults,
                    loading: !1
                })
            },
            st = function(e, t) {
                return b(e, {
                    error: t.error,
                    loading: !1
                })
            },
            ut = function(e) {
                return b(e, {
                    error: null,
                    loading: !0,
                    content: null
                })
            },
            dt = function(e, t) {
                return b(e, {
                    content: t.content,
                    loading: !1
                })
            },
            mt = function(e, t) {
                return b(e, {
                    error: t.error,
                    loading: !1
                })
            },
            ft = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : at,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case nt.d:
                        return rt(e);
                    case nt.f:
                        return ot(e, t);
                    case nt.e:
                        return it(e, t);
                    case nt.g:
                        return lt(e);
                    case nt.i:
                        return ct(e, t);
                    case nt.h:
                        return st(e, t);
                    case nt.a:
                        return ut(e);
                    case nt.c:
                        return dt(e, t);
                    case nt.b:
                        return mt(e, t);
                    default:
                        return e
                }
            },
            gt = n(176);

        function pt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }
        var Et = {
                isRegistrationError: !1,
                isRegistrationSuccess: !1,
                errorCode: null,
                registrationDetails: null,
                isResendEmailSuccess: !1,
                isResendEmailFailure: !1
            },
            ht = function(e) {
                return b(e, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? pt(Object(n), !0).forEach((function(t) {
                            g()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pt(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, Et))
            },
            bt = function(e, t) {
                return b(e, {
                    registrationDetails: t.registrationDetails
                })
            },
            Ot = function(e) {
                return b(e, {
                    isRegistrationError: !1,
                    isRegistrationSuccess: !0,
                    errorCode: null
                })
            },
            _t = function(e, t) {
                var n, a;
                return b(e, {
                    isRegistrationError: !0,
                    isRegistrationSuccess: !1,
                    errorCode: null === (n = t.errorResponse) || void 0 === n || null === (a = n.errorMap) || void 0 === a ? void 0 : a.error_code
                })
            },
            Ct = function(e) {
                return b(e, {
                    isResendEmailSuccess: !1,
                    isResendEmailFailure: !1
                })
            },
            At = function(e) {
                return b(e, {
                    isResendEmailSuccess: !0,
                    isResendEmailFailure: !1
                })
            },
            Lt = function(e) {
                return b(e, {
                    isResendEmailSuccess: !1,
                    isResendEmailFailure: !0
                })
            },
            Nt = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Et,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case gt.a:
                        return ht(e);
                    case gt.c:
                        return bt(e, t);
                    case gt.e:
                        return Ot(e);
                    case gt.d:
                        return _t(e, t);
                    case gt.b:
                        return Ct(e);
                    case gt.g:
                        return At(e);
                    case gt.f:
                        return Lt(e);
                    default:
                        return e
                }
            },
            Tt = n(308);

        function St(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }
        var yt = {
                isForgotError: !1,
                isForgotSuccess: !1,
                errorCode: null,
                forgotDetails: null,
                isForgotEmail: !1,
                isForgotPassword: !1
            },
            Mt = function(e) {
                return b(e, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? St(Object(n), !0).forEach((function(t) {
                            g()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : St(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, yt))
            },
            Rt = function(e, t) {
                return b(e, {
                    isForgotEmail: !!t.isForgotEmail,
                    isForgotPassword: !!t.isForgotPassword
                })
            },
            vt = function(e, t) {
                return b(e, {
                    isForgotError: !1,
                    isForgotSuccess: !0,
                    errorCode: null,
                    forgotDetails: {
                        emailAddress: t.emailAddress
                    }
                })
            },
            wt = function(e, t) {
                var n, a;
                return b(e, {
                    isForgotError: !0,
                    isForgotSuccess: !1,
                    errorCode: null === (n = t.errorResponse) || void 0 === n || null === (a = n.errorMap) || void 0 === a ? void 0 : a.error_code
                })
            },
            It = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yt,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Tt.a:
                        return Mt(e);
                    case Tt.b:
                        return Rt(e, t);
                    case Tt.d:
                        return vt(e, t);
                    case Tt.c:
                        return wt(e, t);
                    default:
                        return e
                }
            },
            Pt = n(315),
            kt = {
                showSuccessMessage: !1,
                showErrorMessage: !1,
                errorMessages: null,
                isLoading: !0
            },
            jt = function(e) {
                return b(e, {
                    errorMessages: null,
                    showErrorMessage: !1,
                    isLoading: !0,
                    showSuccessMessage: !1
                })
            },
            xt = function(e, t) {
                return b(e, {
                    showSuccessMessage: t.showSuccessMessage,
                    isLoading: !1
                })
            },
            Dt = function(e, t) {
                return b(e, {
                    errorMessages: t.errorMessages,
                    showErrorMessage: t.showErrorMessage,
                    isLoading: !1
                })
            },
            Ut = function(e) {
                return b(e, {
                    showSuccessMessage: !1,
                    showErrorMessage: !1,
                    errorMessages: null
                })
            },
            Ft = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kt,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Pt.b:
                        return jt(e);
                    case Pt.d:
                        return xt(e, t);
                    case Pt.c:
                        return Dt(e, t);
                    case Pt.a:
                        return Ut(e);
                    default:
                        return e
                }
            },
            Ht = n(186),
            Bt = {
                systemStatusContent: null,
                error: null,
                loading: !1
            },
            Gt = function(e, t) {
                return b(e, {
                    error: null,
                    loading: !0,
                    systemStatusContent: null
                })
            },
            Yt = function(e, t) {
                return b(e, {
                    loading: !1,
                    systemStatusContent: t.systemStatusContent
                })
            },
            zt = function(e, t) {
                return b(e, {
                    error: t.error,
                    loading: !1
                })
            },
            Wt = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bt,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Ht.a:
                        return Gt(e);
                    case Ht.c:
                        return Yt(e, t);
                    case Ht.b:
                        return zt(e, t);
                    default:
                        return e
                }
            },
            Kt = n(26);

        function qt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function Vt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? qt(Object(n), !0).forEach((function(t) {
                    g()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qt(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var Xt, Qt, Jt, Zt = {
                messageCenterEmails: null,
                messageCenterUnreadEmailCount: 0,
                messageCenterNewQuerySuccess: null,
                options: void 0,
                messageCenterEmailReplySuccess: null
            },
            $t = function(e) {
                return b(e, {
                    error: null,
                    loading: !0,
                    messageCenterEmails: null
                })
            },
            en = function(e, t) {
                return b(e, {
                    messageCenterEmails: t.messageCenterEmails,
                    loading: !1
                })
            },
            tn = function(e, t) {
                return b(e, {
                    error: t.error,
                    loading: !1
                })
            },
            nn = function(e) {
                return b(e, {
                    error: null,
                    messageCenterUnreadEmailCount: null
                })
            },
            an = function(e, t) {
                return b(e, {
                    messageCenterUnreadEmailCount: t.messageCenterUnreadEmailCount
                })
            },
            rn = function(e, t) {
                return b(e, {
                    error: t.error
                })
            },
            on = function(e) {
                return b(e, {
                    error: null
                })
            },
            ln = function(e, t) {
                var n = e.messageCenterEmails.map((function(e) {
                    return e.messageId === t.messageId ? Vt(Vt({}, e), {}, {
                        deleted: !0
                    }) : e
                }));
                return b(e, {
                    messageCenterEmails: n
                })
            },
            cn = function(e, t) {
                return b(e, {
                    error: t.error
                })
            },
            sn = function(e, t) {
                var n = e.messageCenterEmails.map((function(e) {
                    return e.messageId === t.messageId ? Vt(Vt({}, e), {}, {
                        read: !0
                    }) : e
                }));
                return b(e, {
                    messageCenterEmails: n,
                    error: null,
                    loading: !0
                })
            },
            un = function(e, t) {
                var n = e.messageCenterEmails.map((function(e) {
                    return e.messageId === t.messageId ? Vt(Vt({}, e), {}, {
                        read: !1
                    }) : e
                }));
                return b(e, {
                    messageCenterEmails: n,
                    error: t.error,
                    loading: !1
                })
            },
            dn = function(e) {
                return b(e, {
                    messageCenterNewQuerySuccess: null,
                    error: null
                })
            },
            mn = function(e) {
                return b(e, {
                    messageCenterNewQuerySuccess: 1,
                    error: null
                })
            },
            fn = function(e, t) {
                return b(e, {
                    messageCenterNewQuerySuccess: 0,
                    error: t.error
                })
            },
            gn = function(e, t) {
                return b(e, {
                    options: t.options,
                    error: null
                })
            },
            pn = function(e, t) {
                return b(e, {
                    options: t.options,
                    error: null
                })
            },
            En = function(e, t) {
                return b(e, {
                    options: null,
                    error: t.error
                })
            },
            hn = function(e) {
                return b(e, {
                    messageCenterEmailReplySuccess: null,
                    error: null
                })
            },
            bn = function(e) {
                return b(e, {
                    messageCenterEmailReplySuccess: 1,
                    error: null
                })
            },
            On = function(e, t) {
                return b(e, {
                    messageCenterEmailReplySuccess: 0,
                    error: t.error
                })
            },
            _n = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zt,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Kt.d:
                        return $t(e);
                    case Kt.f:
                        return en(e, t);
                    case Kt.e:
                        return tn(e, t);
                    case Kt.g:
                        return nn(e);
                    case Kt.i:
                        return an(e, t);
                    case Kt.h:
                        return rn(e, t);
                    case Kt.a:
                        return on(e);
                    case Kt.c:
                        return ln(e, t);
                    case Kt.b:
                        return cn(e, t);
                    case Kt.s:
                        return sn(e, t);
                    case Kt.t:
                        return un(e, t);
                    case Kt.m:
                        return dn(e);
                    case Kt.r:
                        return mn(e);
                    case Kt.n:
                        return fn(e, t);
                    case Kt.j:
                        return gn(e, t);
                    case Kt.l:
                        return pn(e, t);
                    case Kt.k:
                        return En(e, t);
                    case Kt.o:
                        return hn(e);
                    case Kt.q:
                        return bn(e);
                    case Kt.p:
                        return On(e, t);
                    default:
                        return e
                }
            },
            Cn = n(46),
            An = {
                content: null,
                CDLContent: null,
                providerManualContent: null,
                ENPContent: null,
                isLoading: !1,
                error: null
            },
            Ln = function(e) {
                return b(e, {
                    error: null,
                    isLoading: !0,
                    content: null
                })
            },
            Nn = function(e, t) {
                return b(e, {
                    content: t.content,
                    isLoading: !1
                })
            },
            Tn = function(e, t) {
                return b(e, {
                    error: t.error,
                    isLoading: !1
                })
            },
            Sn = function(e) {
                return b(e, {
                    error: null,
                    isLoading: !0,
                    CDLContent: null
                })
            },
            yn = function(e, t) {
                return b(e, {
                    CDLContent: t.CDLContent,
                    isLoading: !1
                })
            },
            Mn = function(e, t) {
                return b(e, {
                    error: t.error,
                    isLoading: !1
                })
            },
            Rn = function(e) {
                return b(e, {
                    error: null,
                    isLoading: !0,
                    providerManualContent: null
                })
            },
            vn = function(e, t) {
                return b(e, {
                    providerManualContent: t.providerManualContent,
                    isLoading: !1
                })
            },
            wn = function(e, t) {
                return b(e, {
                    error: t.error,
                    isLoading: !1
                })
            },
            In = function(e) {
                return b(e, {
                    error: null,
                    isLoading: !0,
                    ENPContent: null
                })
            },
            Pn = function(e, t) {
                return b(e, {
                    ENPContent: t.ENPContent,
                    isLoading: !1
                })
            },
            kn = function(e, t) {
                return b(e, {
                    error: t.error,
                    isLoading: !1
                })
            },
            jn = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : An,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Cn.g:
                        return Ln(e);
                    case Cn.i:
                        return Nn(e, t);
                    case Cn.h:
                        return Tn(e, t);
                    case Cn.a:
                        return Sn(e);
                    case Cn.c:
                        return yn(e, t);
                    case Cn.b:
                        return Mn(e, t);
                    case Cn.j:
                        return Rn(e);
                    case Cn.l:
                        return vn(e, t);
                    case Cn.k:
                        return wn(e, t);
                    case Cn.d:
                        return In(e);
                    case Cn.f:
                        return Pn(e, t);
                    case Cn.e:
                        return kn(e, t);
                    default:
                        return e
                }
            },
            xn = n(187),
            Dn = {
                content: null,
                isLoading: !1,
                error: null
            },
            Un = function(e) {
                return b(e, {
                    error: null,
                    isLoading: !0,
                    content: null
                })
            },
            Fn = function(e, t) {
                return b(e, {
                    content: t.content,
                    isLoading: !1
                })
            },
            Hn = function(e, t) {
                return b(e, {
                    error: t.error,
                    isLoading: !1
                })
            },
            Bn = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dn,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case xn.a:
                        return Un(e);
                    case xn.c:
                        return Fn(e, t);
                    case xn.b:
                        return Hn(e, t);
                    default:
                        return e
                }
            },
            Gn = n(188),
            Yn = {
                content: null,
                isLoading: !1,
                error: null
            },
            zn = function(e) {
                return b(e, {
                    error: null,
                    isLoading: !0,
                    content: null
                })
            },
            Wn = function(e, t) {
                return b(e, {
                    content: t.content,
                    isLoading: !1
                })
            },
            Kn = function(e, t) {
                return b(e, {
                    error: t.error,
                    isLoading: !1
                })
            },
            qn = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yn,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Gn.a:
                        return zn(e);
                    case Gn.c:
                        return Wn(e, t);
                    case Gn.b:
                        return Kn(e, t);
                    default:
                        return e
                }
            },
            Vn = n(189),
            Xn = {
                linksContent: null,
                isLoading: !1,
                error: null
            },
            Qn = function(e) {
                return b(e, {
                    linksContent: null,
                    isLoading: !0,
                    error: null
                })
            },
            Jn = function(e, t) {
                return b(e, {
                    linksContent: t.content,
                    isLoading: !1,
                    error: null
                })
            },
            Zn = function(e, t) {
                return b(e, {
                    error: t.error,
                    isLoading: !1
                })
            },
            $n = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xn,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case Vn.a:
                        return Qn(e);
                    case Vn.c:
                        return Jn(e, t);
                    case Vn.b:
                        return Zn(e, t);
                    default:
                        return e
                }
            },
            ea = Object(r.a)((function(e) {
                return {
                    features: e.features,
                    portalFeatures: e.portalFeatures,
                    isCMS: e.isCMS,
                    cmsSiteName: e.cmsSiteName
                }
            }), (function(e) {
                return {
                    features: e.features,
                    portalFeatures: e.portalFeatures,
                    isCMS: e.isCMS,
                    cmsSiteName: e.cmsSiteName
                }
            }), {
                whitelist: ["global"]
            }),
            ta = Object(r.a)((function(e) {
                return {
                    logo: e.logo,
                    landingNavLinks: e.landingNavLinks,
                    memberNavLinks: e.memberNavLinks
                }
            }), (function(e) {
                return {
                    logo: e.logo,
                    landingNavLinks: e.landingNavLinks,
                    memberNavLinks: e.memberNavLinks
                }
            }), {
                whitelist: ["header"]
            }),
            na = Object(r.a)((function(e) {
                return {
                    locale: e.locale,
                    messages: e.messages,
                    languages: e.languages
                }
            }), (function(e) {
                return {
                    locale: e.locale,
                    messages: e.messages,
                    languages: e.languages
                }
            }), {
                whitelist: ["language"]
            }),
            aa = {
                key: "mrxportal",
                storage: i.a,
                whitelist: ["global", "header", "language"],
                transforms: [ea, ta, na]
            },
            ra = Object(s.a)(),
            oa = (Qt = [l.a, Object(c.a)(ra)], Jt = a.d, Object(a.e)(Object(r.b)(aa, (Xt = ra, Object(a.c)({
                router: Object(u.b)(Xt),
                global: I,
                helperUtilities: U,
                dashboard: z,
                language: ee,
                landingPage: ie,
                faq: me,
                education: be,
                documents: Ne,
                pharmacyLocator: Be,
                massAdjustments: Ie,
                header: qe,
                user: tt,
                register: Nt,
                forgot: It,
                drugLookup: ft,
                unsecuredMessaging: Ft,
                systemStatus: Wt,
                messageCenter: _n,
                formsAndInformation: jn,
                informationBanner: Bn,
                contactUs: qn,
                links: $n
            }))), Object(a.d)(a.a.apply(void 0, Qt), Jt()))),
            ia = Object(r.c)(oa)
    },
    22: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }));
        n(471);
        var a = n(208),
            r = n(78),
            o = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    o = null;
                if (null == n) {
                    var l = Object(r.a)(a.c.getState());
                    o = l.portalFeatures
                } else o = n;
                return null != o && (null != o[e] && i(o[e], t))
            },
            i = function(e, t) {
                return null != t && (null != e && -1 !== t.indexOf(e.ID))
            }
    },
    252: function(e, t, n) {
        "use strict";
        n(86), n(77), n(87), n(88), n(89), n(90), n(91), n(79), n(92);
        var a = n(6),
            r = n.n(a),
            o = n(23),
            i = n.n(o),
            l = n(0),
            c = n(1),
            s = n.n(c),
            u = n(22);

        function d(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }
        var m = function(e) {
            var t = e.children,
                n = e.userFeatures,
                a = Object(l.useState)(!1),
                o = i()(a, 2),
                c = o[0],
                s = o[1];
            return Object(l.useEffect)((function() {
                ! function() {
                    var t = e.feature,
                        n = e.userFeatures,
                        a = e.featureDefinitions;
                    Object(u.a)(t, n, a) ? s(!0) : s(!1)
                }()
            }), [n]), c ? function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach((function(t) {
                        r()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({}, t) : null
        };
        m.propTypes = {
            classes: s.a.object,
            feature: s.a.string,
            featureDefinitions: s.a.object,
            userFeatures: s.a.array,
            children: s.a.object
        }, t.a = m
    },
    26: function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return a
        })), n.d(t, "f", (function() {
            return r
        })), n.d(t, "e", (function() {
            return o
        })), n.d(t, "g", (function() {
            return i
        })), n.d(t, "i", (function() {
            return l
        })), n.d(t, "h", (function() {
            return c
        })), n.d(t, "a", (function() {
            return s
        })), n.d(t, "c", (function() {
            return u
        })), n.d(t, "b", (function() {
            return d
        })), n.d(t, "s", (function() {
            return m
        })), n.d(t, "t", (function() {
            return f
        })), n.d(t, "m", (function() {
            return g
        })), n.d(t, "r", (function() {
            return p
        })), n.d(t, "n", (function() {
            return E
        })), n.d(t, "j", (function() {
            return h
        })), n.d(t, "l", (function() {
            return b
        })), n.d(t, "k", (function() {
            return O
        })), n.d(t, "o", (function() {
            return _
        })), n.d(t, "q", (function() {
            return C
        })), n.d(t, "p", (function() {
            return A
        }));
        var a = "GET_MESSAGE_CENTER_EMAILS",
            r = "GET_MESSAGE_CENTER_EMAILS_SUCCESS",
            o = "GET_MESSAGE_CENTER_EMAILS_FAILURE",
            i = "GET_MESSAGE_CENTER_UNREAD_EMAIL_COUNT",
            l = "GET_MESSAGE_CENTER_UNREAD_EMAIL_COUNT_SUCCESS",
            c = "GET_MESSAGE_CENTER_UNREAD_EMAIL_COUNT_FAILURE",
            s = "DELETE_MESSAGE_CENTER_EMAIL",
            u = "DELETE_MESSAGE_CENTER_EMAIL_SUCCESS",
            d = "DELETE_MESSAGE_CENTER_EMAIL_FAILURE",
            m = "UPDATE_MESSAGE_CENTER_EMAIL_AS_READ",
            f = "UPDATE_MESSAGE_CENTER_EMAIL_AS_READ_FAILURE",
            g = "NEW_MESSAGE_CENTER_EMAIL",
            p = "NEW_MESSAGE_CENTER_EMAIL_SUCCESS",
            E = "NEW_MESSAGE_CENTER_EMAIL_FAILURE",
            h = "MESSAGE_CENTER_CMS_OPTIONS",
            b = "MESSAGE_CENTER_CMS_OPTIONS_SUCCESS",
            O = "MESSAGE_CENTER_CMS_OPTIONS_FAILURE",
            _ = "NEW_MESSAGE_CENTER_EMAIL_REPLY",
            C = "NEW_MESSAGE_CENTER_EMAIL_REPLY_SUCCESS",
            A = "NEW_MESSAGE_CENTER_EMAIL_REPLY_FAILURE"
    },
    261: function(e, t, n) {
        "use strict";
        n(624);
        var a = n(0),
            r = n.n(a),
            o = n(1),
            i = n.n(o),
            l = n(543),
            c = n.n(l),
            s = (n(68), n(54), n(75), n(76), n(30)),
            u = n.n(s),
            d = n(32),
            m = n.n(d),
            f = n(33),
            g = n.n(f),
            p = n(34),
            E = n.n(p),
            h = n(18),
            b = n.n(h),
            O = n(5),
            _ = n(697),
            C = n(152);

        function A(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = b()(e);
                if (t) {
                    var r = b()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return E()(this, n)
            }
        }
        var L = function(e) {
            g()(n, e);
            var t = A(n);

            function n() {
                return u()(this, n), t.apply(this, arguments)
            }
            return m()(n, [{
                key: "render",
                value: function() {
                    var e = this.props.classes;
                    return r.a.createElement(C.a, {
                        className: e.root
                    }, r.a.createElement(_.a, {
                        className: e.table
                    }, this.props.children))
                }
            }]), n
        }(r.a.Component);
        L.propTypes = {
            classes: i.a.object,
            children: i.a.array
        };
        var N = Object(O.a)((function(e) {
                return {
                    root: {
                        width: "100%",
                        marginTop: e.spacing(3),
                        overflowX: "auto"
                    },
                    table: {
                        minWidth: 700
                    }
                }
            }))(L),
            T = n(701),
            S = n(7);

        function y(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = b()(e);
                if (t) {
                    var r = b()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return E()(this, n)
            }
        }
        var M = function(e) {
            g()(n, e);
            var t = y(n);

            function n() {
                return u()(this, n), t.apply(this, arguments)
            }
            return m()(n, [{
                key: "render",
                value: function() {
                    var e = this.props.classes;
                    return r.a.createElement(T.a, {
                        className: e.root
                    }, this.props.children)
                }
            }]), n
        }(r.a.Component);
        M.propTypes = {
            classes: i.a.object,
            children: i.a.array
        };
        var R = Object(O.a)((function(e) {
                return {
                    root: {
                        backgroundColor: S.a.californiaBlue,
                        "& th": {
                            color: S.a.magellanWhite
                        }
                    }
                }
            }))(M),
            v = n(699);

        function w(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = b()(e);
                if (t) {
                    var r = b()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return E()(this, n)
            }
        }
        var I = function(e) {
            g()(n, e);
            var t = w(n);

            function n() {
                return u()(this, n), t.apply(this, arguments)
            }
            return m()(n, [{
                key: "render",
                value: function() {
                    var e = this.props.classes;
                    return r.a.createElement(v.a, {
                        className: e.root
                    }, this.props.children)
                }
            }]), n
        }(r.a.Component);
        I.propTypes = {
            classes: i.a.object,
            children: i.a.array
        };
        var P = Object(O.a)((function(e) {
                return {
                    root: {
                        "& a": {
                            color: S.a.magellanDarkBlue
                        }
                    }
                }
            }))(I),
            k = n(702);

        function j(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = b()(e);
                if (t) {
                    var r = b()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return E()(this, n)
            }
        }
        var x = function(e) {
            g()(n, e);
            var t = j(n);

            function n() {
                return u()(this, n), t.apply(this, arguments)
            }
            return m()(n, [{
                key: "render",
                value: function() {
                    return r.a.createElement(k.a, null, this.props.children)
                }
            }]), n
        }(r.a.Component);
        x.propTypes = {
            children: i.a.array
        };
        var D = x,
            U = n(698);

        function F(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = b()(e);
                if (t) {
                    var r = b()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return E()(this, n)
            }
        }
        var H = function(e) {
            g()(n, e);
            var t = F(n);

            function n() {
                return u()(this, n), t.apply(this, arguments)
            }
            return m()(n, [{
                key: "render",
                value: function() {
                    var e = this.props.classes;
                    return r.a.createElement(U.a, {
                        className: e.root
                    }, this.props.children)
                }
            }]), n
        }(r.a.Component);
        H.propTypes = {
            classes: i.a.object,
            children: i.a.array
        };
        var B = Object(O.a)((function(e) {
            return {
                root: {
                    "& tr:nth-child(even)": {
                        backgroundColor: S.a.magellanLightBlue
                    },
                    "& tr:hover": {
                        backgroundColor: S.a.magellan5Black
                    }
                }
            }
        }))(H);

        function G(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = b()(e);
                if (t) {
                    var r = b()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return E()(this, n)
            }
        }
        var Y = function(e) {
            g()(n, e);
            var t = G(n);

            function n() {
                return u()(this, n), t.apply(this, arguments)
            }
            return m()(n, [{
                key: "render",
                value: function() {
                    var e = this.props.children;
                    return r.a.createElement("p", null, e)
                }
            }]), n
        }(r.a.Component);
        Y.propTypes = {
            children: i.a.array
        };
        var z = Y;

        function W(e) {
            var t = e.source,
                n = e.renderers,
                a = e.escapeHtml,
                o = e.disallowedTypes,
                i = Object.assign({
                    paragraph: z,
                    table: N,
                    tableHead: R,
                    tableCell: P,
                    tableRow: D,
                    tableBody: B
                }, n);
            return r.a.createElement(c.a, {
                source: t,
                renderers: i,
                linkTarget: "blank",
                escapeHtml: a,
                disallowedTypes: o
            })
        }
        W.propTypes = {
            source: i.a.string,
            renderers: i.a.object,
            escapeHtml: i.a.bool,
            disallowedTypes: i.a.array
        }, z.propTypes = {
            children: i.a.array
        };
        t.a = W
    },
    275: function(e, t, n) {
        "use strict";
        var a = n(0),
            r = n.n(a),
            o = n(1),
            i = n.n(o),
            l = n(5),
            c = n(523),
            s = {
                root: {
                    position: "absolute",
                    left: "50%",
                    margin: "-40px 0px 0px -40px",
                    zIndex: 3e3,
                    top: "50%"
                },
                backdrop: {
                    position: "fixed",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    zIndex: 1e3,
                    backgroundColor: n(7).a.magellan5Black,
                    opacity: ".7"
                }
            };

        function u(e) {
            return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                className: e.classes.backdrop
            }), r.a.createElement("div", {
                className: e.classes.root
            }, r.a.createElement(c.a, {
                size: e.size,
                thickness: e.thickness,
                color: "primary",
                role: "progressbar",
                "aria-label": "Progress bar",
                "aria-labelledby": "Loading"
            })))
        }
        u.propTypes = {
            size: i.a.number,
            thickness: i.a.number,
            classes: i.a.object
        }, t.a = Object(l.a)(s)(u)
    },
    29: function(e, t, n) {
        "use strict";
        n.d(t, "n", (function() {
            return a.b
        })), n.d(t, "z", (function() {
            return a.f
        })), n.d(t, "w", (function() {
            return a.c
        })), n.d(t, "x", (function() {
            return a.d
        })), n.d(t, "y", (function() {
            return a.e
        })), n.d(t, "b", (function() {
            return a.a
        })), n.d(t, "q", (function() {
            return s
        })), n.d(t, "f", (function() {
            return m
        })), n.d(t, "a", (function() {
            return f.a
        })), n.d(t, "r", (function() {
            return b
        })), n.d(t, "m", (function() {
            return L
        })), n.d(t, "l", (function() {
            return M
        })), n.d(t, "p", (function() {
            return P
        })), n.d(t, "A", (function() {
            return I
        })), n.d(t, "v", (function() {
            return k.b
        })), n.d(t, "h", (function() {
            return U
        })), n.d(t, "i", (function() {
            return F
        })), n.d(t, "j", (function() {
            return G
        })), n.d(t, "u", (function() {
            return q
        })), n.d(t, "o", (function() {
            return Z
        })), n.d(t, "d", (function() {
            return ne
        })), n.d(t, "t", (function() {
            return ie
        })), n.d(t, "k", (function() {
            return ue
        })), n.d(t, "c", (function() {
            return Ee
        })), n.d(t, "e", (function() {
            return be
        })), n.d(t, "g", (function() {
            return _e
        })), n.d(t, "s", (function() {
            return Ae
        }));
        var a = n(156),
            r = (n(55), n(179)),
            o = n(10),
            i = n.n(o),
            l = function(e) {
                return {
                    type: r.c,
                    cmsContent: e
                }
            },
            c = function(e) {
                return {
                    type: r.b,
                    error: e
                }
            },
            s = function(e) {
                return function(t) {
                    return t({
                        type: r.a
                    }), t(Object(a.f)(!0)), e.isCMS && "google" !== e.translator ? i.a.get("/delivery/api/provider/helperUtilitiesV2.json?crafterSite=".concat(e.cmsSiteName)).then((function(e) {
                        t(l(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(c(e)), t(Object(a.f)(!1))
                    })) : e.isCMS && "google" === e.translator ? i.a.get("/util/content/".concat(e.cmsSiteName, "/").concat(e.locale, "?cmsApiCode=provider/helperUtilitiesV2")).then((function(e) {
                        t(l(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(c(e)), t(Object(a.f)(!1))
                    })) : void 0
                }
            },
            u = n(159),
            d = function(e) {
                return {
                    type: u.b,
                    error: e
                }
            },
            m = function(e) {
                return function(t) {
                    t({
                        type: u.a
                    }), t(Object(a.f)(!0)), e.isCMS ? function(e) {
                        return "google" === e.translator ? i.a.get("/util/content/".concat(e.cmsSiteName, "/").concat(e.locale, "?cmsApiCode=memberDashboard")) : i.a.get("/delivery/api/memberDashboard.json?crafterSite=".concat(e.cmsSiteName))
                    }(e).then((function(e) {
                        var n, r;
                        t((n = e.data.pageContent, r = !1, {
                            type: u.c,
                            dashboardContent: n,
                            isMarkdown: r
                        })), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(d(e)), t(Object(a.f)(!1))
                    })) : function(e) {
                        return i.a.get("/provider/external/".concat(e.businessLine.toLowerCase(), "/").concat(e.client, "/src/en-us/").concat(e.fileName, ".md"))
                    }(e).then((function(e) {
                        var n, r;
                        t((n = e.data, r = !0, {
                            type: u.c,
                            dashboardContent: n,
                            isMarkdown: r
                        })), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(d(e)), t(Object(a.f)(!1))
                    }))
                }
            },
            f = n(201),
            g = n(180),
            p = function() {
                return {
                    type: g.a
                }
            },
            E = function(e) {
                return {
                    type: g.c,
                    landingPageContent: e
                }
            },
            h = function(e) {
                return {
                    type: g.b,
                    error: e
                }
            },
            b = function(e) {
                return e.isCMS && "google" !== e.translator ? function(t) {
                    t(p()), t(Object(a.f)(!0)), i.a.get("/delivery/api/landingPage.json?crafterSite=".concat(e.cmsSiteName)).then((function(e) {
                        t(E(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(h(e)), t(Object(a.f)(!1))
                    }))
                } : e.isCMS && "google" === e.translator ? function(t) {
                    t(p()), t(Object(a.f)(!0)), i.a.get("/util/content/".concat(e.cmsSiteName, "/").concat(e.locale, "?cmsApiCode=landingPage")).then((function(e) {
                        t(E(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(h(e)), t(Object(a.f)(!1))
                    }))
                } : void 0
            },
            O = n(181),
            _ = function() {
                return {
                    type: O.a
                }
            },
            C = function(e) {
                return {
                    type: O.c,
                    faqContent: e
                }
            },
            A = function(e) {
                return {
                    type: O.b,
                    error: e
                }
            },
            L = function(e) {
                return e.isCMS && "google" !== e.translator ? function(t) {
                    t(_()), t(Object(a.f)(!0)), i.a.get("/delivery/api/faqPage.json?crafterSite=".concat(e.cmsSiteName)).then((function(e) {
                        t(C(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(A(e)), t(Object(a.f)(!1))
                    }))
                } : e.isCMS && "google" === e.translator ? function(t) {
                    t(_()), t(Object(a.f)(!0)), i.a.get("/util/content/".concat(e.cmsSiteName, "/").concat(e.locale, "?cmsApiCode=faqPage")).then((function(e) {
                        t(C(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(A(e)), t(Object(a.f)(!1))
                    }))
                } : void 0
            },
            N = n(182),
            T = function() {
                return {
                    type: N.a
                }
            },
            S = function(e) {
                return {
                    type: N.c,
                    payload: e
                }
            },
            y = function(e) {
                return {
                    type: N.b,
                    error: e
                }
            },
            M = function(e) {
                return e.isCMS && "google" !== e.translator ? function(t) {
                    t(T()), t(Object(a.f)(!0)), i.a.get("/delivery/api/education.json?crafterSite=".concat(e.cmsSiteName)).then((function(e) {
                        t(S(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(y(e)), t(Object(a.f)(!1))
                    }))
                } : e.isCMS && "google" === e.translator ? function(t) {
                    t(T()), t(Object(a.f)(!0)), i.a.get("/util/content/".concat(e.cmsSiteName, "/").concat(e.locale, "?cmsApiCode=education")).then((function(e) {
                        t(S(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(y(e)), t(Object(a.f)(!1))
                    }))
                } : void 0
            },
            R = n(184),
            v = function(e) {
                return {
                    type: R.a,
                    logo: e.pageContent.logo,
                    navLinks: e.pageContent.navLinks
                }
            },
            w = function(e) {
                return {
                    type: R.b,
                    headerContent: e.pageContent,
                    logo: e.pageContent.logo,
                    navLinks: e.pageContent.navLinks
                }
            },
            I = function(e) {
                return {
                    type: R.c,
                    searchBarOpen: e
                }
            },
            P = function(e) {
                return e.isCMS && "google" !== e.translator ? function(t) {
                    i.a.get("/delivery/api/landingNav.json?crafterSite=".concat(e.cmsSiteName)).then((function(e) {
                        t(v(e.data))
                    })), i.a.get("/delivery/api/memberNav.json?crafterSite=".concat(e.cmsSiteName)).then((function(e) {
                        t(w(e.data))
                    }))
                } : e.isCMS && "google" === e.translator ? function(t) {
                    i.a.get("/util/content/".concat(e.cmsSiteName, "/").concat(e.locale, "?cmsApiCode=landingNav")).then((function(e) {
                        t(v(e.data))
                    })), i.a.get("/util/content/".concat(e.cmsSiteName, "/").concat(e.locale, "?cmsApiCode=memberNav")).then((function(e) {
                        t(w(e.data))
                    }))
                } : void 0
            },
            k = n(399),
            j = n(62),
            x = function() {
                return {
                    type: j.d
                }
            },
            D = function() {
                return {
                    type: j.g
                }
            },
            U = function(e) {
                return function(t) {
                    t(x), t(Object(a.f)(!0)), i.a.get("/api/drugservice/drugList", {
                        headers: {
                            "X-Magellan-Tenant-ID": e.clientCode
                        }
                    }).then((function(e) {
                        var n;
                        t((n = e.data, {
                            type: j.f,
                            drugList: n
                        })), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(function(e) {
                            return {
                                type: j.e,
                                error: e
                            }
                        }(e)), t(Object(a.f)(!1))
                    }))
                }
            },
            F = function(e) {
                return function(t) {
                    t(D), t(Object(a.f)(!0)), i.a.get("/api/drugservice/drugDetail", {
                        params: {
                            hsn: e.drug.hsn,
                            ndc: e.drug.ndc,
                            gsn: e.drug.gsn,
                            drugName: e.drug.drugName
                        },
                        headers: {
                            "X-Magellan-Tenant-ID": e.clientCode
                        }
                    }).then((function(e) {
                        var n;
                        t((n = e.data, {
                            type: j.i,
                            drugResults: n
                        })), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(function(e) {
                            return {
                                type: j.h,
                                error: e
                            }
                        }(e)), t(Object(a.f)(!1))
                    }))
                }
            },
            H = function(e) {
                return {
                    type: j.c,
                    content: e
                }
            },
            B = function(e) {
                return {
                    type: j.b,
                    error: e
                }
            },
            G = function(e) {
                return function(t) {
                    return t({
                        type: j.a
                    }), t(Object(a.f)(!0)), e.isCMS && "google" !== e.translator ? i.a.get("/delivery/api/drugLookup.json?crafterSite=".concat(e.cmsSiteName)).then((function(e) {
                        t(H(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(B(e)), t(Object(a.f)(!1))
                    })) : e.isCMS && "google" === e.translator ? i.a.get("/util/content/".concat(e.cmsSiteName, "/").concat(e.locale, "?cmsApiCode=drugLookup")).then((function(e) {
                        t(H(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(B(e)), t(Object(a.f)(!1))
                    })) : void 0
                }
            },
            Y = n(186),
            z = function() {
                return {
                    type: Y.a
                }
            },
            W = function(e) {
                return {
                    type: Y.c,
                    systemStatusContent: e
                }
            },
            K = function(e) {
                return {
                    type: Y.b,
                    error: e
                }
            },
            q = function(e) {
                return e.isCMS && "google" !== e.translator ? function(t) {
                    t(z()), t(Object(a.f)(!0)), i.a.get("/delivery/api/systemStatus.json?crafterSite=".concat(e.cmsSiteName)).then((function(e) {
                        t(W(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(K(e)), t(Object(a.f)(!1))
                    }))
                } : e.isCMS && "google" === e.translator ? function(t) {
                    t(z()), t(Object(a.f)(!0)), i.a.get("/util/content/".concat(e.cmsSiteName, "/").concat(e.locale, "?cmsApiCode=systemStatus")).then((function(e) {
                        t(W(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(K(e)), t(Object(a.f)(!1))
                    }))
                } : void 0
            },
            V = n(46),
            X = function() {
                return {
                    type: V.g
                }
            },
            Q = function(e) {
                return {
                    type: V.i,
                    content: e
                }
            },
            J = function(e) {
                return {
                    type: V.h,
                    error: e
                }
            },
            Z = function(e) {
                return e.isCMS && "google" !== e.translator ? function(t) {
                    t(X()), t(Object(a.f)(!0)), i.a.get("/delivery/api/formsInformation.json?crafterSite=".concat(e.cmsSiteName)).then((function(e) {
                        t(Q(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(J(e)), t(Object(a.f)(!1))
                    }))
                } : e.isCMS && "google" === e.translator ? function(t) {
                    t(X()), t(Object(a.f)(!0)), i.a.get("/util/content/".concat(e.cmsSiteName, "/").concat(e.locale, "?cmsApiCode=formsInformation")).then((function(e) {
                        t(Q(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(J(e)), t(Object(a.f)(!1))
                    }))
                } : void 0
            },
            $ = function() {
                return {
                    type: V.a
                }
            },
            ee = function(e) {
                return {
                    type: V.c,
                    CDLContent: e
                }
            },
            te = function(e) {
                return {
                    type: V.b,
                    error: e
                }
            },
            ne = function(e) {
                return e.isCMS && "google" !== e.translator ? function(t) {
                    t($()), t(Object(a.f)(!0)), i.a.get("/delivery/api/contractDrugsList.json?crafterSite=".concat(e.cmsSiteName)).then((function(e) {
                        t(ee(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(te(e)), t(Object(a.f)(!1))
                    }))
                } : e.isCMS && "google" === e.translator ? function(t) {
                    t($()), t(Object(a.f)(!0)), i.a.get("/util/content/".concat(e.cmsSiteName, "/").concat(e.locale, "?cmsApiCode=contractDrugsList")).then((function(e) {
                        t(ee(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(te(e)), t(Object(a.f)(!1))
                    }))
                } : void 0
            },
            ae = function() {
                return {
                    type: V.j
                }
            },
            re = function(e) {
                return {
                    type: V.l,
                    providerManualContent: e
                }
            },
            oe = function(e) {
                return {
                    type: V.k,
                    error: e
                }
            },
            ie = function(e) {
                return e.isCMS && "google" !== e.translator ? function(t) {
                    t(ae()), t(Object(a.f)(!0)), i.a.get("/delivery/api/provider/providerManual.json?crafterSite=".concat(e.cmsSiteName)).then((function(e) {
                        t(re(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(oe(e)), t(Object(a.f)(!1))
                    }))
                } : e.isCMS && "google" === e.translator ? function(t) {
                    t(ae()), t(Object(a.f)(!0)), i.a.get("/util/content/".concat(e.cmsSiteName, "/").concat(e.locale, "?cmsApiCode=provider/providerManual")).then((function(e) {
                        t(re(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(oe(e)), t(Object(a.f)(!1))
                    }))
                } : void 0
            },
            le = function() {
                return {
                    type: V.d
                }
            },
            ce = function(e) {
                return {
                    type: V.f,
                    ENPContent: e
                }
            },
            se = function(e) {
                return {
                    type: V.e,
                    error: e
                }
            },
            ue = function(e) {
                return e.isCMS && "google" !== e.translator ? function(t) {
                    t(le()), t(Object(a.f)(!0)), i.a.get("/delivery/api/enteralNutrtionProducts.json?crafterSite=".concat(e.cmsSiteName)).then((function(e) {
                        t(ce(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(se(e)), t(Object(a.f)(!1))
                    }))
                } : e.isCMS && "google" === e.translator ? function(t) {
                    t(le()), t(Object(a.f)(!0)), i.a.get("/util/content/".concat(e.cmsSiteName, "/").concat(e.locale, "?cmsApiCode=enteralNutritionProducts")).then((function(e) {
                        t(ce(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(se(e)), t(Object(a.f)(!1))
                    }))
                } : void 0
            },
            de = n(187),
            me = n(35),
            fe = function() {
                return {
                    type: de.a
                }
            },
            ge = function(e) {
                return {
                    type: de.c,
                    content: e
                }
            },
            pe = function(e) {
                return {
                    type: de.b,
                    error: e
                }
            },
            Ee = function(e) {
                return e.isCMS && "google" !== e.translator ? function(t) {
                    t(fe()), t(Object(a.f)(!0)), Object(me.c)() && i.a.get("/delivery/api/informationBanner.json?crafterSite=".concat(e.cmsSiteName)).then((function(e) {
                        t(ge(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(pe(e)), t(Object(a.f)(!1))
                    })), Object(me.d)() && i.a.get("/delivery/api/memberInformationBanner.json?crafterSite=".concat(e.cmsSiteName)).then((function(e) {
                        t(ge(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(pe(e)), t(Object(a.f)(!1))
                    }))
                } : e.isCMS && "google" === e.translator ? function(t) {
                    t(fe()), t(Object(a.f)(!0)), i.a.get("/util/content/".concat(e.cmsSiteName, "/").concat(e.locale, "?cmsApiCode=informationBanner")).then((function(e) {
                        t(ge(e.data.pageContent)), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(pe(e)), t(Object(a.f)(!1))
                    }))
                } : void 0
            },
            he = n(188),
            be = function(e) {
                if (e.isCMS && "google" !== e.translator) return function(t) {
                    t({
                        type: he.a
                    }), t(Object(a.f)(!0)), i.a.get("/delivery/api/contactUs.json?crafterSite=".concat(e.cmsSiteName)).then((function(e) {
                        var n;
                        t((n = e.data.pageContent, {
                            type: he.c,
                            content: n
                        })), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(function(e) {
                            return {
                                type: he.b,
                                error: e
                            }
                        }(e)), t(Object(a.f)(!1))
                    }))
                }
            },
            Oe = n(183),
            _e = function(e) {
                if (e.isCMS && "google" !== e.translator) return function(t) {
                    t({
                        type: Oe.a
                    }), t(Object(a.f)(!0)), i.a.get("/delivery/api/documents.json?crafterSite=".concat(e.cmsSiteName)).then((function(e) {
                        var n;
                        t((n = e.data.pageContent, {
                            type: Oe.c,
                            content: n
                        })), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(function(e) {
                            return {
                                type: Oe.b,
                                error: e
                            }
                        }(e)), t(Object(a.f)(!1))
                    }))
                }
            },
            Ce = n(189),
            Ae = function(e) {
                if (e.isCMS && "google" !== e.translator) return function(t) {
                    t({
                        type: Ce.a
                    }), t(Object(a.f)(!0)), i.a.get("/delivery/api/links.json?crafterSite=".concat(e.cmsSiteName)).then((function(e) {
                        var n;
                        t((n = e.data.pageContent, {
                            type: Ce.c,
                            content: n
                        })), t(Object(a.f)(!1))
                    })).catch((function(e) {
                        t(function(e) {
                            return {
                                type: Ce.b,
                                error: e
                            }
                        }(e)), t(Object(a.f)(!1))
                    }))
                }
            }
    },
    308: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "b", (function() {
            return r
        })), n.d(t, "d", (function() {
            return o
        })), n.d(t, "c", (function() {
            return i
        }));
        var a = "CLEAR_FORGOT_EMAIL_PASSWORD",
            r = "UPDATE_FORGOT_EMAIL_PASSWORD",
            o = "UPDATE_FORGOT_EMAIL_PASSWORD_SUCCESS",
            i = "UPDATE_FORGOT_EMAIL_PASSWORD_FAILURE"
    },
    312: function(e, t, n) {
        "use strict";
        var a = n(9);
        t.a = Object(a.defineMessages)({
            findAPharmacy: {
                id: "APP_COMPONENT_PHARMACY_LOCATOR_FIND_A_PHARMACY",
                defaultMessage: "Find a Pharmacy"
            },
            select: {
                id: "SELECT",
                defaultMessage: "Select"
            },
            enterCityStateZip: {
                id: "APP_COMPONENT_PHARMACY_LOCATOR_ENTER_CITY_STATE_ZIP",
                defaultMessage: "Enter City and State or Zip"
            },
            useMyLocation: {
                id: "APP_COMPONENT_PHARMACY_LOCATOR_USE_MY_LOCATION",
                defaultMessage: "Use My Location"
            },
            search: {
                id: "APP_COMPONENT_PHARMACY_LOCATOR_SEARCH",
                defaultMessage: "Search"
            },
            searching: {
                id: "APP_COMPONENT_PHARMACY_LOCATOR_SEARCHING",
                defaultMessage: "Searching..."
            },
            or: {
                id: "APP_COMPONENT_PHARMACY_LOCATOR_OR",
                defaultMessage: "Or"
            },
            directions: {
                id: "APP_COMPONENT_PHARMACY_SEARCH_RESULTS_DIRECTIONS",
                defaultMessage: "Directions"
            },
            distance: {
                id: "DISTANCE",
                defaultMessage: "Distance"
            },
            filter: {
                id: "APP_COMPONENT_PHARMACY_SEARCH_RESULTS_FILTER",
                defaultMessage: "Filter"
            },
            milesAway: {
                id: "DISTANCE_MILES_AWAY",
                defaultMessage: "mile(s) away"
            },
            otherInfo: {
                id: "APP_COMPONENT_PHARMACY_SEARCH_RESULTS_APP_COMPONENT_OTHERINFO_HEADER",
                defaultMessage: "Other Info"
            },
            otherInfoHelp: {
                id: "APP_COMPONENT_PHARMACY_SEARCH_RESULTS_APP_COMPONENT_OTHERINFO_HEADER",
                defaultMessage: "Other Info Help"
            },
            distanceOneMile: {
                id: "DISTANCE_ONE_MILE",
                defaultMessage: "1 mile"
            },
            distanceFiveMile: {
                id: "DISTANCE_FIVE_MILES",
                defaultMessage: "5 miles"
            },
            distanceTenMile: {
                id: "DISTANCE_TEN_MILES",
                defaultMessage: "10 miles"
            },
            distanceFifteenMile: {
                id: "DISTANCE_FIFTEEN_MILES",
                defaultMessage: "15 miles"
            },
            distanceTwentyMile: {
                id: "DISTANCE_TWENTY_MILES",
                defaultMessage: "20 miles"
            },
            sort: {
                id: "APP_COMPONENT_PHARMACY_SEARCH_RESULTS_SORT_TEXT",
                defaultMessage: "Sort by:"
            },
            alpha: {
                id: "APP_COMPONENT_PHARMACY_SEARCH_RESULTS_SORT_ALPHA",
                defaultMessage: "Alphabetical: A to Z"
            },
            reverseAlpha: {
                id: "APP_COMPONENT_PHARMACY_SEARCH_RESULTS_SORT_REVERSE_ALPHA",
                defaultMessage: "Alphabetical: Z to A"
            },
            preferred: {
                id: "APP_COMPONENT_PHARMACY_SEARCH_RESULTS_SORT_PREFERRED",
                defaultMessage: "Preferred"
            },
            nearest: {
                id: "APP_COMPONENT_PHARMACY_SEARCH_RESULTS_SORT_DISTANCE",
                defaultMessage: "Distance: nearest"
            },
            npiHeading: {
                id: "APP_COMPONENT_PHARMACY_SEARCH_RESULTS_NPI_HEADING",
                defaultMessage: "NPI"
            },
            hours24: {
                id: "APP_COMPONENT_PHARMACY_SEARCH_RESULTS_24_HOURS",
                defaultMessage: "24 Hours"
            },
            delivery: {
                id: "APP_COMPONENT_PHARMACY_SEARCH_RESULTS_DELIVERY",
                defaultMessage: "Delivery"
            },
            driveThru: {
                id: "APP_COMPONENT_PHARMACY_SEARCH_RESULTS_DRIVE_THRU",
                defaultMessage: "Drive Thru"
            },
            eScript: {
                id: "APP_COMPONENT_PHARMACY_SEARCH_RESULTS_ELECTRONIC_PRESCRIB",
                defaultMessage: "Electronic Prescribing Enabled"
            },
            extendedDay: {
                id: "APP_COMPONENT_PHARMACY_SEARCH_RESULTS_EXTENDED_DAY_SUPPLY",
                defaultMessage: "Extended Day Supply"
            },
            ihs: {
                id: "APP_COMPONENT_PHARMACY_SEARCH_RESULTS_INDIAN_HEALTH_SERVICES",
                defaultMessage: "Indian Health Services"
            },
            iv: {
                id: "APP_COMPONENT_PHARMACY_SEARCH_RESULTS_IV_INFUSION",
                defaultMessage: "IV Infusion"
            },
            ltc: {
                id: "APP_COMPONENT_PHARMACY_SEARCH_RESULTS_LONG_TERM_CARE",
                defaultMessage: "Long Term Care"
            },
            mailOrder: {
                id: "APP_COMPONENT_PHARMACY_SEARCH_RESULTS_MAIL_ORDER",
                defaultMessage: "Mail Order"
            },
            pharmacyname: {
                id: "APP_COMPONENT_FILTERPHARMACY_NAME",
                defaultMessage: "Pharmacy Name"
            },
            pharmacyplaceholder: {
                id: "APP_COMPONENT_FILTERPHARMACY_PLACEHOLDER",
                defaultMessage: "Enter pharmacy name"
            },
            retail: {
                id: "APP_COMPONENT_PHARMACY_SEARCH_RESULTS_RETAIL",
                defaultMessage: "Retail"
            },
            open24hrs: {
                id: "APP_COMPONENT_FILTERPHARMACY_24HOURS",
                defaultMessage: "24 Hours"
            },
            indianHealthServicesInd: {
                id: "APP_COMPONENT_FILTERPHARMACY_INIAN_HEALTH_SERVICE",
                defaultMessage: "Indian Health Services"
            },
            deliveryFilter: {
                id: "APP_COMPONENT_FILTERPHARMACY_DELIVERY",
                defaultMessage: "Delivery"
            },
            homeInfusionInd: {
                id: "APP_COMPONENT_FILTERPHARMACY_IV_INFUSION",
                defaultMessage: "IV Infusion"
            },
            driveThruFilter: {
                id: "APP_COMPONENT_FILTERPHARMACY_DRIVE_THRU",
                defaultMessage: "Drive Thru"
            },
            longTermCareInd: {
                id: "APP_COMPONENT_FILTERPHARMACY_LONG_TERM_CARE",
                defaultMessage: "Long Term Care"
            },
            acceptsEprescriptionsInd: {
                id: "APP_COMPONENT_FILTERPHARMACY_ELECTRONIC_PRESCRIBING",
                defaultMessage: "Electronic Prescribing Enabled"
            },
            mailOrderInd: {
                id: "APP_COMPONENT_FILTERPHARMACY_MAIL_ORDER",
                defaultMessage: "Mail Order"
            },
            extendedDaySupplyInd: {
                id: "APP_COMPONENT_FILTERPHARMACY_EXTENDED_DAY_SUPPLY",
                defaultMessage: "Extended Day Supply"
            },
            retailInd: {
                id: "APP_COMPONENT_FILTERPHARMACY_RETAIL",
                defaultMessage: "Retail"
            },
            applyfilter: {
                id: "APP_COMPONENT_FILTERPHARMACY_APPLY_FILTER",
                defaultMessage: "Apply Filter"
            },
            cancel: {
                id: "APP_COMPONENT_FILTERPHARMACY_CANCEL",
                defaultMessage: "Cancel"
            },
            filters: {
                id: "FILTERS",
                defaultMessage: "Filters"
            },
            specialtyInd: {
                id: "APP_COMPONENT_FILTERPHARMACY_SPECIALTY",
                defaultMessage: "Specialty (i.e compounding)"
            },
            specialtyIndDesc: {
                id: "FIND_A_PHARMACY_COUMPOUND_PHARMACY_DEFINITION",
                defaultMessage: "A pharmacy that specializes in the preparation of components into a drug preparation as the result of a Practitioner's Prescription Drug Order or initiative based on the Practitioner/Patient/Pharmacist relationship in the course of professional practice. A compounding pharmacy utilizes specialized equipment and specially designed facilities necessary to meet the legal and quality requirements of its scope of compounding practice."
            },
            noResults: {
                id: "APP_COMPONENT_PHARMACY_SEARCH_RESULTS_NO_RESULTS",
                defaultMessage: "No records match your search criteria."
            },
            noResultsInfo: {
                id: "APP_COMPONENT_PHARMACY_SEARCH_RESULTS_NO_RESULTS_INFO",
                defaultMessage: 'Please increase the "Distance" to locate a pharmacy.'
            },
            head: {
                id: "APP_COMPONENT_OTHERINFO_ALERT",
                defaultMessage: "Other Info Definitions"
            },
            close: {
                id: "APP_COMPONENT_OTHERINFO_ALERT_CLOSE",
                defaultMessage: "Close"
            },
            otherInfoModalHead: {
                id: "APP_COMPONENT_OTHERINFO_ALERT",
                defaultMessage: "Other Info Definitions"
            },
            open24hrsdesc: {
                id: "APP_COMPONENT_OTHERINFO_ALERT_24HOURS_DESC",
                defaultMessage: "A pharmacy that is open 24 hours."
            },
            deliverydesc: {
                id: "APP_COMPONENT_OTHERINFO_ALERT_DELIVERY_DESC",
                defaultMessage: "A pharmacy that provides pharmacy delivery service."
            },
            drivethrudesc: {
                id: "APP_COMPONENT_OTHERINFO_ALERT_DRIVE_THRU_DESC",
                defaultMessage: "A pharmacy that provides a drive thru service."
            },
            electronicdesc: {
                id: "APP_COMPONENT_OTHERINFO_ALERT_ELECTRONIC_PRESCRIBING_DESC",
                defaultMessage: "A pharmacy that accepts prescriptions through electronic prescribing."
            },
            extendeddaydesc: {
                id: "APP_COMPONENT_OTHERINFO_ALERT_EXTENDED_DAY_DESC",
                defaultMessage: "For some drugs, you can get a long-term supply (also called an 'extended supply') when you fill your prescription. A long term supply is up to a 90-day supply."
            },
            indianHealthServicesIndDesc: {
                id: "APP_COMPONENT_OTHERINFO_ALERT_INDIAN_HEALTH_DESC",
                defaultMessage: "Only Native Americans and Alaska Natives have access to Indian Health Service/Tribal/Urban Indian Health Program (I/T/U) Pharmacies through Magellan Rx Medicare Basic (PDP)'s pharmacy network. Those Other than Native Americans and Alaska Natives may be able to access these pharmacies under limited circumstances (e.g., emergencies)."
            },
            ivInfusionDesc: {
                id: "APP_COMPONENT_OTHERINFO_ALERT_IV_INFUSION_DESC",
                defaultMessage: "Pharmacy-based, decentralized patient care organization with expertise in USP 797-compliant sterile drug compounding that provides care to patients with acute or chronic conditions generally pertaining to parenteral administration of drugs, biologics and nutritional formulae administered through catheters and/or needles in home and alternate sites. Extensive professional pharmacy services, care coordination, infusion nursing services, supplies and equipment are provided to optimize efficacy and compliance."
            },
            longTermCarePharmacyDesc: {
                id: "APP_COMPONENT_OTHERINFO_ALERT_LONG_TERM_CARE_PHARMACY_DESC",
                defaultMessage: "Residents of a long-term care facility may access their prescription drugs covered under Magellan Rx Medicare Basic (PDP) through their facility??s long-term care pharmacy or another network long-term care pharmacy."
            },
            mailOrderPharmacyDesc: {
                id: "APP_COMPONENT_OTHERINFO_ALERT_MAIL_ORDER_PHARMACY_DESC",
                defaultMessage: "You can get prescription drugs shipped to your home through our network mail order delivery service. To refill your mail order prescriptions, please contact us 20 days before you think the drugs you have on hand will run out to make sure your next order is shipped to you in time. Typically, you should expect to receive your prescription drugs within 14 days from the time that the mail order pharmacy receives the order. If you do not receive your prescription drug(s) within this time, please contact us at 1-800-424-5870 (TTY: 711)."
            },
            retailPharmacyDesc: {
                id: "APP_COMPONENT_OTHERINFO_ALERT_RETAIL_PHARMACY_DESC",
                defaultMessage: "A pharmacy where pharmacists store, prepare, and dispense medicinal preparations and/or prescriptions for a local patient population in accordance with federal and state law; counsel patients and caregivers (sometimes independent of the dispensing process); administer vaccinations; and provide other professional services associated with pharmaceutical care such as health screenings, consultative services with other health care providers, collaborative practice, disease state management, and education classes."
            },
            sunday: {
                id: "APP_DAY_OF_WEEK_SUNDAY",
                defaultMessage: "Sunday"
            },
            monday: {
                id: "APP_DAY_OF_WEEK_MONDAY",
                defaultMessage: "Monday"
            },
            tuesday: {
                id: "APP_DAY_OF_WEEK_TUESDAY",
                defaultMessage: "Tuesday"
            },
            wednesday: {
                id: "APP_DAY_OF_WEEK_WEDNESDAY",
                defaultMessage: "Wednesday"
            },
            thursday: {
                id: "APP_DAY_OF_WEEK_THURSDAY",
                defaultMessage: "Thursday"
            },
            friday: {
                id: "APP_DAY_OF_WEEK_FRIDAY",
                defaultMessage: "Friday"
            },
            saturday: {
                id: "APP_DAY_OF_WEEK_SATURDAY",
                defaultMessage: "Saturday"
            },
            hours: {
                id: "APP_DAY_OF_WEEK_HOURS",
                defaultMessage: "Hours"
            },
            today: {
                id: "APP_DAY_OF_WEEK_TODAY",
                defaultMessage: "Today"
            },
            languagesSpoken: {
                id: "APP_LANGUAGES_SPOKEN",
                defaultMessage: "Languages Spoken"
            }
        })
    },
    315: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return a
        })), n.d(t, "d", (function() {
            return r
        })), n.d(t, "c", (function() {
            return o
        })), n.d(t, "a", (function() {
            return i
        }));
        var a = "SEND_MESSAGE",
            r = "SEND_MESSAGE_SUCCESS",
            o = "SEND_MESSAGE_FAILURE",
            i = "CLEAR_ERROR_MESSAGES"
    },
    35: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return a
        })), n.d(t, "e", (function() {
            return r
        })), n.d(t, "a", (function() {
            return o
        })), n.d(t, "c", (function() {
            return i
        })), n.d(t, "d", (function() {
            return l
        }));
        n(212), n(791);
        var a = function(e) {
                if (/^http[s]?:\/\/magellanhealth(sso)?.okta/g.test(e)) return !1;
                if (/^https:\/\/portal.mrxcorefinance(\w+)?.com$/g.test(e)) return !1;
                if (/(qa|test).magellanrx.com/g.test(e)) return !1;
                if (/^http[s]?:\/\/medi-calrx.dhcs.ca.gov/g.test(e)) return !1;
                return /^http[s]?:\/\//g.test(e)
            },
            r = function(e) {
                return /^http[s]?:\/\//g.test(e)
            },
            o = function(e) {
                var t = e.match(/'\w+'/g);
                return a(e) ? "_".concat(t[0]) : "_self"
            },
            i = function() {
                return /^\/home/.test(window.location.pathname)
            },
            l = function() {
                return /^\/member/.test(window.location.pathname)
            }
    },
    399: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        })), n.d(t, "b", (function() {
            return s
        }));
        n(54), n(211), n(560);
        var a = n(10),
            r = n.n(a),
            o = n(185),
            i = n(156),
            l = n(29),
            c = function() {
                return {
                    type: o.a
                }
            },
            s = function() {
                return function(e) {
                    return e(c()), e(Object(l.z)(!0)), r.a.get("/portalmicroservices/api/loggedinuser/userinfoOkta").then((function(t) {
                        var n = null != t.data.podaci && t.data.podaci.length > 0 ? JSON.parse(t.data.podaci[0]) : {};
                        n.features && e(Object(i.g)(n.features)), e(function(e) {
                            return {
                                type: o.c,
                                firstName: e.userFirstName,
                                lastName: e.userLastName,
                                emailAddress: e.emailAddress,
                                memberId: e.cardholderId
                            }
                        }(n))
                    })).catch((function(t) {
                        e(function(e) {
                            return {
                                type: o.b,
                                error: e
                            }
                        }(t))
                    })).finally((function() {
                        e(Object(l.z)(!1))
                    }))
                }
            }
    },
    408: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "c", (function() {
            return r
        })), n.d(t, "b", (function() {
            return o
        }));
        var a = "CLEAR_MASS_ADJUSTMENTS_CONTENT",
            r = "UPDATE_MASS_ADJUSTMENTS_CONTENT_SUCCESS",
            o = "UPDATE_MASS_ADJUSTMENTS_CONTENT_FAILURE"
    },
    46: function(e, t, n) {
        "use strict";
        n.d(t, "g", (function() {
            return a
        })), n.d(t, "i", (function() {
            return r
        })), n.d(t, "h", (function() {
            return o
        })), n.d(t, "a", (function() {
            return i
        })), n.d(t, "c", (function() {
            return l
        })), n.d(t, "b", (function() {
            return c
        })), n.d(t, "j", (function() {
            return s
        })), n.d(t, "l", (function() {
            return u
        })), n.d(t, "k", (function() {
            return d
        })), n.d(t, "d", (function() {
            return m
        })), n.d(t, "f", (function() {
            return f
        })), n.d(t, "e", (function() {
            return g
        }));
        var a = "GET_FORMS_AND_INFO_CONTENT",
            r = "GET_FORMS_AND_INFO_CONTENT_SUCCESS",
            o = "GET_FORMS_AND_INFO_CONTENT_FAILURE",
            i = "GET_CDL_CONTENT",
            l = "GET_CDL_CONTENT_SUCCESS",
            c = "GET_CDL_CONTENT_FAILURE",
            s = "GET_PROVIDER_MANUAL_CONTENT",
            u = "GET_PROVIDER_MANUAL_CONTENT_SUCCESS",
            d = "GET_PROVIDER_MANUAL_CONTENT_FAILURE",
            m = "GET_ENP_CONTENT",
            f = "GET_ENP_CONTENT_SUCCESS",
            g = "GET_ENP_CONTENT_FAILURE"
    },
    52: function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return a
        })), n.d(t, "f", (function() {
            return r
        })), n.d(t, "e", (function() {
            return o
        })), n.d(t, "j", (function() {
            return i
        })), n.d(t, "g", (function() {
            return l
        })), n.d(t, "h", (function() {
            return c
        })), n.d(t, "i", (function() {
            return s
        })), n.d(t, "a", (function() {
            return u
        })), n.d(t, "c", (function() {
            return d
        })), n.d(t, "b", (function() {
            return m
        })), n.d(t, "k", (function() {
            return f
        }));
        var a = "GET_FEATURES",
            r = "GET_FEATURES_SUCCESS",
            o = "GET_FEATURES_FAILURE",
            i = "SHOW_LOADING_SPINNER",
            l = "SHOW_ERROR_ALERT",
            c = "SHOW_EXTERNAL_LINK_ALERT",
            s = "SHOW_INTERNAL_LINK_ALERT",
            u = "GET_ALL_FEATURES",
            d = "GET_ALL_FEATURES_SUCCESS",
            m = "GET_ALL_FEATURES_FAILURE",
            f = "UPDATE_USER_FEATURES"
    },
    566: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return o
        })), n.d(t, "a", (function() {
            return i
        }));
        var a = n(28),
            r = function(e) {
                return e.user
            },
            o = Object(a.a)(r, (function(e) {
                return e
            })),
            i = Object(a.a)(r, (function(e) {
                return {
                    firstName: e.firstName,
                    lastName: e.lastName,
                    emailAddress: e.emailAddress
                }
            }))
    },
    62: function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return a
        })), n.d(t, "f", (function() {
            return r
        })), n.d(t, "e", (function() {
            return o
        })), n.d(t, "g", (function() {
            return i
        })), n.d(t, "i", (function() {
            return l
        })), n.d(t, "h", (function() {
            return c
        })), n.d(t, "a", (function() {
            return s
        })), n.d(t, "c", (function() {
            return u
        })), n.d(t, "b", (function() {
            return d
        }));
        var a = "GET_DRUG_LIST",
            r = "GET_DRUG_LIST_SUCCESS",
            o = "GET_DRUG_LIST_FAILURE",
            i = "GET_DRUG_SEARCH_RESULTS",
            l = "GET_DRUG_SEARCH_RESULTS_SUCCESS",
            c = "GET_DRUG_SEARCH_RESULTS_FAILURE",
            s = "GET_DRUGLOOKUP_CONTENT",
            u = "GET_DRUGLOOKUP_CONTENT_SUCCESS",
            d = "GET_DRUGLOOKUP_CONTENT_FAILURE"
    },
    7: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }));
        var a = {
            magellanBlue: "#0071BF",
            magellanDarkBlue: "#003C7A",
            magellanSkyBlue: "#5CC8EC",
            magellanLightBlue: "#E5F6FD",
            magellanLightDarkBlue: "#EEF1F6",
            magellanPurple: "#5C068C",
            magellanRubine: "#BB0E83",
            magellanPink: "#EEAAB9",
            magellanLightPink: "#FDEEF1",
            magellanLightPurple: "#F6F1F8",
            magellanDeepGreen: "#005130",
            magellanBrightGreen: "#3F7E25",
            magellanLimeGreen: "#D6DB74",
            magellanLightGreen: "#EFF7EC",
            magellanLightLimeGreen: "#F6F8E3",
            magellanDeepOrange: "#A63A1E",
            magellanBrightOrange: "#E0640E",
            magellanMediumOrange: "#F6B966",
            magellanLightYellow: "#FDF8E2",
            magellanLightOrange: "#FCF3E4",
            magellanRed: "#C8102A",
            magellanLightRed: "#FAECEC",
            magellanWhite: "#FFFFFF",
            magellanBlack: "#000005",
            magellan90Black: "#121C1F",
            magellan80Black: "#2B3336",
            magellan60Black: "#535B5E",
            magellan50Black: "#6A737B",
            magellan30Black: "#ACB0B4",
            magellan20Black: "#C0C4C7",
            magellan10Black: "#D5D8DA",
            magellan5Black: "#E1E5E8",
            magellan3Black: "#F1F1F1",
            magellan1Black: "#F7F8F8",
            californiaBlue: "#17315A",
            californiaMagenta: "#96368D",
            californiaLinkBlue: "#005198",
            californiaCyan: "#2d6e8d",
            californiaYellow: "#f9a519",
            californiaGreen: "#47b870",
            californiaRed: "#be4727",
            californiaGray: "#cbd0dc"
        }
    },
    78: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        })), n.d(t, "d", (function() {
            return o
        })), n.d(t, "b", (function() {
            return i
        })), n.d(t, "c", (function() {
            return l
        }));
        var a = n(28),
            r = function(e) {
                return e.global
            },
            o = Object(a.a)(r, (function(e) {
                return e
            })),
            i = Object(a.a)(r, (function(e) {
                return e.translateLangExclusions
            })),
            l = Object(a.a)(r, (function(e) {
                var t;
                return null === (t = e.features) || void 0 === t ? void 0 : t.clientMetadata.unsecured.translator
            }))
    },
    790: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }));
        var a = n(28),
            r = Object(a.a)((function(e) {
                return e.header
            }), (function(e) {
                return e
            }))
    },
    793: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return o
        })), n.d(t, "d", (function() {
            return i
        })), n.d(t, "c", (function() {
            return l
        })), n.d(t, "a", (function() {
            return c
        }));
        var a = n(28),
            r = function(e) {
                return e.messageCenter
            },
            o = Object(a.a)(r, (function(e) {
                return e
            })),
            i = Object(a.a)(r, (function(e) {
                return e.messageCenterUnreadEmailCount
            })),
            l = Object(a.a)(r, (function(e) {
                return e.messageCenterNewQuerySuccess
            })),
            c = Object(a.a)(r, (function(e) {
                return e.options
            }))
    },
    794: function(e, t, n) {
        "use strict";
        n.d(t, "e", (function() {
            return u
        })), n.d(t, "g", (function() {
            return d
        })), n.d(t, "b", (function() {
            return m
        })), n.d(t, "c", (function() {
            return f
        })), n.d(t, "a", (function() {
            return g
        })), n.d(t, "i", (function() {
            return p
        })), n.d(t, "f", (function() {
            return E
        })), n.d(t, "d", (function() {
            return h
        })), n.d(t, "h", (function() {
            return b
        }));
        n(86), n(77), n(87), n(134), n(88), n(89), n(90), n(91), n(79), n(92);
        var a = n(6),
            r = n.n(a),
            o = n(26),
            i = n(10),
            l = n.n(i),
            c = n(29);

        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }
        var u = function() {
                return {
                    type: o.m
                }
            },
            d = function() {
                return {
                    type: o.o
                }
            },
            m = function() {
                return function(e) {
                    e({
                        type: o.d
                    }), e(f()), e(Object(c.z)(!0)), l.a.get("/portalmicroservices/api/messagecenter/email").then((function(t) {
                        var n;
                        e((n = t.data, {
                            type: o.f,
                            messageCenterEmails: n
                        })), e(Object(c.z)(!1))
                    })).catch((function(t) {
                        e(function(e) {
                            return {
                                type: o.e,
                                error: e
                            }
                        }(t)), e(Object(c.z)(!1))
                    }))
                }
            },
            f = function() {
                return function(e) {
                    e({
                        type: o.g
                    }), l.a.get("/portalmicroservices/api/messagecenter/email-unread-count").then((function(t) {
                        var n;
                        e((n = t.data.unread, {
                            type: o.i,
                            messageCenterUnreadEmailCount: n
                        }))
                    })).catch((function(t) {
                        e(function(e) {
                            return {
                                type: o.h,
                                error: e
                            }
                        }(t))
                    }))
                }
            },
            g = function(e) {
                return function(t) {
                    t({
                        type: o.a
                    }), l.a.delete("/portalmicroservices/api/messagecenter/email/".concat(e)).then((function(n) {
                        t(function(e) {
                            return {
                                type: o.c,
                                messageId: e
                            }
                        }(e))
                    })).catch((function(e) {
                        t(function(e) {
                            return {
                                type: o.b,
                                error: e
                            }
                        }(e))
                    }))
                }
            },
            p = function(e) {
                return function(t) {
                    t(function(e) {
                        return {
                            type: o.s,
                            messageId: e
                        }
                    }(e)), l.a.put("/portalmicroservices/api/messagecenter/email-read/".concat(e)).then((function(e) {
                        t(f())
                    })).catch((function(e) {
                        t(function(e) {
                            return {
                                type: o.t,
                                error: e
                            }
                        }(e))
                    }))
                }
            },
            E = function(e) {
                return function(t) {
                    t(u()), t(d()), t(Object(c.z)(!0)), l.a.put("/portalmicroservices/api/messagecenter/email", function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? s(Object(n), !0).forEach((function(t) {
                                r()(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, e)).then((function(e) {
                        t({
                            type: o.r
                        }), t(m()), t(Object(c.z)(!1))
                    })).catch((function(e) {
                        t(function(e) {
                            return {
                                type: o.n,
                                error: e
                            }
                        }(e)), t(Object(c.z)(!1))
                    }))
                }
            },
            h = function(e) {
                return function(t) {
                    l.a.get("/delivery/api/messageCenterContactReasons.json?crafterSite=".concat(e)).then((function(e) {
                        var n = e.data.pageContent.sections.map((function(e, t) {
                            return {
                                id: t,
                                label: e.title
                            }
                        }));
                        t(function(e) {
                            return {
                                type: o.l,
                                options: e
                            }
                        }(n))
                    })).catch((function(e) {
                        t(function(e) {
                            return {
                                type: o.k,
                                error: e
                            }
                        }(e))
                    }))
                }
            },
            b = function(e) {
                var t = e.conversationId,
                    n = e.body;
                return function(e) {
                    e(Object(c.z)(!0)), e(u()), e(d()), l.a.post("/portalmicroservices/api/messagecenter/email", {
                        conversationId: t,
                        body: n
                    }).then((function(t) {
                        e({
                            type: o.q
                        }), e(m()), e(Object(c.z)(!1))
                    })).catch((function(t) {
                        e(function(e) {
                            return {
                                type: o.p,
                                error: e
                            }
                        }(t)), e(Object(c.z)(!1))
                    }))
                }
            }
    },
    797: function(e, t, n) {
        "use strict";
        var a = n(23),
            r = n.n(a),
            o = n(0),
            i = n.n(o),
            l = n(316),
            c = n(533),
            s = n(534),
            u = n(532),
            d = n(1447),
            m = n(531),
            f = n(1),
            g = n.n(f),
            p = function(e) {
                var t = e.config,
                    n = e.isOpen,
                    a = t.buttonText,
                    f = t.headerText,
                    g = t.bodyText,
                    p = t.disAgreeButtonText,
                    E = t.agreeButtonText,
                    h = t.onAgree,
                    b = t.onDisagree,
                    O = t.titleClass,
                    _ = t.buttonClass,
                    C = t.agreeButtonClass,
                    A = t.dialogClass,
                    L = t.dialogContentClass,
                    N = Object(o.useState)(!1),
                    T = r()(N, 2),
                    S = T[0],
                    y = T[1];
                Object(o.useEffect)((function() {
                    null != n && y(n)
                }), [n]);
                return i.a.createElement("div", null, a && i.a.createElement(l.a, {
                    component: "a",
                    className: _,
                    color: "primary",
                    onClick: function() {
                        y(!0)
                    }
                }, a), i.a.createElement(c.a, {
                    open: S,
                    onClose: function(e) {
                        b && b(e), y(!1)
                    },
                    "aria-labelledby": "alert-dialog-title",
                    "aria-describedby": "alert-dialog-description"
                }, i.a.createElement(m.a, {
                    id: "alert-dialog-title",
                    className: O
                }, f), g && i.a.createElement(u.a, {
                    dividers: !0
                }, i.a.createElement(d.a, {
                    classes: L,
                    id: "alert-dialog-description"
                }, g)), i.a.createElement(s.a, {
                    className: A
                }, p && i.a.createElement(l.a, {
                    onClick: function(e) {
                        return function(e) {
                            b && b(e), y(!1)
                        }(e)
                    },
                    color: "primary"
                }, p), E && i.a.createElement(l.a, {
                    variant: "contained",
                    component: "a",
                    className: C,
                    onClick: function(e) {
                        return function(e) {
                            h && h(e), y(!1)
                        }(e)
                    },
                    color: "primary",
                    autoFocus: !0
                }, E))))
            };
        p.propTypes = {
            isOpen: g.a.bool,
            config: g.a.object
        }, t.a = p
    },
    806: function(e, t) {},
    859: function(e, t, n) {
        e.exports = n(1434)
    },
    93: function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return o
        })), n.d(t, "a", (function() {
            return i
        })), n.d(t, "d", (function() {
            return l
        })), n.d(t, "b", (function() {
            return c
        }));
        var a = n(28),
            r = function(e) {
                return e.language
            },
            o = Object(a.a)(r, (function(e) {
                return e
            })),
            i = Object(a.a)(r, (function(e) {
                return e.languages
            })),
            l = Object(a.a)(r, (function(e) {
                return e.messages
            })),
            c = Object(a.a)(r, (function(e) {
                return e.locale
            }))
    },
    972: function(e, t) {},
    978: function(e, t) {}
});
