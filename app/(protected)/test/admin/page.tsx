"use client"
import { RoleGate } from '@/components/auth/role-gate'
import AllowedRole from '@/components/auth/test/allowedRole';
import { UserRole } from '@prisma/client';
import React from 'react'

const Admin =  () => {
  return (
    <div>
        <AllowedRole allowedRole={UserRole.ADMIN}>
          test
        </AllowedRole>
    </div>
  )
}

export default Admin