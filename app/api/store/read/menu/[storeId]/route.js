import { NextRequest, NextResponse } from 'next/server';

export const dummyMenuInfo = {
  menus: [
    {
      menuId: 123,
      menuImage:
        'https://cdn.discordapp.com/attachments/1084831811051454477/1309900825627201616/output_3280796331.jpg?ex=67453df5&is=6743ec75&hm=dc387cae961c61f7537c5e8842b785f026e09ebb5939dbc3ff6d4f2d69a3f00c&',
      menuName: '코코 샐러드',
      menuGroupName: '샐러드',
      price: 9500,
      stockAvailable: true,
      menuStock: 10,
      isSoldOut: true,
    },
    {
      menuId: 124,
      menuImage:
        'https://cdn.discordapp.com/attachments/1084831811051454477/1310620749291196509/sal2.jpg?ex=6745e230&is=674490b0&hm=713fe4529b038f45f72c079d75eb38cbdbc5a78fe95f3ef8435fce5b8f419508&',
      menuName: '코코 음료',
      menuGroupName: '음료',
      price: 4500,
      stockAvailable: false,
      menuStock: 5,
      isSoldOut: false,
    },
  ],
  menuGroups: [
    { groupId: 1, groupName: '샐러드' },
    { groupId: 2, groupName: '하나' },
    { groupId: 3, groupName: '두리' },
  ],
};

export async function GET() {
  return Response.json(dummyMenuInfo);
}
