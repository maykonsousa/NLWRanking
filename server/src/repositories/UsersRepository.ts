export interface IUserCreateData  {
  username: string;
 
}

export interface IDataUserModel {
  id: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;

}


export interface IUsersRepository {
  create: (data: IUserCreateData) => Promise<IDataUserModel>;
  getByUsername: (username: string) => Promise<IDataUserModel>;
  getAll: () => Promise<IDataUserModel[]>;




}
