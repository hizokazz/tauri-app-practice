import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';
import { useLocation, useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export default function BottomNavigationBar() {
    const navigate = useNavigate();
    const pathname = useLocation({
        select: (location) => location.pathname,
    });
    const bottomNavigationItems = [
        { id: 1, label: 'item 1', icon: <RestoreIcon /> },
        { id: 2, label: 'item 2', icon: <FavoriteIcon /> },
        { id: 3, label: 'item 3', icon: <LocationOnIcon /> },
    ];
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        switch (pathname) {
            case '/':
                setActiveTab(0);
                break;
            case '/profile':
                setActiveTab(1);
                break;
            case '/settings':
                setActiveTab(2);
                break;
        }
    }, [pathname]);

    function onSelectTab(index: number) {
        setActiveTab(index);
        switch (index) {
            case 0:
                navigate({ to: '/' });
                break;
            case 1:
                navigate({ to: '/profile' });
                break;
            case 2:
                navigate({ to: '/settings' });
                break;
        }
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 flex h-[8vh] items-center justify-center bg-background shadow-main">
            {bottomNavigationItems.map((value, index) => (
                <button
                    key={`${value.id}`}
                    className="flex h-full flex-col items-center justify-center bg-transparent text-sm transition-colors duration-300 hover:text-base active:bg-popover-foreground mobile:w-full desktop:w-1/12"
                    onClick={() => onSelectTab(index)}
                >
                    <div className={`${activeTab === index ? 'text-blue-500' : 'text-foreground'}`}>{value.icon}</div>
                    <p className={`select-none ${activeTab === index ? 'text-blue-500' : 'text-foreground'}`}>{value.label}</p>
                </button>
            ))}
        </div>
    );
}
