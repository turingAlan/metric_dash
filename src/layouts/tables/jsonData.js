export const jsonData = {
    "/on_search":{
        "context":
        {
          "domain":"ONDC:RET11",
          "country":"IND",
          "city":"std:080",
          "action":"on_search",
          "core_version":"1.2.0",
          "bap_id":"buyerNP.com",
          "bap_uri":"https://buyerNP.com/ondc",
          "bpp_id":"sellerNP.com",
          "bpp_uri":"https://sellerNP.com/ondc",
          "transaction_id":"T1",
          "message_id":"M1",
          "timestamp":"2023-06-03T08:00:30.000Z"
        },
        "message":
        {
          "catalog":
          {
            "bpp/fulfillments":
            [
              {
                "id":"1",
                "type":"Delivery"
              },
              {
                "id":"2",
                "type":"Self-Pickup"
              },
              {
                "id":"3",
                "type":"Delivery and Self-Pickup"
              }
            ],
            "bpp/descriptor":
            {
              "name":"Seller NP",
              "symbol":"https://sellerNP.com/images/np.png",
              "short_desc":"Seller Marketplace",
              "long_desc":"Seller Marketplace",
              "images":
              [
                "https://sellerNP.com/images/np.png"
              ],
              "tags":
              [
                {
                  "code":"bpp_terms",
                  "list":
                  [
                    {
                      "code":"np_type",
                      "value":"ISN"
                    },
                    {
                      "code":"accept_bap_terms",
                      "value":"Y"
                    },
                    {
                      "code":"collect_payment",
                      "value":"Y"
                    }
                  ]
                }
              ]
            },
            "bpp/providers":
            [
              {
                "id":"P1",
                "time":
                {
                  "label":"enable",
                  "timestamp":"2023-06-03T07:00:00.000Z"
                },
                "fulfillments":
                [
                  {
                    "id":"F1",
                    "type":"Delivery",
                    "contact":
                    {
                      "phone":"23901390538059",
                      "email":"abc@xyz.com"
                    }
                  },
                  {
                    "id":"F2",
                    "type":"Self-Pickup",
                    "contact":
                    {
                      "phone":"23901390538059",
                      "email":"abc@xyz.com"
                    }
                  },
                  {
                    "id":"F3",
                    "type":"Buyer-Delivery",
                    "contact":
                    {
                      "phone":"23901390538059",
                      "email":"abc@xyz.com"
                    }
                  }
                ],
                "descriptor":
                {
                  "name":"Store 1",
                  "symbol":"https://sellerNP.com/images/store1.png",
                  "short_desc":"Store 1",
                  "long_desc":"Store 1",
                  "images":
                  [
                    "https://sellerNP.com/images/store1.png"
                  ]
                },
                "@ondc/org/fssai_license_no":"12345678901234",
                "ttl":"P1D",
                "locations":
                [
                  {
                    "id":"L1",
                    "time":
                    {
                      "label":"enable",
                      "timestamp":"2023-06-03T07:30:30.000Z",
                      "days":"1,2,3,4,5,6,7",
                      "schedule":
                      {
                        "holidays":
                        [
                          "2023-08-15"
                        ],
                        "frequency":"PT4H",
                        "times":
                        [
                          "1100",
                          "1900"
                        ]
                      },
                      "range":
                      {
                        "start":"1100",
                        "end":"2100"
                      }
                    },
                    "gps":"29342093582390581,23905809328515057",
                    "address":
                    {
                      "locality":"23095901435729",
                      "street":"3952345023845",
                      "city":"90235830927908",
                      "area_code":"560076",
                      "state":"935823904582"
                    },
                    "circle":
                    {
                      "gps":"940532042980,9203583904523",
                      "radius":
                      {
                        "unit":"km",
                        "value":"3"
                      }
                    }
                  }
                ],
                "categories":
                [
                  {
                    "id":"5",
                    "parent_category_id":"",
                    "descriptor":
                    {
                      "name":"Pizza",
                      "short_desc":"Veg and Non-Veg pizza",
                      "long_desc":"American and Italian Veg and Non-Veg Pizza",
                      "images":
                      [
                        "https://sellerNP.com/ondc/m005.png"
                      ]
                    },
                    "tags":
                    [
                      {
                        "code":"type",
                        "list":
                        [
                          {
                            "code":"type",
                            "value":"custom_menu"
                          }
                        ]
                      },
                      {
                        "code":"timing",
                        "list":
                        [
                          {
                            "code":"day_from",
                            "value":"1"
                          },
                          {
                            "code":"day_to",
                            "value":"5"
                          },
                          {
                            "code":"time_from",
                            "value":"1800"
                          },
                          {
                            "code":"time_to",
                            "value":"2200"
                          }
                        ]
                      },
                      {
                        "code":"display",
                        "list":
                        [
                          {
                            "code":"rank",
                            "value":"3"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id":"CG1",
                    "descriptor":
                    {
                      "name":"Crust (any 1 option)"
                    },
                    "tags":
                    [
                      {
                        "code":"type",
                        "list":
                        [
                          {
                            "code":"type",
                            "value":"custom_group"
                          }
                        ]
                      },
                      {
                        "code":"config",
                        "list":
                        [
                          {
                            "code":"min",
                            "value":"1"
                          },
                          {
                            "code":"max",
                            "value":"1"
                          },
                          {
                            "code":"input",
                            "value":"select"
                          },
                          {
                            "code":"seq",
                            "value":"1"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id":"CG2",
                    "descriptor":
                    {
                      "name":"Size (any 1 option)"
                    },
                    "tags":
                    [
                      {
                        "code":"type",
                        "list":
                        [
                          {
                            "code":"type",
                            "value":"custom_group"
                          }
                        ]
                      },
                      {
                        "code":"config",
                        "list":
                        [
                          {
                            "code":"min",
                            "value":"1"
                          },
                          {
                            "code":"max",
                            "value":"1"
                          },
                          {
                            "code":"input",
                            "value":"select"
                          },
                          {
                            "code":"seq",
                            "value":"2"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id":"CG3",
                    "descriptor":
                    {
                      "name":"Toppings (up to 2 options)"
                    },
                    "tags":
                    [
                      {
                        "code":"type",
                        "list":
                        [
                          {
                            "code":"type",
                            "value":"custom_group"
                          }
                        ]
                      },
                      {
                        "code":"config",
                        "list":
                        [
                          {
                            "code":"min",
                            "value":"0"
                          },
                          {
                            "code":"max",
                            "value":"2"
                          },
                          {
                            "code":"input",
                            "value":"select"
                          },
                          {
                            "code":"seq",
                            "value":"3"
                          }
                        ]
                      }
                    ]
                  }
                ],
                "items":
                [
                  {
                    "id":"I1",
                    "time":
                    {
                      "label":"enable",
                      "timestamp":"2023-06-03T07:30:00.000Z"
                    },
                    "descriptor":
                    {
                      "name":"Farmhouse Pizza",
                      "symbol":"https://sellerNP.com/images/i1.png",
                      "short_desc":"Farmhouse Pizza",
                      "long_desc":"Farmhouse Pizza",
                      "images":
                      [
                        "https://sellerNP.com/images/i1.png"
                      ]
                    },
                    "quantity":
                    {
                      "unitized":
                      {
                        "measure":
                        {
                          "unit":"unit",
                          "value":"1"
                        }
                      },
                      "available":
                      {
                        "count":"99"
                      },
                      "maximum":
                      {
                        "count":"99"
                      }
                    },
                    "price":
                    {
                      "currency":"INR",
                      "value":"269.0",
                      "maximum_value":"269.0",
                      "tags":
                      [
                        {
                          "code":"range",
                          "list":
                          [
                            {
                              "code":"lower",
                              "value":"269.00"
                            },
                            {
                              "code":"upper",
                              "value":"304.00"
                            }
                          ]
                        },
                        {
                          "code":"default_selection",
                          "list":
                          [
                            {
                              "code":"value",
                              "value":"269.00"
                            },
                            {
                              "code":"maximum_value",
                              "value":"290.00"
                            }
                          ]
                        }
                      ]
                    },
                    "category_id":"F&B",
                    "category_ids":
                    [
                      "5:1"
                    ], 
                    "fulfillment_id":"F1",
                    "location_id":"L1",
                    "related":false,
                    "recommended":true,
                    "@ondc/org/returnable":false,
                    "@ondc/org/cancellable":false,
                    "@ondc/org/return_window":"PT1H",
                    "@ondc/org/seller_pickup_return":false,
                    "@ondc/org/time_to_ship":"PT45M",
                    "@ondc/org/available_on_cod":false,
                    "@ondc/org/contact_details_consumer_care": "Ramesh,ramesh@abc.com,18004254444",
                    "tags":
                    [
                      {
                        "code":"type",
                        "list":
                        [
                          {
                            "code":"type",
                            "value":"item"
                          }
                        ]
                      },
                      {
                        "code":"custom_group",
                        "list":
                        [
                          {
                            "code":"id",
                            "value":"CG1"
                          }
                        ]
                      },
                      {
                        "code":"config",
                        "list":
                        [
                          {
                            "code":"id",
                            "value":"CG1"
                          },
                          {
                            "code":"min",
                            "value":"1"
                          },
                          {
                            "code":"max",
                            "value":"1"
                          },
                          {
                            "code":"seq",
                            "value":"1"
                          }
                        ]
                      },
                      {
                        "code":"timing",
                        "list":
                        [
                          {
                            "code":"day_from",
                            "value":"1"
                          },
                          {
                            "code":"day_to",
                            "value":"5"
                          },
                          {
                            "code":"time_from",
                            "value":"1800"
                          },
                          {
                            "code":"time_to",
                            "value":"2200"
                          }
                        ]
                      },
                      {
                        "code":"veg_nonveg",
                        "list":
                        [
                          {
                            "code":"veg",
                            "value":"yes"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id":"C1",
                    "descriptor":
                    {
                      "name":"New Hand Tossed"
                    },
                    "quantity":
                    {
                      "available":
                      {
                        "count":"99"
                      },
                      "maximum":
                      {
                        "count":"99"
                      }
                    },
                    "price":
                    {
                      "currency":"INR",
                      "value":"0.0",
                      "maximum_value":"0.0"
                    },
                    "category_id":"F&B",
                    "related":true,
                    "tags":
                    [
                      {
                        "code":"type",
                        "list":
                        [
                          {
                            "code":"type",
                            "value":"customization"
                          }
                        ]
                      },
                      {
                        "code":"parent",
                        "list":
                        [
                          {
                            "code":"id",
                            "value":"CG1"
                          },
                          {
                            "code":"default",
                            "value":"yes"
                          }
                        ]
                      },
                      {
                        "code":"child",
                        "list":
                        [
                          {
                            "code":"id",
                            "value":"CG2"
                          }
                        ]
                      },
                      {
                        "code":"veg_nonveg",
                        "list":
                        [
                          {
                            "code":"veg",
                            "value":"yes"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id":"C2",
                    "descriptor":
                    {
                      "name":"Regular"
                    },
                    "quantity":
                    {
                      "available":
                      {
                        "count":"99"
                      },
                      "maximum":
                      {
                        "count":"99"
                      }
                    },
                    "price":
                    {
                      "currency":"INR",
                      "value":"0.0",
                      "maximum_value":"0.0"
                    },
                    "category_id":"F&B",
                    "related":true,
                    "tags":
                    [
                      {
                        "code":"type",
                        "list":
                        [
                          {
                            "code":"type",
                            "value":"customization"
                          }
                        ]
                      },
                      {
                        "code":"parent",
                        "list":
                        [
                          {
                            "code":"id",
                            "value":"CG2"
                          },
                          {
                            "code":"default",
                            "value":"yes"
                          }
                        ]
                      },
                      {
                        "code":"child",
                        "list":
                        [
                          {
                            "code":"id",
                            "value":"CG3"
                          }
                        ]
                      },
                      {
                        "code":"veg_nonveg",
                        "list":
                        [
                          {
                            "code":"veg",
                            "value":"yes"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id":"C3",
                    "descriptor":
                    {
                      "name":"Grilled Mushrooms"
                    },
                    "quantity":
                    {
                      "available":
                      {
                        "count":"99"
                      },
                      "maximum":
                      {
                        "count":"99"
                      }
                    },
                    "price":
                    {
                      "currency":"INR",
                      "value":"35.0",
                      "maximum_value":"35.0"
                    },
                    "category_id":"F&B",
                    "related":true,
                    "tags":
                    [
                      {
                        "code":"type",
                        "list":
                        [
                          {
                            "code":"type",
                            "value":"customization"
                          }
                        ]
                      },
                      {
                        "code":"parent",
                        "list":
                        [
                          {
                            "code":"id",
                            "value":"CG3"
                          },
                          {
                            "code":"default",
                            "value":"yes"
                          }
                        ]
                      },
                      {
                        "code":"veg_nonveg",
                        "list":
                        [
                          {
                            "code":"veg",
                            "value":"yes"
                          }
                        ]
                      }
                    ]
                  }
                ],
                "offers":
                [
                  {
                    "id":"DISCP60",
                    "descriptor":
                    {
                      "code":"discount",
                      "images":
                      [
                        "https://sellerNP.com/images/offer2-banner.png"
                      ]
                    },
                    "location_ids":
                    [
                      "L1"
                    ],
                    "item_ids":
                    [
                      "I1"
                    ],
                    "time":
                    {
                      "label":"valid",
                      "range":
                      {
                        "start":"2023-06-21T16:00:00.000Z",
                        "end":"2023-06-21T23:00:00.000Z"
                      }
                    },
                    "tags":
                    [
                      {
                        "code":"qualifier",
                        "list":
                        [
                          {
                            "code":"min_value",
                            "value":"159"
                          }
                        ]
                      },
                      {
                        "code":"benefit",
                        "list":
                        [
                          {
                            "code":"value_type",
                            "value":"percent"
                          },
                          {
                            "code":"value",
                            "value":"-60.00"
                          },
                          {
                            "code":"value_cap",
                            "value":"-120.00"
                          }
                        ]
                      },
                      {
                        "code":"meta",
                        "list":
                        [
                          {
                            "code":"additive",
                            "value":"no"
                          },
                          {
                            "code":"auto",
                            "value":"yes"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id":"FLAT150",
                    "descriptor":
                    {
                      "code":"discount",
                      "images":
                      [
                        "https://sellerNP.com/images/offer2-banner.png"
                      ]
                    },
                    "location_ids":
                    [
                      "L1"
                    ],
                    "item_ids":
                    [
                      "I1"
                    ],
                    "time":
                    {
                      "label":"valid",
                      "range":
                      {
                        "start":"2023-06-22T16:00:00.000Z",
                        "end":"2023-06-22T23:00:00.000Z"
                      }
                    },
                    "tags":
                    [
                      {
                        "code":"qualifier",
                        "list":
                        [
                          {
                            "code":"min_value",
                            "value":"499.00"
                          }
                        ]
                      },
                      {
                        "code":"benefit",
                        "list":
                        [
                          {
                            "code":"value_type",
                            "value":"amount"
                          },
                          {
                            "code":"value",
                            "value":"-150.00"
                          }
                        ]
                      },
                      {
                        "code":"meta",
                        "list":
                        [
                          {
                            "code":"additive",
                            "value":"no"
                          },
                          {
                            "code":"auto",
                            "value":"yes"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id":"BUY2GET3",
                    "descriptor":
                    {
                      "code":"buyXgetY",
                      "images":
                      [
                        "https://sellerNP.com/images/offer1-banner.png"
                      ]
                    },
                    "location_ids":
                    [
                      "L1"
                    ],
                    "item_ids":
                    [
                      "I1"
                    ],
                    "time":
                    {
                      "label":"valid",
                      "range":
                      {
                        "start":"2023-06-23T16:00:00.000Z",
                        "end":"2023-06-23T23:00:00.000Z"
                      }
                    },
                    "tags":
                    [
                      {
                        "code":"qualifier",
                        "list":
                        [
                          {
                            "code":"item_count",
                            "value":"2"
                          }
                        ]
                      },
                      {
                        "code":"benefit",
                        "list":
                        [
                          {
                            "code":"item_id",
                            "value":"I1"
                          },
                          {
                            "code":"item_count",
                            "value":"3"
                          }
                        ]
                      },
                      {
                        "code":"meta",
                        "list":
                        [
                          {
                            "code":"additive",
                            "value":"no"
                          },
                          {
                            "code":"auto",
                            "value":"yes"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id":"FREEBIE",
                    "descriptor":
                    {
                      "code":"freebie",
                      "images":
                      [
                        "https://sellerNP.com/images/offer3-banner.png"
                      ]
                    },
                    "location_ids":
                    [
                      "L1"
                    ],
                    "item_ids":
                    [
                      "I1"
                    ],
                    "time":
                    {
                      "label":"valid",
                      "range":
                      {
                        "start":"2023-06-24T16:00:00.000Z",
                        "end":"2023-06-24T23:00:00.000Z"
                      }
                    },
                    "tags":
                    [
                      {
                        "code":"qualifier",
                        "list":
                        [
                          {
                            "code":"min_value",
                            "value":"598.00"
                          }
                        ]
                      },
                      {
                        "code":"benefit",
                        "list":
                        [
                          {
                            "code":"item_count",
                            "value":"1"
                          },
                          {
                            "code":"item_id",
                            "value":"sku id for extra item"
                          },
                          {
                            "code":"item_value",
                            "value":"200.00"
                          }
                        ]
                      },
                      {
                        "code":"meta",
                        "list":
                        [
                          {
                            "code":"additive",
                            "value":"no"
                          },
                          {
                            "code":"auto",
                            "value":"yes"
                          }
                        ]
                      }
                    ]
                  }
                ],
                "tags":
                [
                  {
                    "code":"order_value",
                    "list":
                    [
                      {
                        "code":"min_value",
                        "value":"300.00"
                      }
                    ]
                  },
                  {
                    "code":"catalog_link",
                    "list":
                    [
                      {
                        "code":"type",
                        "value":"inline"
                      },
                      {
                        "code":"type_value",
                        "value":"https://s3.amazon.com/xjhjsfsdfs/s-12349.zip"
                      },
                      {
                        "code":"type_validity",
                        "value":"PT24H"
                      },
                      {
                        "code":"last_update",
                        "value":"2023-05-21T00:00:00:000Z"
                      }
                    ]
                  },
                  {
                    "code":"timing",
                    "list":
                    [
                      {
                        "code":"type",
                        "value":"Order"
                      },
                      {
                        "code":"location",
                        "value":"L1"
                      },
                      {
                        "code":"day_from",
                        "value":"1"
                      },
                      {
                        "code":"day_to",
                        "value":"5"
                      },
                      {
                        "code":"time_from",
                        "value":"0900"
                      },
                      {
                        "code":"time_to",
                        "value":"1100"
                      }
                    ]
                  },
                  {
                    "code":"timing",
                    "list":
                    [
                      {
                        "code":"type",
                        "value":"Order"
                      },
                      {
                        "code":"location",
                        "value":"L1"
                      },
                      {
                        "code":"day_from",
                        "value":"1"
                      },
                      {
                        "code":"day_to",
                        "value":"5"
                      },
                      {
                        "code":"time_from",
                        "value":"1300"
                      },
                      {
                        "code":"time_to",
                        "value":"1530"
                      }
                    ]
                  },
                  {
                    "code":"timing",
                    "list":
                    [
                      {
                        "code":"type",
                        "value":"Order"
                      },
                      {
                        "code":"location",
                        "value":"L1"
                      },
                      {
                        "code":"day_from",
                        "value":"1"
                      },
                      {
                        "code":"day_to",
                        "value":"5"
                      },
                      {
                        "code":"time_from",
                        "value":"1830"
                      },
                      {
                        "code":"time_to",
                        "value":"2130"
                      }
                    ]
                  },
                  {
                    "code":"timing",
                    "list":
                    [
                      {
                        "code":"type",
                        "value":"Order"
                      },
                      {
                        "code":"location",
                        "value":"L1"
                      },
                      {
                        "code":"day_from",
                        "value":"6"
                      },
                      {
                        "code":"day_to",
                        "value":"7"
                      },
                      {
                        "code":"time_from",
                        "value":"1300"
                      },
                      {
                        "code":"time_to",
                        "value":"1600"
                      }
                    ]
                  },
                  {
                    "code":"timing",
                    "list":
                    [
                      {
                        "code":"type",
                        "value":"Order"
                      },
                      {
                        "code":"location",
                        "value":"L1"
                      },
                      {
                        "code":"day_from",
                        "value":"6"
                      },
                      {
                        "code":"day_to",
                        "value":"7"
                      },
                      {
                        "code":"time_from",
                        "value":"1900"
                      },
                      {
                        "code":"time_to",
                        "value":"2300"
                      }
                    ]
                  },
                  {
                    "code":"timing",
                    "list":
                    [
                      {
                        "code":"type",
                        "value":"Self-Pickup"
                      },
                      {
                        "code":"location",
                        "value":"L1"
                      },
                      {
                        "code":"day_from",
                        "value":"1"
                      },
                      {
                        "code":"day_to",
                        "value":"7"
                      },
                      {
                        "code":"time_from",
                        "value":"1100"
                      },
                      {
                        "code":"time_to",
                        "value":"2000"
                      }
                    ]
                  },
                  {
                    "code":"timing",
                    "list":
                    [
                      {
                        "code":"type",
                        "value":"Delivery"
                      },
                      {
                        "code":"location",
                        "value":"L1"
                      },
                      {
                        "code":"day_from",
                        "value":"1"
                      },
                      {
                        "code":"day_to",
                        "value":"7"
                      },
                      {
                        "code":"time_from",
                        "value":"1100"
                      },
                      {
                        "code":"time_to",
                        "value":"2200"
                      }
                    ]
                  },
                  {
                    "code":"close_timing",
                    "list":
                    [
                      {
                        "code":"location",
                        "value":"L1"
                      },
                      {
                        "code":"start",
                        "value":"2023-06-03T16:00:00.000Z"
                      },
                      {
                        "code":"end",
                        "value":"2023-06-03T23:59:00.000Z"
                      }
                    ]
                  },
                  {
                    "code":"serviceability",
                    "list":
                    [
                      {
                        "code":"location",
                        "value":"L1"
                      },
                      {
                        "code":"category",
                        "value":"F&B"
                      },
                      {
                        "code":"type",
                        "value":"10"
                      },
                      {
                        "code":"val",
                        "value":"3"
                      },
                      {
                        "code":"unit",
                        "value":"km"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      },
      "/on_select":{
        "context": {
          "domain": "ONDC:RET10",
          "action": "on_select",
          "core_version": "1.2.0",
          "bap_id": "buyerNP.com",
          "bap_uri": "https://buyerNP.com/ondc",
          "bpp_id": "sellerNP.com",
          "bpp_uri": "https://sellerNP.com/ondc",
          "transaction_id": "T2",
          "message_id": "M2",
          "city": "std:080",
          "country": "IND",
          "timestamp": "2023-06-03T08:30:30.000Z"
        },
        "message": {
          "order": {
            "provider": {
              "id": "P1",
              "locations": [
                {
                  "id": "L1"
                }
              ]
            },
            "items": [
              {
                "fulfillment_id": "F1",
                "id": "I1"
              }
            ],
            "fulfillments": [
              {
                "id": "F1",
                "type": "Delivery",
                "@ondc/org/provider_name": "hashedsupplier123",
                "tracking": false,
                "@ondc/org/category": "Immediate Delivery",
                "@ondc/org/TAT": "PT60M",
                "state": {
                  "descriptor": {
                    "code": "Serviceable"
                  }
                }
              }
            ],
            "quote": {
              "price": {
                "currency": "INR",
                "value": "264"
              },
              "breakup": [
                {
                  "@ondc/org/item_id": "I1",
                  "@ondc/org/item_quantity": {
                    "count": 1
                  },
                  "title": "Atta",
                  "@ondc/org/title_type": "item",
                  "price": {
                    "currency": "INR",
                    "value": "170.00"
                  },
                  "item": {
                    "quantity": {
                      "available": {
                        "count": "99"
                      },
                      "maximum": {
                        "count": "99"
                      }
                    },
                    "price": {
                      "currency": "INR",
                      "value": "170.00"
                    }
                  }
                },
                {
                  "@ondc/org/item_id": "F1",
                  "title": "Delivery charges",
                  "@ondc/org/title_type": "delivery",
                  "price": {
                    "currency": "INR",
                    "value": "50.00"
                  }
                },
                {
                  "@ondc/org/item_id": "F1",
                  "title": "Tax",
                  "@ondc/org/title_type": "tax",
                  "price": {
                    "currency": "INR",
                    "value": "9.00"
                  },
                  "item": {
                    "tags": [
                      {
                        "code": "quote",
                        "list": [
                          {
                            "code": "type",
                            "value": "fulfillment"
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "@ondc/org/item_id": "F1",
                  "title": "Packing charges",
                  "@ondc/org/title_type": "packing",
                  "price": {
                    "currency": "INR",
                    "value": "25.00"
                  }
                },
                {
                  "@ondc/org/item_id": "I1",
                  "title": "Tax",
                  "@ondc/org/title_type": "tax",
                  "price": {
                    "currency": "INR",
                    "value": "0.00"
                  }
                },
                {
                  "@ondc/org/item_id": "F1",
                  "title": "Convenience Fee",
                  "@ondc/org/title_type": "misc",
                  "price": {
                    "currency": "INR",
                    "value": "10.00"
                  }
                }
              ],
              "ttl": "P1D"
            }
          }
        }
      },
      "/on_track":{
        "context": {
          "domain": "ONDC:RET11",
          "action": "on_track",
          "country": "IND",
          "city": "std:080",
          "core_version": "1.2.0",
          "bap_id": "buyerNP.com",
          "bap_uri": "https://buyerNP.com/ondc",
          "bpp_id": "sellerNP.com",
          "bpp_uri": "https://sellerNP.com/ondc",
          "transaction_id": "T2",
          "message_id": "M11",
          "timestamp": "2023-06-04T06:00:00.000Z",
          "ttl": "PT30S"
        },
        "message": {
          "tracking": {
            "id": "F1",
            "location": {
              "gps": "hashedlocation1",
              "time": {
                "timestamp": "2023-06-02T06:20:00.000Z"
              },
              "updated_at": "2023-06-02T06:30:00.000Z"
            },
            "url": "hashedurl1",
            "status": "active",
            "tags": [
              {
                "code": "order",
                "list": [
                  {
                    "code": "id",
                    "value": "O1"
                  }
                ]
              },
              {
                "code": "config",
                "list": [
                  {
                    "code": "attr",
                    "value": "tracking.location.gps"
                  },
                  {
                    "code": "type",
                    "value": "live_poll"
                  }
                ]
              },
              {
                "code": "path",
                "list": [
                  {
                    "code": "lat_lng",
                    "value": "hashedlocation2"
                  },
                  {
                    "code": "sequence",
                    "value": "1"
                  }
                ]
              },
              {
                "code": "path",
                "list": [
                  {
                    "code": "lat_lng",
                    "value": "hashedlocation3"
                  },
                  {
                    "code": "sequence",
                    "value": "2"
                  }
                ]
              },
              {
                "code": "path",
                "list": [
                  {
                    "code": "lat_lng",
                    "value": "hashedlocation4"
                  },
                  {
                    "code": "sequence",
                    "value": "3"
                  }
                ]
              }
            ]
          }
        }
      }
    
      
}