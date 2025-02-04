import { LoginForm } from '@/components/forms/LoginForm';

export default function Login() {
    return (
        <main className="flex h-[calc(100vh-8vh)] w-full flex-col items-center justify-center p-5">
            <p className="font-sarabun-bold text-2xl">LOGIN</p>
            <LoginForm />
        </main>
    );
}
