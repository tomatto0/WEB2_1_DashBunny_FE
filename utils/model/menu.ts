export interface menuList{
  menus: menu[],
  menuGroups: menuGroup[]
}

export interface menu{
  menuId: number,
  menuImage : string,
  menuName: string,
  groupId: number,
  groupName: string,
  price: number,
  menuContent: string,
  stockAvaliable: boolean,
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
