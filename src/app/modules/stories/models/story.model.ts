import { Media } from "./media.model";

export interface Story{
    abstract:string;
    byline:string;
    created_date:string;
    des_facet:any[];
    geo_facet:any[];
    item_type:string;
    kicker:string;
    material_type_facet:string;
    org_facet:string;
    per_facet:string;
    published_date:string;
    section:string;
    short_url:string;
    subsection:string;
    title:string;
    updated_date:string;
    uri:string;
    url:string;
    multimedia:Media[]
}