function init_map() {
  $(".map_wrapper .btns a").on("click", function (t) {
    var i = $(this).attr("data-lat"),
      s = $(this).attr("data-lng"),
      n = {
        lat: parseFloat(i),
        lng: parseFloat(s)
      };
    e.panTo(n), e.setZoom(16)
  });
  var t, e = new google.maps.Map(document.getElementById("location_map"), {
    zoom: 18,
    scrollwheel: !1,
    center: new google.maps.LatLng(locations[0].lat, locations[0].lng),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  for (t = 0; t < locations.length; t++) new google.maps.Marker({
    position: new google.maps.LatLng(locations[t].lat, locations[t].lng),
    icon: path + "images/pointer.png",
    map: e,
    title: locations[t].name
  });
  $(window).width(), e.panBy(0, 0)
} ! function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self, e(t.bootstrap = {}, t.jQuery, t.Popper))
}(this, function (t, e, i) {
  "use strict";

  function s(t) {
    return t && "object" == typeof t && "default" in t ? t : {
      default: t
    }
  }

  function n(t, e) {
    for (var i = 0; i < e.length; i++) {
      var s = e[i];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
    }
  }

  function a(t, e, i) {
    return e && n(t.prototype, e), i && n(t, i), t
  }

  function o() {
    return (o = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
      }
      return t
    }).apply(this, arguments)
  }

  function r(t) {
    return null === t || void 0 === t ? "" + t : {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase()
  }

  function l(t) {
    var e = this,
      i = !1;
    return c.default(this).one(p.TRANSITION_END, function () {
      i = !0
    }), setTimeout(function () {
      i || p.triggerTransitionEnd(e)
    }, t), this
  }

  function d() {
    c.default.fn.emulateTransitionEnd = l, c.default.event.special[p.TRANSITION_END] = {
      bindType: f,
      delegateType: f,
      handle: function (t) {
        if (c.default(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
      }
    }
  }

  function h(t, e, i) {
    if (0 === t.length) return t;
    if (i && "function" == typeof i) return i(t);
    for (var s = (new window.DOMParser).parseFromString(t, "text/html"), n = Object.keys(e), a = [].slice.call(s.body.querySelectorAll("*")), o = function (t, i) {
      var s = a[t],
        o = s.nodeName.toLowerCase();
      if (-1 === n.indexOf(s.nodeName.toLowerCase())) return s.parentNode.removeChild(s), "continue";
      var r = [].slice.call(s.attributes),
        l = [].concat(e["*"] || [], e[o] || []);
      r.forEach(function (t) {
        (function (t, e) {
          var i = t.nodeName.toLowerCase();
          if (-1 !== e.indexOf(i)) return -1 === V.indexOf(i) || Boolean(t.nodeValue.match(W) || t.nodeValue.match(B));
          for (var s = e.filter(function (t) {
            return t instanceof RegExp
          }), n = 0, a = s.length; n < a; n++)
            if (i.match(s[n])) return !0;
          return !1
        })(t, l) || s.removeAttribute(t.nodeName)
      })
    }, r = 0, l = a.length; r < l; r++) {
      o(r)
    }
    return s.body.innerHTML
  }
  var c = s(e),
    u = s(i),
    f = "transitionend",
    p = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function (t) {
        do {
          t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
      },
      getSelectorFromElement: function (t) {
        var e = t.getAttribute("data-target");
        if (!e || "#" === e) {
          var i = t.getAttribute("href");
          e = i && "#" !== i ? i.trim() : ""
        }
        try {
          return document.querySelector(e) ? e : null
        } catch (t) {
          return null
        }
      },
      getTransitionDurationFromElement: function (t) {
        if (!t) return 0;
        var e = c.default(t).css("transition-duration"),
          i = c.default(t).css("transition-delay"),
          s = parseFloat(e),
          n = parseFloat(i);
        return s || n ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(i))) : 0
      },
      reflow: function (t) {
        return t.offsetHeight
      },
      triggerTransitionEnd: function (t) {
        c.default(t).trigger(f)
      },
      supportsTransitionEnd: function () {
        return Boolean(f)
      },
      isElement: function (t) {
        return (t[0] || t).nodeType
      },
      typeCheckConfig: function (t, e, i) {
        for (var s in i)
          if (Object.prototype.hasOwnProperty.call(i, s)) {
            var n = i[s],
              a = e[s],
              o = a && p.isElement(a) ? "element" : r(a);
            if (!new RegExp(n).test(o)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + o + '" but expected type "' + n + '".')
          }
      },
      findShadowRoot: function (t) {
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof t.getRootNode) {
          var e = t.getRootNode();
          return e instanceof ShadowRoot ? e : null
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? p.findShadowRoot(t.parentNode) : null
      },
      jQueryDetection: function () {
        if (void 0 === c.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = c.default.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
      }
    };
  p.jQueryDetection(), d();
  var m = c.default.fn.alert,
    g = function () {
      function t(t) {
        this._element = t
      }
      var e = t.prototype;
      return e.close = function (t) {
        var e = this._element;
        t && (e = this._getRootElement(t));
        this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
      }, e.dispose = function () {
        c.default.removeData(this._element, "bs.alert"), this._element = null
      }, e._getRootElement = function (t) {
        var e = p.getSelectorFromElement(t),
          i = !1;
        return e && (i = document.querySelector(e)), i || (i = c.default(t).closest(".alert")[0]), i
      }, e._triggerCloseEvent = function (t) {
        var e = c.default.Event("close.bs.alert");
        return c.default(t).trigger(e), e
      }, e._removeElement = function (t) {
        var e = this;
        if (c.default(t).removeClass("show"), c.default(t).hasClass("fade")) {
          var i = p.getTransitionDurationFromElement(t);
          c.default(t).one(p.TRANSITION_END, function (i) {
            return e._destroyElement(t, i)
          }).emulateTransitionEnd(i)
        } else this._destroyElement(t)
      }, e._destroyElement = function (t) {
        c.default(t).detach().trigger("closed.bs.alert").remove()
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var i = c.default(this),
            s = i.data("bs.alert");
          s || (s = new t(this), i.data("bs.alert", s)), "close" === e && s[e](this)
        })
      }, t._handleDismiss = function (t) {
        return function (e) {
          e && e.preventDefault(), t.close(this)
        }
      }, a(t, null, [{
        key: "VERSION",
        get: function () {
          return "4.6.0"
        }
      }]), t
    }();
  c.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', g._handleDismiss(new g)), c.default.fn.alert = g._jQueryInterface, c.default.fn.alert.Constructor = g, c.default.fn.alert.noConflict = function () {
    return c.default.fn.alert = m, g._jQueryInterface
  };
  var v = c.default.fn.button,
    y = function () {
      function t(t) {
        this._element = t, this.shouldAvoidTriggerChange = !1
      }
      var e = t.prototype;
      return e.toggle = function () {
        var t = !0,
          e = !0,
          i = c.default(this._element).closest('[data-toggle="buttons"]')[0];
        if (i) {
          var s = this._element.querySelector('input:not([type="hidden"])');
          if (s) {
            if ("radio" === s.type)
              if (s.checked && this._element.classList.contains("active")) t = !1;
              else {
                var n = i.querySelector(".active");
                n && c.default(n).removeClass("active")
              } t && ("checkbox" !== s.type && "radio" !== s.type || (s.checked = !this._element.classList.contains("active")), this.shouldAvoidTriggerChange || c.default(s).trigger("change")), s.focus(), e = !1
          }
        }
        this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), t && c.default(this._element).toggleClass("active"))
      }, e.dispose = function () {
        c.default.removeData(this._element, "bs.button"), this._element = null
      }, t._jQueryInterface = function (e, i) {
        return this.each(function () {
          var s = c.default(this),
            n = s.data("bs.button");
          n || (n = new t(this), s.data("bs.button", n)), n.shouldAvoidTriggerChange = i, "toggle" === e && n[e]()
        })
      }, a(t, null, [{
        key: "VERSION",
        get: function () {
          return "4.6.0"
        }
      }]), t
    }();
  c.default(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
    var e = t.target,
      i = e;
    if (c.default(e).hasClass("btn") || (e = c.default(e).closest(".btn")[0]), !e || e.hasAttribute("disabled") || e.classList.contains("disabled")) t.preventDefault();
    else {
      var s = e.querySelector('input:not([type="hidden"])');
      if (s && (s.hasAttribute("disabled") || s.classList.contains("disabled"))) return void t.preventDefault();
      "INPUT" !== i.tagName && "LABEL" === e.tagName || y._jQueryInterface.call(c.default(e), "toggle", "INPUT" === i.tagName)
    }
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
    var e = c.default(t.target).closest(".btn")[0];
    c.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
  }), c.default(window).on("load.bs.button.data-api", function () {
    for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, i = t.length; e < i; e++) {
      var s = t[e],
        n = s.querySelector('input:not([type="hidden"])');
      n.checked || n.hasAttribute("checked") ? s.classList.add("active") : s.classList.remove("active")
    }
    for (var a = 0, o = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; a < o; a++) {
      var r = t[a];
      "true" === r.getAttribute("aria-pressed") ? r.classList.add("active") : r.classList.remove("active")
    }
  }), c.default.fn.button = y._jQueryInterface, c.default.fn.button.Constructor = y, c.default.fn.button.noConflict = function () {
    return c.default.fn.button = v, y._jQueryInterface
  };
  var w = "carousel",
    b = ".bs.carousel",
    _ = c.default.fn[w],
    T = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0
    },
    k = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean"
    },
    C = ".carousel-indicators",
    S = {
      TOUCH: "touch",
      PEN: "pen"
    },
    D = function () {
      function t(t, e) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(C), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
      }
      var e = t.prototype;
      return e.next = function () {
        this._isSliding || this._slide("next")
      }, e.nextWhenVisible = function () {
        var t = c.default(this._element);
        !document.hidden && t.is(":visible") && "hidden" !== t.css("visibility") && this.next()
      }, e.prev = function () {
        this._isSliding || this._slide("prev")
      }, e.pause = function (t) {
        t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (p.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
      }, e.cycle = function (t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
      }, e.to = function (t) {
        var e = this;
        this._activeElement = this._element.querySelector(".active.carousel-item");
        var i = this._getItemIndex(this._activeElement);
        if (!(t > this._items.length - 1 || t < 0))
          if (this._isSliding) c.default(this._element).one("slid.bs.carousel", function () {
            return e.to(t)
          });
          else {
            if (i === t) return this.pause(), void this.cycle();
            var s = t > i ? "next" : "prev";
            this._slide(s, this._items[t])
          }
      }, e.dispose = function () {
        c.default(this._element).off(b), c.default.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
      }, e._getConfig = function (t) {
        return t = o({}, T, t), p.typeCheckConfig(w, t, k), t
      }, e._handleSwipe = function () {
        var t = Math.abs(this.touchDeltaX);
        if (!(t <= 40)) {
          var e = t / this.touchDeltaX;
          this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next()
        }
      }, e._addEventListeners = function () {
        var t = this;
        this._config.keyboard && c.default(this._element).on("keydown.bs.carousel", function (e) {
          return t._keydown(e)
        }), "hover" === this._config.pause && c.default(this._element).on("mouseenter.bs.carousel", function (e) {
          return t.pause(e)
        }).on("mouseleave.bs.carousel", function (e) {
          return t.cycle(e)
        }), this._config.touch && this._addTouchEventListeners()
      }, e._addTouchEventListeners = function () {
        var t = this;
        if (this._touchSupported) {
          var e = function (e) {
            t._pointerEvent && S[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
          },
            i = function (e) {
              t._pointerEvent && S[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                return t.cycle(e)
              }, 500 + t._config.interval))
            };
          c.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (t) {
            return t.preventDefault()
          }), this._pointerEvent ? (c.default(this._element).on("pointerdown.bs.carousel", function (t) {
            return e(t)
          }), c.default(this._element).on("pointerup.bs.carousel", function (t) {
            return i(t)
          }), this._element.classList.add("pointer-event")) : (c.default(this._element).on("touchstart.bs.carousel", function (t) {
            return e(t)
          }), c.default(this._element).on("touchmove.bs.carousel", function (e) {
            return function (e) {
              e.originalEvent.touches && e.originalEvent.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX
            }(e)
          }), c.default(this._element).on("touchend.bs.carousel", function (t) {
            return i(t)
          }))
        }
      }, e._keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
          case 37:
            t.preventDefault(), this.prev();
            break;
          case 39:
            t.preventDefault(), this.next()
        }
      }, e._getItemIndex = function (t) {
        return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t)
      }, e._getItemByDirection = function (t, e) {
        var i = "next" === t,
          s = "prev" === t,
          n = this._getItemIndex(e),
          a = this._items.length - 1;
        if ((s && 0 === n || i && n === a) && !this._config.wrap) return e;
        var o = (n + ("prev" === t ? -1 : 1)) % this._items.length;
        return -1 === o ? this._items[this._items.length - 1] : this._items[o]
      }, e._triggerSlideEvent = function (t, e) {
        var i = this._getItemIndex(t),
          s = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
          n = c.default.Event("slide.bs.carousel", {
            relatedTarget: t,
            direction: e,
            from: s,
            to: i
          });
        return c.default(this._element).trigger(n), n
      }, e._setActiveIndicatorElement = function (t) {
        if (this._indicatorsElement) {
          var e = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
          c.default(e).removeClass("active");
          var i = this._indicatorsElement.children[this._getItemIndex(t)];
          i && c.default(i).addClass("active")
        }
      }, e._updateInterval = function () {
        var t = this._activeElement || this._element.querySelector(".active.carousel-item");
        if (t) {
          var e = parseInt(t.getAttribute("data-interval"), 10);
          e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
      }, e._slide = function (t, e) {
        var i, s, n, a = this,
          o = this._element.querySelector(".active.carousel-item"),
          r = this._getItemIndex(o),
          l = e || o && this._getItemByDirection(t, o),
          d = this._getItemIndex(l),
          h = Boolean(this._interval);
        if ("next" === t ? (i = "carousel-item-left", s = "carousel-item-next", n = "left") : (i = "carousel-item-right", s = "carousel-item-prev", n = "right"), l && c.default(l).hasClass("active")) this._isSliding = !1;
        else {
          if (!this._triggerSlideEvent(l, n).isDefaultPrevented() && o && l) {
            this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l), this._activeElement = l;
            var u = c.default.Event("slid.bs.carousel", {
              relatedTarget: l,
              direction: n,
              from: r,
              to: d
            });
            if (c.default(this._element).hasClass("slide")) {
              c.default(l).addClass(s), p.reflow(l), c.default(o).addClass(i), c.default(l).addClass(i);
              var f = p.getTransitionDurationFromElement(o);
              c.default(o).one(p.TRANSITION_END, function () {
                c.default(l).removeClass(i + " " + s).addClass("active"), c.default(o).removeClass("active " + s + " " + i), a._isSliding = !1, setTimeout(function () {
                  return c.default(a._element).trigger(u)
                }, 0)
              }).emulateTransitionEnd(f)
            } else c.default(o).removeClass("active"), c.default(l).addClass("active"), this._isSliding = !1, c.default(this._element).trigger(u);
            h && this.cycle()
          }
        }
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var i = c.default(this).data("bs.carousel"),
            s = o({}, T, c.default(this).data());
          "object" == typeof e && (s = o({}, s, e));
          var n = "string" == typeof e ? e : s.slide;
          if (i || (i = new t(this, s), c.default(this).data("bs.carousel", i)), "number" == typeof e) i.to(e);
          else if ("string" == typeof n) {
            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
            i[n]()
          } else s.interval && s.ride && (i.pause(), i.cycle())
        })
      }, t._dataApiClickHandler = function (e) {
        var i = p.getSelectorFromElement(this);
        if (i) {
          var s = c.default(i)[0];
          if (s && c.default(s).hasClass("carousel")) {
            var n = o({}, c.default(s).data(), c.default(this).data()),
              a = this.getAttribute("data-slide-to");
            a && (n.interval = !1), t._jQueryInterface.call(c.default(s), n), a && c.default(s).data("bs.carousel").to(a), e.preventDefault()
          }
        }
      }, a(t, null, [{
        key: "VERSION",
        get: function () {
          return "4.6.0"
        }
      }, {
        key: "Default",
        get: function () {
          return T
        }
      }]), t
    }();
  c.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", D._dataApiClickHandler), c.default(window).on("load.bs.carousel.data-api", function () {
    for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, i = t.length; e < i; e++) {
      var s = c.default(t[e]);
      D._jQueryInterface.call(s, s.data())
    }
  }), c.default.fn[w] = D._jQueryInterface, c.default.fn[w].Constructor = D, c.default.fn[w].noConflict = function () {
    return c.default.fn[w] = _, D._jQueryInterface
  };
  var $ = "collapse",
    E = c.default.fn[$],
    x = {
      toggle: !0,
      parent: ""
    },
    M = {
      toggle: "boolean",
      parent: "(string|element)"
    },
    A = '[data-toggle="collapse"]',
    N = function () {
      function t(t, e) {
        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
        for (var i = [].slice.call(document.querySelectorAll(A)), s = 0, n = i.length; s < n; s++) {
          var a = i[s],
            o = p.getSelectorFromElement(a),
            r = [].slice.call(document.querySelectorAll(o)).filter(function (e) {
              return e === t
            });
          null !== o && r.length > 0 && (this._selector = o, this._triggerArray.push(a))
        }
        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
      }
      var e = t.prototype;
      return e.toggle = function () {
        c.default(this._element).hasClass("show") ? this.hide() : this.show()
      }, e.show = function () {
        var e = this;
        if (!this._isTransitioning && !c.default(this._element).hasClass("show")) {
          var i, s;
          if (this._parent && 0 === (i = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (t) {
            return "string" == typeof e._config.parent ? t.getAttribute("data-parent") === e._config.parent : t.classList.contains("collapse")
          })).length && (i = null), !(i && (s = c.default(i).not(this._selector).data("bs.collapse")) && s._isTransitioning)) {
            var n = c.default.Event("show.bs.collapse");
            if (c.default(this._element).trigger(n), !n.isDefaultPrevented()) {
              i && (t._jQueryInterface.call(c.default(i).not(this._selector), "hide"), s || c.default(i).data("bs.collapse", null));
              var a = this._getDimension();
              c.default(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[a] = 0, this._triggerArray.length && c.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
              var o = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                r = p.getTransitionDurationFromElement(this._element);
              c.default(this._element).one(p.TRANSITION_END, function () {
                c.default(e._element).removeClass("collapsing").addClass("collapse show"), e._element.style[a] = "", e.setTransitioning(!1), c.default(e._element).trigger("shown.bs.collapse")
              }).emulateTransitionEnd(r), this._element.style[a] = this._element[o] + "px"
            }
          }
        }
      }, e.hide = function () {
        var t = this;
        if (!this._isTransitioning && c.default(this._element).hasClass("show")) {
          var e = c.default.Event("hide.bs.collapse");
          if (c.default(this._element).trigger(e), !e.isDefaultPrevented()) {
            var i = this._getDimension();
            this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", p.reflow(this._element), c.default(this._element).addClass("collapsing").removeClass("collapse show");
            var s = this._triggerArray.length;
            if (s > 0)
              for (var n = 0; n < s; n++) {
                var a = this._triggerArray[n],
                  o = p.getSelectorFromElement(a);
                if (null !== o) {
                  c.default([].slice.call(document.querySelectorAll(o))).hasClass("show") || c.default(a).addClass("collapsed").attr("aria-expanded", !1)
                }
              }
            this.setTransitioning(!0);
            this._element.style[i] = "";
            var r = p.getTransitionDurationFromElement(this._element);
            c.default(this._element).one(p.TRANSITION_END, function () {
              t.setTransitioning(!1), c.default(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
            }).emulateTransitionEnd(r)
          }
        }
      }, e.setTransitioning = function (t) {
        this._isTransitioning = t
      }, e.dispose = function () {
        c.default.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
      }, e._getConfig = function (t) {
        return t = o({}, x, t), t.toggle = Boolean(t.toggle), p.typeCheckConfig($, t, M), t
      }, e._getDimension = function () {
        return c.default(this._element).hasClass("width") ? "width" : "height"
      }, e._getParent = function () {
        var e, i = this;
        p.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
        var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          n = [].slice.call(e.querySelectorAll(s));
        return c.default(n).each(function (e, s) {
          i._addAriaAndCollapsedClass(t._getTargetFromElement(s), [s])
        }), e
      }, e._addAriaAndCollapsedClass = function (t, e) {
        var i = c.default(t).hasClass("show");
        e.length && c.default(e).toggleClass("collapsed", !i).attr("aria-expanded", i)
      }, t._getTargetFromElement = function (t) {
        var e = p.getSelectorFromElement(t);
        return e ? document.querySelector(e) : null
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var i = c.default(this),
            s = i.data("bs.collapse"),
            n = o({}, x, i.data(), "object" == typeof e && e ? e : {});
          if (!s && n.toggle && "string" == typeof e && /show|hide/.test(e) && (n.toggle = !1), s || (s = new t(this, n), i.data("bs.collapse", s)), "string" == typeof e) {
            if (void 0 === s[e]) throw new TypeError('No method named "' + e + '"');
            s[e]()
          }
        })
      }, a(t, null, [{
        key: "VERSION",
        get: function () {
          return "4.6.0"
        }
      }, {
        key: "Default",
        get: function () {
          return x
        }
      }]), t
    }();
  c.default(document).on("click.bs.collapse.data-api", A, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();
    var e = c.default(this),
      i = p.getSelectorFromElement(this),
      s = [].slice.call(document.querySelectorAll(i));
    c.default(s).each(function () {
      var t = c.default(this),
        i = t.data("bs.collapse") ? "toggle" : e.data();
      N._jQueryInterface.call(t, i)
    })
  }), c.default.fn[$] = N._jQueryInterface, c.default.fn[$].Constructor = N, c.default.fn[$].noConflict = function () {
    return c.default.fn[$] = E, N._jQueryInterface
  };
  var I = "dropdown",
    O = c.default.fn[I],
    U = new RegExp("38|40|27"),
    F = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null
    },
    P = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)"
    },
    H = function () {
      function t(t, e) {
        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
      }
      var e = t.prototype;
      return e.toggle = function () {
        if (!this._element.disabled && !c.default(this._element).hasClass("disabled")) {
          var e = c.default(this._menu).hasClass("show");
          t._clearMenus(), e || this.show(!0)
        }
      }, e.show = function (e) {
        if (void 0 === e && (e = !1), !(this._element.disabled || c.default(this._element).hasClass("disabled") || c.default(this._menu).hasClass("show"))) {
          var i = {
            relatedTarget: this._element
          },
            s = c.default.Event("show.bs.dropdown", i),
            n = t._getParentFromElement(this._element);
          if (c.default(n).trigger(s), !s.isDefaultPrevented()) {
            if (!this._inNavbar && e) {
              if (void 0 === u.default) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
              var a = this._element;
              "parent" === this._config.reference ? a = n : p.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && c.default(n).addClass("position-static"), this._popper = new u.default(a, this._menu, this._getPopperConfig())
            }
            "ontouchstart" in document.documentElement && 0 === c.default(n).closest(".navbar-nav").length && c.default(document.body).children().on("mouseover", null, c.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), c.default(this._menu).toggleClass("show"), c.default(n).toggleClass("show").trigger(c.default.Event("shown.bs.dropdown", i))
          }
        }
      }, e.hide = function () {
        if (!this._element.disabled && !c.default(this._element).hasClass("disabled") && c.default(this._menu).hasClass("show")) {
          var e = {
            relatedTarget: this._element
          },
            i = c.default.Event("hide.bs.dropdown", e),
            s = t._getParentFromElement(this._element);
          c.default(s).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), c.default(this._menu).toggleClass("show"), c.default(s).toggleClass("show").trigger(c.default.Event("hidden.bs.dropdown", e)))
        }
      }, e.dispose = function () {
        c.default.removeData(this._element, "bs.dropdown"), c.default(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
      }, e.update = function () {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
      }, e._addEventListeners = function () {
        var t = this;
        c.default(this._element).on("click.bs.dropdown", function (e) {
          e.preventDefault(), e.stopPropagation(), t.toggle()
        })
      }, e._getConfig = function (t) {
        return t = o({}, this.constructor.Default, c.default(this._element).data(), t), p.typeCheckConfig(I, t, this.constructor.DefaultType), t
      }, e._getMenuElement = function () {
        if (!this._menu) {
          var e = t._getParentFromElement(this._element);
          e && (this._menu = e.querySelector(".dropdown-menu"))
        }
        return this._menu
      }, e._getPlacement = function () {
        var t = c.default(this._element.parentNode),
          e = "bottom-start";
        return t.hasClass("dropup") ? e = c.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : c.default(this._menu).hasClass("dropdown-menu-right") && (e = "bottom-end"), e
      }, e._detectNavbar = function () {
        return c.default(this._element).closest(".navbar").length > 0
      }, e._getOffset = function () {
        var t = this,
          e = {};
        return "function" == typeof this._config.offset ? e.fn = function (e) {
          return e.offsets = o({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e
        } : e.offset = this._config.offset, e
      }, e._getPopperConfig = function () {
        var t = {
          placement: this._getPlacement(),
          modifiers: {
            offset: this._getOffset(),
            flip: {
              enabled: this._config.flip
            },
            preventOverflow: {
              boundariesElement: this._config.boundary
            }
          }
        };
        return "static" === this._config.display && (t.modifiers.applyStyle = {
          enabled: !1
        }), o({}, t, this._config.popperConfig)
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var i = c.default(this).data("bs.dropdown");
          if (i || (i = new t(this, "object" == typeof e ? e : null), c.default(this).data("bs.dropdown", i)), "string" == typeof e) {
            if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
            i[e]()
          }
        })
      }, t._clearMenus = function (e) {
        if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
          for (var i = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), s = 0, n = i.length; s < n; s++) {
            var a = t._getParentFromElement(i[s]),
              o = c.default(i[s]).data("bs.dropdown"),
              r = {
                relatedTarget: i[s]
              };
            if (e && "click" === e.type && (r.clickEvent = e), o) {
              var l = o._menu;
              if (c.default(a).hasClass("show") && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && c.default.contains(a, e.target))) {
                var d = c.default.Event("hide.bs.dropdown", r);
                c.default(a).trigger(d), d.isDefaultPrevented() || ("ontouchstart" in document.documentElement && c.default(document.body).children().off("mouseover", null, c.default.noop), i[s].setAttribute("aria-expanded", "false"), o._popper && o._popper.destroy(), c.default(l).removeClass("show"), c.default(a).removeClass("show").trigger(c.default.Event("hidden.bs.dropdown", r)))
              }
            }
          }
      }, t._getParentFromElement = function (t) {
        var e, i = p.getSelectorFromElement(t);
        return i && (e = document.querySelector(i)), e || t.parentNode
      }, t._dataApiKeydownHandler = function (e) {
        if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || c.default(e.target).closest(".dropdown-menu").length)) : U.test(e.which)) && !this.disabled && !c.default(this).hasClass("disabled")) {
          var i = t._getParentFromElement(this),
            s = c.default(i).hasClass("show");
          if (s || 27 !== e.which) {
            if (e.preventDefault(), e.stopPropagation(), !s || 27 === e.which || 32 === e.which) return 27 === e.which && c.default(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void c.default(this).trigger("click");
            var n = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (t) {
              return c.default(t).is(":visible")
            });
            if (0 !== n.length) {
              var a = n.indexOf(e.target);
              38 === e.which && a > 0 && a--, 40 === e.which && a < n.length - 1 && a++, a < 0 && (a = 0), n[a].focus()
            }
          }
        }
      }, a(t, null, [{
        key: "VERSION",
        get: function () {
          return "4.6.0"
        }
      }, {
        key: "Default",
        get: function () {
          return F
        }
      }, {
        key: "DefaultType",
        get: function () {
          return P
        }
      }]), t
    }();
  c.default(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', H._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", H._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", H._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
    t.preventDefault(), t.stopPropagation(), H._jQueryInterface.call(c.default(this), "toggle")
  }).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
    t.stopPropagation()
  }), c.default.fn[I] = H._jQueryInterface, c.default.fn[I].Constructor = H, c.default.fn[I].noConflict = function () {
    return c.default.fn[I] = O, H._jQueryInterface
  };
  var j = c.default.fn.modal,
    L = {
      backdrop: !0,
      keyboard: !0,
      focus: !0,
      show: !0
    },
    z = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean"
    },
    R = ".modal-dialog",
    q = function () {
      function t(t, e) {
        this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(R), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
      }
      var e = t.prototype;
      return e.toggle = function (t) {
        return this._isShown ? this.hide() : this.show(t)
      }, e.show = function (t) {
        var e = this;
        if (!this._isShown && !this._isTransitioning) {
          c.default(this._element).hasClass("fade") && (this._isTransitioning = !0);
          var i = c.default.Event("show.bs.modal", {
            relatedTarget: t
          });
          c.default(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), c.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function (t) {
            return e.hide(t)
          }), c.default(this._dialog).on("mousedown.dismiss.bs.modal", function () {
            c.default(e._element).one("mouseup.dismiss.bs.modal", function (t) {
              c.default(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
            })
          }), this._showBackdrop(function () {
            return e._showElement(t)
          }))
        }
      }, e.hide = function (t) {
        var e = this;
        if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
          var i = c.default.Event("hide.bs.modal");
          if (c.default(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
            this._isShown = !1;
            var s = c.default(this._element).hasClass("fade");
            if (s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), c.default(document).off("focusin.bs.modal"), c.default(this._element).removeClass("show"), c.default(this._element).off("click.dismiss.bs.modal"), c.default(this._dialog).off("mousedown.dismiss.bs.modal"), s) {
              var n = p.getTransitionDurationFromElement(this._element);
              c.default(this._element).one(p.TRANSITION_END, function (t) {
                return e._hideModal(t)
              }).emulateTransitionEnd(n)
            } else this._hideModal()
          }
        }
      }, e.dispose = function () {
        [window, this._element, this._dialog].forEach(function (t) {
          return c.default(t).off(".bs.modal")
        }), c.default(document).off("focusin.bs.modal"), c.default.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
      }, e.handleUpdate = function () {
        this._adjustDialog()
      }, e._getConfig = function (t) {
        return t = o({}, L, t), p.typeCheckConfig("modal", t, z), t
      }, e._triggerBackdropTransition = function () {
        var t = this,
          e = c.default.Event("hidePrevented.bs.modal");
        if (c.default(this._element).trigger(e), !e.isDefaultPrevented()) {
          var i = this._element.scrollHeight > document.documentElement.clientHeight;
          i || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
          var s = p.getTransitionDurationFromElement(this._dialog);
          c.default(this._element).off(p.TRANSITION_END), c.default(this._element).one(p.TRANSITION_END, function () {
            t._element.classList.remove("modal-static"), i || c.default(t._element).one(p.TRANSITION_END, function () {
              t._element.style.overflowY = ""
            }).emulateTransitionEnd(t._element, s)
          }).emulateTransitionEnd(s), this._element.focus()
        }
      }, e._showElement = function (t) {
        var e = this,
          i = c.default(this._element).hasClass("fade"),
          s = this._dialog ? this._dialog.querySelector(".modal-body") : null;
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), c.default(this._dialog).hasClass("modal-dialog-scrollable") && s ? s.scrollTop = 0 : this._element.scrollTop = 0, i && p.reflow(this._element), c.default(this._element).addClass("show"), this._config.focus && this._enforceFocus();
        var n = c.default.Event("shown.bs.modal", {
          relatedTarget: t
        }),
          a = function () {
            e._config.focus && e._element.focus(), e._isTransitioning = !1, c.default(e._element).trigger(n)
          };
        if (i) {
          var o = p.getTransitionDurationFromElement(this._dialog);
          c.default(this._dialog).one(p.TRANSITION_END, a).emulateTransitionEnd(o)
        } else a()
      }, e._enforceFocus = function () {
        var t = this;
        c.default(document).off("focusin.bs.modal").on("focusin.bs.modal", function (e) {
          document !== e.target && t._element !== e.target && 0 === c.default(t._element).has(e.target).length && t._element.focus()
        })
      }, e._setEscapeEvent = function () {
        var t = this;
        this._isShown ? c.default(this._element).on("keydown.dismiss.bs.modal", function (e) {
          t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition()
        }) : this._isShown || c.default(this._element).off("keydown.dismiss.bs.modal")
      }, e._setResizeEvent = function () {
        var t = this;
        this._isShown ? c.default(window).on("resize.bs.modal", function (e) {
          return t.handleUpdate(e)
        }) : c.default(window).off("resize.bs.modal")
      }, e._hideModal = function () {
        var t = this;
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function () {
          c.default(document.body).removeClass("modal-open"), t._resetAdjustments(), t._resetScrollbar(), c.default(t._element).trigger("hidden.bs.modal")
        })
      }, e._removeBackdrop = function () {
        this._backdrop && (c.default(this._backdrop).remove(), this._backdrop = null)
      }, e._showBackdrop = function (t) {
        var e = this,
          i = c.default(this._element).hasClass("fade") ? "fade" : "";
        if (this._isShown && this._config.backdrop) {
          if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), c.default(this._backdrop).appendTo(document.body), c.default(this._element).on("click.dismiss.bs.modal", function (t) {
            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._triggerBackdropTransition() : e.hide())
          }), i && p.reflow(this._backdrop), c.default(this._backdrop).addClass("show"), !t) return;
          if (!i) return void t();
          var s = p.getTransitionDurationFromElement(this._backdrop);
          c.default(this._backdrop).one(p.TRANSITION_END, t).emulateTransitionEnd(s)
        } else if (!this._isShown && this._backdrop) {
          c.default(this._backdrop).removeClass("show");
          var n = function () {
            e._removeBackdrop(), t && t()
          };
          if (c.default(this._element).hasClass("fade")) {
            var a = p.getTransitionDurationFromElement(this._backdrop);
            c.default(this._backdrop).one(p.TRANSITION_END, n).emulateTransitionEnd(a)
          } else n()
        } else t && t()
      }, e._adjustDialog = function () {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
      }, e._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
      }, e._checkScrollbar = function () {
        var t = document.body.getBoundingClientRect();
        this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
      }, e._setScrollbar = function () {
        var t = this;
        if (this._isBodyOverflowing) {
          var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
            i = [].slice.call(document.querySelectorAll(".sticky-top"));
          c.default(e).each(function (e, i) {
            var s = i.style.paddingRight,
              n = c.default(i).css("padding-right");
            c.default(i).data("padding-right", s).css("padding-right", parseFloat(n) + t._scrollbarWidth + "px")
          }), c.default(i).each(function (e, i) {
            var s = i.style.marginRight,
              n = c.default(i).css("margin-right");
            c.default(i).data("margin-right", s).css("margin-right", parseFloat(n) - t._scrollbarWidth + "px")
          });
          var s = document.body.style.paddingRight,
            n = c.default(document.body).css("padding-right");
          c.default(document.body).data("padding-right", s).css("padding-right", parseFloat(n) + this._scrollbarWidth + "px")
        }
        c.default(document.body).addClass("modal-open")
      }, e._resetScrollbar = function () {
        var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
        c.default(t).each(function (t, e) {
          var i = c.default(e).data("padding-right");
          c.default(e).removeData("padding-right"), e.style.paddingRight = i || ""
        });
        var e = [].slice.call(document.querySelectorAll(".sticky-top"));
        c.default(e).each(function (t, e) {
          var i = c.default(e).data("margin-right");
          void 0 !== i && c.default(e).css("margin-right", i).removeData("margin-right")
        });
        var i = c.default(document.body).data("padding-right");
        c.default(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
      }, e._getScrollbarWidth = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", document.body.appendChild(t);
        var e = t.getBoundingClientRect().width - t.clientWidth;
        return document.body.removeChild(t), e
      }, t._jQueryInterface = function (e, i) {
        return this.each(function () {
          var s = c.default(this).data("bs.modal"),
            n = o({}, L, c.default(this).data(), "object" == typeof e && e ? e : {});
          if (s || (s = new t(this, n), c.default(this).data("bs.modal", s)), "string" == typeof e) {
            if (void 0 === s[e]) throw new TypeError('No method named "' + e + '"');
            s[e](i)
          } else n.show && s.show(i)
        })
      }, a(t, null, [{
        key: "VERSION",
        get: function () {
          return "4.6.0"
        }
      }, {
        key: "Default",
        get: function () {
          return L
        }
      }]), t
    }();
  c.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
    var e, i = this,
      s = p.getSelectorFromElement(this);
    s && (e = document.querySelector(s));
    var n = c.default(e).data("bs.modal") ? "toggle" : o({}, c.default(e).data(), c.default(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
    var a = c.default(e).one("show.bs.modal", function (t) {
      t.isDefaultPrevented() || a.one("hidden.bs.modal", function () {
        c.default(i).is(":visible") && i.focus()
      })
    });
    q._jQueryInterface.call(c.default(e), n, this)
  }), c.default.fn.modal = q._jQueryInterface, c.default.fn.modal.Constructor = q, c.default.fn.modal.noConflict = function () {
    return c.default.fn.modal = j, q._jQueryInterface
  };
  var V = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
    Y = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
    W = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
    B = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Q = "tooltip",
    X = c.default.fn.tooltip,
    K = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    Z = ["sanitize", "whiteList", "sanitizeFn"],
    J = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
      popperConfig: "(null|object)"
    },
    G = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left"
    },
    tt = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: Y,
      popperConfig: null
    },
    et = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip"
    },
    it = function () {
      function t(t, e) {
        if (void 0 === u.default) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
      }
      var e = t.prototype;
      return e.enable = function () {
        this._isEnabled = !0
      }, e.disable = function () {
        this._isEnabled = !1
      }, e.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled
      }, e.toggle = function (t) {
        if (this._isEnabled)
          if (t) {
            var e = this.constructor.DATA_KEY,
              i = c.default(t.currentTarget).data(e);
            i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), c.default(t.currentTarget).data(e, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
          } else {
            if (c.default(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
            this._enter(null, this)
          }
      }, e.dispose = function () {
        clearTimeout(this._timeout), c.default.removeData(this.element, this.constructor.DATA_KEY), c.default(this.element).off(this.constructor.EVENT_KEY), c.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && c.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
      }, e.show = function () {
        var t = this;
        if ("none" === c.default(this.element).css("display")) throw new Error("Please use show on visible elements");
        var e = c.default.Event(this.constructor.Event.SHOW);
        if (this.isWithContent() && this._isEnabled) {
          c.default(this.element).trigger(e);
          var i = p.findShadowRoot(this.element),
            s = c.default.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element);
          if (e.isDefaultPrevented() || !s) return;
          var n = this.getTipElement(),
            a = p.getUID(this.constructor.NAME);
          n.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && c.default(n).addClass("fade");
          var o = "function" == typeof this.config.placement ? this.config.placement.call(this, n, this.element) : this.config.placement,
            r = this._getAttachment(o);
          this.addAttachmentClass(r);
          var l = this._getContainer();
          c.default(n).data(this.constructor.DATA_KEY, this), c.default.contains(this.element.ownerDocument.documentElement, this.tip) || c.default(n).appendTo(l), c.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u.default(this.element, n, this._getPopperConfig(r)), c.default(n).addClass("show"), c.default(n).addClass(this.config.customClass), "ontouchstart" in document.documentElement && c.default(document.body).children().on("mouseover", null, c.default.noop);
          var d = function () {
            t.config.animation && t._fixTransition();
            var e = t._hoverState;
            t._hoverState = null, c.default(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
          };
          if (c.default(this.tip).hasClass("fade")) {
            var h = p.getTransitionDurationFromElement(this.tip);
            c.default(this.tip).one(p.TRANSITION_END, d).emulateTransitionEnd(h)
          } else d()
        }
      }, e.hide = function (t) {
        var e = this,
          i = this.getTipElement(),
          s = c.default.Event(this.constructor.Event.HIDE),
          n = function () {
            "show" !== e._hoverState && i.parentNode && i.parentNode.removeChild(i), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), c.default(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
          };
        if (c.default(this.element).trigger(s), !s.isDefaultPrevented()) {
          if (c.default(i).removeClass("show"), "ontouchstart" in document.documentElement && c.default(document.body).children().off("mouseover", null, c.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, c.default(this.tip).hasClass("fade")) {
            var a = p.getTransitionDurationFromElement(i);
            c.default(i).one(p.TRANSITION_END, n).emulateTransitionEnd(a)
          } else n();
          this._hoverState = ""
        }
      }, e.update = function () {
        null !== this._popper && this._popper.scheduleUpdate()
      }, e.isWithContent = function () {
        return Boolean(this.getTitle())
      }, e.addAttachmentClass = function (t) {
        c.default(this.getTipElement()).addClass("bs-tooltip-" + t)
      }, e.getTipElement = function () {
        return this.tip = this.tip || c.default(this.config.template)[0], this.tip
      }, e.setContent = function () {
        var t = this.getTipElement();
        this.setElementContent(c.default(t.querySelectorAll(".tooltip-inner")), this.getTitle()), c.default(t).removeClass("fade show")
      }, e.setElementContent = function (t, e) {
        "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = h(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? c.default(e).parent().is(t) || t.empty().append(e) : t.text(c.default(e).text())
      }, e.getTitle = function () {
        var t = this.element.getAttribute("data-original-title");
        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
      }, e._getPopperConfig = function (t) {
        var e = this;
        return o({}, {
          placement: t,
          modifiers: {
            offset: this._getOffset(),
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: ".arrow"
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function (t) {
            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
          },
          onUpdate: function (t) {
            return e._handlePopperPlacementChange(t)
          }
        }, this.config.popperConfig)
      }, e._getOffset = function () {
        var t = this,
          e = {};
        return "function" == typeof this.config.offset ? e.fn = function (e) {
          return e.offsets = o({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e
        } : e.offset = this.config.offset, e
      }, e._getContainer = function () {
        return !1 === this.config.container ? document.body : p.isElement(this.config.container) ? c.default(this.config.container) : c.default(document).find(this.config.container)
      }, e._getAttachment = function (t) {
        return G[t.toUpperCase()]
      }, e._setListeners = function () {
        var t = this;
        this.config.trigger.split(" ").forEach(function (e) {
          if ("click" === e) c.default(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
            return t.toggle(e)
          });
          else if ("manual" !== e) {
            var i = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
              s = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
            c.default(t.element).on(i, t.config.selector, function (e) {
              return t._enter(e)
            }).on(s, t.config.selector, function (e) {
              return t._leave(e)
            })
          }
        }), this._hideModalHandler = function () {
          t.element && t.hide()
        }, c.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = o({}, this.config, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle()
      }, e._fixTitle = function () {
        var t = typeof this.element.getAttribute("data-original-title");
        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
      }, e._enter = function (t, e) {
        var i = this.constructor.DATA_KEY;
        (e = e || c.default(t.currentTarget).data(i)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), c.default(t.currentTarget).data(i, e)), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), c.default(e.getTipElement()).hasClass("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
          "show" === e._hoverState && e.show()
        }, e.config.delay.show) : e.show())
      }, e._leave = function (t, e) {
        var i = this.constructor.DATA_KEY;
        (e = e || c.default(t.currentTarget).data(i)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), c.default(t.currentTarget).data(i, e)), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
          "out" === e._hoverState && e.hide()
        }, e.config.delay.hide) : e.hide())
      }, e._isWithActiveTrigger = function () {
        for (var t in this._activeTrigger)
          if (this._activeTrigger[t]) return !0;
        return !1
      }, e._getConfig = function (t) {
        var e = c.default(this.element).data();
        return Object.keys(e).forEach(function (t) {
          -1 !== Z.indexOf(t) && delete e[t]
        }), "number" == typeof (t = o({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), p.typeCheckConfig(Q, t, this.constructor.DefaultType), t.sanitize && (t.template = h(t.template, t.whiteList, t.sanitizeFn)), t
      }, e._getDelegateConfig = function () {
        var t = {};
        if (this.config)
          for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
        return t
      }, e._cleanTipClass = function () {
        var t = c.default(this.getTipElement()),
          e = t.attr("class").match(K);
        null !== e && e.length && t.removeClass(e.join(""))
      }, e._handlePopperPlacementChange = function (t) {
        this.tip = t.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
      }, e._fixTransition = function () {
        var t = this.getTipElement(),
          e = this.config.animation;
        null === t.getAttribute("x-placement") && (c.default(t).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var i = c.default(this),
            s = i.data("bs.tooltip"),
            n = "object" == typeof e && e;
          if ((s || !/dispose|hide/.test(e)) && (s || (s = new t(this, n), i.data("bs.tooltip", s)), "string" == typeof e)) {
            if (void 0 === s[e]) throw new TypeError('No method named "' + e + '"');
            s[e]()
          }
        })
      }, a(t, null, [{
        key: "VERSION",
        get: function () {
          return "4.6.0"
        }
      }, {
        key: "Default",
        get: function () {
          return tt
        }
      }, {
        key: "NAME",
        get: function () {
          return Q
        }
      }, {
        key: "DATA_KEY",
        get: function () {
          return "bs.tooltip"
        }
      }, {
        key: "Event",
        get: function () {
          return et
        }
      }, {
        key: "EVENT_KEY",
        get: function () {
          return ".bs.tooltip"
        }
      }, {
        key: "DefaultType",
        get: function () {
          return J
        }
      }]), t
    }();
  c.default.fn.tooltip = it._jQueryInterface, c.default.fn.tooltip.Constructor = it, c.default.fn.tooltip.noConflict = function () {
    return c.default.fn.tooltip = X, it._jQueryInterface
  };
  var st = "popover",
    nt = c.default.fn.popover,
    at = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    ot = o({}, it.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
    rt = o({}, it.DefaultType, {
      content: "(string|element|function)"
    }),
    lt = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover"
    },
    dt = function (t) {
      function e() {
        return t.apply(this, arguments) || this
      } ! function (t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
      }(e, t);
      var i = e.prototype;
      return i.isWithContent = function () {
        return this.getTitle() || this._getContent()
      }, i.addAttachmentClass = function (t) {
        c.default(this.getTipElement()).addClass("bs-popover-" + t)
      }, i.getTipElement = function () {
        return this.tip = this.tip || c.default(this.config.template)[0], this.tip
      }, i.setContent = function () {
        var t = c.default(this.getTipElement());
        this.setElementContent(t.find(".popover-header"), this.getTitle());
        var e = this._getContent();
        "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show")
      }, i._getContent = function () {
        return this.element.getAttribute("data-content") || this.config.content
      }, i._cleanTipClass = function () {
        var t = c.default(this.getTipElement()),
          e = t.attr("class").match(at);
        null !== e && e.length > 0 && t.removeClass(e.join(""))
      }, e._jQueryInterface = function (t) {
        return this.each(function () {
          var i = c.default(this).data("bs.popover"),
            s = "object" == typeof t ? t : null;
          if ((i || !/dispose|hide/.test(t)) && (i || (i = new e(this, s), c.default(this).data("bs.popover", i)), "string" == typeof t)) {
            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
            i[t]()
          }
        })
      }, a(e, null, [{
        key: "VERSION",
        get: function () {
          return "4.6.0"
        }
      }, {
        key: "Default",
        get: function () {
          return ot
        }
      }, {
        key: "NAME",
        get: function () {
          return st
        }
      }, {
        key: "DATA_KEY",
        get: function () {
          return "bs.popover"
        }
      }, {
        key: "Event",
        get: function () {
          return lt
        }
      }, {
        key: "EVENT_KEY",
        get: function () {
          return ".bs.popover"
        }
      }, {
        key: "DefaultType",
        get: function () {
          return rt
        }
      }]), e
    }(it);
  c.default.fn.popover = dt._jQueryInterface, c.default.fn.popover.Constructor = dt, c.default.fn.popover.noConflict = function () {
    return c.default.fn.popover = nt, dt._jQueryInterface
  };
  var ht = "scrollspy",
    ct = c.default.fn[ht],
    ut = {
      offset: 10,
      method: "auto",
      target: ""
    },
    ft = {
      offset: "number",
      method: "string",
      target: "(string|element)"
    },
    pt = "scroll.bs.scrollspy",
    mt = ".nav-link",
    gt = ".list-group-item",
    vt = ".dropdown-item",
    yt = function () {
      function t(t, e) {
        var i = this;
        this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + mt + "," + this._config.target + " " + gt + "," + this._config.target + " " + vt, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, c.default(this._scrollElement).on(pt, function (t) {
          return i._process(t)
        }), this.refresh(), this._process()
      }
      var e = t.prototype;
      return e.refresh = function () {
        var t = this,
          e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
          i = "auto" === this._config.method ? e : this._config.method,
          s = "position" === i ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
        [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
          var e, n = p.getSelectorFromElement(t);
          if (n && (e = document.querySelector(n)), e) {
            var a = e.getBoundingClientRect();
            if (a.width || a.height) return [c.default(e)[i]().top + s, n]
          }
          return null
        }).filter(function (t) {
          return t
        }).sort(function (t, e) {
          return t[0] - e[0]
        }).forEach(function (e) {
          t._offsets.push(e[0]), t._targets.push(e[1])
        })
      }, e.dispose = function () {
        c.default.removeData(this._element, "bs.scrollspy"), c.default(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
      }, e._getConfig = function (t) {
        if ("string" != typeof (t = o({}, ut, "object" == typeof t && t ? t : {})).target && p.isElement(t.target)) {
          var e = c.default(t.target).attr("id");
          e || (e = p.getUID(ht), c.default(t.target).attr("id", e)), t.target = "#" + e
        }
        return p.typeCheckConfig(ht, t, ft), t
      }, e._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
      }, e._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      }, e._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
      }, e._process = function () {
        var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          i = this._config.offset + e - this._getOffsetHeight();
        if (this._scrollHeight !== e && this.refresh(), t >= i) {
          var s = this._targets[this._targets.length - 1];
          this._activeTarget !== s && this._activate(s)
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
          for (var n = this._offsets.length; n--;) {
            this._activeTarget !== this._targets[n] && t >= this._offsets[n] && (void 0 === this._offsets[n + 1] || t < this._offsets[n + 1]) && this._activate(this._targets[n])
          }
        }
      }, e._activate = function (t) {
        this._activeTarget = t, this._clear();
        var e = this._selector.split(",").map(function (e) {
          return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
        }),
          i = c.default([].slice.call(document.querySelectorAll(e.join(","))));
        i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass("active"), i.addClass("active")) : (i.addClass("active"), i.parents(".nav, .list-group").prev(mt + ", " + gt).addClass("active"), i.parents(".nav, .list-group").prev(".nav-item").children(mt).addClass("active")), c.default(this._scrollElement).trigger("activate.bs.scrollspy", {
          relatedTarget: t
        })
      }, e._clear = function () {
        [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
          return t.classList.contains("active")
        }).forEach(function (t) {
          return t.classList.remove("active")
        })
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var i = c.default(this).data("bs.scrollspy");
          if (i || (i = new t(this, "object" == typeof e && e), c.default(this).data("bs.scrollspy", i)), "string" == typeof e) {
            if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
            i[e]()
          }
        })
      }, a(t, null, [{
        key: "VERSION",
        get: function () {
          return "4.6.0"
        }
      }, {
        key: "Default",
        get: function () {
          return ut
        }
      }]), t
    }();
  c.default(window).on("load.bs.scrollspy.data-api", function () {
    for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e = t.length; e--;) {
      var i = c.default(t[e]);
      yt._jQueryInterface.call(i, i.data())
    }
  }), c.default.fn[ht] = yt._jQueryInterface, c.default.fn[ht].Constructor = yt, c.default.fn[ht].noConflict = function () {
    return c.default.fn[ht] = ct, yt._jQueryInterface
  };
  var wt = c.default.fn.tab,
    bt = function () {
      function t(t) {
        this._element = t
      }
      var e = t.prototype;
      return e.show = function () {
        var t = this;
        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && c.default(this._element).hasClass("active") || c.default(this._element).hasClass("disabled"))) {
          var e, i, s = c.default(this._element).closest(".nav, .list-group")[0],
            n = p.getSelectorFromElement(this._element);
          if (s) {
            var a = "UL" === s.nodeName || "OL" === s.nodeName ? "> li > .active" : ".active";
            i = c.default.makeArray(c.default(s).find(a)), i = i[i.length - 1]
          }
          var o = c.default.Event("hide.bs.tab", {
            relatedTarget: this._element
          }),
            r = c.default.Event("show.bs.tab", {
              relatedTarget: i
            });
          if (i && c.default(i).trigger(o), c.default(this._element).trigger(r), !r.isDefaultPrevented() && !o.isDefaultPrevented()) {
            n && (e = document.querySelector(n)), this._activate(this._element, s);
            var l = function () {
              var e = c.default.Event("hidden.bs.tab", {
                relatedTarget: t._element
              }),
                s = c.default.Event("shown.bs.tab", {
                  relatedTarget: i
                });
              c.default(i).trigger(e), c.default(t._element).trigger(s)
            };
            e ? this._activate(e, e.parentNode, l) : l()
          }
        }
      }, e.dispose = function () {
        c.default.removeData(this._element, "bs.tab"), this._element = null
      }, e._activate = function (t, e, i) {
        var s = this,
          n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? c.default(e).children(".active") : c.default(e).find("> li > .active"))[0],
          a = i && n && c.default(n).hasClass("fade"),
          o = function () {
            return s._transitionComplete(t, n, i)
          };
        if (n && a) {
          var r = p.getTransitionDurationFromElement(n);
          c.default(n).removeClass("show").one(p.TRANSITION_END, o).emulateTransitionEnd(r)
        } else o()
      }, e._transitionComplete = function (t, e, i) {
        if (e) {
          c.default(e).removeClass("active");
          var s = c.default(e.parentNode).find("> .dropdown-menu .active")[0];
          s && c.default(s).removeClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
        }
        if (c.default(t).addClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), p.reflow(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && c.default(t.parentNode).hasClass("dropdown-menu")) {
          var n = c.default(t).closest(".dropdown")[0];
          if (n) {
            var a = [].slice.call(n.querySelectorAll(".dropdown-toggle"));
            c.default(a).addClass("active")
          }
          t.setAttribute("aria-expanded", !0)
        }
        i && i()
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var i = c.default(this),
            s = i.data("bs.tab");
          if (s || (s = new t(this), i.data("bs.tab", s)), "string" == typeof e) {
            if (void 0 === s[e]) throw new TypeError('No method named "' + e + '"');
            s[e]()
          }
        })
      }, a(t, null, [{
        key: "VERSION",
        get: function () {
          return "4.6.0"
        }
      }]), t
    }();
  c.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
    t.preventDefault(), bt._jQueryInterface.call(c.default(this), "show")
  }), c.default.fn.tab = bt._jQueryInterface, c.default.fn.tab.Constructor = bt, c.default.fn.tab.noConflict = function () {
    return c.default.fn.tab = wt, bt._jQueryInterface
  };
  var _t = c.default.fn.toast,
    Tt = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
    },
    kt = {
      animation: !0,
      autohide: !0,
      delay: 500
    },
    Ct = function () {
      function t(t, e) {
        this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
      }
      var e = t.prototype;
      return e.show = function () {
        var t = this,
          e = c.default.Event("show.bs.toast");
        if (c.default(this._element).trigger(e), !e.isDefaultPrevented()) {
          this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
          var i = function () {
            t._element.classList.remove("showing"), t._element.classList.add("show"), c.default(t._element).trigger("shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout(function () {
              t.hide()
            }, t._config.delay))
          };
          if (this._element.classList.remove("hide"), p.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
            var s = p.getTransitionDurationFromElement(this._element);
            c.default(this._element).one(p.TRANSITION_END, i).emulateTransitionEnd(s)
          } else i()
        }
      }, e.hide = function () {
        if (this._element.classList.contains("show")) {
          var t = c.default.Event("hide.bs.toast");
          c.default(this._element).trigger(t), t.isDefaultPrevented() || this._close()
        }
      }, e.dispose = function () {
        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), c.default(this._element).off("click.dismiss.bs.toast"), c.default.removeData(this._element, "bs.toast"), this._element = null, this._config = null
      }, e._getConfig = function (t) {
        return t = o({}, kt, c.default(this._element).data(), "object" == typeof t && t ? t : {}), p.typeCheckConfig("toast", t, this.constructor.DefaultType), t
      }, e._setListeners = function () {
        var t = this;
        c.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function () {
          return t.hide()
        })
      }, e._close = function () {
        var t = this,
          e = function () {
            t._element.classList.add("hide"), c.default(t._element).trigger("hidden.bs.toast")
          };
        if (this._element.classList.remove("show"), this._config.animation) {
          var i = p.getTransitionDurationFromElement(this._element);
          c.default(this._element).one(p.TRANSITION_END, e).emulateTransitionEnd(i)
        } else e()
      }, e._clearTimeout = function () {
        clearTimeout(this._timeout), this._timeout = null
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var i = c.default(this),
            s = i.data("bs.toast");
          if (s || (s = new t(this, "object" == typeof e && e), i.data("bs.toast", s)), "string" == typeof e) {
            if (void 0 === s[e]) throw new TypeError('No method named "' + e + '"');
            s[e](this)
          }
        })
      }, a(t, null, [{
        key: "VERSION",
        get: function () {
          return "4.6.0"
        }
      }, {
        key: "DefaultType",
        get: function () {
          return Tt
        }
      }, {
        key: "Default",
        get: function () {
          return kt
        }
      }]), t
    }();
  c.default.fn.toast = Ct._jQueryInterface, c.default.fn.toast.Constructor = Ct, c.default.fn.toast.noConflict = function () {
    return c.default.fn.toast = _t, Ct._jQueryInterface
  }, t.Alert = g, t.Button = y, t.Carousel = D, t.Collapse = N, t.Dropdown = H, t.Modal = q, t.Popover = dt, t.Scrollspy = yt, t.Tab = bt, t.Toast = Ct, t.Tooltip = it, t.Util = p, Object.defineProperty(t, "__esModule", {
    value: !0
  })
}),
  function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
  }(function (t) {
    t.extend(t.fn, {
      validate: function (e) {
        if (this.length) {
          var i = t.data(this[0], "validator");
          return i || (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function (e) {
            i.submitButton = e.currentTarget, t(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(this).attr("formnovalidate") && (i.cancelSubmit = !0)
          }), this.on("submit.validate", function (e) {
            function s() {
              var s, n;
              return i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), !(i.settings.submitHandler && !i.settings.debug) || (n = i.settings.submitHandler.call(i, i.currentForm, e), s && s.remove(), void 0 !== n && n)
            }
            return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1)
          })), i)
        }
        e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
      },
      valid: function () {
        var e, i, s;
        return t(this[0]).is("form") ? e = this.validate().form() : (s = [], e = !0, i = t(this[0].form).validate(), this.each(function () {
          (e = i.element(this) && e) || (s = s.concat(i.errorList))
        }), i.errorList = s), e
      },
      rules: function (e, i) {
        var s, n, a, o, r, l, d = this[0],
          h = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");
        if (null != d && (!d.form && h && (d.form = this.closest("form")[0], d.name = this.attr("name")), null != d.form)) {
          if (e) switch (s = t.data(d.form, "validator").settings, n = s.rules, a = t.validator.staticRules(d), e) {
            case "add":
              t.extend(a, t.validator.normalizeRule(i)), delete a.messages, n[d.name] = a, i.messages && (s.messages[d.name] = t.extend(s.messages[d.name], i.messages));
              break;
            case "remove":
              return i ? (l = {}, t.each(i.split(/\s/), function (t, e) {
                l[e] = a[e], delete a[e]
              }), l) : (delete n[d.name], a)
          }
          return (o = t.validator.normalizeRules(t.extend({}, t.validator.classRules(d), t.validator.attributeRules(d), t.validator.dataRules(d), t.validator.staticRules(d)), d)).required && (r = o.required, delete o.required, o = t.extend({
            required: r
          }, o)), o.remote && (r = o.remote, delete o.remote, o = t.extend(o, {
            remote: r
          })), o
        }
      }
    });
    var e = function (t) {
      return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    };
    t.extend(t.expr.pseudos || t.expr[":"], {
      blank: function (i) {
        return !e("" + t(i).val())
      },
      filled: function (i) {
        var s = t(i).val();
        return null !== s && !!e("" + s)
      },
      unchecked: function (e) {
        return !t(e).prop("checked")
      }
    }), t.validator = function (e, i) {
      this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
    }, t.validator.format = function (e, i) {
      return 1 === arguments.length ? function () {
        var i = t.makeArray(arguments);
        return i.unshift(e), t.validator.format.apply(this, i)
      } : void 0 === i ? e : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function (t, i) {
        e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function () {
          return i
        })
      }), e)
    }, t.extend(t.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        pendingClass: "pending",
        validClass: "valid",
        errorElement: "label",
        focusCleanup: !1,
        focusInvalid: !0,
        errorContainer: t([]),
        errorLabelContainer: t([]),
        onsubmit: !0,
        ignore: ":hidden",
        ignoreTitle: !1,
        onfocusin: function (t) {
          this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
        },
        onfocusout: function (t) {
          this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
        },
        onkeyup: function (e, i) {
          9 === i.which && "" === this.elementValue(e) || -1 !== t.inArray(i.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
        },
        onclick: function (t) {
          t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
        },
        highlight: function (e, i, s) {
          "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s)
        },
        unhighlight: function (e, i, s) {
          "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s)
        }
      },
      setDefaults: function (e) {
        t.extend(t.validator.defaults, e)
      },
      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        equalTo: "Please enter the same value again.",
        maxlength: t.validator.format("Please enter no more than {0} characters."),
        minlength: t.validator.format("Please enter at least {0} characters."),
        rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
        range: t.validator.format("Please enter a value between {0} and {1}."),
        max: t.validator.format("Please enter a value less than or equal to {0}."),
        min: t.validator.format("Please enter a value greater than or equal to {0}."),
        step: t.validator.format("Please enter a multiple of {0}.")
      },
      autoCreateRanges: !1,
      prototype: {
        init: function () {
          function e(e) {
            var i = void 0 !== t(this).attr("contenteditable") && "false" !== t(this).attr("contenteditable");
            if (!this.form && i && (this.form = t(this).closest("form")[0], this.name = t(this).attr("name")), s === this.form) {
              var n = t.data(this.form, "validator"),
                a = "on" + e.type.replace(/^validate/, ""),
                o = n.settings;
              o[a] && !t(this).is(o.ignore) && o[a].call(n, this, e)
            }
          }
          this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
          var i, s = this.currentForm,
            n = this.groups = {};
          t.each(this.settings.groups, function (e, i) {
            "string" == typeof i && (i = i.split(/\s/)), t.each(i, function (t, i) {
              n[i] = e
            })
          }), i = this.settings.rules, t.each(i, function (e, s) {
            i[e] = t.validator.normalizeRule(s)
          }), t(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && t(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
        },
        form: function () {
          return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
        },
        checkForm: function () {
          this.prepareForm();
          for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
          return this.valid()
        },
        element: function (e) {
          var i, s, n = this.clean(e),
            a = this.validationTargetFor(n),
            o = this,
            r = !0;
          return void 0 === a ? delete this.invalid[n.name] : (this.prepareElement(a), this.currentElements = t(a), (s = this.groups[a.name]) && t.each(this.groups, function (t, e) {
            e === s && t !== a.name && (n = o.validationTargetFor(o.clean(o.findByName(t)))) && n.name in o.invalid && (o.currentElements.push(n), r = o.check(n) && r)
          }), i = !1 !== this.check(a), r = r && i, this.invalid[a.name] = !i, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), t(e).attr("aria-invalid", !i)), r
        },
        showErrors: function (e) {
          if (e) {
            var i = this;
            t.extend(this.errorMap, e), this.errorList = t.map(this.errorMap, function (t, e) {
              return {
                message: t,
                element: i.findByName(e)[0]
              }
            }), this.successList = t.grep(this.successList, function (t) {
              return !(t.name in e)
            })
          }
          this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
        },
        resetForm: function () {
          t.fn.resetForm && t(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
          var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
          this.resetElements(e)
        },
        resetElements: function (t) {
          var e;
          if (this.settings.unhighlight)
            for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
          else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
        },
        numberOfInvalids: function () {
          return this.objectLength(this.invalid)
        },
        objectLength: function (t) {
          var e, i = 0;
          for (e in t) void 0 !== t[e] && null !== t[e] && !1 !== t[e] && i++;
          return i
        },
        hideErrors: function () {
          this.hideThese(this.toHide)
        },
        hideThese: function (t) {
          t.not(this.containers).text(""), this.addWrapper(t).hide()
        },
        valid: function () {
          return 0 === this.size()
        },
        size: function () {
          return this.errorList.length
        },
        focusInvalid: function () {
          if (this.settings.focusInvalid) try {
            t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin")
          } catch (t) { }
        },
        findLastActive: function () {
          var e = this.lastActive;
          return e && 1 === t.grep(this.errorList, function (t) {
            return t.element.name === e.name
          }).length && e
        },
        elements: function () {
          var e = this,
            i = {};
          return t(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
            var s = this.name || t(this).attr("name"),
              n = void 0 !== t(this).attr("contenteditable") && "false" !== t(this).attr("contenteditable");
            return !s && e.settings.debug && window.console && console.error("%o has no name assigned", this), n && (this.form = t(this).closest("form")[0], this.name = s), !(this.form !== e.currentForm || s in i || !e.objectLength(t(this).rules()) || (i[s] = !0, 0))
          })
        },
        clean: function (e) {
          return t(e)[0]
        },
        errors: function () {
          var e = this.settings.errorClass.split(" ").join(".");
          return t(this.settings.errorElement + "." + e, this.errorContext)
        },
        resetInternals: function () {
          this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([])
        },
        reset: function () {
          this.resetInternals(), this.currentElements = t([])
        },
        prepareForm: function () {
          this.reset(), this.toHide = this.errors().add(this.containers)
        },
        prepareElement: function (t) {
          this.reset(), this.toHide = this.errorsFor(t)
        },
        elementValue: function (e) {
          var i, s, n = t(e),
            a = e.type,
            o = void 0 !== n.attr("contenteditable") && "false" !== n.attr("contenteditable");
          return "radio" === a || "checkbox" === a ? this.findByName(e.name).filter(":checked").val() : "number" === a && void 0 !== e.validity ? e.validity.badInput ? "NaN" : n.val() : (i = o ? n.text() : n.val(), "file" === a ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (s = i.lastIndexOf("/")) >= 0 ? i.substr(s + 1) : (s = i.lastIndexOf("\\")) >= 0 ? i.substr(s + 1) : i : "string" == typeof i ? i.replace(/\r/g, "") : i)
        },
        check: function (e) {
          e = this.validationTargetFor(this.clean(e));
          var i, s, n, a, o = t(e).rules(),
            r = t.map(o, function (t, e) {
              return e
            }).length,
            l = !1,
            d = this.elementValue(e);
          "function" == typeof o.normalizer ? a = o.normalizer : "function" == typeof this.settings.normalizer && (a = this.settings.normalizer), a && (d = a.call(e, d), delete o.normalizer);
          for (s in o) {
            n = {
              method: s,
              parameters: o[s]
            };
            try {
              if ("dependency-mismatch" === (i = t.validator.methods[s].call(this, d, e, n.parameters)) && 1 === r) {
                l = !0;
                continue
              }
              if (l = !1, "pending" === i) return void (this.toHide = this.toHide.not(this.errorsFor(e)));
              if (!i) return this.formatAndAdd(e, n), !1
            } catch (t) {
              throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + n.method + "' method.", t), t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + n.method + "' method."), t
            }
          }
          if (!l) return this.objectLength(o) && this.successList.push(e), !0
        },
        customDataMessage: function (e, i) {
          return t(e).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || t(e).data("msg")
        },
        customMessage: function (t, e) {
          var i = this.settings.messages[t];
          return i && (i.constructor === String ? i : i[e])
        },
        findDefined: function () {
          for (var t = 0; t < arguments.length; t++)
            if (void 0 !== arguments[t]) return arguments[t]
        },
        defaultMessage: function (e, i) {
          "string" == typeof i && (i = {
            method: i
          });
          var s = this.findDefined(this.customMessage(e.name, i.method), this.customDataMessage(e, i.method), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
            n = /\$?\{(\d+)\}/g;
          return "function" == typeof s ? s = s.call(this, i.parameters, e) : n.test(s) && (s = t.validator.format(s.replace(n, "{$1}"), i.parameters)), s
        },
        formatAndAdd: function (t, e) {
          var i = this.defaultMessage(t, e);
          this.errorList.push({
            message: i,
            element: t,
            method: e.method
          }), this.errorMap[t.name] = i, this.submitted[t.name] = i
        },
        addWrapper: function (t) {
          return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
        },
        defaultShowErrors: function () {
          var t, e, i;
          for (t = 0; this.errorList[t]; t++) i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
          if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
            for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
          if (this.settings.unhighlight)
            for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
          this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
        },
        validElements: function () {
          return this.currentElements.not(this.invalidElements())
        },
        invalidElements: function () {
          return t(this.errorList).map(function () {
            return this.element
          })
        },
        showLabel: function (e, i) {
          var s, n, a, o, r = this.errorsFor(e),
            l = this.idOrName(e),
            d = t(e).attr("aria-describedby");
          r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(i)) : (r = t("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(i || ""), s = r, this.settings.wrapper && (s = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(s) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, s, t(e)) : s.insertAfter(e), r.is("label") ? r.attr("for", l) : 0 === r.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (a = r.attr("id"), d ? d.match(new RegExp("\\b" + this.escapeCssMeta(a) + "\\b")) || (d += " " + a) : d = a, t(e).attr("aria-describedby", d), (n = this.groups[e.name]) && (o = this, t.each(o.groups, function (e, i) {
            i === n && t("[name='" + o.escapeCssMeta(e) + "']", o.currentForm).attr("aria-describedby", r.attr("id"))
          })))), !i && this.settings.success && (r.text(""), "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, e)), this.toShow = this.toShow.add(r)
        },
        errorsFor: function (e) {
          var i = this.escapeCssMeta(this.idOrName(e)),
            s = t(e).attr("aria-describedby"),
            n = "label[for='" + i + "'], label[for='" + i + "'] *";
          return s && (n = n + ", #" + this.escapeCssMeta(s).replace(/\s+/g, ", #")), this.errors().filter(n)
        },
        escapeCssMeta: function (t) {
          return void 0 === t ? "" : t.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
        },
        idOrName: function (t) {
          return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
        },
        validationTargetFor: function (e) {
          return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0]
        },
        checkable: function (t) {
          return /radio|checkbox/i.test(t.type)
        },
        findByName: function (e) {
          return t(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']")
        },
        getLength: function (e, i) {
          switch (i.nodeName.toLowerCase()) {
            case "select":
              return t("option:selected", i).length;
            case "input":
              if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
          }
          return e.length
        },
        depend: function (t, e) {
          return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
        },
        dependTypes: {
          boolean: function (t) {
            return t
          },
          string: function (e, i) {
            return !!t(e, i.form).length
          },
          function: function (t, e) {
            return t(e)
          }
        },
        optional: function (e) {
          var i = this.elementValue(e);
          return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
        },
        startRequest: function (e) {
          this.pending[e.name] || (this.pendingRequest++, t(e).addClass(this.settings.pendingClass), this.pending[e.name] = !0)
        },
        stopRequest: function (e, i) {
          this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], t(e).removeClass(this.settings.pendingClass), i && 0 === this.pendingRequest && this.formSubmitted && this.form() && 0 === this.pendingRequest ? (t(this.currentForm).trigger("submit"), this.submitButton && t("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
        },
        previousValue: function (e, i) {
          return i = "string" == typeof i && i || "remote", t.data(e, "previousValue") || t.data(e, "previousValue", {
            old: null,
            valid: !0,
            message: this.defaultMessage(e, {
              method: i
            })
          })
        },
        destroy: function () {
          this.resetForm(), t(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
        }
      },
      classRuleSettings: {
        required: {
          required: !0
        },
        email: {
          email: !0
        },
        url: {
          url: !0
        },
        date: {
          date: !0
        },
        dateISO: {
          dateISO: !0
        },
        number: {
          number: !0
        },
        digits: {
          digits: !0
        },
        creditcard: {
          creditcard: !0
        }
      },
      addClassRules: function (e, i) {
        e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
      },
      classRules: function (e) {
        var i = {},
          s = t(e).attr("class");
        return s && t.each(s.split(" "), function () {
          this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
        }), i
      },
      normalizeAttributeRule: function (t, e, i, s) {
        /min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && (s = Number(s), isNaN(s) && (s = void 0)), s || 0 === s ? t[i] = s : e === i && "range" !== e && (t["date" === e ? "dateISO" : i] = !0)
      },
      attributeRules: function (e) {
        var i, s, n = {},
          a = t(e),
          o = e.getAttribute("type");
        for (i in t.validator.methods) "required" === i ? ("" === (s = e.getAttribute(i)) && (s = !0), s = !!s) : s = a.attr(i), this.normalizeAttributeRule(n, o, i, s);
        return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
      },
      dataRules: function (e) {
        var i, s, n = {},
          a = t(e),
          o = e.getAttribute("type");
        for (i in t.validator.methods) "" === (s = a.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase())) && (s = !0), this.normalizeAttributeRule(n, o, i, s);
        return n
      },
      staticRules: function (e) {
        var i = {},
          s = t.data(e.form, "validator");
        return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i
      },
      normalizeRules: function (e, i) {
        return t.each(e, function (s, n) {
          if (!1 !== n) {
            if (n.param || n.depends) {
              var a = !0;
              switch (typeof n.depends) {
                case "string":
                  a = !!t(n.depends, i.form).length;
                  break;
                case "function":
                  a = n.depends.call(i, i)
              }
              a ? e[s] = void 0 === n.param || n.param : (t.data(i.form, "validator").resetElements(t(i)), delete e[s])
            }
          } else delete e[s]
        }), t.each(e, function (t, s) {
          e[t] = "function" == typeof s && "normalizer" !== t ? s(i) : s
        }), t.each(["minlength", "maxlength"], function () {
          e[this] && (e[this] = Number(e[this]))
        }), t.each(["rangelength", "range"], function () {
          var t;
          e[this] && (Array.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (t = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(t[0]), Number(t[1])]))
        }), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
      },
      normalizeRule: function (e) {
        if ("string" == typeof e) {
          var i = {};
          t.each(e.split(/\s/), function () {
            i[this] = !0
          }), e = i
        }
        return e
      },
      addMethod: function (e, i, s) {
        t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
      },
      methods: {
        required: function (e, i, s) {
          if (!this.depend(s, i)) return "dependency-mismatch";
          if ("select" === i.nodeName.toLowerCase()) {
            var n = t(i).val();
            return n && n.length > 0
          }
          return this.checkable(i) ? this.getLength(e, i) > 0 : void 0 !== e && null !== e && e.length > 0
        },
        email: function (t, e) {
          return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
        },
        url: function (t, e) {
          return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t)
        },
        date: function () {
          var t = !1;
          return function (e, i) {
            return t || (t = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(i) || !/Invalid|NaN/.test(new Date(e).toString())
          }
        }(),
        dateISO: function (t, e) {
          return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
        },
        number: function (t, e) {
          return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
        },
        digits: function (t, e) {
          return this.optional(e) || /^\d+$/.test(t)
        },
        minlength: function (t, e, i) {
          var s = Array.isArray(t) ? t.length : this.getLength(t, e);
          return this.optional(e) || s >= i
        },
        maxlength: function (t, e, i) {
          var s = Array.isArray(t) ? t.length : this.getLength(t, e);
          return this.optional(e) || s <= i
        },
        rangelength: function (t, e, i) {
          var s = Array.isArray(t) ? t.length : this.getLength(t, e);
          return this.optional(e) || s >= i[0] && s <= i[1]
        },
        min: function (t, e, i) {
          return this.optional(e) || t >= i
        },
        max: function (t, e, i) {
          return this.optional(e) || t <= i
        },
        range: function (t, e, i) {
          return this.optional(e) || t >= i[0] && t <= i[1]
        },
        step: function (e, i, s) {
          var n, a = t(i).attr("type"),
            o = "Step attribute on input type " + a + " is not supported.",
            r = new RegExp("\\b" + a + "\\b"),
            l = function (t) {
              var e = ("" + t).match(/(?:\.(\d+))?$/);
              return e && e[1] ? e[1].length : 0
            },
            d = function (t) {
              return Math.round(t * Math.pow(10, n))
            },
            h = !0;
          if (a && !r.test(["text", "number", "range"].join())) throw new Error(o);
          return n = l(s), (l(e) > n || d(e) % d(s) != 0) && (h = !1), this.optional(i) || h
        },
        equalTo: function (e, i, s) {
          var n = t(s);
          return this.settings.onfocusout && n.not(".validate-equalTo-blur").length && n.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
            t(i).valid()
          }), e === n.val()
        },
        remote: function (e, i, s, n) {
          if (this.optional(i)) return "dependency-mismatch";
          n = "string" == typeof n && n || "remote";
          var a, o, r, l = this.previousValue(i, n);
          return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[i.name][n], this.settings.messages[i.name][n] = l.message, s = "string" == typeof s && {
            url: s
          } || s, r = t.param(t.extend({
            data: e
          }, s.data)), l.old === r ? l.valid : (l.old = r, a = this, this.startRequest(i), o = {}, o[i.name] = e, t.ajax(t.extend(!0, {
            mode: "abort",
            port: "validate" + i.name,
            dataType: "json",
            data: o,
            context: a.currentForm,
            success: function (t) {
              var s, o, r, d = !0 === t || "true" === t;
              a.settings.messages[i.name][n] = l.originalMessage, d ? (r = a.formSubmitted, a.resetInternals(), a.toHide = a.errorsFor(i), a.formSubmitted = r, a.successList.push(i), a.invalid[i.name] = !1, a.showErrors()) : (s = {}, o = t || a.defaultMessage(i, {
                method: n,
                parameters: e
              }), s[i.name] = l.message = o, a.invalid[i.name] = !0, a.showErrors(s)), l.valid = d, a.stopRequest(i, d)
            }
          }, s)), "pending")
        }
      }
    });
    var i, s = {};
    return t.ajaxPrefilter ? t.ajaxPrefilter(function (t, e, i) {
      var n = t.port;
      "abort" === t.mode && (s[n] && s[n].abort(), s[n] = i)
    }) : (i = t.ajax, t.ajax = function (e) {
      var n = ("mode" in e ? e : t.ajaxSettings).mode,
        a = ("port" in e ? e : t.ajaxSettings).port;
      return "abort" === n ? (s[a] && s[a].abort(), s[a] = i.apply(this, arguments), s[a]) : i.apply(this, arguments)
    }), t
  }),
  function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
  }(function (t, e) {
    function i() {
      return new Date(Date.UTC.apply(Date, arguments))
    }
    "indexOf" in Array.prototype || (Array.prototype.indexOf = function (t, i) {
      i === e && (i = 0), 0 > i && (i += this.length), 0 > i && (i = 0);
      for (var s = this.length; s > i; i++)
        if (i in this && this[i] === t) return i;
      return -1
    });
    var s = function (i, s) {
      var n = this;
      this.element = t(i), this.container = s.container || "body", this.language = s.language || this.element.data("date-language") || "en", this.language = this.language in a ? this.language : this.language.split("-")[0], this.language = this.language in a ? this.language : "en", this.isRTL = a[this.language].rtl || !1, this.formatType = s.formatType || this.element.data("format-type") || "standard", this.format = o.parseFormat(s.format || this.element.data("date-format") || a[this.language].format || o.getDefaultFormat(this.formatType, "input"), this.formatType), this.isInline = !1, this.isVisible = !1, this.isInput = this.element.is("input"), this.fontAwesome = s.fontAwesome || this.element.data("font-awesome") || !1, this.bootcssVer = s.bootcssVer || (this.isInput ? this.element.is(".form-control") ? 3 : 2 : this.bootcssVer = this.element.is(".input-group") ? 3 : 2), this.component = !!this.element.is(".date") && (3 === this.bootcssVer ? this.element.find(".input-group-addon .fa-th, .input-group-addon .fa-time, .input-group-addon .fa-remove, .input-group-addon .fa-calendar, .input-group-addon .fa-calendar, .input-group-addon .fa-clock-o").parent() : this.element.find(".add-on .fa-th, .add-on .fa-time, .add-on .fa-calendar, .add-on .fa-calendar, .add-on .fa-clock-o").parent()), this.componentReset = !!this.element.is(".date") && (3 === this.bootcssVer ? this.element.find(".input-group-addon .fa-remove, .input-group-addon .fa-times").parent() : this.element.find(".add-on .fa-remove, .add-on .fa-times").parent()), this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.linkField = s.linkField || this.element.data("link-field") || !1, this.linkFormat = o.parseFormat(s.linkFormat || this.element.data("link-format") || o.getDefaultFormat(this.formatType, "link"), this.formatType), this.minuteStep = s.minuteStep || this.element.data("minute-step") || 5, this.pickerPosition = s.pickerPosition || this.element.data("picker-position") || "bottom-right", this.showMeridian = s.showMeridian || this.element.data("show-meridian") || !1, this.initialDate = s.initialDate || new Date, this.zIndex = s.zIndex || this.element.data("z-index") || e, this.title = void 0 !== s.title && s.title, this.timezone = s.timezone || function () {
        var t, e, i, s, n, a;
        if (e = (new Date).toString(), (i = (null != (n = e.split("(")[1]) ? n.slice(0, -1) : 0) || e.split(" ")) instanceof Array) {
          s = [];
          for (var o = 0, r = i.length; r > o; o++) a = i[o], ((t = null !== (n = a.match(/\b[A-Z]+\b/))) ? n[0] : 0) && s.push(t);
          i = s.pop()
        }
        return i
      }(), this.icons = {
        leftArrow: this.fontAwesome ? "fa-chevron-left" : (this.bootcssVer, "fa-chevron-left"),
        rightArrow: this.fontAwesome ? "fa-chevron-right" : (this.bootcssVer, "fa-chevron-right")
      }, this.icontype = (this.fontAwesome, "fa"), this._attachEvents(), this.clickedOutside = function (e) {
        0 === t(e.target).closest(".datetimepicker").length && n.hide()
      }, this.formatViewType = "datetime", "formatViewType" in s ? this.formatViewType = s.formatViewType : "formatViewType" in this.element.data() && (this.formatViewType = this.element.data("formatViewType")), this.minView = 0, "minView" in s ? this.minView = s.minView : "minView" in this.element.data() && (this.minView = this.element.data("min-view")), this.minView = o.convertViewMode(this.minView), this.maxView = o.modes.length - 1, "maxView" in s ? this.maxView = s.maxView : "maxView" in this.element.data() && (this.maxView = this.element.data("max-view")), this.maxView = o.convertViewMode(this.maxView), this.wheelViewModeNavigation = !1, "wheelViewModeNavigation" in s ? this.wheelViewModeNavigation = s.wheelViewModeNavigation : "wheelViewModeNavigation" in this.element.data() && (this.wheelViewModeNavigation = this.element.data("view-mode-wheel-navigation")), this.wheelViewModeNavigationInverseDirection = !1, "wheelViewModeNavigationInverseDirection" in s ? this.wheelViewModeNavigationInverseDirection = s.wheelViewModeNavigationInverseDirection : "wheelViewModeNavigationInverseDirection" in this.element.data() && (this.wheelViewModeNavigationInverseDirection = this.element.data("view-mode-wheel-navigation-inverse-dir")), this.wheelViewModeNavigationDelay = 100, "wheelViewModeNavigationDelay" in s ? this.wheelViewModeNavigationDelay = s.wheelViewModeNavigationDelay : "wheelViewModeNavigationDelay" in this.element.data() && (this.wheelViewModeNavigationDelay = this.element.data("view-mode-wheel-navigation-delay")), this.startViewMode = 2, "startView" in s ? this.startViewMode = s.startView : "startView" in this.element.data() && (this.startViewMode = this.element.data("start-view")), this.startViewMode = o.convertViewMode(this.startViewMode), this.viewMode = this.startViewMode, this.viewSelect = this.minView, "viewSelect" in s ? this.viewSelect = s.viewSelect : "viewSelect" in this.element.data() && (this.viewSelect = this.element.data("view-select")), this.viewSelect = o.convertViewMode(this.viewSelect), this.forceParse = !0, "forceParse" in s ? this.forceParse = s.forceParse : "dateForceParse" in this.element.data() && (this.forceParse = this.element.data("date-force-parse"));
      for (var r = 3 === this.bootcssVer ? o.templateV3 : o.template; - 1 !== r.indexOf("{iconType}");) r = r.replace("{iconType}", this.icontype);
      for (; - 1 !== r.indexOf("{leftArrow}");) r = r.replace("{leftArrow}", this.icons.leftArrow);
      for (; - 1 !== r.indexOf("{rightArrow}");) r = r.replace("{rightArrow}", this.icons.rightArrow);
      if (this.picker = t(r).appendTo(this.isInline ? this.element : this.container).on({
        click: t.proxy(this.click, this),
        mousedown: t.proxy(this.mousedown, this)
      }), this.wheelViewModeNavigation && (t.fn.mousewheel ? this.picker.on({
        mousewheel: t.proxy(this.mousewheel, this)
      }) : console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option")), this.isInline ? this.picker.addClass("datetimepicker-inline") : this.picker.addClass("datetimepicker-dropdown-" + this.pickerPosition + " dropdown-menu"), this.isRTL) {
        this.picker.addClass("datetimepicker-rtl");
        var l = 3 === this.bootcssVer ? ".prev span, .next span" : ".prev i, .next i";
        this.picker.find(l).toggleClass(this.icons.leftArrow + " " + this.icons.rightArrow)
      }
      t(document).on("mousedown touchend", this.clickedOutside), this.autoclose = !1, "autoclose" in s ? this.autoclose = s.autoclose : "dateAutoclose" in this.element.data() && (this.autoclose = this.element.data("date-autoclose")), this.keyboardNavigation = !0, "keyboardNavigation" in s ? this.keyboardNavigation = s.keyboardNavigation : "dateKeyboardNavigation" in this.element.data() && (this.keyboardNavigation = this.element.data("date-keyboard-navigation")), this.todayBtn = s.todayBtn || this.element.data("date-today-btn") || !1, this.clearBtn = s.clearBtn || this.element.data("date-clear-btn") || !1, this.todayHighlight = s.todayHighlight || this.element.data("date-today-highlight") || !1, this.weekStart = 0, void 0 !== s.weekStart ? this.weekStart = s.weekStart : void 0 !== this.element.data("date-weekstart") ? this.weekStart = this.element.data("date-weekstart") : void 0 !== a[this.language].weekStart && (this.weekStart = a[this.language].weekStart), this.weekStart = this.weekStart % 7, this.weekEnd = (this.weekStart + 6) % 7, this.onRenderDay = function (t) {
        var e = (s.onRenderDay || function () {
          return []
        })(t);
        "string" == typeof e && (e = [e]);
        return ["day"].concat(e || [])
      }, this.onRenderHour = function (t) {
        var e = (s.onRenderHour || function () {
          return []
        })(t);
        return "string" == typeof e && (e = [e]), ["hour"].concat(e || [])
      }, this.onRenderMinute = function (t) {
        var e = (s.onRenderMinute || function () {
          return []
        })(t),
          i = ["minute"];
        return "string" == typeof e && (e = [e]), t < this.startDate || t > this.endDate ? i.push("disabled") : Math.floor(this.date.getUTCMinutes() / this.minuteStep) === Math.floor(t.getUTCMinutes() / this.minuteStep) && i.push("active"), i.concat(e || [])
      }, this.onRenderYear = function (t) {
        var e = (s.onRenderYear || function () {
          return []
        })(t),
          i = ["year"];
        "string" == typeof e && (e = [e]), this.date.getUTCFullYear() === t.getUTCFullYear() && i.push("active");
        var n = t.getUTCFullYear(),
          a = this.endDate.getUTCFullYear();
        return (t < this.startDate || n > a) && i.push("disabled"), i.concat(e || [])
      }, this.onRenderMonth = function (t) {
        var e = (s.onRenderMonth || function () {
          return []
        })(t);
        return "string" == typeof e && (e = [e]), ["month"].concat(e || [])
      }, this.startDate = new Date(-8639968443048e3), this.endDate = new Date(8639968443048e3), this.datesDisabled = [], this.daysOfWeekDisabled = [], this.setStartDate(s.startDate || this.element.data("date-startdate")), this.setEndDate(s.endDate || this.element.data("date-enddate")), this.setDatesDisabled(s.datesDisabled || this.element.data("date-dates-disabled")), this.setDaysOfWeekDisabled(s.daysOfWeekDisabled || this.element.data("date-days-of-week-disabled")), this.setMinutesDisabled(s.minutesDisabled || this.element.data("date-minute-disabled")), this.setHoursDisabled(s.hoursDisabled || this.element.data("date-hour-disabled")), this.fillDow(), this.fillMonths(), this.update(), this.showMode(), this.isInline && this.show()
    };
    s.prototype = {
      constructor: s,
      _events: [],
      _attachEvents: function () {
        this._detachEvents(), this.isInput ? this._events = [
          [this.element, {
            focus: t.proxy(this.show, this),
            keyup: t.proxy(this.update, this),
            keydown: t.proxy(this.keydown, this)
          }]
        ] : this.component && this.hasInput ? (this._events = [
          [this.element.find("input"), {
            focus: t.proxy(this.show, this),
            keyup: t.proxy(this.update, this),
            keydown: t.proxy(this.keydown, this)
          }],
          [this.component, {
            click: t.proxy(this.show, this)
          }]
        ], this.componentReset && this._events.push([this.componentReset, {
          click: t.proxy(this.reset, this)
        }])) : this.element.is("div") ? this.isInline = !0 : this._events = [
          [this.element, {
            click: t.proxy(this.show, this)
          }]
        ];
        for (var e, i, s = 0; s < this._events.length; s++) e = this._events[s][0], i = this._events[s][1], e.on(i)
      },
      _detachEvents: function () {
        for (var t, e, i = 0; i < this._events.length; i++) t = this._events[i][0], e = this._events[i][1], t.off(e);
        this._events = []
      },
      show: function (e) {
        this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.forceParse && this.update(), this.place(), t(window).on("resize", t.proxy(this.place, this)), e && (e.stopPropagation(), e.preventDefault()), this.isVisible = !0, this.element.trigger({
          type: "show",
          date: this.date
        })
      },
      hide: function () {
        this.isVisible && (this.isInline || (this.picker.hide(), t(window).off("resize", this.place), this.viewMode = this.startViewMode, this.showMode(), this.isInput || t(document).off("mousedown", this.hide), this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this.isVisible = !1, this.element.trigger({
          type: "hide",
          date: this.date
        })))
      },
      remove: function () {
        this._detachEvents(), t(document).off("mousedown", this.clickedOutside), this.picker.remove(), delete this.picker, delete this.element.data().datetimepicker
      },
      getDate: function () {
        var t = this.getUTCDate();
        return null === t ? null : new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
      },
      getUTCDate: function () {
        return this.date
      },
      getInitialDate: function () {
        return this.initialDate
      },
      setInitialDate: function (t) {
        this.initialDate = t
      },
      setDate: function (t) {
        this.setUTCDate(new Date(t.getTime() - 6e4 * t.getTimezoneOffset()))
      },
      setUTCDate: function (t) {
        t >= this.startDate && t <= this.endDate ? (this.date = t, this.setValue(), this.viewDate = this.date, this.fill()) : this.element.trigger({
          type: "outOfRange",
          date: t,
          startDate: this.startDate,
          endDate: this.endDate
        })
      },
      setFormat: function (t) {
        this.format = o.parseFormat(t, this.formatType);
        var e;
        this.isInput ? e = this.element : this.component && (e = this.element.find("input")), e && e.val() && this.setValue()
      },
      setValue: function () {
        var e = this.getFormattedDate();
        this.isInput ? this.element.val(e) : (this.component && this.element.find("input").val(e), this.element.data("date", e)), this.linkField && t("#" + this.linkField).val(this.getFormattedDate(this.linkFormat))
      },
      getFormattedDate: function (t) {
        return t = t || this.format, o.formatDate(this.date, t, this.language, this.formatType, this.timezone)
      },
      setStartDate: function (t) {
        this.startDate = t || this.startDate, 8639968443048e3 !== this.startDate.valueOf() && (this.startDate = o.parseDate(this.startDate, this.format, this.language, this.formatType, this.timezone)), this.update(), this.updateNavArrows()
      },
      setEndDate: function (t) {
        this.endDate = t || this.endDate, 8639968443048e3 !== this.endDate.valueOf() && (this.endDate = o.parseDate(this.endDate, this.format, this.language, this.formatType, this.timezone)), this.update(), this.updateNavArrows()
      },
      setDatesDisabled: function (e) {
        this.datesDisabled = e || [], t.isArray(this.datesDisabled) || (this.datesDisabled = this.datesDisabled.split(/,\s*/));
        var i = this;
        this.datesDisabled = t.map(this.datesDisabled, function (t) {
          return o.parseDate(t, i.format, i.language, i.formatType, i.timezone).toDateString()
        }), this.update(), this.updateNavArrows()
      },
      setTitle: function (t, e) {
        return this.picker.find(t).find("th:eq(1)").text(!1 === this.title ? e : this.title)
      },
      setDaysOfWeekDisabled: function (e) {
        this.daysOfWeekDisabled = e || [], t.isArray(this.daysOfWeekDisabled) || (this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/)), this.daysOfWeekDisabled = t.map(this.daysOfWeekDisabled, function (t) {
          return parseInt(t, 10)
        }), this.update(), this.updateNavArrows()
      },
      setMinutesDisabled: function (e) {
        this.minutesDisabled = e || [], t.isArray(this.minutesDisabled) || (this.minutesDisabled = this.minutesDisabled.split(/,\s*/)), this.minutesDisabled = t.map(this.minutesDisabled, function (t) {
          return parseInt(t, 10)
        }), this.update(), this.updateNavArrows()
      },
      setHoursDisabled: function (e) {
        this.hoursDisabled = e || [], t.isArray(this.hoursDisabled) || (this.hoursDisabled = this.hoursDisabled.split(/,\s*/)), this.hoursDisabled = t.map(this.hoursDisabled, function (t) {
          return parseInt(t, 10)
        }), this.update(), this.updateNavArrows()
      },
      place: function () {
        if (!this.isInline) {
          if (!this.zIndex) {
            var e = 0;
            t("div").each(function () {
              var i = parseInt(t(this).css("zIndex"), 10);
              i > e && (e = i)
            }), this.zIndex = e + 10
          }
          var i, s, n, a;
          a = this.container instanceof t ? this.container.offset() : t(this.container).offset(), this.component ? (i = this.component.offset(), n = i.left, ("bottom-left" === this.pickerPosition || "top-left" === this.pickerPosition) && (n += this.component.outerWidth() - this.picker.outerWidth())) : (i = this.element.offset(), n = i.left, ("bottom-left" === this.pickerPosition || "top-left" === this.pickerPosition) && (n += this.element.outerWidth() - this.picker.outerWidth()));
          var o = document.body.clientWidth || window.innerWidth;
          n + 220 > o && (n = o - 220), s = "top-left" === this.pickerPosition || "top-right" === this.pickerPosition ? i.top - this.picker.outerHeight() : i.top + this.height, s -= a.top, n -= a.left, this.picker.css({
            top: s,
            left: n,
            zIndex: this.zIndex
          })
        }
      },
      hour_minute: "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]",
      update: function () {
        var t, e = !1;
        arguments && arguments.length && ("string" == typeof arguments[0] || arguments[0] instanceof Date) ? (t = arguments[0], e = !0) : "string" == typeof (t = (this.isInput ? this.element.val() : this.element.find("input").val()) || this.element.data("date") || this.initialDate) && (t = t.replace(/^\s+|\s+$/g, "")), t || (t = new Date, e = !1), "string" == typeof t && (new RegExp(this.hour_minute).test(t) || new RegExp(this.hour_minute + ":[0-5][0-9]").test(t)) && (t = this.getDate()), this.date = o.parseDate(t, this.format, this.language, this.formatType, this.timezone), e && this.setValue(), this.date < this.startDate ? this.viewDate = new Date(this.startDate) : this.date > this.endDate ? this.viewDate = new Date(this.endDate) : this.viewDate = new Date(this.date), this.fill()
      },
      fillDow: function () {
        for (var t = this.weekStart, e = "<tr>"; t < this.weekStart + 7;) e += '<th class="dow">' + a[this.language].daysMin[t++ % 7] + "</th>";
        e += "</tr>", this.picker.find(".datetimepicker-days thead").append(e)
      },
      fillMonths: function () {
        for (var t = "", e = new Date(this.viewDate), i = 0; 12 > i; i++) {
          e.setUTCMonth(i);
          t += '<span class="' + this.onRenderMonth(e).join(" ") + '">' + a[this.language].monthsShort[i] + "</span>"
        }
        this.picker.find(".datetimepicker-months td").html(t)
      },
      fill: function () {
        if (this.date && this.viewDate) {
          var e = new Date(this.viewDate),
            s = e.getUTCFullYear(),
            r = e.getUTCMonth(),
            l = e.getUTCDate(),
            d = e.getUTCHours(),
            h = this.startDate.getUTCFullYear(),
            c = this.startDate.getUTCMonth(),
            u = this.endDate.getUTCFullYear(),
            f = this.endDate.getUTCMonth() + 1,
            p = new i(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate()).valueOf(),
            m = new Date;
          if (this.setTitle(".datetimepicker-days", a[this.language].months[r] + " " + s), "time" === this.formatViewType) {
            var g = this.getFormattedDate();
            this.setTitle(".datetimepicker-hours", g), this.setTitle(".datetimepicker-minutes", g)
          } else this.setTitle(".datetimepicker-hours", l + " " + a[this.language].months[r] + " " + s), this.setTitle(".datetimepicker-minutes", l + " " + a[this.language].months[r] + " " + s);
          this.picker.find("tfoot th.today").text(a[this.language].today || a.en.today).toggle(!1 !== this.todayBtn), this.picker.find("tfoot th.clear").text(a[this.language].clear || a.en.clear).toggle(!1 !== this.clearBtn), this.updateNavArrows(), this.fillMonths();
          var v = i(s, r - 1, 28, 0, 0, 0, 0),
            y = o.getDaysInMonth(v.getUTCFullYear(), v.getUTCMonth());
          v.setUTCDate(y), v.setUTCDate(y - (v.getUTCDay() - this.weekStart + 7) % 7);
          var w = new Date(v);
          w.setUTCDate(w.getUTCDate() + 42), w = w.valueOf();
          for (var b, _ = []; v.valueOf() < w;) v.getUTCDay() === this.weekStart && _.push("<tr>"), b = this.onRenderDay(v), v.getUTCFullYear() < s || v.getUTCFullYear() === s && v.getUTCMonth() < r ? b.push("old") : (v.getUTCFullYear() > s || v.getUTCFullYear() === s && v.getUTCMonth() > r) && b.push("new"), this.todayHighlight && v.getUTCFullYear() === m.getFullYear() && v.getUTCMonth() === m.getMonth() && v.getUTCDate() === m.getDate() && b.push("today"), v.valueOf() === p && b.push("active"), (v.valueOf() + 864e5 <= this.startDate || v.valueOf() > this.endDate || -1 !== t.inArray(v.getUTCDay(), this.daysOfWeekDisabled) || -1 !== t.inArray(v.toDateString(), this.datesDisabled)) && b.push("disabled"), _.push('<td class="' + b.join(" ") + '">' + v.getUTCDate() + "</td>"), v.getUTCDay() === this.weekEnd && _.push("</tr>"), v.setUTCDate(v.getUTCDate() + 1);
          this.picker.find(".datetimepicker-days tbody").empty().append(_.join("")), _ = [];
          var T = "",
            k = "",
            C = "",
            S = this.hoursDisabled || [];
          e = new Date(this.viewDate);
          for (A = 0; 24 > A; A++) {
            e.setUTCHours(A), b = this.onRenderHour(e), -1 !== S.indexOf(A) && b.push("disabled");
            var D = i(s, r, l, A);
            D.valueOf() + 36e5 <= this.startDate || D.valueOf() > this.endDate ? b.push("disabled") : d === A && b.push("active"), this.showMeridian && 2 === a[this.language].meridiem.length ? ((k = 12 > A ? a[this.language].meridiem[0] : a[this.language].meridiem[1]) !== C && ("" !== C && _.push("</fieldset>"), _.push('<fieldset class="hour"><legend>' + k.toUpperCase() + "</legend>")), C = k, T = A % 12 ? A % 12 : 12, 12 > A ? b.push("hour_am") : b.push("hour_pm"), _.push('<span class="' + b.join(" ") + '">' + T + "</span>"), 23 === A && _.push("</fieldset>")) : (T = A + ":00", _.push('<span class="' + b.join(" ") + '">' + T + "</span>"))
          }
          this.picker.find(".datetimepicker-hours td").html(_.join("")), _ = [], T = "", k = "", C = "";
          var $ = this.minutesDisabled || [];
          e = new Date(this.viewDate);
          for (A = 0; 60 > A; A += this.minuteStep) - 1 === $.indexOf(A) && (e.setUTCMinutes(A), e.setUTCSeconds(0), b = this.onRenderMinute(e), this.showMeridian && 2 === a[this.language].meridiem.length ? ((k = 12 > d ? a[this.language].meridiem[0] : a[this.language].meridiem[1]) !== C && ("" !== C && _.push("</fieldset>"), _.push('<fieldset class="minute"><legend>' + k.toUpperCase() + "</legend>")), C = k, T = d % 12 ? d % 12 : 12, _.push('<span class="' + b.join(" ") + '">' + T + ":" + (10 > A ? "0" + A : A) + "</span>"), 59 === A && _.push("</fieldset>")) : (T = A + ":00", _.push('<span class="' + b.join(" ") + '">' + d + ":" + (10 > A ? "0" + A : A) + "</span>")));
          this.picker.find(".datetimepicker-minutes td").html(_.join(""));
          var E = this.date.getUTCFullYear(),
            x = this.setTitle(".datetimepicker-months", s).end().find(".month").removeClass("active");
          E === s && x.eq(this.date.getUTCMonth()).addClass("active"), (h > s || s > u) && x.addClass("disabled"), s === h && x.slice(0, c).addClass("disabled"), s === u && x.slice(f).addClass("disabled"), _ = "", s = 10 * parseInt(s / 10, 10);
          var M = this.setTitle(".datetimepicker-years", s + "-" + (s + 9)).end().find("td");
          s -= 1, e = new Date(this.viewDate);
          for (var A = -1; 11 > A; A++) e.setUTCFullYear(s), b = this.onRenderYear(e), (-1 === A || 10 === A) && b.push(n), _ += '<span class="' + b.join(" ") + '">' + s + "</span>", s += 1;
          M.html(_), this.place()
        }
      },
      updateNavArrows: function () {
        var t = new Date(this.viewDate),
          e = t.getUTCFullYear(),
          i = t.getUTCMonth(),
          s = t.getUTCDate(),
          n = t.getUTCHours();
        switch (this.viewMode) {
          case 0:
            e <= this.startDate.getUTCFullYear() && i <= this.startDate.getUTCMonth() && s <= this.startDate.getUTCDate() && n <= this.startDate.getUTCHours() ? this.picker.find(".prev").css({
              visibility: "hidden"
            }) : this.picker.find(".prev").css({
              visibility: "visible"
            }), e >= this.endDate.getUTCFullYear() && i >= this.endDate.getUTCMonth() && s >= this.endDate.getUTCDate() && n >= this.endDate.getUTCHours() ? this.picker.find(".next").css({
              visibility: "hidden"
            }) : this.picker.find(".next").css({
              visibility: "visible"
            });
            break;
          case 1:
            e <= this.startDate.getUTCFullYear() && i <= this.startDate.getUTCMonth() && s <= this.startDate.getUTCDate() ? this.picker.find(".prev").css({
              visibility: "hidden"
            }) : this.picker.find(".prev").css({
              visibility: "visible"
            }), e >= this.endDate.getUTCFullYear() && i >= this.endDate.getUTCMonth() && s >= this.endDate.getUTCDate() ? this.picker.find(".next").css({
              visibility: "hidden"
            }) : this.picker.find(".next").css({
              visibility: "visible"
            });
            break;
          case 2:
            e <= this.startDate.getUTCFullYear() && i <= this.startDate.getUTCMonth() ? this.picker.find(".prev").css({
              visibility: "hidden"
            }) : this.picker.find(".prev").css({
              visibility: "visible"
            }), e >= this.endDate.getUTCFullYear() && i >= this.endDate.getUTCMonth() ? this.picker.find(".next").css({
              visibility: "hidden"
            }) : this.picker.find(".next").css({
              visibility: "visible"
            });
            break;
          case 3:
          case 4:
            e <= this.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
              visibility: "hidden"
            }) : this.picker.find(".prev").css({
              visibility: "visible"
            }), e >= this.endDate.getUTCFullYear() ? this.picker.find(".next").css({
              visibility: "hidden"
            }) : this.picker.find(".next").css({
              visibility: "visible"
            })
        }
      },
      mousewheel: function (e) {
        if (e.preventDefault(), e.stopPropagation(), !this.wheelPause) {
          this.wheelPause = !0;
          var i = e.originalEvent.wheelDelta,
            s = i > 0 ? 1 : 0 === i ? 0 : -1;
          this.wheelViewModeNavigationInverseDirection && (s = -s), this.showMode(s), setTimeout(t.proxy(function () {
            this.wheelPause = !1
          }, this), this.wheelViewModeNavigationDelay)
        }
      },
      click: function (e) {
        e.stopPropagation(), e.preventDefault();
        var s = t(e.target).closest("span, td, th, legend");
        if (s.is("." + this.icontype) && (s = t(s).parent().closest("span, td, th, legend")), 1 === s.length) {
          if (s.is(".disabled")) return void this.element.trigger({
            type: "outOfRange",
            date: this.viewDate,
            startDate: this.startDate,
            endDate: this.endDate
          });
          switch (s[0].nodeName.toLowerCase()) {
            case "th":
              switch (s[0].className) {
                case "switch":
                  this.showMode(1);
                  break;
                case "prev":
                case "next":
                  var n = o.modes[this.viewMode].navStep * ("prev" === s[0].className ? -1 : 1);
                  switch (this.viewMode) {
                    case 0:
                      this.viewDate = this.moveHour(this.viewDate, n);
                      break;
                    case 1:
                      this.viewDate = this.moveDate(this.viewDate, n);
                      break;
                    case 2:
                      this.viewDate = this.moveMonth(this.viewDate, n);
                      break;
                    case 3:
                    case 4:
                      this.viewDate = this.moveYear(this.viewDate, n)
                  }
                  this.fill(), this.element.trigger({
                    type: s[0].className + ":" + this.convertViewModeText(this.viewMode),
                    date: this.viewDate,
                    startDate: this.startDate,
                    endDate: this.endDate
                  });
                  break;
                case "clear":
                  this.reset(), this.autoclose && this.hide();
                  break;
                case "today":
                  var a = new Date;
                  (a = i(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), 0)) < this.startDate ? a = this.startDate : a > this.endDate && (a = this.endDate), this.viewMode = this.startViewMode, this.showMode(0), this._setDate(a), this.fill(), this.autoclose && this.hide()
              }
              break;
            case "span":
              if (!s.is(".disabled")) {
                var r = this.viewDate.getUTCFullYear(),
                  l = this.viewDate.getUTCMonth(),
                  d = this.viewDate.getUTCDate(),
                  h = this.viewDate.getUTCHours(),
                  c = this.viewDate.getUTCMinutes(),
                  u = this.viewDate.getUTCSeconds();
                if (s.is(".month") ? (this.viewDate.setUTCDate(1), l = s.parent().find("span").index(s), d = this.viewDate.getUTCDate(), this.viewDate.setUTCMonth(l), this.element.trigger({
                  type: "changeMonth",
                  date: this.viewDate
                }), this.viewSelect >= 3 && this._setDate(i(r, l, d, h, c, u, 0))) : s.is(".year") ? (this.viewDate.setUTCDate(1), r = parseInt(s.text(), 10) || 0, this.viewDate.setUTCFullYear(r), this.element.trigger({
                  type: "changeYear",
                  date: this.viewDate
                }), this.viewSelect >= 4 && this._setDate(i(r, l, d, h, c, u, 0))) : s.is(".hour") ? (h = parseInt(s.text(), 10) || 0, (s.hasClass("hour_am") || s.hasClass("hour_pm")) && (12 === h && s.hasClass("hour_am") ? h = 0 : 12 !== h && s.hasClass("hour_pm") && (h += 12)), this.viewDate.setUTCHours(h), this.element.trigger({
                  type: "changeHour",
                  date: this.viewDate
                }), this.viewSelect >= 1 && this._setDate(i(r, l, d, h, c, u, 0))) : s.is(".minute") && (c = parseInt(s.text().substr(s.text().indexOf(":") + 1), 10) || 0, this.viewDate.setUTCMinutes(c), this.element.trigger({
                  type: "changeMinute",
                  date: this.viewDate
                }), this.viewSelect >= 0 && this._setDate(i(r, l, d, h, c, u, 0))), 0 !== this.viewMode) {
                  f = this.viewMode;
                  this.showMode(-1), this.fill(), f === this.viewMode && this.autoclose && this.hide()
                } else this.fill(), this.autoclose && this.hide()
              }
              break;
            case "td":
              if (s.is(".day") && !s.is(".disabled")) {
                var d = parseInt(s.text(), 10) || 1,
                  r = this.viewDate.getUTCFullYear(),
                  l = this.viewDate.getUTCMonth(),
                  h = this.viewDate.getUTCHours(),
                  c = this.viewDate.getUTCMinutes(),
                  u = this.viewDate.getUTCSeconds();
                s.is(".old") ? 0 === l ? (l = 11, r -= 1) : l -= 1 : s.is(".new") && (11 === l ? (l = 0, r += 1) : l += 1), this.viewDate.setUTCFullYear(r), this.viewDate.setUTCMonth(l, d), this.element.trigger({
                  type: "changeDay",
                  date: this.viewDate
                }), this.viewSelect >= 2 && this._setDate(i(r, l, d, h, c, u, 0))
              }
              var f = this.viewMode;
              this.showMode(-1), this.fill(), f === this.viewMode && this.autoclose && this.hide()
          }
        }
      },
      _setDate: function (t, e) {
        e && "date" !== e || (this.date = t), e && "view" !== e || (this.viewDate = t), this.fill(), this.setValue();
        var i;
        this.isInput ? i = this.element : this.component && (i = this.element.find("input")), i && i.change(), this.element.trigger({
          type: "changeDate",
          date: this.getDate()
        }), null === t && (this.date = this.viewDate)
      },
      moveMinute: function (t, e) {
        if (!e) return t;
        var i = new Date(t.valueOf());
        return i.setUTCMinutes(i.getUTCMinutes() + e * this.minuteStep), i
      },
      moveHour: function (t, e) {
        if (!e) return t;
        var i = new Date(t.valueOf());
        return i.setUTCHours(i.getUTCHours() + e), i
      },
      moveDate: function (t, e) {
        if (!e) return t;
        var i = new Date(t.valueOf());
        return i.setUTCDate(i.getUTCDate() + e), i
      },
      moveMonth: function (t, e) {
        if (!e) return t;
        var i, s, n = new Date(t.valueOf()),
          a = n.getUTCDate(),
          o = n.getUTCMonth(),
          r = Math.abs(e);
        if (e = e > 0 ? 1 : -1, 1 === r) s = -1 === e ? function () {
          return n.getUTCMonth() === o
        } : function () {
          return n.getUTCMonth() !== i
        }, i = o + e, n.setUTCMonth(i), (0 > i || i > 11) && (i = (i + 12) % 12);
        else {
          for (var l = 0; r > l; l++) n = this.moveMonth(n, e);
          i = n.getUTCMonth(), n.setUTCDate(a), s = function () {
            return i !== n.getUTCMonth()
          }
        }
        for (; s();) n.setUTCDate(--a), n.setUTCMonth(i);
        return n
      },
      moveYear: function (t, e) {
        return this.moveMonth(t, 12 * e)
      },
      dateWithinRange: function (t) {
        return t >= this.startDate && t <= this.endDate
      },
      keydown: function (t) {
        if (this.picker.is(":not(:visible)")) 27 === t.keyCode && this.show();
        else {
          var e, i, s, n = !1;
          switch (t.keyCode) {
            case 27:
              this.hide(), t.preventDefault();
              break;
            case 37:
            case 39:
              if (!this.keyboardNavigation) break;
              e = 37 === t.keyCode ? -1 : 1;
              var a = this.viewMode;
              t.ctrlKey ? a += 2 : t.shiftKey && (a += 1), 4 === a ? (i = this.moveYear(this.date, e), s = this.moveYear(this.viewDate, e)) : 3 === a ? (i = this.moveMonth(this.date, e), s = this.moveMonth(this.viewDate, e)) : 2 === a ? (i = this.moveDate(this.date, e), s = this.moveDate(this.viewDate, e)) : 1 === a ? (i = this.moveHour(this.date, e), s = this.moveHour(this.viewDate, e)) : 0 === a && (i = this.moveMinute(this.date, e), s = this.moveMinute(this.viewDate, e)), this.dateWithinRange(i) && (this.date = i, this.viewDate = s, this.setValue(), this.update(), t.preventDefault(), n = !0);
              break;
            case 38:
            case 40:
              if (!this.keyboardNavigation) break;
              e = 38 === t.keyCode ? -1 : 1, a = this.viewMode, t.ctrlKey ? a += 2 : t.shiftKey && (a += 1), 4 === a ? (i = this.moveYear(this.date, e), s = this.moveYear(this.viewDate, e)) : 3 === a ? (i = this.moveMonth(this.date, e), s = this.moveMonth(this.viewDate, e)) : 2 === a ? (i = this.moveDate(this.date, 7 * e), s = this.moveDate(this.viewDate, 7 * e)) : 1 === a ? this.showMeridian ? (i = this.moveHour(this.date, 6 * e), s = this.moveHour(this.viewDate, 6 * e)) : (i = this.moveHour(this.date, 4 * e), s = this.moveHour(this.viewDate, 4 * e)) : 0 === a && (i = this.moveMinute(this.date, 4 * e), s = this.moveMinute(this.viewDate, 4 * e)), this.dateWithinRange(i) && (this.date = i, this.viewDate = s, this.setValue(), this.update(), t.preventDefault(), n = !0);
              break;
            case 13:
              if (0 !== this.viewMode) {
                var o = this.viewMode;
                this.showMode(-1), this.fill(), o === this.viewMode && this.autoclose && this.hide()
              } else this.fill(), this.autoclose && this.hide();
              t.preventDefault();
              break;
            case 9:
              this.hide()
          }
          if (n) {
            var r;
            this.isInput ? r = this.element : this.component && (r = this.element.find("input")), r && r.change(), this.element.trigger({
              type: "changeDate",
              date: this.getDate()
            })
          }
        }
      },
      showMode: function (t) {
        if (t) {
          var e = Math.max(0, Math.min(o.modes.length - 1, this.viewMode + t));
          e >= this.minView && e <= this.maxView && (this.element.trigger({
            type: "changeMode",
            date: this.viewDate,
            oldViewMode: this.viewMode,
            newViewMode: e
          }), this.viewMode = e)
        }
        this.picker.find(">div").hide().filter(".datetimepicker-" + o.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
      },
      reset: function () {
        this._setDate(null, "date")
      },
      convertViewModeText: function (t) {
        switch (t) {
          case 4:
            return "decade";
          case 3:
            return "year";
          case 2:
            return "month";
          case 1:
            return "day";
          case 0:
            return "hour"
        }
      }
    };
    var n = t.fn.datetimepicker;
    t.fn.datetimepicker = function (i) {
      var n = Array.apply(null, arguments);
      n.shift();
      var a;
      return this.each(function () {
        var o = t(this),
          r = o.data("datetimepicker"),
          l = "object" == typeof i && i;
        return r || o.data("datetimepicker", r = new s(this, t.extend({}, t.fn.datetimepicker.defaults, l))), ("string" != typeof i || "function" != typeof r[i] || (a = r[i].apply(r, n)) === e) && void 0
      }), a !== e ? a : this
    }, t.fn.datetimepicker.defaults = {}, t.fn.datetimepicker.Constructor = s;
    var a = t.fn.datetimepicker.dates = {
      en: {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        meridiem: ["am", "pm"],
        suffix: ["st", "nd", "rd", "th"],
        today: "Today",
        clear: "Clear"
      }
    },
      o = {
        modes: [{
          clsName: "minutes",
          navFnc: "Hours",
          navStep: 1
        }, {
          clsName: "hours",
          navFnc: "Date",
          navStep: 1
        }, {
          clsName: "days",
          navFnc: "Month",
          navStep: 1
        }, {
          clsName: "months",
          navFnc: "FullYear",
          navStep: 1
        }, {
          clsName: "years",
          navFnc: "FullYear",
          navStep: 10
        }],
        isLeapYear: function (t) {
          return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
        },
        getDaysInMonth: function (t, e) {
          return [31, o.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
        },
        getDefaultFormat: function (t, e) {
          if ("standard" === t) return "input" === e ? "yyyy-mm-dd hh:ii" : "yyyy-mm-dd hh:ii:ss";
          if ("php" === t) return "input" === e ? "Y-m-d H:i" : "Y-m-d H:i:s";
          throw new Error("Invalid format type.")
        },
        validParts: function (t) {
          if ("standard" === t) return /t|hh?|HH?|p|P|z|Z|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g;
          if ("php" === t) return /[dDjlNwzFmMnStyYaABgGhHis]/g;
          throw new Error("Invalid format type.")
        },
        nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
        parseFormat: function (t, e) {
          var i = t.replace(this.validParts(e), "\0").split("\0"),
            s = t.match(this.validParts(e));
          if (!i || !i.length || !s || 0 === s.length) throw new Error("Invalid date format.");
          return {
            separators: i,
            parts: s
          }
        },
        parseDate: function (e, n, o, r, l) {
          if (e instanceof Date) {
            var d = new Date(e.valueOf() - 6e4 * e.getTimezoneOffset());
            return d.setMilliseconds(0), d
          }
          if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(e) && (n = this.parseFormat("yyyy-mm-dd", r)), /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(e) && (n = this.parseFormat("yyyy-mm-dd hh:ii", r)), /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(e) && (n = this.parseFormat("yyyy-mm-dd hh:ii:ss", r)), /^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(e)) {
            var h, c = /([-+]\d+)([dmwy])/,
              u = e.match(/([-+]\d+)([dmwy])/g);
            e = new Date;
            for (w = 0; w < u.length; w++) switch (m = c.exec(u[w]), h = parseInt(m[1]), m[2]) {
              case "d":
                e.setUTCDate(e.getUTCDate() + h);
                break;
              case "m":
                e = s.prototype.moveMonth.call(s.prototype, e, h);
                break;
              case "w":
                e.setUTCDate(e.getUTCDate() + 7 * h);
                break;
              case "y":
                e = s.prototype.moveYear.call(s.prototype, e, h)
            }
            return i(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), 0)
          }
          var f, p, m, u = e && e.toString().match(this.nonpunctuation) || [],
            e = new Date(0, 0, 0, 0, 0, 0, 0),
            g = {},
            v = ["hh", "h", "ii", "i", "ss", "s", "yyyy", "yy", "M", "MM", "m", "mm", "D", "DD", "d", "dd", "H", "HH", "p", "P", "z", "Z"],
            y = {
              hh: function (t, e) {
                return t.setUTCHours(e)
              },
              h: function (t, e) {
                return t.setUTCHours(e)
              },
              HH: function (t, e) {
                return t.setUTCHours(12 === e ? 0 : e)
              },
              H: function (t, e) {
                return t.setUTCHours(12 === e ? 0 : e)
              },
              ii: function (t, e) {
                return t.setUTCMinutes(e)
              },
              i: function (t, e) {
                return t.setUTCMinutes(e)
              },
              ss: function (t, e) {
                return t.setUTCSeconds(e)
              },
              s: function (t, e) {
                return t.setUTCSeconds(e)
              },
              yyyy: function (t, e) {
                return t.setUTCFullYear(e)
              },
              yy: function (t, e) {
                return t.setUTCFullYear(2e3 + e)
              },
              m: function (t, e) {
                for (e -= 1; 0 > e;) e += 12;
                for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) {
                  if (isNaN(t.getUTCMonth())) return t;
                  t.setUTCDate(t.getUTCDate() - 1)
                }
                return t
              },
              d: function (t, e) {
                return t.setUTCDate(e)
              },
              p: function (t, e) {
                return t.setUTCHours(1 === e ? t.getUTCHours() + 12 : t.getUTCHours())
              },
              z: function () {
                return l
              }
            };
          if (y.M = y.MM = y.mm = y.m, y.dd = y.d, y.P = y.p, y.Z = y.z, e = i(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds()), u.length === n.parts.length) {
            for (var w = 0, b = n.parts.length; b > w; w++) {
              if (f = parseInt(u[w], 10), m = n.parts[w], isNaN(f)) switch (m) {
                case "MM":
                  p = t(a[o].months).filter(function () {
                    var t = this.slice(0, u[w].length);
                    return t === u[w].slice(0, t.length)
                  }), f = t.inArray(p[0], a[o].months) + 1;
                  break;
                case "M":
                  p = t(a[o].monthsShort).filter(function () {
                    var t = this.slice(0, u[w].length),
                      e = u[w].slice(0, t.length);
                    return t.toLowerCase() === e.toLowerCase()
                  }), f = t.inArray(p[0], a[o].monthsShort) + 1;
                  break;
                case "p":
                case "P":
                  f = t.inArray(u[w].toLowerCase(), a[o].meridiem)
              }
              g[m] = f
            }
            for (var _, w = 0; w < v.length; w++)(_ = v[w]) in g && !isNaN(g[_]) && y[_](e, g[_])
          }
          return e
        },
        formatDate: function (e, i, s, n, r) {
          if (null === e) return "";
          var l;
          if ("standard" === n) l = {
            t: e.getTime(),
            yy: e.getUTCFullYear().toString().substring(2),
            yyyy: e.getUTCFullYear(),
            m: e.getUTCMonth() + 1,
            M: a[s].monthsShort[e.getUTCMonth()],
            MM: a[s].months[e.getUTCMonth()],
            d: e.getUTCDate(),
            D: a[s].daysShort[e.getUTCDay()],
            DD: a[s].days[e.getUTCDay()],
            p: 2 === a[s].meridiem.length ? a[s].meridiem[e.getUTCHours() < 12 ? 0 : 1] : "",
            h: e.getUTCHours(),
            i: e.getUTCMinutes(),
            s: e.getUTCSeconds(),
            z: r
          }, 2 === a[s].meridiem.length ? l.H = l.h % 12 == 0 ? 12 : l.h % 12 : l.H = l.h, l.HH = (l.H < 10 ? "0" : "") + l.H, l.P = l.p.toUpperCase(), l.Z = l.z, l.hh = (l.h < 10 ? "0" : "") + l.h, l.ii = (l.i < 10 ? "0" : "") + l.i, l.ss = (l.s < 10 ? "0" : "") + l.s, l.dd = (l.d < 10 ? "0" : "") + l.d, l.mm = (l.m < 10 ? "0" : "") + l.m;
          else {
            if ("php" !== n) throw new Error("Invalid format type.");
            (l = {
              y: e.getUTCFullYear().toString().substring(2),
              Y: e.getUTCFullYear(),
              F: a[s].months[e.getUTCMonth()],
              M: a[s].monthsShort[e.getUTCMonth()],
              n: e.getUTCMonth() + 1,
              t: o.getDaysInMonth(e.getUTCFullYear(), e.getUTCMonth()),
              j: e.getUTCDate(),
              l: a[s].days[e.getUTCDay()],
              D: a[s].daysShort[e.getUTCDay()],
              w: e.getUTCDay(),
              N: 0 === e.getUTCDay() ? 7 : e.getUTCDay(),
              S: e.getUTCDate() % 10 <= a[s].suffix.length ? a[s].suffix[e.getUTCDate() % 10 - 1] : "",
              a: 2 === a[s].meridiem.length ? a[s].meridiem[e.getUTCHours() < 12 ? 0 : 1] : "",
              g: e.getUTCHours() % 12 == 0 ? 12 : e.getUTCHours() % 12,
              G: e.getUTCHours(),
              i: e.getUTCMinutes(),
              s: e.getUTCSeconds()
            }).m = (l.n < 10 ? "0" : "") + l.n, l.d = (l.j < 10 ? "0" : "") + l.j, l.A = l.a.toString().toUpperCase(), l.h = (l.g < 10 ? "0" : "") + l.g, l.H = (l.G < 10 ? "0" : "") + l.G, l.i = (l.i < 10 ? "0" : "") + l.i, l.s = (l.s < 10 ? "0" : "") + l.s
          }
          for (var e = [], d = t.extend([], i.separators), h = 0, c = i.parts.length; c > h; h++) d.length && e.push(d.shift()), e.push(l[i.parts[h]]);
          return d.length && e.push(d.shift()), e.join("")
        },
        convertViewMode: function (t) {
          switch (t) {
            case 4:
            case "decade":
              t = 4;
              break;
            case 3:
            case "year":
              t = 3;
              break;
            case 2:
            case "month":
              t = 2;
              break;
            case 1:
            case "day":
              t = 1;
              break;
            case 0:
            case "hour":
              t = 0
          }
          return t
        },
        headTemplate: '<thead><tr><th class="prev"><i class="{iconType} {leftArrow}"/></th><th colspan="5" class="switch"></th><th class="next"><i class="{iconType} {rightArrow}"/></th></tr></thead>',
        headTemplateV3: '<thead><tr><th class="prev"><span class="{iconType} {leftArrow}"></span> </th><th colspan="5" class="switch"></th><th class="next"><span class="{iconType} {rightArrow}"></span> </th></tr></thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
      };
    o.template = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + o.headTemplate + o.contTemplate + o.footTemplate + '</table></div><div class="datetimepicker-hours"><table class=" table-condensed">' + o.headTemplate + o.contTemplate + o.footTemplate + '</table></div><div class="datetimepicker-days"><table class=" table-condensed">' + o.headTemplate + "<tbody></tbody>" + o.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + o.headTemplate + o.contTemplate + o.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + o.headTemplate + o.contTemplate + o.footTemplate + "</table></div></div>", o.templateV3 = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + o.headTemplateV3 + o.contTemplate + o.footTemplate + '</table></div><div class="datetimepicker-hours"><table class=" table-condensed">' + o.headTemplateV3 + o.contTemplate + o.footTemplate + '</table></div><div class="datetimepicker-days"><table class=" table-condensed">' + o.headTemplateV3 + "<tbody></tbody>" + o.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + o.headTemplateV3 + o.contTemplate + o.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + o.headTemplateV3 + o.contTemplate + o.footTemplate + "</table></div></div>", t.fn.datetimepicker.DPGlobal = o, t.fn.datetimepicker.noConflict = function () {
      return t.fn.datetimepicker = n, this
    }, t(document).on("focus.datetimepicker.data-api click.datetimepicker.data-api", '[data-provide="datetimepicker"]', function (e) {
      var i = t(this);
      i.data("datetimepicker") || (e.preventDefault(), i.datetimepicker("show"))
    }), t(function () {
      t('[data-provide="datetimepicker-inline"]').datetimepicker()
    })
  }),
  function (t) {
    function e(t) {
      var e;
      for (e = 0; e < s.length; e++) s[e] != t && s[e].hide()
    }

    function i(e, i) {
      this.$el = t(e), this.proxy("show").proxy("ahead").proxy("hide").proxy("keyHandler").proxy("selectDate"), void 0 == typeof i && (i = {}), ((i = t.extend({}, t.fn.datepicker.defaults, i)).parse || i.format || !this.detectNative()) && (t.extend(this, i), this.$el.data("datepicker", this), s.push(this), this.init())
    }
    var s = [];
    i.prototype = {
      detectNative: function (e) {
        if (navigator.userAgent.match(/(iPad|iPhone); CPU(\ iPhone)? OS 5_\d/i)) {
          var i = t("<span>").insertBefore(this.$el);
          return this.$el.detach().attr("type", "date").insertAfter(i), i.remove(), !0
        }
        return !1
      },
      init: function () {
        var e = this.nav("months", 1),
          i = this.nav("years", 12),
          s = t("<div>").addClass("nav").append(e, i);
        this.$month = t(".name", e), this.$year = t(".name", i), $calendar = t("<div>").addClass("calendar");
        for (var n = 0; n < this.shortDayNames.length; n++) $calendar.append('<div class="dow">' + this.shortDayNames[(n + this.startOfWeek) % 7] + "</div>");
        this.$days = t("<div>").addClass("days"), $calendar.append(this.$days), this.$picker = t("<div>").click(function (t) {
          t.stopPropagation()
        }).mousedown(function (t) {
          t.preventDefault()
        }).addClass("datepicker").append(s, $calendar).insertAfter(this.$el), this.$el.focus(this.show).click(this.show).change(t.proxy(function () {
          this.selectDate()
        }, this)), this.selectDate(), this.hide()
      },
      nav: function (e, i) {
        var s = t('<div><span class="prev button">&larr;</span><span class="name"></span><span class="next button">&rarr;</span></div>').addClass(e);
        return t(".prev", s).click(t.proxy(function () {
          this.ahead(-i, 0)
        }, this)), t(".next", s).click(t.proxy(function () {
          this.ahead(i, 0)
        }, this)), s
      },
      updateName: function (e, i) {
        var s = e.find(".fg").text(),
          n = t("<div>").addClass("fg").append(i);
        if (e.empty(), s != i) {
          var a = t("<div>").addClass("bg");
          e.append(a, n), a.fadeOut("slow", function () {
            t(this).remove()
          })
        } else e.append(n)
      },
      selectMonth: function (e) {
        var i = new Date(e.getFullYear(), e.getMonth(), 1);
        if (!this.curMonth || this.curMonth.getFullYear() != i.getFullYear() || this.curMonth.getMonth() != i.getMonth()) {
          this.curMonth = i;
          var s = this.rangeStart(e),
            n = this.rangeEnd(e),
            a = this.daysBetween(s, n);
          this.$days.empty(), this.disabled = [];
          for (var o = 0; a >= o; o++) {
            var r = new Date(s.getFullYear(), s.getMonth(), s.getDate() + o, 12, 0),
              l = t("<div>").attr("date", this.format(r));
            l.text(r.getDate()), r.getMonth() != e.getMonth() && l.addClass("overlap"), (0 == r.getDay() || 6 == r.getDay()) && (l.addClass("weekend"), this.disabled.push(this.format(r)));
            var d = new Date(s.getFullYear(), s.getMonth(), s.getDate() + o);
            1 == this.inArray(this.format(d), this.disableDays) && (l.addClass("disabled"), this.disabled.push(this.format(r))), 1 == this.isBelow(this.disableBelow, this.format(d)) && (l.addClass("disabled"), this.disabled.push(this.format(r))), 1 == this.isAbove(this.disableAbove, this.format(d)) && (l.addClass("disabled"), this.disabled.push(this.format(r))), this.$days.append(l)
          }
          this.updateName(this.$month, this.monthNames[e.getMonth()]), this.updateName(this.$year, this.curMonth.getFullYear()), t("div", this.$days).click(t.proxy(function (e) {
            var i = t(e.target);
            0 == this.inArray(i.attr("date"), this.disabled) && (this.update(i.attr("date")), i.hasClass("overlap") || this.hide())
          }, this)), t("[date='" + this.format(new Date) + "']", this.$days).addClass("today")
        }
        t(".selected", this.$days).removeClass("selected"), t('[date="' + this.selectedDateStr + '"]', this.$days).addClass("selected")
      },
      inArray: function (t, e) {
        for (key in e)
          if (e[key] === t) return !0;
        return !1
      },
      isBelow: function (t, e) {
        return void 0 != t && this.parse(t).getTime() > this.parse(e).getTime()
      },
      isAbove: function (t, e) {
        return void 0 != t && this.parse(e).getTime() > this.parse(t)
      },
      selectDate: function (t) {
        void 0 === t && (t = this.parse(this.$el.val())), t || (t = this.current ? this.parse(this.current) : new Date), this.selectedDate = t, this.selectedDateStr = this.format(this.selectedDate), this.selectMonth(this.selectedDate)
      },
      update: function (t) {
        this.$el.val(t).change()
      },
      show: function (i) {
        i && i.stopPropagation(), e(this);
        var s = this.$el.offset();
        this.$picker.css({
          top: s.top + this.$el.outerHeight() + 2,
          left: s.left
        }).show(), t("html").on("keydown", this.keyHandler)
      },
      hide: function () {
        this.$picker.hide(), t("html").off("keydown", this.keyHandler)
      },
      keyHandler: function (t) {
        switch (t.keyCode) {
          case 9:
          case 27:
            return void this.hide();
          case 13:
            this.update(this.selectedDateStr), this.hide();
            break;
          case 38:
            this.ahead(0, -7);
            break;
          case 40:
            this.ahead(0, 7);
            break;
          case 37:
            this.ahead(0, -1);
            break;
          case 39:
            this.ahead(0, 1);
            break;
          default:
            return
        }
        t.preventDefault()
      },
      parse: function (t) {
        var e;
        return (e = t.match(/^(\d{4,4})-(\d{2,2})-(\d{2,2})$/)) ? new Date(e[1], e[2] - 1, e[3]) : null
      },
      format: function (t) {
        var e = (t.getMonth() + 1).toString(),
          i = t.getDate().toString();
        return 1 === e.length && (e = "0" + e), 1 === i.length && (i = "0" + i), t.getFullYear() + "-" + e + "-" + i
      },
      ahead: function (t, e) {
        this.selectDate(new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + t, this.selectedDate.getDate() + e))
      },
      proxy: function (e) {
        return this[e] = t.proxy(this[e], this), this
      },
      daysBetween: function (t, e) {
        t = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return ((e = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())) - t) / 864e5
      },
      findClosest: function (t, e, i) {
        var s = i * (Math.abs(e.getDay() - t - 7 * i) % 7);
        return new Date(e.getFullYear(), e.getMonth(), e.getDate() + s)
      },
      rangeStart: function (t) {
        return this.findClosest(this.startOfWeek, new Date(t.getFullYear(), t.getMonth()), -1)
      },
      rangeEnd: function (t) {
        return this.findClosest((this.startOfWeek - 1) % 7, new Date(t.getFullYear(), t.getMonth() + 1, 0), 1)
      }
    }, t.fn.datepicker = function (t) {
      return this.each(function () {
        new i(this, t)
      })
    }, t(function () {
      t("[data-datepicker]").datepicker(), t("html").click(e)
    }), t.fn.datepicker.DatePicker = i, t.fn.datepicker.defaults = {
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      shortDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      startOfWeek: 1
    }, t.extend(t.fn.datepicker.defaults, {
      parse: function (t) {
        var e;
        return (e = t.match(/^(\d{2,2})\.(\d{2,2})\.(\d{4,4})$/)) ? new Date(e[3], e[2] - 1, e[1]) : null
      },
      format: function (t) {
        var e = (t.getMonth() + 1).toString(),
          i = t.getDate().toString();
        return 1 === e.length && (e = "0" + e), 1 === i.length && (i = "0" + i), i + "-" + e + "-" + t.getFullYear()
      }
    })
  }(window.jQuery || window.ender), $(function () {
    $(".form_date").datetimepicker({
      timepicker: !1,
      format: "d-MM-yyyy",
      weekStart: 1,
      todayBtn: 1,
      autoclose: 1,
      todayHighlight: 1,
      startView: 2,
      minView: 2,
      forceParse: 0,
      pickerPosition: "bottom-left"
    }), $(".form_time").datetimepicker({
      datepicker: !1,
      format: "h:i",
      weekStart: 1,
      todayBtn: 1,
      autoclose: 1,
      todayHighlight: 1,
      startView: 1,
      minView: 0,
      maxView: 1,
      forceParse: 0,
      pickerPosition: "top-left"
    })
  }),
  function (t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], function (i) {
      return e(t, i)
    }) : "object" == typeof module && "object" == typeof module.exports ? module.exports = e(t, require("jquery")) : t.lity = e(t, t.jQuery || t.Zepto)
  }("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";

    function i(t) {
      var e = w();
      return A && t.length ? (t.one(A, e.resolve), setTimeout(e.resolve, 500)) : e.resolve(), e.promise()
    }

    function s(t, i, s) {
      if (1 === arguments.length) return e.extend({}, t);
      if ("string" == typeof i) {
        if (void 0 === s) return void 0 === t[i] ? null : t[i];
        t[i] = s
      } else e.extend(t, i);
      return this
    }

    function n(t) {
      for (var e, i = decodeURI(t.split("#")[0]).split("&"), s = {}, n = 0, a = i.length; n < a; n++) i[n] && (s[(e = i[n].split("="))[0]] = e[1]);
      return s
    }

    function a(t, i) {
      return t + (t.indexOf("?") > -1 ? "&" : "?") + e.param(i)
    }

    function o(t, e) {
      var i = t.indexOf("#");
      return -1 === i ? e : (i > 0 && (t = t.substr(i)), e + t)
    }

    function r(t, i) {
      var s = i.opener() && i.opener().data("lity-desc") || "Image with no description",
        n = e('<img src="' + t + '" alt="' + s + '"/>'),
        a = w(),
        o = function () {
          a.reject(function (t) {
            return e('<span class="lity-error"/>').append(t)
          }("Failed loading image"))
        };
      return n.on("load", function () {
        if (0 === this.naturalWidth) return o();
        a.resolve(n)
      }).on("error", o), a.promise()
    }

    function l(t) {
      return '<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="' + t + '"/></div>'
    }

    function d() {
      return v.documentElement.clientHeight ? v.documentElement.clientHeight : Math.round(y.height())
    }

    function h(t) {
      var e = p();
      e && (27 === t.keyCode && e.options("esc") && e.close(), 9 === t.keyCode && function (t, e) {
        var i = e.element().find(C),
          s = i.index(v.activeElement);
        t.shiftKey && s <= 0 ? (i.get(i.length - 1).focus(), t.preventDefault()) : t.shiftKey || s !== i.length - 1 || (i.get(0).focus(), t.preventDefault())
      }(t, e))
    }

    function c() {
      e.each(_, function (t, e) {
        e.resize()
      })
    }

    function u(t) {
      1 === _.unshift(t) && (b.addClass("lity-active"), y.on({
        resize: c,
        keydown: h
      })), e("body > *").not(t.element()).addClass("lity-hidden").each(function () {
        var t = e(this);
        void 0 === t.data(k) && t.data(k, t.attr(T) || null)
      }).attr(T, "true")
    }

    function f(t) {
      t.element().attr(T, "true"), 1 === _.length && (b.removeClass("lity-active"), y.off({
        resize: c,
        keydown: h
      })), ((_ = e.grep(_, function (e) {
        return t !== e
      })).length ? _[0].element() : e(".lity-hidden")).removeClass("lity-hidden").each(function () {
        var t = e(this),
          i = t.data(k);
        i ? t.attr(T, i) : t.removeAttr(T), t.removeData(k)
      })
    }

    function p() {
      return 0 === _.length ? null : _[0]
    }

    function m(t, n, a, o) {
      var r, l, h, c = this,
        p = !1,
        m = !1;
      n = e.extend({}, S, n), l = e(n.template), c.element = function () {
        return l
      }, c.opener = function () {
        return a
      }, c.options = e.proxy(s, c, n), c.handlers = e.proxy(s, c, n.handlers), c.resize = function () {
        p && !m && h.css("max-height", d() + "px").trigger("lity:resize", [c])
      }, c.close = function () {
        if (p && !m) {
          m = !0, f(c);
          var t = w();
          if (o && (v.activeElement === l[0] || e.contains(l[0], v.activeElement))) try {
            o.focus()
          } catch (t) { }
          return h.trigger("lity:close", [c]), l.removeClass("lity-opened").addClass("lity-closed"), i(h.add(l)).always(function () {
            h.trigger("lity:remove", [c]), l.remove(), l = void 0, t.resolve()
          }), t.promise()
        }
      }, r = function (t, i, s, n) {
        var a, o = "inline",
          r = e.extend({}, s);
        return n && r[n] ? (a = r[n](t, i), o = n) : (e.each(["inline", "iframe"], function (t, e) {
          delete r[e], r[e] = s[e]
        }), e.each(r, function (e, s) {
          return !s || !(!s.test || s.test(t, i)) || (!1 !== (a = s(t, i)) ? (o = e, !1) : void 0)
        })), {
          handler: o,
          content: a || ""
        }
      }(t, c, n.handlers, n.handler), l.attr(T, "false").addClass("lity-loading lity-opened lity-" + r.handler).appendTo("body").focus().on("click", "[data-lity-close]", function (t) {
        e(t.target).is("[data-lity-close]") && c.close()
      }).trigger("lity:open", [c]), u(c), e.when(r.content).always(function (t) {
        h = e(t).css("max-height", d() + "px"), l.find(".lity-loader").each(function () {
          var t = e(this);
          i(t).always(function () {
            t.remove()
          })
        }), l.removeClass("lity-loading").find(".lity-content").empty().append(h), p = !0, h.trigger("lity:ready", [c])
      })
    }

    function g(t, i, s) {
      t.preventDefault ? (t.preventDefault(), t = (s = e(this)).data("lity-target") || s.attr("href") || s.attr("src")) : s = e(s);
      var n = new m(t, e.extend({}, s.data("lity-options") || s.data("lity"), i), s, v.activeElement);
      if (!t.preventDefault) return n
    }
    var v = t.document,
      y = e(t),
      w = e.Deferred,
      b = e("html"),
      _ = [],
      T = "aria-hidden",
      k = "lity-" + T,
      C = 'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])',
      S = {
        esc: !0,
        handler: null,
        handlers: {
          image: r,
          inline: function (t, i) {
            var s, n, a;
            try {
              s = e(t)
            } catch (t) {
              return !1
            }
            return !!s.length && (n = e('<i style="display:none !important"/>'), a = s.hasClass("lity-hide"), i.element().one("lity:remove", function () {
              n.before(s).remove(), a && !s.closest(".lity-content").length && s.addClass("lity-hide")
            }), s.removeClass("lity-hide").after(n))
          },
          youtube: function (t) {
            var i = $.exec(t);
            return !!i && l(o(t, a("https://www.youtube" + (i[2] || "") + ".com/embed/" + i[4], e.extend({
              autoplay: 1
            }, n(i[5] || "")))))
          },
          vimeo: function (t) {
            var i = E.exec(t);
            return !!i && l(o(t, a("https://player.vimeo.com/video/" + i[3], e.extend({
              autoplay: 1
            }, n(i[4] || "")))))
          },
          googlemaps: function (t) {
            var e = x.exec(t);
            return !!e && l(o(t, a("https://www.google." + e[3] + "/maps?" + e[6], {
              output: e[6].indexOf("layer=c") > 0 ? "svembed" : "embed"
            })))
          },
          facebookvideo: function (t) {
            var i = M.exec(t);
            return !!i && (0 !== t.indexOf("http") && (t = "https:" + t), l(o(t, a("https://www.facebook.com/plugins/video.php?href=" + t, e.extend({
              autoplay: 1
            }, n(i[4] || ""))))))
          },
          iframe: l
        },
        template: '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'
      },
      D = /(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i,
      $ = /(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i,
      E = /(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/,
      x = /((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i,
      M = /(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i,
      A = function () {
        var t = v.createElement("div"),
          e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
          };
        for (var i in e)
          if (void 0 !== t.style[i]) return e[i];
        return !1
      }();
    return r.test = function (t) {
      return D.test(t)
    }, g.version = "@VERSION", g.options = e.proxy(s, g, S), g.handlers = e.proxy(s, g, S.handlers), g.current = p, e(v).on("click.lity", "[data-lity]", g), g
  }), lity.handlers("video", function (t) {
    if ("string" == typeof t && t.indexOf(".mp4") > 0) {
      var e = '<video style="max-width: 100%;" controls autoplay playsinline>';
      return e += '<source src="' + t + '" type="video/mp4">', e += "</video>"
    }
    return !1
  }),
  function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
  }(function (t) {
    "use strict";
    var e = window.Slick || {};
    (e = function () {
      var e = 0;
      return function (i, s) {
        var n, a = this;
        a.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: t(i),
          appendDots: t(i),
          arrows: !0,
          asNavFor: null,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (e, i) {
            return t('<button type="button" />').text(i + 1)
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: .35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3
        }, a.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1
        }, t.extend(a, a.initials), a.activeBreakpoint = null, a.animType = null, a.animProp = null, a.breakpoints = [], a.breakpointSettings = [], a.cssTransitions = !1, a.focussed = !1, a.interrupted = !1, a.hidden = "hidden", a.paused = !0, a.positionProp = null, a.respondTo = null, a.rowCount = 1, a.shouldClick = !0, a.$slider = t(i), a.$slidesCache = null, a.transformType = null, a.transitionType = null, a.visibilityChange = "visibilitychange", a.windowWidth = 0, a.windowTimer = null, n = t(i).data("slick") || {}, a.options = t.extend({}, a.defaults, s, n), a.currentSlide = a.options.initialSlide, a.originalSettings = a.options, void 0 !== document.mozHidden ? (a.hidden = "mozHidden", a.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (a.hidden = "webkitHidden", a.visibilityChange = "webkitvisibilitychange"), a.autoPlay = t.proxy(a.autoPlay, a), a.autoPlayClear = t.proxy(a.autoPlayClear, a), a.autoPlayIterator = t.proxy(a.autoPlayIterator, a), a.changeSlide = t.proxy(a.changeSlide, a), a.clickHandler = t.proxy(a.clickHandler, a), a.selectHandler = t.proxy(a.selectHandler, a), a.setPosition = t.proxy(a.setPosition, a), a.swipeHandler = t.proxy(a.swipeHandler, a), a.dragHandler = t.proxy(a.dragHandler, a), a.keyHandler = t.proxy(a.keyHandler, a), a.instanceUid = e++, a.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, a.registerBreakpoints(), a.init(!0)
      }
    }()).prototype.activateADA = function () {
      this.$slideTrack.find(".slick-active").attr({
        "aria-hidden": "false"
      }).find("a, input, button, select").attr({
        tabindex: "0"
      })
    }, e.prototype.addSlide = e.prototype.slickAdd = function (e, i, s) {
      var n = this;
      if ("boolean" == typeof i) s = i, i = null;
      else if (i < 0 || i >= n.slideCount) return !1;
      n.unload(), "number" == typeof i ? 0 === i && 0 === n.$slides.length ? t(e).appendTo(n.$slideTrack) : s ? t(e).insertBefore(n.$slides.eq(i)) : t(e).insertAfter(n.$slides.eq(i)) : !0 === s ? t(e).prependTo(n.$slideTrack) : t(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function (e, i) {
        t(i).attr("data-slick-index", e)
      }), n.$slidesCache = n.$slides, n.reinit()
    }, e.prototype.animateHeight = function () {
      var t = this;
      if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
        var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
        t.$list.animate({
          height: e
        }, t.options.speed)
      }
    }, e.prototype.animateSlide = function (e, i) {
      var s = {},
        n = this;
      n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (e = -e), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
        left: e
      }, n.options.speed, n.options.easing, i) : n.$slideTrack.animate({
        top: e
      }, n.options.speed, n.options.easing, i) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), t({
        animStart: n.currentLeft
      }).animate({
        animStart: e
      }, {
        duration: n.options.speed,
        easing: n.options.easing,
        step: function (t) {
          t = Math.ceil(t), !1 === n.options.vertical ? (s[n.animType] = "translate(" + t + "px, 0px)", n.$slideTrack.css(s)) : (s[n.animType] = "translate(0px," + t + "px)", n.$slideTrack.css(s))
        },
        complete: function () {
          i && i.call()
        }
      })) : (n.applyTransition(), e = Math.ceil(e), !1 === n.options.vertical ? s[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : s[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(s), i && setTimeout(function () {
        n.disableTransition(), i.call()
      }, n.options.speed))
    }, e.prototype.getNavTarget = function () {
      var e = this.options.asNavFor;
      return e && null !== e && (e = t(e).not(this.$slider)), e
    }, e.prototype.asNavFor = function (e) {
      var i = this.getNavTarget();
      null !== i && "object" == typeof i && i.each(function () {
        var i = t(this).slick("getSlick");
        i.unslicked || i.slideHandler(e, !0)
      })
    }, e.prototype.applyTransition = function (t) {
      var e = this,
        i = {};
      !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.autoPlay = function () {
      var t = this;
      t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function () {
      this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function () {
      var t = this,
        e = t.currentSlide + t.options.slidesToScroll;
      t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
    }, e.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
        "aria-disabled": "true",
        tabindex: "-1"
      }))
    }, e.prototype.buildDots = function () {
      var e, i, s = this;
      if (!0 === s.options.dots) {
        for (s.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(s.options.dotsClass), e = 0; e <= s.getDotCount(); e += 1) i.append(t("<li />").append(s.options.customPaging.call(this, s, e)));
        s.$dots = i.appendTo(s.options.appendDots), s.$dots.find("li").first().addClass("slick-active")
      }
    }, e.prototype.buildOut = function () {
      var e = this;
      e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, i) {
        t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
      }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function () {
      var t, e, i, s, n, a, o, r = this;
      if (s = document.createDocumentFragment(), a = r.$slider.children(), r.options.rows > 1) {
        for (o = r.options.slidesPerRow * r.options.rows, n = Math.ceil(a.length / o), t = 0; t < n; t++) {
          var l = document.createElement("div");
          for (e = 0; e < r.options.rows; e++) {
            var d = document.createElement("div");
            for (i = 0; i < r.options.slidesPerRow; i++) {
              var h = t * o + (e * r.options.slidesPerRow + i);
              a.get(h) && d.appendChild(a.get(h))
            }
            l.appendChild(d)
          }
          s.appendChild(l)
        }
        r.$slider.empty().append(s), r.$slider.children().children().children().css({
          width: 100 / r.options.slidesPerRow + "%",
          display: "inline-block"
        })
      }
    }, e.prototype.checkResponsive = function (e, i) {
      var s, n, a, o = this,
        r = !1,
        l = o.$slider.width(),
        d = window.innerWidth || t(window).width();
      if ("window" === o.respondTo ? a = d : "slider" === o.respondTo ? a = l : "min" === o.respondTo && (a = Math.min(d, l)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive) {
        n = null;
        for (s in o.breakpoints) o.breakpoints.hasOwnProperty(s) && (!1 === o.originalSettings.mobileFirst ? a < o.breakpoints[s] && (n = o.breakpoints[s]) : a > o.breakpoints[s] && (n = o.breakpoints[s]));
        null !== n ? null !== o.activeBreakpoint ? (n !== o.activeBreakpoint || i) && (o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick(n) : (o.options = t.extend({}, o.originalSettings, o.breakpointSettings[n]), !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e)), r = n) : (o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick(n) : (o.options = t.extend({}, o.originalSettings, o.breakpointSettings[n]), !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e)), r = n) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e), r = n), e || !1 === r || o.$slider.trigger("breakpoint", [o, r])
      }
    }, e.prototype.changeSlide = function (e, i) {
      var s, n, a, o = this,
        r = t(e.currentTarget);
      switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), a = o.slideCount % o.options.slidesToScroll != 0, s = a ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
        case "previous":
          n = 0 === s ? o.options.slidesToScroll : o.options.slidesToShow - s, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - n, !1, i);
          break;
        case "next":
          n = 0 === s ? o.options.slidesToScroll : s, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + n, !1, i);
          break;
        case "index":
          var l = 0 === e.data.index ? 0 : e.data.index || r.index() * o.options.slidesToScroll;
          o.slideHandler(o.checkNavigable(l), !1, i), r.children().trigger("focus");
          break;
        default:
          return
      }
    }, e.prototype.checkNavigable = function (t) {
      var e, i;
      if (e = this.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
      else
        for (var s in e) {
          if (t < e[s]) {
            t = i;
            break
          }
          i = e[s]
        }
      return t
    }, e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function () {
      var t, e = this;
      e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t))
    }, e.prototype.clickHandler = function (t) {
      !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, e.prototype.destroy = function (e) {
      var i = this;
      i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
        t(this).attr("style", t(this).data("originalStyling"))
      }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
    }, e.prototype.disableTransition = function (t) {
      var e = this,
        i = {};
      i[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.fadeSlide = function (t, e) {
      var i = this;
      !1 === i.cssTransitions ? (i.$slides.eq(t).css({
        zIndex: i.options.zIndex
      }), i.$slides.eq(t).animate({
        opacity: 1
      }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
        opacity: 1,
        zIndex: i.options.zIndex
      }), e && setTimeout(function () {
        i.disableTransition(t), e.call()
      }, i.options.speed))
    }, e.prototype.fadeSlideOut = function (t) {
      var e = this;
      !1 === e.cssTransitions ? e.$slides.eq(t).animate({
        opacity: 0,
        zIndex: e.options.zIndex - 2
      }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
        opacity: 0,
        zIndex: e.options.zIndex - 2
      }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
      var e = this;
      null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function () {
      var e = this;
      e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (i) {
        i.stopImmediatePropagation();
        var s = t(this);
        setTimeout(function () {
          e.options.pauseOnFocus && (e.focussed = s.is(":focus"), e.autoPlay())
        }, 0)
      })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
      return this.currentSlide
    }, e.prototype.getDotCount = function () {
      var t = this,
        e = 0,
        i = 0,
        s = 0;
      if (!0 === t.options.infinite)
        if (t.slideCount <= t.options.slidesToShow) ++s;
        else
          for (; e < t.slideCount;) ++s, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
      else if (!0 === t.options.centerMode) s = t.slideCount;
      else if (t.options.asNavFor)
        for (; e < t.slideCount;) ++s, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
      else s = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
      return s - 1
    }, e.prototype.getLeft = function (t) {
      var e, i, s, n, a = this,
        o = 0;
      return a.slideOffset = 0, i = a.$slides.first().outerHeight(!0), !0 === a.options.infinite ? (a.slideCount > a.options.slidesToShow && (a.slideOffset = a.slideWidth * a.options.slidesToShow * -1, n = -1, !0 === a.options.vertical && !0 === a.options.centerMode && (2 === a.options.slidesToShow ? n = -1.5 : 1 === a.options.slidesToShow && (n = -2)), o = i * a.options.slidesToShow * n), a.slideCount % a.options.slidesToScroll != 0 && t + a.options.slidesToScroll > a.slideCount && a.slideCount > a.options.slidesToShow && (t > a.slideCount ? (a.slideOffset = (a.options.slidesToShow - (t - a.slideCount)) * a.slideWidth * -1, o = (a.options.slidesToShow - (t - a.slideCount)) * i * -1) : (a.slideOffset = a.slideCount % a.options.slidesToScroll * a.slideWidth * -1, o = a.slideCount % a.options.slidesToScroll * i * -1))) : t + a.options.slidesToShow > a.slideCount && (a.slideOffset = (t + a.options.slidesToShow - a.slideCount) * a.slideWidth, o = (t + a.options.slidesToShow - a.slideCount) * i), a.slideCount <= a.options.slidesToShow && (a.slideOffset = 0, o = 0), !0 === a.options.centerMode && a.slideCount <= a.options.slidesToShow ? a.slideOffset = a.slideWidth * Math.floor(a.options.slidesToShow) / 2 - a.slideWidth * a.slideCount / 2 : !0 === a.options.centerMode && !0 === a.options.infinite ? a.slideOffset += a.slideWidth * Math.floor(a.options.slidesToShow / 2) - a.slideWidth : !0 === a.options.centerMode && (a.slideOffset = 0, a.slideOffset += a.slideWidth * Math.floor(a.options.slidesToShow / 2)), e = !1 === a.options.vertical ? t * a.slideWidth * -1 + a.slideOffset : t * i * -1 + o, !0 === a.options.variableWidth && (s = a.slideCount <= a.options.slidesToShow || !1 === a.options.infinite ? a.$slideTrack.children(".slick-slide").eq(t) : a.$slideTrack.children(".slick-slide").eq(t + a.options.slidesToShow), e = !0 === a.options.rtl ? s[0] ? -1 * (a.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, !0 === a.options.centerMode && (s = a.slideCount <= a.options.slidesToShow || !1 === a.options.infinite ? a.$slideTrack.children(".slick-slide").eq(t) : a.$slideTrack.children(".slick-slide").eq(t + a.options.slidesToShow + 1), e = !0 === a.options.rtl ? s[0] ? -1 * (a.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, e += (a.$list.width() - s.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function (t) {
      return this.options[t]
    }, e.prototype.getNavigableIndexes = function () {
      var t, e = this,
        i = 0,
        s = 0,
        n = [];
      for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, s = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) n.push(i), i = s + e.options.slidesToScroll, s += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      return n
    }, e.prototype.getSlick = function () {
      return this
    }, e.prototype.getSlideCount = function () {
      var e, i, s = this;
      return i = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function (n, a) {
        if (a.offsetLeft - i + t(a).outerWidth() / 2 > -1 * s.swipeLeft) return e = a, !1
      }), Math.abs(t(e).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
      this.changeSlide({
        data: {
          message: "index",
          index: parseInt(t)
        }
      }, e)
    }, e.prototype.init = function (e) {
      var i = this;
      t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, e.prototype.initADA = function () {
      var e = this,
        i = Math.ceil(e.slideCount / e.options.slidesToShow),
        s = e.getNavigableIndexes().filter(function (t) {
          return t >= 0 && t < e.slideCount
        });
      e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
        "aria-hidden": "true",
        tabindex: "-1"
      }).find("a, input, button, select").attr({
        tabindex: "-1"
      }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (i) {
        var n = s.indexOf(i);
        t(this).attr({
          role: "tabpanel",
          id: "slick-slide" + e.instanceUid + i,
          tabindex: -1
        }), -1 !== n && t(this).attr({
          "aria-describedby": "slick-slide-control" + e.instanceUid + n
        })
      }), e.$dots.attr("role", "tablist").find("li").each(function (n) {
        var a = s[n];
        t(this).attr({
          role: "presentation"
        }), t(this).find("button").first().attr({
          role: "tab",
          id: "slick-slide-control" + e.instanceUid + n,
          "aria-controls": "slick-slide" + e.instanceUid + a,
          "aria-label": n + 1 + " of " + i,
          "aria-selected": null,
          tabindex: "-1"
        })
      }).eq(e.currentSlide).find("button").attr({
        "aria-selected": "true",
        tabindex: "0"
      }).end());
      for (var n = e.currentSlide, a = n + e.options.slidesToShow; n < a; n++) e.$slides.eq(n).attr("tabindex", 0);
      e.activateADA()
    }, e.prototype.initArrowEvents = function () {
      var t = this;
      !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
        message: "previous"
      }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
        message: "next"
      }, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
    }, e.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots && (t("li", e.$dots).on("click.slick", {
        message: "index"
      }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
        action: "start"
      }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
        action: "move"
      }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
        action: "end"
      }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
        action: "end"
      }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
    }, e.prototype.initUI = function () {
      var t = this;
      !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }, e.prototype.keyHandler = function (t) {
      var e = this;
      t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
        data: {
          message: !0 === e.options.rtl ? "next" : "previous"
        }
      }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
        data: {
          message: !0 === e.options.rtl ? "previous" : "next"
        }
      }))
    }, e.prototype.lazyLoad = function () {
      function e(e) {
        t("img[data-lazy]", e).each(function () {
          var e = t(this),
            i = t(this).attr("data-lazy"),
            s = t(this).attr("data-srcset"),
            n = t(this).attr("data-sizes") || a.$slider.attr("data-sizes"),
            o = document.createElement("img");
          o.onload = function () {
            e.animate({
              opacity: 0
            }, 100, function () {
              s && (e.attr("srcset", s), n && e.attr("sizes", n)), e.attr("src", i).animate({
                opacity: 1
              }, 200, function () {
                e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
              }), a.$slider.trigger("lazyLoaded", [a, e, i])
            })
          }, o.onerror = function () {
            e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, e, i])
          }, o.src = i
        })
      }
      var i, s, n, a = this;
      if (!0 === a.options.centerMode ? !0 === a.options.infinite ? n = (s = a.currentSlide + (a.options.slidesToShow / 2 + 1)) + a.options.slidesToShow + 2 : (s = Math.max(0, a.currentSlide - (a.options.slidesToShow / 2 + 1)), n = a.options.slidesToShow / 2 + 1 + 2 + a.currentSlide) : (s = a.options.infinite ? a.options.slidesToShow + a.currentSlide : a.currentSlide, n = Math.ceil(s + a.options.slidesToShow), !0 === a.options.fade && (s > 0 && s--, n <= a.slideCount && n++)), i = a.$slider.find(".slick-slide").slice(s, n), "anticipated" === a.options.lazyLoad)
        for (var o = s - 1, r = n, l = a.$slider.find(".slick-slide"), d = 0; d < a.options.slidesToScroll; d++) o < 0 && (o = a.slideCount - 1), i = (i = i.add(l.eq(o))).add(l.eq(r)), o--, r++;
      e(i), a.slideCount <= a.options.slidesToShow ? e(a.$slider.find(".slick-slide")) : a.currentSlide >= a.slideCount - a.options.slidesToShow ? e(a.$slider.find(".slick-cloned").slice(0, a.options.slidesToShow)) : 0 === a.currentSlide && e(a.$slider.find(".slick-cloned").slice(-1 * a.options.slidesToShow))
    }, e.prototype.loadSlider = function () {
      var t = this;
      t.setPosition(), t.$slideTrack.css({
        opacity: 1
      }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function () {
      this.changeSlide({
        data: {
          message: "next"
        }
      })
    }, e.prototype.orientationChange = function () {
      this.checkResponsive(), this.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function () {
      this.autoPlayClear(), this.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function () {
      var t = this;
      t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
    }, e.prototype.postSlide = function (e) {
      var i = this;
      i.unslicked || (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
    }, e.prototype.prev = e.prototype.slickPrev = function () {
      this.changeSlide({
        data: {
          message: "previous"
        }
      })
    }, e.prototype.preventDefault = function (t) {
      t.preventDefault()
    }, e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var i, s, n, a, o, r = this,
        l = t("img[data-lazy]", r.$slider);
      l.length ? (i = l.first(), s = i.attr("data-lazy"), n = i.attr("data-srcset"), a = i.attr("data-sizes") || r.$slider.attr("data-sizes"), (o = document.createElement("img")).onload = function () {
        n && (i.attr("srcset", n), a && i.attr("sizes", a)), i.attr("src", s).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, i, s]), r.progressiveLazyLoad()
      }, o.onerror = function () {
        e < 3 ? setTimeout(function () {
          r.progressiveLazyLoad(e + 1)
        }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, i, s]), r.progressiveLazyLoad())
      }, o.src = s) : r.$slider.trigger("allImagesLoaded", [r])
    }, e.prototype.refresh = function (e) {
      var i, s, n = this;
      s = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > s && (n.currentSlide = s), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), i = n.currentSlide, n.destroy(!0), t.extend(n, n.initials, {
        currentSlide: i
      }), n.init(), e || n.changeSlide({
        data: {
          message: "index",
          index: i
        }
      }, !1)
    }, e.prototype.registerBreakpoints = function () {
      var e, i, s, n = this,
        a = n.options.responsive || null;
      if ("array" === t.type(a) && a.length) {
        n.respondTo = n.options.respondTo || "window";
        for (e in a)
          if (s = n.breakpoints.length - 1, a.hasOwnProperty(e)) {
            for (i = a[e].breakpoint; s >= 0;) n.breakpoints[s] && n.breakpoints[s] === i && n.breakpoints.splice(s, 1), s--;
            n.breakpoints.push(i), n.breakpointSettings[i] = a[e].settings
          } n.breakpoints.sort(function (t, e) {
            return n.options.mobileFirst ? t - e : e - t
          })
      }
    }, e.prototype.reinit = function () {
      var e = this;
      e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function () {
      var e = this;
      t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
        e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
      }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, i) {
      var s = this;
      if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : s.slideCount - 1 : !0 === e ? --t : t, s.slideCount < 1 || t < 0 || t > s.slideCount - 1) return !1;
      s.unload(), !0 === i ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(t).remove(), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slidesCache = s.$slides, s.reinit()
    }, e.prototype.setCSS = function (t) {
      var e, i, s = this,
        n = {};
      !0 === s.options.rtl && (t = -t), e = "left" == s.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == s.positionProp ? Math.ceil(t) + "px" : "0px", n[s.positionProp] = t, !1 === s.transformsEnabled ? s.$slideTrack.css(n) : (n = {}, !1 === s.cssTransitions ? (n[s.animType] = "translate(" + e + ", " + i + ")", s.$slideTrack.css(n)) : (n[s.animType] = "translate3d(" + e + ", " + i + ", 0px)", s.$slideTrack.css(n)))
    }, e.prototype.setDimensions = function () {
      var t = this;
      !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
        padding: "0px " + t.options.centerPadding
      }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
        padding: t.options.centerPadding + " 0px"
      })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
      var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
      !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, e.prototype.setFade = function () {
      var e, i = this;
      i.$slides.each(function (s, n) {
        e = i.slideWidth * s * -1, !0 === i.options.rtl ? t(n).css({
          position: "relative",
          right: e,
          top: 0,
          zIndex: i.options.zIndex - 2,
          opacity: 0
        }) : t(n).css({
          position: "relative",
          left: e,
          top: 0,
          zIndex: i.options.zIndex - 2,
          opacity: 0
        })
      }), i.$slides.eq(i.currentSlide).css({
        zIndex: i.options.zIndex - 1,
        opacity: 1
      })
    }, e.prototype.setHeight = function () {
      var t = this;
      if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
        var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
        t.$list.css("height", e)
      }
    }, e.prototype.setOption = e.prototype.slickSetOption = function () {
      var e, i, s, n, a, o = this,
        r = !1;
      if ("object" === t.type(arguments[0]) ? (s = arguments[0], r = arguments[1], a = "multiple") : "string" === t.type(arguments[0]) && (s = arguments[0], n = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? a = "responsive" : void 0 !== arguments[1] && (a = "single")), "single" === a) o.options[s] = n;
      else if ("multiple" === a) t.each(s, function (t, e) {
        o.options[t] = e
      });
      else if ("responsive" === a)
        for (i in n)
          if ("array" !== t.type(o.options.responsive)) o.options.responsive = [n[i]];
          else {
            for (e = o.options.responsive.length - 1; e >= 0;) o.options.responsive[e].breakpoint === n[i].breakpoint && o.options.responsive.splice(e, 1), e--;
            o.options.responsive.push(n[i])
          } r && (o.unload(), o.reinit())
    }, e.prototype.setPosition = function () {
      var t = this;
      t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, e.prototype.setProps = function () {
      var t = this,
        e = document.body.style;
      t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }, e.prototype.setSlideClasses = function (t) {
      var e, i, s, n, a = this;
      if (i = a.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), a.$slides.eq(t).addClass("slick-current"), !0 === a.options.centerMode) {
        var o = a.options.slidesToShow % 2 == 0 ? 1 : 0;
        e = Math.floor(a.options.slidesToShow / 2), !0 === a.options.infinite && (t >= e && t <= a.slideCount - 1 - e ? a.$slides.slice(t - e + o, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (s = a.options.slidesToShow + t, i.slice(s - e + 1 + o, s + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - a.options.slidesToShow).addClass("slick-center") : t === a.slideCount - 1 && i.eq(a.options.slidesToShow).addClass("slick-center")), a.$slides.eq(t).addClass("slick-center")
      } else t >= 0 && t <= a.slideCount - a.options.slidesToShow ? a.$slides.slice(t, t + a.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= a.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (n = a.slideCount % a.options.slidesToShow, s = !0 === a.options.infinite ? a.options.slidesToShow + t : t, a.options.slidesToShow == a.options.slidesToScroll && a.slideCount - t < a.options.slidesToShow ? i.slice(s - (a.options.slidesToShow - n), s + n).addClass("slick-active").attr("aria-hidden", "false") : i.slice(s, s + a.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
      "ondemand" !== a.options.lazyLoad && "anticipated" !== a.options.lazyLoad || a.lazyLoad()
    }, e.prototype.setupInfinite = function () {
      var e, i, s, n = this;
      if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (i = null, n.slideCount > n.options.slidesToShow)) {
        for (s = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - s; e -= 1) i = e - 1, t(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
        for (e = 0; e < s + n.slideCount; e += 1) i = e, t(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
        n.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
          t(this).attr("id", "")
        })
      }
    }, e.prototype.interrupt = function (t) {
      t || this.autoPlay(), this.interrupted = t
    }, e.prototype.selectHandler = function (e) {
      var i = this,
        s = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
        n = parseInt(s.attr("data-slick-index"));
      n || (n = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(n, !1, !0) : i.slideHandler(n)
    }, e.prototype.slideHandler = function (t, e, i) {
      var s, n, a, o, r, l = null,
        d = this;
      if (e = e || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === t))
        if (!1 === e && d.asNavFor(t), s = t, l = d.getLeft(s), o = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? o : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (t < 0 || t > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (s = d.currentSlide, !0 !== i ? d.animateSlide(o, function () {
          d.postSlide(s)
        }) : d.postSlide(s));
        else if (!1 === d.options.infinite && !0 === d.options.centerMode && (t < 0 || t > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (s = d.currentSlide, !0 !== i ? d.animateSlide(o, function () {
          d.postSlide(s)
        }) : d.postSlide(s));
        else {
          if (d.options.autoplay && clearInterval(d.autoPlayTimer), n = s < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + s : s >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : s - d.slideCount : s, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, n]), a = d.currentSlide, d.currentSlide = n, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (r = (r = d.getNavTarget()).slick("getSlick")).slideCount <= r.options.slidesToShow && r.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== i ? (d.fadeSlideOut(a), d.fadeSlide(n, function () {
            d.postSlide(n)
          })) : d.postSlide(n), void d.animateHeight();
          !0 !== i ? d.animateSlide(l, function () {
            d.postSlide(n)
          }) : d.postSlide(n)
        }
    }, e.prototype.startLoad = function () {
      var t = this;
      !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function () {
      var t, e, i, s, n = this;
      return t = n.touchObject.startX - n.touchObject.curX, e = n.touchObject.startY - n.touchObject.curY, i = Math.atan2(e, t), (s = Math.round(180 * i / Math.PI)) < 0 && (s = 360 - Math.abs(s)), s <= 45 && s >= 0 ? !1 === n.options.rtl ? "left" : "right" : s <= 360 && s >= 315 ? !1 === n.options.rtl ? "left" : "right" : s >= 135 && s <= 225 ? !1 === n.options.rtl ? "right" : "left" : !0 === n.options.verticalSwiping ? s >= 35 && s <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function (t) {
      var e, i, s = this;
      if (s.dragging = !1, s.swiping = !1, s.scrolling) return s.scrolling = !1, !1;
      if (s.interrupted = !1, s.shouldClick = !(s.touchObject.swipeLength > 10), void 0 === s.touchObject.curX) return !1;
      if (!0 === s.touchObject.edgeHit && s.$slider.trigger("edge", [s, s.swipeDirection()]), s.touchObject.swipeLength >= s.touchObject.minSwipe) {
        switch (i = s.swipeDirection()) {
          case "left":
          case "down":
            e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide + s.getSlideCount()) : s.currentSlide + s.getSlideCount(), s.currentDirection = 0;
            break;
          case "right":
          case "up":
            e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide - s.getSlideCount()) : s.currentSlide - s.getSlideCount(), s.currentDirection = 1
        }
        "vertical" != i && (s.slideHandler(e), s.touchObject = {}, s.$slider.trigger("swipe", [s, i]))
      } else s.touchObject.startX !== s.touchObject.curX && (s.slideHandler(s.currentSlide), s.touchObject = {})
    }, e.prototype.swipeHandler = function (t) {
      var e = this;
      if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
        case "start":
          e.swipeStart(t);
          break;
        case "move":
          e.swipeMove(t);
          break;
        case "end":
          e.swipeEnd(t)
      }
    }, e.prototype.swipeMove = function (t) {
      var e, i, s, n, a, o, r = this;
      return a = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!r.dragging || r.scrolling || a && 1 !== a.length) && (e = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== a ? a[0].pageX : t.clientX, r.touchObject.curY = void 0 !== a ? a[0].pageY : t.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), o = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2))), !r.options.verticalSwiping && !r.swiping && o > 4 ? (r.scrolling = !0, !1) : (!0 === r.options.verticalSwiping && (r.touchObject.swipeLength = o), i = r.swipeDirection(), void 0 !== t.originalEvent && r.touchObject.swipeLength > 4 && (r.swiping = !0, t.preventDefault()), n = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), !0 === r.options.verticalSwiping && (n = r.touchObject.curY > r.touchObject.startY ? 1 : -1), s = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, !1 === r.options.infinite && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (s = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = e + s * n : r.swipeLeft = e + s * (r.$list.height() / r.listWidth) * n, !0 === r.options.verticalSwiping && (r.swipeLeft = e + s * n), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))))
    }, e.prototype.swipeStart = function (t) {
      var e, i = this;
      if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
      void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
      var t = this;
      null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, e.prototype.unload = function () {
      var e = this;
      t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function (t) {
      var e = this;
      e.$slider.trigger("unslick", [e, t]), e.destroy()
    }, e.prototype.updateArrows = function () {
      var t = this;
      Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function () {
      var t = this;
      null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function () {
      var t = this;
      t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
    }, t.fn.slick = function () {
      var t, i, s = this,
        n = arguments[0],
        a = Array.prototype.slice.call(arguments, 1),
        o = s.length;
      for (t = 0; t < o; t++)
        if ("object" == typeof n || void 0 === n ? s[t].slick = new e(s[t], n) : i = s[t].slick[n].apply(s[t].slick, a), void 0 !== i) return i;
      return s
    }
  }), document.addEventListener("DOMContentLoaded", function () {
    function t() {
      e && clearTimeout(e), e = setTimeout(function () {
        for (var e = window.pageYOffset, s = 0; s < i.length; s++) i[s].offsetTop < window.innerHeight + e && (i[s].src = i[s].dataset.src, i[s].classList.remove("lazy"));
        0 == i.length && (document.removeEventListener("scroll", t), window.removeEventListener("resize", t), window.removeEventListener("orientationChange", t))
      }, 20)
    }
    var e, i = document.querySelectorAll(".lazy");
    document.addEventListener("scroll", t), window.addEventListener("resize", t), window.addEventListener("orientationChange", t)
  });
var path = "/application/themes/C5/";
"localhost" !== location.hostname && "127.0.0.1" !== location.hostname && "" !== location.hostname || (path = "");
var locations = [];
$(".map_wrapper .btns a").each(function (t, e) {
  locations.push({
    lat: $(e).attr("data-lat"),
    lng: $(e).attr("data-lng"),
    name: $(e).text()
  })
}), $.fn.isInViewport = function () {
  var t = $(this).offset().top,
    e = t + $(this).outerHeight(),
    i = $(window).scrollTop(),
    s = i + $(window).height();
  return e > i && t < s
};
var map_load = !1;
$(window).on("resize scroll", function (t) {
  $("#location_map").isInViewport() && ($(window).unbind("resize"), map_load || init_map(), map_load = !0)
}), $(document).ready(function () {
  function t() {
    $(window).width() < 767 ? $(".stakeholder .box .list").each(function () {
      const t = $(this).closest(".box").attr("href");
      $(this).prependTo(t)
    }) : $(".stakeholder .tab-pane .list").each(function () {
      const t = $(this).closest(".tab-pane").attr("aria-labelledby");
      $(this).appendTo("#" + t)
    })
  }
  $(window).width() > 991 && $(window).scroll(function () {
    $(window).scrollTop() >= $(".default_sticky").attr("data-top") ? $(".default_sticky").addClass("affix") : $(".default_sticky").removeClass("affix")
  }), $("ul.navigation").clone().appendTo("#mobile_nav"), $(".box").on("click", function () {
    $(".box").removeClass("active"), $(this).addClass("active");
    const t = $(this).attr("href");
    $(".tab-pane").removeClass("show active"), $(t).addClass("show active")
  }), t(), $(window).resize(t), $("#mobile_nav ul ul").length > 0 && $("#mobile_nav ul ul ").before(''), $("#myNavbar ul ul").length > 0 && $("#myNavbar ul ul ").before(''), $(".menu_expander").click(function () {
    $("html").toggleClass("menu_open"), $(this).next().slideToggle(), $(this).toggleClass("toggled"), $(this).parent().siblings().find("ul").slideUp(), $(this).parent().siblings().find("em").removeClass("toggled")
  }), $(".humburger_menu").click(function () {
    $(".navigation").toggleClass("expand")
  }), $(window).width() < 769 && ($(window).on("scroll", function () {
    window.pageYOffset > 720 ? ($("#scroll-to, .humburger_menu").addClass("sticky"), $(".referral .btn").addClass("hide"), $(".responsive_header .header_top .top .btns>a.fixd").addClass("hide")) : ($("#scroll-to, .humburger_menu").removeClass("sticky"), $(".referral .btn").removeClass("hide"), $(".responsive_header .header_top .top .btns>a.fixd").removeClass("hide"))
  }), $(document).on("click", ".humburger_menu.sticky", function (t) {
    t.preventDefault(), $("body, html").animate({
      scrollTop: 0
    })
  })), $(".sticky_button").on("click", function () {
    $(".nav_form").toggleClass("open"), $(this).hide(), $(".datetimepicker").addClass("top-left")
  }), $(".close_me").on("click", function () {
    $(".nav_form").toggleClass("open"), $(".sticky_button").show(), $(".datetimepicker").removeClass("top-left")
  }), $(".menu").on("click", function () {
    $(".header").toggleClass("show"), $(".navigation").toggleClass("show"), $(this).toggleClass("close_btn")
  }), $(".panel-collapse").on("show.bs.collapse", function () {
    $(this).siblings(".panel-heading").addClass("active")
  }), $(".panel-collapse").on("hide.bs.collapse", function () {
    $(this).siblings(".panel-heading").removeClass("active")
  }), $("#accordion").on("show.bs.collapse", function () {
    $("#accordion .in").collapse("hide")
  }), $(document).on("click", ".goto", function (t) {
    var e = $(this).attr("href"),
      i = $(e);
    if (0 !== i.length) {
      t.preventDefault();
      var s = i.offset().top;
      $("body, html").animate({
        scrollTop: s
      })
    }
  }), $(".slider").slick({
    autoplay: !0,
    dots: !0,
    arrows: !1,
    fade: !0,
    speed: 1e3,
    customPaging: function (t, e) {
      $(t.$slides[e]).data();
      return '<a class="dot">' + (e + 1) + "</a>"
    },
    responsive: [{
      breakpoint: 767,
      settings: {}
    }]
  }), $(".slider_invisalign").slick({
    dots: !0
  }), $(".bf_af_slider").slick({
    dots: !0,
    slidesToShow: 3,
    centerMode: !0,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        centerMode: !1
      }
    }]
  }), $(".slider_treat").slick({
    dots: !0,
    slidesToShow: 3,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 1
      }
    }]
  }), $(".accordion_container .item h3").append("<span class=\"plusminus\"><em class='fa-chevron-down'></em></span> "), $(".accordion_container .item h3").click(function () {
    $(".accordion_container .item").removeClass("active"), $(this).parent().addClass("active"), $(".accordion_body").is(":visible") && ($(".accordion_body").slideUp(300), $(".plusminus").html('<em class="fa-chevron-down"></em>')), $(this).next(".accordion_body").is(":visible") ? ($(this).next(".accordion_body").slideUp(300), $(".accordion_container .item").removeClass("active"), $(this).children(".plusminus").html('<em class="fa-chevron-down"></em>')) : ($(this).next(".accordion_body").slideDown(300), $(this).children(".plusminus").html('<em class="fa-chevron-up"></em>'))
  }), $(".update_form_data").on("click", function () {
    if ($(this).attr("thanks")) {
      var t = $(this).attr("thanks");
      $(".thanks").val(""), $(".thanks").val(t)
    }
    if ($(this).attr("key")) {
      var e = $(this).attr("key");
      $(".key").val(""), $(".key").val(e)
    }
    if ($(this).attr("accountid")) {
      var i = $(this).attr("accountid");
      $(".accountid").val(""), $(".accountid").val(i)
    }
    if ($(this).attr("email")) {
      var s = $(this).attr("email");
      $(".email").val(""), $(".email").val(s)
    }
  }), _icons = $("#header_icons").html(), $("#footer_icons").empty(), $("#footer_icons").html(_icons), $(".nav-link,.smooth_link").click(function () {
    _target = $(this).attr("href"), $("html, body").animate({
      scrollTop: $(_target).offset().top
    }, 2e3)
  }), $(".btn_popup_expand").on("click", function () {
    $(this).hide()
  }), $(".popup_title").on("click", function () {
    _title = $(this).attr("title"), _target = $(this).attr("target"), $(_target).empty(), $(_target).html(_title)
  })
}), $(document).ready(function () {
  $(".update_form_data").on("click", function () {
    if ($(this).attr("thanks")) {
      var t = $(this).attr("thanks");
      $(".thanks").val(""), $(".thanks").val(t)
    }
    if ($(this).attr("key")) {
      var e = $(this).attr("key");
      $(".key").val(""), $(".key").val(e)
    }
    if ($(this).attr("accountid")) {
      var i = $(this).attr("accountid");
      $(".accountid").val(""), $(".accountid").val(i)
    }
    if ($(this).attr("email")) {
      var s = $(this).attr("email");
      $(".email").val(""), $(".email").val(s)
    }
  })
}), $(document).on("change", ".update_form_data_select", function () {
  var t = $(this).val(),
    e = $(this).attr("rel");
  if ($(e).find("." + t).attr("thanks")) {
    var i = $(e).find("." + t).attr("thanks");
    $(".thanks").val(""), $(".thanks").val(i)
  }
  if ($(e).find("." + t).attr("key")) {
    var s = $(e).find("." + t).attr("key");
    $(".key").val(""), $(".key").val(s)
  }
  if ($(e).find("." + t).attr("accountid")) {
    var n = $(e).find("." + t).attr("accountid");
    $(".accountid").val(""), $(".accountid").val(n)
  }
  if ($(e).find("." + t).attr("email")) {
    var a = $(e).find("." + t).attr("email");
    $(".email").val(""), $(".email").val(a)
  }
}), $(document).ready(function () {
  $(".change_practice_logo").on("click", function () {
    _target = $(this).attr("target"), _source = $(this).attr("rel"), $(_target).attr("src", _source)
  })
}), $(document).ready(function () {
  $(".update_form_data").on("click", function () {
    if ($(this).attr("thanks")) {
      var t = $(this).attr("thanks");
      $(".thanks").val(""), $(".thanks").val(t)
    }
    if ($(this).attr("key")) {
      var e = $(this).attr("key");
      $(".key").val(""), $(".key").val(e)
    }
    if ($(this).attr("accountid")) {
      var i = $(this).attr("accountid");
      $(".accountid").val(""), $(".accountid").val(i)
    }
    if ($(this).attr("email")) {
      var s = $(this).attr("email");
      $(".email").val(""), $(".email").val(s)
    }
  })
}), $(document).on("change", ".update_form_data_select", function () {
  var t = $(this).val(),
    e = $(this).attr("rel");
  if ($(e).find("." + t).attr("thanks")) {
    var i = $(e).find("." + t).attr("thanks");
    $(".thanks").val(""), $(".thanks").val(i)
  }
  if ($(e).find("." + t).attr("key")) {
    var s = $(e).find("." + t).attr("key");
    $(".key").val(""), $(".key").val(s)
  }
  if ($(e).find("." + t).attr("accountid")) {
    var n = $(e).find("." + t).attr("accountid");
    $(".accountid").val(""), $(".accountid").val(n)
  }
  if ($(e).find("." + t).attr("email")) {
    var a = $(e).find("." + t).attr("email");
    $(".email").val(""), $(".email").val(a)
  }
}), $(".hero_form input").focus(function () {
  $(this).parents(".form-group").addClass("focus")
}), $(".hero_form input").blur(function () {
  $(this).val() || $(this).parents(".form-group").removeClass("focus")
});