
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function dashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body >
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center justify-center">
                    <div className="flex items-center justify-center ">
                    <Button ><Link className="hover:bg-red-400" href="/dashboard/admin">Admin</Link></Button>
                    <Link className="hover:bg-red-400" href="/dashboard/user">User</Link>
                </div>

                <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 text-center lg:px-8">
                    {children}
                </main>
                </div>

            </body>
        </html>
    );
}