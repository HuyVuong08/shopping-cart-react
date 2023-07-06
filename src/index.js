import ReactDOM from "react-dom";
import React from "react";
import Context from "./context/Context";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// fetch("https://github.com/HuyVuong08/My-Settings/blob/master/config/test.js")
//         .then(function (response) {
//                 if (!response.ok) {
//                         return false;
//                 }
//                 return response.blob();
//         })
//         .then(function (myBlob) {
//                 var objectURL = URL.createObjectURL(myBlob);
//                 var sc = document.createElement("script");
//                 sc.setAttribute("src", objectURL);
//                 sc.setAttribute("type", "text/javascript");
//                 document.head.appendChild(sc);
//         });

// const scriptPromise = new Promise((resolve, reject) => {
//         const script = document.createElement("script");
//         document.head.appendChild(script);
//         script.onload = resolve;
//         script.onerror = reject;
//         script.async = true;
//         script.type = "text/javascript";
//         script.src = "https://github.com/HuyVuong08/My-Settings/blob/master/config/test.js";
// });
// scriptPromise.then((test) => {
//         console.log(test);
// });

// fetch("https://github.com/HuyVuong08/My-Settings/blob/master/config/test.js")
//         .then((response) => response.text())
//         .then((text) => eval(text))
//         .then(() => {
//                 /* Now you can use the script */
//                 console.log(test);
//         });

// fetch("https://momentjs.com/downloads/moment.min.js")
//         .then((response) => response.text())
//         .then((txt) => eval(txt))
//         .then(() => {
//                 document.getElementById("status").innerHTML = "moment.min.js loaded";
//                 // now you can use the script
//                 document.getElementById("today").innerHTML = moment().format("dddd");
//                 document.getElementById("today").style.color = "green";
//         });

// document.addEventListener("DOMContentLoaded", function (event) {
//         fetch("ajax-content.php")
//                 .then(function (response) {
//                         return response.text();
//                 })
//                 .then(function (html) {
//                         console.info("content has been fetched from data.html");
//                         loadData(html, "#ajax-target").then(function (html) {
//                                 console.info("I'm a callback");
//                         });
//                 })
//                 .catch((error) => {
//                         console.log(error);
//                 });
// });

//const ns = {
//        //injects client js file
//        require: async (u) => {
//                await new Promise((res, rej) => {
//                        fetch(u)
//                                .then((r) => (r.ok ? r.blob() : rej))
//                                .then((b) => {
//                                        let ou = URL.createObjectURL(b),
//                                                el = document.createElement("script");
//                                        el.setAttribute("src", ou);
//                                        el.setAttribute("type", "text/javascript");
//                                        el.onload = () => res();
//                                        document.body.appendChild(el);
//                                })
//                                .catch((e) => rej);
//                });
//        },
//};

// await ns.require("/path/to/dynamically_loaded.js");
// console.log(var_declared_inside_loaded_file);

(function (w, d, t) {
        w.TiktokAnalyticsObject = t;
        var ttq = (w[t] = w[t] || []);
        ttq.methods = [
                "page",
                "track",
                "identify",
                "instances",
                "debug",
                "on",
                "off",
                "once",
                "ready",
                "alias",
                "group",
                "enableCookie",
                "disableCookie",
        ];
        ttq.setAndDefer = function (t, e) {
                t[e] = function () {
                        t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
                };
        };
        for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
        ttq.instance = function (t) {
                for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
                return e;
        };
        ttq.load = function (e, n) {
                var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
                ttq._i = ttq._i || {};
                ttq._i[e] = [];
                ttq._i[e]._u = i;
                ttq._t = ttq._t || {};
                ttq._t[e] = +new Date();
                ttq._o = ttq._o || {};
                ttq._o[e] = n || {};
                n = document.createElement("script");
                n.type = "text/javascript";
                n.async = !0;
                n.src = i + "?sdkid=" + e + "&lib=" + t;
                e = document.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(n, e);
        };
        ttq.load("CI951JRC77UFB57U00O0");
        ttq.page();
        console.log("Pixel: Loaded");
})(window, document, "ttq");

(function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l !== "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
        console.log("GTM: Loaded");
})(window, document, "script", "dataLayer", "GTM-5D9S9CM");

document.addEventListener("DOMContentLoaded", () => {
        console.log("DOM ready!");
        // [...document.getElementsByClassName("btn btn-primary")].map(ele => ele.onclick = (ele) => alert("clicked"));
        [...document.getElementsByClassName("btn btn-primary")].map(ele => ele.onclick = () => {
                const name = ele.parentNode.childNodes[0].innerText;
                const price = parseFloat(ele.parentNode.childNodes[1].childNodes[0].innerText.replace(/[^0-9]/g, ''));
                console.log(ele.innerText, ':', name, '-', price);
                ttq.track('AddToCart', {
                    contents: [
                    {
                      content_id: '301',
                      content_name: name,
                      content_category: 'Shoes > Sneakers > running shoes',
                      brand: 'Jamie Choo',
                      quantity: 1,
                      price: price,
                    }],
                    content_type: 'product',
                    value: price,
                    currency: 'USD',  
                });
                ttq.identify({
                    email: 'jamie.vuong@bytedance.com',
                    phone_number: '+110123456789',
                });
        });
        // const AddToCart = 
        // for (const ele in AddToCart) {
        //         ele.onclick = () => alert("clicked");
        //         .map(ele => ele.onclick = () => alert("clicked"));
        // }
});

// const scr = "<script async src="https://www.googletagmanager.com/gtag/js?id=G-EJW5Q5ZLFW"></script>"
// window.dataLayer = window.dataLayer || [];
// function gtag() {
//         dataLayer.push(arguments);
// }
// gtag("js", new Date());
// gtag("config", "G-EJW5Q5ZLFW");

ReactDOM.render(
        <React.StrictMode>
                <Context>
                        <App />
                </Context>
        </React.StrictMode>,
        document.getElementById("root")
);
