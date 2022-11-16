import React from 'react';
import PageFooter from "@/Components/PageFooter";
import NavBar from "@/Components/NavBar";

interface Props {
    children: React.ReactNode;
}

export default function AdminLayout({ children }:Props) {
    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar isLoggedIn={true}></NavBar>

            <main>
                <div className="grid grid-cols-12">
                    <div className="col-span-2">
                    </div>
                    <div className="col-span-8">
                        <main>
                            {children}
                        </main>
                    </div>
                    <div className="col-span-2">
                    </div>
                </div>
            </main>

            <PageFooter isLoggedIn={true}></PageFooter>
        </div>
    );
}
