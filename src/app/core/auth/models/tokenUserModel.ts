export interface TokenUserModel {
  id: number;
  userName: string;
  roles: UserRoles;
}

export interface UserRoles {
  id: number;
  userId: number;
  roleId: number;
}
