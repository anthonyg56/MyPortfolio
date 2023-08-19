import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeBogPostFields {
    coverPhoto: EntryFieldTypes.AssetLink;
    title: EntryFieldTypes.Symbol;
    publishDate: EntryFieldTypes.Date;
    category: EntryFieldTypes.Symbol<"Business" | "NextJs" | "Web Development">;
    body: EntryFieldTypes.RichText;
    tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    slug: EntryFieldTypes.Symbol;
    shortText?: EntryFieldTypes.Symbol;
}

export type TypeBogPostSkeleton = EntrySkeletonType<TypeBogPostFields, "bogPost">;
export type TypeBogPost<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeBogPostSkeleton, Modifiers, Locales>;