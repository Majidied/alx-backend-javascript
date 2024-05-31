import ClassRoom from "./0-classroom";

export default function initializeRooms() {
  const classRoomA = new ClassRoom(19);
  const classRoomB = new ClassRoom(20);
  const classRoomC = new ClassRoom(34);

  return [classRoomA, classRoomB, classRoomC];
}
