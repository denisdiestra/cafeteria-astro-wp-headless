
export function formatDate(dateSrt: string): string {
    const date = new Date(dateSrt)
    return new Intl.DateTimeFormat('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date)
}

// export function formatAmount(amount: number): string{
//     return new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: 'USD'
//     }).format(amount)
// }

export function formatAmount(amount: number): string {
    return 'S/.. ' + new Intl.NumberFormat('es-PE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

export function nullToEmptyString(arg: unknown){
    return arg ?? ''
}