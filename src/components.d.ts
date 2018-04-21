/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import 'ionicons';
import '@ionic/core';
import '@stencil/router';

import {
  RouterHistory,
} from '@stencil/router';
import {
  EventEmitter,
} from '@stencil/core';
import {
  Listing,
  ListingCard,
  Map,
  Profile,
  Thumbnails,
} from './global/interfaces';
import {
  SearchOptionInterface,
  SearchProvider,
} from './global/interfaces-app';

declare global {
  interface HTMLAmRatingElement extends HTMLStencilElement {
    /**
     * Determines if half ratings are allowed
     */
    'allowHalfRatings': boolean;
    /**
     * The color to fill the rating with when it's outwith the max
     */
    'colorOff': string;
    /**
     * The color to fill the rating with when it's within the max
     */
    'colorOn': string;
    /**
     * The color to fill the rating with when it's outwith the max
     */
    'colorOutline': string;
    /**
     * The direction of the shading. Valid settings are 'ltr' (left to right) and 'ttb' (top to bottom)
     */
    'direction': string;
    /**
     * Determines if the user can set a rating
     */
    'interactive': boolean;
    /**
     * The maximum rating possible
     */
    'maxRating': number;
    /**
     * The minimum rating possible
     */
    'minRating': number;
    /**
     * The rating
     */
    'rating': number;
    /**
     * The rating identifier
     */
    'reference': string;
    /**
     * This is a star!
     */
    'svgPoints': string;
    /**
     * The view box for the SVG
     */
    'svgViewBox': string;
  }
  var HTMLAmRatingElement: {
    prototype: HTMLAmRatingElement;
    new (): HTMLAmRatingElement;
  };
  interface HTMLElementTagNameMap {
    'am-rating': HTMLAmRatingElement;
  }
  interface ElementTagNameMap {
    'am-rating': HTMLAmRatingElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'am-rating': JSXElements.AmRatingAttributes;
    }
  }
  namespace JSXElements {
    export interface AmRatingAttributes extends HTMLAttributes {
      /**
       * Determines if half ratings are allowed
       */
      'allowHalfRatings'?: boolean;
      /**
       * The color to fill the rating with when it's outwith the max
       */
      'colorOff'?: string;
      /**
       * The color to fill the rating with when it's within the max
       */
      'colorOn'?: string;
      /**
       * The color to fill the rating with when it's outwith the max
       */
      'colorOutline'?: string;
      /**
       * The direction of the shading. Valid settings are 'ltr' (left to right) and 'ttb' (top to bottom)
       */
      'direction'?: string;
      /**
       * Determines if the user can set a rating
       */
      'interactive'?: boolean;
      /**
       * The maximum rating possible
       */
      'maxRating'?: number;
      /**
       * The minimum rating possible
       */
      'minRating'?: number;
      /**
       * Event fired when the rating is updated by user input
       */
      'onRatingUpdated'?: (event: CustomEvent) => void;
      /**
       * The rating
       */
      'rating'?: number;
      /**
       * The rating identifier
       */
      'reference'?: string;
      /**
       * This is a star!
       */
      'svgPoints'?: string;
      /**
       * The view box for the SVG
       */
      'svgViewBox'?: string;
    }
  }
}


