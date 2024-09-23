import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, createElementBlock, mergeProps, withCtx, createVNode, useSSRContext, createTextVNode, unref, computed, resolveComponent, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, ref } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { V as VCard, a as VCardText, b as VCardItem, c as VCardTitle } from './VCard-Bdfw-mBj.mjs';
import { V as VBtn, n as VImg, K as useTheme, a as VIcon, L as VProgressLinear } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { V as VRow, a as VCol } from './VRow-DdKnicNs.mjs';
import { V as VList, a as VListItem, b as VListItemTitle, c as VListItemSubtitle, d as VMenu } from './VMenu-BlUxI1bj.mjs';
import { V as VListItemAction } from './VListItemAction-BGClHwTJ.mjs';
import { V as VDivider } from './VDivider-DdsSNvlF.mjs';
import { V as VAvatar } from './VAvatar-CZq753ec.mjs';
import { a as avatar1 } from './avatar-1-B_-VvdgB.mjs';
import { c as avatar2, d as avatar3, a as avatar4, b as avatar8 } from './avatar-8-DXLqjTP4.mjs';
import { V as VDataTable } from './VDataTable-B5pkZORV.mjs';
import { V as VChip } from './VChip-BMAQYvMK.mjs';
import { V as VSpacer } from './VSpacer-DIpTA8q-.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-devtools-stub';
import 'vue3-toastify';
import './index-tuhqJpq8.mjs';
import './ssrBoot-BtvJZs44.mjs';
import './VOverlay-D4Vsv0zT.mjs';
import './easing-CuhD-vKF.mjs';
import './lazy-BteLhbse.mjs';
import './forwardRefs-BSTjJZPU.mjs';
import './VSelect-CQA9Lotf.mjs';
import './VTextField-BZmvmRfe.mjs';
import './VCheckboxBtn-BOaF0jaZ.mjs';
import './VTable-DbuYfHKf.mjs';

