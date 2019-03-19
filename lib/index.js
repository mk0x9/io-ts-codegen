"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringType = {
    kind: 'StringType',
    name: 'string'
};
exports.numberType = {
    kind: 'NumberType',
    name: 'number'
};
/**
 * @deprecated
 */
// tslint:disable-next-line: deprecation
exports.integerType = {
    kind: 'IntegerType',
    name: 'Integer'
};
exports.intType = {
    kind: 'IntType',
    name: 'Int'
};
exports.booleanType = {
    kind: 'BooleanType',
    name: 'boolean'
};
exports.nullType = {
    kind: 'NullType',
    name: 'null'
};
exports.undefinedType = {
    kind: 'UndefinedType',
    name: 'undefined'
};
exports.unknownType = {
    kind: 'UnknownType',
    name: 'unknown'
};
exports.unknownArrayType = {
    kind: 'AnyArrayType',
    name: 'UnknownArray'
};
exports.unknownRecordType = {
    kind: 'AnyDictionaryType',
    name: 'UnknownRecord'
};
exports.functionType = {
    kind: 'FunctionType',
    name: 'Function'
};
function identifier(name) {
    return {
        kind: 'Identifier',
        name: name
    };
}
exports.identifier = identifier;
function property(key, type, isOptional, description) {
    if (isOptional === void 0) { isOptional = false; }
    return {
        kind: 'Property',
        key: key,
        type: type,
        isOptional: isOptional,
        description: description
    };
}
exports.property = property;
function literalCombinator(value, name) {
    return {
        kind: 'LiteralCombinator',
        value: value,
        name: name
    };
}
exports.literalCombinator = literalCombinator;
function partialCombinator(properties, name) {
    return {
        kind: 'PartialCombinator',
        properties: properties,
        name: name
    };
}
exports.partialCombinator = partialCombinator;
function typeCombinator(properties, name) {
    return {
        kind: 'InterfaceCombinator',
        properties: properties,
        name: name
    };
}
exports.typeCombinator = typeCombinator;
function brandCombinator(type, predicate, name) {
    return {
        kind: 'BrandCombinator',
        type: type,
        predicate: predicate,
        name: name
    };
}
exports.brandCombinator = brandCombinator;
/**
 * Use `typeCombinator` instead
 * @deprecated
 */
exports.interfaceCombinator = typeCombinator;
function unionCombinator(types, name) {
    return {
        kind: 'UnionCombinator',
        types: types,
        name: name
    };
}
exports.unionCombinator = unionCombinator;
function taggedUnionCombinator(tag, types, name) {
    return {
        kind: 'TaggedUnionCombinator',
        tag: tag,
        types: types,
        name: name
    };
}
exports.taggedUnionCombinator = taggedUnionCombinator;
function intersectionCombinator(types, name) {
    return {
        kind: 'IntersectionCombinator',
        types: types,
        name: name
    };
}
exports.intersectionCombinator = intersectionCombinator;
function keyofCombinator(values, name) {
    return {
        kind: 'KeyofCombinator',
        values: values,
        name: name
    };
}
exports.keyofCombinator = keyofCombinator;
function arrayCombinator(type, name) {
    return {
        kind: 'ArrayCombinator',
        type: type,
        name: name
    };
}
exports.arrayCombinator = arrayCombinator;
function readonlyArrayCombinator(type, name) {
    return {
        kind: 'ReadonlyArrayCombinator',
        type: type,
        name: name
    };
}
exports.readonlyArrayCombinator = readonlyArrayCombinator;
function tupleCombinator(types, name) {
    return {
        kind: 'TupleCombinator',
        types: types,
        name: name
    };
}
exports.tupleCombinator = tupleCombinator;
function recursiveCombinator(typeParameter, name, type) {
    return {
        kind: 'RecursiveCombinator',
        typeParameter: typeParameter,
        name: name,
        type: type
    };
}
exports.recursiveCombinator = recursiveCombinator;
function recordCombinator(domain, codomain, name) {
    return {
        kind: 'DictionaryCombinator',
        domain: domain,
        codomain: codomain,
        name: name
    };
}
exports.recordCombinator = recordCombinator;
/**
 * Use `recordCombinator` instead
 * @deprecated
 */
