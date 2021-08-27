class NotAutorized extends Error {
  constructor(message) {
    super();
    this.status = 401;
    this.message = message;
  }
}

export default NotAutorized;