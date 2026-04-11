import { MENU_DATA } from "@/src/libs";

interface IMenuGroup {
  label: string;
  subItems: Array<IMenuItem | string>;
}

interface IMenuItem {
  children: string[];
  label: string;
}

const hasNestedItems = (item: IMenuItem | string): item is IMenuItem => typeof item !== "string";

const normalizeMenuSegment = (segment: string): string =>
  segment
    .toLowerCase()
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/&/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export const formatMenuHref = (...segments: string[]): string => {
  const formattedSegments = segments.map((segment) => normalizeMenuSegment(segment)).filter(Boolean);

  return `/${formattedSegments.join("/")}`;
};

const formatSegmentLabel = (segment: string): string =>
  segment
    .replace(/-/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const getActiveMenuLabel = (pathname: string, menuData: IMenuGroup[] = MENU_DATA as IMenuGroup[]): string => {
  const cleanPathname = pathname.split("?")[0].split("#")[0] || "/";

  for (const menuGroup of menuData) {
    for (const subItem of menuGroup.subItems) {
      if (hasNestedItems(subItem)) {
        const nestedParentPath = formatMenuHref(menuGroup.label, subItem.label);

        if (cleanPathname === nestedParentPath || cleanPathname.startsWith(`${nestedParentPath}/`)) {
          return subItem.label;
        }

        for (const childItem of subItem.children) {
          const childPath = formatMenuHref(menuGroup.label, subItem.label, childItem);

          if (cleanPathname === childPath || cleanPathname.startsWith(`${childPath}/`)) {
            return childItem;
          }
        }

        continue;
      }

      const subItemPath = formatMenuHref(menuGroup.label, subItem);

      if (cleanPathname === subItemPath || cleanPathname.startsWith(`${subItemPath}/`)) {
        return subItem;
      }
    }

    const groupPath = formatMenuHref(menuGroup.label);

    if (cleanPathname === groupPath || cleanPathname.startsWith(`${groupPath}/`)) {
      return menuGroup.label;
    }
  }

  const pathSegments = cleanPathname.split("/").filter(Boolean);

  if (!pathSegments.length) {
    return "Dashboard";
  }

  return formatSegmentLabel(pathSegments[pathSegments.length - 1]);
};
