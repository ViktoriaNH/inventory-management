import { PATHS } from "./paths";

export const MENU_ITEMS = [
  { id: "main", label: "Main page", link: PATHS.MAIN_PAGE },
  { id: "create", label: "Create inventory", link: PATHS.CREATE_INVENTORY },
  { id: "my", label: "My page", link: PATHS.MY_PAGE, needAuth: true },
];
