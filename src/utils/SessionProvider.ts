import StorageProvider from './StorageProvider';

const AUTH = 'AUTH';

interface UserDetails {
  _id: string;
  userId: string;
  fullName: string;
  emailId: string;
  primaryPhone: string;
  alternatePhone: string;
  password: string;
  role: string;
  collageId: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

interface SessionObj {
  message: string;
  token: string;
  userDetails: UserDetails;
}

export default class SessionProvider {
  storage: Storage;
  constructor() {
    this.storage = window.sessionStorage;
  }

  static createSession(obj: SessionObj) {
    StorageProvider.set(AUTH, obj);
  }

  static getSession() {
    const obj = StorageProvider.get(AUTH);
    if (obj) {
      return obj;
    }
    return null;
  }

  static getUserObject() {
    return SessionProvider.getSession().userDetails;
  }

  static getUserId() {
    return SessionProvider.getUserObject()._id;
  }

  static getFullName() {
    return SessionProvider.getUserObject().fullName;
  }

  static getEmailId() {
    return SessionProvider.getUserObject().emailId;
  }

  static getPrimaryPhone() {
    return SessionProvider.getUserObject().primaryPhone;
  }

  static getAlternatePhone() {
    return SessionProvider.getUserObject().alternatePhone;
  }

  static getRole() {
    return SessionProvider.getUserObject().role;
  }

  static getCollageId() {
    return SessionProvider.getUserObject().collageId;
  }

  static getCity() {
    return SessionProvider.getUserObject().city;
  }

  static getState() {
    return SessionProvider.getUserObject().state;
  }

  static getCountry() {
    return SessionProvider.getUserObject().country;
  }

  static getPincode() {
    return SessionProvider.getUserObject().pincode;
  }

  static getToken() {
    const session = SessionProvider.getSession();
    return session?.token || null;
  }

  static deleteSession() {
    if (StorageProvider.get(AUTH)) {
      StorageProvider.deleteAll();
    }
  }

  static extendSession() {
    const session = StorageProvider.get(AUTH);
    StorageProvider.set(AUTH, session);
  }

  static removeItem(key: string) {
    return this.storage.removeItem(key);
  }
}
