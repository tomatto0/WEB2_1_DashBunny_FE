

export const dummyGroupMenuOnlyInfo = [
  { "groupId": 1, "groupName": "샐러드", "isMainGroup" : false },
  { "groupId": 2, "groupName": "음료", "isMainGroup" : true },
  { "groupId": 3, "groupName": "디저트", "isMainGroup" : false }
]

export async function GET() {
  return Response.json(dummyGroupMenuOnlyInfo);
}