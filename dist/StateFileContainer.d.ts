import { FileManager } from "./FileManager";
import { Typer } from "./Typer";
import { LoadStrategy } from "./strategies/LoadStrategy";
import { ManipulateStrategy } from "./strategies/ManipulateStrategy";
import { RetrieveStrategy } from "./strategies/RetrieveStrategy";
import { SaveStrategy } from "./strategies/SaveStrategy";
import { Meta, SF, Type } from "./types";
export declare class StateFileContainer<DataUnit> {
    meta: Meta;
    unittype: Type;
    cracks_paths: Array<string>;
    cracks_data: Array<Array<DataUnit>>;
    limit: number;
    simul: boolean;
    fileManager: FileManager;
    dirpath: string;
    typer: Typer;
    retriever: RetrieveStrategy<DataUnit>;
    manipulator: ManipulateStrategy<DataUnit>;
    loader: LoadStrategy<DataUnit>;
    saver: SaveStrategy<DataUnit>;
    constructor(fileManager: FileManager, dirpath: string, substate_name: string);
    len(): number;
    setLimit(limit: number): void;
    addMetaAttr(attr: string, value: string): boolean;
    rmvMetaAttr(attr: string): boolean;
    extendUnitType(extension: Type): void;
    orderOf(sfFileName: string): number;
    validateSF(path: string): SF | boolean;
    restruct(obj: DataUnit, type: Type): void;
}
