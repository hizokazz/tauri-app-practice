import { Button } from '@/components/ui/button';
import { createFileRoute, Outlet, useLocation, useRouter } from '@tanstack/react-router';
import { ChevronLeft } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/(auth)/_layout')({
    component: LayoutComponent,
});

export default function LayoutComponent() {
    const { history } = useRouter();
    const pathname = useLocation({
        select: (location) => location.pathname,
    });

    const [title, setTitle] = useState('');
    const [onBack, setOnBack] = useState<Function | null>(null);
    const [endContent, setEndContent] = useState<React.ReactNode>(null);

    useEffect(() => {
        switch (pathname) {
            case '/login':
                setTitle('Login');
                break;
            case '/register':
                setTitle('Register');
                break;
        }
        return () => {
            resetData();
        };
    }, [pathname]);

    function resetData() {
        setTitle('');
        setOnBack(null);
        setEndContent(null);
    }

    return (
        <div className="relative h-screen w-screen">
            <div className="sticky left-0 right-0 top-0 z-10 flex h-[8vh] items-center justify-between bg-background px-3 shadow-navbar">
                <Button
                    className="[&_svg]:size-8"
                    size="icon"
                    variant="ghost"
                    onClick={() => {
                        if (!onBack) {
                            history.go(-1);
                            return;
                        }
                        onBack();
                    }}
                >
                    <ChevronLeft />
                </Button>
                <p className="font-sarabun-bold text-xl">{title}</p>
                <div className="p-1">{endContent}</div>
            </div>
            <Outlet />
        </div>
    );
}
