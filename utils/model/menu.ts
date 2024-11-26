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
  stockAvailable: boolean,
  menuStock: number,
  isSoldOut: boolean
}

export interface menuGroup{
  groupId: number,
  groupName: string
}