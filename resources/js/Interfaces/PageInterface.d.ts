import type { Page, PageProps, Errors, ErrorBag } from '@inertiajs/inertia';
import {FlashInterface} from "@/Interfaces/FlashInterface";

export interface PageInterface extends Page<PageProps> {
    props: {
        errors: Errors & ErrorBag;
        auth: {
            user: {
                name: string;
            };
        };
        laravelVersion: string;
        phpVersion: string;
        flash: FlashInterface;
    };
}

