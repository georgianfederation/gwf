import { UserRole } from "@prisma/client";

export type AdminFeature = 
  | "athletes" 
  | "tournaments" 
  | "news" 
  | "partners" 
  | "settings" 
  | "users";

/**
 * Checks if a user has permission to access a specific feature.
 * SuperAdmins and Admins have full access.
 * Editors must have the feature enabled in their 'permissions' JSON field.
 */
export function hasFeatureAccess(
  role: UserRole, 
  feature: AdminFeature, 
  userPermissions: any
): boolean {
  if (role === "super_admin" || role === "admin") return true;
  
  if (role === "editor" && userPermissions && typeof userPermissions === "object") {
    return !!userPermissions[feature];
  }
  
  return false;
}
