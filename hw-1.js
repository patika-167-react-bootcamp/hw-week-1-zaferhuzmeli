const folders = [
    {
        id: 5,
        name: 'Klasör 1',
        files: [
            { id: 17, name: 'profil.jpg' },
            { id: 18, name: 'manzara.jpg' },
        ],
    },
    {
        id: 6,
        name: 'Klasör 2',
        files: [
            { id: 21, name: 'foto.png' },
            { id: 22, name: 'dosya.xls' },
        ],
    },
    {
        id: 7,
        name: 'Klasör 3',
    },
]

// move file to files object by id
const moveFile = (id, newFolderId) => {
    const file = findFile(id);
    const folder = findFolder(newFolderId);
    if (file && folder) {
        const index = file.files.findIndex(file => file.id === id)
        // if folder.files is null, then create new array
        folder.files = folder.files ? folder.files : [];
        folder.files.push(file.files[index]);
        file.files.splice(index, 1);
        console.log('File moved');
        console.log(folders);
    } else {
        console.log('Not found');
    }
}

// copy file to files object by id
const copyFile = (id, newFolderId) => {
    const file = findFile(id);
    const folder = findFolder(newFolderId);
    if (file && folder) {
        const index = file.files.findIndex(file => file.id === id)
        // if folder.files is null, then create new array
        folder.files = folder.files ? folder.files : [];
        folder.files.push(file.files[index]);
        console.log('File copied');
        console.log(folders);
    } else {
        console.log('Not found');
    }
}

const parentFolderOf = (id) => {
    const file = folders.find(folder => {
        return folder.files.find(file => file.id === id)
    })
    return !file ? console.log(file) : console.log('Not found');
}


const removeFile = (id) => {
    const file = folders.find(folder => {
        return folder.files.find(file => file.id === id)
    });
    if (file) {
        const index = file.files.findIndex(file => file.id === id)
        file.files.splice(index, 1);
        console.log('File removed');
        console.log(folders);
    } else {
        console.log('Not found');
    }
}

const removeFolder = (id) => {
    const folder = findFolder(id);
    if (folder) {
        const index = folders.findIndex(folder => folder.id === id)
        folders.splice(index, 1);
        console.log('Folder removed');
        console.log(folders);
    } else {
        console.log('Not found');
    }
}

const findFile = function (id) {
    return folders.find(folder => folder.files.find(file => file.id === id));
}

const findFolder = function (id) {
    return folders.find(folder => folder.id === id)
}


console.log(folders);

moveFile(17, 7);

console.log(folders);