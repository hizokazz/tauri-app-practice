import { ModeToggle } from '@/components/mode-toggle';
import BottomNavigationBar from '@/components/navigation/BottomNavigationBar';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout')({
    component: LayoutComponent,
});

export default function LayoutComponent() {
    return (
        <div className="relative min-h-screen w-screen">
            <div className="sticky left-0 right-0 top-0 z-10 flex h-[8vh] items-center bg-background shadow-navbar">
                <div className="absolute right-5">
                    <ModeToggle />
                </div>
            </div>
            <Outlet />
            <div className="fixed bottom-0 w-full shadow-main">
                <BottomNavigationBar />
            </div>
        </div>
    );
}
