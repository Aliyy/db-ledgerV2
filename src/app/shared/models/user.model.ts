import {IUser as IStandardUser} from "../../standard-components/interfaces/IUser";
import {IUser as IMarketUser} from "../../shared/interfaces/IUser";

import {isNullOrUndefined} from "util";
export class User implements IStandardUser, IMarketUser {

  id: string;
  lastName: string;
  firstName: string;
  username: string;
  avatarImageSrc: string = "../../assets/img/userBlank.jpg";
  canCreateEntry: boolean = true;

  public static fromJSON (json: any | Promise<any>) {
    if (isNullOrUndefined(json)) {
      return undefined;
    }

    let user = new User();
    user.id = json.id;
    user.lastName = json.lastName;
    user.firstName = json.firstName;
    user.username = json.username;
    user.avatarImageSrc = json.avatarImageSrc;
    user.canCreateEntry = <boolean>json.canCreateEntry;

    return user;
  }
}
