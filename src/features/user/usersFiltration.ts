import { IUserInfo } from "@customTypes/authTypes";

export const filterUsers = (
  filter: string,
  select: string,
  users: IUserInfo[] | undefined
): IUserInfo[] => {
  if (!users) {
    return [];
  }
  if (!filter && !select) {
    return users;
  } else {
    return users.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`;
      const lowerFullName = fullName.toLowerCase();
      const lowerEmail = user.email.toLowerCase();
      const userRole = user.userRole.toLowerCase();

      const nameMatch = lowerFullName.includes(filter.toLowerCase());
      const emailMatch = lowerEmail.includes(filter.toLowerCase());
      const roleMatch = select === "" || userRole === select.toLowerCase();

      return (nameMatch || emailMatch) && roleMatch;
    });
  }
};