exports.dictionaryCombinator = recordCombinator;
function typeDeclaration(name, type, isExported, 
/** @deprecated */
isReadonly) {
    if (isExported === void 0) { isExported = false; }
    if (isReadonly === void 0) { isReadonly = false; }
    return {
        kind: 'TypeDeclaration',
        name: name,
        type: type,
        isExported: isExported,
        isReadonly: isReadonly
    };
}
exports.typeDeclaration = typeDeclaration;
function customTypeDeclaration(name, staticRepr, runtimeRepr, dependencies) {
    if (dependencies === void 0) { dependencies = []; }
    return {
        kind: 'CustomTypeDeclaration',
        name: name,
        static: staticRepr,
        runtime: runtimeRepr,
        dependencies: dependencies
    };
}
exports.customTypeDeclaration = customTypeDeclaration;
function customCombinator(staticRepr, runtimeRepr, dependencies) {
    if (dependencies === void 0) { dependencies = []; }
    return {
        kind: 'CustomCombinator',
        static: staticRepr,
        runtime: runtimeRepr,
        dependencies: dependencies
    };
}
exports.customCombinator = customCombinator;
function exactCombinator(type, name) {
    return {
        kind: 'ExactCombinator',
        type: type,
        name: name
    };
}
exports.exactCombinator = exactCombinator;
function strictCombinator(properties, name) {
    return {
        kind: 'StrictCombinator',
        properties: properties,
        name: name
    };
}
exports.strictCombinator = strictCombinator;
function readonlyCombinator(type, name) {
    return {
        kind: 'ReadonlyCombinator',
        type: type,
        name: name
    };
}
exports.readonlyCombinator = readonlyCombinator;
var Vertex = /** @class */ (function () {
    function Vertex(id) {
        this.id = id;
        this.afters = [];
    }
    return Vertex;
}());
exports.Vertex = Vertex;
/** topological sort */
function tsort(graph) {
    var sorted = [];
    var visited = {};
    var recursive = {};
    Object.keys(graph).forEach(function visit(id, ancestors) {
        if (visited[id]) {
            return;
        }
        if (!graph.hasOwnProperty(id)) {
            return;
        }
        var vertex = graph[id];
        if (!Array.isArray(ancestors)) {
            ancestors = [];
        }
        ancestors.push(id);
        visited[id] = true;
        vertex.afters.forEach(function (afterId) {
            if (ancestors.indexOf(afterId) >= 0) {
                recursive[id] = true;
                recursive[afterId] = true;
            }
            else {
                visit(afterId, ancestors.slice());
            }
        });
        sorted.unshift(id);
    });
    return {
        sorted: sorted.filter(function (id) { return !recursive.hasOwnProperty(id); }),
        recursive: recursive
    };
}
exports.tsort = tsort;
function getTypeDeclarationMap(declarations) {
    var map = {};
    declarations.forEach(function (d) {
        map[d.name] = d;
    });
    return map;
}
exports.getTypeDeclarationMap = getTypeDeclarationMap;
var flatten = function (aas) {
    var r = [];
    aas.forEach(function (as) {
        r.push.apply(r, as);
    });
    return r;
};
exports.getNodeDependencies = function (node) {
    switch (node.kind) {
        case 'Identifier':
            return [node.name];
        case 'InterfaceCombinator':
        case 'StrictCombinator':
        case 'PartialCombinator':
            return flatten(node.properties.map(function (p) { return exports.getNodeDependencies(p.type); }));
        case 'TaggedUnionCombinator':
        case 'UnionCombinator':
        case 'IntersectionCombinator':
        case 'TupleCombinator':
            return flatten(node.types.map(function (type) { return exports.getNodeDependencies(type); }));
        case 'DictionaryCombinator':
            return exports.getNodeDependencies(node.domain).concat(exports.getNodeDependencies(node.codomain));
        case 'ArrayCombinator':
        case 'ReadonlyArrayCombinator':
        case 'TypeDeclaration':
        case 'RecursiveCombinator':
        case 'ExactCombinator':
        case 'ReadonlyCombinator':
        case 'BrandCombinator':
            return exports.getNodeDependencies(node.type);
        case 'CustomTypeDeclaration':
        case 'CustomCombinator':
            return node.dependencies;
        case 'StringType':
        case 'NumberType':
        case 'BooleanType':
        case 'NullType':
        case 'UndefinedType':
        case 'IntegerType':
        case 'IntType':
        case 'AnyArrayType':
        case 'AnyDictionaryType':
        case 'FunctionType':
        case 'LiteralCombinator':
        case 'KeyofCombinator':
        case 'UnknownType':
            return [];
    }
};
function getTypeDeclarationGraph(declarations) {
    var graph = {};
    declarations.forEach(function (d) {
        var _a;
        var vertex = (graph[d.name] = new Vertex(d.name));
        (_a = vertex.afters).push.apply(_a, exports.getNodeDependencies(d));
    });
    return graph;
}
exports.getTypeDeclarationGraph = getTypeDeclarationGraph;
function indent(n) {
    var s = '';
    for (var i = 0; i < n; i++) {
        s += '  ';
    }
    return s;
}
function escapeString(s) {
    return "'" + s.replace(/'/g, "\\'") + "'";
}
function isValidPropertyKey(s) {
    return /[-\/\s\.\[\]]/.exec(s) === null;
}
function addRuntimeName(s, name) {
    if (name) {
        return s + ', ' + escapeString(name);
    }
    return s;
}
function escapePropertyKey(key) {
    return isValidPropertyKey(key) ? key : escapeString(key);
}
function printRuntimeLiteralCombinator(literalCombinator) {
    var value = typeof literalCombinator.value === 'string' ? escapeString(literalCombinator.value) : literalCombinator.value;
    var s = "t.literal(" + value;
    s = addRuntimeName(s, literalCombinator.name);
    s += ')';
    return s;
}
function printDescription(description, i) {
    if (description) {
        return indent(i) + "/** " + description + " */\n";
    }
    return '';
}
function printRuntimeProperty(p, i) {
    return "" + printDescription(p.description, i) + indent(i) + escapePropertyKey(p.key) + ": " + printRuntime(p.type, i);
}
function printRuntimeInterfaceCombinator(ic, i) {
    var requiredProperties = [];
    var optionalProperties = [];
    ic.properties.forEach(function (p) { return (p.isOptional ? optionalProperties.push(p) : requiredProperties.push(p)); });
    if (requiredProperties.length > 0 && optionalProperties.length > 0) {
        return printRuntimeIntersectionCombinator(intersectionCombinator([typeCombinator(requiredProperties), partialCombinator(optionalProperties)], ic.name), i);
    }
    if (optionalProperties.length > 0) {
        return printRuntimePartialCombinator(partialCombinator(optionalProperties, ic.name), i);
    }
    var s = 't.type({\n';
    s += ic.properties.map(function (p) { return printRuntimeProperty(p, i + 1); }).join(',\n');
    s += "\n" + indent(i) + "}";
    s = addRuntimeName(s, ic.name);
    s += ')';
    return s;
}
function printRuntimePartialCombinator(partialCombinator, i) {
    var s = 't.partial({\n';
    s += partialCombinator.properties.map(function (p) { return printRuntimeProperty(__assign({}, p, { isOptional: false }), i + 1); }).join(',\n');
    s += "\n" + indent(i) + "}";
    s = addRuntimeName(s, partialCombinator.name);
    s += ')';
    return s;
}
function printRuntimeTypesCombinator(combinatorKind, types, combinatorName, i) {
    var indentation = indent(i + 1);
    var s = "t." + combinatorKind + "([\n";
    s += types.map(function (t) { return "" + indentation + printRuntime(t, i + 1); }).join(',\n');
    s += "\n" + indent(i) + "]";
    s = addRuntimeName(s, combinatorName);
    s += ')';
    return s;
}
function printRuntimeUnionCombinator(c, i) {
    return printRuntimeTypesCombinator('union', c.types, c.name, i);
}
function printRuntimeTaggedUnionCombinator(c, i) {
    var indentation = indent(i + 1);
    var s = "t.taggedUnion(" + escapeString(c.tag) + ", [\n";
    s += c.types.map(function (t) { return "" + indentation + printRuntime(t, i + 1); }).join(',\n');
    s += "\n" + indent(i) + "]";
    s = addRuntimeName(s, c.name);
    s += ')';
    return s;
}
function printRuntimeIntersectionCombinator(c, i) {
    return printRuntimeTypesCombinator('intersection', c.types, c.name, i);
}
function printRuntimeKeyofCombinator(c, i) {
    var indentation = indent(i + 1);
    var s = "t.keyof({\n";
    s += c.values.map(function (v) { return "" + indentation + escapePropertyKey(v) + ": null"; }).join(',\n');
    s += "\n" + indent(i) + "}";
    s = addRuntimeName(s, c.name);
    s += ')';
    return s;
}
function printRuntimeArrayCombinator(c, i) {
    var s = "t.array(" + printRuntime(c.type, i);
    s = addRuntimeName(s, c.name);
    s += ')';
    return s;
}
function printRuntimeExactCombinator(c, i) {
    var s = "t.exact(" + printRuntime(c.type, i);
    s = addRuntimeName(s, c.name);
    s += ')';
    return s;
}
function printRuntimeStrictCombinator(strictCombinator, i) {
    var s = 't.strict({\n';
    s += strictCombinator.properties.map(function (p) { return printRuntimeProperty(p, i + 1); }).join(',\n');
    s += "\n" + indent(i) + "}";
    s = addRuntimeName(s, strictCombinator.name);
    s += ')';
    return s;
}
function printRuntimeReadonlyCombinator(rc, i) {
    var s = "t.readonly(" + printRuntime(rc.type, i);
    s = addRuntimeName(s, rc.name);
    s += ')';
    return s;
}
function printRuntimeBrandCombinator(bc, i) {
    var s = "t.brand(" + printRuntime(bc.type, i) + ", (x): x is t.Branded<" + printStatic(bc.type, i) + ", " + bc.name + "Brand> => " + bc.predicate('x') + ", " + escapeString(bc.name) + ")";
    s += "\ninterface " + bc.name + "Brand {\n  readonly " + bc.name + ": unique symbol\n}";
    return s;
}
function printRuntimeReadonlyArrayCombinator(c, i) {
    var s = "t.readonlyArray(" + printRuntime(c.type, i);
    s = addRuntimeName(s, c.name);
    s += ')';
    return s;
}
function printRuntimeTupleCombinator(c, i) {
    return printRuntimeTypesCombinator('tuple', c.types, c.name, i);
}
function printRuntimeTypeDeclaration(declaration, i) {
    var type = declaration.type;
    var name = declaration.name;
    var s = printRuntime(type, i);
    if (declaration.isReadonly) {
        s = "t.readonly(" + s + ", " + escapeString(name) + ")";
    }
    if (type.kind === 'RecursiveCombinator') {
        s = "const " + name + ": t.RecursiveType<t.Type<" + name + ">> = " + s;
    }
    else {
        s = "const " + name + " = " + s;
    }
    if (declaration.isExported) {
        s = "export " + s;
    }
    return s;
}
function printRuntimeRecursiveCombinator(c, i) {
    var s = "t.recursion(" + escapeString(c.name) + ", () => " + printRuntime(c.type, i) + ")";
    return s;
}
function printRuntimeDictionaryCombinator(c, i) {
    var s = "t.record(" + printRuntime(c.domain, i) + ", " + printRuntime(c.codomain, i);
    s = addRuntimeName(s, c.name);
    s += ')';
    return s;
}
function printRuntime(node, i) {
    if (i === void 0) { i = 0; }
    switch (node.kind) {
        case 'Identifier':
            return node.name;
        case 'StringType':
        case 'NumberType':
        case 'BooleanType':
        case 'NullType':
        case 'UndefinedType':
        case 'IntegerType':
        case 'IntType':
        case 'AnyArrayType':
        case 'AnyDictionaryType':
        case 'FunctionType':
        case 'UnknownType':
            return "t." + node.name;
        case 'LiteralCombinator':
            return printRuntimeLiteralCombinator(node);
        case 'InterfaceCombinator':
            return printRuntimeInterfaceCombinator(node, i);
        case 'PartialCombinator':
            return printRuntimePartialCombinator(node, i);
        case 'UnionCombinator':
            return printRuntimeUnionCombinator(node, i);
        case 'TaggedUnionCombinator':
            return printRuntimeTaggedUnionCombinator(node, i);
        case 'IntersectionCombinator':
            return printRuntimeIntersectionCombinator(node, i);
        case 'KeyofCombinator':
            return printRuntimeKeyofCombinator(node, i);
        case 'ArrayCombinator':
            return printRuntimeArrayCombinator(node, i);
        case 'ReadonlyArrayCombinator':
            return printRuntimeReadonlyArrayCombinator(node, i);
        case 'TupleCombinator':
            return printRuntimeTupleCombinator(node, i);
        case 'RecursiveCombinator':
            return printRuntimeRecursiveCombinator(node, i);
        case 'DictionaryCombinator':
            return printRuntimeDictionaryCombinator(node, i);
        case 'TypeDeclaration':
            return printRuntimeTypeDeclaration(node, i);
        case 'CustomTypeDeclaration':
        case 'CustomCombinator':
            return node.runtime;
        case 'ExactCombinator':
            return printRuntimeExactCombinator(node, i);
        case 'StrictCombinator':
            return printRuntimeStrictCombinator(node, i);
        case 'ReadonlyCombinator':
            return printRuntimeReadonlyCombinator(node, i);
        case 'BrandCombinator':
            return printRuntimeBrandCombinator(node, i);
    }
}
exports.printRuntime = printRuntime;
function getRecursiveTypeDeclaration(declaration) {
    var name = declaration.name;
    var recursive = recursiveCombinator(identifier(name), name, declaration.type);
    return typeDeclaration(name, recursive, declaration.isExported, declaration.isReadonly);
}
exports.getRecursiveTypeDeclaration = getRecursiveTypeDeclaration;
function sort(declarations) {
    var graph = getTypeDeclarationGraph(declarations);
    var _a = tsort(graph), sorted = _a.sorted, recursive = _a.recursive;
    var keys = Object.keys(recursive);
    var recursions = [];
    var map = getTypeDeclarationMap(declarations);
    for (var i = 0; i < keys.length; i++) {
        var td = map[keys[i]];
        if (td.kind === 'TypeDeclaration') {
            recursions.push(getRecursiveTypeDeclaration(td));
        }
    }
    return recursions.concat(sorted.reverse().map(function (name) { return map[name]; }));
}
exports.sort = sort;
function printStaticProperty(p, i) {
    var optional = p.isOptional ? '?' : '';
    return "" + printDescription(p.description, i) + indent(i) + escapePropertyKey(p.key) + optional + ": " + printStatic(p.type, i);
}
function printStaticLiteralCombinator(c) {
    return typeof c.value === 'string' ? escapeString(c.value) : String(c.value);
}
function printStaticInterfaceCombinator(c, i) {
    var s = '{\n';
    s += c.properties.map(function (p) { return printStaticProperty(p, i + 1); }).join(',\n');
    s += "\n" + indent(i) + "}";
    return s;
}
function printStaticPartialCombinator(c, i) {
    var s = '{\n';
    s += c.properties.map(function (p) { return printStaticProperty(__assign({}, p, { isOptional: true }), i + 1); }).join(',\n');
    s += "\n" + indent(i) + "}";
    return s;
}
function printStaticTypesCombinator(types, separator, i) {
    var indentation = indent(i + 1);
    return types.map(function (t) { return "\n" + indentation + separator + " " + printStatic(t, i); }).join('');
}
function printStaticUnionCombinator(c, i) {
    return printStaticTypesCombinator(c.types, '|', i);
}
function printStaticTaggedUnionCombinator(c, i) {
    return printStaticTypesCombinator(c.types, '|', i);
}
function printStaticIntersectionCombinator(c, i) {
    return printStaticTypesCombinator(c.types, '&', i);
}
function printStaticKeyofCombinator(c, i) {
    return printStatic(unionCombinator(c.values.map(function (value) { return literalCombinator(value); })), i);
}
function printStaticArrayCombinator(c, i) {
    return "Array<" + printStatic(c.type, i) + ">";
}
function printStaticExactCombinator(c, i) {
    return printStatic(c.type, i);
}
function printStaticStrictCombinator(c, i) {
    var s = '{\n';
    s += c.properties.map(function (p) { return printStaticProperty(p, i + 1); }).join(',\n');
    s += "\n" + indent(i) + "}";
    return s;
}
function printStaticReadonlyCombinator(c, i) {
    return "Readonly<" + printStatic(c.type, i) + ">";
}
function printStaticBrandCombinator(bc, i) {
    return "t.Branded<" + printStatic(bc.type, i) + ", " + bc.name + "Brand>";
}
function printStaticReadonlyArrayCombinator(c, i) {
    return "ReadonlyArray<" + printStatic(c.type, i) + ">";
}
function printStaticDictionaryCombinator(c, i) {
    return "Record<" + printStatic(c.domain, i) + ", " + printStatic(c.codomain, i) + ">";
}
function printStaticTupleCombinator(c, i) {
    var indentation = indent(i + 1);
    var s = '[\n';
    s += c.types.map(function (t) { return "" + indentation + printStatic(t, i); }).join(',\n');
    s += "\n" + indent(i) + "]";
    return s;
}
var useInterface = function (type) {
    return (type.kind === 'InterfaceCombinator' ||
        type.kind === 'PartialCombinator' ||
        type.kind === 'StrictCombinator' ||
        (type.kind === 'RecursiveCombinator' && useInterface(type.type)) ||
        (type.kind === 'ExactCombinator' && useInterface(type.type)));
};
function printStaticTypeDeclaration(declaration, i) {
    var s = printStatic(declaration.type, i);
    if (useInterface(declaration.type) && !declaration.isReadonly) {
        s = "interface " + declaration.name + " " + s;
    }
    else {
        if (declaration.isReadonly) {
            s = "Readonly<" + s + ">";
        }
        s = "type " + declaration.name + " =" + (s.length > 0 && s.substring(0, 1) === '\n' ? s : ' ' + s);
    }
    if (declaration.isExported) {
        s = "export " + s;
    }
    return s;
}
function printStatic(node, i) {
    if (i === void 0) { i = 0; }
    switch (node.kind) {
        case 'Identifier':
            return node.name;
        case 'StringType':
        case 'NumberType':
        case 'BooleanType':
        case 'NullType':
        case 'UndefinedType':
        case 'FunctionType':
        case 'UnknownType':
            return node.name;
        case 'IntType':
            return "t." + node.name;
        case 'IntegerType':
            return 'number';
        case 'AnyArrayType':
            return 'Array<unknown>';
        case 'AnyDictionaryType':
            return 'Record<string, unknown>';
        case 'LiteralCombinator':
            return printStaticLiteralCombinator(node);
        case 'InterfaceCombinator':
            return printStaticInterfaceCombinator(node, i);
        case 'PartialCombinator':
            return printStaticPartialCombinator(node, i);
        case 'UnionCombinator':
            return printStaticUnionCombinator(node, i);
        case 'TaggedUnionCombinator':
            return printStaticTaggedUnionCombinator(node, i);
        case 'IntersectionCombinator':
            return printStaticIntersectionCombinator(node, i);
        case 'KeyofCombinator':
            return printStaticKeyofCombinator(node, i);
        case 'ArrayCombinator':
            return printStaticArrayCombinator(node, i);
        case 'ReadonlyArrayCombinator':
            return printStaticReadonlyArrayCombinator(node, i);
        case 'TupleCombinator':
            return printStaticTupleCombinator(node, i);
        case 'RecursiveCombinator':
            return printStatic(node.type, i);
        case 'DictionaryCombinator':
            return printStaticDictionaryCombinator(node, i);
        case 'TypeDeclaration':
            return printStaticTypeDeclaration(node, i);
        case 'CustomTypeDeclaration':
        case 'CustomCombinator':
            return node.static;
        case 'ExactCombinator':
            return printStaticExactCombinator(node, i);
        case 'StrictCombinator':
            return printStaticStrictCombinator(node, i);
        case 'ReadonlyCombinator':
            return printStaticReadonlyCombinator(node, i);
        case 'BrandCombinator':
            return printStaticBrandCombinator(node, i);
    }
}
exports.printStatic = printStatic;
var closureDefinitionCacheAwaiting;
var closureDefinitionCache = {};
function printClosureCompilerExternTypeDeclaration(context, declaration, i) {
    var s = '/**\n * @typedef {';
    s += printClosureCompilerExtern(context, declaration.type, i);
    s += '}\n */\nvar ' + declaration.name + ';';
    return s;
}
function printClosureCompilerExternInterfaceCombinator(context, c, i) {
    var s = '';
    if (c.properties.length === 0) {
        s += 'Object.<string, *>';
    }
    else {
        // s += '{\n'
        var properties = c.properties.map(function (p) { return printClosureCompilerExternProperty(context, p, i + 1); }).join(',\n');
        s += properties;
        if (i === 0) {
            if (closureDefinitionCacheAwaiting === undefined) {
                // throw new Error(`unexpected behavior: closureDefinitionCacheAwaiting shouldn't be empty`);
            }
            else {
                closureDefinitionCache[closureDefinitionCacheAwaiting] = properties;
                closureDefinitionCacheAwaiting = undefined;
            }
        }
        // s += `\n * ${indent(i)}}`
    }
    return s;
}
function printClosureCompilerExternProperty(context, p, i) {
    var s = " * " + indent(i) + p.key + ": ";
    if (p.type.kind !== 'UndefinedType' && p.isOptional === true) {
        s += "(" + printClosureCompilerExtern(context, p.type, i) + "|undefined)";
    }
    else {
        s += printClosureCompilerExtern(context, p.type, i);
    }
    return s;
}
function printClosureCompilerExternUnionCombinator(context, c, i) {
    return printClosureCompilerExternTypesCombinator(context, c.types, '|', i);
}
function printClosureCompilerExternTypesCombinator(context, types, separator, i) {
    return types
        .map(function (t) { return "" + separator + printClosureCompilerExtern(context, t, i); })
        .join('')
        .slice(separator.length);
}
function printClosureCompilerExternLiteralCombinator(c) {
    switch (typeof c.value) {
        case 'string':
            return 'string';
        case 'number':
            return 'number';
        case 'boolean':
            return 'boolean';
        default:
            throw new Error("printClosureCompilerExternLiteralCombinator: unexpected type \"" + typeof c.value + "\"");
    }
}
function printClosureCompilerExternIntersectionCombinator(context, c, i) {
    var s = '';
    // let s = '{\n'
    s += c.types
        .map(function (type) {
        if (type.kind === 'Identifier') {
            var res = context.filter(function (node) {
                if ('name' in node) {
                    return node.name === type.name;
                }
                return false;
            });
            debugger;
            if (res.length !== 1) {
                throw new Error('unexpected behavior');
            }
            else {
                var x = res[0];
                if (x === undefined) {
                    throw new Error('unexpected behavior');
                }
                else {
                    if ('type' in x === false) {
                        throw 1;
                    }
                    else if ('type' in x) {
                        if (x.type.kind !== 'InterfaceCombinator') {
                            throw 1;
                        }
                        else {
                            return printClosureCompilerExternInterfaceCombinator(context, x.type, i);
                        }
                    }
                }
            }
        }
        else {
            var x = printClosureCompilerExternTypesCombinator(context, [type], '', i).split('\n');
            if (x.length !== 1 && !(x.length === 3 && x[0] === '{' && x[2] === ' * }')) {
                // set default i as undefined in printClosureCompilerExtern and use it later;
                throw new Error("unexpected behavior: " + JSON.stringify(x, null, 2) + " should have length = 1");
            }
            return x[1];
        }
    })
        .join(',\n');
    // s += '\n * }'
    return s;
}
function printClosureCompilerExternArrayCombinator(context, c, i) {
    return "Array<" + printClosureCompilerExtern(context, c.type, i) + ">";
}
function printClosureCompilerExtern(context, node, i) {
    if (i === void 0) { i = 0; }
    if (i === 0) {
        if (node.kind === 'TypeDeclaration') {
            if (node.type.kind === 'InterfaceCombinator') {
                closureDefinitionCacheAwaiting = node.name;
            }
        }
        //if (closureDefinitionCacheAwaiting !== undefined) {
        // throw new Error('unexpected behaviour, closureDefinitionCacheAwaiting should be empty');
        //} else {
        //    closureDefinitionCacheAwaiting = node.name;
        //}
        //} else {
        //    closureDefinitionCacheAwaiting = undefined;
        //}
    }
    /*if ('name' in node) {
          console.log('!!!!!!!!!' + node.name + '!!!!!!!!!!!!!!!!');
          if (node.name === 'GenericAssetObject') {
              debugger;
          }
      }*/
    switch (node.kind) {
        case 'Identifier':
            return node.name;
        case 'StringType':
        case 'NumberType':
        case 'BooleanType':
        case 'NullType':
        case 'UndefinedType':
        case 'FunctionType':
            return node.name;
        case 'UnknownType':
            throw new Error('not implemented');
        case 'IntType':
            return "t." + node.name;
        case 'IntegerType':
            return 'number';
        case 'AnyArrayType':
            return 'Array<unknown>';
        case 'AnyDictionaryType':
            return 'Record<string, unknown>';
        case 'LiteralCombinator':
            return printClosureCompilerExternLiteralCombinator(node);
        case 'InterfaceCombinator':
            return ((i === 0 ? '{\n' : '') +
                printClosureCompilerExternInterfaceCombinator(context, node, i) +
                (i === 0 ? '\n * }' : ''));
        case 'PartialCombinator':
            throw new Error('not implemented');
        case 'UnionCombinator':
            return printClosureCompilerExternUnionCombinator(context, node, i);
        case 'TaggedUnionCombinator':
            throw new Error('not implemented');
        case 'IntersectionCombinator':
            return ((i === 0 ? '{\n' : '') +
                printClosureCompilerExternIntersectionCombinator(context, node, i) +
                (i === 0 ? '\n * }' : ''));
        case 'KeyofCombinator':
            throw new Error('not implemented');
        case 'ArrayCombinator':
            return printClosureCompilerExternArrayCombinator(context, node, i);
        case 'ReadonlyArrayCombinator':
            throw new Error('not implemented');
        case 'TupleCombinator':
            throw new Error('not implemented');
        case 'RecursiveCombinator':
            throw new Error('not implemented');
        case 'DictionaryCombinator':
            throw new Error('not implemented');
        case 'TypeDeclaration':
            return printClosureCompilerExternTypeDeclaration(context, node, i);
        case 'CustomTypeDeclaration':
        case 'CustomCombinator':
            throw new Error('not implemented');
        case 'ExactCombinator':
            throw new Error('not implemented');
        case 'StrictCombinator':
            throw new Error('not implemented');
        case 'ReadonlyCombinator':
            throw new Error('not implemented');
        case 'BrandCombinator':
            throw new Error('not implemented');
    }
}
exports.printClosureCompilerExtern = printClosureCompilerExtern;
//# sourceMappingURL=index.js.map