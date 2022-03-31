import fs from 'fs';

enum FileType {
    File = "file",
    Folder = "folder"
}

const postOrderPrint = (dir: fs.Dir, pathToDir: string, db: any = []): void => {
    while(true)
    {
        const dirent = dir.readSync();
        if(dirent === null)
            break;
        const name = dirent.name;
        const path = pathToDir + "/" + name;
        if(dirent.isFile())
        {
            db.push({ name, type: FileType.File, path});
        }
            
        if(dirent.isDirectory())
        {
            const dir = fs.opendirSync(path);
            const folderStructure = postOrderPrint(dir, path);
            db.push({ name, type: FileType.Folder, path, folderStructure});
        }
    } 
    return db;;
}

export default postOrderPrint;