import UserResponse from './responses/UserResponse';

export default interface User {
  id: number;
  lastName: string;
  firstName: string;
  email: string;
  phone?: string;
  age: number;
}

//Build user object from api response
export const decodeUser = (response: UserResponse): User => {
  return {
    id: response.id,
    firstName: response.first_name,
    lastName: response.last_name,
    email: response.email,
    phone: response.phone ?? undefined,
    age: response.age,
  };
};

//Prepare user for api request
export const encodeUser = (user: User): UserResponse => {
  return {
    id: user.id,
    first_name: user.firstName,
    last_name: user.lastName,
    email: user.email,
    phone: user.phone ?? undefined,
    age: user.age,
  };
};
