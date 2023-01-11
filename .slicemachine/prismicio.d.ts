// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for post documents */
interface PostDocumentData {
    /**
     * title field in *post*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: post.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * subtitle field in *post*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: post.subtitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    subtitle: prismicT.KeyTextField;
    /**
     * author field in *post*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: post.author
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    author: prismicT.KeyTextField;
    /**
     * banner field in *post*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: post.banner
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner: prismicT.ImageField<never>;
    /**
     * content field in *post*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: post.content[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    content: prismicT.GroupField<Simplify<PostDocumentDataContentItem>>;
}
/**
 * Item in post → content
 *
 */
export interface PostDocumentDataContentItem {
    /**
     * heading field in *post → content*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: post.content[].heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    heading: prismicT.KeyTextField;
    /**
     * body field in *post → content*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: post.content[].body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
}
/**
 * post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PostDocumentData>, "post", Lang>;
export type AllDocumentTypes = PostDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { PostDocumentData, PostDocumentDataContentItem, PostDocument, AllDocumentTypes };
    }
}
