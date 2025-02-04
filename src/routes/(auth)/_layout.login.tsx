import Login from '@/app/auth/Login'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/_layout/login')({
  component: Login,
})
