import { p as propsFactory, g as genericComponent, ai as Intersect, h as useProxiedModel, l as useRender, aj as filterInputAttrs, ak as callEvent, E as convertToUnit, J as useNuxtApp, V as VBtn, i as clamp } from './server.mjs';
import { computed, ref, shallowRef, watchEffect, watch, createVNode, mergeProps, Fragment, withDirectives, resolveDirective, vModelText, nextTick, withCtx, openBlock, createBlock, createCommentVNode, createTextVNode, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import axios from 'axios';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { V as VCard, a as VCardText } from './VCard-Bdfw-mBj.mjs';
import { V as VForm } from './VForm-BD-B1_zQ.mjs';
import { V as VRow, a as VCol } from './VRow-DdKnicNs.mjs';
import { V as VFileInput } from './VFileInput-DiRaV-2t.mjs';
import { m as makeVInputProps, e as makeVFieldProps, u as useFocus, b as VInput, f as filterFieldProps, g as VField, h as VCounter, V as VTextField } from './VTextField-BZmvmRfe.mjs';
import { f as forwardRefs } from './forwardRefs-BSTjJZPU.mjs';
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
import './VChip-BMAQYvMK.mjs';
import './index-tuhqJpq8.mjs';
import './easing-CuhD-vKF.mjs';

const createApiClient = () => {
  const { $config } = useNuxtApp();
  const apiClient = axios.create({
    baseURL: `${$config.public.apiBase}`,
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  return apiClient;
};
const settingsService = {
  async getSettings() {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();
    try {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await apiClient.get("/settings", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.status !== 200) {
        throw new Error("Failed to fetch settings");
      }
      return response.data;
    } catch (error) {
      $toast.error("Failed to fetch settings");
      console.error(error);
      throw error;
    }
  },
  async updateSettings(data, successMessage, errorMessage) {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();
    try {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await apiClient.patch("/settings", data, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.status !== 200) {
        throw new Error("Failed to update settings");
      }
      $toast.success(successMessage);
      return response.data;
    } catch (error) {
      $toast.error(errorMessage);
      console.error(error);
      throw error;
    }
  }
};
const makeVTextareaProps = propsFactory({
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: (v) => !isNaN(parseFloat(v))
  },
  maxRows: {
    type: [Number, String],
    validator: (v) => !isNaN(parseFloat(v))
  },
  suffix: String,
  modelModifiers: Object,
  ...makeVInputProps(),
  ...makeVFieldProps()
}, "VTextarea");
const VTextarea = genericComponent()({
  name: "VTextarea",
  directives: {
    Intersect
  },
  inheritAttrs: false,
  props: makeVTextareaProps(),
  emits: {
    "click:control": (e) => true,
    "mousedown:control": (e) => true,
    "update:focused": (focused) => true,
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const counterValue = computed(() => {
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : (model.value || "").toString().length;
    });
    const max = computed(() => {
      if (attrs.maxlength)
        return attrs.maxlength;
      if (!props.counter || typeof props.counter !== "number" && typeof props.counter !== "string")
        return void 0;
      return props.counter;
    });
    function onIntersect(isIntersecting, entries) {
      var _a, _b;
      if (!props.autofocus || !isIntersecting)
        return;
      (_b = (_a = entries[0].target) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    }
    const vInputRef = ref();
    const vFieldRef = ref();
    const controlHeight = shallowRef("");
    const textareaRef = ref();
    const isActive = computed(() => props.persistentPlaceholder || isFocused.value || props.active);
    function onFocus() {
      var _a;
      if (textareaRef.value !== (void 0).activeElement) {
        (_a = textareaRef.value) == null ? void 0 : _a.focus();
      }
      if (!isFocused.value)
        focus();
    }
    function onControlClick(e) {
      onFocus();
      emit("click:control", e);
    }
    function onControlMousedown(e) {
      emit("mousedown:control", e);
    }
    function onClear(e) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        model.value = "";
        callEvent(props["onClick:clear"], e);
      });
    }
    function onInput(e) {
      var _a;
      const el = e.target;
      model.value = el.value;
      if ((_a = props.modelModifiers) == null ? void 0 : _a.trim) {
        const caretPosition = [el.selectionStart, el.selectionEnd];
        nextTick(() => {
          el.selectionStart = caretPosition[0];
          el.selectionEnd = caretPosition[1];
        });
      }
    }
    const sizerRef = ref();
    const rows = ref(+props.rows);
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    watchEffect(() => {
      if (!props.autoGrow)
        rows.value = +props.rows;
    });
    function calculateInputHeight() {
      if (!props.autoGrow)
        return;
      nextTick(() => {
        if (!sizerRef.value || !vFieldRef.value)
          return;
        const style = getComputedStyle(sizerRef.value);
        const fieldStyle = getComputedStyle(vFieldRef.value.$el);
        const padding = parseFloat(style.getPropertyValue("--v-field-padding-top")) + parseFloat(style.getPropertyValue("--v-input-padding-top")) + parseFloat(style.getPropertyValue("--v-field-padding-bottom"));
        const height = sizerRef.value.scrollHeight;
        const lineHeight = parseFloat(style.lineHeight);
        const minHeight = Math.max(parseFloat(props.rows) * lineHeight + padding, parseFloat(fieldStyle.getPropertyValue("--v-input-control-height")));
        const maxHeight = parseFloat(props.maxRows) * lineHeight + padding || Infinity;
        const newHeight = clamp(height != null ? height : 0, minHeight, maxHeight);
        rows.value = Math.floor((newHeight - padding) / lineHeight);
        controlHeight.value = convertToUnit(newHeight);
      });
    }
    watch(model, calculateInputHeight);
    watch(() => props.rows, calculateInputHeight);
    watch(() => props.maxRows, calculateInputHeight);
    watch(() => props.density, calculateInputHeight);
    let observer;
    watch(sizerRef, (val) => {
      if (val) {
        observer = new ResizeObserver(calculateInputHeight);
        observer.observe(sizerRef.value);
      } else {
        observer == null ? void 0 : observer.disconnect();
      }
    });
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter || props.counterValue);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const {
        modelValue: _,
        ...inputProps
      } = VInput.filterProps(props);
      const fieldProps = filterFieldProps(props);
      return createVNode(VInput, mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-textarea v-text-field", {
          "v-textarea--prefixed": props.prefix,
          "v-textarea--suffixed": props.suffix,
          "v-text-field--prefixed": props.prefix,
          "v-text-field--suffixed": props.suffix,
          "v-textarea--auto-grow": props.autoGrow,
          "v-textarea--no-resize": props.noResize || props.autoGrow,
          "v-input--plain-underlined": isPlainOrUnderlined.value
        }, props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
        "focused": isFocused.value
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id,
            isDisabled,
            isDirty,
            isReadonly,
            isValid
          } = _ref2;
          return createVNode(VField, mergeProps({
            "ref": vFieldRef,
            "style": {
              "--v-textarea-control-height": controlHeight.value
            },
            "onClick": onControlClick,
            "onMousedown": onControlMousedown,
            "onClick:clear": onClear,
            "onClick:prependInner": props["onClick:prependInner"],
            "onClick:appendInner": props["onClick:appendInner"]
          }, fieldProps, {
            "id": id.value,
            "active": isActive.value || isDirty.value,
            "centerAffix": rows.value === 1 && !isPlainOrUnderlined.value,
            "dirty": isDirty.value || props.dirty,
            "disabled": isDisabled.value,
            "focused": isFocused.value,
            "error": isValid.value === false
          }), {
            ...slots,
            default: (_ref3) => {
              let {
                props: {
                  class: fieldClass,
                  ...slotProps
                }
              } = _ref3;
              return createVNode(Fragment, null, [props.prefix && createVNode("span", {
                "class": "v-text-field__prefix"
              }, [props.prefix]), withDirectives(createVNode("textarea", mergeProps({
                "ref": textareaRef,
                "class": fieldClass,
                "value": model.value,
                "onInput": onInput,
                "autofocus": props.autofocus,
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "placeholder": props.placeholder,
                "rows": props.rows,
                "name": props.name,
                "onFocus": onFocus,
                "onBlur": blur
              }, slotProps, inputAttrs), null), [[resolveDirective("intersect"), {
                handler: onIntersect
              }, null, {
                once: true
              }]]), props.autoGrow && withDirectives(createVNode("textarea", {
                "class": [fieldClass, "v-textarea__sizer"],
                "id": `${slotProps.id}-sizer`,
                "onUpdate:modelValue": ($event) => model.value = $event,
                "ref": sizerRef,
                "readonly": true,
                "aria-hidden": "true"
              }, null), [[vModelText, model.value]]), props.suffix && createVNode("span", {
                "class": "v-text-field__suffix"
              }, [props.suffix])]);
            }
          });
        },
        details: hasDetails ? (slotProps) => {
          var _a;
          return createVNode(Fragment, null, [(_a = slots.details) == null ? void 0 : _a.call(slots, slotProps), hasCounter && createVNode(Fragment, null, [createVNode("span", null, null), createVNode(VCounter, {
            "active": props.persistentCounter || isFocused.value,
            "value": counterValue.value,
            "max": max.value
          }, slots.counter)])]);
        } : void 0
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, textareaRef);
  }
});
const _sfc_main = {
  __name: "general",
  __ssrInlineRender: true,
  setup(__props) {
    const { $config } = useNuxtApp();
    const bannerImagePreview = ref(null);
    const logoPreview = ref("");
    const footerLogoPreview = ref("");
    const sliderImages = ref([]);
    ref(null);
    const footerDescription = ref("");
    const quickLinks = ref([{ title: "", url: "" }]);
    const categories = ref("");
    const copyrightText = ref("");
    const contactInfo = ref({
      address: "",
      phone: "",
      email: ""
    });
    const formData = ref({
      headerLogo: "",
      bannerImage: "",
      footerLogo: ""
    });
    const socialLinks = ref({
      facebook: "",
      twitter: "",
      instagram: "",
      youtube: "",
      linkedin: ""
    });
    `${$config.public.imageBase}/`;
    const handleLogoChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        formData.headerLogo = file;
        const reader = new FileReader();
        reader.onload = () => {
          logoPreview.value = reader.result;
          formData.headerLogo = reader.result;
        };
        reader.readAsDataURL(file);
      }
    };
    const handleBannerChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        formData.bannerImage = file;
        const reader = new FileReader();
        reader.onload = () => {
          bannerImagePreview.value = reader.result;
          formData.bannerImage = reader.result;
        };
        reader.readAsDataURL(file);
      }
    };
    const handleFooterLogoChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        formData.footerLogo = file;
        const reader = new FileReader();
        reader.onload = () => {
          footerLogoPreview.value = reader.result;
          formData.footerLogo = reader.result;
        };
        reader.readAsDataURL(file);
      }
    };
    const addQuickLink = () => {
      quickLinks.value.push({ title: "", url: "" });
    };
    const removeQuickLink = (index) => {
      quickLinks.value.splice(index, 1);
    };
    const saveSettings = async (section) => {
      try {
        let settingsData = {};
        let endpoint = "/settings";
        switch (section) {
          case "header":
            settingsData = {
              key: "header_settings",
              // Replace with actual key
              value: {
                logo: formData.headerLogo,
                bannerImage: formData.bannerImage
              }
            };
            break;
          case "home":
            settingsData = {
              key: "home_page_settings",
              // Replace with actual key
              value: {
                sliderImages: sliderImages.value
              }
            };
            break;
          case "footer":
            settingsData = {
              key: "footer_settings",
              // Replace with actual key
              value: {
                footerLogo: formData.footerLogo,
                footerDescription: footerDescription.value,
                quickLinks: quickLinks.value,
                categories: categories.value.split(",").map((cat) => cat.trim()),
                copyrightText: copyrightText.value,
                contactInfo: {
                  address: contactInfo.value.address || "",
                  phone: contactInfo.value.phone || "",
                  email: contactInfo.value.email || ""
                }
              }
            };
            break;
          case "social":
            const validateSocialLinks = (links) => {
              const defaultUrl = "";
              return {
                facebook: typeof links.facebook === "string" ? links.facebook : defaultUrl,
                twitter: typeof links.twitter === "string" ? links.twitter : defaultUrl,
                instagram: typeof links.instagram === "string" ? links.instagram : defaultUrl,
                youtube: typeof links.youtube === "string" ? links.youtube : defaultUrl,
                linkedin: typeof links.linkedin === "string" ? links.linkedin : defaultUrl
              };
            };
            settingsData = {
              key: "social_links",
              // Replace with actual key
              value: validateSocialLinks(socialLinks.value)
            };
            break;
        }
        console.log(`${section.charAt(0).toUpperCase() + section.slice(1)} Settings Data:`, settingsData);
        await settingsService.updateSettings(settingsData, `${section.charAt(0).toUpperCase() + section.slice(1)} settings updated successfully`, `Failed to update ${section} settings`);
        console.log(`${section.charAt(0).toUpperCase() + section.slice(1)} settings updated successfully`);
      } catch (error) {
        console.error(`Error updating ${section} settings:`, error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e82a43d2>`);
      _push(ssrRenderComponent(VCard, { title: "Header Settings" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VFileInput, {
                                      label: "Upload Logo",
                                      onChange: handleLogoChange,
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                    if (logoPreview.value) {
                                      _push6(`<img${ssrRenderAttr("src", logoPreview.value)} alt="Logo Preview" class="preview-image mb-4" data-v-e82a43d2${_scopeId5}>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(ssrRenderComponent(VFileInput, {
                                      label: "Upload Banner Image",
                                      type: "file",
                                      onChange: handleBannerChange,
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                    if (bannerImagePreview.value) {
                                      _push6(`<img${ssrRenderAttr("src", bannerImagePreview.value)} alt="Banner Preview" class="preview-image mb-4" data-v-e82a43d2${_scopeId5}>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      createVNode(VFileInput, {
                                        label: "Upload Logo",
                                        onChange: handleLogoChange,
                                        class: "mb-4"
                                      }),
                                      logoPreview.value ? (openBlock(), createBlock("img", {
                                        key: 0,
                                        src: logoPreview.value,
                                        alt: "Logo Preview",
                                        class: "preview-image mb-4"
                                      }, null, 8, ["src"])) : createCommentVNode("", true),
                                      createVNode(VFileInput, {
                                        label: "Upload Banner Image",
                                        type: "file",
                                        onChange: handleBannerChange,
                                        class: "mb-4"
                                      }),
                                      bannerImagePreview.value ? (openBlock(), createBlock("img", {
                                        key: 1,
                                        src: bannerImagePreview.value,
                                        alt: "Banner Preview",
                                        class: "preview-image mb-4"
                                      }, null, 8, ["src"])) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VFileInput, {
                                      label: "Upload Logo",
                                      onChange: handleLogoChange,
                                      class: "mb-4"
                                    }),
                                    logoPreview.value ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: logoPreview.value,
                                      alt: "Logo Preview",
                                      class: "preview-image mb-4"
                                    }, null, 8, ["src"])) : createCommentVNode("", true),
                                    createVNode(VFileInput, {
                                      label: "Upload Banner Image",
                                      type: "file",
                                      onChange: handleBannerChange,
                                      class: "mb-4"
                                    }),
                                    bannerImagePreview.value ? (openBlock(), createBlock("img", {
                                      key: 1,
                                      src: bannerImagePreview.value,
                                      alt: "Banner Preview",
                                      class: "preview-image mb-4"
                                    }, null, 8, ["src"])) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          class: "d-flex gap-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                onClick: ($event) => saveSettings("header")
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Update Header Settings`);
                                  } else {
                                    return [
                                      createTextVNode("Update Header Settings")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  onClick: ($event) => saveSettings("header")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Update Header Settings")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
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
                                  createVNode(VFileInput, {
                                    label: "Upload Logo",
                                    onChange: handleLogoChange,
                                    class: "mb-4"
                                  }),
                                  logoPreview.value ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: logoPreview.value,
                                    alt: "Logo Preview",
                                    class: "preview-image mb-4"
                                  }, null, 8, ["src"])) : createCommentVNode("", true),
                                  createVNode(VFileInput, {
                                    label: "Upload Banner Image",
                                    type: "file",
                                    onChange: handleBannerChange,
                                    class: "mb-4"
                                  }),
                                  bannerImagePreview.value ? (openBlock(), createBlock("img", {
                                    key: 1,
                                    src: bannerImagePreview.value,
                                    alt: "Banner Preview",
                                    class: "preview-image mb-4"
                                  }, null, 8, ["src"])) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            class: "d-flex gap-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                onClick: ($event) => saveSettings("header")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Update Header Settings")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
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
                    createVNode(VForm, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VFileInput, {
                                  label: "Upload Logo",
                                  onChange: handleLogoChange,
                                  class: "mb-4"
                                }),
                                logoPreview.value ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: logoPreview.value,
                                  alt: "Logo Preview",
                                  class: "preview-image mb-4"
                                }, null, 8, ["src"])) : createCommentVNode("", true),
                                createVNode(VFileInput, {
                                  label: "Upload Banner Image",
                                  type: "file",
                                  onChange: handleBannerChange,
                                  class: "mb-4"
                                }),
                                bannerImagePreview.value ? (openBlock(), createBlock("img", {
                                  key: 1,
                                  src: bannerImagePreview.value,
                                  alt: "Banner Preview",
                                  class: "preview-image mb-4"
                                }, null, 8, ["src"])) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          class: "d-flex gap-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              onClick: ($event) => saveSettings("header")
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Update Header Settings")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
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
                  createVNode(VForm, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VFileInput, {
                                label: "Upload Logo",
                                onChange: handleLogoChange,
                                class: "mb-4"
                              }),
                              logoPreview.value ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: logoPreview.value,
                                alt: "Logo Preview",
                                class: "preview-image mb-4"
                              }, null, 8, ["src"])) : createCommentVNode("", true),
                              createVNode(VFileInput, {
                                label: "Upload Banner Image",
                                type: "file",
                                onChange: handleBannerChange,
                                class: "mb-4"
                              }),
                              bannerImagePreview.value ? (openBlock(), createBlock("img", {
                                key: 1,
                                src: bannerImagePreview.value,
                                alt: "Banner Preview",
                                class: "preview-image mb-4"
                              }, null, 8, ["src"])) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        class: "d-flex gap-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            onClick: ($event) => saveSettings("header")
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Update Header Settings")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
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
      _push(ssrRenderComponent(VCard, {
        title: "Home Page Settings",
        class: "mt-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VFileInput, {
                                      modelValue: sliderImages.value,
                                      "onUpdate:modelValue": ($event) => sliderImages.value = $event,
                                      label: "Upload Slider Images",
                                      multiple: "",
                                      accept: "image/*",
                                      onChange: _ctx.handleSliderImagesChange,
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VFileInput, {
                                        modelValue: sliderImages.value,
                                        "onUpdate:modelValue": ($event) => sliderImages.value = $event,
                                        label: "Upload Slider Images",
                                        multiple: "",
                                        accept: "image/*",
                                        onChange: _ctx.handleSliderImagesChange,
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VFileInput, {
                                      modelValue: sliderImages.value,
                                      "onUpdate:modelValue": ($event) => sliderImages.value = $event,
                                      label: "Upload Slider Images",
                                      multiple: "",
                                      accept: "image/*",
                                      onChange: _ctx.handleSliderImagesChange,
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          class: "d-flex gap-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                onClick: ($event) => saveSettings("home")
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Update Home Page Settings`);
                                  } else {
                                    return [
                                      createTextVNode("Update Home Page Settings")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  onClick: ($event) => saveSettings("home")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Update Home Page Settings")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
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
                                  createVNode(VFileInput, {
                                    modelValue: sliderImages.value,
                                    "onUpdate:modelValue": ($event) => sliderImages.value = $event,
                                    label: "Upload Slider Images",
                                    multiple: "",
                                    accept: "image/*",
                                    onChange: _ctx.handleSliderImagesChange,
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            class: "d-flex gap-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                onClick: ($event) => saveSettings("home")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Update Home Page Settings")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
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
                    createVNode(VForm, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VFileInput, {
                                  modelValue: sliderImages.value,
                                  "onUpdate:modelValue": ($event) => sliderImages.value = $event,
                                  label: "Upload Slider Images",
                                  multiple: "",
                                  accept: "image/*",
                                  onChange: _ctx.handleSliderImagesChange,
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          class: "d-flex gap-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              onClick: ($event) => saveSettings("home")
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Update Home Page Settings")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
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
                  createVNode(VForm, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VFileInput, {
                                modelValue: sliderImages.value,
                                "onUpdate:modelValue": ($event) => sliderImages.value = $event,
                                label: "Upload Slider Images",
                                multiple: "",
                                accept: "image/*",
                                onChange: _ctx.handleSliderImagesChange,
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        class: "d-flex gap-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            onClick: ($event) => saveSettings("home")
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Update Home Page Settings")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
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
      _push(ssrRenderComponent(VCard, {
        title: "Footer Settings",
        class: "mt-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VFileInput, {
                                      label: "Upload Footer Logo",
                                      type: "file",
                                      accept: "image/*",
                                      onChange: handleFooterLogoChange,
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                    if (footerLogoPreview.value) {
                                      _push6(`<img${ssrRenderAttr("src", footerLogoPreview.value)} alt="Banner Preview" class="preview-image mb-4" data-v-e82a43d2${_scopeId5}>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(ssrRenderComponent(VTextarea, {
                                      modelValue: footerDescription.value,
                                      "onUpdate:modelValue": ($event) => footerDescription.value = $event,
                                      label: "Footer Description",
                                      placeholder: "Enter footer description",
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextarea, {
                                      modelValue: categories.value,
                                      "onUpdate:modelValue": ($event) => categories.value = $event,
                                      label: "Footer Categories (Comma Separated)",
                                      placeholder: "Enter categories separated by commas",
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: copyrightText.value,
                                      "onUpdate:modelValue": ($event) => copyrightText.value = $event,
                                      label: "Copyright Text",
                                      placeholder: "Enter copyright text",
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: contactInfo.value.address,
                                      "onUpdate:modelValue": ($event) => contactInfo.value.address = $event,
                                      label: "Contact Address",
                                      placeholder: "Enter contact address",
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: contactInfo.value.phone,
                                      "onUpdate:modelValue": ($event) => contactInfo.value.phone = $event,
                                      label: "Contact Phone",
                                      placeholder: "Enter contact phone number",
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: contactInfo.value.email,
                                      "onUpdate:modelValue": ($event) => contactInfo.value.email = $event,
                                      label: "Contact Email",
                                      placeholder: "Enter contact email",
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VFileInput, {
                                        label: "Upload Footer Logo",
                                        type: "file",
                                        accept: "image/*",
                                        onChange: handleFooterLogoChange,
                                        class: "mb-4"
                                      }),
                                      footerLogoPreview.value ? (openBlock(), createBlock("img", {
                                        key: 0,
                                        src: footerLogoPreview.value,
                                        alt: "Banner Preview",
                                        class: "preview-image mb-4"
                                      }, null, 8, ["src"])) : createCommentVNode("", true),
                                      createVNode(VTextarea, {
                                        modelValue: footerDescription.value,
                                        "onUpdate:modelValue": ($event) => footerDescription.value = $event,
                                        label: "Footer Description",
                                        placeholder: "Enter footer description",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VTextarea, {
                                        modelValue: categories.value,
                                        "onUpdate:modelValue": ($event) => categories.value = $event,
                                        label: "Footer Categories (Comma Separated)",
                                        placeholder: "Enter categories separated by commas",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VTextField, {
                                        modelValue: copyrightText.value,
                                        "onUpdate:modelValue": ($event) => copyrightText.value = $event,
                                        label: "Copyright Text",
                                        placeholder: "Enter copyright text",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VTextField, {
                                        modelValue: contactInfo.value.address,
                                        "onUpdate:modelValue": ($event) => contactInfo.value.address = $event,
                                        label: "Contact Address",
                                        placeholder: "Enter contact address",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VTextField, {
                                        modelValue: contactInfo.value.phone,
                                        "onUpdate:modelValue": ($event) => contactInfo.value.phone = $event,
                                        label: "Contact Phone",
                                        placeholder: "Enter contact phone number",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VTextField, {
                                        modelValue: contactInfo.value.email,
                                        "onUpdate:modelValue": ($event) => contactInfo.value.email = $event,
                                        label: "Contact Email",
                                        placeholder: "Enter contact email",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VFileInput, {
                                      label: "Upload Footer Logo",
                                      type: "file",
                                      accept: "image/*",
                                      onChange: handleFooterLogoChange,
                                      class: "mb-4"
                                    }),
                                    footerLogoPreview.value ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: footerLogoPreview.value,
                                      alt: "Banner Preview",
                                      class: "preview-image mb-4"
                                    }, null, 8, ["src"])) : createCommentVNode("", true),
                                    createVNode(VTextarea, {
                                      modelValue: footerDescription.value,
                                      "onUpdate:modelValue": ($event) => footerDescription.value = $event,
                                      label: "Footer Description",
                                      placeholder: "Enter footer description",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VTextarea, {
                                      modelValue: categories.value,
                                      "onUpdate:modelValue": ($event) => categories.value = $event,
                                      label: "Footer Categories (Comma Separated)",
                                      placeholder: "Enter categories separated by commas",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VTextField, {
                                      modelValue: copyrightText.value,
                                      "onUpdate:modelValue": ($event) => copyrightText.value = $event,
                                      label: "Copyright Text",
                                      placeholder: "Enter copyright text",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VTextField, {
                                      modelValue: contactInfo.value.address,
                                      "onUpdate:modelValue": ($event) => contactInfo.value.address = $event,
                                      label: "Contact Address",
                                      placeholder: "Enter contact address",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VTextField, {
                                      modelValue: contactInfo.value.phone,
                                      "onUpdate:modelValue": ($event) => contactInfo.value.phone = $event,
                                      label: "Contact Phone",
                                      placeholder: "Enter contact phone number",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VTextField, {
                                      modelValue: contactInfo.value.email,
                                      "onUpdate:modelValue": ($event) => contactInfo.value.email = $event,
                                      label: "Contact Email",
                                      placeholder: "Enter contact email",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          class: "d-flex gap-4 mt-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                onClick: ($event) => saveSettings("footer")
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Update Footer Settings`);
                                  } else {
                                    return [
                                      createTextVNode("Update Footer Settings")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  onClick: ($event) => saveSettings("footer")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Update Footer Settings")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
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
                                  createVNode(VFileInput, {
                                    label: "Upload Footer Logo",
                                    type: "file",
                                    accept: "image/*",
                                    onChange: handleFooterLogoChange,
                                    class: "mb-4"
                                  }),
                                  footerLogoPreview.value ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: footerLogoPreview.value,
                                    alt: "Banner Preview",
                                    class: "preview-image mb-4"
                                  }, null, 8, ["src"])) : createCommentVNode("", true),
                                  createVNode(VTextarea, {
                                    modelValue: footerDescription.value,
                                    "onUpdate:modelValue": ($event) => footerDescription.value = $event,
                                    label: "Footer Description",
                                    placeholder: "Enter footer description",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VTextarea, {
                                    modelValue: categories.value,
                                    "onUpdate:modelValue": ($event) => categories.value = $event,
                                    label: "Footer Categories (Comma Separated)",
                                    placeholder: "Enter categories separated by commas",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VTextField, {
                                    modelValue: copyrightText.value,
                                    "onUpdate:modelValue": ($event) => copyrightText.value = $event,
                                    label: "Copyright Text",
                                    placeholder: "Enter copyright text",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VTextField, {
                                    modelValue: contactInfo.value.address,
                                    "onUpdate:modelValue": ($event) => contactInfo.value.address = $event,
                                    label: "Contact Address",
                                    placeholder: "Enter contact address",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VTextField, {
                                    modelValue: contactInfo.value.phone,
                                    "onUpdate:modelValue": ($event) => contactInfo.value.phone = $event,
                                    label: "Contact Phone",
                                    placeholder: "Enter contact phone number",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VTextField, {
                                    modelValue: contactInfo.value.email,
                                    "onUpdate:modelValue": ($event) => contactInfo.value.email = $event,
                                    label: "Contact Email",
                                    placeholder: "Enter contact email",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            class: "d-flex gap-4 mt-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                onClick: ($event) => saveSettings("footer")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Update Footer Settings")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
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
                    createVNode(VForm, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VFileInput, {
                                  label: "Upload Footer Logo",
                                  type: "file",
                                  accept: "image/*",
                                  onChange: handleFooterLogoChange,
                                  class: "mb-4"
                                }),
                                footerLogoPreview.value ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: footerLogoPreview.value,
                                  alt: "Banner Preview",
                                  class: "preview-image mb-4"
                                }, null, 8, ["src"])) : createCommentVNode("", true),
                                createVNode(VTextarea, {
                                  modelValue: footerDescription.value,
                                  "onUpdate:modelValue": ($event) => footerDescription.value = $event,
                                  label: "Footer Description",
                                  placeholder: "Enter footer description",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextarea, {
                                  modelValue: categories.value,
                                  "onUpdate:modelValue": ($event) => categories.value = $event,
                                  label: "Footer Categories (Comma Separated)",
                                  placeholder: "Enter categories separated by commas",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: copyrightText.value,
                                  "onUpdate:modelValue": ($event) => copyrightText.value = $event,
                                  label: "Copyright Text",
                                  placeholder: "Enter copyright text",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: contactInfo.value.address,
                                  "onUpdate:modelValue": ($event) => contactInfo.value.address = $event,
                                  label: "Contact Address",
                                  placeholder: "Enter contact address",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: contactInfo.value.phone,
                                  "onUpdate:modelValue": ($event) => contactInfo.value.phone = $event,
                                  label: "Contact Phone",
                                  placeholder: "Enter contact phone number",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: contactInfo.value.email,
                                  "onUpdate:modelValue": ($event) => contactInfo.value.email = $event,
                                  label: "Contact Email",
                                  placeholder: "Enter contact email",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          class: "d-flex gap-4 mt-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              onClick: ($event) => saveSettings("footer")
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Update Footer Settings")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
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
                  createVNode(VForm, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VFileInput, {
                                label: "Upload Footer Logo",
                                type: "file",
                                accept: "image/*",
                                onChange: handleFooterLogoChange,
                                class: "mb-4"
                              }),
                              footerLogoPreview.value ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: footerLogoPreview.value,
                                alt: "Banner Preview",
                                class: "preview-image mb-4"
                              }, null, 8, ["src"])) : createCommentVNode("", true),
                              createVNode(VTextarea, {
                                modelValue: footerDescription.value,
                                "onUpdate:modelValue": ($event) => footerDescription.value = $event,
                                label: "Footer Description",
                                placeholder: "Enter footer description",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextarea, {
                                modelValue: categories.value,
                                "onUpdate:modelValue": ($event) => categories.value = $event,
                                label: "Footer Categories (Comma Separated)",
                                placeholder: "Enter categories separated by commas",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: copyrightText.value,
                                "onUpdate:modelValue": ($event) => copyrightText.value = $event,
                                label: "Copyright Text",
                                placeholder: "Enter copyright text",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: contactInfo.value.address,
                                "onUpdate:modelValue": ($event) => contactInfo.value.address = $event,
                                label: "Contact Address",
                                placeholder: "Enter contact address",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: contactInfo.value.phone,
                                "onUpdate:modelValue": ($event) => contactInfo.value.phone = $event,
                                label: "Contact Phone",
                                placeholder: "Enter contact phone number",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: contactInfo.value.email,
                                "onUpdate:modelValue": ($event) => contactInfo.value.email = $event,
                                label: "Contact Email",
                                placeholder: "Enter contact email",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        class: "d-flex gap-4 mt-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            onClick: ($event) => saveSettings("footer")
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Update Footer Settings")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
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
      _push(ssrRenderComponent(VCard, {
        title: "Social Media Links",
        class: "mt-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: socialLinks.value.facebook,
                                      "onUpdate:modelValue": ($event) => socialLinks.value.facebook = $event,
                                      label: "Facebook URL",
                                      placeholder: "Enter Facebook URL",
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: socialLinks.value.twitter,
                                      "onUpdate:modelValue": ($event) => socialLinks.value.twitter = $event,
                                      label: "Twitter URL",
                                      placeholder: "Enter Twitter URL",
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: socialLinks.value.instagram,
                                      "onUpdate:modelValue": ($event) => socialLinks.value.instagram = $event,
                                      label: "Instagram URL",
                                      placeholder: "Enter Instagram URL",
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: socialLinks.value.youtube,
                                      "onUpdate:modelValue": ($event) => socialLinks.value.youtube = $event,
                                      label: "YouTube URL",
                                      placeholder: "Enter YouTube URL",
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: socialLinks.value.linkedin,
                                      "onUpdate:modelValue": ($event) => socialLinks.value.linkedin = $event,
                                      label: "LinkedIn URL",
                                      placeholder: "Enter LinkedIn URL",
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: socialLinks.value.facebook,
                                        "onUpdate:modelValue": ($event) => socialLinks.value.facebook = $event,
                                        label: "Facebook URL",
                                        placeholder: "Enter Facebook URL",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VTextField, {
                                        modelValue: socialLinks.value.twitter,
                                        "onUpdate:modelValue": ($event) => socialLinks.value.twitter = $event,
                                        label: "Twitter URL",
                                        placeholder: "Enter Twitter URL",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VTextField, {
                                        modelValue: socialLinks.value.instagram,
                                        "onUpdate:modelValue": ($event) => socialLinks.value.instagram = $event,
                                        label: "Instagram URL",
                                        placeholder: "Enter Instagram URL",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VTextField, {
                                        modelValue: socialLinks.value.youtube,
                                        "onUpdate:modelValue": ($event) => socialLinks.value.youtube = $event,
                                        label: "YouTube URL",
                                        placeholder: "Enter YouTube URL",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VTextField, {
                                        modelValue: socialLinks.value.linkedin,
                                        "onUpdate:modelValue": ($event) => socialLinks.value.linkedin = $event,
                                        label: "LinkedIn URL",
                                        placeholder: "Enter LinkedIn URL",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                      modelValue: socialLinks.value.facebook,
                                      "onUpdate:modelValue": ($event) => socialLinks.value.facebook = $event,
                                      label: "Facebook URL",
                                      placeholder: "Enter Facebook URL",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VTextField, {
                                      modelValue: socialLinks.value.twitter,
                                      "onUpdate:modelValue": ($event) => socialLinks.value.twitter = $event,
                                      label: "Twitter URL",
                                      placeholder: "Enter Twitter URL",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VTextField, {
                                      modelValue: socialLinks.value.instagram,
                                      "onUpdate:modelValue": ($event) => socialLinks.value.instagram = $event,
                                      label: "Instagram URL",
                                      placeholder: "Enter Instagram URL",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VTextField, {
                                      modelValue: socialLinks.value.youtube,
                                      "onUpdate:modelValue": ($event) => socialLinks.value.youtube = $event,
                                      label: "YouTube URL",
                                      placeholder: "Enter YouTube URL",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VTextField, {
                                      modelValue: socialLinks.value.linkedin,
                                      "onUpdate:modelValue": ($event) => socialLinks.value.linkedin = $event,
                                      label: "LinkedIn URL",
                                      placeholder: "Enter LinkedIn URL",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          class: "d-flex gap-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                onClick: ($event) => saveSettings("social")
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Update Social Media Links`);
                                  } else {
                                    return [
                                      createTextVNode("Update Social Media Links")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  onClick: ($event) => saveSettings("social")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Update Social Media Links")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
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
                                    modelValue: socialLinks.value.facebook,
                                    "onUpdate:modelValue": ($event) => socialLinks.value.facebook = $event,
                                    label: "Facebook URL",
                                    placeholder: "Enter Facebook URL",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VTextField, {
                                    modelValue: socialLinks.value.twitter,
                                    "onUpdate:modelValue": ($event) => socialLinks.value.twitter = $event,
                                    label: "Twitter URL",
                                    placeholder: "Enter Twitter URL",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VTextField, {
                                    modelValue: socialLinks.value.instagram,
                                    "onUpdate:modelValue": ($event) => socialLinks.value.instagram = $event,
                                    label: "Instagram URL",
                                    placeholder: "Enter Instagram URL",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VTextField, {
                                    modelValue: socialLinks.value.youtube,
                                    "onUpdate:modelValue": ($event) => socialLinks.value.youtube = $event,
                                    label: "YouTube URL",
                                    placeholder: "Enter YouTube URL",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VTextField, {
                                    modelValue: socialLinks.value.linkedin,
                                    "onUpdate:modelValue": ($event) => socialLinks.value.linkedin = $event,
                                    label: "LinkedIn URL",
                                    placeholder: "Enter LinkedIn URL",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            class: "d-flex gap-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                onClick: ($event) => saveSettings("social")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Update Social Media Links")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
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
                    createVNode(VForm, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: socialLinks.value.facebook,
                                  "onUpdate:modelValue": ($event) => socialLinks.value.facebook = $event,
                                  label: "Facebook URL",
                                  placeholder: "Enter Facebook URL",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: socialLinks.value.twitter,
                                  "onUpdate:modelValue": ($event) => socialLinks.value.twitter = $event,
                                  label: "Twitter URL",
                                  placeholder: "Enter Twitter URL",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: socialLinks.value.instagram,
                                  "onUpdate:modelValue": ($event) => socialLinks.value.instagram = $event,
                                  label: "Instagram URL",
                                  placeholder: "Enter Instagram URL",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: socialLinks.value.youtube,
                                  "onUpdate:modelValue": ($event) => socialLinks.value.youtube = $event,
                                  label: "YouTube URL",
                                  placeholder: "Enter YouTube URL",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: socialLinks.value.linkedin,
                                  "onUpdate:modelValue": ($event) => socialLinks.value.linkedin = $event,
                                  label: "LinkedIn URL",
                                  placeholder: "Enter LinkedIn URL",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          class: "d-flex gap-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              onClick: ($event) => saveSettings("social")
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Update Social Media Links")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
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
                  createVNode(VForm, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: socialLinks.value.facebook,
                                "onUpdate:modelValue": ($event) => socialLinks.value.facebook = $event,
                                label: "Facebook URL",
                                placeholder: "Enter Facebook URL",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: socialLinks.value.twitter,
                                "onUpdate:modelValue": ($event) => socialLinks.value.twitter = $event,
                                label: "Twitter URL",
                                placeholder: "Enter Twitter URL",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: socialLinks.value.instagram,
                                "onUpdate:modelValue": ($event) => socialLinks.value.instagram = $event,
                                label: "Instagram URL",
                                placeholder: "Enter Instagram URL",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: socialLinks.value.youtube,
                                "onUpdate:modelValue": ($event) => socialLinks.value.youtube = $event,
                                label: "YouTube URL",
                                placeholder: "Enter YouTube URL",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: socialLinks.value.linkedin,
                                "onUpdate:modelValue": ($event) => socialLinks.value.linkedin = $event,
                                label: "LinkedIn URL",
                                placeholder: "Enter LinkedIn URL",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        class: "d-flex gap-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            onClick: ($event) => saveSettings("social")
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Update Social Media Links")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
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
      _push(ssrRenderComponent(VCard, {
        title: "Quick Links Settings",
        class: "mt-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(quickLinks.value, (link, index) => {
                                      _push6(ssrRenderComponent(VRow, {
                                        key: index,
                                        class: "align-center mb-2"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCol, { cols: "5" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VTextField, {
                                                    modelValue: link.title,
                                                    "onUpdate:modelValue": ($event) => link.title = $event,
                                                    label: "Link Title",
                                                    placeholder: "Enter title",
                                                    class: "mb-2"
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VTextField, {
                                                      modelValue: link.title,
                                                      "onUpdate:modelValue": ($event) => link.title = $event,
                                                      label: "Link Title",
                                                      placeholder: "Enter title",
                                                      class: "mb-2"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VCol, { cols: "5" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VTextField, {
                                                    modelValue: link.url,
                                                    "onUpdate:modelValue": ($event) => link.url = $event,
                                                    label: "Link URL",
                                                    placeholder: "Enter URL",
                                                    class: "mb-2"
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VTextField, {
                                                      modelValue: link.url,
                                                      "onUpdate:modelValue": ($event) => link.url = $event,
                                                      label: "Link URL",
                                                      placeholder: "Enter URL",
                                                      class: "mb-2"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VCol, {
                                              cols: "2",
                                              class: "d-flex justify-end"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VBtn, {
                                                    icon: "",
                                                    color: "error",
                                                    onClick: ($event) => removeQuickLink(index),
                                                    text: ""
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<i class="ri-delete-bin-line" data-v-e82a43d2${_scopeId8}></i>`);
                                                      } else {
                                                        return [
                                                          createVNode("i", { class: "ri-delete-bin-line" })
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VBtn, {
                                                      icon: "",
                                                      color: "error",
                                                      onClick: ($event) => removeQuickLink(index),
                                                      text: ""
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("i", { class: "ri-delete-bin-line" })
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["onClick"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCol, { cols: "5" }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: link.title,
                                                    "onUpdate:modelValue": ($event) => link.title = $event,
                                                    label: "Link Title",
                                                    placeholder: "Enter title",
                                                    class: "mb-2"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VCol, { cols: "5" }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: link.url,
                                                    "onUpdate:modelValue": ($event) => link.url = $event,
                                                    label: "Link URL",
                                                    placeholder: "Enter URL",
                                                    class: "mb-2"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VCol, {
                                                cols: "2",
                                                class: "d-flex justify-end"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VBtn, {
                                                    icon: "",
                                                    color: "error",
                                                    onClick: ($event) => removeQuickLink(index),
                                                    text: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("i", { class: "ri-delete-bin-line" })
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"])
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
                                    _push6(ssrRenderComponent(VBtn, {
                                      onClick: addQuickLink,
                                      color: "primary",
                                      class: "mt-2"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Add New `);
                                        } else {
                                          return [
                                            createTextVNode(" Add New ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(quickLinks.value, (link, index) => {
                                        return openBlock(), createBlock(VRow, {
                                          key: index,
                                          class: "align-center mb-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { cols: "5" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: link.title,
                                                  "onUpdate:modelValue": ($event) => link.title = $event,
                                                  label: "Link Title",
                                                  placeholder: "Enter title",
                                                  class: "mb-2"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VCol, { cols: "5" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: link.url,
                                                  "onUpdate:modelValue": ($event) => link.url = $event,
                                                  label: "Link URL",
                                                  placeholder: "Enter URL",
                                                  class: "mb-2"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VCol, {
                                              cols: "2",
                                              class: "d-flex justify-end"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, {
                                                  icon: "",
                                                  color: "error",
                                                  onClick: ($event) => removeQuickLink(index),
                                                  text: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("i", { class: "ri-delete-bin-line" })
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128)),
                                      createVNode(VBtn, {
                                        onClick: addQuickLink,
                                        color: "primary",
                                        class: "mt-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Add New ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(quickLinks.value, (link, index) => {
                                      return openBlock(), createBlock(VRow, {
                                        key: index,
                                        class: "align-center mb-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "5" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: link.title,
                                                "onUpdate:modelValue": ($event) => link.title = $event,
                                                label: "Link Title",
                                                placeholder: "Enter title",
                                                class: "mb-2"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VCol, { cols: "5" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: link.url,
                                                "onUpdate:modelValue": ($event) => link.url = $event,
                                                label: "Link URL",
                                                placeholder: "Enter URL",
                                                class: "mb-2"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VCol, {
                                            cols: "2",
                                            class: "d-flex justify-end"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                icon: "",
                                                color: "error",
                                                onClick: ($event) => removeQuickLink(index),
                                                text: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("i", { class: "ri-delete-bin-line" })
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128)),
                                    createVNode(VBtn, {
                                      onClick: addQuickLink,
                                      color: "primary",
                                      class: "mt-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Add New ")
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          class: "d-flex gap-4 mt-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                onClick: ($event) => saveSettings("footer")
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Update Footer Settings`);
                                  } else {
                                    return [
                                      createTextVNode("Update Footer Settings")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  onClick: ($event) => saveSettings("footer")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Update Footer Settings")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(quickLinks.value, (link, index) => {
                                    return openBlock(), createBlock(VRow, {
                                      key: index,
                                      class: "align-center mb-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "5" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: link.title,
                                              "onUpdate:modelValue": ($event) => link.title = $event,
                                              label: "Link Title",
                                              placeholder: "Enter title",
                                              class: "mb-2"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCol, { cols: "5" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: link.url,
                                              "onUpdate:modelValue": ($event) => link.url = $event,
                                              label: "Link URL",
                                              placeholder: "Enter URL",
                                              class: "mb-2"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCol, {
                                          cols: "2",
                                          class: "d-flex justify-end"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              icon: "",
                                              color: "error",
                                              onClick: ($event) => removeQuickLink(index),
                                              text: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("i", { class: "ri-delete-bin-line" })
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128)),
                                  createVNode(VBtn, {
                                    onClick: addQuickLink,
                                    color: "primary",
                                    class: "mt-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Add New ")
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
                            class: "d-flex gap-4 mt-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                onClick: ($event) => saveSettings("footer")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Update Footer Settings")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
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
                    createVNode(VForm, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(quickLinks.value, (link, index) => {
                                  return openBlock(), createBlock(VRow, {
                                    key: index,
                                    class: "align-center mb-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "5" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: link.title,
                                            "onUpdate:modelValue": ($event) => link.title = $event,
                                            label: "Link Title",
                                            placeholder: "Enter title",
                                            class: "mb-2"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCol, { cols: "5" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: link.url,
                                            "onUpdate:modelValue": ($event) => link.url = $event,
                                            label: "Link URL",
                                            placeholder: "Enter URL",
                                            class: "mb-2"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCol, {
                                        cols: "2",
                                        class: "d-flex justify-end"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            icon: "",
                                            color: "error",
                                            onClick: ($event) => removeQuickLink(index),
                                            text: ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("i", { class: "ri-delete-bin-line" })
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128)),
                                createVNode(VBtn, {
                                  onClick: addQuickLink,
                                  color: "primary",
                                  class: "mt-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Add New ")
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
                          class: "d-flex gap-4 mt-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              onClick: ($event) => saveSettings("footer")
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Update Footer Settings")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
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
                  createVNode(VForm, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(quickLinks.value, (link, index) => {
                                return openBlock(), createBlock(VRow, {
                                  key: index,
                                  class: "align-center mb-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "5" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: link.title,
                                          "onUpdate:modelValue": ($event) => link.title = $event,
                                          label: "Link Title",
                                          placeholder: "Enter title",
                                          class: "mb-2"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCol, { cols: "5" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: link.url,
                                          "onUpdate:modelValue": ($event) => link.url = $event,
                                          label: "Link URL",
                                          placeholder: "Enter URL",
                                          class: "mb-2"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCol, {
                                      cols: "2",
                                      class: "d-flex justify-end"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          icon: "",
                                          color: "error",
                                          onClick: ($event) => removeQuickLink(index),
                                          text: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("i", { class: "ri-delete-bin-line" })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128)),
                              createVNode(VBtn, {
                                onClick: addQuickLink,
                                color: "primary",
                                class: "mt-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Add New ")
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
                        class: "d-flex gap-4 mt-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            onClick: ($event) => saveSettings("footer")
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Update Footer Settings")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/website-setup/general.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const general = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e82a43d2"]]);

export { general as default };
