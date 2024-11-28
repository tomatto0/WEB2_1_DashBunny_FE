export interface menuList{
  menus: menu[],
  menuGroups: menuGroup[]
}

export interface menu{
  menuId: number,
  menuImage : string,
  menuName: string,
  menuGroupName: string,
  price: number,
  menuContent: string,
  stockAvailable: boolean,
  menuStock: number,
  isSoldOut: boolean
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
