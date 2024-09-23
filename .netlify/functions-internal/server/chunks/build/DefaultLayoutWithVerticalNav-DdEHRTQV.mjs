import { _ as __nuxt_component_0 } from './nuxt-link-D-x2kIQw.mjs';
import { defineComponent, ref, h, useSSRContext, watch, createVNode, resolveDynamicComponent, mergeProps, unref, withCtx, renderSlot, resolveComponent } from 'vue';
import { ssrRenderVNode, ssrRenderSlot, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import _sfc_main$5 from './NavItems-Dq2o-QeA.mjs';
import { l as logo } from './logo-Cki8HXon.mjs';
import { aT as useRoute$1, w as useDisplay, a as VIcon } from './server.mjs';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useToggle, s as syncRef, _ as _sfc_main$3 } from './NavbarThemeSwitcher-Bu_1DFfB.mjs';
import Footer from './Footer-D0b96xV5.mjs';
import _sfc_main$4 from './UserProfile-ecgS5-pQ.mjs';
import { V as VSpacer } from './VSpacer-DIpTA8q-.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-devtools-stub';
import 'vue3-toastify';
import './VTooltip-CMY4Fmcj.mjs';
import './VOverlay-D4Vsv0zT.mjs';
import './easing-CuhD-vKF.mjs';
import './lazy-BteLhbse.mjs';
import './forwardRefs-BSTjJZPU.mjs';
import './avatar-1-B_-VvdgB.mjs';
import './auth-D8xyNAQl.mjs';
import 'axios';
import './VAvatar-CZq753ec.mjs';
import './VMenu-BlUxI1bj.mjs';
import './index-tuhqJpq8.mjs';
import './ssrBoot-BtvJZs44.mjs';
import './VDivider-DdsSNvlF.mjs';
import './VListItemAction-BGClHwTJ.mjs';

