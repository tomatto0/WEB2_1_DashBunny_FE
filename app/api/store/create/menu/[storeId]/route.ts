

export const dummyGroupMenuOnlyInfo = [
  { "groupId": 1, "groupName": "샐러드" },
  { "groupId": 2, "groupName": "음료" },
  { "groupId": 3, "groupName": "디저트" }
]

export async function GET() {
  return Response.json(dummyGroupMenuOnlyInfo);
}