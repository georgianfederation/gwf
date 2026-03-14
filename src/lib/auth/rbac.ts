import { UserRole } from "@prisma/client";

/**
 * Checks if a user has at least a specific role level.
 * Hierarchy: super_admin > admin > editor
 */
export function checkRole(userRole: UserRole, requiredRole: UserRole): boolean {
  if (userRole === "super_admin") return true;
  
  if (requiredRole === "admin") {
    return userRole === "admin";
  }
  
  if (requiredRole === "editor") {
    return userRole === "admin" || userRole === "editor";
  }
  
  return false;
}

/**
 * Validates if an admin can manage a specific user based on their roles.
 * Admins can only manage editors. SuperAdmins can manage everyone.
 */
export function canManageUser(actorRole: UserRole, targetRole: UserRole): boolean {
  if (actorRole === "super_admin") return true;
  if (actorRole === "admin" && targetRole === "editor") return true;
  return false;
}
