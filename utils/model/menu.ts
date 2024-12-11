export interface menuList{
  menus: menu[],
  menuGroups: menuGroup[]
}

export interface menu{
  menuId: number,
  menuImage : string,
  menuName: string,
  groupId: number | null,
  groupName: string | null,
  price: number,
  menuContent: string,
  stockAvailable: boolean,
  menuStock: number,
  isSoldOut: boolean
}

export interface menuListResponse{
  menus: menu[],
}

export interface menuGroup{
  groupId: number,
  groupName: string,
  isMainGroup: boolean
}

export interface updateGroupData{
  groupName: string,
  isMainGroup: boolean
}
