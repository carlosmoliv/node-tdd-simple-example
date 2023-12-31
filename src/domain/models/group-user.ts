export type Permission = 'user' | 'admin' | 'owner'

export class GroupUser {
  readonly id: string
  readonly permission: Permission

  constructor ({ id, permission }: { id: string, permission: Permission }) {
    this.id = id
    this.permission = permission
  }

  isAdmin (): boolean {
    return this.permission !== 'user'
  }
}
