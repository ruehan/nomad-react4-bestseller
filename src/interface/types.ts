export interface BestSellerType {
	list_name: string;
	display_name: string;
	list_name_encoded: string;
	oldest_published_date: string;
	newest_published_date: string;
	updated: string;
}

export interface BooklistType {
	rank: number;
	rank_last_week: number;
	weeks_on_list: number;
	asterisk: number;
	dagger: number;
	primary_isbn10: string;
	primary_isbn13: string;
	publisher: string;
	description: string;
	price: string;
	title: string;
	author: string;
	contributor: string;
	contributor_note: string;
	book_image: string;
	book_image_width: number;
	book_image_height: number;
	amazon_product_url: string;
	age_group: string;
	book_review_link: string;
	first_chapter_link: string;
	sunday_review_link: string;
	article_chapter_link: string;
	isbns: Isbn[];
	buy_links: BuyLink[];
	book_uri: string;
}

export interface BuyLink {
	name: string;
	url: string;
}

export interface Isbn {
	isbn10: string;
	isbn13: string;
}
