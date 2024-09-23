import { withCtx, createVNode, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { V as VCard, a as VCardText } from './VCard-Bdfw-mBj.mjs';
import { V as VRow, a as VCol } from './VRow-DdKnicNs.mjs';
import './server.mjs';
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
import './VAvatar-CZq753ec.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VCard, mergeProps({ title: "Headlines" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardText, { class: "d-flex flex-column gap-y-8" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div${_scopeId2}><h1 class="text-h1"${_scopeId2}> Heading 1 </h1><span${_scopeId2}>font-size: 2.875rem / line-height: 4.25rem / font-weight: 500</span></div><div${_scopeId2}><h2 class="text-h2"${_scopeId2}> Heading 2 </h2><span${_scopeId2}>font-size: 2.375rem / line-height: 3.5rem / font-weight: 500</span></div><div${_scopeId2}><h3 class="text-h3"${_scopeId2}> Heading 3 </h3><span${_scopeId2}>font-size: 1.75rem / line-height: 2.625rem / font-weight: 500</span></div><div${_scopeId2}><h4 class="text-h4"${_scopeId2}> Heading 4 </h4><span${_scopeId2}>font-size: 1.5rem / line-height: 2.375rem / font-weight: 500</span></div><div${_scopeId2}><h5 class="text-h5"${_scopeId2}> Heading 5 </h5><span${_scopeId2}>font-size: 1.125rem / line-height: 1.75rem / font-weight: 500</span></div><div${_scopeId2}><h6 class="text-h6"${_scopeId2}> Heading 6 </h6><span${_scopeId2}>font-size: 0.9375rem / line-height: 1.75rem / font-weight: 500</span></div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode("h1", { class: "text-h1" }, " Heading 1 "),
                  createVNode("span", null, "font-size: 2.875rem / line-height: 4.25rem / font-weight: 500")
                ]),
                createVNode("div", null, [
                  createVNode("h2", { class: "text-h2" }, " Heading 2 "),
                  createVNode("span", null, "font-size: 2.375rem / line-height: 3.5rem / font-weight: 500")
                ]),
                createVNode("div", null, [
                  createVNode("h3", { class: "text-h3" }, " Heading 3 "),
                  createVNode("span", null, "font-size: 1.75rem / line-height: 2.625rem / font-weight: 500")
                ]),
                createVNode("div", null, [
                  createVNode("h4", { class: "text-h4" }, " Heading 4 "),
                  createVNode("span", null, "font-size: 1.5rem / line-height: 2.375rem / font-weight: 500")
                ]),
                createVNode("div", null, [
                  createVNode("h5", { class: "text-h5" }, " Heading 5 "),
                  createVNode("span", null, "font-size: 1.125rem / line-height: 1.75rem / font-weight: 500")
                ]),
                createVNode("div", null, [
                  createVNode("h6", { class: "text-h6" }, " Heading 6 "),
                  createVNode("span", null, "font-size: 0.9375rem / line-height: 1.75rem / font-weight: 500")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCardText, { class: "d-flex flex-column gap-y-8" }, {
            default: withCtx(() => [
              createVNode("div", null, [
                createVNode("h1", { class: "text-h1" }, " Heading 1 "),
                createVNode("span", null, "font-size: 2.875rem / line-height: 4.25rem / font-weight: 500")
              ]),
              createVNode("div", null, [
                createVNode("h2", { class: "text-h2" }, " Heading 2 "),
                createVNode("span", null, "font-size: 2.375rem / line-height: 3.5rem / font-weight: 500")
              ]),
              createVNode("div", null, [
                createVNode("h3", { class: "text-h3" }, " Heading 3 "),
                createVNode("span", null, "font-size: 1.75rem / line-height: 2.625rem / font-weight: 500")
              ]),
              createVNode("div", null, [
                createVNode("h4", { class: "text-h4" }, " Heading 4 "),
                createVNode("span", null, "font-size: 1.5rem / line-height: 2.375rem / font-weight: 500")
              ]),
              createVNode("div", null, [
                createVNode("h5", { class: "text-h5" }, " Heading 5 "),
                createVNode("span", null, "font-size: 1.125rem / line-height: 1.75rem / font-weight: 500")
              ]),
              createVNode("div", null, [
                createVNode("h6", { class: "text-h6" }, " Heading 6 "),
                createVNode("span", null, "font-size: 0.9375rem / line-height: 1.75rem / font-weight: 500")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/user-interface/typography/TypographyHeadlines.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TypographyHeadlines = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VCard, mergeProps({ title: "Texts" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardText, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-subtitle-1 text-no-wrap"${_scopeId4}> text-subtitle-1 </p>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-subtitle-1 text-no-wrap" }, " text-subtitle-1 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "10",
                      class: "mb-6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-subtitle-1 text-truncate mb-1"${_scopeId4}> Cupcake ipsum dolor sit amet fruitcake donut chocolate. </p><span${_scopeId4}>font-size: 0.9375rem / line-height: 1.5rem / font-weight: 500</span>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-subtitle-1 text-truncate mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                            createVNode("span", null, "font-size: 0.9375rem / line-height: 1.5rem / font-weight: 500")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-subtitle-2 text-no-wrap"${_scopeId4}> text-subtitle-2 </p>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-subtitle-2 text-no-wrap" }, " text-subtitle-2 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "10",
                      class: "mb-6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-subtitle-2 mb-1"${_scopeId4}> Cupcake ipsum dolor sit amet fruitcake donut chocolate. </p><span${_scopeId4}>font-size: 0.8125rem / line-height: 1.25rem / font-weight: 500</span>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-subtitle-2 mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                            createVNode("span", null, "font-size: 0.8125rem / line-height: 1.25rem / font-weight: 500")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-body-1 text-no-wrap"${_scopeId4}> text-body-1 </p>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-body-1 text-no-wrap" }, " text-body-1 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "10",
                      class: "mb-6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-body-1 mb-1"${_scopeId4}> Cupcake ipsum dolor sit amet fruitcake donut chocolate. </p><span${_scopeId4}>font-size: 0.9375rem / line-height: 1.375rem / font-weight: 400</span>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-body-1 mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                            createVNode("span", null, "font-size: 0.9375rem / line-height: 1.375rem / font-weight: 400")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-body-2 text-no-wrap"${_scopeId4}> text-body-2 </p>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-body-2 text-no-wrap" }, " text-body-2 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "10",
                      class: "mb-6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-body-2 mb-1"${_scopeId4}> Cupcake ipsum dolor sit amet fruitcake donut chocolate. </p><span${_scopeId4}>font-size: 0.8125rem / line-height: 1.25rem / font-weight: 400</span>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-body-2 mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                            createVNode("span", null, "font-size: 0.8125rem / line-height: 1.25rem / font-weight: 400")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-caption"${_scopeId4}> text-caption </p>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-caption" }, " text-caption ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "10",
                      class: "mb-6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-caption mb-1"${_scopeId4}> Cupcake ipsum dolor sit amet fruitcake donut chocolate. </p><span${_scopeId4}>font-size: 0.8125rem / line-height: 1.125rem / font-weight: 400</span>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-caption mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                            createVNode("span", null, "font-size: 0.8125rem / line-height: 1.125rem / font-weight: 400")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-overline text-no-wrap"${_scopeId4}> text-overline </p>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-overline text-no-wrap" }, " text-overline ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "10",
                      class: "mb-6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-overline mb-1"${_scopeId4}> Cupcake ipsum dolor sit amet fruitcake donut chocolate. </p><span${_scopeId4}>font-size: 0.75rem / line-height: 0.875rem / font-weight: 400</span>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-overline mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                            createVNode("span", null, "font-size: 0.75rem / line-height: 0.875rem / font-weight: 400")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-subtitle-1 text-no-wrap" }, " text-subtitle-1 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "10",
                        class: "mb-6"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-subtitle-1 text-truncate mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                          createVNode("span", null, "font-size: 0.9375rem / line-height: 1.5rem / font-weight: 500")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-subtitle-2 text-no-wrap" }, " text-subtitle-2 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "10",
                        class: "mb-6"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-subtitle-2 mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                          createVNode("span", null, "font-size: 0.8125rem / line-height: 1.25rem / font-weight: 500")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-body-1 text-no-wrap" }, " text-body-1 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "10",
                        class: "mb-6"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-body-1 mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                          createVNode("span", null, "font-size: 0.9375rem / line-height: 1.375rem / font-weight: 400")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-body-2 text-no-wrap" }, " text-body-2 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "10",
                        class: "mb-6"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-body-2 mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                          createVNode("span", null, "font-size: 0.8125rem / line-height: 1.25rem / font-weight: 400")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-caption" }, " text-caption ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "10",
                        class: "mb-6"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-caption mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                          createVNode("span", null, "font-size: 0.8125rem / line-height: 1.125rem / font-weight: 400")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-overline text-no-wrap" }, " text-overline ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "10",
                        class: "mb-6"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-overline mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                          createVNode("span", null, "font-size: 0.75rem / line-height: 0.875rem / font-weight: 400")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VRow, { "no-gutters": "" }, {
                  default: withCtx(() => [
                    createVNode(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-subtitle-1 text-no-wrap" }, " text-subtitle-1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "10",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-subtitle-1 text-truncate mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                        createVNode("span", null, "font-size: 0.9375rem / line-height: 1.5rem / font-weight: 500")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-subtitle-2 text-no-wrap" }, " text-subtitle-2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "10",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-subtitle-2 mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                        createVNode("span", null, "font-size: 0.8125rem / line-height: 1.25rem / font-weight: 500")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-body-1 text-no-wrap" }, " text-body-1 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "10",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-body-1 mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                        createVNode("span", null, "font-size: 0.9375rem / line-height: 1.375rem / font-weight: 400")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-body-2 text-no-wrap" }, " text-body-2 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "10",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-body-2 mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                        createVNode("span", null, "font-size: 0.8125rem / line-height: 1.25rem / font-weight: 400")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-caption" }, " text-caption ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "10",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-caption mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                        createVNode("span", null, "font-size: 0.8125rem / line-height: 1.125rem / font-weight: 400")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-overline text-no-wrap" }, " text-overline ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "10",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-overline mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                        createVNode("span", null, "font-size: 0.75rem / line-height: 0.875rem / font-weight: 400")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCardText, null, {
            default: withCtx(() => [
              createVNode(VRow, { "no-gutters": "" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-subtitle-1 text-no-wrap" }, " text-subtitle-1 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "10",
                    class: "mb-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-subtitle-1 text-truncate mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                      createVNode("span", null, "font-size: 0.9375rem / line-height: 1.5rem / font-weight: 500")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-subtitle-2 text-no-wrap" }, " text-subtitle-2 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "10",
                    class: "mb-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-subtitle-2 mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                      createVNode("span", null, "font-size: 0.8125rem / line-height: 1.25rem / font-weight: 500")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-body-1 text-no-wrap" }, " text-body-1 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "10",
                    class: "mb-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-body-1 mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                      createVNode("span", null, "font-size: 0.9375rem / line-height: 1.375rem / font-weight: 400")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-body-2 text-no-wrap" }, " text-body-2 ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "10",
                    class: "mb-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-body-2 mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                      createVNode("span", null, "font-size: 0.8125rem / line-height: 1.25rem / font-weight: 400")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-caption" }, " text-caption ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "10",
                    class: "mb-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-caption mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                      createVNode("span", null, "font-size: 0.8125rem / line-height: 1.125rem / font-weight: 400")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-overline text-no-wrap" }, " text-overline ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "10",
                    class: "mb-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-overline mb-1" }, " Cupcake ipsum dolor sit amet fruitcake donut chocolate. "),
                      createVNode("span", null, "font-size: 0.75rem / line-height: 0.875rem / font-weight: 400")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/user-interface/typography/TypographyTexts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TypographyTexts = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "typography",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TypographyHeadlines, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TypographyHeadlines)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TypographyTexts, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TypographyTexts)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(TypographyHeadlines)
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(TypographyTexts)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/typography.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
