import { withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { V as VCard, a as VCardText } from './VCard-Bdfw-mBj.mjs';
import { a as VIcon, V as VBtn } from './server.mjs';
import { V as VTooltip } from './VTooltip-CMY4Fmcj.mjs';
import './VAvatar-CZq753ec.mjs';
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
import './VOverlay-D4Vsv0zT.mjs';
import './easing-CuhD-vKF.mjs';
import './lazy-BteLhbse.mjs';
import './forwardRefs-BSTjJZPU.mjs';

const _sfc_main = {
  __name: "icons",
  __ssrInlineRender: true,
  setup(__props) {
    const iconsList = [
      "ri-arrow-left-up-line",
      "ri-arrow-left-up-fill",
      "ri-arrow-up-line",
      "ri-arrow-up-fill",
      "ri-arrow-right-up-line",
      "ri-arrow-right-up-fill",
      "ri-corner-down-left-line",
      "ri-corner-down-left-fill",
      "ri-corner-left-up-line",
      "ri-corner-left-up-fill",
      "ri-corner-left-down-line",
      "ri-corner-left-down-fill",
      "ri-corner-down-right-line",
      "ri-corner-down-right-fill",
      "ri-arrow-up-circle-line",
      "ri-arrow-up-circle-fill",
      "ri-arrow-right-circle-line",
      "ri-arrow-right-circle-fill",
      "ri-arrow-down-circle-line",
      "ri-arrow-down-circle-fill",
      "ri-arrow-left-circle-line",
      "ri-arrow-left-circle-fill",
      "ri-arrow-up-s-line",
      "ri-arrow-up-s-fill",
      "ri-arrow-right-s-line",
      "ri-arrow-right-s-fill",
      "ri-arrow-down-s-line",
      "ri-arrow-down-s-fill",
      "ri-arrow-left-s-line",
      "ri-arrow-left-s-fill",
      "ri-arrow-drop-right-fill",
      " ri-arrow-drop-down-line",
      " ri-arrow-drop-down-fill",
      " ri-arrow-drop-left-line",
      " ri-arrow-drop-left-fill",
      " ri-arrow-up-double-line",
      " ri-arrow-up-double-fill",
      " ri-arrow-right-double-line",
      " ri-arrow-right-double-fill",
      " ri-arrow-down-double-line",
      " ri-arrow-down-double-fill",
      " ri-arrow-left-double-line",
      " ri-arrow-left-double-fill",
      " ri-corner-up-left-double-line",
      " ri-corner-up-left-double-fill",
      " ri-corner-up-right-double-line",
      " ri-corner-up-right-double-fill",
      " ri-expand-left-line",
      " ri-expand-left-fill",
      " ri-expand-right-line",
      " ri-expand-right-fill",
      " ri-contract-left-line",
      " ri-contract-left-fill",
      " ri-contract-right-line"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="d-flex align-center flex-wrap"><!--[-->`);
      ssrRenderList(iconsList, (icon) => {
        _push(ssrRenderComponent(VCard, {
          key: icon,
          class: "mb-6 me-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCardText, { class: "py-3 px-4" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      size: "30",
                      icon
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, {
                        size: "30",
                        icon
                      }, null, 8, ["icon"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VTooltip, {
                location: "top",
                activator: "parent"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(icon)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(icon), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VCardText, { class: "py-3 px-4" }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      size: "30",
                      icon
                    }, null, 8, ["icon"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(VTooltip, {
                  location: "top",
                  activator: "parent"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(icon), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="text-center">`);
      _push(ssrRenderComponent(VBtn, {
        href: "https://remixicon.com/",
        rel: "noopener noreferrer",
        color: "primary",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View All Remix Icons `);
          } else {
            return [
              createTextVNode(" View All Remix Icons ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/icons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
