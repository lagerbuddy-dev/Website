import { Collection } from "tinacms";

const LB_Main: Collection = {
  name: "lb_main",
  label: "Main",
  path: "content/",
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

export default LB_Main;
