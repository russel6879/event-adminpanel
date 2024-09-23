import { withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import DefaultLayoutWithVerticalNav from './DefaultLayoutWithVerticalNav-DdEHRTQV.mjs';
import './nuxt-link-D-x2kIQw.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-devtools-stub';
import 'vue3-toastify';
import './NavItems-Dq2o-QeA.mjs';
import './logo-Cki8HXon.mjs';
import 'vue3-perfect-scrollbar';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './NavbarThemeSwitcher-Bu_1DFfB.mjs';
import './VTooltip-CMY4Fmcj.mjs';
import './VOverlay-D4Vsv0zT.mjs';
import './easing-CuhD-vKF.mjs';
import './lazy-BteLhbse.mjs';
import './forwardRefs-BSTjJZPU.mjs';
import './Footer-D0b96xV5.mjs';
import './UserProfile-ecgS5-pQ.mjs';
import './avatar-1-B_-VvdgB.mjs';
import './auth-D8xyNAQl.mjs';
import 'axios';
import './VAvatar-CZq753ec.mjs';
import './VMenu-BlUxI1bj.mjs';
import './index-tuhqJpq8.mjs';
import './ssrBoot-BtvJZs44.mjs';
import './VDivider-DdsSNvlF.mjs';
import './VListItemAction-BGClHwTJ.mjs';
import './VSpacer-DIpTA8q-.mjs';

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(DefaultLayoutWithVerticalNav, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
