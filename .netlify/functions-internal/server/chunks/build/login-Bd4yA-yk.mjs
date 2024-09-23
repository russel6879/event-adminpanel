import { _ as __nuxt_component_0 } from './nuxt-link-D-x2kIQw.mjs';
import { ref, computed, mergeProps, withCtx, unref, createVNode, createTextVNode, withModifiers, useSSRContext } from 'vue';
import { useRouter } from 'vue-router';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a as authV1MaskLight, b as authV1MaskDark, _ as _sfc_main$1, c as authV1Tree, d as authV1Tree2 } from './auth-v1-tree-BwD8q3S7.mjs';
import { l as logo } from './logo-Cki8HXon.mjs';
import { a as authService } from './auth-D8xyNAQl.mjs';
import { V as VCard, b as VCardItem, c as VCardTitle, a as VCardText } from './VCard-Bdfw-mBj.mjs';
import { V as VForm } from './VForm-BD-B1_zQ.mjs';
import { V as VRow, a as VCol } from './VRow-DdKnicNs.mjs';
import { V as VTextField } from './VTextField-BZmvmRfe.mjs';
import { V as VCheckbox } from './VCheckbox-E3Hq6JX3.mjs';
import { K as useTheme, V as VBtn, n as VImg } from './server.mjs';
import { V as VDivider } from './VDivider-DdsSNvlF.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'axios';
import './VAvatar-CZq753ec.mjs';
import './forwardRefs-BSTjJZPU.mjs';
import './index-tuhqJpq8.mjs';
import './easing-CuhD-vKF.mjs';
import './VCheckboxBtn-BOaF0jaZ.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-devtools-stub';
import 'vue3-toastify';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      email: "",
      password: "",
      remember: false
    });
    const vuetifyTheme = useTheme();
    const authThemeMask = computed(() => {
      return vuetifyTheme.global.name.value === "light" ? authV1MaskLight : authV1MaskDark;
    });
    const isPasswordVisible = ref(false);
    const router = useRouter();
    const handleLogin = async () => {
      try {
        await authService.login(form.value);
        router.push("/dashboard");
      } catch (error) {
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth-wrapper d-flex align-center justify-center pa-4" }, _attrs))}>`);
      _push(ssrRenderComponent(VCard, {
        class: "auth-card pa-4 pt-7",
        "max-width": "448"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, { class: "justify-center" }, {
              prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex"${_scopeId2}><div${_scopeId2}>${unref(logo)}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex" }, [
                      createVNode("div", { innerHTML: unref(logo) }, null, 8, ["innerHTML"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "font-weight-semibold text-2xl text-uppercase" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Materio `);
                      } else {
                        return [
                          createTextVNode(" Materio ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "font-weight-semibold text-2xl text-uppercase" }, {
                      default: withCtx(() => [
                        createTextVNode(" Materio ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "pt-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5 font-weight-semibold mb-1"${_scopeId2}> Welcome to Materio! \u{1F44B}\u{1F3FB} </h5><p class="mb-0"${_scopeId2}> Please sign-in to your account and start the adventure </p>`);
                } else {
                  return [
                    createVNode("h5", { class: "text-h5 font-weight-semibold mb-1" }, " Welcome to Materio! \u{1F44B}\u{1F3FB} "),
                    createVNode("p", { class: "mb-0" }, " Please sign-in to your account and start the adventure ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, { onSubmit: handleLogin }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: form.value.email,
                                      "onUpdate:modelValue": ($event) => form.value.email = $event,
                                      label: "Email",
                                      type: "email"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: form.value.email,
                                        "onUpdate:modelValue": ($event) => form.value.email = $event,
                                        label: "Email",
                                        type: "email"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: form.value.password,
                                      "onUpdate:modelValue": ($event) => form.value.password = $event,
                                      label: "Password",
                                      placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                      type: isPasswordVisible.value ? "text" : "password",
                                      "append-inner-icon": isPasswordVisible.value ? "ri-eye-off-line" : "ri-eye-line",
                                      "onClick:appendInner": ($event) => isPasswordVisible.value = !isPasswordVisible.value
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VCheckbox, {
                                      modelValue: form.value.remember,
                                      "onUpdate:modelValue": ($event) => form.value.remember = $event,
                                      label: "Remember me"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<a class="ms-2 mb-1" href="javascript:void(0)"${_scopeId5}> Forgot Password? </a></div>`);
                                    _push6(ssrRenderComponent(VBtn, {
                                      block: "",
                                      type: "submit"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Login `);
                                        } else {
                                          return [
                                            createTextVNode(" Login ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: form.value.password,
                                        "onUpdate:modelValue": ($event) => form.value.password = $event,
                                        label: "Password",
                                        placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                        type: isPasswordVisible.value ? "text" : "password",
                                        "append-inner-icon": isPasswordVisible.value ? "ri-eye-off-line" : "ri-eye-line",
                                        "onClick:appendInner": ($event) => isPasswordVisible.value = !isPasswordVisible.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                      createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap mt-1 mb-4" }, [
                                        createVNode(VCheckbox, {
                                          modelValue: form.value.remember,
                                          "onUpdate:modelValue": ($event) => form.value.remember = $event,
                                          label: "Remember me"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("a", {
                                          class: "ms-2 mb-1",
                                          href: "javascript:void(0)"
                                        }, " Forgot Password? ")
                                      ]),
                                      createVNode(VBtn, {
                                        block: "",
                                        type: "submit"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Login ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                class: "text-center text-base"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span${_scopeId5}>New on our platform?</span>`);
                                    _push6(ssrRenderComponent(_component_NuxtLink, {
                                      class: "text-primary ms-2",
                                      to: "/register"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Create an account `);
                                        } else {
                                          return [
                                            createTextVNode(" Create an account ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("span", null, "New on our platform?"),
                                      createVNode(_component_NuxtLink, {
                                        class: "text-primary ms-2",
                                        to: "/register"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Create an account ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                class: "d-flex align-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VDivider, null, null, _parent6, _scopeId5));
                                    _push6(`<span class="mx-4"${_scopeId5}>or</span>`);
                                    _push6(ssrRenderComponent(VDivider, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VDivider),
                                      createVNode("span", { class: "mx-4" }, "or"),
                                      createVNode(VDivider)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                class: "text-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$1, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: form.value.email,
                                      "onUpdate:modelValue": ($event) => form.value.email = $event,
                                      label: "Email",
                                      type: "email"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: form.value.password,
                                      "onUpdate:modelValue": ($event) => form.value.password = $event,
                                      label: "Password",
                                      placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                      type: isPasswordVisible.value ? "text" : "password",
                                      "append-inner-icon": isPasswordVisible.value ? "ri-eye-off-line" : "ri-eye-line",
                                      "onClick:appendInner": ($event) => isPasswordVisible.value = !isPasswordVisible.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                    createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap mt-1 mb-4" }, [
                                      createVNode(VCheckbox, {
                                        modelValue: form.value.remember,
                                        "onUpdate:modelValue": ($event) => form.value.remember = $event,
                                        label: "Remember me"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode("a", {
                                        class: "ms-2 mb-1",
                                        href: "javascript:void(0)"
                                      }, " Forgot Password? ")
                                    ]),
                                    createVNode(VBtn, {
                                      block: "",
                                      type: "submit"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Login ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  class: "text-center text-base"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "New on our platform?"),
                                    createVNode(_component_NuxtLink, {
                                      class: "text-primary ms-2",
                                      to: "/register"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Create an account ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  class: "d-flex align-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VDivider),
                                    createVNode("span", { class: "mx-4" }, "or"),
                                    createVNode(VDivider)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$1)
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
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: form.value.email,
                                    "onUpdate:modelValue": ($event) => form.value.email = $event,
                                    label: "Email",
                                    type: "email"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: form.value.password,
                                    "onUpdate:modelValue": ($event) => form.value.password = $event,
                                    label: "Password",
                                    placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                    type: isPasswordVisible.value ? "text" : "password",
                                    "append-inner-icon": isPasswordVisible.value ? "ri-eye-off-line" : "ri-eye-line",
                                    "onClick:appendInner": ($event) => isPasswordVisible.value = !isPasswordVisible.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                  createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap mt-1 mb-4" }, [
                                    createVNode(VCheckbox, {
                                      modelValue: form.value.remember,
                                      "onUpdate:modelValue": ($event) => form.value.remember = $event,
                                      label: "Remember me"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("a", {
                                      class: "ms-2 mb-1",
                                      href: "javascript:void(0)"
                                    }, " Forgot Password? ")
                                  ]),
                                  createVNode(VBtn, {
                                    block: "",
                                    type: "submit"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Login ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                class: "text-center text-base"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "New on our platform?"),
                                  createVNode(_component_NuxtLink, {
                                    class: "text-primary ms-2",
                                    to: "/register"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Create an account ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                class: "d-flex align-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VDivider),
                                  createVNode("span", { class: "mx-4" }, "or"),
                                  createVNode(VDivider)
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$1)
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
                    createVNode(VForm, {
                      onSubmit: withModifiers(handleLogin, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: form.value.email,
                                  "onUpdate:modelValue": ($event) => form.value.email = $event,
                                  label: "Email",
                                  type: "email"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: form.value.password,
                                  "onUpdate:modelValue": ($event) => form.value.password = $event,
                                  label: "Password",
                                  placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                  type: isPasswordVisible.value ? "text" : "password",
                                  "append-inner-icon": isPasswordVisible.value ? "ri-eye-off-line" : "ri-eye-line",
                                  "onClick:appendInner": ($event) => isPasswordVisible.value = !isPasswordVisible.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap mt-1 mb-4" }, [
                                  createVNode(VCheckbox, {
                                    modelValue: form.value.remember,
                                    "onUpdate:modelValue": ($event) => form.value.remember = $event,
                                    label: "Remember me"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("a", {
                                    class: "ms-2 mb-1",
                                    href: "javascript:void(0)"
                                  }, " Forgot Password? ")
                                ]),
                                createVNode(VBtn, {
                                  block: "",
                                  type: "submit"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Login ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              class: "text-center text-base"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "New on our platform?"),
                                createVNode(_component_NuxtLink, {
                                  class: "text-primary ms-2",
                                  to: "/register"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Create an account ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              class: "d-flex align-center"
                            }, {
                              default: withCtx(() => [
                                createVNode(VDivider),
                                createVNode("span", { class: "mx-4" }, "or"),
                                createVNode(VDivider)
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$1)
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
              createVNode(VCardItem, { class: "justify-center" }, {
                prepend: withCtx(() => [
                  createVNode("div", { class: "d-flex" }, [
                    createVNode("div", { innerHTML: unref(logo) }, null, 8, ["innerHTML"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "font-weight-semibold text-2xl text-uppercase" }, {
                    default: withCtx(() => [
                      createTextVNode(" Materio ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCardText, { class: "pt-2" }, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h5 font-weight-semibold mb-1" }, " Welcome to Materio! \u{1F44B}\u{1F3FB} "),
                  createVNode("p", { class: "mb-0" }, " Please sign-in to your account and start the adventure ")
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VForm, {
                    onSubmit: withModifiers(handleLogin, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: form.value.email,
                                "onUpdate:modelValue": ($event) => form.value.email = $event,
                                label: "Email",
                                type: "email"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: form.value.password,
                                "onUpdate:modelValue": ($event) => form.value.password = $event,
                                label: "Password",
                                placeholder: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
                                type: isPasswordVisible.value ? "text" : "password",
                                "append-inner-icon": isPasswordVisible.value ? "ri-eye-off-line" : "ri-eye-line",
                                "onClick:appendInner": ($event) => isPasswordVisible.value = !isPasswordVisible.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                              createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap mt-1 mb-4" }, [
                                createVNode(VCheckbox, {
                                  modelValue: form.value.remember,
                                  "onUpdate:modelValue": ($event) => form.value.remember = $event,
                                  label: "Remember me"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("a", {
                                  class: "ms-2 mb-1",
                                  href: "javascript:void(0)"
                                }, " Forgot Password? ")
                              ]),
                              createVNode(VBtn, {
                                block: "",
                                type: "submit"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Login ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            class: "text-center text-base"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "New on our platform?"),
                              createVNode(_component_NuxtLink, {
                                class: "text-primary ms-2",
                                to: "/register"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Create an account ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            class: "d-flex align-center"
                          }, {
                            default: withCtx(() => [
                              createVNode(VDivider),
                              createVNode("span", { class: "mx-4" }, "or"),
                              createVNode(VDivider)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1)
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
      _push(ssrRenderComponent(VImg, {
        class: "auth-footer-start-tree d-none d-md-block",
        src: unref(authV1Tree),
        width: 250
      }, null, _parent));
      _push(ssrRenderComponent(VImg, {
        src: unref(authV1Tree2),
        class: "auth-footer-end-tree d-none d-md-block",
        width: 350
      }, null, _parent));
      _push(ssrRenderComponent(VImg, {
        class: "auth-footer-mask d-none d-md-block",
        src: authThemeMask.value
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };