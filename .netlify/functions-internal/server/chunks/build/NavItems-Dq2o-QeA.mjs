import { withCtx, openBlock, createBlock, Fragment, renderList, createVNode, useSSRContext, ref, mergeProps, unref, resolveDynamicComponent, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderVNode } from 'vue/server-renderer';
import { a as VIcon } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D-x2kIQw.mjs';
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

const _sfc_main$2 = {
  __name: "VerticalNavGroup",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({
        class: ["nav-group", unref(isOpen) && "open"]
      }, _attrs))}><div class="nav-group-label">`);
      _push(ssrRenderComponent(VIcon, {
        icon: __props.item.icon || "ri-checkbox-blank-circle-line",
        class: "nav-item-icon"
      }, null, _parent));
      _push(`<span class="nav-item-title">${ssrInterpolate(__props.item.title)}</span><span class="${ssrRenderClass([__props.item.badgeClass, "nav-item-badge"])}">${ssrInterpolate(__props.item.badgeContent)}</span>`);
      _push(ssrRenderComponent(VIcon, {
        icon: "ri-arrow-right-s-line",
        class: "nav-group-arrow"
      }, null, _parent));
      _push(`</div><div class="nav-group-children-wrapper"><ul class="nav-group-children">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</ul></div></li>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/VerticalNavGroup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "VerticalNavLink",
  __ssrInlineRender: true,
  props: {
    item: {
      type: null,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({
        class: ["nav-link", { disabled: __props.item.disable }]
      }, _attrs))}>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.item.to ? unref(__nuxt_component_0) : "a"), {
        to: __props.item.to,
        href: __props.item.href,
        target: __props.item.target
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              icon: __props.item.icon || "ri-checkbox-blank-circle-line",
              class: "nav-item-icon"
            }, null, _parent2, _scopeId));
            _push2(`<span class="nav-item-title"${_scopeId}>${ssrInterpolate(__props.item.title)}</span><span class="${ssrRenderClass([__props.item.badgeClass, "nav-item-badge"])}"${_scopeId}>${ssrInterpolate(__props.item.badgeContent)}</span>`);
          } else {
            return [
              createVNode(VIcon, {
                icon: __props.item.icon || "ri-checkbox-blank-circle-line",
                class: "nav-item-icon"
              }, null, 8, ["icon"]),
              createVNode("span", { class: "nav-item-title" }, toDisplayString(__props.item.title), 1),
              createVNode("span", {
                class: ["nav-item-badge", __props.item.badgeClass]
              }, toDisplayString(__props.item.badgeContent), 3)
            ];
          }
        }),
        _: 1
      }), _parent);
      _push(`</li>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@layouts/components/VerticalNavLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "NavItems",
  __ssrInlineRender: true,
  setup(__props) {
    const websiteSetupSubmenu = [
      {
        title: "General Settings",
        to: "/website-setup/general",
        icon: "ri-settings-2-line"
      },
      {
        title: "SEO Settings",
        to: "/website-setup/seo",
        icon: "ri-search-line"
      },
      {
        title: "Social Media Links",
        to: "/website-setup/social-media",
        icon: "ri-links-line"
      },
      {
        title: "Custom Scripts",
        to: "/website-setup/custom-scripts",
        icon: "ri-code-s-slash-line"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, { item: {
        title: "Account Settings",
        icon: "ri-user-settings-line",
        to: "/account-settings"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { item: {
        title: "Category",
        icon: "ri-draft-line",
        to: "/category"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { item: {
        title: "Venue",
        icon: "ri-focus-3-line",
        to: "/venue"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { item: {
        title: "Event List",
        icon: "ri-file-list-line",
        to: "/event-list"
      } }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { item: {
        title: "Website Setup",
        icon: "ri-settings-3-line"
        // Settings icon from Remix Icon
      } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(websiteSetupSubmenu, (submenuItem, index) => {
              _push2(ssrRenderComponent(_sfc_main$1, {
                key: index,
                item: submenuItem
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(websiteSetupSubmenu, (submenuItem, index) => {
                return createVNode(_sfc_main$1, {
                  key: index,
                  item: submenuItem
                }, null, 8, ["item"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/NavItems.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
