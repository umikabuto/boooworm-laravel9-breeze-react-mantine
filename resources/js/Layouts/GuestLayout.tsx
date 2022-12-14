import React from 'react';

interface Props {
    children: React.ReactNode;
}

export default function GuestLayout({ children }: Props) {
    return (
        <div className="min-h-screen bg-gray-100">

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
        </div>
    );
}
