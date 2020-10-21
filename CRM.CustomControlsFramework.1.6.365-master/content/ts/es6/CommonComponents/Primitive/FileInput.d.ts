import { IPropsBase } from "./ComponentBase";
import { IViewStyle } from "./IViewStyle";
interface IFile {
    content: string;
    encoding: string;
    mimeType: string;
    name: string;
    size: number;
}
interface IFileInputProps extends IPropsBase {
    style?: IViewStyle;
    accept?: string[];
    fileSelected?(file: IFile): void;
    fileUnselected?(): void;
    onReaderError?(errorMessage: string): void;
    multipleFilesSelected?(): void;
}
declare const FileInput: any;
export { IFile, IFileInputProps, FileInput };
