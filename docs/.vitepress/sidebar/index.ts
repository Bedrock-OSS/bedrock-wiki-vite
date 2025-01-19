import { resolve } from "path";

import { Sidebar } from "../theme";

import { resolveLinks } from "./links";
import { resolveSections } from "./sections";

export const docsDirectory = resolve(import.meta.dirname, "../..");

export default generateSidebar();

function generateSidebar() {
  const sidebar: Sidebar = {
    default: { links: [], sections: [] },
    protocols: { links: [], sections: [] },
  };

  resolveLinks(sidebar.default);
  resolveLinks(sidebar.protocols);
  resolveSections(sidebar);

  return sidebar;
}
