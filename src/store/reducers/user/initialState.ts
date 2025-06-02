
type InitialStateType = {
  user: {
  age: string;
  city: string;
  country: string;
  fullname: string;
  username: string;
}};

export const initialState: InitialStateType = {
  user:{
    age: '',
    city: '',
    country: '',
    fullname: '',
    username: ''
  }
};
export type { InitialStateType };
