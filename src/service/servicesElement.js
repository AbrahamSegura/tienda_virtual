export const deleteSpace = elem => elem.replace(/ /g, "")

export function searchElement({elem, search}){
    const sumWithInitial = elem.filter(p => { 
        const lowered = p.toLowerCase()
        return lowered.includes(search)
      })
  return sumWithInitial
}

export function reduceElement({ element = [] }){
    const initialValue = Array(0);
    const reducedElem = element.reduce((acc, elem) => {
      const whitoutSpace = deleteSpace(elem)
      const resp = acc.includes(whitoutSpace) ? acc: acc.concat(whitoutSpace)
      return resp
    },
      initialValue,)
      return reducedElem
}