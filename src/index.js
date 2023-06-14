import ReactDOM from "react-dom";
import React from "react";
import Context from "./context/Context";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

console.log("load Pixel");
 (() => {
      if (this.props.status === 'PENDING') {
         return (<div className="loading" />);
      }
   })()

// function TikTokPixel (w, d, t) {
//   w.TiktokAnalyticsObject = t;
//   var ttq = (w[t] = w[t] || []);
//   (ttq.methods = [
//     "page",
//     "track",
//     "identify",
//     "instances",
//     "debug",
//     "on",
//     "off",
//     "once",
//     "ready",
//     "alias",
//     "group",
//     "enableCookie",
//     "disableCookie",
//   ]),
//     (ttq.setAndDefer = function (t, e) {
//       t[e] = function () {
//         t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
//       };
//     });
//   for (var i = 0; i < ttq.methods.length; i++)
//     ttq.setAndDefer(ttq, ttq.methods[i]);
//   (ttq.instance = function (t) {
//     for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
//       ttq.setAndDefer(e, ttq.methods[n]);
//     return e;
//   }),
//     (ttq.load = function (e, n) {
//       var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
//       (ttq._i = ttq._i || {}),
//         (ttq._i[e] = []),
//         (ttq._i[e]._u = i),
//         (ttq._t = ttq._t || {}),
//         (ttq._t[e] = +new Date()),
//         (ttq._o = ttq._o || {}),
//         (ttq._o[e] = n || {});
//       n = document.createElement("script");
//       (n.type = "text/javascript"),
//         (n.async = !0),
//         (n.src = i + "?sdkid=" + e + "&lib=" + t);
//       e = document.getElementsByTagName("script")[0];
//       e.parentNode.insertBefore(n, e);
//     });

//   ttq.load("CGR5QM3C77U3HDTUBMV0");
//   ttq.page();
// };
// (window, document, "ttq");

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);
