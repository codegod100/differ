// GENERATED by @edgedb/generate v0.3.3

import type {Executor} from "edgedb";

export type InsertSubnodeArgs = {
  "user": string;
  "body": string;
  "title": string;
  "links": string[];
};

export type InsertSubnodeReturns = {
  "id": string;
};

export function insertSubnode(client: Executor, args: InsertSubnodeArgs): Promise<InsertSubnodeReturns>;

export type UpdateSubnodeArgs = {
  "user": string;
  "title": string;
  "body": string;
  "links": string[];
};

export type UpdateSubnodeReturns = {
  "id": string;
} | null;

export function updateSubnode(client: Executor, args: UpdateSubnodeArgs): Promise<UpdateSubnodeReturns>;

export type BackLinksArgs = {
  "title": string;
};

export type BackLinksReturns = {
  "backlinks": {
    "id": string;
    "body": string;
    "user": string;
    "title": string;
    "links_to": string[];
  }[];
  "links_to": string[];
  "title": string;
  "user": string;
  "body": string;
  "id": string;
}[];

export function backLinks(client: Executor, args: BackLinksArgs): Promise<BackLinksReturns>;