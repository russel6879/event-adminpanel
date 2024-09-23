import { ref, withCtx, createVNode, createTextVNode, toDisplayString, withModifiers, useSSRContext, nextTick } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { V as VBtn, a as VIcon, J as useNuxtApp } from './server.mjs';
import axios from 'axios';
import { V as VRow, a as VCol } from './VRow-DdKnicNs.mjs';
import { V as VCard, a as VCardText, c as VCardTitle } from './VCard-Bdfw-mBj.mjs';
import { V as VForm } from './VForm-BD-B1_zQ.mjs';
import { V as VTextField } from './VTextField-BZmvmRfe.mjs';
import { V as VCheckbox } from './VCheckbox-E3Hq6JX3.mjs';
import { V as VSpacer } from './VSpacer-DIpTA8q-.mjs';
import { V as VDivider } from './VDivider-DdsSNvlF.mjs';
import { V as VDataTable } from './VDataTable-B5pkZORV.mjs';
import { V as VChip } from './VChip-BMAQYvMK.mjs';
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
import './index-tuhqJpq8.mjs';
import './easing-CuhD-vKF.mjs';
import './VCheckboxBtn-BOaF0jaZ.mjs';
import './VSelect-CQA9Lotf.mjs';
import './VMenu-BlUxI1bj.mjs';
import './ssrBoot-BtvJZs44.mjs';
import './VOverlay-D4Vsv0zT.mjs';
import './lazy-BteLhbse.mjs';
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
const categoryService = {
  async createCategory(categoryData) {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();
    try {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await apiClient.post("/categories", categoryData, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.status !== 201) {
        throw new Error("Category creation failed");
      }
      $toast.success("Category created successfully");
      return response.data;
    } catch (error) {
      $toast.error("Category creation failed");
      throw error;
    }
  },
  async getCategories() {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();
    try {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await apiClient.get("/categories", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.status !== 200) {
        throw new Error("Failed to fetch categories");
      }
      return response.data;
    } catch (error) {
      $toast.error("Failed to fetch categories");
      throw error;
    }
  },
  async updateCategory(categoryId, categoryData) {
  },
  async updateCategory(categoryId, categoryData) {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();
    try {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await apiClient.put(`/categories/${categoryId}`, categoryData, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.status !== 200) {
        throw new Error("Category update failed");
      }
      $toast.success("Category updated successfully");
      return response.data;
    } catch (error) {
      $toast.error("Category update failed");
      throw error;
    }
  },
  async deleteCategory(categoryId) {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();
    try {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await apiClient.delete(`/categories/${categoryId}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      $toast.success("Category deleted successfully");
      return response.data;
    } catch (error) {
      $toast.error("Category deletion failed");
      throw error;
    }
  }
};
const _sfc_main = {
  __name: "category",
  __ssrInlineRender: true,
  setup(__props) {
    const categoryName = ref("");
    const icon = ref("");
    const search = ref("");
    const status = ref(false);
    const categories = ref([]);
    const isEdit = ref(false);
    const editCategoryId = ref(null);
    const formRef = ref(null);
    const headers = [
      { title: "Name", value: "name" },
      { title: "Icon", value: "icon" },
      { title: "Status", value: "status" },
      { title: "Actions", value: "actions", sortable: false }
    ];
    const fetchCategories = async () => {
      try {
        categories.value = await categoryService.getCategories();
        console.log(categories.value);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    const submitForm = async () => {
      try {
        const categoryData = {
          name: categoryName.value,
          icon: icon.value,
          status: status.value ? 1 : 0
          // Convert boolean to 1 or 0
        };
        if (isEdit.value && editCategoryId.value) {
          await categoryService.updateCategory(editCategoryId.value, categoryData);
          console.log("Category updated successfully");
        } else {
          await categoryService.createCategory(categoryData);
          console.log("Category created successfully");
        }
        resetForm();
        fetchCategories();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };
    const editCategory = async (category) => {
      categoryName.value = category.name;
      icon.value = category.icon;
      status.value = category.status === 1;
      isEdit.value = true;
      editCategoryId.value = category.id;
      await nextTick();
      if (formRef.value) {
        formRef.value.scrollIntoView({ behavior: "smooth" });
      }
    };
    const deleteCategory = async (categoryId) => {
      try {
        await categoryService.deleteCategory(categoryId);
        fetchCategories();
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    };
    const resetForm = () => {
      categoryName.value = "";
      icon.value = "";
      status.value = false;
      isEdit.value = false;
      editCategoryId.value = null;
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
                  _push3(ssrRenderComponent(VCard, { title: "Create Category" }, {
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
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: categoryName.value,
                                                  "onUpdate:modelValue": ($event) => categoryName.value = $event,
                                                  label: "Category Name",
                                                  placeholder: "Enter category name",
                                                  required: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: categoryName.value,
                                                    "onUpdate:modelValue": ($event) => categoryName.value = $event,
                                                    label: "Category Name",
                                                    placeholder: "Enter category name",
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
                                                  modelValue: icon.value,
                                                  "onUpdate:modelValue": ($event) => icon.value = $event,
                                                  label: "Icon URL",
                                                  placeholder: "Enter icon URL"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: icon.value,
                                                    "onUpdate:modelValue": ($event) => icon.value = $event,
                                                    label: "Icon URL",
                                                    placeholder: "Enter icon URL"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCheckbox, {
                                                  modelValue: status.value,
                                                  "onUpdate:modelValue": ($event) => status.value = $event,
                                                  label: "Active Status"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCheckbox, {
                                                    modelValue: status.value,
                                                    "onUpdate:modelValue": ($event) => status.value = $event,
                                                    label: "Active Status"
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
                                                createVNode(VTextField, {
                                                  modelValue: categoryName.value,
                                                  "onUpdate:modelValue": ($event) => categoryName.value = $event,
                                                  label: "Category Name",
                                                  placeholder: "Enter category name",
                                                  required: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: icon.value,
                                                  "onUpdate:modelValue": ($event) => icon.value = $event,
                                                  label: "Icon URL",
                                                  placeholder: "Enter icon URL"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VCheckbox, {
                                                  modelValue: status.value,
                                                  "onUpdate:modelValue": ($event) => status.value = $event,
                                                  label: "Active Status"
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
                                              createVNode(VTextField, {
                                                modelValue: categoryName.value,
                                                "onUpdate:modelValue": ($event) => categoryName.value = $event,
                                                label: "Category Name",
                                                placeholder: "Enter category name",
                                                required: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: icon.value,
                                                "onUpdate:modelValue": ($event) => icon.value = $event,
                                                label: "Icon URL",
                                                placeholder: "Enter icon URL"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VCheckbox, {
                                                modelValue: status.value,
                                                "onUpdate:modelValue": ($event) => status.value = $event,
                                                label: "Active Status"
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
                                            createVNode(VTextField, {
                                              modelValue: categoryName.value,
                                              "onUpdate:modelValue": ($event) => categoryName.value = $event,
                                              label: "Category Name",
                                              placeholder: "Enter category name",
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: icon.value,
                                              "onUpdate:modelValue": ($event) => icon.value = $event,
                                              label: "Icon URL",
                                              placeholder: "Enter icon URL"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VCheckbox, {
                                              modelValue: status.value,
                                              "onUpdate:modelValue": ($event) => status.value = $event,
                                              label: "Active Status"
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
                                          createVNode(VTextField, {
                                            modelValue: categoryName.value,
                                            "onUpdate:modelValue": ($event) => categoryName.value = $event,
                                            label: "Category Name",
                                            placeholder: "Enter category name",
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: icon.value,
                                            "onUpdate:modelValue": ($event) => icon.value = $event,
                                            label: "Icon URL",
                                            placeholder: "Enter icon URL"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VCheckbox, {
                                            modelValue: status.value,
                                            "onUpdate:modelValue": ($event) => status.value = $event,
                                            label: "Active Status"
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
                                          _push7(` \xA0 Category List `);
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
                                            createTextVNode(" \xA0 Category List "),
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
                                      items: categories.value,
                                      headers
                                    }, {
                                      "item.name": withCtx(({ item }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(item.name)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(item.name), 1)
                                          ];
                                        }
                                      }),
                                      "item.icon": withCtx(({ item }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(item.icon)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(item.icon), 1)
                                          ];
                                        }
                                      }),
                                      "item.status": withCtx(({ item }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VChip, {
                                            color: item.status ? "success" : "error",
                                            text: item.status ? "Active" : "Inactive",
                                            class: "text-uppercase",
                                            size: "small",
                                            label: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VChip, {
                                              color: item.status ? "success" : "error",
                                              text: item.status ? "Active" : "Inactive",
                                              class: "text-uppercase",
                                              size: "small",
                                              label: ""
                                            }, null, 8, ["color", "text"])
                                          ];
                                        }
                                      }),
                                      "item.actions": withCtx(({ item }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            icon: "",
                                            color: "primary",
                                            onClick: ($event) => editCategory(item)
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
                                            onClick: ($event) => deleteCategory(item.id)
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
                                              onClick: ($event) => editCategory(item)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("i", { class: "ri-edit-box-line" })
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]),
                                            createVNode(VBtn, {
                                              icon: "",
                                              color: "error",
                                              onClick: ($event) => deleteCategory(item.id)
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
                                          createTextVNode(" \xA0 Category List "),
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
                                        items: categories.value,
                                        headers
                                      }, {
                                        "item.name": withCtx(({ item }) => [
                                          createTextVNode(toDisplayString(item.name), 1)
                                        ]),
                                        "item.icon": withCtx(({ item }) => [
                                          createTextVNode(toDisplayString(item.icon), 1)
                                        ]),
                                        "item.status": withCtx(({ item }) => [
                                          createVNode(VChip, {
                                            color: item.status ? "success" : "error",
                                            text: item.status ? "Active" : "Inactive",
                                            class: "text-uppercase",
                                            size: "small",
                                            label: ""
                                          }, null, 8, ["color", "text"])
                                        ]),
                                        "item.actions": withCtx(({ item }) => [
                                          createVNode(VBtn, {
                                            icon: "",
                                            color: "primary",
                                            onClick: ($event) => editCategory(item)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("i", { class: "ri-edit-box-line" })
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]),
                                          createVNode(VBtn, {
                                            icon: "",
                                            color: "error",
                                            onClick: ($event) => deleteCategory(item.id)
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
                                        createTextVNode(" \xA0 Category List "),
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
                                      items: categories.value,
                                      headers
                                    }, {
                                      "item.name": withCtx(({ item }) => [
                                        createTextVNode(toDisplayString(item.name), 1)
                                      ]),
                                      "item.icon": withCtx(({ item }) => [
                                        createTextVNode(toDisplayString(item.icon), 1)
                                      ]),
                                      "item.status": withCtx(({ item }) => [
                                        createVNode(VChip, {
                                          color: item.status ? "success" : "error",
                                          text: item.status ? "Active" : "Inactive",
                                          class: "text-uppercase",
                                          size: "small",
                                          label: ""
                                        }, null, 8, ["color", "text"])
                                      ]),
                                      "item.actions": withCtx(({ item }) => [
                                        createVNode(VBtn, {
                                          icon: "",
                                          color: "primary",
                                          onClick: ($event) => editCategory(item)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("i", { class: "ri-edit-box-line" })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]),
                                        createVNode(VBtn, {
                                          icon: "",
                                          color: "error",
                                          onClick: ($event) => deleteCategory(item.id)
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
                                      createTextVNode(" \xA0 Category List "),
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
                                    items: categories.value,
                                    headers
                                  }, {
                                    "item.name": withCtx(({ item }) => [
                                      createTextVNode(toDisplayString(item.name), 1)
                                    ]),
                                    "item.icon": withCtx(({ item }) => [
                                      createTextVNode(toDisplayString(item.icon), 1)
                                    ]),
                                    "item.status": withCtx(({ item }) => [
                                      createVNode(VChip, {
                                        color: item.status ? "success" : "error",
                                        text: item.status ? "Active" : "Inactive",
                                        class: "text-uppercase",
                                        size: "small",
                                        label: ""
                                      }, null, 8, ["color", "text"])
                                    ]),
                                    "item.actions": withCtx(({ item }) => [
                                      createVNode(VBtn, {
                                        icon: "",
                                        color: "primary",
                                        onClick: ($event) => editCategory(item)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("i", { class: "ri-edit-box-line" })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]),
                                      createVNode(VBtn, {
                                        icon: "",
                                        color: "error",
                                        onClick: ($event) => deleteCategory(item.id)
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
                      createVNode(VCard, { title: "Create Category" }, {
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
                                          createVNode(VTextField, {
                                            modelValue: categoryName.value,
                                            "onUpdate:modelValue": ($event) => categoryName.value = $event,
                                            label: "Category Name",
                                            placeholder: "Enter category name",
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: icon.value,
                                            "onUpdate:modelValue": ($event) => icon.value = $event,
                                            label: "Icon URL",
                                            placeholder: "Enter icon URL"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VCheckbox, {
                                            modelValue: status.value,
                                            "onUpdate:modelValue": ($event) => status.value = $event,
                                            label: "Active Status"
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
                                    createTextVNode(" \xA0 Category List "),
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
                                  items: categories.value,
                                  headers
                                }, {
                                  "item.name": withCtx(({ item }) => [
                                    createTextVNode(toDisplayString(item.name), 1)
                                  ]),
                                  "item.icon": withCtx(({ item }) => [
                                    createTextVNode(toDisplayString(item.icon), 1)
                                  ]),
                                  "item.status": withCtx(({ item }) => [
                                    createVNode(VChip, {
                                      color: item.status ? "success" : "error",
                                      text: item.status ? "Active" : "Inactive",
                                      class: "text-uppercase",
                                      size: "small",
                                      label: ""
                                    }, null, 8, ["color", "text"])
                                  ]),
                                  "item.actions": withCtx(({ item }) => [
                                    createVNode(VBtn, {
                                      icon: "",
                                      color: "primary",
                                      onClick: ($event) => editCategory(item)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("i", { class: "ri-edit-box-line" })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    createVNode(VBtn, {
                                      icon: "",
                                      color: "error",
                                      onClick: ($event) => deleteCategory(item.id)
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
                    createVNode(VCard, { title: "Create Category" }, {
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
                                        createVNode(VTextField, {
                                          modelValue: categoryName.value,
                                          "onUpdate:modelValue": ($event) => categoryName.value = $event,
                                          label: "Category Name",
                                          placeholder: "Enter category name",
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: icon.value,
                                          "onUpdate:modelValue": ($event) => icon.value = $event,
                                          label: "Icon URL",
                                          placeholder: "Enter icon URL"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VCheckbox, {
                                          modelValue: status.value,
                                          "onUpdate:modelValue": ($event) => status.value = $event,
                                          label: "Active Status"
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
                                  createTextVNode(" \xA0 Category List "),
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
                                items: categories.value,
                                headers
                              }, {
                                "item.name": withCtx(({ item }) => [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ]),
                                "item.icon": withCtx(({ item }) => [
                                  createTextVNode(toDisplayString(item.icon), 1)
                                ]),
                                "item.status": withCtx(({ item }) => [
                                  createVNode(VChip, {
                                    color: item.status ? "success" : "error",
                                    text: item.status ? "Active" : "Inactive",
                                    class: "text-uppercase",
                                    size: "small",
                                    label: ""
                                  }, null, 8, ["color", "text"])
                                ]),
                                "item.actions": withCtx(({ item }) => [
                                  createVNode(VBtn, {
                                    icon: "",
                                    color: "primary",
                                    onClick: ($event) => editCategory(item)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("i", { class: "ri-edit-box-line" })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]),
                                  createVNode(VBtn, {
                                    icon: "",
                                    color: "error",
                                    onClick: ($event) => deleteCategory(item.id)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
