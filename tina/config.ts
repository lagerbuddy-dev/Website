import { defineConfig } from "tinacms";
import LB_Main from "./collections/lb_main";
import LB_About from "./collections/lb_about";
import LB_Blog from "./collections/lb_blog";
import LB_Contact from "./collections/lb_contact";
import LB_Data_Protection from "./collections/lb_data_protection";
import LB_Eula from "./collections/lb_eula";
import LB_Imprint from "./collections/lb_imprint";
import LB_Oss from "./collections/lb_oss";
import LB_Quick_Faq from "./collections/lb_quick_faq";
import LB_Quick_How_To from "./collections/lb_quick_how_to";
import LB_Service_Availability from "./collections/lb_service_availability";
import LB_Service from "./collections/lb_service";
import LB_Technology_First from "./collections/lb_technology_first";
import LB_Terms_Of_Use from "./collections/lb_terms_of_use";
import LB_Third_Party from "./collections/lb_third_party";
import LB_Boxes from "./collections/service/lb_boxes";
import LB_Collect from "./collections/service/lb_collect";
import LB_Deliver from "./collections/service/lb_deliver";
import LB_Return from "./collections/service/lb_return";
import LB_Store from "./collections/service/lb_store";
import LB_Trust from "./collections/service/lb_trust";

export default defineConfig({
  clientId: process.env.TINA_CLIENT_ID!,
  branch:
    process.env.TINA_BRANCH! || // custom branch env override
    process.env.VERCEL_GIT_COMMIT_REF! || // Vercel branch env
    process.env.HEAD!, // Netlify branch env
  token: process.env.TINA_TOKEN!,
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [LB_Main, LB_About, LB_Blog, LB_Contact, LB_Data_Protection, LB_Eula, LB_Imprint, LB_Oss, LB_Quick_Faq, LB_Quick_How_To, LB_Service_Availability, LB_Service, LB_Technology_First, LB_Terms_Of_Use, LB_Third_Party, LB_Boxes, LB_Collect, LB_Deliver, LB_Return, LB_Store, LB_Trust],
  },
});
