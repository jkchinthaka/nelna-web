import type { Access, User } from 'payload'

type UserWithRoles = User & {
  roles?: Array<'admin' | 'editor'>
}

function hasRole(user: UserWithRoles | null | undefined, role: 'admin' | 'editor') {
  return Boolean(user?.roles?.includes(role))
}

export const isAdmin: Access = ({ req }) => hasRole(req.user as UserWithRoles, 'admin')

export const isAdminOrEditor: Access = ({ req }) => {
  const user = req.user as UserWithRoles
  return hasRole(user, 'admin') || hasRole(user, 'editor')
}

export const isAuthenticated: Access = ({ req }) => Boolean(req.user)
