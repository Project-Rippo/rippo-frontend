const getParent = `query($id:ID!) {
    getParent(id:$id) {
        birthdate
        childsId
        createdAt
        email
        id
        name
        surname
    }
}`;

const getChild =  `query($id:ID!) {
    getChild(id:$id) {
        birthdate
        createdAt
        email
        height
        history {
            asthmaAttack
            chiado
            createdAt
            fluxoAr
            tosse
        }
        id
        name
        parentId
        status {
            asthmaAttack
            chiado
            createdAt
            fluxoAr
            tosse
        }
        surname
        weight
    }
}`;

const listChilds =  `query($parentId:ID!) {
    listChilds(parentId:$parentId) {
        birthdate
        createdAt
        email
        height
        history {
            asthmaAttack
            chiado
            createdAt
            fluxoAr
            tosse
        }
        id
        name
        parentId
        status {
            asthmaAttack
            chiado
            createdAt
            fluxoAr
            tosse
        }
        surname
        weight
    }
}`;

export { getParent, getChild, listChilds };