const _sfc_main$2 = {
  __name: "VerticalNav",
  __ssrInlineRender: true,
  props: {
    tag: {
      type: null,
      required: false,
      default: "aside"
    },
    isOverlayNavActive: {
      type: Boolean,
      required: true
    },
    toggleIsOverlayNavActive: {
      type: Function,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { mdAndDown } = useDisplay();
    const refNav = ref();
    const route = useRoute$1();
    watch(() => route.path, () => {
      props.toggleIsOverlayNavActive(false);
    });
    const isVerticalNavScrolled = ref(false);
    const updateIsVerticalNavScrolled = (val) => isVerticalNavScrolled.value = val;
    const handleNavScroll = (evt) => {
      isVerticalNavScrolled.value = evt.target.scrollTop > 0;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(props.tag), mergeProps({
        ref_key: "refNav",
        ref: refNav,
        class: ["layout-vertical-nav", [
          {
            "visible": __props.isOverlayNavActive,
            "scrolled": unref(isVerticalNavScrolled),
            "overlay-nav": unref(mdAndDown)
          }
        ]]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nav-header" data-v-b2e66e5f${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "nav-header", {}, () => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/",
                class: "app-logo app-title-wrapper"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="d-flex" data-v-b2e66e5f${_scopeId2}>${unref(logo)}</div><h1 class="font-weight-medium leading-normal text-xl text-uppercase" data-v-b2e66e5f${_scopeId2}> Materio </h1>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "d-flex",
                        innerHTML: unref(logo)
                      }, null, 8, ["innerHTML"]),
                      createVNode("h1", { class: "font-weight-medium leading-normal text-xl text-uppercase" }, " Materio ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            ssrRenderSlot(_ctx.$slots, "before-nav-items", {}, () => {
              _push2(`<div class="vertical-nav-items-shadow" data-v-b2e66e5f${_scopeId}></div>`);
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "nav-items", { updateIsVerticalNavScrolled }, () => {
              _push2(ssrRenderComponent(unref(PerfectScrollbar), {
                tag: "ul",
                class: "nav-items",
                options: { wheelPropagation: false },
                onPsScrollY: handleNavScroll
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", {}, void 0, true)
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "after-nav-items", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("div", { class: "nav-header" }, [
                renderSlot(_ctx.$slots, "nav-header", {}, () => [
                  createVNode(_component_NuxtLink, {
                    to: "/",
                    class: "app-logo app-title-wrapper"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "d-flex",
                        innerHTML: unref(logo)
                      }, null, 8, ["innerHTML"]),
                      createVNode("h1", { class: "font-weight-medium leading-normal text-xl text-uppercase" }, " Materio ")
                    ]),
                    _: 1
                  })
                ], true)
              ]),
              renderSlot(_ctx.$slots, "before-nav-items", {}, () => [
                createVNode("div", { class: "vertical-nav-items-shadow" })
              ], true),
              renderSlot(_ctx.$slots, "nav-items", { updateIsVerticalNavScrolled }, () => [
                createVNode(unref(PerfectScrollbar), {
                  tag: "ul",
                  class: "nav-items",
                  options: { wheelPropagation: false },
                  onPsScrollY: handleNavScroll
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ]),
                  _: 3
                })
              ], true),
              renderSlot(_ctx.$slots, "after-nav-items", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/VerticalNav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const VerticalNav = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b2e66e5f"]]);
const _sfc_main$1 = defineComponent({
  setup(props, { slots }) {
    const isOverlayNavActive = ref(false);
    const isLayoutOverlayVisible = ref(false);
    const toggleIsOverlayNavActive = useToggle(isOverlayNavActive);
    const route = useRoute$1();
    const { mdAndDown } = useDisplay();
    syncRef(isOverlayNavActive, isLayoutOverlayVisible);
    return () => {
      var _a, _b, _c;
      const verticalNav = h(VerticalNav, { isOverlayNavActive: isOverlayNavActive.value, toggleIsOverlayNavActive }, {
        "nav-header": () => {
          var _a2;
          return (_a2 = slots["vertical-nav-header"]) == null ? void 0 : _a2.call(slots, { toggleIsOverlayNavActive });
        },
        "before-nav-items": () => {
          var _a2;
          return (_a2 = slots["before-vertical-nav-items"]) == null ? void 0 : _a2.call(slots);
        },
        "default": () => {
          var _a2;
          return (_a2 = slots["vertical-nav-content"]) == null ? void 0 : _a2.call(slots);
        },
        "after-nav-items": () => {
          var _a2;
          return (_a2 = slots["after-vertical-nav-items"]) == null ? void 0 : _a2.call(slots);
        }
      });
      const navbar = h("header", { class: ["layout-navbar navbar-blur"] }, [
        h("div", { class: "navbar-content-container" }, (_a = slots.navbar) == null ? void 0 : _a.call(slots, {
          toggleVerticalOverlayNavActive: toggleIsOverlayNavActive
        }))
      ]);
      const main = h("main", { class: "layout-page-content" }, h("div", { class: "page-content-container" }, (_b = slots.default) == null ? void 0 : _b.call(slots)));
      const footer = h("footer", { class: "layout-footer" }, [
        h("div", { class: "footer-content-container" }, (_c = slots.footer) == null ? void 0 : _c.call(slots))
      ]);
      const layoutOverlay = h("div", {
        class: ["layout-overlay", { visible: isLayoutOverlayVisible.value }],
        onClick: () => {
          isLayoutOverlayVisible.value = !isLayoutOverlayVisible.value;
        }
      });
      return h("div", {
        class: [
          "layout-wrapper layout-nav-type-vertical layout-navbar-static layout-footer-static layout-content-width-fluid",
          mdAndDown.value && "layout-overlay-nav",
          route.meta.layoutWrapperClasses
        ]
      }, [
        verticalNav,
        h("div", { class: "layout-content-wrapper" }, [
          navbar,
          main,
          footer
        ]),
        layoutOverlay
      ]);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/VerticalNavLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "DefaultLayoutWithVerticalNav",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        navbar: withCtx(({ toggleVerticalOverlayNavActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex h-100 align-center" data-v-ee520e18${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconBtn, {
              class: "ms-n3 d-lg-none",
              onClick: ($event) => toggleVerticalOverlayNavActive(true)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { icon: "ri-menu-line" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, { icon: "ri-menu-line" })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="d-flex align-center cursor-pointer" style="${ssrRenderStyle({ "user-select": "none" })}" data-v-ee520e18${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconBtn, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { icon: "ri-search-line" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, { icon: "ri-search-line" })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<span class="d-none d-md-flex align-center text-disabled" data-v-ee520e18${_scopeId}><span class="me-3" data-v-ee520e18${_scopeId}>Search</span><span class="meta-key" data-v-ee520e18${_scopeId}>\u2318K</span></span></div>`);
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_IconBtn, {
              class: "me-2",
              href: "https://github.com/themeselection/materio-vuetify-nuxtjs-admin-template-free",
              target: "_blank",
              rel: "noopener noreferrer"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { icon: "ri-github-fill" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, { icon: "ri-github-fill" })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_IconBtn, { class: "me-2" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { icon: "ri-notification-line" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, { icon: "ri-notification-line" })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, { class: "me-2" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex h-100 align-center" }, [
                createVNode(_component_IconBtn, {
                  class: "ms-n3 d-lg-none",
                  onClick: ($event) => toggleVerticalOverlayNavActive(true)
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, { icon: "ri-menu-line" })
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                createVNode("div", {
                  class: "d-flex align-center cursor-pointer",
                  style: { "user-select": "none" }
                }, [
                  createVNode(_component_IconBtn, null, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-search-line" })
                    ]),
                    _: 1
                  }),
                  createVNode("span", { class: "d-none d-md-flex align-center text-disabled" }, [
                    createVNode("span", { class: "me-3" }, "Search"),
                    createVNode("span", { class: "meta-key" }, "\u2318K")
                  ])
                ]),
                createVNode(VSpacer),
                createVNode(_component_IconBtn, {
                  class: "me-2",
                  href: "https://github.com/themeselection/materio-vuetify-nuxtjs-admin-template-free",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, { icon: "ri-github-fill" })
                  ]),
                  _: 1
                }),
                createVNode(_component_IconBtn, { class: "me-2" }, {
                  default: withCtx(() => [
                    createVNode(VIcon, { icon: "ri-notification-line" })
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$3, { class: "me-2" }),
                createVNode(_sfc_main$4)
              ])
            ];
          }
        }),
        "vertical-nav-header": withCtx(({ toggleIsOverlayNavActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "app-logo app-title-wrapper"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex" data-v-ee520e18${_scopeId2}>${unref(logo)}</div><h1 class="font-weight-medium leading-normal text-xl text-uppercase" data-v-ee520e18${_scopeId2}> Materio </h1>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "d-flex",
                      innerHTML: unref(logo)
                    }, null, 8, ["innerHTML"]),
                    createVNode("h1", { class: "font-weight-medium leading-normal text-xl text-uppercase" }, " Materio ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_IconBtn, {
              class: "d-block d-lg-none",
              onClick: ($event) => toggleIsOverlayNavActive(false)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { icon: "ri-close-line" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, { icon: "ri-close-line" })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/",
                class: "app-logo app-title-wrapper"
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "d-flex",
                    innerHTML: unref(logo)
                  }, null, 8, ["innerHTML"]),
                  createVNode("h1", { class: "font-weight-medium leading-normal text-xl text-uppercase" }, " Materio ")
                ]),
                _: 1
              }),
              createVNode(_component_IconBtn, {
                class: "d-block d-lg-none",
                onClick: ($event) => toggleIsOverlayNavActive(false)
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, { icon: "ri-close-line" })
                ]),
                _: 2
              }, 1032, ["onClick"])
            ];
          }
        }),
        "vertical-nav-content": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$5)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Footer, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Footer)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/DefaultLayoutWithVerticalNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DefaultLayoutWithVerticalNav = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ee520e18"]]);

export { DefaultLayoutWithVerticalNav as default };
