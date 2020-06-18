import {Deserializable} from '../deserializable';

export class User implements Deserializable {
  private _name: String;
  private _senha: any;
  private _token: String;
  private _role: String;

  new(name: String, senha: Number, role: String): User {
    this._name = name;
    this._senha = senha;
    this._role = role;
    this._token = '123456789987654321'

    return this;
  }

  deserialize(input: any): this {
    return Object.assign(this, input);
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get senha(): any {
    return this._senha;
  }

  set senha(value: any) {
    this._senha = value;
  }

  get token(): String {
    return this._token;
  }

  set token(value: String) {
    this._token = value;
  }

  get role(): String {
    return this._role;
  }

  set role(value: String) {
    this._role = value;
  }
}
