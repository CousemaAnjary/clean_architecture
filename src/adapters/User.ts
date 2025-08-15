export type UserProps = {
  id: string
  name: string
  email: string
  password: string
  createdAt: Date
}

export class User {
  constructor(private readonly _user: UserProps) {}

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  changeEmail(newEmail: string): void {
    if (!this.isValidEmail(newEmail)) { throw new Error("INVALID_EMAIL") }
    this._user.email = newEmail
  }

  get email(): string { return this._user.email }
}