declare global {
  interface HTMLAuthPageElement extends HTMLStencilElement {

  }
  var HTMLAuthPageElement: {
    prototype: HTMLAuthPageElement;
    new (): HTMLAuthPageElement;
  };
  interface HTMLElementTagNameMap {
    'auth-page': HTMLAuthPageElement;
  }
  interface ElementTagNameMap {
    'auth-page': HTMLAuthPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'auth-page': JSXElements.AuthPageAttributes;
    }
  }
  namespace JSXElements {
    export interface AuthPageAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLBazaarDogStencilElement extends HTMLStencilElement {

  }
  var HTMLBazaarDogStencilElement: {
    prototype: HTMLBazaarDogStencilElement;
    new (): HTMLBazaarDogStencilElement;
  };
  interface HTMLElementTagNameMap {
    'bazaar-dog-stencil': HTMLBazaarDogStencilElement;
  }
  interface ElementTagNameMap {
    'bazaar-dog-stencil': HTMLBazaarDogStencilElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'bazaar-dog-stencil': JSXElements.BazaarDogStencilAttributes;
    }
  }
  namespace JSXElements {
    export interface BazaarDogStencilAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLFavoritesPageElement extends HTMLStencilElement {

  }
  var HTMLFavoritesPageElement: {
    prototype: HTMLFavoritesPageElement;
    new (): HTMLFavoritesPageElement;
  };
  interface HTMLElementTagNameMap {
    'favorites-page': HTMLFavoritesPageElement;
  }
  interface ElementTagNameMap {
    'favorites-page': HTMLFavoritesPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'favorites-page': JSXElements.FavoritesPageAttributes;
    }
  }
  namespace JSXElements {
    export interface FavoritesPageAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLFeedListElement extends HTMLStencilElement {
    'posts': any;
  }
  var HTMLFeedListElement: {
    prototype: HTMLFeedListElement;
    new (): HTMLFeedListElement;
  };
  interface HTMLElementTagNameMap {
    'feed-list': HTMLFeedListElement;
  }
  interface ElementTagNameMap {
    'feed-list': HTMLFeedListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'feed-list': JSXElements.FeedListAttributes;
    }
  }
  namespace JSXElements {
    export interface FeedListAttributes extends HTMLAttributes {
      'posts'?: any;
    }
  }
}


declare global {
  interface HTMLFeedPageModalElement extends HTMLStencilElement {

  }
  var HTMLFeedPageModalElement: {
    prototype: HTMLFeedPageModalElement;
    new (): HTMLFeedPageModalElement;
  };
  interface HTMLElementTagNameMap {
    'feed-page-modal': HTMLFeedPageModalElement;
  }
  interface ElementTagNameMap {
    'feed-page-modal': HTMLFeedPageModalElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'feed-page-modal': JSXElements.FeedPageModalAttributes;
    }
  }
  namespace JSXElements {
    export interface FeedPageModalAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLFeedPageElement extends HTMLStencilElement {

  }
  var HTMLFeedPageElement: {
    prototype: HTMLFeedPageElement;
    new (): HTMLFeedPageElement;
  };
  interface HTMLElementTagNameMap {
    'feed-page': HTMLFeedPageElement;
  }
  interface ElementTagNameMap {
    'feed-page': HTMLFeedPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'feed-page': JSXElements.FeedPageAttributes;
    }
  }
  namespace JSXElements {
    export interface FeedPageAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLHomePageElement extends HTMLStencilElement {
    'history': RouterHistory;
  }
  var HTMLHomePageElement: {
    prototype: HTMLHomePageElement;
    new (): HTMLHomePageElement;
  };
  interface HTMLElementTagNameMap {
    'home-page': HTMLHomePageElement;
  }
  interface ElementTagNameMap {
    'home-page': HTMLHomePageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'home-page': JSXElements.HomePageAttributes;
    }
  }
  namespace JSXElements {
    export interface HomePageAttributes extends HTMLAttributes {
      'history'?: RouterHistory;
    }
  }
}


declare global {
  interface HTMLLazyImgElement extends HTMLStencilElement {
    'alt': string;
    'src': string;
  }
  var HTMLLazyImgElement: {
    prototype: HTMLLazyImgElement;
    new (): HTMLLazyImgElement;
  };
  interface HTMLElementTagNameMap {
    'lazy-img': HTMLLazyImgElement;
  }
  interface ElementTagNameMap {
    'lazy-img': HTMLLazyImgElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'lazy-img': JSXElements.LazyImgAttributes;
    }
  }
  namespace JSXElements {
    export interface LazyImgAttributes extends HTMLAttributes {
      'alt'?: string;
      'onLazyImgloaded'?: (event: CustomEvent<HTMLImageElement>) => void;
      'src'?: string;
    }
  }
}


declare global {
  interface HTMLListingDetailElement extends HTMLStencilElement {
    'peerId': string;
    'slug': string;
  }
  var HTMLListingDetailElement: {
    prototype: HTMLListingDetailElement;
    new (): HTMLListingDetailElement;
  };
  interface HTMLElementTagNameMap {
    'listing-detail': HTMLListingDetailElement;
  }
  interface ElementTagNameMap {
    'listing-detail': HTMLListingDetailElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'listing-detail': JSXElements.ListingDetailAttributes;
    }
  }
  namespace JSXElements {
    export interface ListingDetailAttributes extends HTMLAttributes {
      'peerId'?: string;
      'slug'?: string;
    }
  }
}


