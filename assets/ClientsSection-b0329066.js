import {
  a as g,
  l as v,
  b as T,
  z as B,
  n,
  p as C,
  q as G,
  as as b,
  v as x,
  d as e,
  m as s,
  S as r,
  G as P,
  h as D,
  e as u,
  F as z,
} from "./entry-client-067069b4.js";
import { a as H, O as f } from "./OnScrollSplitWordsTransition-a840e488.js";
const F = (p) => {
  const [o, w] = g(p, ["isHome"]),
    m = v(),
    a = m.clientsSection.logos.slice(0, 10),
    y = T(!1);
  (B(() => {
    y(!0);
  }),
    n(() => {
      const t = Math.ceil(a.length / 2);
      return [a.slice(0, t), a.slice(t)];
    }));
  let l = null;
  const h = C(() => l);
  return (
    n(() => G((b() - h().y + x().height) / (h().height + x().height), 0, 1)),
    e(
      r.Generic,
      s(
        {
          ref(t) {
            const i = l;
            typeof i == "function" ? i(t) : (l = t);
          },
          get css() {
            return [
              {
                marginBottom: "166rem",
                paddingLeft: "64rem",
                paddingRight: "64rem",
                paddingTop: "88rem",
                "@media (max-width: 767px)": {
                  marginBottom: "80rem",
                  paddingLeft: "24rem",
                  paddingRight: "24rem",
                  paddingTop: "40rem",
                  paddingBottom: "40rem",
                },
              },
              {
                ...(o.isHome && {
                  marginTop: "-70rem",
                  paddingBottom: "220rem",
                  "@media (max-width: 767px)": {
                    paddingBottom: "0px",
                    paddingTop: "0",
                  },
                }),
              },
            ];
          },
          as: "section",
        },
        w,
        {
          get children() {
            return [
              n(
                () =>
                  n(() => !o.isHome && !p.isServices)() &&
                  e(r.Generic, {
                    css: [
                      P,
                      D,
                      {
                        marginBottom: "88rem",
                        alignItems: "flex-end",
                        "@media (max-width: 767px)": {
                          marginBottom: "64rem",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "24rem",
                        },
                      },
                    ],
                    as: "div",
                    get children() {
                      return [
                        e(r.Generic, {
                          spacing: 5,
                          tag: "h2",
                          get css() {
                            return [
                              u.breit.h4,
                              u.m.breit.h3,
                              {
                                gridColumn: "span 7 / span 7",
                                marginBottom: "12rem",
                                "@media (max-width: 767px)": {
                                  marginBottom: "0px",
                                  fontSize: "18rem",
                                  lineHeight: "1.2",
                                },
                              },
                            ];
                          },
                          as: H,
                          get children() {
                            return m.clientsSection.title;
                          },
                        }),
                        e(f, {
                          children: (t) => {
                            const [i, c] = g(t, ["isTriggered"]);
                            return e(
                              r.Generic,
                              s(
                                {
                                  get css() {
                                    return [
                                      {
                                        gridColumn: "span 5 / span 5",
                                        fontSize: "24rem",
                                        "--tw-text-opacity": "0.5",
                                        color:
                                          "rgb(255 255 255 / var(--tw-text-opacity))",
                                        opacity: "0.2",
                                        transitionProperty: "opacity",
                                        transitionTimingFunction:
                                          "cubic-bezier(0.4, 0, 0.2, 1)",
                                        transitionDuration: "500ms",
                                        transitionDelay: "0.25s",
                                        "@media (max-width: 767px)": {
                                          fontSize: "16rem",
                                        },
                                      },
                                      {
                                        ...(i.isTriggered && { opacity: "1" }),
                                      },
                                    ];
                                  },
                                  as: "p",
                                },
                                c,
                                {
                                  get children() {
                                    return m.clientsSection.copy;
                                  },
                                },
                              ),
                            );
                          },
                        }),
                      ];
                    },
                  }),
              ),
              e(f, {
                children: (t) => {
                  const [i, c] = g(t, ["isTriggered"]);
                  return e(
                    r.Generic,
                    s(
                      {
                        css: {
                          display: "grid",
                          gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
                          gap: "64rem",
                          "@media (max-width: 767px)": {
                            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                            gap: "8rem",
                          },
                        },
                        as: "ul",
                      },
                      c,
                      {
                        get children() {
                          return e(z, {
                            each: a,
                            children: (d, S) =>
                              e(r.Generic, {
                                get css() {
                                  return [
                                    {
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      paddingTop: "16rem",
                                      paddingBottom: "16rem",
                                      "@media (max-width: 767px)": {
                                        marginLeft: "0px",
                                        marginRight: "0px",
                                      },
                                    },
                                    o.isHome &&
                                      !d.displayOnMobile && {
                                        "@media (max-width: 767px)": {},
                                      },
                                  ];
                                },
                                as: "li",
                                get children() {
                                  return e(r.Generic, {
                                    css: {
                                      display: "flex",
                                      height: "72rem",
                                      width: "202rem",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      "@media (max-width: 767px)": {
                                        height: "56rem",
                                        width: "112rem",
                                      },
                                    },
                                    as: "div",
                                    get children() {
                                      return e(r.Generic, {
                                        css: { overflow: "hidden" },
                                        as: "div",
                                        get children() {
                                          return e(
                                            r.Generic,
                                            s(d, {
                                              get alt() {
                                                return d?.alt || "Partner Logo";
                                              },
                                              css: {
                                                "--tw-translate-y": "100%",
                                                transform:
                                                  "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                                                transitionProperty: "transform",
                                                transitionTimingFunction:
                                                  "cubic-bezier(0.25, 0, 0.1, 1)",
                                                transitionDuration: "1s",
                                                willChange: "transform",
                                              },
                                              as: "img",
                                              get style() {
                                                return {
                                                  "transition-delay": `${S() * 0.04}s`,
                                                  ...((i.isTriggered || (typeof window !== "undefined" && window.innerWidth < 768)) && {
                                                    transform: "translateY(0)",
                                                  }),
                                                };
                                              },
                                            }),
                                          );
                                        },
                                      });
                                    },
                                  });
                                },
                              }),
                          });
                        },
                      },
                    ),
                  );
                },
              }),
            ];
          },
        },
      ),
    )
  );
};
export { F as C };
