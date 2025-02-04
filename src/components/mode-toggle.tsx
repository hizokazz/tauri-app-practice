import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Moon, Settings, Sun } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from './theme-provider';

export function ModeToggle() {
    const { setTheme, theme } = useTheme();
    const [activeTheme, setActiveTheme] = useState<'dark' | 'light' | 'system'>(theme);

    return (
        <ToggleGroup
            value={activeTheme}
            type="single"
            variant="outline"
            onValueChange={(value: 'dark' | 'light' | 'system') => {
                setActiveTheme(value);
                setTheme(value);
            }}
        >
            <ToggleGroupItem value="light" aria-label="Toggle light theme">
                <Sun className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="dark" aria-label="Toggle dark theme">
                <Moon className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="system" aria-label="Toggle system theme">
                <Settings className="h-4 w-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    );
}
