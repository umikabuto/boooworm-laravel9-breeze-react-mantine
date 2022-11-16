/**
 * This file is auto generated using 'php artisan typescript:generate'
 *
 * Changes to this file will be lost when the command is run again
 */

declare namespace App.Models {
    export interface Article {
        id: number;
        key1: string;
        key2: string;
        key3: string;
        body: string | null;
        created_at: string | null;
        updated_at: string | null;
    }

    export interface Book {
        id: number;
        head_title: string | null;
        title: string | null;
        sub_title: string | null;
        title_kana: string | null;
        author: string | null;
        book_size_type: number;
        media_type: number;
        book_type: number;
        page_count: number;
        isbn13: string | null;
        isbn10: string | null;
        ndc: string | null;
        c_code: string | null;
        e_code: string | null;
        publish_certainly_type: number;
        publish_date: string | null;
        released: boolean;
        remarks: string | null;
        memo: string | null;
        created_at: string | null;
        updated_at: string | null;
        contents?: Array<App.Models.Content> | null;
        editions?: Array<App.Models.Edition> | null;
        publishers?: Array<App.Models.PublisherAndPivot> | null;
        libraries?: Array<App.Models.LibraryAndPivot> | null;
        persons?: Array<App.Models.PersonAndBookPivot> | null;
        sites?: Array<App.Models.SiteAndPivot> | null;
        contents_count?: number | null;
        editions_count?: number | null;
        publishers_count?: number | null;
        libraries_count?: number | null;
        persons_count?: number | null;
        sites_count?: number | null;
    }

    export interface Content {
        id: number;
        book_id: number;
        seq: number;
        title: string | null;
        title_kana: string | null;
        author: string | null;
        content_type: number;
        writing_id: number | null;
        remarks: string | null;
        memo: string | null;
        released: boolean;
        created_at: string | null;
        updated_at: string | null;
        book?: App.Models.Book | null;
        writing?: App.Models.Writing | null;
        persons?: Array<App.Models.PersonAndContentPivot> | null;
        persons_count?: number | null;
    }

    export interface Edition {
        id: number;
        book_id: number;
        name: string | null;
        back_color: string | null;
        title_color: string | null;
        released: boolean;
        memo: string | null;
        created_at: string | null;
        updated_at: string | null;
        book?: App.Models.Book | null;
        persons?: Array<App.Models.PersonAndEditionPivot> | null;
        persons_count?: number | null;
    }

    export interface Library {
        id: number;
        name: string | null;
        name_kana: string | null;
        library_type: number;
        magazine_cycle_type: number;
        released: boolean;
        remarks: string | null;
        memo: string | null;
        variants: string | null;
        created_at: string | null;
        updated_at: string | null;
        books?: Array<App.Models.Book> | null;
        publishers?: Array<App.Models.Publisher> | null;
        sites?: Array<App.Models.Site> | null;
        books_count?: number | null;
        publishers_count?: number | null;
        sites_count?: number | null;
    }

    export interface LibraryAndPivot extends Library {
        pivot: {
            library_number_1: string | undefined;
            library_number_2: string | undefined;
            library_number_3: string | undefined;
        }
    }

    export interface Person {
        id: number;
        language_type: number;
        name: string | null;
        name_kana: string | null;
        name_en: string | null;
        name_native: string | null;
        true_name: string | null;
        occupation: string | null;
        birth_date: string | null;
        birth_certainly_type: number;
        death_date: string | null;
        death_certainly_type: number;
        sex_type: number;
        alias_id: number | null;
        remarks: string | null;
        memo: string | null;
        variants: string | null;
        released: boolean;
        created_at: string | null;
        updated_at: string | null;
        alias?: App.Models.Person | null;
        alias_persons?: Array<App.Models.Person> | null;
        books?: Array<App.Models.Book> | null;
        contents?: Array<App.Models.Content> | null;
        editions?: Array<App.Models.Edition> | null;
        series?: Array<App.Models.Series> | null;
        sites?: Array<App.Models.Site> | null;
        writings?: Array<App.Models.Writing> | null;
        alias_persons_count?: number | null;
        books_count?: number | null;
        contents_count?: number | null;
        editions_count?: number | null;
        series_count?: number | null;
        sites_count?: number | null;
        writings_count?: number | null;
    }

