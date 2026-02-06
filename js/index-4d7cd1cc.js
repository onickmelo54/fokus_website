import {
  d as e,
  m as T,
  S as n,
  a as F,
  a0 as A,
  n as b,
  C as N,
  c as v,
  a1 as M,
  o as I,
  J as z,
  F as E,
  a8 as q,
  a9 as Q,
  aa as Z,
  ab as ee,
  N as k,
  g as H,
  ac as te,
  ad as ne,
  s as re,
  r as ie,
  t as L,
  ae as O,
  af as ae,
  ag as Y,
  ah as X,
  ai as se,
  aj as oe,
  ak as ce,
  al as le,
  am as de,
  an as ge,
  ao as me,
  ap as ue,
  l as W,
  aq as he,
  b as K,
  ar as V,
  p as R,
  q as P,
  as as pe,
  v as w,
  h as C,
  f as _,
  i as B,
  at as fe,
  au as xe,
  e as D,
  w as j,
  z as we,
  av as U,
  aw as ye,
  j as be,
  K as ve,
  G as Se,
  R as Te,
  ax as Ce,
  V as $e,
  T as Ge,
  $ as ke,
} from "./entry-client-067069b4.js";
import { F as J } from "./F3Button-6d97d362.js";
import { T as Re, A as _e } from "./AwardsSection-dcbfd084.js";
import { C as Be } from "./ClientsSection-b0329066.js";
import { F as De } from "./FeaturedBlogSection-9ebdb12d.js";
import { C as We } from "./ContactSection-7469ca23.js";
import "./OnScrollSplitWordsTransition-a840e488.js";
import "./ArticleThumbnail-a354cd42.js";
const Ie = (l) =>
    e(
      n.Generic,
      T(
        {
          css: {
            position: "relative",
            "@media (max-width: 767px)": {
              "--tw-bg-opacity": "1",
              backgroundColor: "rgb(0 0 0 / var(--tw-bg-opacity))",
            },
          },
          as: "div",
        },
        l,
      ),
    ),
  ze = (l) => {
    const [c, u] = F(l, ["greetings"]),
      d = q,
      o = A(0),
      g = b(() => [...c.greetings, c.greetings[0]]);
    let r = null;
    const t = N(() => r);
    v(
      M(
        t,
        (a) => {
          if (a) {
            const s = setInterval(() => {
              o((o() + 1) % g().length);
            }, 2e3);
            I(() => clearInterval(s));
          }
          return null;
        },
        { defer: !0 },
      ),
    );
    const i = A(100),
      m = b(() => g()[o()]);
    let f = null;
    v(
      M(m, () => {
        const { width: a } = f.getBoundingClientRect();
        i(a);
      }),
    );
    let h = null,
      p = null;
    return (
      v(() => {
        o() === g().length - 1 &&
          setTimeout(() => {
            ((p.style.transition = "none"),
              o(0),
              setTimeout(() => {
                p.style.transition = "";
              }, 100));
          }, 500);
      }),
      e(
        n.Generic,
        T(
          {
            css: {
              display: "flex",
              height: "72rem",
              userSelect: "none",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Sohne Breit, sans-serif",
              fontSize: "40rem",
              lineHeight: "1",
              letterSpacing: "-0.03em",
              "@media (max-width: 767px)": {
                height: "48rem",
                fontSize: "24rem",
                lineHeight: "32rem",
                letterSpacing: "-0.04em",
              },
            },
            as: "div",
            ref(a) {
              const s = r;
              typeof s == "function" ? s(a) : (r = a);
            },
          },
          u,
          {
            get children() {
              return [
                e(n.Generic, {
                  css: {
                    position: "absolute",
                    top: "0px",
                    boxSizing: "content-box",
                    height: "100%",
                    width: "100rem",
                    borderRadius: "9999px",
                    "--tw-bg-opacity": "1",
                    backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    transitionProperty: "transform, border-radius",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "500ms",
                  },
                  as: "div",
                  get style() {
                    return {
                      transform: `scaleX(${(i() + 2) / 100})`,
                      "border-radius": `100rem / ${(i() / 1e3) * 1e3}rem`,
                    };
                  },
                }),
                e(n.Generic, {
                  css: {
                    position: "absolute",
                    top: "1rem",
                    height: "100%",
                    width: "100rem",
                    borderRadius: "9999px",
                    "--tw-bg-opacity": "1",
                    backgroundColor: "rgb(0 0 0 / var(--tw-bg-opacity))",
                    transitionProperty: "transform, border-radius",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "500ms",
                  },
                  as: "div",
                  get style() {
                    return {
                      transform: `scaleX(${i() / 100})`,
                      "border-radius": `1000rem / ${(i() / 100) * 1e3}rem`,
                    };
                  },
                }),
                e(n.Generic, {
                  css: {
                    visibility: "hidden",
                    position: "absolute",
                    paddingLeft: "24rem",
                    paddingRight: "24rem",
                    "@media (max-width: 767px)": {
                      paddingLeft: "16rem",
                      paddingRight: "16rem",
                    },
                  },
                  as: "div",
                  ref(a) {
                    const s = f;
                    typeof s == "function" ? s(a) : (f = a);
                  },
                  get children() {
                    return m();
                  },
                }),
                e(n.Generic, {
                  get css() {
                    return [
                      {
                        zIndex: "10",
                        height: "100%",
                        width: "500rem",
                        overflow: "hidden",
                        borderRadius: "9999px",
                        paddingLeft: "24rem",
                        paddingRight: "24rem",
                        paddingTop: "0.4em",
                        transitionProperty: "transform, border-radius",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "500ms",
                        "@media (max-width: 767px)": {
                          paddingLeft: "16rem",
                          paddingRight: "16rem",
                        },
                      },
                      {
                        transform: `scaleX(${i() / 500})`,
                        "border-radius": `1000rem / ${(i() / 500) * 1e3}rem`,
                      },
                    ];
                  },
                  as: "div",
                  ref(a) {
                    const s = h;
                    typeof s == "function" ? s(a) : (h = a);
                  },
                  get children() {
                    return e(n.Generic, {
                      ref(a) {
                        const s = p;
                        typeof s == "function" ? s(a) : (p = a);
                      },
                      get css() {
                        return [
                          {
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5em",
                            paddingLeft: "24rem",
                            paddingRight: "24rem",
                            textAlign: "center",
                            transitionProperty: "transform",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "500ms",
                            "@media (max-width: 767px)": {
                              paddingLeft: "16rem",
                              paddingRight: "16rem",
                            },
                          },
                          {
                            transform: `scaleX(${500 / i()}) translateY(-${o() * (d() <= z.MD ? 2.83 : 2.5)}em) skewY(-${o() * 10}deg)`,
                          },
                        ];
                      },
                      as: "ul",
                      get children() {
                        return e(E, {
                          get each() {
                            return g();
                          },
                          children: (a, s) =>
                            e(n.Generic, {
                              css: {
                                transitionProperty: "transform",
                                transitionTimingFunction:
                                  "cubic-bezier(0.4, 0, 0.2, 1)",
                                transitionDuration: "500ms",
                              },
                              as: "li",
                              get style() {
                                return { transform: `skewY(${s() * 10}deg)` };
                              },
                              children: a,
                            }),
                        });
                      },
                    });
                  },
                }),
              ];
            },
          },
        ),
      )
    );
  },
  Pe = L("<canvas>"),
  Fe = (l) => {
    const [c, u] = F(l, ["copy", "ref"]);
    let d = null,
      o = null;
    v(() => {
      try {
        o = new Q({
          autoStart: !1,
          resolution: window.devicePixelRatio,
          autoDensity: !0,
          sharedTicker: !1,
          view: d,
          resizeTo: d,
          preserveDrawingBuffer: !0,
        });
      } catch (t) {
        if (t.message === "Unable to auto-detect a suitable renderer.") {
          console.error(t);
          return;
        }
        throw t;
      }
      I(() => {
        o.destroy();
      });
    });
    const g = O();
    let r;
    return (
      v(() => {
        (o?.renderer.resize(d.clientWidth, d.clientHeight), (r = new Z()));
        let t = c.copy.toUpperCase();
        if (window.innerWidth < 768) {
          if (t.includes("ALGUMAS EMPRESAS")) {
            t = "ALGUMAS\nEMPRESAS QUE\nCONFIARAM\nNO NOSSO\nTRABALHO";
          } else {
            t = t.replaceAll("\n", " ");
          }
        }
        const i = new ee(t);
        ((i.style.fill = "#fff"),
          (i.style.fontFamily = "Sohne Breit"),
          (i.style.fontSize = k(window.innerWidth < 768 ? 30 : 80)),
          (i.style.lineHeight = k(window.innerWidth < 768 ? 30 : 80)),
          (i.style.wordWrap = !0),
          (i.style.wordWrapWidth = k(
            window.innerWidth < 768 ? window.innerWidth * 1.1 : 1420,
          )),
          (i.style.align = "center"),
          r.addChild(i),
          (r.pivot.x = r.width / 2),
          (r.pivot.y = r.height / 2),
          (r.x = (o?.screen.width ?? 0) / 2),
          (r.y = (o?.screen.height ?? 0) / 2),
          o?.stage.addChild(r),
          o?.render(),
          I(() => {
            o?.stage.removeChildren();
          }));
      }),
      (() => {
        const t = H(Pe),
          i = te((m) => {
            d = m;
          }, c.ref);
        return (typeof i == "function" && ne(i, t), re(t, u, !1, !1), ie(), t);
      })()
    );
  },
  Ee = (l) => {
    const [c, u] = F(l, ["backgroundCanvas", "objectUrl", "rotation"]);
    let d = null;
    const o = N(() => d),
      g = O();
    return e(
      ue,
      T(
        {
          ref(r) {
            const t = d;
            typeof t == "function" ? t(r) : (d = r);
          },
          get resources() {
            return [me(c.objectUrl)];
          },
          get isPlaying() {
            return o();
          },
        },
        u,
        {
          children: (
            { scene: r, renderer: t, onResize: i, onFrame: m, camera: f },
            [{ nodes: h }],
          ) => {
            const p = new ae(c.backgroundCanvas),
              a = new Y(),
              s = new Y(),
              $ = new X({ vertexShader: se, fragmentShader: oe, side: ce }),
              y = new X({
                vertexShader: le,
                fragmentShader: de,
                uniforms: {
                  uTexture: { value: a.texture },
                  uBackfaceTexture: { value: s.texture },
                  winResolution: { value: null },
                  isTransparent: { value: !0 },
                },
              }),
              x = h.obj;
            (x.scale.set(1.25, 1.25, 1.25),
              v(() => {
                const S = g() ? 0.75 : 1.25;
                x.scale.set(S, S, S);
              }),
              i(() => {
                (a.setSize(
                  100 * (g() ? 1 : f.aspect) * window.devicePixelRatio,
                  100 * (g() ? f.aspect : 1) * window.devicePixelRatio,
                ),
                  s.setSize(t.domElement.width, t.domElement.height),
                  p?.dispose(),
                  (y.uniforms.winResolution.value = new ge(
                    t.domElement.width,
                    t.domElement.height,
                  )),
                  requestAnimationFrame(() => {
                    ((x.visible = !1),
                      (r.background = p),
                      t.setRenderTarget(a),
                      t.render(r, f),
                      (r.background = null),
                      (x.visible = !0),
                      t.setRenderTarget(null));
                  }));
              }),
              r.add(x),
              m(() => {
                ((x.material = $),
                  t.setRenderTarget(s),
                  t.render(r, f),
                  t.setRenderTarget(null),
                  (x.material = y));
              }),
              v(() => {
                ((x.rotation.x = c.rotation[0]),
                  (x.rotation.y = c.rotation[1]),
                  (x.rotation.z = c.rotation[2]));
              }));
          },
        },
      ),
    );
  },
  He = () => {
    const l = W();
    let c = null;
    const u = he(),
      d = K([0, 0, 0]),
      [o, g] = V(0, { accuracy: 1e3 }),
      [r, t] = V(0, { accuracy: 1e3 });
    let i = null;
    const m = R(() => i),
      f = b(() =>
        P((pe() - m().y + w().height) / (m().height + w().height), 0, 1),
      );
    return (
      v(() => {
        d([r() / 5, o() / 5, (f() - 0.5) * (Math.PI / 2)]);
      }),
      e(n.Generic, {
        ref(h) {
          const p = i;
          typeof p == "function" ? p(h) : (i = h);
        },
        css: {
          position: "relative",
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
          "@media (max-width: 767px)": {
            marginTop: "0px",
            marginBottom: "0px",
          },
        },
        as: "section",
        onMouseMove: (h) => {
          (g((h.clientX / window.innerWidth) * 2 - 1),
            t((h.clientY / window.innerHeight) * 2 - 1));
        },
        get children() {
          return [
            e(n.Generic, {
              css: {
                position: "absolute",
                top: "0px",
                zIndex: "10",
                "@media (max-width: 767px)": { marginTop: "90rem" },
              },
              as: ze,
              get greetings() {
                return l.introSection.greetings;
              },
            }),
            b(() =>
              b(() => !!u())()
                ? [
                    e(n.Generic, {
                      css: {
                        height: "602rem !important",
                        width: "100% !important",
                        "@media (max-width: 767px)": {
                          height: "538rem !important",
                        },
                      },
                      as: Fe,
                      ref(h) {
                        const p = c;
                        typeof p == "function" ? p(h) : (c = h);
                      },
                      get copy() {
                        return l.introSection.title;
                      },
                    }),
                    e(n.Generic, {
                      css: {
                        position: "absolute",
                        height: "602rem !important",
                        width: "100% !important",
                        "@media (max-width: 767px)": {
                          height: "538rem !important",
                        },
                      },
                      as: Ee,
                      get rotation() {
                        return d();
                      },
                      backgroundCanvas: c,
                      objectUrl: "/asterisk.glb",
                    }),
                  ]
                : e(n.Generic, {
                    css: {
                      height: "602rem",
                      "@media (max-width: 767px)": { height: "752rem" },
                    },
                    as: "div",
                  }),
            ),
          ];
        },
      })
    );
  },
  Le = L("<div><!#><!/><!#><!/>"),
  Ae = () => {
    const l = W(),
      c = l.workSection.featuredCaseStudies;
    return e(n.Generic, {
      css: [
        C,
        {
          marginBottom: "128rem",
          "@media (max-width: 767px)": {
            marginBottom: "0",
            marginTop: "80rem",
            overflow: "hidden",
          },
        },
      ],
      as: "section",
      get children() {
        return [
          (() => {
            const u = H(Le),
              d = u.firstChild,
              [o, g] = _(d.nextSibling),
              r = o.nextSibling,
              [t, i] = _(r.nextSibling);
            return (
              B(u, e(fe, {}), o, g),
              B(
                u,
                e(n.Generic, {
                  css: {
                    position: "relative",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "flex",
                    width: "100%",
                    maxWidth: "1000rem",
                    flexDirection: "column",
                    gap: "220rem",
                    "@media (max-width: 767px)": {
                      maxWidth: "100%",
                      gap: "56rem",
                      paddingLeft: "0px",
                      paddingRight: "0px",
                      paddingBottom: "0px",
                    },
                  },
                  as: "div",
                  get children() {
                    return e(E, {
                      each: c,
                      children: (m) =>
                        e(n.Generic, {
                          isEager: !0,
                          get slug() {
                            return m.slug;
                          },
                          get excerpt() {
                            return m.excerpt;
                          },
                          get isComingSoon() {
                            return m.isComingSoon;
                          },
                          shouldBlendDifference: !0,
                          css: {
                            "@media (max-width: 767px)": {
                              marginLeft: "0px !important",
                              marginRight: "0px !important",
                              marginBottom: "0px",
                              "--tw-translate-x": "0px",
                              transform:
                                "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                            },
                          },
                          as: xe,
                          get title() {
                            return m.title;
                          },
                          get tags() {
                            return m.tags;
                          },
                          get media() {
                            return m.thumbnail;
                          },
                          isHome: !0,
                          hideTags: !0,
                        }),
                    });
                  },
                }),
                t,
                i,
              ),
              u
            );
          })(),
          e(n.Generic, {
            css: [
              C,
              {
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "220rem",
                display: "flex",
                width: "100%",
                maxWidth: "720rem",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "64rem",
                "@media (max-width: 767px)": {
                  marginTop: "64rem",
                  gap: "0px",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                },
              },
            ],
            as: "div",
            get children() {
              return [
                e(n.Generic, {
                  get css() {
                    return [
                      {
                        textAlign: "center",
                        "@media (max-width: 767px)": { marginBottom: "64rem" },
                      },
                      D.sohne.body1,
                      D.m.sohne.body1,
                    ];
                  },
                  as: "p",
                  get children() {
                    return l.workSection.copy;
                  },
                }),
                e(
                  n.Generic,
                  T(
                    { css: { maxWidth: "420rem" }, as: J },
                    () => l.workSection.button,
                    { hoverStateDefault: !0 },
                  ),
                ),
              ];
            },
          }),
        ];
      },
    });
  },
  Me = () => {
    const l = W();
    let c = null;
    const u = R(() => c),
      d = q;
    let o = null;
    const g = b(() => (d() <= z.MD ? 48 : 128));
    let r = null;
    const t = R(() => r),
      i = b(() =>
        P(
          (j() - t().y + w().height - w().height) /
            (w().height * 1.5 - w().height),
          0,
          1,
        ),
      ),
      m = new Re(i),
      f = R(() => o);
    let h = b(() => f().width - u().width + k(g()) + w().height * 1.5);
    const p = b(
      () => -P(j() - u().y - w().height * 0.5, 0, h() - w().height * 1.5),
    );
    return (
      we(() => {
        setTimeout(() => {
          U(U() + 1);
        });
      }),
      e(n.Generic, {
        ref(a) {
          const s = r;
          typeof s == "function" ? s(a) : (r = a);
        },
        css: {
          position: "relative",
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
          paddingBottom: "156rem",
          "--tw-text-opacity": "1",
          color: "rgb(0 0 0 / var(--tw-text-opacity))",
          "@media (max-width: 767px)": { paddingBottom: "80rem" },
        },
        as: "section",
        get children() {
          return [
            e(ye, {}),
            e(n.Generic, {
              get css() {
                return [{ height: `${h()}px` }, { marginBottom: "129rem" }];
              },
              as: "div",
              ref(a) {
                const s = c;
                typeof s == "function" ? s(a) : (c = a);
              },
              get children() {
                return e(n.Generic, {
                  css: [
                    { position: "sticky", top: "0px", overflow: "hidden" },
                    C,
                  ],
                  as: "div",
                  get children() {
                    return [
                      e(n.Generic, {
                        ref(a) {
                          const s = o;
                          typeof s == "function" ? s(a) : (o = a);
                        },
                        css: {
                          visibility: "hidden",
                          position: "absolute",
                          userSelect: "none",
                          whiteSpace: "nowrap",
                          fontFamily: "Sohne Breit, sans-serif",
                          fontSize: "551.19rem",
                          textTransform: "uppercase",
                          lineHeight: "1.2",
                          letterSpacing: "-0.03em",
                          "@media (max-width: 767px)": {
                            fontSize: "128rem",
                            lineHeight: "72rem",
                            letterSpacing: "0em",
                          },
                        },
                        as: "h2",
                        get children() {
                          return l.whoWeAreSection.title;
                        },
                      }),
                      e(n.Generic, {
                        css: [
                          {
                            display: "flex",
                            minHeight: "100vh",
                            width: "100%",
                            alignItems: "center",
                            willChange: "transform",
                          },
                          { "&": { minHeight: "100lvh" } },
                        ],
                        as: "div",
                        get style() {
                          return {
                            opacity: i(),
                            transform: `scale(${0.5 + 0.5 * i()})`,
                          };
                        },
                        get children() {
                          return e(n.Generic, {
                            css: { willChange: "transform" },
                            as: "div",
                            get style() {
                              return {
                                "will-change": "transform",
                                transform: `translateX(${p()}px)`,
                              };
                            },
                            get children() {
                              return e(n.Generic, {
                                css: {
                                  userSelect: "none",
                                  whiteSpace: "nowrap",
                                  fontFamily: "Sohne Breit, sans-serif",
                                  fontSize: "551.19rem",
                                  textTransform: "uppercase",
                                  lineHeight: "1.2",
                                  letterSpacing: "-0.03em",
                                  "@media (max-width: 767px)": {
                                    fontSize: "128rem",
                                    lineHeight: "72rem",
                                    letterSpacing: "0em",
                                  },
                                },
                                as: "h2",
                                children: "Quem Somos",
                              });
                            },
                          });
                        },
                      }),
                      e(be, {
                        get when() {
                          return f().width;
                        },
                        get children() {
                          return e(n.Generic, {
                            css: [
                              C,
                              {
                                position: "absolute",
                                inset: "0px",
                                display: "flex",
                                justifyContent: "space-between",
                                paddingBottom: "62rem",
                                paddingRight: "146rem",
                                paddingTop: "45rem",
                                "@media (max-width: 767px)": {
                                  paddingTop: "206rem",
                                  paddingBottom: "206rem",
                                },
                              },
                            ],
                            as: "ul",
                            get style() {
                              return {
                                "will-change": "transform",
                                width: `${f().width * 1.7016}px`,
                                transform: `translateX(${p() * 2}px)`,
                              };
                            },
                            get children() {
                              return e(E, {
                                get each() {
                                  return l.whoWeAreSection.images;
                                },
                                children: (a, s) => {
                                  m.offset(s() <= 2 ? -0.75 : 0);
                                  const $ = s() <= 2 ? m.push() : () => 1;
                                  let y = null;
                                  const x = K("center center");
                                  return (
                                    v(() => {
                                      const S = w().width * 0.5,
                                        G = w().height * 0.5;
                                      x(
                                        `calc(50% + ${S - (y.offsetLeft + y.offsetWidth / 2)}px) calc(50% + ${G - (y.offsetTop + y.offsetHeight / 2)}px)`,
                                      );
                                    }),
                                    e(n.Generic, {
                                      css: {
                                        display: "flex",
                                        "&:nth-child(even)": {
                                          alignItems: "flex-end",
                                        },
                                      },
                                      as: "li",
                                      get children() {
                                        return e(
                                          n.Generic,
                                          T(
                                            {
                                              get sizes() {
                                                return {
                                                  [-1]: "27vw",
                                                  [z.MD]: "50vw",
                                                };
                                              },
                                              isEager: !0,
                                              ref(S) {
                                                const G = y;
                                                typeof G == "function"
                                                  ? G(S)
                                                  : (y = S);
                                              },
                                            },
                                            a,
                                            {
                                              css: {
                                                height: "242rem",
                                                width: "auto",
                                                "@media (max-width: 767px)": {
                                                  height: "93rem",
                                                },
                                              },
                                              as: ve,
                                              get style() {
                                                return {
                                                  transform: `scale(${0.5 + 0.5 * $()})`,
                                                  opacity: $(),
                                                  "transform-origin": x(),
                                                };
                                              },
                                            },
                                          ),
                                        );
                                      },
                                    })
                                  );
                                },
                              });
                            },
                          });
                        },
                      }),
                    ];
                  },
                });
              },
            }),
            e(n.Generic, {
              get css() {
                return [
                  Se,
                  D.sohne.body1,
                  C,
                  D.m.sohne.body1,
                  {
                    "@media (max-width: 767px)": {
                      display: "flex",
                      flexDirection: "column",
                    },
                  },
                ];
              },
              as: "div",
              get children() {
                return e(n.Generic, {
                  css: { gridColumn: "span 6 / span 6", gridColumnStart: "7" },
                  as: "div",
                  get children() {
                    return [
                      e(n.Generic, {
                        css: { marginBottom: "64rem", whiteSpace: "pre-line" },
                        as: "p",
                        get children() {
                          return l.whoWeAreSection.copy;
                        },
                      }),
                      e(
                        n.Generic,
                        T(
                          { isDark: !0, css: { maxWidth: "416rem" }, as: J },
                          () => l.whoWeAreSection.button,
                        ),
                      ),
                    ];
                  },
                });
              },
            }),
          ];
        },
      })
    );
  },
  Ye = L("<div><!#><!/><!#><!/>"),
  Je = () =>
    Te(ke, () => {
      const l = W();
      return e(Ge, {
        get children() {
          return [
            e(Ce, {}),
            e(Ie, {
              get children() {
                return [
                  e($e, {
                    get src() {
                      return l.reel;
                    },
                  }),
                  e(He, {}),
                  e(Be, { isHome: !0, class: "pt-[0]" }),
                  e(Ae, {}),
                  e(Me, {}),
                  (() => {
                    const c = H(Ye),
                      u = c.firstChild,
                      [d, o] = _(u.nextSibling),
                      g = d.nextSibling,
                      [r, t] = _(g.nextSibling);
                    return (
                      c.style.setProperty("overflow", "hidden"),
                      B(c, e(_e, {}), d, o),
                      B(c, e(De, {}), r, t),
                      c
                    );
                  })(),
                  e(We, {}),
                ];
              },
            }),
          ];
        },
      });
    });
export { Je as IndexPage, Je as default };
