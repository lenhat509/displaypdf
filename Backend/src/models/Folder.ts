class Folder {
    name: string;
    path: string;
    parentFolder: Folder;
    constructor(name: string, path: string, parentFolder: Folder)
    {
        this.name = name;
        this.path = path;
        this.parentFolder = parentFolder;
    }
}