import {
  g as l,
  s as D,
  r as G,
  t as p,
  a0 as w,
  p as B,
  C as Z,
  n as F,
  w as P,
  v as x,
  c as f,
  a1 as _,
  o as E,
  d as t,
  I,
  S as e,
  W as $,
  a3 as z,
  m as b,
  e as n,
  a as A,
  aV as H,
  i as y,
  F as Y,
  aW as V,
  h as L,
  H as R,
} from "./entry-client-067069b4.js";
import { O as X } from "./OnScrollSplitWordsTransition-a840e488.js";
import { F as U } from "./F3Button-6d97d362.js";
const M = p(
    '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6ZM12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM5.5 3V6V6.5H6H8V5.5H6.5V3H5.5Z" fill="white" fill-opacity="0.5" style="fill:white;fill:white;fill-opacity:0.5;">',
  ),
  N = (d = {}) =>
    (() => {
      const i = l(M);
      return (D(i, d, !0, !0), G(), i);
    })(),
  W = p("<span><span>Say"),
  j = p("<span>"),
  C = p("<div>"),
  J = () => {
    const d = [
        { label: "Nashville", country: "USA", timeZone: "America/Chicago" },
        { label: "New York", country: "USA", timeZone: "America/New_York" },
        { label: "Brazil", country: "BR", timeZone: "America/Sao_Paulo" },
        { label: "Katowice", country: "Poland", timeZone: "Europe/Warsaw" },
        {
          label: "Bratislava",
          country: "Slovakia",
          timeZone: "Europe/Bratislava",
        },
        { label: "Plovdiv", country: "Bulgaria", timeZone: "Europe/Sofia" },
        { label: "Dubai", country: "UAE", timeZone: "Asia/Dubai" },
      ],
      i = w(new Date());
    let c = null,
      m = null;
    const g = B(() => c),
      k = Z(() => c, g),
      T = F(() => P() - g().y + x().height > x().height / 2 + g().height / 2);
    f(
      _(k, (u) => {
        if (u) {
          (m.play(), i(new Date()));
          const a = setInterval(() => {
            i(new Date());
          }, 1e3);
          E(() => {
            (clearInterval(a), m.pause());
          });
        }
        return null;
      }),
    );
    const o = w(!1),
      h = w(!1);
    return t(R, {
      get type() {
        return I.ContactUs;
      },
      get isDisabled() {
        return h();
      },
      children: (u) =>
        t(e.Generic, {
          css: { display: "flex", overflow: "hidden" },
          as: $,
          href: "https://wa.me/5511912768263?text=Quero%20saber%20mais%20sobre%20a%20Fokus...",
          target: "_blank",
          rel: "noopener",
          onClick: () => {
            window.open(
              "https://wa.me/5511912768263?text=Quero%20saber%20mais%20sobre%20a%20Fokus...",
              "_blank",
            );
            (h(!0), z(null));
          },
          get children() {
            return t(
              e.Generic,
              b(
                {
                  ref(a) {
                    const r = c;
                    typeof r == "function" ? r(a) : (c = a);
                  },
                  css: [
                    {
                      position: "relative",
                      userSelect: "none",
                      "--tw-bg-opacity": "1",
                      backgroundColor: "rgb(85 83 226 / var(--tw-bg-opacity))",
                      paddingBottom: "64rem",
                      paddingTop: "192rem",
                      textAlign: "center",
                      "--tw-text-opacity": "1",
                      color: "rgb(255 255 255 / var(--tw-text-opacity))",
                      "@media (max-width: 767px)": { paddingTop: "128rem" },
                    },
                    L,
                  ],
                  as: "section",
                },
                u,
                {
                  get children() {
                    return [
                      t(e.Generic, {
                        get css() {
                          return [
                            {
                              marginBottom: "40rem",
                              "--tw-text-opacity": "0.5",
                              color:
                                "rgb(255 255 255 / var(--tw-text-opacity))",
                              opacity: "0",
                              transitionProperty: "opacity",
                              transitionTimingFunction:
                                "cubic-bezier(0.4, 0, 0.2, 1)",
                              transitionDuration: "500ms",
                              transitionDelay: "1s",
                              "@media (max-width: 767px)": {
                                marginBottom: "16rem",
                              },
                            },
                            n.sohne.body1,
                            n.m.sohne.body3,
                            { ...(o() && { opacity: "1" }) },
                          ];
                        },
                        as: "div",
                        children:
                          "Precisa de ajuda com algum projeto de marketing ou audiovisual?",
                      }),
                      t(X, {
                        children: (a) => {
                          const [r, S] = A(a, ["isTriggered"]);
                          return (
                            f(() => {
                              r.isTriggered && o(!0);
                            }),
                            t(
                              e.Generic,
                              b(S, {
                                get css() {
                                  return [
                                    n.breit.h1,
                                    n.m.breit.h0,
                                    {
                                      "> span": {
                                        flexShrink: "0",
                                        overflow: "hidden",
                                      },
                                      "> span > span": {
                                        display: "inline-block",
                                        "--tw-translate-y": "100%",
                                        transform:
                                          "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                                        transitionProperty: "transform",
                                        transitionTimingFunction:
                                          "cubic-bezier(0.25, 0, 0.1, 1)",
                                        transitionDuration: "1s",
                                      },
                                    },
                                    r.isTriggered
                                      ? {
                                          "> span > span": {
                                            "--tw-translate-y":
                                              "0px !important",
                                            transform:
                                              "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important",
                                          },
                                        }
                                      : {},
                                    H
                                      ? {}
                                      : {
                                          "&:hover": { fontSize: "176rem" },
                                          "&:hover video": {
                                            "@media (min-width: 768px)": {
                                              flexGrow: "1",
                                              opacity: "1",
                                            },
                                          },
                                        },
                                    {
                                      marginBottom: "152rem",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      textTransform: "uppercase",
                                      lineHeight: "163.2rem",
                                      transitionProperty: "font-size",
                                      transitionTimingFunction:
                                        "cubic-bezier(0.4, 0, 0.2, 1)",
                                      transitionDuration: "500ms",
                                      "@media (max-width: 767px)": {
                                        marginLeft: "-24rem",
                                        marginRight: "-24rem",
                                        marginBottom: "40rem",
                                        flexDirection: "column",
                                        lineHeight: "1",
                                        "&:hover": { fontSize: "72rem" },
                                      },
                                    },
                                  ];
                                },
                                as: "h2",
                                get children() {
                                  return [
                                    l(W),
                                    t(e.Generic, {
                                      src: "/contact-gif.mp4",
                                      autoplay: !0,
                                      ref(s) {
                                        const v = m;
                                        typeof v == "function" ? v(s) : (m = s);
                                      },
                                      loop: !0,
                                      playsinline: !0,
                                      muted: !0,
                                      get css() {
                                        return [
                                          {
                                            marginLeft: "16rem",
                                            marginRight: "16rem",
                                            marginTop: "14rem",
                                            aspectRatio: "122.54 / 95",
                                            width: "0px",
                                            objectFit: "cover",
                                            opacity: "0",
                                            "--tw-grayscale": "grayscale(100%)",
                                            filter:
                                              "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",
                                            transitionProperty:
                                              "opacity, width, padding, transform, flex-grow",
                                            transitionTimingFunction:
                                              "cubic-bezier(0.4, 0, 0.2, 1)",
                                            transitionDuration: "500ms",
                                            "@media (max-width: 767px)": {
                                              position: "absolute",
                                              zIndex: "10",
                                              aspectRatio: "171 / 93",
                                            },
                                          },
                                          {
                                            ...(T() && {
                                              "@media (max-width: 767px)": {
                                                width: "170rem",
                                                "--tw-rotate": "-10deg",
                                                transform:
                                                  "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                                                opacity: "1",
                                              },
                                            }),
                                          },
                                        ];
                                      },
                                      as: "video",
                                    }),
                                    (() => {
                                      const s = l(j);
                                      return (
                                        y(
                                          s,
                                          t(e.Generic, {
                                            css: { transitionDelay: "0.2s" },
                                            as: "span",
                                            children: "Hello!",
                                          }),
                                        ),
                                        s
                                      );
                                    })(),
                                  ];
                                },
                              }),
                            )
                          );
                        },
                      }),
                      t(e.Generic, {
                        label: "Contact Us",
                        get css() {
                          return [
                            {
                              marginLeft: "auto",
                              marginRight: "auto",
                              marginBottom: "64rem",
                              display: "none !important",
                              maxWidth: "204rem",
                              opacity: "0.1",
                              transitionProperty: "opacity",
                              transitionTimingFunction:
                                "cubic-bezier(0.4, 0, 0.2, 1)",
                              transitionDuration: "500ms",
                              transitionDelay: "1s",
                              "@media (max-width: 767px)": {
                                display: "flex !important",
                              },
                            },
                            { ...(o() && { opacity: "1" }) },
                          ];
                        },
                        as: U,
                      }),
                      t(e.Generic, {
                        get css() {
                          return [
                            {
                              display: "block",
                              borderTopWidth: "1px",
                              "--tw-border-opacity": "0.2",
                              borderColor:
                                "rgb(255 255 255 / var(--tw-border-opacity))",
                              opacity: "0",
                              transitionProperty: "opacity",
                              transitionTimingFunction:
                                "cubic-bezier(0.4, 0, 0.2, 1)",
                              transitionDuration: "500ms",
                              transitionDelay: "1s",
                            },
                            { ...(o() && { opacity: "1" }) },
                          ];
                        },
                        as: "div",
                      }),
                      t(e.Generic, {
                        get css() {
                          return [
                            {
                              display: "grid",
                              gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
                              paddingTop: "64rem",
                              opacity: "0",
                              transitionProperty: "opacity",
                              transitionTimingFunction:
                                "cubic-bezier(0.4, 0, 0.2, 1)",
                              transitionDuration: "500ms",
                              transitionDelay: "1s",
                              "@media (max-width: 767px)": {
                                marginLeft: "-24rem",
                                marginRight: "-24rem",
                                display: "flex",
                                gap: "40rem",
                                overflowX: "auto",
                                paddingLeft: "24rem",
                                paddingRight: "24rem",
                                textAlign: "left",
                              },
                            },
                            {
                              ...(o() && { opacity: "1" }),
                              "@media (max-width: 767px)": {
                                "&::-webkit-scrollbar": { display: "none" },
                              },
                            },
                          ];
                        },
                        as: "ul",
                        get children() {
                          return t(Y, {
                            each: d,
                            children: (a) =>
                              t(e.Generic, {
                                css: {
                                  gridColumn: "span 1 / span 1",
                                  "@media (max-width: 767px)": {
                                    width: "81rem",
                                    flexShrink: "0",
                                  },
                                },
                                as: "li",
                                get children() {
                                  return [
                                    t(e.Generic, {
                                      get css() {
                                        return [
                                          {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "4rem",
                                            "--tw-text-opacity": "0.5",
                                            color:
                                              "rgb(255 255 255 / var(--tw-text-opacity))",
                                          },
                                          n.sohne.body4,
                                        ];
                                      },
                                      as: "div",
                                      get children() {
                                        return [
                                          t(e.Generic, {
                                            css: { marginTop: "2rem" },
                                            as: N,
                                          }),
                                          (() => {
                                            const r = l(C);
                                            return (
                                              y(r, () => V(i(), a.timeZone)),
                                              r
                                            );
                                          })(),
                                        ];
                                      },
                                    }),
                                    (() => {
                                      const r = l(C);
                                      return (y(r, () => a.label), r);
                                    })(),
                                    t(e.Generic, {
                                      get css() {
                                        return [
                                          {
                                            "--tw-text-opacity": "0.5",
                                            color:
                                              "rgb(255 255 255 / var(--tw-text-opacity))",
                                          },
                                          n.sohne.body3,
                                        ];
                                      },
                                      as: "div",
                                      get children() {
                                        return a.country;
                                      },
                                    }),
                                  ];
                                },
                              }),
                          });
                        },
                      }),
                    ];
                  },
                },
              ),
            );
          },
        }),
    });
  };
export { J as C };
