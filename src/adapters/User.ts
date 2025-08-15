export type UserProps = {
  id: string
  name: string
  email: string
  password: string
  createdAt: Date
}

export class User {
  constructor(private readonly props: UserProps) {}
}
