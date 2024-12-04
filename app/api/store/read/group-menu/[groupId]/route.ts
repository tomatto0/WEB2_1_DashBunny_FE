export const dummyGroupMenuInfo = {
  "menus": [
      {
          "menuId": 122,
          "menuImage" :'https://cdn.discordapp.com/attachments/1084831811051454477/1312748936532066354/image.jpg?ex=674da038&is=674c4eb8&hm=70d46adfd43a86a846253a482a8b1df3b33fc7f83a113179e301d8749a43b14b&',
          
          "menuName": "코코 샐러드",
          "price": 9500,
          "stockAvailable": true,
          "menuStock": 10,
          "isSoldOut": true
      },     
      {
          "menuId": 124,
          "menuImage" :        'https://cdn.discordapp.com/attachments/1084831811051454477/1310620749291196509/sal2.jpg?ex=6745e230&is=674490b0&hm=713fe4529b038f45f72c079d75eb38cbdbc5a78fe95f3ef8435fce5b8f419508&',

          "menuName": "코코 하와이안 샐러드",
          "price": 4500,
          "stockAvailable": false,
          "menuStock": 5,
          "isSoldOut": false
      }
  ]
}

export async function GET() {
  return Response.json(dummyGroupMenuInfo);
}
