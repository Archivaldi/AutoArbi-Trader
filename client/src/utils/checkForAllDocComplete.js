export const checkForAllDocumentComplete = (buyer, seller) => {
    const allDocs = [...buyer.docs, ...seller.docs]
    return allDocs
        .filter(({ completed }) => (
            completed === true
        )).length === allDocs.length
}