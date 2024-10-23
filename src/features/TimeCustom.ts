export class TimeCustom {
    static integer2TimeString(n) {
        let integerPart = Math.trunc(n);

        let day;
        let hours;
        let minutes;

        if (integerPart > 23) {
            day = Math.trunc(integerPart/24);
            hours = integerPart - (day * 24);
            minutes = (n - (day * 24) - hours) * 60
        } else {
            day = 0;
            hours = integerPart;
            minutes = (n - hours) * 60
        }

        return `${day > 0 ? `${day}d` : ''}${hours}h${Math.trunc(minutes)}min`
    }

    static getCurrentYear() {
        return new Date().getFullYear();
    }

    static getCurrentMonth() {
        return (new Date().getMonth()) + 1;
    }    
}