import { prisma } from "@/lib/prisma";

/**
 * Bootstraps the first user as a super_admin if they match the environment variable.
 * ONLY works if there are currently NO super_admins in the database.
 */
export async function bootstrapSuperAdmin(email: string) {
  const bootstrapEmail = process.env.BOOTSTRAP_SUPER_ADMIN_EMAIL;
  
  if (!bootstrapEmail || email !== bootstrapEmail) {
    return false;
  }

  // Check if a super_admin already exists
  const existingSuperAdmin = await prisma.user.findFirst({
    where: { role: "super_admin" },
  });

  if (existingSuperAdmin) {
    return false;
  }

  // Promote this user to super_admin
  await prisma.user.update({
    where: { email },
    data: { role: "super_admin" },
  });

  return true;
}
