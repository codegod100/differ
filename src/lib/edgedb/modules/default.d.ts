// GENERATED by @edgedb/generate v0.3.3

import * as $ from "../reflection";
import * as _ from "../imports";
import type * as _std from "./std";
export declare type $SubnodeλShape = $.typeutil.flatten<_std.$Object_6b06be9b27fe11ee83ff159af7e1bb81λShape & {
  "body": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "user": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "title": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "links_to": $.PropertyDesc<_std.$str, $.Cardinality.Many, false, false, false, false>;
}>;
declare type $Subnode = $.ObjectType<"default::Subnode", $SubnodeλShape, null, [
  ..._std.$Object_6b06be9b27fe11ee83ff159af7e1bb81['__exclusives__'],
  {user: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },title: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
]>;
declare const $Subnode: $Subnode

declare const Subnode: $.$expr_PathNode<$.TypeSet<$Subnode, $.Cardinality.Many>, null> 



export { $Subnode, Subnode };

declare type __defaultExports = {
  "Subnode": typeof Subnode
};
declare const __defaultExports: __defaultExports;
export default __defaultExports;
