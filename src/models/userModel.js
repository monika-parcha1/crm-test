class UserModel {
  constructor(user) {
    this.name = user.name;
    this.email = user.email;
    this.phone = user.phone;
    this.password = user.password;
  }
}

module.exports = UserModel;