declare global {
  interface HTMLListingItemElement extends HTMLStencilElement {
    'fave': Boolean;
    'listing': ListingCard;
  }
  var HTMLListingItemElement: {
    prototype: HTMLListingItemElement;
    new (): HTMLListingItemElement;
  };
  interface HTMLElementTagNameMap {
    'listing-item': HTMLListingItemElement;
  }
  interface ElementTagNameMap {
    'listing-item': HTMLListingItemElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'listing-item': JSXElements.ListingItemAttributes;
    }
  }
  namespace JSXElements {
    export interface ListingItemAttributes extends HTMLAttributes {
      'fave'?: Boolean;
      'listing'?: ListingCard;
      'onListingDeleted'?: (event: CustomEvent) => void;
    }
  }
}


declare global {
  interface HTMLListingListElement extends HTMLStencilElement {
    'fave': Boolean;
    'listings': Array<ListingCard>;
  }
  var HTMLListingListElement: {
    prototype: HTMLListingListElement;
    new (): HTMLListingListElement;
  };
  interface HTMLElementTagNameMap {
    'listing-list': HTMLListingListElement;
  }
  interface ElementTagNameMap {
    'listing-list': HTMLListingListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'listing-list': JSXElements.ListingListAttributes;
    }
  }
  namespace JSXElements {
    export interface ListingListAttributes extends HTMLAttributes {
      'fave'?: Boolean;
      'listings'?: Array<ListingCard>;
    }
  }
}


declare global {
  interface HTMLListingPageElement extends HTMLStencilElement {

  }
  var HTMLListingPageElement: {
    prototype: HTMLListingPageElement;
    new (): HTMLListingPageElement;
  };
  interface HTMLElementTagNameMap {
    'listing-page': HTMLListingPageElement;
  }
  interface ElementTagNameMap {
    'listing-page': HTMLListingPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'listing-page': JSXElements.ListingPageAttributes;
    }
  }
  namespace JSXElements {
    export interface ListingPageAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLListingSlideshowElement extends HTMLStencilElement {
    'images': Array<Thumbnails>;
  }
  var HTMLListingSlideshowElement: {
    prototype: HTMLListingSlideshowElement;
    new (): HTMLListingSlideshowElement;
  };
  interface HTMLElementTagNameMap {
    'listing-slideshow': HTMLListingSlideshowElement;
  }
  interface ElementTagNameMap {
    'listing-slideshow': HTMLListingSlideshowElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'listing-slideshow': JSXElements.ListingSlideshowAttributes;
    }
  }
  namespace JSXElements {
    export interface ListingSlideshowAttributes extends HTMLAttributes {
      'images'?: Array<Thumbnails>;
    }
  }
}


declare global {
  interface HTMLMainPageElement extends HTMLStencilElement {

  }
  var HTMLMainPageElement: {
    prototype: HTMLMainPageElement;
    new (): HTMLMainPageElement;
  };
  interface HTMLElementTagNameMap {
    'main-page': HTMLMainPageElement;
  }
  interface ElementTagNameMap {
    'main-page': HTMLMainPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'main-page': JSXElements.MainPageAttributes;
    }
  }
  namespace JSXElements {
    export interface MainPageAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLPopoverPageElement extends HTMLStencilElement {

  }
  var HTMLPopoverPageElement: {
    prototype: HTMLPopoverPageElement;
    new (): HTMLPopoverPageElement;
  };
  interface HTMLElementTagNameMap {
    'popover-page': HTMLPopoverPageElement;
  }
  interface ElementTagNameMap {
    'popover-page': HTMLPopoverPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'popover-page': JSXElements.PopoverPageAttributes;
    }
  }
  namespace JSXElements {
    export interface PopoverPageAttributes extends HTMLAttributes {
      'onClosePopover'?: (event: CustomEvent) => void;
    }
  }
}


