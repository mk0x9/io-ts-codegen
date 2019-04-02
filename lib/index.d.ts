export interface StringType {
    kind: 'StringType';
    name: 'string';
}
export interface NumberType {
    kind: 'NumberType';
    name: 'number';
}
/**
 * @deprecated
 */
export interface IntegerType {
    kind: 'IntegerType';
    name: 'Integer';
}
export interface IntType {
    kind: 'IntType';
    name: 'Int';
}
export interface BooleanType {
    kind: 'BooleanType';
    name: 'boolean';
}
export interface NullType {
    kind: 'NullType';
    name: 'null';
}
export interface UndefinedType {
    kind: 'UndefinedType';
    name: 'undefined';
}
export interface UnknownType {
    kind: 'UnknownType';
    name: 'unknown';
}
export interface UnknownArrayType {
    kind: 'AnyArrayType';
    name: 'UnknownArray';
}
export interface UnknownRecordType {
    kind: 'AnyDictionaryType';
    name: 'UnknownRecord';
}
export interface FunctionType {
    kind: 'FunctionType';
    name: 'Function';
}
export interface Readonly {
    isReadonly: boolean;
}
export interface Optional {
    isOptional: boolean;
}
export interface Property extends Optional {
    kind: 'Property';
    key: string;
    type: TypeReference;
    description?: string;
}
export interface LiteralCombinator {
    kind: 'LiteralCombinator';
    value: string | number | boolean;
    name?: string;
}
export interface InterfaceCombinator {
    kind: 'InterfaceCombinator';
    properties: Array<Property>;
    name?: string;
}
export interface PartialCombinator {
    kind: 'PartialCombinator';
    properties: Array<Property>;
    name?: string;
}
export interface UnionCombinator {
    kind: 'UnionCombinator';
    types: Array<TypeReference>;
    name?: string;
}
export interface TaggedUnionCombinator {
    kind: 'TaggedUnionCombinator';
    tag: string;
    types: Array<TypeReference>;
    name?: string;
}
export interface IntersectionCombinator {
    kind: 'IntersectionCombinator';
    types: Array<TypeReference>;
    name?: string;
}
export interface KeyofCombinator {
    kind: 'KeyofCombinator';
    values: Array<string>;
    name?: string;
}
export interface ArrayCombinator {
    kind: 'ArrayCombinator';
    type: TypeReference;
    name?: string;
}
export interface ReadonlyArrayCombinator {
    kind: 'ReadonlyArrayCombinator';
    type: TypeReference;
    name?: string;
}
export interface DictionaryCombinator {
    kind: 'DictionaryCombinator';
    domain: TypeReference;
    codomain: TypeReference;
    name?: string;
}
export interface TupleCombinator {
    kind: 'TupleCombinator';
    types: Array<TypeReference>;
    name?: string;
}
export interface RecursiveCombinator {
    kind: 'RecursiveCombinator';
    typeParameter: Identifier;
    name: string;
    type: TypeReference;
}
export interface BrandCombinator {
    kind: 'BrandCombinator';
    type: TypeReference;
    predicate: (variableName: string) => string;
    name: string;
}
export declare type Combinator = InterfaceCombinator | UnionCombinator | LiteralCombinator | IntersectionCombinator | KeyofCombinator | ArrayCombinator | ReadonlyArrayCombinator | TupleCombinator | RecursiveCombinator | DictionaryCombinator | PartialCombinator | TaggedUnionCombinator | CustomCombinator | ExactCombinator | StrictCombinator | ReadonlyCombinator | BrandCombinator;
export interface Identifier {
    kind: 'Identifier';
    name: string;
}
export declare type BasicType = StringType | NumberType | BooleanType | NullType | UndefinedType | IntegerType | IntType | UnknownArrayType | UnknownRecordType | FunctionType | UnknownType;
export declare type TypeReference = BasicType | Combinator | Identifier;
export interface TypeDeclaration extends Readonly {
    kind: 'TypeDeclaration';
    name: string;
    type: TypeReference;
    isExported: boolean;
    description?: string;
}
export interface CustomTypeDeclaration {
    kind: 'CustomTypeDeclaration';
    name: string;
    static: string;
    runtime: string;
    dependencies: Array<string>;
}
export interface CustomCombinator {
    kind: 'CustomCombinator';
    static: string;
    runtime: string;
    dependencies: Array<string>;
}
export interface ExactCombinator {
    kind: 'ExactCombinator';
    type: TypeReference;
    name?: string;
}
export interface StrictCombinator {
    kind: 'StrictCombinator';
    properties: Array<Property>;
    name?: string;
}
export interface ReadonlyCombinator {
    kind: 'ReadonlyCombinator';
    type: TypeReference;
    name?: string;
}
export declare type Node = TypeReference | TypeDeclaration | CustomTypeDeclaration;
export declare const stringType: StringType;
export declare const numberType: NumberType;
/**
 * @deprecated
 */
