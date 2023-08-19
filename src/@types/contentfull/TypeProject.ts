import { EntryFieldTypes, EntrySkeletonType, ChainModifiers, LocaleCode, Entry } from "contentful";

export interface TypeProjectFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    coverPhoto: EntryFieldTypes.AssetLink;
    body?: EntryFieldTypes.RichText;
    githubRepo: EntryFieldTypes.Symbol;
    category: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"App Development" | "Front-End Development" | "Template">>;
    liveUrl: EntryFieldTypes.Symbol;
    shortDescription?: EntryFieldTypes.Symbol;
    overview: EntryFieldTypes.Text;
}

export type TypeProjectSkeleton = EntrySkeletonType<TypeProjectFields, "project">;
export type TypeProject<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeProjectSkeleton, Modifiers, Locales>;