declare global {
  interface HTMLPostDetailElement extends HTMLStencilElement {
    'post': any;
  }
  var HTMLPostDetailElement: {
    prototype: HTMLPostDetailElement;
    new (): HTMLPostDetailElement;
  };
  interface HTMLElementTagNameMap {
    'post-detail': HTMLPostDetailElement;
  }
  interface ElementTagNameMap {
    'post-detail': HTMLPostDetailElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'post-detail': JSXElements.PostDetailAttributes;
    }
  }
  namespace JSXElements {
    export interface PostDetailAttributes extends HTMLAttributes {
      'post'?: any;
    }
  }
}


declare global {
  interface HTMLPostImgElement extends HTMLStencilElement {
    'alt': string;
    'src': string;
  }
  var HTMLPostImgElement: {
    prototype: HTMLPostImgElement;
    new (): HTMLPostImgElement;
  };
  interface HTMLElementTagNameMap {
    'post-img': HTMLPostImgElement;
  }
  interface ElementTagNameMap {
    'post-img': HTMLPostImgElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'post-img': JSXElements.PostImgAttributes;
    }
  }
  namespace JSXElements {
    export interface PostImgAttributes extends HTMLAttributes {
      'alt'?: string;
      'onLazyImgloaded'?: (event: CustomEvent<HTMLImageElement>) => void;
      'src'?: string;
    }
  }
}


declare global {
  interface HTMLPostItemElement extends HTMLStencilElement {
    'post': any;
  }
  var HTMLPostItemElement: {
    prototype: HTMLPostItemElement;
    new (): HTMLPostItemElement;
  };
  interface HTMLElementTagNameMap {
    'post-item': HTMLPostItemElement;
  }
  interface ElementTagNameMap {
    'post-item': HTMLPostItemElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'post-item': JSXElements.PostItemAttributes;
    }
  }
  namespace JSXElements {
    export interface PostItemAttributes extends HTMLAttributes {
      'post'?: any;
    }
  }
}


declare global {
  interface HTMLProfileDetailElement extends HTMLStencilElement {
    'peerId': string;
  }
  var HTMLProfileDetailElement: {
    prototype: HTMLProfileDetailElement;
    new (): HTMLProfileDetailElement;
  };
  interface HTMLElementTagNameMap {
    'profile-detail': HTMLProfileDetailElement;
  }
  interface ElementTagNameMap {
    'profile-detail': HTMLProfileDetailElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'profile-detail': JSXElements.ProfileDetailAttributes;
    }
  }
  namespace JSXElements {
    export interface ProfileDetailAttributes extends HTMLAttributes {
      'peerId'?: string;
    }
  }
}


declare global {
  interface HTMLProfileHeaderElement extends HTMLStencilElement {

  }
  var HTMLProfileHeaderElement: {
    prototype: HTMLProfileHeaderElement;
    new (): HTMLProfileHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'profile-header': HTMLProfileHeaderElement;
  }
  interface ElementTagNameMap {
    'profile-header': HTMLProfileHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'profile-header': JSXElements.ProfileHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface ProfileHeaderAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLProfileListElement extends HTMLStencilElement {
    'profiles': Array<Profile>;
  }
  var HTMLProfileListElement: {
    prototype: HTMLProfileListElement;
    new (): HTMLProfileListElement;
  };
  interface HTMLElementTagNameMap {
    'profile-list': HTMLProfileListElement;
  }
  interface ElementTagNameMap {
    'profile-list': HTMLProfileListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'profile-list': JSXElements.ProfileListAttributes;
    }
  }
  namespace JSXElements {
    export interface ProfileListAttributes extends HTMLAttributes {
      'profiles'?: Array<Profile>;
    }
  }
}


