import { Collection } from "tinacms";

const LB_Pricing: Collection = {
  name: "lb_pricing",
  label: "Pricing",
  path: "content/pricing",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
    },
    {
      type: "string",
      name: "featured_image",
      label: "Featured Image",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
    {
      type: "boolean",
      name: "headless",
      label: "Headless",
    },
    {
      type: "boolean",
      name: "draft",
      label: "Draft",
    },
    {
      type: "object",
      name: "params",
      label: "Params",
      fields: [ 
        {
          type : "string",
          name : "subtitle",
          label : "Subtitle",
        },
        {
          type : "string",
          name : "currency",
          label : "Currency",
        },
        {
          type : "string",
          name : "price",
          label : "Price",
        },
      ],
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
};

export default LB_Pricing;
