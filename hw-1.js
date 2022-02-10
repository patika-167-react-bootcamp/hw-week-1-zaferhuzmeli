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

const parentFolderOf = (id) => {
    const file = folders.find(folder => {
        return folder.files.find(file => file.id === id)
    })
    return file ? console.log(`Your parent folder is ${file.name} and id is ${file.id}`) : console.log('Not found');
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
    const folder = folders.find(folder => folder.id === id);
    if (folder) {
        const index = folders.findIndex(folder => folder.id === id)
        folders.splice(index, 1);
        console.log('Folder removed');
        console.log(folders);
    } else {
        console.log('Not found');
    }
}