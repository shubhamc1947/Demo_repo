export function getCurrentDate() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    let day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export function getYesterdayDate  () {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    let year = yesterday.getFullYear();
    let month = String(yesterday.getMonth() + 1).padStart(2, '0');
    let day = String(yesterday.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};