const trophy = "" + buildAssetsURL("trophy.BRLhzJgw.png");
const _sfc_main$b = {
  __name: "AnalyticsAward",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({ class: "position-relative" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mb-2"${_scopeId2}><h5 class="text-h5"${_scopeId2}> Congratulations John! <span class="text-high-emphasis"${_scopeId2}>\u{1F389}</span></h5><div class="text-body-1"${_scopeId2}> Best seller of the month </div></div><h4 class="text-h4 text-primary"${_scopeId2}> $42.8k </h4><div class="text-body-1 mb-2"${_scopeId2}> 78% of target <span class="text-high-emphasis"${_scopeId2}>\u{1F680}</span></div>`);
                  _push3(ssrRenderComponent(VBtn, { size: "small" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` View Sales `);
                      } else {
                        return [
                          createTextVNode(" View Sales ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "mb-2" }, [
                      createVNode("h5", { class: "text-h5" }, [
                        createTextVNode(" Congratulations John! "),
                        createVNode("span", { class: "text-high-emphasis" }, "\u{1F389}")
                      ]),
                      createVNode("div", { class: "text-body-1" }, " Best seller of the month ")
                    ]),
                    createVNode("h4", { class: "text-h4 text-primary" }, " $42.8k "),
                    createVNode("div", { class: "text-body-1 mb-2" }, [
                      createTextVNode(" 78% of target "),
                      createVNode("span", { class: "text-high-emphasis" }, "\u{1F680}")
                    ]),
                    createVNode(VBtn, { size: "small" }, {
                      default: withCtx(() => [
                        createTextVNode(" View Sales ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VImg, {
              src: unref(trophy),
              class: "trophy"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-2" }, [
                    createVNode("h5", { class: "text-h5" }, [
                      createTextVNode(" Congratulations John! "),
                      createVNode("span", { class: "text-high-emphasis" }, "\u{1F389}")
                    ]),
                    createVNode("div", { class: "text-body-1" }, " Best seller of the month ")
                  ]),
                  createVNode("h4", { class: "text-h4 text-primary" }, " $42.8k "),
                  createVNode("div", { class: "text-body-1 mb-2" }, [
                    createTextVNode(" 78% of target "),
                    createVNode("span", { class: "text-high-emphasis" }, "\u{1F680}")
                  ]),
                  createVNode(VBtn, { size: "small" }, {
                    default: withCtx(() => [
                      createTextVNode(" View Sales ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VImg, {
                src: unref(trophy),
                class: "trophy"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/dashboard/AnalyticsAward.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_1 = defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const _sfc_main$a = {
  __name: "AnalyticsBarCharts",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const currentTheme = computed(() => vuetifyTheme.current.value.colors);
    const series = [{
      name: "2020",
      data: [
        35,
        85,
        55,
        50,
        70
      ]
    }];
    const chartOptions = computed(() => {
      const backgroundColor = currentTheme.value["track-bg"];
      return {
        chart: {
          type: "bar",
          stacked: false,
          width: 200,
          parentHeightOffset: 0,
          toolbar: { show: false }
        },
        grid: {
          show: false,
          padding: {
            top: -20,
            left: -7,
            right: 0,
            bottom: -5
          }
        },
        colors: [
          currentTheme.value.error,
          currentTheme.value.primary,
          currentTheme.value.error,
          currentTheme.value.primary,
          currentTheme.value.primary
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "20%",
            borderRadius: 4,
            distributed: true,
            colors: {
              backgroundBarColors: [
                backgroundColor,
                backgroundColor,
                backgroundColor,
                backgroundColor,
                backgroundColor
              ],
              backgroundBarRadius: 5
            }
          }
        },
        legend: { show: false },
        dataLabels: { enabled: false },
        xaxis: {
          labels: { show: false },
          axisBorder: { show: false },
          axisTicks: { show: false }
        },
        yaxis: { show: false },
        tooltip: { enabled: false },
        responsive: [
          {
            breakpoint: 1628,
            options: {
              plotOptions: {
                bar: {
                  columnWidth: "20%",
                  borderRadius: 2
                }
              }
            }
          },
          {
            breakpoint: 960,
            options: {
              plotOptions: {
                bar: {
                  columnWidth: "15%",
                  borderRadius: 6
                }
              }
            }
          },
          {
            breakpoint: 725,
            options: {
              plotOptions: {
                bar: {
                  columnWidth: "15%",
                  borderRadius: 4
                }
              }
            }
          }
        ]
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __nuxt_component_1;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h4 class="text-h4"${_scopeId2}> 2,856 </h4>`);
                  _push3(ssrRenderComponent(_component_VueApexCharts, {
                    options: unref(chartOptions),
                    series,
                    height: 80,
                    class: "my-1"
                  }, null, _parent3, _scopeId2));
                  _push3(`<h6 class="text-h6 text-center"${_scopeId2}> Sessions </h6>`);
                } else {
                  return [
                    createVNode("h4", { class: "text-h4" }, " 2,856 "),
                    createVNode(_component_VueApexCharts, {
                      options: unref(chartOptions),
                      series,
                      height: 80,
                      class: "my-1"
                    }, null, 8, ["options"]),
                    createVNode("h6", { class: "text-h6 text-center" }, " Sessions ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("h4", { class: "text-h4" }, " 2,856 "),
                  createVNode(_component_VueApexCharts, {
                    options: unref(chartOptions),
                    series,
                    height: 80,
                    class: "my-1"
                  }, null, 8, ["options"]),
                  createVNode("h6", { class: "text-h6 text-center" }, " Sessions ")
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/dashboard/AnalyticsBarCharts.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const americanBank = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABgCAMAAADYWPdNAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTHiNrA02e1BwnBhHiRpHiCFOi/DLly9WkK67x2WApE5umzhdkj9jlTBYjzJYkhhBhRtHiBdFixFCiHqyGQAAAAARdFJOUwArrFXw388IvBc/aY9+nq11ZjWWwAAABCRJREFUaN69WYuSgyAMLAVE8FXC///rISgiCoLKpTfTmRs1TbJsNvHzuWtcsM8/WKv6f/CCJbT1w+ENyIZXdzMoAFrdDaJSSiUqe2ETzG5wZTdCzgZd5WBa40ZWRnRnvciG1QazsapQY4OyXoCiqmBegpFE1AazDaciorHzItWvXjDN5gbGalDrlNysGkdz4nmRtJabHnw3qhKixS6YWhzNWti7wbXBbG2sSmYO0d8qnTkMBmpwtOnMgZv3OZqNYTBVyBPLo71Pnqw5caO6qmTm3Axvg5nKs6RNtcFcRXUgcupFklcR7XXmwM2rHI0jwbyL6AOZbfYi1Nggo5ZJN6xvL62RCaPX94/8g5V8aKATCsmP7n6oeeznylSj4cgnPd9lmly/TQiZwZLBlI/33xtGM5Ogvluv2DEGWz/uz/3DM96rnIAo9p/t3X8JzeUi1sN1vvo93FFLrTU02UFQNzX6qrZHsx9KCYkXCeR02LeI9ZzriiUCwuM0IxOs1uCcI9wTFcEXPnkQckovqfPnougIKHZFZYJCRr42RbHWFNo0gaDfDyUUrzmxk4gzl4unKaJ39g1V4mm+3OUdWeOh4n5nBTlc0CmmDgglkqXz3aj2+ici11jgl9/lPdGjf1/OfZsf1Wec1CBpQMZMbcBH5cTRBeAGSudj6qZegDZ//6kBt/64JOBMHY1W71Z8dSVqinWOFGkC/dJcBQPDBp/R85jSMW5dEhEuvN16tJyjysHXcZLdGO40EWJTOibDQLtb6hO1ZLUjk27HeLX+rvZk3Fno5tDQ2hpje6hRHi1u2G+xMOk4pP1HKlpIZW0IcByWJQrGzHWGeRzsGUeLrWMDe7BUWzh33+CYOFPsD2qzToD7vB9w/HQFsWij3dqcjxENc3vbtU6AfjpQG5OZd9dQbDxuSjCNi7+bO3x8KIzm44TE/N4qztKlYEji+PF+qLOUuZ0YQdNq+RYPMCSMsSgfH8J5YXETxbG/uCkvDuqM8YO0ViRWIJjK3UyaLkGtJ2bTh3Rg0aNTvvU2g/WKHTYsDQzkiExDi+C6FAN2nbFAh7erlHL66/yUFmPA6Ee78tv42Jcdp/M9FK6jzYsmy+y6gfn58pXA0U/Zmw82C1vbY9iicaEJ9epJAy3kATE/wLyXWxT7uf7S2YQHe2L7okHTOrOVBhjPIcSnwE/RAhcvLZf1xOrV6GgXMjYU9AJO9cnUWUaGj/V55Dlz3TI7FLjB2pDl4xBfpwM+3N+sWj5Oj8IrLD3EZWOAiTkYrHEMF/lyd/iJG7LJzNi8zOtzKcobVDPFmntrejyP6UEVshYjrjNLIq/xdVbKkkbNbZrJVNzWRVPwatIwWMm87VNCNg8IonNG+3ti2K6UcnqBJjOY7o9DM7JzGnWfcx7TlJAjO5h4+Brm6gF/25mmVlBGMH4AAAAASUVORK5CYII=";
const aws = "data:image/png;base64,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";
const citiBank = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABCCAMAAAB0FZg0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUdwTAA8cwhIgA9HeHxYewNDfgA+eANBeQA8cgJHiAA8dOt4dNwnHQFKixBSjwA7cQM/eAE+deUqHuMvJeksIN4nHNsmG94nHOgrHuAoHB9SgQA6bwA7cdklG94mG+1CXAUAAAAbdFJOUwC6S5kIYpx96jLTGOcfEPmNq16BLrvzzkOcq2DdjwIAAAPLSURBVFjD5ZiLkqsgDIaVoggV8Frtaer7P+ZBBQTF1t5mzszJ7OwuW/DzTwgkG0VvGz43TVVPVvXNGePoy3buq2uX35UNw3Af7ve8ravmixisnn8Zn+2aGufttf+ShHoE3AM2YarPxTR1fg8CrHXV+TMNVfcYMMlp+w+0KMIaEUIOl2vzdiAug+f8S553Xdu2XZ5f7oP3Wf5eWJrWf0p7rfo5K1Sm9PV1tROub0SlygfXGdtkODd16zqse9lfleOn/LqTbee+XaYN3YvJUl+OBRT3rd0GQ/4KBC+Ie7tZSAn3DoFle78CsY4aLvU6lJiwjPqb42o1581xhF1TrT4SKAZYMUbZRsrRwDdmR222CqYlwG3DcDbh0B7Kk3Nr56/9VGQKEWJEvYXURyB1rm2DiOKREGREfWeWHYn72dj2hUZGWIez7LNT+CHjW/a/M7AQXAj8M4agSRqzTBkrCRXumZTMRr0hmxi3jKB5zMOzvefEEsa8Va+mTJZooaQwG9HJN80bCXOGjIvUb0jPPvmzrfE5aR0DiNHCmP9kGbeAyYXhzTamdG/WqdOO4BcY8JCBiVxWgflS3+QJOwy4Lb4yM/TPpzrEsmYjZVaS6jC5DPtGR3TgFLzHguu2eeLHvkrADUHGGMukxcjEYVhfZZNJM2ceZvsMmoElsAJxgTFHhd4DUOCADoomY/OyLJmHiO8xRGwRLFkygicjGmIR2ldP8nzDSIxiiP25NFZU7u3d23sMbGRAzNdpWVoPf6YDSeMoHji//DyHrQ44wiB6PO+fPVvlx5P7fMWwEWf4CeN9X/FMu+qhjM8YSA8zHv3MV8RsKvE7HfrkgSL6HaM0x+svGXAk5P++jvQWvHp3GO+dV3OaA6T4dzoSfS0zfoDx5nlF5eq+/8V5pWs9SH/nK1MvPClaPzvbdcEAUAaijr/iq4iz/QsEFeIr96D5gwr7OkdU1VB8Iz/G0sfUDPLkbmCeqvrUcB/pWGq3SPct2/qKLHUlMy0DpmTyoXnHMMMcdjqUAqV0hyFKcMrE+EQIKWLTKOjkDPuKGC+XiHNEYsnEXi1qwm6qXelWvHDa14Fs9TdVpmCSLFS3I+Z1Bl6dzOg+QzDn3ZwbIth/0HivN2D0QX6MoXRLfLPBwn0ULyGIMOVpWIfnZRUWUz/t9Go40KyBTB/noPJy5upIH/eDEeZjOwBLrwYyTvb6Wi+UYBuLZ33tqFx1HZkOvFSdiFMOJeVs2xuAEyanWJS2PY+SP7OF7wvBUUKKgiTU/1cDVo3PZMH/HKAEUe68Ecbu7L/Gt+s0buBkTwAAAABJRU5ErkJggg==";
const digitalOcean = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaBAMAAADKhlwxAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUdwTDho/zdq/zhp/zhp/zhq/zhp/zlp/zlp/zlo/zhp/zhr/zlp/zhp/zhn/zlq/xVgW34AAAAOdFJOUwDsEmc2I1TJftW3CZCq6XSimAAAAvpJREFUWMOVlz1oFEEUx5fL3SGsFgYP0uQSRRAxQkQbjXBRT+008SO2aQTFQpDYRM1pI1gFtEkqCws7LyBoJYgWllEbC4uwVcBihyPixePccW53vnZ23pvJv9vd3829ee/NvPeCwFR47fTrehwtfj6/Fjg196VO44Fo9PCmg62cqtMkzkRo9GoGg999o7EuOnoHht8uJXFedHMKgqstE2bmdOftcLldhBnem7bBpSc2mOEj4xb6oh1mti8U4aGxGFJnshDB9RhW34zq0QShyXdji+0YUy+/0RsJSpP78NKUpQqhFFz8g7Y06Tx62mxeuPVjTH/5U6PX9UQ6sRYMfBCe01Osr/larUJXVJJWnimcKJ+fUS9f6AaWTqpl9smXLSgntNzpii+71Csz38pqocemIeRTIX0m5LnjpoTS2VuW1GxIl2fJUhU/79iOSbUuFs++vhf0H+uRuivoB7n/IpNWWgYjtTNsFcOVkwh0d2B4VSx9D6APJZrhe/hDNA3QZb5P8pU9zPK1t8FLaZkTNbVJ8hykDydqm23UI7pXeiwtuVV/x0G69JLvbEa6ZBu5eoXh88HuRG0BEncE+SjinroHEncyi/1s4tqk3CapBZcdsdHj81u4u4sVMJFKWyJn/qHFa0Pk3Ru3A6ULfwVL2EkwTsRmIDfgQUdB7ENf4lSwN1PNjz6Q6Ygf7aWd0SLgfnRDeNBLy/Lw+GgDv3GgrPJR2SvgxdPgI3XSfKRO8Q4cGBvVoHKcawq4ffJlg3INAzdbnhZ1YBi6Nd20fiM76dxt76RFJUldcrDJdBahc1Xq2OBYjsB0vgI2WFNE+zCdr64NLXMttFG5HbTRFeC07Dh484PShW4Go4udEkJbujCYtnV4Dar5W8tYe/d4e5Vp5Xqqq6tcC02gMw2zJi+VzPf9FOl6RUuoaKyjdtFGt47T5iSA0+aUgdKFCQajSWE6QmjL5AXTtqkOpK0TI0QT6zQK0MCka6XBKXooq/ajGo1M6KUsY69I2j79/wdZ4dJITwi1sgAAAABJRU5ErkJggg==";
const github = "" + buildAssetsURL("github.BhrvI9T4.png");
const google = "" + buildAssetsURL("google.DPRoWoeF.png");
const gumroad = "data:image/png;base64,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";
const mastercardLabel = "data:image/png;base64,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";
const slack = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB7UExURUdwTOAcWi22fe2yLTXF8Ca9wy22fOxuQbB0UTLDvu2xLTbF8eEdWuIeW+60LjTG8Sy2fOAcWe6yLOyxLCy1fN8cWDXE8OEdWu2yLS62fDbH8u2yLTLAyTXF8OAdWTC7ouEdWi62fTbF8eEeWu2yLi+8gfW4L+kfXTjM+VkZBoUAAAAhdFJOUwCMw8OQBowNBA2QxcPy8Tw8PDxgYGBgoKKg8IOSuLq80U7y3LgAAAP3SURBVFjD3ZmJbqswEEWBYLAhEPYEEFEhYfn/L3w2EBZjg6FBeuqtqqpTcjodhvGdVJLWBQACgBUGrLC4ALqpmZmpNzQLQ+RoiqJoDjpMRpHZNEVRNI05hSNHKcs8z8tSCQ7CkVoQMFGTqAMEaTkBE5W5dogN1WIUZvelBSOZSIMH6hwVxYx96+JOOSXneXCgHGYxZ3clQfGcnCtof9JJwUrbyWntT1stKDURCQcljY53o82mYFQEaDS6VL6ERgz07h7JzkMva/01NN0hX0Sj7DS0dEtOQ1NP+jfReKYmZ6ElcMuS5Bw0KXikqpnafmYR+CqazG0JAki+dOfAN9Hz+v93aAiY+i0aRdgVcJSpERBCwyDGHiKeHfMgMhNsCXgqEjMSQDsKMRD450owcQUJPUFpfQ50PhoEY6j8eAikboGJVLiKnpBJsGdHhYi6U5eLdhiHMUCmSNK9WeChYUxHydU3IXKfNg+98BClg7NWBdGtWeChgwVaA8vTZLUiPHS8cD4KWBiw/WiJhwa7sgai6JKgd9WaZ8xiVq33dQjPTsasDpF29fWi2OQPZ6C7vl6amZWkSdos604/MW3SpLM3pxNZOD7DTJutBZrERI/zqWg2ycMQBrM1CTDQ4+QjDztOfEWJepueG45G5jJOPnY+obgcNQl3uyd2BTxF1EqKN8dA07RgspKS73sFy00VII4AexEG7BcD6a9IHwSp8PrVtBZXuqE8KKTCoUtdr3t+anCU+t7savdu1aPudNiS3enVnmFXK7If3piEbNWviXo0HMMYPqSip3b1XlVlp/pAfr0YaHkas+QPepM8sqFLkXt0OAvXVl8Tb5tM2G1N9GvNQuvXebDuSqIbAmTMvpCrXZrcoUP6b+nS9uy3kCqP3Cw2+k5H67Yn/UoQbUBJf76Y6Cf9G9uKwFQQ/cYVoWvao+GViRYsdY9eZG2tofdkvay1FfLRULTWb1xruOiQthU46F0dIuk/FOMpraD1RyVaDwwJWf3LQ4um7cNuhswoIVxFQ0OEzJpPVkfmo3Frb+Y9TD7yVP9YrxqzrKcrbaHxE3mx3xX3421f/MmeC/Xw/rw+7+G4Xq6gcQs+Llw9/PmZBIf3DkTQ3SvYkigQY2HfQh/Xn0LjG/iR4XtfRU+Hqo1dATwHTeg+PAv9mRWnoG3vNHQ3Pc9B2/5p6LdxGrq6nIje3SNPQbOwP2uWMYNMs/DYjRa1kwc6hPYQ9b0zwZRZqPb3NcdDSJC27qm0+zZCSC0c/XEM0zn50LvXujwls9ek9ODxoIc/dduC9XWyOULdu1RVV2f/+MGjuzL2EDIGw9kt9gzsCgzvNycaPvzbxRou/jPBClP6B9ZyB4KV8AhAAAAAAElFTkSuQmCC";
const stripe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABUBAMAAAAsdUl2AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUdwTG964sTH7HV/4Wt24+rn0pad42hz43J94oWN5IaP44eP5YuT4mZx5Ghz6rCnry4AAAANdFJOUwDTFprpCCn3tH9TaD0Mz9NeAAACkklEQVRIx33Wz2sTQRQH8CFhg6a9RKNVxFLFCo0XCxqDRS8W7SUh5lSoh2hFKfYS8NBiEkSrkKIeVIQiighaLRa8tDRSQZGKP/AgFII/ZiAYiEVm/gY3yW7mzY+8uS2ffdnNvu+bXULkcvZ/Kc/NPXzzsZ+Yy7mUiBao4JxejpSepzU9M1hoUGMxISo7lpUTDvQICpeo71yTOpDiVFsit+RrVy81l9jiaeA2tzDz+b1N2xxOUYznOcbd9mKf93CUj1OMwwWUT3OUFynGzh2UQwWUN3OURyG7QXAXBwwfCssNLSyUE1Em2nwRFP9tBSTzdbDIPV60NJg4n2dY6/ARqH4n05VZKTbT8ljqeh/M9XiqwcckV9VwD1xT+1XJqtHvV6vZQXN24K39SBv8Fj7HuMHfINfiev0+pQ312T6VR9WO8RNPFdYbytaPwh8IJfU+861gdC05Ft8fSD5vyUkt3vHirX/QdntUa3d9P2sNY9VvfqjXmtMreDk/jG4t9I///MesG4Bs/3jR5u2rk082r8lwfShy5NeJM7HbcJYHrYnNCOPeYedDK/oFakp0nIke1dlrbc8/pDi7qgUzcJ/b9mTpR6CfNHIfhtn7bU7VPOCfJKDPBQz+LxK8pXEXqN4gwfqsWt8NR5YEOd+V7VT9z2UqlLnaxOGtuUwFnCt45/kmu7kbWfVOGEsqjyXovVbrI0OvLuydfAnbzrb57F5BVIaHTzGuxiUojzkXTG3oE8jGcrdJjN0wYZxHuREWhBtjgPAGwZjdQLmaxZhtJxg3izsyu0kQZtNp74vG+s3S3rcsg+vqkpybF0ntBDH1DIYzlkgKId/CldKa9ikXuxf1X/O568vmC4lkJsuJSCRSWj0H8T/aJp1ERqHa8wAAAABJRU5ErkJggg==";
const _sfc_main$9 = {
  __name: "AnalyticsDepositWithdraw",
  __ssrInlineRender: true,
  setup(__props) {
    const deposits = [
      {
        title: "Gumroad Account",
        subtitle: "Sell UI Kit",
        amount: "+$4,650",
        logo: gumroad
      },
      {
        title: "Mastercard",
        subtitle: "Wallet deposit",
        amount: "+$92,705",
        logo: mastercardLabel
      },
      {
        title: "Stripe Account",
        subtitle: "iOS Application",
        amount: "+$957",
        logo: stripe
      },
      {
        title: "American Bank",
        subtitle: "American Bank",
        amount: "+$6,837",
        logo: americanBank
      },
      {
        title: "Bank Account",
        subtitle: "Wallet deposit",
        amount: "+$8,934",
        logo: citiBank
      }
    ];
    const withdraws = [
      {
        title: "Google Adsense",
        subtitle: "PayPal deposit",
        amount: "-$145",
        logo: google
      },
      {
        title: "GitHub Enterprise",
        subtitle: "Security & compliance",
        amount: "-$1870",
        logo: github
      },
      {
        title: "Upgrade Slack Plan",
        subtitle: "Debit card deposit",
        amount: "-$450",
        logo: slack
      },
      {
        title: "DigitalOcean",
        subtitle: "Cloud Hosting",
        amount: "-$540",
        logo: digitalOcean
      },
      {
        title: "AWS Account",
        subtitle: "Choosing a Cloud Platform",
        amount: "-$21",
        logo: aws
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { "no-gutters": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, null, {
                          append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h6 class="text-h6" data-v-0a37969d${_scopeId4}><a href="javascript:void(0)" class="text-primary" data-v-0a37969d${_scopeId4}>View All</a></h6>`);
                            } else {
                              return [
                                createVNode("h6", { class: "text-h6" }, [
                                  createVNode("a", {
                                    href: "javascript:void(0)",
                                    class: "text-primary"
                                  }, "View All")
                                ])
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Deposit`);
                                  } else {
                                    return [
                                      createTextVNode("Deposit")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Deposit")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VList, { class: "card-list" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(deposits, (deposit) => {
                                      _push6(ssrRenderComponent(VListItem, {
                                        key: deposit.logo
                                      }, {
                                        prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="me-4" data-v-0a37969d${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VImg, {
                                              height: 30,
                                              width: 30,
                                              src: deposit.logo
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "me-4" }, [
                                                createVNode(VImg, {
                                                  height: 30,
                                                  width: 30,
                                                  src: deposit.logo
                                                }, null, 8, ["src"])
                                              ])
                                            ];
                                          }
                                        }),
                                        append: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemAction, { class: "text-success font-weight-medium" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(deposit.amount)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(deposit.amount), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemAction, { class: "text-success font-weight-medium" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(deposit.amount), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(deposit.title)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(deposit.title), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VListItemSubtitle, { class: "text-body-1" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(deposit.subtitle)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(deposit.subtitle), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(deposit.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(deposit.subtitle), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(), createBlock(Fragment, null, renderList(deposits, (deposit) => {
                                        return createVNode(VListItem, {
                                          key: deposit.logo
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode("div", { class: "me-4" }, [
                                              createVNode(VImg, {
                                                height: 30,
                                                width: 30,
                                                src: deposit.logo
                                              }, null, 8, ["src"])
                                            ])
                                          ]),
                                          append: withCtx(() => [
                                            createVNode(VListItemAction, { class: "text-success font-weight-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(deposit.amount), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(deposit.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(deposit.subtitle), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 64))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VList, { class: "card-list" }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(deposits, (deposit) => {
                                      return createVNode(VListItem, {
                                        key: deposit.logo
                                      }, {
                                        prepend: withCtx(() => [
                                          createVNode("div", { class: "me-4" }, [
                                            createVNode(VImg, {
                                              height: 30,
                                              width: 30,
                                              src: deposit.logo
                                            }, null, 8, ["src"])
                                          ])
                                        ]),
                                        append: withCtx(() => [
                                          createVNode(VListItemAction, { class: "text-success font-weight-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(deposit.amount), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(deposit.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(deposit.subtitle), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 64))
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardItem, null, {
                            append: withCtx(() => [
                              createVNode("h6", { class: "text-h6" }, [
                                createVNode("a", {
                                  href: "javascript:void(0)",
                                  class: "text-primary"
                                }, "View All")
                              ])
                            ]),
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Deposit")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VList, { class: "card-list" }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(deposits, (deposit) => {
                                    return createVNode(VListItem, {
                                      key: deposit.logo
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode("div", { class: "me-4" }, [
                                          createVNode(VImg, {
                                            height: 30,
                                            width: 30,
                                            src: deposit.logo
                                          }, null, 8, ["src"])
                                        ])
                                      ]),
                                      append: withCtx(() => [
                                        createVNode(VListItemAction, { class: "text-success font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(deposit.amount), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(deposit.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(deposit.subtitle), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, {
                    vertical: _ctx.$vuetify.display.mdAndUp
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, null, {
                          append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h6 class="text-h6" data-v-0a37969d${_scopeId4}><a href="javascript:void(0)" class="text-primary" data-v-0a37969d${_scopeId4}>View All</a></h6>`);
                            } else {
                              return [
                                createVNode("h6", { class: "text-h6" }, [
                                  createVNode("a", {
                                    href: "javascript:void(0)",
                                    class: "text-primary"
                                  }, "View All")
                                ])
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Withdraw`);
                                  } else {
                                    return [
                                      createTextVNode("Withdraw")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Withdraw")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VList, { class: "card-list" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(withdraws, (withdraw) => {
                                      _push6(ssrRenderComponent(VListItem, {
                                        key: withdraw.logo
                                      }, {
                                        prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="me-4" data-v-0a37969d${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VImg, {
                                              height: 30,
                                              width: 30,
                                              src: withdraw.logo
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "me-4" }, [
                                                createVNode(VImg, {
                                                  height: 30,
                                                  width: 30,
                                                  src: withdraw.logo
                                                }, null, 8, ["src"])
                                              ])
                                            ];
                                          }
                                        }),
                                        append: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemAction, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span class="text-error font-weight-medium" data-v-0a37969d${_scopeId7}>${ssrInterpolate(withdraw.amount)}</span>`);
                                                } else {
                                                  return [
                                                    createVNode("span", { class: "text-error font-weight-medium" }, toDisplayString(withdraw.amount), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemAction, null, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "text-error font-weight-medium" }, toDisplayString(withdraw.amount), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(withdraw.title)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(withdraw.title), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VListItemSubtitle, { class: "text-body-1" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(withdraw.subtitle)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(withdraw.subtitle), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(withdraw.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(withdraw.subtitle), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(), createBlock(Fragment, null, renderList(withdraws, (withdraw) => {
                                        return createVNode(VListItem, {
                                          key: withdraw.logo
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode("div", { class: "me-4" }, [
                                              createVNode(VImg, {
                                                height: 30,
                                                width: 30,
                                                src: withdraw.logo
                                              }, null, 8, ["src"])
                                            ])
                                          ]),
                                          append: withCtx(() => [
                                            createVNode(VListItemAction, null, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "text-error font-weight-medium" }, toDisplayString(withdraw.amount), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(withdraw.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(withdraw.subtitle), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 64))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VList, { class: "card-list" }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(withdraws, (withdraw) => {
                                      return createVNode(VListItem, {
                                        key: withdraw.logo
                                      }, {
                                        prepend: withCtx(() => [
                                          createVNode("div", { class: "me-4" }, [
                                            createVNode(VImg, {
                                              height: 30,
                                              width: 30,
                                              src: withdraw.logo
                                            }, null, 8, ["src"])
                                          ])
                                        ]),
                                        append: withCtx(() => [
                                          createVNode(VListItemAction, null, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "text-error font-weight-medium" }, toDisplayString(withdraw.amount), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(withdraw.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(withdraw.subtitle), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 64))
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardItem, null, {
                            append: withCtx(() => [
                              createVNode("h6", { class: "text-h6" }, [
                                createVNode("a", {
                                  href: "javascript:void(0)",
                                  class: "text-primary"
                                }, "View All")
                              ])
                            ]),
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Withdraw")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VList, { class: "card-list" }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(withdraws, (withdraw) => {
                                    return createVNode(VListItem, {
                                      key: withdraw.logo
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode("div", { class: "me-4" }, [
                                          createVNode(VImg, {
                                            height: 30,
                                            width: 30,
                                            src: withdraw.logo
                                          }, null, 8, ["src"])
                                        ])
                                      ]),
                                      append: withCtx(() => [
                                        createVNode(VListItemAction, null, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "text-error font-weight-medium" }, toDisplayString(withdraw.amount), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(withdraw.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(withdraw.subtitle), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, null, {
                          append: withCtx(() => [
                            createVNode("h6", { class: "text-h6" }, [
                              createVNode("a", {
                                href: "javascript:void(0)",
                                class: "text-primary"
                              }, "View All")
                            ])
                          ]),
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Deposit")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VList, { class: "card-list" }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(deposits, (deposit) => {
                                  return createVNode(VListItem, {
                                    key: deposit.logo
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode("div", { class: "me-4" }, [
                                        createVNode(VImg, {
                                          height: 30,
                                          width: 30,
                                          src: deposit.logo
                                        }, null, 8, ["src"])
                                      ])
                                    ]),
                                    append: withCtx(() => [
                                      createVNode(VListItemAction, { class: "text-success font-weight-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(deposit.amount), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(deposit.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(deposit.subtitle), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider, {
                      vertical: _ctx.$vuetify.display.mdAndUp
                    }, null, 8, ["vertical"]),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, null, {
                          append: withCtx(() => [
                            createVNode("h6", { class: "text-h6" }, [
                              createVNode("a", {
                                href: "javascript:void(0)",
                                class: "text-primary"
                              }, "View All")
                            ])
                          ]),
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Withdraw")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VList, { class: "card-list" }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(withdraws, (withdraw) => {
                                  return createVNode(VListItem, {
                                    key: withdraw.logo
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode("div", { class: "me-4" }, [
                                        createVNode(VImg, {
                                          height: 30,
                                          width: 30,
                                          src: withdraw.logo
                                        }, null, 8, ["src"])
                                      ])
                                    ]),
                                    append: withCtx(() => [
                                      createVNode(VListItemAction, null, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-error font-weight-medium" }, toDisplayString(withdraw.amount), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(withdraw.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(withdraw.subtitle), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { "no-gutters": "" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardItem, null, {
                        append: withCtx(() => [
                          createVNode("h6", { class: "text-h6" }, [
                            createVNode("a", {
                              href: "javascript:void(0)",
                              class: "text-primary"
                            }, "View All")
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Deposit")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VList, { class: "card-list" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(deposits, (deposit) => {
                                return createVNode(VListItem, {
                                  key: deposit.logo
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode("div", { class: "me-4" }, [
                                      createVNode(VImg, {
                                        height: 30,
                                        width: 30,
                                        src: deposit.logo
                                      }, null, 8, ["src"])
                                    ])
                                  ]),
                                  append: withCtx(() => [
                                    createVNode(VListItemAction, { class: "text-success font-weight-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(deposit.amount), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(deposit.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(deposit.subtitle), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider, {
                    vertical: _ctx.$vuetify.display.mdAndUp
                  }, null, 8, ["vertical"]),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardItem, null, {
                        append: withCtx(() => [
                          createVNode("h6", { class: "text-h6" }, [
                            createVNode("a", {
                              href: "javascript:void(0)",
                              class: "text-primary"
                            }, "View All")
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Withdraw")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VList, { class: "card-list" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(withdraws, (withdraw) => {
                                return createVNode(VListItem, {
                                  key: withdraw.logo
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode("div", { class: "me-4" }, [
                                      createVNode(VImg, {
                                        height: 30,
                                        width: 30,
                                        src: withdraw.logo
                                      }, null, 8, ["src"])
                                    ])
                                  ]),
                                  append: withCtx(() => [
                                    createVNode(VListItemAction, null, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-error font-weight-medium" }, toDisplayString(withdraw.amount), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(withdraw.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(withdraw.subtitle), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
                            ]),
                            _: 1
                          })
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
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/dashboard/AnalyticsDepositWithdraw.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const AnalyticsDepositWithdraw = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-0a37969d"]]);
const _sfc_main$8 = {
  __name: "MoreBtn",
  __ssrInlineRender: true,
  props: {
    menuList: {
      type: Array,
      required: false
    },
    itemProps: {
      type: Boolean,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(_component_IconBtn, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, { icon: "ri-more-2-line" }, null, _parent2, _scopeId));
            if (props.menuList) {
              _push2(ssrRenderComponent(VMenu, { activator: "parent" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VList, {
                      items: props.menuList,
                      "item-props": props.itemProps
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VList, {
                        items: props.menuList,
                        "item-props": props.itemProps
                      }, null, 8, ["items", "item-props"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(VIcon, { icon: "ri-more-2-line" }),
              props.menuList ? (openBlock(), createBlock(VMenu, {
                key: 0,
                activator: "parent"
              }, {
                default: withCtx(() => [
                  createVNode(VList, {
                    items: props.menuList,
                    "item-props": props.itemProps
                  }, null, 8, ["items", "item-props"])
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@core/components/MoreBtn.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "AnalyticsSalesByCountries",
  __ssrInlineRender: true,
  setup(__props) {
    const salesByCountries = [
      {
        abbr: "US",
        amount: "$8,656k",
        country: "United states of america",
        change: "+25.8%",
        sales: "894k",
        color: "success"
      },
      {
        abbr: "UK",
        amount: "$2,415k",
        country: "United kingdom",
        change: "-6.2%",
        sales: "645k",
        color: "error"
      },
      {
        abbr: "IN",
        amount: "$865k",
        country: "India",
        change: "+12.4%",
        sales: "148k",
        color: "warning"
      },
      {
        abbr: "JA",
        amount: "$745k",
        country: "Japan",
        change: "-11.9%",
        sales: "86k",
        color: "secondary"
      },
      {
        abbr: "KO",
        amount: "$45k",
        country: "Korea",
        change: "+16.2%",
        sales: "42k",
        color: "error"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$8;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, null, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="me-n3" data-v-1abc29a1${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MoreBtn, null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "me-n3" }, [
                      createVNode(_component_MoreBtn)
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Sales by Countries`);
                      } else {
                        return [
                          createTextVNode("Sales by Countries")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Sales by Countries")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, { class: "card-list" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(salesByCountries, (data) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: data.country
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VAvatar, {
                                  color: data.color,
                                  variant: "tonal",
                                  size: "40"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(data.abbr)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(data.abbr), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VAvatar, {
                                    color: data.color,
                                    variant: "tonal",
                                    size: "40"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(data.abbr), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ];
                              }
                            }),
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div data-v-1abc29a1${_scopeId4}><h6 class="text-h6 mb-1" data-v-1abc29a1${_scopeId4}>${ssrInterpolate(data.sales)}</h6><div class="text-body-2 text-disabled text-end" data-v-1abc29a1${_scopeId4}> Sales </div></div>`);
                              } else {
                                return [
                                  createVNode("div", null, [
                                    createVNode("h6", { class: "text-h6 mb-1" }, toDisplayString(data.sales), 1),
                                    createVNode("div", { class: "text-body-2 text-disabled text-end" }, " Sales ")
                                  ])
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, { class: "mb-1 d-flex align-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<h6 class="text-h6" data-v-1abc29a1${_scopeId5}>${ssrInterpolate(data.amount)}</h6>`);
                                      _push6(ssrRenderComponent(VIcon, {
                                        size: "24",
                                        color: data.change.charAt(0) === "+" ? "success" : "error",
                                        class: "mx-1"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(data.change.charAt(0) === "+" ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line")}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(data.change.charAt(0) === "+" ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<div class="${ssrRenderClass([`${data.change.charAt(0) === "+" ? "text-success" : "text-error"}`, "text-body-1"])}" data-v-1abc29a1${_scopeId5}>${ssrInterpolate(data.change.slice(1))}</div>`);
                                    } else {
                                      return [
                                        createVNode("h6", { class: "text-h6" }, toDisplayString(data.amount), 1),
                                        createVNode(VIcon, {
                                          size: "24",
                                          color: data.change.charAt(0) === "+" ? "success" : "error",
                                          class: "mx-1"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(data.change.charAt(0) === "+" ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"]),
                                        createVNode("div", {
                                          class: [`${data.change.charAt(0) === "+" ? "text-success" : "text-error"}`, "text-body-1"]
                                        }, toDisplayString(data.change.slice(1)), 3)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VListItemSubtitle, { class: "text-body-1 me-2" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(data.country)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(data.country), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, { class: "mb-1 d-flex align-center" }, {
                                    default: withCtx(() => [
                                      createVNode("h6", { class: "text-h6" }, toDisplayString(data.amount), 1),
                                      createVNode(VIcon, {
                                        size: "24",
                                        color: data.change.charAt(0) === "+" ? "success" : "error",
                                        class: "mx-1"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(data.change.charAt(0) === "+" ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"]),
                                      createVNode("div", {
                                        class: [`${data.change.charAt(0) === "+" ? "text-success" : "text-error"}`, "text-body-1"]
                                      }, toDisplayString(data.change.slice(1)), 3)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, { class: "text-body-1 me-2" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(data.country), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(salesByCountries, (data) => {
                            return createVNode(VListItem, {
                              key: data.country
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  color: data.color,
                                  variant: "tonal",
                                  size: "40"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(data.abbr), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              append: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("h6", { class: "text-h6 mb-1" }, toDisplayString(data.sales), 1),
                                  createVNode("div", { class: "text-body-2 text-disabled text-end" }, " Sales ")
                                ])
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, { class: "mb-1 d-flex align-center" }, {
                                  default: withCtx(() => [
                                    createVNode("h6", { class: "text-h6" }, toDisplayString(data.amount), 1),
                                    createVNode(VIcon, {
                                      size: "24",
                                      color: data.change.charAt(0) === "+" ? "success" : "error",
                                      class: "mx-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(data.change.charAt(0) === "+" ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"]),
                                    createVNode("div", {
                                      class: [`${data.change.charAt(0) === "+" ? "text-success" : "text-error"}`, "text-body-1"]
                                    }, toDisplayString(data.change.slice(1)), 3)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItemSubtitle, { class: "text-body-1 me-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(data.country), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, { class: "card-list" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(salesByCountries, (data) => {
                          return createVNode(VListItem, {
                            key: data.country
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, {
                                color: data.color,
                                variant: "tonal",
                                size: "40"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(data.abbr), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            append: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("h6", { class: "text-h6 mb-1" }, toDisplayString(data.sales), 1),
                                createVNode("div", { class: "text-body-2 text-disabled text-end" }, " Sales ")
                              ])
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "mb-1 d-flex align-center" }, {
                                default: withCtx(() => [
                                  createVNode("h6", { class: "text-h6" }, toDisplayString(data.amount), 1),
                                  createVNode(VIcon, {
                                    size: "24",
                                    color: data.change.charAt(0) === "+" ? "success" : "error",
                                    class: "mx-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(data.change.charAt(0) === "+" ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"]),
                                  createVNode("div", {
                                    class: [`${data.change.charAt(0) === "+" ? "text-success" : "text-error"}`, "text-body-1"]
                                  }, toDisplayString(data.change.slice(1)), 3)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VListItemSubtitle, { class: "text-body-1 me-2" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(data.country), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
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
              createVNode(VCardItem, null, {
                append: withCtx(() => [
                  createVNode("div", { class: "me-n3" }, [
                    createVNode(_component_MoreBtn)
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Sales by Countries")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VList, { class: "card-list" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(salesByCountries, (data) => {
                        return createVNode(VListItem, {
                          key: data.country
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VAvatar, {
                              color: data.color,
                              variant: "tonal",
                              size: "40"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(data.abbr), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          append: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("h6", { class: "text-h6 mb-1" }, toDisplayString(data.sales), 1),
                              createVNode("div", { class: "text-body-2 text-disabled text-end" }, " Sales ")
                            ])
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "mb-1 d-flex align-center" }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6" }, toDisplayString(data.amount), 1),
                                createVNode(VIcon, {
                                  size: "24",
                                  color: data.change.charAt(0) === "+" ? "success" : "error",
                                  class: "mx-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(data.change.charAt(0) === "+" ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"]),
                                createVNode("div", {
                                  class: [`${data.change.charAt(0) === "+" ? "text-success" : "text-error"}`, "text-body-1"]
                                }, toDisplayString(data.change.slice(1)), 3)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VListItemSubtitle, { class: "text-body-1 me-2" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(data.country), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 64))
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
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/dashboard/AnalyticsSalesByCountries.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const AnalyticsSalesByCountries = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-1abc29a1"]]);
const aviato = "data:image/png;base64,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";
const bitbank = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU8SURBVHgBzZhrbBRVFMfPvXceO7vbNi2wuKU20OIr1MimYrA+0iAalfJF+KDGDxqNjwSC8REJSLAaE6N8MBCNSqIfwAeBBBKNqKmGoEFTg8VaHgYIrd20lL7oa7Y7ex+eO31A4gd3OxPdf7I7d+5kcn9zz7nnnHsJXKXtjduNrsVdhjVgUfiPFXNiio9zWZGpEM1HmvlMP5m5bnxgo5VlWQZFIFvYYtfhXR42lQ+EcHaxwGkJKmhDbQNtPdcqiDZrb7zXgiJUcjzpUe1zUKTSbPT/WBD5SrOFDpfxSslr27z6N5vFPaXlpQQCKnTALZv7b0yU9Owrd7p3P7J+OAkBFSpgXX2dUZsY3AncTSpijLqXmQcBFeoCeWLNkU0s29egMLwqIbp6B2PjABMQRKEAlnoZ8srmicaoOL9VccRjFLiSJ1vbWBYCKhTAZza4iyusszsh69pAdbw3QRD7zOjwqIKACgy4bg2NVznnt0JmcAkQdGnCgEjgY1nrFISgQIC310etO6p/fMzm6fUgFVEaDiOXAmMgnYY0hKA5A+p4t+aWX1Y64sJLKpcx9czpGSRoYkViPReH7VEIQXMGfHld+7Xl/NQbxLuc9E1LsUJizK+PsNV+9PdFGYDgjHMCbKqH6FLv5NPMG0kRJUE7naKaTAAxKWS5fbKvD8AJoQQpGDDpGLRR/vCUdXbwSblIMLD9dYFSIAkuWgSVEQd2PNjSMDuCfWU0ZhLZKerOfrTfGchnvIIBH079dXO0P72JuJOlsgNrN8wVGPpA4E+ibYUUEE+1vRN3COhM7ydjna8MDN7+B1AojV880bT20Xu/+nLM/bfxCkp12rS1k23od+41emCi/9j0Z7Kp8pc62KQYrBWamwpQhsAOfeVADImznQOTXFp+69LJu/IZsyDA1U7rFuYON/pg+KbSPw1nTkHqeyOOPPic6nv0QWKSK1dT+W3hLDx24Oj87/MZM2/A5ocmVtljPc8TPU961mZmzpxuayq8mghIDDUNBT4U0ebFPn0PTtnQhbGVGzuO9/J8xs0bkIlMBKOJJFSbSU29SWHWtGq6z4ghqIazYBYSNCS2pW2NjsglL3x4qObPfMfNe5F8ccT57vHllc/ZOft+KrkjPZwldC+pKxe9QLCNqaSMlAw0CPQB5SEtx6yCX0VLPCBxzrNs4e49Py87WEiOzhuwYyTGX29f/dmqm7oOsVyEABmfcrgZ4UytqOm+j0z0N/BJBMsYCGmD9ExgA+ieEXa6feTudzuOx/IybcGAWvrLDx0rny7wnH88v7Ou/wYstMAwOchcDgGzQHLaxhXn05dSGz7+JjYEBSrUgtWKeMuUpP4iYQIzTA7DiyBj4yT+3vtHrz8+l9QXGmCyOklpRCBgFAhGb4WA1AbO5bz937bXfTrX2jA0wLWNkxVgGNUqUoKBLudDclbxU+fo8h0tf5TPue4PDXDxou4UMDvihx0EVNIc6hmvfXXH3gVdEEDh7Elw/2tH+lYAi/qBj2BGdr3ktl0Hlp0IWnKFAnhbatg2TS8liQ0kaoKXK9u352D152HsSULZFyervLhpyhrdlrSk7dcL1714okME3tFphQKYiDhRpcQCwqzL6cHKZ/d+4o5ASDL0yeZEZiLQGUpfrztSVbPgAy5oz1tvsw4ISZqNFNvh5dXSJ60sWhUl86x5RQl42j3NWWdnp0zIBC2bX1ZU54TdZ7pFy28tOR/q8LnDWT2dUCRKOkmumXR71rT6wLqpskkNVQ4R5rLAB4+FSi8ImqUy4SZ489fNuZn+vwHhZxgOnrENyAAAAABJRU5ErkJggg==";
const zipcar = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUbSURBVHgB7ZjvaxxFGMefmdnd2900d+bapl5NY0OkSI21EpQaUYPUYm1QaGtRqyIaW1ONij+Q+qZE0H+gvvNVQUEQ9Y1akYLim0JeSBWktY02vzRNm1ySu8vt7Y+Z9Zn9YU4Rcncr9l70Cw+zt3vcfO77zDOzMwSqdKz/mDKxeULR5jQK/7NajBbfK3kia2X5yHcjXnyfxO3w7mHNZjaDJlCKp/jxk8cdvPQDIIRLNQucFKec9nX30dGxUU5kWmfWzGjQhMqVcg6VYw6aVJKNXo2CqFWSrWnhYl0DTKr/rEC6Dg61K7nuBzhnilie/jb/yQdThYWCDwnFerf0qpBAqa4epeP5tw+7bR0fW5DaXyHqnkoqO6hs6zf0Uvm0dXmCQwIlTnHH3qfud5n+rueRNBcAHobtEr0otDf4PQ8/kW5LE0igRIAdg291O2rra1yQlMBkxoCuhHSA5H1zaHnnkW5IoIYBZWoh2/m0K2ifhPP8CA4T6uBSb2G7YNOt82bnsNfe3fAy2jBgtn/fTZzQR4VPmBBV7iGYjVFByDK6OOfQPfk7D/ZAg2oIMNtzX4qtXz/MfdrJo5TKcGIwF2AZo4SRr5Dc7+r1Q2LngVZoQA0Brtk58JAHym7BgcRjzvXC1AaAGMtRlPClacEhj1zUb++HBlQ3YOfewbVcb32F+2SD66/A2VXOyShWfMjPY4tRLtL0DM8cEdv21O1i3RO1v7nnMYeT7R6vKgoeuhY4h3CFsg+/nSFQmAVAl4GgDUtt7I7W7nt33QZfflpPf3U5uGn/mzlXSQ2ha6oTjTnpnoVQVgQoU3p+lMDiHyFc8Kfwu8vzYPxyrvVl6+YH19TTZ12AouvGo46gmwP3YjjpXuSgLIqpMWyv/EsvuF6VON3+k9j1JNShmgG7jry3wwH1GUwpidMaV2ww9tC5xRLA5QtQtdMJwYiOY0mGRpQrwjyq7nhhfa391gRo9t6lVczMCAKxGM6OwKSDslqLeD1zHudD9+9gKkYqBaBjaxj4HMi6M2LrS1CjagLM3n1gv+UrfUFapXNuVVGgc0UbYA7TujT9DzAjDNOQ28owDLy/6GuD0P96Zy19rwrYdkuvWtH0F3GOo8EqIec6XlUUckJGwPxF/DIuaAwBVdyCaXrkWtQGsJGbRCHXjaubnoMatDpg/8CtFU63xXCWuzLfSecKcuxdwmd5rFZ8zvGeVwl/2IwADaOqxdAREv/0s5nHj25JDAi0pQPHHHWiqcSqmu9K0k0EKk6EcIFw/PkY5XL40Yyh9NBBPQrGSNbS1u1NDGhNT45y4S/JYogLQs51S244FkszWDRYvTK9BNNLtTDNihpCylY3otBXrg0ThMbEbGLAmc/fv0R974QlVlJbiOAqRXRvCoL1iERgqgwlBJPv+7YdpjSu4rjNtIifxfeffZQYUCr96xfv6MQ9gam2i/HcV8DCuBAud9I1JXKNaVEFa2FY6KJrR1NN6BykW8TkBnfucHnstLNa3+TQwCETapS+79Ubzotcz/wkUQuzODAZC1KbSfkmU4lC5Ucqw8e3RGoojKnyHm6/qdHiMTNLma7x6fTUj1/Pf/Phci191gV4NXRt455UVJ5sQpNKslF57ApNKsnGzA6TrNXWNs3parXOls96bHx8XLSLdppZl2mq8Th1boqf+uGUG0CdHDtpy4NraBLljJwnmeT1X6mVB9YDGwf8/MY8YWWW6DylEQUFYVPRXm73Rr4aceP7fwL4fmvSvDNAsQAAAABJRU5ErkJggg==";
const _sfc_main$6 = {
  __name: "AnalyticsTotalEarning",
  __ssrInlineRender: true,
  setup(__props) {
    const earnings = [
      {
        avatar: zipcar,
        title: "Zipcar",
        subtitle: "Vuejs, React & HTML",
        amount: "$24,895.65",
        progress: "primary"
      },
      {
        avatar: bitbank,
        title: "Bitbank",
        subtitle: "Sketch, Figma & XD",
        amount: "$8,6500.20",
        progress: "info"
      },
      {
        avatar: aviato,
        title: "Aviato",
        subtitle: "HTML & Anguler",
        amount: "$1,2450.80",
        progress: "secondary"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$8;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, null, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="me-n3" data-v-0a3f473d${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MoreBtn, null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "me-n3" }, [
                      createVNode(_component_MoreBtn)
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Total Earning`);
                      } else {
                        return [
                          createTextVNode("Total Earning")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Total Earning")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center" data-v-0a3f473d${_scopeId2}><h3 class="text-h3" data-v-0a3f473d${_scopeId2}> $24,895 </h3>`);
                  _push3(ssrRenderComponent(VIcon, {
                    size: "24",
                    icon: "ri-arrow-up-s-line",
                    color: "success"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-success" data-v-0a3f473d${_scopeId2}> 10% </div></div><div class="text-body-1 mb-12" data-v-0a3f473d${_scopeId2}> Compared to $84,325 last year </div>`);
                  _push3(ssrRenderComponent(VList, { class: "card-list" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(earnings, (earning) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: earning.title
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VAvatar, {
                                  rounded: "",
                                  image: earning.avatar,
                                  variant: "tonal"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VAvatar, {
                                    rounded: "",
                                    image: earning.avatar,
                                    variant: "tonal"
                                  }, null, 8, ["image"])
                                ];
                              }
                            }),
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div data-v-0a3f473d${_scopeId4}><h6 class="text-h6 mb-2" data-v-0a3f473d${_scopeId4}>${ssrInterpolate(earning.amount)}</h6>`);
                                _push5(ssrRenderComponent(VProgressLinear, {
                                  color: earning.progress,
                                  "model-value": "80",
                                  "rounded-bar": "",
                                  rounded: ""
                                }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", null, [
                                    createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(earning.amount), 1),
                                    createVNode(VProgressLinear, {
                                      color: earning.progress,
                                      "model-value": "80",
                                      "rounded-bar": "",
                                      rounded: ""
                                    }, null, 8, ["color"])
                                  ])
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, { class: "font-weight-medium" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(earning.title)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(earning.title), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VListItemSubtitle, { class: "text-body-1" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(earning.subtitle)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(earning.subtitle), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(earning.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(earning.subtitle), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(earnings, (earning) => {
                            return createVNode(VListItem, {
                              key: earning.title
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  rounded: "",
                                  image: earning.avatar,
                                  variant: "tonal"
                                }, null, 8, ["image"])
                              ]),
                              append: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(earning.amount), 1),
                                  createVNode(VProgressLinear, {
                                    color: earning.progress,
                                    "model-value": "80",
                                    "rounded-bar": "",
                                    rounded: ""
                                  }, null, 8, ["color"])
                                ])
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(earning.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(earning.subtitle), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode("h3", { class: "text-h3" }, " $24,895 "),
                      createVNode(VIcon, {
                        size: "24",
                        icon: "ri-arrow-up-s-line",
                        color: "success"
                      }),
                      createVNode("div", { class: "text-success" }, " 10% ")
                    ]),
                    createVNode("div", { class: "text-body-1 mb-12" }, " Compared to $84,325 last year "),
                    createVNode(VList, { class: "card-list" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(earnings, (earning) => {
                          return createVNode(VListItem, {
                            key: earning.title
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, {
                                rounded: "",
                                image: earning.avatar,
                                variant: "tonal"
                              }, null, 8, ["image"])
                            ]),
                            append: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(earning.amount), 1),
                                createVNode(VProgressLinear, {
                                  color: earning.progress,
                                  "model-value": "80",
                                  "rounded-bar": "",
                                  rounded: ""
                                }, null, 8, ["color"])
                              ])
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(earning.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(earning.subtitle), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
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
              createVNode(VCardItem, null, {
                append: withCtx(() => [
                  createVNode("div", { class: "me-n3" }, [
                    createVNode(_component_MoreBtn)
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Total Earning")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center" }, [
                    createVNode("h3", { class: "text-h3" }, " $24,895 "),
                    createVNode(VIcon, {
                      size: "24",
                      icon: "ri-arrow-up-s-line",
                      color: "success"
                    }),
                    createVNode("div", { class: "text-success" }, " 10% ")
                  ]),
                  createVNode("div", { class: "text-body-1 mb-12" }, " Compared to $84,325 last year "),
                  createVNode(VList, { class: "card-list" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(earnings, (earning) => {
                        return createVNode(VListItem, {
                          key: earning.title
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VAvatar, {
                              rounded: "",
                              image: earning.avatar,
                              variant: "tonal"
                            }, null, 8, ["image"])
                          ]),
                          append: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(earning.amount), 1),
                              createVNode(VProgressLinear, {
                                color: earning.progress,
                                "model-value": "80",
                                "rounded-bar": "",
                                rounded: ""
                              }, null, 8, ["color"])
                            ])
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(earning.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(earning.subtitle), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 64))
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
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/dashboard/AnalyticsTotalEarning.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const AnalyticsTotalEarning = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-0a3f473d"]]);
const hexToRgb = (hex) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${Number.parseInt(result[1], 16)},${Number.parseInt(result[2], 16)},${Number.parseInt(result[3], 16)}` : null;
};
const _sfc_main$5 = {
  __name: "AnalyticsTotalProfitLineCharts",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const series = [{
      data: [
        0,
        20,
        5,
        30,
        15,
        45
      ]
    }];
    const chartOptions = computed(() => {
      const currentTheme = vuetifyTheme.current.value.colors;
      const variableTheme = vuetifyTheme.current.value.variables;
      return {
        chart: {
          parentHeightOffset: 0,
          toolbar: { show: false }
        },
        tooltip: { enabled: false },
        grid: {
          borderColor: `rgba(${hexToRgb(String(variableTheme["border-color"]))},${variableTheme["border-opacity"]})`,
          strokeDashArray: 6,
          xaxis: { lines: { show: true } },
          yaxis: { lines: { show: false } },
          padding: {
            top: -10,
            left: -7,
            right: 5,
            bottom: 5
          }
        },
        stroke: {
          width: 3,
          lineCap: "butt",
          curve: "straight"
        },
        colors: [currentTheme.primary],
        markers: {
          size: 6,
          offsetY: 4,
          offsetX: -2,
          strokeWidth: 3,
          colors: ["transparent"],
          strokeColors: "transparent",
          discrete: [{
            size: 5.5,
            seriesIndex: 0,
            strokeColor: currentTheme.primary,
            fillColor: currentTheme.surface,
            dataPointIndex: series[0].data.length - 1
          }],
          hover: { size: 7 }
        },
        xaxis: {
          labels: { show: false },
          axisTicks: { show: false },
          axisBorder: { show: false }
        },
        yaxis: { labels: { show: false } }
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __nuxt_component_1;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h4 class="text-h4"${_scopeId2}> $86.4k </h4>`);
                  _push3(ssrRenderComponent(_component_VueApexCharts, {
                    type: "line",
                    options: unref(chartOptions),
                    series,
                    height: 80,
                    class: "my-1"
                  }, null, _parent3, _scopeId2));
                  _push3(`<h6 class="text-h6 text-center"${_scopeId2}> Total Profit </h6>`);
                } else {
                  return [
                    createVNode("h4", { class: "text-h4" }, " $86.4k "),
                    createVNode(_component_VueApexCharts, {
                      type: "line",
                      options: unref(chartOptions),
                      series,
                      height: 80,
                      class: "my-1"
                    }, null, 8, ["options"]),
                    createVNode("h6", { class: "text-h6 text-center" }, " Total Profit ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("h4", { class: "text-h4" }, " $86.4k "),
                  createVNode(_component_VueApexCharts, {
                    type: "line",
                    options: unref(chartOptions),
                    series,
                    height: 80,
                    class: "my-1"
                  }, null, 8, ["options"]),
                  createVNode("h6", { class: "text-h6 text-center" }, " Total Profit ")
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/dashboard/AnalyticsTotalProfitLineCharts.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "AnalyticsTransactions",
  __ssrInlineRender: true,
  setup(__props) {
    const statistics = [
      {
        title: "Sales",
        stats: "245k",
        icon: "ri-pie-chart-2-line",
        color: "primary"
      },
      {
        title: "Customers",
        stats: "12.5k",
        icon: "ri-group-line",
        color: "success"
      },
      {
        title: "Product",
        stats: "1.54k",
        icon: "ri-macbook-line",
        color: "warning"
      },
      {
        title: "Revenue",
        stats: "$88k",
        icon: "ri-money-dollar-circle-line",
        color: "info"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(VCard, mergeProps({ title: "Transactions" }, _attrs), {
        subtitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-body-1 mb-0"${_scopeId}><span class="d-inline-block font-weight-medium text-high-emphasis"${_scopeId}>Total 48.5% Growth</span> <span class="text-high-emphasis"${_scopeId}>\u{1F60E}</span> this month </p>`);
          } else {
            return [
              createVNode("p", { class: "text-body-1 mb-0" }, [
                createVNode("span", { class: "d-inline-block font-weight-medium text-high-emphasis" }, "Total 48.5% Growth"),
                createTextVNode(),
                createVNode("span", { class: "text-high-emphasis" }, "\u{1F60E}"),
                createTextVNode(" this month ")
              ])
            ];
          }
        }),
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconBtn, { class: "mt-n5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    color: "high-emphasis",
                    icon: "ri-more-2-line"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, {
                      color: "high-emphasis",
                      icon: "ri-more-2-line"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconBtn, { class: "mt-n5" }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    color: "high-emphasis",
                    icon: "ri-more-2-line"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "pt-10" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(statistics, (item) => {
                          _push4(ssrRenderComponent(VCol, {
                            key: item.title,
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex align-center gap-x-3"${_scopeId4}>`);
                                _push5(ssrRenderComponent(VAvatar, {
                                  color: item.color,
                                  rounded: "",
                                  size: "40",
                                  class: "elevation-2"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        size: "24",
                                        icon: item.icon
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          size: "24",
                                          icon: item.icon
                                        }, null, 8, ["icon"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<div class="d-flex flex-column"${_scopeId4}><div class="text-body-1"${_scopeId4}>${ssrInterpolate(item.title)}</div><h5 class="text-h5"${_scopeId4}>${ssrInterpolate(item.stats)}</h5></div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                    createVNode(VAvatar, {
                                      color: item.color,
                                      rounded: "",
                                      size: "40",
                                      class: "elevation-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          size: "24",
                                          icon: item.icon
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1032, ["color"]),
                                    createVNode("div", { class: "d-flex flex-column" }, [
                                      createVNode("div", { class: "text-body-1" }, toDisplayString(item.title), 1),
                                      createVNode("h5", { class: "text-h5" }, toDisplayString(item.stats), 1)
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(statistics, (item) => {
                            return createVNode(VCol, {
                              key: item.title,
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                  createVNode(VAvatar, {
                                    color: item.color,
                                    rounded: "",
                                    size: "40",
                                    class: "elevation-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        size: "24",
                                        icon: item.icon
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["color"]),
                                  createVNode("div", { class: "d-flex flex-column" }, [
                                    createVNode("div", { class: "text-body-1" }, toDisplayString(item.title), 1),
                                    createVNode("h5", { class: "text-h5" }, toDisplayString(item.stats), 1)
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(statistics, (item) => {
                          return createVNode(VCol, {
                            key: item.title,
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                createVNode(VAvatar, {
                                  color: item.color,
                                  rounded: "",
                                  size: "40",
                                  class: "elevation-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      size: "24",
                                      icon: item.icon
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 2
                                }, 1032, ["color"]),
                                createVNode("div", { class: "d-flex flex-column" }, [
                                  createVNode("div", { class: "text-body-1" }, toDisplayString(item.title), 1),
                                  createVNode("h5", { class: "text-h5" }, toDisplayString(item.stats), 1)
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
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
              createVNode(VCardText, { class: "pt-10" }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(statistics, (item) => {
                        return createVNode(VCol, {
                          key: item.title,
                          cols: "12",
                          sm: "6",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                              createVNode(VAvatar, {
                                color: item.color,
                                rounded: "",
                                size: "40",
                                class: "elevation-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "24",
                                    icon: item.icon
                                  }, null, 8, ["icon"])
                                ]),
                                _: 2
                              }, 1032, ["color"]),
                              createVNode("div", { class: "d-flex flex-column" }, [
                                createVNode("div", { class: "text-body-1" }, toDisplayString(item.title), 1),
                                createVNode("h5", { class: "text-h5" }, toDisplayString(item.stats), 1)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024);
                      }), 64))
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
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/dashboard/AnalyticsTransactions.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const avatar5 = "" + buildAssetsURL("avatar-5.BB5JHItX.png");
const avatar6 = "" + buildAssetsURL("avatar-6.m5t1eGlT.png");
const avatar7 = "" + buildAssetsURL("avatar-7.C5t2Bw3B.png");
const _sfc_main$3 = {
  __name: "AnalyticsUserTable",
  __ssrInlineRender: true,
  setup(__props) {
    const headers = [
      {
        title: "User",
        key: "username"
      },
      {
        title: "Email",
        key: "email"
      },
      {
        title: "Role",
        key: "role"
      },
      {
        title: "Status",
        key: "status"
      }
    ];
    const userData = [
      {
        id: 1,
        fullName: "Galasasen Slixby",
        company: "Yotz PVT LTD",
        role: "editor",
        username: "gslixby0",
        country: "El Salvador",
        contact: "(479) 232-9151",
        email: "gslixby0@abc.net.au",
        currentPlan: "enterprise",
        status: "inactive",
        avatar: avatar1
      },
      {
        id: 2,
        fullName: "Halsey Redmore",
        company: "Skinder PVT LTD",
        role: "author",
        username: "hredmore1",
        country: "Albania",
        contact: "(472) 607-9137",
        email: "hredmore1@imgur.com",
        currentPlan: "team",
        status: "pending",
        avatar: avatar2
      },
      {
        id: 3,
        fullName: "Marjory Sicely",
        company: "Oozz PVT LTD",
        role: "maintainer",
        username: "msicely2",
        country: "Russia",
        contact: "(321) 264-4599",
        email: "msicely2@who.int",
        currentPlan: "enterprise",
        status: "active",
        avatar: avatar3
      },
      {
        id: 4,
        fullName: "Cyrill Risby",
        company: "Oozz PVT LTD",
        role: "Admin",
        username: "crisby3",
        country: "China",
        contact: "(923) 690-6806",
        email: "crisby3@wordpress.com",
        currentPlan: "team",
        status: "inactive",
        avatar: avatar4
      },
      {
        id: 5,
        fullName: "Maggy Hurran",
        company: "Aimbo PVT LTD",
        role: "subscriber",
        username: "mhurran4",
        country: "Pakistan",
        contact: "(669) 914-1078",
        email: "mhurran4@yahoo.co.jp",
        currentPlan: "enterprise",
        status: "pending",
        avatar: avatar5
      },
      {
        id: 6,
        fullName: "Silvain Halstead",
        company: "Jaxbean PVT LTD",
        role: "author",
        username: "shalstead5",
        country: "China",
        contact: "(958) 973-3093",
        email: "shalstead5@shinystat.com",
        currentPlan: "company",
        status: "active",
        avatar: avatar6
      },
      {
        id: 7,
        fullName: "Breena Gallemore",
        company: "Jazzy PVT LTD",
        role: "subscriber",
        username: "bgallemore6",
        country: "Canada",
        contact: "(825) 977-8152",
        email: "bgallemore6@boston.com",
        currentPlan: "company",
        status: "pending",
        avatar: avatar7
      },
      {
        id: 8,
        fullName: "Kathryne Liger",
        company: "Pixoboo PVT LTD",
        role: "author",
        username: "kliger7",
        country: "France",
        contact: "(187) 440-0934",
        email: "kliger7@vinaora.com",
        currentPlan: "enterprise",
        status: "pending",
        avatar: avatar8
      }
    ];
    const resolveUserRoleVariant = (role) => {
      const roleLowerCase = role.toLowerCase();
      if (roleLowerCase === "subscriber")
        return {
          color: "success",
          icon: "ri-user-line"
        };
      if (roleLowerCase === "author")
        return {
          color: "error",
          icon: "ri-computer-line"
        };
      if (roleLowerCase === "maintainer")
        return {
          color: "info",
          icon: "ri-pie-chart-line"
        };
      if (roleLowerCase === "editor")
        return {
          color: "warning",
          icon: "ri-edit-box-line"
        };
      if (roleLowerCase === "admin")
        return {
          color: "primary",
          icon: "ri-vip-crown-line"
        };
      return {
        color: "success",
        icon: "ri-user-line"
      };
    };
    const resolveUserStatusVariant = (stat) => {
      const statLowerCase = stat.toLowerCase();
      if (statLowerCase === "pending")
        return "warning";
      if (statLowerCase === "active")
        return "success";
      if (statLowerCase === "inactive")
        return "secondary";
      return "primary";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VDataTable, {
              headers,
              items: userData,
              "item-value": "id",
              class: "text-no-wrap"
            }, {
              "item.username": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center gap-x-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    size: "34",
                    variant: !item.avatar ? "tonal" : void 0,
                    color: !item.avatar ? resolveUserRoleVariant(item.role).color : void 0
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (item.avatar) {
                          _push4(ssrRenderComponent(VImg, {
                            src: item.avatar
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          item.avatar ? (openBlock(), createBlock(VImg, {
                            key: 0,
                            src: item.avatar
                          }, null, 8, ["src"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<div class="d-flex flex-column"${_scopeId2}><h6 class="text-h6 font-weight-medium user-list-name"${_scopeId2}>${ssrInterpolate(item.fullName)}</h6><span class="text-sm text-medium-emphasis"${_scopeId2}>@${ssrInterpolate(item.username)}</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center gap-x-4" }, [
                      createVNode(VAvatar, {
                        size: "34",
                        variant: !item.avatar ? "tonal" : void 0,
                        color: !item.avatar ? resolveUserRoleVariant(item.role).color : void 0
                      }, {
                        default: withCtx(() => [
                          item.avatar ? (openBlock(), createBlock(VImg, {
                            key: 0,
                            src: item.avatar
                          }, null, 8, ["src"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["variant", "color"]),
                      createVNode("div", { class: "d-flex flex-column" }, [
                        createVNode("h6", { class: "text-h6 font-weight-medium user-list-name" }, toDisplayString(item.fullName), 1),
                        createVNode("span", { class: "text-sm text-medium-emphasis" }, "@" + toDisplayString(item.username), 1)
                      ])
                    ])
                  ];
                }
              }),
              "item.role": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, {
                    icon: resolveUserRoleVariant(item.role).icon,
                    color: resolveUserRoleVariant(item.role).color,
                    size: "22"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-capitalize text-high-emphasis"${_scopeId2}>${ssrInterpolate(item.role)}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex gap-4" }, [
                      createVNode(VIcon, {
                        icon: resolveUserRoleVariant(item.role).icon,
                        color: resolveUserRoleVariant(item.role).color,
                        size: "22"
                      }, null, 8, ["icon", "color"]),
                      createVNode("div", { class: "text-capitalize text-high-emphasis" }, toDisplayString(item.role), 1)
                    ])
                  ];
                }
              }),
              "item.plan": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-capitalize text-high-emphasis"${_scopeId2}>${ssrInterpolate(item.currentPlan)}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-capitalize text-high-emphasis" }, toDisplayString(item.currentPlan), 1)
                  ];
                }
              }),
              "item.status": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VChip, {
                    color: resolveUserStatusVariant(item.status),
                    size: "small",
                    class: "text-capitalize"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(item.status)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.status), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VChip, {
                      color: resolveUserStatusVariant(item.status),
                      size: "small",
                      class: "text-capitalize"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.status), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ];
                }
              }),
              bottom: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3)
                  ;
                else {
                  return [];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VDataTable, {
                headers,
                items: userData,
                "item-value": "id",
                class: "text-no-wrap"
              }, {
                "item.username": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex align-center gap-x-4" }, [
                    createVNode(VAvatar, {
                      size: "34",
                      variant: !item.avatar ? "tonal" : void 0,
                      color: !item.avatar ? resolveUserRoleVariant(item.role).color : void 0
                    }, {
                      default: withCtx(() => [
                        item.avatar ? (openBlock(), createBlock(VImg, {
                          key: 0,
                          src: item.avatar
                        }, null, 8, ["src"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1032, ["variant", "color"]),
                    createVNode("div", { class: "d-flex flex-column" }, [
                      createVNode("h6", { class: "text-h6 font-weight-medium user-list-name" }, toDisplayString(item.fullName), 1),
                      createVNode("span", { class: "text-sm text-medium-emphasis" }, "@" + toDisplayString(item.username), 1)
                    ])
                  ])
                ]),
                "item.role": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex gap-4" }, [
                    createVNode(VIcon, {
                      icon: resolveUserRoleVariant(item.role).icon,
                      color: resolveUserRoleVariant(item.role).color,
                      size: "22"
                    }, null, 8, ["icon", "color"]),
                    createVNode("div", { class: "text-capitalize text-high-emphasis" }, toDisplayString(item.role), 1)
                  ])
                ]),
                "item.plan": withCtx(({ item }) => [
                  createVNode("span", { class: "text-capitalize text-high-emphasis" }, toDisplayString(item.currentPlan), 1)
                ]),
                "item.status": withCtx(({ item }) => [
                  createVNode(VChip, {
                    color: resolveUserStatusVariant(item.status),
                    size: "small",
                    class: "text-capitalize"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.status), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                bottom: withCtx(() => []),
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/dashboard/AnalyticsUserTable.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "AnalyticsWeeklyOverview",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const options = computed(() => {
      const currentTheme = ref(vuetifyTheme.current.value.colors);
      const variableTheme = ref(vuetifyTheme.current.value.variables);
      const disabledColor = `rgba(${hexToRgb(currentTheme.value["on-surface"])},${variableTheme.value["disabled-opacity"]})`;
      const borderColor = `rgba(${hexToRgb(String(variableTheme.value["border-color"]))},${variableTheme.value["border-opacity"]})`;
      return {
        chart: {
          offsetY: -10,
          offsetX: -15,
          parentHeightOffset: 0,
          toolbar: { show: false }
        },
        plotOptions: {
          bar: {
            borderRadius: 6,
            distributed: true,
            columnWidth: "30%"
          }
        },
        stroke: {
          width: 2,
          colors: [currentTheme.value.surface]
        },
        legend: { show: false },
        grid: {
          borderColor,
          strokeDashArray: 7,
          xaxis: { lines: { show: false } }
        },
        dataLabels: { enabled: false },
        colors: [
          currentTheme.value["track-bg"],
          currentTheme.value["track-bg"],
          currentTheme.value["track-bg"],
          "rgba(var(--v-theme-primary),1)",
          currentTheme.value["track-bg"],
          currentTheme.value["track-bg"]
        ],
        states: {
          hover: { filter: { type: "none" } },
          active: { filter: { type: "none" } }
        },
        xaxis: {
          categories: [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
          ],
          tickPlacement: "on",
          labels: { show: false },
          crosshairs: { opacity: 0 },
          axisTicks: { show: false },
          axisBorder: { show: false }
        },
        yaxis: {
          show: true,
          tickAmount: 4,
          labels: {
            style: {
              colors: disabledColor,
              fontSize: "13px"
            },
            formatter: (value) => `${value > 999 ? `${(value / 1e3).toFixed(0)}` : value}k`
          }
        },
        responsive: [
          {
            breakpoint: 1560,
            options: { plotOptions: { bar: { columnWidth: "35%" } } }
          },
          {
            breakpoint: 1380,
            options: { plotOptions: { bar: { columnWidth: "45%" } } }
          }
        ]
      };
    });
    const series = [{
      data: [
        37,
        57,
        45,
        75,
        57,
        40,
        65
      ]
    }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$8;
      const _component_VueApexCharts = __nuxt_component_1;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, null, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="me-n3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MoreBtn, null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "me-n3" }, [
                      createVNode(_component_MoreBtn)
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Weekly Overview`);
                      } else {
                        return [
                          createTextVNode("Weekly Overview")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Weekly Overview")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VueApexCharts, {
                    type: "bar",
                    options: unref(options),
                    series,
                    height: 200
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex align-center mb-5 gap-x-4"${_scopeId2}><h4 class="text-h4"${_scopeId2}> 45% </h4><p class="mb-0"${_scopeId2}> Your sales performance is 45% <span class="text-high-emphasis"${_scopeId2}>\u{1F60E}</span> better compared to last month </p></div>`);
                  _push3(ssrRenderComponent(VBtn, { block: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Details `);
                      } else {
                        return [
                          createTextVNode(" Details ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VueApexCharts, {
                      type: "bar",
                      options: unref(options),
                      series,
                      height: 200
                    }, null, 8, ["options"]),
                    createVNode("div", { class: "d-flex align-center mb-5 gap-x-4" }, [
                      createVNode("h4", { class: "text-h4" }, " 45% "),
                      createVNode("p", { class: "mb-0" }, [
                        createTextVNode(" Your sales performance is 45% "),
                        createVNode("span", { class: "text-high-emphasis" }, "\u{1F60E}"),
                        createTextVNode(" better compared to last month ")
                      ])
                    ]),
                    createVNode(VBtn, { block: "" }, {
                      default: withCtx(() => [
                        createTextVNode(" Details ")
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
              createVNode(VCardItem, null, {
                append: withCtx(() => [
                  createVNode("div", { class: "me-n3" }, [
                    createVNode(_component_MoreBtn)
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Weekly Overview")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(_component_VueApexCharts, {
                    type: "bar",
                    options: unref(options),
                    series,
                    height: 200
                  }, null, 8, ["options"]),
                  createVNode("div", { class: "d-flex align-center mb-5 gap-x-4" }, [
                    createVNode("h4", { class: "text-h4" }, " 45% "),
                    createVNode("p", { class: "mb-0" }, [
                      createTextVNode(" Your sales performance is 45% "),
                      createVNode("span", { class: "text-high-emphasis" }, "\u{1F60E}"),
                      createTextVNode(" better compared to last month ")
                    ])
                  ]),
                  createVNode(VBtn, { block: "" }, {
                    default: withCtx(() => [
                      createTextVNode(" Details ")
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
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/dashboard/AnalyticsWeeklyOverview.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "CardStatisticsVertical",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: "primary"
    },
    icon: {
      type: String,
      required: true
    },
    stats: {
      type: String,
      required: true
    },
    change: {
      type: Number,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const isPositive = computed(() => Math.sign(props.change) === 1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MoreBtn = _sfc_main$8;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "d-flex align-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (props.icon) {
                    _push3(ssrRenderComponent(VAvatar, {
                      size: "40",
                      color: props.color,
                      class: "elevation-2"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            icon: props.icon,
                            size: "24"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon: props.icon,
                              size: "24"
                            }, null, 8, ["icon"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MoreBtn, { class: "me-n3 mt-n1" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    props.icon ? (openBlock(), createBlock(VAvatar, {
                      key: 0,
                      size: "40",
                      color: props.color,
                      class: "elevation-2"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          icon: props.icon,
                          size: "24"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["color"])) : createCommentVNode("", true),
                    createVNode(VSpacer),
                    createVNode(_component_MoreBtn, { class: "me-n3 mt-n1" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6 class="text-h6 mb-1"${_scopeId2}>${ssrInterpolate(props.title)}</h6>`);
                  if (props.change) {
                    _push3(`<div class="d-flex align-center mb-1 flex-wrap"${_scopeId2}><h4 class="text-h4 me-2"${_scopeId2}>${ssrInterpolate(props.stats)}</h4><div class="${ssrRenderClass([unref(isPositive) ? "text-success" : "text-error", "text-body-1"])}"${_scopeId2}>${ssrInterpolate(unref(isPositive) ? `+${props.change}` : props.change)}% </div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="text-body-2"${_scopeId2}>${ssrInterpolate(props.subtitle)}</div>`);
                } else {
                  return [
                    createVNode("h6", { class: "text-h6 mb-1" }, toDisplayString(props.title), 1),
                    props.change ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "d-flex align-center mb-1 flex-wrap"
                    }, [
                      createVNode("h4", { class: "text-h4 me-2" }, toDisplayString(props.stats), 1),
                      createVNode("div", {
                        class: [unref(isPositive) ? "text-success" : "text-error", "text-body-1"]
                      }, toDisplayString(unref(isPositive) ? `+${props.change}` : props.change) + "% ", 3)
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "text-body-2" }, toDisplayString(props.subtitle), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, { class: "d-flex align-center" }, {
                default: withCtx(() => [
                  props.icon ? (openBlock(), createBlock(VAvatar, {
                    key: 0,
                    size: "40",
                    color: props.color,
                    class: "elevation-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        icon: props.icon,
                        size: "24"
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["color"])) : createCommentVNode("", true),
                  createVNode(VSpacer),
                  createVNode(_component_MoreBtn, { class: "me-n3 mt-n1" })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("h6", { class: "text-h6 mb-1" }, toDisplayString(props.title), 1),
                  props.change ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "d-flex align-center mb-1 flex-wrap"
                  }, [
                    createVNode("h4", { class: "text-h4 me-2" }, toDisplayString(props.stats), 1),
                    createVNode("div", {
                      class: [unref(isPositive) ? "text-success" : "text-error", "text-body-1"]
                    }, toDisplayString(unref(isPositive) ? `+${props.change}` : props.change) + "% ", 3)
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "text-body-2" }, toDisplayString(props.subtitle), 1)
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@core/components/cards/CardStatisticsVertical.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const totalProfit = {
      title: "Total Profit",
      color: "secondary",
      icon: "ri-pie-chart-2-line",
      stats: "$25.6k",
      change: 42,
      subtitle: "Weekly Project"
    };
    const newProject = {
      title: "New Project",
      color: "primary",
      icon: "ri-file-word-2-line",
      stats: "862",
      change: -18,
      subtitle: "Yearly Project"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, mergeProps({ class: "match-height" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$b, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$b)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$4, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$4)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(AnalyticsTotalEarning, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(AnalyticsTotalEarning)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, { class: "match-height" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$5, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$5)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$1, totalProfit, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$1, totalProfit, null, 16)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$1, newProject, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$1, newProject, null, 16)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$a, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$a)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$5)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1, totalProfit, null, 16)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1, newProject, null, 16)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$a)
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
                    createVNode(VRow, { class: "match-height" }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$5)
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$1, totalProfit, null, 16)
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$1, newProject, null, 16)
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$a)
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(AnalyticsSalesByCountries, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(AnalyticsSalesByCountries)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(AnalyticsDepositWithdraw, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(AnalyticsDepositWithdraw)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$b)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$4)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(AnalyticsTotalEarning)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VRow, { class: "match-height" }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$5)
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1, totalProfit, null, 16)
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1, newProject, null, 16)
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$a)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(AnalyticsSalesByCountries)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx(() => [
                  createVNode(AnalyticsDepositWithdraw)
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