declare global {
  interface HTMLProfilePageElement extends HTMLStencilElement {

  }
  var HTMLProfilePageElement: {
    prototype: HTMLProfilePageElement;
    new (): HTMLProfilePageElement;
  };
  interface HTMLElementTagNameMap {
    'profile-page': HTMLProfilePageElement;
  }
  interface ElementTagNameMap {
    'profile-page': HTMLProfilePageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'profile-page': JSXElements.ProfilePageAttributes;
    }
  }
  namespace JSXElements {
    export interface ProfilePageAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLRatingItemElement extends HTMLStencilElement {
    'ratingHash': string;
  }
  var HTMLRatingItemElement: {
    prototype: HTMLRatingItemElement;
    new (): HTMLRatingItemElement;
  };
  interface HTMLElementTagNameMap {
    'rating-item': HTMLRatingItemElement;
  }
  interface ElementTagNameMap {
    'rating-item': HTMLRatingItemElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'rating-item': JSXElements.RatingItemAttributes;
    }
  }
  namespace JSXElements {
    export interface RatingItemAttributes extends HTMLAttributes {
      'onListingDeleted'?: (event: CustomEvent) => void;
      'ratingHash'?: string;
    }
  }
}


declare global {
  interface HTMLRatingListElement extends HTMLStencilElement {
    'ratingHashes': Array<string>;
  }
  var HTMLRatingListElement: {
    prototype: HTMLRatingListElement;
    new (): HTMLRatingListElement;
  };
  interface HTMLElementTagNameMap {
    'rating-list': HTMLRatingListElement;
  }
  interface ElementTagNameMap {
    'rating-list': HTMLRatingListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'rating-list': JSXElements.RatingListAttributes;
    }
  }
  namespace JSXElements {
    export interface RatingListAttributes extends HTMLAttributes {
      'ratingHashes'?: Array<string>;
    }
  }
}


declare global {
  interface HTMLSearchMenuElement extends HTMLStencilElement {
    'options': Map<SearchOptionInterface>;
  }
  var HTMLSearchMenuElement: {
    prototype: HTMLSearchMenuElement;
    new (): HTMLSearchMenuElement;
  };
  interface HTMLElementTagNameMap {
    'search-menu': HTMLSearchMenuElement;
  }
  interface ElementTagNameMap {
    'search-menu': HTMLSearchMenuElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'search-menu': JSXElements.SearchMenuAttributes;
    }
  }
  namespace JSXElements {
    export interface SearchMenuAttributes extends HTMLAttributes {
      'onLeftSidebarClick'?: (event: CustomEvent) => void;
      'options'?: Map<SearchOptionInterface>;
    }
  }
}


declare global {
  interface HTMLSearchOptionElement extends HTMLStencilElement {
    'init': any;
    'onSearchParamCheckboxActivated': (event: any) => void;
    'onSearchParamDropdownActivated': (event: any) => void;
    'onSearchParamRadioActivated': (event: any) => void;
    'option': SearchOptionInterface;
    'param': string;
  }
  var HTMLSearchOptionElement: {
    prototype: HTMLSearchOptionElement;
    new (): HTMLSearchOptionElement;
  };
  interface HTMLElementTagNameMap {
    'search-option': HTMLSearchOptionElement;
  }
  interface ElementTagNameMap {
    'search-option': HTMLSearchOptionElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'search-option': JSXElements.SearchOptionAttributes;
    }
  }
  namespace JSXElements {
    export interface SearchOptionAttributes extends HTMLAttributes {
      'init'?: any;
      'onOnSearchParamChange'?: (event: CustomEvent<{ param: string; value: any }>) => void;
      'option'?: SearchOptionInterface;
      'param'?: string;
    }
  }
}


declare global {
  interface HTMLSearchProviderElement extends HTMLStencilElement {
    'searchProviders': Array<SearchProvider>;
    'storedSearchProvider': SearchProvider;
  }
  var HTMLSearchProviderElement: {
    prototype: HTMLSearchProviderElement;
    new (): HTMLSearchProviderElement;
  };
  interface HTMLElementTagNameMap {
    'search-provider': HTMLSearchProviderElement;
  }
  interface ElementTagNameMap {
    'search-provider': HTMLSearchProviderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'search-provider': JSXElements.SearchProviderAttributes;
    }
  }
  namespace JSXElements {
    export interface SearchProviderAttributes extends HTMLAttributes {
      'onBackgroundToggle'?: (event: CustomEvent) => void;
      'onOnSearchProviderChange'?: (event: CustomEvent) => void;
      'searchProviders'?: Array<SearchProvider>;
      'storedSearchProvider'?: SearchProvider;
    }
  }
}


