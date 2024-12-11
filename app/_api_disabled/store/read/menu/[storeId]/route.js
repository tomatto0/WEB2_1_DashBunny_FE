export const dummyMenuInfo = {
  menus: [
    {
      menuId: 122,
      menuImage:
        'https://cdn.discordapp.com/attachments/1084831811051454477/1312748936532066354/image.jpg?ex=674da038&is=674c4eb8&hm=70d46adfd43a86a846253a482a8b1df3b33fc7f83a113179e301d8749a43b14b&',
      menuName: '코코 샐러드',
      menuGroupName: null,
      price: 9500,
      stockAvailable: true,
      menuStock: 10,
      isSoldOut: true,
    },
    {
      menuId: 123,
      menuImage:
        'https://cdn.discordapp.com/attachments/1084831811051454477/1312747944696352768/ham3.jpg?ex=674d9f4b&is=674c4dcb&hm=1ee3a97c3fb02b6eb99eff04d9dbdddb04030582059761be00b063ebc5e927a0&',
      menuName: '코코 햄버거',
      price: 13200,
      stockAvailable: true,
      menuStock: 5,
      isSoldOut: false,
    },
    {
      menuId: 124,
      menuImage:
        'https://cdn.discordapp.com/attachments/1084831811051454477/1310620749291196509/sal2.jpg?ex=6745e230&is=674490b0&hm=713fe4529b038f45f72c079d75eb38cbdbc5a78fe95f3ef8435fce5b8f419508&',
      menuName: '코코 하와이안 샐러드',
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
