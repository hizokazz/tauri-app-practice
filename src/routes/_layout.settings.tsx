import Settings from '@/app/Settings';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/settings')({
    component: Settings,
});
