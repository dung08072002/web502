export { }
const app = document.querySelector('#app')?.innerHTML;

type Product = {
    id: number, name: string
}

const products: Product[] = [
    { id: 1, name: "proA" },
    { id: 2, name: "proB" },
    { id: 3, name: "proC" },
]

function showProduct<T extends Product[]>(products :T) {
    const result = products.map(item => `
        <h1>${item.name}</h1>
    `)
}