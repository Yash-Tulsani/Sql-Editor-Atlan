export const mergeObject = (obj) => {
    let result = '';
    if (Array.isArray(obj)) {
        result = obj.join(' ');
    }
    else if(typeof obj === 'object'){
        result = Object.values(obj).filter(val=>val!==null).join(' ');
    }
    else{
        result = obj;
    }
    return result;
}

export const camelCaseToSentenceCase = (str) => {
    return str
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, function (str) {
            return str.toUpperCase();
        });
}

export const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}