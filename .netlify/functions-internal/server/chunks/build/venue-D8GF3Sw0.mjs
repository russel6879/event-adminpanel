import { ref, withCtx, createVNode, createTextVNode, toDisplayString, withModifiers, useSSRContext, nextTick } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { V as VBtn, a as VIcon, J as useNuxtApp } from './server.mjs';
import axios from 'axios';
import { V as VRow, a as VCol } from './VRow-DdKnicNs.mjs';
import { V as VCard, a as VCardText, c as VCardTitle } from './VCard-Bdfw-mBj.mjs';
import { V as VForm } from './VForm-BD-B1_zQ.mjs';
import { V as VSelect } from './VSelect-CQA9Lotf.mjs';
import { V as VTextField } from './VTextField-BZmvmRfe.mjs';
import { V as VSpacer } from './VSpacer-DIpTA8q-.mjs';
import { V as VDivider } from './VDivider-DdsSNvlF.mjs';
import { V as VDataTable } from './VDataTable-B5pkZORV.mjs';
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
import './forwardRefs-BSTjJZPU.mjs';
import './VMenu-BlUxI1bj.mjs';
import './index-tuhqJpq8.mjs';
import './ssrBoot-BtvJZs44.mjs';
import './VOverlay-D4Vsv0zT.mjs';
import './easing-CuhD-vKF.mjs';
import './lazy-BteLhbse.mjs';
import './VCheckboxBtn-BOaF0jaZ.mjs';
import './VChip-BMAQYvMK.mjs';
import './VTable-DbuYfHKf.mjs';

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
const venueService = {
  async createVenue(venueData) {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();
    try {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await apiClient.post("/venues", venueData, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.status !== 201) {
        throw new Error("Venue creation failed");
      }
      $toast.success("Venue created successfully");
      return response.data;
    } catch (error) {
      $toast.error("Venue creation failed");
      throw error;
    }
  },
  async getVenues() {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();
    try {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await apiClient.get("/venues", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.status !== 200) {
        throw new Error("Failed to fetch venues");
      }
      return response.data;
    } catch (error) {
      $toast.error("Failed to fetch venues");
      throw error;
    }
  },
  async getCountries() {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();
    try {
      const response = await apiClient.get("/countries");
      if (response.status !== 200) {
        throw new Error("Failed to fetch countries");
      }
      return response.data;
    } catch (error) {
      $toast.error("Failed to fetch countries");
      throw error;
    }
  },
  async updateVenue(venueId, venueData) {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();
    try {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await apiClient.put(`/venues/${venueId}`, venueData, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.status !== 200) {
        throw new Error("Venue update failed");
      }
      $toast.success("Venue updated successfully");
      return response.data;
    } catch (error) {
      $toast.error("Venue update failed");
      throw error;
    }
  },
  async deleteVenue(venueId) {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();
    try {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await apiClient.delete(`/venues/${venueId}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.status !== 200) {
        throw new Error("Venue deletion failed");
      }
      $toast.success("Venue deleted successfully");
      return response.data;
    } catch (error) {
      $toast.error("Venue deletion failed");
      throw error;
    }
  }
};
const _sfc_main = {
  __name: "venue",
  __ssrInlineRender: true,
  setup(__props) {
    const country = ref("");
    const countries = ref([]);
    const venueName = ref("");
    const description = ref("");
    const googleMapLink = ref("");
    const search = ref("");
    const venues = ref([]);
    const isEdit = ref(false);
    const editVenueId = ref(null);
    const formRef = ref(null);
    const headers = [
      { title: "Country", value: "country" },
      { title: "Venue Name", value: "venueName" },
      { title: "Description", value: "description" },
      { title: "Google Map Link", value: "googleMapLink" },
      { title: "Actions", value: "actions", sortable: false }
    ];
    const fetchVenues = async () => {
      try {
        venues.value = await venueService.getVenues();
        console.log(venues.value);
      } catch (error) {
        console.error("Error fetching venues:", error);
      }
    };
    const submitForm = async () => {
      try {
        const venueData = {
          country: country.value,
          venue_name: venueName.value,
          description: description.value,
          google_map_link: googleMapLink.value
        };
        if (isEdit.value && editVenueId.value) {
          await venueService.updateVenue(editVenueId.value, venueData);
          console.log("Venue updated successfully");
        } else {
          await venueService.createVenue(venueData);
          console.log("Venue created successfully");
        }
        resetForm();
        fetchVenues();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };
    const editVenue = async (venue) => {
      country.value = venue.country;
      venueName.value = venue.venue_name;
      description.value = venue.description;
      googleMapLink.value = venue.google_map_link;
      isEdit.value = true;
      editVenueId.value = venue.id;
      await nextTick();
      if (formRef.value) {
        formRef.value.scrollIntoView({ behavior: "smooth" });
      }
    };
    const deleteVenue = async (venueId) => {
      try {
        await venueService.deleteVenue(venueId);
        fetchVenues();
      } catch (error) {
        console.error("Error deleting venue:", error);
      }
    };
    const resetForm = () => {
      country.value = "";
      venueName.value = "";
      description.value = "";
      googleMapLink.value = "";
      isEdit.value = false;
      editVenueId.value = null;
    };
    return (_ctx, _push, _parent, _attrs) => {
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
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(VCard, { title: "Create Venue" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VForm, { onSubmit: submitForm }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: country.value,
                                                  "onUpdate:modelValue": ($event) => country.value = $event,
                                                  items: countries.value,
                                                  label: "Select Country",
                                                  "item-title": "name",
                                                  "item-value": "id",
                                                  required: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: country.value,
                                                    "onUpdate:modelValue": ($event) => country.value = $event,
                                                    items: countries.value,
                                                    label: "Select Country",
                                                    "item-title": "name",
                                                    "item-value": "id",
                                                    required: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: venueName.value,
                                                  "onUpdate:modelValue": ($event) => venueName.value = $event,
                                                  label: "Venue Name",
                                                  placeholder: "Enter venue name",
                                                  required: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: venueName.value,
                                                    "onUpdate:modelValue": ($event) => venueName.value = $event,
                                                    label: "Venue Name",
                                                    placeholder: "Enter venue name",
                                                    required: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: description.value,
                                                  "onUpdate:modelValue": ($event) => description.value = $event,
                                                  label: "Description",
                                                  placeholder: "Enter description",
                                                  required: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: description.value,
                                                    "onUpdate:modelValue": ($event) => description.value = $event,
                                                    label: "Description",
                                                    placeholder: "Enter description",
                                                    required: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: googleMapLink.value,
                                                  "onUpdate:modelValue": ($event) => googleMapLink.value = $event,
                                                  label: "Google Map Link",
                                                  placeholder: "Enter Google Map link"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: googleMapLink.value,
                                                    "onUpdate:modelValue": ($event) => googleMapLink.value = $event,
                                                    label: "Google Map Link",
                                                    placeholder: "Enter Google Map link"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "d-flex gap-4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VBtn, { type: "submit" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(isEdit.value ? "Update" : "Submit")}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(isEdit.value ? "Update" : "Submit"), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VBtn, {
                                                  type: "reset",
                                                  color: "secondary",
                                                  variant: "outlined",
                                                  onClick: resetForm
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Reset `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Reset ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VBtn, { type: "submit" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(isEdit.value ? "Update" : "Submit"), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VBtn, {
                                                    type: "reset",
                                                    color: "secondary",
                                                    variant: "outlined",
                                                    onClick: resetForm
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Reset ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: country.value,
                                                  "onUpdate:modelValue": ($event) => country.value = $event,
                                                  items: countries.value,
                                                  label: "Select Country",
                                                  "item-title": "name",
                                                  "item-value": "id",
                                                  required: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: venueName.value,
                                                  "onUpdate:modelValue": ($event) => venueName.value = $event,
                                                  label: "Venue Name",
                                                  placeholder: "Enter venue name",
                                                  required: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: description.value,
                                                  "onUpdate:modelValue": ($event) => description.value = $event,
                                                  label: "Description",
                                                  placeholder: "Enter description",
                                                  required: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: googleMapLink.value,
                                                  "onUpdate:modelValue": ($event) => googleMapLink.value = $event,
                                                  label: "Google Map Link",
                                                  placeholder: "Enter Google Map link"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "d-flex gap-4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, { type: "submit" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(isEdit.value ? "Update" : "Submit"), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VBtn, {
                                                  type: "reset",
                                                  color: "secondary",
                                                  variant: "outlined",
                                                  onClick: resetForm
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Reset ")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: country.value,
                                                "onUpdate:modelValue": ($event) => country.value = $event,
                                                items: countries.value,
                                                label: "Select Country",
                                                "item-title": "name",
                                                "item-value": "id",
                                                required: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: venueName.value,
                                                "onUpdate:modelValue": ($event) => venueName.value = $event,
                                                label: "Venue Name",
                                                placeholder: "Enter venue name",
                                                required: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: description.value,
                                                "onUpdate:modelValue": ($event) => description.value = $event,
                                                label: "Description",
                                                placeholder: "Enter description",
                                                required: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: googleMapLink.value,
                                                "onUpdate:modelValue": ($event) => googleMapLink.value = $event,
                                                label: "Google Map Link",
                                                placeholder: "Enter Google Map link"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "d-flex gap-4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, { type: "submit" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(isEdit.value ? "Update" : "Submit"), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VBtn, {
                                                type: "reset",
                                                color: "secondary",
                                                variant: "outlined",
                                                onClick: resetForm
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Reset ")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VForm, {
                                  onSubmit: withModifiers(submitForm, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: country.value,
                                              "onUpdate:modelValue": ($event) => country.value = $event,
                                              items: countries.value,
                                              label: "Select Country",
                                              "item-title": "name",
                                              "item-value": "id",
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: venueName.value,
                                              "onUpdate:modelValue": ($event) => venueName.value = $event,
                                              label: "Venue Name",
                                              placeholder: "Enter venue name",
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: description.value,
                                              "onUpdate:modelValue": ($event) => description.value = $event,
                                              label: "Description",
                                              placeholder: "Enter description",
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: googleMapLink.value,
                                              "onUpdate:modelValue": ($event) => googleMapLink.value = $event,
                                              label: "Google Map Link",
                                              placeholder: "Enter Google Map link"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "d-flex gap-4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, { type: "submit" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(isEdit.value ? "Update" : "Submit"), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              type: "reset",
                                              color: "secondary",
                                              variant: "outlined",
                                              onClick: resetForm
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Reset ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VForm, {
                                onSubmit: withModifiers(submitForm, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: country.value,
                                            "onUpdate:modelValue": ($event) => country.value = $event,
                                            items: countries.value,
                                            label: "Select Country",
                                            "item-title": "name",
                                            "item-value": "id",
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: venueName.value,
                                            "onUpdate:modelValue": ($event) => venueName.value = $event,
                                            label: "Venue Name",
                                            placeholder: "Enter venue name",
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: description.value,
                                            "onUpdate:modelValue": ($event) => description.value = $event,
                                            label: "Description",
                                            placeholder: "Enter description",
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: googleMapLink.value,
                                            "onUpdate:modelValue": ($event) => googleMapLink.value = $event,
                                            label: "Google Map Link",
                                            placeholder: "Enter Google Map link"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "d-flex gap-4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, { type: "submit" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(isEdit.value ? "Update" : "Submit"), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            type: "reset",
                                            color: "secondary",
                                            variant: "outlined",
                                            onClick: resetForm
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Reset ")
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
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
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
                                          _push7(ssrRenderComponent(VIcon, { icon: "mdi-video-input-component" }, null, _parent7, _scopeId6));
                                          _push7(` \xA0 Venue List `);
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
                                            createVNode(VIcon, { icon: "mdi-video-input-component" }),
                                            createTextVNode(" \xA0 Venue List "),
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
                                      items: venues.value,
                                      headers
                                    }, {
                                      "item.country": withCtx(({ item }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(item.country)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(item.country), 1)
                                          ];
                                        }
                                      }),
                                      "item.venueName": withCtx(({ item }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(item.venue_name)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(item.venue_name), 1)
                                          ];
                                        }
                                      }),
                                      "item.description": withCtx(({ item }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(item.description)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(item.description), 1)
                                          ];
                                        }
                                      }),
                                      "item.googleMapLink": withCtx(({ item }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<a${ssrRenderAttr("href", item.google_map_link)} target="_blank"${_scopeId6}>${ssrInterpolate(item.google_map_link)}</a>`);
                                        } else {
                                          return [
                                            createVNode("a", {
                                              href: item.google_map_link,
                                              target: "_blank"
                                            }, toDisplayString(item.google_map_link), 9, ["href"])
                                          ];
                                        }
                                      }),
                                      "item.actions": withCtx(({ item }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            icon: "",
                                            color: "primary",
                                            onClick: ($event) => editVenue(item)
                                          }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<i class="ri-edit-box-line"${_scopeId7}></i>`);
                                              } else {
                                                return [
                                                  createVNode("i", { class: "ri-edit-box-line" })
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            icon: "",
                                            color: "error",
                                            onClick: ($event) => deleteVenue(item.id)
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
                                              color: "primary",
                                              onClick: ($event) => editVenue(item)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("i", { class: "ri-edit-box-line" })
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]),
                                            createVNode(VBtn, {
                                              icon: "",
                                              color: "error",
                                              onClick: ($event) => deleteVenue(item.id)
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
                                          createVNode(VIcon, { icon: "mdi-video-input-component" }),
                                          createTextVNode(" \xA0 Venue List "),
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
                                        items: venues.value,
                                        headers
                                      }, {
                                        "item.country": withCtx(({ item }) => [
                                          createTextVNode(toDisplayString(item.country), 1)
                                        ]),
                                        "item.venueName": withCtx(({ item }) => [
                                          createTextVNode(toDisplayString(item.venue_name), 1)
                                        ]),
                                        "item.description": withCtx(({ item }) => [
                                          createTextVNode(toDisplayString(item.description), 1)
                                        ]),
                                        "item.googleMapLink": withCtx(({ item }) => [
                                          createVNode("a", {
                                            href: item.google_map_link,
                                            target: "_blank"
                                          }, toDisplayString(item.google_map_link), 9, ["href"])
                                        ]),
                                        "item.actions": withCtx(({ item }) => [
                                          createVNode(VBtn, {
                                            icon: "",
                                            color: "primary",
                                            onClick: ($event) => editVenue(item)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("i", { class: "ri-edit-box-line" })
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]),
                                          createVNode(VBtn, {
                                            icon: "",
                                            color: "error",
                                            onClick: ($event) => deleteVenue(item.id)
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
                                        createVNode(VIcon, { icon: "mdi-video-input-component" }),
                                        createTextVNode(" \xA0 Venue List "),
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
                                      items: venues.value,
                                      headers
                                    }, {
                                      "item.country": withCtx(({ item }) => [
                                        createTextVNode(toDisplayString(item.country), 1)
                                      ]),
                                      "item.venueName": withCtx(({ item }) => [
                                        createTextVNode(toDisplayString(item.venue_name), 1)
                                      ]),
                                      "item.description": withCtx(({ item }) => [
                                        createTextVNode(toDisplayString(item.description), 1)
                                      ]),
                                      "item.googleMapLink": withCtx(({ item }) => [
                                        createVNode("a", {
                                          href: item.google_map_link,
                                          target: "_blank"
                                        }, toDisplayString(item.google_map_link), 9, ["href"])
                                      ]),
                                      "item.actions": withCtx(({ item }) => [
                                        createVNode(VBtn, {
                                          icon: "",
                                          color: "primary",
                                          onClick: ($event) => editVenue(item)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("i", { class: "ri-edit-box-line" })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]),
                                        createVNode(VBtn, {
                                          icon: "",
                                          color: "error",
                                          onClick: ($event) => deleteVenue(item.id)
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
                                      createVNode(VIcon, { icon: "mdi-video-input-component" }),
                                      createTextVNode(" \xA0 Venue List "),
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
                                    items: venues.value,
                                    headers
                                  }, {
                                    "item.country": withCtx(({ item }) => [
                                      createTextVNode(toDisplayString(item.country), 1)
                                    ]),
                                    "item.venueName": withCtx(({ item }) => [
                                      createTextVNode(toDisplayString(item.venue_name), 1)
                                    ]),
                                    "item.description": withCtx(({ item }) => [
                                      createTextVNode(toDisplayString(item.description), 1)
                                    ]),
                                    "item.googleMapLink": withCtx(({ item }) => [
                                      createVNode("a", {
                                        href: item.google_map_link,
                                        target: "_blank"
                                      }, toDisplayString(item.google_map_link), 9, ["href"])
                                    ]),
                                    "item.actions": withCtx(({ item }) => [
                                      createVNode(VBtn, {
                                        icon: "",
                                        color: "primary",
                                        onClick: ($event) => editVenue(item)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("i", { class: "ri-edit-box-line" })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]),
                                      createVNode(VBtn, {
                                        icon: "",
                                        color: "error",
                                        onClick: ($event) => deleteVenue(item.id)
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
                    createVNode("div", {
                      ref_key: "formRef",
                      ref: formRef
                    }, [
                      createVNode(VCard, { title: "Create Venue" }, {
                        default: withCtx(() => [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VForm, {
                                onSubmit: withModifiers(submitForm, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: country.value,
                                            "onUpdate:modelValue": ($event) => country.value = $event,
                                            items: countries.value,
                                            label: "Select Country",
                                            "item-title": "name",
                                            "item-value": "id",
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: venueName.value,
                                            "onUpdate:modelValue": ($event) => venueName.value = $event,
                                            label: "Venue Name",
                                            placeholder: "Enter venue name",
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: description.value,
                                            "onUpdate:modelValue": ($event) => description.value = $event,
                                            label: "Description",
                                            placeholder: "Enter description",
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: googleMapLink.value,
                                            "onUpdate:modelValue": ($event) => googleMapLink.value = $event,
                                            label: "Google Map Link",
                                            placeholder: "Enter Google Map link"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "d-flex gap-4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, { type: "submit" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(isEdit.value ? "Update" : "Submit"), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            type: "reset",
                                            color: "secondary",
                                            variant: "outlined",
                                            onClick: resetForm
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Reset ")
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
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ], 512),
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
                                    createVNode(VIcon, { icon: "mdi-video-input-component" }),
                                    createTextVNode(" \xA0 Venue List "),
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
                                  items: venues.value,
                                  headers
                                }, {
                                  "item.country": withCtx(({ item }) => [
                                    createTextVNode(toDisplayString(item.country), 1)
                                  ]),
                                  "item.venueName": withCtx(({ item }) => [
                                    createTextVNode(toDisplayString(item.venue_name), 1)
                                  ]),
                                  "item.description": withCtx(({ item }) => [
                                    createTextVNode(toDisplayString(item.description), 1)
                                  ]),
                                  "item.googleMapLink": withCtx(({ item }) => [
                                    createVNode("a", {
                                      href: item.google_map_link,
                                      target: "_blank"
                                    }, toDisplayString(item.google_map_link), 9, ["href"])
                                  ]),
                                  "item.actions": withCtx(({ item }) => [
                                    createVNode(VBtn, {
                                      icon: "",
                                      color: "primary",
                                      onClick: ($event) => editVenue(item)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("i", { class: "ri-edit-box-line" })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    createVNode(VBtn, {
                                      icon: "",
                                      color: "error",
                                      onClick: ($event) => deleteVenue(item.id)
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
                  createVNode("div", {
                    ref_key: "formRef",
                    ref: formRef
                  }, [
                    createVNode(VCard, { title: "Create Venue" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VForm, {
                              onSubmit: withModifiers(submitForm, ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: country.value,
                                          "onUpdate:modelValue": ($event) => country.value = $event,
                                          items: countries.value,
                                          label: "Select Country",
                                          "item-title": "name",
                                          "item-value": "id",
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: venueName.value,
                                          "onUpdate:modelValue": ($event) => venueName.value = $event,
                                          label: "Venue Name",
                                          placeholder: "Enter venue name",
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: description.value,
                                          "onUpdate:modelValue": ($event) => description.value = $event,
                                          label: "Description",
                                          placeholder: "Enter description",
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: googleMapLink.value,
                                          "onUpdate:modelValue": ($event) => googleMapLink.value = $event,
                                          label: "Google Map Link",
                                          placeholder: "Enter Google Map link"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "d-flex gap-4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, { type: "submit" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(isEdit.value ? "Update" : "Submit"), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          type: "reset",
                                          color: "secondary",
                                          variant: "outlined",
                                          onClick: resetForm
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Reset ")
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
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ], 512),
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
                                  createVNode(VIcon, { icon: "mdi-video-input-component" }),
                                  createTextVNode(" \xA0 Venue List "),
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
                                items: venues.value,
                                headers
                              }, {
                                "item.country": withCtx(({ item }) => [
                                  createTextVNode(toDisplayString(item.country), 1)
                                ]),
                                "item.venueName": withCtx(({ item }) => [
                                  createTextVNode(toDisplayString(item.venue_name), 1)
                                ]),
                                "item.description": withCtx(({ item }) => [
                                  createTextVNode(toDisplayString(item.description), 1)
                                ]),
                                "item.googleMapLink": withCtx(({ item }) => [
                                  createVNode("a", {
                                    href: item.google_map_link,
                                    target: "_blank"
                                  }, toDisplayString(item.google_map_link), 9, ["href"])
                                ]),
                                "item.actions": withCtx(({ item }) => [
                                  createVNode(VBtn, {
                                    icon: "",
                                    color: "primary",
                                    onClick: ($event) => editVenue(item)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("i", { class: "ri-edit-box-line" })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]),
                                  createVNode(VBtn, {
                                    icon: "",
                                    color: "error",
                                    onClick: ($event) => deleteVenue(item.id)
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/venue.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
