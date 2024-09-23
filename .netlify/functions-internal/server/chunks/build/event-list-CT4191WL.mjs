import { _ as __nuxt_component_0 } from './nuxt-link-D-x2kIQw.mjs';
import { ref, watch, nextTick, computed, mergeProps, createVNode, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { e as eventService } from './eventService-Bw0qQtF_.mjs';
import { V as VRow, a as VCol } from './VRow-DdKnicNs.mjs';
import { V as VCard, a as VCardText, c as VCardTitle, e as VCardActions } from './VCard-Bdfw-mBj.mjs';
import { p as propsFactory, g as genericComponent, h as useProxiedModel, l as useRender, O as VDefaultsProvider, a as VIcon, V as VBtn } from './server.mjs';
import { V as VSpacer } from './VSpacer-DIpTA8q-.mjs';
import { V as VTextField } from './VTextField-BZmvmRfe.mjs';
import { V as VDivider } from './VDivider-DdsSNvlF.mjs';
import { V as VDataTable } from './VDataTable-B5pkZORV.mjs';
import { V as VChip } from './VChip-BMAQYvMK.mjs';
import { m as makeVOverlayProps, u as useScopeId, V as VOverlay } from './VOverlay-D4Vsv0zT.mjs';
import { f as forwardRefs } from './forwardRefs-BSTjJZPU.mjs';
import { e as VDialogTransition } from './VMenu-BlUxI1bj.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'axios';
import './VAvatar-CZq753ec.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-devtools-stub';
import 'vue3-toastify';
import './index-tuhqJpq8.mjs';
import './easing-CuhD-vKF.mjs';
import './VSelect-CQA9Lotf.mjs';
import './VCheckboxBtn-BOaF0jaZ.mjs';
import './VTable-DbuYfHKf.mjs';
import './lazy-BteLhbse.mjs';
import './ssrBoot-BtvJZs44.mjs';

const makeVDialogProps = propsFactory({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: true
  },
  scrollable: Boolean,
  ...makeVOverlayProps({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: VDialogTransition
    },
    zIndex: 2400
  })
}, "VDialog");
const VDialog = genericComponent()({
  name: "VDialog",
  props: makeVDialogProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const overlay = ref();
    watch(isActive, async (val) => {
      var _a, _b;
      await nextTick();
      if (val) {
        (_a = overlay.value.contentEl) == null ? void 0 : _a.focus({
          preventScroll: true
        });
      } else {
        (_b = overlay.value.activatorEl) == null ? void 0 : _b.focus({
          preventScroll: true
        });
      }
    });
    const activatorProps = computed(() => mergeProps({
      "aria-haspopup": "dialog",
      "aria-expanded": String(isActive.value)
    }, props.activatorProps));
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-dialog", {
          "v-dialog--fullscreen": props.fullscreen,
          "v-dialog--scrollable": props.scrollable
        }, props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "aria-modal": "true",
        "activatorProps": activatorProps.value,
        "role": "dialog"
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(VDefaultsProvider, {
            "root": "VDialog"
          }, {
            default: () => {
              var _a;
              return [(_a = slots.default) == null ? void 0 : _a.call(slots, ...args)];
            }
          });
        }
      });
    });
    return forwardRefs({}, overlay);
  }
});
const _sfc_main = {
  __name: "event-list",
  __ssrInlineRender: true,
  setup(__props) {
    const dialog = ref(false);
    const currentEvent = ref(null);
    const slugDialog = ref(false);
    const newSlug = ref("");
    const events = ref([]);
    const search = ref("");
    const headers = [
      { title: "Title", value: "title" },
      { title: "Slug", value: "slug" },
      // { title: 'Date', value: 'event_date_from' },
      { title: "Status", value: "status" },
      { title: "Actions", value: "actions", sortable: false }
    ];
    const fetchEvents = async () => {
      try {
        events.value = await eventService.getEvents();
        console.log(events.value);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    const updateStatus = async (status) => {
      if (currentEvent.value) {
        let statusValue;
        switch (status) {
          case "active":
            statusValue = "active";
            break;
          case "inactive":
            statusValue = "inactive";
            break;
          case "rejected":
            statusValue = "rejected";
            break;
        }
        try {
          await eventService.updateEventStatus(currentEvent.value.id, { status: statusValue });
          fetchEvents();
        } catch (error) {
          console.error("Error updating status:", error);
        } finally {
          dialog.value = false;
        }
      }
    };
    const updateSlug = async () => {
      if (currentEvent.value && newSlug.value) {
        try {
          await eventService.updateEventStatusSlug(currentEvent.value.id, { slug: newSlug.value });
          fetchEvents();
          slugDialog.value = false;
        } catch (error) {
          console.error("Error updating slug:", error);
        }
      }
    };
    const openDialog = (event) => {
      currentEvent.value = event;
      dialog.value = true;
    };
    const openSlugDialog = (event) => {
      currentEvent.value = event;
      newSlug.value = event.slug;
      slugDialog.value = true;
    };
    const deleteEvent = async (eventId) => {
      confirmDialog({
        title: "Confirm Delete",
        message: "Are you sure you want to delete this event?",
        confirm: async () => {
          try {
            await eventService.deleteEvent(eventId);
            fetchEvents();
          } catch (error) {
            console.error("Error deleting event:", error);
          }
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "10"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    title: "",
                    class: "mt-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, { flat: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardTitle, { class: "d-flex align-center pe-2" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, { icon: "mdi-calendar" }, null, _parent7, _scopeId6));
                                          _push7(` \xA0 Event List `);
                                          _push7(ssrRenderComponent(VSpacer, null, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: search.value,
                                            "onUpdate:modelValue": ($event) => search.value = $event,
                                            density: "compact",
                                            label: "Search",
                                            "prepend-inner-icon": "mdi-magnify",
                                            variant: "solo-filled",
                                            flat: "",
                                            "hide-details": "",
                                            "single-line": ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VIcon, { icon: "mdi-calendar" }),
                                            createTextVNode(" \xA0 Event List "),
                                            createVNode(VSpacer),
                                            createVNode(VTextField, {
                                              modelValue: search.value,
                                              "onUpdate:modelValue": ($event) => search.value = $event,
                                              density: "compact",
                                              label: "Search",
                                              "prepend-inner-icon": "mdi-magnify",
                                              variant: "solo-filled",
                                              flat: "",
                                              "hide-details": "",
                                              "single-line": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VDivider, null, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VDataTable, {
                                      search: search.value,
                                      "onUpdate:search": ($event) => search.value = $event,
                                      items: events.value,
                                      headers
                                    }, {
                                      "item.title": withCtx(({ item }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(item.title)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(item.title), 1)
                                          ];
                                        }
                                      }),
                                      "item.slug": withCtx(({ item }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            text: "",
                                            onClick: ($event) => openSlugDialog(item)
                                          }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<i class="ri-pencil-fill"${_scopeId7}></i> ${ssrInterpolate(item.slug)}`);
                                              } else {
                                                return [
                                                  createVNode("i", { class: "ri-pencil-fill" }),
                                                  createTextVNode(" " + toDisplayString(item.slug), 1)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              text: "",
                                              onClick: ($event) => openSlugDialog(item)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("i", { class: "ri-pencil-fill" }),
                                                createTextVNode(" " + toDisplayString(item.slug), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ];
                                        }
                                      }),
                                      "item.status": withCtx(({ item }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VChip, {
                                            color: item.status === "active" ? "success" : "error",
                                            text: item.status === "active" ? "active" : "inactive",
                                            class: "text-uppercase",
                                            size: "small",
                                            label: "",
                                            onClick: ($event) => openDialog(item)
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VChip, {
                                              color: item.status === "active" ? "success" : "error",
                                              text: item.status === "active" ? "active" : "inactive",
                                              class: "text-uppercase",
                                              size: "small",
                                              label: "",
                                              onClick: ($event) => openDialog(item)
                                            }, null, 8, ["color", "text", "onClick"])
                                          ];
                                        }
                                      }),
                                      "item.actions": withCtx(({ item }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            icon: "",
                                            color: "primary"
                                          }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_NuxtLink, {
                                                  to: `/edit-listing/${item.id}`
                                                }, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<i class="ri-edit-box-line white-icon"${_scopeId8}></i>`);
                                                    } else {
                                                      return [
                                                        createVNode("i", { class: "ri-edit-box-line white-icon" })
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_NuxtLink, {
                                                    to: `/edit-listing/${item.id}`
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("i", { class: "ri-edit-box-line white-icon" })
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["to"])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            icon: "",
                                            color: "error",
                                            onClick: ($event) => deleteEvent(item.id)
                                          }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<i class="ri-delete-bin-line"${_scopeId7}></i>`);
                                              } else {
                                                return [
                                                  createVNode("i", { class: "ri-delete-bin-line" })
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              icon: "",
                                              color: "primary"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_NuxtLink, {
                                                  to: `/edit-listing/${item.id}`
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("i", { class: "ri-edit-box-line white-icon" })
                                                  ]),
                                                  _: 2
                                                }, 1032, ["to"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VBtn, {
                                              icon: "",
                                              color: "error",
                                              onClick: ($event) => deleteEvent(item.id)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("i", { class: "ri-delete-bin-line" })
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardTitle, { class: "d-flex align-center pe-2" }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { icon: "mdi-calendar" }),
                                          createTextVNode(" \xA0 Event List "),
                                          createVNode(VSpacer),
                                          createVNode(VTextField, {
                                            modelValue: search.value,
                                            "onUpdate:modelValue": ($event) => search.value = $event,
                                            density: "compact",
                                            label: "Search",
                                            "prepend-inner-icon": "mdi-magnify",
                                            variant: "solo-filled",
                                            flat: "",
                                            "hide-details": "",
                                            "single-line": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider),
                                      createVNode(VDataTable, {
                                        search: search.value,
                                        "onUpdate:search": ($event) => search.value = $event,
                                        items: events.value,
                                        headers
                                      }, {
                                        "item.title": withCtx(({ item }) => [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ]),
                                        "item.slug": withCtx(({ item }) => [
                                          createVNode(VBtn, {
                                            text: "",
                                            onClick: ($event) => openSlugDialog(item)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("i", { class: "ri-pencil-fill" }),
                                              createTextVNode(" " + toDisplayString(item.slug), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"])
                                        ]),
                                        "item.status": withCtx(({ item }) => [
                                          createVNode(VChip, {
                                            color: item.status === "active" ? "success" : "error",
                                            text: item.status === "active" ? "active" : "inactive",
                                            class: "text-uppercase",
                                            size: "small",
                                            label: "",
                                            onClick: ($event) => openDialog(item)
                                          }, null, 8, ["color", "text", "onClick"])
                                        ]),
                                        "item.actions": withCtx(({ item }) => [
                                          createVNode(VBtn, {
                                            icon: "",
                                            color: "primary"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_NuxtLink, {
                                                to: `/edit-listing/${item.id}`
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("i", { class: "ri-edit-box-line white-icon" })
                                                ]),
                                                _: 2
                                              }, 1032, ["to"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VBtn, {
                                            icon: "",
                                            color: "error",
                                            onClick: ($event) => deleteEvent(item.id)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("i", { class: "ri-delete-bin-line" })
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"])
                                        ]),
                                        _: 1
                                      }, 8, ["search", "onUpdate:search", "items"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCard, { flat: "" }, {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, { class: "d-flex align-center pe-2" }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { icon: "mdi-calendar" }),
                                        createTextVNode(" \xA0 Event List "),
                                        createVNode(VSpacer),
                                        createVNode(VTextField, {
                                          modelValue: search.value,
                                          "onUpdate:modelValue": ($event) => search.value = $event,
                                          density: "compact",
                                          label: "Search",
                                          "prepend-inner-icon": "mdi-magnify",
                                          variant: "solo-filled",
                                          flat: "",
                                          "hide-details": "",
                                          "single-line": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VDivider),
                                    createVNode(VDataTable, {
                                      search: search.value,
                                      "onUpdate:search": ($event) => search.value = $event,
                                      items: events.value,
                                      headers
                                    }, {
                                      "item.title": withCtx(({ item }) => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      "item.slug": withCtx(({ item }) => [
                                        createVNode(VBtn, {
                                          text: "",
                                          onClick: ($event) => openSlugDialog(item)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("i", { class: "ri-pencil-fill" }),
                                            createTextVNode(" " + toDisplayString(item.slug), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ]),
                                      "item.status": withCtx(({ item }) => [
                                        createVNode(VChip, {
                                          color: item.status === "active" ? "success" : "error",
                                          text: item.status === "active" ? "active" : "inactive",
                                          class: "text-uppercase",
                                          size: "small",
                                          label: "",
                                          onClick: ($event) => openDialog(item)
                                        }, null, 8, ["color", "text", "onClick"])
                                      ]),
                                      "item.actions": withCtx(({ item }) => [
                                        createVNode(VBtn, {
                                          icon: "",
                                          color: "primary"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_NuxtLink, {
                                              to: `/edit-listing/${item.id}`
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("i", { class: "ri-edit-box-line white-icon" })
                                              ]),
                                              _: 2
                                            }, 1032, ["to"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VBtn, {
                                          icon: "",
                                          color: "error",
                                          onClick: ($event) => deleteEvent(item.id)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("i", { class: "ri-delete-bin-line" })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ]),
                                      _: 1
                                    }, 8, ["search", "onUpdate:search", "items"])
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
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VCard, { flat: "" }, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, { class: "d-flex align-center pe-2" }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "mdi-calendar" }),
                                      createTextVNode(" \xA0 Event List "),
                                      createVNode(VSpacer),
                                      createVNode(VTextField, {
                                        modelValue: search.value,
                                        "onUpdate:modelValue": ($event) => search.value = $event,
                                        density: "compact",
                                        label: "Search",
                                        "prepend-inner-icon": "mdi-magnify",
                                        variant: "solo-filled",
                                        flat: "",
                                        "hide-details": "",
                                        "single-line": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider),
                                  createVNode(VDataTable, {
                                    search: search.value,
                                    "onUpdate:search": ($event) => search.value = $event,
                                    items: events.value,
                                    headers
                                  }, {
                                    "item.title": withCtx(({ item }) => [
                                      createTextVNode(toDisplayString(item.title), 1)
                                    ]),
                                    "item.slug": withCtx(({ item }) => [
                                      createVNode(VBtn, {
                                        text: "",
                                        onClick: ($event) => openSlugDialog(item)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("i", { class: "ri-pencil-fill" }),
                                          createTextVNode(" " + toDisplayString(item.slug), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ]),
                                    "item.status": withCtx(({ item }) => [
                                      createVNode(VChip, {
                                        color: item.status === "active" ? "success" : "error",
                                        text: item.status === "active" ? "active" : "inactive",
                                        class: "text-uppercase",
                                        size: "small",
                                        label: "",
                                        onClick: ($event) => openDialog(item)
                                      }, null, 8, ["color", "text", "onClick"])
                                    ]),
                                    "item.actions": withCtx(({ item }) => [
                                      createVNode(VBtn, {
                                        icon: "",
                                        color: "primary"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_NuxtLink, {
                                            to: `/edit-listing/${item.id}`
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("i", { class: "ri-edit-box-line white-icon" })
                                            ]),
                                            _: 2
                                          }, 1032, ["to"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VBtn, {
                                        icon: "",
                                        color: "error",
                                        onClick: ($event) => deleteEvent(item.id)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("i", { class: "ri-delete-bin-line" })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ]),
                                    _: 1
                                  }, 8, ["search", "onUpdate:search", "items"])
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
                    createVNode(VCard, {
                      title: "",
                      class: "mt-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VCard, { flat: "" }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, { class: "d-flex align-center pe-2" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "mdi-calendar" }),
                                    createTextVNode(" \xA0 Event List "),
                                    createVNode(VSpacer),
                                    createVNode(VTextField, {
                                      modelValue: search.value,
                                      "onUpdate:modelValue": ($event) => search.value = $event,
                                      density: "compact",
                                      label: "Search",
                                      "prepend-inner-icon": "mdi-magnify",
                                      variant: "solo-filled",
                                      flat: "",
                                      "hide-details": "",
                                      "single-line": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider),
                                createVNode(VDataTable, {
                                  search: search.value,
                                  "onUpdate:search": ($event) => search.value = $event,
                                  items: events.value,
                                  headers
                                }, {
                                  "item.title": withCtx(({ item }) => [
                                    createTextVNode(toDisplayString(item.title), 1)
                                  ]),
                                  "item.slug": withCtx(({ item }) => [
                                    createVNode(VBtn, {
                                      text: "",
                                      onClick: ($event) => openSlugDialog(item)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("i", { class: "ri-pencil-fill" }),
                                        createTextVNode(" " + toDisplayString(item.slug), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  "item.status": withCtx(({ item }) => [
                                    createVNode(VChip, {
                                      color: item.status === "active" ? "success" : "error",
                                      text: item.status === "active" ? "active" : "inactive",
                                      class: "text-uppercase",
                                      size: "small",
                                      label: "",
                                      onClick: ($event) => openDialog(item)
                                    }, null, 8, ["color", "text", "onClick"])
                                  ]),
                                  "item.actions": withCtx(({ item }) => [
                                    createVNode(VBtn, {
                                      icon: "",
                                      color: "primary"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_NuxtLink, {
                                          to: `/edit-listing/${item.id}`
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("i", { class: "ri-edit-box-line white-icon" })
                                          ]),
                                          _: 2
                                        }, 1032, ["to"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VBtn, {
                                      icon: "",
                                      color: "error",
                                      onClick: ($event) => deleteEvent(item.id)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("i", { class: "ri-delete-bin-line" })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 1
                                }, 8, ["search", "onUpdate:search", "items"])
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
              createVNode(VCol, {
                cols: "12",
                md: "10"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    title: "",
                    class: "mt-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VCard, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "d-flex align-center pe-2" }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "mdi-calendar" }),
                                  createTextVNode(" \xA0 Event List "),
                                  createVNode(VSpacer),
                                  createVNode(VTextField, {
                                    modelValue: search.value,
                                    "onUpdate:modelValue": ($event) => search.value = $event,
                                    density: "compact",
                                    label: "Search",
                                    "prepend-inner-icon": "mdi-magnify",
                                    variant: "solo-filled",
                                    flat: "",
                                    "hide-details": "",
                                    "single-line": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider),
                              createVNode(VDataTable, {
                                search: search.value,
                                "onUpdate:search": ($event) => search.value = $event,
                                items: events.value,
                                headers
                              }, {
                                "item.title": withCtx(({ item }) => [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ]),
                                "item.slug": withCtx(({ item }) => [
                                  createVNode(VBtn, {
                                    text: "",
                                    onClick: ($event) => openSlugDialog(item)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("i", { class: "ri-pencil-fill" }),
                                      createTextVNode(" " + toDisplayString(item.slug), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                "item.status": withCtx(({ item }) => [
                                  createVNode(VChip, {
                                    color: item.status === "active" ? "success" : "error",
                                    text: item.status === "active" ? "active" : "inactive",
                                    class: "text-uppercase",
                                    size: "small",
                                    label: "",
                                    onClick: ($event) => openDialog(item)
                                  }, null, 8, ["color", "text", "onClick"])
                                ]),
                                "item.actions": withCtx(({ item }) => [
                                  createVNode(VBtn, {
                                    icon: "",
                                    color: "primary"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_NuxtLink, {
                                        to: `/edit-listing/${item.id}`
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("i", { class: "ri-edit-box-line white-icon" })
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VBtn, {
                                    icon: "",
                                    color: "error",
                                    onClick: ($event) => deleteEvent(item.id)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("i", { class: "ri-delete-bin-line" })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 1
                              }, 8, ["search", "onUpdate:search", "items"])
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
      _push(ssrRenderComponent(VDialog, {
        modelValue: slugDialog.value,
        "onUpdate:modelValue": ($event) => slugDialog.value = $event,
        width: "auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { "max-width": "400" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Update Slug `);
                      } else {
                        return [
                          createTextVNode(" Update Slug ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, mergeProps({
                          modelValue: newSlug.value,
                          "onUpdate:modelValue": ($event) => newSlug.value = $event,
                          label: "Slug",
                          variant: "outlined",
                          clearable: ""
                        }, { size: 111 }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, mergeProps({
                            modelValue: newSlug.value,
                            "onUpdate:modelValue": ($event) => newSlug.value = $event,
                            label: "Slug",
                            variant: "outlined",
                            clearable: ""
                          }, { size: 111 }), null, 16, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, { class: "d-flex justify-end" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          text: "",
                          onClick: updateSlug
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Update`);
                            } else {
                              return [
                                createTextVNode("Update")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          text: "",
                          onClick: ($event) => slugDialog.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Cancel`);
                            } else {
                              return [
                                createTextVNode("Cancel")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            color: "primary",
                            text: "",
                            onClick: updateSlug
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Update")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            text: "",
                            onClick: ($event) => slugDialog.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cancel")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(" Update Slug ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VTextField, mergeProps({
                          modelValue: newSlug.value,
                          "onUpdate:modelValue": ($event) => newSlug.value = $event,
                          label: "Slug",
                          variant: "outlined",
                          clearable: ""
                        }, { size: 111 }), null, 16, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(VCardActions, { class: "d-flex justify-end" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          color: "primary",
                          text: "",
                          onClick: updateSlug
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Update")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          text: "",
                          onClick: ($event) => slugDialog.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Cancel")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { "max-width": "400" }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(" Update Slug ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VTextField, mergeProps({
                        modelValue: newSlug.value,
                        "onUpdate:modelValue": ($event) => newSlug.value = $event,
                        label: "Slug",
                        variant: "outlined",
                        clearable: ""
                      }, { size: 111 }), null, 16, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(VCardActions, { class: "d-flex justify-end" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "primary",
                        text: "",
                        onClick: updateSlug
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Update")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        text: "",
                        onClick: ($event) => slugDialog.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cancel")
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
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: dialog.value,
        "onUpdate:modelValue": ($event) => dialog.value = $event,
        width: "auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { "max-width": "400" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Update Status `);
                      } else {
                        return [
                          createTextVNode(" Update Status ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Do you want to update the status of this event? `);
                      } else {
                        return [
                          createTextVNode(" Do you want to update the status of this event? ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, { class: "d-flex justify-end" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          text: "",
                          onClick: ($event) => updateStatus("active")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Active`);
                            } else {
                              return [
                                createTextVNode("Active")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "warning",
                          text: "",
                          onClick: ($event) => updateStatus("inactive")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Inactive`);
                            } else {
                              return [
                                createTextVNode("Inactive")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "error",
                          text: "",
                          onClick: ($event) => updateStatus("rejected")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Reject`);
                            } else {
                              return [
                                createTextVNode("Reject")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            color: "primary",
                            text: "",
                            onClick: ($event) => updateStatus("active")
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Active")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "warning",
                            text: "",
                            onClick: ($event) => updateStatus("inactive")
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Inactive")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "error",
                            text: "",
                            onClick: ($event) => updateStatus("rejected")
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Reject")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          text: "",
                          onClick: ($event) => dialog.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Cancel`);
                            } else {
                              return [
                                createTextVNode("Cancel")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            text: "",
                            onClick: ($event) => dialog.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cancel")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(" Update Status ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createTextVNode(" Do you want to update the status of this event? ")
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(VCardActions, { class: "d-flex justify-end" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          color: "primary",
                          text: "",
                          onClick: ($event) => updateStatus("active")
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Active")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "warning",
                          text: "",
                          onClick: ($event) => updateStatus("inactive")
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Inactive")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "error",
                          text: "",
                          onClick: ($event) => updateStatus("rejected")
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Reject")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          text: "",
                          onClick: ($event) => dialog.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Cancel")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { "max-width": "400" }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(" Update Status ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createTextVNode(" Do you want to update the status of this event? ")
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(VCardActions, { class: "d-flex justify-end" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "primary",
                        text: "",
                        onClick: ($event) => updateStatus("active")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Active")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "warning",
                        text: "",
                        onClick: ($event) => updateStatus("inactive")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Inactive")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "error",
                        text: "",
                        onClick: ($event) => updateStatus("rejected")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Reject")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        text: "",
                        onClick: ($event) => dialog.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cancel")
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
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/event-list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
