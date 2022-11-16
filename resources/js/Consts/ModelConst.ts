export const ModelConst = {
    book: {
        author: '著者',
        book_type: '書籍種別',
        book_size_type: '版型',
        contents: '収録作品',
        c_code: 'Cコード',
        e_code: '電子出版コード',
        editions: '書籍版',
        head_title: 'ヘッドタイトル',
        id: 'ID',
        isbn10: 'ISBN10',
        isbn13: 'ISBN13',
        media_type: 'メディア種別',
        libraries: 'レーベル',
        memo: 'メモ',
        ndc: '日本十進分類',
        persons: '関係者',
        publishers: '出版社',
        page_count: 'ページ数',
        publish_certainly_type: '出版年月日確実性',
        publish_date: '出版年月日',
        remarks: '備考',
        released: 'リリース可',
        sites: '関連サイト',
        sub_title: 'サブタイトル',
        title: 'タイトル',
        title_kana: 'カナタイトル',
        book_publisher_type: '出版種別',
        book_person_type: '人物役割',
        library_number_1: '番号1',
        library_number_2: '番号2',
        library_number_3: '番号3',
    },
    bookPublisherPivot: {
        book_publisher_type: '役割',
    },
    bookPersonPivot: {
        book_person_type: '役割',
    },
    bookLibraryPivot: {
        library_number_1: '番号1',
        library_number_2: '番号2',
        library_number_3: '番号3',
    },
    content: {
        author: '著者',
        book: '収録元',
        content_type: '収録種別',
        id: 'ID',
        memo: 'メモ',
        persons: '関係者',
        released: 'リリース可',
        remarks: '備考',
        seq: '収録順',
        title: '収録タイトル',
        title_kana: 'カナタイトル',
        writing: '作品',
    },
    contentPersonPivot: {
        content_person_type: '役割',
    },
    edition: {
        back_color: '背景色',
        id: 'ID',
        memo: 'メモ',
        name: '版',
        persons: '関係者',
        released: 'リリース可',
        title_color: 'タイトル色',
    },
    editionPersonPivot: {
        edition_person_type: '役割',
    },
    library: {
        id: 'ID',
        library_type: '叢書種別',
        magazine_cycle_type: '発売周期',
        memo: 'メモ',
        name: '叢書名',
        name_kana: 'カナ名',
        remarks: '備考',
        variants: '同義語',
        publishers: '出版社',
        released: 'リリース可',
        sites: '関連サイト',
    },
    person: {
        alias: '同一人物',
        birth_date: '生年月日',
        birth_certainly_type: '生年月日確実性',
        death_date: '死亡年月日',
        death_certainly_type: '死亡年月日確実性',
        id: 'ID',
        language_type: '言語',
        memo: 'メモ',
        name: '人名',
        name_kana: 'カナ名',
        name_en: '英語名',
        name_native: '母国語名',
        occupation: '職業',
        remarks: '備考',
        released: 'リリース可',
        sex_type: '性別',
        sites: '関連サイト',
        true_name: '本名',
        variants: '同義語',
    },
    publisher: {
        alias: '同一会社',
        id: 'ID',
        isbn_publisher: 'ISBN',
        memo: 'メモ',
        name: '出版社名',
        name_kana: '出版社名カナ',
        remarks: '備考',
        released: 'リリース可',
        sites: '関連サイト',
        variants: '別名',
    },
    series: {
        id: 'ID',
        memo: 'メモ',
        persons: '著者',
        remarks: '備考',
        released: 'リリース可',
        series_type: 'シリーズ種別',
        series_number: '番号',
        sites: '関連サイト',
        title: 'タイトル',
        title_kana: 'カナタイトル',
        title_en: '英語タイトル',
        title_native: '母国語タイトル',
        variants: '同義語',
    },
    site: {
        id: 'ID',
        language_type: '言語',
        memo: 'メモ',
        name: 'サイト名',
        remarks: '備考',
        released: 'リリース可',
        site_type: 'サイト種別',
        url: 'URL',
    },
    sitePivot: {
        url_parameter: 'URLパラメータ',
    },
    writing: {
        alias: '同一作品',
        model: '作品',
        id: 'ID',
        language_type: '言語',
        memo: 'メモ',
        persons: '著者',
        publish_year: '発表年',
        remarks: '備考',
        released: 'リリース可',
        series: 'シリーズ',
        sites: '関連サイト',
        story: 'ストーリー',
        sub_title: 'サブタイトル',
        title: 'タイトル',
        title_kana: 'カナタイトル',
        title_en: '英語タイトル',
        title_native: '母国語タイトル',
        terms: '語句',
        variants: '同義語',
        writing_type: '作品種別',
    },
    writingSeriesPivot: {
        series_number: '番号',
    },
}