declare global {
  interface HTMLSettingsPageElement extends HTMLStencilElement {

  }
  var HTMLSettingsPageElement: {
    prototype: HTMLSettingsPageElement;
    new (): HTMLSettingsPageElement;
  };
  interface HTMLElementTagNameMap {
    'settings-page': HTMLSettingsPageElement;
  }
  interface ElementTagNameMap {
    'settings-page': HTMLSettingsPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'settings-page': JSXElements.SettingsPageAttributes;
    }
  }
  namespace JSXElements {
    export interface SettingsPageAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLShareButtonElement extends HTMLStencilElement {
    'listing': any;
  }
  var HTMLShareButtonElement: {
    prototype: HTMLShareButtonElement;
    new (): HTMLShareButtonElement;
  };
  interface HTMLElementTagNameMap {
    'share-button': HTMLShareButtonElement;
  }
  interface ElementTagNameMap {
    'share-button': HTMLShareButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'share-button': JSXElements.ShareButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface ShareButtonAttributes extends HTMLAttributes {
      'listing'?: any;
    }
  }
}


declare global {
  interface HTMLStoreItemElement extends HTMLStencilElement {
    'fave': Boolean;
    'listing': Listing;
    'peerID': string;
  }
  var HTMLStoreItemElement: {
    prototype: HTMLStoreItemElement;
    new (): HTMLStoreItemElement;
  };
  interface HTMLElementTagNameMap {
    'store-item': HTMLStoreItemElement;
  }
  interface ElementTagNameMap {
    'store-item': HTMLStoreItemElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'store-item': JSXElements.StoreItemAttributes;
    }
  }
  namespace JSXElements {
    export interface StoreItemAttributes extends HTMLAttributes {
      'fave'?: Boolean;
      'listing'?: Listing;
      'onListingDeleted'?: (event: CustomEvent) => void;
      'peerID'?: string;
    }
  }
}


declare global {
  interface HTMLStoreListElement extends HTMLStencilElement {
    'fave': Boolean;
    'listings': Array<Listing>;
    'peerID': string;
  }
  var HTMLStoreListElement: {
    prototype: HTMLStoreListElement;
    new (): HTMLStoreListElement;
  };
  interface HTMLElementTagNameMap {
    'store-list': HTMLStoreListElement;
  }
  interface ElementTagNameMap {
    'store-list': HTMLStoreListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'store-list': JSXElements.StoreListAttributes;
    }
  }
  namespace JSXElements {
    export interface StoreListAttributes extends HTMLAttributes {
      'fave'?: Boolean;
      'listings'?: Array<Listing>;
      'peerID'?: string;
    }
  }
}


declare global {
  interface HTMLTabsPageElement extends HTMLStencilElement {

  }
  var HTMLTabsPageElement: {
    prototype: HTMLTabsPageElement;
    new (): HTMLTabsPageElement;
  };
  interface HTMLElementTagNameMap {
    'tabs-page': HTMLTabsPageElement;
  }
  interface ElementTagNameMap {
    'tabs-page': HTMLTabsPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tabs-page': JSXElements.TabsPageAttributes;
    }
  }
  namespace JSXElements {
    export interface TabsPageAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLUserProfileElement extends HTMLStencilElement {
    'userName': any;
  }
  var HTMLUserProfileElement: {
    prototype: HTMLUserProfileElement;
    new (): HTMLUserProfileElement;
  };
  interface HTMLElementTagNameMap {
    'user-profile': HTMLUserProfileElement;
  }
  interface ElementTagNameMap {
    'user-profile': HTMLUserProfileElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'user-profile': JSXElements.UserProfileAttributes;
    }
  }
  namespace JSXElements {
    export interface UserProfileAttributes extends HTMLAttributes {
      'userName'?: any;
    }
  }
}


declare global {
  interface HTMLUsersListElement extends HTMLStencilElement {
    'users': any[];
  }
  var HTMLUsersListElement: {
    prototype: HTMLUsersListElement;
    new (): HTMLUsersListElement;
  };
  interface HTMLElementTagNameMap {
    'users-list': HTMLUsersListElement;
  }
  interface ElementTagNameMap {
    'users-list': HTMLUsersListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'users-list': JSXElements.UsersListAttributes;
    }
  }
  namespace JSXElements {
    export interface UsersListAttributes extends HTMLAttributes {
      'users'?: any[];
    }
  }
}


