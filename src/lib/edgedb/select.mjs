// GENERATED by @edgedb/generate v0.3.3

import { LocalDateTime, LocalDate, LocalTime, Duration, RelativeDuration, ConfigMemory, DateDuration, } from "edgedb";
import { Cardinality, ExpressionKind, TypeKind, OperatorKind, } from "edgedb/dist/reflection/index.js";
import { makeType } from "./hydrate.mjs";
import { cardutil } from "./cardinality.mjs";
import { $assert_single, } from "./path.mjs";
import { $expressionify, $getScopedExpr } from "./path.mjs";
import { $getTypeByName, literal } from "./literal.mjs";
import { spec } from "./__spec__.mjs";
import { literalToTypeSet, } from "./castMaps.mjs";
export const ASC = "ASC";
export const DESC = "DESC";
export const EMPTY_FIRST = "EMPTY FIRST";
export const EMPTY_LAST = "EMPTY LAST";
export function is(expr, shape) {
    const mappedShape = {};
    for (const [key, value] of Object.entries(shape)) {
        if (key === "id")
            continue;
        mappedShape[key] = {
            __kind__: ExpressionKind.PolyShapeElement,
            __polyType__: expr,
            __shapeElement__: value,
        };
    }
    return mappedShape;
}
export function $handleModifiers(modifiers, params) {
    var _b;
    const { root, scope } = params;
    const mods = {
        singleton: !!modifiers["filter_single"],
    };
    let card = root.__cardinality__;
    let needsAssertSingle = false;
    if (modifiers.filter) {
        mods.filter = modifiers.filter;
    }
    if (modifiers.filter_single) {
        if (root.__element__.__kind__ !== TypeKind.object) {
            throw new Error("filter_single can only be used with object types");
        }
        card = Cardinality.AtMostOne;
        const fs = modifiers.filter_single;
        if (fs.__element__) {
            mods.filter = modifiers.filter_single;
            needsAssertSingle = true;
        }
        else {
            const exprs = Object.keys(fs).map((key) => {
                const val = fs[key].__element__
                    ? fs[key]
                    : literal(root.__element__["__pointers__"][key]["target"], fs[key]);
                return $expressionify({
                    __element__: {
                        __name__: "std::bool",
                        __kind__: TypeKind.scalar,
                    },
                    __cardinality__: Cardinality.One,
                    __kind__: ExpressionKind.Operator,
                    __opkind__: OperatorKind.Infix,
                    __name__: "=",
                    __args__: [scope[key], val],
                });
            });
            if (exprs.length === 1) {
                mods.filter = exprs[0];
            }
            else {
                mods.filter = exprs.reduce((a, b) => {
                    return $expressionify({
                        __element__: {
                            __name__: "std::bool",
                            __kind__: TypeKind.scalar,
                        },
                        __cardinality__: Cardinality.One,
                        __kind__: ExpressionKind.Operator,
                        __opkind__: OperatorKind.Infix,
                        __name__: "and",
                        __args__: [a, b],
                    });
                });
            }
        }
    }
    if (modifiers.order_by) {
        const orderExprs = Array.isArray(modifiers.order_by)
            ? modifiers.order_by
            : [modifiers.order_by];
        mods.order_by = orderExprs.map((expr) => typeof expr.__element__ === "undefined"
            ? expr
            : { expression: expr });
    }
    if (modifiers.offset) {
        mods.offset =
            typeof modifiers.offset === "number"
                ? $getTypeByName("std::number")(modifiers.offset)
                : modifiers.offset;
        card = cardutil.overrideLowerBound(card, "Zero");
    }
    if (modifiers.limit) {
        let expr;
        if (typeof modifiers.limit === "number") {
            expr = $getTypeByName("std::number")(modifiers.limit);
        }
        else {
            const type = (_b = modifiers.limit.__element__.__casttype__) !== null && _b !== void 0 ? _b : modifiers.limit.__element__;
            if (type.__kind__ === TypeKind.scalar &&
                type.__name__ === "std::number") {
                expr = modifiers.limit;
            }
            else {
                throw new Error("Invalid value for `limit` modifier");
            }
        }
        mods.limit = expr;
        card = cardutil.overrideLowerBound(card, "Zero");
    }
    return {
        modifiers: mods,
        cardinality: card,
        needsAssertSingle,
    };
}
function deleteExpr(expr, modifiersGetter) {
    const selectExpr = select(expr, modifiersGetter);
    return $expressionify({
        __kind__: ExpressionKind.Delete,
        __element__: selectExpr.__element__,
        __cardinality__: selectExpr.__cardinality__,
        __expr__: selectExpr,
    });
}
export { deleteExpr as delete };
export function $selectify(expr) {
    return expr;
}
const $FreeObject = makeType(spec, [...spec.values()].find((s) => s.name === "std::FreeObject").id, literal);
const FreeObject = {
    __kind__: ExpressionKind.PathNode,
    __element__: $FreeObject,
    __cardinality__: Cardinality.One,
    __parent__: null,
    __exclusive__: true,
    __scopeRoot__: null,
};
export const $existingScopes = new Set();
function $shape(_a, b) {
    return b;
}
export { $shape as shape };
export function select(...args) {
    const firstArg = args[0];
    if (typeof firstArg !== "object" ||
        firstArg instanceof Uint8Array ||
        firstArg instanceof Date ||
        firstArg instanceof Duration ||
        firstArg instanceof LocalDateTime ||
        firstArg instanceof LocalDate ||
        firstArg instanceof LocalTime ||
        firstArg instanceof RelativeDuration ||
        firstArg instanceof DateDuration ||
        firstArg instanceof ConfigMemory ||
        firstArg instanceof Float32Array) {
        const literalExpr = literalToTypeSet(firstArg);
        return $expressionify($selectify({
            __kind__: ExpressionKind.Select,
            __element__: literalExpr.__element__,
            __cardinality__: literalExpr.__cardinality__,
            __expr__: literalExpr,
            __modifiers__: {},
        }));
    }
    const exprPair = typeof args[0].__element__ !== "undefined"
        ? args
        : [FreeObject, () => args[0]];
    let expr = exprPair[0];
    const shapeGetter = exprPair[1];
    if (expr === FreeObject) {
        const freeObjectPtrs = {};
        for (const [k, v] of Object.entries(args[0])) {
            freeObjectPtrs[k] = {
                __kind__: v.__element__.__kind__ === TypeKind.object ? "link" : "property",
                target: v.__element__,
                cardinality: v.__cardinality__,
                exclusive: false,
                computed: true,
                readonly: true,
                hasDefault: false,
                properties: {},
            };
        }
        expr = {
            ...FreeObject,
            __element__: {
                ...FreeObject.__element__,
                __pointers__: {
                    ...FreeObject.__element__.__pointers__,
                    ...freeObjectPtrs,
                },
            },
        };
    }
    if (!shapeGetter) {
        if (expr.__element__.__kind__ === TypeKind.object) {
            const objectExpr = expr;
            return $expressionify($selectify({
                __kind__: ExpressionKind.Select,
                __element__: {
                    __kind__: TypeKind.object,
                    __name__: `${objectExpr.__element__.__name__}`,
                    __pointers__: objectExpr.__element__.__pointers__,
                    __shape__: objectExpr.__element__.__shape__,
                },
                __cardinality__: objectExpr.__cardinality__,
                __expr__: objectExpr,
                __modifiers__: {},
            }));
        }
        else {
            return $expressionify($selectify({
                __kind__: ExpressionKind.Select,
                __element__: expr.__element__,
                __cardinality__: expr.__cardinality__,
                __expr__: expr,
                __modifiers__: {},
            }));
        }
    }
    const cleanScopedExprs = $existingScopes.size === 0;
    const { modifiers: mods, shape, scope } = resolveShape(shapeGetter, expr);
    if (cleanScopedExprs) {
        $existingScopes.clear();
    }
    const { modifiers, cardinality, needsAssertSingle } = $handleModifiers(mods, {
        root: expr,
        scope,
    });
    const selectExpr = $selectify({
        __kind__: ExpressionKind.Select,
        __element__: expr.__element__.__kind__ === TypeKind.object
            ? {
                __kind__: TypeKind.object,
                __name__: `${expr.__element__.__name__}`,
                __pointers__: expr.__element__.__pointers__,
                __shape__: shape,
            }
            : expr.__element__,
        __cardinality__: cardinality,
        __expr__: expr,
        __modifiers__: modifiers,
        __scope__: expr !== scope ? scope : undefined,
    });
    return needsAssertSingle
        ? $assert_single(selectExpr)
        : $expressionify(selectExpr);
}
function resolveShape(shapeGetter, expr) {
    const modifiers = {};
    const shape = {};
    const scope = expr.__element__.__kind__ === TypeKind.object
        ? $getScopedExpr(expr, $existingScopes)
        : expr;
    const selectShape = typeof shapeGetter === "function" ? shapeGetter(scope) : shapeGetter;
    for (const [key, value] of Object.entries(selectShape)) {
        if (key === "filter" ||
            key === "filter_single" ||
            key === "order_by" ||
            key === "offset" ||
            key === "limit") {
            modifiers[key] = value;
        }
        else {
            if (expr.__element__.__kind__ !== TypeKind.object) {
                throw new Error(`Invalid select shape key '${key}' on scalar expression, ` +
                    `only modifiers are allowed (filter, order_by, offset and limit)`);
            }
            shape[key] = resolveShapeElement(key, value, scope);
        }
    }
    return { shape, modifiers, scope };
}
export function resolveShapeElement(key, value, scope) {
    var _b, _c, _d, _e, _f;
    const isSubshape = typeof value === "object" && typeof value.__kind__ === "undefined";
    const isClosure = typeof value === "function" &&
        ((_b = scope.__element__.__pointers__[key]) === null || _b === void 0 ? void 0 : _b.__kind__) === "link";
    if (isSubshape || isClosure) {
        const childExpr = scope[key];
        if (!childExpr) {
            throw new Error(`Invalid shape element "${key}" for type ${scope.__element__.__name__}`);
        }
        const { shape: childShape, scope: childScope, modifiers: mods, } = resolveShape(value, childExpr);
        const { modifiers, needsAssertSingle } = $handleModifiers(mods, {
            root: childExpr,
            scope: childScope,
        });
        const selectExpr = {
            __kind__: ExpressionKind.Select,
            __element__: {
                __kind__: TypeKind.object,
                __name__: `${childExpr.__element__.__name__}`,
                __pointers__: childExpr.__element__.__pointers__,
                __shape__: childShape,
            },
            __cardinality__: ((_d = (_c = scope.__element__.__pointers__) === null || _c === void 0 ? void 0 : _c[key]) === null || _d === void 0 ? void 0 : _d.cardinality) ||
                ((_f = (_e = scope.__element__.__shape__) === null || _e === void 0 ? void 0 : _e[key]) === null || _f === void 0 ? void 0 : _f.__cardinality__),
            __expr__: childExpr,
            __modifiers__: modifiers,
            __scope__: childExpr !== childScope ? childScope : undefined,
        };
        return needsAssertSingle ? $assert_single(selectExpr) : selectExpr;
    }
    else if ((value === null || value === void 0 ? void 0 : value.__kind__) === ExpressionKind.PolyShapeElement) {
        const polyElement = value;
        const polyScope = scope.is(polyElement.__polyType__);
        return {
            __kind__: ExpressionKind.PolyShapeElement,
            __polyType__: polyScope,
            __shapeElement__: resolveShapeElement(key, polyElement.__shapeElement__, polyScope),
        };
    }
    else if (typeof value === "boolean" && key.startsWith("@")) {
        const linkProp = scope[key];
        if (!linkProp) {
            throw new Error(scope.__parent__
                ? `link property '${key}' does not exist on link ${scope.__parent__.linkName}`
                : `cannot select link property '${key}' on an object (${scope.__element__.__name__})`);
        }
        return value ? linkProp : false;
    }
    else {
        return value;
    }
}