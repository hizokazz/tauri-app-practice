import reactLogo from '@/assets/react.svg';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';

function App() {
    const navigate = useNavigate();
    function goToLogin() {
        navigate({ to: '/login' });
    }

    return (
        <main className="flex flex-col items-center p-7">
            <p className="font-sarabun-bold text-2xl">Welcome to Tauri + React</p>
            <div className="my-7 flex items-center justify-center gap-10">
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="h-16 w-16" alt="Vite logo" />
                </a>
                <a href="https://tauri.app" target="_blank">
                    <img src="/tauri.svg" className="h-16 w-16" alt="Tauri logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="h-16 w-16" alt="React logo" />
                </a>
            </div>
            <p className="text-center">Click on the Tauri, Vite, and React logos to learn more.</p>
            <Button className="mt-5" onClick={goToLogin}>
                Go to Login page
            </Button>
        </main>
    );
}

export default App;
