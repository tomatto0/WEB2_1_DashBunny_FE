
export const dummySingleMenuInfo = {
  "menu": {
      "menuId": 123,
      "menuName": "코코 샐러드",
      "groupId": 1,
      "groupName": "샐러드",
      "price": 9500,
      "stockAvaliable": true,
      "menuStock": 10,
      "isSoldOut": false
  },
  "menuGroups": [
      { "groupId": 1, "groupName": "샐러드" },
      { "groupId": 2, "groupName": "음료" },
      { "groupId": 3, "groupName": "디저트" }
  ]
}

export async function GET() {
  return Response.json(dummySingleMenuInfo);
}
