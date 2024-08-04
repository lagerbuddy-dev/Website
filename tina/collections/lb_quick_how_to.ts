import { Collection } from "tinacms";

const LB_Quick_How_To: Collection = {
  name: "lb_quick_how_to",
  label: "Quick How-To",
  path: "content/cards-panel",
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

export default LB_Quick_How_To;
