import Profile from '@/app/Profile';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/profile')({
    component: Profile,
});
