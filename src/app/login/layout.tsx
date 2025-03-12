export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex items-center justify-center h-screen bg-gradient-to-r from-lime-100 to-lime-200">
            {children}
        </main>
    );
}