import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export default function BottomNavigationBar() {
    const navigate = useNavigate();
    const pathname = useLocation({
        select: (location) => location.pathname,
    });
    const [value, setValue] = useState(0);

    useEffect(() => {
        switch (pathname) {
            case '/':
                setValue(0);
                break;
            case '/profile':
                setValue(1);
                break;
            case '/settings':
                setValue(2);
                break;
        }
    }, [pathname]);

    return (
        <Box sx={{ width: '100%' }}>
            <BottomNavigation
                style={{ background: '#fff' }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    switch (newValue) {
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
                }}
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </Box>
    );
}
