import { prisma } from "@/lib/prisma"; // Assuming prisma client is exported from here
import { headers } from "next/headers";

type AuditAction = 
  | "LOGIN_SUCCESS" 
  | "LOGIN_FAILED" 
  | "ROLE_CHANGE" 
  | "PERMISSION_UPDATE" 
  | "ATHLETE_CREATE" 
  | "ATHLETE_UPDATE" 
  | "PASSWORD_RESET_FORCED";

export async function createAuditLog(
  userId: string, 
  action: AuditAction, 
  resource?: string, 
  metadata?: any
) {
  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for") || "unknown";
  const ua = headerList.get("user-agent") || "unknown";

  try {
    await prisma.auditLog.create({
      data: {
        userId,
        action,
        resource,
        metadata: metadata || {},
        ipAddress: ip,
        userAgent: ua,
      },
    });
  } catch (error) {
    console.error("Failed to create audit log:", error);
    // In production, you might want to log this to an external monitoring service
  }
}
