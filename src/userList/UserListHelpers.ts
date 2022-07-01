export const newUsersAfterDropped = (
  originalUsers: string[],
  currentUser: string,
  droppedUser: string,
): string[] => {
  const droppedUserNewIndex = originalUsers.findIndex(
    (element) => element === currentUser,
  );
  const droppedUserOldIndex = originalUsers.findIndex(
    (element) => element === droppedUser,
  );
  const newUsers = [...originalUsers];

  const newIndex = (index: number): number => {
    if (index > droppedUserOldIndex && index <= droppedUserNewIndex) {
      return index - 1;
    } else if (index === droppedUserOldIndex) {
      return droppedUserNewIndex;
    } else if (index < droppedUserOldIndex && index >= droppedUserNewIndex) {
      return index + 1;
    }

    return index;
  };

  originalUsers.forEach((user, index) => {
    newUsers[newIndex(index)] = user;
  });

  return newUsers;
};