export declare const integerType: IntegerType;
export declare const intType: IntType;
export declare const booleanType: BooleanType;
export declare const nullType: NullType;
export declare const undefinedType: UndefinedType;
export declare const unknownType: UnknownType;
export declare const unknownArrayType: UnknownArrayType;
export declare const unknownRecordType: UnknownRecordType;
export declare const functionType: FunctionType;
export declare function identifier(name: string): Identifier;
export declare function property(key: string, type: TypeReference, isOptional?: boolean, description?: string): Property;
export declare function literalCombinator(value: string | boolean | number, name?: string): LiteralCombinator;
export declare function partialCombinator(properties: Array<Property>, name?: string): PartialCombinator;
export declare function typeCombinator(properties: Array<Property>, name?: string): InterfaceCombinator;
export declare function brandCombinator(type: TypeReference, predicate: (variableName: string) => string, name: string): BrandCombinator;
/**
 * Use `typeCombinator` instead
 * @deprecated
 */
export declare const interfaceCombinator: typeof typeCombinator;
export declare function unionCombinator(types: Array<TypeReference>, name?: string): UnionCombinator;
export declare function taggedUnionCombinator(tag: string, types: Array<TypeReference>, name?: string): TaggedUnionCombinator;
export declare function intersectionCombinator(types: Array<TypeReference>, name?: string): IntersectionCombinator;
export declare function keyofCombinator(values: Array<string>, name?: string): KeyofCombinator;
export declare function arrayCombinator(type: TypeReference, name?: string): ArrayCombinator;
export declare function readonlyArrayCombinator(type: TypeReference, name?: string): ReadonlyArrayCombinator;
export declare function tupleCombinator(types: Array<TypeReference>, name?: string): TupleCombinator;
export declare function recursiveCombinator(typeParameter: Identifier, name: string, type: TypeReference): RecursiveCombinator;
export declare function recordCombinator(domain: TypeReference, codomain: TypeReference, name?: string): DictionaryCombinator;
/**
 * Use `recordCombinator` instead
 * @deprecated
 */
export declare const dictionaryCombinator: typeof recordCombinator;
export declare function typeDeclaration(name: string, type: TypeReference, isExported?: boolean, 
/** @deprecated */
isReadonly?: boolean, description?: string): TypeDeclaration;
export declare function customTypeDeclaration(name: string, staticRepr: string, runtimeRepr: string, dependencies?: Array<string>): CustomTypeDeclaration;
export declare function customCombinator(staticRepr: string, runtimeRepr: string, dependencies?: Array<string>): CustomCombinator;
export declare function exactCombinator(type: TypeReference, name?: string): ExactCombinator;
export declare function strictCombinator(properties: Array<Property>, name?: string): StrictCombinator;
export declare function readonlyCombinator(type: TypeReference, name?: string): ReadonlyCombinator;
export declare class Vertex {
    id: string;
    afters: Array<string>;
    constructor(id: string);
}
export declare type Graph = {
    [key: string]: Vertex;
};
/** topological sort */
export declare function tsort(graph: Graph): {
    sorted: Array<string>;
    recursive: {
        [key: string]: true;
    };
};
export declare function getTypeDeclarationMap(declarations: Array<TypeDeclaration | CustomTypeDeclaration>): {
    [key: string]: TypeDeclaration | CustomTypeDeclaration;
};
export declare const getNodeDependencies: (node: Node) => string[];
export declare function getTypeDeclarationGraph(declarations: Array<TypeDeclaration | CustomTypeDeclaration>): Graph;
export declare function printRuntime(node: Node, i?: number): string;
export declare function getRecursiveTypeDeclaration(declaration: TypeDeclaration): TypeDeclaration;
export declare function sort(declarations: Array<TypeDeclaration | CustomTypeDeclaration>): Array<TypeDeclaration | CustomTypeDeclaration>;
export declare function printStatic(node: Node, i?: number): string;
export declare function printClosureCompilerExtern(context: Array<Node>, node: Node, i?: number): string;
