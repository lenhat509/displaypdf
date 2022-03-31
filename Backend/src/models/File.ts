import path from 'path';

class File {
    name: string;
    filePath: string;
    parentFolder: Folder;
    extension: string;
    constructor(name: string, filePath: string, parentFolder: Folder)
    {
        this.name = name;
        this.filePath = filePath;
        this.parentFolder = parentFolder;
        this.extension = path.extname(this.name)
    }
}