// GENERATED by @edgedb/generate v0.3.3

import { ExpressionKind, Cardinality } from "edgedb/dist/reflection/index.js";
import { $expressionify } from "./path.mjs";
import { literalToTypeSet } from "./castMaps.mjs";
export function cast(target, expr) {
    const cleanedExpr = expr === null ? null : literalToTypeSet(expr);
    return $expressionify({
        __element__: target.__cardinality__
            ? target.__element__
            : target,
        __cardinality__: cleanedExpr === null ? Cardinality.Empty : cleanedExpr.__cardinality__,
        __expr__: cleanedExpr,
        __kind__: ExpressionKind.Cast,
    });
}