declare global {
  interface HTMLUsersPageElement extends HTMLStencilElement {

  }
  var HTMLUsersPageElement: {
    prototype: HTMLUsersPageElement;
    new (): HTMLUsersPageElement;
  };
  interface HTMLElementTagNameMap {
    'users-page': HTMLUsersPageElement;
  }
  interface ElementTagNameMap {
    'users-page': HTMLUsersPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'users-page': JSXElements.UsersPageAttributes;
    }
  }
  namespace JSXElements {
    export interface UsersPageAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLXuiCheckboxElement extends HTMLStencilElement {
    'checked': boolean;
    'label': string;
    'radio': boolean;
    'slider': boolean;
    'toggle': boolean;
  }
  var HTMLXuiCheckboxElement: {
    prototype: HTMLXuiCheckboxElement;
    new (): HTMLXuiCheckboxElement;
  };
  interface HTMLElementTagNameMap {
    'xui-checkbox': HTMLXuiCheckboxElement;
  }
  interface ElementTagNameMap {
    'xui-checkbox': HTMLXuiCheckboxElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'xui-checkbox': JSXElements.XuiCheckboxAttributes;
    }
  }
  namespace JSXElements {
    export interface XuiCheckboxAttributes extends HTMLAttributes {
      'checked'?: boolean;
      'label'?: string;
      'radio'?: boolean;
      'slider'?: boolean;
      'toggle'?: boolean;
    }
  }
}


declare global {
  interface HTMLXuiDropdownItemElement extends HTMLStencilElement {
    'active': boolean;
    'icon': string;
    'text': string;
    'value': any;
  }
  var HTMLXuiDropdownItemElement: {
    prototype: HTMLXuiDropdownItemElement;
    new (): HTMLXuiDropdownItemElement;
  };
  interface HTMLElementTagNameMap {
    'xui-dropdown-item': HTMLXuiDropdownItemElement;
  }
  interface ElementTagNameMap {
    'xui-dropdown-item': HTMLXuiDropdownItemElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'xui-dropdown-item': JSXElements.XuiDropdownItemAttributes;
    }
  }
  namespace JSXElements {
    export interface XuiDropdownItemAttributes extends HTMLAttributes {
      'active'?: boolean;
      'icon'?: string;
      'text'?: string;
      'value'?: any;
    }
  }
}


declare global {
  interface HTMLXuiDropdownElement extends HTMLStencilElement {
    'icon': string;
    'name': string;
    'openOnFocus': boolean;
    'selection': boolean;
    'text': string;
    'value': any;
  }
  var HTMLXuiDropdownElement: {
    prototype: HTMLXuiDropdownElement;
    new (): HTMLXuiDropdownElement;
  };
  interface HTMLElementTagNameMap {
    'xui-dropdown': HTMLXuiDropdownElement;
  }
  interface ElementTagNameMap {
    'xui-dropdown': HTMLXuiDropdownElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'xui-dropdown': JSXElements.XuiDropdownAttributes;
    }
  }
  namespace JSXElements {
    export interface XuiDropdownAttributes extends HTMLAttributes {
      'icon'?: string;
      'name'?: string;
      'onInput'?: (event: CustomEvent) => void;
      'openOnFocus'?: boolean;
      'selection'?: boolean;
      'text'?: string;
      'value'?: any;
    }
  }
}


declare global {
  interface HTMLXuiSegmentElement extends HTMLStencilElement {
    'active': boolean;
    'attach': any;
    'dataTab': string;
    'tab': boolean;
  }
  var HTMLXuiSegmentElement: {
    prototype: HTMLXuiSegmentElement;
    new (): HTMLXuiSegmentElement;
  };
  interface HTMLElementTagNameMap {
    'xui-segment': HTMLXuiSegmentElement;
  }
  interface ElementTagNameMap {
    'xui-segment': HTMLXuiSegmentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'xui-segment': JSXElements.XuiSegmentAttributes;
    }
  }
  namespace JSXElements {
    export interface XuiSegmentAttributes extends HTMLAttributes {
      'active'?: boolean;
      'attach'?: any;
      'dataTab'?: string;
      'tab'?: boolean;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