    export interface PersonAndBookPivot extends Person {
        pivot: {
            book_person_type: number | undefined;
        }
    }
    export interface PersonAndContentPivot extends Person {
        pivot: {
            content_person_type: number | undefined;
        }
    }
    export interface PersonAndEditionPivot extends Person {
        pivot: {
            edition_person_type: number | undefined;
        }
    }

    export interface Publisher {
        id: number;
        name: string | null;
        name_kana: string | null;
        isbn_publisher: string | null;
        alias_id: number | null;
        remarks: string | null;
        memo: string | null;
        variants: string | null;
        released: boolean;
        created_at: string | null;
        updated_at: string | null;
        alias?: App.Models.Publisher | null;
        aliases?: Array<App.Models.Publisher> | null;
        books?: Array<App.Models.Publisher> | null;
        libraries?: Array<App.Models.Library> | null;
        sites?: Array<App.Models.SiteAndPivot> | null;
        aliases_count?: number | null;
        books_count?: number | null;
        libraries_count?: number | null;
        sites_count?: number | null;
    }

    export interface PublisherAndPivot extends Publisher {
        pivot: {
            book_publisher_type: number | undefined;
        }
    }

    export interface Series {
        id: number;
        title: string | null;
        title_kana: string | null;
        title_en: string | null;
        title_native: string | null;
        series_type: number;
        released: boolean;
        remarks: string | null;
        memo: string | null;
        variants: string | null;
        created_at: string | null;
        updated_at: string | null;
        persons?: Array<App.Models.Person> | null;
        sites?: Array<App.Models.SiteAndPivot> | null;
        writings?: Array<App.Models.Writing> | null;
        persons_count?: number | null;
        sites_count?: number | null;
        writings_count?: number | null;
    }

    export interface SeriesAndPivot extends Series {
        pivot: {
            series_number: string | undefined;
        }
    }

    export interface Site {
        id: number;
        language_type?: number;
        name: string | null;
        url: string | null;
        site_type: number;
        memo: string | null;
        remarks: string | null;
        released: boolean;
        created_at: string | null;
        updated_at: string | null;
        books?: Array<App.Models.Book> | null;
        libraries?: Array<App.Models.Library> | null;
        persons?: Array<App.Models.Person> | null;
        publishers?: Array<App.Models.Publisher> | null;
        series?: Array<App.Models.Series> | null;
        writings?: Array<App.Models.Writing> | null;
        books_count?: number | null;
        libraries_count?: number | null;
        persons_count?: number | null;
        publishers_count?: number | null;
        series_count?: number | null;
        writings_count?: number | null;
    }

    export interface SiteAndPivot extends Site {
        pivot: {
            url_parameter: string | undefined;
        }
    }

    export interface User {
        id: number;
        name: string;
        email: string;
        email_verified_at: string | null;
        password: string;
        remember_token: string | null;
        created_at: string | null;
        updated_at: string | null;
    }

    export interface Writing {
        id: number;
        title: string | null;
        sub_title: string | null;
        title_kana: string | null;
        title_en: string | null;
        title_native: string | null;
        publish_year: string;
        writing_type: number;
        language_type: number;
        alias_id: number | null;
        story: string | null;
        remarks: string | null;
        memo: string | null;
        variants: string | null;
        released: boolean;
        created_at: string | null;
        updated_at: string | null;
        contents?: Array<App.Models.Content> | null;
        persons?: Array<App.Models.Person> | null;
        series?: Array<App.Models.SeriesAndPivot> | null;
        sites?: Array<App.Models.SiteAndPivot> | null;
        aliases_count?: number | null;
        contents_count?: number | null;
        persons_count?: number | null;
        series_count?: number | null;
        sites_count?: number | null;
    }

}
