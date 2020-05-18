import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { Sync } from "./Sync";
import { Eventing } from "./Eventing";

export interface IUser {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<IUser> {
  public static buildUser(attrs: IUser): User {
    return new User(
      new Attributes<IUser>(attrs),
      new Eventing(),
      new Sync<IUser>(rootUrl)
    );
  }


}

// export class User extends Model<IUser> {
//   constructor(attrs: IUser) {
//     super(
//       new Attributes<IUser>(attrs),
//       new Eventing(),
//       new Sync<IUser>(rootUrl)
//     );
//   }
// }
