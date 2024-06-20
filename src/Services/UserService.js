import { UserListMockData } from "./UserListMock";

export default class UserService {
  static getUserList(page, useMock = false) {
    if (useMock) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(UserListMockData);
        }, 1000);
      });
    }

    const url = `https://give-me-users-forever.vercel.app/api/users/${page}/next`;

    return fetch(url);
  }
}
